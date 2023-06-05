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
        style="color: #ff5c23"
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'text-h5 font-weight-bold text-center'
            : 'text-h4 text-center ml-8'
        "
      >
        Portable Audio
      </div>
      <v-row
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'justify-center align-center d-flex flex-column'
            : 'd-flex justify-center align-center'
        "
      >
        <div v-for="form in forms_portable" :key="form.link">
          <v-hover>
            <template v-slot:default="{ hover }">
              <a :href="form.link" target="_blank" class="link-no-underline">
                <v-card
                  :class="[
                    hover ? 'hovered-card' : '',
                    $vuetify.breakpoint.smAndDown
                      ? 'my-4 mx-auto mt-2'
                      : 'mx-auto my-2 mt-2',
                  ]"
                >
                  <v-col class="justify-center">
                    <v-img
                      contain
                      cover
                      height="250px"
                      :max-width="$vuetify.breakpoint.smAndDown ? '300px' : '300px'"
                      :src="form.imgs"
                    />
                  </v-col>
                  <v-card-text
                    class="d-flex flex-column text-center font-weight-bold no-border"
                  >
                    <h2 class="text-h5 font-weight-bold" style="color: #ff5c23">
                      {{ form.Name }}
                    </h2>
                  </v-card-text>
                </v-card>
              </a>
            </template>
          </v-hover>
        </div>
        <div v-for="form in displayedForms_portable" :key="form.link">
          <v-hover>
            <template v-slot:default="{ hover }">
              <a :href="form.link" target="_blank" class="link-no-underline">
                <v-card
                  :class="[
                    hover ? 'hovered-card' : '',
                    $vuetify.breakpoint.smAndDown
                      ? 'my-4 mx-auto mt-2'
                      : 'mx-auto my-2 mt-2',
                  ]"
                >
                  <v-col class="justify-center">
                    <v-img
                      contain
                      cover
                      height="250px"
                      :max-width="$vuetify.breakpoint.smAndDown ? '300px' : '300px'"
                      :src="form.imgs"
                    />
                  </v-col>
                  <v-card-text
                    class="d-flex flex-column text-center font-weight-bold no-border"
                  >
                    <h2 class="text-h5 font-weight-bold" style="color: #ff5c23">
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
              {{ showAll_portable ? "Show Less" : "Show More" }}
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
      showAll_portable: false,
      forms: [
        {
          imgs: "/images/PortableAudio/golink.png",
          Name: "GO Link",
          link: "https://3kshop.vn/ifi-go-link/",
        },
        {
          imgs: "/images/PortableAudio/uno.jpeg",
          Name: "uno",
          link: "https://3kshop.vn/ifi-uno/",
        },
        {
          imgs: "/images/PortableAudio/gopod.jpeg",
          Name: "GO Pod",
          link: "https://3kshop.vn/ifi-go-pod/",
        },
        {
          imgs: "/images/PortableAudio/gobar.jpg",
          Name: "Go Bar",
          link: "https://3kshop.vn/ifi-go-bar/",
        },
        {
          imgs: "/images/PortableAudio/goblu.jpg",
          Name: "GO Blu",
          link: "https://3kshop.vn/ifi-go-blu/",
        },
        {
          imgs: "/images/PortableAudio/hipdac2.jpg",
          Name: "Hip DAC 2",
          link: "https://3kshop.vn/ifi-hip-dac-2/",
        },
        {
          imgs: "/images/PortableAudio/xcan.jpg",
          Name: "xCAN",
          link: "https://3kshop.vn/ifi-xcan/",
        },
        {
          imgs: "/images/PortableAudio/xdsdgry.jpg",
          Name: "xDSD Gryphon",
          link: "https://3kshop.vn/ifi-xdsd-gryphon/",
        },
        {
          imgs: "/images/PortableAudio/microidsd.jpg",
          Name: "micro iDSD Signature",
          link: "https://3kshop.vn/ifi-micro-idsd-signature/",
        },
        {
          imgs: "/images/PortableAudio/idsddiablo.jpg",
          Name: "iDSD Diablo",
          link: "https://3kshop.vn/ifi-idsd-diablo/",
        },
      ],
    };
  },
  computed: {
    forms_portable() {
      return this.forms.slice(0, 3);
    },
    displayedForms_portable() {
      return this.forms.slice(
        3,
        this.$vuetify.breakpoint.smAndDown ? this.length : this.forms.length
      );
    },
  },
  methods: {
    viewMore() {
      if (!this.showAll_portable) {
        this.length = this.forms.length;
      } else {
        this.length = 3;
      }
      this.showAll_portable = !this.showAll_portable;
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
.hovered-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
}

.hovered-card:hover::after {
  opacity: 1;
}
</style>
