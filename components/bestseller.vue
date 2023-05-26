<template>
	<div class="d-flex flex-column">
		<div
			data-aos="fade-down"
			data-aos-duration="500"
			class="text-center font-weight-bold  my-2"
			:class="$vuetify.breakpoint.smAndDown ?
				'h5 mt-2'
				: 'h4 mx-16'"
		>
			{{ ("nos") }}
		</div>
		<br>
		<v-row>
			<v-col
				v-for="(image, index) in images"
				:key="index"
				cols="12"
				lg="3"
				md="6"
				sm="6"
				class="pa-1"
			>
				<v-card
					class="overflow-hidden white--text card-img-transition pa-4  "
					:style="`background: url('${image.src}');' background-size: 100px`"
					height="400px"
					max-width="600px"
				>
					<div class="d-flex flex-column card-content" >
						<v-card-text class="orange--text font-weight-black text-h5">
							{{ image.name }}
						</v-card-text>
                        <v-spacer />
						<v-card-title class="text-uppercase font-weight-black orange--text">
							{{ image.description }}
						</v-card-title>
						
						<v-card-text
							v-for="(address, i) in image.addresses"
							:key="i"
							class="py-0 d-flex flex-column orange--text font-weight-black" 
						>
							{{ address }}
						</v-card-text>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
	data: () => ({
		images: [
			{
				src: "/images/3.jpg",
				name: "xDSD Gryphon Case",
				description: "Protect the beast!",
				addresses: [
					"Our stylish cover is the perfect fit for your xDSD Gryphon Bluetooth DAC/amp."
				]
			},
			{
				src: "/images/4.jpg",
				name: "Pro iCAN Signature",
				description: "Pro Signature style amplification.",
				addresses: [
					"The Pro iCAN Signature is our new flagship analogue headphone amplifier and stereo preamplifier."
				]
			},
			{
				src: "/images/5.jpg",
				name: "LAN iSilencer",
				description: "Your network.Silenced.",
				addresses: [
					"No more distored audio signal"
				]
			},
			{
				src: "/images/6.jpg",
				name: "ZEN Signature Set 6XX",
				description: "ZENtastic Trio.",
				addresses: [
					"The ZEN DAC Signature V2 and ZEN CAN Signature 6XX with added 4.4mm Balanced cable."
				]
			}
		]
	}),
	mounted () {
		AOS.init({
			offset: 20
		});
	}
};
</script>

<style lang="scss" scoped>
.card-img-transition {
	background-size: 600px !important;
	transition: background-size 2s, border 1s, background-position 2s;
	background-repeat: no-repeat;
	background-position: right bottom !important;
	&:hover {
		background-position: center center !important;
		background-size: 800px !important;
		border-spacing: 15px 50px;
	}
}
.card-content {
    height: 100% !important;
	transition: border;
	border: 0 solid black ;
	&:hover {
		border: 2px solid black ;
	}
}

</style>
