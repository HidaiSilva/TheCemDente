package br.com.thecemdente.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.thecemdente.model.UsuarioAutorizacao;
import br.com.thecemdente.model.Usuario;

public interface UsuarioAutorizacaoRepository extends CrudRepository<UsuarioAutorizacao, Integer>{
	public UsuarioAutorizacao findByUsuario(Usuario auto);		
}
