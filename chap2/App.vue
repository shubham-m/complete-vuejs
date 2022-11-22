<template>
    <div class="container-fluid my-2 p-5 border bg-info bg-opacity-25 rounded">
        <form @submit.prevent="logData">
            <div class="display-6 mb-3 d-flex justify-content-center">Sign in</div>
            <div class="row">
                <div class="col-lg-3 col-md-2"></div>
                <div class="col-lg-6 col-md-8">
                    <my-input label="Email Address" type="email" is-required=true min-length=5 @change="updateState" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-2"></div>
                <div class="col-lg-6 col-md-8">
                    <my-input label="Password" type="password" is-required=true min-length=10 @change="updateState" />
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <my-button background="darkslateblue" text-color="white" :is-enabled="valid" label="Login"
                    type="submit">
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import MyInput from "./components/MyInput.vue";
import { toRaw } from "vue";

export default {
    components: {
        MyButton,
        MyInput
    },
    data() {
        return {
            valid: true,
            data: {},
            validationErrors: {}
        }
    },
    methods: {
        updateState(updateEvent) {
            this.data[updateEvent.label] = updateEvent.value;
            if (updateEvent.validationError) {
                this.validationErrors[updateEvent.label] = updateEvent.validationError;
            } else {
                delete this.validationErrors[updateEvent.label];
            }
            this.valid = Object.keys((toRaw(this.validationErrors))).length === 0;
        },
        logData() {
            console.log(this.data);
        }
    }
}
</script>

<style scoped>

</style>