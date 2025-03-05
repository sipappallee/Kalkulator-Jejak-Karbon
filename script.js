document.getElementById("kategori").addEventListener("change", function() {
    var kategori = document.getElementById("kategori").value;
    var acInput = document.getElementById("acInput");

    if (kategori === "ac") {
        acInput.style.display = "block";
    } else {
        acInput.style.display = "none";
    }
});

function hitungJejakKarbon() {
    let kategori = document.getElementById("kategori").value;
    let jumlah = parseFloat(document.getElementById("jumlah").value);
    let barang = parseFloat(document.getElementById("barang").value);
    let jejakKarbon = 0;

    let faktorEmisi = {
        "ac": 0.8,
        "mobil": 2.3,
        "lampu": 0.1,
        "motor": 3.0,
        "tv": 0.15,
    };

    if (isNaN(jumlah) || isNaN(barang) || jumlah <= 0 || barang <= 0) {
        document.getElementById("hasil").innerText = "Harap masukkan angka yang valid!";
        return;
    }

    if (kategori === "ac") {
        let watt = parseFloat(document.getElementById("watt").value);
        if (isNaN(watt) || watt <= 0) {
            document.getElementById("hasil").innerText = "Harap masukkan daya AC yang valid!";
            return;
        }

        // Perhitungan khusus AC
        jejakKarbon = watt * jumlah * barang * 0.00085;
    } else {
        if (!faktorEmisi.hasOwnProperty(kategori)) {
            document.getElementById("hasil").innerText = "Kategori tidak dikenali";
            return;
        }

        // Perhitungan umum
        jejakKarbon = jumlah * barang * faktorEmisi[kategori];
    }

    // Menampilkan hasil hanya Jejak Karbon
    document.getElementById("hasil").innerText = 
        `Total Jejak Karbon: ${jejakKarbon.toFixed(2)} kg CO2`;
}
