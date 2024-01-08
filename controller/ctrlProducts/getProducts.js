import productsService from "#service/productsService.js";

export const get = async (req, res, next) => {
  try {
    const results = await productsService.getAllProducts(value);
    res.json({
      status: "success",
      code: 200,
      data: {
        products: results,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};
