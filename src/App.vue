<!--
 * @Description: 
 * @Date: 2025-03-27 17:11:13
 * @FilePath: App.vue
-->
<!--
* @Description  测试docx导出
* @FileName  App
* @Date 2024-11-22 14:45:27
!-->
<template>
  <div class="app">
    <div class="left">
<div v-html="showHtml"></div>
    </div>
    <div class="right">
      <button @click="exportDocx">导出docx</button>
    </div>
  </div>
</template>
<script setup lang="js">
import { onBeforeMount, ref,shallowRef } from 'vue';
import { saveAs } from 'file-saver';
import { html } from '@/assets/html.ts';
import { images } from './assets/images';
const showHtml = shallowRef(html)
const exportDocx = (event,name = '集成导出')=>{

}

</script>
<style scoped>
.app {
  display: flex;
  justify-content: space-between;
  width: 100vw;
}
.left {
  width: calc(100% - 300px);
  height: 100vh;
  overflow: auto;
}
.right {
  width: 300px;
  height: 100vh;
  background: #f0f6f0;
}
</style>
