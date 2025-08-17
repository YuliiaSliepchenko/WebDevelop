/**
 * Форма реєстрації на пробне заняття з валідацією полів
 */
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { CheckCircle, Phone, Mail, User, MessageCircle } from 'lucide-react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    childAge: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Обробка зміни значень у полях форми
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Відправка форми
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Імітація відправки форми
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <CheckCircle className="w-24 h-24 text-white mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6 text-white">
              Дякуємо за заявку!
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Наш менеджер зв'яжеться з Вами найближчим часом для узгодження 
              дати та часу безкоштовного пробного заняття.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Що далі?</h3>
              <ul className="text-left space-y-2 text-green-100">
                <li>✅ Дзвінок менеджера протягом 30 хвилин</li>
                <li>✅ Призначення дати пробного заняття</li>
                <li>✅ Надсилання посилання на онлайн-урок</li>
                <li>✅ Індивідуальний план навчання</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Декоративний фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Розпочніть із запису на<br />
            <span className="text-red-500">БЕЗОПЛАТНЕ</span> пробне заняття
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ваша дитина буде <span className="text-white font-semibold">задоволена навчанням</span>, а 
            Ви — <span className="text-red-500 font-semibold">результатом</span>.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Ім'я батьків */}
              <div>
                <Label htmlFor="name" className="text-white flex items-center space-x-2 mb-2">
                  <User className="w-4 h-4" />
                  <span>Ваше ім'я</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Введіть Ваше ім'я"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                />
              </div>

              {/* Телефон */}
              <div>
                <Label htmlFor="phone" className="text-white flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>Номер телефону</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+380 (99) 999-99-99"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-white flex items-center space-x-2 mb-2">
                  <Mail className="w-4 h-4" />
                  <span>Ваш E-mail</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Введіть Ваш E-mail"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                />
              </div>

              {/* Вік дитини */}
              <div>
                <Label htmlFor="childAge" className="text-white flex items-center space-x-2 mb-2">
                  <User className="w-4 h-4" />
                  <span>Вік дитини</span>
                </Label>
                <Input
                  id="childAge"
                  name="childAge"
                  type="number"
                  min="9"
                  max="18"
                  required
                  value={formData.childAge}
                  onChange={handleInputChange}
                  placeholder="Скільки років дитині?"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                />
              </div>

              {/* Додаткове повідомлення */}
              <div>
                <Label htmlFor="message" className="text-white flex items-center space-x-2 mb-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Додаткові побажання (необов'язково)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Розкажіть про цілі навчання або особливі побажання..."
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 resize-none"
                  rows={4}
                />
              </div>

              {/* Кнопка відправки */}
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Відправляємо...</span>
                  </div>
                ) : (
                  'ЗАЛИШИТИ ЗАЯВКУ'
                )}
              </Button>

              {/* Згода з політикою */}
              <p className="text-sm text-gray-400 text-center">
                Натискаючи кнопку "Залишити заявку", Ви погоджуєтеся з{' '}
                <a href="#" className="text-red-500 hover:underline">
                  "Політикою конфіденційності"
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
