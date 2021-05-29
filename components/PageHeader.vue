<template>
  <container width="w-5/6">
    <div class="py-10 text-center">
      <h2
        class="
          text-green-500
          leading-relaxed
          text-4xl
          font-extrabold
          tracking-wide
        "
      >
        {{ title }}
      </h2>
      <p class="text-lg tracking-wide text-gray-600">{{ description }}</p>
    </div>
  </container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
