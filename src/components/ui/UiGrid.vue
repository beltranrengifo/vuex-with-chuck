<template>
  <section class="ui-grid">
    <article
      v-for="item in items"
      :key="item"
      class="ui-grid__item"
      @click="handleClick(item)"
    >
      <h2 class="ui-grid__item-title">{{ item.toUpperCase() }}</h2>
    </article>
  </section>
</template>

<script>
export default {
  name: 'UiGrid',

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handleClick(item) {
      this.$emit('click:item', { item })
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-grid {
  $--self: &;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: rem(16);
  grid-auto-rows: minmax(rem(144), auto);
  margin: rem(32) auto;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    background: get-var(color-base);
    color: get-var(color-lighter-grey);
    cursor: pointer;
    transition: 0.2s all ease-out;

    &:hover {
      background: get-var(color-lighter-grey);
      color: get-var(color-base);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

      #{$--self}__item-title {
        text-shadow: -10px 10px 0px #00000061, -20px 20px 0px #ff010145,
          -30px 30px 0px #00bdbd33;
      }
    }
  }

  &__item-title {
    font-weight: 700;
    letter-spacing: rem(2);
    font-size: rem(24);
    text-shadow: 10px 10px 0px #ffffff61, 20px 20px 0px #ff010145,
      30px 30px 0px #00bdbd33;
  }
}
</style>
