# 安装启动步骤

## 第一步，运行环境

安装 Node 运行环境，[官网下载最新版](https://nodejs.org/en/)，版本 12.x

**直接下一步安装到最后即可**

## 第二步，下载项目

下载项目 [XiaoMu-PosSystem](https://github.com/vhvy/XiaoMu-PosSystem)，点击 ”Code“，下载 ”Download Zip“压缩包，解压后放在电脑目录即可

目录结构如下

```bash
├── BASEITEM.xlsx
├── LICENSE
├── README.md
├── SETUP.MD
├── build.md
├── client # 客户端代码
├── main.js
├── node_modules
├── package-lock.json
├── package.json
└── server # 服务端代码
```

### 第三步，安装依赖

安装依赖包

- 方式一：在电脑中使用 "控制台" 打开项目
- 方式二：也可以下载一个代码编辑器 [“VSCode”](https://code.visualstudio.com/)，通过编辑器打开项目，**推荐使用**

在控制台（VSCODE 也有控制台，点击 “终端”->“新建终端”即可打开）打开项目，使用第一步已经安装好的 NODE，安装依赖，执行如下命令

- ① 安装服务所需依赖，并启动

```bash
cd server # 进入目录 server
npm i # 安装目录
npm run initdb # 初始化数据库表
npm run dev:fakedb # 初始化假数据，管理员等基础数据
npm run dev:server # 启动服务
```

- ② 安装客户端所需依赖，并启动

```bash
cd client # 进入目录 client
npm i # 安装目录
npm run dev:client # 启动服务
```

启动好之后，会自动提示启动完成 `Project is running at http://0.0.0.0:9000/`，在浏览器打开地址：http://127.0.0.1:9000/

## 登录页面

- 输入用户名: `admin`
- 密码: `password`
