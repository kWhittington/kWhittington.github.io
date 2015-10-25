dig.Buttons.Redo = dig.Label.extend({
  ctor: function () {
    this._super('Redo', 'Monaco', 38)
    this.setFontFillColor(cc.color(255, 255, 255, 255))
    this.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER)
    this.setTag(dig.Buttons.Redo.TAG)

    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      onTouchBegan: function (touch, event) {
        var wasTouched = cc.rectContainsPoint(
          event.getCurrentTarget().getBoundingBoxToWorld(),
          touch.getLocation()
        )
        dig.touch = touch
        cc.log(wasTouched)
        if (wasTouched) {
          cc.director.runScene(new dig.Scenes.TestRoom())
        }
      }
    }, this)
  }
})

dig.Buttons.Redo.TAG = 'redo_button'
