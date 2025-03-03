function gacha() {
    let hadiah = [
        { nama: "Ilyas jago epep", chance: 5 },   // Paling langka (5%)
        { nama: "SG epep", chance: 15 },         // 15%
        { nama: "Epep", chance: 25 },           // 25%
        { nama: "Garena epep", chance: 25 },    // 25%
        { nama: "Alok epep", chance: 30 }       // Paling mudah (30%)
    ];

    let jumlahGacha = parseInt(document.getElementById("gacha-count").value);
    let hasilGacha = "";

    for (let j = 0; j < jumlahGacha; j++) {
        let random = Math.random() * 100;
        let cumulative = 0;

        for (let i = 0; i < hadiah.length; i++) {
            cumulative += hadiah[i].chance;
            if (random < cumulative) {
                hasilGacha += `🎁 ${j + 1}. Kamu mendapatkan: ${hadiah[i].nama}<br>`;
                break;
            }
        }
    }

    document.getElementById("gacha-result").innerHTML = hasilGacha;
}
