cc.Node.prototype.centerOn = function (node) {
  this.x = node.width / 2
  this.y = node.height / 2
}

cc.Node.prototype.getLocalZOrderMaximum = function () {
  return this.getChildren().reduce(function (previous, current) {
    if (previous.getLocalZOrder() > current.getLocalZOrder()) {
      return previous
    } else {
      return current
    }
  }).getLocalZOrder()
}
