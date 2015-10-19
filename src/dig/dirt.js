dig.Dirt = dig.Sprite.extend({
  ctor: function () {
    this._super('res/dirt.png')

    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ALL_AT_ONCE,
      onTouchesMoved: function (touches, event) {
        var touch = touches[0]
        var delta = touch.getDelta()
        var node = event.getCurrentTarget()
        var diff = cc.pAdd(delta, node.getPosition())
        node.setPosition(diff)
      }
    }, this)
  }
})
