dig.Layers.TutorialTwo = dig.Layer.extend({
  text: 'Dirt blocks must be sorted into the trash bin.',

  ctor: function () {
    this._super()

    this.setTag(dig.Layers.TutorialTwo.TAG)
    this.initializeDirtGrid()
    this.initializeDirtBin()
    this.initializeText()
  },

  initializeDirtBin: function () {
    var bin = new dig.Sprites.DirtBin()
    this.addChild(bin)
    bin.setPosition(cc.p(100, 193))
    var pointer = new dig.Label('Here', 'Monaco', 36)
    pointer.setPosition(100, 413)
    this.addChild(pointer)
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

dig.Layers.TutorialTwo.TAG = 'tutorial_two_layer'
