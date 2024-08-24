screen skills():
    modal True

    # As the screen is modal, the brain button (above screen)
    # can't be triggered. This copy allow to hide the screen

    frame:
        xalign 0.5
        yalign 0.5
        image "calepin.png"
        
        text "{color=#000}Compétences:{/color}"
        
        $ from math import *
        $ nbRow = len(skills)
        grid 3 nbRow :
            xpos 100
            ypos 100
            xspacing 50
            #xalign 0.5
            #yalign 0.5
            #xsize 1.0
            #ysize 1.0
 
            for i in range(len(skills)):
                $ skill = skills[i]
                text "{color=#000}[skill.name]{/color}"
                
                text "{color=#000}[skill.cost]{/color}"
                
                imagebutton:
                    idle "add_25.png"
                    action Jump(skill.label)
                        
    imagebutton:
        xalign 0.95
        yalign 0.05
        idle "x.png"
        action Hide()
