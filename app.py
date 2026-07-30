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



def organizar_jogos(jogos):

    agora = datetime.now()


    for jogo in jogos:

        try:

            data_hora = datetime.strptime(
                f"{jogo['data_original']} {jogo['hora']}",
                "%Y-%m-%d %H:%M"
            )


            if jogo.get("placar_casa") != "-" and jogo.get("placar_fora") != "-":

                jogo["status"] = "AO VIVO"


            elif data_hora > agora:

                jogo["status"] = "PRÓXIMO JOGO"


            else:

                jogo["status"] = "ENCERRADO"



        except:

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