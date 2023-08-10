This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# 关于代码风格

`eslint` + `prettier`

为什么配置之后编写不规范的代码不标红提示呢？？？

# 关于eslint

nextjs内置命令

```
"scripts": {
    "lint": "next lint"
}
```

执行`yarn lint`,可选lint的配置，会自动安装`eslint`和`eslint-config-next`, 同时生成`.eslintrc.json`

# 关于部署

项目目前部署在vercel上

# 关于webpack

-   安装了 @next/bundle-analyzer，执行 `ANALYZE=true npm run build`会生成静态html文件，可查看包大小
