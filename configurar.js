const fs = require("fs")
const chalk = require("chalk")

//┏⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┓
//Tenha Cuidado ao Alterar as Coisas
//Nunca apague os " " 
//Caso Contrário, O Bot Não Irá Ligar 
//Caso Tenha Interesse em Ter o Bot descriptografado 
//Chama no WhatsApp: wa.me/5521964523665
//Caso Tenha Ideias de Comandos, Chama Ai
//Caso Tenha Dúvidas, Chama Ai
//┗⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┛

//===================================== 
// mudar logos 
global.log0 = "https://telegra.ph/file/5cb0b758a64f6c1a41066.jpg" 
global.log2 = "https://telegra.ph/file/5cb0b758a64f6c1a41066.jpg"
global.thumb = "https://telegra.ph/file/5cb0b758a64f6c1a41066.jpg"
global.err4r = "https://telegra.ph/file/5cb0b758a64f6c1a41066.jpg"

//┏⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┓
//EMOJIS DO BOT
//Troque os Emojis Apenas
//Todos os Lugares do Bot, Que tiver Configurado
//Serão Automaticamente Substituídos pelos Emojis Que Você Quiser

nezukoemoji1 = "🦅"
nezukoemoji2 = "🥃"
nezukoemoji3 = "🚬"

//┗⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┛

//=====================================//
//[ definições dono ]
global.numerodonoa = ["556291004465"] //Coloque seu número dentro das aspas para definir

global.lolhuman = "RelzzAPIs"
global.banChats = false
global.wlcm = []
global.banChats = false
global.gcrevoke = [] 

//[ anterações nome dono entre outros ]
global.packname = "© C᥆ρᥡrιght bᥡ Lorde Bot MD"

global.packname2 = `https://youtube.com/c/PLMODS` //seu canal do YouTube 

global.author = "Kira🦅"//seu nome aqui

global.sessionName = "qr-code"//conexão do do bot

global.NomeDoBot = "Lorde Bot MD"//nome do seu bot aqui

global.linkgrupss = "https://chat.whatsapp.com/IHY1ELDL9KqGq9rYVjrSXt"// link do seu grupo do whatsapp 

global.prefix = "/"//alteração do prefixo do bot

global.NickDono = "kira"//nick dono

global.websitex = "https://www.youtube.com/@kirareal"

//=====================================//
// [ mensagens ]
global.mess = {
    success: '『❗』Prontinho mestre!',
    admin: ' 『❗』Apenas adm pode utilizar esse comando.',
    botAdmin: ' 『❗』Bot precisa ser adm para executar o comando.',
    owner: ' 『❗』Somente meu mestre pode utilizar esse comando!',
    group: ' 『❗』Esse comando só pode ser utilizado em grupo!',
    private: ' 『❗』Esse comando só pode ser utlizado no pv!',
    bot: ' 『❗』Recurso específico para o próprio número do bot.',
    wait: 'Aguarde, estou atendendo seu pedido...!',
    linkm: ' 『❗』Cadê o link?',
    donosmt: ' 『❗』Este é um recurso especial para meu mestre!',
    premium: ' 『 ❗』Esse recurso é especial para usuários premium.',
    ban: ' 『❗』Você foi banido pelo dono, se quiser ser desbanido do bot fale com meu dono!'
}

//===================================== 


//===================================== 

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//===================================== 



//===================================== 


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
