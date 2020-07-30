input.onButtonPressed(Button.A, function () {
    led.unplot(x2, y2)
    x2 += -1
    led.plot(x2, y2)
    if (x2 == -1) {
        led.unplot(x2, y2)
        x2 = 4
        led.plot(x2, y2)
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x2, y2)
    x2 += 1
    led.plot(x2, y2)
    if (x2 == 5) {
        led.unplot(x2, y2)
        x2 = 0
        led.plot(x2, y2)
    }
})
let y2 = 0
let x2 = 0
let x = 0
let y = 0
x2 = 0
y2 = 4
led.plot(x, y)
led.plot(x2, y2)
let cpt = 0
basic.forever(function () {
    if (x == x2 && y == y2) {
        x = randint(0, 4)
        y = 0
        led.unplot(x, y)
        cpt += 1
        led.plot(x, y)
        basic.pause(500)
    } else if (x != x2 && y == y2) {
        basic.showString("SCORE:")
        basic.showNumber(cpt)
        basic.pause(500)
        basic.clearScreen()
        x = 0
        y = 0
        x2 = 0
        y2 = 4
        cpt = 0
        led.plot(x, y)
        led.plot(x2, y2)
        basic.pause(500)
    }
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
    basic.pause(500)
})
