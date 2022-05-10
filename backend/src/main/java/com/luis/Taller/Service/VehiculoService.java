package com.luis.Taller.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.luis.Taller.Model.Vehiculo;

public interface VehiculoService {

	public Page<Vehiculo> findAll(Pageable pageable);
	public long count();
	public Vehiculo nuevoVehiculo(Vehiculo vehiculo);
	public boolean existsVehiculoByMatricula(String matricula);
	public Page<Vehiculo> findByMatriculaContaining(String matricula, Pageable pageable);
	
}
