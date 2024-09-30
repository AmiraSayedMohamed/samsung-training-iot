//here iam definng a function named timeBasedGreeting which will return a greeting based on the current time
function timeBasedGreeting() {
    // Get the current time
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if (currentHour < 12)
    {
        return "Good morning";
    }
    else if (currentHour < 18)
    {
        return "Good afternoon";
    }
    else
    {
        return "Good evening";
    }
}
//here iam calling the timeBasedGreeting function
console.log(timeBasedGreeting());
