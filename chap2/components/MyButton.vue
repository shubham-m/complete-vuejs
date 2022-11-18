<template>
    <button
        :style="{
            background, 
            color: textColor
        }"
        :disabled="disabled"
    >
        {{label}}
    </button>
</template>

<script>
export default {
    props: {
        background: {
            type: String,
        },
        textColor: {
            type: String
        },
        label : {
            type: String,
            default: "Button"
        },
        isEnabled: {
            type: Boolean
        }
    },
    computed: {
        disabled() {
            return !this.isEnabled;
        }
    }
}
</script>

<style>
button:disabled {
    opacity: 0.5;
}

button {
    background: none;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px 40px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    filter: brightness(125%);
}
</style>