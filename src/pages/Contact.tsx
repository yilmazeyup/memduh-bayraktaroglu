import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, CheckCircle, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

type ContactFormInputs = {
  fullName: string;
  companyName: string;
  title: string;
  email: string;
  revenueRange: string;
  topic: string;
  message: string;
  nda: boolean;
};

export default function Contact() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get('service') || '';

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
    defaultValues: {
      topic: initialService
    }
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: ContactFormInputs) => {
    console.log('RFP Submitted:', data);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      reset();
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info & Value Prop */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Stratejik Ortaklık Başlatın
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Şirketinizin geleceğini şansa bırakmayın. Makroekonomik veriler ışığında, riskleri yönetmek ve fırsatları değerlendirmek için ilk adımı atın.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">Telefon</h3>
                  <p className="text-gray-600">+90 (212) 555 0123</p>
                  <p className="text-xs text-gray-400 mt-1">Hafta içi 09:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100">
                  <Mail className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">E-posta</h3>
                  <p className="text-gray-600">info@memduhbayraktaroglu.com</p>
                  <p className="text-xs text-gray-400 mt-1">Kurumsal talepler için</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">Ofis</h3>
                  <p className="text-gray-600">Levent, İstanbul</p>
                  <p className="text-xs text-gray-400 mt-1">Sadece randevulu görüşmeler</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-serif font-bold text-2xl mb-4">Neden Başvurmalısınız?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /> Sadece nitelikli şirketlere özel hizmet</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /> Gizlilik odaklı süreç yönetimi</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /> Doğrudan Memduh Bey ile çalışma imkanı</li>
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            </div>
          </div>

          {/* Right Column: RFP Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Danışmanlık Talep Formu (RFP)</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                    <input 
                      {...register("fullName", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Adınız Soyadınız"
                    />
                    {errors.fullName && <span className="text-red-500 text-xs">Zorunlu alan</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Unvan</label>
                    <input 
                      {...register("title", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Örn: CEO, YK Üyesi"
                    />
                    {errors.title && <span className="text-red-500 text-xs">Zorunlu alan</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Şirket Adı</label>
                    <input 
                      {...register("companyName", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Şirketinizin Tam Adı"
                    />
                    {errors.companyName && <span className="text-red-500 text-xs">Zorunlu alan</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kurumsal E-posta</label>
                    <input 
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="isim@sirket.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs">Geçerli bir e-posta giriniz</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Yıllık Ciro Aralığı</label>
                    <select 
                      {...register("revenueRange", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
                    >
                      <option value="">Seçiniz</option>
                      <option value="0-10M">0 - 10 Milyon TL</option>
                      <option value="10-50M">10 - 50 Milyon TL</option>
                      <option value="50-250M">50 - 250 Milyon TL</option>
                      <option value="250M+">250 Milyon TL +</option>
                    </select>
                    {errors.revenueRange && <span className="text-red-500 text-xs">Zorunlu alan</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Danışmanlık Konusu</label>
                    <select 
                      {...register("topic", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
                    >
                      <option value="">Seçiniz</option>
                      <option value="yonetim-kurulu">Yönetim Kurulu Danışmanlığı</option>
                      <option value="ceo-danismanligi">CEO Mentörlüğü</option>
                      <option value="yatirim-proje">Yatırım ve Proje Analizi</option>
                      <option value="kriz-yonetimi">Kriz Yönetimi</option>
                      <option value="diger">Diğer</option>
                    </select>
                    {errors.topic && <span className="text-red-500 text-xs">Zorunlu alan</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Talep Özeti</label>
                  <textarea 
                    {...register("message", { required: true })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Danışmanlık ihtiyacınızı kısaca özetleyin..."
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-xs">Zorunlu alan</span>}
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    {...register("nda")}
                    id="nda"
                    className="mt-1 w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                  />
                  <label htmlFor="nda" className="text-sm text-gray-600">
                    Görüşme öncesi Gizlilik Sözleşmesi (NDA) talep ediyorum.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Başvuruyu Gönder
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Başvurunuz Alındı</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Talebiniz ön değerlendirme ekibimize iletilmiştir. Uygun görülmesi durumunda <strong>24 saat içinde</strong> belirttiğiniz e-posta adresi üzerinden "Keşif Görüşmesi" daveti gönderilecektir.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 inline-block text-left w-full max-w-md">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <Calendar size={18} className="text-secondary" /> Sonraki Adım:
                  </h4>
                  <p className="text-sm text-gray-600">
                    E-postanıza gelecek olan Google Meet bağlantısı üzerinden 15 dakikalık tanışma toplantısı planlanacaktır.
                  </p>
                </div>

                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-secondary font-bold hover:text-primary transition-colors underline"
                >
                  Yeni bir form doldur
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
