let fraseAtual = 0; // Variável global para armazenar o índice da frase atual

// variavel global, para armazenar as frases.
// Array com 24 posições, uma para cada hora do dia (0 a 23), com 4 frases por hora
let frasesPorHora = [
    ["Madrugada calma, aproveite o silêncio. 🌙", "Use esse tempo para relaxar. 💤", "Uma mente tranquila cria grandes ideias. 💭", "Sonhos grandes começam na madrugada. 🌌"],
    ["Mesmo de madrugada, você é incrível. ⭐", "O mundo dorme, mas suas ideias brilham. 💡", "Acalme seu coração, tudo dará certo. 🌙", "O descanso também é produtividade. 🛌"],
    ["A noite se despede, e um novo dia começa. 🌅", "Cada amanhecer é uma nova chance. ✨", "Você sobreviveu a mais uma noite. 👊", "Comece o dia acreditando em si mesmo. 💪"],
    ["Aproveite a tranquilidade da manhã cedo. ☕", "Grandes dias começam com pequenos passos. 🐾", "Respire fundo e recomece. 🌬️", "O hoje é o presente. 🎁"],
    ["Que sua manhã seja leve e produtiva. 🌞", "Você tem tudo para vencer hoje. 🏆", "Café tomado, energia ativada. ☕⚡", "Acorde com propósito. 🎯"],
    ["Hora de sair da cama com atitude. 🔥", "Encare o dia com coragem. 🛡️", "Hoje será incrível, já decidi. 🚀", "Sorria para a vida! 😊"],
    ["Bom dia! Vamos com tudo! ☀️", "Você é capaz, confie. 💪", "Amanhecer é sinônimo de recomeço. 🌅", "A manhã está cheia de promessas. 📝"],
    ["Foque no que importa. 🎯", "Construa o seu sucesso agora. 🧱", "Você já deu o primeiro passo. 👣", "Continue firme, você está indo bem. 💥"],
    ["Siga em frente, mesmo com desafios. 💪", "A manhã está te dando oportunidades. 🌄", "Não pare agora! 🚦", "Acredite: você está no caminho certo. 🌈"],
    ["Seu esforço será recompensado. 🎁", "A manhã está acabando, e você já venceu. 🏆", "Mais um passo na direção certa. 👊", "Continue, mesmo que devagar. 🐢"],
    ["Boa tarde chegando, mantenha o foco! 🎯", "Final da manhã é hora de decisão. ⚖️", "Aproveite o resto da manhã com garra. 💥", "Você é luz mesmo antes do meio-dia. 🌞"],
    ["Metade do dia já passou. Você está indo muito bem! ✅", "A tarde é sua chance de continuar brilhando. 💡", "Respire fundo e continue. 🌬️", "Sua determinação é contagiante. 🔥"],
    ["Boa tarde! Hora de continuar firme. 💪", "Sua jornada está só começando. 🛣️", "Seja gentil com você mesmo. 💛", "A tarde é um novo começo. 🌤️"],
    ["Você pode fazer a diferença agora. 🕒", "Não deixe para amanhã. 🌟", "Acredite: tudo está se encaixando. 🧩", "Confie no processo. 🔁"],
    ["Cada segundo da tarde é uma oportunidade. ⏳", "Faça valer a pena. 🎯", "Não pare agora, está quase lá! 🛤️", "Você merece o melhor. 🏅"],
    ["A tarde pede persistência. 🔧", "Seja a mudança que deseja. 🌍", "Você está evoluindo a cada instante. 📈", "O sucesso começa com atitude. 🚀"],
    ["A luz da tarde ilumina seu caminho. ☀️", "Não desista, continue firme! 🏋️", "Você chegou até aqui. Continue! 🛤️", "Gratidão transforma. 🙏"],
    ["Anoitecendo, mas sua força não acaba. 🌇", "Feche o dia com gratidão. 🙌", "Você superou o dia. Parabéns! 🎉", "A noite vem com paz. 🕊️"],
    ["Boa noite! Momento de desacelerar. 🌙", "Relaxe e se orgulhe do que fez. 😌", "Você é incrível, não esqueça. 💖", "Durma com o coração leve. 💤"],
    ["A noite guarda silêncio e sabedoria. 🌌", "O descanso é merecido. 🛌", "Amanhã será ainda melhor. 🌅", "Respire e se entregue à noite. 🌠"],
    ["A mente precisa de descanso. 🧠💤", "Prepare-se para um novo amanhecer. 🌄", "Tudo acontece no tempo certo. ⏳", "Paz para sua noite. 🌙"],
    ["Está tudo bem em descansar. 💤", "A noite acalma a alma. 🌌", "Você fez o seu melhor hoje. 👏", "Amanhã, recomece. 🔁"],
    ["Últimas horas antes do novo dia. ⏰", "Descanse profundamente. 🛌", "A madrugada guarda seus sonhos. 🌃", "Boas energias para seu descanso. 🌟"]
];


