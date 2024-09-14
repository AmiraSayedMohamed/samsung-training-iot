function processMessage(jsonMessage)
 {
    let message = typeof jsonMessage === 'string' ? JSON.parse(jsonMessage) : jsonMessage;
    if (message.temperature !== undefined) {
        if (message.temperature > 30)
         {
            message.status = "High";
        } 
        else
         {
            message.status = "Normal";
        }
    } 
    else 
    {
        throw new Error('Temperature field is missing in the JSON message');
    }
    return message;
}

const inputMessage = {
    temperature: 32,
    humidity: 65,
    device: {
        id: "device123",
        location: "Living Room"
    }
};

try {
    const processedMessage = processMessage(inputMessage);
    console.log("Processed Message:", processedMessage);
} catch (error) {
    console.error("Error processing message:", error.message);
}
