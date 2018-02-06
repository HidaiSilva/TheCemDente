package br.com.thecemdente.controler;




import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.annotation.JsonView;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;

import br.com.thecemdente.model.Autorizacao;
import br.com.thecemdente.model.Paciente;
import br.com.thecemdente.service.PacienteService;
import br.com.thecemdente.view.View;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/paciente")
public class PacienteControler {

	@Autowired
	private PacienteService pacservice;



	public void setPacservice(PacienteService pacservice) {
		this.pacservice = pacservice;
	}
	
	//Buscar uma lista de pacientes
	@RequestMapping(value = "/getall", produces = MediaType.APPLICATION_JSON_VALUE)
	//@JsonView(View.Alternative.class)
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Collection<Paciente>> buscarPacientes() {
		ResponseEntity<Collection<Paciente>> resp = new ResponseEntity<Collection<Paciente>>(pacservice.buscarPacientes(), HttpStatus.OK);
		return resp;
	}
	
	//Buscar paciente por nome
	@RequestMapping(value = "/getName")
	//@JsonView(View.All.class)
	@PreAuthorize("isAuthenticated()")
	public ResponseEntity<Paciente> get(@RequestParam(value="nome", defaultValue="Victor") String nome) {
		Paciente paci = pacservice.buscarNome(nome);
	if(paci == null) {
	return new ResponseEntity<Paciente>(HttpStatus.NOT_FOUND);
	}
	return new ResponseEntity<Paciente>(paci, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/get/{nome}")
	//@JsonView(View.All.class)
	@PreAuthorize("isAuthenticated()")
	public ResponseEntity<List<Paciente>> pesquisar(@PathVariable("nome") String nome) {
		return new ResponseEntity <List<Paciente>>(pacservice.puxarNomeService(nome), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/savePaciente", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	//@JsonView(View.All.class)
	@ResponseStatus(HttpStatus.CREATED)
	public Paciente save(@RequestBody Paciente paciente, HttpServletRequest request, HttpServletResponse response) {
		paciente = pacservice.createPaciente(paciente);
		return paciente;
	}
	
	@RequestMapping(value = "/getCpf/{cpf}")
	//@JsonView(View.All.class)
	//@PreAuthorize("isAuthenticated()")
	public ResponseEntity <Paciente> pesquisarCpf(@PathVariable("cpf") String cpf) {
		return new ResponseEntity <Paciente>(pacservice.buscarPacienteByCpf(cpf), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/updatePaciente/{id}", method = RequestMethod.PUT)
	//@JsonView(View.All.class)
	public ResponseEntity <Paciente> alterarPaciente(@PathVariable("id") Long id, @RequestBody Paciente paciente, UriComponentsBuilder ucBuilder){
		Paciente currentPaciente = pacservice.buscarPacienteById(id);
		if(currentPaciente == null) {
			return new ResponseEntity <Paciente>(HttpStatus.NOT_FOUND);
		}
		
		currentPaciente.setNome(paciente.getNome());
		currentPaciente.setRg(paciente.getRg());
		currentPaciente.setCpf(paciente.getCpf());
		currentPaciente.setEstado(paciente.getEstado());
		currentPaciente.setCidade(paciente.getCidade());
		currentPaciente.setBairro(paciente.getBairro());
		currentPaciente.setEndereco(paciente.getEndereco());
		currentPaciente.setNumero(paciente.getNumero());
		
		pacservice.update(currentPaciente);
		HttpHeaders header = new HttpHeaders();
		header.setLocation(ucBuilder.path("/updatePaciente/{id}").buildAndExpand(currentPaciente.getId()).toUri());
		return new ResponseEntity <Paciente>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/deletePaciente/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> excluirPaciente(@PathVariable Long id) {
		Paciente paciente = pacservice.buscarPacienteById(id);

		if (paciente == null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}

		pacservice.deletar(paciente);

		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	
}
