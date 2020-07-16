// pages/post/post.js
let app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
  
  },

  formSubmit: function (event) {

    console.log(event.detail.value.name)
    console.log(event.detail.value.content)

    let name = event.detail.value.name
    let text = event.detail.value.content
    
    let story = {
      name: name,
      text:text
    }
  
    const request = {
      url:`https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'POST',
      data:story,
      success () {
        wx.navigateTo({
          url: '/pages/index/index'
        })
      }
    }
    wx.request(request)
  },

  onLoad: function (options) {
},

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

},

})