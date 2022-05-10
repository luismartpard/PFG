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

import org.hibernate.annotations.Filter;
import org.hibernate.annotations.FilterDef;
import org.hibernate.annotations.ParamDef;
import org.hibernate.annotations.SQLDelete;

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
@Table(name = "CLIENTES")
@SQLDelete(sql = "UPDATE CLIENTES SET deleted = true WHERE cliente_id = ?")
@FilterDef(name = "deletedClienteFilter", parameters = @ParamDef(name = "isDeleted", type = "boolean"))
@Filter(name = "deletedClienteFilter", condition = "deleted = :isDeleted")
public class Cliente {

	/**
	 * Relación la tabla cliente
	 */
	@OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties(value = "cliente")
	private List<Vehiculo> vehiculos;

	/**
	 * Los demás atributos
	 */
	@Id
	@Column(name = "cliente_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "dni")
	private String dni;

	@Column(name = "nombre")
	private String nombre;

	@Column(name = "pApellido")
	private String papellido;

	@Column(name = "sApellido")
	private String sapellido;

	@Column(name = "telefono")
	private String telefono;

	@Column(name = "deleted")
	private boolean deleted;

}
