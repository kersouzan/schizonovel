﻿# The script of the game goes in this file.

# Declare characters used by this game. The color argument colorizes the
# name of the character.

define e = Character("Eileen")

default player_name = "Me"
default player_male = False



# The game starts here.

label start:

    # Show a background. This uses a placeholder by default, but you can
    # add a file (named either "bg room.png" or "bg room.jpg") to the
    # images directory to show it.

    scene bg room

    # This shows a character sprite. A placeholder is used, but you can
    # replace it by adding a file named "eileen happy.png" to the images
    # directory.

    show eileen happy

    # These display lines of dialogue.
    
    $ player_name = renpy.input( "Hello there ! What s your name ?")

    e "Hi [player_name] ! What's your gender ?"
    
    menu:

        "Female.":
            $ player_male = False
            jump player_chose_look

        "Male.":
            $ player_male = True
            jump player_chose_look

    label player_chose_look:

    e "La suite pour bientôt !"

    # This ends the game.

    return
