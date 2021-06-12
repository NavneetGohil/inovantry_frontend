$(document).ready(function (){
    getItem();
});

$(document).on('submit','#add_item',function (e){
    e.preventDefault()
    var addItemData = serializeObject($(this));
    let postData = {
        name: addItemData.name,
        cost: addItemData.cost,
        quantity: addItemData.quantity,
    };
    addItem(postData)
});
$(document).on('submit','#update_item',function (e){
    e.preventDefault()
    var updateItemData = serializeObject($(this));
    let postData = {
        id: updateItemData.id,
        name: updateItemData.name,
        cost: updateItemData.cost,
        quantity: updateItemData.quantity,
        status : updateItemData.status,
    };
    updateItem(postData)
});


function getItem(){
    $('#item_show').html('');
    (new HttpRequest()).getItem().done(function (response) {
        $.each(response.data,function (key,val){
            let status = 'Active';
            var status_color = '';
            if (val.status === 1){
                status = "Active";
                 status_color = 'success';
            }else {
                status = "Deactivate";
                 status_color = 'danger';
            }
            $('#item_show').append(`
                <tr class="odd">
                    <td class="sorting_1">${val.name}</td>
                        <td>${val.cost}</td>
                        <td>${val.quantity}</td>
                        <td>${val.created_at}</td>
                        <td><h6><span class="badge badge-${status_color}">${status}</span></h6></td>
                        <td><a type="button" class="btn btn-primary btn-icon" href="javascript:getSingleItem(${val.id})">
                            \t<svg data-toggle="modal" data-target="#editModel" data-whatever="@mdo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </a>
                        </td>
                        <td id="${val.id}"><a type="button" class="btn btn-danger btn-icon" href="javascript:deleteItem(${val.id})">
                            \t<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </a>
                        </td>
                </tr>
            `);
        });
    }).fail(function (response) {
        $('#item_show').append(`
                <tr class="odd">
                    <td class="sorting_1" colspan="6" align="center">${response.responseJSON.message}</td>
                </tr>
            `);
    });
}
function getSingleItem(id){
    (new HttpRequest()).getSingleItem(id).done(function (response) {
        if (response.status === true){
            $('#item_id').val(response.data.id);
            $('#item_name').val(response.data.name);
            $('#item_cost').val(response.data.cost);
            $('#item_quantity').val(response.data.quantity);
            if (response.data.status === 1){
                $('#item_status option:eq(0)').attr('selected', 'selected')
            }else {
                $('#item_status option:eq(1)').attr('selected', 'selected')
            }
        }
    }).fail(function (response) {
        console.log(response)
    });
}
function deleteItem(id){
    var result = confirm("Are you Delete Item");
    if(result){
        (new HttpRequest()).deleteItem(id).done(function (response) {
            if (response.status === true){
                $('#'+id).closest("tr").fadeOut();
                toastr.info(response.message, "info");
            }
        }).fail(function (response) {
            toastr.error(response.responseJSON.message, "Error");
        });
    }
}
function addItem(postData){
    (new HttpRequest()).addItem(postData).done(function (response) {
        if (response.status === true){
            toastr.info(response.message, "info");
            $( "#close_btn" ).trigger( "click");
            $("#add_item").trigger("reset");
            getItem();
        }
    }).fail(function (response) {
        toastr.error(response.responseJSON.message, "Error");
    });
}
function updateItem(postData){
    (new HttpRequest()).updateItem(postData).done(function (response) {
        if (response.status === true){
            toastr.info(response.message, "info");
            $( "#close_btn_update" ).trigger( "click");
            $("#update_item").trigger("reset");
            getItem();
        }
    }).fail(function (response) {
        toastr.error(response.responseJSON.message, "Error");
    });
}


