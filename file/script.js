const fileInput = document.getElementById("upload");

const handleFiles = () => {
    const selectedFile = [...fileInput.files];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(selectedFile[0]);

    fileReader.onload = function() {
        document.getElementById("main_img").src = fileReader.result;
    };
};

fileInput.addEventListener("change",handleFiles);

function printTime() {
    const time = document.getElementById("time").value;
    document.getElementById("result_time").innerText = time;
}

function printPhone() {
    const phone = document.getElementById("phone").value;
    document.getElementById("result_phone").innerText = phone;
}

function printAddress() {
    const address = document.getElementById("address").value;
    document.getElementById("result_address").innerText = address;
}

const list_btn = document.getElementById("list_btn");
const change = document.getElementById("change")
list_btn.addEventListener("click",function(){
    change.innerHTML="안녕";
    // list.appendChild(hx);
})
