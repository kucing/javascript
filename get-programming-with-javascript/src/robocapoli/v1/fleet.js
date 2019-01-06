// fleet.js (jsbin: meripo)

(function () {

    var Fleet = function () {

        var cars = {};

        this.add = function (car) {
            if (car.getLicensePlate() in cars) {
                console.error("A car with license plate " + car.getLicensePlate() + " was already added to this fleet.")
                return;
            }
            cars[car.getLicensePlate()] = car;
        }

        this.remove = function (car) {
            if (!(car.getLicensePlate() in cars)) {
                console.error("Car with license plate " + car.getLicensePlate() + " not found in this fleet. No car will be removed.")
                return;
            }
            delete cars[car.getLicensePlate()];
        }

        this.get = function (licensePlate) {
            var _licensePlate = robocapoliUtil.normalizeLicensePlate(licensePlate);

            if (!(_licensePlate in cars)) {
                console.error("No car with license plate " + licensePlate + " exists in this fleet.")
                return;
            }
            return cars[_licensePlate];
        }

        this.getData = function () {
            return {
                "cars": cars
            }
        }
    }

    // Assign fleet constructor function to the global namespace
    if (window.robocapoli === undefined) {
        window.robocapoli = {};
    }
    robocapoli.Fleet = Fleet;
})();