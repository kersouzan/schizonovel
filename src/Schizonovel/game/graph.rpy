default completed = []

python:
    scene_graph = []
    bda_scene_files = {"bda1.xml", "bda2.xml", "bda3.xml"}
    bda_scene_graph = []
    bool_graph = []
    
    class SceneDescriptor:
        def __init__(self, label, icone, coordinates, conditions):
            self.label = label
            self.icone = icone
            self.coordinates = coordinates
            self.conditions = conditions

    class SceneGraph:
        def __init__(self):
            var = 2
            #TODO
        
        def load(self, xmlFile):
            import xml.etree.ElementTree as ET
            tree = ET.parse(xmlFile)
            root = tree.getroot()
            #for country in root.findall('Scene'):
            #    self.label =  = country.find('label').text
            #    self.icone =  = country.find('icone').text
            #    self.coordinates =  = country.find('coordinates').text
            #    self.conditions =  = country.find('conditions').text
        
        def mapDisplay(self):
            var = 2
            #TODO
    
    def completedScene(label):
        scene_graph[label].completed = True


#init python:
