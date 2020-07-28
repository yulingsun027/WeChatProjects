// pages/restautant/detail.js

const app = getApp();

Page({
  
  /**
   * Page initial data
   */
  data: {
      currentUser:{},
      restaurant:{},
      comments:[],
      meals:[],
      restaurantId: 0,
      ratings:['1 ❤️','2 ❤️❤️','3 ❤️❤️❤️','4 ❤️❤️❤️❤️','5 ❤️❤️❤️❤️❤️'],
      rating: 'none',
      numberRating: 0,
      content:'',
      // restaurant_id:''
      // currentUser:null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onRate: function(event){
    console.log(event);
    const index = parseInt(event.detail.value);
    this.setData({
      rating: this.data.ratings[index],
      numberRating: index + 1,
    })
  },

 createComment: function (event){
    console.log('create a comment', event);
    let Comment = new wx.BaaS.TableObject('comments');
    let newComment = Comment.create();
    const content = event.detail.value.content;

    const data = {
        // review's content and rating
        rating: this.data.numberRating,
        content: content,
        restaurant_id: this.data.restaurantId,
    };

    newComment.set(data).save().then(res => {
      console.log('save review', res);
      const newComments = this.data.comments;
      newComments.push(res.data);
      this.setData({
        comments: newComments
      })
      })                                              
  },

  createOrder: function (e){
    const mealID = e.currentTarget.dataset.id;
    let Orders = new wx.BaaS.TableObject('orders');
    let newOrder = Orders.create();
    const orderData = {
      quantity: 1,
      meal_id: mealID,
    }
    newOrder.set(orderData).save().then((res)=>{
      wx.showToast({
        title: 'order sent!',
        icon:'success',
        duration:2000,
        mask: true
      })
    })
  },

  userInfoHandler: function(data){
    wx.BaaS.auth.loginWithWechat(data).then(user =>{
      app.globalData.userInfo = user;
      wx.setStorageSync('userInfo', user);
      this.setData({
        currentUser: user
      })
    })
  },



  onLoad: function(options) {
    this.setData({
      restaurantId: options.id,
      currentUser: app.globalData.userInfo
    })
  },
  onShow: function (options) {
    console.log('userData', app.globalData.userInfo)
    let tableName1 = 'restaurant';
    let tableName2 = 'comments';
    let tableName3 = 'meals';
    let Restaurant = new wx.BaaS.TableObject(tableName1);
    let Comments = new wx.BaaS.TableObject(tableName2);
    let Meals = new wx.BaaS.TableObject(tableName3);

    let recordID = this.data.restaurantId;
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
    Meals.setQuery(query).find().then((res)=>{
      console.log('meal detail', res);
      this.setData({meals:res.data.objects})
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  
})