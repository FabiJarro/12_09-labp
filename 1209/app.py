from flask import Flask, render_template, jsonify
app = Flask(__name__)

dados_biografias = {

    "santos_dumont": {
    "nome": "Santos Dumont",
    "texto": "Alberto Santos Dumont Foi um aeronauta, esportista e inventor brasileiro",
    },

    "marie_curie" :{
        "nome": "Marie Curie",
        "texto": "Maria Curie foi uma fisica..."
    },

    "einstein":{
        "nome": "Albert Einstein",
        "texto": "Albert Einstein foi um fisico..."
    }
}


@app.route("/")
def index():
    personagens = dados_biografias.keys()
    return render_template("index.html", personagens = personagens, nomes = dados_biografias)



@app.route("/biografia/<id_personagem>")
def get_biografia(id_personagem):
    biografia_data = dados_biografias.get(id_personagem,{
        "nome": "Desconhecido", 
        "texto": "personagem nao encontrado"
    })


    return jsonify(biografia_data)





if __name__ == '__main__':
    app.run(debug=True, port=5001)