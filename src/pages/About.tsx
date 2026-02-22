import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, Briefcase, TrendingUp, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Memduh Bayraktaroğlu
            </h1>
            <p className="text-xl text-secondary font-medium tracking-widest uppercase mb-8">
              Stratejist & Ekonomist
            </p>
            <div className="w-24 h-1 bg-white/20 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="prose prose-lg text-gray-600">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Devlet ve Piyasa Tecrübesinin Kesişimi
              </h2>
              <p className="mb-6">
                Memduh Bayraktaroğlu, sadece teorik bir ekonomist değil, Türkiye'nin en çalkantılı ekonomik ve siyasi dönemlerinde karar alma mekanizmalarının merkezinde bulunmuş bir stratejisttir.
              </p>
              <p className="mb-6">
                Eski Başbakan Tansu Çiller'in danışmanlığını yaptığı dönemde, devletin kriz anlarında nasıl refleks verdiğini, bürokrasinin işleyişini ve Ankara'nın kodlarını birinci elden deneyimlemiştir. Bu tecrübe, bugün şirketlere sunduğu danışmanlık hizmetinin temel farkını oluşturmaktadır: <strong>"Teoriyle değil, gerçeklerle strateji."</strong>
              </p>
              <p>
                Yıllar içinde edindiği medya gücü ve yüz binlerce takipçisiyle, toplumun ekonomik nabzını en iyi tutan isimlerden biri haline gelmiştir. Ancak asıl uzmanlığı, bu verileri şirketler için "uygulanabilir iş stratejilerine" dönüştürmesidir.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <Briefcase className="text-secondary w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Devlet Tecrübesi</h3>
                <p className="text-gray-600">
                  Ankara'nın karar alma süreçlerine hakimiyet. Regülasyon değişikliklerini ve siyasi hamleleri önceden okuma yeteneği.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <TrendingUp className="text-secondary w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Kriz Yönetimi</h3>
                <p className="text-gray-600">
                  1994, 2001 ve 2008 krizlerinde edinilen tecrübelerle, şirketleri bugünün volatil piyasalarında güvenli limana ulaştırma stratejisi.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <Users className="text-secondary w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Medya ve İletişim Gücü</h3>
                <p className="text-gray-600">
                  Toplumsal psikolojiyi ve tüketici davranışlarını analiz etme konusundaki benzersiz yetenek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <Award className="text-secondary w-16 h-16 mx-auto mb-8 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
            "Ekonomi sadece rakamlar değil, beklentilerin yönetimidir. Şirketler için en büyük risk, belirsizliği yönetememektir."
          </blockquote>
          <cite className="text-secondary font-bold tracking-wider not-italic uppercase">
            - Memduh Bayraktaroğlu
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Tecrübeyle Geleceği Planlayın</h2>
          <p className="text-gray-600 mb-8">
            Şirketinizin yönetim kurulunda bağımsız bir stratejist olarak yer almam için iletişime geçin.
          </p>
          <Link 
            to="/iletisim" 
            className="bg-primary text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-primary-light transition-colors inline-block"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
}
