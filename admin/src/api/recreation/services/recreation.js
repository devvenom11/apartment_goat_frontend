'use strict';

/**
 * recreation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recreation.recreation');
