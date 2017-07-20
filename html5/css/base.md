### link and @important

* link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS
* link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载
* link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持

### 引入方式

* 行内样式: style
* 内联: `<style></style>`
* 外链: `<Link></Link>`
* @important 
* css脚本化

### css优先级