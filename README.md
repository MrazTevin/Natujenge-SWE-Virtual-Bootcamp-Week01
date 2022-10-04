# Tax Calculator App
## Description
### Tax calculator
The tax calaculator app is used to calculate the net income after the various deductions have been done. The deductions include the Pay as you earn(PAYE),
NSSF and NHIF contributions.The app also factors in the various reliefs an an individual is entitled to i.e personal relief and insurance.
The paye is calculated according the prevaling tax brackets and rates. This App uses the following rates 
'''
function calculateTaxes(salary){
    var tax = 0;
    if(salary <= 24000){
        tax = salary * 0.1
    }
    else if( salary <= (24000 + 8333)){
        tax = 2400 + (salary - 24000) * 0.25;
    }
    else {
        tax = 4483.25 + (salary - 32333) * 0.3;
    }
    paye = tax - Deductions;
    return paye;

}

'''
### Bills manager
The tax app has a bill manager that manages the various bills for example gym,shopping e.t.c. the user can add or delete the various bills according to the usecases. an analysis feature is upcoming to show how a user salary is spend and advice accordingly by throwing alerts.
![bill-manager]
("C:\Users\Amos Kinuthia\Desktop\Natujenge\attachment\wk_1\Natujenge-SWE-Virtual-Bootcamp-Week01\res\bill manager.PNG")
### Contributions
The team is open for suggestions and contributions in making the app better. Just open a pull request.
### Authors and Acknowledgement 
This project was undertaken by members of group 6 as a fullfillment for week one of the Overcome Your Fears SE Bootcamp.
our we would like to thank Meriola Technologies for the learning opportunity and guidance through the whole project.
### License
[MIT](https://choosealicense.com/licenses/mit/)
