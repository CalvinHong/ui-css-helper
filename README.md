# 面向ui同事的css工具
**ui-css-helper有一下特征**

- 自动转换px为rem，字体根据dpr转换(使用750设计稿)
- 自动加前缀（autoprefix）
- rgba颜色可以使用16进制
- 可以定义变量

## 快速开始

### 安装环境

- 安装nodejs

- 进入项目目录命令模式，执行以下命令

```shell
npm install
```
### 简易的命令使用

- 进入项目目录命令模式，执行以下命令开始编译（只编译当前一次）

```shell
npm run start
```
- 如果要监听文件实时编译，请执行以下命令动态编译（自动监听src下文件，实时生效）

```shell
npm run watch
```
### 编写的文件目录
把需要编译的文件放在`src`目录即可

### 生成的文件目录
文件经过postcss处理之后会在`dist`目录生成同名文件

## 技能手册

### 一、自动转换px为rem，字体根据dpr转换(使用750设计稿)
**注意：设置字体的时候，必须在后面加/\*px\*/，要不然会被转换成rem，如果遇到强制使用px的情况，可以在后面/\*no\*/**

编译前：
```css
.test-size{
  /*默认使用rem模式*/
  width:20px;
  /*使用dpr模式*/
  font-size: 15px;/*px*/
  /*强制使用px*/
  height:20px;/*no*/
}

```
编译后：
```css
.test-size {
  width: 0.266667rem;
  height: 20px;
}

[data-dpr="1"] .test-size {
  font-size: 7.5px;
}

[data-dpr="2"] .test-size {
  font-size: 15px;
}

[data-dpr="3"] .test-size {
  font-size: 22.5px;
}
```

### 二、自动加前缀
编译前：
```css
.test-prefix{
  display:flex;
  box-shadow: 2px 2px 2px #e2e2e2;
}
```
编译后：
```css
.test-prefix {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-shadow: 0.026667rem 0.026667rem 0.026667rem #e2e2e2;
          box-shadow: 0.026667rem 0.026667rem 0.026667rem #e2e2e2;
}
```

### 三、颜色可以使用16进制

编译前：
```css
.test-color{
  color:rgba(#f1f1f1,0.5);
}

```
编译后：
```css
.test-color {
  color: rgba(241,241,241,0.5);
}
```

### 四、使用变量

打开variable.js文件，新增变量
```
module.exports = {
    primary: 'red',
    padding: '15px'
}
```
样式里面可以使用这里面的变量

编译前
```
.test-variable{
  color:$primary;
  padding:$padding;
}
```

编译后
```
.test-variable {
  color: red;
  padding: 0.2rem;
}
```
