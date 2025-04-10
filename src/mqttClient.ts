import mqtt, { MqttClient } from 'mqtt';

// 1. Connect to the MQTT broker (localhost by default)
const brokerUrl = 'mqtt://localhost:1883'; // Could be ws:// for WebSockets
const client: MqttClient = mqtt.connect(brokerUrl);

// 2. When connected, subscribe to robot topics
client.on('connect', () => {
    console.log('✅ Connected to MQTT broker');

    // Subscribe to topic
    client.subscribe('robot/state', (err) => {
        if (err) {
            console.error('❌ Subscription error:', err);
        } else {
            console.log('📡 Subscribed to robot/state');
        }
    });
});

// 3. Handle incoming messages
client.on('message', (topic: string, message: Buffer) => {
    // message is a Buffer -> convert to string
    const payload = message.toString();

    console.log(`📩 Message received on topic ${topic}:`, payload);

    // Logic: parse message if JSON
    if (topic === 'robot/state') {
        try {
            const data = JSON.parse(payload);
            console.log('🤖 Robot Data:', data);

            // You can now store this in a database or broadcast to frontend
            /*
              {
                status: "moving",
                locationX: 3,
                locationY: 1,
                carrying: "pkg123"
              }
            */

        } catch (err) {
            console.error('❌ Failed to parse JSON:', err);
        }
    }
});
