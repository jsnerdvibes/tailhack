const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            checkClasses(entry.target)
            
        }else{
            console.log("out of observer")
        }

    })
})

const  onScroll = document.querySelectorAll(".onScroll")

onScroll.forEach((el)=>observer.observe(el))


function checkClasses (elem){

    if(elem.classList.contains("slideIn-L")){ //Fade animation starts here
        elem.classList.remove("slideIn-L")
        elem.classList.add("slideIn-L-Prev")
        setTimeout(()=>{
            elem.classList.remove("slideIn-L-Prev")
        elem.classList.add("slideIn-L")
        },50)
    }else if(elem.classList.contains("slideIn-R")){
        elem.classList.remove("slideIn-R")
        elem.classList.add("slideIn-R-Prev")
        setTimeout(()=>{
            elem.classList.remove("slideIn-R-Prev")
        elem.classList.add("slideIn-R")
        },50)
    }
    else if(elem.classList.contains("slideIn-T")){
        elem.classList.remove("slideIn-T")
        elem.classList.add("slideIn-T-Prev")
        setTimeout(()=>{
            elem.classList.remove("slideIn-T-Prev")
        elem.classList.add("slideIn-T")
        },50)
    }
    else if(elem.classList.contains("slideIn-B")){
        elem.classList.remove("slideIn-B")
        elem.classList.add("slideIn-B-Prev")
        setTimeout(()=>{
            elem.classList.remove("slideIn-B-Prev")
        elem.classList.add("slideIn-B")
        },50)
    }else if(elem.classList.contains("fadeIn")){  //Fade animation starts here
        elem.classList.remove("fadeIn")
        elem.classList.add("fadeIn-Prev")
        setTimeout(()=>{
            elem.classList.remove("fadeIn-Prev")
        elem.classList.add("fadeIn")
        },50)
    }else if(elem.classList.contains("fadeIn-U")){
        elem.classList.remove("fadeIn-U")
        elem.classList.add("fadeIn-U-Prev")
        setTimeout(()=>{
            elem.classList.remove("fadeIn-U-Prev")
        elem.classList.add("fadeIn-U")
        },50)
    }else if(elem.classList.contains("fadeIn-D")){
        elem.classList.remove("fadeIn-D")
        elem.classList.add("fadeIn-D-Prev")
        setTimeout(()=>{
            elem.classList.remove("fadeIn-D-Prev")
        elem.classList.add("fadeIn-D")
        },50)
    }else if(elem.classList.contains("fadeIn-L")){
        elem.classList.remove("fadeIn-L")
        elem.classList.add("fadeIn-L-Prev")
        setTimeout(()=>{
            elem.classList.remove("fadeIn-L-Prev")
        elem.classList.add("fadeIn-L")
        },50)
    }else if(elem.classList.contains("fadeIn-R")){
        elem.classList.remove("fadeIn-R")
        elem.classList.add("fadeIn-R-Prev")
        setTimeout(()=>{
            elem.classList.remove("fadeIn-R-Prev")
        elem.classList.add("fadeIn-R")
        },50)
    }else if(elem.classList.contains("zoomIn")){ //Zoom animations starts here
        elem.classList.remove("zoomIn")
        elem.classList.add("zoomIn-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoomIn-Prev")
        elem.classList.add("zoomIn")
        },50)
    }else if(elem.classList.contains("zoomOut")){
        elem.classList.remove("zoomOut")
        elem.classList.add("zoomOut-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoomOut-Prev")
        elem.classList.add("zoomOut")
        },50)
    }else if(elem.classList.contains("zoom-U")){
        elem.classList.remove("zoom-U")
        elem.classList.add("zoom-U-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoom-U-Prev")
        elem.classList.add("zoom-U")
        },50)
    }else if(elem.classList.contains("zoom-D")){
        elem.classList.remove("zoom-D")
        elem.classList.add("zoom-D-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoom-D-Prev")
        elem.classList.add("zoom-D")
        },50)
    }else if(elem.classList.contains("zoom-L")){
        elem.classList.remove("zoom-L")
        elem.classList.add("zoom-L-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoom-L-Prev")
        elem.classList.add("zoom-L")
        },50)
    }else if(elem.classList.contains("zoom-R")){
        elem.classList.remove("zoom-R")
        elem.classList.add("zoom-R-Prev")
        setTimeout(()=>{
            elem.classList.remove("zoom-R-Prev")
        elem.classList.add("zoom-R")
        },50)
    }else if(elem.classList.contains("rotateIn")){  // Rotate animations start here
        elem.classList.remove("rotateIn")
        elem.classList.add("rotateIn-Prev")
        setTimeout(()=>{
            elem.classList.remove("rotateIn-Prev")
        elem.classList.add("rotateIn")
        },50)
    }else if(elem.classList.contains("rotate-L")){  // Rotate animations start here
        elem.classList.remove("rotate-L")
        elem.classList.add("rotate-L-Prev")
        setTimeout(()=>{
            elem.classList.remove("rotate-L-Prev")
        elem.classList.add("rotate-L")
        },50)
    }else if(elem.classList.contains("rotate-R")){
        elem.classList.remove("rotate-R")
        elem.classList.add("rotate-R-Prev")
        setTimeout(()=>{
            elem.classList.remove("rotate-R-Prev")
        elem.classList.add("rotate-R")
        },50)
    }


}