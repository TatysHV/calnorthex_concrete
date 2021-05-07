<template>
  <v-navigation-drawer
    v-model="showSidebar"
    color="#000"
    right
    temporary
    fixed
    app
    >
      <v-list 
        dense nav
      >
        <v-list-item  
          v-for="item in navItems"
          :key="item.title"
          link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
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
  data(){
    return{
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

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
	color: rgb(255, 255 , 255 )!important

.theme--light.v-btn.v-btn--icon
	color: white	

</style>