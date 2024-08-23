screen skills():
    modal True

    # As the screen is modal, the brain button (above screen)
    # can't be triggered. This copy allow to hide the screen

    frame:
        xalign 0.5
        yalign 0.5
        image "calepin.png"
        grid 4 2:  # TODO boucle for sur la struct skills
            xalign 0.5
            yalign 0.5
            xsize 1.0
            ysize 1.0
 
            text "{color=#000}Méditation{/color}"

            imagebutton:
                #xpos 50
                #ypos 200
                idle "add.png"
                action NullAction()
                
            text "{color=#000}Marche{/color}"
            
            imagebutton:
                #xpos 50
                #ypos 200
                idle "add.png"
                action NullAction()

            text "{color=#000}Lecture{/color}"

            imagebutton:
                #xpos 50
                #ypos 200
                idle "add.png"
                action NullAction()
                
            text "{color=#000}Séries{/color}"
            
            imagebutton:
                #xpos 50
                #ypos 200
                idle "add.png"
                action NullAction()
                
                
    imagebutton:
        xalign 0.95
        yalign 0.05
        idle "x.png"
        action Hide()
