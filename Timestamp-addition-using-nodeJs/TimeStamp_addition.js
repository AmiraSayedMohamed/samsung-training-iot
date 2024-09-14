function addTimestampToMessage(message) 
{
    let now = new Date(); 
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let day = String(now.getDate()).padStart(2, '0');
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    let timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return {
        ...message,
        timestamp: timestamp
    };
}

let myMessage = { temperature: 22, humidity: 55 };
console.log(addTimestampToMessage(myMessage));
