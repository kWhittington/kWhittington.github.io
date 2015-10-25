dig.Labels.HowToPlay = dig.Label.extend({
  ctor: function () {
    this._super('How to Play', 'Monaco', 38)
    this.setFontFillColor(cc.color(255, 255, 255, 255))
    this.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER)
    this.setTag(dig.Labels.HowToPlay.TAG)

    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      onTouchBegan: function (touch, event) {
        var wasTouched = cc.rectContainsPoint(
          event.getCurrentTarget().getBoundingBoxToWorld(),
          touch.getLocation()
        )
        if (wasTouched) {
          cc.director.runScene(new dig.Scenes.Tutorial())
        }
      }
    }, this)
  }
})

dig.Labels.HowToPlay.TAG = 'how_to_play_label'
