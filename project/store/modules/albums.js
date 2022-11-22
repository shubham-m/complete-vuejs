export const albums = {
    namespaced: true,
    state() {
        return {
            all: []
        }
    },
    mutations: {
        setAlbums(state, albums) {
            state.all = albums
        }
    },
    actions: {
        async fetch($context) {
            const reponse = await window.fetch(
                "https://jsonplaceholder.typicode.com/albums"
              );
            const json = await reponse.json();
            $context.commit("setAlbums", json)
        }
    }
}