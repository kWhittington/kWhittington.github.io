dig.Layers.TutorialThree = dig.Layer.extend({
  text: 'Not into the gold bin, though!',

  ctor: function () {
    this._super()

    this.setTag(dig.Layers.TutorialThree.TAG)
    this.initializeDirtGrid()
    this.initializeDirtBin()
    this.initializeGoldBin()
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

  initializeGoldBin: function () {
    var bin = new dig.Sprites.GoldBin()
    this.addChild(bin)
    bin.setPosition(700, 193)
    var pointer = new dig.Label('Not Here', 'Monaco', 36)
    pointer.setPosition(700, 413)
    this.addChild(pointer)
  },

  initializeText: function () {
    var text = new dig.Label(
      this.text, 'Monaco', 36, cc.size(375, 300), cc.TEXT_ALIGNMENT_CENTER
    )
    text.centerOn(cc.winSize)
    this.addChild(text)
  }
})

dig.Layers.TutorialThree.TAG = 'tutorial_three_layer'
