$(document).ready(function (){
    showCustomer();
});
function showCustomer(){
    (new HttpRequest()).showCustomer().done(function (response) {
        let customer_data = '';
        $.each(response.data,function (key, val) {
            customer_data += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.phone}</td>
                    <td>${val.email}</td>
                    <td>${val.status}</td>
                    <td>${val.address}</td>
                    <td><button  type="button" class="btn btn-primary btn-icon"  onclick="editData(${val.id})">
                        <svg data-toggle="modal" data-target="#editmodel" xmlns="http://www.w3.org/2000/svg &quot; width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                    <button type="button" class="btn btn-danger btn-icon" onclick="deleteCustomer(${val.id})" >
                        <svg xmlns="http://www.w3.org/2000/svg&quot; width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    </t>
                </tr>
            `;
        });
        $('#showCustomer_Data').html(customer_data);

    }).fail(function (response) {
        let customer_error = '';
        customer_error += `
           <tr>
               <td>Data not Found !</td>
           </tr>
        `;
        $('#showCustomer_Data').html(customer_error);
    });
}

function editData(id)
{
    getCustomerId(id)
    updateCustomer(id)
}

$(document).on('submit','#c_form',function (e) {
    e.preventDefault();
    var addData = serializeObject($(this));
    let postData = {
        name: addData.name,
        phone: addData.phone,
        email: addData.email,
        status: addData.status,
        address: addData.address,
    };
        (new HttpRequest()).addCustomer(postData).done(function (response){
            $('#close_btn').click()
            toastr.success("Customer Add Success");
            showCustomer();
        }).fail(function (response) {
            toastr.error("Error to Add Customer");
        });
    });
function getCustomerId(id){
    (new HttpRequest()).getCustomerId(id).done(function (response) {
        $('#editname').val(response.data[0].name);
        $('#editphone').val(response.data[0].phone);
        $('#editemail').val(response.data[0].email);
        $('#editstatus').val(response.data[0].status);
        $('#editaddress').val(response.data[0].address);

    }).fail(function (response) {
        console.log(response)
    });
}
function updateCustomer(id) {
    $('#update_form').on('submit', function (e) {
        e.preventDefault();
        var editData = serializeObject($(this));
        let postData = {
            id: id,
            name: editData.name,
            phone: editData.phone,
            email: editData.email,
            status: editData.status,
            address: editData.address,
        };
        (new HttpRequest()).updateCustomer(postData).done(function (response) {
                toastr.info(response.responseJSON,"Success Update");
                showCustomer();
                $('#cls_btn').click()
        }).fail(function (response) {
        });
    });
}
function deleteCustomer(id) {
    let postData ={
        id: id
    };
    (new HttpRequest()).deleteCustomer(postData).done(function (response) {
        toastr.success("Customer Delete Success");
        showCustomer();
    }).fail(function (response) {
        toastr.error(response.responseJSON.message, "Error");
    });
}
