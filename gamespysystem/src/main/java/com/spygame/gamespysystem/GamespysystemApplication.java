package com.spygame.gamespysystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class GamespysystemApplication {

	public static void main(String[] args) {

		SpringApplication.run(GamespysystemApplication.class, args);

		//Mock de objetos passados para o python
		String lugar = "Shopping";
		List<String> listaPersonagens = Arrays.asList(new String[]{"Segurança"});
		List<String> listaTelefones = Arrays.asList(new String[]{"995650554"});

		/*
		Serializando objetos em uma string seguindo o padrão:
		"lugar;personagem1,personagem2,personagem3;telefone1,telefone2,telefone3"
		No Python será realizado um split by ; para separar o objeto lugar e as listas
		já o split by , irá separar os objetos das listas
		*/
		String trancode = lugar + ";";
		for(String personagem : listaPersonagens){
			trancode += personagem + ",";
		}
		trancode = trancode.substring(0, trancode.length() - 1) + ";";
		for(String telefone : listaTelefones){
			trancode += telefone + ",";
		}
		trancode = trancode.substring(0, trancode.length() - 1);

		System.out.println(trancode);

		//Chamada script python
		try{
			ProcessBuilder builder = new ProcessBuilder("python", "C:\\Users\\ferna\\git\\spy-game-react-springboot-mysql\\pythonServicoWhatsapp.py",trancode);

			Process process = builder.start();

			BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));

			String lines=null;
			while((lines=reader.readLine())!=null){
				System.out.println(lines);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
