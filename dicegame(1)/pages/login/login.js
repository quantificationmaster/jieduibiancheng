// pages/UserInformation/UserInformation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },
//点击登录
goto: function () {
  app.addClickAudio()
  const { username, password } = this.data;
  if (!username || !password) {
    wx.showToast({
      title: '用户名或密码不能为空',
      icon: 'none'
    });
    return;
  }

  // 调用后端登录接口
  wx.request({
    url: 'http://your_server_address/login',
    method: 'POST',
    data: {
      username: username,
      password: password
    },
    success: (res) => {
      if (res.data.token) {
        // 登录成功，保存token到本地存储
        wx.setStorageSync('token', res.data.token);

        // 跳转到其他页面
        wx.redirectTo({
          url: '/pages/index/index'
        });
      } else {
        // 登录失败，提示用户
        wx.showToast({
          title: '用户名或密码错误',
          icon: 'none'
        });
      }
    },
    fail: () => {
      wx.showToast({
        title: '网络错误，请稍后重试',
        icon: 'none'
      });
    }
  });
},

  goto2:function() {
    app.addClickAudio()
    wx.redirectTo({
      url: '/pages/index/index',
    })
      },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  }
})