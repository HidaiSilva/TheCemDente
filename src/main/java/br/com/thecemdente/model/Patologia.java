package br.com.thecemdente.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "PATO_PATOLOGIA")
public class Patologia {

	@Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "PATO_ID")
	private Long id;
    
    @Column(name = "PATO_NOME", unique=true, nullable = false)
    private String nome;
    
    @Column(name = "PATO_DESCRICAO", nullable = false)
    private String descricao;
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "PAC_PACIENTE_PATO_PATOLOGIA", 
    	joinColumns = { @JoinColumn(name = "PAC_ID") }, 
    	inverseJoinColumns = { @JoinColumn(name = "PATO_ID") })
    private List<Paciente> pacientes;

	public List<Paciente> getPacientes() {
		return pacientes;
	}

	public void setPacientes(List<Paciente> pacientes) {
		this.pacientes = pacientes;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

     
    
}
