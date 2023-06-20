<template>
  <div>
    <div>
      <div
        id="PortableGoTo"
        class="font-weight-bold"
        style="color: white; background-color: #ff5c23"
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'text-h5 font-weight-bold text-center py-6 py-6'
            : 'text-h4 text-center py-6'
        "
      >
        Portable Audio
      </div>
      <v-row
        style="gap: 50px"
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'justify-center align-center d-flex flex-column mt-4'
            : 'd-flex align-center justify-center mt-4 mb-16'
        "
      >
        <div v-for="form in forms_portable" :key="form.link">
          <v-hover>
            <template>
              <a :href="form.link" target="_blank" class="link-no-underline">
                <v-card
                  class="cardportable"
                  :class="
                    $vuetify.breakpoint.smAndDown ? 'my-4 mx-auto mt-2' : 'my-2 mt-2'
                  "
                >
                  <v-col class="justify-center">
                    <v-img
                      class="portableimg"
                      height="180px"
                      :max-width="$vuetify.breakpoint.smAndDown ? '250px' : '270px'"
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
        <div v-for="form in displayedForms_portable" :key="form.link">
          <v-hover>
            <template>
              <a :href="form.link" target="_blank" class="link-no-underline">
                <v-card
                  class="cardportable"
                  :class="$vuetify.breakpoint.smAndDown ? 'my-4 mt-2' : 'my-2 mt-2'"
                >
                  <v-col class="justify-center">
                    <v-img
                      class="portableimg"
                      height="180px"
                      :max-width="$vuetify.breakpoint.smAndDown ? '250px' : '270px'"
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
      length: 3,
      showAll_portable: false,
      forms: [
        {
          imgs: "/images/PortableAudio/golink-min.png",
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
          imgs: "/images/PortableAudio/goblu-min.jpg",
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
          imgs: "/images/PortableAudio/microidsd-min.jpg",
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
};
</script>

<style scoped>
.cardportable {
  overflow: hidden;
}
.link-no-underline {
  text-decoration: none;
}
.portableimg:hover {
  transform: scale(130%);
  transition: 0.5s ease-in-out;
}
.portableimg {
  transition: 0.5s ease-in-out;
}
</style>
