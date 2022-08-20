"use strict";

/**
 *  banner controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::banner.banner", () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, local: "en" };
    const response = await super.find(ctx);
    const { id, attributes } = response.data;
    return { id, ...attributes };
  },
}));
