//shopping.js
const util = require('../../utils/util.js')

Page({
  data: {
    carts: [],               // 购物车列表
    hasList: false,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: true    // 全选状态，默认全选
  },
  onShow() {
    this.setData({
      hasList: true,        // 既然有数据了，那设为true吧
      carts: [
        { id: 1, title: '新鲜芹菜 半斤', image: '../img/11.jpg', num: 4, price: 0.01, selected: true },
        { id: 2, title: '素米 500g', image: '../img/31.jpg', num: 1, price: 0.03, selected: true }
      ]
    });
  },
})