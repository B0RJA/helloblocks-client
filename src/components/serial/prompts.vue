<template>
  <div>
    <v-dialog
      v-model="nameDialog"
      persistent
      max-width="500px"
    >
      <v-card>
        <v-card-title class="text-h5">
          Please give a name to your device.
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                label="Device Name"
                outline
                v-model="name"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="closeName">Cancel</v-btn>
          <v-btn @click="saveName" color="primary" :disabled="!name.trim()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameDialog: false,
      noSerialDialog: false,
      accessDeniedDialog: false,
      name: '',
      value: null,
    };
  },
  methods: {
    closeName() {
      this.nameDialog = false;
      this.name = '';
      this.value = null;
    },
    async saveName() {
      if (!this.name.trim()) return;
      await this.$serial.setDeviceName(this.value, this.name);
      this.closeName();
    },
    loadSerial() {
      if (!this.$serial || !this.$serial.implementation) {
        setTimeout(() => this.loadSerial(), 100);
        return;
      }
      this.$serial.on('deviceNamePrompt', (value) => {
        this.value = value;
        this.nameDialog = true;
      });
      this.$serial.on('errorPrompt', (reason) => {
        if (reason === 'access_denied') this.accessDeniedDialog = true;
      });
      if (this.$serial.implementation === 'basic') {
        this.noSerialDialog = true;
      }
    },
  },
  mounted() {
    this.loadSerial();
  },
};
</script>
