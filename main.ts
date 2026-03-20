enum RadioMessage {
    Change_chanel = 1472,
    SOS = 12905,
    message1 = 49434
}
/**
 * dont re-upload!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
input.onPinPressed(TouchPin.P1, function () {
    language = 1
    basic.showString("B")
    basic.clearScreen()
})
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    basic.showIcon(IconNames.LeftTriangle)
    basic.clearScreen()
    radio.sendMessage(RadioMessage.message1)
    basic.pause(2000)
    radio.sendString("" + (Name))
    basic.pause(3000)
    basic.showString("S")
    for (let index = 0; index < 3; index++) {
        radio.sendString(".")
        basic.pause(100)
    }
    basic.showString("O")
    for (let index = 0; index < 3; index++) {
        radio.sendString("-")
        basic.pause(100)
    }
    basic.showString("S")
    for (let index = 0; index < 3; index++) {
        radio.sendString(".")
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (Name))
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P0, function () {
    language = 0
    basic.showString("M")
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    if (language == 1) {
        radio.sendString("1")
    } else {
        radio.sendString(".")
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == ".") {
        basic.showString(receivedString)
        basic.clearScreen()
        basic.pause(100)
    } else {
        basic.showString(receivedString)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    if (language == 1) {
        radio.sendString("0")
    } else {
        radio.sendString("-")
    }
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    radio.sendMessage(RadioMessage.Change_chanel)
    Channel += 1
    radio.setGroup(Channel)
    if (Channel > 5) {
        basic.showNumber(0)
        basic.clearScreen()
        basic.pause(700)
    } else {
        basic.showNumber(Channel)
        basic.clearScreen()
        basic.pause(700)
    }
})
radio.onReceivedMessage(RadioMessage.Change_chanel, function () {
	
})
let Channel = 0
let Name = 0
let language = 0
basic.showLeds(`
    . . . . .
    . # . . .
    . # # # .
    . # # # .
    . # # # .
    `)
radio.setGroup(0)
basic.pause(200)
basic.clearScreen()
language = 0
radio.setGroup(1)
Name = randint(0, 999)
basic.showString("" + (Name))
basic.clearScreen()
Channel = 0
radio.setGroup(Channel)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.clearScreen()
basic.forever(function () {
    if (Channel > 5) {
        Channel = 0
    }
})
