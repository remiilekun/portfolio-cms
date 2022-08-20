"use strict";

/**
 *  about-section controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::about-section.about-section",
  () => ({
    async find(ctx) {
      ctx.query = { ...ctx.query, local: "en" };
      const response = await super.find(ctx);
      const { id, attributes } = response.data;
      return { id, ...attributes };
    },
  })
);
