default player_name = "Me"
default player_male = False

label scene_player_init:

    # Show a background. This uses a placeholder by default, but you can
    # add a file (named either "bg room.png" or "bg room.jpg") to the
    # images directory to show it.

    scene bg room

    # This shows a character sprite. A placeholder is used, but you can
    # replace it by adding a file named "eileen happy.png" to the images
    # directory.

    show eileen happy

    # These display lines of dialogue.
    
    $ player_name = renpy.input( "Salut ! Quel est ton nom ?")

    e "Bienvenu [player_name] ! De quel genre es tu ?"
    
    menu:

        "Femme.":
            $ player_male = False
            jump scene_player_chose_look

        "Homme.":
            $ player_male = True
            jump scene_player_chose_look

    label scene_player_chose_look:

    e "Tu pourras bientôt choisir ton look."

    jump scene_map_display
