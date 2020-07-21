//app.js
App({
  onLaunch: function () {
    require('./sdk-wechat.3.12.0');
    let clientID = 'e322f041326daf6c6b07';
    wx.BaaS.init(clientID);
  },

  globalData: {
    userInfo: null
  }
})