import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import "./BookingForm.css";

function BookingForm ({ onFormSubmit, availableTimes }) {
	const defaultTime = availableTimes[0];

	const formik = useFormik({
		initialValues: {
			date: "",
			time: defaultTime,
			people: "",
			occasion: "",
		},
		validationSchema: Yup.object({
			date: Yup.string().required("Date is required"),
			time: Yup.string().required("Time is required"),
			people: Yup.number()
				.min(1, "Must be at least 1")
				.max(10, "Must be at most 10")
				.required("Number of people is required"),
			occasion: Yup.string().required("Occasion is required"),
		}),
		onSubmit: (values) => {
			onFormSubmit(values);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="reservation-container">
				<label htmlFor="date" className="containter-item-title">
					Date*
				</label>
				<input
					type="date"
					id="date"
					name="date"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.date}
					className={formik.touched.date && formik.errors.date ? "error" : ""}
				/>
				{formik.touched.date && formik.errors.date ? (
					<div className="error-message">{formik.errors.date}</div>
				) : null}
			</div>
			<div className="reservation-container">
				<label htmlFor="time" className="containter-item-title">
					Time*
				</label>
				<select
					id="time"
					name="time"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.time}
					className={formik.touched.time && formik.errors.time ? "error" : ""}
				>
					{availableTimes.map((time) => (
						<option key={time} value={time}>
							{time}
						</option>
					))}
				</select>
				{formik.touched.time && formik.errors.time ? (
					<div className="error-message">{formik.errors.time}</div>
				) : null}
			</div>
			<div className="reservation-container">
				<label htmlFor="people" className="containter-item-title">
					Number of people*
				</label>
				<input
					type="number"
					id="people"
					name="people"
					min={1}
					max={10}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.people}
					className={formik.touched.people && formik.errors.people ? "error" : ""}
				/>
				{formik.touched.people && formik.errors.people ? (
					<div className="error-message">{formik.errors.people}</div>
				) : null}
			</div>
			<div className="reservation-container">
				<label htmlFor="occasion" className="containter-item-title">
					Occasion*
				</label>
				<select
					id="occasion"
					name="occasion"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.occasion}
					className={formik.touched.occasion && formik.errors.occasion ? "error" : ""}
				>
					<option value="">Select an occasion</option>
					<option value="birthday">Birthday</option>
					<option value="anniversary">Anniversary</option>
					<option value="business">Business</option>
					<option value="other">Other</option>
				</select>
				{formik.touched.occasion && formik.errors.occasion ? (
					<div className="error-message">{formik.errors.occasion}</div>
				) : null}
			</div>
			<div className="reservation-button">
				<Button title="Book a table" type="submit" />
			</div>
		</form>
	);
};

export default BookingForm;
