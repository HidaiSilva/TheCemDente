package br.com.thecemdente.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.thecemdente.model.Paciente;
import br.com.thecemdente.repository.PacienteRepository;

@Service("pacienteService")
public class PacienteServiceImpl implements PacienteService{

	@Autowired
	
	private PacienteRepository pacienteRepo ;
	
	@Transactional
	public void createPaciente(String nome, String senha,String rg) {
		
		Paciente paciente = new Paciente();
		paciente.setNome(nome);
		//paciente.setSenha(senha);
		paciente.setRg(rg);
		
		
		pacienteRepo.save(paciente);
		
		System.out.println(paciente.getId());
	}
//	public void setPacienteRepo(PacienteRepository pacienteRepo) {
//		this.pacienteRepo = pacienteRepo;
//	}
//	


	@Transactional
	public List<Paciente> buscarPacientes() {
		//TODO Auto-generated method stub
		return (pacienteRepo.findAll());
	}
	@Transactional
	public Paciente buscarNome(String nome) {
		// TODO Auto-generated method stub
		return (pacienteRepo.findByNome(nome));
	}

	@Transactional
	public void deletar(Paciente paciente) {
		pacienteRepo.delete(paciente);
		
	}

	@Override
	public void update(Paciente paciente) {
		pacienteRepo.save(paciente);
	}


	@Override
	public List<Paciente> puxarNomeService(String nome) {
		return pacienteRepo.puxarNomeRepo(nome);
	}



	public Paciente createPaciente(Paciente paciente) {
		Paciente currentPaciente = pacienteRepo.findByCpf(paciente.getCpf());
		if (currentPaciente== null){
			pacienteRepo.save(paciente);
		} else {
			currentPaciente.setNome(paciente.getNome());
			currentPaciente.setRg(paciente.getRg());
			currentPaciente.setCpf(paciente.getCpf());
			currentPaciente.setEstado(paciente.getEstado());
			currentPaciente.setCidade(paciente.getCidade());
			currentPaciente.setBairro(paciente.getBairro());
			currentPaciente.setEndereco(paciente.getEndereco());
			currentPaciente.setNumero(paciente.getNumero());
			
			pacienteRepo.save(currentPaciente);
		}
		return currentPaciente;
	}


	@Override
	public Paciente buscarPacienteByCpf(String cpf) {
		return pacienteRepo.findByCpf(cpf) ;
	}

	@Override
	public Paciente buscarPacienteById(Long id) {
		return pacienteRepo.findById(id);
	}
	
}
