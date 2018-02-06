package br.com.thecemdente.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.thecemdente.model.Paciente;

public interface PacienteRepository extends CrudRepository<Paciente, Long>{

	public List<Paciente> findAll();
	
	public Paciente findByNome(String nome);
	
	//@Query("SELECT * FROM Paciente p  WHERE p.nome = ?1")
	@Query("select p from Paciente p where p.nome like %?1%")
	public List<Paciente> puxarNomeRepo(String nome);
	
	Paciente findOne(Long id);
	
	void delete(Long id);
	
	public Paciente findByCpf(String cpf);
	
	public Paciente findById(Long id);
}
