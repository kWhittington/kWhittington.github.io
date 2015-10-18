dig.Node = cc.Node.extend({
  centerOn: function (node) {
    this.x = node.width / 2
    this.y = node.height / 2
  }
})
