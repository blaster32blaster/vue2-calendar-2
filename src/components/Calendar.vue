<template>
    <div
      id="calendar-wrapper"
      v-show="month.length"
    >
        <div id="table-wrapper">
            <table>
                <tr>
                    <th colspan="7">
                        {{ theDay }} {{ theMonth }} {{ theYear }}
                    </th>
                </tr>
                <tr
                    v-for="(week, index) in weeks"
                    v-bind:key="index"
                >
                    <Week
                        :week="week"
                        :selectedDate="date"
                    >
                    </Week>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import * as moment from "moment/moment";
import Week from './Week.vue';
import library from '../library';
export default {
    name: 'Calendar',
    components: {
        Week
    },
    props: {
        date: {
            type: Date,
            default: () => {}
        }
    },
    watch : {
        date: function (value) {
            this.createMonthTable(value);
        }
    },
    data: () => ({
        month: [],
        weeks: [],
        theMonth: '',
        theYear: '',
        theDay: '',
    }),
    methods : {
        /**
         * handle creating the month table
         * for the selcted month
         */
        createMonthTable (date) {
            this.weeks = [];
            this.month = [];

            this.theMonth = moment(date).format('MMMM');
            this.theYear = moment(date).year();
            this.theDay = moment(date).format('D');

            this.month = library.func.setMonth(date);
            this.weeks = library.func.splitMonthIntoWeeks(this.month);
        },
    }
}
</script>
<style scoped>
    #calendar-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: left;
        text-align: left;
    }
    th {
        text-align: center;
    }
</style>