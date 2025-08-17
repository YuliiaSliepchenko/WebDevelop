/**
 * Секція переваг навчання в ItEnAi
 */
import React from 'react';
import { Users, Clock, Award, Headphones, Monitor, Trophy } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: 'Індивідуальний підхід',
      description: 'Невеликі групи до 6 учнів для максимальної уваги кожному'
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: 'Гнучкий розклад',
      description: 'Обираєте зручний час для онлайн або офлайн занять'
    },
    {
      icon: <Monitor className="w-12 h-12 text-purple-500" />,
      title: 'Сучасні технології',
      description: 'Навчаємо на актуальних інструментах та платформах'
    },
    {
      icon: <Headphones className="w-12 h-12 text-orange-500" />,
      title: 'Підтримка 24/7',
      description: 'Завжди готові допомогти з домашніми завданнями'
    },
    {
      icon: <Award className="w-12 h-12 text-red-500" />,
      title: 'Досвідчені викладачі',
      description: 'Практикуючі розробники з багаторічним досвідом'
    },
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: 'Гарантія результату',
      description: 'Повернемо кошти, якщо не досягнете цілей курсу'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Чому обирають <span className="text-red-500">ItEnAi</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ми створили ідеальні умови для навчання веб-розробки, 
            щоб ваша дитина отримала максимум користі від кожного заняття
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Додаткова інформація */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-red-500">ФАКТ ПРО ITENAI</h3>
            <div className="text-4xl font-bold mb-4">
              <span className="text-red-500">92%</span> <span className="text-2xl">учнів</span> <span className="text-red-500">рекомендують</span>
            </div>
            <p className="text-xl text-gray-300">
              наші курси друзям та однокласникам
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
