'use strict';

/**
 * take controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::take.take');
