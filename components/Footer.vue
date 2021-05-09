<template>
  <v-footer>
		<div class="footer-wrap container">
			<v-col>
				<div class="d-flex flex-column justify-center">
					<h1 class="my-5">Menu</h1>
					<a :class="`menu-item item-${index} my-5`"
						v-for="(item, index) in navItems"
						:key="item.title"
						:id="`item-${index}`"
						link
						@click="goToSection(item.id)"
					>
						<span>{{item.title}}</span>
					</a>
				</div>
			</v-col>
			<v-col>
				<div class="footer-contact">
					<h1 class="my-5">Contact Us</h1>
					<span class="my-5">calnorthex@outlook.com</span>
					<span class="my-5">555-555-555</span>
				</div>
			</v-col>
			<v-col></v-col>
			<span>&copy; {{ new Date().getFullYear() }}</span>
		</div>
	</v-footer>
</template>

<script>
export default {
  name: 'Footer',
	props: {
    navItems: {
      type: Array, 
      default: [],
      required: true
    }
	},
  data(){
    return {
      menuSelection: 0,
    }
  }

}
</script>

<style lang="sass" scoped>
.v-footer
	height: 500px
	background-color: $dark-black!important
.footer-wrap
	width: 100%
	display: flex 
	height: 80%
	flex-direction: column 
	background-color: $dark-black!important
	color: white
	@include laptop 
		flex-direction: row 

	h1 
		font-size: 1.2rem 
	span 
		font-size: 1rem
    
	.menu-item
		position: relative
		background: $dark-black
		text-align: left
		color: white !important
		cursor: pointer
		span:hover
			color: $base-red!important
	.menu-item.active 
		color: $base-red
		//background-color: $base-red
	.footer-contact
		display: flex 
		flex-direction: column 
		color: white
</style>