const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();

// Set an Event handler for becons
scanner.onadvertisement = (ad) => {
  console.log(JSON.stringify(ad.iBeacon.uuid, null, '  '));
};

// Start scanning
scanner.startScan().then(() => {
  console.log('Started to scan.')  ;
}).catch((error) => {
  console.error(error);
});
