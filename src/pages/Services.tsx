import React from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, BarChart2, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      id: "yonetim-kurulu",
      title: "Yönetim Kurulu Danışmanlığı",
      subtitle: "Düzenli / Retainer Model",
      icon: <Users size={48} className="text-secondary" />,
      target: "Şirket yönetim kurulları, holdingler.",
      content: "Memduh Bey'in aylık veya üç aylık periyotlarla şirket yönetim kurulu toplantılarına 'Bağımsız Makroekonomik Danışman' olarak katılması.",
      benefit: "Şirket ortaklarının; büyüme, küçülme veya bütçe revizyonu kararlarını almadan önce Türkiye'nin ve dünyanın ekonomik/politik rotası hakkında birinci elden brifing alması.",
      features: [
        "Aylık Yönetim Kurulu Toplantı Katılımı",
        "Özel Makroekonomik Raporlama",
        "Stratejik Karar Destek",
        "Global Piyasa Analizi"
      ]
    },
    {
      id: "ceo-danismanligi",
      title: "İcra Kurulu & CEO Danışmanlığı",
      subtitle: "Birebir Mentörlük",
      icon: <TrendingUp size={48} className="text-secondary" />,
      target: "Karar verici pozisyondaki CEO'lar, CFO'lar ve şirket sahipleri.",
      content: "Kritik ekonomik kararlar arifesinde (örneğin döviz krizleri, ani regülasyon değişiklikleri) Memduh Bey ile doğrudan, gizlilik çerçevesinde birebir strateji seansları.",
      benefit: "Teorik ekonomiden ziyade, piyasanın ve Ankara'nın (devletin) nasıl reaksiyon vereceğini öngörebilen tecrübeli bir zihinle 'fikir alışverişi' (sparring partner) yapma imkanı.",
      features: [
        "7/24 Acil Durum Erişimi",
        "Birebir Strateji Seansları",
        "Gizli Sparring Partnerliği",
        "Regülasyon Etki Analizi"
      ]
    },
    {
      id: "yatirim-proje",
      title: "Yatırım ve Proje Danışmanlığı",
      subtitle: "Proje Bazlı",
      icon: <BarChart2 size={48} className="text-secondary" />,
      target: "Yeni bir pazara girmek, kapasite artırmak veya şirket satın alması (M&A) yapmak isteyen firmalar.",
      content: "Yapılacak spesifik yatırımın, önümüzdeki 1-3 yıllık ekonomik ve siyasi projeksiyonlara göre 'zamanlama' (timing) ve 'risk' analizinin yapılması.",
      benefit: "Yatırımın makroekonomik dalgalanmalara karşı stres testinden geçirilmesi.",
      features: [
        "Yatırım Fizibilite Raporu",
        "Zamanlama (Timing) Analizi",
        "Sektörel Risk Projeksiyonu",
        "M&A Süreç Desteği"
      ]
    },
    {
      id: "kriz-yonetimi",
      title: "Kriz Yönetimi Danışmanlığı",
      subtitle: "Acil Durum",
      icon: <AlertTriangle size={48} className="text-secondary" />,
      target: "Ani piyasa şoklarından, kur dalgalanmalarından veya siyasi gelişmelerden doğrudan ve negatif etkilenen şirketler.",
      content: "Hasar tespiti ve hızlı aksiyon planı oluşturulması. Eski bir devlet danışmanı refleksleriyle krizden çıkış rotasının çizilmesi.",
      benefit: "Kriz anında panik yerine strateji ile hareket ederek hasarı minimize etme ve fırsata çevirme.",
      features: [
        "Acil Durum Eylem Planı",
        "Nakit Akışı Kriz Yönetimi",
        "Paydaş İletişimi Stratejisi",
        "Hızlı Toparlanma Senaryoları"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Kurumsal Hizmetler</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Şirketinizin ihtiyaçlarına özel olarak tasarlanmış stratejik danışmanlık çözümleri.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-8 p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2 block">{service.subtitle}</span>
                      <h2 className="text-3xl font-serif font-bold text-primary">{service.title}</h2>
                    </div>
                    <div className="hidden md:block p-3 bg-gray-50 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-2">Hedef Kitle:</h3>
                    <p className="text-gray-600 mb-6">{service.target}</p>
                    
                    <h3 className="font-bold text-gray-900 mb-2">Hizmet İçeriği:</h3>
                    <p className="text-gray-600 mb-6">{service.content}</p>
                    
                    <h3 className="font-bold text-gray-900 mb-2">Kazanım:</h3>
                    <p className="text-gray-600 italic border-l-4 border-secondary pl-4 py-1 bg-gray-50 rounded-r-md">
                      {service.benefit}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/iletisim?service=${service.id}`}
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-sm font-bold uppercase text-sm tracking-wider hover:bg-primary-light transition-colors"
                  >
                    Teklif İste <ArrowRight size={16} />
                  </Link>
                </div>
                
                {/* Decorative Side Panel */}
                <div className="lg:col-span-4 bg-gray-100 relative overflow-hidden min-h-[200px] lg:min-h-full">
                  <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center text-white opacity-80">
                      <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
                      <p className="font-serif italic text-lg">"Strateji, geleceği bugünden tasarlamaktır."</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
