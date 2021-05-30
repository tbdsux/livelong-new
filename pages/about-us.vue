<template>
  <container width="w-11/12">
    <PageHeader
      title="About Us"
      description="Learn more about us, who we are and what we do."
    />

    <hr />

    <container width="w-5/6">
      <div class="py-12 text-center">
        <img
          src="~/assets/images/logo.jpg"
          alt="Live Long Baguio Logo"
          class="h-48 w-48 mx-auto"
        />
        <p class="text-lg tracking-wide text-gray-600 p-4">
          If you’re that type of person who wants their food healthy then either
          you buy and prepare them or buy from a trusted store. This is one of
          the motivators that brought
          <strong>Live Long Detox Bar and Organic Shop</strong> to existence in
          Baguio City and bring in the healthy stuff to people.
          <br />
          Driven by our personal mantra to stay healthy and away from sickness ,
          Our food/dishes and drinks are thoughtfully planned and prepared to
          cater to our client's specific needs.
        </p>
      </div>
    </container>

    <container width="w-5/6">
      <div class="bg-green-500 text-white p-4 rounded-lg">
        <h4 class="font-extrabold text-2xl">Our Mission</h4>
        <p class="text-lg tracking-wide">
          To provide legitimate healthier food options while at the same time
          inform and educate people of healthier food choices for a healthy and
          more productive life that aims to inspire and be a blessing.
        </p>
      </div>
    </container>

    <hr class="my-8" />

    <div class="my-12">
      <h3 class="text-3xl font-extrabold text-gray-700 mb-8 text-center">
        Live Long Chronicles
      </h3>

      <container width="w-5/6">
        <h4 class="text-2xl font-extrabold tracking-wide text-green-500">
          How We Started
        </h4>
        <ul class="grid grid-cols-3 mt-4">
          <li v-for="(item, index) in howWeStart" :key="index">
            <img
              :src="require(`~/assets/images/chronicles/${item}`)"
              :alt="`How we started - ${index}`"
            />
          </li>
        </ul>
      </container>

      <div
        class="
          w-2/3
          mx-auto
          my-8
          bg-green-500
          text-white
          rounded-lg
          grid grid-cols-2
          items-center
          gap-6
        "
      >
        <p class="p-6 text-lg">
          Restaurants are at the heart of their communities, and many
          restaurants select charities to donate to each month. Restaurants give
          back. Especially in times of need, restaurant operators respond
          generously with food, kindness, and generosity.
        </p>
        <img
          src="~/assets/images/chronicles/10.jpg"
          alt="A Glimpse of Live Long"
        />
      </div>

      <hr class="my-4 border-green-300" />

      <container width="w-5/6">
        <h4 class="text-2xl font-extrabold tracking-wide text-green-500">
          Events
        </h4>
        <div class="w-4/5 mx-auto mt-4">
          <div class="grid grid-cols-2 relative">
            <span
              class="
                absolute
                -top-2
                inset-x-0
                p-2
                rounded-lg
                bg-green-500
                text-white
              "
              >Session Road in Bloom</span
            >
            <img
              src="~/assets/images/chronicles/sessionroad-in-bloom.jpg"
              alt="Session Road in Bloom 1"
            />
            <img
              src="~/assets/images/chronicles/sessionroad-in-bloom-2.jpg"
              alt="Session Road in Bloom 2"
            />
          </div>
          <ul class="grid grid-cols-2 mt-4">
            <li v-for="(item, index) in events" :key="index" class="relative">
              <span
                class="
                  absolute
                  bg-green-500
                  text-white
                  p-2
                  rounded-lg
                  -top-1
                  -left-1
                "
                >{{ item.name }}</span
              >
              <img
                :src="require(`~/assets/images/chronicles/${item.image}`)"
                :alt="item.name"
                class="object-cover"
              />
            </li>
          </ul>
        </div>
      </container>

      <container width="w-5/6">
        <div class="bg-green-500 text-white py-5 px-7 my-8 rounded-lg">
          <p class="mb-2 text-center text-lg">
            We were also featured on <br />Naimbag nga Morning, Umagang Kay
            Ganda and ANC <br />
            for being the first one of a kind Detox Bar in Baguio City.
          </p>
          <ul class="grid grid-cols-4">
            <li v-for="(item, index) in news" :key="index">
              <img
                :src="require(`~/assets/images/chronicles/${item}`)"
                :alt="`Featured - ${index}`"
                class="h-48 object-cover w-full object-top"
              />
            </li>
          </ul>
        </div>
      </container>

      <hr class="my-4 border-green-300" />

      <container width="w-5/6">
        <h4 class="text-2xl font-extrabold tracking-wide text-green-500">
          Our Regular Clients
        </h4>
        <p>
          Australia's Gold Medalist Boxer, Shelley Watts and Manny Pacquaio's
          protege Felix Marshall
        </p>
        <ul class="w-5/6 mx-auto grid grid-cols-3 gap-6 mt-4">
          <li>
            <img
              src="~/assets/images/chronicles/regular-clients-1.jpg"
              alt="Shelley Wats"
              class="h-96 object-cover w-full rounded-t-lg"
            />
            <p
              class="
                bg-green-500
                text-white text-lg
                font-bold
                text-center
                p-2
                rounded-b-lg
              "
            >
              Shelley Wats
            </p>
          </li>
          <li class="col-span-2">
            <div class="grid grid-cols-2">
              <img
                src="~/assets/images/chronicles/regular-clients-3.1.jpg"
                alt="Felix Marshall"
                class="h-96 object-cover w-full rounded-t-lg"
              />
              <img
                src="~/assets/images/chronicles/regular-clients-3.jpg"
                alt="Felix Marshall"
                class="h-96 object-cover w-full rounded-t-lg"
              />
            </div>
            <p
              class="
                bg-green-500
                text-white text-lg
                font-bold
                text-center
                p-2
                rounded-b-lg
              "
            >
              Felix Marshall
            </p>
          </li>
        </ul>
      </container>
    </div>
  </container>
</template>

<script>
import container from '~/components/container.vue'
export default {
  components: { container },
  data() {
    return {
      howWeStart: [
        'how-we-started-1.jpg',
        'how-we-started-2.jpg',
        'how-we-started-3.jpg',
      ],
      events: [
        {
          name: 'Catering for Special Occasions',
          image: 'cater-special-occassions.jpg',
        },
        {
          name: 'Feature by 700 CLub Asia',
          image: 'feature-700club-asia.jpg',
        },
      ],
      news: ['f1.jpg', 'f2.jpg', 'f3.jpg', 'f4.jpg'],
    }
  },
  head() {
    return {
      title: 'About Us - Who we are | Live Long Baguio',
    }
  },
}
</script>
