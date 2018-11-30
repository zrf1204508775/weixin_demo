//demo.js
const util = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },
  /* 获取位置 */
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  /* 当前位置 */
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  sys: function (event) {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  getPhoneNumber: function (e) { 
    console.log(e.detail.errMsg)    
    console.log(e.detail.iv)     
    console.log(e.detail.encryptedData)     
    /**if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
      wx.showModal({ 
          title: '提示', showCancel: false, 
          content: '未授权', 
          success: function (res) { }
         }) 
      } else {
          wx.showModal({
          title: '提示', 
          showCancel: false, 
          content: '同意授权', 
          success: function (res) { }
        }) 
      }**/
  },
 
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})