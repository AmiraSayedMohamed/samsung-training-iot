//this function will takes an object
function getPropertyFromPayload(msg) {
    //and here this checks ensures that msgs is an object and propertyName is a string
    if (typeof msg.payload !== 'object' || typeof msg.propertyName !== 'string')
    {
        return null;
    }
    //here iam access the property using msg.propertyName
    const propertyValue = msg.payload[msg.propertyName];
    //here i will return the value of the property, or null if it doesn't exist
    return propertyValue !== undefined ? propertyValue : null;
}
const msg = {
    payload: {
        temperature: 25,
        humidity: 60
    },
    propertyName: 'temperature' 
};
const result = getPropertyFromPayload(msg);
console.log(result);
