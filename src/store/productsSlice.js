import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      name: "Zestaw Gamingowy 16 GB 480GD 480SSD Feforce 2gb Monitor22",
      price: "129.95",
      id: "p1",
      url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
    },
    {
      name: "Mini PC Lenovo Tiny m710Q 8GB 240SSD",
      price: "1229.95",
      id: "p2",
      url: "https://ustyle.pl/wp-content/uploads/2019/01/1113.jpg",
    },
    {
      name: "ZESTAW PC Gamingowy i5 32/960gb SSD GEFORCE",
      price: "59.95",
      id: "p3",
      url: "https://florina.pl/pol_pl_Garnek-emaliowany-Emalia-Polska-Pleszew-gladki-bez-pokrywki-16-cm-2-5-l-czerwony-552_1.jpg",
    },
    {
      name: "Computer4",
      price: "129.95",
      id: "p4",
      url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
    },
    {
      name: "Garnek5",
      price: "59.95",
      id: "p5",
      url: "https://florina.pl/pol_pl_Garnek-emaliowany-Emalia-Polska-Pleszew-gladki-bez-pokrywki-16-cm-2-5-l-czerwony-552_1.jpg",
    },
    {
      name: "Zegarek6",
      price: "1229.95",
      id: "p6",
      url: "https://ustyle.pl/wp-content/uploads/2019/01/1113.jpg",
    },
    {
      name: "Computer7",
      price: "129.95",
      id: "p7",
      url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
    },
    {
      name: "Garnek8",
      price: "59.95",
      id: "p8",
      url: "https://florina.pl/pol_pl_Garnek-emaliowany-Emalia-Polska-Pleszew-gladki-bez-pokrywki-16-cm-2-5-l-czerwony-552_1.jpg",
    },
    {
      name: "Computer9",
      price: "129.95",
      id: "p9",
      url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
    },
  ],
  currentProduct: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      state.currentProduct = product;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
