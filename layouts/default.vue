<template>
  <v-app dark>
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
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
