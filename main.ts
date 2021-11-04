let noOfpeople = 0
basic.forever(function () {
    if (input.lightLevel() > 129) {
        noOfpeople = 1
        basic.showIcon(IconNames.Angry)
        basic.showNumber(noOfpeople)
    }
    if (input.lightLevel() > 128) {
        basic.showIcon(IconNames.Butterfly)
        basic.pause(1000)
        noOfpeople = 0
        basic.showNumber(noOfpeople)
    }
})
basic.forever(function () {
    basic.showNumber(0)
})
