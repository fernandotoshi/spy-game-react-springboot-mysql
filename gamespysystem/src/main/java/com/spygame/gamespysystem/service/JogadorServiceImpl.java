package com.spygame.gamespysystem.service;

import com.spygame.gamespysystem.model.Jogador;
import com.spygame.gamespysystem.repository.JogadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JogadorServiceImpl implements JogadorService{

    @Autowired
    private JogadorRepository jogadorRepository;

    @Override
    public Jogador salvarJogador(Jogador jogador){
        return jogadorRepository.save(jogador);
    }

    @Override
    public List<Jogador> getTodosJogadores() {
        return jogadorRepository.findAll();
    }

    @Override
    public Boolean removerJogador(int jogadorId) {
        jogadorRepository.deleteById(jogadorId);
        return true;
    }
}
