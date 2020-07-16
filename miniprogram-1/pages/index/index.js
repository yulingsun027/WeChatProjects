//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    stories: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  getRequestData: function (res){
    console.log(res);
    this.setStories(res.data);
  },

  setStories: function(data){
    let page = this;
    const stories = data;
    page.setData({
      stories: stories
    });
  },

  onLoad: function () {
   let page = this;
   const request = {
     url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
     method: 'GET',
     success: page.getRequestData
   }
   wx.request(request);
  }
})
