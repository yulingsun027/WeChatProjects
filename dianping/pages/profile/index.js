// pages/profile/index.js
let app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    currentUser:{},
  },

  /**
   * Lifecycle function--Called when page load
   */
  userInfoHandler: function(data){
    wx.BaaS.auth.loginWithWechat(data).then(user =>{
      console.log('user', user);
      app.globalData.userInfo = user;
      wx.setStorageSync('userInfo', user);
      this.setData({
        currentUser: user
      })
    })
    
  },

  onLoad: function (options) {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    this.setData({
      // restaurantId: options.id,
      currentUser: app.globalData.userInfo,
    });
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})