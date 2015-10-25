dig.layer = null
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
    this.initializeStrikes()
  },

  addDirt: function (dirt) {
    this.addChild(dirt, this.spriteZIndex)
    this.spriteZIndex--
  },

  addDirtFrom: function (dirtCollection) {
    dirtCollection.forEach(function (dirt, index) {
      this.addDirt(dirt)
    }, this)
  },

  addDirtLayer: function () {
    this.addDirtFrom(dig.Factories.Dirt.grid(
      dig.Layers.TestRoom.DIRT_COLUMNS,
      dig.Layers.TestRoom.DIRT_ROWS
    ))
  },

  addMovingSpriteScore: function () {
    this.getScore().add(this.movingSprite.getScorePoint())
  },

  addMovingSpriteMultiplier: function () {
    this.getScore().addToMultiplier(this.movingSprite.getMultiplier())
  },

  addStrike: function () {
    this.getStrikes().addStrike()
    if (this.getStrikes().atMax()) {
      cc.director.runScene(new dig.Scenes.GameOver(
        this.getScore().score,
        this.getScore().highestMultiplier
      ))
    }
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
      var isWhiteListed = dig.Layers.TestRoom.CLICKABLE_TAGS
          .indexOf(child.getTag()) >= 0
      if (isWhiteListed) {
        return child.isClickable()
      }
      return false
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

  getGameOver: function () {
    return this.getChildByTag(dig.Layers.GameOver.TAG)
  },

  getGoldBin: function () {
    return this.getChildByTag(dig.Sprites.GoldBin.TAG)
  },

  getGoldChance: function () {
    return this.getScore().getMultiplier() * 10
  },

  getScore: function () {
    return this.getChildByTag(dig.Labels.Score.TAG)
  },

  getStrikes: function () {
    return this.getChildByTag(dig.Labels.Strikes.TAG)
  },

  getTopClickableChildIntersectingPoint: function (point) {
    return this.getClickableChildrenIntersectingPoint(point).sort(
      function (x, y) {
        return y.zIndex - x.zIndex
      }
    )[0]
  },

  initializeDirt: function () {
    this.addDirtFrom(dig.Factories.Dirt.grid(
      dig.Layers.TestRoom.DIRT_COLUMNS,
      dig.Layers.TestRoom.DIRT_ROWS
    ))
    this.addDirtLayer()
  },

  initializeDirtBin: function () {
    this.addChild(new dig.Sprites.DirtBin())
    this.getDirtBin().setPosition(
      dig.Layers.TestRoom.STARTING_POSITIONS.DIRT_BIN
    )
  },

  initializeGameOverLayer: function () {
    this.addChild(new dig.Layers.GameOver())
    dig.layer = this.getGameOver()
    this.getGameOver().setPosition(
      dig.Layers.TestRoom.STARTING_POSITIONS.GAME_OVER
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

  initializeStrikes: function () {
    this.addChild(new dig.Labels.Strikes())
    this.getStrikes().setPosition(
      dig.Layers.TestRoom.STARTING_POSITIONS.STRIKES
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

  removeMovingSpriteScore: function () {
    this.getScore().removeFromScore(this.movingSprite.getScorePoint())
  },

  removeMultiplier: function () {
    this.getScore().resetMultiplier()
  },

  spawnReplacementDirt: function () {
    var newDirt = null
    if (Math.random <= this.getGoldChance()) {
      newDirt = new dig.Sprites.GoldBar()
    } else {
      newDirt = new dig.Sprites.Dirt()
    }
    this.addDirt(newDirt)
    newDirt.setPosition(this.movingSpriteOriginalPosition)
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
      this.addMovingSpriteMultiplier()
      this.movingSprite.removeClickableTrait()
      this.spawnReplacementDirt()
    } else if (this.movingSpriteDroppedIntoWrongBin()) {
      this.removeMovingSpriteScore()
      this.removeMultiplier()
      this.addStrike()
      this.removeChild(this.movingSprite)
      this.spawnReplacementDirt()
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
  dig.Sprites.Dirt.TAG,
  dig.Sprites.GoldBar.TAG
]
dig.Layers.TestRoom.DIRT_COLUMNS = 6
dig.Layers.TestRoom.DIRT_ROWS = 6
dig.Layers.TestRoom.STARTING_POSITIONS = {
  DIRT_BIN: cc.p(100, 193),
  GAME_OVER: cc.p(0, 0),
  GOLD_BIN: cc.p(700, 193),
  SCORE: cc.p(727, 413),
  STRIKES: cc.p(145, 413)
}
