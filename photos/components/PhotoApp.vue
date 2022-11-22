<template>
    <layout>
      <template v-slot:header> Header </template>
      <template v-slot:sidebar>
        <album-button v-for="album in albums" :key="album.key" :album="album" />
      </template>
      <template v-slot:content>
        <router-view />
      </template>
    </layout>
  </template>
  
  <script>
  import { onMounted, computed } from "vue";
  import { useStore } from "vuex";
  import Layout from "./Layout.vue";
  import AlbumButton from "./AlbumButton.vue";
  
  export default {
    components: {
      Layout,
      AlbumButton,
    },
    setup() {
      const store = useStore();
      const albums = computed(() => store.state.albums.all);
      const photos = computed(() => store.state.photos.all);
  
      onMounted(() => {
        store.dispatch("albums/fetch");
      });
  
      return {
        albums,
        photos
      };
    },
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  </style>
  