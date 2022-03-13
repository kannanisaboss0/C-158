//----------------------------------------------------------------War Robots Showcase----------------------------------------------------------------//
//-----------------------------------------------------------------------events.js---------------------------------------------------------------//

//Registering a component to display the various options of robots available 
AFRAME.registerComponent("listener",{

    //Schema
    schema:{    
    },

    //Calling the init function
    init:function(){

       //Adding an event listener that is activated when the cursor enters periphery of the object
       this.el.addEventListener("mouseenter",(e)=>{

       //Assigning a variable for the element selected, using the events parameter 
       selected_element=e.target

        //Verifying whether the element's id has a substring of "-image"
        ////Case-1 -The id consists of the sunstring "-image"
        if(selected_element.id.includes("-image")){

             //Using the current id to change attributes of the border and title components as well
             ////Border
             el_acquired_border=document.getElementById(selected_element.id.replace("-image","-border"))
             el_acquired_border.setAttribute("material",{color:"black"})

             ////Title
             el_acquired_title=document.getElementById(selected_element.id.replace("-image","-title"))
             el_acquired_title.setAttribute("text",{color:"black"})
        }
       },
      
       //Adding an event listener that is activated when the cursor exits periphery of the object
       this.el.addEventListener("mouseleave",(e)=>{

        //Verifying whether the element's id has a substring of "-image"
        ////Case-1 -The id consists of the sunstring "-image"
        if(selected_element.id.includes("-image")){

            //Using the current id to change attributes of the border and title components as well
            ////Border
            el_acquired_border=document.getElementById(selected_element.id.replace("-image","-border"))
            el_acquired_border.setAttribute("material",{color:"yellow"})

            ////Title
            el_acquired_title=document.getElementById(selected_element.id.replace("-image","-title"))
            el_acquired_title.setAttribute("text",{color:"yellow"})
       }
       })
       )
   }
})

//-----------------------------------------------------------------------events.js---------------------------------------------------------------//
//----------------------------------------------------------------War Robots Showcase----------------------------------------------------------------//
