package com.luis.Taller.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.luis.Taller.Model.Vehiculo;
import com.luis.Taller.Repository.VehiculoRepository;
import com.luis.Taller.Service.VehiculoService;

@Service
public class VehiculoServiceImpl implements VehiculoService {

	@Autowired
	private VehiculoRepository vehiculoRepository;
	
	@Override
	public Page<Vehiculo> findAll(Pageable pageable) {
		return this.vehiculoRepository.findAll(pageable);
	}

	@Override
	public long count() {
		return this.vehiculoRepository.count();
	}

	@Override
	public Vehiculo nuevoVehiculo(Vehiculo vehiculo) {
		return this.vehiculoRepository.save(vehiculo);
	}

	@Override
	public boolean existsVehiculoByMatricula(String matricula) {
		return this.vehiculoRepository.existsVehiculoByMatricula(matricula);
	}

	@Override
	public Page<Vehiculo> findByMatriculaContaining(String matricula, Pageable pageable) {
		return this.vehiculoRepository.findByMatriculaContaining(matricula, pageable);
	}

}
