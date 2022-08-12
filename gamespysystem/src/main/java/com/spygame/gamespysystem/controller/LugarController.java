package com.spygame.gamespysystem.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spygame.gamespysystem.model.Lugar;
import com.spygame.gamespysystem.model.Personagem;
import com.spygame.gamespysystem.service.LugarServiceImpl;
import com.spygame.gamespysystem.service.PersonagemServiceImpl;

@RestController
@RequestMapping("/lugares")
@CrossOrigin
public class LugarController {
	
	@Autowired
	private LugarServiceImpl lugarServiceImpl;
	
	@Autowired
	private PersonagemServiceImpl personagemService;
	
    @GetMapping("/sortearPersonagens") 
    public List<Personagem> getLugares(){ 
    	List<Lugar> lugares = lugarServiceImpl.getTodosLugares();
    	Collections.shuffle(lugares);
    	Lugar lugarSorteado = lugares.get(0);
    	System.out.println(lugarSorteado.getNome());
    	return personagemService.listarPersonagens(lugarSorteado.getId());
    }
	 

}
