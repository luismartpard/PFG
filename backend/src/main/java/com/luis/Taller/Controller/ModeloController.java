package com.luis.Taller.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luis.Taller.Model.Modelo;
import com.luis.Taller.ServiceImpl.ModeloServiceImpl;

@RestController
@RequestMapping("/modelo/")
@CrossOrigin("*")
public class ModeloController {

	@Autowired
	private ModeloServiceImpl modeloServiceImpl;
	
	@RequestMapping("/new")
	public Modelo nuevoModelo(@RequestBody Modelo modelo) {
		return this.modeloServiceImpl.nuevoModelo(modelo);
	}
	
	@RequestMapping("/exists/modelo/{modelo}")
	public boolean existsModeloByNombre(@PathVariable("modelo") String modelo) {
		return this.modeloServiceImpl.existsModeloByNombre(modelo);
	}
	
	@RequestMapping("/list/{marca}")
	public List<Modelo> listModelos(@PathVariable("marca") long id){
		return this.modeloServiceImpl.listModelos(id);
	}
	
}
