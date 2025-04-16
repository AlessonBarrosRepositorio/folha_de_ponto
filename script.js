

/*
window.addEventListener('DOMContentLoaded', () =>{
  let inicio = document.getElementById('inicio');
  var libera = false;

  async function pegarHoraInternet() {
      try {
        const resposta = await fetch("https://worldtimeapi.org/api/ip");
        const dados = await resposta.json();
        const hora = new Date(dados.datetime);
  
        console.log("Hora da internet:", hora.toLocaleTimeString());
  
        // Armazena na variável
        let horaAtual = hora;
  
        // Exemplo de uso da variável
        console.log("Hora guardada:", horaAtual.toLocaleString());
      } catch (erro) {
        console.error("Erro ao obter hora da internet:", erro);
      }
    }
  
    // Chamada da função
    pegarHoraInternet();

  let horaFormatada = hora.toLocaleTimeString();

  if(horaFormatada == "20:36:00"){
      libera = true;
  }else{
      libera = false;
  }
  if(libera == true){
      inicio.removeAttribute("disabled");
  }
  if(libera == false){       
          inicio.setAttribute("disabled",true);    
  }
});

window.addEventListener('DOMContentLoaded', () => {
  let inicio = document.getElementById('inicio');
  let libera = false;

  async function pegarHoraInternet() {
      try {
          const resposta = await fetch("https://worldtimeapi.org/api/ip");
          const dados = await resposta.json();
          const hora = new Date(dados.datetime);

          console.log("Hora da internet:", hora.toLocaleTimeString());

          let horaFormatada = hora.toLocaleTimeString();

          if (horaFormatada === "20:40:00") {
              libera = true;
          } /*else {
              libera = false;
          }
          if (libera) {
              inicio.removeAttribute("disabled");
          } else {
              inicio.setAttribute("disabled", true);
          }
      } catch (erro) {
          console.error("Erro ao obter hora da internet:", erro);
      }
  }

  pegarHoraInternet();
});

window.addEventListener('DOMContentLoaded', async () => {
  let inicio = document.getElementById('inicio');

  // Pegamos a hora inicial da internet
  const horaInternet = await pegarHoraInternet();
  if (!horaInternet) return;

  let horaBase = new Date(horaInternet);
  let timestampBase = horaBase.getTime();

  function atualizarEstadoBotao() {
      const agora = new Date(); // local
      const diferenca = agora.getTime() - performance.timing.navigationStart;
      const horaAjustada = new Date(timestampBase + diferenca);

      const horaAtual = horaAjustada.toTimeString().slice(0, 5);
      console.log("Hora ajustada:", horaAtual);

      if (horaAtual === "20:45") {
          inicio.removeAttribute("disabled");
      } /*else {
          inicio.setAttribute("disabled", true);
      }
  }

  // Atualiza a cada segundo
  setInterval(atualizarEstadoBotao, 1000);
  atualizarEstadoBotao();

  async function pegarHoraInternet() {
      try {
          const resposta = await fetch("https://worldtimeapi.org/api/ip");
          const dados = await resposta.json();
          return new Date(dados.datetime);
      } catch (erro) {
          console.error("Erro ao obter hora da internet:", erro);
          return null;
      }
  }
});
*
window.addEventListener('DOMContentLoaded', async () => {
  const inicio = document.getElementById('inicio');
  const Almoco = document.getElementById('almoco');
  const voltei = document.getElementById('voltei');
  const fui = document.getElementById('fui');

  async function pegarHoraInternet() {
    try {
      const resposta = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo");
      const dados = await resposta.json();
      return new Date(dados.dateTime);
    } catch (erro) {
      console.error("Erro ao obter hora da internet:", erro);
      return null;
    }
  }

  const horaInternet = await pegarHoraInternet();
  if (!horaInternet) return;

  const horaBase = horaInternet.getTime();

  function atualizarEstadoBotao() {
    const agora = new Date();
    const tempoPassado = agora.getTime() - performance.timing.navigationStart;
    const horaAjustada = new Date(horaBase + tempoPassado);

    const horaAtual = horaAjustada.toTimeString().slice(0, 5); // "HH:MM"
    //console.log("Hora atual ajustada:", horaAtual);
// cheguei ------------------------------------------------------------------------
    if (horaAtual === "11:00") {
      inicio.removeAttribute("disabled");
    }else if(horaAtual === "11:05"){
      inicio.setAttribute("disabled", true);
   }
// cheguei ------------------------------------------------------------------------
// almoço -------------------------------------------------------------------------
      if (horaAtual === "13:00") {
          Almoco.removeAttribute("disabled");
      }else if(horaAtual === "13:05"){
          Almoco.setAttribute("disabled", true);
      }
// almoço -------------------------------------------------------------------------
// Voltei -------------------------------------------------------------------------
      if (horaAtual === "14:00") {
          voltei.removeAttribute("disabled");
      }else if(horaAtual === "14:05"){
          voltei.setAttribute("disabled", true);
      }
// Voltei -------------------------------------------------------------------------
// saida -------------------------------------------------------------------------
      if (horaAtual === "18:00") {
          fui.removeAttribute("disabled");
      }else if(horaAtual === "18:05"){
          voltei.setAttribute("disabled", true);
      }
// saida -------------------------------------------------------------------------
  }

  setInterval(atualizarEstadoBotao, 1000);
  atualizarEstadoBotao();
});*/

window.addEventListener('DOMContentLoaded', async () => {
    const botoes = {
        inicio: { el: document.getElementById('inicio'), on: "22:03", off: "11:05" },
        almoco: { el: document.getElementById('almoco'), on: "13:00", off: "13:05" },
        voltei: { el: document.getElementById('voltei'), on: "14:00", off: "14:05" },
        fui: { el: document.getElementById('fui'), on: "18:00", off: "18:05" }
    };

    // Garante que todos estejam desativados no início
    for (let chave in botoes) {
        botoes[chave].el.setAttribute("disabled", true);
    }

    async function pegarHoraInternet() {
        try {
            const resposta = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo");
            const dados = await resposta.json();
            return new Date(dados.dateTime);
        } catch (erro) {
            console.error("Erro ao obter hora da internet:", erro);
            return null;
        }
    }

    const horaInternet = await pegarHoraInternet();
    if (!horaInternet) return;

    const horaBase = horaInternet.getTime();

    function horaParaMinutos(horaStr) {
        const [h, m] = horaStr.split(':').map(Number);
        return h * 60 + m;
    }

    function atualizarEstadoBotoes() {
        const agora = new Date();
        const tempoPassado = agora.getTime() - performance.timing.navigationStart;
        const horaAjustada = new Date(horaBase + tempoPassado);
        const horaAtualStr = horaAjustada.toTimeString().slice(0, 5);

        const minutosAgora = horaParaMinutos(horaAtualStr);

        for (let chave in botoes) {
            const btn = botoes[chave];
            const minOn = horaParaMinutos(btn.on);
            const minOff = horaParaMinutos(btn.off);

            // Lógica que lida com períodos que atravessam a meia-noite
            if (
                (minOn <= minOff && minutosAgora >= minOn && minutosAgora < minOff) || // intervalo no mesmo dia
                (minOn > minOff && (minutosAgora >= minOn || minutosAgora < minOff))   // intervalo atravessando a meia-noite
            ) {
                btn.el.removeAttribute("disabled");
            } else {
                btn.el.setAttribute("disabled", true);
            }
        }
    }

    setInterval(atualizarEstadoBotoes, 1000);
    atualizarEstadoBotoes();
});