dig.Sprites.Dirt = dig.Sprite.extend({
  ctor: function () {
    this._super('res/dirt.png')
    this.setContentSize(cc.size(64, 64))
  },

  intersectsWithPoint: function (point) {
    return this.worldBoundsIntersectsWithPoint(point)
  },

  worldBoundsIntersectsWithPoint: function (point) {
    return cc.rectContainsPoint(this.getBoundingBoxToWorld(), point)
  }
})
