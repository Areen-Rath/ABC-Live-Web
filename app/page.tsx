"use client";

import { useState, useEffect } from "react";
import Header from "@/sections/Header";
import News from "@/sections/News";
import Stats from "@/sections/Stats";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [ET, setET] = useState<object[]>([]);
  const [BL, setBL] = useState<object[]>([]);
  const [stats, setStats] = useState<string[][]>([]);

  const fetchAll = async () => {
    const [resET, resBL, resRBI]: string[][][] = await Promise.all([
      fetch("https://abc-live-web-api.vercel.app/et_bfsi").then(res => res.json()).then(resJson => resJson.data),
      fetch("https://abc-live-web-api.vercel.app/business_line").then(res => res.json()).then(resJson => resJson.data),
      fetch("https://abc-live-web-api.vercel.app/rbi").then(res => res.json()).then(resJson => resJson.data)
    ]);

    let rates: string[][] = [];
    for (let i in resRBI[0]) {
      rates.push([resRBI[0][i], resRBI[1][i]])
    }

    setET(resET);
    setBL(resBL);
    setStats(rates);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="p-5">
      <Header />
      <section className="grid grid-cols-[minmax(0,1fr)_auto] items-start pt-2.5 pb-2.5">
        <span className="text-[clamp(24px,3vw,48px)] text-black font-bold">
          Current Rates
        </span>
        <section className="flex-row place-self-center">
          <a href="https://rbi.org.in/" target="_blank">
            <Button className="text-2xl w-15 h-12 mr-1 font-bold">
              RBI
            </Button>
          </a>
          <a href="https://sebi.gov.in/" target="_blank">
            <Button className="text-2xl w-15 h-12 ml-1 mr-1 font-bold">
              SEBI
            </Button>
          </a>
          <a href="https://sbi.bank.in/" target="_blank">
            <Button className="text-2xl w-15 h-12 ml-1 font-bold">
              SBI
            </Button>
          </a>
        </section>
      </section>
      <Stats stats={stats} />
      <section className="grid grid-cols-[minmax(0,1fr)_auto] items-start pb-2.5">
        <span className="block text-[clamp(24px,3vw,48px)] text-black font-bold">
          Latest BFSI News
        </span>
      </section>
      {
        (ET.length > 0 && BL.length > 0)
          ? (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pb-2.5">
              <News newsList={ET} source="Economic Times BFSI" />
              <News newsList={BL} source="Business Line" />
            </section>
          )
          : (
            <section className="pb-3">
              <span>Loading...</span>
            </section>
          )
      }
      <section className="pt-2.5 border-t-2 border-t-gray-400">
        <span className="text-gray-600 text-sm font-bold">
          News links open the original publishers. Headlines are refreshed from public feeds and are for information only, not investment advice.
        </span>
      </section>
    </div>
  );
}
