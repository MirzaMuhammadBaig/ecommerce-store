const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./src/config/dbConnect");
const { notFound, errorHandler } = require("./src/middlewares/errorHandler");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const authRouter = require("./src/routes/authRoute");
const productRouter = require("./src/routes/productRoute");
const categoryRouter = require("./src/routes/prodcategoryRoute");
const subCategoryRouter = require("./src/routes/prodSubCategoryRoute");
const brandRouter = require("./src/routes/brandRoute");
const colorRouter = require("./src/routes/colorRoute");
const uploadRouter = require("./src/routes/uploadRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

app.get('/', (req, res) => {
  res.send(`E-commerce backend running`);
});

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/subcategory", subCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/color", colorRouter);
app.use("/api/upload", uploadRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running  at PORT http://localhost:${PORT}`);
});