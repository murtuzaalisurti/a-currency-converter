document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btn").disabled = true;
    document.querySelector("#input1").onkeyup = () => {
        // document.querySelector("#btn").disabled = false;
        var selectdropdown = document.querySelectorAll("select");
        console.log(selectdropdown);
        for (let i = 0; i < selectdropdown.length; i++) {
            selectdropdown[i].onchange = () => {
                document.querySelector("#btn").disabled = false;
            }
        }
        document.querySelector("#btn").disabled = false;
        document.querySelector("form").onsubmit = () => {
            const fromcurrency = document.querySelector("#drop-down-1").value;
            var url = new URL("https://api.exchangeratesapi.io/latest?base=USD");
            var search_params = url.searchParams;
            let Base = search_params.set('base', fromcurrency);
            url.search = search_params.toString();
            var new_url = url.toString();
            console.log(new_url);
            fetch(new_url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const tocurrency = document.querySelector("#drop-down-2").value;
                    const rate = data.rates[tocurrency];
                    console.log(rate);
                    if (rate !== undefined) {
                        var convertfrom = document.getElementById("input1").value;
                        var converted = convertfrom * rate;
                        document.querySelector("#result").innerHTML = `<b>${convertfrom}</b>&nbsp ${fromcurrency} = &nbsp<b>${converted.toFixed(3)}</b>&nbsp ${tocurrency}`;
                    }
                    else {
                        document.querySelector("#result").innerHTML = "Invalid Currency";
                    }
                }
                )
            document.querySelector("#btn").disabled = true;
            return false;
        }
    };
});