let interval_off = 0
let interval_on = 0
let y = 0
let x = 0
let correct_count = 0
let incorrect_count = 0
let LEDon = false
input.onButtonPressed(Button.B, () => {
    incorrect_count = 0
    correct_count = 0
})
input.onButtonPressed(Button.A, () => {
    if (LEDon) {
        basic.showIcon(IconNames.Yes)
        correct_count += 1
    } else {
        basic.showIcon(IconNames.No)
        incorrect_count += 1
    }
})
LEDon = false
incorrect_count = 0
correct_count = 0
basic.forever(() => {
    while (incorrect_count < 2) {
        x = Math.random(5)
        y = Math.random(5)
        interval_on = 250 + Math.random(1001)
        LEDon = true
        led.toggle(x, y)
        interval_off = 250 + Math.random(1001)
        basic.pause(interval_on)
        LEDon = false
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(interval_off)
    }
    music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
    while (incorrect_count >= 2) {
        basic.showString("Game over.")
        basic.showString("You scored:")
        basic.showNumber(correct_count)
        basic.showString("To replay press B.")
    }
})