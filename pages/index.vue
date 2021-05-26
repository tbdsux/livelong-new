<template>
  <main>
    <!-- showcase header -->
    <container width="w-5/6">
      <div class="py-12 grid grid-cols-2 gap-8 items-center">
        <div class="">
          <h3
            class="
              font-cursive
              text-8xl
              font-extrabold
              leading-relaxed
              text-green-500
              trackin-wide
            "
          >
            Live Long
          </h3>
          <h4 class="text-5xl font-extrabold text-gray-700">
            Detox Bar and Organic Shop
          </h4>
          <p class="text-xl text-gray-500 tracking-wide my-6">
            From the start, we have been providing organic/all natural foods and
            products for our clients who wish to have a healthy diet and
            lifestyle.
          </p>
          <div class="mt-3 flex">
            <nuxt-link
              to="/menus"
              class="
                py-3
                px-6
                rounded-md
                text-lg
                bg-gray-400
                hover:bg-gray-500
                text-gray-50
                trackin-wide
                flex
                items-center
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"
                />
              </svg>
              Available Menus</nuxt-link
            >
            <a
              href="#"
              class="
                py-3
                px-6
                rounded-md
                text-lg
                bg-green-400
                hover:bg-green-500
                text-gray-50
                trackin-wide
                ml-3
                flex
                items-center
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
              Order Now</a
            >
          </div>
        </div>
        <img src="~/assets/images/cover.jpg" class="h-72 rounded-lg ml-auto" />
      </div>
    </container>
    <hr />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Live Long Detox Bar & Organic Shop',
    }
  },
}
</script>
