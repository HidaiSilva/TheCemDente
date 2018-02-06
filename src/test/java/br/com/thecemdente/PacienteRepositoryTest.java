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
import br.com.thecemdente.repository.PacienteRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:/applicationContext.xml" })
@Rollback
@Transactional
public class PacienteRepositoryTest extends AbstractTransactionalJUnit4SpringContextTests {

	@Autowired
	private PacienteRepository pacienteRepo;
	
	public void setPacienteRepo(PacienteRepository pacienteRepo) {
		this.pacienteRepo = pacienteRepo;
	}
	
	@Test
	public void testeInsercao() {
		Paciente paciente = new Paciente();
		paciente.setNome("Willy");
		//paciente.setSenha("calopsitas");
		pacienteRepo.save(paciente);
		assertTrue(paciente.getId() != null);
	}
	
	@Test
	public void testeDelete() {
		Paciente paciente = new Paciente();
		paciente.setNome("Willy");
		//paciente.setSenha("calopsitas");
		
		pacienteRepo.save(paciente);
		pacienteRepo.delete(paciente);
		assertNull(pacienteRepo.findByNome("Willy"));	
	}
	
	@Test
	public void testeBusca() {
		Paciente paciente = new Paciente();
		
		paciente.setNome("Willy");
		//paciente.setSenha("calopsitas");
		
		pacienteRepo.save(paciente);
		
		assertTrue(pacienteRepo.findByNome("Willy").getNome().equals(paciente.getNome()));
	}
}
