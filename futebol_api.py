import requests
from datetime import datetime, timedelta


CAMPEONATOS = [

    {
        "nome": "Premier League",
        "id": "4328"
    },

    {
        "nome": "Brasileirão Série A",
        "id": "4351"
    },

    {
        "nome": "La Liga",
        "id": "4335"
    }

]



def converter_data(data):

    try:

        data_obj = datetime.strptime(
            data,
            "%Y-%m-%d"
        )

        return data_obj.strftime(
            "%d/%m/%Y"
        )

    except:

        return data




def converter_hora(hora):

    try:

        hora_obj = datetime.strptime(
            hora[:5],
            "%H:%M"
        )

        hora_obj -= timedelta(hours=3)

        return hora_obj.strftime("%H:%M")

    except:

        return "00:00"





def buscar_jogos():

    jogos = []


    for campeonato in CAMPEONATOS:

        try:

            url = (
                "https://www.thesportsdb.com/api/v1/json/3/"
                f"eventsnextleague.php?id={campeonato['id']}"
            )


            resposta = requests.get(
                url,
                timeout=10
            )


            dados = resposta.json()


            eventos = dados.get("events") or []



            for jogo in eventos[:5]:


                jogos.append({

                    "data": converter_data(
                        jogo.get("dateEvent") or ""
                    ),


                    "data_original":
                    jogo.get("dateEvent") or "",



                    "hora": converter_hora(
                        jogo.get("strTime") or "00:00"
                    ),



                    "time_casa":
                    jogo.get("strHomeTeam")
                    or "Time casa",



                    "time_fora":
                    jogo.get("strAwayTeam")
                    or "Time fora",



                    "campeonato":
                    campeonato["nome"],



                    "imagem_casa":
                    jogo.get("strHomeTeamBadge")
                    or "",



                    "imagem_fora":
                    jogo.get("strAwayTeamBadge")
                    or "",



                    # placar preparado

                    "placar_casa":
                    jogo.get("intHomeScore")
                    or "-",



                    "placar_fora":
                    jogo.get("intAwayScore")
                    or "-",



                    "status":
                    jogo.get("strStatus")
                    or "PRÓXIMO JOGO"


                })


        except Exception as erro:

            print(
                "Erro no campeonato",
                campeonato["nome"],
                erro
            )


    return jogos