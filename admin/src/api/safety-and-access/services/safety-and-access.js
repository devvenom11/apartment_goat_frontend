'use strict';

/**
 * safety-and-access service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::safety-and-access.safety-and-access');
