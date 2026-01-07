import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { JOURNAL_ARTICLES } from "@/lib/journal-data";
import { ChevronLeft } from "lucide-react";

export default async function JournalDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const article = JOURNAL_ARTICLES.find((a) => a.id === id);

    if (!article) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 md:px-8 py-12 max-w-3xl">
            {/* Back Link */}
            <div className="mb-8">
                <Link
                    href="/journal"
                    className="inline-flex items-center text-sm text-text-secondary hover:text-green-700 transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    読み物一覧に戻る
                </Link>
            </div>

            <article>
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="text-sm font-sans-jp text-text-secondary tracking-wider">{article.date}</span>
                        <Badge variant="outline">{article.category}</Badge>
                    </div>
                    <h1 className="font-serif-jp text-3xl md:text-4xl text-green-900 leading-relaxed font-bold mb-8">
                        {article.title}
                    </h1>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-soft">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                {/* Content */}
                {/* Note: In a real app, use a safe HTML parser. Here we trust our mock data. */}
                <div
                    className="prose prose-stone max-w-none font-sans-jp prose-headings:font-serif-jp prose-headings:text-green-900 prose-headings:tracking-widest prose-p:leading-[2.2] prose-p:tracking-wider prose-p:mb-8 prose-img:rounded-lg"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

            </article>

            {/* CTA / Next Action */}
            <div className="mt-16 pt-12 border-t border-border-light flex flex-col items-center text-center">
                <p className="font-serif-jp text-lg text-green-900 mb-6">
                    深茶で、心安らぐひとときを。
                </p>
                <Link href="/products">
                    <button className="px-12 py-4 bg-green-700 text-white font-sans-jp tracking-widest hover:bg-green-900 transition-all rounded-[2px] shadow-sm hover:shadow-md">
                        商品を探す
                    </button>
                </Link>
            </div>
        </div>
    );
}
