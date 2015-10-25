dig.Sprites.Dirt = dig.Sprite.extend({
  clickable: true,

  ctor: function () {
    this._super('res/dirt_grey.png')
    this.setContentSize(cc.size(64, 64))
    this.setTag(dig.Sprites.Dirt.TAG)
  },

  getCorrectBinTag: function () {
    return dig.Sprites.DirtBin.TAG
  },

  getMultiplier: function () {
    return 0
  },

  getScorePoint: function () {
    return 1
  },

  getWrongBinTag: function () {
    return dig.Sprites.GoldBin.TAG
  },

  isClickable: function () {
    return this.clickable
  },

  removeClickableTrait: function () {
    this.clickable = false
  }
})

dig.Sprites.Dirt.TAG = 'dirt'
