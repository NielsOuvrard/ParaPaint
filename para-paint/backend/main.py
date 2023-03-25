##
## EPITECH PROJECT, 2023
## ParaPaint
## File description:
## main
##

import json
import mysql.connector


def read_json_file(file):
    with open(file, "r") as f:
        data = json.load(f)
    return data

def create_table():
    # Établir la connexion à la base de données
    conn = mysql.connector.connect(
        host="82.66.173.132",
        port="25565",
        user="root",
        password="root",
        database="hp_server"
    )

    # Créer un curseur pour exécuter les requêtes SQL
    cursor = conn.cursor()

    # Définir la requête SQL pour créer la table
    sql = "CREATE TABLE para-paint (id INT AUTO_INCREMENT PRIMARY KEY, pseudo VARCHAR(255), against VARCHAR(255), score INT, score_ennemy INT)"

    # Exécuter la requête SQL pour créer la table
    cursor.execute(sql)

    # Valider les changements et fermer la connexion
    conn.commit()
    conn.close()

def insert_data_to_mysql(data):
    # Établir la connexion à la base de données
    conn = mysql.connector.connect(
        host="localhost",
        user="votre_utilisateur",
        password="votre_mot_de_passe",
        database="nom_de_votre_base_de_données"
    )

    # Créer un curseur pour exécuter les requêtes SQL
    cursor = conn.cursor()

    # Parcourir les données du dictionnaire
    for item in data["data"]:
        # Extraire les informations de l'élément du dictionnaire
        pseudo = item["pseudo"]
        against = item["against"]
        score = item["score"]
        score_ennemy = item["score_ennemy"]

        # Exécuter la requête SQL pour insérer les données
        sql = "INSERT INTO votre_table (pseudo, against, score, score_ennemy) VALUES (%s, %s, %s, %s)"
        values = (pseudo, against, score, score_ennemy)
        cursor.execute(sql, values)

    # Valider les changements et fermer la connexion
    conn.commit()
    conn.close()

create_table()
# insert_data_to_mysql(read_json_file("data.json"))
