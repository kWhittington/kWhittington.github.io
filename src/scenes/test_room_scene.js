var TestRoomScene = cc.Scene.extend({
  onEnter: function () {
    this._super()
    this.addChild(new TestRoomLayer())
  }
})
