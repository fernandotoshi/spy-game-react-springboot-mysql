import sys
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

def deserializaString(trancode):
    primeiraQuebra = trancode.split(";")
    lugarSorteado = primeiraQuebra[0]
    listaPersonagens = primeiraQuebra[1].split(",")
    listaTelefones = primeiraQuebra[2].split(",")
    print("lugarSorteado: ",lugarSorteado)
    print("listaPersonagens: ",listaPersonagens)
    print("listaTelefones: ",listaTelefones)
    return [lugarSorteado, listaPersonagens, listaTelefones]

def buscar_contato(telefone):
    campo_pesquisa = driver.find_element(By.XPATH, '//div[contains(@class,"copyable-text selectable-text")]')
    time.sleep(2)
    campo_pesquisa.click()
    campo_pesquisa.send_keys(telefone)
    campo_pesquisa.send_keys(Keys.ENTER)

def enviar_mensagem(lugar,personagem):
    campo_mensagem = driver.find_element(By.XPATH, '//div[contains(@title,"Mensagem")]')
    campo_mensagem.click()
    time.sleep(3)
    campo_mensagem.send_keys("Lugar sorteado: " + str(lugar) + " e seu personagem é: " + str(personagem))
    campo_mensagem.send_keys(Keys.ENTER)

def enviar_midia(midia):
    driver.find_element(By.CSS_SELECTOR, "span[data-icon='clip']").click()
    attach = driver.find_element(By.CSS_SELECTOR, "input[type='file']")
    attach.send_keys(midia)
    time.sleep(3)
    send = driver.find_element(By.CSS_SELECTOR, "span[data-icon='send']")
    send.click()

if __name__ == '__main__':
    teste = "intellij"
    trancode="Shopping;Recepcionista,Segurança,Vendedor de Pipoca;987288555,995650554,974188043"
    if teste == "intellij":
        print('Number of Arguments: ', len(sys.argv))
        print('Argument List: ', str(sys.argv))
        arrayObjetos = deserializaString(sys.argv[1])
        lugarSorteado = arrayObjetos[0]
        listaPersonagens = arrayObjetos[1]
        listaTelefones = arrayObjetos[2]
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        driver.get('http://web.whatsapp.com/')
        time.sleep(20)
        midia = "C:/Users/ferna/git/spy-game-react-springboot-mysql/assets/lugares/shopping.jpg"
        contador = 0
        for telefone in listaTelefones:
            buscar_contato(telefone)
            enviar_mensagem(lugarSorteado, listaPersonagens[contador])
            enviar_midia(midia)
            contador += 1
            time.sleep(1)
    else:
        arrayObjetos = deserializaString(trancode)
        lugarSorteado = arrayObjetos[0]
        listaPersonagens = arrayObjetos[1]
        listaTelefones = arrayObjetos[2]
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        driver.get('http://web.whatsapp.com/')
        time.sleep(20)
        contador = 0
        for telefone in listaTelefones:
            buscar_contato(telefone)
            enviar_mensagem(lugarSorteado, listaPersonagens[contador])
            contador += 1
            time.sleep(1)
