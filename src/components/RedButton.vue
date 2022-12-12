<script lang="ts" setup>
const props = defineProps<{
  text: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (event: "click"): void;
}>();

const handleClick = () => {
  if (props.disabled) return;
  emit("click");
};
</script>

<template>
  <div class="btn" :class="{ 'btn--disabled': disabled }" @click="handleClick">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
.btn {
  --base-color: 255, 0, 64;

  $size: 150px;

  width: $size;
  height: $size;
  min-width: $size;
  min-height: $size;

  background: rgba(var(--base-color), 1);
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  animation: animate 2s linear infinite;
  margin: 48px;

  display: grid;
  align-items: center;
  text-align: center;
  user-select: none;

  @keyframes animate {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 0, 64, 0.7), 0 0 0 0 rgba(255, 0, 64, 0.7);
    }
    40% {
      box-shadow: 0 0 0 50px rgba(255, 0, 64, 0), 0 0 0 0 rgba(255, 0, 64, 0.7);
    }
    80% {
      box-shadow: 0 0 0 50px rgba(255, 0, 64, 0), 0 0 0 30px rgba(255, 0, 64, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 0, 64, 0), 0 0 0 30px rgba(255, 0, 64, 0);
    }
  }

  &:hover {
    background: rgb(var(--base-color), 0.9);
  }

  &:active {
    background: rgb(var(--base-color), 0.8);
    transform: translateY(4px);
  }

  &--disabled {
    filter: grayscale(1);
    cursor: not-allowed;
  }
}
</style>
