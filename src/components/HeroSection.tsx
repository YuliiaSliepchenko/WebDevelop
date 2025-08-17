/**
 * Героїчна секція з основним заголовком курсу та call-to-action
 */
import React from 'react';
import { Button } from './ui/button';
import { Code, Laptop, Zap } from 'lucide-react';

export default function HeroSection() {
  /**
   * Прокрутка до форми реєстрації
   */
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Декоративні елементи фону */}
      <div className="absolute inset-0 bg-[url('https://pub-cdn.sider.ai/u/U0Y3H2XG568/web-coder/6883afccf2d3a0ac8dc3c1a6/resource/b4dc794c-a38a-4386-9785-655fd6889a37.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
      
      <div className="relative container mx-auto px-4 py-20 text-center">
        {/* Логотип школи */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">ItEn</span>
            <span className="text-red-500">Ai</span>
          </h1>
          <div className="flex justify-center space-x-4 text-red-500">
            <Code className="w-8 h-8" />
            <Laptop className="w-8 h-8" />
            <Zap className="w-8 h-8" />
          </div>
        </div>

        {/* Основний заголовок */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          КУРС<br />
          <span className="text-red-500">ВЕБРОЗРОБКА</span><br />
          <span className="text-2xl md:text-4xl">для дітей</span>
        </h2>

        {/* Підзаголовок */}
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Допоможемо дитині стати <span className="text-white font-semibold">професійним веб-розробником</span> і 
          підкорити <span className="text-red-500 font-semibold">HTML, CSS та JavaScript</span>
        </p>

        {/* Ключові характеристики курсу */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-red-500 mb-2">24 уроки</div>
            <div className="text-gray-300">12 тижнів навчання</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-orange-500 mb-2">9-15 років</div>
            <div className="text-gray-300">Оптимальний вік</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-yellow-500 mb-2">Власний сайт</div>
            <div className="text-gray-300">Фінальний проєкт</div>
          </div>
        </div>

        {/* Кнопка реєстрації */}
        <Button 
          onClick={scrollToRegistration}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
        >
          ЗАПИСАТИСЬ НА ПРОБНЕ ЗАНЯТТЯ
        </Button>
      </div>
    </section>
  );
}
