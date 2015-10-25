dig.Scenes.Tutorial = dig.Scene.extend({
  currentLayerTag: null,

  ctor: function () {
    this._super()
    this.addChild(new dig.Layers.TutorialOne())
    this.currentLayerTag = dig.Layers.TutorialOne.TAG
    this.initializeNextButton()
    this.initializeClickListener()
  },

  getNextButton() {
    return this.getChildByTag('next_button')
  },

  goToNextTutorialLayer: function () {
    this.removeChildByTag(this.currentLayerTag)
    if (this.currentLayerTag == dig.Layers.TutorialOne.TAG) {
      this.addChild(new dig.Layers.TutorialTwo(), -1)
      this.currentLayerTag = dig.Layers.TutorialTwo.TAG
    } else if (this.currentLayerTag == dig.Layers.TutorialTwo.TAG) {
      this.addChild(new dig.Layers.TutorialThree(), -1)
      this.currentLayerTag = dig.Layers.TutorialThree.TAG
    } else if (this.currentLayerTag == dig.Layers.TutorialThree.TAG) {
      this.addChild(new dig.Layers.TutorialFour(), -1)
      this.currentLayerTag = dig.Layers.TutorialFour.TAG
    } else if (this.currentLayerTag == dig.Layers.TutorialFour.TAG) {
      this.addChild(new dig.Layers.TutorialFive(), -1)
      this.currentLayerTag = dig.Layers.TutorialFive.TAG
    } else if (this.currentLayerTag == dig.Layers.TutorialFive.TAG) {
      this.addChild(new dig.Layers.TutorialSix(), -1)
      this.currentLayerTag = dig.Layers.TutorialSix.TAG
    } else {
      cc.director.runScene(new dig.Scenes.Start())
    }
  },

  initializeClickListener: function () {
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      onTouchBegan: function (touch, event) {
        var wasTouched = cc.rectContainsPoint(
          event.getCurrentTarget().getNextButton().getBoundingBoxToWorld(),
          touch.getLocation()
        )

        if (wasTouched) {
          event.getCurrentTarget().goToNextTutorialLayer()
        }
      }
    }, this)
  },

  initializeNextButton: function () {
    var nextButton = new dig.Label('Next', 'Monaco', 36)
    nextButton.setPosition(530, 32)
    nextButton.setTag('next_button')
    this.addChild(nextButton)
  }
})

dig.Scenes.Tutorial.TAG = 'tutorial_scene'
