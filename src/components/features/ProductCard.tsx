import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/Badge";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/products/${product.id}`} className="group block h-full">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-white shadow-soft group-hover:shadow-md transition-shadow">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.stock_status === "out_of_stock" && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-500">SOLD OUT</span>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <div className="flex gap-2 flex-wrap">
                    {product.tags.map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                </div>
                <h3 className="font-serif-jp text-lg text-green-900 group-hover:text-brown-700 transition-colors">
                    {product.name}
                </h3>
                <p className="font-sans-jp text-text-secondary text-sm">
                    ¥{product.price.toLocaleString()} (税込)
                </p>
            </div>
        </Link>
    );
}
