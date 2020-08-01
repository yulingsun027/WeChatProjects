// pages/products/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    cards: [ 
      "我爱你",
      "谢谢你",
      "祝贺你",
      "生日快乐"
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  selectCard: function(e){
    console.log('select card',e);
    let name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: `/pages/products/products?cardName=${name}`,
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