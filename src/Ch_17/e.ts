self.onmessage = function(event) {
    event.data.name = "Worker";
    self.postMessage(event.data);
}