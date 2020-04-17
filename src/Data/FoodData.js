export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export const foodItems = [
  {
    name: 'Locally Sourced Cheese Pizza',
    img: '/img/pizza.png',
    section: 'Pizza',
    price: 10.0,
  },
  {
    name: 'Uncured Pepperoni',
    img: '/img/pizza2.jpeg',
    section: 'Pizza',
    price: 11.5,
  },
  {
    name: 'Local Organic Sausage & Honey',
    img: '/img/chicken-pizza.jpeg',
    section: 'Pizza',
    price: 12,
  },
  {
    img: '/img/healthy-pizza.jpeg',
    name: 'Moral Orel Veggie Pizza',
    section: 'Pizza',
    price: 12.0,
  },
  {
    img: '/img/burger.jpeg',
    name: 'Pasteur Raised Burger',
    section: 'Sandwich',
    price: 13,
  },
  {
    img: '/img/gyro.jpeg',
    name: 'Organic Gyro Wrap',
    section: 'Sandwich',
    price: 13.5,
  },
  {
    img: '/img/sandwich.jpeg',
    name: 'The "Jenny" / Shrimp PoBoy',
    section: 'Sandwich',
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
