<template>
  <div>
    <h3 class="text-center text-2xl font-extrabold text-green-500 mt-8">
      Other Menus
    </h3>
    <div class="grid grid-cols-2 gap-6 mt-6">
      <div
        v-for="([key, item], index) in Object.entries(lists)"
        :key="index"
        class="w-full px-4 border rounded-lg border-green-500 p-4"
      >
        <h5 class="text-center text-lg text-green-500 font-bold">
          {{ key }}
        </h5>
        <ul class="p-4">
          <li
            v-for="(i, idx) in item"
            :key="idx"
            class="flex items-center justify-between border-b my-2 p-1"
          >
            <p class="font-bold text-gray-700">{{ i.name }}</p>
            <p class="text-right text-gray-600">&#8369; {{ i.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: {
        Specialties: [
          { name: 'Korean Fried Chicken', price: '600' },
          { name: 'Sheperd\'s Pie (6" span)', price: '550' },
          { name: 'Chicken Pot Pie', price: '450' },
          { name: 'Pasta Primavera', price: '350' },
        ],
        'Sandwiches and Wraps': [
          { name: 'Philly Cheese Steak', price: '350' },
          { name: 'Chicken Mushroom Enchilada', price: '450' },
          { name: 'Fat Head w/ Choiced Topping', price: '550' },
        ],
        'Guiltless Indulgence': [
          { name: 'Japanese Cotton Cheesecake (9" round)', price: '1, 200' },
          { name: 'Mixed Berries Cheesecake (9" round)', price: '1, 200' },
          { name: 'Mascarpone Cake / Tiramisu', price: '700' },
          { name: 'Cream Cheese Flan', price: '650' },
          {
            name: 'Red Velvet w/ Cream Cheese Pandesal (6pcs / box)',
            price: '450',
          },
        ],
        'Dessert Feature': [
          { name: 'Polvoron (Low Carb | Cranberry / Pecan)', price: '350' },
          { name: 'Ice Cream (Wintermelon Milktea)', price: '200' },
        ],
      },
    }
  },
}
</script>
