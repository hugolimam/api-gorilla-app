export function current_date() {
  var data = new Date();

  var dia = data.getDate().toString();

  var diaF = dia.length == 1 ? '0' + dia : dia;

  var mes = (data.getMonth() + 1).toString();
  // +1 pois no getMonth Janeiro começa com zero.

  var mesF = mes.length == 1 ? '0' + mes : mes;

  var anoF = data.getFullYear();
  return (
    diaF +
    '/' +
    mesF +
    '/' +
    anoF +
    ' às ' +
    data.getHours() +
    ':' +
    data.getMinutes() +
    ':' +
    data.getSeconds()
  );
}
export function dataAtualNaoFormatada() {
  var data = new Date();

  var dia = data.getDate().toString();

  var diaF = dia.length == 1 ? '0' + dia : dia;

  var mes = (data.getMonth() + 1).toString();
  // +1 pois no getMonth Janeiro começa com zero.

  var mesF = mes.length == 1 ? '0' + mes : mes;

  var anoF = data.getFullYear();
  return anoF +
    '-' +
    mesF +
    '-' +
    diaF +
    '-' +
    ' ' +
    data.getHours() +
    ':' +
    (data.getMinutes() < 10)
    ? '0' + data.getMinutes()
    : data.getMinutes() + ':' + data.getSeconds();
}
export function dateForSqlQuery(date): String {
  var data = date,
    dia = data.getDate().toString(),
    diaF = dia.length == 1 ? '0' + dia : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = mes.length == 1 ? '0' + mes : mes,
    anoF = data.getFullYear();
  return anoF + '-' + mesF + '-' + diaF;
}
