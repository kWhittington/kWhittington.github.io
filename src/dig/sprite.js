dig.Sprite = cc.Sprite.extend({
  getLocation: function () {
    return this.getPosition()
  },

  intersectsWithPoint: function (point) {
    return this.worldBoundsIntersectsWithPoint(point)
  },

  intersectsSprite: function (sprite) {
    return this.worldBoundsIntersectsSprite(sprite)
  },

  worldBoundsIntersectsWithPoint: function (point) {
    return cc.rectContainsPoint(this.getBoundingBoxToWorld(), point)
  },

  worldBoundsIntersectsSprite: function (sprite) {
    return cc.rectContainsRect(
      this.getBoundingBoxToWorld(),
      sprite.getBoundingBoxToWorld()
    )
  }
})
