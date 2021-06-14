<template>
    <div
      class="week-wrapper"
      v-show="week.length"
    >
        <td 
            v-for="(day, index) in week"
            v-bind:key="index"
            v-bind:class="{ 
                baseStyles:true,
                weekendStyles: checkWeekend(index),
                active: checkActive(day),
                outOfBounds: checkOutOfBounds(day)
            }"
        >
            <Day
                :day="day"
                :date="selectedDate"
            >
            </Day>
        </td>
    </div>
</template>
<script>
import * as moment from "moment/moment";
import Day from './Day.vue';
export default {
    name: 'Week',
    components: {
        Day
    },
    data: () => ({
    }),
    props: {
        week: {
            type: Array,
            default: () => []
        },
        selectedDate: {
            type: Date,
            default: () => {}
        }
    },
    methods: {
        /**
         * is the current index a weekend day
         */
        checkWeekend(index) {
            if (index === 0 || index === 6) {
                return true;
            }
            return false;
        },
        /**
         * is the current day the selected date
         */
        checkActive (day) {
            if (Object.keys(day).length !== 0 &&
                day.format('D') === moment(this.selectedDate).format('D')
            ) {
                return true;
            }
            return false;
        },
        /**
         * is the current day a part of another month
         */
        checkOutOfBounds (day) {
            if (Object.keys(day).length === 0) {
                return true;
            }
            return false;
        }
    },
}
</script>
<style>
    .baseStyles {
        background-color: #ffffff;
        border: 1px solid darkgray;
        width: 3rem;
        text-align: center;
        border-radius: .9rem;
    }
    .weekendStyles {
        background-color: darkcyan;
        color: white;
    }
    .active {
        background-color: orangered;
        color: white;
    }
    .outOfBounds {
        background-color: lightgray;
    }
</style>
