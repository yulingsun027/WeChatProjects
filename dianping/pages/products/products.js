// pages/products/products.js
Page({

  /**
   * Page initial data
   */
  data: {
    products:[]
  },

  /**
   * Lifecycle function--Called when page load
   **/

  createOrder: function (e){
    const productID = e.currentTarget.dataset.id;
    let DiorOrders = new wx.BaaS.TableObject('diorOrder');
    let order = DiorOrders.create();
    const orderData = {
      quantity: 1,
      product_id: productID,
    }
    order.set(orderData).save().then((res)=>{
      wx.showToast({
        title: 'order sent!',
        icon:'success',
        duration:2000,
        mask: true
      })
    })
  }, 
   
  onLoad: function (options) {
    let tableName = "products";
    let Products = new wx.BaaS.TableObject(tableName);
    Products.find().then((res) =>{
      console.log('res', res);
      this.setData({
        products: res.data.objects
      })
    });
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