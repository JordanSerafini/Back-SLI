import { Router } from "express";

const router = Router();


router.get("/", (req, res) => {
  res.send("Hello World");
});

//router.get("/tables", contactController.getTables);
//router.get("/contact", contactController.getContactData);
//router.get("/saleDoc", salesController.getSalesDoc);
//router.get("/DealSaleDocumentLine", salesController.getDealSaleDocumentLine);
//router.get("/get", salesController.get);


//router.get("/customer", customerController.getAllCustomer);


export default router;