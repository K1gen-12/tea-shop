import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { CATEGORY_LABELS } from "@/lib/constants";
import { ProductCard } from "@/components/features/ProductCard";
import { Category } from "@/types/product";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Server Component
export default async function ProductListPage({
    searchParams,
}: {
    searchParams: Promise<{ c?: string }>;
}) {
    const { c } = await searchParams;
    const categoryFilter = c as Category | undefined;

    // Filter logic
    const filteredProducts = categoryFilter
        ? MOCK_PRODUCTS.filter((p) => p.category === categoryFilter)
        : MOCK_PRODUCTS;

    return (
        <div className="container mx-auto px-4 md:px-8 py-16 max-w-7xl">
            {/* Header */}
            <div className="mb-16 text-center">
                <h1 className="font-serif-jp text-3xl md:text-4xl text-green-900 mb-4">
                    商品一覧
                </h1>
                <p className="font-sans-jp text-text-secondary">
                    {categoryFilter
                        ? `${CATEGORY_LABELS[categoryFilter]}の検索結果`
                        : "厳選された日本茶と茶器"}
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                <Link
                    href="/products"
                    className={cn(
                        "px-6 py-3 rounded-full text-sm font-sans-jp tracking-wider transition-colors border",
                        !categoryFilter
                            ? "bg-green-700 text-white border-green-700"
                            : "bg-white text-text-secondary border-border-light hover:border-green-700 hover:text-green-700"
                    )}
                >
                    すべて
                </Link>
                {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                    <Link
                        key={key}
                        href={`/products?c=${key}`}
                        className={cn(
                            "px-6 py-3 rounded-full text-sm font-sans-jp tracking-wider transition-colors border",
                            categoryFilter === key
                                ? "bg-green-700 text-white border-green-700"
                                : "bg-white text-text-secondary border-border-light hover:border-green-700 hover:text-green-700"
                        )}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-text-secondary">
                    <p>該当する商品が見つかりませんでした。</p>
                    <Link href="/products" className="text-green-700 underline mt-4 block">
                        すべての商品を表示
                    </Link>
                </div>
            )}
        </div>
    );
}
