<template>
  <div id="app">
    <div id="app">
      <Header />
      <div class="container">
        <router-view class="app-content" ></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>