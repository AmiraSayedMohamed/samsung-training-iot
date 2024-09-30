//i have made this funcition to filer out sensor reading below the threshold value
function filterSensorData(sensorReadings, threshold) {
    //here i have used map to replace reading below the threshold with null
    return sensorReadings.map(reading => {
      return reading < threshold ? null : reading;
    });
  }
  const readings = [12, 45, 7, 29, 50, 5];
  const threshold = 20;
  // here iam filter the sensor data based on the threshold
  const filteredReadings = filterSensorData(readings, threshold);
  console.log(filteredReadings); 

  
