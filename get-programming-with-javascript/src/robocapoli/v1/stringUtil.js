// stringUtil.js (jsbin: bebisid)

var stringUtil = {
    blank: function () {
        return "";
    },

    newLine: function () {
        return "\n";
    },

    line: function (length, character) {
        var characterIndex;

        var longString = "****************************************";
        longString += "----------------------------------------";
        longString += "========================================";
        longString += "++++++++++++++++++++++++++++++++++++++++";
        longString += "                                        ";

        length = Math.max(0, length);
        length = Math.min(40, length);

        characterIndex = longString.indexOf(character);

        if (characterIndex === -1) {
            characterIndex = 0;
        }

        return longString.substr(characterIndex, length);
    },

    wrap: function (text, length, character) {
        var padLength = length - text.length - 3;
        var wrapText = character + " " + text;
        wrapText += stringUtil.line(padLength, " ");
        wrapText += character;
        return wrapText;
    },

    box: function (text, length, character) {
        var boxText = stringUtil.newLine();
        boxText += stringUtil.line(length, character) + stringUtil.newLine();
        boxText += stringUtil.wrap(text, length, character) + stringUtil.newLine();
        boxText += stringUtil.line(length, character) + stringUtil.newLine();
        return boxText;
    }
};