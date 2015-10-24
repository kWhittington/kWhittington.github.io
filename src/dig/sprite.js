dig.Sprite = cc.Sprite.extend({
  getLocation: function () {
    return this.getPosition()
  },

  intersectsWithPoint: function (point) {
    return cc.pFuzzyEqual(this.getLocation(), point, this.radius())
  },

  radius: function () {
    return this.getSpriteFrame().getRect().width / 3
  },

  worldBoundsIntersectsWithPoint: function (point) {
    return cc.rectContainsPoint(this.getBoundingBoxToWorld(), point)
  }
})
