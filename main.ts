input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.clear()
    strip.show()
    strip.showRainbow(1, 360)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.setBrightness(255)
