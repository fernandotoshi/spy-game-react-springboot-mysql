package com.spygame.gamespysystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spygame.gamespysystem.model.Lugar;

@Repository
public interface PersonagemRepository extends JpaRepository<Lugar, Long> {
}
