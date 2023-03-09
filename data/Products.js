const products = [
  {
    name: 'Обувница Мини-Лайт МЛ-7',
    image: '/images/3.png',
    description: `Недорогая обувница с двумя откидными секциями под обувь (вместительность до 8 пар обуви) и одним выдвижным ящиком для хранения аксессуаров и других полезных мелочей.  Небольшая и узкая обувница из набора мебели для прихожей Мини-Лайт легко разместиться практически в любой малогабаритной прихожей.`,
    price: 200,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Шкаф-купе Бася ШК-551',
    image: '/images/4.jpg',
    description:
      'Шкаф-купе Бася в меру вместительный и функциональный элемент мебели. Внутри располагается штанга для вешалок (2/3 ширины шкафа) и полки для одежды и аксессуаров. На центральной части фасадов расположено зеркало, которое выступает в роли активного элемента интерьера.',
    price: 585,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Комод Палермо КМ-022',
    image: '/images/5.png',
    description:
      'Комод Палермо предназначен для хранения белья и других предметов одежды. Выполнен в оригинальном стиле и отличается отсутствием ручек, ящики выдвигаются благодаря специальным выемкам, расположенным непосредственно на лицевой панели фасада. Каждая деталь обшита высококачественной кромкой ПВХ в цвет ЛДСП толщиной 0,3 мм. Корпус комода изготовлен из ЛДСП Ясень Шимо Светлый, толщиной 16 мм.  Материал фасада МДФ белый глянец.',
    price: 372,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Компьютерный стол СК-10',
    image: '/images/6.png',
    description:
      'Компьютерный стол СК-10 отличается большой рабочей поверхностью, есть три вместительных ящика, просторные открытые полки над столом для бумаг, книг и всегда нужных мелочей, и закрытые полки для документов. С таким столом вы приобретете удобное рабочее место, практически миниофис со всем необходимым.',
    price: 655,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Диван прямой Денвер Микровельвет бежевый/коричневый',
    image: '/images/7.jpg',
    description:
      'Коллекция	Денвер, Материал обивки	Микровельвет, Ширина	2000, Глубина	1070, Высота	1000, Ширина спального места 1550x2000',
    price: 1727,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Прямой диван книжка Сенатор Рогожка бежевый/коричневый',
    image: '/images/8.jpg',
    description: `Особенности прямого дивана Сенатор «книжка»:
Гипоаллергенность и экологичность
Комбинация таких слоев для дивана отличается гипоаллергенностью, безопасностью для здоровья и экологичностью. Дополнительная обработка добавляет противогрибковых и антибактериальных свойств.
Воздухопроницаемость
Отличная воздухопроницаемость сохраняет высокие характеристики изделия, препятствует скапливаю влаги. Уход прост благодаря качественной ткани.
Стойкость к деформации и эластичность
Отличная эластичность и устойчивость к деформации – гарантия легкого и быстрого восстановления формы после сидения.
Эргономичность
Конструкция приспосабливается под контур тела. Доступная цена выступает дополнительным преимуществом.
Компактность
При компактных габаритах: 210x85x90 см подойдет для комнат любых размеров, легко раскладывается, обеспечивая спальное место 115x180 см.`,
    price: 983,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Диван прямой Амстердам Велюр Бежевый',
    image: '/images/9.jpg',
    description: `Коллекция	Амстердам
Материал обивки	Велюр
Ширина	2250
Глубина	1030
Высота	850
Ширина спального места	1470x1900`,
    price: 1588,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Кровать Бася 0,9м шимо темный/шимо светлый КР-555',
    image: '/images/10.jpg',
    description: `Кровать Бася - основной элемент мебели в спальной комнате. Данная двуспальная кровать состоит из каркаса, изголовья высотой 70 см и торцевой царги.`,
    price: 250,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Кровать Бася 1,6м венге/дуб белфорд КР-558',
    image: '/images/11.jpg',
    description: `Кровать Бася - основной элемент мебели в спальной комнате. Данная двуспальная кровать состоит из каркаса, изголовья высотой 70 см и торцевой царги. Размеры спального места	1600х2000`,
    price: 372,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Краш',
    image: '/images/1.jpg',
    description: `Раскладной диван «Краш» соответствует современным требованиям мебельной моды и выступает центром притяжения внимания в большинстве интерьеров. Владельцы этой мебели отмечают ее практичность и красоту. В диване предусмотрены широкое посадочное место, две большие подушки-спинки, мягкие подлокотники. А деревянные ножки и мягкие линии подлокотников делают изделие элегантным, стильным.
    Этот диван является отличным решением для расположения как в зале, так и в комнате для гостей. Вы можете купить модель для семейных, дружеских посиделок или в качестве гостевого спального места. Механизм трансформации — «Тик-Так». Для раскладки дивана потребуется пара простых движений. Габариты мебели в разложенном состоянии — 2000 на 1550 мм.
    В основании модели пружинный блок «Боннель». Он прочный, надежный, выдерживает значительные нагрузки. А стальной каркас обеспечивает хорошую устойчивость.
    Также стоит отметить наличие удобного ящика для хранения белья. С его помощью вы быстро и легко спрячете постельные принадлежности и сохраните порядок в доме.`,
    price: 1,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Сенатор',
    image: '/images/2.jpg',
    description: `Особенности прямого дивана Сенатор «книжка»:\n
      Гипоаллергенность и экологичность\n
      Комбинация таких слоев для дивана отличается гипоаллергенностью, безопасностью для здоровья и экологичностью. Дополнительная обработка добавляет противогрибковых и антибактериальных свойств.\n
      Воздухопроницаемость\n
      Отличная воздухопроницаемость сохраняет высокие характеристики изделия, препятствует скапливаю влаги. Уход прост благодаря качественной ткани.\n
      Стойкость к деформации и эластичность\n
      Отличная эластичность и устойчивость к деформации – гарантия легкого и быстрого восстановления формы после сидения.\n
      Эргономичность\n
      Конструкция приспосабливается под контур тела. Доступная цена выступает дополнительным преимуществом.\n
      Компактность\n
      При компактных габаритах: 210x85x90 см подойдет для комнат любых размеров, легко раскладывается, обеспечивая спальное место 115x180 см.`,
    price: 983,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
