const app = getApp()
Page({
  data: {
    ppp: '',
    jjj: ''
  },
  onInputParam1(e) {
    app.addClickAudio()
    this.setData({
      ppp: e.detail.value
    });
  },
  onInputParam2(e) {
    app.addClickAudio()
    this.setData({
      jjj: e.detail.value
    });
  },
  onSubmit() {
    app.addClickAudio()
    wx.redirectTo({
      url: '/pages/game_1/game_1?ppp=' + this.data.ppp + '&jjj=' + this.data.jjj
    })
  }
})
