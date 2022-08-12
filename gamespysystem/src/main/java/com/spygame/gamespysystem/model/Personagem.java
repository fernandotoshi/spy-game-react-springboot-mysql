package com.spygame.gamespysystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.sun.istack.NotNull;

@Entity
public class Personagem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	private Long id;
	
	private String nome;
	
	@ManyToOne
	@JoinColumn(name = "id_lugar", nullable = false)
	private Lugar lugar;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
}
