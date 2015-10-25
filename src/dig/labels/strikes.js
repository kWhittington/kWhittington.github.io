dig.Labels.Strikes = dig.Label.extend({
  count: 0,

  ctor: function () {
    this._super('', 'Monaco', 38)
    this.setFontFillColor(cc.color(169, 169, 169, 255))
    this.setTag(dig.Labels.Strikes.TAG)
    this.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT)
    this.updateStrikes()
  },

  addStrike: function () {
    if (this.count < this.getMax()) {
      this.count++
    }
    this.updateStrikes()
  },

  atMax: function () {
    return this.count >= this.getMax()
  },

  getMax: function () {
    return dig.Labels.Strikes.MAX
  },

  getStrikesString: function () {
    return dig.Labels.Strikes.STRIKE_STRINGS[this.count]
  },

  underMax: function () {
    return this.count < this.getMax()
  },

  updateStrikes: function () {
    this.setString('STRIKES: ' + this.getStrikesString())
  }
})

dig.Labels.Strikes.TAG = 'strikes_label'
dig.Labels.Strikes.STRIKE_STRINGS = {
  0: 'OOO',
  1: 'XOO',
  2: 'XXO',
  3: 'XXX'
}
dig.Labels.Strikes.MAX = 3
