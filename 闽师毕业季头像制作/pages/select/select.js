const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_hover: '',
    list: [{
        title: "选择困难症专区",
        item_hover: '',
        frame: [
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/1_1.png",
        ]
      },
      {
        title: "快来pick你的学院吧",
        item_hover: '',
        frame: [
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_5.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_1.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_11.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_15.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_3.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_4.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_9.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_6.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_14.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_10.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_2.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_13.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_8.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_7.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/2_12.png",
        ]
      },
      {
        title: "pick你的学院顺便加个帽子",
        item_hover: '',
        frame: [
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_11.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_1.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_7.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_15.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_9.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_10.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_5.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_12.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_14.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_6.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_2.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_13.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_4.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_3.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/3_8.png",

        ]
      },
      {
        title: "个性毕业系列",
        item_hover: '',
        frame: [
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_1.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_2.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_3.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_4.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_5.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_6.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_7.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_8.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_9%E6%94%B9.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_10%E6%94%B9.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_11%E6%94%B9.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_12%E6%94%B9.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_13.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_14%E6%94%B9.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_15.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_16.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_17.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_18.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_19.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_20.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_21.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_22.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_23.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_24.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_25%E6%94%B9.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_26%E6%94%B91.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_27%E6%94%B91.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_28%E6%94%B91.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_29%E6%94%B9.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_30%E6%94%B91.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_31%E6%94%B91.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_32%E6%94%B91.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_33%E6%94%B91.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_34%E6%94%B91.png",
          // "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_35%E6%94%B9.png",
          // "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_36%E6%94%B9.png",
          // "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_37%E6%94%B9.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_38.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_39.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_40.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_41.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_42.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_43.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_44.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_45.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_46.png",
          // "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_47.png",
          // "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_48.png",
          // "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_49.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_50.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_51.png",
          "https://mysmini.oss-cn-shenzhen.aliyuncs.com/resources/frame/4_52.png",
        ]
      }
    ]
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

  },
  handleOk: function (values) {
    let img_src = values.target.dataset.imgsrc
    app.globalData.img_src = img_src
    let data_title = values.target.dataset.title
    // console.log(data_title)
    app.globalData.data_title = data_title
    wx.navigateTo({
      url: '/pages/work/work',
    })
  },

})