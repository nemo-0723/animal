<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="#">Top</a>
    <ul>
      <li v-for="item in listinfo" :key="item.id" @click="default1">
        {{ item.name }}
      </li>
    </ul>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <!-- <router-link to="/more">详情</router-link> -->
    <router-view />
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      listinfo: []
    };
  },
  props: ["msg"],
  created() {
    axios.get("http://127.0.0.1:8089/queryAll").then(res => {
      this.listinfo = res.data.des;
      // console.log(this.listinfo.des)
    });
  },
  methods: {
    default1() {
      this.$router.push({ name: "more" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
