import * as moment from "moment/moment";
export default {
    func: {
        /**
         * Set the month
         * 
         * @param {Date} date 
         * @returns Array month
         */
        setMonth (date) {
            let month = this.fetchMonthArray(date);
            month = this.initStartOfMonth(month);
            month = this.initEndOfMonth(month);
            return month;
        },
        /**
         * get initial month array
         * 
         * @param {Date} date 
         * @returns Array month
         */
        fetchMonthArray (date) {
            let daysInMonth = moment(date).daysInMonth();
            let month = [];
            for (let day = 0; day < daysInMonth; day++) {
                let theNewDate = moment(date);
                theNewDate.date(day+1);
                month.push(theNewDate);
            }
            return month;
        },
        /**
         * Handle setting preceding blank objects
         * to represent prior months days
         * 
         * @param {Array} month 
         * @returns Array month
         */
        initStartOfMonth (month) {
            let firstDay = month[0];
            if (Object.keys(firstDay).length && firstDay.day() !== 0) {
                for(let blankDay = firstDay.day(); blankDay > 0; blankDay--) {
                    month.unshift({});
                }
            }
            return month;
        },
        /**
         * Handle setting following blank objects
         * to represent next months days
         * 
         * @param {Array} month 
         * @returns Array month
         */
        initEndOfMonth (month) {
            let lastDay = month[month.length - 1];
            if (Object.keys(lastDay).length && lastDay.day() !== 6) {
                for(let blankDay = lastDay.day(); blankDay < 6; blankDay++) {
                    month.push({});
                }
            }
            return month;
        },
        /**
         * 
         * Split a month array into weeks
         * 
         * @param {Array} month 
         * @returns Array weeks
         */
        splitMonthIntoWeeks (month) {
            let perChunk = 7;
            let weeks = month.reduce((resultArray, item, index) => { 
                const chunkIndex = Math.floor(index/perChunk);

                if(!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = [] // start a new chunk
                }
                resultArray[chunkIndex].push(item)
                return resultArray
            }, []);
            return weeks;
        }
    }
}