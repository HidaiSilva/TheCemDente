package br.com.thecemdente.service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;


import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.thecemdente.model.Autorizacao;
import br.com.thecemdente.model.Usuario;
import br.com.thecemdente.model.UsuarioAutorizacao;
import br.com.thecemdente.repository.UsuarioAutorizacaoRepository;
import br.com.thecemdente.repository.UsuarioRepository;

@Service("usuarioService")
public class UsuarioServiceImpl implements UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepo;
	
	@Autowired
	private UsuarioAutorizacaoRepository usuautoRepo;
	
	@Override
	public Usuario salvarUsuario(Usuario usu) {
		//usu.setCpf(usu.getCpf().replace(".", "").replace("-", ""));
		usu.setNome(usu.getNome()); //ok
		
		Usuario user = usuarioRepo.findByNome(usu.getNome());
		
		Usuario mun = null;
		if (user != null)
			throw new IndexOutOfBoundsException();
		
		String s = usu.getSenha();
		MessageDigest m;
		try {
			m = MessageDigest.getInstance("MD5");
			m.update(s.getBytes(), 0, s.length());
			s = new BigInteger(1, m.digest()).toString(16);
			usu.setSenha(StringUtils.leftPad(s, 32, '0'));
			
			mun = usuarioRepo.save(usu);
		} catch (NoSuchAlgorithmException e) {
			//LOGGER.log(Level.SEVERE, e.getMessage());
			System.out.println(e.getMessage());
		}
		Autorizacao auto = new Autorizacao();
		auto.setId(1L);
		UsuarioAutorizacao relacao = new UsuarioAutorizacao();
		relacao.setAutorizacao(auto);
		relacao.setUsuario(mun);
		usuautoRepo.save(relacao);
		return mun;
	}

}
