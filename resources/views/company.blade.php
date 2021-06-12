@extends('layout.master')
@section('title') Dashboard | FreeSpy Control Panel @endsection

@section('style')
@endsection

@section('contain')
    <div class="page-content">
        <div class="card card-outline-info">
            <div class="card-header head-border">
                <h4 class="m-b-0 text-white font-weight-bold">COMPANY</h4>
            </div>
        </div>
    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Company Data</h6>
                    <button type="button" class="btn btn-primary bg-gradient-primary btn-sm btn-icon-text"  data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                        Create Company
                    </button>
                    <div class="table">
                        <div id="dataTableExample_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                            <div class="row">
                                <div class="col-sm-12"><table id="dataTableExample" class="table dataTable no-footer" role="grid" aria-describedby="dataTableExample_info">
                                        <thead>
                                        <tr role="row"><th class="sorting_asc" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 263.531px;">NAME</th>
                                         <th class="sorting_asc" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 263.531px;">ITEM NAME</th>
                                         <th class="sorting_asc" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 263.531px;">COST</th>
                                         <th class="sorting_asc" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 263.531px;">QUANTITY</th>
                                            <th  colspan="2"  style="">Action</th></tr>
                                        </thead>
                                        <tr class="preLoader">
                                            <td colspan="6" align="center">
                                                <div class="spinner-border text-primary" role="status">
                                                </div>
                                            </td>
                                        </tr>
                                        <tbody id="get_company_data">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{{--        insert modal--}}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add New Company</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="forms-sample" id="insert">
                            <div class="form-group">
                                <label for="name">Company Name</label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Company Name">
                            </div>
                            <div class="form-group">
                                <label for="description">Item Name</label>
                                <input type="text" class="form-control" id="item_name"  name="item_name" placeholder="item name">
                            </div>
                            <div class="form-group">
                                <label for="description">Cost</label>
                                <input type="text" class="form-control" id="cost"  name="cost" placeholder="Cost">
                            </div>
                            <div class="form-group">
                                <label for="Quantity">Description</label>
                                <input type="text" class="form-control" id="quantity"  name="quantity" placeholder="quantity">
                            </div>
                            <input type="hidden" class="form-control" id="c_id"  name="c_id" placeholder="quantity">
                            <div class="mt-3">
                                <button  class="btn btn-primary">Add Company</button>
                                <button id="close_btn" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

{{--update Modal--}}
        <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModal" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModal">Update Data</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="forms-sample" id="update">
                            <div class="form-group">
                                <label for="">Company Name</label>
                                <input type="text" class="form-control" id="c_name" name="name" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="description">Item Name</label>
                                <input type="text" class="form-control" id="c_item_name"  name="item_name" placeholder="item name">
                            </div>
                            <div class="form-group">
                                <label for="description">Cost</label>
                                <input type="text" class="form-control" id="c_cost"  name="cost" placeholder="Cost">
                            </div>
                            <div class="form-group">
                                <label for="Quantity">Description</label>
                                <input type="text" class="form-control" id="c_quantity"  name="quantity" placeholder="quantity">
                            </div>
                            <div class="mt-3">
                                <button  class="btn btn-primary">Update</button>
                                <button id="close_btn2" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
@endsection

@section('script')
    <script src="js/company.js"></script>

@endsection
