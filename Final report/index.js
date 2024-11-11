function convertTemperatureRange() {
    const startValue = parseInt(prompt("Enter the starting temperature:"));
    const endValue = parseInt(prompt("Enter the ending temperature:"));
    const scale = prompt("Enter the scale (C for Celsius, F for Fahrenheit):").toUpperCase();

    for (let temp = startValue; temp <= endValue; temp++) {
        if (scale === "C") {
            let fahrenheit = (temp * 9/5) + 32;
            console.log(`${temp}°C is ${fahrenheit.toFixed(2)}°F`);
        } else if (scale === "F") {
            let celsius = (temp - 32) * 5/9;
            console.log(`${temp}°F is ${celsius.toFixed(2)}°C`);
        } else {
            console.log("Invalid scale. Use 'C' for Celsius or 'F' for Fahrenheit.");
            break;
        }
    }
}

convertTemperatureRange();
