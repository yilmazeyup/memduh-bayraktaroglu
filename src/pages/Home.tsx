import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, PieChart, Users, Globe, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                Belirsizlik Dönemlerinde <br />
                <span className="text-secondary">Net Stratejiler</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                Makroekonomik verilerle şirketinizin geleceğini planlayın. Teoriyle değil, piyasa ve Ankara gerçekleriyle yoğrulmuş tecrübe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/iletisim" 
                  className="bg-secondary text-primary px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  Danışmanlık Talebi <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/hizmetler" 
                  className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  Hizmetleri İncele
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              {/* Placeholder for Memduh Bey's photo */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                  alt="Memduh Bayraktaroğlu" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-8">
                  <p className="text-secondary font-serif italic text-xl">"Ekonomi yönetiminde öngörü, krizden daha değerlidir."</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Odak Alanlarımız</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp size={40} className="text-secondary" />,
                title: "Makroekonomik Projeksiyonlar",
                desc: "Enflasyon, kur ve faiz beklentilerine dair gerçekçi senaryolarla bütçenizi güvenceye alın."
              },
              {
                icon: <PieChart size={40} className="text-secondary" />,
                title: "Bütçe ve Senaryo Planlaması",
                desc: "Farklı ekonomik koşullara hazırlıklı olmanız için A, B ve C planlarınızı oluşturuyoruz."
              },
              {
                icon: <ShieldCheck size={40} className="text-secondary" />,
                title: "Politik-Ekonomik Risk Yönetimi",
                desc: "Ankara'nın kararlarının piyasaya etkilerini önceden okuyarak riskleri fırsata çevirin."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="mb-6 p-4 bg-primary/5 rounded-full w-fit">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Memduh Bey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Neden Memduh Bayraktaroğlu?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Devlet tecrübesi, ekonomi-politik hakimiyeti ve piyasa öngörülerinin birleşimi.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sadece teorik iktisat bilgisiyle değil, Tansu Çiller dönemi danışmanlığı gibi kritik devlet görevlerinde edinilen "kriz anlarında devletin nasıl refleks vereceği" bilgisiyle şirketlere yol gösteriyoruz. Ankara ve piyasa gerçekleriyle yoğrulmuş, filtrelenmiş ve uygulanabilir stratejiler sunuyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border-l-4 border-secondary pl-4">
                  <span className="block text-3xl font-bold text-primary mb-1">30+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Yıl Deneyim</span>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <span className="block text-3xl font-bold text-primary mb-1">100+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Kurumsal Referans</span>
                </div>
              </div>

              <Link to="/hakkinda" className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors inline-flex items-center gap-2">
                Detaylı Biyografi <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary transform rotate-3 rounded-2xl opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80" 
                alt="Strategy Meeting" 
                className="relative rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Insights Preview */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Executive Insights</h2>
              <p className="text-gray-400 max-w-xl">İş dünyasını ilgilendiren son ekonomik raporlar ve analizler.</p>
            </div>
            <Link to="/raporlar" className="hidden md:flex items-center gap-2 text-secondary hover:text-white transition-colors font-medium">
              Tüm Raporlar <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: "22 Şubat 2026",
                category: "Makroekonomi",
                title: "2026 3. Çeyrek Kur Beklentileri ve Sanayiye Etkisi",
                desc: "Döviz kurlarındaki son hareketliliğin ihracatçı firmalar üzerindeki olası etkileri ve korunma yöntemleri."
              },
              {
                date: "15 Şubat 2026",
                category: "Politika & Ekonomi",
                title: "Merkez Bankası Faiz Kararı Analizi",
                desc: "Son PPK toplantısından çıkan kararların kredi maliyetlerine ve yatırım iştahına yansımaları."
              },
              {
                date: "10 Şubat 2026",
                category: "Sektörel",
                title: "Enerji Maliyetleri ve Üretim Enflasyonu",
                desc: "Artan enerji fiyatlarının sanayi üretim maliyetlerine etkisi ve 2026 sonu projeksiyonları."
              }
            ].map((post, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center mb-4 text-xs text-gray-400 uppercase tracking-wider">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.desc}</p>
                <span className="text-secondary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Raporu İncele <ArrowRight size={14} />
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/raporlar" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors font-medium">
              Tüm Raporlar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Şirketiniz İçin Doğru Stratejiyi Belirleyelim
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Sadece nitelikli şirketlerin kabul edildiği danışmanlık programımız için ön başvuru formunu doldurun.
          </p>
          <Link 
            to="/iletisim" 
            className="bg-primary text-white px-10 py-5 rounded-sm font-bold uppercase tracking-wider hover:bg-primary-light transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Danışmanlık Başvurusu Yapın
          </Link>
        </div>
      </section>
    </div>
  );
}
