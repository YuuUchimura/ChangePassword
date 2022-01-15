const nowPass = document.getElementById("nowPassword");
let pv = "aaaaa";
nowPass.textContent = `現在のパスワードは${pv}`;

const setPassword = document.getElementById("setPassword");

setPassword.addEventListener("click", () => {
    const cp = document.getElementById("confirmPassword").value;
    const np = document.getElementById("newPassword").value;

    if (pv === cp) {
        if (pv !== np) {
            // let result = np.match(/^\d{3}-?\d{4}$/g);
            // const check = /(.)\1/;
            // let result = check.test(np);
            const reserach = /abc/g;
            let result = np.search(reserach);
            console.log(result);
            if (result < 0) {
                pv = np;
                pv.textContent = pv;
                nowPass.textContent = `現在のパスワードは ${pv}`;
                alert(`新しいパスワードは ${pv}です`);
            } else {
                alert("「abc」を含むものは使えません");
            } 
        } else {
            alert('同じパスワードはつかえません！');
        }

    } else {
        alert('古いパスワードが間違っています！');
    }


});