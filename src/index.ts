import * as mqtt from 'mqtt';

const connected = (): void => {
    console.log("Connected to broker");
    setTimeout(disconnect, 100);
};

const disconnect = (): void => {
    console.log("Disconnected from broker");
    client.end();
};

let client: mqtt.MqttClient;

const initialize = () => {
    client = mqtt.connect('mqtt://iot.eclipse.org');
    client.on('connect', connected);
    client.on('disconnect', disconnect);
}

initialize();

export { client, connected, disconnect }