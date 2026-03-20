enum RadioMessage {
    Change_chanel = 1472,
    SOS = 12905,
    message1 = 49434
}
/**
 * dont re-upload!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
input.onPinPressed(TouchPin.P0, function () {
    language = 0
    basic.showString("M")
    basic.clearScreen()
})
radio.onReceivedMessage(RadioMessage.Change_chanel, function () {
	
})
input.onButtonPressed(Button.A, function () {
    if (language == 1) {
        radio.sendString("1")
    } else {
        radio.sendString(".")
        music.play(dot, music.PlaybackMode.UntilDone)
    }
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
        music.play(dot, music.PlaybackMode.UntilDone)
    }
    basic.showString("O")
    for (let index = 0; index < 3; index++) {
        radio.sendString("-")
        basic.pause(100)
        music.play(dash, music.PlaybackMode.UntilDone)
    }
    basic.showString("S")
    for (let index = 0; index < 3; index++) {
        radio.sendString(".")
        basic.pause(100)
        music.play(dot, music.PlaybackMode.UntilDone)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (Name))
    music.play(name_ping, music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == ".") {
        music.play(dot, music.PlaybackMode.InBackground)
        basic.showString(receivedString)
        basic.clearScreen()
        basic.pause(100)
    } else {
        music.play(dash, music.PlaybackMode.InBackground)
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
        music.play(dash, music.PlaybackMode.UntilDone)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    language = 1
    basic.showString("B")
    basic.clearScreen()
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    radio.sendMessage(RadioMessage.Change_chanel)
    Channel += 1
    radio.setGroup(Channel)
    music.play(music.stringPlayable("C D - - C5 - - - ", 800), music.PlaybackMode.InBackground)
    if (Channel > 5) {
        basic.showNumber(0)
        basic.clearScreen()
        basic.pause(1000)
    } else {
        basic.showNumber(Channel)
        basic.clearScreen()
        basic.pause(1000)
    }
})
let Channel = 0
let Name = 0
let language = 0
let name_ping: music.Playable = null
let dot: SoundExpression = null
let dash: SoundExpression = null
music.setBuiltInSpeakerEnabled(true)
dash = music.createSoundExpression(WaveShape.Square, 601, 600, 255, 255, 280, SoundExpressionEffect.None, InterpolationCurve.Linear)
dot = music.createSoundExpression(WaveShape.Square, 601, 600, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear)
name_ping = music.stringPlayable("E A C5 F G C5 G C5 ", 800)
music.setVolume(255)
basic.showLeds(`
    . . . . .
    . # . . .
    . # # # .
    . # # # .
    . # # # .
    `)
radio.setGroup(0)
music.play(music.stringPlayable("- - - - E G A C5 ", 800), music.PlaybackMode.UntilDone)
basic.pause(200)
music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
music.play(music.createSoundExpression(WaveShape.Square, 200, 600, 255, 10, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
basic.pause(200)
basic.clearScreen()
language = 0
music.setVolume(255)
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
