<template>
  <container width="w-4/5">
    <div class="py-14 text-center">
      <h3 class="text-4xl font-extrabold text-green-500 leading-relaxed">
        What our amazing customers say
      </h3>
      <p class="text-lg text-gray-500">
        We are very thankful for overyone who sent feedbacks and messages to us
      </p>

      <div class="mt-8 grid grid-cols-2 gap-4">
        <div
          v-for="(feedback, index) in feedbacks"
          :key="index"
          class="
            p-4
            rounded-lg
            border border-green-300
            flex flex-col
            items-center
            justify-center
          "
        >
          <q class="text-gray-600 tracking-wide">{{ feedback.comment }}</q>
          <p class="font-bold tracking-wide text-green-500">
            - {{ feedback.author }}
          </p>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
export default {
  data() {
    return {
      feedbacks: [
        {
          comment:
            "Lovelovelove! Nice to find one around.... With the busy schedule at work, it's great to find a shop that does home food for the detox freak!!! Thank...",
          author: 'Michelinchef Tori Eres S.',
        },
        {
          comment:
            "Everything is Perfect and Healthy.. Perfectly healthy .. Will be goin' back for more.. Thanks for having us at closing time.",
          author: 'Ena De Jesus A.',
        },
        {
          comment: 'Eating is no longer sinful! Love love love! Nom nom nom!',
          author: 'Dwight Mijares L.',
        },
        {
          comment:
            'Dito ang malupit na detox! Tried "the hulk" and "ironman", ay grabe ang lupet!',
          author: ' Paul Albert G.',
        },
        {
          comment:
            'The first detox organic juice bar in baguio if not the philippines....',
          author: 'Tiam D.',
        },
        {
          comment:
            'Amazing unique and all healthful food ! Nothing beats this amazing restaurant ! Fall I n love with the food , the ambiance and the staff !',
          author: 'Solomon V.',
        },
        {
          comment:
            '... Super nakaka busog naka isa palang ako and saktong sakto, and saktong sakto, hindi nakak umay, Super sulit ang price... Kaka kain ko Lasagna, supper winner!, parang hindi low carb. Will definitely order again and try the others...',
          author: 'Customer',
        },
        {
          comment:
            '...Sarap nung spring roll. Nagustuhan ni husband yung red velvet pandesal. Super soft',
          author: 'Customer',
        },
        {
          comment:
            '... I am currently drinking the collagen milk tea. super sarap',
          author: 'Customer',
        },
        {
          comment: 'Masarap po cia (Bona Vita) at nakakablooming ng skin. Thnx',
          author: 'Customer',
        },
      ],
    }
  },
}
</script>
