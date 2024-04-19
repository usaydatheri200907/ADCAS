import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CalendarTable = ({ employees, userType, useremail }) => {
    const [currentDate, setCurrentDate] = useState(moment());

    function checkCurrentMonth(date) {
        const currentMonth = moment().format('YYYY-MM');
        return date < currentMonth;
    }

    const renderCalendarBody = () => {
        const daysInMonth = currentDate.daysInMonth();
        const firstDayOfMonth = currentDate.clone().startOf('month');
        const calendarRows = [];

        for (let day = 1; day <= daysInMonth; day++) {
            const date = firstDayOfMonth.clone();
            calendarRows.push(
                <tr key={day}>
                    {/* Render each cell for date */}
                </tr>
            );
            firstDayOfMonth.add(1, 'day');
        }

        return calendarRows;
    };

    return (
        <table className="calendar-table-m">
            <thead className='sticky-top'>
                <tr>
                    <th className="smallWidth responsive-header">Muaji</th>
                    <th className="smallWidth responsive-header">Java</th>
                    <th className="smallWidth">Data</th>
                    <th className="smallWidth responsive-header">Dita</th>

                </tr>
            </thead>
            <tbody>{renderCalendarBody()}</tbody>
        </table>
    );
};

export default CalendarTable;
