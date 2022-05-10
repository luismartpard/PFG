package com.luis.Taller.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.luis.Taller.Model.Reparacion;
import com.luis.Taller.Repository.ReparacionRepository;
import com.luis.Taller.Service.ReparacionService;

@Service
public class ReparacionServiceImpl implements ReparacionService {

	@Autowired
	private ReparacionRepository reparacionRepository;
	
	@Override
	public Page<Reparacion> findAll(Pageable pageable) {
		return this.reparacionRepository.findAll(pageable);
	}

	@Override
	public long count() {
		return this.reparacionRepository.count();
	}

	@Override
	public void toAssing(Long idRep, Long idMec) {
		this.reparacionRepository.toAssing(idRep, idMec);
	}

	@Override
	public List<Reparacion> findByReparacion(Long id) {
		return this.reparacionRepository.findByReparacion(id);
	}

	@Override
	public Reparacion nuevaReparacion(Reparacion reparacion) {
		return this.reparacionRepository.save(reparacion);
	}

	@Override
	public void finalizeRepair(Long idRep) {
		this.reparacionRepository.finalizeRepair(idRep);
		
	}

	@Override
	public List<Reparacion> ultimasReparaciones() {
		return this.reparacionRepository.ultimasReparaciones();
	}

}
