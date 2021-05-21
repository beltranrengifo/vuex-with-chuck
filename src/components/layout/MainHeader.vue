<template>
  <header class="main-header">
    <h1 class="main-header__title">
      Vuex
      <span class="main-header__badge">
        <img
          class="main-header__logo"
          alt="Chuck dancing"
          src="@/assets/images/norris.gif"
        />
        101
      </span>
      with Chuck
    </h1>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style lang="scss" scoped>
.main-header {
  text-align: center;
  padding-top: rem(80);

  &__logo {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__title {
    font-size: rem(48);
  }

  &__badge {
    $--badge-dimension: 88px;
    background: get-var(color-base);
    color: get-var(color-lighter-grey);
    width: $--badge-dimension;
    height: $--badge-dimension;
    display: inline-block;
    vertical-align: middle;
    line-height: $--badge-dimension;
    position: relative;
    text-shadow: 10px 10px 0px #ffffff61, 20px 20px 0px #ff010145,
      30px 30px 0px #00bdbd33;
  }
}
</style>
