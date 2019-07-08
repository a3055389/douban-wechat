// pages/ hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
  },
  index: function () {
    wx.navigateTo({
      url: '../hot-border/hot-border'
    })
  },
  bangdan: function () {
    wx.navigateTo({
      url: '../rpt/rpt'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    wx.request({
      url: "https://douban.uieee.com/v2/movie/top250?count=3",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data.subjects)
        _this.setData({
          shuzu: res.data.subjects
        })
      }
    })
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