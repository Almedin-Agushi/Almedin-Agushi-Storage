

document.getElementById("output").style.visibility="hidden";

document.getElementById("gigabytes_input").addEventListener("input", convertor);

function convertor(e) {
    
    document.getElementById("output").style.visibility="visible";

    var gigabytes=e.target.value;

    document.getElementById("bytes_output").innerHTML=gigabytes*0.00097656;
    document.getElementById("gigabits_output").innerHTML=gigabytes*8;
    document.getElementById("kilobytes_output").innerHTML=gigabytes*1048576;
    document.getElementById("megabytes_output").innerHTML=gigabytes*1024;
    document.getElementById("terabytes_output").innerHTML=gigabytes*0.00097656;
  
    
}

