<template>
  <img 
    v-for="photo in photos"
    :key="photo.id"
    :src="photo.thumbnailUrl"
  />
</template>

<script>
import { computed, watch, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    watchEffect(() => {
      const albumId = route.params.id
      store.dispatch("photos/getByAlbum", { albumId });
    });

    const photos = computed(() => store.state.photos.all);

    return {
      photos
    }
  }
}
</script>