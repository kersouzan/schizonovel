# This file describes game tutorial.
screen forest_map_tuto():
    add "places/ico_forest.png" pos(1000,600)

screen gui_map_tuto():
    add "gui/brain_button.png" pos(50,25)

    bar:
        value mental
        range 100
        left_bar "gui/mental_bar_full.png"
        right_bar "gui/mental_bar_empty.png"
        xysize(200,50)
        xalign 0.1
        yalign 0.05

    add "gui/notes.png" pos(0.5, 25)

screen shooters_map_tuto():
    add VBox(
        "gui/food_button.png",
        "gui/alcool_button.png",
        "gui/cigarette_button.png",
        "gui/joints_button.png",
        "gui/benzo_button.png"
    ) align (0.02, 0.25)

label scene_tuto:

    scene bg city
    
    show eileen happy
    
    e "Bienvenue [player_name] ! Commençons par un rapide tutoriel."

    e "Tu peux passer le tutoriel à l'aide du bouton skip dans le menu en bas de l'écran."

    show screen forest_map_tuto

    e "Commençons par la carte. Elle contient des destinations où tu peux te rendre, comme la forêt affichée ici."

    e "Certaines changeront en fonction des choix que tu fais."

    hide screen forest_map_tuto
    show screen gui_map_tuto

    e "Ensuite, il y a les boutons: celui de la santé mentale (le cerveau) et celui des compétences(le calepin)."

    e "La jauge à droite du cerveau indique ta santé mentale. Si elle tombe à zéro, ce sera la fin de la partie."
    
    show screen shooters_map_tuto

    e "En cliquant sur le cerveau, tu accèderas à des remontants pour gérer ta santé mentale."

    hide screen shooters_map_tuto

    e "Si tu cliques sur le calepin, tu accèderas aux compétences et statistiques de ta partie."

    hide screen gui_map_tuto

    menu:
        "Et voilà ! Tu as finis le tutoriel."
    
        "Je veux bien revoir le tuto encore une fois.":
            jump scene_tuto
    
        "Je suis prêt à commencer !":
            jump scene_map_display
