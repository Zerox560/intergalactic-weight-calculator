const colors = require("colors");

function calculateWeight(weight, planet) {
    const earthGravity = 9.8;
    const mercuryGravity = 3.7;
    const venusGravity = 8.87;
    const marsGravity = 3.71;
    const jupiterGravity = 24.79;
    const saturnGravity = 10.44;
    const uranusGravity = 8.87;
    const neptuneGravity = 11.15;

    const mass = weight / 9.8

    console.clear();
    console.log("+++++++++++++++++++".blue);
    console.log("Intergalactic Weight Calculator".red);
    console.log("+++++++++++++++++++\n".blue);

    let result;
    switch (planet) {
        case "earth":
            result = `Your weight on Earth is: ${weight}kg`;
            break;
        case "mercury":
            result = `Your weight on Mercury is: ${getWeight(mass, mercuryGravity)}kg`
            break;
        case "venus":
            result = `Your weight on Venus is: ${getWeight(mass, venusGravity)}kg`
            break;
        case "mars":
            result = `Your weight on Mars is: ${getWeight(mass, marsGravity)}kg`
            break;
        case "jupiter":
            result = `Your weight on Jupiter is: ${getWeight(mass, jupiterGravity)}kg`
            break;
        case "saturn":
            result = `Your weight on Saturn is: ${getWeight(mass, saturnGravity)}kg`
            break;
        case "uranus":
            result = `Your weight on Uranus is: ${parseInt(getWeight(mass, uranusGravity))}kg`
            break;
        case "neptune":
            result = `Your weight on Neptune is: ${getWeight(mass, neptuneGravity)}kg`
            break;
        default:
            break;
    }

    result = colors.green.underline(result);
    return result;
};

function getWeight(mass, planetG) {
    return Math.round(mass * planetG);
}

module.exports = calculateWeight;
