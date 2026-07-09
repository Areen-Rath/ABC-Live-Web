import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { NewsItem } from "@/lib/data";

export default function News({ newsList, source }: { newsList: NewsItem[], source: string }) {
    return newsList.map((news: any) => {
        return (
            <a key={`${source}-${newsList.indexOf(news)}`} href={news.link} target="_blank" rel="noopener noreferrer">
                <Card className="group flex flex-col h-125 border rounded-lg bg-background overflow-hidden">
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