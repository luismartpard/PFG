package com.luis.Taller.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luis.Taller.Model.Mecanico;
import com.luis.Taller.ServiceImpl.MecanicoServiceImpl;

@RestController
@RequestMapping("/mecanico/")
@CrossOrigin("*")
public class MecanicoController {

	@Autowired
	private MecanicoServiceImpl mecanicoServiceImpl;

	@RequestMapping("/paged")
	public Page<Mecanico> findAll(Pageable pageable) {
		return this.mecanicoServiceImpl.findAll(pageable);
	}

	@RequestMapping("/delete/{id}")
	boolean deleteById(@PathVariable("id") Long id) {
		return this.mecanicoServiceImpl.deleteById(id);
	}
	
	@RequestMapping("/new")
	public Mecanico nuevoMecanico(@RequestBody Mecanico mecanico) {
		return this.mecanicoServiceImpl.nuevoMecanico(mecanico);
	}

	@RequestMapping("/exists/dni/{dni}")
	public boolean existsMecanicoByDni(@PathVariable("dni") String dni) {
		return this.mecanicoServiceImpl.existsMecanicoByDni(dni);
	}
	
	@RequestMapping("/exists/telefono/{telefono}")
	public boolean existsMecanicoByTelefono(@PathVariable("telefono") String telefono) {
		return this.mecanicoServiceImpl.existsMecanicoByTelefono(telefono);
	}
	
	
	@RequestMapping("/search/mecanico/{nombre}")
	public 	List<Mecanico> findByNombreContainsAndDeletedFalse(@PathVariable("nombre") String nombre){
		return this.mecanicoServiceImpl.findByNombreContainsAndDeletedFalse(nombre);
	}
	
	@RequestMapping("/search/mecanico/nombre/{nombre}")
	public Page<Mecanico> findByNombreContains(@PathVariable("nombre") String nombre, Pageable pageable){
		return this.mecanicoServiceImpl.findByNombreContains(nombre, pageable);
	}
	
	@RequestMapping("/return/{dni}")
	public long returnIdMecanico(@PathVariable("dni") String dni) {
		return this.mecanicoServiceImpl.returnIdMecanico(dni);
	}
	
	@RequestMapping("/deleted/{id}")
	public boolean darBaja(@PathVariable("id") Long id) {
		return this.mecanicoServiceImpl.darBaja(id);
	}
	
	@RequestMapping("/update/{id}")
	public int darAlta(@PathVariable("id") Long id) {
		return this.mecanicoServiceImpl.darAlta(id);
	}
	
}
