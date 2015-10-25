dig.Sprite = cc.Sprite.extend({
  getLocation: function () {
    return this.getPosition()
  },

  intersectsWithPoint: function (point) {
    return this.worldBoundsIntersectsWithPoint(point)
  },

  worldBoundsIntersectsWithPoint: function (point) {
    return cc.rectContainsPoint(this.getBoundingBoxToWorld(), point)
  }
})
