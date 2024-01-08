import express from "express";

import { get } from "#ctrlProducts/getProducts.js";

const router = express.Router();

router.get("/products", get);

export default router;
