// history-order router

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/history-orders/custom-create',
      handler: 'history-order.customCreate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // ...其他路由配置
  ],
};
