// Reservations.js
import React, { useState, useReducer } from "react";
import "./Reservations.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import Popup from "../../components/Popup/Popup";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../../utils/Api";

// const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']

const Reservations = () => {
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const navigate = useNavigate();

	const handleFormSubmit = (values) => {
		setIsPopupVisible(true)
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
		<div data-testid="reservations-component" className="reservation">
			<div className="reservation-card">
				<h1 className="reservation-title">Table reservation</h1>
				<BookingForm
					availableTimes={availableTimes}
					onFormSubmit={handleFormSubmit}
					dispatchOnDateChange={dispatchOnDateChange}
				/>
			</div>

			{isPopupVisible && (
				<Popup
					onClose={() => {
						setIsPopupVisible(false);
						navigate('/');
					}}
					title="Reservation Completed!"
					description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
				/>
			)}
		</div>
	);
};

export default Reservations;