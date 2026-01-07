import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { TasteRadarChart } from "@/components/ui/TasteRadarChart";
import { Badge } from "@/components/ui/Badge";
import { CATEGORY_LABELS } from "@/lib/constants";
import { ChevronLeft } from "lucide-react";
import { AddToCartButton } from "@/components/features/AddToCartButton";

export const runtime = "edge";


export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = MOCK_PRODUCTS.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    // Related products (simple mock logic: same category)
    const relatedProducts = MOCK_PRODUCTS.filter(
        (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 4);

    return (
        <div className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
            {/* Breadcrumb / Back */}
            <div className="mb-8">
                <Link
                    href="/products"
                    className="inline-flex items-center text-sm text-text-secondary hover:text-green-700 transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    商品一覧に戻る
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
                {/* Left: Images */}
                <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-sm">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Thumbnails could go here */}
                </div>

                {/* Right: Info */}
                <div className="flex flex-col h-full">
                    <div className="mb-2">
                        <span className="text-sm font-sans-jp text-brown-700 tracking-wider">
                            {CATEGORY_LABELS[product.category]}
                        </span>
                    </div>

                    <h1 className="font-serif-jp text-3xl md:text-4xl text-green-900 mb-6 font-bold">
                        {product.name}
                    </h1>

                    <div className="flex gap-2 mb-8">
                        {product.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>

                    <p className="font-sans-jp text-text-primary leading-loose mb-10 text-lg">
                        {product.description}
                    </p>

                    {/* Taste Chart - Only show if valid taste data exists */}
                    {product.category !== "tool" && (
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-border-light mb-10">
                            <h3 className="font-serif-jp text-lg mb-4 text-center">味覚チャート</h3>
                            <div className="h-[250px] w-full">
                                <TasteRadarChart data={product.taste_profile} />
                            </div>
                        </div>
                    )}

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div className="mb-10">
                            <h3 className="font-serif-jp text-lg mb-4 text-text-secondary">関連商品</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {relatedProducts.map(rp => (
                                    <Link key={rp.id} href={`/products/${rp.id}`} className="group block">
                                        <div className="relative aspect-square rounded overflow-hidden mb-2 bg-gray-100">
                                            <Image src={rp.images[0]} alt={rp.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <p className="text-sm font-serif-jp group-hover:text-green-700 transition-colors truncate">{rp.name}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-auto pt-8 border-t border-border-light space-y-6">
                        <div className="flex items-end justify-between">
                            <span className="font-sans-jp font-bold text-2xl md:text-3xl text-green-900">
                                ¥{product.price.toLocaleString()}
                                <span className="text-sm font-normal text-text-secondary ml-2">(税込)</span>
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <AddToCartButton product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
