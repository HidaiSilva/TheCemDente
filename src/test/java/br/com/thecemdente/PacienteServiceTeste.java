package br.com.thecemdente;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import br.com.thecemdente.model.Paciente;
import br.com.thecemdente.service.PacienteService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:/applicationContext.xml" })
@Rollback
@Transactional
public class PacienteServiceTeste extends AbstractTransactionalJUnit4SpringContextTests{
	
	@Autowired
	private PacienteService pacienteService;
	
	public void setPacienteService(PacienteService pacienteService) {
		this.pacienteService = pacienteService;
	}
	
	private static final String nome = "Eloisa2";
	Paciente paciente;
	@Test
	public void testeDelete() {
		pacienteService.createPaciente(paciente);
		assertTrue(pacienteService.buscarNome(nome).getNome().equals(nome));
	//	pacienteService.deletar(pacienteService.buscarNome(nome).getId());
		assertNull(pacienteService.buscarNome(nome));
	}
	
	@Test
	public void testeInsert() {
		pacienteService.createPaciente(paciente);
		assertTrue(pacienteService.buscarNome(nome).getNome().equals(nome));
	}
	

}
