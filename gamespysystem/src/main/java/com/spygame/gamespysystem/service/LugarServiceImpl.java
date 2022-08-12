package com.spygame.gamespysystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spygame.gamespysystem.model.Lugar;
import com.spygame.gamespysystem.repository.LugarRepository;

@Service
public class LugarServiceImpl implements LugarService{

    @Autowired
    private LugarRepository lugarRepository;

    @Override
    public Lugar salvarLugar(Lugar lugar){
        return lugarRepository.save(lugar);
    }

    @Override
    public List<Lugar> getTodosLugares() {
        return lugarRepository.findAll();
    }

    @Override
    public Boolean removerLugar(Long lugarId) {
        lugarRepository.deleteById(lugarId);
        return true;
    }
}
