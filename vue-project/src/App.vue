<template>
  <div>当前鼠标位置</div>
  <div>x: {{ mouse.x }}</div>
  <div>y: {{ mouse.y }}</div>
  <div>当前点击次数：{{ count }}</div>
  <button @click="add">点击</button>
</template>

<script>
export default {
  // vue2 中采用的是 options API
  // 常见的配置项: data created methods watch computed components
  data() {
    return {
      mouse: {
        x: 0,
        y: 0,
      },
      count: 0,
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.move)
  },
  methods: {
    move(e) {
      this.mouse.x = e.pageX
      this.mouse.y = e.pageY
    },
    add() {
      this.count++
    },
  },
  destroyed() {
    document.removeEventListener('mousemove', this.move)
  },
}
</script>