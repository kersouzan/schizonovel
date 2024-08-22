# This file describes interactive map.


# default player_name = "Me"


# The map is displayed here.

label map_display:

    # Show a background. This uses a placeholder by default, but you can
    # add a file (named either "bg city.png" or "bg city.jpg") to the
    # images directory to show it.

    scene bg city
    #show eileen happy
    with dissolve

    #show screen mental_bar

    # These display lines of dialogue.
    
    #e "Voilà un plan de la ville. Choisis un lieu à visiter."

    #hide eileen

    pause
    




    # ajouter les destinations




    
    "Très bon choix !"

    jump map_display
