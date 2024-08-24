default mental = 50

screen main_GUI():
    imagebutton:
        xpos 50
        ypos 25
        idle "brain_button.png"
        action ToggleScreen("shooters")

    bar:
        value mental
        range 100
        left_bar "mental_bar_full.png"
        right_bar "mental_bar_empty.png"
        xysize(200,50)
        xalign 0.1
        yalign 0.05

    imagebutton:
        xalign 0.5
        ypos 25
        idle "notes.png"
        action ToggleScreen("skills")
