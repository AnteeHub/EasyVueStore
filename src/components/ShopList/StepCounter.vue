<template>
  <v-btn-toggle rounded dense>
    <v-btn icon>
      <v-icon>remove</v-icon>
    </v-btn>
    <v-btn text disabled style="padding:0;margin:0;">
      <span style="color:black">{{ counter }}</span>
    </v-btn>
    <v-btn icon>
      <v-icon>add</v-icon>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: "StepCounter",
  data() {
    return {
      counter: 5
    };
  },
  methods: {}
};
</script>
