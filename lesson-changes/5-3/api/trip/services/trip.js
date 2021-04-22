'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  notify: async (trip) => {
    console.log('Service :: trip', trip.destination);

    await strapi.plugins.email.services.email.send({
      to: 'test@ijs.to',
      toName: 'iJS Tester',
      subject: 'A new trip was created!',
      text: `${trip.traveller.username} just took a trip`
    });
  }
};
