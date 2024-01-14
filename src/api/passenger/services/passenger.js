'use strict';

/**
 * passenger service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::passenger.passenger');
