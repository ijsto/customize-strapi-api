'use strict';
const slugify = require('slugify');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate(data) {
      console.log('beforeCreate :: data', data);

      if (data.title) {
        data.slug = slugify(data.title, {
          lower: true,
          remove: /[*+~.()'"?:!@£$%^&*™#¨%ˇ¶•‚‘„“{}«≤≥.,<>]/g
        });
      }

      console.log('Updated data', data);
    }
  }
};
