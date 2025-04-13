import express from "express";
const app = express();
import path from "path";
const __dirname = import.meta.dirname;
import dotenv from "dotenv";
dotenv.config();

// ejs set
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));


const PORT = 5555 || process.env.PORT;


app.get("/music", (req, res) => {
  res.render("music");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
