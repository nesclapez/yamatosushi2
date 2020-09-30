import HomeScreen from "../HomeScreen";
import BasketScreen from "../BasketScreen";

export default {
  home: {
    path: "/",
    title: "Homepage",
    component: HomeScreen,
  },
  basket: {
    path: "/basket",
    title: "Basket",
    component: BasketScreen,
  },
};
