<template>
    <div class="mb-3">
        <label :for="label" class="form-label">{{label}}</label>
        <input class="form-control" :id="label">
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            reqruied: true
        }
    }
}
</script>

<style scoped>
</style>