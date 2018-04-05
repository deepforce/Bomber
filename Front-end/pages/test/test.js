// pages/test/test.js
var timer;
var role=[1, 1, 1, 2];
var mymap = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    array: mymap
  },
  left_move: function (e) {
    doMove(this,0)
  },
  right_move: function (e) {
    doMove(this,1)
  },
  up_move: function (e) {
    doMove(this,2)
  },
  down_move: function (e) {
    doMove(this,3)
  },
  setbomb: function (e) {
    mymap[role[0]][role[1]]=-5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    StartGame(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})

function doMove(that,dirction){
  var iadd=0;
  var jadd=0;
  switch(dirction){
    case 0: jadd = -1; break;
    case 1: jadd = 1; break;
    case 2: iadd = -1; break;
    case 3: iadd = 1; break;
  }
  if (mymap[role[0] + iadd][role[1] + jadd]==0){
    if (mymap[role[0]][role[1]] == 2){
      mymap[role[0]][role[1]] = 0
    }
    role[0]+=iadd
    role[1]+=jadd
    mymap[role[0]][role[1]] = 2
  }
  that.setData(
    { array: mymap }
  )
}


function scanBomb(){
  var i=0
  var j=0
  for (i = 1; i < 16; i++) {
    for (j = 1; j < 20; j++) {
      if (mymap[i][j] == -1) {
        mymap[i][j] += 1
      }
    }
  }
  for(i=1;i<16;i++){
    for(j=1;j<20;j++){
      if(mymap[i][j]<-1){
        mymap[i][j]+=1
        if (mymap[i][j] == -1){
          mymap[i-1][j] = -1
          mymap[i+1][j] = -1
          mymap[i][j-1] = -1
          mymap[i][j+1] = -1
        }
      }
    }
  }
}

function StartGame(that){
  timer=setTimeout(function(){
    scanBomb()
    that.setData(
      { array: mymap }
    )
    StartGame(that)
  },300
  )
}
