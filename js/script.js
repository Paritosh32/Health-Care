let activeAlert = false;
const title = " ---->  HealthCare   <----";
const mssg1= "---->    UPHOLDERS   <----";
const titleChange = setInterval(()=> {
    document.title = activeAlert ? title : mssg1;

    activeAlert = !activeAlert;
},1000)