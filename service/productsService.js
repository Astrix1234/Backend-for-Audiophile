const getAllProducts = async () => {
  return Product.find({});
};

export default {
  getAllProducts,
};
