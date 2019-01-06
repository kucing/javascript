// carController.js (jsbin: gucikiy)

(function () {

    var car;
    var publicApiPrefix;

    var init = function (publicAccessor) {
        publicApiPrefix = publicAccessor;
    }

    var selectCar = function (pCar) {
        car = pCar;
        refreshDashboard();
    };

    var exitCar = function () {
        car.stop();
        car = undefined;
        return "";
    }

    var accelerate = function () {
        car.accelerate();
        refreshDashboard();
        return "";
    }

    var decelerate = function () {
        car.decelerate();
        refreshDashboard();
        return "";
    }

    function refreshDashboard() {
        console.clear();
        robocapoli.carConsoleView.dashboard(car);
        robocapoli.carConsoleView.controlPanel(car, publicApiPrefix);
        return "";
    }

    if (window.robocapoli === undefined) {
        window.robocapoli = {};
    }

    robocapoli.carController = {
        init: init,
        select: selectCar,
        // public Car API
        accelerate: accelerate,
        decelerate: decelerate,
        refreshDashboard: refreshDashboard,
        exit: exitCar
    }
})();