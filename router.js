const router=require("express").Router()
const {getProduct,createProduct,deleteProduct, updateProduct}=require("./controller/Prodoct")

router.get("/product",getProduct)
router.post("/create",createProduct)
router.put("/update/:id",updateProduct)
router.delete("/delete/:id",deleteProduct)

module.exports=router