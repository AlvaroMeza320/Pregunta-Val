const music = document.getElementById("bg-music");

document.addEventListener("click", () => {
    music.play();
}, { once: true });
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const gif = document.getElementById("gif");
const text = document.getElementById("text");

const steps = [
    {
        gif: "Objetos/Deku-salvalo.gif",
        text: "No me voy a rendir tan fácil",
        yesStyle: { height: "65%", width: "60%" },
        noStyle: { width: "30%" }
    },
    {
        gif: "Objetos/Bakugo-molesto.gif",
        text: "¿Eso fue un no… o un desafío?",
        yesStyle: { height: "70%", width: "70%" },
        noStyle: { width: "20%" }
    },
    {
        gif: "Objetos/Deku-asustado.gif",
        text: "No me rendí con mis sueños… menos contigo",
        yesStyle: { height: "80%", width: "80%" },
        noStyle: { width: "10%", fontSize: "4vh" } 
    },
    {
        gif: "Objetos/Deku-llorando.gif",
        text: "Gritame si quieres… pero no me saques de tu vida",
        yesStyle: { height: "90%", width: "96%" },
        noStyle: { display: "none" } 
    }
];

let stepIndex = 0;

const allGifs = steps.map(step => step.gif).concat(("Objetos/Powder-Ekko.giif"));

allGifs.forEach(src => {
    const ing = new Image();
    ing.src = src;
});

noBtn.addEventListener("click", () => {
    if (stepIndex < steps.length) {
        const currentStep = steps[stepIndex]; 

        gif.src = currentStep.gif;
        text.innerHTML = currentStep.text;

        Object.assign(yesBtn.style, currentStep.yesStyle);
        Object.assign(noBtn.style, currentStep.noStyle);
        stepIndex++;
    }
});

yesBtn.addEventListener("click", () => {
    gif.src = "Objetos/Final.gif";
    text.innerHTML ="¡Lo sabia!";

    noBtn.style.display = "none";
    yesBtn.style.height = "90%";
    yesBtn.style.width = "96%";

    yesBtn.innerHTML = '<a href="https://wa.me/qr/2CKK2KELMVFSB1" class="boton-final">Texteame</a>';
})