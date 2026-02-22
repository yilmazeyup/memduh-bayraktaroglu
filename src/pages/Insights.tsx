import React, { useState } from 'react';
import { Lock, Download, FileText, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';

type LeadFormInputs = {
  name: string;
  company: string;
  email: string;
  title: string;
};

export default function Insights() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LeadFormInputs>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = (reportTitle: string) => {
    setSelectedReport(reportTitle);
    setIsModalOpen(true);
    setIsSubmitted(false);
    reset();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReport(null);
  };

  const onSubmit = (data: LeadFormInputs) => {
    console.log('Lead Captured:', data, 'Report:', selectedReport);
    // Here you would send data to backend
    setIsSubmitted(true);
    // Mock download start
    setTimeout(() => {
      closeModal();
      alert(`"${selectedReport}" raporu e-posta adresinize gönderildi.`);
    }, 2000);
  };

  const reports = [
    {
      id: 1,
      title: "2026 Türkiye Ekonomisi Beklenti Raporu",
      category: "Premium Rapor",
      date: "Ocak 2026",
      desc: "Yılın geri kalanı için enflasyon, kur ve faiz projeksiyonları. Sektörel risk haritaları ve fırsat alanları.",
      isPremium: true
    },
    {
      id: 2,
      title: "Asgari Ücret Artışının KOBİ'lere Etkisi",
      category: "Analiz",
      date: "Şubat 2026",
      desc: "İşgücü maliyetlerindeki artışın karlılık üzerindeki baskısı ve maliyet yönetimi stratejileri.",
      isPremium: false
    },
    {
      id: 3,
      title: "İhracatçı Firmalar İçin Kur Riski Yönetimi",
      category: "Strateji",
      date: "Şubat 2026",
      desc: "Volatil kur ortamında forward ve opsiyon işlemlerinin kullanımı. Hedging stratejileri.",
      isPremium: false
    },
    {
      id: 4,
      title: "Enerji Piyasası ve Sanayi Üretimi",
      category: "Sektörel",
      date: "Ocak 2026",
      desc: "Global enerji fiyatlarındaki dalgalanmaların yerel sanayi üretimine etkileri.",
      isPremium: false
    },
    {
      id: 5,
      title: "2026 3. Çeyrek Stratejik Yol Haritası",
      category: "Premium Rapor",
      date: "Mart 2026 (Beklenen)",
      desc: "Seçim sonrası ekonomi politikalarında beklenen değişiklikler ve iş dünyasına etkileri.",
      isPremium: true
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Araştırma ve Raporlar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İş dünyası için kritik makroekonomik veriler, analizler ve gelecek projeksiyonları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report) => (
            <motion.div 
              key={report.id}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-xl shadow-sm border ${report.isPremium ? 'border-secondary/50 ring-1 ring-secondary/20' : 'border-gray-100'} overflow-hidden flex flex-col`}
            >
              <div className={`p-6 flex-grow`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${report.isPremium ? 'bg-secondary text-primary' : 'bg-gray-100 text-gray-600'}`}>
                    {report.category}
                  </span>
                  <span className="text-xs text-gray-400">{report.date}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{report.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {report.desc}
                </p>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                {report.isPremium ? (
                  <button 
                    onClick={() => openModal(report.title)}
                    className="w-full bg-primary text-white py-3 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-primary-light transition-colors flex items-center justify-center gap-2"
                  >
                    <Lock size={16} className="text-secondary" /> Raporu İndir
                  </button>
                ) : (
                  <button className="w-full border border-gray-200 text-gray-600 py-3 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <FileText size={16} /> Okumaya Devam Et
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lead Capture Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              <div className="bg-primary p-6 flex justify-between items-center">
                <h3 className="text-white font-serif font-bold text-xl">Premium Rapor Erişimi</h3>
                <button onClick={closeModal} className="text-white/70 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8">
                {!isSubmitted ? (
                  <>
                    <p className="text-gray-600 mb-6 text-sm">
                      <strong>"{selectedReport}"</strong> raporunu indirmek için lütfen bilgilerinizi doğrulayın.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                        <input 
                          {...register("name", { required: true })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                          placeholder="Adınız Soyadınız"
                        />
                        {errors.name && <span className="text-red-500 text-xs">Bu alan zorunludur.</span>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Şirket Adı</label>
                        <input 
                          {...register("company", { required: true })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                          placeholder="Şirketiniz"
                        />
                        {errors.company && <span className="text-red-500 text-xs">Bu alan zorunludur.</span>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Unvan</label>
                        <input 
                          {...register("title", { required: true })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                          placeholder="Göreviniz (Örn: CEO, CFO)"
                        />
                        {errors.title && <span className="text-red-500 text-xs">Bu alan zorunludur.</span>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kurumsal E-posta</label>
                        <input 
                          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                          placeholder="ornek@sirket.com"
                        />
                        {errors.email && <span className="text-red-500 text-xs">Geçerli bir e-posta adresi giriniz.</span>}
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full bg-secondary text-primary font-bold py-3 rounded-sm hover:bg-secondary-dark hover:text-white transition-colors mt-4 flex items-center justify-center gap-2"
                      >
                        <Download size={18} /> Raporu İndir
                      </button>
                      <p className="text-xs text-gray-400 text-center mt-4">
                        Bilgileriniz gizlilik politikamız çerçevesinde korunmaktadır.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="text-green-600" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-2">Teşekkürler!</h4>
                    <p className="text-gray-600">
                      Rapor indirme bağlantısı e-posta adresinize gönderiliyor.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
