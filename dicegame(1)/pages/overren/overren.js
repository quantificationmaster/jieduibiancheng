const app = getApp()
let yyy;
Page({
  /**
   * 页面的初始数据
   */
  data: {
      bot1: 0,
      bot2: 0,
      play: 0,
      xxx:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.setData({ bot1: options.bot1 });
      this.setData({ bot2: options.bot2 });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  restart: function () {
    app.addClickAudio()
    wx.redirectTo({
      url: '/pages/ren/ren',
    })
  },

  back: function () {
    app.addClickAudio()
    wx.redirectTo({
      url: '/pages/index/index',
    })
  }
})