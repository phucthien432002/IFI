<template>
  <v-app dark>
    <header>
      <div id="header">
        <div class="header-bar">
          <div class="logo-placeholder">
            <img class="logoimg1" src="/images/Header/iFi-logos_Simple.png" alt="" />
            <div class="dropbtn">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div class="navigation-placeholder">
            <div class="product-list">
              <h3>Products</h3>
              <div class="dropdown-menu">
                <a href="">Home audio</a>
                <a href="">Protable Audio</a>
                <a href="">Power</a>
                <a href="">Enhancers</a>
                <a href="">Cables</a>
                <a href="">Accessoris</a>
              </div>
              <!-- <div class="product-list">
                            <a href=""><h2>Home audio</h2> </a>
                            <a href=""><h2>Protable Audio</h2> </a>
                            <a href=""><h2>Power</h2></a>
                            <a href=""><h2>Enhancers</h2></a>
                            <a href=""><h2>Cables</h2></a>
                            <a href=""><h2>Accessoris</h2></a>
                    </div> -->
            </div>
            <div class="tool-box">
              <h3>Tools</h3>
              <div class="dropdown-menu">
                <a href="https://ifi-audio.com/home/compare-ifi-products/" target="_blank"
                  >Compare</a
                >
                <a href="https://ifi-audio.com/home/headphone-calculator/" target="_blank"
                  >Headphone Calculator</a
                >
                <a href="https://ifi-audio.com/home/iphono-calculator/" target="_blank"
                  >iPhono Calculator</a
                >
                <a href="https://ifi-audio.com/home/power-calculator/" target="_blank"
                  >Power Calculator</a
                >
                <a href="https://ifi-audio.com/home/led-calculator/" target="_blank"
                  >LED Calculator</a
                >
                <a href="https://ifi-audio.com/home/sound-improvement/" target="_blank"
                  >Sound Improvement</a
                >
                <a
                  href="https://ifi-audio.com/home/computer-audio-tutorial/"
                  target="_blank"
                  >Computer Audio Tutorial</a
                >
              </div>
            </div>

            <div class="support-box">
              <h3>Support</h3>
              <div class="dropdown-menu">
                <a href="https://ifi-audio.com/support/faq/" target="_blank">FAQs</a>
                <a href="https://ifi-audio.com/support/product-guides/" target="_blank"
                  >Product Guides</a
                >
                <a href="https://ifi-audio.com/support/download-hub/" target="_blank"
                  >Download Hub</a
                >
                <a
                  href="https://ifi-audio.com/support/product-registration/"
                  target="_blank"
                  >Registration</a
                >
                <a href="https://support.ifi-audio.com/" target="_blank">Support</a>
                <a href="https://ifi-audio.com/where-to-buy/" target="_blank"
                  >Where to Buy</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <slider></slider>
    <v-main>
      <!-- <v-app-bar
			elevation="60"
			elevate-on-scroll
			:color="windowScroll ? 'white' : 'black'"
			app
			flat
			clipped-left
			class="d-flex justify-center"
			height="80px"
		>
			<v-card
				width="100vw"
				height="80px"
				class="d-flex align-center justify-space-around"
				:color="windowScroll ? 'white' : 'black'"
				:elevation="windowScroll ? 9 : 0"
			>
				<nuxt-link :to="('/')" class="d-flex align-center">
					<v-img
						height="100px"
						width="160px"
						contain
						:src="(barColor === 'black' || windowScroll) ? '/logo-ploggvn-black.svg' : '/logo-ploggvn-white.svg'"
						class="px-5"
					/>
				</nuxt-link>

				<v-col class="d-md-none align-center justify-end d-flex">
					<v-icon
						:color="(barColor === 'black' || windowScroll) ? 'black' : 'black'"
						class="pa-4"
						size="32"
						@click="drawer = true"
					>
						mdi-menu
					</v-icon>
				</v-col>

				<div class="d-none align-center justify-space-around d-md-flex">
					<v-hover v-for="(list, index) in lists" :key="index" v-slot="{ hover }">
						<v-btn
							:ripple="false"
							text
							plain
							:href="list.link"
							:to="(list.link)"
							:color="hover ? 'cyan lighten-10' : (barColor === 'black' || windowScroll) ? 'black' : 'black'"
							class="no-transition"
						>
							<div class="h7 font-weight-bold text-none">
								{{ list.title }}
							</div>
						</v-btn>
					</v-hover>
				</div>

				<div class="d-md-flex d-none justify-center align-center">
					<kq-button-locale :color="(barColor === 'black' || windowScroll) ? 'black' : 'black'" />
				</div>
			</v-card>
		</v-app-bar> -->
      <Nuxt />
    </v-main>
    <v-footer> </v-footer>
  </v-app>
