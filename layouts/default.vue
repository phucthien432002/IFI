<template>
  <v-app dark>
    <header>
      <div id="header">
        <div class="header-bar">
          <div class="logo-placeholder">
            <img
              class="logoimg1"
              src="../static/images/logo/iFi-logos_Simple.png"
              alt=""
            />
            <div class="dropbtn">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div class="navigation-placeholder">
            <div class="product-list">
              <h3>Products</h3>
              <div class="dropdown-menu">
                <a @click="scrollTo('HomeAudioGoTo')">Home audio</a>
                <a @click="scrollTo('PortableGoTo')">Protable Audio</a>
                <a @click="scrollTo('PowerGoTo')">Power</a>
                <a @click="scrollTo('EnhencersGoTo')">Enhancers</a>
                <a @click="scrollTo('CablesGoTo')">Cables</a>
                <a @click="scrollTo('AccessoriesGoTo')">Accessories</a>
              </div>
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
    <div class="main1">
      <div id="slider">
        <div class="list">
          <div class="item active">
            <div class="img-placeholder" style="position: relative">
              <div class="slogan-placeholder">
                <h1>Welcome to iFi audio</h1>
                <span
                  >We passionately believe that everyone deserves the best when it comes
                  to sound. Our products are made to high technological standards to give
                  you an authentic, passionate and empowering music experience. Hear it.
                  Feel it.</span
                >
                <a class="take-tour-button" @click="scrollTo('HomeAudioGoTo')"
                  >Take a tour</a
                >
              </div>
              <img src="../static/images/Header/ifi-sig (2).png" alt="" />
            </div>
          </div>
          <a class="item" href="https://3kshop.vn/ifi-lan-isilencer/" target="_blank">
            <div class="product-info new">
              <h1>LAN iSilencer</h1>
              <h2>Your network. Silenced.</h2>
              <span>No more distorted audio signal</span>
            </div>
            <img src="../static/images/Header/DSCF5033.jpg" alt="" />
          </a>
          <a class="item" href="https://3kshop.vn/ifi-go-bar/" target="_blank">
            <div class="product-info">
              <h1>GO bar</h1>
              <h2>Best bar none.</h2>
              <span
                >Premium USB DAC. World's most powerful headphone amp of its size</span
              >
            </div>
            <img src="../static/images/Header/go-bar-hero.jpg" alt="" />
          </a>
          <a class="item" href="https://3kshop.vn/ifi-go-link/" target="_blank">
            <div class="product-info new">
              <h1>GO link</h1>
              <h2>The headphone dongle linking you with your music</h2>
              <span>Superior sound with a twist</span>
            </div>
            <img src="../static/images/Header/GO-link-1.jpg" alt="" />
          </a>
          <a class="item" href="https://3kshop.vn/ifi-go-pod/" target="_blank">
            <div class="product-info new">
              <h1>GO pod</h1>
              <h2>World-class. Wireless</h2>
              <span>Wearable HD Bluetooth DAC and headphone amp</span>
            </div>
            <img src="../static/images/Header/go-pod-hero.jpg" alt="" />
          </a>
          <a
            class="item"
            href="https://3kshop.vn/ifi-gioi-thieu-zen-dac-signature-va-zen-can-signature-phien-ban-dac-biet/"
            target="_blank"
          >
            <div class="product-info sale">
              <h1>ZEN CAN Signature Set MZ99 & Meze 99 Classics</h1>
              <h2>Limited Time Offer - Save up to 25%</h2>
            </div>
            <img src="../static/images/Header/mz99-meze-set.jpg" alt="" />
          </a>
          <a class="item" href="https://3kshop.vn/ifi-neo-stream/" target="_blank">
            <div class="product-info">
              <h1>NEO Stream</h1>
              <h2>Network audio streamer</h2>
              <span>Built by passionate enthusiasts, for passionate enthusiasts</span>
            </div>
            <img src="../static/images/Header/neos1.jpg" alt="" />
          </a>
          <a class="item" href="https://3kshop.vn/ifi-uno/" target="_blank">
            <div class="product-info new">
              <h1>uno</h1>
              <h2>The new sonic supercharger from iFi</h2>
              <span>Bigger. Bolder. Better Sound.</span>
            </div>
            <img src="../static/images/Header/uno-hero.jpg" alt="" />
          </a>
          <a class="item" href="https://3kshop.vn/ifi-xdsd-gryphon/" target="_blank">
            <div class="product-info">
              <h1>xDSD Gryphon</h1>
              <h2>A hi-fi system in your pocket</h2>
              <span>Premium HD DAC + Powerful Balanced headamp</span>
            </div>
            <img src="../static/images/Header/xdsd-g-hero.jpg" alt="" />
          </a>
          <a class="item" href="https://3kshop.vn/ifi-zen-air-blue/" target="_blank">
            <div class="product-info">
              <h1>ZEN Air Blue</h1>
              <h2>Let the Air in.</h2>
              <span
                >Enjoy unbeatable HD Bluetooth streaming from your phone, tablet or
                computer.</span
              >
            </div>
            <img src="../static/images/Header/zab.jpg" alt="" />
          </a>
          <a
            class="item"
            href="https://3kshop.vn/ifi-ican-phantom-headphone-amplifier-doc-dao-gia-3-700/"
            target="_blank"
          >
            <div class="product-info new">
              <h1>iCAN Phantom</h1>
              <h2>Vanish into the music</h2>
              <span
                >NEW reference-class analogue headphone amp with incorporated
                electrostatic energiser with advanced user interface and network-connected
                control system</span
              >
            </div>
            <img src="../static/images/Header/iFi-Phantom_0136.jpg" alt="" />
          </a>
        </div>
        <div class="button-placeholder">
          <button id="prev">&lt;</button>
          <button id="next">></button>
        </div>
        <ul class="dots">
          <li class="active"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="product"></div>
    </div>
    <v-main>
      <Nuxt />
    </v-main>
    <footer>
      <div id="footer">
        <div class="grid-container">
          <div class="item-footer">
            <h1>About iFi</h1>
            <ul>
              <li>
                <a href="https://ifi-audio.com/about-" target="_blank"> About iFi</a>
              </li>
              <li>
                <a href="https://ifi-audio.com/home/ifi-blog/" target="_blank"> Blog</a>
              </li>
              <li>
                <a href="https://ifi-audio.com/careers/" target="_blank"> Careers</a>
              </li>
              <li>
                <a href="https://ifi-audio.com/about-partners/" target="_blank">
                  Meet Our Partners</a
                >
              </li>
            </ul>
          </div>
          <div class="item-footer">
            <h1>Products</h1>
            <ul>
              <li>
                <a href="https://ifi-audio.com/home/legacy-products/" target="_blank">
                  Legacy Products</a
                >
              </li>
              <li>
                <a href="https://ifi-audio.com/home/refurbished-store/" target="_blank">
                  Refurbished Store</a
                >
              </li>
              <li>
                <a href="https://ifi-audio.com/about-retail/" target="_blank"> Retail</a>
              </li>
              <li>
                <a href="https://ifi-audio.com/about-student-discount/" target="_blank">
                  Student Discount</a
                >
              </li>
            </ul>
          </div>
          <div class="item-footer">
            <h1>Legal</h1>
            <ul>
              <li>
                <a href="https://ifi-audio.com/cookies/" target="_blank"> Cookies</a>
              </li>
              <li>
                <a href="https://ifi-audio.com/about-privacy/" target="_blank">
                  Privacy</a
                >
              </li>
              <li>
                <a href="https://ifi-audio.com/sales-and-returns/" target="_blank">
                  Sales and Returns</a
                >
              </li>
              <li>
                <a href="https://ifi-audio.com/sustainability-policy/" target="_blank">
                  Sustainability Policy</a
                >
              </li>
              <li>
                <a href="https://ifi-audio.com/terms-and-conditions/" target="_blank">
                  Terms and Conditions</a
                >
              </li>
              <li>
                <a href="https://ifi-audio.com/about-warranty/" target="_blank">
                  Warranty</a
                >
              </li>
            </ul>
          </div>
          <div class="item-footer">
            <h1>Social Media</h1>
            <ul>
              <li>
                <a href="https://www.facebook.com/iFiaudio/" target="_blank"
                  ><i class="fa-brands fa-facebook"></i> Facebook</a
                >
              </li>
              <li>
                <a href="https://www.instagram.com/ifiaudio/" target="_blank"
                  ><i class="fa-brands fa-instagram"></i> Instagram</a
                >
              </li>
              <li>
                <a href="https://www.linkedin.com/company/amr-ifi-audio/" target="_blank"
                  ><i class="fa-brands fa-linkedin"></i> Linkedin</a
                >
              </li>
              <li>
                <a href="https://www.tiktok.com/@official_ifiaudio" target="_blank"
                  ><i class="fa-brands fa-tiktok"></i> Tiktok</a
                >
              </li>
              <li>
                <a href="https://twitter.com/ifiaudio" target="_blank"
                  ><i class="fa-brands fa-twitter"></i> Twitter</a
                >
              </li>
              <li>
                <a href="https://www.youtube.com/c/iFiaudiochannel" target="_blank"
                  ><i class="fa-brands fa-youtube"></i> Youtube</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="copy-right-container">
          <span
            >iFi audio is a division of Abbingdon Global Limited, registered in England
            and Wales under the company registration number 06190130.</span
          >
          <span
            >Registered office address: 79 Scarisbrick New Road, Southport, England, PR8
            6LJ.</span
          >
          <span
            >© 2023 <a href="">iFi audio</a> | Website by
            <a href="">AnhHieuCaBayMau</a></span
          >
        </div>
      </div>
    </footer>
    <scrollup />
  </v-app>
