dig.Sprites.Dirt = dig.Sprite.extend({
  ctor: function () {
    this._super('res/dirt_grey.png')
    this.setContentSize(cc.size(64, 64))
    this.setTag(dig.Sprites.Dirt.TAG)
  },

  getCorrectBinTag: function () {
    return dig.Sprites.DirtBin.TAG
  },

  getWrongBinTag: function () {
    return dig.Sprites.GoldBin.TAG
  },

  getScorePoint: function () {
    return 1
  }
})

dig.Sprites.Dirt.TAG = 'dirt'
