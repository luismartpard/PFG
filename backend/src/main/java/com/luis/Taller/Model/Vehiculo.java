package com.luis.Taller.Model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
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
@Table(name = "VEHICULOS")
public class Vehiculo {

	/**
	 * Relación con la tabla Vehículos
	 */
	@OneToMany(mappedBy = "vehiculo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("vehiculo")
	private List<Reparacion> reparaciones;
	
	/**
	 * Relación con la tabla Marcas
	 */
	@ManyToOne
	@JoinColumn(name = "marca_id", referencedColumnName = "marca_id")
	@JsonIgnoreProperties("marcas")
	private Marca marca;
	
	
	/**
	 * Relación con la tabla clientes
	 */
	@ManyToOne
	@JoinColumn(name = "cliente_id",referencedColumnName = "cliente_id")
	@JsonIgnoreProperties("vehiculos")
	private Cliente cliente;
	
	/**
	 * Los demás atributos
	 */
	
	@Id
	@Column(name = "vehiculo_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "matricula")
	private String matricula;
	
	@Column(name = "modelo")
	private String modelo;
	
	@Column(name = "fechaCompra")
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date fechacompra;
	
	@Column(name = "potencia")
	private short potencia;
	
	@Column(name = "combustible")
	private String combustible;
	
	@Column(name = "transmision")
	private String transmision;
	
	@Column(name = "km")
	private int km;
	
}