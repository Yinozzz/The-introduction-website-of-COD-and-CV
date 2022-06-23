
// Project.html
// Function used to send request
function loadXMLDoc(url,cfunc){
    xhr.onreadystatechange=cfunc;
    xhr.open("GET",url,true);
    xhr.send();
}

var xhr = new XMLHttpRequest();

// Ajax function to get text
const p = document.querySelector("#extend1");
const button1 = document.querySelector("#ajax2");
p.innerHTML = "";
function Text()
{
    
    if (!p.innerHTML){
        loadXMLDoc("../text/content1.txt",function()
        {
            if (xhr.readyState==4 && ((xhr.status>=200 && xhr.status<=304 )|| xhr.statusText == 'OK'))
            {
                p.innerHTML=xhr.responseText;
            }
        });

    }else{
        p.innerHTML= "";
    }
}


// Ajax function to get image
const image = document.querySelector("#dog");
function Imagedog()
{
	if (image.getAttribute('src','./img/dog1.gif')){
        loadXMLDoc("https://images.dog.ceo/breeds/husky/n02110185_14560.jpg",function()
        {
            if (xhr.readyState==4 && ((xhr.status>=200 && xhr.status<=304 )|| xhr.statusText == 'OK'))
            {
                image.src=xhr.responseURL;
            }
        });

    }
    
}



