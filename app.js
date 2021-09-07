function updateProductCount( product, price, isIncreasing ) {
    const productCountField = document.getElementById( product + '-count' );
    const productCountText = productCountField.value;
    let productCount = parseInt( productCountText );
    if ( isIncreasing == true ) {
        productCount = productCount + 1;
    }
    else if ( productCount > 0 ) {
        productCount = productCount - 1;
    }
    productCountField.value = productCount;

    //update case total price
    const productTotalField = document.getElementById( product + '-total' );
    productTotalField.innerText = productCount * price;

    calculateTotal();
}

function calculateTotal() {
    const phoneSubTotalField = document.getElementById( 'phone-total' );
    const phoneSubTotalAmount = parseFloat( phoneSubTotalField.innerText );

    const caseSubTotalField = document.getElementById( 'case-total' );
    const caseSubTotalAmount = parseFloat( caseSubTotalField.innerText );

    const productSubTotal = phoneSubTotalAmount + caseSubTotalAmount;
    document.getElementById( 'sub-total' ).innerText = productSubTotal;

    const totalTaxAmount = productSubTotal * 0.1;
    document.getElementById( 'tax-amount' ).innerText = totalTaxAmount;

    const totalPrice = productSubTotal + totalTaxAmount;
    document.getElementById( 'total-price' ).innerText = totalPrice;
}

document.getElementById( 'phone-plus' ).addEventListener( 'click', function () {
    updateProductCount( 'phone', 1219, true );
} );

document.getElementById( 'phone-minus' ).addEventListener( 'click', function () {
    updateProductCount( 'phone', 1219, false );
} );


document.getElementById( 'case-plus' ).addEventListener( 'click', function () {
    updateProductCount( 'case', 59, true );
} );

document.getElementById( 'case-minus' ).addEventListener( 'click', function () {
    updateProductCount( 'case', 59, false );
} );