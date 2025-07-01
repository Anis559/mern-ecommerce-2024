"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cookieParser = require("cookie-parser");

var cors = require("cors");

var authRouter = require("./routes/auth/auth-routes");

var adminProductsRouter = require("./routes/admin/products-routes");

var adminOrderRouter = require("./routes/admin/order-routes");

var shopProductsRouter = require("./routes/shop/products-routes");

var shopCartRouter = require("./routes/shop/cart-routes");

var shopAddressRouter = require("./routes/shop/address-routes");

var shopOrderRouter = require("./routes/shop/order-routes");

var shopSearchRouter = require("./routes/shop/search-routes");

var shopReviewRouter = require("./routes/shop/review-routes");

var commonFeatureRouter = require("./routes/common/feature-routes"); //create a database connection -> u can also
//create a separate file for this and then import/use that file here


mongoose.connect("mongodb+srv://anisurrohman27777:Pa6WodlafKw4NfUD@cluster0.yzvzvzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(function () {
  return console.log("MongoDB connected");
})["catch"](function (error) {
  return console.log(error);
});
var app = express();
var PORT = process.env.PORT || 5000;
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization", "Cache-Control", "Expires", "Pragma"],
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);
app.use("/api/common/feature", commonFeatureRouter);
app.listen(PORT, function () {
  return console.log("Server is now running on port ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
