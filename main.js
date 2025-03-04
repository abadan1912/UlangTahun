function playMusic() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

const text = "Selamat Ulang Tahun Cantiknya Abadan yaitu Siti Azzahra Di usia yang ke-19 Tahun 🎉🎂. Lala adalah penyemangat Abadan 💪, Lala adalah segalanya bagi Abadan 💖, Lala adalah Warna dalam Hidup Abadan 🌈, Lala adalah anugerah yang diturunkan kepada Abadan 🎁. Maafin Pacar mu ini sayang yaa 🙏, maafin pacar mu yang suka bikin laa kesel 😅, yang tingkah nya tengil 😜, yang terkadang sifat, perlakuan dan tingkah nya ngebikin laa kesel, marah atau pengen nabok hehe 😜🤭, wajarlah manusia bukan nabi boyyyyy wkwkwkwk 🤣. Oiya last but not least, semoga apa yang sayang harapkan dan apa yang sayang ingin capai semoga terkabulkan ✨ dan juga semoga hubungan kita makin langgeng sayang yaa 💑. I LOVE YOU BIDADARI NYA ABADAN SYAKIRA 💖";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;

