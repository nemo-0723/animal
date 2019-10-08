<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-image
      width="100"
      height="100"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <van-button type="danger" @click="add">危险按钮</van-button>
    <p>{{ count }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("increment");
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>
