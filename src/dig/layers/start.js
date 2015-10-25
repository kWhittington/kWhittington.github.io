dig.Layers.Start = dig.Layer.extend({
  ctor: function () {
    this._super()
    this.setTag(dig.Layers.Start.TAG)
    this.initializeStartButton()
    this.initializeHowToPlayButton()
    this.initializeTitle()
  },

  getHowToPlayButton: function () {
    return this.getChildByTag(dig.Labels.HowToPlay.TAG)
  },

  getStartButton: function () {
    return this.getChildByTag(dig.Labels.Start.TAG)
  },

  initializeHowToPlayButton: function () {
    this.addChild(new dig.Labels.HowToPlay())
    this.getHowToPlayButton().centerOn(cc.winSize)
    this.getHowToPlayButton().setPositionY(100)
  },

  initializeStartButton: function () {
    this.addChild(new dig.Labels.Start())
    this.getStartButton().centerOn(cc.winSize)
    this.getStartButton().setPositionY(180)
  },

  initializeTitle: function () {
    var title = new dig.Label('DIG', 'Impact', 200, cc.size(512, 210))
    title.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER)
    title.centerOn(cc.winSize)
    title.setPositionY(330)
    this.addChild(title)
  }
})

dig.Layers.Start.TAG = 'start_layer'
