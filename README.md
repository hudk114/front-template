# front-template
template for front-end develop

# master分支
master为基础分支，对于所有的代码规范等写在其中，有改变时每个分支会merge一遍master分支

其余的针对各种业务场景的分支写在各自的独立分支中，各自的README内容独立

## linter
采用 `eslint` + `prettier` 对js代码进行规范， `stylelint` 对css进行规范。

配置项各个项目可不同。

详见[配置](https://github.com/hudk114/code-helper/tree/master/front-end/linter-format)

# 分支详情
## 简介
轻量级库的开发模板

## usage
```js
npm install
```
随后对配置文件进行修改
1. 发布配置
    * **package.json** name version description main repository.url keyword license bugs.url homepage
1. rollup配置
    * **rollup.config.js** output.name
    * **config.js** dev.name prod.name
1. example配置
    * **config.js** example.libName
    * **example/app.js** 端口号


## 针对场景
针对自己的库开发，轻量级，采用rollup打包，支持es6及stage-0

## 目录结构
```bash

├── README.md
├── dist                包发布文件夹
├── test                test
├── example             例子，express服务
├── package-lock.json
├── package.json
└── src
     └── index.js	      主入口
```

## test

# TODO
1. example 针对webpack
1. test

# others
感谢[KedAyAyA](https://github.com/KedAyAyA)提出的方案