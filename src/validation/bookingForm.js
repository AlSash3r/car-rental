import * as Yup from "yup";
const tomorrow = new Date();
tomorrow.setHours(0, 0, 0, 0);
tomorrow.setDate(tomorrow.getDate() + 1);

export const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .matches(
      /^[A-Za-zА-Яа-яЁёІіЇїЄє\s'-]+$/,
      "Name can contain only letters, spaces, apostrophes, and hyphens"
    )
    .required("Name is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),

  date: Yup.date()
    .typeError("Invalid date")
    .min(tomorrow, "Booking date must be in the future")
    .required("Booking date is required"),

  comment: Yup.string().max(500, "Comment is too long"),
});
