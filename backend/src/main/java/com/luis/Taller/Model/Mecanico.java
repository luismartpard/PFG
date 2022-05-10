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
@Table(name = "MECANICOS")
@SQLDelete(sql = "UPDATE MECANICOS SET deleted = true WHERE mecanico_id = ?")
@FilterDef(name = "deletedMecanicoFilter", parameters = @ParamDef(name = "isDeleted", type = "boolean"))
@Filter(name = "deletedMecanicoFilter", condition = "deleted = :isDeleted")
public class Mecanico {

	/**
	 * Relación con la tabla reparaciones
	 */
	@OneToMany(mappedBy = "mecanico", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("mecanico")
	private List<Reparacion> reparaciones;
	
	/**
	 * Los demás atributos
	 */
	@Id
	@Column(name = "mecanico_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "dni")
	private String dni;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "papellido")
	private String papellido;
	
	@Column(name = "sapellido")
	private String sapellido;
	
	@Column(name = "telefono")
	private String telefono;
	
	@Column(name = "deleted")
	private boolean deleted;
	
}
