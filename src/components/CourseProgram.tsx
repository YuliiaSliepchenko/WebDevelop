/**
 * Детальна програма курсу по блокам з розкриваючимися секціями
 */
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Paintbrush, Zap, Globe } from 'lucide-react';

export default function CourseProgram() {
  const [activeBlock, setActiveBlock] = useState<number | null>(0);

  const courseBlocks = [
    {
      id: 1,
      title: 'Знайомство з HTML',
      duration: '6 уроків',
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-500 to-blue-600',
      lessons: [
        'Що таке сайт? Як він працює. Що таке HTML.',
        'Основні теги: <html>, <head>, <body>, <p>, <h1>–<h6>, <br>, <hr>',
        'Створюємо структуру сайту: заголовки, абзаци, лінії',
        'Зображення та посилання: <img>, <a>, атрибути href, src, alt',
        'Списки, таблиці, розмітка контенту',
        'Практика: створюємо просту сторінку «Про мене»'
      ]
    },
    {
      id: 2,
      title: 'Основи CSS',
      duration: '6 уроків',
      icon: <Paintbrush className="w-8 h-8 text-purple-500" />,
      color: 'from-purple-500 to-purple-600',
      lessons: [
        'Що таке CSS. Способи підключення стилів',
        'Кольори, фон, рамки, відступи, шрифти',
        'Позиціонування елементів, display: block/inline/flex',
        'Flexbox: створюємо адаптивні блоки',
        'Селектори, псевдокласи, hover-ефекти',
        'Практика: створюємо власну сторінку з унікальним дизайном'
      ]
    },
    {
      id: 3,
      title: 'JavaScript – перші кроки',
      duration: '6 уроків',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      color: 'from-yellow-500 to-yellow-600',
      lessons: [
        'Що таке JavaScript і навіщо він потрібен',
        'Змінні, операції, типи даних',
        'Події: onClick, onHover. Взаємодія з кнопками',
        'Алгоритми: умовні оператори, цикли',
        'Маніпуляції DOM: document.getElementById, innerHTML',
        'Практика: інтерактивна сторінка з кнопками, які змінюють контент'
      ]
    },
    {
      id: 4,
      title: 'Повноцінний сайт',
      duration: '6 уроків',
      icon: <Globe className="w-8 h-8 text-green-500" />,
      color: 'from-green-500 to-green-600',
      lessons: [
        'Планування сайту: тема, ціль, структура',
        'Розробка головної сторінки',
        'Створення внутрішніх сторінок: "Про нас", "Контакти"',
        'Адаптація під мобільні пристрої',
        'Анімації, ефекти, останні штрихи',
        'Презентація та демонстрація фінального сайту + сертифікат'
      ]
    }
  ];

  /**
   * Перемикання активного блоку програми
   */
  const toggleBlock = (blockId: number) => {
    setActiveBlock(activeBlock === blockId ? null : blockId);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Навчальна <span className="text-red-500">програма</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Курс складається з <span className="text-red-500 font-semibold">4 модулів</span>. 
            Кожен модуль розрахований на конкретний <span className="text-red-500 font-semibold">вік та рівень</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {courseBlocks.map((block, index) => (
            <div 
              key={block.id}
              className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-red-500 transition-all duration-300"
            >
              {/* Заголовок блоку */}
              <button
                onClick={() => toggleBlock(block.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${block.color}`}>
                    {block.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {index + 1} модуль. {block.title}
                    </h3>
                    <p className="text-gray-400">{block.duration}</p>
                  </div>
                </div>
                {activeBlock === block.id ? (
                  <ChevronUp className="w-6 h-6 text-red-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

              {/* Розгорнутий контент */}
              {activeBlock === block.id && (
                <div className="px-6 pb-6">
                  <div className="bg-gray-900 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4 text-red-500">Що вивчаємо:</h4>
                    <ul className="space-y-3">
                      {block.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-start space-x-3">
                          <span className="text-red-500 font-bold mt-1">{lessonIndex + 1}.</span>
                          <span className="text-gray-300 leading-relaxed">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Підсумкова інформація */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">По завершенню курсу кожен учень отримує</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">🏆 Сертифікат</h4>
              <p className="text-red-100">Офіційний документ про завершення курсу</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">🌐 Власний сайт</h4>
              <p className="text-red-100">Повноцінний проєкт для портфоліо</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
