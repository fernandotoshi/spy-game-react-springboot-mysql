package com.spygame.gamespysystem.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spygame.gamespysystem.model.Lugar;
import com.spygame.gamespysystem.model.Personagem;
import com.spygame.gamespysystem.repository.PersonagemRepository;

@Service
public class PersonagemServiceImpl implements PersonagemService{
	
	@Autowired
	PersonagemRepository personagemRepository;
	
	@PersistenceContext
	private EntityManager manager;

	@Override
	public Lugar salvarPersonagem(Personagem personagem) {
		return null;
	}

	@Override
	public List<Personagem> getTodosPersonagem() {
		return null;
	}

	@Override
	public Boolean removerPersonagem(Long personagemId) {
		return null;
	}

	@Override
	public List<Personagem> listarPersonagens(Long lugarId) {
		return manager.createQuery("from Personagem where id_lugar = :lugarId", Personagem.class)
				.setParameter("lugarId", lugarId)
				.getResultList();
	}

    
}
