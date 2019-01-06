// carConsoleView.js (jsbin: kagujit)

(function () {

    var newLine = stringUtil.newLine();

    var getTitle = function (carData) {
        return carData.brand + " " + carData.model + " (" + robocapoliUtil.formatLicensePlate(carData.licensePlate) + ")";
    }

    var toString = function (carData) {
        var s = "Year              : " + carData.year + newLine;
        s += "Color             : " + carData.color + newLine;
        s += "Max. speed        : " + carData.maxSpeed + " km/h" + newLine;
        s += stringUtil.line(40, "-") + newLine;
        s += "Speed             : " + carData.speed + newLine;
        s += "Distance travelled: " + Number(carData.odometer).toFixed(3) + " km" + newLine;
        return s;
    }

    var titleBox = function (carData) {
        return stringUtil.box(getTitle(carData), 40, "*");
    }

    var summary = function (carData) {
        var s = stringUtil.wrap(robocapoliUtil.formatLicensePlate(carData.licensePlate), 8, " ");
        s += stringUtil.wrap(carData.brand, 10, " ");
        s += stringUtil.wrap(carData.model, 15, " ");
        s += " (" + carData.year + ")";
        return s;
    }

    var render = function (car) {
        console.log(titleBox(car.getData()));
        console.log(toString(car.getData()));
    }

    var renderSummary = function (car) {
        console.log(summary(car.getData()));
    }

    var renderDashboard = function (car) {
        console.log(titleBox(car.getData()));
        console.log("Current speed: " + car.getData().speed + " km/h");
        console.log("Odometer     : " + Number(car.getData().odometer).toFixed(3) + " km");
    }

    // TODO pass in controls as a dictionary (function, description) so the view has no knowledge of functions exposed by the controller.
    // TODO get controls from the public API of the Car class.
    var renderControlPanel = function (car, publicApiPrefix) {
        console.log(stringUtil.box("Control Panel", 40, "*"));
        console.log(publicApiPrefix + "accelerate()      : Increase speed by 10 km/h");
        console.log(publicApiPrefix + "decelerate()      : Decrease speed by 10 km/h");
        console.log(publicApiPrefix + "refreshDashboard(): Refresh the car's dashboard")
        console.log(publicApiPrefix + "exit()            : Stop the car and exit");
    }

    if (window.robocapoli === undefined) {
        window.robocapoli = {};
    }

    robocapoli.carConsoleView = {
        render: render,
        summary: renderSummary,
        dashboard: renderDashboard,
        controlPanel: renderControlPanel
        // help: renderHelp
    }
})();