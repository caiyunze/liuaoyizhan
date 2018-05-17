// pages/detail/detail.js
var app = getApp();
var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 100,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navSectionItems: app.data.navSectionItems, //商品数据
    navSectionItems_detaildata: app.data.navSectionItems_detaildata //商品详情
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.subject_id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
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