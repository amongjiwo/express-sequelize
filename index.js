const express = require("express");
const { Product } = require("./models/");

const PORT = 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/products", (req, res) => {
    Product.findAll().then((products) => {
        res.render("products/index", {
            products,
        });
    });
});

app.get("/products/create", (req, res) => {
    res.render("products/create");
});

app.post("/products", (req, res) => {
    Product.create({
        nama_produk: req.body.nama_produk,
        harga: req.body.harga,
        kategori: req.body.kategori,
        detail_produk: req.body.detail_produk,
        nama_toko: req.body.nama_toko,
  }).then((product) => {
      res.send("Produk baru berhasil ditambahkan");
  });
});

app.get("/products/:id", (req, res) => {
  Product.findOne({
    where: { id: req.params.id },
  }).then((product) => {
    res.render("products/show", product.dataValues);
  });
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});