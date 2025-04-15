import { tSlide } from "../types";

const womanImg = require("@/assets/images/woman-shopping.png");
const jacketsImg = require("@/assets/images/products/jackets.webp");
const womanImg2 = require("@/assets/images/woman-shopping2.png")
export const slides: tSlide[] = [
  {
    id: "1",
    title: "Welcome! Let’s kickstart your savings",
    imgUrl: womanImg,
  },
  {
    id: "2",
    title: "Shop smarter, save bigger today",
    imgUrl: jacketsImg,
  },
  {
    id: "3",
    title: "Enjoy 20% off your first order",
    imgUrl: womanImg2,
  },
];
