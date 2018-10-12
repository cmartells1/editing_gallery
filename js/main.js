// Enter your JavaScript for the solution here...
window.addEventListener("load",function(){
    var pictureObject1={
        src:"img/athens.png",
        alt:"Athens",
        title:"The Parthenon in Athens",
        tag:"",
    }

    var pictureObject2={
        src:"img/barcelona.png",
        alt:"Barcelona",
        title:"Sunrise on Barcelona",
        tag:"",
    }

    var pictureObject3={
        src:"img/lisbon.png",
        alt:"Lisbon",
        title:"View across Lisbon",
        tag:"",
    }

    var dataArray=[];
    dataArray.push(pictureObject1);
    dataArray.push(pictureObject2);
    dataArray.push(pictureObject3);
    
    document.querySelector("form").addEventListener('submit', addTags)
    document.querySelector(".thumbnails").addEventListener("click",onUpdateDisplay);
    
    function onUpdateDisplay(e){
        var picAlt = e.target.alt;
        switch(picAlt){
            case "Athens": setDisplay(dataArray[0]);break;
            case "Barcelona": setDisplay(dataArray[1]);break;
            case "Lisbon": setDisplay(dataArray[2]);break;
        }
    }

    function addTags(e){
        var tagForm = e.target;
        var tags = tagForm.elements.tag;
        var error = document.querySelector('.error')
        var thumbTag =  "";
        var thumbpic = document.querySelector('.thumbnails')
        
        if(tags.value.trim() === ''){
            
            error.innerHTML = 'You need to enter a tag.'
            error.classList.remove('hidden');  
            tags.value=" ";          
        } 
        else if (/\s/.test(tags.value.trim())){
            error.classList.remove('hidden')
            error.innerHTML= 'The tag cannot include spaces.';
            tags.value=" ";
        }
        else{
            thumbTag += document.querySelector('p.tags').innerHTML += '#' + tags.value + " ";
            tags.value=" ";
            error.classList.add('hidden'); 
            
            if(document.querySelector('.editor').alt === 'Athens'){
               
                dataArray[0].tag.add(thumbTag);
            }
        }

        console.log(dataArray[0].tag)
        
        e.preventDefault();
        
    }

    function setDisplay(obj){
        document.querySelector(".editor h2").innerHTML = obj.title;
        document.querySelector(".editor img").title = obj.title;
        document.querySelector(".editor img").src = obj.src;
        document.querySelector(".editor img").alt = obj.alt;
        document.querySelector(".tags").innerHTML = obj.tag;
        document.querySelector('.error').innerHTML="";
    }

    

    
})