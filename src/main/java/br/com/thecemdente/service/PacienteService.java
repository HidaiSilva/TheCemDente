package br.com.thecemdente.service;

import java.util.List;

import br.com.thecemdente.model.Paciente;

public interface PacienteService {
	
	public Paciente createPaciente(Paciente paciente); 
	
	public void deletar(Paciente paciente);
	
	public void update(Paciente paciente);
	
	public List<Paciente> buscarPacientes();
	
	public Paciente buscarNome(String nome);
	
	public List<Paciente> puxarNomeService(String nome);
	
	public Paciente buscarPacienteByCpf(String cpf);
	
	public Paciente buscarPacienteById(Long id);
	

}
