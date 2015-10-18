dig.Layers.TestRoom = dig.Layer.extend({
  ctor: function () {
    this._super()

    var label = new dig.Labels.TestRoom()
    label.centerOn(this)

    this.addChild(label)
  }
})
