<template>
  <v-tabs v-model="activeTab" class="responsive-tabs">
    <v-tab v-for="(tab, index) in tabs" :key="index">
      {{ tab.title }}
    </v-tab>
    <v-tab-item v-for="(tab, index) in tabs" :key="index">
      <v-card class="no-border">
        <v-card-text>
          <!-- Content for each tab -->
          <slot :name="tab.slotName"></slot>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
    };
  },
  props: ["tabs"],
};
</script>

<style scoped>
/* Add custom styles for the Tab UI component */

@media (max-width: 600px) {
  .responsive-tabs {
    justify-content: center;
    align-items: center;
    border: none !important;
  }

  .v-tab {
    flex-basis: 100%;
    text-align: center;
    margin-bottom: 8px; /* Add spacing between tab items */
    border: none !important;
  }
}
</style>
