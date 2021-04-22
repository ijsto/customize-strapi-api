'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate(data) {
      console.log('beforeCreate :: data', data);

      if (!data.isCovidFree) throw new Error('Hey sir, you are a threat to the public!');
    }
  }
};
