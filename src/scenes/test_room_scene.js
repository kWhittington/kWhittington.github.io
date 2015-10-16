dig.TestRoomScene = cc.Scene.extend({
  onEnter: function () {
    this._super()
    this.addChild(new dig.TestRoomLayer())
  }
})
