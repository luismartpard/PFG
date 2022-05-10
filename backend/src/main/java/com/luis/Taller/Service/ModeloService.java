package com.luis.Taller.Service;

import java.util.List;

import com.luis.Taller.Model.Modelo;

public interface ModeloService {

	public Modelo nuevoModelo(Modelo modelo);
	public boolean existsModeloByNombre(String modelo);
	public List<Modelo> listModelos(long id);
	
}
