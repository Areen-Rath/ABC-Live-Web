import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Stats({ stats }: { stats: string[][] }) {
    if (stats.length > 0) {
        return (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    stats.map((stat: string[]) => {
                        return (
                            <Card key={stat[0]} className="group flex flex-col border rounded-lg bg-background overflow-hidden">
                                <CardHeader>
                                    <CardTitle className="font-bold text-2xl">
                                        {stat[1]}
                                    </CardTitle>
                                    <CardDescription>
                                        {stat[0]}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            );
                        })
                    }
            </section>
        );
    } else {
        return <span>Loading...</span>
    }
}