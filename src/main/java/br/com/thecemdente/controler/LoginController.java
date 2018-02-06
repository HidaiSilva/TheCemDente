package br.com.thecemdente.controler;



import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;

import br.com.thecemdente.model.Usuario;
import br.com.thecemdente.securityAuthentication.JwtUtils;
import br.com.thecemdente.securityAuthentication.Login;

// JWT

@CrossOrigin(origins = "*", maxAge = 3600, exposedHeaders = "Token")
@RestController
@RequestMapping(value = "/login", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class LoginController { 
	@Autowired
    @Qualifier("authenticationManager")
    private AuthenticationManager auth;

    public void setAuth(AuthenticationManager auth) {
        this.auth = auth;
    }
    
    @RequestMapping(path = "", method = RequestMethod.POST)
    public Usuario login(@RequestBody Login login, HttpServletResponse response) throws JsonProcessingException {
        Authentication credentials = new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword());
        Usuario usuario = (Usuario) auth.authenticate(credentials).getPrincipal();
        usuario.setSenha(null);
           response.addHeader("Token", JwtUtils.generateToken(usuario));
           response.setHeader("Token", JwtUtils.generateToken(usuario));
           System.out.println("Retorno do token ok");
           return usuario;
    } 
}
