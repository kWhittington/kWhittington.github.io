dig.Layers.TestRoom = dig.Layer.extend({
  movingSprite: null,
  movingSpriteOriginalPosition: null,
  spriteZIndex: 0,

  ctor: function () {
    this._super()

    var clickListener = dig.EventListeners.MouseClickAndDragToMove.clone()
    cc.eventManager.addListener(clickListener, this)
    this.initializeDirt()
    this.initializeDirtBin()
    this.initializeGoldBin()
    this.initializeScore()
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

  addMovingSpriteScore: function () {
    this.getScore().add(this.movingSprite.getScorePoint())
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

  getScore: function () {
    return this.getChildByTag(dig.Labels.Score.TAG)
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

  initializeScore: function () {
    this.addChild(new dig.Labels.Score())
    this.getScore().setPosition(
      dig.Layers.TestRoom.STARTING_POSITIONS.SCORE
    )
  },

  movingSpriteDroppedIntoCorrectBin: function () {
    var correctBin = this.getChildByTag(this.movingSprite.getCorrectBinTag())
    return correctBin.intersectsSprite(this.movingSprite)
  },

  movingSpriteDroppedIntoWrongBin: function () {
    var wrongBin = this.getChildByTag(this.movingSprite.getWrongBinTag())
    return wrongBin.intersectsSprite(this.movingSprite)
  },

  removeMultiplier: function () {
    this.getScore().resetMultiplier()
  },

  spriteBeingDragged: function () {
    return this.movingSprite != null
  },

  startDraggingSprite: function (sprite) {
    this.movingSprite = sprite
    this.movingSpriteOriginalPosition = sprite.getPosition()
    this.movingSprite.bringToFront()
  },

  stopDraggingSprite: function () {
    if (this.movingSpriteDroppedIntoCorrectBin()) {
      this.addMovingSpriteScore()
    } else if (this.movingSpriteDroppedIntoWrongBin()) {
      this.removeMultiplier()
      this.removeChild(this.movingSprite)
    } else {
      this.movingSprite.setPosition(this.movingSpriteOriginalPosition)
    }
    this.movingSprite = null
    this.movingSpriteOriginalPosition = null
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
  DIRT_BIN: cc.p(100, 193),
  GOLD_BIN: cc.p(700, 193),
  SCORE: cc.p(727, 413)
}
