package br.com.thecemdente.service;

import br.com.thecemdente.model.Patologia;

public interface PatologiaService {
	public void createPatologia(String nome, String descricao);
	public void buscaPaciente();
	public Patologia buscaNome(String nome);
	public void deletar(Long id);
}
