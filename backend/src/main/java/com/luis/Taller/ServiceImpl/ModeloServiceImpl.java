package com.luis.Taller.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luis.Taller.Model.Modelo;
import com.luis.Taller.Repository.ModeloRepository;
import com.luis.Taller.Service.ModeloService;

@Service
public class ModeloServiceImpl implements ModeloService {

	@Autowired
	private ModeloRepository modeloRepository;

	@Override
	public Modelo nuevoModelo(Modelo modelo) {
		return this.modeloRepository.save(modelo);
	}

	@Override
	public boolean existsModeloByNombre(String modelo) {
		return this.modeloRepository.existsModeloByNombre(modelo);
	}

	@Override
	public List<Modelo> listModelos(long id) {
		return this.modeloRepository.listModelos(id);
	}
	
}
