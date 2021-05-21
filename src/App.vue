<template>
  <div id="app">
    <ui-alert v-if="!!error" type="error" :text="error" />
    <main-header />
    <main-content />
    <main-footer />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MainHeader from '@/components/layout/MainHeader'
import MainContent from '@/components/layout/MainContent'
import MainFooter from '@/components/layout/MainFooter'
import UiAlert from '@/components/ui/UiAlert'

export default {
  name: 'App',

  components: {
    MainHeader,
    MainContent,
    MainFooter,
    UiAlert,
  },

  computed: {
    ...mapState({
      error: ({ joke }) => joke.error,
    }),
  },

  async created() {
    await this.handleApiError(null)

    try {
      await this.getJokesCategories()
    } catch (e) {
      await this.handleApiError(e)
    }
  },

  methods: {
    ...mapActions({
      getJokesCategories: 'joke/getJokesCategories',
      handleApiError: 'joke/handleApiError',
    }),
  },
}
</script>
