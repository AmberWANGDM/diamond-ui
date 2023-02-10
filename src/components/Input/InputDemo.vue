<template>
  <Demo :component="BasicInput" />
  <Demo :component="DisabledInput" />
  <Demo :component="PasswordInputDemo" />
</template>

<script setup lang="ts">
import Demo from '../Demo.vue'
import BasicInput from './BasicInput.demo.vue';
import DisabledInput from './DisabledInput.demo.vue';
import PasswordInputDemo from './PasswordInput.demo.vue';
</script>