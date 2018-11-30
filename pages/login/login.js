//login.js
const util = require('../../utils/util.js')

Page({
 data: {
   phone: '',
   password: ''
 },
 //获取手机号码
  phoneInput: function(e) {
    let phone = e.detail.value;
    let phonenum = /^1[34578]\d{9}$/;
    if (!(phonenum.test(phone))) {
      this.setData({
        ajxtrue: false,
        phone: e.detail.value
      })
    } else {
      this.setData({
        ajxtrue: true
      })
    }
  }, 
  //获取密码
  passwordInput: function (e) {
    let password = e.detail.value;
    let passwordCod = /^[0-9a-zA-Z]{0,25}$/g; //密码由0~25位由数字和26个英文字母混合而成
    if (!(passwordCod.test(password))) {
      this.setData({
        ajxtrue2: false,
        password: e.detail.value
      })
    } else {
      this.setData({
        ajxtrue2: true
      })
    }
  },
  //登录
  login: function (e) {
    let ajxtrue = this.data.ajxtrue
    let ajxtrue2 = this.data.ajxtrue2
    let phone = this.data.phone;
    let password = this.data.password;

    if (ajxtrue == !true || phone.length == 0) {
      wx.showToast({
        title: '手机号有误',
        icon: 'loading',
        duration: 1000
      })
      return
    }
    if (ajxtrue2 == !true || password.length == 0) {
      console.log(3)
      wx.showToast({
        title: '密码错误',
        icon: 'loading',
        duration: 1000
      })
      return
    }
    if (ajxtrue == true && ajxtrue2 == true ) {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
      let timer = ''
      timer = setTimeout(function () {
        wx.navigateTo({
          url: '/pages/logs/logs'
        })
        clearTimeout(timer);
      }, 2000)
    }
  },
  tabnum: function (e) {
    wx.navigateTo({
      url: '/pages/password/password'
    })
  },
  tabreg: function (e) {
    wx.navigateTo({
      url: '/pages/register/register'
    })
  }
})
