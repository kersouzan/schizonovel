screen skills():
    modal True

    # As the screen is modal, the brain button (above screen)
    # can't be triggered. This copy allow to hide the screen

    frame:
        xalign 0.5
        yalign 0.5
        image "calepin.png"
        
        hbox:
            xpos 85
            ypos 60
            spacing 170
            text "{color=#000}Compétences:{/color}"
            text "{color=#000}Cost{/color}"
        
        hbox:
            xpos 100
            ypos 100
            spacing 50
            #xalign 0.5
            #yalign 0.5
            #xsize 1.0
            #ysize 1.0
 
            vbox:
                for i in range(len(skills)):
                    text "{color=#000}[skills[i].name]{/color}"
                    
            vbox:
                for i in range(len(skills)):
                    text "{color=#000}[skills[i].cost]{/color}"
                    
            vbox:
                spacing 14
                for i in range(len(skills)):
                    imagebutton:
                        idle "add_25.png"
                        action Jump(skills[i].label)
                        
    imagebutton:
        xalign 0.95
        yalign 0.05
        idle "x.png"
        action Hide()
