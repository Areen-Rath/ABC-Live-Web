export interface NewsItem {
  title: string;
  link: string;
  desc: string;
  source: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export default async function fetchData() {
    let newsList: NewsItem[] = [];
    let statsList: StatItem[] = [];

    await fetch("https://abc-live-web-api.vercel.app/")
        .then(res => res.json())
        .then(resJSON => {
            newsList = Array.isArray(resJSON.news) ? resJSON.news : [];
            const rawStats = Array.isArray(resJSON.stats) ? resJSON.stats : [];

            statsList =
            rawStats[0] && rawStats[1]
                ? rawStats[0].map((label: string, index: number) => ({
                    label,
                    value: rawStats[1][index] ?? "",
                }))
                : [];
        })
        .catch(() => {
            newsList = [];
            statsList = [];
        });

    return { news: newsList, stats: statsList }
}