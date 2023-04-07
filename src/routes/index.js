// File /routes/index.js
const mainRouts = require("express").Router();
const menuRoutes = require("./menuRoutes");

mainRouts.use("/menu", menuRoutes);

module.exports = mainRouts;
