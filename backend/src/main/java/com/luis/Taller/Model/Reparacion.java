package com.luis.Taller.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name ="REPARACIONES")
public class Reparacion {
	
	/**
	 * Relación con la tabla mecanico
	 */
	@ManyToOne
	@JoinColumn(name = "mecanico_id", referencedColumnName = "mecanico_id")
	@JsonIgnoreProperties("reparaciones")
	private Mecanico mecanico;
	
	/**
	 * Relación con la tabla vehiculos
	 */
	@ManyToOne
	@JoinColumn(name = "vehiculo_id", referencedColumnName = "vehiculo_id")
	@JsonIgnoreProperties("reparaciones")
	private Vehiculo vehiculo;
	
	/**
	 * Los demás atributos
	 */
	@Id
	@Column(name = "reparacion_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "descripcionCliente")
	private String descliente;
	
	@Column(name = "fechaEntrada")
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date entrada;
	
	@Column(name = "fechaSalida")
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date salida;
	
	@Column(name = "estado")
	private short estado;
	
}
