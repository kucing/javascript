// fleetConsoleView.js (jsbin: xewekiq)

(function () {

    var getTitle = function (fleetData) {
        return "Your fleet (" + Object.keys(fleetData.cars).length + " cars)";
    }

    var renderFleetData = function (fleetData) {
        console.log(stringUtil.box(getTitle(fleetData), 40, "*"));
        var cars = fleetData.cars;
        Object.keys(cars).forEach(function (licensePlate) {
            robocapoli.carConsoleView.summary(cars[licensePlate]);
        });
    }

    var render = function (fleet) {
        renderFleetData(fleet.getData());
    }

    if (window.robocapoli === undefined) {
        window.robocapoli = {};
    }

    robocapoli.fleetConsoleView = {
        render: render
    }
})();