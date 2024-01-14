'use strict';

/**
 * driver router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/drivers/custom-create',
      handler: 'driver.customCreate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // ...其他路由配置
  ],
};
