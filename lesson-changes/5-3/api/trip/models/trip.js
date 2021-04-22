'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate(trip) {
      console.log('beforeCreate :: data', trip);

      if (!trip.isCovidFree) throw new Error('Hey sir, you are a threat to the public!');

      strapi.services.trip.notify(trip);
    }
  }
};
