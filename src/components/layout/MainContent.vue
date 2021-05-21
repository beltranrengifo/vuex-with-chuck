<template>
  <main class="main-content">
    <ui-grid :items="categories || []" @click:item="handleItemClick" />
    <joke-modal />
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UiGrid from '@/components/ui/UiGrid'
import JokeModal from '@/components/joke/JokeModal'

export default {
  name: 'MainContent',

  components: {
    UiGrid,
    JokeModal,
  },

  computed: {
    ...mapState({
      categories: ({ joke }) => joke.categories,
      currentJoke: ({ joke }) => joke.currentJoke,
    }),
  },

  methods: {
    ...mapActions({
      getJokeByCategory: 'joke/getJokeByCategory',
      handleModalContent: 'ui/handleModalContent',
    }),

    async handleItemClick({ item: category }) {
      await this.getJokeByCategory({ category })
      await this.handleModalContent({ content: this.currentJoke })
    },
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  min-height: calc(100vh - 288px);
}
</style>
