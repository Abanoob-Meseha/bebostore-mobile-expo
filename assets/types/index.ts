export type tCategory = {
  id: string;
  name: string;
};
export type tSubCategory = {
  title: string;
  imgUrl: any;
  id?: string;
};
export type tSlide = {
  id: string;
  title: string;
  imgUrl: any;
};
export type tProduct = {
  id: string;
  name: string;
  offerPercentage: number;
  price: number;
  priceBeforeOffer: number;
  imgUrl: any;
  rating: number;
};
export type tCartProduct = tProduct & {count : number} ;
