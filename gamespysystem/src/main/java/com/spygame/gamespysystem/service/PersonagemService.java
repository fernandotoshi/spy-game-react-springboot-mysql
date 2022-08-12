package com.spygame.gamespysystem.service;

import java.util.List;

import com.spygame.gamespysystem.model.Lugar;
import com.spygame.gamespysystem.model.Personagem;

public interface PersonagemService {
    public Lugar salvarPersonagem(Personagem personagem);
    public List<Personagem> getTodosPersonagem();
    public Boolean removerPersonagem(Long personagemId);
    public List<Personagem> listarPersonagens(Long lugarId);
}
