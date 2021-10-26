import {
  request
} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail/',
    params: {
      iid
    }
  })
}
// 获取推荐
export function getRecommend() {
  return request({
    url: '/recommend'
  })

}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.columns = columns;
    this.services = services;
    this.desc = itemInfo.desc;
    this.Price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.realNowPrice = itemInfo.lowNowPrice;
  }
}
export class Shop {
  constructor(ShopInfo) {
    this.logo = ShopInfo.shopLogo;
    this.name = ShopInfo.name;
    this.fans = ShopInfo.cFans;
    this.sells = ShopInfo.cSells;
    this.score = ShopInfo.score;
    this.goodsCount = ShopInfo.cGoods
  }
}
export class GoodsParam {
  constructor(info, rule) {
    // images可能没有值，（某些商品有值，某些没有值）
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
