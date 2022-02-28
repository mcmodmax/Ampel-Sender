radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 98765) {
        Ampel = 1
    } else {
        if (receivedNumber == 46123) {
            Ampel += 2
        }
    }
})
/**
 * Ampel An
 */
/**
 * Ampel Aus
 */
input.onButtonPressed(Button.A, function () {
    if (Ampel == 2) {
        Ampel = 1
        radio.sendNumber(93847)
        radio.sendNumber(98765)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Ampel == 1) {
        Ampel = 2
        radio.sendNumber(66453)
        radio.sendNumber(46123)
    }
})
let Ampel = 0
radio.setGroup(187)
Ampel = 2
