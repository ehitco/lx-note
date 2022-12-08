# 深入浅出CSS
>课程链接：
>[深入CSS](https://bytedance.feishu.cn/file/boxcn9mDBCRxymaLnpeq1Ovwcue)
>[了解 CSS](https://bytedance.feishu.cn/file/boxcnaUPgIwFZ1J73mZ3TvrCOmb)

## 一、CSS使用

- 外联：使用link标签引用
- 嵌入：嵌入到style标签中
- 内联：嵌入到元素的style属性中

## 二、CSS加载过程

![image](https://cdn.jsdelivr.net/gh/Merlin218/image-storage@master/picX/image.8v1f931zo3c.webp)

## 三、选择器

- `*`通配选择器
- 标签选择器
- `#`id选择器
- `.`类选择器
- `[]`属性选择器，可以匹配值，匹配正则符号。

```css
[disabled] {
    background: #eee;
    color: #999;
  }
```

> 属性选择器对符合条件的元素都会作用，即使该元素原生不具备该属性。
> 
> 如：给h1标签加`disabled`，样式会生效。

### 伪类`:`

- 状态伪类
	- `link`、`active`、`visited`、`hover`、`focus`、...
- 顺序
	- `:nth-of-type()`：表示当前元素的`同类兄弟元素`, 用 n 来筛选出在一组兄弟节点的位置。
	- `:first-child`：表示在一组兄弟元素中的第一个元素。
	- `:last-child`：表示在一组兄弟元素中的最后一个元素。
	- `:nth-child(an+b)`：表示当前元素的`所有兄弟元素`，按照位置先后顺序从1开始排序，表达式`(an+b)`匹配到的元素集合
		- `:nth-child(1)`：表示父元素中子元素为第一的标签
		- `:nth-child(2n+1)`、`:nth-child(odd)`：表示奇数行
		- `:nth-child(2n)`、`:nth-child(even)`：表示偶数行

>注意：
>
>  `nth-child`  表示
> 
> `nth-of-type`  按照类型来计算
> 
### 伪元素`::`
- 附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。
- 常用
	- `::before`
	- `::after`
	- `::first-line`


### 选择器组合

![image](https://cdn.jsdelivr.net/gh/Merlin218/image-storage@master/picX/image.4fuuczx3pn9c.webp)

### 选择器组`,`

### 选择器的特异度
- 权重计算规则
	1.  第零等：`!important`， 大过了其它任何设置。
	2.  第一等：代表内联样式，如: style=””，权值为1000。
	3.  第二等：代表ID选择器，如：#content，权值为0100。
	4.  第三等：代表类，伪类和属性选择器，如.content，权值为0010。
	5.  第四等：代表类型选择器和伪元素选择器，如div p，权值为0001。
	6.  第五等：通配符、子选择器、相邻选择器等的。如*、>、+,权值为0000。
	7.  第六等：继承的样式没有权值。

## 四、属性的特性
### 继承

某些属性会自动继承其父元素的`计算值`，除非显式指定一个值。

- 显式继承
	- `inherit`，对继承和非继承属性都生效。

### 初始值

- CSS中每个属性都有一个初始值。
- 使用`initial`显式重置为初始值。

## 五、CSS求值过程

- filtering：匹配各个选择器中有效的属性值
- cascading：对比选择器的特异性，生成层叠值
- defaulting：判断层叠值是否为空。如果为空，使用继承或者初始值，生成不为空的指定值
- resolving：将相对值计算成绝对值，（比如em转化成px，相对路径转化成绝对路径等），生成计算值
- formatting：转化如vh，vw，百分比这种，得到使用值。
- 将小数像素值转为整数
- 完毕

## 六、颜色表示

- `#xxxxxx(xx)`：十六进制
- `rgba`：红蓝绿三通道+`alpha`透明度
- `hsla`：色相、饱和度、明亮度+`alpha`透明度

## 七、字体表示

### 字体样式
`font-family`使用建议：
- 字体列表最后写上通用字体族，如下：
	- Serif 衬线体
	- Sans-Serif 无衬线体
	- Cursive 手写体
	- Fantasy （艺术体）
	- Monospace 等宽字体
- 英文字体放在中文字体之前

使用`web Fonts`：

```css
@font-facw:{
	font-family:"xxx";
	src:url("xxx") format("woff2");
}
```

### 字体大小
- `font-size`
- 关键字：`small`、`medium`、`large`
- 单位：`px`、`em`、`rem`...
- 百分数
	- 相对于父元素字体大小

> em：根据父元素
> 
> rem：根据根元素

### 字体样式

- `font-style`
	- normal
	- italic
	- ...
- `font—weight`
	- normal(400) 
	- bold(700) 
	- 100 - 900
- `font`
	- style weight size/height family
	- 例子：`font: bold 14px/1.7 Helvetica, sans-serif;`

## 八、文本

- `line-height`
	- normal（约1.2）
	- 倍数：相对于元素字体大小**`推荐使用`**
	- 具体长度
	- 百分比
- `text-align`
	- 文本对齐
	-  left / center / right / justify 两端对齐
- `spacing`
	- `letter-spacing`字符间距
	- `word-spacing`单词间距
- `text-indent`首行缩进
- `text-decoration`
	- none / underline / line-through / ...
- `white-space`
	- normal：空白合并，换行变空白
	- nowrap：空白合并，换行失效
	- pre：空白保留，遇换行或`<br>`换行
	- pre-wrap：空白保留，遇换行或`<br>`或行内元素换行
	- pre-line：空白合并，遇换行或`<br>`或行内元素换行

```css
/* 允许在pre中换行 */
pre {
  word-wrap: break-word;      /* IE 5.5-7 */
  white-space: pre-wrap;      /* current browsers */
}
```


## 九、布局

### 布局相关技术

- 常规流
	- 行级
	- 块级
	- 表格布局
	- Flex
	- Grid
- 脱离常规流
	- 浮动
	- 绝对定位

#### 盒子模型
- width
	- 默认`content box`宽度
	- 长度、百分数、auto
	- auto由浏览器根据其它属性确定
	- 百分数相对于容器的 content box宽度
- height
	- 同width
	- 容器有指定的高度时，百分数才生效
- padding
	- 指定四个方向的内边距
	- 百分比相对于容器`宽度`
- border
	- `border:width style color`
	- 当四边颜色不同时，会用斜线分开
		- 实现小三角思路：content为0，设置一边的border
- margin
	- 指定四个方向的外边距
	- 百分比相对于容器`宽度`
	- `margin:0 auto`水平居中
	- `collapse`：上下margin折叠，左右不会。
- box-sizing
	- 经常设置为`box-sizing:border-box`
- overflow
	- visible / hidden / scroll
- display
	- block / inline / inline-block / none

> 块级 VS 行级
> - 行级元素width、height不适用
>  - 块级盒子：`body`、`article`、`div`、`main`、`section`、`h1-h6`、`p`、`ul`、`li`等
>  - 行级元素：`span`、`em`、`strong`、`cite`、`code`等

#### 行级排版上下文（IFC）
- `只包含行级盒子`的容器
- 排版规则
	- 盒子在一行内水平摆放
	- 行放不下时，换行显示
	- `text-align`决定一行内盒子的水平对齐
	- `vertical-align`决定一个盒子在行内的垂直对齐
	- 避开浮动`float`元素

#### 块级排版上下文（BFC）
- 某些容器会创建BFC
	- 根元素
	- 浮动、绝对定位、 inline-block
	- Flex子项和Grid子项
	- overflow值不是 visible的块盒
	- display: flow-root
- 排版规则
	- 盒子从上到下摆放
	- 垂直margin合并
	- BFC内的margin不会与外面的合并
	- BFC不会与浮动元素重叠

#### Flex排版上下文

- 一种新的排版上下文
- 可以控制子级盒子的
	- 摆放的流向(→←↑↓)
	- 摆放顺序
	- 盒子宽度和高度
	- 水平和垂直方向的对齐
	- 是否允许折行
- 主轴（水平）与侧轴（竖直）
- `flex-direction`: row / column / row-reserve / column-reserve
- `justify-content`主轴对齐
- `align-items`：侧轴对齐
- `align-self`:给特定元素设定
- `order`：默认为0，给元素设定顺序
- `flexibility`
	- `flex-grow`有剩余空间时的伸展能力
	- `flex-shrink`容器空间不足时收缩的能力，默认为1
	- `flex-basis`没有伸展或收缩时的基础长度
- 属性的简写

![image](https://cdn.jsdelivr.net/gh/Merlin218/image-storage@master/picX/image.35norh0gqqtc.webp)

#### Grid排版上下文

- `display:grid`使元素生成一个块级的Grid容器
- 使用`grid-template`相关属性将容器划分为网格
- 设置每一个子项占哪些行列

- 划分网络
	- `grid-template-columns`
	- `grid-template-rows`
	- 相关语法
		- `repeat(number,length)`
		- `fr`按比例划分
		- `minmax(min,max)`
##### 分配空间
- `grid-area`: 1/1/3/3
	- `grid-row-start`:1
	- `grid-column-start`: 1
	- `grid-row-end`: 3
	- `grid-column-end`: 3

#### Float

- 适用场景：图文环绕

```html
<section>
  <img src="https://p4.ssl.qhimg.com/t017aec0e7edc961740.jpg" width="300" alt="mojave" />
  <p>莫哈韦沙漠不仅纬度较高，而且温度要稍微低些，是命名该公园的短叶丝兰——约书亚树的特殊栖息地。约书亚树以从茂密的森林到远远间隔的实例等各种形式出现。除了约书亚树森林之外，该公园的西部包括加州沙漠里发现的最有趣的地质外观。
  </p>
</section>

<style>
  img {
    float: left;
  }

  p {
    font-size: 20px;
    line-height: 1.8;
  }
</style>
```

### position属性
- `static`：默认值，非定位元素
- `relative`：相对自己偏移
- `absolute`
	- 脱离常规流
	- 相对于最近`非static祖先`定位
	- 不会对流内元素布局造成影响
- `fixed`
	- 脱离文档流
	- 相对于视口定位
- `sticky`

## 十、其他

- aria-xxx
	- 早期HTML4引入的方法，现推荐使用`正确语义的HTML元素`
	- 向[HTML](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML) 中添加语义和其他元数据的[W3C (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/W3C "Currently only available in English (US)") 规范，以满足用户的辅助技术的需要。
	- 例如：在这个例子中， `role="progressbar"` 属性通知浏览器这个元素实际上是一个 JavaScript 驱动的进度条小部件。 `aria-valuemin` 和 `aria-valuemax` 属性指定进度条的最小值和最大值，`aria-valuenow` 描述进度条的当前状态和因此必须使用 JavaScript 保持更新。

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75"
     aria-valuemin="0" aria-valuemax="100">
</div>
```
- 优雅降级/渐进增强

> 参考链接🔗
> 
> [前端面试题：CSS中的选择器权重](https://segmentfault.com/a/1190000016924975)