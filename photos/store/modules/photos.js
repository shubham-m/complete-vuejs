export const photos = {
    namespaced: true,
    state() {
        return {
            all: []
        }
    },
    mutations: {
        setPhotos(state, photos) {
            state.all = photos
        }
    },
    actions: {
        async getByAlbum($context, {albumId}) {
            const response = await window.fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
            const photos = await response.json();
            $context.commit("setPhotos", photos);
        }
    }
}