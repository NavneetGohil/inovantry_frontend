$(document).ready(function (){
    getBalance();
});

$('#company_name').change(function(){
    let id = ($(this).val());
        (new HttpRequest()).GetID(id).done(function (response) {
            $('#i_price').val(response.data.cost);
            $('#i_quantity').val(response.data.quantity);
            $('#item_name').val(response.data.item_name);
        }).fail(function (response) {
            console.log(response)
        });
});

$('#buy_qnt').focusout(function(){
        var name = $('#company_name').val()
        if (name ===""){
            toastr.error("Select Company");
        }
});

$("form").on("focusout", "#buy_qnt", function() {
    if ($(this).val() <= 0 ){
        toastr.error("Buy Quantity Greater Than '0' ", "Error");
    }
    else {
        var cost = $('#i_price').val()
        var price = $('#buy_qnt').val()
        var total ='';
        total = cost * price;
        $('#total_price').val(total)
    }
});

$(document).on('submit','#buyData',function (e){
    e.preventDefault();
    if ($('#company_name').val() ===""){
        toastr.error("Please Select Company");
    }
    else if(parseInt($('#buy_qnt').val()) <= 0 ){
        toastr.error("Buy Quantity Greater Than '0' ", "Error");
    }
    else if(parseInt($('#buy_qnt').val()) > parseInt($('#i_quantity').val())){
        toastr.error("Total Buy Quantity Greater Than Item quantity");
    }
    else if(parseFloat($('#balance').val()) < $('#total_price').val()){
        toastr.error("YOUR COMPANY IS POOR");
    }
    else{
        var i_name = $('#item_name').val()
        var buy_qnt = $('#buy_qnt').val()
        var total_price = $('#total_price').val()
        var cost = $('#i_price').val()
        let postData = {
            buy_qnt:buy_qnt,
            total_price:total_price,
            name:i_name,
            cost:cost
        };
        (new HttpRequest()).purchase(postData).done(function (response){
            toastr.info(response.message, "info");
            console.log(total_price)
            getBalance();
            $("#buyData").trigger("reset");
        }).fail(function (response) {
            console.log(response)
        });
    }
});

    (new HttpRequest()).GetData().done(function (response){
        let buy_detail = '';
            buy_detail =`<option value="">Select Company</option>`;
            $.each(response.data.CompanyData,function (index,item){
            buy_detail += `<option value="${item.id}">${item.name}</option>`;
        });$('#company_name').html(buy_detail)
    }).fail(function (response) {
    alert();
    });

function  getBalance(){
    (new HttpRequest()).countDashboard().done(function (response) {
        $('#balance').val(response.data.balance)
    }).fail(function (response) {
        console.log(response)
    });
}




