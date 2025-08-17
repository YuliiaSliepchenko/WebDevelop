/**
 * Футер сайту з контактною інформацією та посиланнями на соцмережі
 */
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: '+38 (093) 058-91-56',
      description: '(Viber, WhatsApp, Telegram)',
      color: 'text-green-400'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: '+38 (044) 300-27-93',
      description: '(для зв\'язку з менеджером)',
      color: 'text-blue-400'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'study@itenai.com.ua',
      description: 'Офіційна пошта школи',
      color: 'text-red-400'
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      href: '#',
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: '#',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      href: '#',
      label: 'Telegram',
      color: 'hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { label: 'Про школу', href: '#' },
    { label: 'Курси', href: '#' },
    { label: 'Викладачі', href: '#' },
    { label: 'Відгуки', href: '#' },
    { label: 'Контакти', href: '#' },
    { label: 'Блог', href: '#' }
  ];

  /**
   * Прокрутка до верху сторінки
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Логотип та опис */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold">
                <span className="text-white">ItEn</span>
                <span className="text-red-500">Ai</span>
              </h3>
              <p className="text-gray-400 mt-2">
                Онлайн школа програмування для дітей та підлітків
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Швидкі посилання */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Навігація</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контактна інформація */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">
              Залишились питання?<br />
              Звертайтеся, ми з радістю надамо на них відповіді:
            </h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`${contact.color} mt-1`}>
                    {contact.icon}
                  </div>
                  <div>
                    <a href={`tel:${contact.label}`} className={`${contact.color} font-semibold hover:underline`}>
                      {contact.label}
                    </a>
                    <p className="text-gray-400 text-sm">{contact.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Додаткові посилання */}
            <div className="mt-8 space-y-2">
              <a href="#" className="text-gray-400 hover:text-white block">
                Політика конфіденційності
              </a>
              <a href="#" className="text-gray-400 hover:text-white block">
                Договір-оферта
              </a>
            </div>
          </div>
        </div>

        {/* Нижня частина футера */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ItEnAi. Усі права захищені.
            </div>
            <button
              onClick={scrollToTop}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              ↑ Нагору
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
