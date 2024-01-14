'use strict';

/**
 * history-receive service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::history-receive.history-receive');