</template>

<script>
// import slider from "../components/slider.vue";
import scrollup from "../components/scrollup.vue";
export default {
  components: { scrollup },
  name: "DefaultLayout",
  methods: {
    scrollTo(sectionId) {
      var windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      // 100vh;
      var scrollToValue = (windowHeight * 100) / 100;
      const element = document.getElementById(sectionId);
      if (element) {
        console.log(window.scrollY);
        window.scrollTo({
          behavior: "smooth",
          top: element.offsetTop + scrollToValue - 56,
        });
      }
    },
  },
  mounted() {
    const list = this.$el.querySelector("#slider .list");
    const items = this.$el.querySelectorAll("#slider .list .item");
    const dots = this.$el.querySelectorAll("#slider .dots li");
    const prev = this.$el.querySelector("#prev");
    const next = this.$el.querySelector("#next");
    let active = 0;
    const countItem = items.length;
    // const autoRef = setInterval(() => {
    //   next.click();
    // }, 5000);

    next.onclick = function nextItem() {
      if (active + 1 >= countItem) {
        active = 0;
      } else {
        active = active + 1;
      }
      reloadSlide();
    };

    prev.onclick = function prevItem() {
      if (active - 1 < 0) {
        active = countItem - 1;
      } else {
        active = active - 1;
      }
      reloadSlide();
    };

    dots.forEach((li, key) => {
      li.addEventListener("click", function () {
        active = key;
        reloadSlide();
      });
    });

    function reloadSlide() {
      items.forEach((item, index) => {
        if (index === active) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      const activeDot = document.querySelector("#slider .dots li.active");
      activeDot.classList.remove("active");
      dots[active].classList.add("active");
    }

    dots.forEach((li, key) => {
      li.addEventListener(
        "click",
        function () {
          active = key;
          reloadSlide.call(this);
        }.bind(this)
      );
    });

    const proList = this.$el.querySelector(
      "#header .header-bar .navigation-placeholder .product-list"
    );
    const toolList = this.$el.querySelector(
      "#header .header-bar .navigation-placeholder .tool-box"
    );
    const supList = this.$el.querySelector(
      "#header .header-bar .navigation-placeholder .support-box"
    );

    const proMenu = this.$el.querySelector(
      "#header .header-bar .navigation-placeholder .product-list .dropdown-menu"
    );
    const toolMenu = this.$el.querySelector(
      "#header .header-bar .navigation-placeholder .tool-box .dropdown-menu"
    );
    const supMenu = this.$el.querySelector(
      "#header .header-bar .navigation-placeholder .support-box .dropdown-menu"
    );

    const dropCheck = this.$el.querySelector(
      "#header .header-bar .logo-placeholder .dropbtn"
    );
    const nav = this.$el.querySelector("#header .header-bar .navigation-placeholder");

    proList.onclick = function () {
      if (proMenu.classList.contains("active")) {
        proMenu.classList.remove("active");
      } else {
        proMenu.classList.add("active");
        toolMenu.classList.remove("active");
        supMenu.classList.remove("active");
      }
    };

    toolList.onclick = function () {
      if (toolMenu.classList.contains("active")) {
        toolMenu.classList.remove("active");
      } else {
        proMenu.classList.remove("active");
        toolMenu.classList.add("active");
        supMenu.classList.remove("active");
      }
    };

    supList.onclick = function () {
      if (supMenu.classList.contains("active")) {
        supMenu.classList.remove("active");
      } else {
        proMenu.classList.remove("active");
        toolMenu.classList.remove("active");
        supMenu.classList.add("active");
      }
    };

    dropCheck.onclick = function () {
      if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        proMenu.classList.remove("active");
        toolMenu.classList.remove("active");
        supMenu.classList.remove("active");
      } else {
        nav.classList.add("show");
      }
    };
  },
};
</script>
<style>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
::-webkit-scrollbar {
  display: none;
}
.header-bar {
  width: 100%;
  padding: 10px 50px;
  display: flex;
  background-color: rgba(255, 255, 255);
}

.logo-placeholder {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-placeholder img {
  object-fit: cover;
}

.navigation-placeholder {
  width: 90%;
  display: flex;
  align-items: center;
  color: #ff5c23;
  justify-content: right;
  gap: 100px;
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

main {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100vw;
}

#slider {
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow-y: hidden;
}

.list {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  transition: opacity 1.5s;
}

.list .item {
  /* display: none; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.5s;
}

.list .item.active {
  display: block;
  opacity: 1;
  z-index: 5;
}

.list img {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  object-fit: cover;
}
.img-placeholder {
  position: relative;
}
.list .item .slogan-placeholder {
  position: absolute;
  width: 50vw;
  top: 30%;
  left: 25vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list .item .slogan-placeholder h1 {
  color: #ff5c23;
  font-size: 30px;
  margin-bottom: 15px;
}

.list .item .slogan-placeholder span {
  font-size: 18px;
  margin-bottom: 30px;
}

.list .item .take-tour-button {
  padding: 10px 50px;
  border-radius: 50px;
  border: 3px solid #ff5c23;
  cursor: pointer;
  background-color: white;
  color: #ff5c23;
  font-weight: bold;
  font-size: 20px;
}

.list .item .take-tour-button a {
  text-decoration: none;
}

.list .item .product-info {
  position: absolute;
  min-width: 44vw;
  bottom: 20%;
  left: 8vw;
  display: flex;
  color: white;
  flex-direction: column;
  border-left: 8px solid #ff5c23;
  padding-left: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.list .item .product-info h1 {
  font-size: calc(30px + 2vw);
}

.list .item .product-info h2 {
  font-size: 30px;
}

.list .item .product-info span {
  font-size: 24px;
}

.list .item .sale::before {
  content: "Save";
  border-radius: 50px;
  padding: 3px 5px;
  font-size: 20px;
  font-weight: 700;
  background-color: #ff5c23;
  color: white;
  text-align: center;
  width: 80px;
}

.list .item .new::before {
  content: "New";
  border-radius: 50px;
  padding: 3px 5px;
  font-size: 20px;
  font-weight: 700;
  background-color: #ff5c23;
  color: white;
  text-align: center;
  width: 80px;
}

.button-placeholder {
  position: absolute;
  top: 45%;
  margin: 0% 2%;
  width: 96%;
  display: flex;
  justify-content: space-between;
}

.button-placeholder button {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  font-family: monospace;
  font-weight: bold;
  font-size: 30px;
  transition: 0.3s;
  z-index: 6;
}

.button-placeholder button:hover {
  background-color: rgba(143, 143, 143, 0.568);
  color: white;
}

.dots {
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 7;
}

.dots li {
  list-style: none;
  width: 10px;
  height: 10px;
  background-color: rgba(143, 143, 143, 0.568);
  border-radius: 20px;
  margin: 10px;
  transition: 1s;
}

.dots li.active {
  width: 30px;
  background-color: #ff5c23;
}
footer {
  background-color: #7e878e;
  width: 100vw;
  padding-top: 64px;
  border-top: #ff5c23 solid 8px;
  position: relative;
  bottom: 0;
}

#footer {
  display: flex;
  flex-direction: column;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0 12vw;
}

.item-footer {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
}

.item-footer h1 {
  margin-left: 10px;
  color: white;
}

.item-footer li {
  list-style-type: ">";
  line-height: 32px;
}

.item-footer li a {
  margin-left: 10px;
  font-size: 15px;
  text-decoration: none;
  color: white;
  border-bottom: black solid 1px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

footer a:hover {
  color: black;
  transition: 0.3s;
}

.copy-right-container {
  margin-top: 80px;
  background-color: #717980;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.copy-right-container a {
  text-decoration: none;
  color: white;
}

.dropbtn {
  display: none;
}

#checkDropmenu {
  display: none;
}

@media (max-width: 768px) {
  .header-bar {
    flex-direction: column;
    padding: 0;
  }

  .logo-placeholder {
    padding: 10px 50px;
    width: 100%;
    justify-content: space-between;
  }

  .dropbtn {
    display: block;
    cursor: pointer;
    font-size: 24px;
  }

  .navigation-placeholder {
    display: none;
    opacity: 0;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    /* transition: 0s; */
    gap: 0;
  }

  .navigation-placeholder.show {
    display: flex;
    opacity: 1;
  }

  .navigation-placeholder .product-list,
  .navigation-placeholder .tool-box,
  .navigation-placeholder .support-box {
    padding: 20px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* transition: 0.5s; */
  }

  .navigation-placeholder .dropdown-menu {
    position: unset;
    width: 100%;
    padding: 0;
    opacity: 0;
    box-shadow: none;
    border-top: #ff5c23 solid 2px;
    border-radius: 0;
    height: 0;
    margin-top: 10px;
    padding-top: 20px;
    transition: 0s;
  }

  .navigation-placeholder .product-list:hover .dropdown-menu,
  .navigation-placeholder .tool-box:hover .dropdown-menu,
  .navigation-placeholder .support-box:hover .dropdown-menu {
    visibility: hidden;
    opacity: 0;
  }

  .navigation-placeholder .product-list .dropdown-menu.active,
  .navigation-placeholder .tool-box .dropdown-menu.active,
  .navigation-placeholder .support-box .dropdown-menu.active {
    visibility: visible;
    opacity: 1;
    height: auto;
  }
  .navigation-placeholder .dropdown-menu a:hover {
    background-color: white;
    color: black;
  }

  .navigation-placeholder .dropdown-menu a {
    border-radius: 0;
    padding-left: 0;
    justify-content: center;
  }

  .grid-container {
    grid-template-columns: 1fr;
  }
  .list .item .slogan-placeholder {
    top: 22%;
  }
  .list .item .slogan-placeholder span {
    font-size: 14px;
  }
  .list .item .product-info {
    min-width: 80vw;
  }
  .list .item .product-info h1 {
    font-size: 24px;
  }
  .list .item .product-info h2 {
    font-size: 18px;
  }
  .list .item .product-info span {
    font-size: 15px;
  }
  .list .item .new::before {
    font-size: 16px;
    width: 70px;
  }
  .list .item .sale::before {
    font-size: 16px;
    width: 70px;
  }
  .list .item .take-tour-button {
    padding: 10px 35px;
    font-size: 16px;
  }
}
.no-border {
  border: none !important;
}
.v-slide-group__next,
.v-slide-group__prev {
  min-width: 0px !important;
  flex: 0 !important;
}
</style>
