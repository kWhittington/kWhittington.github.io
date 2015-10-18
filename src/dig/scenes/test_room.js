dig.Scenes.TestRoom = dig.Scene.extend({
  onEnter: function () {
    this._super()
    this.addChild(new dig.Layers.TestRoom())
  }
})
