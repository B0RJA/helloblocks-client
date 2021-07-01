<template>
      <span v-on="on">
        <v-btn icon desne @click="run">
          <v-icon left>mdi-content-save</v-icon>
        </v-btn>
      </span>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    top: {
      type: Boolean,
      default: true,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentServer() {
      const { Server } = this.$FeathersVuex.api;
      return Server.findInStore({ query: { uuid: this.$store.getters.currentServer } }).data[0];
    },
    currentBoard() {
      const { Board } = this.$FeathersVuex.api;
      return Board.findInStore({ query: { uuid: this.$store.getters.currentBoard } }).data[0];
    },
    currentProject() {
      const { Project } = this.$FeathersVuex.api;
      return Project.findInStore({ query: { uuid: this.$store.getters.currentProject } }).data[0];
    },
    valid() {
      return !!(this.currentServer
        && this.currentBoard
        && this.currentProject);
    },
  },
  methods: {
    ...mapMutations(['toggleSerialShelf', 'setSerialTab']),
    run() {
      this.toggleSerialShelf(false);
      this.setSerialTab('monitor');
      setTimeout(() => {
        this.toggleSerialShelf(true);
        this.setSerialTab('program');
        this.$compiler.compile();
      }, 0);
    },
  },
};
</script>
