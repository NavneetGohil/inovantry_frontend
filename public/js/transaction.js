$(document).ready(function (){
    getData();


});

function getData(){
    (new HttpRequest()).transaction_report().done(function (response) {
        var bal = response.data.balance;
        var total_bal= response.data.balance;
        // response.data.balance;
        var total_creadit = 0;
        var total_debit = 0;
        $.each(response.data.transaction,function (key,val){
            var credit_color = "text-success";
            var debit_color = "text-danger";
            var credit = val.creadit;
            var debit = val.debit;

            if (val.creadit == 0){
                credit = '-';
                credit_color = "";
                bal -= val.debit;
            }else if (val.debit == 0){
                debit = '-';
                debit_color = "";
                bal += val.creadit;
            }
            total_creadit += val.creadit;
            total_debit+= val.debit;

            $('#transaction_report').append(`
                <tr>
                  <td>${val.transaction_name}</td>
                  <td class="text-right ${credit_color}"> ${credit}</td>
                  <td class="text-right ${debit_color}"> ${debit}</td>
                  <td class="text-right"> ${bal}</td>
                </tr>
            `);

            $('#total_credit').html(total_creadit);
            $('#total_debit').html(total_debit);
            $('#total').html(total_bal);
        })
    }).fail(function (response) {
        $('#transaction_report').append(`
            <tr>
                  <td>Transaction Not Fount</td>
            </tr>
        `);
        $('#total_credit').html("0");
        $('#total_debit').html("0");
    });
}

