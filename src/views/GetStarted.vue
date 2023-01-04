<template>
  <article class="markdown-body">
    <h1>快速上手</h1>
    <h2>安装</h2>
    <p>
      <p>打开终端运行下列命令：</p>
  <pre><code>npm install king-ui</code></pre>
  <p>或</p>
  <pre><code>yarn add king-ui</code></pre>
    </p>
    <h2>开始使用</h2>
    <p>1. 添加 CSS 样式</p>
    <p>使用本框架前，请确保整个项目的 CSS 开启了 border-box</p>
    <p>按需引入需要的组件，以达到减小项目体积的目的。</p>
    <pre><code>import {Button, Tabs, Switch, Dialog} from "diamond-ui"</code></pre>
    就可以使用我提供的组件了。

    <h2>Vue 单文件组件</h2>
    <p>代码示例：</p>
    <pre><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, Dialog} from "king-ui"
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code></pre>
 
  </article>
</template>
