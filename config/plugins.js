module.exports = {
  // ...其他插件配置
  documentation: {
    config: {
      "x-strapi-config": {
        mutateDocumentation: (generatedDocumentationDraft) => {
          // 添加自定義端點的描述
          generatedDocumentationDraft.paths["/drivers/custom-create"] = {
            post: {
              tags: ["Driver"],
              summary: "自訂創建司機",
              description: "這個端點用於自訂方式創建司機。",
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        data: {
                          type: "object",
                          description: "司機的資料",
                          example: {
                            name: "string",
                            phone: "123456789",
                            carnum: "string",
                            worktime: "2024-01-12T15:17:04.757Z",
                            history_orders_id: ["string or id", "string or id"],
                            history_receives_id: ["string or id", "string or id"]
                          },
                          properties: {
                            // ...根據您的需求定義屬性
                          }
                        }
                      }
                    }
                  }
                }
              },
              responses: {
                200: {
                  description: "成功創建司機",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          // ...定義返回的資料結構
                        }
                      }
                    }
                  }
                },
                500: {
                  description: "伺服器錯誤"
                }
              }
            }
          };
        },
      },
    },
  },
};
