'use strict';

/**
 * driver controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::driver.driver', ({ strapi }) =>  ({

  async customCreate(ctx) {
    try {
      const inputData = ctx.request.body.data;

      // 假设ID为1的history-order和history-receive实体已存在
      // 您需要根据实际情况调整这里的逻辑
      const defaultHistoryOrderId = 1;
      const defaultHistoryReceiveId = 1;
      const dataToCreate = {
        ...inputData,
        history_orders_id: [defaultHistoryOrderId],
        history_receives_id: [defaultHistoryReceiveId]
      };

      // 打印出数据对象以进行调试
      console.log("Data to create:", dataToCreate);

      // 创建driver实体
      const newDriver = await strapi.services['api::driver.driver'].create({ data: dataToCreate });
      console.log(2)
      return newDriver;

    } catch (err) {
      ctx.throw(500, err);
    }
  }

}));
