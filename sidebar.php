<?php include "path.php"; ?>

<div id="sidebar" class="sidebar responsive ace-save-state">
    <!-- <script type="text/javascript">
        try{ace.settings.loadState('sidebar')}catch(e){}
    </script> -->

    <ul class="nav nav-list">
        <li class="" id="menuDashboard">
            <a href="/<?php echo $rootFolder; ?>/dashboard/index.php">
                <i class="menu-icon fa fa-tachometer"></i>
                <span class="menu-text"> Dashboard 1</span>
            </a>

            <b class="arrow"></b>
        </li>
        <!-- <li class="" id="menuDashboard2">
            <a href="/<?php echo $rootFolder; ?>/dashboard2/index.php">
                <i class="menu-icon fa fa-tachometer"></i>
                <span class="menu-text"> Dashboard 2</span>
            </a>

            <b class="arrow"></b>
        </li> -->
        <li class="" id="menuDashboard3">
            <a href="/<?php echo $rootFolder; ?>/dashboard3/index.php">
                <i class="menu-icon fa fa-tachometer"></i>
                <span class="menu-text"> Dashboard 2</span>
            </a>

            <b class="arrow"></b>
        </li>
        <li class="" id="menuMoldList">
            <a href="/<?php echo $rootFolder; ?>/tableMoldMasterlist/index.php">
                <i class="menu-icon fa fa-folder"></i>
                <span class="menu-text">Mold Masterlist</span>
            </a>
            <b class="arrow"></b>
        </li>

        <li class="" id="menuRequestForm">
            <a href="/<?php echo $rootFolder; ?>/requestForm/index.php">
                <i class="menu-icon fa fa-folder"></i>
                <span class="menu-text">Request Form</span>
            </a>
            <b class="arrow"></b>
        </li>
        <!-- <li class="" id="menuRequestList">
            <a href="/<?php echo $rootFolder; ?>/tableRequest/index.php">
                <i class="menu-icon fa fa-folder"></i>
                <span class="menu-text">Request List</span>
            </a>
            <b class="arrow"></b>
        </li> -->
        <li class="" id="menuMoldAssy">
            <a href="/<?php echo $rootFolder; ?>/tableMoldAssy/index.php">
                <i class="menu-icon fa fa-folder"></i>
                <span class="menu-text">Mold Assy</span>
            </a>
            <b class="arrow"></b>
        </li>
        <li class="" id="menuTrialList">
            <a href="/<?php echo $rootFolder; ?>/tableTrial/index.php">
                <i class="menu-icon fa fa-folder"></i>
                <span class="menu-text"> Trial</span>
            </a>
            <b class="arrow"></b>
        </li>
        <li class="" id="menuQCList">
            <a href="/<?php echo $rootFolder; ?>/tableQC/index.php">
                <i class="menu-icon fa fa-folder"></i>
                <span class="menu-text">QC</span>
            </a>
            <b class="arrow"></b>
        </li>
        <li class="" id="menuMoldHistory">
            <a href="/<?php echo $rootFolder; ?>/tableMoldHistory/index.php">
                <i class="menu-icon fa fa-folder"></i>
                <span class="menu-text">Mold History</span>
            </a>
            <b class="arrow"></b>
        </li>
        <li class="" id="menuPriorityRepair">
            <a href="/<?php echo $rootFolder; ?>/priority/index.php">
                <i class="menu-icon fa fa-folder"></i>
                <span class="menu-text">Repair Priority</span>
            </a>
            <b class="arrow"></b>
        </li>
        <li class="" id="menuPriorityPM">
            <a href="/<?php echo $rootFolder; ?>/priorityPM/index.php">
                <i class="menu-icon fa fa-folder"></i>
                <span class="menu-text">PM Priority</span>
            </a>
            <b class="arrow"></b>
        </li>

        <!-- <li class="" id="menuTableUser">
            <a href="/<?php echo $rootFolder; ?>/tableUser/index.php">
                <i class="menu-icon fa fa-users"></i>
                <span class="menu-text"> User Management</span>
            </a>
            <b class="arrow"></b>
        </li> -->
        

        <!-- <li class="active open"> -->
        <li class="" id="menuUtilities">
            <a href="#" class="dropdown-toggle">
                <i class="menu-icon fa fa-cog"></i>
                <span class="menu-text">Utilities</span>
                <b class="arrow fa fa-angle-down"></b>
            </a>
            <b class="arrow"></b>

            <ul class="submenu">
                <li class="" id="menuUtility1">
                    <a href="/<?php echo $rootFolder; ?>/tableUser/index.php">
                        <i class="menu-icon fa fa-caret-right"></i>
                        User List
                    </a>
                    <b class="arrow"></b>
                </li>
                <li class="" id="menuUtility2">
                    <a href="/<?php echo $rootFolder; ?>/listRequestType/index.php">
                        <i class="menu-icon fa fa-caret-right"></i>
                        Request Type List
                    </a>
                    <b class="arrow"></b>
                </li>
                <li class="" id="menuUtility3">
                    <a href="/<?php echo $rootFolder; ?>/listCategory/index.php">
                        <i class="menu-icon fa fa-caret-right"></i>
                        Category List
                    </a>
                    <b class="arrow"></b>
                </li>
                <li class="" id="menuUtility4">
                    <a href="/<?php echo $rootFolder; ?>/listCause/index.php">
                        <i class="menu-icon fa fa-caret-right"></i>
                        Cause List
                    </a>
                    <b class="arrow"></b>
                </li>
                <li class="" id="menuUtility5">
                    <a href="/<?php echo $rootFolder; ?>/listCounterMeasure/index.php">
                        <i class="menu-icon fa fa-caret-right"></i>
                        Counter Measure List
                    </a>
                    <b class="arrow"></b>
                </li>
                <li class="" id="menuUtility6">
                    <a href="/<?php echo $rootFolder; ?>/listDefect/index.php">
                        <i class="menu-icon fa fa-caret-right"></i>
                        Defect List
                    </a>
                    <b class="arrow"></b>
                </li>
                <li class="" id="menuUtility7">
                    <a href="/<?php echo $rootFolder; ?>/listLocation/index.php">
                        <i class="menu-icon fa fa-caret-right"></i>
                        Location List
                    </a>
                    <b class="arrow"></b>
                </li>
                <li class="" id="menuUtility8">
                    <a href="/<?php echo $rootFolder; ?>/listOccured/index.php">
                        <i class="menu-icon fa fa-caret-right"></i>
                        Occured List
                    </a>
                    <b class="arrow"></b>
                </li>
                <!-- <li class="">
                    <a href="/<?php echo $rootFolder; ?>/listStatus/index.php">
                        <i class="menu-icon fa fa-caret-right"></i>
                        Status List
                    </a>
                    <b class="arrow"></b>
                </li> -->

                <li class="" id="menuUtility">
                    <a href="#" class="dropdown-toggle">
                        <i class="menu-icon fa fa-caret-right"></i>

                        Other
                        <b class="arrow fa fa-angle-down"></b>
                    </a>

                    <b class="arrow"></b>

                    <ul class="submenu">
                        <li class="">
                            <a href="#">
                                Sample
                            </a>
                        </li>
                        <li class="">
                            <a href="#">
                                Sample
                            </a>
                        </li>

                    </ul>
                </li>
            </ul>
        </li>

    </ul><!-- /.nav-list -->

    <div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
        <i id="sidebar-toggle-icon" class="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
    </div>
</div>