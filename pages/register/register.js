//register.js
const util = require('../../utils/util.js')
Page({
  data: {
    phone: '',
    password: '',
    authcode: '',
    btntext: '获取验证码',
    disabled: false,
    text: '我已阅读并同意'
  },
  //获取手机号码
  phoneInput: function (e) {
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
  auth_code: function (e) {
    let authcode = e.detail.value;
    authcode: authcode;
    console.log(authcode)
  },
  getAuthCode: function (e) {
    //这里是要调api接口的，我这里就假装已经调成功了，返回200了
    this.setData({
      disabled: !this.data.disabled //无法点击
    })
    var _this = this
    // if (json.code == 200) { //调用接口成功后用
    if (1) {                                //暂时用假的跑起来
      wx.showToast({
        title: '验证码已发送',
        icon: 'loading',
        duration: 2000
      })

      var coden = 60                        // 定义60秒的倒计时
      var codeV = setInterval(function () {
        _this.setData({                        // _this这里的作用域不同了
          btntext: '重新获取' + (--coden) + 's'
        })
        if (coden == -1) {  // 清除setInterval倒计时，这里可以做很多操作，按钮变回原样等
          clearInterval(codeV)
          _this.setData({
            btntext: '获取验证码'
          })
          _this.setData({
            disabled: false //恢复点击
          })
        }
      }, 1000)
    }
  },
  //确定
  confirm: function (e) {

    let ajxtrue = this.data.ajxtrue
    let ajxtrue2 = this.data.ajxtrue2
    let phone = this.data.phone;
    let password = this.data.password;
    
    if (ajxtrue == !true || phone.length == 0) {
      wx.showToast({
        title: '手机号有误',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    if (ajxtrue2 == !true || password.length == 0) {
      console.log(3)
      wx.showToast({
        title: '密码错误',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    if (ajxtrue == true && ajxtrue2 == true) {
      wx.showToast({
        title: '成功',
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
  }
})