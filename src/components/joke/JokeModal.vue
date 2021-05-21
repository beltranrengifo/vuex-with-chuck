<template>
  <ui-modal
    v-if="showJokeModal"
    :show="showJokeModal"
    @click:dismiss="handleJokeModal"
  >
    <div class="joke-modal">
      <h2 class="joke-modal__title">
        {{ modalContent.categories[0].toUpperCase() }}
        <img
          class="joke-modal__title-image"
          :src="modalContent.icon_url"
          alt="Chuck face"
        />
      </h2>
      <p class="joke-modal__content">
        {{ modalContent.value }}
      </p>
    </div>
  </ui-modal>
</template>

<script>
import UiModal from '@/components/ui/UiModal'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'JokeModal',

  components: {
    UiModal,
  },

  computed: {
    ...mapState({
      modalContent: ({ ui }) => ui.modalContent,
    }),

    showJokeModal() {
      return !!this.modalContent
    },
  },

  methods: {
    ...mapActions({
      handleModalContent: 'ui/handleModalContent',
    }),

    async handleJokeModal() {
      await this.handleModalContent({ content: null })
    },
  },
}
</script>

<style lang="scss" scoped>
.joke-modal {
  min-height: get-var(modal-min-height);
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    position: absolute;
    top: rem(-84);
    left: rem(-60);
    transform: rotate(-9deg);
    text-shadow: 10px 10px 0px #ffffff61, 20px 20px 0px #ff010145,
      30px 30px 0px #00bdbd33;
    background: get-var(color-lighter-grey);
    padding: 0px 40px 24px 8px;
    font-size: rem(48);
  }

  &__title-image {
    height: rem(40);
    width: rem(40);
    position: absolute;
    right: -10px;
    top: -20px;
    transform: rotate(15deg);
  }

  &__content {
    font-size: rem(32);
    font-weight: 500;
  }
}
</style>
