function gacha() {
    let hadiah = [
        { nama: "Ilyas jago epep", chance: 5 },   // Paling langka (5%)
        { nama: "SG epep", chance: 15 },         // 15%
        { nama: "Epep", chance: 25 },           // 25%
        { nama: "Garena epep", chance: 25 },    // 25%
        { nama: "Alok epep", chance: 30 }       // Paling mudah (30%)
    ];

    let random = Math.random() * 100;
    let cumulative = 0;
    let hasil = "";

    for (let i = 0; i < hadiah.length; i++) {
        cumulative += hadiah[i].chance;
        if (random < cumulative) {
            hasil = `🎁 Kamu mendapatkan: ${hadiah[i].nama}`;
            break;
        }
    }

    let hasilGacha = document.getElementById("gacha-result");
    let p = document.createElement("p");
    p.innerHTML = hasil;
    hasilGacha.appendChild(p);
}
