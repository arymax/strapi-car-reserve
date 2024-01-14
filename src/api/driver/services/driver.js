'use strict';

/**
 * driver service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::driver.driver', ({ strapi }) =>  ({
  async create(data) {
    // 使用完整的模型标识符
    return strapi.query('api::driver.driver').create(data);
  }
}));
