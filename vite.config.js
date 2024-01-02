
// 在 vite.config.ts 文件中添加如下配置
import { defineConfig } from 'vite'
import { vitePluginSwaggerTypescriptApi } from 'vite-plugin-swagger-typescript-api'

// vite 相关配置请参考 https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '^/api/': {
        target: 'http://xxx.com',
        changeOrigin: true
      },
    }
  },
  plugins: [
    vitePluginSwaggerTypescriptApi({ // swagger-typescript-api 的配置，具体可参考 https://github.com/acacode/swagger-typescript-api
      name: 'index.ts', //要生成的文件名称
      output: path.resolve('./src/api'), // 生成的文件所在的文件夹，注意要使用 path.resolve 解析出绝对路径，否则路径可能会有错误
      input: path.resolve('./swagger.json'), // 从本地文件载入，路径问题同 output
      url: "http://xxx.com/springdoc/api-docs", // 如果从远程接口载入，只要返回的是json数据，不一定非要.json结尾
      httpClientType: 'axios', // or "fetch" 生成的接口类型
    })
  ]
})
