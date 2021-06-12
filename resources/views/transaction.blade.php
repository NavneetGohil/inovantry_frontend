@extends('layout.master')
@section('title') Transaction | Inventory @endsection

@section('style')
@endsection

@section('contain')
    <div class="page-content">
        <div class="card card-outline-info">
            <div class="card-header head-border">
                <h4 class="m-b-0 text-white font-weight-bold">TRANSACTION</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
                <div class="table-responsive">
                    <table class="table">
                        <tr>
                            <th>Name</th>
                            <th class="text-right">Credit</th>
                            <th class="text-right">Debit</th>
                            <th class="text-right">Balance</th>
                        </tr>
                        <tbody id="transaction_report">

                        </tbody>
                        <tr class="bg-light">
                            <th class="text-bold-800">Balance Due</th>
                            <th class="text-bold-800 text-right" id="total_credit"></th>
                            <th class="text-bold-800 text-right" id="total_debit"></th>
                            <th class="text-bold-800 text-right" id="total"></th>
                        </tr>
                    </table>
                    <form>
                        <input id="balance" class="form-control" name="balance" type="hidden" disabled value="">
                    </form>
                </div>
            </div>
        </div>
    @endsection
@section('script')
            <script src="js/transaction.js"></script>
@endsection
