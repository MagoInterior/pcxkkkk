const fs = require("fs")
const chalk = require("chalk")


const menu = (prefix, pushname, numerodn, bioo, NomeDoBot,  wame) => {

return `
╭═•ೋ•『 𝐈𝐍𝐅𝐎✰𝐁𝐎𝐓 』
╎│⋟ Usuário (quem está acessando o bot)> ${pushname}
╎│⋟ Proprietário!> wa.me/556291004465
╎│⋟ Nome do bot!> ${NomeDoBot}
╎│⋟ Prefixo do bot!>『 ${prefix} 』
╎│⋟ Versão> 3.5
╰══• ꧁ঔৣ☬✞Lᴏʀᴅᴇ-Bᴏᴛ-MD༻꧂ •═╯

╭══•ೋ•『 𝐑𝐄𝐃𝐄𝐒 』
╎│⋟ Instagram>@_._caue
╎│⋟ ⇘ Grupo oficial Whatsapp 
╎│⋟ https://chat.whatsapp.com/IHY1ELDL9KqGq9rYVjrSXt
╰══• ꧁ঔৣ☬✞Lᴏʀᴅᴇ-Bᴏᴛ-MD •═╯

╭══•ೋ•『️️ Cmds novos 』
╎│⋟ ${prefix}americanas [nome]
╎│⋟ ${prefix}amazon [nome]
╎│⋟ ${prefix}submarino [nome]
╎│⋟ ${prefix}noticias [nome]
╎│⋟ ${prefix}meme2 
╎│⋟ ${prefix}meme3
╎│⋟ ${prefix}memevid
╎│⋟ ${prefix}pornovid
╎│⋟ ${prefix}recrutar
╎│⋟ ${prefix}anotar [texto]
╎│⋟ ${prefix}tirar_nota
╎│⋟ ${prefix}notas
╎│⋟ ${prefix}validar-key
╎│⋟ ${prefix}pgt_desafio
╎│⋟ ${prefix}speedtest
╎│⋟ ${prefix}happymod2
╎│⋟ ${prefix}apkmody
╎│⋟ ${prefix}filmeapi
╎│⋟ ${prefix}nerding
╎│⋟ ${prefix}wikipedia2
╎│⋟ ${prefix}petrobas
╎│⋟ ${prefix}gprandom
╎│⋟ ${prefix}genshin
╎│⋟ ${prefix}frasemae
╎│⋟ ${prefix}signo
╰══• ꧁ঔৣ☬✞Lᴏʀᴅᴇ-Bᴏᴛ-MD •══╯

╭══•ೋ•『️️ Membros(Grps,etc) 』
╎│⋟ ${prefix}convite [link do gp]
╎│⋟ ${prefix}conselhobiblico 
╎│⋟ ${prefix}ping2
╎│⋟ ${prefix}perfil
╎│⋟ ${prefix}gtts pt [texto] 
╎│⋟ ${prefix}metadinha
╎│⋟ ${prefix}metadinha2
╎│⋟ ${prefix}metadinha3
╎│⋟ ${prefix}metadinha4
╎│⋟ ${prefix}videopralink [marcar vídeo] 
╎│⋟ ${prefix}gerarlink 
╎│⋟ ${prefix}level
╎│⋟ ${prefix}ranklevel
╎│⋟ ${prefix}correio
╎│⋟ ${prefix}letra [nome da música]
╎│⋟ ${prefix}enquete 
╎│⋟ ${prefix}suic 
╎│⋟ ${prefix}sn [sua pergunta]
╎│⋟ ${prefix}semoji
╎│⋟ ${prefix}creditos
╎│⋟ ${prefix}donate
╎│⋟ ${prefix}git
╎│⋟ ${prefix}wa.me
╎│⋟ ${prefix}audiomeme
╎│⋟ ${prefix}quando [sua pergunta]
╎│⋟ ${prefix}planos
╎│⋟ ${prefix}live
╎│⋟ ${prefix}figs
╎│⋟ ${prefix}rename2
╎│⋟ ${prefix}stickeralet
╎│⋟ ${prefix}checarprem
╎│⋟ ${prefix}cantada
╎│⋟ ${prefix}cantada2
╎│⋟ ${prefix}fuckmylife
╎│⋟ ${prefix}frase
╎│⋟ ${prefix}frase2
╎│⋟ ${prefix}frase3
╎│⋟ ${prefix}outroshitpost
╎│⋟ ${prefix}memesdasam
╎│⋟ ${prefix}shitpost
╎│⋟ ${prefix}recadoprowhatsapp
╎│⋟ ${prefix}frasecriativas
╎│⋟ ${prefix}frasebonita
╎│⋟ ${prefix}membros
╎│⋟ ${prefix}qrcode
╎│⋟ ${prefix}covid2
╎│⋟ ${prefix}gamer [nome do jogo]
╎│⋟ ${prefix}gato
╎│⋟ ${prefix}fig-gato
╎│⋟ ${prefix}doge
╎│⋟ ${prefix}ebase
╎│⋟ ${prefix}debase
╰══• ꧁ঔৣ☬✞Lᴏʀᴅᴇ-Bᴏᴛ-MD •══╯

╭════•ೋ•『 ️️Menus d° Lorde 』
╎│⋟ ${prefix}menulist
╎│⋟ ${prefix}menulogos
╎│⋟ ${prefix}menuadm
╎│⋟ ${prefix}menudono
╎│⋟ ${prefix}infodono
╎│⋟ ${prefix}menuporno
╎│⋟ ${prefix}menufigurinhas
╎│⋟ ${prefix}menuedit
╎│⋟ ${prefix}menuedit2
╎│⋟ ${prefix}menunaruto
╎│⋟ ${prefix}menumusica
╎│⋟ ${prefix}menu-pesquisas
╎│⋟ ${prefix}menuefeito
╎│⋟ ${prefix}imitações
╎│⋟ ${prefix}funções-grupo
╎│⋟ ${prefix}menuanime
╎│⋟ ${prefix}menu-anime
╎│⋟ ${prefix}menu-hentai
╎│⋟ ${prefix}menutits
╎│⋟ ${prefix}menupack
╎│⋟ ${prefix}menugeradores
╎│⋟ ${prefix}menufilme
╎│⋟ ${prefix}menuserie
╎│⋟ ${prefix}menutravas
╎│⋟ ${prefix}menugerar
╎│⋟ ${prefix}geradores
╎│⋟ ${prefix}banmtd
╎│⋟ ${prefix}metodos
╎│⋟ ${prefix}bases
╎│⋟ ${prefix}menupuxadas
╎│⋟ ${prefix}menuwallpapers
╎│⋟ ${prefix}figu-curso
╎│⋟ ${prefix}menuart
╎│⋟ ${prefix}edits
╎│⋟ ${prefix}menuimunes
╎│⋟ ${prefix}menuwallpaper
╰══• ꧁ঔৣ☬✞Lᴏʀᴅᴇ-Bᴏᴛ-MD •══╯

╭═•ೋ•️️『 Suporte 』
╎│⋟ ${prefix}bug
╎│⋟ ${prefix}convite
╎│⋟ ${prefix}criador
╎│⋟ ${prefix}sugestão 
╎│⋟ ${prefix}perfil
╎│⋟ ${prefix}suporte
╎│⋟ ${prefix}avalie
╎│⋟ ${prefix}avaliar
╎│⋟ ${prefix}creditos
╎│⋟ ${prefix}donate
╰══• ꧁ঔৣ☬✞Lᴏʀᴅᴇ-Bᴏᴛ-MD •═╯

╭═•ೋ•『 Menu de Jogos/Diversão 』
╎│⋟ ${prefix}pix2
╎│⋟ ${prefix}saldo
╎│⋟ ${prefix}apostar
╎│⋟ ${prefix}cassino
╎│⋟ ${prefix}cassino2
╎│⋟ ${prefix}tac
╎│⋟ ${prefix}round6
╎│⋟ ${prefix}rr
╎│⋟ ${prefix}minerar
╎│⋟ ${prefix}akinator
╎│⋟ ${prefix}resetaki
╎│⋟ ${prefix}jogodaforca
╎│⋟ ${prefix}jogodavelha
╎│⋟ ${prefix}resetarvelha
╰══• ꧁ঔৣ☬✞Lᴏʀᴅᴇ-Bᴏᴛ-MD •══╯

╭═•ೋ•️️『 cmds sem prefix 』
╎│⋟ bot abre o gp
╎│⋟ bot fecha o gp
╰══• ꧁ঔৣ☬✞Lᴏʀᴅᴇ-Bᴏᴛ-MD •══╯

╭══•ೋ•『 Menu dono(apenas o dono) 』
╎│⋟ ${prefix}anticall 1/0
╎│⋟ ${prefix}premiumlist
╎│⋟ ${prefix}addpremium @
╎│⋟ ${prefix}delpremium @
╎│⋟ ${prefix}reviverqr
╎│⋟ ${prefix}arquivargp
╎│⋟ ${prefix}nuke
╎│⋟ ${prefix}nuke2
╎│⋟ ${prefix}entrar [link do gp]
╎│⋟ ${prefix}antipvon
╎│⋟ ${prefix}antipvoff
╎│⋟ ${prefix}block @
╎│⋟ ${prefix}unblock @
╎│⋟ ${prefix}msg
╎│⋟ ${prefix}tm
╎│⋟ ${prefix}bcpv
╎│⋟ ${prefix}rgtm
╎│⋟ ${prefix}tirardatm
╎│⋟ ${prefix}fazertm
╎│⋟ ${prefix}gitclone
╎│⋟ ${prefix}clonargp
╎│⋟ ${prefix}clonagp
╎│⋟ ${prefix}fotobot
╎│⋟ ${prefix}clonar
╎│⋟ ${prefix}seradm 
╎│⋟ ${prefix}sermembro 
╎│⋟ ${prefix}modos
╎│⋟ ${prefix}listagp
╎│⋟ ${prefix}banghost
╎│⋟ ${prefix}idget
╎│⋟ ${prefix}roubar-membro
╎│⋟ ${prefix}execut
╎│⋟ ${prefix}eval
╎│⋟ ${prefix}ping2
╎│⋟ ${prefix}serpremium
╎│⋟ ${prefix}antipv 1/0
╎│⋟ ${prefix}ganharxp
╎│⋟ ${prefix}ganharlevel
╎│⋟ ${prefix}menugerar
╎│⋟ ${prefix}getcase
╎│⋟ ${prefix}index-bot
╎│⋟ ${prefix}index-bot2
╎│⋟ ${prefix}substituir 
╎│⋟ ${prefix}bangp
╎│⋟ ${prefix}unbangp
╎│⋟ ${prefix}blockcmd
╎│⋟ ${prefix}unblockcmd
╎│⋟ ${prefix}listacomandos
╎│⋟ ${prefix}donos
╎│⋟ ${prefix}tempban
╎│⋟ ${prefix}block-tmp @ 1h
╎│⋟ ${prefix}unblock-tmp @
╎│⋟ ${prefix}unblock-tmp2 [número da pessoa]
╎│⋟ ${prefix}setnamewpp
╎│⋟ ${prefix}setbio
╎│⋟ ${prefix}adduser-api-1 
╎│⋟ ${prefix}adduser-api-2
╎│⋟ ${prefix}validar-key
╎│⋟ ${prefix}crash
╎│⋟ ${prefix}crash2
╎│⋟ ${prefix}crash3
╰═• ꧁ঔৣ☬✞Lᴏʀᴅᴇ-Bᴏᴛ-MD •══╯
`
}

exports.menu = menu
