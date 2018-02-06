package br.com.thecemdente.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.thecemdente.model.Paciente;
import br.com.thecemdente.model.Patologia;
import br.com.thecemdente.repository.PatoRepository;

@Service("patologiaService")
public class PatologiaServiceImpl implements PatologiaService {
	
	@Autowired
	private PatoRepository patoRepo ;
	
	@Transactional
	public void createPatologia(String nome,String descricao) {
		Patologia patologia = new Patologia();
		
		patologia.setNome(nome);
		patologia.setDescricao(descricao);
		
		patoRepo.save(patologia);
		
		System.out.println(patologia.getDescricao());
	}

	//public Patologia buscarPatologia() {
		
//		return null;
	//}

	@Transactional
	public void buscaPaciente() {
		
		List<Paciente> paciente = patoRepo.buscaPaciente("Carie");
		
		for (Paciente paciente2 : paciente) {
			System.out.println("Apresenta o nome:...Open "+paciente2.getNome());
		}
		
	}
	@Transactional
	public Patologia buscaNome(String nome) {

		return patoRepo.findByNome(nome);
	}

	public void deletar(Long id) {
		patoRepo.delete(id);
		
	}
	
	
	
	
	

}
