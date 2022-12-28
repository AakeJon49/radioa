radio.onReceivedNumber(function (receivedNumber) {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.pause(2000)
    basic.showString("" + (textlista[Nummer]))
})
input.onButtonPressed(Button.A, function () {
    Nummer += 1
    basic.showNumber(Nummer)
    basic.showString("" + (textlista[Nummer - 1]))
    if (Nummer == 4) {
        Nummer = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (textlista[Nummer - 1]))
    radio.sendNumber(Nummer)
})
let Nummer = 0
let textlista: string[] = []
radio.setGroup(1)
textlista = [
"KOM",
"MAT",
"RING",
"SVARA",
"HEM"
]
Nummer = 0
