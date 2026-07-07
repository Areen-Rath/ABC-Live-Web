import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function News({ newsList, source }: { newsList: object[], source: string }) {
    return newsList.map((news: any) => {
        return (
            <a href={news.link} target="_blank">
                <Card key={`${source} ${newsList.indexOf(news)}`} className="group flex flex-col h-125 border rounded-lg bg-background overflow-hidden">
                    <CardHeader>
                        <CardDescription>
                            Source: {source}
                        </CardDescription>
                        <CardTitle className="mt-2 mb-2 ml-0 mr-0 font-bold text-2xl group-hover:text-blue-800 group-hover:underline">
                            {news.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {news.desc}
                    </CardContent>
                    <CardContent className="mt-auto font-bold text-teal-800">
                        Read Full Story
                    </CardContent>
                </Card>
            </a>
        );
    });
}