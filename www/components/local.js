var valor = 0;

$(document).on("click", "#salvar", function(){
  var dados = {Nome: $("#nome").val(), Telefone: $("#fone").val(), Email: $("#email").val()};
   localStorage.setItem(valor, JSON.stringify(dados));
   valor++;
});
$(document).on ("click", "#buscar", function()
{
  var pessoa = JSON.parse(localStorage.getItem($("#digite").val()));
  $("#nomebus").val(pessoa.Nome);
  $("#phone").val(pessoa.Telefone);
  $("#gmail").val(pessoa.Email);
});
$(document).on ("click", "#limpar", function()
{
  localStorage.clear();
  limparcampos();
});
$(document).on ("click", "#remover", function()
{
  localStorage.removeItem($("#digite").val());
  limparcampos();
});

  function limparcampos(){ 
  $("#nome").val("");
  $("#digite").val("");
  $("#nomebus").val("");
  $("#phone").val("");
  $("#gmail").val("");
}