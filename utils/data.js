//轮播图的数据图片
function getBannerData() {
  var arr = [
    '/pages/image/推荐/1.jpg',
    '/pages/image/推荐/2.jpg',
    '/pages/image/推荐/3.jpg'
  ]
  return arr
}

// 商品list列表
function getIndexNavSectionData() {
  var arr = [
      {
        subject_id:1,
        subject_title: "六鳌头水紫菜 /斤",
        buy_num:0,
        stock: 1,
        imagepath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523725911011&di=675ad3bc121fc3eb913a47b74ca7608d&imgtype=0&src=http%3A%2F%2Fdimg.cnlist.org%2Fimage%2Fupload%2F5a%2Fc8%2F87%2Ff9%2F5ac887f923c5d7ef94a900bcbc25df63.jpg",
        price: "￥100",
        message: '六鳌头水紫菜，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃，好吃'
      },
      {
        subject_id: 2,
        subject_title: "六鳌盐地地瓜 /斤",
        buy_num: 0,
        stock: 50,
        imagepath: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=410464376,1759567022&fm=27&gp=0.jpg",
        price: "￥50",
        message: '六鳌盐地地瓜，甜甜的你值得有用'

      },
      {
        subject_id: 3,
        subject_title: "六鳌新鲜小虾米 /斤",
        buy_num: 0,
        stock:50,
        imagepath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524320686&di=99171cf446f8a5dc1fbac111663332e8&imgtype=jpg&er=1&src=http%3A%2F%2Fpic42.huitu.com%2Fres%2F20151206%2F121598_20151206211818623187_1.jpg",
        price: "￥10",
        message: '六鳌小虾米，新鲜晒干小虾米'
      },
      {
        subject_id: 4,
        subject_title: "六鳌鲍鱼 /个",
        buy_num: 0,
        stock: 50,
        imagepath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523725999164&di=9ee536f7ce819fca9feaea3b0e9c01d7&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Dfd50a4d7bf8f8c54f7decd6f53514899%2Fa71ea8d3fd1f4134c50b67472e1f95cad1c85ece.jpg",
        price: "￥80",
        message: '六鳌鲍鱼，大，真的很大！'
      }
  ]
  return arr
}


//暴露借口
module.exports = {
  getBannerData: getBannerData,
  getIndexNavSectionData: getIndexNavSectionData
}