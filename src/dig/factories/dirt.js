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

  mixedGrid: function (columns, rows) {
    var mixedArray = []

    for (var column = 0; column < columns; column++) {
      for (var row = 0; row < rows; row++) {
        var dirt = null
        var chance = Math.random()
        if (chance < 0.3) {
          dirt = new dig.Sprites.GoldBar()
        } else {
          dirt = new dig.Sprites.Dirt()
        }
        dirt.setPosition(
          this.horizontalPositionOfColumn(column),
          this.verticalPositionOfRow(row)
        )
        mixedArray.push(dirt)
      }
    }
    return mixedArray
  },

  verticalPositionOfRow: function (row) {
    var height = 64
    var padding = 34
    return padding + height * row
  }
}
