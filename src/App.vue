<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { RouterView } from "vue-router";

// auto dark mode
useDark();
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
@use "@/styles/index.scss";
</style>
