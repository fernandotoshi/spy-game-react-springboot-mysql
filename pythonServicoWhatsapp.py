from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import requests

def buscar_contato(telefone):
    campo_pesquisa = driver.find_element(By.XPATH, '//div[contains(@class,"copyable-text selectable-text")]')
    campo_pesquisa.click()
    campo_pesquisa.send_keys(telefone)
    campo_pesquisa.send_keys(Keys.ENTER)

def enviar_midia(lugar, personagem):
    driver.find_element(By.CSS_SELECTOR, "span[data-icon='clip']").click()
    attach = driver.find_element(By.CSS_SELECTOR, "input[type='file']")
    attach.send_keys(assetsPath + lugar + ".jpg")
    time.sleep(1)
    campo_mensagem = driver.find_element(By.XPATH, '//div[contains(@class,"copyable-text selectable-text")]')
    campo_mensagem.click()
    campo_mensagem.send_keys("Lugar sorteado: *" + str(lugar) + "*. Seu personagem é: *" + str(personagem) + "*")
    send = driver.find_element(By.CSS_SELECTOR, "span[data-icon='send']")
    send.click()

def distribuiInformacoes(lugar, jogadoresDict):
    for jogador, jogadorInfo in jogadoresDict.items():
        buscar_contato(jogadorInfo["telefone"])
        enviar_midia(lugar, jogadorInfo["personagem"])
        time.sleep(3)

def chamaApi():
    url = "http://localhost:8080/jogador/getTodosJogadores"
    resp = requests.get(url)
    return resp.json()

if __name__ == '__main__':
    # Conexão com o chrome
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get('http://web.whatsapp.com/')

    # Tempo para ler QR Code
    time.sleep(20)

    # Caminho de assets dos lugares
    assetsPath = "C:/Users/ferna/git/spy-game-react-springboot-mysql/assets/lugares/"

    # Evento vindo da rota /rotaJsonPython
    # eventJson = chamaApi()
    jsonFile = {
        "nomeLugar": "Shopping",
        "jogadores": {
            "jogador1": {"telefone": "Agenda Toshi", "personagem": "Segurança"},
            "jogador2": {"telefone": "974188043", "personagem": "Atendente"}
        }
    }
    distribuiInformacoes(jsonFile["nomeLugar"], jsonFile["jogadores"])
    print("Enviado informações para jogadores")