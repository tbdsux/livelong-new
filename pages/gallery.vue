<template>
  <div>
    <PageHeader
      title="Gallery"
      description="Take a look at some pictures inside our business"
    />

    <hr class="w-5/6 mx-auto" />

    <div class="my-10">
      <ul class="grid grid-cols-4">
        <li v-for="(image, idx) in images" :key="idx">
          <img
            class="h-72 w-full object-cover cursor-pointer"
            :src="image"
            :alt="`Image ${idx}`"
            :title="`Image ${idx}`"
            @click="() => showImage(idx)"
          />
        </li>
      </ul>

      <client-only>
        <vue-easy-lightbox
          :visible="visible"
          :imgs="images"
          :index="index"
          @hide="handleHide"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      visible: false,
      images: [
        require('~/assets/images/gallery/1.jpg'),
        require('~/assets/images/gallery/2.jpg'),
        require('~/assets/images/gallery/3.jpg'),
        require('~/assets/images/gallery/4.jpg'),
        require('~/assets/images/gallery/7.jpg'),
        require('~/assets/images/gallery/8.jpg'),
      ],
    }
  },
  head() {
    return {
      title: 'Gallery - Our Pictures | Live Long Baguio',
    }
  },
  methods: {
    showImage(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
}
</script>
