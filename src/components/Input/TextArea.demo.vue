<demo>多行文本框</demo>
<template>
  <TextArea placeholder="自适应高度" />
  <div :style="{ height: '20px' }"></div>
  <TextArea :auto-size="{ minRow: 2, maxRow: 5 }" placeholder="自适应高度" />
</template>

<script setup lang="ts">
import TextArea from '../../lib/TextArea.vue';
</script>
