// car.js (jsbin: kivojok)

(function () {

    var Car = function (brand, model, year, color, maxSpeedKmh, licensePlate) {
        var SPEED_STEP_KMH = 10;

        var speedKmh = 0;
        var distanceTravelledKm = 0;
        var dateLastSpeedChange = Date.now();
        //var position = ... (we first need a map for this)

        // Normally I would assign the constructor arguments to 'this' here, but there's no need to, because (thanks to
        // closures) in all the code below we can still reference the constructor arguments, even after the object
        // creation has completed. What's best practice? What's recommended here? Assign to 'this' or not?
        this.licensePlate = robocapoliUtil.normalizeLicensePlate(licensePlate);

        // ~~~~~~~~~~ API ~~~~~~~~~~
        this.accelerate = function () {
            changeSpeed(SPEED_STEP_KMH);
        }

        this.decelerate = function () {
            changeSpeed(-1 * SPEED_STEP_KMH);
        }

        this.stop = function () {
            changeSpeed(-1 * speedKmh);
        }

        this.getDistanceTravelled = function () {
            var millisSinceLastSpeedChange = Date.now() - dateLastSpeedChange;
            return distanceTravelledKm + calculateDistanceTravelledKm(speedKmh, millisSinceLastSpeedChange);
        }

        this.getSpeed = function () {
            return speedKmh;
        }

        this.getLicensePlate = function () {
            return this.licensePlate;
        }

        this.getData = function () {
            var _speed = this.getSpeed(); // TODO why doesn't it work when we use this.speedKmh
            var _distanceTravelled = this.getDistanceTravelled();

            return {
                "brand": brand,
                "model": model,
                "year": year,
                "color": color,
                "maxSpeed": maxSpeedKmh,
                "licensePlate": this.licensePlate,
                "speed": _speed,
                "odometer": _distanceTravelled
            }
        }

        // ~~~~~~~~~~ Private methods ~~~~~~~~~~
        function changeSpeed(_speedChangeKmh) {
            var _previousSpeedChange = dateLastSpeedChange;
            var _now = Date.now();

            distanceTravelledKm += calculateDistanceTravelledKm(speedKmh, _now - _previousSpeedChange);

            speedKmh = calculateNewSpeed(speedKmh, _speedChangeKmh);
            dateLastSpeedChange = _now;
        }

        function calculateDistanceTravelledKm(_speedKmh, _millis) {
            return _speedKmh * (_millis / 1000 / 60 / 60);
        }

        function calculateNewSpeed(_speedKmh, _changeKmh) {
            return Math.min(
                maxSpeedKmh,
                Math.max(0, _speedKmh + _changeKmh)
            );
        }
    }

    // Assign car constructor function to the global namespace object
    if (window.robocapoli === undefined) {
        window.robocapoli = {};
    }
    robocapoli.Car = Car;
})();

// TODO introduce sub classes like below
// Sedan (only has basic functions, like our car above)
// Taxi
//   constructor: tarief (per minuut)
//   functies   : start rit, stop rit, pauze rit
//   state      : kosten huidige rit, duur rit
// Bus
//   constructor: max. gewicht, aantal stoelen
//   functies   : instappen(passagier), uitstappen(passagier)
//   state      : aantal passagiers, totaal gewicht
// Excavator
//   constructor: max. lading
//   functies   : lift(weight), drop(weight), turn(direction, degrees)
//   state      : lading