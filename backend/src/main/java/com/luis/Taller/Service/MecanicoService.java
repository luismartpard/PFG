package com.luis.Taller.Service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.luis.Taller.Model.Mecanico;

public interface MecanicoService {

	public Page<Mecanico> findAll(Pageable pageable);

	public boolean deleteById(Long id);

	public Mecanico nuevoMecanico(Mecanico mecanico);

	boolean existsMecanicoByDni(String dni);

	boolean existsMecanicoByTelefono(String telefono);

	public List<Mecanico> findByNombreContainsAndDeletedFalse(String nombre);
	
	public long returnIdMecanico(String dni);
	
	public int darAlta(Long id);
	
	public boolean darBaja(Long id);
	
	public Page<Mecanico> findByNombreContains(String nombre, Pageable pageable);
	

}
