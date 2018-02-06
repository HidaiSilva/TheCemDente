package br.com.thecemdente.model;

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

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.thecemdente.view.View;

@Entity
@Table(name = "PAC_PACIENTE")
public class Paciente {

	@Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "PAC_ID")
	//@JsonView({View.All.class, View.Alternative.class})
	private Long id;
    
    @Column(name = "PAC_NOME", unique=true, nullable = false)
    //@JsonView({View.All.class, View.Alternative.class})
    private String nome;
    
    @Column(name = "PAC_RG", nullable = true)
    //@JsonView({View.All.class, View.Alternative.class})
    private String rg;
    
    @Column(name = "PAC_CPF", nullable = true)
    @JsonView({View.All.class, View.Alternative.class})
    private String cpf;
    
    @Column(name = "PAC_ESTADO", nullable = true)
    @JsonView({View.All.class, View.Alternative.class})
    private String estado;
    
    @Column(name = "PAC_CIDADE", nullable = true)
    @JsonView({View.All.class, View.Alternative.class})
    private String cidade;
    
    @Column(name = "PAC_BAIRRO", nullable = true)
    @JsonView({View.All.class, View.Alternative.class})
    private String bairro;
    
    @Column(name = "PAC_ENDERECO", nullable = true)
    @JsonView({View.All.class, View.Alternative.class})
    private String endereco;
    
    @Column(name = "PAC_NUMERO", nullable = true)
    @JsonView({View.All.class, View.Alternative.class})
    private Integer numero;

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

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}
	
	public String getCpf() {
		return cpf;
	}
	
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	public String getEstado() {
		return estado;
	}
	
	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	public String getCidade() {
		return cidade;
	}
	
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	
	public String getBairro() {
		return bairro;
	}
	
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	
	public String getEndereco() {
		return endereco;
	}
	
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	
	public Integer getNumero() {
		return numero;
	}
	
	public void setNumero(Integer numero) {
		this.numero = numero;
	}

	@Override
	public String toString() {
		return "Paciente [id= " + id + ", nome= " + nome +  ", rg= " + rg + " cpf= " + cpf + "estado= "+ estado + "cidade= "+ cidade +
				"bairro= "+ bairro + "endereco= " + endereco + "numero= "+ numero +"]";
	}
    
}
