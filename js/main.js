document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btn").disabled = true;
    document.querySelector("#drop-down-2").onchange = () => {
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
                        document.querySelector("#result").innerHTML = `1 ${fromcurrency} = ${rate.toFixed(3)} ${tocurrency}`;
                        document.querySelector("#btn").disabled = true;
                    }
                    else {
                        document.querySelector("#result").innerHTML = "Invalid Currency";
                        document.querySelector("#btn").disabled = true;
                    }
                }
                )
            document.querySelector("#btn").disabled = true;
            return false;
        }
    };
});