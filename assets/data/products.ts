import { tProduct } from "../types";

export const products: tProduct[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    offerPercentage: 20,
    price: 80,
    priceBeforeOffer: 100,
    imgUrl: require("@/assets/images/products/airbuds.png"),
    rating: 4.5,
  },
  {
    id: "2",
    name: "Sofa",
    offerPercentage: 15,
    price: 170,
    priceBeforeOffer: 200,
    imgUrl: require("@/assets/images/products/furniture.webp"),
    rating: 4.2,
  },
  {
    id: "3",
    name: "Guitar",
    offerPercentage: 25,
    price: 45,
    priceBeforeOffer: 60,
    imgUrl: require("@/assets/images/products/guitar.png"),
    rating: 4.8,
  },
  {
    id: "4",
    name: "Iphone 16",
    offerPercentage: 10,
    price: 27,
    priceBeforeOffer: 30,
    imgUrl: require("@/assets/images/products/iphone.webp"),
    rating: 4.1,
  },
  {
    id: "5",
    name: "Jackets",
    offerPercentage: 30,
    price: 35,
    priceBeforeOffer: 50,
    imgUrl: require("@/assets/images/products/jackets.webp"),
    rating: 4.6,
  },
  {
    id: "6",
    name: "Nike Fitness",
    offerPercentage: 18,
    price: 82,
    priceBeforeOffer: 100,
    imgUrl: require("@/assets/images/products/nike.png"),
    rating: 4.0,
  }
];
