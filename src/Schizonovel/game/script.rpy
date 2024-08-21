# The script of the game goes in this file.

# Declare characters used by this game. The color argument colorizes the
# name of the character.

define e = Character("Eileen")

default init_done = False



# The game starts here.

label start:

    if init_done:
        jump map_display
    else:
        jump player_init
    
    
    # This ends the game.

    return
