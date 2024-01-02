const { generateService } = require("@umijs/openapi");

generateService({
  schemaPath: "http://xxx.com/springdoc/api-docs", // 可以是.json文件，也可以是远程json地址
  serversPath: "./src/servers",
});
