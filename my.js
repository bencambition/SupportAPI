var change = 0;

function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbwBDaQ4q8gU6YMX_igGKH2EfrVvNcJDtzylQvnrn8neJnMow0O-f9HGLO1_0CiAPzVS/exec"
    fetch(url).then(function(response){
        return response.json();
    }
    ).then(function(obj) {
        console.log(obj);
    }).catch(function(error){
        console.error('bad');
        console.error(error);
    })
}

function testText(){
    
    if (change == 0){
        document.getElementById("btn").innerHTML = "one";
        change = 1;
    } else if (change == 1){
        document.getElementById("btn").innerHTML = "two";
        change = 0;
    } else{
        document.getElementById("btn").innerHTML = change;
    }
}

document.getElementById("btn").addEventListener("click",testGS);
document.getElementById("btn").addEventListener("click",testText);