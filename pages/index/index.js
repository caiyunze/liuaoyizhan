//index.js
//获取应用实例
var app = getApp();
//引用
var fileData = require('../../utils/data.js');
var that;
Page(
  {

    /**
     * 页面的初始数据
     */
    data: {
      searchValue: '',
      toView: 'red',
      scrollTop: 100,
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      navSectionItems: fileData.getIndexNavSectionData(), //模拟商品列表数据
      banner_url: fileData.getBannerData(), //模拟轮播商品数据
      amount: 0,//数量初始值0
      index: 0,//购物初始值0
      cartData: {},
      mainlist:[], //首页商品列表
      sumNum: 0,// 单商品购物总数
      sumMon: 0 //购物车总价格
    },

    //商品数量-加号点击事件
    addNum: function (e) {
      var addFoodNum = parseInt(e.target.dataset.num) + 1;
      var jdx = parseInt(e.target.dataset.jdx);
      var price = parseInt(e.target.dataset.price);
      var goods_list = that.data.mainlist;
      if (goods_list[jdx]["stock"] < 1) {
        wx.showToast({ title: "已售罄", icon: "success", duration: 1e3 });
        return
      }
      goods_list[jdx]["buy_num"] = addFoodNum;
      var sumMon = parseInt(that.data.sumMon) + price;
      var submitOrderDisabled = true;
      that.setData({
        mainlist: goods_list,
        sumNum: parseInt(that.data.sumNum) + 1,
        sumMon: sumMon,
        submitOrderDisabled: submitOrderDisabled
      })
    },
    //商品数量-减号点击事件
    reduceNum: function (ev) {
      var redFoodNum = parseInt(ev.target.dataset.num) - 1;
      var jdx = parseInt(ev.target.dataset.jdx);
      var price = parseInt(ev.target.dataset.price);
      var goods_list = that.data.mainlist; 
      goods_list[jdx]["buy_num"] = redFoodNum;
      var sumNum = parseInt(that.data.sumNum) - 1;
      var sumMon = parseInt(that.data.sumMon) - price;
      var submitOrderDisabled = true;
      that.setData({ 
        mainlist: goods_list, 
        sumNum: sumNum, 
        sumMon: sumMon, 
        submitOrderDisabled: submitOrderDisabled })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (searchValue) {
      that = this;
      // if (searchValue) {
      //   console.log(options)
      //   this.setData({
      //     searchValue: "搜索：" + searchValue
      //   });
      // }
      console.log(that.data.navSectionItems)
      that.setData({
        mainlist: that.data.navSectionItems
      })
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      wx.setNavigationBarTitle({
        title: '首页',
      })
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
      wx.stopPullDownRefresh()
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

    },

    // 搜索入口  
    wxSearchTab: function () {
      wx.redirectTo({
        url: '../search/search'
      })
    },

    //跳转到详情页
    navigateDetail: function (ev) {
      var subject_id = parseInt(ev.target.dataset.subjectid);
      wx.navigateTo({
        url: "../detail/detail?subject_id="+subject_id,
        success: function () {
          wx.setNavigationBarTitle({
            title: '商品详情',
          })
          wx.showNavigationBarLoading();
          setTimeout(function () {
            wx.hideNavigationBarLoading();
          }, 200)
        }

      })

    }
    
  })