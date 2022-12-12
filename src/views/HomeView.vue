<script lang="ts" setup>
import { ElButton } from "element-plus";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();
</script>

<template>
  <div>
    <el-button type="primary" plain @click="router.push('/buzzer/1')">
      {{ t("pages.home.toBuzzer") }}
    </el-button>
  </div>
</template>

<style lang="scss" scoped></style>
