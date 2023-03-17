'use strict';

/**
 * take service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::take.take');
