# Ui Auto Test

## StarRiverPro UI 自动化测试项目

##　工程结构

目录/文件|描述|
----|----|
playwright.config.ts|playwright自动化测试配置文件|
global-setup.ts|所有测试之前运行一次|
tests/*|自动化测试脚本|

## 应用启动

1. 进入目录安装依赖，国内用户推荐使用 [cnpm](https://cnpmjs.org) 进行加速。

```bash
yarn
npx playwright install
```

或者

```bash
npm i
npx playwright install
```

2. 开始自动化测试

```bash
npx playwright test
```


3. Run a single test file
```bash
npx playwright test tests/todo-page.spec.ts
```

4. Run a set of test files
```bash
npx playwright test tests/todo-page/ tests/landing-page/
```

5. Run files that have my-spec or my-spec-2 in the file name
```bash
npx playwright test my-spec my-spec-2
```

## 注意

执行时可能会报
```bash
not find
msvcp90.dll
msvcr90.dll
```

检查计算机应用中有没有安装Microsoft Visual C++ 2008,若已经安装： 

在
C:\Windows\WinSxS\amd64_microsoft.vc90.crt.[hash]
文件夹中找到复制到C:\System32中

## docs
https://playwright.dev/