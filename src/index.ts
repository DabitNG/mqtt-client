import * as mqtt from 'mqtt';
import * as dotenv from 'dotenv';

dotenv.config();

const connected = (): void => {
    console.log("Connected to broker");
    setTimeout(disconnect, 1000);
};

const message = (topic:string, message:string, payload:any): void => {
    console.log("Message receibed");
};

const disconnect = (): void => {
    console.log("Disconnected from broker");
    client.end();
};

let client: mqtt.MqttClient;

const initialize = () => {
    const endpoint = 'mqtt://'+ (process.env.MQTT_HOST || "iot.eclipse.org")+":"+(process.env.MQTT_PORT || 1883);
    client = mqtt.connect(endpoint);
    client.on('connect', connected);
    client.on('message', message);
    client.on('disconnect', disconnect);
}

initialize();

export { initialize, client, connected, disconnect, message }