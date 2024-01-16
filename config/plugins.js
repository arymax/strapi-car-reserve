module.exports = {
  // ...其他插件配置
  documentation: {
    config: {
      "x-strapi-config": {
        mutateDocumentation: (generatedDocumentationDraft) => {
          // 添加自定义端点的描述
          generatedDocumentationDraft.paths["/drivers/custom-create"] = {
            post: {
              tags: ["Driver"],
              summary: "自定义创建司机",
              description: "这个端点用于自定义方式创建司机。",
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        data: {
                          type: "object",
                          description: "司机的资料",
                          example: {
                            name: "string",
                            phone: "123456789",
                            carnum: "string",
                            worktime: "2024-01-12T15:17:04.757Z",
                            history_orders_id: ["string or id", "string or id"],
                            history_receives_id: ["string or id", "string or id"]
                          },
                          properties: {
                            name: {
                              type: "string",
                              description: "司机名字"
                            },
                            phone: {
                              type: "string",
                              description: "电话号码"
                            },
                            carnum: {
                              type: "string",
                              description: "车牌号"
                            },
                            worktime: {
                              type: "string",
                              format: "date-time",
                              description: "工作时间"
                            },
                            history_orders_id: {
                              type: "array",
                              items: {
                                type: "string"
                              },
                              description: "历史订单ID数组"
                            },
                            history_receives_id: {
                              type: "array",
                              items: {
                                type: "string"
                              },
                              description: "历史接单ID数组"
                            }
                            // ...根据您的需求定义其他属性
                          }
                        }
                      }
                    }
                  }
                }
              },
              responses: {
                200: {
                  description: "成功创建司机",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            description: "新创建的司机ID"
                          },
                          // ...定义返回的数据结构
                        }
                      }
                    }
                  }
                },
                500: {
                  description: "服务器错误"
                }
              }
            }
          },
          generatedDocumentationDraft.paths["/history-orders/custom-create"] = {
            post: {
              tags: ["History-order"],
              summary: "创建新的历史订单并在订单列表中添加记录",
              description: "该端点用于创建一个新的历史订单记录。创建成功后，它还会在订单列表（order_list）中添加一个相关联的记录。",
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        data: {
                          type: "object",
                          description: "新订单的数据",
                          example: {
                            departure: "台北车站",
                            destination: "桃园国际机场",
                            price: 120,
                            order_start_time: "2024-02-01T08:00:00.000Z",
                            passenger_id: 1,
                            driver_id: 1,
                            order_state: "待接單"
                          },
                          properties: {
                            departure: {
                              type: "string",
                              description: "出发地点"
                            },
                            destination: {
                              type: "string",
                              description: "目的地点"
                            },
                            price: {
                              type: "number",
                              description: "价格"
                            },
                            order_start_time: {
                              type: "string",
                              format: "date-time",
                              description: "订单开始时间"
                            },
                            // 根据您的数据表结构定义更多字段的描述
                          }
                        }
                      }
                    }
                  }
                }
              },
              responses: {
                200: {
                  description: "新订单创建成功",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            description: "新创建的订单ID"
                          },
                          // 根据您的数据表结构定义返回的其他订单字段
                        }
                      }
                    }
                  }
                },
                400: {
                  description: "请求数据格式错误或缺少必要字段"
                },
                500: {
                  description: "服务器内部错误"
                }
              }
            }
          };
        },
      },
    },
  },
};
