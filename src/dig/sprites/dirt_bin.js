dig.Sprites.DirtBin = dig.Sprite.extend({
  ctor: function () {
    this._super('res/dirt_bin.png')
    this.setContentSize(cc.size(192, 384))
    this.setTag(dig.Sprites.DirtBin.TAG)
  }
})

dig.Sprites.DirtBin.TAG = 'dirt_bin'