</template>

<script>
import slider from "../components/slider.vue";
export default {
  components: { slider },
  name: "DefaultLayout",
};
</script>
<style>
#header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.header-bar {
  width: 100vw;
  display: flex;
  background-color: rgba(255, 255, 255);
}

.logo-placeholder {
  margin-left: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.logo-placeholder img {
  object-fit: cover;
}

.navigation-placeholder {
  margin-right: 24px;
  width: 90%;
  display: flex;
  align-items: center;
  color: #ff5c23;
  justify-content: right;
  gap: 50px;
}

.navigation-placeholder .product-list,
.navigation-placeholder .tool-box,
.navigation-placeholder .support-box {
  position: relative;
  cursor: pointer;
}
/* .navigation-placeholder .product-list{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
}
.navigation-placeholder .product-list a{
    color: #ff5c23;
    text-decoration: none;
} */

.navigation-placeholder .dropdown-menu {
  display: flex;
  flex-direction: column;
  visibility: hidden;
  position: absolute;
  min-width: 240px;
  left: -94px;
  padding: 10px;
  font-size: 20px;
  gap: 10px;
  background: white;
  border-radius: 0 0 15px 15px;
  opacity: 0;
  transition: 0.5s;
  padding-top: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.navigation-placeholder .dropdown-menu a {
  text-decoration: none;
  color: black;
  border-radius: 10px;
  padding-left: 10px;
  gap: 5px;
  display: flex;
  align-items: center;
}

.navigation-placeholder .dropdown-menu a:hover {
  background-color: #ff5c23;
  color: white;
}

.navigation-placeholder .product-list .dropdown-menu {
  left: -25px;
}

.navigation-placeholder .support-box .dropdown-menu {
  left: -150px;
}

.navigation-placeholder .product-list:hover .dropdown-menu,
.navigation-placeholder .tool-box:hover .dropdown-menu,
.navigation-placeholder .support-box:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
}

.navigation-placeholder .account a {
  text-decoration: none;
  color: #ff5c23;
}
/* .navigation-placeholder .product-list{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
}
.navigation-placeholder .product-list a{
    color: #ff5c23;
    text-decoration: none;
} */

.navigation-placeholder .dropdown-menu {
  display: flex;
  flex-direction: column;
  visibility: hidden;
  position: absolute;
  min-width: 240px;
  left: -94px;
  padding: 10px;
  font-size: 20px;
  gap: 10px;
  background: white;
  border-radius: 0 0 15px 15px;
  opacity: 0;
  transition: 0.5s;
  padding-top: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.navigation-placeholder .dropdown-menu a {
  text-decoration: none;
  color: black;
  border-radius: 10px;
  padding-left: 10px;
  gap: 5px;
  display: flex;
  align-items: center;
}

.navigation-placeholder .dropdown-menu a:hover {
  background-color: #ff5c23;
  color: white;
}

.navigation-placeholder .product-list .dropdown-menu {
  left: -25px;
}

.navigation-placeholder .support-box .dropdown-menu {
  left: -150px;
}

.navigation-placeholder .product-list:hover .dropdown-menu,
.navigation-placeholder .tool-box:hover .dropdown-menu,
.navigation-placeholder .support-box:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
}

.navigation-placeholder .account a {
  text-decoration: none;
  color: #ff5c23;
}
</style>
