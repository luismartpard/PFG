package com.luis.Taller.Repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.luis.Taller.Model.Mecanico;

@Repository
public interface MecanicoRepository extends JpaRepository<Mecanico, Long> {

	Page<Mecanico> findAll(Pageable pageable);
	
	@Transactional
	@Modifying
	@Query("UPDATE Mecanico m SET m.deleted = false WHERE m.id = ?1")
	int darAlta(Long id);
	
	@Transactional
	@Modifying
	@Query("UPDATE Mecanico m SET m.deleted = true WHERE m.id = ?1")
	boolean darBaja(Long id);
	
	boolean existsMecanicoByDni(String dni);
	boolean existsMecanicoByTelefono(String telefono);
	List<Mecanico> findByNombreContainsAndDeletedFalse(String nombre);
	
	@Query("SELECT m.id FROM Mecanico m WHERE m.dni = ?1")
	long returnIdMecanico(String dni);
	
	Page<Mecanico> findByNombreContains(String nombre, Pageable pageable);
	
}
