Feature: OpenMyApp
    Afficher le logo react et un lien permettant d'accéder à la documentation
    Scenario: Lien vers Learn React ouvre dans une nouvelle fenêtre
        Given le serveur de test est prêt
        When j'accède à la page par défaut
		Then le lien ouvre une nouvelle page