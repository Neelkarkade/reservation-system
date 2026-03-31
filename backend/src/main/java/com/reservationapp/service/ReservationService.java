package com.reservationapp.service;

import com.reservationapp.dto.ReservationDTO;
import com.reservationapp.entity.Reservation;
import com.reservationapp.repository.ReservationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;

    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    // Book Reservation
    public Reservation bookReservation(ReservationDTO dto) {
        Reservation reservation = new Reservation();
        reservation.setUserId(dto.getUserId());
        reservation.setBusId(dto.getBusId());
        reservation.setSeatNumber(dto.getSeatNumber());

        // ✅ Set travelDate: either from request or default to today
        if (dto.getTravelDate() != null) {
            reservation.setTravelDate(LocalDate.parse(dto.getTravelDate()));
        } else {
            reservation.setTravelDate(LocalDate.now());
        }

        reservation.setStatus("BOOKED");

        return reservationRepository.save(reservation);
    }

    // Get reservations by user
    public List<Reservation> getReservationsByUser(Long userId) {
        return reservationRepository.findByUserId(userId);
    }

    // Cancel reservation
    public void cancelReservation(Long id) {
        reservationRepository.deleteById(id);
    }
}
