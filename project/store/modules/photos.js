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
        async getByAlbum($context, {album}) {
            const response = await window.fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
            const photos = await response.json();
            $context.commit("setPhotos", photos);
        }
    }
}