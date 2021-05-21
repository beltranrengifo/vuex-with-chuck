<template>
  <footer class="main-footer">
    <ui-theme-switcher />
    <ui-copyright />
  </footer>
</template>

<script>
import UiCopyright from '@/components/ui/UiCopyright'
import UiThemeSwitcher from '@/components/ui/UiThemeSwitcher'
export default {
  name: 'MainFooter',

  components: {
    UiThemeSwitcher,
    UiCopyright,
  },
}
</script>

<style lang="scss" scoped>
.main-footer {
  height: rem(100);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
