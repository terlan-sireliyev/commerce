import { create } from "zustand";
import useBasket from "./BasketCardSlice";
const globalBasketData = create((...value) => ({ ...useBasket(...value) }));
export default globalBasketData;
