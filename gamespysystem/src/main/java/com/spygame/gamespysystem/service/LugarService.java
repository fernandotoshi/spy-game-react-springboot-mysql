package com.spygame.gamespysystem.service;

import java.util.List;

import com.spygame.gamespysystem.model.Lugar;

public interface LugarService {
    public Lugar salvarLugar(Lugar lugar);
    public List<Lugar> getTodosLugares();
    public Boolean removerLugar(Long lugarId);
}
