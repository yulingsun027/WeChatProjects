// pages/products/products.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    products:[],
    currentUser:{},
    cardName:{}
  },

  /**
   * Lifecycle function--Called when page load
   **/

  createOrder: function (e){ 
    console.log(e);
    const productID = e.currentTarget.dataset.id;

    const product = this.data.products.find(product => productID === product.id)


    let DiorOrders = new wx.BaaS.TableObject('diorOrder');
    let order = DiorOrders.create();
    const orderData = {
      product_id: productID,
      price: product.price,
      name: product.name,
      points: product.points
    };


    order.set(orderData).save().then((res)=>{
      wx.showToast({
        title: 'order sent!',
        icon:'success',
        duration:2000,
        mask: true
      })
    console.log('new res',res);
  let points = res.data.points;
  console.log('points',points);
  wx.BaaS.auth.getCurrentUser().then((user) => {
    console.log('getcurrentuser', user)
    user.set("points", user.get('points') + points).update().then((res) => {
      console.log('update user', res)
      app.globalData.userInfo = res.data;
      wx.reLaunch({
        url: '/pages/profile/index' // show list of orders in user dashboard
      });
    })
  })
  
    })
},

  onLoad: function (options) {
    // console.log('yo')
    console.log('options',options);
    console.log('set data', app.globalData.userInfo)
    this.setData({
      currentUser: app.globalData.userInfo,
      cardName: options.cardName
    });
    let tableName = "products";
    let Products = new wx.BaaS.TableObject(tableName);
    Products.find().then((res) =>{
      console.log('res', res);
      this.setData({
        products: res.data.objects,
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