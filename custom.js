console.log("Hola Dev, JavaScript está funcionando correctamente")


let total_form_1;
let inputsValues = {};

window.onload = () => {

    const set_element = document.getElementById('set');
    /* set_element.innerText = '8'; */

    const form_total_hours_t1 = document.getElementById('form_total_hours_t1');
    const table_1 = document.getElementById('table_1');
    const total_all_t1 = document.getElementById('total_all_t1');


    const table_2 = document.getElementById('table_2');


    /*          const test_value = test.value;
                console.log(test_value);
             */
/*     form.addEventListener('change', (event) => {

        form.onsubmit = (e) => {

            e.preventDefault();
            const test = document.getElementById('test').value;

            console.log(test);

        }

        inputsValues[event.target.name] = parseInt(event.target.value);

        let result = 0;
        for (let key in inputsValues) {
           result += inputsValues[key]
        }
        console.log('Hola test cambio');
        console.log(result);


    }); */




    table_1.addEventListener('change', (event) => {
        cost1_t1 = document.getElementById('cost1_t1').value;
        cost2_t1 = document.getElementById('cost2_t1').value;
        cost3_t1 = document.getElementById('cost3_t1').value;
        cost4_t1 = document.getElementById('cost4_t1').value;
        cost5_t1 = document.getElementById('cost5_t1').value;
        cost6_t1 = document.getElementById('cost6_t1').value;
        cost7_t1 = document.getElementById('cost7_t1').value;
        cost8_t1 = document.getElementById('cost8_t1').value;
        cost9_t1 = document.getElementById('cost9_t1').value;
        cost10_t1 = document.getElementById('cost10_t1').value;
        /* console.log(cost1_t1); */
        day1_t1 = document.getElementById('day1_t1').value;
        day2_t1 = document.getElementById('day2_t1').value;
        day3_t1 = document.getElementById('day3_t1').value;
        day4_t1 = document.getElementById('day4_t1').value;
        day5_t1 = document.getElementById('day5_t1').value;
        day6_t1 = document.getElementById('day6_t1').value;
        day7_t1 = document.getElementById('day7_t1').value;
        day8_t1 = document.getElementById('day8_t1').value;
        day9_t1 = document.getElementById('day9_t1').value;
        day10_t1 = document.getElementById('day10_t1').value;
        /* console.log(day1_t1); */
        hour1_t1 = document.getElementById('hour1_t1').value;
        let value_hour1_t1 = hour1_t1;
        hour2_t1 = document.getElementById('hour2_t1').value;
        let value_hour2_t1 = hour2_t1;
        hour3_t1 = document.getElementById('hour3_t1').value;
        hour4_t1 = document.getElementById('hour4_t1').value;
        hour5_t1 = document.getElementById('hour5_t1').value;
        hour6_t1 = document.getElementById('hour6_t1').value;
        hour7_t1 = document.getElementById('hour7_t1').value;
        hour8_t1 = document.getElementById('hour8_t1').value;
        hour9_t1 = document.getElementById('hour9_t1').value;
        hour10_t1 = document.getElementById('hour10_t1').value;
        /* console.log(hour1_t1); */
        let ttl_prfl1_t1 = cost1_t1 * day1_t1 * hour1_t1;
        let ttl_prfl2_t1 = cost2_t1 * day2_t1 * hour2_t1;
        let ttl_prfl3_t1 = cost3_t1 * day3_t1 * hour3_t1;
        let ttl_prfl4_t1 = cost4_t1 * day4_t1 * hour4_t1;
        let ttl_prfl5_t1 = cost5_t1 * day5_t1 * hour5_t1;
        let ttl_prfl6_t1 = cost6_t1 * day6_t1 * hour6_t1;
        let ttl_prfl7_t1 = cost7_t1 * day7_t1 * hour7_t1;
        let ttl_prfl8_t1 = cost8_t1 * day8_t1 * hour8_t1;
        let ttl_prfl9_t1 = cost9_t1 * day9_t1 * hour9_t1;
        let ttl_prfl10_t1 = cost10_t1 * day10_t1 * hour10_t1;
        /* console.log(ttl_prfl1_t1); */
        let set_ttl_prfl1 = document.getElementById('set_ttl_prfl1');
        let set_ttl_prfl2 = document.getElementById('set_ttl_prfl2');
        let set_ttl_prfl3 = document.getElementById('set_ttl_prfl3');
        let set_ttl_prfl4 = document.getElementById('set_ttl_prfl4');
        let set_ttl_prfl5 = document.getElementById('set_ttl_prfl5');
        let set_ttl_prfl6 = document.getElementById('set_ttl_prfl6');
        let set_ttl_prfl7 = document.getElementById('set_ttl_prfl7');
        let set_ttl_prfl8 = document.getElementById('set_ttl_prfl8');
        let set_ttl_prfl9 = document.getElementById('set_ttl_prfl9');
        let set_ttl_prfl10 = document.getElementById('set_ttl_prfl10');
        set_ttl_prfl1.innerText = ttl_prfl1_t1;
        set_ttl_prfl2.innerText = ttl_prfl2_t1;
        set_ttl_prfl3.innerText = ttl_prfl3_t1;
        set_ttl_prfl4.innerText = ttl_prfl4_t1;
        set_ttl_prfl5.innerText = ttl_prfl5_t1;
        set_ttl_prfl6.innerText = ttl_prfl6_t1;
        set_ttl_prfl7.innerText = ttl_prfl7_t1;
        set_ttl_prfl8.innerText = ttl_prfl8_t1;
        set_ttl_prfl9.innerText = ttl_prfl9_t1;
        set_ttl_prfl10.innerText = ttl_prfl10_t1;

        total_hours = (value_hour1_t1 + value_hour2_t1);
        console.log(total_hours)
        var arrNumber = new Array();
        $('.get_hour').each(function(){
            arrNumber.push(parseInt($(this).val()));
        })

        let totalss = 0;

        arrNumber.forEach(function(a){totalss += a;});
        console.log(totalss);

        $('#total_hours_t1').html(totalss);


        total_form_1 = ttl_prfl1_t1 + ttl_prfl2_t1 + ttl_prfl3_t1 + ttl_prfl4_t1 + ttl_prfl5_t1 + ttl_prfl6_t1 + ttl_prfl7_t1 + ttl_prfl8_t1 + ttl_prfl9_t1 + ttl_prfl10_t1;
        console.log(total_form_1);
        $('#total_all_t1 tfoot tr td').eq(0).text(total_form_1);
    })
/*
    form_total_hours_t1.addEventListener('change', (event) => {
        inputsValues[event.target.name] = parseInt(event.target.value);

        let result = 0;
        for (let key in inputsValues) {
           result += inputsValues[key]
        }
        show_form_total_hours_t1.innerText = result;

    }) */
























/*     total_all_t1.addEventListener('change', (event) =>{
        $('#total_all_t1 tbody').find('tr').each(function (i, el) {
            //Voy incrementando las variables segun la fila ( .eq(0) representa la fila 1 )
            console.log(total_form_1);
            total_form_1 += parseInt($(this).find('td').eq(0).text());
            console.log(total_form_1);
            console.log('hOLA hOLA')

        });
        console.log(total_form_1);
        $('#total_all_t1 tfoot tr td').eq(0).text("Total " + total_form_1);
    }) */
    
/*     $('#total_all_t1 tbody').find('tr').each(function (i, el) {
            //Voy incrementando las variables segun la fila ( .eq(0) representa la fila 1 )
            console.log(total_form_1);
            total_form_1 += parseInt($(this).find('td').eq(0).text());
            console.log(total_form_1);

    });
    console.log(total_form_1);
    $('#total_all_t1 tfoot tr td').eq(0).text("Total " + total_form_1); */

/*     table_2.addEventListener('change', (event) => {
        day1_t1 = document.getElementById('day1_t1').value;
        console.log(day1_t1);
    }) */

}



/*     $(document).ready(function () {
    }); */


/* Si iteramos los elementos y luego los sumamos, asignando todos los elementos a un Array, hay qué decirle a la función
que cada vez qué se cambie un valor, vuelva y lo modifique en el Array, ó que cada vez que coja un cambio, borre todo el 
array y lo vuelva a escribir. Ahora, hay dos maneras, una con más complejidad y otra con menos
La de menos, es que vaya a la posición del elemento que se necesita updatear en el array, y la modifique.
Y luego la de la mayor complejidad pero más sencillo: Que siempre limpie el array y vuelva y lo escriba, es decir, tiene 
mayor carga para la página, pero si eso no importa, pues sirve.

Y ahora, la solución más sencilla: Un ciclo que itere a través de todos los elementos del elemento padre, y se vaya sumando 
y retorne el valor total.

Qué sucede si coloco todo dentro de unas llaves en el preventDefault?.




No se puede googlear todo un proceso.

Hacer de cuenta que es un algoritmo

Obtener todos los valores de varios inputs
Descomprimir en partes
Obtener valores de un elemento con la misma clase, each
Tiraba array
Entonces sumar datos
Pero tira string
Convertir datos de String a Entero

*/




