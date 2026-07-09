interface ApiResponse<T> {
  data?: T;
}

export interface NewsItem {
  title: string;
  link: string;
  desc: string;
}

export interface RateItem {
  label: string;
  value: string;
}

export default async function fetchData() {
    try {
        const [resET, resBL, resRBI] = await Promise.all([
            fetch("https://abc-live-web-api.vercel.app/et_bfsi"),
            fetch("https://abc-live-web-api.vercel.app/business_line"),
            fetch("https://abc-live-web-api.vercel.app/rbi"),
        ]);

        const [ET, BL, RBI] = await Promise.all([
            resET.json() as Promise<ApiResponse<NewsItem[]>>,
            resBL.json() as Promise<ApiResponse<NewsItem[]>>,
            resRBI.json() as Promise<ApiResponse<string[][]>>,
        ]);

        const et = Array.isArray(ET.data) ? ET.data : [];
        const bl = Array.isArray(BL.data) ? BL.data : [];
        const rawRates = Array.isArray(RBI.data) ? RBI.data : [];

        const stats: RateItem[] =
        rawRates[0] && rawRates[1]
            ? rawRates[0].map((label, index) => ({
                label,
                value: rawRates[1][index] ?? "",
            }))
            : [];

        return { ET: et, BL: bl, stats };
    } catch {
        return { ET: [] as NewsItem[], BL: [] as NewsItem[], stats: [] as RateItem[] };
    }
}