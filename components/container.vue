<template>
  <div :class="width + ' mx-auto'">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: 'w-11/12' | 'w-5/6' | 'w-4/5',
    },
  },
}
</script>
