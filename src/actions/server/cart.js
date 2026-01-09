"use server";

import { collections } from "@/config/dbConnect";
import authOptions from "@/provider/AuthOptionsProvider";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export const handleCart = async (product, inc = true) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    return {
      success: false,
      message: "Unauthorize",
    };
  }

  try {
    const cartsColl = await collections.CARTS();
    const price = product.price - (product.price * product.discount) / 100;

    const existCart = await cartsColl.findOne({ productId: product._id });
    if (existCart) {
      const newQty = inc ? existCart.quantity + 1 : existCart.quantity - 1;
      const newPrice = existCart.price * newQty;

      const updateDoc = {
        $inc: {
          quantity: inc ? 1 : -1,
        },
        $set: {
          totalPrice: newPrice,
        },
      };

      const updatedRes = await cartsColl.updateOne(
        { _id: new ObjectId(existCart._id) },
        updateDoc
      );

      return {
        success: true,
        message: "Product updated to cart",
        data: updatedRes,
      };
    }

    const payload = {
      productId: product._id,
      email: user.email,
      title: product.title,
      bnTitle: product.bangla,
      quantity: 1,
      image: product.image,
      price: price,
      totalPrice: price * 1,
      username: user.username,
    };
    const result = await cartsColl.insertOne(payload);

    return {
      success: true,
      message: "Product add to cart",
      data: { ...result, insertedId: result.insertedId.toString() },
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Product add to cart failed",
    };
  }
};
