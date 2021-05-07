<template>
  <v-app dark>
    <Header :nav-items="items" @handlerSidebar="showSidebar()"/>
    <Sidebar :nav-items="items" :showSidebar="activeSidebar"/>

    <v-main class="pa-0">
      <nuxt />
    </v-main>

    <v-navigation-drawer
      v-model="rightDrawer"
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
          v-for="item in items"
          :key="item.title"
          link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-footer
    class="mt-5"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '~/components/Header/Header'
import Sidebar from '~/components/Header/Sidebar'

export default {
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      activeSidebar: false,
      title: 'Qué ver',
      //logoCinepolis: require('~/assets/images/lg-cinepolis-new.png'),
      items: [
          { title: 'Home', id: 'home' },
          { title: 'Gallery', id: 'gallery' },
          { title: 'Services', id: 'services' },
					{ title: 'About us', id: 'about' },
					{ title: 'Contact', id: 'contact' }
      ],
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },

  mounted(){
    this.onResize
  },
  methods:{
      onResize() {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      },
      scrollToSection(elID){
        document.getElementById(`${elID}`).scrollIntoView({ behavior: 'smooth'})
      },
      goHome(){
        this.$router.push('/')
      },
      showSidebar(){
        this.activeSidebar = !this.activeSidebar
      }
  }
}
</script>
<style lang="sass" scoped>  
</style>
