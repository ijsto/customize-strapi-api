'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (ctx) => {
    console.log('ctx.request.body', ctx.request.body);

    const tripAPI = strapi.query('trip');
    const createdTrip = await tripAPI.create({...ctx.request.body});
    console.log('create: :: createdTrip', createdTrip.destination);

    return createdTrip;
  }
};
