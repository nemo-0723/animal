<template>
  <div id="app">
    <!-- 底部导航 -->
    <div id="nav">
      <router-link to="/index" tag="li">首页</router-link>
      <router-link to="/about" tag="li">宠圈</router-link>
      <router-link to="/test" tag="li">消息</router-link>
      <router-link to="/test" tag="li">我的</router-link>
    </div>
    <router-view />
  </div>
</template>

<script></script>

<style lang="scss">
* {
  margin: 0 auto;
}
li,
a {
  list-style-type: none;
  text-decoration: none;
}
#nav {
  width: 100%;
  height: 90px;
  display: flex;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #dddddd;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: white;
  li {
    font-family: 59--Regular;
    font-size: 23px;
    color: #666666;
  }
}
</style>
