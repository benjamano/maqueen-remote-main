gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Up, function () {
    basic.clearScreen()
    radio.sendString("stop")
    gamePad.vibratorMotor(gamePad.Vibrator.V0)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Up, function () {
    basic.clearScreen()
    radio.sendString("stop")
    gamePad.vibratorMotor(gamePad.Vibrator.V0)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    radio.sendString("left")
    gamePad.vibratorMotor(gamePad.Vibrator.V1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("leftled")
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendString("right")
    gamePad.vibratorMotor(gamePad.Vibrator.V1)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    radio.sendString("backward")
    gamePad.vibratorMotor(gamePad.Vibrator.V1)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Up, function () {
    basic.clearScreen()
    radio.sendString("stop")
    gamePad.vibratorMotor(gamePad.Vibrator.V0)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendString("forward")
    gamePad.vibratorMotor(gamePad.Vibrator.V1)
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendString("happy")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("rightled")
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Up, function () {
    basic.clearScreen()
    radio.sendString("stop")
    gamePad.vibratorMotor(gamePad.Vibrator.V0)
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    basic.showIcon(IconNames.Heart)
    radio.sendString("heart")
})
radio.setGroup(42069)
