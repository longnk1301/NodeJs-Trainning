const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeControllers");
const emailController = require("../controllers/emailControllers");
let initRoutes = (app) => {
  // Gọi ra trang home cho việc upload
  router.get("/", homeController.getHome);

  // Gọi hành động gửi email
  router.post("/send-email", emailController.sendMail);
  return app.use("/", router);
};
module.exports = initRoutes;
