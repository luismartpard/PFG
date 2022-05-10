package com.luis.Taller.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.luis.Taller.Model.Vehiculo;

@Repository
public interface VehiculoRepository extends JpaRepository<Vehiculo, Long> {

	Page<Vehiculo> findAll(Pageable pageable);
	long count();
	boolean existsVehiculoByMatricula(String matricula);
	Page<Vehiculo> findByMatriculaContaining(String matricula, Pageable pageable);
	
}
