<template>
  <div>
    <div v-if="isLoading">
      <v-skeleton-loader :transition="transition" type="card-avatar, actions">
        <!-- Skeleton loader content -->
      </v-skeleton-loader>
    </div>
    <div v-else>
      <div
        class="font-weight-bold"
        style="color: white; background-color: #ff5c23"
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'text-h5 font-weight-bold text-center py-6'
            : 'text-h4 text-center py-6'
        "
      >
        Enhencers
      </div>
      <v-row
        style="gap: 50px"
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'justify-center align-center d-flex flex-column mt-4'
            : 'd-flex justify-center align-center mt-4'
        "
      >
        <div v-for="form in forms_enhencer" :key="form.link">
          <v-hover>
            <template>
              <a :href="form.link" target="_blank" class="link-no-underline">
                <v-card
                  class="cardenhencer"
                  :class="
                    $vuetify.breakpoint.smAndDown
                      ? 'my-4 mx-auto mt-2'
                      : 'mx-auto my-2 mt-2',
                  "
                >
                  <v-col class="justify-center">
                    <v-img
                      class="enhencerimg"
                      contain
                      cover
                      height="200px"
                      :max-width="$vuetify.breakpoint.smAndDown ? '300px' : '270px'"
                      :src="form.imgs"
                    />
                  </v-col>
                  <v-card-text
                    class="d-flex flex-column text-center font-weight-bold no-border"
                  >
                    <h2 class="text-h5 font-weight-bold">
                      {{ form.Name }}
                    </h2>
                  </v-card-text>
                </v-card>
              </a>
            </template>
          </v-hover>
        </div>
        <div v-for="form in displayedForms_enhencer" :key="form.link">
          <v-hover>
            <template>
              <a :href="form.link" target="_blank" class="link-no-underline">
                <v-card
                  class="cardenhencer"
                  :class="
                    $vuetify.breakpoint.smAndDown
                      ? 'my-4 mx-auto mt-2'
                      : 'mx-auto my-2 mt-2',
                  "
                >
                  <v-col class="justify-center">
                    <v-img
                      class="enhencerimg"
                      contain
                      cover
                      height="200px"
                      :max-width="$vuetify.breakpoint.smAndDown ? '300px' : '270px'"
                      :src="form.imgs"
                    />
                  </v-col>
                  <v-card-text
                    class="d-flex flex-column text-center font-weight-bold no-border"
                  >
                    <h2 class="text-h5 font-weight-bold">
                      {{ form.Name }}
                    </h2>
                  </v-card-text>
                </v-card>
              </a>
            </template>
          </v-hover>
        </div>
        <div v-if="$vuetify.breakpoint.smAndDown">
          <div>
            <v-btn color="primary" outlined block @click="viewMore()">
              {{ showAll_enhencer ? "Show Less" : "Show More" }}
            </v-btn>
          </div>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      length: 3,
      showAll_enhencer: false,
      forms: [
        {
          imgs: "/images/Enhencers/idefender.jpg",
          Name: "iDefender+",
          link: "https://3kshop.vn/idefender-plus/",
        },
        {
          imgs: "/images/Enhencers/isilencer.jpg",
          Name: "iSilencer+",
          link: "https://3kshop.vn/isilencer/",
        },
        {
          imgs: "/images/Enhencers/lanisilence.jpg",
          Name: "LAN iSilencer",
          link: "https://3kshop.vn/ifi-lan-isilencer/",
        },
        {
          imgs: "/images/Enhencers/ipurifier3.png",
          Name: "iPurifier 3",
          link: "https://3kshop.vn/ifi-ipurifier-3-type-b/",
        },
        {
          imgs: "/images/Enhencers/spdif.jpg",
          Name: "SPDIF iPurifier",
          link: "https://3kshop.vn/ifi-spdif-ipurifier/",
        },
      ],
    };
  },
  computed: {
    forms_enhencer() {
      return this.forms.slice(0, 3);
    },
    displayedForms_enhencer() {
      return this.forms.slice(
        3,
        this.$vuetify.breakpoint.smAndDown ? this.length : this.forms.length
      );
    },
  },
  methods: {
    viewMore() {
      if (!this.showAll_enhencer) {
        this.length = this.forms.length;
      } else {
        this.length = 3;
      }
      this.showAll_enhencer = !this.showAll_enhencer;
    },
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
};
</script>

<style scoped>
.link-no-underline {
  text-decoration: none;
}

.enhencerimg:hover {
  transform: scale(130%);
  transition: 0.5s ease-in-out;
}
.enhencerimg {
  transition: 0.5s ease-in-out;
}
.cardenhencer {
  overflow: hidden;
}
</style>
