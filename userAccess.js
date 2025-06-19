
// checkLoginDate()

async function checkLoginDate(){
    let getDateTime = getCurrentDate();

    if(localStorage.getItem(lsLoginDate) != null){
        let loginData = localStorage.getItem(lsLoginDate)
    
        console.log(loginData);
        console.log(getDateTime);
    
        if(loginData != getDateTime){
            localStorage.setItem(lsUserId, 0);
            localStorage.setItem(lsLoginDate, getDateTime);
            window.location.href = "/"+rootFolder;
        }
    
    } else {
        localStorage.setItem(lsUserId, 0);
        localStorage.setItem(lsLoginDate, getDateTime);
        window.location.href = "/"+rootFolder;
        // console.log("LOG OUT");
    }
}

if(userRole == 0){
    // ADMIN

    $("#menuDashboard").show();
    $("#menuDashboard3").show();
    $("#menuMoldList").show();
    $("#menuRequestForm").show();
    $("#menuMoldAssy").show();
    $("#menuTrialList").show();
    $("#menuQCList").show();
    $("#menuMoldHistory").show();
    $("#menuPriority").show();
    $("#menuUtilities").show();
}
if(userRole == 1){
    //ENGINEER

    $("#menuDashboard").show();
    $("#menuDashboard3").show();
    $("#menuMoldList").show();
    $("#menuRequestForm").show();
    $("#menuMoldAssy").show();
    $("#menuTrialList").show();
    $("#menuQCList").show();
    $("#menuMoldHistory").show();
    $("#menuPriority").show();
    $("#menuUtilities").hide();
}
if(userRole == 2){
    // PRODUCTION
    $("#menuDashboard").show();
    $("#menuDashboard3").show();
    $("#menuMoldList").hide();
    $("#menuRequestForm").show();
    $("#menuMoldAssy").hide();
    $("#menuTrialList").show();
    $("#menuQCList").hide();
    $("#menuMoldHistory").show();
    $("#menuPriority").show();
    $("#menuUtilities").hide();
}
if(userRole == 3){
    // MOLD ASSY
    $("#menuDashboard").show();
    $("#menuDashboard3").hide();
    $("#menuMoldList").hide();
    $("#menuRequestForm").hide();
    $("#menuMoldAssy").show();
    $("#menuTrialList").hide();
    $("#menuQCList").hide();
    $("#menuMoldHistory").hide();
    $("#menuPriority").hide();
    $("#menuUtilities").hide();
}
if(userRole == 4){
    // TECHNICIAN
    $("#menuDashboard").show();
    $("#menuDashboard3").hide();
    $("#menuMoldList").hide();
    $("#menuRequestForm").hide();
    $("#menuMoldAssy").hide();
    $("#menuTrialList").show();
    $("#menuQCList").hide();
    $("#menuMoldHistory").hide();
    $("#menuPriority").hide();
    $("#menuUtilities").hide();
}
if(userRole == 5){
    // QC
    $("#menuDashboard").show();
    $("#menuDashboard3").hide();
    $("#menuMoldList").hide();
    $("#menuRequestForm").hide();
    $("#menuMoldAssy").hide();
    $("#menuTrialList").hide();
    $("#menuQCList").show();
    $("#menuMoldHistory").hide();
    $("#menuPriority").hide();
    $("#menuUtilities").hide();

}




















/*
if(userRole != 0){
    // KAPAG HINDI ADMIN YUNG USER
    $("#menuUtilities").hide();
    $("#menuTableUser").hide();
}

if(userRole == "1"){
    // KAPAG SI USER AY REQUESTOR
    $("#menuDashboard").show();
    $("#menuRequestForm").hide();
    // $("#menuRequestList").hide();
    $("#menuMoldList").hide();
    $("#menuMoldAssy").hide();
    $("#menuTrialList").hide();
    $("#menuQCList").hide();
    $("#menuMoldHistory").show();
    $("#menuUtilities").hide();
}
if(userRole == "2"){
    // KAPAG SI USER AY ENGINEER
    $("#menuDashboard").show();
    $("#menuRequestForm").show();
    // $("#menuRequestList").show();
    $("#menuMoldAssy").show();
    $("#menuMoldList").show();
    $("#menuTrialList").show();
    $("#menuQCList").show();
    $("#menuMoldHistory").show();
    $("#menuUtilities").show();

    $("#menuUtility2").show();
    $("#menuUtility3").show();
    $("#menuUtility6").show();

    $("#menuUtility1").hide();
    $("#menuUtility4").hide();
    $("#menuUtility5").hide();
    $("#menuUtility7").hide();
    $("#menuUtility8").hide();

}
if(userRole == "3"){
    // KAPAG SI USER MOLD ASSY
    $("#menuDashboard").show();
    $("#menuRequestForm").hide();
    // $("#menuRequestList").hide();
    $("#menuMoldList").hide();
    $("#menuMoldAssy").show();
    $("#menuTrialList").hide();
    $("#menuQCList").hide();
    $("#menuMoldHistory").hide();
    $("#menuUtilities").hide();

}
if(userRole == "4"){
    // KAPAG SI USER AY TRIAL
    $("#menuDashboard").show();
    $("#menuRequestForm").hide();
    // $("#menuRequestList").hide();
    $("#menuMoldList").hide();
    $("#menuMoldAssy").hide();
    $("#menuTrialList").show();
    $("#menuQCList").hide();
    $("#menuMoldHistory").hide();
    $("#menuUtilities").hide();

}
if(userRole == "5"){
    // KAPAG SI USER AY QC
    $("#menuDashboard").show();
    $("#menuRequestForm").hide();
    // $("#menuRequestList").hide();
    $("#menuMoldList").hide();
    $("#menuMoldAssy").hide();
    $("#menuTrialList").hide();
    $("#menuQCList").show();
    $("#menuMoldHistory").hide();
    $("#menuUtilities").hide();

}

*/



// if(userRole == 0){
//     console.log("The User is ADMIN");
// } else {
//     console.log("The user is a normal User");
// }



