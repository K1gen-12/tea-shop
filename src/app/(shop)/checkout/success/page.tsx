import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccessPage() {
    return (
        <div className="container mx-auto px-4 py-24 text-center max-w-lg">
            <div className="flex justify-center mb-8">
                <CheckCircle className="w-20 h-20 text-green-700" />
            </div>

            <h1 className="font-serif-jp text-3xl text-green-900 mb-6">ご注文ありがとうございました</h1>

            <p className="font-sans-jp text-text-primary leading-loose mb-12">
                ご注文の確認メールをお送りしました。<br />
                商品の発送まで今しばらくお待ちください。
            </p>

            <Link href="/">
                <Button variant="secondary">トップに戻る</Button>
            </Link>
        </div>
    );
}
