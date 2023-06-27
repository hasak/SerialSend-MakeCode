basic.forever(function () {
    custom.sendSerial("compass", "" + (input.compassHeading()))
    custom.sendSerialWithMinInterval("temp", "" + (input.temperature()))
})
