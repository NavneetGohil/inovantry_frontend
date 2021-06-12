function HttpRequest() {
    this.csrf = function () {
        let token = $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        return token;
    };
    this.countDashboard = function () {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/count/dashboard',
                method: 'get',
                complete:function (){
                    $(".preLoader").hide();
                }
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.getItem = function () {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/get',
                method: 'get',
                complete:function (){
                    $('.preLoader').hide();
                }
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.getSingleItem = function (id) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/get/' + id,
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.getSingleItemName = function () {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/get/name',
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.addItem = function (postDta) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/add',
                method: 'post',
                data: postDta
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.updateItem = function (postDta) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/update',
                method: 'put',
                data: postDta
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.disableItem = function (id) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/disable/' + id,
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        }
        ;
    }
    this.deleteItem = function (id) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/delete/' + id,
                method: 'delete',
            });
        } catch (err) {
            console.log(err)
        }
        ;
    }
    this.getQnt = function () {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/get/qnt',
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        }
        ;
    }

    //COMPANY DATA START
    this.GetData = function () {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/company/get',
                method: 'get',
                complete: function(){
                    $('.preLoader').hide();
                },
            });
        } catch (err) {
            console.log(err)
        }
        ;
    }
    this.AddCompany = function (postDta) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/company/insert',
                method: 'post',
                data: postDta

            });
        } catch (err) {
            console.log(err)
        };
        };
    this.GetID = function (id) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/company/get/'+id,
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        }
        ;
    }
    this.EditCompany = function (postData) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/company/update',
                method: 'put',
                data: postData
            });
        } catch (err) {
            console.log(err)
        }
        ;
    }
    this.DeleteCompany = function (id) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/company/delete',
                method: 'post',
                data:{id:id},
            });
        } catch (err) {
            console.log(err)
        }
        ;
    }
    //COMPANY DATA END

    //CUSTOMER DATA
    this.addCustomer = function (postData) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/add/customer',
                method: 'post',
                data: postData
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.showCustomer = function () {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/show/customer',
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        }
        ;
    }
    this.getCustomerId = function (id) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/get/customer/' + id,
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        }
        ;
    }
     this.getCustomerName = function () {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/get/name/customer',
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.updateCustomer = function (postData) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/update/customer',
                method: 'put',
                data: postDta
            });
        } catch (err) {
            console.log(err)
        }
        ;
    }
    this.deleteCustomer = function (postData) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/delete/customer',
                method: 'delete',
                data: postData
            });
        } catch (err) {
            console.log(err)
        };
    }
   // Sell Item
    this.transaction = function (postDta) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/sell/item',
                method: 'post',
                data: postDta
            });
        } catch (err) {
            console.log(err)
        };
    }

    // BUY ITEM

    this.purchase = function (postData) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/purchase/item',
                method: 'post',
                data: postData
            });
        } catch (err) {
            console.log(err)
        };
    }

    //Transaction
    this.transaction_report = function () {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/transaction',
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        };
    }
}
let serializeObject = function (data) {
    let o = {};
    let a = data.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
