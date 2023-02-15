<demo>不同状态</demo>

<template>
  <!-- <dm-message type="warning" message="this is warning message" :duration="3000"></dm-message> -->
  <!-- <dm-message type="message" message="this is warning message" :duration="3000"></dm-message> -->
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
      type: types.MESSAGE,
      message: 'this is a message.'
    })
  ">message</Button>
  <Button @click="Message({
    type: types.ERROR,
    message: 'Oops, this is a error message.'
  })">error</Button>
</template>

<script setup lang="ts">
import Button from '../../lib/Button.vue';
import Message from '../../lib/Message'
import types from '../../lib/Message/types';
import DmMessage from '../../lib/Message/Message.vue'
</script>