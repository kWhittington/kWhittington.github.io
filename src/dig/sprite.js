dig.Sprite = cc.Sprite.extend({
  getLocation: function () {
    return this.getPosition()
  },

  intersectsWith: function (point) {
    return cc.pFuzzyEqual(this.getLocation(), point, this.radius())
  },

  radius: function () {
    return this.getSpriteFrame().getRect().width / 3
  }
})
