//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    stories:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showStory(event){
    console.log('e', event)
    let data = event.currentTarget.dataset;
    let id = data.id;

    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  onLoad: function () {
    // let page = this;
    // let request = {
    //   url: 'https://cloud.minapp.com/oserve/v1/table/84988/record/',
    //   method: 'GET',
    //   header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
    //   success(res) {
    //     console.log(res)
    //     page.setData({
    //       stories: res.data.objects
    //     })
    //   }
    // };
    // wx.request(request);
    let tableName = 'story';
    let Story = new wx.BaaS.TableObject(tableName);
    Story.find().then((res) => {
      console.log('res', res);
      this.setData({
        stories: res.data.objects
      })
    })
  },
  
})
