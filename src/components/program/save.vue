<template>
      <span>
        <v-btn icon desne @click="run">
          <v-icon center>mdi-content-save</v-icon>
        </v-btn>
      </span>
</template>

<script>
// import { mapState, mapMutations } from 'vuex';
import { mapMutations } from 'vuex';
// import BlocklyView from '../../views/Blockly.vue';

export default {
  props: {
  },
  computed: {

  },
  methods: {
    // ...mapMutations(['setBlocklySaved', 'setCurrentFile']),
    ...mapMutations(['setBlocklySaved']),
    run() {
      this.setBlocklySaved(true);

      // Show code
      // BlocklyView.showCode();

      // eslint-disable-next-line no-console
      console.log('blockly saved');
    },
  },
};
// eslint-disable-next-line no-console
// console.log(mapState(['blocklySaved']));

</script>
