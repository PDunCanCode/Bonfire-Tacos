export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export const foodItems = [
  {
    name: 'Locally Raised Carnitas',
    img: '/img/carnitastaco.jpg',
    section: 'Tacos',
    price: 10.0,
  },
  {
    name: 'Grass Fed Carne Asada',
    img: '/img/asadatacos.jpg',
    section: 'Tacos',
    price: 11.5,
  },
  {
    name: 'Free Range Pollo',
    img: '/img/chickentacos.jpg',
    section: 'Tacos',
    price: 12,
  },
  {
    img: '/img/veggietacos.jpg',
    name: 'Moral Orel Veggies',
    section: 'Tacos',
    price: 12.0,
  },
  {
    img: '/img/burrito.jpg',
    name: 'Carne-rito',
    section: 'Burritos',
    choices: ['Carne Asada', 'Chicken', 'Shrimp', 'Fish'],
    price: 13,
  },
  {
    img: '/img/burrito2.jpg',
    name: 'Sushi-rito',
    section: 'Burritos',
    choices: ['Salmon', 'Tuna', 'Unagi'],
    price: 13.5,
  },
  {
    img: '/img/sandwich.jpeg',
    name: 'The "Jenny" / Shrimp Torta',
    section: 'Burritos',
    choices: ['Tempura', 'Grilled'],
    price: 14,
  },
  {
    img: '/img/fries.jpeg',
    name: 'Better than In-n-Out Fries',
    section: 'Sides',
    price: 4,
  },
  {
    price: 2,
    img: '/img/soda1.jpg',
    name: 'Interesting Bottles',
    section: 'Drinks',
    choices: ['Lavender Kombucha', 'Diet Pepper', 'Ginger Beer'],
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
