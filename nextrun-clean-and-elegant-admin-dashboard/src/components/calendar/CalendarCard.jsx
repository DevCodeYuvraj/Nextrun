"use client";

import CalendarToolbar from "./CalendarToolbar";
import MonthCalendar from "./MonthCalendar";
import WeeklyCalendar from "./WeeklyCalendar";
import DayCalendar from "./DayCalendar";

import styles from "./CalendarCard.module.css";

export default function CalendarCard({
  events,
  view,
  currentDate,
  selectedDate,
  onViewChange,
  onDateChange,
  onSelectDate,
  onEventClick,
  onNewSchedule,
}) {
  return (
    <section className={styles.card}>
      <CalendarToolbar
        view={view}
        currentDate={currentDate}
        onViewChange={onViewChange}
        onDateChange={onDateChange}
        onNewSchedule={onNewSchedule}
      />

      <div className={styles.content}>
        {view === "month" && (
          <MonthCalendar
            events={events}
            currentDate={currentDate}
            selectedDate={selectedDate}
            onSelectDate={onSelectDate}
            onEventClick={onEventClick}
          />
        )}

        {view === "week" && (
          <WeeklyCalendar
            events={events}
            currentDate={currentDate}
            selectedDate={selectedDate}
            onSelectDate={onSelectDate}
            onEventClick={onEventClick}
          />
        )}

        {view === "day" && (
          <DayCalendar
            events={events}
            currentDate={currentDate}
            selectedDate={selectedDate}
            onSelectDate={onSelectDate}
            onEventClick={onEventClick}
          />
        )}
      </div>
    </section>
  );
}