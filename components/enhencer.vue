<template>
  <div>
    <div v-if="isLoading">
      <v-skeleton-loader :transition="transition" type="card-avatar, actions">
        <!-- Skeleton loader content -->
      </v-skeleton-loader>
    </div>
    <div v-else>
      <div
        data-aos="zoom-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        class="font-weight-bold"
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'text-h5 text-center'
            : 'text-h4 text-center ml-8'
        "
      >
        Enhencers
      </div>
      <v-row
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'justify-center align-center d-flex flex-column'
            : 'd-flex justify-center align-center'
        "
      >
        <template v-for="(form, index) in forms">
          <v-hover :key="index">
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
                      :max-width="$vuetify.breakpoint.smAndDown ? '290px' : '300px'"
                      :src="form.imgs"
                    />
                  </v-col>
                  <v-card-text class="d-flex flex-column text-center font-weight-bold">
                    <h2 class="text-h5 black--text">
                      {{ form.Name }}
                    </h2>
                  </v-card-text>
                </v-card>
              </a>
            </template>
          </v-hover>
        </template>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
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
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
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
