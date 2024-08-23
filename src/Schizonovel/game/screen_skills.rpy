screen skills():
    modal True

    # As the screen is modal, the brain button (above screen)
    # can't be triggered. This copy allow to hide the screen

    imagebutton:
        xalign 0.5
        ypos 25
        idle "notes.png"
        action Hide()

    frame:
        xalign 0.5
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
                