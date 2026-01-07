import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-[120px] pb-[120px]">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
        <Image
          src="/images/hero_bg.png"
          alt="Morning tea plantation"
          fill
          className="object-cover object-[center_30%]"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}

        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="bg-white/90 backdrop-blur-sm p-12 md:p-20 shadow-xl max-w-2xl text-center relative">
            <div className="absolute top-8 left-8 bottom-8 border-l border-green-900 opacity-20 md:hidden" />
            <div className="absolute top-8 right-8 bottom-8 border-r border-green-900 opacity-20 md:hidden" />

            {/* Vertical Text Copy */}
            <div className="flex justify-center gap-8 mb-12 h-64 md:h-80">
              <h2 className="tategaki text-3xl md:text-5xl font-serif-jp text-green-900 leading-loose">
                心、整う、一杯。
              </h2>
              <p className="tategaki text-lg md:text-xl font-serif-jp text-text-secondary leading-loose pt-12 whitespace-nowrap">
                霧深い山で育まれた、<br />
                本物の日本茶をあなたへ。
              </p>
            </div>

            <div className="mt-8">
              <Link href="/products">
                <Button className="w-full md:w-auto min-w-[200px]">
                  商品を見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Recommendation */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <span className="font-serif-jp text-brown-700 tracking-widest text-lg block">Seasonal</span>
          <h2 className="font-serif-jp text-3xl md:text-4xl text-green-900">季節のおすすめ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Mock Product 1 */}
          <Link href="/products/1" className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-6 shadow-sm group-hover:shadow-lg transition-shadow">
              <Image
                src="/images/product_sencha.png"
                alt="特選 煎茶 [山霧]"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="text-center space-y-2">
              <span className="text-xs text-brown-700 tracking-widest font-sans-jp border border-brown-700 px-2 py-0.5 rounded-full inline-block mb-2">新茶</span>
              <h3 className="font-serif-jp text-xl text-green-900 group-hover:text-brown-700 transition-colors">特選 煎茶 [山霧]</h3>
              <p className="font-sans-jp text-text-secondary text-sm">¥1,200 (税込)</p>
            </div>
          </Link>

          {/* Mock Product 2 (Same image for demo) */}
          <Link href="/products/2" className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-6 shadow-sm group-hover:shadow-lg transition-shadow">
              <Image
                src="/images/product_sencha.png"
                alt="玉露 [朝露]"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="text-center space-y-2">
              <span className="text-xs text-green-700 tracking-widest font-sans-jp border border-green-700 px-2 py-0.5 rounded-full inline-block mb-2">限定</span>
              <h3 className="font-serif-jp text-xl text-green-900 group-hover:text-brown-700 transition-colors">玉露 [朝露]</h3>
              <p className="font-sans-jp text-text-secondary text-sm">¥2,500 (税込)</p>
            </div>
          </Link>

          {/* Mock Product 3 */}
          <Link href="/products/3" className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-6 shadow-sm group-hover:shadow-lg transition-shadow">
              {/* Using CSS placeholder if image reuse looks too repetitive, but user asked for generated images. I will reuse product_sencha but maybe scale/crop differently in code if requested, but same image is fine for prototype consistency. */}
              <Image
                src="/images/product_sencha.png"
                alt="上級 抹茶 [初音]"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="text-center space-y-2">
              <span className="text-xs text-gray-500 tracking-widest font-sans-jp border border-gray-300 px-2 py-0.5 rounded-full inline-block mb-2">定番</span>
              <h3 className="font-serif-jp text-xl text-green-900 group-hover:text-brown-700 transition-colors">上級 抹茶 [初音]</h3>
              <p className="font-sans-jp text-text-secondary text-sm">¥1,800 (税込)</p>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <Link href="/products">
            <Button variant="secondary">すべてのお茶を見る</Button>
          </Link>
        </div>
      </section>

      {/* Journal Section */}
      <section className="bg-[var(--color-brown-100)] py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 w-full relative aspect-[4/3] md:aspect-square overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/article_brewing.png"
              alt="Brewing Tea"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <span className="font-serif-jp text-brown-700 tracking-widest block">Journal</span>
              <h2 className="font-serif-jp text-3xl md:text-4xl text-green-900 leading-tight">
                お茶を淹れる時間は、<br />
                自分を慈しむ時間。
              </h2>
              <p className="font-sans-jp text-text-primary leading-loose pt-4">
                忙しい毎日に、少しの余白を。<br />
                茶葉の香りが開く瞬間、心がほどけていくのを感じてください。<br />
                おいしいお茶の淹れ方や、季節の楽しみ方をご紹介します。
              </p>
            </div>
            <div>
              <Link href="/journal">
                <Button variant="primary">
                  読み物を読む
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
