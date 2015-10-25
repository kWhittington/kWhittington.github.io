dig.Labels.GameOver = dig.Label.extend({
  ctor: function (score, multiplier) {
    var scoreString = 'SCORE: ' + score + '\n' +
      'Best Multiplier: ' + multiplier
    this._super(scoreString, 'Monaco', 38)
    this.setFontFillColor(cc.color(225, 225, 225, 255))
    this.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER)
  }
})

dig.Labels.GameOver.TAG = 'game_over_label'
