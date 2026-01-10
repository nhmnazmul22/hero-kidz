export const createOrder = async (payload) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    return {
      success: false,
      message: "Unauthorize",
    };
  }
  try {
    return {
      success: true,
      message: "Order creation successful",
      data: "",
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Order creation failed",
    };
  }
};
