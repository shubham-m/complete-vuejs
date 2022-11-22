import { createStore } from "vuex";
import { photos } from "./modules/photos.js";
import { albums } from "./modules/albums.js"

export const store = createStore({
    modules: {
        albums,
        photos
    }
});