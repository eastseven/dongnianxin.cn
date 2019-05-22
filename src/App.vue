<template>
  <div id="app">
    <div id="content">
      <vue-waterfall-easy ref="waterfall" :imgsArr="imgsArr" linkRange="img" @click="clickFn" @preloaded="preloadedFn">
        <div class="img-info" slot-scope="props">
          <!--<p class="some-info">第{{props.index+1}}张图片</p>-->
          <p class="some-info" v-preview="props.value.href">{{props.value.info}} No.{{props.index+1}}</p>
        </div>
      </vue-waterfall-easy>
    </div>
    <lg-preview></lg-preview>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import { images } from './data.js'
export default {
  name: 'app',
  data () {
    return {
      imgsArr: [],
      group: 0 // 当前加载的加载图片的次数
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData () {
      this.group++
      this.imgsArr = images()
    },
    clickFn (event, { index, value }) {
      // 阻止a标签跳转
      event.preventDefault()
      // 只有当点击到图片时才进行操作
      if (event.target.tagName.toLowerCase() === 'img') {
        console.log('img clicked', index, value)
      }
    },
    preloadedFn () {
      console.log('>>>preloaded', this)
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: #000;
    text-decoration: none;
    &:active {
      color: #000;
    }
  }

  html,
  body,
  #app {
    height: 100%;
  }

  #app {
    position: relative;
    #header {
      display: block;
      text-align: center;
      background: #000;
      color: #cccccc;
      line-height: 32px;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 2px;
      position: fixed;
      z-index: 999;
      width: 100%;
    }
    #content {
      position: absolute;
      top: 32px;
      bottom: 0;
      width: 100%;
    }
  }

  #app {
    overflow: auto;
    position: relative;
    .some-info {
      line-height: 1.6;
      text-align: center;
    }
  }
</style>
