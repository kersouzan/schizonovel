default food_timer = 0
default alcool_timer = 0
default cigarette_timer = 0
default joints_timer = 0
default benzo_timer = 0

default food_time_limit = 10
default alcool_time_limit = 10
default cigarette_time_limit = 10
default joints_time_limit = 10
default benzo_time_limit = 10


screen shooters():
    modal True

    # As the screen is modal, the brain button (above screen)
    # can't be triggered. This copy allow to hide the screen

    imagebutton:
        xpos 50
        ypos 25
        idle "brain_button.png"
        action Hide()

    frame:
        xalign 0.02
        yalign 0.25
        xpadding 20
        ypadding 20
        vbox:
            imagebutton:
                #xpos 50
                #ypos 200
                idle "food_button.png"
                action [Hide(), Call("shooter_food")]

            imagebutton:
                #xpos 50
                #ypos 320
                idle "alcool_button.png"
                action [Hide(), Call("shooter_alcool")]

            imagebutton:
                #xpos 50
                #ypos 440
                idle "cigarette_button.png"
                action [Hide(), Call("shooter_cigarette")]

            imagebutton:
                #xpos 50
                #ypos 560
                idle "joints_button.png"
                action [Hide(), Call("shooter_joints")]

            imagebutton:
                #xpos 50
                #ypos 680
                idle "benzo_button.png"
                action [Hide(), Call("shooter_benzo")]



label shooter_food:
    if (food_timer + food_time_limit < renpy.get_game_runtime()):
        $ mental += 10
        $ food_timer = renpy.get_game_runtime()
    else:
        player "Je devrais attendre un peu avant d'en reprendre."
    return 0

label shooter_alcool:
    if (alcool_timer + alcool_time_limit < renpy.get_game_runtime()):
        $ mental += 10
        $ alcool_timer = renpy.get_game_runtime()
    else:
        player "Je devrais attendre un peu avant d'en reprendre."
    return 0

label shooter_cigarette:
    if (cigarette_timer + cigarette_time_limit < renpy.get_game_runtime()):
        $ mental += 10
        $ cigarette_timer = renpy.get_game_runtime()
    else:
        player "Je devrais attendre un peu avant d'en reprendre."
    return 0

label shooter_joints:
    if (joints_timer + joints_time_limit < renpy.get_game_runtime()):
        $ mental += 10
        $ joints_timer = renpy.get_game_runtime()
    else:
        player "Je devrais attendre un peu avant d'en reprendre."
    return 0

label shooter_benzo:
    if (benzo_timer + benzo_time_limit < renpy.get_game_runtime()):
        $ mental += 10
        $ benzo_timer = renpy.get_game_runtime()
    else:
        player "Je devrais attendre un peu avant d'en reprendre."
    return 0
