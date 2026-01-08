import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, User, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    slug: "ev-tasirken-dikkat-edilmesi-gerekenler",
    title: "Ev Taşırken Dikkat Edilmesi Gereken 10 Altın Kural",
    excerpt: "Yeni bir eve taşınmak heyecan verici ama bir o kadar da yorucu olabilir. İşte süreci kolaylaştıracak ipuçları...",
    date: "8 Ocak 2026",
    author: "Hizmetia Ekibi",
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&h=400&fit=crop"
  },
  {
    slug: "boya-badana-renk-secimi",
    title: "2026 Boya Badana Trendleri ve Renk Seçimi Rehberi",
    excerpt: "Evinizin havasını değiştirecek en popüler renkler ve boya yaparken bilmeniz gereken teknik detaylar.",
    date: "7 Ocak 2026",
    author: "Hizmetia Ekibi",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#402e47] mb-8 text-center">Hizmetia Rehber & Blog</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                    </div>
                    <CardTitle className="text-xl text-[#402e47] group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                      Devamını Oku <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
