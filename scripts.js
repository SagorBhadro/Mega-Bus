function inputTicketQuantity(ticket,ticketIncrease){
    const ticketCategory = document.getElementById(ticket + 'Input')
    const ticketCategoryInput = parseInt(ticketCategory.value)
    
    let ticketCategoryNewValue = ticketCategoryInput
    if(ticketIncrease == true){
        ticketCategoryNewValue = ticketCategoryInput + 1
    }
    if(ticketIncrease == false && ticketCategoryNewValue > 0){
        ticketCategoryNewValue = ticketCategoryInput - 1
    }

    ticketCategory.value = ticketCategoryNewValue
    
    
    ticketFareCalculate()
}


function ticketFareCalculate(){
    const firstClass = document.getElementById('firstClassInput') 
    const firstClassInput = parseInt(firstClass.value)

    const economyClass = document.getElementById('economyClassInput') 
    const economyClassInput = parseInt(economyClass.value)

    let subtotalFare = 0
    subtotalFare = firstClassInput * 150 + economyClassInput * 100  
    document.getElementById('ticketSubtotalFare').innerText = subtotalFare 

    const tenPercentageVat = (subtotalFare / 100) * 10
    document.getElementById('ticketFareVat').innerText = tenPercentageVat

    let totalFareOfTicket = 0
    totalFareOfTicket = subtotalFare + tenPercentageVat 
    document.getElementById('totalTicketFare').innerText = totalFareOfTicket
}








