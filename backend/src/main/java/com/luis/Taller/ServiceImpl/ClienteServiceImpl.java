package com.luis.Taller.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.luis.Taller.Model.Cliente;
import com.luis.Taller.Repository.ClienteRepository;
import com.luis.Taller.Service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;

	@Override
	public Page<Cliente> findAll(Pageable pageable) {
		return this.clienteRepository.findAll(pageable);
	}

	@Override
	public Page<Cliente> findByDniContaining(String dni, Pageable pageable) {
		return this.clienteRepository.findByDniContaining(dni, pageable);
	}

	@Override
	public Cliente nuevoCliente(Cliente cliente) {
		return this.clienteRepository.save(cliente);
	}

	@Override
	public boolean deleteById(Long id) {
		try {
			this.clienteRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public boolean existsClienteByDni(String dni) {
		return this.clienteRepository.existsClienteByDni(dni);
	}

	@Override
	public boolean existsClienteByTelefono(String telefono) {
		return this.clienteRepository.existsClienteByTelefono(telefono);
	}

	@Override
	public long count() {
		return this.clienteRepository.count();
	}

	@Override
	public Page<Cliente> findByNombreContaining(String nombre, Pageable pageable) {
		return this.clienteRepository.findByNombreContaining(nombre, pageable);
	}

	


}
