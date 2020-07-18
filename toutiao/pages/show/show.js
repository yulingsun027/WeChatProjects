// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {
    story:{},
    comments:[],
  
  },

  /**
   * Lifecycle function--Called when page load
   */
  
  onLoad: function (options) {
    let page = this;
    let id = options.id;
    let request = {
      url: `https://cloud.minapp.com/oserve/v1/table/84988/record/${id}`,
      method: 'GET',
      header: {'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      success(res){
        page.setData({
          story:res.data
        })
      }
    };
    wx.request(request);
    let commentsrequest = {
      url:'https://cloud.minapp.com/oserve/v1/table/85188/record/',
      method: 'GET',
      header: {'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      success(res) {
        console.log(res)
        page.setData({
          comments:res.data.objects
        })
      },
      data: {
        where: {
          "story_id":{"$eq":id}
        }
      },
    }
    wx.request(commentsrequest)
  },

  deleteComment (event) {
    let page = this;
    let data = event.currentTarget.dataset;
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method:'DELETE',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      success () {

        let commentsrequest = {
          url:'https://cloud.minapp.com/oserve/v1/table/85188/record/',
          method: 'GET',
          header: {'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
          success(res) {
            console.log(res)
            page.setData({
              comments:res.data.objects
            })
          },
          data: {
            where: {
              "story_id":{"$eq":data.id}
            }
          },
        }
        wx.request(commentsrequest)
      }
    })
  },

  voteComment(event){
    let page = this;
    let data = event.currentTarget.dataset;
    let votes = data.votes;
    let new_votes = {votes: votes + 1};
    wx.request({
      url:`https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'PUT',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, 
      data: new_votes,
      success(res) {
        // set comment data
        console.log(res);
        let new_comment = res.data;
        let comments = page.data.comments;
        let comment = comments.find(comment => comment._id == new_comment.id);
        comment.votes = new_comment.votes;
        page.setData({comments:comments})
      }


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
  
})