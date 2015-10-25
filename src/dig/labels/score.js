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

  add: function (score) {
    this.score = this.score + score * this.multiplier
    this.updateScore()
  },

  addToMultiplier: function (multiplier) {
    this.multiplier = this.multiplier + multiplier
    this.updateScore()
  },

  resetMultiplier: function () {
    this.multiplier = 1
    this.updateScore()
  },

  updateScore: function () {
    this.setString(this.score + ' x' + this.multiplier)
  }
})

dig.Labels.Score.TAG = 'score_label'
