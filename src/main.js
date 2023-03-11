function change_time() {
    let checkBox = document.getElementById("time");
    let monthly_price = document.getElementsByClassName("monthly-price");
    let annually_price = document.getElementsByClassName("annually-price");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        for (const i of monthly_price) i.style.display = "block";
        for (const i of annually_price) i.style.display = "none";
    } else {
        for (const i of monthly_price) i.style.display = "none";
        for (const i of annually_price) i.style.display = "block";
    }
}