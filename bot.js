# Beyblade Bot by Cashout

import discord
import youtube_dl
from discord.ext import commands
import asyncio
from itertools import cycle


client = commands.Bot(command_prefix='-')
client.remove_command('help') # Removes default help command.

# Console Info
@client.event
async def on_ready():
    await client.change_presence(game=discord.Game(name='whatever'))
    print ("Ready when you are")
    print ("I am running on " + client.user.name)
    print ("With the ID: " + client.user.id)



# Help Command

#unfinished

# Music Bot:
players = {}
queues = {}

def check_queue(id):
    if queues[id] != []:
        player = queues[id].pop(0)
        players[id] = player
        player.start()


@client.command(pass_context=True)
async def join(ctx):
    channel = ctx.message.author.voice.voice_channel
    await client.join_voice_channel(channel)

@client.command(pass_context=True)
async def leave(ctx):
    server = ctx.message.server
    voice_client = client.voice_client_in(server)
    await voice_client.disconnect()

@client.command(pass_context=True)
async def play(ctx, url):
    server = ctx.message.server
    voice_client = client.voice_client_in(server)
    player = await voice_client.create_ytdl_player(url, after=lambda: check_queue(server.id))
    players[server.id] = player
    player.start()

@client.command(pass_context=True)
async def pause(ctx):
    id = ctx.message.server.id
    players[id].pause()

@client.command(pass_context=True)
async def stop(ctx):
    id = ctx.message.server.id
    players[id].stop()

@client.command(pass_context=True)
async def resume(ctx):
    id = ctx.message.server.id
    players[id].resume()

@client.command(pass_context=True)
async def queue(ctx, url):
    server = ctx.message.server
    voice_client = client.voice_client_in(server)
    player = await voice_client.create_ytdl_player(url, after=lambda: check_queue(server.id))

    if server.id in queues:
        queues[server.id].append(player)
    else:
        queues[server.id] = [player]
    await client.say('Added to queue!')



# Shitpost Commands:
@client.command(pass_context=True)
async def sybyr(ctx):
    await client.say("Hut one lil bitch, Hut Tuu")

@client.command(pass_context=True)
async def juul(ctx):
    await client.say ("bro, pass the juul")
    await client.send_file(ctx.message.channel, './images/juul.png')

@client.command(pass_context=True)
async def jake(ctx):
    await client.say("ur fucking doxxed kid")

@client.command(pass_context=True)
async def epic(ctx):
    await client.say ("feeling so fly like a G6")
    await client.send_file(ctx.message.channel, './images/epic.png')

@client.command(pass_context=True)
async def beans(ctx):
    await client.send_file(ctx.message.channel, './images/beans/beans31.jpg')

@client.command(pass_context=True)
async def gamer(ctx):
    await client.say ("le epic x3")
    await client.send_file(ctx.message.channel, './images/gamer.png')

@client.command(pass_context=True)
async def pathetic(ctx):
    await client.send_file(ctx.message.channel, './images/pathetic.jpg')

@client.command(pass_context=True)
async def cashout(ctx):
    await client.say("https://soundcloud.com/lilwasteofspace")

@client.command(pass_context=True)
async def fateless(ctx):
    await client.say("https://soundcloud.com/foreverfateless")

@client.command(pass_context=True)
async def dth(ctx):
    await client.say("https://soundcloud.com/dth95k")

@client.command(pass_context=True)
async def russ(ctx):
    await client.say("fuck russ")
    await client.send_file(ctx.message.channel, './images/russ.jpg')

@client.command(pass_context=True)
async def jcole(ctx):
    await client.say("fuck jcole")

@client.command(pass_context=True)
async def deez(ctx):
    await client.say("nuts")

@client.command(pass_context=True)
async def doge(ctx):
    await client.send_file(ctx.message.channel, './images/doge.jpg')

@client.command(pass_context=True)
async def viper(ctx):
    await client.say("yall cowards dont even smoke crack")
    await client.send_file(ctx.message.channel, './images/viper.jpg')

@client.command(pass_context=True)
async def soup(ctx):
    await client.say("thought soup was ok at first then i realized hes just an omnisphere preset")

@client.command(pass_context=True)
async def adam(ctx):
    await client.say("i play minecraft")
    await client.send_file(ctx.message.channel, './images/aids.jpg')

@client.command(pass_context=True)
async def rylan(ctx):
    await client.send_file(ctx.message.channel, './images/rylan.png')

@client.command(pass_context=True)
async def alex(ctx):
    await client.say("i deleted my sc haha")

@client.command(pass_context=True)
async def ginseng(ctx):
    await client.say("reverb clap")
    await client.send_file(ctx.message.channel, './images/gin$eng.png')

@client.command(pass_context=True)
async def monster(ctx):
    await client.say("blood type")
    await client.send_file(ctx.message.channel, './images/monster.jpg')

@client.command(pass_context=True)
async def koolaid(ctx):
    await client.say("oh no")
    await client.send_file(ctx.message.channel, './images/kool.jpg')

@client.command(pass_context=True)
async def cartel(ctx):
    await client.say("gang")
    await client.send_file(ctx.message.channel, './images/braziliancartel.png')

@client.command(pass_context=True)
async def reshare(ctx):
    await client.send_file(ctx.message.channel, './images/reshare.png')

@client.command(pass_context=True)
async def dora(ctx):
    await client.send_file(ctx.message.channel, './images/dora.png')

@client.command(pass_context=True)
async def coochie(ctx):
    await client.send_file(ctx.message.channel, './images/cat.png')

@client.command(pass_context=True)
async def pallor(ctx):
    await client.say("https://soundcloud.com/pallor47")

@client.command(pass_context=True)
async def cam(ctx):
    await client.say("https://soundcloud.com/z-a-b-u")

@client.command(pass_context=True)
async def pooch(ctx):
    await client.send_file(ctx.message.channel, './images/pooch.jpg')

@client.command(pass_context=True)
async def strap(ctx):
    await client.say("keep that thang on me")
    await client.send_file(ctx.message.channel, './images/strap.jpg')

@client.command(pass_context=True)
async def foo(ctx):
    await client.send_file(ctx.message.channel, './images/foo.mp4')

@client.command(pass_context=True)
async def zaytoven(ctx):
    await client.send_file(ctx.message.channel, './images/zay808.wav')




client.login(process.env.BOT_TOKEN);
