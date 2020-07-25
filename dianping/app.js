//app.js
App({
  onLaunch: function () {
    require('./sdk-wechat.3.12.0');
    wx.BaaS = requirePlugin('sdkPlugin');
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo);
    let clientID = '98ad8501ff3f35324114';
    wx.BaaS.init(clientID);
    //wechat login
    wx.BaaS.auth.loginWithWechat().then(user => {
      this.globalData.userInfo = user;
      wx.setStorageSync('userInfo', user);
      console.log('logged in from js',user)
    }, err => {
      console.log('fail login')
    })

  },
  globalData: {
    userInfo: wx.setStorageSync('userInfo') || null
  }
  
})