// file menuRoutes.js (./src/Routes/menuRoutes.js)
const menuRoutes = require("express").Router();
const menuControllers = require("../controllers/menuController");

menuRoutes.get("/", menuControllers.getAll);
menuRoutes.post("/tambahData", menuControllers.postData);
menuRoutes.put("/updateData/:id", menuControllers.editData);
menuRoutes.delete("/hapusData/:id", menuControllers.delete);

module.exports = menuRoutes;
