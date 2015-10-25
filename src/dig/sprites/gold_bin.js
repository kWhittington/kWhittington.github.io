dig.Sprites.GoldBin = dig.Sprite.extend({
  ctor: function () {
    this._super('res/gold_bin_grey_light.png')
    this.setContentSize(cc.size(192, 384))
    this.setTag(dig.Sprites.GoldBin.TAG)
  }
})

dig.Sprites.GoldBin.TAG = 'gold_bin'
