# 前端

1. 安装脚手架

2. 创建项目

3. 试运行项目

4. 初始化 git，代码暂存

5. 去掉国际化依赖

   报错时进行以下操作

   > - 执行命令
   >
   >   ```shell
   >   yarn add eslint-config-prettier
   >   yarn add eslint-plugin-unicorn
   >   ```
   >
   > - 修改`node_modules/@umijs/lint/dist/config/eslint/index.js`
   >
   >   文件注释`// es2022: true`

6. 在 app.tsx 中指定`baseURL`

   ```react
   export const request = {
     baseURL: 'http://localhost:8102/',
     ...errorConfig,
   };
   ```
