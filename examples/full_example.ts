HX711.SetPIN_DOUT(PIN_DOUT.P6)
HX711.SetPIN_SCK(PIN_SCK.P0)
HX711.SetPIN_DOUT(PIN_DOUT.P0)
HX711.SetPIN_SCK(PIN_SCK.P7)
HX711.begin()
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
serial.writeLine("HX711 Initializing Scale: ")
serial.writeLine("Before Setting Up the Scale: ")
serial.writeString("Read:")
serial.writeLine("" + HX711.read())
serial.writeString("Read Average:")
serial.writeLine("" + HX711.read_average(20))
serial.writeString("Get Value:")
serial.writeLine("" + HX711.get_value(5))
serial.writeString("Get Units")
serial.writeLine("" + HX711.get_units(5))
serial.writeLine("Readings: ")
basic.pause(1000)
basic.forever(function () {
    serial.writeString("One Reading: ")
    serial.writeLine("" + HX711.get_units(1))
    serial.writeString("Average:")
    serial.writeLine("" + HX711.get_units(10))
    HX711.power_down()
    basic.pause(5000)
    HX711.power_up()
})
