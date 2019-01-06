// robocapoliUtil.js (jsbin: jexecip)

var robocapoliUtil = {

    normalizeLicensePlate: function (licensePlate) {
        return licensePlate
            .replace(/\W/g, '') // \W is the equivalent of [^0-9a-zA-Z_]
            .toUpperCase();
    },

    formatLicensePlate: function(licensePlate) {
        // TODO 94PFPL renders to 94-PFPL but should be 94-PF-PL
        return licensePlate
            .toUpperCase()
            .match(/[^\d]+|\d+/g) // Split into numeric parts & alpha parts
            .join("-");
    }
}