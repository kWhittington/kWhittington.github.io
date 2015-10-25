dig.Layers.GameOver = dig.Layer.extend({
  multiplier: 0,
  score: 0,

  ctor: function (score, multiplier) {
    this._super(cc.color.BLACK)
    this.score = score
    this.multiplier = multiplier
    this.initailizeScoreLabel()
    this.setTag(dig.Layers.GameOver.TAG)
  },

  initailizeScoreLabel: function () {
    var label = new dig.Labels.GameOver(this.score, this.multiplier)
    this.addChild(label)
    label.centerOn(cc.winSize)
  }
})

dig.Layers.GameOver.TAG = 'game_over_layer'
