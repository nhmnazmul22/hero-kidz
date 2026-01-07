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

    const hashedPassword = await bcrypt.hash(userInfo.password.trim(), 10);
    const payload = {
      provider: userInfo?.provider || "credential",
      fullName: userInfo.fullName,
      email: userInfo.email,
      password: hashedPassword,
      role: "user",
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

export const loginUser = async (credential) => {
  try {
    if (!credential.email || !credential.password) {
      return {
        success: false,
        message: "Required filed is missing",
      };
    }

    const usersColl = await collections.USERS();
    const existUser = await usersColl.findOne({ email: credential.email });
    if (!existUser) {
      return {
        success: false,
        message: "Unauthenticated existUser",
      };
    }

    console.log(credential);
    const isPasswordMatch = await bcrypt.compare(
      credential.password,
      existUser.password
    );

    if (!isPasswordMatch) {
      return {
        success: false,
        message: "Unauthenticated password",
      };
    }

    return {
      success: true,
      message: "Login successful",
      data: existUser,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Login failed",
    };
  }
};
