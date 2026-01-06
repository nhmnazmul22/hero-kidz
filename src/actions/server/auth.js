import bcrypt from "bcryptjs";
import { collections } from "@/config/dbConnect";

export const registerUser = async (userInfo) => {
  try {
    if (!userInfo.email || !userInfo.fullName || !userInfo.password) {
      return {
        success: false,
        message: "Required filed is missing",
      };
    }

    const usersColl = await collections.USERS();
    const existUser = await usersColl.findOne({ email: userInfo.email });
    if (existUser) {
      return {
        success: false,
        message: "User already exist",
      };
    }

    const hashedPassword = await bcrypt.hash(userInfo.password, 14);
    const payload = {
      fullName: userInfo.fullName,
      email: userInfo.email,
      password: hashedPassword,
    };

    const result = await usersColl.insertOne(payload);
    return {
      success: true,
      message: "Registration successful",
      data: { ...result, insertedId: result.insertedId.toString() },
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Registration failed",
    };
  }
};
