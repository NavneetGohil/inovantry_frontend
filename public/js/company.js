
$(document).ready(function (){
    GetData();
});

var id= sessionStorage.getItem('id');
let postData = {
    id:id,
};


$(document).on('submit','#insert',function (e) {
    e.preventDefault();
    var insertData = serializeObject($(this));
    let postData = {
        name: insertData.name,
        item_name: insertData.item_name,
        cost: insertData.cost,
        quantity: insertData.quantity,
    };
    AddCompany(postData);
});

$(document).on('submit','#update',function (e) {
    e.preventDefault();
    var updateData = serializeObject($(this));
    var id= sessionStorage.getItem('id');
    let postData = {
        id:id,
        name: updateData.name,
        item_name: updateData.item_name,
        cost: updateData.cost,
        quantity: updateData.quantity,
    };
    EditCompany(postData);
});

function GetData(){
    (new HttpRequest()).GetData().done(function (response) {
        let search_list = '';
        $.each(response.data.CompanyData, function (index,item) {
        search_list += `
        </script>
        <table>
        <tr><td class="pt-4">${item.name}</td>
        <td>${item.item_name}</td>
        <td>${item.cost}</td>
        <td>${item.quantity}</td>
        <td><a  href="javascript:GetID(${item.id})"><button type="button" data-toggle="modal" data-target="#updateModal" class="btn btn-primary btn-icon"><svg xmlns="http://www.w3.org/2000/svg&quot; width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> </button></a>
         <a  href="javascript:DeleteCompany(${item.id})"><button type="button" class="btn btn-danger btn-icon" ><svg xmlns="http://www.w3.org/2000/svg&quot; width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> </button></a>
        </td>
        </table>
        </script>
           </tr>`;
        });
        $('#get_company_data').html(search_list);
    }).fail(function (response) {
        let search_list = '';
        search_list += `
          <tr><td class="pt-4"  style="text-align: center" colspan="">${response.responseJSON.message}</td></tr>
        `;
        $('#get_company_data').html(search_list);
    });
}

function AddCompany(postData){
    (new HttpRequest()).AddCompany(postData).done(function (response) {
        console.log(response)
        toastr.info(response.message, "info");
        GetData();
        $("#close_btn").click();
        $("#insert").trigger("reset");

    }).fail(function (response) {
        console.log(response)
        toastr.error(response.responseJSON.message, "Error");
    });
}

function GetID(id){
    (new HttpRequest()).GetID(id).done(function (response) {
        console.log(response)
        sessionStorage.setItem('id',response.data.id);
        $('#c_id').val(response.data.id);
        $('#c_name').val(response.data.name);
        $('#c_item_name').val(response.data.item_name);
        $('#c_cost').val(response.data.cost);
        $('#c_quantity').val(response.data.quantity);
    }).fail(function (response) {
        console.log(response)
    });
}

function EditCompany(postData){
    (new HttpRequest()).EditCompany(postData).done(function (response) {
        toastr.info(response.message, "info");
        $("#close_btn2").click();
        GetData();
    }).fail(function (response) {
        toastr.error(response.responseJSON.message, "Error");
    });
}

function DeleteCompany(id){
    (new HttpRequest()).DeleteCompany(id).done(function (response) {
        toastr.info(response.message, "info");
        GetData();
    }).fail(function (response) {
        toastr.error(response.responseJSON.message, "Error");
    });

}


