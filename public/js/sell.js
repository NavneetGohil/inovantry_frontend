$(document).ready(function (){
    getData()
});

$('#select_item_name').change(function (){
    var id = $(this).children("option:selected").val();
    (new HttpRequest()).getSingleItem(id).done(function (response) {
        $('#item_cost').val(response.data.cost)
        $('#item_qnt').val(response.data.quantity)
    }).fail(function (response) {

    });
});

$("form").on("focusout", "#sell_qnt", function() {
    if ($(this).val() <= 0 ){
        toastr.error("Sell Quantity Greter Than '0' ", "Error");
    }
    else {
        var cost = $('#item_cost').val();
        var qnt = $('#sell_qnt').val();
        $('#total_price').val(parseInt(cost) * parseInt(qnt))
    }
});

$(document).on('submit','#transaction',function (e){
    e.preventDefault();
    var check_item_name = $('#select_item_name').children("option:eq(0):selected").val();
    var check_customer_name = $('#select_customer_name').children("option:eq(0):selected").val();

    if (check_item_name){
        toastr.error("Please Select Item name", "Error");
    }else if ($('#item_qnt').val() <  $('#sell_qnt').val()){
        toastr.error("Total Sell Quantity Greater Than Item Qnt", "Error");
    }else if (check_customer_name){
        toastr.error("Please Select Customer name", "Error");
    }else if ($('#sell_qnt').val() <= 0 ){
        toastr.error("Sell Quantity Greater Than '0' ", "Error");
    }
    else {
        var transactionData = serializeObject($(this));
        let postData = {
            id: transactionData.id,
            total_qnt: transactionData.item_qnt,
            sell_qnt: transactionData.sell_qnt,
            total_price: transactionData.total_price,
        };
        (new HttpRequest()).transaction(postData).done(function (response) {
            if (response.status === true){
                $('#transaction').trigger('reset');
                toastr.info(response.message, "info");
            }
        }).fail(function (response) {
            toastr.error(response.responseJSON.message, "Error");
        });
    }
});

function getData(){
    (new HttpRequest()).getSingleItemName().done(function (response) {
            var item_name = ``;
            item_name += '<option selected="" disabled="" value="0">Select Item Name</option>';
            if (response.status === true){
                $.each(response.data,function (key,val){
                    item_name += `<option value="${val.id}">${val.name}</option>`
                });
                $('#select_item_name').html(item_name)
            }
        }).fail(function (response) {
    });
    (new HttpRequest()).getCustomerName().done(function (response) {
        var customer_name = ``;
        customer_name += '<option selected="" disabled="" value="0">Select Customer Name</option>';
        if (response.status === true){
            $.each(response.data,function (key,val){
                customer_name += `<option value="${val.id}">${val.name}</option>`
            });
            $('#select_customer_name').html(customer_name)
        }
    }).fail(function (response) {

    });
}


