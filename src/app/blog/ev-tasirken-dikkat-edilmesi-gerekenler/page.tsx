import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, Calendar, User, Clock, Share2 } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Article Header */}
        <div className="bg-gray-50 py-12 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog" className="flex items-center text-primary font-semibold mb-6 hover:underline">
              <ChevronLeft className="w-4 h-4 mr-1" /> Blog'a Dön
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-[#402e47] mb-6 leading-tight">
              Ev Taşırken Dikkat Edilmesi Gereken 10 Altın Kural
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 8 Ocak 2026</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Hizmetia Ekibi</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 6 Dakika Okuma</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <img 
              src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&h=600&fit=crop" 
              alt="Ev Taşınma Rehberi" 
              className="w-full h-[400px] object-cover rounded-2xl mb-12 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl font-medium text-gray-900">
                Yeni bir eve taşınmak heyecan verici bir başlangıç olsa da, doğru planlanmadığında stresli bir sürece dönüşebilir. İşte taşınma sürecini sorunsuz atlatmanızı sağlayacak 10 altın kural:
              </p>

              <h2 className="text-2xl font-bold text-[#402e47] mt-8">1. Erken Planlama Yapın</h2>
              <p>Taşınma gününden en az 4 hafta önce hazırlıklara başlayın. Bir kontrol listesi oluşturmak, hangi eşyanın ne zaman paketleneceğini belirlemek kargaşayı önler.</p>

              <h2 className="text-2xl font-bold text-[#402e47] mt-8">2. Güvenilir Bir Nakliyat Firması Seçin</h2>
              <p>Eşyalarınızın güvenliği için sigortalı ve referanslı firmaları tercih edin. Hizmetia üzerinden onaylı nakliyat firmalarından teklif alarak karşılaştırma yapabilirsiniz.</p>

              <h2 className="text-2xl font-bold text-[#402e47] mt-8">3. Eşyalarınızı Ayıklayın</h2>
              <p>Kullanmadığınız eşyaları yeni evinize taşımayın. İhtiyacınız olmayanları bağışlayın veya satın. Bu hem nakliye maliyetini düşürür hem de yeni evinizde yer açar.</p>

              <h2 className="text-2xl font-bold text-[#402e47] mt-8">4. Paketleme Malzemelerini Kaliteli Seçin</h2>
              <p>Dayanıklı koliler, balonlu naylonlar ve kaliteli bantlar kullanın. Özellikle kırılacak eşyalar için ekstra özen gösterin.</p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-gray-600 bg-gray-50 rounded-r-lg">
                "Unutmayın, iyi bir paketleme taşınma sırasında oluşabilecek hasarların %90'ını önler."
              </blockquote>

              <h2 className="text-2xl font-bold text-[#402e47] mt-8">5. Kolileri Etiketleyin</h2>
              <p>Her kolinin üzerine hangi odaya ait olduğunu ve içinde ne olduğunu yazın. Bu, yeni evde yerleşme sürecini inanılmaz hızlandıracaktır.</p>

              <div className="bg-primary/5 p-8 rounded-2xl mt-12 border border-primary/10">
                <h3 className="text-xl font-bold text-[#402e47] mb-4">Hemen Nakliyat Teklifi Alın</h3>
                <p className="mb-6">Evinizi güvenle taşımak için bölgenizdeki en iyi nakliyat firmalarından ücretsiz teklif alabilirsiniz.</p>
                <Link href="/hizmet-al?category=evden-eve-nakliyat">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Ücretsiz Teklif Al
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
