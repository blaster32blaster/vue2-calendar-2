<template>
    <div id="root">
        <Datepicker
         :value="date"
         name="date-picker-item"
         id="date-picker"
         :typeable=true
         :open-date="date"
         :placeholder="placeholderText"
         @selected="handleSelection"
        >
        </Datepicker>
        <Calendar
         @show="date !== 'undefinded' && date !== ''"
         :date="date"
        >
        </Calendar>
    </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
import Calendar from './Calendar.vue';
export default {
  name: 'HomeView',
  components: {
    Datepicker,
    Calendar
  },
  data: () => ({
    date: new Date(),
    placeholderText: 'Type a Date',
  }),
  methods : {
    /**
     * handle selecting a date
     */
      handleSelection(selectedDate) {
          this.date = selectedDate
      }
  }
}
</script>
<style>
    #root {
        display: flex;
        flex-direction: column;
    }
    .vdp-datepicker__calendar {
      display:none!important;
    }
</style>