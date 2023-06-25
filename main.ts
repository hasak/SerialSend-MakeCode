basic.forever(function () {
    custom.sendSerial("temp:abc,asd::,d3df", "" + (input.temperature()))
    basic.pause(1000)
})
