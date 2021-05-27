<template>
  <main>
    <!-- showcase header -->
    <container width="w-5/6">
      <div class="pt-16 pb-24 grid grid-cols-2 gap-8 items-center">
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
          <h4 class="text-4xl font-extrabold text-gray-700">
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
                bg-gray-500
                opacity-80
                hover:opacity-100
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
                bg-green-500
                opacity-80
                hover:opacity-100
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
              Order Now
            </a>
          </div>
        </div>
        <img src="~/assets/images/cover.jpg" class="h-72 rounded-lg ml-auto" />
      </div>
    </container>
    <hr />

    <container width="w-5/6">
      <div class="py-16 text-center">
        <h3 class="text-4xl font-extrabold text-green-500 leading-relaxed">
          Where are we?
        </h3>
        <p class="text-xl text-gray-500">
          You can visit us with the address below or you could also contact us
          with our contact number.
        </p>

        <div class="mt-8 grid grid-cols-2 items-center text-left">
          <div class="w-full">
            <iframe
              class="w-full h-72 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3827.2522326005533!2d120.60569237817027!3d16.412011298017436!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3391a1505a2f2aeb%3A0xdca373e1272bff1f!2sLeonard%20Wood%20Rd%2C%20Baguio%2C%20Benguet!3m2!1d16.413235999999998!2d120.6070718!5e0!3m2!1sen!2sph!4v1622083552144!5m2!1sen!2sph"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div class="ml-12">
            <ul>
              <li class="my-3 p-3 border-t border-b">
                <h4
                  class="
                    text-xl
                    font-extrabold
                    inline-flex
                    items-center
                    text-green-500
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Our Address
                </h4>
                <p class="text-2xl text-gray-500 tracking-tight font-light">
                  Siapno Road, Pacdal, <br />
                  Baguio City 2600, Philippines
                </p>
              </li>
              <li class="my-3 p-3 border-t border-b">
                <h4
                  class="
                    text-xl
                    font-extrabold
                    inline-flex
                    items-center
                    text-green-500
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Mobile Number
                </h4>
                <p class="text-2xl text-gray-500 tracking-tight font-light">
                  09954179115
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </container>

    <hr />

    <IndexFeedback />

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
