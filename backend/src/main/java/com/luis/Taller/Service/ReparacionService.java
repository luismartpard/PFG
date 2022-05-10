package com.luis.Taller.Service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.luis.Taller.Model.Reparacion;

public interface ReparacionService {

	public Page<Reparacion> findAll(Pageable pageable);
	public long count();
	public void toAssing(Long idRep, Long idMec);
	public List<Reparacion> findByReparacion(Long id);
	public Reparacion nuevaReparacion(Reparacion reparacion);
	public void finalizeRepair(Long idRep);
	public List<Reparacion> ultimasReparaciones();
	
}
