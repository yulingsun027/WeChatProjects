// pages/restautant/detail.js

const app = getApp();

Page({
  
  /**
   * Page initial data
   */
  data: {
      restaurant:{},
      comments:[],
      // currentUser:null
  },

  /**
   * Lifecycle function--Called when page load
   */
 

  userInfoHandler: function(data){
    wx.BaaS.auth.loginWithWechat(data).then(user =>{
      console.log('user', user);
      app.globalData.userInfo = user;
      this.setData({
        currentUser: user
      })
    })
  },
  onLoad: function (options) {
    console.log('userData', app.globalData.userInfo)
    let tableName1 = 'restaurant';
    let tableName2 = 'comments';
    let Restaurant = new wx.BaaS.TableObject(tableName1);
    let Comments = new wx.BaaS.TableObject(tableName2);
    let recordID = options.id;
    Restaurant.get(recordID).then((res)=>{
      console.log('res detail', res);
      this.setData({restaurant: res.data});
    });

    let query = new wx.BaaS.Query();
    query.compare('restaurant_id','=',recordID);
    Comments.setQuery(query).find().then((res) =>{
      console.log('comment detail', res);
      this.setData({comments: res.data.objects})
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  
})