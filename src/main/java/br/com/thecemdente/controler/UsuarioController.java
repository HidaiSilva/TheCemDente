package br.com.thecemdente.controler;

import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.thecemdente.model.Usuario;
import br.com.thecemdente.service.UsuarioService;
import javassist.bytecode.stackmap.TypeData.ClassName;

@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;

	private static final Logger LOGGER = Logger.getLogger(ClassName.class.getName());
	
	@RequestMapping(value = "/saveUsuario", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Usuario> save(@RequestBody Usuario usuario, HttpServletRequest request,
			HttpServletResponse response) {
		try {
			return new ResponseEntity<>(usuarioService.salvarUsuario(usuario), HttpStatus.OK);
		} catch (ArrayIndexOutOfBoundsException e) {
			LOGGER.log(Level.SEVERE, e.getMessage());
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		} catch (IndexOutOfBoundsException e) {
			LOGGER.log(Level.SEVERE, e.getMessage());
			return new ResponseEntity<>(HttpStatus.METHOD_NOT_ALLOWED);
		} catch (Exception e) {
			LOGGER.log(Level.SEVERE, e.getMessage());
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	}

}
