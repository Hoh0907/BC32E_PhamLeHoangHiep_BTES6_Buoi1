diemTB = (...e) => {
    let n = 0;
    return (
        e.map((e) => {
            n += parseFloat(e);
        }),
        (n / e.length).toFixed(2)
    );
};
document.getElementById("btnKhoi1").onclick = () => {
    let toan = document.getElementById("inpToan").value,
        ly = document.getElementById("inpLy").value,
        hoa = document.getElementById("inpHoa").value;
    document.getElementById("tbKhoi1").innerHTML = diemTB(toan, ly, hoa);
};
document.getElementById("btnKhoi2").onclick = () => {
    let van = document.getElementById("inpVan").value,
        su = document.getElementById("inpSu").value,
        dia = document.getElementById("inpDia").value,
        anh = document.getElementById("inpEnglish").value;
    document.getElementById("tbKhoi2").innerHTML = diemTB(van, su, dia, anh);
};