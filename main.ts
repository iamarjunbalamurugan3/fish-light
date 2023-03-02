input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.setBrightness(255)
