document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btn").disabled = true;
    document.querySelector("#input1").onkeyup = () => {
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
                        const convertto = document.querySelector("#input1").value;
                        const converted = (convertto * rate).toFixed(3);
                        if (tocurrency == "INR") {
                            const array_number_0 = converted.toString().split("");
                            const array_number = array_number_0.splice(0, array_number_0.length - 4);
                            const array_number_decimal = array_number_0.splice(array_number_0.length - 4, array_number_0.length);

                            if (array_number.length % 3 == 0) {
                                var array_join = ``;
                                const array_number_part_1 = array_number.slice(array_number.length - (3), (array_number.length));
                                array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                for (let i = 1; i <= ((array_number.length - 3) / 2); i++) {
                                    const array_number_part_2 = array_number.slice(array_number.length - 3 - (2 * i), (array_number.length - 3 - (2 * (i - 1))));
                                    array_join = `${array_number_part_2.join("") + ","}${array_join}`;
                                }
                                const array_number_part_3 = array_number.slice((0), ((array_number.length - 3 - (2 * (Math.floor((array_number.length - 3) / 2))))));
                                array_join = `${array_number_part_3.join("") + ","}${array_join}`;
                            }
                            else if (array_number.length % 3 !== 0) {
                                var array_join = ``;
                                const array_number_part_1 = array_number.slice(array_number.length - (3), (array_number.length));
                                array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                for (let i = 1; i <= ((array_number.length - 3) / 2); i++) {
                                    const array_number_part_2 = array_number.slice(array_number.length - 3 - (2 * i), (array_number.length - 3 - (2 * (i - 1))));
                                    array_join = `${array_number_part_2.join("") + ","}${array_join}`;
                                }
                                const array_number_part_3 = array_number.slice((0), ((array_number.length - 3 - (2 * (Math.floor((array_number.length - 3) / 2))))));
                                array_join = `${array_number_part_3.join("") + ","}${array_join}`;
                            }
                            const final_array = array_join.toString().split("");
                            if (final_array[0] == ",") {
                                final_array.shift();
                            }
                            if (final_array[final_array.length - 1] == ",") {
                                final_array.pop();
                            }
                            for (let i = 0; i < array_number_decimal.length; i++) {
                                if (array_number_decimal[i] == ",") {
                                    delete array_number_decimal[i];
                                }
                            }
                            const final_2 = array_number_decimal.join("");
                            const final = final_array.join("");
                            const final_final = `${final}${final_2}`;
                            document.querySelector("#result").innerHTML = `<b>${convertto}</b>&nbsp ${fromcurrency} = &nbsp<b>${final_final}</b>&nbsp ${tocurrency}`;
                        }
                        else {
                            const array_number_0 = converted.toString().split("");
                            const array_number = array_number_0.splice(0, array_number_0.length - 4);
                            const array_number_decimal = array_number_0.splice(array_number_0.length - 4, array_number_0.length);
                            if (array_number.length % 3 == 0) {
                                var array_join = ``;
                                for (let i = 1; i <= (array_number.length / 3); i++) {
                                    const array_number_part_1 = array_number.slice(array_number.length - (3 * i), (array_number.length - (3 * (i - 1))));
                                    array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                }
                            }
                            else if (array_number.length % 3 !== 0) {
                                var array_join = ``;
                                for (let i = 1; i <= (array_number.length / 3); i++) {
                                    const array_number_part_1 = array_number.slice(array_number.length - (3 * i), (array_number.length - (3 * (i - 1))));
                                    array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                }
                                const array_number_part_2 = array_number.slice((0), ((array_number.length - (3 * (Math.floor(array_number.length / 3))))));
                                array_join = `${array_number_part_2.join("") + ","}${array_join}`;
                            }
                            const final_array = array_join.toString().split("");
                            if (final_array[0] == ",") {
                                final_array.shift();
                            }
                            if (final_array[final_array.length - 1] == ",") {
                                final_array.pop();
                            }
                            for (let i = 0; i < array_number_decimal.length; i++) {
                                if (array_number_decimal[i] == ",") {
                                    delete array_number_decimal[i];
                                }
                            }
                            const final_2 = array_number_decimal.join("");
                            const final = final_array.join("");
                            const final_final = `${final}${final_2}`;
                            document.querySelector("#result").innerHTML = `<b>${convertto}</b>&nbsp ${fromcurrency} = &nbsp<b>${final_final}</b>&nbsp ${tocurrency}`;
                        }
                    }
                    else {
                        document.querySelector("#result").innerHTML = "Invalid Currency";
                    }
                }
                )
            document.querySelector("#btn").disabled = true;
            return false;
        };
    };
});