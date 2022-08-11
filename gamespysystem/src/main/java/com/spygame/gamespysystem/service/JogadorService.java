package com.spygame.gamespysystem.service;

import com.spygame.gamespysystem.model.Jogador;

import java.util.List;

public interface JogadorService {
    public Jogador salvarJogador(Jogador jogador);
    public List<Jogador> getTodosJogadores();
    public Boolean removerJogador(int jogadorId);
}
