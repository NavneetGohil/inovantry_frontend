@extends('layout.master')
@section('title') Sell | Inventory @endsection

@section('style')
@endsection

@section('contain')
    <div class="page-content">
        <div class="card card-outline-info">
            <div class="card-header head-border">
                <h4 class="m-b-0 text-white font-weight-bold">SELL ITEM</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <form id="transaction">
                        <div class="card-body">
                        <h2 class="card-title">Sell Item</h2>
                        <div class="form-group row pt-0">
                            <div class="col-md-3">
                                <label>Select Item</label>
                                <div id="the-basics">
                                        <select name="id" id="select_item_name">
                                        </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="name">Total Sell Quantity</label>
                                    <input id="sell_qnt" class="form-control" name="sell_qnt" type="number" value="0">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="name">Total Sell Price</label>
                                    <input id="total_price" class="form-control" name="total_price" type="number" readonly >
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label>Select Customer</label>
                                <div id="the-basics">
                                    <select name="customer_name" id="select_customer_name">

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row pt-0">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="name">Item Cost</label>
                                    <input id="item_cost" class="form-control" name="item_cost" type="number" readonly >
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="name">Item Qnt</label>
                                    <input id="item_qnt" class="form-control" name="item_qnt" type="number" readonly >
                                </div>
                            </div>

                            <div class="col-md-3 offset-3">
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
    <script src="js/sell.js"></script>
@endsection
