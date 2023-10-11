// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    bgm_src: "https://dl.stream.qqmusic.qq.com/C4000031p4TA17gIZi.m4a?guid=9662997165&vkey=9DA02D1391EEEA7F446707B925CC7A1F9151C7347BD16949548CCFBB937D84B3EE61946479F0875D0FEA992377BB92CDF346D26489E88220&uin=&fromtag=120032", //背景音乐地址
    bgrAudioContext: "",
    bg_is_play: false, //背景音乐是否播放
},
onLaunch: function () { //启动小程序执行方法
    this.createBgm(); //背景音乐
},
createBgm() {
    this.globalData.bgrAudioContext = wx.createInnerAudioContext();
    this.globalData.bgrAudioContext.src = this.globalData.bgm_src;
    this.globalData.bgrAudioContext.loop = true;
    this.globalData.bg_is_play = true; //默认暂停
},

addClickAudio: function() {
    const innerAudioContext = wx.createInnerAudioContext()
  innerAudioContext.autoplay = true
  innerAudioContext.loop = false
  wx.setInnerAudioOption({
    obeyMuteSwitch: false,
    success: function(e){    
    },
    fail: function(e){
    }
  })
  innerAudioContext.src="pages/click.mp3"
  innerAudioContext.play()}

})



