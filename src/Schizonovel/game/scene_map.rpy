# This file describes interactive map.


# default player_name = "Me"
default mental = 50


# The map is displayed here.

label scene_map_display:

    screen map():
        imagebutton:
            xpos 1000
            ypos 600
            idle "ico_forest.png"
            action Jump("scene_forest")
            
    
    # Show a background. This uses a placeholder by default, but you can
    # add a file (named either "bg city.png" or "bg city.jpg") to the
    # images directory to show it.

    scene bg city
    #show eileen happy
    #with dissolve
    
    show screen mental_bar
    show screen map

    # These display lines of dialogue.
    
    #e "Voilà un plan de la ville. Choisis un lieu à visiter."

    #hide eileen

    pause
    
    "Très bon choix !"

    jump scene_map_display
