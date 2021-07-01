<template>
  <div>
    <div class="blocklyDiv" ref="blocklyDiv">
    </div>
    <div ref="blocklyToolbox" style="display:none">
    </div>
  </div>
</template>

<script>
// import { mapMutations, mapGetters, mapState } from 'vuex';
import Blockly from 'blockly';
import './blocklyapi';

export default {
  name: 'BlocklyComponent',
  props: ['options'],
  data() {
    return {
      workspace: null,
    };
  },
  mounted() {
    const options = this.$props.options || {};
    if (!options.toolbox) {
      options.toolbox = this.$refs.blocklyToolbox;
    }
    this.workspace = Blockly.inject(this.$refs.blocklyDiv, options);
  },
  computed: {
    // ...mapGetters(['currentBlocklySaved']),
    // ...mapState(['blocklySaved']),
  },

  methods: {
    // ...mapMutations(['currentBlocklySaved']),
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
