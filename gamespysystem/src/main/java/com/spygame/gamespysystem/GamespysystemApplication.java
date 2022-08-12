package com.spygame.gamespysystem;

import com.spygame.gamespysystem.controller.PythonController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class GamespysystemApplication {

	public static void main(String[] args) {

		SpringApplication.run(GamespysystemApplication.class, args);

		/*
		String lugar = "Shopping";
		List<String> listaPersonagens = Arrays.asList(new String[]{"Segurança"});
		List<String> listaTelefones = Arrays.asList(new String[]{"995650554"});

		PythonController pyControll = new PythonController();
		pyControll.enviaTrancode(lugar, listaPersonagens, listaTelefones);
		*/

	}
}
