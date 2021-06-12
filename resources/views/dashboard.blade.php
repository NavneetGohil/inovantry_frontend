@extends('layout.master')
@section('title') Dashboard | FreeSpy Control Panel @endsection

@section('style')
    <style>
        td{
            padding: 0px !important;
        }
    </style>
@endsection

@section('contain')

    <div class="page-content">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-outline-info mb-0">
                    <div class="card-header head-border">
                        <h4 class="m-b-0 text-white font-weight-bold">Account Status</h4>
                    </div>
                    <div class="card-body">
                        <div class="col-12 col-xl-12 stretch-card">
                            <div class="row flex-grow">
                                <div class="col-md-3 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body box-border">
                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <h6 class="card-title mb-0">Total Item</h6>
                                                <h3 class="text-primary">
                                                    <div  class="m-r-20 align-self-center box2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                                    </div>
                                                </h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 col-md-12 col-xl-5">
                                                    <div class="spinner-grow text-primary preLoader" role="status">
                                                    </div>
                                                    <h3 class="mb-2"><span class="widget-thumb-body-stat" id="item"></span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body box-border">
                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <h6 class="card-title mb-0">Total Balance</h6>
                                                <h3 class="text-primary">
                                                    <div  class="m-r-20 align-self-center box2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                                    </div>
                                                </h3>

                                            </div>
                                            <div class="row">
                                                <div class="col-6 col-md-12 col-xl-5">
                                                    <div class="spinner-grow text-primary text-primary preLoader" role="status">
                                                    </div>
                                                    <h3 class="mb-2"><span class="widget-thumb-body-stat" id="balance"></span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body box-border">
                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <h6 class="card-title mb-0">Total Company</h6>
                                                <h3 class="text-primary">
                                                    <div  class="m-r-20 align-self-center box2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                    </div>
                                                </h3>

                                            </div>
                                            <div class="row">
                                                <div class="col-6 col-md-12 col-xl-5">
                                                    <div class="spinner-grow text-primary text-primary preLoader" role="status">
                                                    </div>
                                                    <h3 class="mb-2"><span class="widget-thumb-body-stat" id="company"></span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body box-border">
                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <h6 class="card-title mb-0">Total Disable Item</h6>
                                                <h3 class="text-primary">
                                                    <div  class="m-r-20 align-self-center box2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                                    </div>
                                                </h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 col-md-12 col-xl-5">
                                                    <div class="spinner-grow text-primary text-primary preLoader" role="status">
                                                    </div>
                                                    <h3 class="mb-2"><span class="widget-thumb-body-stat" id="disable_item"></span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body box-border">
                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <h6 class="card-title mb-0">Total Enable Item</h6>
                                                <h3 class="text-primary">
                                                    <div  class="m-r-20 align-self-center box2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                                    </div>
                                                </h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 col-md-12 col-xl-5">
                                                    <div class="spinner-grow text-primary text-primary preLoader" role="status">
                                                    </div>
                                                    <h3 class="mb-2"><span class="widget-thumb-body-stat" id="enable_item"></span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body box-border">
                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <h6 class="card-title mb-0">Total Customer</h6>
                                                <h3 class="text-primary">
                                                    <div  class="m-r-20 align-self-center box2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                    </div>
                                                </h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 col-md-12 col-xl-5">
                                                    <div class="spinner-grow text-primary text-primary preLoader" role="status">
                                                    </div>
                                                    <h3 class="mb-2"><span class="widget-thumb-body-stat" id="customer"></span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
{{--        <style>--}}
{{--            @import url('https://fonts.googleapis.com/css?family=Poppins');--}}

{{--            * {--}}
{{--                font-family: 'Poppins', sans-serif;--}}
{{--            }--}}

{{--            #chart {--}}
{{--                max-width: 1060px;--}}
{{--                margin: 35px auto;--}}
{{--                opacity: 0.9;--}}
{{--            }--}}

{{--            #timeline-chart .apexcharts-toolbar {--}}
{{--                opacity: 1;--}}
{{--                border: 0;--}}
{{--            }--}}

{{--        </style>--}}
{{--        <div id="chart">--}}
{{--            <div id="timeline-chart"></div>--}}
{{--        </div>--}}

        <div class="card card-outline-info mt-5">
            <div class="card-header head-border">
                <h4 class="m-b-0 text-white font-weight-bold">Selling Chart</h4>
            </div>
        </div>
        <div class="mt-5">
            <canvas   id="visitors-chart" width="200" height="400"></canvas>
        </div>

    </div>
@endsection

@section('script')
    <script src="https://adminlte.io/themes/v3/plugins/chart.js/Chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="js/dashboard.js"></script>
@endsection
