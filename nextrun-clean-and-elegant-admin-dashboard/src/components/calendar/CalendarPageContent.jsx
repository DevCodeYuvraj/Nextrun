"use client";

import {
  useMemo,
  useState,
} from "react";

import CalendarCard from "./CalendarCard";
import ScheduleDetails from "./ScheduleDetails";
import NewScheduleModal from "./NewScheduleModal";
import ScheduleDetailsModal from "./ScheduleDetailsModal";

import {
  initialCalendarEvents,
  initialScheduleDetails,
} from "@/data/calendarData";

import styles from "./CalendarPageContent.module.css";

export default function CalendarPageContent() {
  const [events, setEvents] =
    useState(initialCalendarEvents);

  const [schedules, setSchedules] =
    useState(initialScheduleDetails);

  const [view, setView] =
    useState("month");

  const [currentDate, setCurrentDate] =
    useState(new Date(2021, 2, 1));

  const [selectedDate, setSelectedDate] =
    useState("2021-03-10");

  const [selectedEvent, setSelectedEvent] =
    useState(null);

  const [newScheduleOpen, setNewScheduleOpen] =
    useState(false);

  const [eventDetailsOpen, setEventDetailsOpen] =
    useState(false);

  const [scheduleExpanded, setScheduleExpanded] =
    useState(false);

  const selectedDayEvents = useMemo(() => {
    return events.filter(
      (event) =>
        selectedDate >= event.date &&
        selectedDate <=
          (event.endDate ||
            event.date)
    );
  }, [events, selectedDate]);

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handleOpenEvent = (event) => {
    setSelectedEvent(event);
    setSelectedDate(event.date);
    setEventDetailsOpen(true);
  };

  const handleOpenSchedule = (
    schedule
  ) => {
    setSelectedEvent(schedule);
    setSelectedDate(schedule.date);
    setEventDetailsOpen(true);
  };

  const handleAddSchedule = (
    schedule
  ) => {
    const newSchedule = {
      id: Date.now(),
      ...schedule,
    };

    setEvents((previous) => [
      ...previous,
      newSchedule,
    ]);

    setSchedules((previous) => [
      newSchedule,
      ...previous,
    ]);

    setSelectedDate(
      newSchedule.date
    );

    const [
      year,
      month,
    ] = newSchedule.date
      .split("-")
      .map(Number);

    setCurrentDate(
      new Date(year, month - 1, 1)
    );

    setNewScheduleOpen(false);
  };

  const handleUpdateEvent = (
    updatedEvent
  ) => {
    setEvents((previous) =>
      previous.map((event) =>
        event.id === updatedEvent.id
          ? updatedEvent
          : event
      )
    );

    setSchedules((previous) =>
      previous.map((schedule) =>
        schedule.id ===
        updatedEvent.id
          ? updatedEvent
          : schedule
      )
    );

    setSelectedEvent(
      updatedEvent
    );
  };

  const handleDeleteEvent = (
    eventId
  ) => {
    setEvents((previous) =>
      previous.filter(
        (event) =>
          event.id !== eventId
      )
    );

    setSchedules((previous) =>
      previous.filter(
        (schedule) =>
          schedule.id !== eventId
      )
    );

    setSelectedEvent(null);
    setEventDetailsOpen(false);
  };

  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <CalendarCard
            events={events}
            view={view}
            currentDate={
              currentDate
            }
            selectedDate={
              selectedDate
            }
            onViewChange={setView}
            onDateChange={
              setCurrentDate
            }
            onSelectDate={
              handleSelectDate
            }
            onEventClick={
              handleOpenEvent
            }
            onNewSchedule={() =>
              setNewScheduleOpen(true)
            }
          />
        </main>

        <aside
          className={styles.sidebar}
        >
          <ScheduleDetails
            schedules={schedules}
            expanded={
              scheduleExpanded
            }
            onToggleExpanded={() =>
              setScheduleExpanded(
                (previous) =>
                  !previous
              )
            }
            onScheduleClick={
              handleOpenSchedule
            }
          />
        </aside>
      </div>

      <NewScheduleModal
        open={newScheduleOpen}
        selectedDate={selectedDate}
        onClose={() =>
          setNewScheduleOpen(false)
        }
        onAdd={handleAddSchedule}
      />

      <ScheduleDetailsModal
        open={eventDetailsOpen}
        event={selectedEvent}
        onClose={() =>
          setEventDetailsOpen(false)
        }
        onUpdate={
          handleUpdateEvent
        }
        onDelete={
          handleDeleteEvent
        }
      />
    </>
  );
}