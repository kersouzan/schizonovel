default player_name = "Me"
default player_male = False

define player = Character("[player_name]", color="#ffc8c8")

label scene_player_init:

    scene bg room

    show eileen happy

    $ player_name = renpy.input( "Salut ! Quel est ton nom ?")
    $ player_name = player_name.strip()

    if not player_name:
        $ player_name = "John Doe"

    jump scene_tuto
