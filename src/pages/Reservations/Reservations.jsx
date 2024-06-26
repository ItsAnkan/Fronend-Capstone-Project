// Reservations.js
import React, { useState } from "react";
import "./Reservations.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import Popup from "../../components/Popup/Popup";
import { useNavigate } from "react-router-dom";
const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']

const Reservations = () => {
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		setIsPopupVisible(true)
	};

	return (
		<div data-testid="reservations-component" className="reservation">
			<div className="reservation-card">
				<h1 className="reservation-title">Table reservation</h1>
				<BookingForm
					availableTimes={availableTimes}
					onFormSubmit={handleFormSubmit}
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