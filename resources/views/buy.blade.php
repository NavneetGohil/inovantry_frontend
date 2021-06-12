@extends('layout.master')
@section('title') Buy | Inventory @endsection

@section('style')
@endsection

@section('contain')
    <div class="page-content">
        <div class="card card-outline-info">
            <div class="card-header head-border">
                <h4 class="m-b-0 text-white font-weight-bold">BUY ITEM</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <form id="buyData">
                        <div class="card-body">
                            <h2 class="card-title">Buy Item</h2>
                            <div class="form-group row pt-0">
                                <div class="col-md-3">
                                    <label>Select Company</label>
                                    <div id="the-basics">
                                        <select id="company_name" name="company_id_s">
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="name">Buy Quantity</label>
                                        <input id="buy_qnt" class="form-control" name="totalbuy_qnt" type="number" value="0">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="name">Item Cost/Item</label>
                                        <input id="i_price" class="form-control" name="peritem_cost" type="number" disabled value="">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div id="the-basics">
                                        <label>Item Name</label>
                                        <input id="item_name" class="form-control" name="item_name" type="text" disabled value="">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row pt-0">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="name">Item quantity</label>
                                       <input id="i_quantity" class="form-control" name="item_qnt" type="number" disabled value="">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="name">Total Price</label>
                                        <input id="total_price" class="form-control" name="total_price" type="number" disabled value="">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="name">Company Available Balance</label>
                                        <input id="balance" class="form-control" name="total_price" type="number" disabled value="">
                                    </div>
                                </div>

                                <div class="col-md-3 offset-0">
                                    <div class="form-group">
                                        <label for="name"></label>
                                        <button type="submit" class="btn btn-primary bg-gradient-primary btn-lg form-control">Transaction</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        @endsection

        @section('script')
            <script src="js/buy.js"></script>
@endsection
