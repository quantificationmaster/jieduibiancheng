const app = getApp()
class duiju{
  constructor(play1,play2,flag,pz1,pz2){
    this.play1=[0,0,0,0,0];
    this.play2=[0,0,0,0,0];
    this.pz1=[0,0,0,0,0];
    this.pz2=[0,0,0,0,0];
    this.flag=0;
    
  }
  lock(x,num){
    if(num==1){
      if(this.pz1[x]==0){
        this.pz1[x]=1;
      }
      else{
        this.pz1[x]=0;
      }
    }
    else{
      if(this.pz2[x]==0){
        this.pz2[x]=1;
      }
      else{
        this.pz2[x]=0;
      }
    }
  }
  run(dice,turn){
    if(turn==1){
      for(let i=0;i<5;i++){
      if(this.pz1[i]==0){
        this.play1[i]=dice[i];
      }
      else{
        this.pz1[i]=0;
      }
      }
    }
    if(turn==2){
      for(let i=0;i<5;i++){
      if(this.pz2[i]==0){
        this.play2[i]=dice[i];
      }
      else{
        this.pz2[i]=0;
      }
      }
    }
  }
   get1(){
    const x = [];
    const y = [];
    
    const counter = new Map();
    for (const value of this.play1) {
        counter.set(value, (counter.get(value) || 0) + 1);
    }

    const p = Array.from(counter.entries()).sort((a, b) => b[1] - a[1]);
    for (const [value, count] of p) {
        x.push(value);
        y.push(count);
    }
    let j;
    if (y[0] === 5) {
        j = 100;
    } else if (y[0] === 4) {
        j = 40;
    } else if (y[0] === 3) {
        j = 20;
    } else if (y[0] === 2) {
        if (y[1] === 2) {
            j = 10;
        } else {
            if(!x.includes(1)&&!x.includes(2)){
              j=30;
            }
            else if(!x.includes(1)&&!x.includes(6)){
              j=30;
            }
            else if(!x.includes(5)&&!x.includes(6)){
              j=30;
            }
            else{
              j=0;
            }
        }
    } else {
        if (!x.includes(6)) {
            j = 60;
        } 
        else if (!x.includes(1)) {
            j = 60;
        } 
        else if(!x.includes(4)){
            j=0;
        }
        else if(!x.includes(3)){
          j=0;
        }
        else{
          j=30;
        }
    }
    const h = this.play1.reduce((sum, value) => sum + value, 0);
    return j + h;
   }
   get2(){
    const x = [];
    const y = [];
    
    const counter = new Map();
    for (const value of this.play2) {
        counter.set(value, (counter.get(value) || 0) + 1);
    }

    const p = Array.from(counter.entries()).sort((a, b) => b[1] - a[1]);
    for (const [value, count] of p) {
        x.push(value);
        y.push(count);
    }
    let j;
    if (y[0] === 5) {
        j = 100;
    } else if (y[0] === 4) {
        j = 40;
    } else if (y[0] === 3) {
        j = 20;
    } else if (y[0] === 2) {
        if (y[1] === 2) {
            j = 10;
        } else {
            if(!x.includes(1)&&!x.includes(2)){
              j=30;
            }
            else if(!x.includes(1)&&!x.includes(6)){
              j=30;
            }
            else if(!x.includes(5)&&!x.includes(6)){
              j=30;
            }
            else{
              j=0;
            }
        }
    } else {
        if (!x.includes(6)) {
            j = 60;
        } 
        else if (!x.includes(1)) {
            j = 60;
        } 
        else if(!x.includes(4)){
            j=0;
        }
        else if(!x.includes(3)){
          j=0;
        }
        else{
          j=30;
        }
    }
    const h = this.play2.reduce((sum, value) => sum + value, 0);
    return j + h;
   }
   jie(){
     let point1=this.get1();
     let point2=this.get2();
     if(point1>point2){
       z=point1-point2;
       point1+=z*(this.pc1+this.pc2);
       point2-=z*(this.pc1+this.pc2)
       if(point2<=0){
         this.flag=1;
       }
     }
     else if(point1<point2){
       z=point2-point1;
       point2+=z*(this.pc1+this.pc2);
       point1-=z*(this.pc1+this.pc2);
       if(point1<=0){
         this.flag=2;
       }
     }
   }
}

