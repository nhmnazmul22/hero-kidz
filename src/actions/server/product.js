"use server";
import { collections } from "@/config/dbConnect";

export const getProducts = async () => {
  try {
    const productColl = await collections.PRODUCTS();
    const cursor = productColl.find({});
    const products = await cursor.toArray();
    return {
      success: true,
      message: "Products retrieved successful",
      data: products,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Products retrieved failed",
    };
  }
};

export const getProductDetails = async (slug) => {
  try {
    const productColl = await collections.PRODUCTS();
    const product = await productColl.findOne({ slug });
    return {
      success: true,
      message: "Product details retrieved successful",
      data: product,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Product details retrieved failed",
    };
  }
};
