// robocapoliController.js (jsbin: hemufet)

(function () {

    var fleet;
    var carController;

    var init = function (fleetData) {
        fleet = robocapoli.buildFleet(fleetData);
        carController = robocapoli.carController;
        carController.init("app.car().");

        console.log("Robocapoli successfully loaded...");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        help();

        return "";
    };

    var selectCar = function (licensePlate) {
        // TODO normalize license plate, make selection case- (and dash-) insensitive
        var _car = fleet.get(licensePlate);
        carController.select(_car);

        return "";
    };

    var car = function () {
        return carController;
    }

    var renderFleet = function () {
        robocapoli.fleetConsoleView.render(fleet);

        return "";
    };

    var help = function () {
        console.log("app.help()               - Show these instructions");
        console.log("app.showFleet()          - Show cars in fleet")
        console.log("app.select(licensePlate) - Select car from fleet")

        return "";
    }

    // Assign the public interface
    window.app = {
        init: init,
        help: help,
        showFleet: renderFleet,
        select: selectCar,
        car: car
    };

    // TODO this might fail because fleetData may not yet be fully loaded...
    app.init(robocapoli.fleetData);
})();


// <script>
// var fleet = robocapoli.fleetData;
//
// app.init(fleet);
// </script>
