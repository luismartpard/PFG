package com.luis.Taller.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luis.Taller.Model.Vehiculo;
import com.luis.Taller.ServiceImpl.VehiculoServiceImpl;

@RestController
@RequestMapping("/vehiculo/")
@CrossOrigin("*")
public class VehiculoController {

	@Autowired
	private VehiculoServiceImpl vehiculoServiceImpl;

	@RequestMapping("/paged")
	public Page<Vehiculo> findAll(Pageable pageable) {
		return this.vehiculoServiceImpl.findAll(pageable);
	}
	
	@RequestMapping("/total")
	public long count() {
		return this.vehiculoServiceImpl.count();
	}
	
	@RequestMapping("/new")
	public Vehiculo nuevoVehiculo(@RequestBody Vehiculo vehiculo) {
		return this.vehiculoServiceImpl.nuevoVehiculo(vehiculo);
	}
	
	@RequestMapping("/exists/matricula/{matricula}")
	public boolean existsVehiculoByMatricula(@PathVariable("matricula") String matricula) {
		return this.vehiculoServiceImpl.existsVehiculoByMatricula(matricula);
	}
	
	@RequestMapping("/search/matricula/{matricula}")
	public Page<Vehiculo> findByMatriculaContaining(@PathVariable("matricula") String matricula, Pageable pageable) {
		return this.vehiculoServiceImpl.findByMatriculaContaining(matricula, pageable);
	}

}
