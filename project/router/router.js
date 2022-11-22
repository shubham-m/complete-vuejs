import { createRouter, createWebHistory } from "vue-router";
import PhotoApp from "../components/PhotoApp.vue"
import PhotoView from "../components/PhotoView.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Home",
            path: '/',
            component: PhotoApp,
            children: [
                {
                    name: "Albums",
                    path: 'albums/:id',
                    component: PhotoView
                }
            ]
        }
    ]
})