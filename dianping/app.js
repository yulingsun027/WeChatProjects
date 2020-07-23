//app.js
App({
  onLaunch: function () {
    require('./sdk-wechat.3.12.0');
    let clientID = '98ad8501ff3f35324114';
    wx.BaaS.init(clientID);
  },
  globalData: {
    userInfo: null
  }
})