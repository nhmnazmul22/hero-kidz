"use server";

import { collections } from "@/config/dbConnect";
import authOptions from "@/provider/AuthOptionsProvider";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { getProductById } from "./product";

export const handleCart = async (productId) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    return {
      success: false,
      message: "Unauthorize",
    };
  }
  try {
    const res = await getProductById(productId);

    if (!res.success) {
      return {
        success: false,
        message: "Product not found",
      };
    }

    const product = res.data;
    const cartsColl = await collections.CARTS();
    const price = product.price - (product.price * product.discount) / 100;

    const existCart = await cartsColl.findOne({ productId: product._id });
    if (existCart) {
      const newQty = existCart.quantity + 1;
      const newPrice = existCart.price * newQty;

      const updateDoc = {
        $inc: {
          quantity: 1,
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

export const getCarts = async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    return {
      success: false,
      message: "Unauthorize",
    };
  }
  try {
    const cartsColl = await collections.CARTS();
    const result = await cartsColl.find({ email: user.email }).toArray();

    const carts = result.map((cart) => ({
      ...cart,
      _id: cart._id.toString(),
      productId: cart.productId.toString(),
    }));

    return {
      success: true,
      message: "Carts retrieved successful",
      data: carts,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Carts retrieved failed",
    };
  }
};

export const removeCart = async (cartId) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    return {
      success: false,
      message: "Unauthorize",
    };
  }
  try {
    const cartsColl = await collections.CARTS();
    const result = await cartsColl.deleteOne({
      _id: new ObjectId(cartId),
      email: user.email,
    });

    if (!result) {
      return {
        success: false,
        message: "Cart not found",
      };
    }

    return {
      success: true,
      message: "Cart retrieved successful",
      data: result,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Cart retrieved failed",
    };
  }
};
