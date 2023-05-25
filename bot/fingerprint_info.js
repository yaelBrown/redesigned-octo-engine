console.log("CPU/OS: " + navigator.oscpu);
console.log("Cores count: " + navigator.hardwareConcurrency);
console.log("RAM: " + navigator.deviceMemory);
console.log("Plaform: " + navigator.platform);
console.log("Browser info: " + navigator.userAgent);
console.log("Browser info: " + navigator.product + " " + navigator.productSub);
console.log("Browser info: " + navigator.appCodeName);
console.log("Browser info: " + navigator.appName);
console.log("Browser info: " + navigator.appVersion);
console.log("Vendor: " + navigator.vendor + " " + navigator.vendorSub);
console.log("Language: " + navigator.language);

var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
console.log("Internet connection: ", connection);

navigator.storage.estimate().then(function(e) { console.log("Available disk space: " + e.quota)});

navigator.getBattery().then(function(e){console.log("Battery: ", e)});

console.log("Media devices available to user (microphones/cameras): ");
navigator.mediaDevices.enumerateDevices()
.then(function(devices) {
  devices.forEach(function(device) {
    console.log(device.kind + ": " + device.label +
                " id = " + device.deviceId);
  });
})