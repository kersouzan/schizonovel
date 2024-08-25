# This file describes interactive map.

# The map is displayed here.

label scene_tuto:

    scene bg city
    
    show screen main_GUI
    show screen map

    show eileen happy
    
    e "Je te souahite la bienvenue [player_name] ! Commençons par un rapide tutoriel."

    e "Tu peux passer le tutoriel à l'aide du bouton skip dans le menu en bas de l'écran."

    e "Commençons par la carte. Elle contient des destinations où tu peux te rendre."

    e "Certaines changeront en fonction des choix que tu fais."

    e "Ensuite, il y a les boutons: celui de la santé mentale (le cerveau) et celui des compétences(le calepin)."

    e "La jauge à droite du cerveau indique ta santé mentale. Si elle tombe à zéro, tu fera une bouffée délirante aiguë."
    
    e "En cliquant sur le cerveau, tu accèderas à des remontants pour gérer ta santé mentale."

    e "Si tu cliques sur le calepin, tu accèderas aux compétences et statistiques de ta partie."

    menu:
        "Et voilà ! Tu as finis le tutoriel."
    
        "Je veux bien revoir le tuto encore une fois.":
            jump scene_tuto
    
        "Je suis prêt à commencer !":
            jump scene_map_display
