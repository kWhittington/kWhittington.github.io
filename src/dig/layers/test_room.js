dig.Layers.TestRoom = dig.Layer.extend({
  movingSprite: null,
  spriteZIndex: 0,

  ctor: function () {
    this._super()

    var label = new dig.Labels.TestRoom()
    label.centerOn(cc.winSize)

    this.addChild(label)

    var clickListener = dig.EventListeners.MouseClickAndDragToMove.clone()
    cc.eventManager.addListener(clickListener, this)
    this.initializeDirt()
    this.initializeDirtBin()
    this.initializeGoldBin()
  },

  addDirt: function (dirt) {
    this.addChild(dirt, this.spriteZIndex)
    this.spriteZIndex++
  },

  addDirtFrom: function (dirtCollection) {
    dirtCollection.forEach(function (dirt, index) {
      this.addDirt(dirt)
    }, this)
  },

  childrenIntersectingWith: function (point) {
    return this.getChildren().filter(function (child) {
      if (child.intersectsWithPoint != null) {
        return child.intersectsWithPoint(point)
      }
      return false
    })
  },

  childrenInDescendingOrderIntersectingWith: function (point) {
    return this.childrenIntersectingWith(point).sort(function (x, y) {
      return y.zIndex - x.zIndex
    })
  },

  detectDraggingSpriteAt: function (point) {
    if (this.getClickableChildrenIntersectingPoint(point).length != 0) {
      this.startDraggingSprite(this.getTopClickableChildIntersectingPoint(
        point
      ))
    }
  },

  dragSpriteBy: function (target) {
    var sum = cc.pAdd(target, this.movingSprite.getPosition())
    this.movingSprite.setPosition(sum)
  },

  getClickableChildren: function () {
    var children = []

    return this.getChildren().filter(function (child) {
      return dig.Layers.TestRoom.CLICKABLE_TAGS.indexOf(child.getTag()) >= 0
    })
  },

  getClickableChildrenIntersectingPoint: function (point) {
    return this.getClickableChildren().filter(function (child) {
      if (child.intersectsWithPoint != null) {
        return child.intersectsWithPoint(point)
      }
      return false
    })
  },

  getDirtBin: function () {
    return this.getChildByTag(dig.Sprites.DirtBin.TAG)
  },

  getGoldBin: function () {
    return this.getChildByTag(dig.Sprites.GoldBin.TAG)
  },

  getTopClickableChildIntersectingPoint: function (point) {
    return this.getClickableChildrenIntersectingPoint(point)[0]
  },

  initializeDirt: function () {
    this.addDirtFrom(dig.Factories.Dirt.grid(
      dig.Layers.TestRoom.DIRT_COLUMNS,
      dig.Layers.TestRoom.DIRT_ROWS
    ))
  },

  initializeDirtBin: function () {
    this.addChild(new dig.Sprites.DirtBin())
    this.getDirtBin().setPosition(
      dig.Layers.TestRoom.STARTING_POSITIONS.DIRT_BIN
    )
  },

  initializeGoldBin: function () {
    this.addChild(new dig.Sprites.GoldBin())
    this.getGoldBin().setPosition(
      dig.Layers.TestRoom.STARTING_POSITIONS.GOLD_BIN
    )
  },

  spriteBeingDragged: function () {
    return this.movingSprite != null
  },

  startDraggingSprite: function (sprite) {
    this.movingSprite = sprite
    this.movingSprite.bringToFront()
  },

  stopDraggingSprite: function () {
    this.movingSprite = null
  },

  topChildIntersectingWith: function (point) {
    return this.childrenInDescendingOrderIntersectingWith(point)[0]
  }
})

dig.Layers.TestRoom.CLICKABLE_TAGS = [
  dig.Sprites.Dirt.TAG
]
dig.Layers.TestRoom.DIRT_COLUMNS = 6
dig.Layers.TestRoom.DIRT_ROWS = 6
dig.Layers.TestRoom.STARTING_POSITIONS = {
  DIRT_BIN: cc.p(100, 225),
  GOLD_BIN: cc.p(700, 225)
}
