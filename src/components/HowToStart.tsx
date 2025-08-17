/**
 * Секція "Як почати займатись" з покроковим процесом реєстрації
 */
import React from 'react';
import { Calendar, UserCheck, DollarSign } from 'lucide-react';
import { Button } from './ui/button';

export default function HowToStart() {
  const steps = [
    {
      number: 1,
      icon: <Calendar className="w-16 h-16 text-white" />,
      title: 'Заповнюєте заявку на сайті',
      description: 'Ми зв\'язуємось з Вами і записуємо дитину на безкоштовне вступне заняття'
    },
    {
      number: 2,
      icon: <UserCheck className="w-16 h-16 text-white" />,
      title: 'Проводимо пробне заняття',
      description: 'Познайомимось та визначимо рівень знань. Ви побачите як проходять заняття. Складемо індивідуальний план навчання'
    },
    {
      number: 3,
      icon: <DollarSign className="w-16 h-16 text-white" />,
      title: 'Погоджуємо розклад та ціну навчання',
      description: 'Ви знаєте скільки занять необхідно Вашій дитині та оплачуєте їх по мірі необхідності'
    }
  ];

  /**
   * Прокрутка до форми реєстрації
   */
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Як <span className="text-red-500">почати</span> займатись в<br />
            <span className="text-red-500">ItEnAi</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Кроки процесу */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start space-x-6">
                {/* Номер кроку */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold relative">
                    {step.number}
                    {/* Лінія з'єднання (крім останнього елемента) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 left-1/2 w-1 h-20 bg-red-600 transform -translate-x-1/2"></div>
                    )}
                  </div>
                </div>

                {/* Контент кроку */}
                <div className="flex-1 bg-gray-800 rounded-xl p-8 border border-gray-700">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 bg-red-600 rounded-lg p-4">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4 text-red-500">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <Button 
              onClick={scrollToRegistration}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
            >
              ЗАЛИШИТИ ЗАЯВКУ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
