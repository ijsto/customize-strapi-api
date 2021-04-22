'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (ctx) => {
    console.log('ctx.request.body', ctx.request.body);

    // Connect logged in user to our Trip.
    const currentUser = ctx.state.user;
    console.log('create: :: currentUser', currentUser);

    const tripAPI = strapi.query('trip');
    const createdTrip = await tripAPI.create({
      ...ctx.request.body,
      traveller: currentUser.id
    });
    console.log('create: :: createdTrip', createdTrip.destination);

    return createdTrip;
  }
};
