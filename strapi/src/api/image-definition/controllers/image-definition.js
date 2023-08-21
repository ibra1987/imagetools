'use strict';

/**
 * image-definition controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::image-definition.image-definition',({strapi})=>({
    async findOne(ctx) {
        const { id } = ctx.params;
    
        const entity = await strapi.db.query("api::image-definition.image-definition").findOne({
            where:
            {
                slug:id
            }
        })
        // @ts-ignore
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    
        // @ts-ignore
        return this.transformResponse(sanitizedEntity);
      },
}));
