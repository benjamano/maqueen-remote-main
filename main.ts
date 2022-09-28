gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Up, function () {
    gamePad.vibratorMotor(gamePad.Vibrator.V0)
    basic.clearScreen()
    radio.sendString("stop")
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Up, function () {
    gamePad.vibratorMotor(gamePad.Vibrator.V0)
    basic.clearScreen()
    radio.sendString("stop")
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    radio.sendString("left")
    gamePad.vibratorMotor(gamePad.Vibrator.V1)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("leftled")
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    radio.sendString("right")
    gamePad.vibratorMotor(gamePad.Vibrator.V1)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    radio.sendString("backward")
    gamePad.vibratorMotor(gamePad.Vibrator.V1)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Up, function () {
    gamePad.vibratorMotor(gamePad.Vibrator.V0)
    basic.clearScreen()
    radio.sendString("stop")
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    radio.sendString("forward")
    gamePad.vibratorMotor(gamePad.Vibrator.V1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendString("happy")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("ledsoff")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("rightled")
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Up, function () {
    gamePad.vibratorMotor(gamePad.Vibrator.V0)
    basic.clearScreen()
    radio.sendString("stop")
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    basic.showIcon(IconNames.Heart)
    radio.sendString("heart")
})
radio.setGroup(42069)
