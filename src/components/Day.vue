<template>
    <span
      class="day-wrapper"
      v-show="day"
    >
        {{ theDay }}
    </span>
</template>
<script>
export default {
    name: 'Day',
    props: {
        day: {
            type: Object,
            default: () => {}
        },
        date: {
            type: Date,
            default: () => {}
        }
    },
    data: () => ({
    }),
    computed : {
        theDay : function () {
            if (this.day === 'undefined' || Object.keys(this.day).length === 0) {
                return '';
            }
            return this.day.format('D');
        }
    }
}
</script>
<style scoped>
</style>