<demo>ä¸ĺçść</demo>

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
</script>