import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { RateItem } from "@/lib/data";

export default function Stats({ stats }: { stats: RateItem[] }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                stats.map((stat: RateItem) => {
                    return (
                        <Card key={stat.label} className="group flex flex-col border rounded-lg bg-background overflow-hidden">
                            <CardHeader>
                                <CardTitle className="font-bold text-2xl">
                                    {stat.value}
                                </CardTitle>
                                <CardDescription>
                                    {stat.label}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    );
                })
            }
        </section>
    );
}