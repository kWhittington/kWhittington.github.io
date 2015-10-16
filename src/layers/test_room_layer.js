dig.TestRoomLayer = cc.Layer.extend({
  ctor: function () {
    this._super()

    var label = new dig.TestRoomLabel()
    label.attr({
      x: this.width / 2,
      y: this.height / 2
    })

    this.addChild(label)
  }
})
