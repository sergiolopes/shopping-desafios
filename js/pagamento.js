/*
  
  Desafio: implemente a PaymentRequest API se estiver disponível, ao 
  invés de usar o formulário padrão da página.

 */

$('body').on('submit', 'form', finalizaCompra);

function finalizaCompra(){
  Materialize.toast('Só testes, não enviei o cartão, claro', 4000);
  $('form')[0].reset();

  var now = new Date();
  var saida = new Date(now.getTime() + 1000 * 60 * 15);

  alert('Pagamento confirmado! Saída liberada até ' + saida.getHours() + 'h' + ("0" + (saida.getMinutes() + 1)).slice(-2));

  /*

    Desafio: troque o alert acima pelo uso da Notifications API

  */

	return false;
}