const path = require("path");
const productSchema = require("../model/productSchema")


module.exports.addProducts = async (req, res, next) => {
  try {
    const {productType , productCode , productTitle , totalStock , costPerItem} = req.body;
    const addData = new productSchema({...req.body})
    await addData.save();
    console.log(addData);
    // console.log(req.body)
    return next();

  } catch (error) {
    return error;
  }
};


module.exports.getProducts = async () => {
    try {
       const {productType , productCode, productTitle, totalStock, costPerItem} = req.body;
       const getData = new productSchema.find({...req.body})
       await getData.save();
       console.log(getData);
       return next();
    } catch (error) {
        return error;
    }
}

