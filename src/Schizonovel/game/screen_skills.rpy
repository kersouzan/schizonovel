screen skills():
    modal True

    # As the screen is modal, the brain button (above screen)
    # can't be triggered. This copy allow to hide the screen

    frame:
        xalign 0.5
        yalign 0.5
        image "calepin.png"
        vbox:
            #xalign 0.5
            #yalign 0.5
            #xsize 1.0
            #ysize 1.0
 
            for i in range(len(skills)):
                $ skill = skills[i]
                hbox:
                    text "{color=#000}[skill.name]{/color}"
                    text "{color=#000}[skill.cost]{/color}"
                    
                    imagebutton:
                        idle "add.png"
                        action Jump(skill.label)
                
    imagebutton:
        xalign 0.95
        yalign 0.05
        idle "x.png"
        action Hide()
