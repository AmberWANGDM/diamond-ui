<demo>不同状态</demo>

<template>
  <Button @click="
    Message.success({
      message: 'Congrats, this is a success message.'
    })
  ">success</Button>
  <Button @click="
    Message.warning({
      message: 'Warning, this is a warning message.'
    })
  ">warning</Button>
  <Button @click="() =>
    Message({
      type: 'message',
      message: 'this is a message.'
    })
  ">message</Button>
  <Button @click="Message({
    type: 'error',
    message: 'Oops, this is a error message.'
  })">error</Button>
</template>

<script setup lang="ts">
import Button from '../../lib/Button.vue';
import Message from '../../lib/Message.vue'
</script>