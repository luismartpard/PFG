package com.luis.Taller.Repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.luis.Taller.Model.Marca;

@Repository
public interface MarcaRepository extends JpaRepository<Marca, Long>{

	Page<Marca> findAll(Pageable pageable);
	List<Marca> findAll();
	
	@Query("SELECT m.id FROM Marca m WHERE m.nombre = ?1")
	long recogerId(String marca);
	boolean existsMarcaByNombre(String marca);
	
	Page<Marca> findByNombreContaining(String marca, Pageable pageable);
	
}