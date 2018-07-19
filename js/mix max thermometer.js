let maxTemperature = 0
let minTemperature = 0
let showCurrent = false
let currentTemperature = 0
input.onButtonPressed(Button.A, () => {
    showCurrent = false
    basic.showString("Min:")
    basic.showNumber(minTemperature)
    basic.pause(2000)
    showCurrent = true
})
input.onButtonPressed(Button.B, () => {
    showCurrent = false
    basic.showString("Max:")
    basic.showNumber(maxTemperature)
    basic.pause(2000)
    showCurrent = true
})
currentTemperature = input.temperature()
minTemperature = currentTemperature
maxTemperature = currentTemperature
showCurrent = true
basic.forever(() => {
    while (showCurrent) {
        currentTemperature = input.temperature()
        if (currentTemperature < minTemperature) {
            minTemperature = currentTemperature
        }
        if (currentTemperature > maxTemperature) {
            maxTemperature = currentTemperature
        }
        basic.showNumber(currentTemperature)
        basic.pause(2000)
    }
})
