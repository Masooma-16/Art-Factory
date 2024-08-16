//container 1 javascript
//const array=["home","about","services","frequently questions","drop down","contact us"];
const array=[
    {
       text:"home",
       id: "home"
    },
    {
        text:"about",
        id:"about"
    },
    {
        text:"services",
        id:"services"
    },
    {
        text:"frequently question",
        id:"frequently_asked"
    },
    {
        text:"drop down"
    },
    {
        text:"contact us",
        id: "contact"
    }
]
let list= "<ul>";
array.forEach(array=>{
    
    list+=
   `<li><a href="#${array.id}">${array.text}</a></li>`
   });
   list+="</ul>";
document.getElementById("C1").innerHTML = list;
//container 3 javascript
const item=[
    {
        image: "icon1.png",
        heading: "Nulla ultricies risus quis risus",
        text: "You can use this website template for commercial or non-commercial purposes."
    },
    {
        image: "icon2.png",
        heading: "Donec consequat commodo purus",
        text: "You have no right to re-distribute this template as a downloadable ZIP file on any website."
    },
    {
        image: "icon3.png",
        heading: "Sed placerat sollicitudin mauris",
        text: "If you have any question or comment, please <a href='https://templatemo.com/live/templatemo_537_art_factory'>contact </a>us on TemplateMo."
    }
];
let len=item.length;
let html_list= "<ul>";
for(let i=0;i<len;i++) {
    html_list+= 
    `<li>
        <img src="${item[i].image}"/>
        <div class="text">
            <h2>${item[i].heading}</h2>
            <p>${item[i].text}</p>
        </div>
    </li>`
    };
html_list+= "</ul>";
document.getElementById("demo").innerHTML = html_list;
//container 4 javascript
const arrayC4=[
    {
        image: "service-icon-01.png",
        heading: "First Box Service",
        text: "Aenean vulputate massa sed neque consectetur, ac fringilla quam alliquet. Sed a enim nec eros tempor cursos at id libero",
        button_text:"Read More"
    },
    {
        image: "service-icon-02.png",
        heading: "Second Box Title",
        text: "Pellentesque vitae urna ut nisi viverra tristique quis at dolor. In non dolor, id egestas quam. Aliquam erat volutpat.",
        button_text:"Discover More"
    },
    {
        image: "service-icon-03.png",
        heading: "Third Box Title",
        text: "Quisque finibus libero augue, in ultrices quam dictum id. Aliquam quis tellus sit amet urna tincidunt bibendum",
        button_text:"More Details"
    }
];
let C4display="";
arrayC4.forEach(arrayC4=>{
    C4display+=
 `<div class="box">
     <img src="${arrayC4.image}"/>
     <h2>${arrayC4.heading}</h2>
     <p>${arrayC4.text}</p>
      <div class="button">
         <input type="button" value="${arrayC4.button_text}" class="read">
      </div>
    </div>`
});
document.getElementById("C4").innerHTML=C4display;

//container 6 javascript
const C6array = [
    {
        button_text: "First Common Question",
        para: "Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros, condimentum consequat ex. Suspendisse potenti.Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat."
    },
    {
        button_text: "Second Question Answer",
        para: "Sed odio elit, cursus sed consequat at, rutrum eget augue. Cras ac eros iaculis, tempor quam sit amet, scelerisque mi. Quisque eu risus eget nunc porttitor vestibulum at a ante.Praesent ut placerat turpis, vel pellentesque dolor. Sed rutrum eleifend tortor, eu luctus orci sagittis in. In blandit fringilla mollis."
    },
    {
        button_text: "Third Answer for you",
        para: "Proin feugiat ante ut vulputate rutrum. Nam quis erat turpis. Nullam maximus pharetra lorem, eu condimentum est iaculis ut. Pellentesque mattis ultrices dignissim. Etiam et enim finibus, feugiat massa efficitur, finibus sapien. Sed cursus lacus quis arcu scelerisque, eget ornare risus maximus. Aenean non lectus id odio rhoncus pharetra."
    },
    {
        button_text: "Fourth Question Asked",
        para: "Phasellus eu purus ornare, eleifend orci nec, egestas nulla. Sed sed aliquet sapien. Proin placerat, ipsum eu posuere blandit, tellus quam consectetur nisi, id sollicitudin diam ex at nisi. Aenean fermentum eget turpis egestas semper. Sed finibus mollis venenatis. Praesent at sem in massa iaculis pharetra."
    },
    {
        button_text: "Fifth Ever Question",
        para: "Quisque aliquet ipsum ut magna rhoncus, euismod lacinia elit rhoncus. Sed sapien elit, mollis ut ultricies quis, fermentum nec ante. Sed nec ex nec tortor fermentum sollicitudin id ut ligula. Ut sagittis rutrum lectus, non sagittis ante euismod eu."
    },
    {
        button_text: "Sixth Sense Question",
        para: "Suspendisse potenti. Ut dapibus leo ut massa vulputate semper. Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat."
    }
];

let C6display = "";

for (let i = 0; i < C6array.length; i++) {
    C6display += `
    <button class="accordion">${C6array[i].button_text}</button>
        <div class="panel">
            <p>${C6array[i].para}</p>
        </div>
    `
};

document.getElementById("C6").innerHTML = C6display;

var accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") 
            {
            panel.style.display = "none";
        } 
        else 
        {
            panel.style.display = "block";
        }
    });
};