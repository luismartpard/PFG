package com.luis.Taller.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.luis.Taller.Model.Reparacion;

@Repository
public interface ReparacionRepository extends JpaRepository<Reparacion, Long> {

	Page<Reparacion> findAll(Pageable pageable);

	long count();

	@Transactional
	@Modifying
	@Query("UPDATE Reparacion r SET r.mecanico.id = ?2, r.estado = 1 WHERE r.id = ?1")
	void toAssing(Long idRep, Long idMec);

	@Transactional
	@Modifying
	@Query("UPDATE Reparacion r SET r.salida = NOW(), r.estado = 2 WHERE r.id = ?1")
	void finalizeRepair(Long idRep);
	
	@Query("SELECT r FROM Reparacion r WHERE r.id=?1")
	List<Reparacion> findByReparacion(Long id);
	
	@Query(value = "SELECT * FROM REPARACIONES ORDER BY reparacion_id DESC LIMIT 3", nativeQuery = true)
	List<Reparacion> ultimasReparaciones();
	
}