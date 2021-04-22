'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (ctx) => {
    const currentUser = ctx.state.user;

    const tripAPI = strapi.query('trip');
    const createdTrip = await tripAPI.create({
      ...ctx.request.body,
      traveller: currentUser.id
    });

    strapi.services.trip.notify(createdTrip);

    return createdTrip;
  }
};
