dig.Scenes.GameOver = dig.Scene.extend({
  highestMultiplier: 0,
  endScore: 0,

  ctor: function (endScore, highestMultiplier) {
    this._super()
    this.endScore = endScore
    this.highestMultiplier = highestMultiplier
  },

  onEnter: function () {
    this._super()
    this.addChild(new dig.Layers.GameOver(
      this.endScore,
      this.highestMultiplier
    ))
  }
})

dig.Scenes.GameOver.TAG = 'game_over_scene'