// Atualiza a frase de acordo com a hora do dia
function atualizarFrase() 
{
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutoAtual = agora.getMinutes();
    fraseAtual = Math.floor(minutoAtual / 15); // 0 a 3 (4 frases por hora)

    const fraseFinal = document.getElementById("fraseFinal");

    // Verifica se há frases para a hora atual
    if (frasesPorHora[horaAtual] && frasesPorHora[horaAtual][fraseAtual]) {
        fraseFinal.innerHTML = frasesPorHora[horaAtual][fraseAtual];
    } else {
        fraseFinal.innerHTML = "Tenha um ótimo momento do dia! 🌟";
    }
}



let periodoAtual = null;     // Inicializa essa variável com o valor null, indicando que, por enquanto, ela não tem nenhum valor definido, mas será atribuído futuramente.
                            // Armazena o período atual (manha, tarde, noite, madrugada) // variavel global chamada na função

// Verifica a cada 1 minuto (60000ms) se mudou o período do dia
setInterval(() => {
    TrocarInformações();
}, 60000); // Isso é a cada 1 minuto

setInterval(() => {
    atualizarFrase();
}, 9000); // Isso é a cada 1 minuto

document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            TrocarInformações();
        }, 4000); // 4 segundos de delay, para carregar a pagina
});

document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            atualizarFrase();
        }, 8000); // 4 segundos de delay, para carregar a pagina
});



// Atualiza a frase a cada 15 minutos
setInterval(() => {
    atualizarFrase();
}, 9000);  // 15 minutos em milissegundos


function obterPeriodoDoDia(hora) 
{
    if (hora >= 6 && hora < 12) return "manha";
    if (hora >= 12 && hora < 18) return "tarde";
    if (hora >= 18 && hora < 23) return "noite";
    return "madrugada";
}

