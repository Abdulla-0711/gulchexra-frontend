export type Language = 'uz' | 'en' | 'ru';

export const translations = {
  nav: {
    home: { uz: 'Bosh sahifa', en: 'Home', ru: 'Главная' },
    products: { uz: 'Mahsulotlar', en: 'Products', ru: 'Продукция' },
    about: { uz: 'Biz haqimizda', en: 'About', ru: 'О нас' },
    faq: { uz: 'FAQ', en: 'FAQ', ru: 'FAQ' },
    contact: { uz: 'Aloqa', en: 'Contact', ru: 'Контакты' },
    cart: { uz: 'Savat', en: 'Cart', ru: 'Корзина' },
  },
  hero: {
    title: {
      uz: "Premium To'qimachilik Mahsulotlari",
      en: 'Premium Textile Products',
      ru: 'Премиальная Текстильная Продукция',
    },
    subtitle: {
      uz: "21 yillik tajriba bilan sifatli ayollar va bolalar kiyimlari",
      en: 'Quality women\'s and children\'s clothing with 21 years of experience',
      ru: 'Качественная женская и детская одежда с 21-летним опытом',
    },
    cta: { uz: 'Mahsulotlarni ko\'rish', en: 'View Products', ru: 'Смотреть продукцию' },
  },
  stats: {
    experience: { uz: 'Yillik tajriba', en: 'Years Experience', ru: 'Лет опыта' },
    projects: { uz: 'Tugallangan loyihalar', en: 'Completed Projects', ru: 'Завершённых проектов' },
    partners: { uz: 'Hamkor davlatlar', en: 'Partner Countries', ru: 'Стран-партнёров' },
    quality: { uz: 'Sifat kafolati', en: 'Quality Guarantee', ru: 'Гарантия качества' },
  },
  whyUs: {
    title: { uz: 'Nega aynan biz?', en: 'Why Choose Us?', ru: 'Почему именно мы?' },
    quality: {
      title: { uz: 'Sifat nazorati', en: 'Quality Control', ru: 'Контроль качества' },
      desc: { uz: "Har bir mahsulot qat'iy sifat nazoratidan o'tadi", en: 'Every product goes through strict quality control', ru: 'Каждый продукт проходит строгий контроль качества' },
    },
    attention: {
      title: { uz: "Har bir mahsulotga e'tibor", en: 'Attention to Every Product', ru: 'Внимание к каждому изделию' },
      desc: { uz: "Nuqsonli mahsulotlar sotuvga chiqarilmaydi", en: 'Defective items are not released for sale', ru: 'Дефектные изделия не выпускаются в продажу' },
    },
    delivery: {
      title: { uz: "To'g'ridan-to'g'ri yetkazib berish", en: 'Direct Delivery', ru: 'Прямая доставка' },
      desc: { uz: "Mahsulotlar mijozlarga to'g'ridan-to'g'ri yetkaziladi", en: 'Products are delivered directly to customers', ru: 'Продукция доставляется напрямую клиентам' },
    },
    stone: {
      title: { uz: 'Tosh bosma dizaynlar', en: 'Stone Print Designs', ru: 'Дизайны каменной печати' },
      desc: { uz: "Matolarga tosh bosma texnologiyasi bilan turli dizaynlar", en: 'Various designs with stone printing technology on fabrics', ru: 'Различные дизайны с технологией каменной печати на тканях' },
    },
  },
  featured: {
    title: { uz: 'Mashhur mahsulotlar', en: 'Featured Products', ru: 'Популярные товары' },
    viewAll: { uz: 'Barchasini ko\'rish', en: 'View All', ru: 'Смотреть все' },
  },
  products: {
    title: { uz: 'Barcha mahsulotlar', en: 'All Products', ru: 'Вся продукция' },
    addToCart: { uz: 'Savatga qo\'shish', en: 'Add to Cart', ru: 'В корзину' },
    details: { uz: 'Batafsil', en: 'Details', ru: 'Подробнее' },
    loading: { uz: 'Yuklanmoqda...', en: 'Loading...', ru: 'Загрузка...' },
    empty: { uz: 'Mahsulotlar topilmadi', en: 'No products found', ru: 'Товары не найдены' },
    error: { uz: 'Xatolik yuz berdi', en: 'An error occurred', ru: 'Произошла ошибка' },
    price: { uz: "so'm", en: 'UZS', ru: 'сум' },
  },
  productDetail: {
    quantity: { uz: 'Miqdor', en: 'Quantity', ru: 'Количество' },
    buyNow: { uz: 'Hozir sotib olish', en: 'Buy Now', ru: 'Купить сейчас' },
    back: { uz: 'Ortga', en: 'Back', ru: 'Назад' },
  },
  about: {
    title: { uz: 'Biz haqimizda', en: 'About Us', ru: 'О нас' },
    established: {
      uz: "Chevar Textile 2005-yilda tashkil etilgan. Kompaniya ayollar va bolalar kiyimlarini ishlab chiqaradi, matolarga tosh bosma ishlari bilan shug'ullanadi, turli tosh dizaynlarini yaratadi. 21 yillik tajribaga ega bo'lib, 10 000 dan ortiq loyihalarni amalga oshirgan va Qozog'iston, Qirg'iziston, Tojikiston hamda mintaqaviy bozorlar bilan hamkorlik qiladi.",
      en: 'Chevar Textile was established in 2005. The company produces women\'s and children\'s clothing, works with stone printing on fabrics, creates various stone designs. With 21 years of experience, it has completed over 10,000 projects and works with partners from Kazakhstan, Kyrgyzstan, Tajikistan, and regional markets.',
      ru: 'Chevar Textile основана в 2005 году. Компания производит женскую и детскую одежду, работает с каменной печатью на тканях, создаёт различные каменные дизайны. Имея 21-летний опыт, она выполнила более 10 000 проектов и сотрудничает с партнёрами из Казахстана, Кыргызстана, Таджикистана и региональных рынков.',
    },
    advantages: { uz: 'Bizning afzalliklarimiz', en: 'Our Advantages', ru: 'Наши преимущества' },
  },
  faq: {
    title: { uz: "Ko'p so'raladigan savollar", en: 'Frequently Asked Questions', ru: 'Часто задаваемые вопросы' },
    items: [
      {
        q: { uz: 'Qanday buyurtma berish mumkin?', en: 'How can I place an order?', ru: 'Как сделать заказ?' },
        a: { uz: "Saytimiz orqali mahsulotlarni savatga qo'shib, buyurtma berishingiz mumkin. Shuningdek, telefon orqali ham buyurtma qabul qilamiz.", en: 'You can add products to your cart on our website and place an order. We also accept orders by phone.', ru: 'Вы можете добавить товары в корзину на нашем сайте и оформить заказ. Мы также принимаем заказы по телефону.' },
      },
      {
        q: { uz: 'Ishlab chiqarish muddati qancha?', en: 'What is the production time?', ru: 'Каковы сроки производства?' },
        a: { uz: "Buyurtma hajmiga qarab 5-15 ish kunida tayyor bo'ladi.", en: 'Depending on the order volume, it will be ready in 5-15 business days.', ru: 'В зависимости от объёма заказа, готовность составляет 5-15 рабочих дней.' },
      },
      {
        q: { uz: 'Yetkazib berish xizmati bormi?', en: 'Do you offer delivery?', ru: 'Есть ли доставка?' },
        a: { uz: "Ha, mahsulotlarni to'g'ridan-to'g'ri mijozlarga yetkazib beramiz.", en: 'Yes, we deliver products directly to customers.', ru: 'Да, мы доставляем продукцию напрямую клиентам.' },
      },
      {
        q: { uz: "Maxsus dizayn buyurtma qilish mumkinmi?", en: 'Can I order a custom design?', ru: 'Можно заказать индивидуальный дизайн?' },
        a: { uz: "Albatta! Biz tosh bosma texnologiyasi bilan turli xil maxsus dizaynlar yaratamiz.", en: 'Of course! We create various custom designs using stone printing technology.', ru: 'Конечно! Мы создаём различные индивидуальные дизайны с использованием технологии каменной печати.' },
      },
      // {
      //   q: { uz: 'Ulgurji savdo qilasizmi?', en: 'Do you sell wholesale?', ru: 'Вы продаёте оптом?' },
      //   a: { uz: "Ha, biz ulgurji buyurtmalarni qabul qilamiz. Batafsil ma'lumot uchun biz bilan bog'laning.", en: 'Yes, we accept wholesale orders. Contact us for more details.', ru: 'Да, мы принимаем оптовые заказы. Свяжитесь с нами для подробностей.' },
      // },
      // {
      //   q: { uz: 'Qaysi hududlarga xizmat ko\'rsatasiz?', en: 'Which regions do you serve?', ru: 'Какие регионы вы обслуживаете?' },
      //   a: { uz: "O'zbekiston bo'ylab va Qozog'iston, Qirg'iziston, Tojikiston hamda mintaqaviy bozorlarga xizmat ko'rsatamiz.", en: 'We serve throughout Uzbekistan and work with Kazakhstan, Kyrgyzstan, Tajikistan, and regional markets.', ru: 'Мы обслуживаем всю территорию Узбекистана и работаем с Казахстаном, Кыргызстаном, Таджикистаном и региональными рынками.' },
      // },
      {
        q: { uz: 'Qanday bog\'lanish mumkin?', en: 'How can I contact you?', ru: 'Как с вами связаться?' },
        a: { uz: "Telefon, elektron pochta yoki ofisimizga tashrif buyurish orqali bog'lanishingiz mumkin.", en: 'You can contact us by phone, email, or visit our office.', ru: 'Вы можете связаться с нами по телефону, электронной почте или посетив наш офис.' },
      },
    ],
  },
  contact: {
    title: { uz: 'Biz bilan bog\'laning', en: 'Contact Us', ru: 'Свяжитесь с нами' },
    address: { uz: 'Manzil', en: 'Address', ru: 'Адрес' },
    addressValue: { uz: 'Toshkent shahri, Uchtepa tumani, Zakariya Razi 24', en: 'Tashkent city, Uchtepa district, Zakariya Razi 24', ru: 'г. Ташкент, Учтепинский район, Закария Рази 24' },
    hours: { uz: 'Ish vaqti', en: 'Working Hours', ru: 'Часы работы' },
    hoursValue: { uz: '08:00–18:00', en: '08:00–18:00', ru: '08:00–18:00' },
    phone: { uz: 'Telefon', en: 'Phone', ru: 'Телефон' },
    email: { uz: 'Elektron pochta', en: 'Email', ru: 'Эл. почта' },
  },
  order: {
    title: { uz: 'Buyurtma berish', en: 'Place Order', ru: 'Оформить заказ' },
    fullName: { uz: "To'liq ism", en: 'Full Name', ru: 'Полное имя' },
    phone: { uz: 'Telefon raqam', en: 'Phone Number', ru: 'Номер телефона' },
    address: { uz: 'Manzil', en: 'Address', ru: 'Адрес' },
    email: { uz: 'Elektron pochta', en: 'Email', ru: 'Эл. почта' },
    oferta: { uz: 'Oferta shartlarini qabul qilaman', en: 'I accept the offer terms', ru: 'Я принимаю условия оферты' },
    totalPrice: { uz: 'Jami narx', en: 'Total Price', ru: 'Итого' },
    submit: { uz: 'Buyurtma berish', en: 'Place Order', ru: 'Оформить заказ' },
    submitting: { uz: 'Yuborilmoqda...', en: 'Submitting...', ru: 'Отправка...' },
    success: { uz: 'Buyurtma muvaffaqiyatli yuborildi!', en: 'Order placed successfully!', ru: 'Заказ успешно оформлен!' },
    error: { uz: 'Xatolik yuz berdi. Qayta urinib ko\'ring.', en: 'An error occurred. Please try again.', ru: 'Произошла ошибка. Попробуйте ещё раз.' },
    required: { uz: 'Majburiy maydon', en: 'Required field', ru: 'Обязательное поле' },
    invalidEmail: { uz: "Noto'g'ri email", en: 'Invalid email', ru: 'Неверный email' },
    invalidPhone: { uz: "Noto'g'ri telefon raqam", en: 'Invalid phone number', ru: 'Неверный номер телефона' },
  },
  cart: {
    title: { uz: 'Savat', en: 'Shopping Cart', ru: 'Корзина' },
    empty: { uz: 'Savat bo\'sh', en: 'Cart is empty', ru: 'Корзина пуста' },
    remove: { uz: "O'chirish", en: 'Remove', ru: 'Удалить' },
    total: { uz: 'Jami', en: 'Total', ru: 'Итого' },
    checkout: { uz: 'Buyurtma berish', en: 'Checkout', ru: 'Оформить заказ' },
    continueShopping: { uz: 'Xaridni davom ettirish', en: 'Continue Shopping', ru: 'Продолжить покупки' },
  },
  footer: {
    rights: { uz: 'Barcha huquqlar himoyalangan', en: 'All rights reserved', ru: 'Все права защищены' },
    description: {
      uz: "Premium to'qimachilik mahsulotlari ishlab chiqaruvchisi. 2005-yildan beri sifat va ishonch.",
      en: 'Premium textile products manufacturer. Quality and trust since 2005.',
      ru: 'Производитель премиальной текстильной продукции. Качество и доверие с 2005 года.',
    },
  },
  theme: {
    light: { uz: 'Yorug\'', en: 'Light', ru: 'Светлая' },
    dark: { uz: 'Qorong\'u', en: 'Dark', ru: 'Тёмная' },
  },
} as const;

export function t(obj: Record<Language, string>, lang: Language): string {
  return obj[lang] || obj.en;
}
