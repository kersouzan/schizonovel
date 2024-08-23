# This file describes interactive map.

# The map is displayed here.

label scene_map_display:

    screen map():
        imagebutton:
            xpos 1000
            ypos 600
            idle "ico_forest.png"
            action Jump("scene_forest")
            
    
    # Show a background. This uses a placeholder by default, but you can
    # add a file (named either "bg city.png" or "bg city.jpg") to the
    # images directory to show it.

    scene bg city
    
    show screen main_GUI
    show screen map

    pause
    
    jump scene_map_display
