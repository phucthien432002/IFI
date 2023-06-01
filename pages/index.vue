<template>
  <div>
    <div v-if="isLoading">
      <v-skeleton-loader :transition="transition" type="card-avatar, actions">
        <!-- Skeleton loader content -->
      </v-skeleton-loader>
    </div>
    <div v-else>
      <v-sheet class="pb-4 pt-10" color="white">
        <div
          data-aos="zoom-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="300"
          class="font-weight-bold"
          style="color: #ff5c23"
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-h5 font-weight-bold text-center'
              : 'text-h4 text-center ml-8'
          "
        >
          Home Audio
        </div>
        <homeaudio :tabs="tabs" class="mt-2">
          <template v-slot:tab1>
            <!-- Content for Tab 1 -->
            <v-row
              :class="
                $vuetify.breakpoint.smAndDown
                  ? 'justify-center align-center d-flex flex-column'
                  : 'd-flex justify-center align-center'
              "
            >
              <template v-for="(form, index) in forms">
                <v-hover :key="index" class="">
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
              </template>
            </v-row>
          </template>
          <template v-slot:tab2>
            <!-- Content for Tab 2 -->
            <v-row
              :class="
                $vuetify.breakpoint.smAndDown
                  ? 'justify-center align-center d-flex flex-column'
                  : 'd-flex justify-center align-center'
              "
            >
              <template v-for="(form, index) in forms2">
                <v-hover :key="index" class="">
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
              </template>
            </v-row>
          </template>
          <template v-slot:tab3>
            <!-- Content for Tab 2 -->
            <v-row
              :class="
                $vuetify.breakpoint.smAndDown
                  ? 'justify-center align-center d-flex flex-column'
                  : 'd-flex justify-center align-center'
              "
            >
              <template v-for="(form, index) in forms3">
                <v-hover :key="index" class="">
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
              </template>
            </v-row>
          </template>
          <template v-slot:tab4>
            <!-- Content for Tab 2 -->
            <v-row
              :class="
                $vuetify.breakpoint.smAndDown
                  ? 'justify-center align-center d-flex flex-column'
                  : 'd-flex justify-center align-center'
              "
            >
              <template v-for="(form, index) in forms4">
                <v-hover :key="index" class="">
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
              </template>
            </v-row>
          </template>
          <template v-slot:tab5>
            <!-- Content for Tab 2 -->
            <v-row
              :class="
                $vuetify.breakpoint.smAndDown
                  ? 'justify-center align-center d-flex flex-column'
                  : 'd-flex justify-center align-center'
              "
            >
              <template v-for="(form, index) in forms5">
                <v-hover :key="index" class="">
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
              </template>
            </v-row>
          </template>
          <!-- Add more slot templates for additional tabs -->
        </homeaudio>
      </v-sheet>
    </div>
    <portableaudio></portableaudio>
    <div
      data-aos="zoom-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos-delay="300"
      class="font-weight-bold pt-10"
      style="color: #ff5c23"
      :class="
        $vuetify.breakpoint.smAndDown
          ? 'text-h5 font-weight-bold text-center'
          : 'text-h4 text-center ml-8'
      "
    >
      Power
    </div>
    <homeaudio :tabs="tabs1" class="mt-2">
      <template v-slot:tab1>
        <!-- Content for Tab 1 -->
        <v-row
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'justify-center align-center d-flex flex-column'
              : 'd-flex justify-center align-center'
          "
        >
          <template v-for="(form, index) in forms6">
            <v-hover :key="index" class="">
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
          </template>
        </v-row>
      </template>
      <template v-slot:tab2>
        <!-- Content for Tab 2 -->
        <v-row
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'justify-center align-center d-flex flex-column'
              : 'd-flex justify-center align-center'
          "
        >
          <template v-for="(form, index) in forms7">
            <v-hover :key="index" class="">
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
          </template>
        </v-row>
      </template>
    </homeaudio>
    <enhencer></enhencer>
    <div>
      <div v-if="isLoading">
        <v-skeleton-loader :transition="transition" type="card-avatar, actions">
          <!-- Skeleton loader content -->
        </v-skeleton-loader>
      </div>
      <div v-else>
        <v-sheet class="pb-4 pt-10" color="white">
          <div
            data-aos="zoom-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="300"
            class="font-weight-bold"
            style="color: #ff5c23"
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'text-h5 font-weight-bold text-center'
                : 'text-h4 text-center ml-8'
            "
          >
            Cables
          </div>
          <homeaudio :tabs="tabs2" class="mt-2">
            <template v-slot:tab1>
              <!-- Content for Tab 1 -->
              <v-row
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'justify-center align-center d-flex flex-column'
                    : 'd-flex justify-center align-center'
                "
              >
                <template v-for="(form, index) in forms8">
                  <v-hover :key="index" class="">
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
                              :max-width="
                                $vuetify.breakpoint.smAndDown ? '290px' : '300px'
                              "
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
                </template>
              </v-row>
            </template>
            <template v-slot:tab2>
              <!-- Content for Tab 2 -->
              <v-row
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'justify-center align-center d-flex flex-column'
                    : 'd-flex justify-center align-center'
                "
              >
                <template v-for="(form, index) in forms9">
                  <v-hover :key="index" class="">
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
                              :max-width="
                                $vuetify.breakpoint.smAndDown ? '290px' : '300px'
                              "
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
                </template>
              </v-row>
            </template>
            <template v-slot:tab3>
              <!-- Content for Tab 2 -->
              <v-row
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'justify-center align-center d-flex flex-column'
                    : 'd-flex justify-center align-center'
                "
              >
                <template v-for="(form, index) in forms10">
                  <v-hover :key="index" class="">
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
                              :max-width="
                                $vuetify.breakpoint.smAndDown ? '290px' : '300px'
                              "
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
                </template>
              </v-row>
            </template>
            <template v-slot:tab4>
              <!-- Content for Tab 2 -->
              <v-row
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'justify-center align-center d-flex flex-column'
                    : 'd-flex justify-center align-center'
                "
              >
                <template v-for="(form, index) in forms11">
                  <v-hover :key="index" class="">
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
                              :max-width="
                                $vuetify.breakpoint.smAndDown ? '290px' : '300px'
                              "
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
                </template>
              </v-row>
            </template>
          </homeaudio>
        </v-sheet>
      </div>
    </div>
    <accessories></accessories>
  </div>
