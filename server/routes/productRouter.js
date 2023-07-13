const { Router } = require("express");
const { addProducts, getProducts, updateProducts } = require("../controller/productController");

const productRouter = new Router();

productRouter.post("/addProducts", async(req,res) => {
    try {
        const data = await addProducts(req);
        res.send(data)
        
    } catch (error) {
        res.send(error.message)
    }
})
productRouter.get("/", async(req,res) => {
    try {
        const data = await getProducts(req);
        return data;
    } catch (error) {
        res.send(error.message)
    }
})
productRouter.patch("/:productId",async(req,res) => {
    try {
        const data = await updateProducts(req);
        return data;
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = productRouter;