package br.com.thecemdente.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.thecemdente.model.Paciente;
import br.com.thecemdente.model.Patologia;

public interface PatoRepository extends CrudRepository<Patologia, Long> {
	
	public Patologia findByNome(String nome);
	
	@Query("SELECT p FROM Patologia pa JOIN pa.pacientes p  WHERE pa.nome = ?1")
	public List<Paciente> buscaPaciente(String nome);
	
	public List<Patologia> findAll();
	
	public void delete(Long id);
}
