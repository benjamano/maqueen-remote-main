def my_function():
    basic.clear_screen()
    radio.send_string("stop")
    gamePad.vibrator_motor(gamePad.Vibrator.V0)
gamePad.on_event(GamerBitPin.P15, GamerBitEvent.UP, my_function)

def my_function2():
    basic.clear_screen()
    radio.send_string("stop")
    gamePad.vibrator_motor(gamePad.Vibrator.V0)
gamePad.on_event(GamerBitPin.P14, GamerBitEvent.UP, my_function2)

def my_function3():
    basic.show_leds("""
        . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
    """)
    radio.send_string("left")
    gamePad.vibrator_motor(gamePad.Vibrator.V1)
gamePad.on_event(GamerBitPin.P14, GamerBitEvent.DOWN, my_function3)

def on_button_pressed_a():
    radio.send_string("leftled")
input.on_button_pressed(Button.A, on_button_pressed_a)

def my_function4():
    basic.show_leds("""
        . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
    """)
    radio.send_string("right")
    gamePad.vibrator_motor(gamePad.Vibrator.V1)
gamePad.on_event(GamerBitPin.P15, GamerBitEvent.DOWN, my_function4)

def my_function5():
    basic.show_leds("""
        . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
    """)
    radio.send_string("backward")
    gamePad.vibrator_motor(gamePad.Vibrator.V1)
gamePad.on_event(GamerBitPin.P13, GamerBitEvent.DOWN, my_function5)

def my_function6():
    basic.clear_screen()
    radio.send_string("stop")
    gamePad.vibrator_motor(gamePad.Vibrator.V0)
gamePad.on_event(GamerBitPin.P8, GamerBitEvent.UP, my_function6)

def my_function7():
    basic.show_leds("""
        . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
    """)
    radio.send_string("forward")
    gamePad.vibrator_motor(gamePad.Vibrator.V1)
gamePad.on_event(GamerBitPin.P8, GamerBitEvent.DOWN, my_function7)

def my_function8():
    basic.show_icon(IconNames.HAPPY)
gamePad.on_event(GamerBitPin.P1, GamerBitEvent.DOWN, my_function8)

def on_button_pressed_b():
    radio.send_string("rightled")
input.on_button_pressed(Button.B, on_button_pressed_b)

def my_function9():
    basic.clear_screen()
    radio.send_string("stop")
    gamePad.vibrator_motor(gamePad.Vibrator.V0)
gamePad.on_event(GamerBitPin.P13, GamerBitEvent.UP, my_function9)

def my_function10():
    basic.show_icon(IconNames.HEART)
gamePad.on_event(GamerBitPin.P2, GamerBitEvent.DOWN, my_function10)

radio.set_group(1)