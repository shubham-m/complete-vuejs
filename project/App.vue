<template>
  <layout>
    <template v-slot:header> Header </template>
    <template v-slot:sidebar>
      <div 
        v-for="album in albums"
        :key="album.key"
       >
        {{album.title}}
      </div>
    </template>
    <template v-slot:content> Content </template>
  </layout>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import Layout from "./components/Layout.vue";

export default {
  components: {
    Layout,
  },
  setup() {
    const store = useStore();
    const albums = computed(() => store.state.albums.all);

    onMounted(()=>{
      store.dispatch("albums/fetch");
    });

    return {
      albums
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
