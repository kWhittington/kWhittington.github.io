dig.Sprites.Dirt = dig.Sprite.extend({
  ctor: function () {
    this._super('res/dirt_grey.png')
    this.setContentSize(cc.size(64, 64))
    this.setTag(dig.Sprites.Dirt.TAG)
  }
})

dig.Sprites.Dirt.TAG = 'dirt'
