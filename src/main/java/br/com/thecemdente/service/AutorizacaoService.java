package br.com.thecemdente.service;

import java.util.List;

import br.com.thecemdente.model.Autorizacao;

public interface AutorizacaoService {
	
    public Autorizacao salvar(Autorizacao autorizacao);
	
	public void excluir(Long idAutorizacao);
	
	public List<Autorizacao> todos();
	
	public List<Autorizacao> buscar(String nome);
	
	public Autorizacao buscarPorId(Long idAutorizacao);

}