var pcc1=0;
var pcc2=0;
var GAME = new duiju();
var gameflag =0;
var ju=1;
var playturn=1;
var round1=0;
var pit1=0;
var pit2=0;
var round2=0;
var dices=[0,0,0,0,0];
var dice =[0,0,0,0,0];
var pp1=[0,0,0,0,0];
var pp2=[0,0,0,0,0];
var zhuan=[0,0,0,0,0];
var pps1=[0,0,0,0,0];
var pps2=[0,0,0,0,0];
let ppoint1=0;
let ppoint2=0;
let z=0;
var zhonghuihe=0;

var png = {
  0: "https://s1.ax1x.com/2022/10/12/xUu30f.png",
  1: "https://s1.ax1x.com/2022/10/12/xUu878.png",
  2: "https://s1.ax1x.com/2022/10/12/xUu1nP.png",
  3: "https://s1.ax1x.com/2022/10/12/xUnqO0.png",
  4: "https://s1.ax1x.com/2022/10/12/xUnbyq.png",
  5: "https://s1.ax1x.com/2022/10/12/xUnOmV.png",
  6: "https://s1.ax1x.com/2022/10/12/xUnHln.png",
  'rand': "https://s2.loli.net/2022/10/12/LUAIjqx32TedFrC.gif",
  'lock':"https://ts1.cn.mm.bing.net/th/id/R-C.0c1e66aadc5bbab6d84446385e82a709?rik=mPqBAKaztWclQQ&riu=http%3a%2f%2fzidian.shufaai.com%2fuploads%2fzidian%2flishu%2f1_09241Z3316060.jpg&ehk=G1kLW8VuRpy6mMDQynhYK%2bQubb24SvD7GrgrYanrKzA%3d&risl=&pid=ImgRaw&r=0"
};

function sleep(delay) {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
      continue;
  }
}

function changep(){
  for(let i=0;i<5;i++){
    pp1[i]=png[GAME.play1[i]];
    pp2[i]=png[GAME.play2[i]];
  } 
}

//图片有问题，应该用锁来替换
function changes(nu,x){
  if(nu==1){
    if(GAME.pz1[x]==1){
      pps1[x]=png['lock'];
    }
    else{
      pps1[x]=png[0];
    }
  }
  else{
    if(GAME.pz2[x]==1){
      pps2[x]=png['lock'];
    }
    else{
      pps2[x]=png[0];
    }
  }
}

