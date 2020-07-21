// pages/detail/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    // story:{}
    
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let tableName1 = 'story';
    let tableName2 = 'comments';
    let Story = new wx.BaaS.TableObject(tableName1);
    let Comments = new wx.BaaS.TableObject(tableName2);
    let recordID = options.id;
    Story.get(recordID).then((res)=>{
      console.log('res detail', res);
      this.setData({story: res.data});
    });

    let query = new wx.BaaS.Query();
    query.compare('story_id','=',recordID);
    Comments.setQuery(query).find().then((res) =>{
      console.log('comment detail', res);
      this.setData({comments: res.data.objects})
    })




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