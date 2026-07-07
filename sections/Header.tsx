import Image from "next/image";
import {
  Card,
  CardTitle
} from "@/components/ui/card";

export default function Header() {
    const date = new Date().toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    return (
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start pb-2.5 border-b-2 border-b-gray-400">
            <section className="inline-flex w-fit gap-3 items-center">
                <Image
                    src="/favicon.ico"
                    alt="ABC Live Logo"
                    width={75}
                    height={75}
                    className="rounded-lg"
                />
                <section className="place-self-center">
                    <strong className="block text-[clamp(28px,4vw,52px)] text-black">
                        ABC Live
                    </strong>
                    <span className="block text-gray-600 text-sm font-bold">
                        Amit Kumar Rath
                    </span>
                </section>
            </section>
            <Card className="self-center">
                <CardTitle className="p-2 font-bold">{date}</CardTitle>
            </Card>
        </header>
    );
}