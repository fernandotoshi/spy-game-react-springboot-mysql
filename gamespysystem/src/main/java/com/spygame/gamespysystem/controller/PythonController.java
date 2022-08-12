package com.spygame.gamespysystem.controller;

import com.spygame.gamespysystem.model.Lugar;
import com.spygame.gamespysystem.model.Personagem;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;

public class PythonController {

    public void iniciaScriptPython() {
        try {
            ProcessBuilder builder = new ProcessBuilder("python", "C:\\Users\\ferna\\git\\spy-game-react-springboot-mysql\\pythonServicoWhatsapp.py");

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
