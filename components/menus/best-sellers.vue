<template>
  <!-- start best sellers -->
  <div class="text-center">
    <h3 class="text-2xl font-extrabold text-green-500">Our Best Sellers</h3>
    <ul class="grid grid-cols-3 gap-10 mt-4">
      <li
        v-for="(item, index) in bestSellers"
        :key="index"
        class="relative bg-green-500 shadow rounded-lg border text-center"
      >
        <span
          class="
            absolute
            -top-2
            -left-2
            bg-gray-800
            text-lg
            font-bold
            text-green-500
            p-2
            rounded-lg
          "
          >&#8369; {{ item.price }}</span
        >
        <img
          :alt="item.name"
          :src="require(`~/assets/images/products/${item.image}`)"
          class="h-64 w-full object-cover rounded-t-lg"
        />
        <p class="text-xl font-extrabold tracking-wide text-white py-3">
          {{ item.name }}
        </p>
      </li>
    </ul>
  </div>
  <!-- end best sellers -->
</template>

<script>
export default {
  data() {
    return {
      bestSellers: [
        {
          name: 'Lasagna (6" pan)',
          price: '550',
          image: 'lasagna.jpg',
        },
        {
          name: 'Burger w/ Bacon Jam & Vodka Cream Cheese',
          price: '300',
          image: 'burgerw-bacon-vodkacream.jpg',
        },
        {
          name: 'Cinnamon Roll',
          price: '650',
          image: 'cinnamon-roll.jpg',
        },
        {
          name: 'Collagen Milk Tea',
          price: '170',
          image: 'collagen-milk-tea.jpg',
        },
        {
          name: 'Triple Chocolate Mousse Cake',
          price: '600',
          image: 'triple-choco-mousecake.jpg',
        },
      ],
    }
  },
}
</script>
