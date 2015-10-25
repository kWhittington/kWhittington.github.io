dig.Labels.Score = dig.Label.extend({
  multiplier: 1,
  score: 0,

  ctor: function () {
    this._super('', 'Monaco', 38)
    this.setFontFillColor(cc.color(225, 225, 225, 255))
    this.setTag(dig.Labels.Score.TAG)
    this.setHorizontalAlignment(cc.TEXT_ALIGNMENT_RIGHT)
    this.updateScore()
  },

  updateScore: function () {
    this.setString(this.score + ' x' + this.multiplier)
  }
})

dig.Labels.Score.TAG = 'score_label'
