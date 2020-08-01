//app.js
App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin');
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo);
    let clientID = '98ad8501ff3f35324114';
    wx.BaaS.init(clientID);
    //wechat login
    wx.BaaS.auth.loginWithWechat().then(user => {
      wx.setStorageSync('userInfo', user.toJSON());
      this.globalData.userInfo = user.toJSON();
      console.log('logged in from js',user)
    }, err => {
      console.log('fail login')
    })

  },
  globalData: {
    userInfo: wx.getStorageSync('userInfo') || null,
  }
  
})