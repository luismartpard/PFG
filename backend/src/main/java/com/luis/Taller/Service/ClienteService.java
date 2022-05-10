package com.luis.Taller.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.luis.Taller.Model.Cliente;

public interface ClienteService {

	public Page<Cliente> findAll(Pageable pageable);

	public Page<Cliente> findByDniContaining(String dni, Pageable pageable);

	public Cliente nuevoCliente(Cliente cliente);

	public boolean deleteById(Long id);

	public boolean existsClienteByDni(String dni);

	public boolean existsClienteByTelefono(String telefono);

	public long count();
	
	public Page<Cliente> findByNombreContaining(String nombre, Pageable pageable);
	
	
}
