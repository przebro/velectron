<template>
  <ui-card flex>
    <ui-btn text="sample button" icon="application-cog"  color="violet" />
    <ui-btn text="sample button" toolbutton icon="application-cog"  color="violet" />
  </ui-card>
</template>

<script>
// @ is an alias to /src

import UiCard from '../components/ui/card/card.vue'
import UiBtn from '../components/ui/button/button.vue'
export default {
  name: 'Home',
  components: {
    UiCard,
    UiBtn
  }
}
</script>
<style lang="scss">
@import "../sass/variables.scss";
*, *:before, *:after {
  box-sizing: border-box;
}

</style>
