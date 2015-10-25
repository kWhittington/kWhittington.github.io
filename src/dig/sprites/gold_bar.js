dig.Sprites.GoldBar = dig.Sprite.extend({
  ctor: function () {
    this._super('res/gold_bar_grey.png')
    this.setContentSize(cc.size(64, 64))
    this.setTag(dig.Sprites.GoldBar.TAG)
  },

  getCorrectBinTag: function () {
    return dig.Sprites.GoldBin.TAG
  },

  getMultiplier: function () {
    return 1
  },

  getScorePoint: function () {
    return 100
  },

  getWrongBinTag: function () {
    return dig.Sprites.DirtBin.TAG
  }
})

dig.Sprites.GoldBar.TAG = 'gold_bar'
