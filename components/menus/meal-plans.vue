<template>
  <!-- start meal plans -->
  <container width="w-11/12">
    <hr class="my-12" />

    <div>
      <h3 class="text-center text-2xl font-extrabold text-green-500 mt-8">
        Our Meal Plans
      </h3>
      <ul class="grid grid-cols-2 gap-10 mt-4">
        <li
          v-for="(item, index) in mealPlans"
          :key="index"
          class="relative bg-gray-50 shadow rounded-lg border text-center"
        >
          <span
            class="
              absolute
              -top-2
              -left-2
              bg-green-500
              text-lg
              font-bold
              text-white
              p-2
              rounded-lg
            "
            >({{ item.price }})</span
          >
          <img
            :alt="item.name"
            :src="require(`~/assets/images/products/${item.image}`)"
            class="h-64 w-full object-cover rounded-t-lg"
          />
          <p class="text-xl font-extrabold tracking-wide text-green-500 py-3">
            {{ item.name }}
          </p>
        </li>
      </ul>
    </div>

    <div class="text-center p-8 border border-gray-300 rounded-lg my-4">
      <h3
        class="
          text-2xl
          font-extrabold
          tracking-wide
          text-green-500
          leading-relaxed
        "
      >
        Meal Subscriptions
      </h3>
      <p class="text-xl text-gray-600 tracking-wide font-bold">
        Monday - Friday
      </p>
      <span class="text-xl text-gray-500">(Daily Delivery)</span>

      <div>
        <ul class="grid grid-cols-1 gap-4 mt-6 w-4/5 mx-auto">
          <li
            v-for="(item, index) in mealSubs"
            :key="index"
            class="
              flex
              items-center
              w-full
              justify-between
              text-left
              border-t border-b
              p-1
            "
          >
            <div>
              <strong class="text-xl tracking-wide font-bold text-green-500">{{
                item.title
              }}</strong>
              <p class="text-gray-700 text-lg">{{ item.meals }}</p>
            </div>
            <span class="text-gray-500 text-lg">
              (<strong class="text-green-500"
                >&#8369; {{ item.pricePerDay }}</strong
              >
              / day) | (<strong class="text-green-500"
                >&#8369; {{ item.pricePer5Days }}</strong
              >
              / 5 days)
            </span>
          </li>
        </ul>
      </div>
    </div>

    <hr class="my-12" />
  </container>
  <!-- end meal plans -->
</template>

<script>
export default {
  data() {
    return {
      mealPlans: [
        {
          name: 'Meal Plan',
          price: 'contact-us',
          image: 'meal-plans.jpg',
        },
        {
          name: 'Meal Plan with Detox Smoothies',
          price: 'contact-us',
          image: 'meal-plansw-detox-smoothies.jpg',
        },
      ],
      mealSubs: [
        {
          title: '3 Meals / day',
          meals: 'lunch, snack, dinner',
          pricePerDay: '500',
          pricePer5Days: '2, 500',
        },
        {
          title: '2 Meals / day',
          meals: 'lunch, dinner',
          pricePerDay: '450',
          pricePer5Days: '2, 250',
        },
        {
          title: '1 Meal / day',
          meals: '',
          pricePerDay: '300',
          pricePer5Days: '1, 500',
        },
      ],
    }
  },
}
</script>