function TrocarInformações() 
{
    let titulo = document.getElementById("Titulo"); // variavel associado ao id no html
    let mensagemHora = document.getElementById("Hora");  // variavel associado ao id no html
    let mensagem = document.getElementById("mensagem"); // variavel associado ao id no html
    const videoFundo = document.getElementById('videoFundo'); // variavel contante associado ao id do do video de fundo na pagina html
    let DiaUtil = document.getElementById("DiaUtil"); // variavel associado ao id no html
    const source = videoFundo.querySelector('source');       // Pega a tag <source> dentro do vídeo, onde fica o arquivo de vídeo


    let agora = new Date(); // pega a data e hora atual
    hora = new Date().getHours(); // aqui ele ja calcula as horas atuais chamando uma função do próprio JavaScript
    let minutos = agora.getMinutes(); // pega os minutos, pega os minutos atuais
    let DiaUtilOuNão = agora.getDay(); // 0 = Domingo, 6 = Sábado


    // formata para sempre ter dois dígitos (ex: 08:05, 14:09)
    let horarioFormatado = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

    // Formatação da data
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const DataFormatada = agora.toLocaleDateString("pt-BR", opcoes); 

    // Verifica o período do dia atual
    const novoPeriodo = obterPeriodoDoDia(hora);

    // Se o período ainda for o mesmo, não faz nada
    if (novoPeriodo === periodoAtual) // se o nvov periodo for igual a variavel periodo atual, retorna nada, mas elas são digferentes, a variavel periodoatual, ela não tem nenhum valor nela
        {
        return;
        }

    // Atualiza o período atual
    periodoAtual = novoPeriodo; // agora a variavel periodoAtual, tem um valor definido da variavel 'novoPeriodo'

    // Troca as informações de acordo com o período
    switch (novoPeriodo) 
    {
        case "manha":
            setTimeout(() => {
                titulo.innerHTML = "Bom Dia !! ☀️";
            }, 1500);

            setTimeout(() => {
                mensagemHora.innerHTML = "Horário: " + horarioFormatado + " da manhã.";
            }, 2000);

            setTimeout(() => {
                mensagem.innerHTML = "📅 Data Atual: " + DataFormatada;
            }, 2500);

            setTimeout(() => {
                if (DiaUtilOuNão === 0 || DiaUtilOuNão === 6)
                { 
                 DiaUtil.innerHTML = "😍🚲 Hoje é fim de semana! Aproveite para descansar. ";
                }
                else 
                {
                 DiaUtil.innerHTML = "💼 Hoje é dia útil, foco nas atividades!" ;
                }
            }, 3000);

            setTimeout(() => {
                videoFundo.src = "videos/manha.mp4";                          // Define o caminho do arquivo de vídeo (relativo à pasta do projeto)
                videoFundo.load();                                        // Recarrega o vídeo para aplicar a nova fonte (src)
                videoFundo.style.display = 'block';                       // Mostra o elemento vídeo (antes estava oculto com display:none)
                videoFundo.play();                                        // Inicia a reprodução do vídeo automaticamente
            }, 3500); // Executa essa função depois de 3500 milissegundos (3,5 segundos)

            break;

        case "tarde":
            setTimeout(() => {
                titulo.innerHTML = "Boa Tarde !! 💫";
            }, 1500);

            setTimeout(() => {
                mensagemHora.innerHTML = "Horário: " + horarioFormatado + " da tarde.";
            }, 2000);

            setTimeout(() => {
                mensagem.innerHTML = "📅 Data Atual: " + DataFormatada;
            }, 2500);

            setTimeout(() => {
                if (DiaUtilOuNão === 0 || DiaUtilOuNão === 6)
                { 
                 DiaUtil.innerHTML = "😍🚲 Hoje é fim de semana! Aproveite para descansar. ";
                }
                else 
                {
                 DiaUtil.innerHTML = "💼 Hoje é dia útil, foco nas atividades!" ;
                }
            }, 3000);

            setTimeout(() => {
                videoFundo.src = "videos/tarde.mp4";                        // Define o caminho do arquivo de vídeo (relativo à pasta do projeto)
                videoFundo.load();                                        // Recarrega o vídeo para aplicar a nova fonte (src)
                videoFundo.style.display = 'block';                       // Mostra o elemento vídeo (antes estava oculto com display:none)
                videoFundo.play();                                        // Inicia a reprodução do vídeo automaticamente
            }, 3500); // Executa essa função depois de 3500 milissegundos (3,5 segundos)

            break;

        case "noite":
            setTimeout(() => {
                titulo.innerHTML = "Boa Noite !! 🌙";
            }, 1500);

            setTimeout(() => {
                mensagemHora.innerHTML = "Horário: " + horarioFormatado + " da noite.";
            }, 2000);

            setTimeout(() => {
                mensagem.innerHTML = "📅 Data Atual: " + DataFormatada;
            }, 2500);

            setTimeout(() => {
                if (DiaUtilOuNão === 0 || DiaUtilOuNão === 6)
                { 
                 DiaUtil.innerHTML = "😍🚲 Hoje é fim de semana! Aproveite para descansar. ";
                }
                else 
                {
                 DiaUtil.innerHTML = "💼 Hoje é dia útil, foco nas atividades!" ;
                }
            }, 3000);

            setTimeout(() => {
                videoFundo.src = "videos/noite.mp4";                           // Define o caminho do arquivo de vídeo (relativo à pasta do projeto)
                videoFundo.load();                                        // Recarrega o vídeo para aplicar a nova fonte (src)
                videoFundo.style.display = 'block';                       // Mostra o elemento vídeo (antes estava oculto com display:none)
                videoFundo.play();                                        // Inicia a reprodução do vídeo automaticamente
            }, 3500); // Executa essa função depois de 3500 milissegundos (3,5 segundos)

            break;

        case "madrugada":
            setTimeout(() => {
                titulo.innerHTML = "Boa Madrugada !! 🌃";
            }, 1500);

            setTimeout(() => {
                mensagemHora.innerHTML = "Horário: " + horarioFormatado + " da madrugada.";
            }, 2000);

            setTimeout(() => {
                mensagem.innerHTML = "📅 Data Atual: " + DataFormatada;
            }, 2500);

            setTimeout(() => {
                if (DiaUtilOuNão === 0 || DiaUtilOuNão === 6)
                { 
                 DiaUtil.innerHTML = "😍🚲 Hoje é fim de semana! Aproveite para descansar. ";
                }
                else 
                {
                 DiaUtil.innerHTML = "💼 Hoje é dia útil, foco nas atividades!" ;
                }
            }, 3000);

            setTimeout(() => {
                videoFundo.src = "videos/madrugada.mp4";                            // Define o caminho do arquivo de vídeo (relativo à pasta do projeto)
                videoFundo.load();                                        // Recarrega o vídeo para aplicar a nova fonte (src)
                videoFundo.style.display = 'block';                       // Mostra o elemento vídeo (antes estava oculto com display:none)
                videoFundo.play();                                        // Inicia a reprodução do vídeo automaticamente
            }, 3500); // Executa essa função depois de 3500 milissegundos (3,5 segundos)

            break;

    }
}



// Verifica se o navegador do usuário suporta Service Workers
// Nem todos os navegadores antigos suportam SW, então essa checagem evita erros
if ('serviceWorker' in navigator) {

    // Tenta registrar o Service Worker
    // O caminho '/RightTimePWA/service-worker.js' deve ser o caminho correto para o seu SW
    navigator.serviceWorker.register('/RightTimePWA/service-worker.js')
        
        // Se o registro for bem-sucedido, executa a função dentro do .then()
        .then(registration => {
            // registration.scope mostra o escopo que o SW vai controlar
            // Aqui apenas exibimos no console para saber que o SW foi registrado
            console.log('Service Worker registrado com sucesso:', registration.scope);
        })
        
        // Se ocorrer algum erro ao registrar o SW, executa a função dentro do .catch()
        .catch(error => {
            // Mostra no console que houve falha no registro do SW e qual foi o erro
            console.log('Falha ao registrar Service Worker:', error);
        });
}








