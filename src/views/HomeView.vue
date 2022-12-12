<script lang="ts" setup>
import config from "@/config";
import { ElButton } from "element-plus";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

config;
</script>

<template>
  <div>
    <el-button
      v-if="config.app.defaultBuzzerId"
      type="primary"
      plain
      @click="router.push(`/buzzer/${config.app.defaultBuzzerId}`)"
    >
      {{ t("pages.home.toBuzzer") }}
    </el-button>
  </div>
</template>

<style lang="scss" scoped></style>
