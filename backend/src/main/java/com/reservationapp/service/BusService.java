package com.reservationapp.service;

import com.reservationapp.entity.Bus;
import com.reservationapp.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BusService {
    @Autowired
    private BusRepository busRepository;

    public Bus addBus(Bus bus) {
        return busRepository.save(bus);
    }

    public List<Bus> search(String source, String destination) {
        return busRepository.findBySourceAndDestination(source, destination);
    }

    public void deleteBus(Long id) {
        busRepository.deleteById(id);
    }

    public Bus updateBus(Long id, Bus updatedBus) {
        Bus bus = busRepository.findById(id).orElseThrow();
        bus.setSource(updatedBus.getSource());
        bus.setDestination(updatedBus.getDestination());
        bus.setDepartureTime(updatedBus.getDepartureTime());
        bus.setSeatCapacity(updatedBus.getSeatCapacity());
        return busRepository.save(bus);
    }
}
