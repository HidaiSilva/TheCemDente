package br.com.thecemdente.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.thecemdente.model.Autorizacao;

public interface AutorizacaoRepository extends CrudRepository<Autorizacao, Long> {
	
	public List<Autorizacao> findByNomeContainsIgnoreCase(String nome);

}
