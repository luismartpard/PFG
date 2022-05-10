package com.luis.Taller.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.luis.Taller.Model.Mecanico;
import com.luis.Taller.Repository.MecanicoRepository;
import com.luis.Taller.Service.MecanicoService;

@Service
public class MecanicoServiceImpl implements MecanicoService {

	@Autowired
	private MecanicoRepository mecanicoRepository;

	@Override
	public Page<Mecanico> findAll(Pageable pageable) {
		return this.mecanicoRepository.findAll(pageable);
	}

	@Override
	public boolean deleteById(Long id) {
		try {
			this.mecanicoRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Mecanico nuevoMecanico(Mecanico mecanico) {
		return this.mecanicoRepository.save(mecanico);
	}

	@Override
	public boolean existsMecanicoByDni(String dni) {
		return this.mecanicoRepository.existsMecanicoByDni(dni);
	}

	@Override
	public boolean existsMecanicoByTelefono(String telefono) {
		return this.mecanicoRepository.existsMecanicoByTelefono(telefono);
	}

	@Override
	public List<Mecanico> findByNombreContainsAndDeletedFalse(String nombre) {
		return this.mecanicoRepository.findByNombreContainsAndDeletedFalse(nombre);
	}

	@Override
	public long returnIdMecanico(String dni) {
		return this.mecanicoRepository.returnIdMecanico(dni);
	}

	@Override
	public boolean darBaja(Long id) {
		return this.mecanicoRepository.darBaja(id);
	}

	@Override
	public int darAlta(Long id) {
		return this.mecanicoRepository.darAlta(id);
	}

	@Override
	public Page<Mecanico> findByNombreContains(String nombre, Pageable pageable) {
		return this.mecanicoRepository.findByNombreContains(nombre, pageable);
	}
	
}
