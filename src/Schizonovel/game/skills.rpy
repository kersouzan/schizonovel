define skills = []

init python:
    class Skill:
        def __init__(self, name, cost, label, mental_effect):
            self.name = name
            self.cost = cost
            self.label = label
            self.mental_effect = mental_effect

    skills.append(Skill("Lecture", "100", "skill_read", 5))
    skills.append(Skill("Marche", "100", "skill_walk", 5))
    skills.append(Skill("Méditation", "100", "skill_meditate", 5))
    skills.append(Skill("Nutrition", "100", "skill_nutrition", 5))
    skills.append(Skill("Relation amicale", "100", "skill_friends", 5))
    skills.append(Skill("Relation sentimentale", "100", "skill_lover", 5))
    skills.append(Skill("Séries", "100", "skill_series", 5))


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
    
    