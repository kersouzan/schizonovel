define skills = []

init python:
    class Skill:
        def __init__(self, name, cost, label, mental_effect, description):
            self.name = name
            self.cost = cost
            self.label = label
            self.mental_effect = mental_effect
            self.description = description

    skills.append(Skill("Lecture", "100", "skill_read", 5, "Passer du temps à lire chaque soir."))
    skills.append(Skill("Marche", "100", "skill_walk", 5, "Marche quotidienne d'une demi heure"))
    skills.append(Skill("Méditation", "100", "skill_meditate", 5, "Médite 20 minutes chaque matin après le lever"))
    skills.append(Skill("Nutrition", "100", "skill_nutrition", 5, "Cuisine des plats, et change des pates pour une alimentation variée à base de légumes"))
    skills.append(Skill("Relation amicale", "100", "skill_friends", 5, "Prend le temps d'appeler Jeff pour aller boire un verre."))
    skills.append(Skill("Relation sentimentale", "100", "skill_lover", 5, "Passe du temps avec ma/mon compagn.e.on"))
    skills.append(Skill("Séries", "100", "skill_series", 5, "Regarde un épisode de la série encours par jour pour se divertir."))


label skill_read:
    player "J'aime lire !"
    
label skill_walk:
    player "J'aime marcher !"
    
label skill_meditate:
    player "J'aime méditer !"
    
label skill_nutrition:
    player "J'aime me nourrir sainement !"
    
label skill_friends:
    player "J'aime voir mes amis !"
    
label skill_lover:
    player "J'aime mon amour !"
    
label skill_series:
    player "J'aime regarder des séries !"
    
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
            text "{color=#000}Coût{/color}"
        
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
