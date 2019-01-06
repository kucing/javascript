// fleetBuilder.js (jsbin: fisuwak)

(function () {
    var buildFleet = function (fleetData) {
        var _fleet = new robocapoli.Fleet();

        function buildCar(carData) {
            // TODO is there a more efficient way to do this?
            var car = new robocapoli.Car(
                carData.brand,
                carData.model,
                carData.year,
                carData.color,
                carData.maxSpeedKmh,
                carData.licensePlate
            );
            return car;
        }

        var addCarToFleet = function (carData) {
            _fleet.add(buildCar(carData));
        }

        fleetData.cars.forEach(addCarToFleet);

        return _fleet;
    };

    if (window.robocapoli === undefined) {
        window.robocapoli = {};
    }

    robocapoli.buildFleet = buildFleet;

})();