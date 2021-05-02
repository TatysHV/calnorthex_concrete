<template>
  <v-app dark>
    <Header/>

    <v-main class="pa-0">
      <v-container class="pa-0">
        <nuxt />
      </v-container>
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
import Header from '~/components/Header'

export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Qué ver',
      //logoCinepolis: require('~/assets/images/lg-cinepolis-new.png'),
      items: [
          { title: 'VIDEOS', id: 'videos' },
          { title: 'CRÍTICAS', id: 'criticas' },
          { title: 'NOTICIAS', id: 'noticias' },
      ],
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },
  components: {
    Header,
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
      }
  }
}
</script>
<style lang="sass" scoped>  
</style>
