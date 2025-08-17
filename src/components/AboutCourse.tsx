/**
 * Секція "Про курс" з детальною інформацією про навчальну програму
 */
import React from 'react';
import { Globe, Code2, Palette, Rocket } from 'lucide-react';

export default function AboutCourse() {
  const features = [
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: 'HTML основи',
      description: 'Вивчаємо структуру веб-сторінок, теги та семантичну розмітку'
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-500" />,
      title: 'CSS стилізація',
      description: 'Створюємо красиві дизайни, адаптивну верстку та анімації'
    },
    {
      icon: <Code2 className="w-12 h-12 text-green-500" />,
      title: 'JavaScript логіка',
      description: 'Додаємо інтерактивність та динамічну поведінку сайтів'
    },
    {
      icon: <Rocket className="w-12 h-12 text-red-500" />,
      title: 'Власний проєкт',
      description: 'Створюємо повноцінний сайт та публікуємо його онлайн'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            По <span className="text-red-500">завершенню</span> курсу<br />
            дитина <span className="text-red-500">навчиться</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Наш курс розроблений спеціально для дітей та підлітків, 
            щоб зробити навчання веб-розробки цікавим та ефективним
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Статистика успіху */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-red-100">учнів завершують курс</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-red-100">створюють власний сайт</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">87%</div>
              <div className="text-red-100">продовжують вивчати програмування</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
