package com.luis.Taller.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luis.Taller.Model.Cliente;
import com.luis.Taller.ServiceImpl.ClienteServiceImpl;

@RestController
@RequestMapping("/cliente/")
@CrossOrigin("*")
public class ClienteController {

	@Autowired
	private ClienteServiceImpl clienteServiceImpl;

	@RequestMapping("/paged")
	public Page<Cliente> findAll(Pageable pageable) {
		return this.clienteServiceImpl.findAll(pageable);
	}

	@RequestMapping("/search/dni/{dni}")
	public Page<Cliente> findByDniContaining(@PathVariable("dni") String dni, Pageable pageable) {
		return this.clienteServiceImpl.findByDniContaining(dni, pageable);
	}

	@RequestMapping("/new")
	public Cliente nuevoCliente(@RequestBody Cliente cliente) {
		return this.clienteServiceImpl.nuevoCliente(cliente);
	}

	@RequestMapping("/delete/{id}")
	public boolean deleteById(@PathVariable("id") Long id) {
		return this.clienteServiceImpl.deleteById(id);
	}

	@RequestMapping("/exists/dni/{dni}")
	public boolean existsClienteByDni(@PathVariable("dni") String dni) {
		return this.clienteServiceImpl.existsClienteByDni(dni);
	}

	@RequestMapping("/exists/telefono/{telefono}")
	public boolean existsClienteByTelefono(@PathVariable("telefono") String telefono) {
		return this.clienteServiceImpl.existsClienteByTelefono(telefono);
	}

	@RequestMapping("/total")
	public long count() {
		return this.clienteServiceImpl.count();
	}

	@RequestMapping("/search/nombre/{nombre}")
	public Page<Cliente> findByNombreContaining(@PathVariable("nombre") String nombre, Pageable pageable) {
		return this.clienteServiceImpl.findByNombreContaining(nombre, pageable);
	}

}
