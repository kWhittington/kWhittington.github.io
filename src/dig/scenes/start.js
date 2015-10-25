dig.Scenes.Start = dig.Scene.extend({
  ctor: function () {
    this._super()
    this.addChild(new dig.Layers.Start())
  }
})

dig.Scenes.Start.TAG = 'start_scene'
