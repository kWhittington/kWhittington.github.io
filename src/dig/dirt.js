dig.Dirt = dig.Sprite.extend({
  ctor: function () {
    this._super('res/dirt.png')
    this.width = 64
    this.height = 64
  },

  intersectsWith: function (point) {
    return this.worldBoundsIntersectsWith(point)
  },

  worldBoundsIntersectsWith: function (point) {
    return cc.rectContainsPoint(this.getBoundingBoxToWorld(), point)
  }
})
