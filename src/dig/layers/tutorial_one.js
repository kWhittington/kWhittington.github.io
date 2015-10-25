dig.Layers.TutorialOne = dig.Layer.extend({
  text: 'Dig this dirt out by clicking and dragging it into the right bin.',

  ctor: function () {
    this._super()

    this.setTag(dig.Layers.TutorialOne.TAG)
    this.initializeDirtGrid()
    this.initializeText()
  },

  initializeDirtGrid: function () {
    dig.Factories.Dirt.grid(6, 6).forEach(function (dirt) {
      this.addChild(dirt)
    }, this)
  },

  initializeText: function () {
    var text = new dig.Label(
      this.text, 'Monaco', 36, cc.size(375, 300), cc.TEXT_ALIGNMENT_CENTER
    )
    text.centerOn(cc.winSize)
    this.addChild(text)
  }
})

dig.Layers.TutorialOne.TAG = 'tutorial_one_layer'
