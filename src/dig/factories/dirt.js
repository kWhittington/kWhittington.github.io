dig.Factories.Dirt = {
  grid: function (columns, rows) {
    var dirtArray = []

    for (var column = 0; column < columns; column++) {
      for (var row = 0; row < rows; row++) {
        var dirt = new dig.Sprites.Dirt()
        dirt.setPosition(
          this.horizontalPositionOfColumn(column),
          this.verticalPositionOfRow(row)
        )
        dirtArray.push(dirt)
      }
    }

    return dirtArray
  },

  horizontalPositionOfColumn: function (column) {
    var width = 64
    var padding = 240
    return padding + width * column
  },

  verticalPositionOfRow: function (row) {
    var height = 64
    var padding = 34
    return padding + height * row
  }
}
