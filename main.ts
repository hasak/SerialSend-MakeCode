basic.forever(function () {
    custom.sendSerialWithMinInterval("compass", "" + (input.compassHeading()))
    custom.sendSerialWithMinInterval("key", "value")
})
