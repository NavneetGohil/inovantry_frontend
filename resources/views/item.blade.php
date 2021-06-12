@extends('layout.master')
@section('title') Dashboard | FreeSpy Control Panel @endsection

@section('style')
@endsection

@section('contain')
    <div class="page-content">
        <div class="card card-outline-info">
            <div class="card-header head-border">
                <h4 class="m-b-0 text-white font-weight-bold">ITEM</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">Item Data</h6>
                        <button type="button" class=" btn btn-primary bg-gradient-primary btn-sm btn-icon-text"  data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            Create Item
                        </button>
                        <div class="table">
                            <div id="dataTableExample_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div class="row">
                                    <div class="col-sm-12"><table id="dataTableExample" class="table dataTable no-footer" role="grid" aria-describedby="dataTableExample_info">
                                            <thead>
                                            <tr role="row"><th class="sorting_asc" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 263.531px;">NAME</th><th class="sorting"               aria-label="Position: activate to sort column ascending"      >quantity</th><th class="sorting"               aria-label="Office: activate to sort column ascending" style="">cost</th><th class="sorting">created_at</th><th class="sorting" style="">Status</th><th  colspan="2"  style="">Action</th></tr>
                                            </thead>
                                            <tr class="preLoader">
                                                <td colspan="6" align="center">
                                                    <div class="spinner-grow  text-primary" role="status">
                                                    </div>
                                                </td>
                                            </tr>
                                            <tbody id="item_show">
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

{{--       Add Model--}}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Item</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="add_item">
                            <div class="form-group">
                                <label class="col-form-label">Item Name</label>
                                <input type="text" class="form-control" name="name">
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Item cost</label>
                                <input type="number" class="form-control" name="cost">
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Item quantity</label>
                                <input type="text" class="form-control" name="quantity">
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close_btn">Close</button>
                                <button type="submit" class="btn btn-primary">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {{--       Edit Model--}}
        <div class="modal fade" id="editModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Item</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="update_item">
                            <div class="form-group">
                                <label class="col-form-label">Item Name</label>
                                <input type="text" class="form-control" name="name" id="item_name">
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Item cost</label>
                                <input type="number" class="form-control" name="cost" id="item_cost">
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Item quantity</label>
                                <input type="number" class="form-control" name="quantity" id="item_quantity">
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Item Staus</label>
                                <select class="form-control" name="status" id="item_status">
                                    <option value="1">Active</option>
                                    <option value="0">Deactivate</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close_btn_update">Close</button>
                                <button type="submit" class="btn btn-primary">Update Item</button>
                            </div>
                            <input type="hidden" class="form-control" name="id" id="item_id">
                        </form>
                    </div>
                </div>
            </div>
        </div>
@endsection

@section('script')
    <script src="/js/item.js"></script>
@endsection
