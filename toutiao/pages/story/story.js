// pages/story/story.js
Page({

  /**
   * Page initial data
   */
  data: {
  story:{}
  },

  /**
   * Lifecycle function--Called when page load
   */
  formSubmit: function (event) {

    let name = event.detail.value.name;
    let content = event.detail.value.content;

    

   let story = {
      name: name,
      content : content
    };


    let request = {
      url:'https://cloud.minapp.com/oserve/v1/table/84988/record/',
      method: 'POST',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      data : story,
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

  
})