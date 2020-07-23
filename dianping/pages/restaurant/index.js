// pages/restautant/index.js
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