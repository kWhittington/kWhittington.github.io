dig.EventListeners.MouseClickAndDragToMove = cc.EventListener.extend({
  event: cc.EventListener.MOUSE,
  movingSprite: null,
  isSpriteMoving: function () {
    return this.movingSprite != null
  },
  onMouseDown: function (event) {
    var node = event.getCurrentTarget()

    if (node.intersectsWith(event.getLocation())) {
      this.movingSprite = node
    }
  },
  onMouseMove: function (event) {
    if (this.isSpriteMoving()) {
      var sum = cc.pAdd(event.getDelta(), this.movingSprite.getLocation())
      this.movingSprite.setPosition(sum)
    }
  },
  onMouseUp: function (event) {
    this.movingSprite = null
  }
})
