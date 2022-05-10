package com.luis.Taller.Model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "MARCAS")
public class Marca {
	
	/**
	 * Relación con la tabla modelos
	 */
	@OneToMany(mappedBy = "marca", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("marca")
	private List<Modelo> modelos;
	
	/**
	 * Relación con la tabla vehículos
	 */
	@OneToMany(mappedBy = "marca", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("marca")
	private List<Vehiculo> vehiculos;
	
	/**
	 * Los demás atributos
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "marca_id")
	private Long id;
	
	@NotNull
	@Column(name = "nombre")
	private String nombre;
	
}
