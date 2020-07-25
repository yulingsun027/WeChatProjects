// pages/comments/comment.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    ratings:['1 ❤️','2 ❤️❤️','3 ❤️❤️❤️','4 ❤️❤️❤️❤️','5 ❤️❤️❤️❤️❤️'],
    rating: 'none',
    numberRating: 0,
    content:'',
    restaurant:{}
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

  formSubmit: function (event){
    console.log('create a comment', event);
    let Comment = new wx.BaaS.TableObject('comments');
    let comment = Comment.create();

    let data = {
        // review's content and rating
        rating: this.data.numberRating,
        content:this.data.content,
        restaurant_id: this.data.restaurant.id,

    };
    comment.set(data).save().then(res => {
      console.log('save review', res);
      wx.navigateBack({
        delta: 1,
      })                                              
    })
  },

  onLoad: function () {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  
})