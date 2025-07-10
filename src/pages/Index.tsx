import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="h-8 w-8 text-gold" />
              <h1 className="text-2xl font-bold text-charcoal">Премиум СПА</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="hover-gold text-charcoal font-medium"
              >
                Услуги
              </a>
              <a
                href="#products"
                className="hover-gold text-charcoal font-medium"
              >
                Продукция
              </a>
              <a
                href="#reviews"
                className="hover-gold text-charcoal font-medium"
              >
                Отзывы
              </a>
              <a href="#about" className="hover-gold text-charcoal font-medium">
                О нас
              </a>
              <a
                href="#contact"
                className="hover-gold text-charcoal font-medium"
              >
                Контакты
              </a>
            </nav>
            <Button className="luxury-gradient text-white hover:opacity-90">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cream to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="luxury-gradient text-white mb-4">
                Премиальный сервис
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
                Восстановительный
                <span className="text-gold block">массаж</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональный массаж для восстановления здоровья стоп.
                Индивидуальные анатомические стельки и валики собственного
                производства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="luxury-gradient text-white hover:opacity-90"
                >
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Записаться на массаж
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-white"
                >
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-2xl"></div>
              <img
                src="/img/1031deaf-128c-4951-aab7-9b83ec0b3287.jpg"
                alt="Роскошный массажный салон"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Профессиональный подход к восстановлению здоровья
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mb-4">
                  <Icon name="HandHeart" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-charcoal">
                  Восстановительный массаж
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Специализированный массаж для восстановления функций стоп
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-gold mr-2" />
                    Устранение болевых ощущений
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-gold mr-2" />
                    Улучшение кровообращения
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-gold mr-2" />
                    Профилактика заболеваний
                  </li>
                </ul>
                <Button className="w-full mt-6 luxury-gradient text-white">
                  Записаться на массаж
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-charcoal">
                  Обучение
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Курсы массажа с выдачей сертификатов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-gold mr-2" />
                    Сертифицированные программы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-gold mr-2" />
                    Практические занятия
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-gold mr-2" />
                    Опытные преподаватели
                  </li>
                </ul>
                <Button className="w-full mt-6 luxury-gradient text-white">
                  Узнать подробности
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-charcoal">
                  Консультации
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Индивидуальные консультации по здоровью стоп
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-gold mr-2" />
                    Диагностика состояния стоп
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-gold mr-2" />
                    Рекомендации по лечению
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-gold mr-2" />
                    Подбор продукции
                  </li>
                </ul>
                <Button className="w-full mt-6 luxury-gradient text-white">
                  Записаться на консультацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-gray-600">
              Товары собственного производства для здоровья стоп
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-2 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <img
                  src="/img/9e103097-5d67-4f67-9021-3b0a592388ac.jpg"
                  alt="Валики для стоп"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-2xl text-charcoal">
                  Валики для стоп
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Специальные валики для устранения нарушений свода стопы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Материал:</span>
                    <span className="text-sm font-medium">
                      Медицинский силикон
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Размеры:</span>
                    <span className="text-sm font-medium">Универсальные</span>
                  </div>
                  <Button className="w-full luxury-gradient text-white">
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    Добавить в корзину
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-gold/10 to-gold/20 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Footprints" className="h-16 w-16 text-gold" />
                </div>
                <CardTitle className="text-2xl text-charcoal">
                  Анатомические стельки
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Индивидуальные стельки по анатомии вашей стопы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Изготовление:</span>
                    <span className="text-sm font-medium">Индивидуально</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Срок:</span>
                    <span className="text-sm font-medium">3-5 дней</span>
                  </div>
                  <Button className="w-full luxury-gradient text-white">
                    <Icon name="Ruler" className="mr-2 h-4 w-4" />
                    Заказать замер
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-gold/10 to-gold/20 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Sparkles" className="h-16 w-16 text-gold" />
                </div>
                <CardTitle className="text-2xl text-charcoal">
                  Косметика
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Скоро в продаже - премиальная косметика для ухода
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Badge
                    variant="outline"
                    className="w-full justify-center text-gold border-gold"
                  >
                    В разработке
                  </Badge>
                  <p className="text-sm text-gray-600 text-center">
                    Подпишитесь на уведомления о запуске новой линейки косметики
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-white"
                  >
                    <Icon name="Bell" className="mr-2 h-4 w-4" />
                    Уведомить о запуске
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((review) => (
              <Card
                key={review}
                className="border-2 hover:border-gold transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                      <Icon name="User" className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-charcoal">Анна С.</h4>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon
                            key={star}
                            name="Star"
                            className="h-4 w-4 text-gold fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Восстановительный массаж помог мне забыть о болях в стопах.
                    Профессиональный подход и приятная атмосфера. Обязательно
                    вернусь!"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                О нашем салоне
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы специализируемся на восстановительном массаже и производстве
                индивидуальных изделий для здоровья стоп. Наша команда
                профессионалов поможет вам восстановить здоровье и комфорт при
                ходьбе.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Award" className="h-6 w-6 text-gold mr-3" />
                  <span className="text-charcoal">
                    Сертифицированные специалисты
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon name="Heart" className="h-6 w-6 text-gold mr-3" />
                  <span className="text-charcoal">Индивидуальный подход</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" className="h-6 w-6 text-gold mr-3" />
                  <span className="text-charcoal">Гарантия качества</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold text-gold mb-2">500+</h3>
                  <p className="text-gray-600">Довольных клиентов</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold text-gold mb-2">3+</h3>
                  <p className="text-gray-600">Года опыта</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold text-gold mb-2">100%</h3>
                  <p className="text-gray-600">Качество продукции</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold text-gold mb-2">50+</h3>
                  <p className="text-gray-600">Сертификатов выдано</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-300">
              Свяжитесь с нами для записи или консультации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Phone"
                  className="h-12 w-12 text-gold mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-gray-300">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MapPin"
                  className="h-12 w-12 text-gold mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-gray-300">г. Москва, ул. Примерная, 123</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Clock"
                  className="h-12 w-12 text-gold mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                <p className="text-gray-300">
                  Пн-Сб: 9:00-21:00
                  <br />
                  Вс: 10:00-18:00
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="luxury-gradient text-white hover:opacity-90"
            >
              <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
              Записаться на прием
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" className="h-8 w-8 text-gold" />
                <h3 className="text-xl font-bold">Премиум СПА</h3>
              </div>
              <p className="text-gray-400">
                Восстановительный массаж и товары для здоровья стоп
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Восстановительный массаж</li>
                <li>Обучение массажу</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Валики для стоп</li>
                <li>Анатомические стельки</li>
                <li>Косметика (скоро)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@premium-spa.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Премиум СПА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
