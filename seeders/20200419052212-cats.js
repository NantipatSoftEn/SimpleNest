"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Cats",
            [
                {
                    firstName: "namas",
                    Age: 7,
                },
                {
                    firstName: "supos",
                    Age: 11,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Cats", null, {});
    },
};
