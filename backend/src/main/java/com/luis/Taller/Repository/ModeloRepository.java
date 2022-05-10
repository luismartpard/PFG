package com.luis.Taller.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.luis.Taller.Model.Modelo;

@Repository
public interface ModeloRepository extends JpaRepository<Modelo, Long>{

	boolean existsModeloByNombre(String modelo);
	
	@Query("SELECT m FROM Modelo m WHERE m.marca.id = ?1")
	List<Modelo> listModelos(long id);
	
}
