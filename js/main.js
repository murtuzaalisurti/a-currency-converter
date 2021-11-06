document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btn").disabled = true;
    document.querySelector("#input1").onkeyup = () => {
        var selectdropdown = document.querySelectorAll("select");
        for (let i = 0; i < selectdropdown.length; i++) {
            selectdropdown[i].onchange = () => {
                document.querySelector("#btn").disabled = false;
            }
        }
        document.querySelector("#btn").disabled = false;
        document.querySelector("form").onsubmit = () => {
            const fromcurrency = document.querySelector("#drop-down-1").value;
            var url = new URL("https://api.exchangerate.host/latest?base=USD");
            var search_params = url.searchParams;
            let Base = search_params.set('base', fromcurrency);
            url.search = search_params.toString();
            var new_url = url.toString();
            fetch(new_url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const tocurrency = document.querySelector("#drop-down-2").value;
                    const rate = data.rates[tocurrency];
                    console.log(rate);
                    if (rate !== undefined) {
                        const convertto = Number(document.querySelector("#input1").value);
                        const convertto_round = convertto.toFixed(2);
                        const converted = (convertto * rate).toFixed(2);

                        function tocurrency_numeral_indian() {
                            const array_number_0 = converted.toString().split("");

                            for (let j = 0; j < array_number_0.length; j++) {
                                if (array_number_0[j] == ".") {
                                    var decimal_part_1 = array_number_0.slice(0, j);
                                    var decimal_part_2 = array_number_0.slice(j, array_number_0.length);
                                }
                            }

                            if (decimal_part_1.length % 3 == 0) {
                                var array_join = ``;
                                const array_number_part_1 = decimal_part_1.slice(decimal_part_1.length - (3), (decimal_part_1.length));
                                array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                for (let i = 1; i <= ((decimal_part_1.length - 3) / 2); i++) {
                                    const array_number_part_2 = decimal_part_1.slice(decimal_part_1.length - 3 - (2 * i), (decimal_part_1.length - 3 - (2 * (i - 1))));
                                    array_join = `${array_number_part_2.join("") + ","}${array_join}`;
                                }
                                const array_number_part_3 = decimal_part_1.slice((0), ((decimal_part_1.length - 3 - (2 * (Math.floor((decimal_part_1.length - 3) / 2))))));
                                array_join = `${array_number_part_3.join("") + ","}${array_join}`;
                            }
                            else if (decimal_part_1.length % 3 !== 0) {
                                var array_join = ``;
                                const array_number_part_1 = decimal_part_1.slice(decimal_part_1.length - (3), (decimal_part_1.length));
                                array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                for (let i = 1; i <= ((decimal_part_1.length - 3) / 2); i++) {
                                    const array_number_part_2 = decimal_part_1.slice(decimal_part_1.length - 3 - (2 * i), (decimal_part_1.length - 3 - (2 * (i - 1))));
                                    array_join = `${array_number_part_2.join("") + ","}${array_join}`;
                                }
                                const array_number_part_3 = decimal_part_1.slice((0), ((decimal_part_1.length - 3 - (2 * (Math.floor((decimal_part_1.length - 3) / 2))))));
                                array_join = `${array_number_part_3.join("") + ","}${array_join}`;
                            }
                            const final_array = array_join.toString().split("");
                            if (final_array[0] == ",") {
                                final_array.shift();
                            }
                            if (final_array[final_array.length - 1] == ",") {
                                final_array.pop();
                            }
                            if (final_array.length <= 3) {
                                console.log("hi");
                                for (let i = 0; i < final_array.length; i++) {
                                    if (final_array[i] == ",") {
                                        delete final_array[i];
                                        console.log(final_array);
                                    }
                                }
                            }
                            for (let i = 0; i < decimal_part_2.length; i++) {
                                if (decimal_part_2[i] == ",") {
                                    delete decimal_part_2[i];
                                }
                            }
                            const final_2 = decimal_part_2.join("");
                            const final = final_array.join("");
                            window.tocurrency_final = `${final}${final_2}`;
                        }

                        function fromcurrency_numeral_indian() {
                            const array_number_0 = convertto_round.split("");

                            for (let j = 0; j < array_number_0.length; j++) {

                                if (array_number_0[j] == ".") {
                                    var decimal_part_1 = array_number_0.slice(0, j);
                                    var decimal_part_2 = array_number_0.slice(j, array_number_0.length);
                                }
                            }

                            if (decimal_part_1.length % 3 == 0) {
                                var array_join = ``;
                                const array_number_part_1 = decimal_part_1.slice(decimal_part_1.length - (3), (decimal_part_1.length));
                                array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                for (let i = 1; i <= ((decimal_part_1.length - 3) / 2); i++) {
                                    const array_number_part_2 = decimal_part_1.slice(decimal_part_1.length - 3 - (2 * i), (decimal_part_1.length - 3 - (2 * (i - 1))));
                                    array_join = `${array_number_part_2.join("") + ","}${array_join}`;
                                }
                                const array_number_part_3 = decimal_part_1.slice((0), ((decimal_part_1.length - 3 - (2 * (Math.floor((decimal_part_1.length - 3) / 2))))));
                                array_join = `${array_number_part_3.join("") + ","}${array_join}`;
                            }
                            else if (decimal_part_1.length % 3 !== 0) {
                                var array_join = ``;
                                const array_number_part_1 = decimal_part_1.slice(decimal_part_1.length - (3), (decimal_part_1.length));
                                array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                for (let i = 1; i <= ((decimal_part_1.length - 3) / 2); i++) {
                                    const array_number_part_2 = decimal_part_1.slice(decimal_part_1.length - 3 - (2 * i), (decimal_part_1.length - 3 - (2 * (i - 1))));
                                    array_join = `${array_number_part_2.join("") + ","}${array_join}`;
                                }
                                const array_number_part_3 = decimal_part_1.slice((0), ((decimal_part_1.length - 3 - (2 * (Math.floor((decimal_part_1.length - 3) / 2))))));
                                array_join = `${array_number_part_3.join("") + ","}${array_join}`;
                            }

                            const final_array = array_join.toString().split("");
                            if (final_array[0] == ",") {
                                final_array.shift();
                            }
                            if (final_array[final_array.length - 1] == ",") {
                                final_array.pop();
                            }
                            if (final_array.length <= 3) {
                                console.log("hi");
                                for (let i = 0; i < final_array.length; i++) {
                                    if (final_array[i] == ",") {
                                        delete final_array[i];
                                        console.log(final_array);
                                    }
                                }
                            }
                            for (let i = 0; i < decimal_part_2.length; i++) {
                                if (decimal_part_2[i] == ",") {
                                    delete decimal_part_2[i];
                                }
                            }
                            const final_2 = decimal_part_2.join("");
                            const final = final_array.join("");
                            window.fromcurrency_final = `${final}${final_2}`;

                            console.log(decimal_part_1);
                            console.log(decimal_part_2);
                            console.log(final_array);
                            console.log(array_join);
                        }

                        function fromcurrency_numeral_international() {

                            const array_number_0 = convertto_round.split("");

                            for (let j = 0; j < array_number_0.length; j++) {
                                if (array_number_0[j] == ".") {
                                    var decimal_part_1 = array_number_0.slice(0, j);
                                    var decimal_part_2 = array_number_0.slice(j, array_number_0.length);
                                }
                            }
                            if (decimal_part_1.length % 3 == 0) {
                                var array_join = ``;
                                for (let i = 1; i <= (decimal_part_1.length / 3); i++) {
                                    const array_number_part_1 = decimal_part_1.slice(decimal_part_1.length - (3 * i), (decimal_part_1.length - (3 * (i - 1))));
                                    array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                }
                            }
                            else if (decimal_part_1.length % 3 !== 0) {
                                var array_join = ``;
                                for (let i = 1; i <= (decimal_part_1.length / 3); i++) {
                                    const array_number_part_1 = decimal_part_1.slice(decimal_part_1.length - (3 * i), (decimal_part_1.length - (3 * (i - 1))));
                                    array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                }
                                const array_number_part_2 = decimal_part_1.slice((0), ((decimal_part_1.length - (3 * (Math.floor(decimal_part_1.length / 3))))));
                                array_join = `${array_number_part_2.join("") + ","}${array_join}`;
                            }
                            const final_array = array_join.toString().split("");
                            if (final_array[0] == ",") {
                                final_array.shift();
                            }
                            if (final_array[final_array.length - 1] == ",") {
                                final_array.pop();
                            }
                            for (let i = 0; i < decimal_part_2.length; i++) {
                                if (decimal_part_2[i] == ",") {
                                    delete decimal_part_2[i];
                                }
                            }
                            for (let i = 0; i < decimal_part_2.length; i++) {
                                if (decimal_part_2[i] == ",") {
                                    delete decimal_part_2[i];
                                }
                            }

                            const final_2 = decimal_part_2.join("");
                            const final = final_array.join("");
                            window.fromcurrency_final = `${final}${final_2}`;
                        }

                        function tocurrency_numeral_international() {
                            const array_number_0 = converted.toString().split("");
                            for (let j = 0; j < array_number_0.length; j++) {
                                if (array_number_0[j] == ".") {
                                    var decimal_part_1 = array_number_0.slice(0, j);
                                    var decimal_part_2 = array_number_0.slice(j, array_number_0.length);
                                }
                            }
                            if (decimal_part_1.length % 3 == 0) {
                                var array_join = ``;
                                for (let i = 1; i <= (decimal_part_1.length / 3); i++) {
                                    const array_number_part_1 = decimal_part_1.slice(decimal_part_1.length - (3 * i), (decimal_part_1.length - (3 * (i - 1))));
                                    array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                }
                            }
                            else if (decimal_part_1.length % 3 !== 0) {
                                var array_join = ``;
                                for (let i = 1; i <= (decimal_part_1.length / 3); i++) {
                                    const array_number_part_1 = decimal_part_1.slice(decimal_part_1.length - (3 * i), (decimal_part_1.length - (3 * (i - 1))));
                                    array_join = `${array_number_part_1.join("") + ","}${array_join}`;
                                }
                                const array_number_part_2 = decimal_part_1.slice((0), ((decimal_part_1.length - (3 * (Math.floor(decimal_part_1.length / 3))))));
                                array_join = `${array_number_part_2.join("") + ","}${array_join}`;
                            }
                            const final_array = array_join.toString().split("");
                            if (final_array[0] == ",") {
                                final_array.shift();
                            }
                            if (final_array[final_array.length - 1] == ",") {
                                final_array.pop();
                            }
                            for (let i = 0; i < decimal_part_2.length; i++) {
                                if (decimal_part_2[i] == ",") {
                                    delete decimal_part_2[i];
                                }
                            }
                            const final_2 = decimal_part_2.join("");
                            const final = final_array.join("");
                            window.tocurrency_final = `${final}${final_2}`;
                        }


                        if (tocurrency == "INR" && fromcurrency !== "INR") {
                            fromcurrency_numeral_international();
                            tocurrency_numeral_indian();
                            document.querySelector("#result").innerHTML = `<b>${window.fromcurrency_final}</b>&nbsp ${fromcurrency} = &nbsp<b>${window.tocurrency_final}</b>&nbsp ${tocurrency}`;
                        }
                        else if (tocurrency !== "INR" && fromcurrency == "INR") {
                            tocurrency_numeral_international();
                            fromcurrency_numeral_indian();
                            document.querySelector("#result").innerHTML = `<b>${window.fromcurrency_final}</b>&nbsp ${fromcurrency} = &nbsp<b>${window.tocurrency_final}</b>&nbsp ${tocurrency}`;
                        }
                        else if (tocurrency == "INR" && fromcurrency == "INR") {
                            tocurrency_numeral_indian();
                            fromcurrency_numeral_indian();
                            document.querySelector("#result").innerHTML = `<b>${window.fromcurrency_final}</b>&nbsp ${fromcurrency} = &nbsp<b>${window.tocurrency_final}</b>&nbsp ${tocurrency}`;
                        }
                        else if (tocurrency !== "INR" && fromcurrency !== "INR") {
                            tocurrency_numeral_international();
                            fromcurrency_numeral_international();
                            document.querySelector("#result").innerHTML = `<b>${window.fromcurrency_final}</b>&nbsp ${fromcurrency} = &nbsp<b>${window.tocurrency_final}</b>&nbsp ${tocurrency}`;
                        }
                        else {
                            alert("something went wrong!");
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