</template>

<script>
import Accessories from "../components/accessories.vue";
import Enhencer from "../components/enhencer.vue";
import homeaudio from "../components/homeaudio.vue";
import portableaudio from "../components/portableaudio.vue";

export default {
  components: {
    homeaudio,
    portableaudio,
    Enhencer,
    Accessories,
  },
  data() {
    return {
      isLoading: false,
      tabs: [
        { title: "DACs", slotName: "tab1" },
        { title: "DAC/Amps", slotName: "tab2" },
        { title: "Amps", slotName: "tab3" },
        { title: "Streamers", slotName: "tab4" },
        { title: "Systems", slotName: "tab5" },
        // Add more tab objects as needed
      ],
      tabs1: [
        { title: "DC Output", slotName: "tab1" },
        { title: "Mains Output", slotName: "tab2" },
        // Add more tab objects as needed
      ],
      tabs2: [
        { title: "Audio", slotName: "tab1" },
        { title: "Digital", slotName: "tab2" },
        { title: "Power", slotName: "tab3" },
        { title: "Adapters", slotName: "tab4" },
        // Add more tab objects as needed
      ],
      forms: [
        {
          imgs: "/images/DACs/uno.jpg",
          Name: "uno",
          link: "https://3kshop.vn/ifi-uno/",
        },
        {
          imgs: "/images/DACs/zenairdac.png",
          Name: "Zen Air DAC",
          link: "https://3kshop.vn/ifi-zen-air-dac/",
        },
        {
          imgs: "/images/DACs/zenairblue.png",
          Name: "Zen Air Blue",
          link: "https://3kshop.vn/ifi-zen-air-blue/",
        },
        {
          imgs: "/images/DACs/zendacv2.png",
          Name: "Zen DAC V2",
          link: "https://3kshop.vn/ifi-zen-dac-v2/",
        },
        {
          imgs: "/images/DACs/zenbluev2.jpg",
          Name: "Zen Blue V2",
          link: "https://3kshop.vn/ifi-zen-blue-v2/",
        },
        {
          imgs: "/images/DACs/zendacsigv2.jpg",
          Name: "Zen DAC Signature V2",
          link: "https://3kshop.vn/zen-dac-signature-v2/",
        },
        {
          imgs: "/images/DACs/zenonesig.jpg",
          Name: "Zen One Signature",
          link: "https://3kshop.vn/ifi-zen-one-signature/",
        },
      ],
      forms2: [
        {
          imgs: "/images/DAC-Amps/uno.jpg",
          Name: "uno",
          link: "https://3kshop.vn/ifi-uno/",
        },
        {
          imgs: "/images/DAC-Amps/microidsd.jpg",
          Name: "micro iDSD Signature",
          link: "https://3kshop.vn/ifi-micro-idsd-signature/",
        },
        {
          imgs: "/images/DAC-Amps/idsddiablo.jpg",
          Name: "iDSD Diablo",
          link: "https://3kshop.vn/ifi-idsd-diablo/",
        },
        {
          imgs: "/images/DAC-Amps/neoidsdper.png",
          Name: "NEO iDSD (Performance Edition)",
          link: "https://3kshop.vn/ifi-neo-idsd-performance-edition/",
        },
        {
          imgs: "/images/DAC-Amps/proidsdsig.jpg",
          Name: "Pro iDSD Signature",
          link: "https://3kshop.vn/ifi-pro-idsd-signature/",
        },
      ],
      forms3: [
        {
          imgs: "/images/Amps/zenaircan.jpg",
          Name: "Zen Air CAN",
          link: "https://3kshop.vn/ifi-zen-air-can/",
        },
        {
          imgs: "/images/Amps/zenairphono.jpg",
          Name: "Zen Air Phono",
          link: "https://3kshop.vn/ifi-zen-air-phono/",
        },
        {
          imgs: "/images/Amps/zencan.jpg",
          Name: "Zen CAN",
          link: "https://3kshop.vn/ifi-zen-can/",
        },
        {
          imgs: "/images/Amps/zenphono.jpg",
          Name: "Zen Phono",
          link: "https://3kshop.vn/ifi-zen-phono/",
        },
        {
          imgs: "/images/Amps/zencansig6xx.jpg",
          Name: "Zen CAN Signature 6XX",
          link: "https://3kshop.vn/ifi-zen-can-signature-6xx/",
        },
        {
          imgs: "/images/Amps/zencansighfm.jpg",
          Name: "Zen CAN Signature HFM",
          link: "https://3kshop.vn/zen-can-signature-hfm/",
        },
        {
          imgs: "/images/Amps/zenphono.jpg",
          Name: "Zen Phono",
          link: "https://3kshop.vn/ifi-zen-phono/",
        },
        {
          imgs: "/images/Amps/microiphono3.jpg",
          Name: "Micro iPhono 3 Black Label",
          link: "https://3kshop.vn/ifi-micro-iphono3-bl/",
        },
        {
          imgs: "/images/Amps/proicansig.jpg",
          Name: "Pro iCAN Signature",
          link: "https://3kshop.vn/ifi-pro-ican-signature/",
        },
      ],
      forms4: [
        {
          imgs: "/images/Streams/zenstream.png",
          Name: "Zen Stream",
          link: "https://3kshop.vn/ifi-zen-stream/",
        },
        {
          imgs: "/images/Streams/neostream.jpg",
          Name: "Neo Stream",
          link: "hhttps://3kshop.vn/ifi-neo-stream/",
        },
      ],
      forms5: [
        {
          imgs: "/images/Systems/aurora.jpg",
          Name: "Aurora",
          link: "https://3kshop.vn/ifi-aurora/",
        },
      ],
      forms6: [
        {
          imgs: "/images/DCoutput/ipower2.jpg",
          Name: "iPower2",
          link: "https://3kshop.vn/ifi-ipower-2/",
        },
        {
          imgs: "/images/DCoutput/ipowerx.jpg",
          Name: "iPowerX",
          link: "https://3kshop.vn/ifi-ipower-x/",
        },
        {
          imgs: "/images/DCoutput/dcipuri.png",
          Name: "DC iPurifier 2",
          link: "https://3kshop.vn/ifi-dc-ipurifier-2/",
        },
        {
          imgs: "/images/DCoutput/ipowerelite.jpg",
          Name: "iPower Elite",
          link: "https://3kshop.vn/ifi-ipower-elite/",
        },
      ],
      forms7: [
        {
          imgs: "/images/Mainsoutput/dcblocker.jpeg",
          Name: "DC Blocker",
          link: "https://3kshop.vn/ifi-dc-blocker/",
        },
        {
          imgs: "/images/Mainsoutput/gnddefender.jpeg",
          Name: "GND Defender",
          link: "https://3kshop.vn/ifi-gnd-defender/",
        },
        {
          imgs: "/images/Mainsoutput/acipuri.jpg",
          Name: "AC iPurifier",
          link: "https://3kshop.vn/ifi-ac-ipurifier/",
        },
        {
          imgs: "/images/Mainsoutput/powerstation.jpg",
          Name: "Power Station",
          link: "https://3kshop.vn/ifi-power-station/",
        },
        {
          imgs: "/images/Mainsoutput/aurora.jpg",
          Name: "DC Blocker",
          link: "https://3kshop.vn/ifi-dc-blocker/",
        },
      ],
      forms8: [
        {
          imgs: "/images/Cable/4.4mmtoxlr.jpg",
          Name: "4.4mm to XLR cable",
          link: "https://3kshop.vn/ifi-4-4mm-to-xlr/",
        },
      ],
      forms9: [
        {
          imgs: "/images/Cable/90degree.jpg",
          Name: "90 Type-C OTG Cable",
          link: "https://3kshop.vn/ifi-90-type-c-otg-cable/",
        },
        {
          imgs: "/images/Cable/otgcable.png",
          Name: "Type C OTG cable",
          link: "https://3kshop.vn/ifi-type-c-otg/",
        },
        {
          imgs: "/images/Cable/gemini3.0.jpg",
          Name: "Gemini 3.0",
          link: "https://3kshop.vn/ifi-gemini-3-0/",
        },
        {
          imgs: "/images/Cable/mecury3.0.jpg",
          Name: "Mecury 3.0",
          link: "https://3kshop.vn/ifi-mercury-3-0/",
        },
      ],
      forms10: [
        {
          imgs: "/images/Cable/groundhog.jpg",
          Name: "Groundhog+",
          link: "https://3kshop.vn/ifi-groundhog/",
        },
        {
          imgs: "/images/Cable/nova.jpeg",
          Name: "Nova",
          link: "https://3kshop.vn/ifi-nova/",
        },
        {
          imgs: "/images/Cable/supanova.jpg",
          Name: "SupaNova",
          link: "https://3kshop.vn/ifi-supanova/",
        },
      ],
      forms11: [
        {
          imgs: "/images/Mainsoutput/dcblocker.jpeg",
          Name: "DC Blocker",
          link: "https://3kshop.vn/ifi-dc-blocker/",
        },
        {
          imgs: "/images/Mainsoutput/gnddefender.jpeg",
          Name: "GND Defender",
          link: "https://3kshop.vn/ifi-gnd-defender/",
        },
        {
          imgs: "/images/Mainsoutput/acipuri.jpg",
          Name: "AC iPurifier",
          link: "https://3kshop.vn/ifi-ac-ipurifier/",
        },
        {
          imgs: "/images/Mainsoutput/powerstation.jpg",
          Name: "Power Station",
          link: "https://3kshop.vn/ifi-power-station/",
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
  background-image: linear-gradient(rgba(177, 177, 177, 0.63), rgb(255, 92, 35));
  filter: opacity(0.4);
  transition: opacity 0.3s;
}

.hovered-card:hover::after {
  opacity: 1;
}
</style>
