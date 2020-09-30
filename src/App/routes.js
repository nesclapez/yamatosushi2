import HomeScreen from "../HomeScreen";
import BasketScreen from "../BasketScreen";
import SettingsScreen from "../SettingsScreen";

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
  other: {
    path: "/settings",
    title: "Settings",
    component: SettingsScreen,
  },
};
