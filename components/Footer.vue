<template>
  <v-footer>
		<div class="footer-wrap container">
			<v-col>
				<div class="d-flex flex-column justify-center">
					<h1 class="mb-5">Menu</h1>
					<a :class="`menu-item item-${index} my-3`"
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
					<h1 class="mb-5">Contact Us</h1>
					<div class="d-flex my-3">
						<figure style="width:1.5rem; margin-right:10px">
							<img :src="require(`~/assets/images/icons/mail.svg`)"/>
						</figure>
						<span>calnorthex@outlook.com</span>
					</div>
					<div class="d-flex my-3">
						<figure style="width:1.5rem; margin-right:10px">
							<img :src="require(`~/assets/images/icons/phone.svg`)"/>
						</figure>
						<span> 555-555-555</span>
					</div>
				</div>
			</v-col>
			<v-col>
				<div class="d-flex flex-column justify-center">
					<h1 class="mb-5">Social Media</h1> 
					<div class="d-flex flex-row">
						<a :class="`menu-item item-${index} my-3 mr-5`"
							v-for="(item, index) in socialMedia"
							:key="item.name"
							:id="`item-${index}`"
							:href="item.url"
							link
						>
							<figure>
								<img :src="require(`~/assets/images/icons/${item.name}.svg`)"/>
							</figure>
						</a>
					</div>
				</div>
			</v-col>
			
		</div>
		<div class="footer-legal">
			<span>Calnorthex Concrete &copy; {{ new Date().getFullYear()}} | A Phoenix Team Developmet</span>
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
			socialMedia: [
				{ name: 'facebook', url: '' },
				{ name: 'instagram', url: '' },
				{ name: 'twitter', url: '' }
			]
    }
  }

}
</script>

<style lang="sass" scoped>
.v-footer
	position: relative
	height: 450px
	background-color: $dark-black!important
	padding: 0
	margin: 0
.footer-legal 
	position: absolute 
	bottom: 0
	left: 0
	width: 100% 
	text-align: center 
	height: 60px
	background-color: $darker-black
	color: $light-gray
	font-size: .8rem
	padding: 20px
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
		font-size: 1rem 
		color: $soft-gray
		letter-spacing: 3px
		text-transform: uppercase
	span 
		font-size: .9rem
		letter-spacing: 2px
		cursor: pointer
		&:hover
			letter-spacing: 3px
			font-weight: bold
    
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