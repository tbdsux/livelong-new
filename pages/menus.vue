<template>
  <div>
    <container width="w-11/12">
      <PageHeader
        title="Our Menus &amp; Delicacies"
        description="See and discover what we make and market."
      />

      <hr />

      <div class="py-12">
        <container width="w-11/12">
          <menus-best-sellers />

          <menus-meal-plans />

          <menus-other-menus />
        </container>
      </div>
    </container>

    <!-- simple cta -->
    <div class="bg-cta bg-cover py-10">
      <div class="w-5/6 mx-auto flex items-center justify-between">
        <div>
          <h4 class="text-3xl font-extrabold text-white">
            Found what you like?
          </h4>
          <p class="text-white text-lg">Message us and order what you want.</p>
        </div>
        <a
          href="#"
          class="
            py-2
            px-4
            rounded-md
            bg-green-500
            opacity-80
            hover:opacity-100
            text-gray-50
            trackin-wide
            ml-1
            flex
            items-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
          </svg>
          Order Now
        </a>
      </div>
    </div>
    <!-- simple cta -->
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  head() {
    return {
      title: 'Our Menus & Delicacies | Live Long Baguio',
    }
  },
}
</script>
