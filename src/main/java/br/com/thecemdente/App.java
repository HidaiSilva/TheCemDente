package br.com.thecemdente;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import br.com.thecemdente.model.Autorizacao;
import br.com.thecemdente.model.Paciente;
import br.com.thecemdente.model.Usuario;
import br.com.thecemdente.repository.AutorizacaoRepository;
import br.com.thecemdente.repository.PatoRepository;
import br.com.thecemdente.repository.UsuarioRepository;
import br.com.thecemdente.service.PacienteService;
import br.com.thecemdente.service.PatologiaService;
import br.com.thecemdente.service.SegurancaService;

public class App 
{

	public static void main( String[] args )
    {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
 
		// Recupera os repositorios
		//sAutorizacaoRepository autorizacaoRepo = (AutorizacaoRepository) context.getBean("autorizacaoRepository");
		UsuarioRepository usuarioRepo = (UsuarioRepository) context.getBean("usuarioRepository");
		//PatoRepository patoRepo = (PatoRepository) context.getBean("patoRepository");
		
		PacienteService pac = (PacienteService) context.getBean("pacienteService");
		PatologiaService pato = (PatologiaService) context.getBean("patologiaService");
		

		

		//("Miqueias","senha1","24");
		
		
		System.out.println("retornou"+pac.buscarNome("Kim"));
		
		
	
		pac.createPaciente(null );
		
		//pac.deletar(3L);
		System.out.println( "lista"+pac.buscarPacientes());
		pato.createPatologia("dodoi2", "quando a pessoa ta dodoi2");
		System.out.println(pato.buscaNome("dodoi2"));
		// Cria autorizacoes
		Autorizacao autorizacao1 = new Autorizacao();
		autorizacao1.setNome("Usuario");
		
		
		Autorizacao autorizacao2 = new Autorizacao();
		autorizacao2.setNome("Administrador");
		
		for(Usuario us: usuarioRepo.findByIdGreaterThan(0l)) {
			System.out.println("Usuario encontrado: " + us.getNome());
		}
		
		for(Usuario us: usuarioRepo.findByAutorizacoesNome("Usuario")) {
			System.out.println("Usuario encontrado 2: " + us.getNome());
		}
		
		for(Usuario us: usuarioRepo.buscaUsuario("au")) {
			System.out.println("Usuario encontrado 3: " + us.getNome());
		}
		
		SegurancaService seg = (SegurancaService)context.getBean("segurancaService");
    }
    
}