function fu(){
  pcc1=0;
  pcc2=0;
}
   

  
Page({
  data: {
    pj1:[png[0], png[0], png[0], png[0], png[0]],
    pj2:[png[0], png[0], png[0], png[0], png[0]],
    ps1:[0,0,0,0,0],
    ps2:[0,0,0,0,0],
    pju:1,
    point1:0,
    point2:0,
    pplayturn:1,
    pflag:0,
    pc1:0,
    pc2:0,
    ppit1:0,
    ppit2:0,
  },

/**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({point1:options.ppp});
    this.setData({point2:options.ppp});
    ppoint1=parseInt(options.ppp);
    ppoint2=ppoint1;
    zhonghuihe=options.jjj;
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
  onUnload:function() {

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

  cs1:function(){
    app.addClickAudio()
    if(playturn==1){
      if(pcc1==0){
        pcc1=1;
        }
        else{
          pcc1=0;
        }
      this.setData({pc1:pcc1});
    }
    else{
      if(pcc2==0){
        pcc2=1;
        }
        else{
          pcc2=0;
        }
      this.setData({pc2:pcc2});
    }
  },
  cs2:function(){
    app.addClickAudio()
    if(playturn==1){
      if(pcc1==0){
        pcc1=2;
        }
        else{
          pcc1=0;
        }
      this.setData({pc1:pcc1});
    }
    else{
      if(pcc2==0){
        pcc2=2;
        }
        else{
          pcc2=0;
        }
      this.setData({pc2:pcc2});
    }
  },
  cs3:function(){
    app.addClickAudio()
    if(playturn==1){
      if(pcc1==0){
        pcc1=3;
        }
        else{
          pcc1=0;
        }
      this.setData({pc1:pcc1});
    }
    else{
      if(pcc2==0){
        pcc2=3;
        }
        else{
          pcc2=0;
        }
      this.setData({pc2:pcc2});
    }
  },



  lock: function (a) {
    var x = a.currentTarget.dataset.column - 1;
    var num = a.currentTarget.dataset.num;
    GAME.lock(x,num);
    changes(num,x);
    this.setData({ps1:pps1});
    this.setData({ps2:pps2});
  },
  
  rerollDice(){
    app.addClickAudio()
  for(var i=0; i<5; i++){
    dice[i]=Math.floor((Math.random() * 6) + 1);
  }
  GAME.run(dice,playturn);
  
  changep();

  for(let i=0;i<5;i++){
    changes(playturn,i);
  }

  if(playturn==1){
  this.setData({pj1: pp1});
  this.setData({ps1:pps1});
  }
  else{
    this.setData({pj2: pp2});
    this.setData({ps2:pps2});
  }
  
  if(playturn==1){
    round1++;
  }
  if(round1==3){
    pit1=GAME.get1();
    this.setData({ppit1:pit1});
    playturn=2;
    this.setData({pplayturn:playturn});
    round1=0;
  }
  if(playturn==2){
    round2++;
  }

  if(round2==4){
    pit2=GAME.get2();
    this.setData({ppit2:pit2});
    z=Math.abs(pit1-pit2);
    let num=parseInt(z*(pcc1+pcc2));
    if(pit1>pit2){
      ppoint1+=num;
      ppoint2-=num;
      if(ppoint2>0){
      this.setData({point1:ppoint1});
      this.setData({point2:ppoint2});
      }
      else{
        zhonghuihe=0;
        wx.redirectTo({
          url: '/pages/over/over?bot1=' + ppoint1+ '&bot2=' +ppoint2+'&who='+GAME.flag,
      })
      }
    }
    else{
      ppoint2+=num;
      ppoint1-=num;
      if(ppoint1>0){
      this.setData({point1:ppoint1});
      this.setData({point2:ppoint2});
      }
      else{
        zhonghuihe=0;
        wx.redirectTo({
          url: '/pages/over/over?bot1=' + ppoint1+ '&bot2=' +ppoint2+'&who='+GAME.flag,
      })
      }
    }
    sleep(2000);
    pcc1=0;
    pcc2=0;
    this.setData({pc2:pcc2});
    this.setData({pc1:pcc1});
    GAME.run(dices,1);
    GAME.run(dices,2);
    changep();
    this.setData({pj1: pp1});
  this.setData({ps1:pps1});
  this.setData({pj2: pp2});
    this.setData({ps2:pps2});
    round2=0;
    playturn=1;
    this.setData({pplayturn:playturn});
    ju++;
    this.setData({pju:ju});
  }
  if(ju>zhonghuihe){
    zhonghuihe=0;
    ju=1;
    this.setData({pju:ju});
    wx.redirectTo({
      url: '/pages/over/over?bot1=' + ppoint1+ '&bot2=' + ppoint2+'&who='+GAME.flag,
  })
  }
  




 

  },
  

  robot(){
    if(round2==1){
      for(var i=0; i<5; i++){
        dice[i]=Math.floor((Math.random() * 6) + 1);
      }
      GAME.run(dice,playturn);
      changep();

      for(let i=0;i<5;i++){
       changes(playturn,i);
      }
      this.setData({pj2: pp2});
    this.setData({ps2:pps2});
    }
    const x = [];
    const y = [];
    
    const counter = new Map();
    for (const value of GAME.play2) {
        counter.set(value, (counter.get(value) || 0) + 1);
    }

    const p = Array.from(counter.entries()).sort((a, b) => b[1] - a[1]);
    for (const [value, count] of p) {
        x.push(value);
        y.push(count);
    }
    pei();
    if(round2==1){
        for(let i=0;i<5;i++){
          if(xu[i]==x[0]){
        GAME.lock(i,2);
        changes(2,i);
        this.setData({ps2:pps2});
          }
          sleep(200);
        }
    }
    else if(round2==2){
      if(x[0]>=3){
       for(let i=0;i<5;i++){
        if(xu[i]==x[0]){
          GAME.lock(i,2);
          changes(2,i);
          this.setData({ps2:pps2});
        }
        sleep(200);
       }
      }
      else{
        for(let i=0;i<5;i++){
          if(xu[i]==x[0]||xu[i]==x[1]){
            GAME.lock(i,2);
            changes(2,i);
            this.setData({ps2:pps2});
          }
          sleep(200);
         }
      }
    }
    sleep(1000);
    this.rerollDice();
  },

  back:function(){
    app.addClickAudio()
    wx.navigateTo({
      url: '/pages/list/list',
    })
  }

});
