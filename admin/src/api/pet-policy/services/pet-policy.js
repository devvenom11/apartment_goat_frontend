'use strict';

/**
 * pet-policy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pet-policy.pet-policy');
