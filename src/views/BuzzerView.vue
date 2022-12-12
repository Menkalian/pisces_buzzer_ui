<script lang="ts" setup>
import RedButton from "@/components/RedButton.vue";
import config from "@/config";
import { showError } from "@/utils/io";
import axios from "axios";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();

const buzzerId = computed(() => {
  const param = route.params.id;
  return typeof param === "string" ? param : param[0] ?? "";
});

const isLoading = ref(false);

const handleClick = async () => {
  if (!buzzerId.value) return;

  isLoading.value = true;

  try {
    await axios.get(`buzzer/${buzzerId.value}`, { baseURL: config.api.host });
  } catch (e) {
    console.error(e);
    showError(e as Error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="page">
    <RedButton
      @click="handleClick"
      :text="t('pages.buzzer.buttonText')"
      :disabled="isLoading"
    />
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
