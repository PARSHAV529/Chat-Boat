let userinput = document.querySelector("#input");
let chatbox = document.querySelector(".chatBOx")
let send = document.querySelector("#send");
const API_KEY = ""
let usermsg;


const createli = (usermsg, classname) => {
    let li = document.createElement("li");
    li.classList.add("chat", classname);
    let chatcontent = classname === "out" ? `<p>${usermsg}</p>` : `<i class="fa-solid fa-robot"></i><p>${usermsg}</p>`
    li.innerHTML = chatcontent;
    return li;


}


const generateResponse = async () => {

    
}


send.addEventListener("click", () => {
    usermsg = userinput.value.trim();
    console.log(usermsg);

    chatbox.appendChild(createli(usermsg, "out"));
    chatbox.scrollTo(0, chatbox.scrollHeight)
    userinput.value = "";
    setTimeout(() => {
        chatbox.appendChild(createli("thinking...", "In"));
        chatbox.scrollTo(0, chatbox.scrollHeight)
        generateResponse()

    }, 200);
})