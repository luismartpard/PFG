package com.luis.Taller.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.luis.Taller.Model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

	Page<Cliente> findAll(Pageable pageable);
	Page<Cliente> findByDniContaining(String dni, Pageable pageable);
	boolean existsClienteByDni(String dni);
	boolean existsClienteByTelefono(String telefono);
	long count();
	Page<Cliente> findByNombreContaining(String nombre, Pageable pageable);

}
