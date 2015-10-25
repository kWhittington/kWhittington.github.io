dig.Layers.Start = dig.Layer.extend({
  ctor: function () {
    this._super()
    this.setTag(dig.Layers.Start.TAG)
    this.initializeStartButton()
  },

  getStartButton: function () {
    return this.getChildByTag(dig.Labels.Start.TAG)
  },

  initializeStartButton: function () {
    this.addChild(new dig.Labels.Start())
    this.getStartButton().centerOn(cc.winSize)
    this.getStartButton().setPositionY(300)
  }
})

dig.Layers.Start.TAG = 'start_layer'
