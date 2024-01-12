function verificar() {
  let nomeHeroi = document.getElementById('txtNome')
  let res = document.getElementById('res')
  let resRanking = document.getElementById('resRanking')
  let ranking = "0"
  
  
  function rankeadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas 
    if (saldo <= 10) {   
      ranking = "Ferro"     
      resRanking.innerHTML = "O " + nomeHeroi.value + " tem " + vitorias + " vitórias e " + derrotas + " derrotas "
      res.innerHTML = "O " + nomeHeroi.value + " está no Ranking " + ranking
    } else if (saldo > 10 && saldo <= 20) {
      ranking = "Bronze"     
      resRanking.innerHTML = "O " + nomeHeroi.value + " tem " + vitorias + " vitórias e " + derrotas + " derrotas "
      res.innerHTML = "O " + nomeHeroi.value + " está no Ranking " + ranking
    } else if (saldo > 20 && saldo <= 50) {
      ranking = "Prata"     
      resRanking.innerHTML = "O " + nomeHeroi.value + " tem " + vitorias + " vitórias e " + derrotas + " derrotas "
      res.innerHTML = "O " + nomeHeroi.value + " está no Ranking " + ranking
    } else if (saldo > 50 && saldo <= 80) {
      ranking = "Ouro"     
      resRanking.innerHTML = "O " + nomeHeroi.value + " tem " + vitorias + " vitórias e " + derrotas + " derrotas "
      res.innerHTML = "O " + nomeHeroi.value + " está no Ranking " + ranking
    } else if (saldo > 80 && saldo <= 90) {
      ranking = "Diamente"     
      resRanking.innerHTML = "O " + nomeHeroi.value + " tem " + vitorias + " vitórias e " + derrotas + " derrotas "
      res.innerHTML = "O " + nomeHeroi.value + " está no Ranking " + ranking
    } else if (saldo > 90 && saldo <= 100) {
      ranking = "Lendário"     
      resRanking.innerHTML = "O " + nomeHeroi.value + " tem " + vitorias + " vitórias e " + derrotas + " derrotas "
      res.innerHTML = "O " + nomeHeroi.value + " está no Ranking " + ranking
    } else if (saldo > 100) {
      ranking = "Imortal"     
      resRanking.innerHTML = "O " + nomeHeroi.value + " tem " + vitorias + " vitórias e " + derrotas + " derrotas "
      res.innerHTML = "O " + nomeHeroi.value + " está no Ranking " + ranking 
    } 
  }

  if (nomeHeroi.value == 0 && xp.value == 0) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (nomeHeroi.value === "Thor") {      
      rankeadas(120, 3)
      form.innerHTML = "" 
      img.setAttribute('src', "./img/Thor.png")     
    }
    else if (nomeHeroi.value === "Capitão América") {
      rankeadas(120, 21)
      form.innerHTML = ""
      img.setAttribute('src', "./img/America.png")
    }
    else if (nomeHeroi.value === "Homem de Ferro") {
      rankeadas(120, 41)
      form.innerHTML = ""
      img.setAttribute('src', "./img/H_Ferro.png")
    }
    else if (nomeHeroi.value === "Pantera Negra") {      
      rankeadas(120, 61)
      form.innerHTML = ""
      img.setAttribute('src', "./img/P_Negra.png")
    }
    else if (nomeHeroi.value === "Hulk") {      
      rankeadas(120, 91)
      form.innerHTML = ""
      img.setAttribute('src', "./img/Hulk.png")
    }
    else if (nomeHeroi.value === "Homem Aranha") {      
      rankeadas(120, 91)
      form.innerHTML = ""
      img.setAttribute('src', "./img/HomemAranha.png")
    }
    else if (nomeHeroi.value === "Surfista Prateado") {      
      rankeadas(120, 111)
      form.innerHTML = ""
      img.setAttribute('src', "./img/SurfistaPrateado.png")
    }

    res.appendChild(img)
  }
}

function resultado() {
  res.innerHTML = ''
  document.getElementById('txtNome').focus()
}

function reload() {
  window.location.reload()
}