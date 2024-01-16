'use strict';

/**
 * history-order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::history-order.history-order', ({ strapi }) =>  ({

  async customCreate(ctx) {
    try {
      // 获取当前用户
      //const user = ctx.state.user;

      // 检查用户是否已登录
      //if (!user) {
        //return ctx.throw(401, "Unauthorized: No user logged in");
      //}

      const inputData = ctx.request.body.data;

      // 设置订单的乘客ID为当前用户ID
      const dataToCreateHistoryOrder = {
        ...inputData,
        passenger_id: 1,
        order_state: "待接單"
        // 如果需要，您也可以添加司机ID
      };

      // 创建 history_order 实体
      const newOrder = await strapi.services['api::history-order.history-order'].create({ data: dataToCreateHistoryOrder });

      // 创建 order_list 记录
      const dataToCreateOrderList = {
        history_order_id: newOrder.id,
      };
      await strapi.services['api::order-list.order-list'].create({ data: dataToCreateOrderList });

      return newOrder;

    } catch (err) {
      ctx.throw(500, err);
    }
  }

}));
