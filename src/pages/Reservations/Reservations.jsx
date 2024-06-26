// Reservations.js
import React, { useReducer } from "react";
import "./Reservations.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../utils/Api";

// const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']

const Reservations = () => {
	const navigate = useNavigate();

	const submitForm = (values) => {
		if (submitAPI(values)) {
			navigate('/confirm-booking')
		}
	};

	const updateTimes = (availableTimes, date) => {
		const response = fetchAPI(new Date(date));
		return response.length !== 0 ? response : availableTimes;
	};

	const initializeTimes = (initialAvailableTimes) => [
		...initialAvailableTimes,
		...fetchAPI(new Date()),
	];

	const [availableTimes, dispatchOnDateChange] = useReducer(
		updateTimes,
		[],
		initializeTimes
	);

	return (
		<div className="reservation">
			<div className="reservation-card">
				<h1 className="reservation-title">Table reservation</h1>
				<BookingForm
					availableTimes={availableTimes}
					onFormSubmit={submitForm}
					dispatchOnDateChange={dispatchOnDateChange}
				/>
			</div>
		</div>
	);
};

export default Reservations;