<?php include "path.php";?>

<!-- basic scripts -->

<!--[if !IE]> -->
<script src="/<?php echo $pluginFolder; ?>/js/jquery-2.1.4.min.js?v=<?php echo $generateRandomNumber; ?>"></script>

<!-- <![endif]-->

<!--[if IE]>
<script src="assets/js/jquery-1.11.3.min.js"></script>
<![endif]-->
<script type="text/javascript">
    if('ontouchstart' in document.documentElement) document.write("<script src='/<?php echo $pluginFolder; ?>/js/jquery.mobile.custom.min.js?v=<?php echo $generateRandomNumber; ?>'>"+"<"+"/script>");
</script>
<script src="/<?php echo $pluginFolder; ?>/js/bootstrap.min.js?v=<?php echo $generateRandomNumber; ?>"></script>
<script src="/<?php echo $pluginFolder; ?>/js/select2.min.js?v=<?php echo $generateRandomNumber; ?>"></script>

<!-- ace scripts -->
<script src="/<?php echo $pluginFolder; ?>/js/ace-elements.min.js?v=<?php echo $generateRandomNumber; ?>"></script>
<script src="/<?php echo $pluginFolder; ?>/js/ace.min.js?v=<?php echo $generateRandomNumber; ?>"></script>

<!-- tabulator download export plugins -->
<script src="/<?php echo $pluginFolder; ?>/tabulator-plugins/xlsx.full.min.js?v=<?php echo $generateRandomNumber; ?>"></script>

<script>
    // console.log("Random Generated Code: "+<?php echo $generateRandomNumber; ?>);
</script>

<script src="/<?php echo $rootFolder; ?>/main.js?v=<?php echo $generateRandomNumber; ?>"></script>
<script src="/<?php echo $rootFolder; ?>/getRecords.js?v=<?php echo $generateRandomNumber; ?>"></script>
<script src="/<?php echo $rootFolder; ?>/validation.js?v=<?php echo $generateRandomNumber; ?>"></script>
<script src="/<?php echo $rootFolder; ?>/userAccess.js?v=<?php echo $generateRandomNumber; ?>"></script>
<!-- <script src="/<?php echo $rootFolder; ?>/modalBody/js/modalBody.js?v=<?php echo $generateRandomNumber; ?>"></script> -->

<script src="/<?php echo $rootFolder; ?>/getCodes/js/view.js?v=<?php echo $generateRandomNumber; ?>"></script>
<script src="/<?php echo $rootFolder; ?>/getCodes/js/insert.js?v=<?php echo $generateRandomNumber; ?>"></script>
