var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1')
const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();

client.on('connect', function () {
    client.subscribe('node/mqtt')
})

// client.on('message', function (topic, message) {
//     // message is Buffer
//     console.log(message.toString())
// })

// Set an Event handler for becons
scanner.onadvertisement = (ad) => {
    // Print Satu Object Full Dari Beacon
    console.log('JSON BEACON');
    console.log(JSON.stringify(ad, null, '  '));

    //Tampung UUID Dari Beacon
    var uuid = JSON.stringify(ad.iBeacon.uuid, null, '  ');
    console.log(uuid.toString());
    client.publish('node/mqtt', `UUID : ${uuid.toString()}`)

};

// Start scanning
scanner.startScan().then(() => {
    console.log('Started to scan.');
}).catch((error) => {
    console.error(error);
});
