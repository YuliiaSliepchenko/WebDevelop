/**
 * Секція відгуків батьків та учнів
 */
import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Оксана Курська',
      role: 'Мама учня',
      avatar: 'https://pub-cdn.sider.ai/u/U0Y3H2XG568/web-coder/6883afccf2d3a0ac8dc3c1a6/resource/831a4734-7822-480a-b277-73f56c2b428b.jpg',
      rating: 5,
      text: 'Дуже задоволена навчанням в ItEnAi! Мій син за 3 місяці навчання створив власний сайт про свої хобі. Викладачі дуже терплячі та професійні.',
      highlight: 'Рекомендую ItEnAi всім батькам!'
    },
    {
      name: 'Марія Петренко',
      role: 'Мама учениці',
      avatar: 'https://pub-cdn.sider.ai/u/U0Y3H2XG568/web-coder/6883afccf2d3a0ac8dc3c1a6/resource/36897c3c-208a-40bc-93fb-2eabb9ef8ce1.jpg',
      rating: 5,
      text: 'Моя дочка завжди мріяла створювати сайти. Після курсу в ItEnAi вона не тільки навчилась програмувати, але й знайшла своє покликання.',
      highlight: 'Дуже якісне навчання за доступною ціною'
    },
    {
      name: 'Андрій Коваленко',
      role: 'Учень, 14 років',
      avatar: 'https://pub-cdn.sider.ai/u/U0Y3H2XG568/web-coder/6883afccf2d3a0ac8dc3c1a6/resource/b965af8c-bb94-4455-a286-e8be8aa2c788.jpg',
      rating: 5,
      text: 'Круто, що можна створювати сайти самому! Наш викладач пояснює все зрозуміло. Зараз роблю сайт для своєї команди з кіберспорту.',
      highlight: 'Хочу стати веб-розробником!'
    }
  ];

  /**
   * Рендер зірок рейтингу
   */
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Відгуки <span className="text-red-500">батьків</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Понад 500 дітей вже навчались веб-розробки в нашій школі. 
            Ось що кажуть їхні батьки та самі учні
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300 relative"
            >
              {/* Іконка цитати */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-red-500 opacity-50" />
              </div>

              {/* Аватар та інформація про автора */}
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <div className="flex space-x-1 mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              {/* Текст відгуку */}
              <p className="text-gray-300 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Виділений текст */}
              <div className="bg-red-600/20 border-l-4 border-red-500 pl-4 py-2">
                <p className="text-red-400 font-semibold italic">
                  {testimonial.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Додаткова статистика */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-red-100">Випускників</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-red-100">Середня оцінка</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">92%</div>
              <div className="text-red-100">Рекомендують друзям</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3 роки</div>
              <div className="text-red-100">Досвіду навчання</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
