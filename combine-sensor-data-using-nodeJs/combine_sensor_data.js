// Function to combine temperature and humidity data
function combineSensorData(temperature, humidity) {
    // Create an object that combines both sensor data
    const sensorData = {
        temperature: temperature,
        humidity: humidity
    };

    // Return the combined sensor data
    return sensorData;
}

// Example usage:
const temp = 25;  // Example temperature reading
const hum = 60;   // Example humidity reading

// Call the function and store the result
const combinedData = combineSensorData(temp, hum);

// Output the combined data
console.log(combinedData);
