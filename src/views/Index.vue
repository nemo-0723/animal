<template>
  <div id="app">
    <!-- 头部 -->
    <header id="header">
      <div class="classify">首页</div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </header>
    <div id="search">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          background="white"
          @search="onSearch"
        />
      </form>
    </div>
    <!-- 轮播 -->
    <div id="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div id="animals">
      <ul>
        <li>
          <div class="one"><van-icon name="smile-o" /></div>
          <p>猫咪</p>
        </li>
        <li>
          <div class="two"><van-icon name="smile-o" /></div>
          <p>狗狗</p>
        </li>
        <li>
          <div class="three"><van-icon name="smile-o" /></div>
          <p>微宠</p>
        </li>
        <li>
          <div class="four"><van-icon name="smile-o" /></div>
          <p>其他</p>
        </li>
      </ul>
    </div>
    <!-- 等待领养 -->
    <div id="waiting">
      <div class="title">等待领养</div>
      <ul class="display">
        <li>
          <div class="pic"></div>
          <p>贝贝</p>
          <button>领养</button>
        </li>
        <li>
          <div class="pic"></div>
          <p>贝贝</p>
          <button>领养</button>
        </li>
        <li>
          <div class="pic"></div>
          <p>贝贝</p>
          <button>领养</button>
        </li>
      </ul>
    </div>
    <!-- 宠物学堂 -->
    <div id="school">
      <div class="title">宠物学堂</div>
      <div class="schoolNavBox">
        <ul class="schoolNav">
          <li>狗狗</li>
          <li>猫咪</li>
          <li>热议</li>
        </ul>
      </div>
      <ul class="display">
        <li>
          <div class="pic"></div>
          <div class="textArea">
            <p class="schoolTitle">
              狗狗也有起床气？原来狗狗睡眠不足有这些危害...
            </p>
            <p class="subTitle">动物专家表示：散步玩太疯也是原因</p>
            <span>2017-09-11</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "成都", value: 0 },
        { text: "重庆", value: 1 },
        { text: "云南", value: 2 }
      ]
    };
  }
};
</script>
<style lang="scss">
* {
  margin: 0 auto;
}
li,
a {
  list-style-type: none;
  text-decoration: none;
}
#app {
  #header {
    width: 100%;
    height: 60px;
    .classify {
      width: 20%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      float: left;
      font-family: 59--Regular;
      font-size: 30px;
      color: #333333;
    }
    .van-dropdown-menu {
      width: 20%;
      height: 60px;
      float: right;
    }
  }
  #search {
    width: 94%;
    height: 50px;
    .van-search {
      height: 50px;
      border-radius: 10px;
      border: solid 1px #dddddd;
    }
  }
  #banner {
    width: 94%;
    height: 200px;
    .van-swipe {
      width: 100%;
      height: 200px;
      background-color: #0089e9;
      border-radius: 10px;
      margin-top: 20px;
    }
  }
  #animals {
    width: 94%;
    height: 120px;
    background: palegreen;
    margin-top: 20px;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      li > div {
        width: 80px;
        height: 80px;
        background-image: linear-gradient(-35deg, #ff574a 0%, #ff7352 100%);
        border-radius: 50%;
      }
      li .two {
        background-image: linear-gradient(-35deg, #f07d18 0%, #ffb21c 100%);
      }
      li .three {
        background-image: linear-gradient(-35deg, #ad97fe 0%, #49a7ff 100%);
      }
      li .four {
        background-image: linear-gradient(-35deg, #009eff 0%, #00dbfe 100%);
      }
      li > p {
        height: 40px;
        line-height: 40px;
        font-family: 59--Regular;
        font-size: 26px;
        color: #666666;
      }
    }
  }
  #waiting {
    width: 94%;
    height: 350px;
    background: paleturquoise;
    margin-top: 20px;
    .title {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-family: 59--Regular;
      font-size: 30px;
      color: #333333;
    }
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      li {
        width: 30%;
        height: 250px;
        background-color: #eeeeee;
        border-radius: 10px;
        .pic {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: pink;
          margin-top: 20px;
        }
        p {
          margin-top: 10px;
          font-family: 59--Regular;
          font-size: 26px;
          color: #333333;
        }
        button {
          width: 60%;
          margin-top: 20px;
          height: 46px;
          background-image: linear-gradient(90deg, #ffae12 0%, #f07d17 100%);
          border-radius: 23px;
        }
      }
    }
  }
  #school {
    width: 94%;
    background: #f1f1f1;
    margin-top: 20px;
    .title {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-family: 59--Regular;
      font-size: 30px;
      color: #333333;
    }
    .schoolNavBox {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: white;
      margin-top: 10px;
      margin-bottom: 10px;
      .schoolNav {
        width: 50%;
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
      }
    }
    .display {
      width: 100%;
      margin-top: 10px;
      li {
        width: 100%;
        height: 120px;
        margin-top: 10px;
        text-align: center;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        .pic {
          width: 35%;
          height: 100px;
          background: pink;
        }
        .textArea {
          width: 60%;
          height: 100px;
          background: white;
          text-align: left;
          .subTitle {
            font-size: 14px;
            color: #a09d9d;
            margin-top: 10px;
          }
          span {
            font-size: 12px;
            color: #a09d9d;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
