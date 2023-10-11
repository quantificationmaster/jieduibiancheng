const app = getApp()
Page({
  data: {
    ppp: '',
    jjj: ''
  },
  onInputParam1(e) {
    this.setData({
      ppp: e.detail.value
    });
  },
  onInputParam2(e) {
    this.setData({
      jjj: e.detail.value
    });
  },
  onSubmit() {
    app.addClickAudio()
    wx.redirectTo({
      url: '/pages/game_2/game_2?ppp=' + this.data.ppp + '&jjj=' + this.data.jjj
    })
  }
})
