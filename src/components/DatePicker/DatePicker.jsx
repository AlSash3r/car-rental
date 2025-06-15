import ReactDatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import styles from "./DatePicker.module.css";

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <div className={styles.pickerWrapper}>
      <FaRegCalendarAlt className={styles.icon} />
      <ReactDatePicker
        selected={selectedDate}
        onChange={onDateChange}
        placeholderText="Choose a booking date"
        dateFormat="dd.MM.yyyy"
        className={styles.input}
        isClearable
        showPopperArrow={false}
      />
    </div>
  );
};

export default DatePicker;