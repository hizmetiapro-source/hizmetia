import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Star, CheckCircle, ChevronRight } from "lucide-react";
import { Metadata } from "next";

// Bu veriler normalde bir API'den veya veritabanından gelir
const cities: Record<string, string> = {
  istanbul: "İstanbul",
  ankara: "Ankara",
  izmir: "İzmir",
  bursa: "Bursa",
  antalya: "Antalya",
};

const categories: Record<string, { title: string; description: string }> = {
  "ev-temizligi": { title: "Ev Temizliği", description: "Profesyonel ev temizliği hizmetleri" },
  "evden-eve-nakliyat": { title: "Evden Eve Nakliyat", description: "Güvenilir taşımacılık çözümleri" },
  "tadilat": { title: "Ev Tadilatı", description: "Komple tadilat ve dekorasyon" },
  "tesisat": { title: "Su Tesisatı", description: "Acil tesisatçı ve onarım" },
  "kentsel-donusum": { title: "Kentsel Dönüşüm", description: "Uzman danışmanlık ve uygulama" },
};

export async function generateMetadata({ params }: { params: Promise<{ city: string; category: string }> }): Promise<Metadata> {
  const { city, category } = await params;
  const cityName = cities[city] || city;
  const catInfo = categories[category] || { title: category };
  
  return {
    title: `${cityName} ${catInfo.title} Hizmeti - En İyi Teklifleri Al | Hizmetia`,
    description: `${cityName} bölgesinde en iyi ${catInfo.title} profesyonellerinden ücretsiz teklif alın. Güvenilir, hızlı ve uygun fiyatlı hizmet.`,
  };
}

export default async function CityCategoryPage({ params }: { params: Promise<{ city: string; category: string }> }) {
  const { city, category } = await params;
  const cityName = cities[city] || city;
  const catInfo = categories[category] || { title: category, description: "Profesyonel hizmetler" };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#402e47] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              <ChevronRight className="w-4 h-4" />
              <span>{cityName}</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{catInfo.title}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {cityName} {catInfo.title} Hizmeti
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {cityName} bölgesindeki en iyi {catInfo.title.toLowerCase()} profesyonellerinden dakikalar içinde ücretsiz teklif alın.
            </p>
            <div className="mt-8">
              <Link href="/hizmet-al">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-lg">
                  Hemen Teklif Al
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <h2 className="text-2xl font-bold text-[#402e47]">
                  {cityName} Bölgesinde Neden Hizmetia?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {cityName} genelinde hizmet veren onaylı profesyonellerimizle, {catInfo.title.toLowerCase()} ihtiyaçlarınıza en hızlı ve güvenilir çözümleri sunuyoruz. 
                  İster acil bir durum olsun, ister planlı bir proje; Hizmetia üzerinden oluşturacağınız talep ile bölgenizdeki en iyi ustalara ulaşırsınız.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Onaylı Profesyoneller</h3>
                      <p className="text-sm text-gray-500">{cityName} bölgesindeki tüm ustalarımız denetlenmiştir.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Star className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Gerçek Yorumlar</h3>
                      <p className="text-sm text-gray-500">Daha önce hizmet alan {cityName} sakinlerinin yorumlarını okuyun.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl h-fit border border-gray-100">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Popüler İlçeler
                </h3>
                <ul className="space-y-2">
                  {["Çankaya", "Kadıköy", "Konak", "Nilüfer", "Muratpaşa"].map(district => (
                    <li key={district}>
                      <Link href="/hizmet-al" className="text-gray-600 hover:text-primary flex items-center justify-between group">
                        <span>{cityName} {district}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
