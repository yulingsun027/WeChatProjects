// pages/restautant/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
      restaurant:{},
      comments:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
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