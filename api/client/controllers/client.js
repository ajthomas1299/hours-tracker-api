"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async me(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    const data = await strapi.services.client.find({
      user: user.id,
    });

    console.log(data);

    if (!data) {
      return ctx.notFound();
    }

    return sanitizeEntity(data, { model: strapi.models.client });
  },
  async meSingle(ctx) {
    const user = ctx.state.user;
    const { id } = ctx.params;
    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    const data = await strapi.services.client.find({
      user: user.id,
      id: id,
    });

    console.log(data);

    if (!data || data.length === 0) {
      return ctx.notFound();
    }

    // data = data.filter((item) => (item.id = id));

    return sanitizeEntity(data, { model: strapi.models.client });
  },
};
