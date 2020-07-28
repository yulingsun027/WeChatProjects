// pages/restautant/index.js
let app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    restaurant:[]
  },
  /**
   * Lifecycle function--Called when page load
   */
  showDetail(event) {
    let data = event.currentTarget.dataset;
    let id = data.id

    wx.navigateTo({
      url: `detail?id=${id}`
    })
  },
  userInfoHandler: function(data){
    wx.BaaS.auth.loginWithWechat(data).then(user =>{
      console.log('user', user);
      app.globalData.userInfo = user;
      wx.setStorageSync('userInfo', user);
      this.setData({
        currentUser: user
      })
    })
    // wx.navigateTo({
    //   url: '/pages/comment/comment',
    // })
  },
  onLoad: function () {
    let tableName = "restaurant";
    let Restaurant = new wx.BaaS.TableObject(tableName);
    Restaurant.find().then((res) =>{
      console.log('res', res);
      this.setData({
        restaurant: res.data.objects
      })
    });

  }
})