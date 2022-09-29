
//bind gross salary with gross salary on payslip
const calculate = document.getElementById('entry')
calculate.addEventListener('click', (e)=>{

    let gross = Number(document.getElementById('fname').value)
    let payslipGross =document.getElementById('output')
    let nssf =Number(document.getElementById('output_nssf').innerHTML)
    // let nhif =Number(document.getElementById('nhif_contribution').innerHTML)
    let insuarance_relief =Number(document.getElementById('insuarance_relief').innerHTML)
    let personal =Number(document.getElementById('personal').innerHTML)
    let taxable = document.getElementById('taxable')
    e.preventDefault()

    // get all the deductions
    let deductions =Number(nssf+insuarance_relief+personal)

    //equate gross salary and payslip
    payslipGross.textContent=gross

    //get taxablepay 
    let taxablePay = gross-deductions

    //change the inner text of texable pay
    taxable.innerText=taxablePay




    console.log(`${gross} gross`)
    console.log(`${deductions} deductions`)
    console.log(`${taxablePay} taxabalepay`)

    //calculate paye 
        //a.if taxable pay is between 0 -24000

            if(taxablePay <=24000){
                console.log( taxablePay -(taxablePay * 0.10))

            }
            // b if taxaablepay is greater than 24000 less 32332
            else if( taxablePay >24000  || taxablePay<=32332 ){
                console.log (taxablePay -(taxablePay * 0.25))
            }
            else{
                console.log(taxablePay -(taxable * 0.30))
            }




   
    
})

   
