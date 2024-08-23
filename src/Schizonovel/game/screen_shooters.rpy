screen shooters():
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
    $ mental += 10
    return 0

label shooter_alcool:
    $ mental += 10
    return 0

label shooter_cigarette:
    $ mental += 10
    return 0

label shooter_joints:
    $ mental += 10
    return 0

label shooter_benzo:
    $ mental += 10
    return 0
