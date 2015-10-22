dig.Dirt = dig.Sprite.extend({
  ctor: function () {
    this._super('res/dirt.png')
  },

  intersectsWith: function (point) {
    return this.worldBoundsIntersectsWith(point)
  },

  worldBoundsIntersectsWith: function (point) {
    return cc.rectContainsPoint(this.getBoundingBoxToWorld(), point)
  }
})
