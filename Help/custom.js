//Ejecuto la función al cargar la página
$(document).ready(function()
{
  //Defino los totales de mis 2 columnas en 0
  var total_col1 = 0;
  var total_col2 = 0;
  //Recorro todos los tr ubicados en el tbody
  $('#ejemplo tbody').find('tr').each(function (i, el) {
             
        //Voy incrementando las variables segun la fila ( .eq(0) representa la fila 1 )     
        total_col1 += parseFloat($(this).find('td').eq(0).text());
        total_col2 += parseFloat($(this).find('td').eq(1).text());
                
    });
    //Muestro el resultado en el th correspondiente a la columna
    $('#ejemplo tfoot tr th').eq(0).text("Total " + total_col1);
    $('#ejemplo tfoot tr th').eq(1).text("Total " + total_col2);

});