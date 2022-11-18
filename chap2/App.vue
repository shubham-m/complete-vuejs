<template>
    <div class="container mt-2">
        <my-input label="Username" />
        <my-button
            background="darkslateblue"
            text-color="white"
            :is-enabled="valid"
        >
        </my-button>
    </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import MyInput from "./components/MyInput.vue";

export default {
    components: {
        MyButton,
        MyInput
    },
    data() {
        return {
            valid: true
        }
    }
}
</script>

<style scoped>
</style>