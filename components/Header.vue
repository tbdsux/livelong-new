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

        <ul class="flex text-gray-600">
          <li>
            <a href="#" class="px-4 mx-1 hover:text-green-500">Home</a>
          </li>
          <li>
            <a href="#" class="px-4 mx-1 hover:text-green-500">Menu</a>
          </li>
          <li>
            <a href="#" class="px-4 mx-1 hover:text-green-500">About Us</a>
          </li>
          <li>
            <a href="#" class="px-4 mx-1 hover:text-green-500">Order Now</a>
          </li>
        </ul>
      </div>
    </container>
    <hr />
  </header>
</template>
