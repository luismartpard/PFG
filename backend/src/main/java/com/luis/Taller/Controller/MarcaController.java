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

import com.luis.Taller.Model.Marca;
import com.luis.Taller.ServiceImpl.MarcaServiceImpl;

@RestController
@RequestMapping("/marca/")
@CrossOrigin("*")
public class MarcaController {

	@Autowired
	private MarcaServiceImpl marcaServiceImpl;
	
	@RequestMapping("/new")
	public Marca nuevaMarca(@RequestBody Marca marca) {
		return this.marcaServiceImpl.nuevaMarca(marca);
	}
	
	@RequestMapping("/paged")
	public Page<Marca> findAll(Pageable pageable){
		return this.marcaServiceImpl.findAll(pageable);
	}
	
	@RequestMapping("/list")
	public List<Marca> findAll(){
		return this.marcaServiceImpl.findAll();
	}
	
	@RequestMapping("/recoger/id/{marca}")
	public long recogerId(@PathVariable("marca") String marca) {
		return this.marcaServiceImpl.recogerId(marca);
	}
	
	@RequestMapping("/exists/marca/{marca}")
	public boolean existsMarcaByNombre(@PathVariable("marca") String marca) {
		return this.marcaServiceImpl.existsMarcaByNombre(marca);
	}
	
	@RequestMapping("/search/marca/{marca}")
	public Page<Marca> findByNombreContaining(@PathVariable("marca") String marca, Pageable pageable) {
		return this.marcaServiceImpl.findByNombreContaining(marca, pageable);
	}
	
}
