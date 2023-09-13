input.onButtonPressed(Button.A, function () {
    RingbitCar.turnright()
})
input.onGesture(Gesture.ScreenUp, function () {
    RingbitCar.back()
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.forward()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.turnleft()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
RingbitCar.forward()
