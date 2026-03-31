package com.reservationapp.controller;

import com.reservationapp.dto.ReservationDTO;
import com.reservationapp.entity.Reservation;
import com.reservationapp.service.ReservationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping("/book")
    public Reservation bookReservation(@RequestBody ReservationDTO dto) {
        return reservationService.bookReservation(dto);
    }

    @GetMapping("/user/{userId}")
    public List<Reservation> getUserReservations(@PathVariable Long userId) {
        return reservationService.getReservationsByUser(userId);
    }

    @DeleteMapping("/{id}")
    public String cancelReservation(@PathVariable Long id) {
        reservationService.cancelReservation(id);
        return "{\"message\":\"Reservation cancelled successfully\"}";
    }
}
