<template>
  <v-navigation-drawer
    v-model="showSidebar"
    color="#000"
    right
    temporary
    fixed
    app
    >
    <div class="head-sidebar">
      <v-btn @click="hideSidebar()" color="#000" dark><v-icon>mdi-close</v-icon></v-btn>
    </div>
      <v-list dense nav>
        <v-list-item  
          v-for="item in navItems"
          :key="item.title"
          link>
          <v-list-item-content>
            <v-list-item-title @click="goToSection(item.id)">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import goTo from 'vuetify/es5/services/goto'
import * as easings from 'vuetify/es5/services/goto/easing-patterns'

export default {
  name: 'Sidebar',
  props: {
    navItems: {
      type: Array, 
      default: [],
      required: true
    },
    showSidebar: {
      type: Boolean,
      default: false,
      required: true
    }
  },
	computed:{
		options() {
			return {	
				duration: 2000,
				offset: 0, 
				easing: 'easeInOutCubic'
				}
		}	
	},
  data(){
    return{
      hideSidebar(){
        this.$emit('close')
      },
			goToSection(section){
				this.$vuetify.goTo(section, this.options)
				this.hideSidebar()
			}
    }
  }
}
</script>

<style lang="sass">
.v-navigation-drawer
	width: 100%!important 
	text-align: center

	.v-list
		display: flex
		flex-direction: column
		padding: 0
	
		.v-list-item 
			padding: 0 8px
		
		.v-list-item__title
			font-size: 1.5rem
			padding: .5rem
  
	.head-sidebar
		width: 100% 
		display: flex 
		flex-direction: row 
		justify-content: flex-end
		height: 80px
		padding: 1rem

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
	color: rgb(255, 255 , 255 )!important

.theme--light.v-btn.v-btn--icon
	color: white	

</style>