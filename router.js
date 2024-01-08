const router=require("express").Router()
const {getProduct,createProduct,deleteProduct}=require("./controller/Prodoct")

router.get("/product",getProduct)
router.post("/create",createProduct)
router.delete("/delete/:id",deleteProduct)

module.exports=router