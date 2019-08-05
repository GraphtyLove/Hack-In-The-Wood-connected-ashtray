const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/cu.usbmodem145301', { baudRate: 9600 })
const parser = port.pipe(new Readline({ delimiter: '\n' })) // Read the port data
const request = require('request');

let biggestValue = 10000
let isFirstTime = true

port.on('open', () => {
	console.log('serial port open')
})
parser.on('data', data => {
    data2 = Number(data.replace('Distance:', ''))

    // !!! ---------- DEGUG MODE ---------- !!!
    console.log(`New data! -> ${data2}`)

    // !!! PUSH EVERY VALUE IN THE DB
    if(data2 > 0 && !isNaN(data2) && !isFirstTime){
        console.log(`Data SEND to DB -> ${data2}`)
        request(`http://localhost:3000/add_cigarette?dist=${data2}`, { json: true }, (err, res, body) => {
                if (err) { return console.log(err); }
            })
    }

    // !!! KEEP ONLY THE SMALEST VALUE !!!
    // if(data2 < biggestValue && !isNaN(data) && !isFirstTime){
    //     biggestValue = data2
    //     console.log(`New smallest data! -> ${biggestValue}`)
    //     // Make a post request to -> http://localhost:3000/add_cigarette?dist=$`biggestValue`
    //     request(`http://localhost:3000/add_cigarette?dist=${biggestValue}`, { json: true }, (err, res, body) => {
    //         if (err) { return console.log(err); }
    //     })
    // }
    isFirstTime = false
})
