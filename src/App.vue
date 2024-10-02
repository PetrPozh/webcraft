<template>
  <router-view />

  <Footer />

  <Popup v-if="_store.popup"/>
</template>

<script setup>

import useStore from './store'

import Footer from './components/Footer.vue'
import Popup from './components/Popup.vue'

const _store = useStore()



</script>
