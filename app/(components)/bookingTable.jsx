"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./bookingTable.module.css";

const BookingTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const generateDates = (start) => {
    return [...Array(5)].map((_, idx) => {
      const date = new Date(start);
      date.setDate(date.getDate() + idx);
      return {
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
        }),
        fullDate: date.toISOString().split("T")[0],
      };
    });
  };

  useEffect(() => {
    setDates(generateDates(startDate));
  }, [startDate]);

  const timeSlots = [
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const handleNext = () => {
    const nextDate = new Date(startDate);
    nextDate.setDate(nextDate.getDate() + 5);
    setStartDate(nextDate);
  };

  const handlePrev = () => {
    const prevDate = new Date(startDate);
    prevDate.setDate(prevDate.getDate() - 5);
    setStartDate(prevDate);
  };

  const handleSlotClick = (date, time) => {
    setSelectedSlot(`${date}-${time}`);
  };

  return (
    <div className={`${styles.container} table container`}>
      <div className={styles.header}>
        <div className={styles.scrollButton} onClick={handlePrev}>
          &laquo;
        </div>
        <div className={styles.scrollButton} onClick={handleNext}>
          &raquo;
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {dates.map((d, idx) => (
                <th key={idx}>
                  <div className={styles.dayName}>{d.day}</div>
                  <div className={styles.dayDate}>{d.date}</div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {timeSlots.map((time) => (
              <tr key={time}>
                {dates.map((d, idx) => {
                  const slotKey = `${d.fullDate}-${time}`;
                  const isSelected = selectedSlot === slotKey;

                  return (
                    <td
                      key={idx}
                      className={`${styles.slot} ${
                        isSelected ? styles.activeSlot : ""
                      }`}
                      onClick={() => handleSlotClick(d.fullDate, time)}
                    >
                      <div className={styles.timeText}>{time}</div>
                      <div className={styles.bookNow}>
                        {" "}
                        <Link
                          href={"https://rzp.io/rzp/Rfwhtww"}
                          className="text-decoration-none text-white"
                        >
                          BOOK NOW
                        </Link>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
