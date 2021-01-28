let A = randint(0, 1000)
let B = randint(0, 1000)
let C = randint(0, 1000)
if (A < B && A < C) {
    if (B < C) {
        basic.showString("" + A + "/" + B + "/" + C)
    } else {
        basic.showString("" + A + "/" + C + "/" + B)
    }
}
if (B < A && B < C) {
    if (A < C) {
        basic.showString("" + B + "/" + A + "/" + C)
    } else {
        basic.showString("" + B + "/" + C + "/" + A)
    }
}
if (C < A && C < B) {
    if (A < B) {
        basic.showString("" + C + "/" + A + "/" + B)
    } else {
        basic.showString("" + C + "/" + B + "/" + A)
    }
}
