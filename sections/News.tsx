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
                <Card className="group flex-col h-100 pt-6 border rounded-lg bg-background overflow-hidden object-cover">
                    <CardHeader className="h-25">
                        <CardDescription className="h-5">
                            Source: {source}
                        </CardDescription>
                        <CardTitle className="h-25 ml-0 mr-0 font-bold text-lg group-hover:text-blue-800 group-hover:underline">
                            {news.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-45 pt-5 line-clamp-8">
                        {news.desc}
                    </CardContent>
                    <CardContent className="h-5 mt-2 font-bold text-teal-800">
                        Read Full Story
                    </CardContent>
                </Card>
            </a>
        );
    });
}