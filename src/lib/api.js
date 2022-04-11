import { commerce } from "./commerce";

export const getAllCategories = async () => {
  const { data } = await commerce.categories.list();
  return data;
};

export const getAllProducts = async () => {
  const { data } = await commerce.products.list();
  return data;
};
