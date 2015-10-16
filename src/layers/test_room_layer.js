dig.TestRoomLayer = cc.Layer.extend({
  ctor: function () {
    this._super()

    var label = new dig.TestRoomLabel()
    label.centerOn(this)

    this.addChild(label)
  }
})
