basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showLeds(`
            # # # # #
            . # . # .
            . . # . .
            . # . # .
            # # # # #
            `)
    } else {
    	
    }
})
