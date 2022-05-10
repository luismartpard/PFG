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

import com.luis.Taller.Model.Reparacion;
import com.luis.Taller.ServiceImpl.ReparacionServiceImpl;

@RestController
@RequestMapping("/reparacion/")
@CrossOrigin("*")
public class ReparacionController {

	@Autowired
	private ReparacionServiceImpl reparacionServiceImpl;

	@RequestMapping("/paged")
	public Page<Reparacion> findAll(Pageable pageable) {
		return this.reparacionServiceImpl.findAll(pageable);
	}

	@RequestMapping("/total")
	public long count() {
		return this.reparacionServiceImpl.count();
	}

	@RequestMapping("/assign/{idRep},{idMec}")
	public void toAssing(@PathVariable("idRep") Long idRep, @PathVariable("idMec") Long idMec) {
		this.reparacionServiceImpl.toAssing(idRep, idMec);
	}
	
	@RequestMapping("/search/repair/{id}")
	public List<Reparacion> findByReparacion(@PathVariable("id") Long id){
		return this.reparacionServiceImpl.findByReparacion(id);
	}
	
	@RequestMapping("/new")
	public Reparacion nuevaReparacion(@RequestBody Reparacion reparacion) {
		return this.reparacionServiceImpl.nuevaReparacion(reparacion);
	}
	
	@RequestMapping("/finalize/{id}")
	public void finalizeRepair(@PathVariable("id") Long idRep) {
		this.reparacionServiceImpl.finalizeRepair(idRep);
	}
	
	@RequestMapping("/ultimas")
	public List<Reparacion> ultimasReparaciones(){
		return this.reparacionServiceImpl.ultimasReparaciones();
	}

}