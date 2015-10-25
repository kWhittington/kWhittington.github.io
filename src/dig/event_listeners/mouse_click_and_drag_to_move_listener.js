dig.EventListeners.MouseClickAndDragToMove = cc.EventListener.create({
  event: cc.EventListener.MOUSE,

  onMouseDown: function (event) {
    event.getCurrentTarget().detectDraggingSpriteAt(event.getLocation())
  },

  onMouseMove: function (event) {
    if (event.getCurrentTarget().spriteBeingDragged()) {
      var sum = cc.pAdd(
        event.getDelta(),
        event.getCurrentTarget().getPosition()
      )
      event.getCurrentTarget().dragSpriteBy(event.getDelta())
    }
  },

  onMouseUp: function (event) {
    if (event.getCurrentTarget().spriteBeingDragged()) {
      event.getCurrentTarget().stopDraggingSprite()
    }
  }
})
