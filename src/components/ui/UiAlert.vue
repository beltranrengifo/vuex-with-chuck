<template>
  <section class="ui-alert" :class="{ 'ui-alert--error': type === 'error' }">
    <div class="ui-alert__inner">
      {{ text }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'UiAlert',

  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value) =>
        ['info', 'success', 'warning', 'error'].includes(value),
    },
    text: {
      type: [String, Error],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-alert {
  $--self: &;

  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: rem(600);
  max-width: 100%;
  margin: rem(16) auto;
  border-radius: rem(4);

  &__inner {
    padding: rem(16) rem(8);
  }

  &--error {
    border-color: get-var(color-red-500);
    #{$--self}__inner {
      color: get-var(color-red-500);
    }
  }
}
</style>
