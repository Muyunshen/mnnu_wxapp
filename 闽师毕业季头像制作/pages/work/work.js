const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_src: "", //头像框
    userInfo: {}, //微信头像在这里 userInfo.avatarUrl
    avatar: "", //微信头像或其他头像
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },



  generate: function () {
    // let title = app.globalData.title
    // if(title == '快来pick你的学院吧' || title == '选择困难症专区' || title == 'pick你的学院顺便加个帽子'){
    // }
    let canvas = null
    const query = wx.createSelectorQuery()
    query.select('#canvas')
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        canvas = res[0].node
        const ctx = canvas.getContext('2d')
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = 900
        canvas.height = 900
        ctx.save()
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, 900, 900)
        ctx.fill()
        ctx.save()
        const avatar = canvas.createImage()
        avatar.src = this.data.avatar
        avatar.onload = () => {
          ctx.arc(450, 450, 370, 0, 2 * Math.PI, false) //340
          ctx.clip()
          ctx.drawImage(avatar, 70, 70, 750, 750) //110,110,680,680
          // ctx.arc(450, 450, 380, 0, 2 * Math.PI, false)//340
          // ctx.clip()
          // ctx.drawImage(avatar, 70, 70, 760, 760)//110,110,680,680
        }
        // ctx.arc(450, 450, 320, 0, 2 * Math.PI, false)
        // ctx.clip()
        // ctx.drawImage(avatar, 130, 130, 650, 650)
        const img = canvas.createImage()
        img.src = app.globalData.img_src
        img.onload = () => {
          ctx.restore()
          ctx.drawImage(img, 0, 0, 900, 900)
          wx.canvasToTempFilePath({
            width: 900 * dpr,
            height: 900 * dpr,
            destWidth: canvas.width,
            destHeight: canvas.height,
            canvas,
            success(res) {
              // console.log(res.tempFilePath)
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function (data) {
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 2000
                  })
                },
                fail: function (err) {
                  if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
                    wx.openSetting({
                      success(settingdata) {
                        if (settingdata.authSetting['scope.writePhotosAlbum']) {
                          wx.showToast({
                            title: '请再次保存',
                            icon: 'success',
                            duration: 2000
                          })
                        } else {
                          wx.showToast({
                            title: '获取权限失败，可能导致保存图片无法正常使用',
                            icon: 'none',
                            duration: 2000
                          })
                        }
                      }
                    })
                  }
                }
              })
            }
          })
        }
      })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let img_src = app.globalData.img_src
    this.setData({
      "img_src": img_src
    })
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
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
  getAvatar: function (e) {
    wx.getUserProfile({
      desc: '获取你可爱帅气的微信头像！',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          avatar: res.userInfo.avatarUrl
        })
      }
    })
  },
  choose: function () {
    var self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        self.setData({
          avatar: tempFilePaths
        })
      }
    })
  }
})