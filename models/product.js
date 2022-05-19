'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    nama_produk: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    kategori: DataTypes.STRING,
    detail_produk: DataTypes.TEXT,
    nama_toko: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};