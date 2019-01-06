// fleetData.js (jsbin: coquyej)

(function () {

    var fleetData = {
        "cars": [
            {
                "brand": "Peugeot",
                "model": "306",
                "year": "1998",
                "color": "Red",
                "maxSpeedKmh": "150",
                "licensePlate": "PS-BJ-72"
            },
            {
                "brand": "Peugeot",
                "model": "307",
                "year": "2004",
                "color": "Grey",
                "maxSpeedKmh": "160",
                "licensePlate": "94-PF-PL"
            },
            {
                "brand": "Tesla",
                "model": "Model S",
                "year": "2013",
                "color": "Brown",
                "maxSpeedKmh": "201",
                "licensePlate": "7-SRH-06"
            },
            {
                "brand": "Tesla",
                "model": "Model S",
                "year": "2018",
                "color": "Black",
                "maxSpeedKmh": "250",
                "licensePlate": "TP-148-D"
            }
        ]
    };

    if (window.robocapoli === undefined) {
        window.robocapoli = {};
    }

    robocapoli.fleetData = fleetData;

})();
