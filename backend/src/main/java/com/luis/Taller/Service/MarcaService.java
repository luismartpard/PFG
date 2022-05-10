package com.luis.Taller.Service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.luis.Taller.Model.Marca;

public interface MarcaService {

	public Marca nuevaMarca(Marca marca);
	public Page<Marca> findAll(Pageable pageable);
	public List<Marca> findAll();
	public long recogerId(String marca);
	public boolean existsMarcaByNombre(String marca);
	public 	Page<Marca> findByNombreContaining(String marca, Pageable pageable);
	
}
