package com.luis.Taller.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.luis.Taller.Model.Marca;
import com.luis.Taller.Repository.MarcaRepository;
import com.luis.Taller.Service.MarcaService;

@Service
public class MarcaServiceImpl implements MarcaService {

	@Autowired
	private MarcaRepository marcaRepository;

	@Override
	public Marca nuevaMarca(Marca marca) {
		return this.marcaRepository.save(marca);
	}

	@Override
	public Page<Marca> findAll(Pageable pageable) {
		return this.marcaRepository.findAll(pageable);
	}

	@Override
	public List<Marca> findAll() {
		return this.marcaRepository.findAll();
	}

	@Override
	public long recogerId(String marca) {
		return this.marcaRepository.recogerId(marca);
	}

	@Override
	public boolean existsMarcaByNombre(String marca) {
		return this.marcaRepository.existsMarcaByNombre(marca);
	}

	@Override
	public Page<Marca> findByNombreContaining(String marca, Pageable pageable) {
		return this.marcaRepository.findByNombreContaining(marca, pageable);
	}
	
}
