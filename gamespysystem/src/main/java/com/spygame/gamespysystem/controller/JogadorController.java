package com.spygame.gamespysystem.controller;

import com.spygame.gamespysystem.model.Jogador;
import com.spygame.gamespysystem.service.JogadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jogador")
@CrossOrigin
public class JogadorController {
    @Autowired
    private JogadorService jogadorService;

    @PostMapping("/add")
    public String add(@RequestBody Jogador jogador) {
        jogadorService.salvarJogador(jogador);
        return "Novo jogador foi adicionado";
    }

    @GetMapping("/getTodosJogadores")
    public List<Jogador> getTodosJogadores(){
        return jogadorService.getTodosJogadores();
    }

    @DeleteMapping("/remove/{jogadorId}")
    public Boolean deleteJogador(@PathVariable("jogadorId") int jogadorId) {
        return jogadorService.removerJogador(jogadorId);
    }
}
