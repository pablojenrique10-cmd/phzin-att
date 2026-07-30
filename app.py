from flask import Flask, render_template, jsonify
from datetime import datetime

from filmes import filmes_populares, filmes_destaque
from futebol_api import buscar_jogos


app = Flask(
    __name__,
    template_folder=".",
    static_folder=".",
    static_url_path=""
)



from datetime import datetime, timedelta
import pytz


def organizar_jogos(jogos):

    fuso_brasil = pytz.timezone("America/Sao_Paulo")

    agora = datetime.now(fuso_brasil)


    for jogo in jogos:

        try:

            data_hora = datetime.strptime(
                f"{jogo['data_original']} {jogo['hora']}",
                "%Y-%m-%d %H:%M"
            )

            data_hora = fuso_brasil.localize(data_hora)


            placar_casa = jogo.get("placar_casa")
            placar_fora = jogo.get("placar_fora")


            # Jogo que está acontecendo
            if (
                placar_casa not in [None, "-"]
                and placar_fora not in [None, "-"]
                and agora >= data_hora
                and agora <= data_hora + timedelta(hours=3)
            ):

                jogo["status"] = "AO VIVO"


            # Ainda vai acontecer
            elif agora < data_hora:

                jogo["status"] = "PRÓXIMO JOGO"


            # Só encerra depois de algumas horas
            elif agora > data_hora + timedelta(hours=3):

                jogo["status"] = "ENCERRADO"


            else:

                jogo["status"] = "AO VIVO"



        except Exception as erro:

            print("Erro status:", erro)

            jogo["status"] = "PRÓXIMO JOGO"



    ordem = {

        "AO VIVO": 1,

        "PRÓXIMO JOGO": 2,

        "ENCERRADO": 3

    }


    jogos.sort(
        key=lambda x: ordem.get(
            x["status"],
            4
        )
    )


    return jogos





@app.route("/")
def index():

    jogos = buscar_jogos()

    jogos = organizar_jogos(jogos)


    return render_template(
        "index.html",
        filmes_populares=filmes_populares,
        filmes_destaque=filmes_destaque,
        jogos=jogos
    )





@app.route("/futebol")
def futebol():

    jogos = buscar_jogos()

    jogos = organizar_jogos(jogos)


    return render_template(
        "futebol.html",
        jogos=jogos
    )





@app.route("/api/jogos")
def api_jogos():

    jogos = buscar_jogos()

    jogos = organizar_jogos(jogos)


    return jsonify(jogos)





if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )