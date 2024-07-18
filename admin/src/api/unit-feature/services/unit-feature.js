'use strict';

/**
 * unit-feature service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unit-feature.unit-feature');
