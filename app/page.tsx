import Header from "@/sections/Header";
import News from "@/sections/News";
import Stats from "@/sections/Stats";
import { Button } from "@/components/ui/button";
import fetchData from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { news, stats } = await fetchData();

  return (
    <div className="p-5">
      <Header />
      <section className="grid grid-cols-[minmax(0,1fr)_auto] items-start pt-2.5 pb-2.5">
        <span className="text-[clamp(24px,3vw,48px)] font-bold">
          Current Rates
        </span>
        <section className="flex-row place-self-center">
          <a href="https://sbi.bank.in/" target="_blank" rel="noopener noreferrer">
            <Button className="text-xl w-15 h-12 mr-1 font-bold">SBI</Button>
          </a>
          <a href="https://rbi.org.in/" target="_blank" rel="noopener noreferrer">
            <Button className="text-xl w-15 h-12 ml-1 mr-1 font-bold">RBI</Button>
          </a>
          <a href="https://irdai.gov.in/" target="_blank" rel="noopener noreferrer">
            <Button className="text-xl w-15 h-12 ml-1 font-bold">IRDAI</Button>
          </a>
        </section>
      </section>
      <Stats stats={stats} />
      <section className="grid grid-cols-[minmax(0,1fr)_auto] items-start pt-2.5 pb-2.5">
        <span className="block text-[clamp(24px,3vw,48px)] font-bold">
          Latest BFSI News
        </span>
      </section>
      <News newsList={news} />
      <section className="pt-2.5 border-t-2 border-t-gray-400">
        <span className="text-gray-600 dark:text-gray-400 text-sm font-bold">
          News links open the original publishers. Headlines are refreshed from public feeds and are for information only, not investment advice.
        </span>
      </section>
    </div>
  );
}
