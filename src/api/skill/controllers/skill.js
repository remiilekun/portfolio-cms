"use strict";

/**
 *  skill controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { formatResponseData } = require("../../../utils/api");

module.exports = createCoreController("api::skill.skill", () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, local: "en" };
    const response = await super.find(ctx);
    return formatResponseData(response);
  },
}));
