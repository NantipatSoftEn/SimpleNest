"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Users",
            [
                {
                    firstName: `John`,
                    lastName: `opass`,
                    catsId: 2,
                },
                {
                  firstName: `nick`,
                  lastName: `ww`,
                  catsId: 3
              },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("Users");
    },
};
