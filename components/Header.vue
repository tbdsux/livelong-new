<template>
  <header>
    <container width="w-11/12">
      <div class="flex items-center justify-between py-2">
        <nuxt-link to="/" class="flex items-center">
          <img class="h-16 w-16" src="~/assets/images/logo.jpg" />
          <h1
            class="
              ml-2
              text-2xl
              font-extrabold
              tracking-wide
              text-green-500
              font-cursive
            "
          >
            Live Long
          </h1>
        </nuxt-link>

        <ul class="flex items-center text-gray-600">
          <li>
            <nuxt-link to="/" class="px-4 mx-1 hover:text-green-500">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/menus" class="px-4 mx-1 hover:text-green-500">
              Menus
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about-us" class="px-4 mx-1 hover:text-green-500">
              About Us
            </nuxt-link>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </container>
    <hr />
  </header>
</template>
