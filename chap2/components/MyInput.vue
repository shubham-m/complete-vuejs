<template>
    <div class="form-floating mb-2">
        <input 
            :class="styleClass" 
            :type="type" 
            :id="label"
            placeholder=" "
            v-model="value"
            @input="changed"
        />
        <label :for="label">{{label}}</label>
        <div class="invalid-feedback">
            {{validationError}}
        </div>
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: "text"
        },
        isRequired: {
            type: Boolean,
            default: false
        },
        minLength: {
            type: Number
        },
        initialValue: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            value: this.initialValue,
            valid: true,
            validationError: "",
            styleClass: "form-control"
        }
    },
    methods: {
        changed($event) {
            this.value = $event.target.value;
            this.validate();
            this.$emit("change", {label: this.label, 
                value: this.value, validationError: this.validationError})
        },
        validate() {
            if(this.minLength && this.value.length < this.minLength) {
                this.setValid(false);
                this.validationError =  "Atleast " + this.minLength + " Characters";
                return;
            }
            if(this.isRequired && !this.value) {
                this.setValid(false);
                this.validationError = "Required";
                return;
            }
            this.validationError = null;
            this.setValid(true);
        },
        setValid(valid) {
            this.styleClass = valid ? "form-control" : "form-control is-invalid";
            this.valid = valid;
        }
    }
}
</script>

<style scoped>
</style>