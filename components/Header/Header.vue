<template>
	<v-app-bar v-resize="onResize"
		:height="windowSize.x < 960 ? '80px' : '100px'"
		:max-height="windowSize.x < 960 ? '80px' : '100px'"
		class="app-nav"
		clipped-right
		color="#000"
		dense
		flat
    >
      <v-container fluid class="pa-0">
        <div class="main-nav">
					<v-col class="pa-0">
						<v-row class="wrap-identity">
							<nuxt-link to="/" >
								<!--<v-img contain 
									:max-width="windowSize.x < 960 ? '120' : '140'" 
									:src="logoCinepolis">
								</v-img>-->
							</nuxt-link>
							<p class="main-title mb-0">Calnorthex Concrete</p>
							<v-spacer v-if="isMobile"></v-spacer>
							<v-btn v-if="isMobile"
								@click.stop="showSidebar()"
								icon
							>
								<v-icon>mdi-menu</v-icon>
							</v-btn>
						</v-row>
					</v-col>
          <v-col v-if="!isMobile" class="pa-0">
            <v-row class="wrap-menu menu">
              <v-list flat  v-if="isHome">
								<v-list-item-group 
									v-model="menuSelection"
									active-class="active"
								>
									<v-list-item 
										v-for="(item, index) in navItems"
										:key="item.title"
										link
										:class="`menu-item item-${index}`"
										:id="`item-${index}`"
										:ref="`item-${index}`"
										@click="goToSection(item.id)"
									>
										<v-list-item-title>{{item.title}}</v-list-item-title>
									</v-list-item>
								</v-list-item-group>
              </v-list>
              <v-list flat v-else>
								<v-list-item-group>
									<v-list-item 
										v-for="item in navItems"
										:key="item.title"
										link
										@click="goHome()"
									>
										<v-list-item-title>{{item.title}}</v-list-item-title>
									</v-list-item>
								</v-list-item-group>
              </v-list>
            </v-row>
          </v-col>
        </div>
      </v-container>
    </v-app-bar>
</template>

<script>

export default {
	name: 'Header',
	props: {
    navItems: {
      type: Array, 
      default: [],
      required: true
    }
	},
	data(){
		return {
			drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      activeSidebar: false,
			menuSelection: 0,
      //logoCinepolis: require('~/assets/images/lg-cinepolis-new.png'),
			windowSize: {
        x: 0,
        y: 0
      }
		}
	},
	mounted(){
    this.onResize()
		
  },
	computed: {
    isHome(){
      if(this.$route.path == '/'){
        return true
      }else{
        return false
      }
    },
		isMobile(){
			if(this.windowSize.x < 960){
				return true
			}else{
				return false
			}
		}
  },
	methods:{
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight }
		},
		goToSection(elID){
			if(elID == 'home'){
				alert('goHome')
				this.goHome()
			}
			//document.getElementById(`${elID}`).scrollIntoView({ behavior: 'smooth'})
		},
		goHome(){
			this.$router.push('/')
		},
		showSidebar(){
			this.activeSidebar = !this.activeSidebar
			this.$emit('handlerSidebar', this.activeSidebar)
		}
  }

}
</script>

<style lang="sass">
.app-nav
	background-color: $base_black
	.main-title
		padding-top: 8px
		color: white
		font-size: 2rem
	.main-nav 
		display: flex 
		flex-direction: row 
		justify-content: center 
		align-content: center
		height: 100%
		.wrap-identity 
			display: flex 
			justify-content: flex-start
			align-content: center
			height: 100%
		.wrap-menu
			display: flex 
			justify-content: space-evenly
			align-content: center 
			height: 100% 
			font-size: 1.5rem
	&:before 
		content: ''
		width: 100% 
		height: 4px 
		position: absolute 
		left: 0
		bottom: 0
		background-color: $base_red
		//background: linear-gradient(90deg, $base_yellow 0, $base_red)

	.menu
		.v-list
			display: flex
			flex-direction: row
			padding: 0
			background: rgba(0,0,0,0)
			height: 100%
		
		.v-list-item-group
			position: relative
			display: flex
			align-items: center
			height: 100%
			//text-transform: uppercase
			.v-list-item
				padding: 0 16px
				text-decoration: none
				min-width: 8.5rem
				text-align: center
				height: 100%
				&:hover
					background-color: $light_red
		.menu-item.active 
			background-color: $base_red
			color: white
		
		.v-list-item__title
			font-size: 1.1rem

	.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
		color: rgb(255, 255 , 255 )!important

	.theme--light.v-btn.v-btn--icon
		color: white

</style>