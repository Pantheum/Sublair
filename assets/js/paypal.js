import { deleteFile, listPrints } from "./USERBASE.js"

const prodct  = document.getElementById("hires")
const item  = document.getElementById("filePath")






const paypalButtonsComponent = paypal.Buttons({
    // optional styling for buttons
    // https://developer.paypal.com/docs/checkout/standard/customize/buttons-style-guide/
    style: {
      color: "black",
      shape: "rect",
      layout: "vertical"
    },

    // set up the transaction
    createOrder: (data, actions) => {
        const x = item.innerHTML
        const y = "44.44"


        // pass in any options from the v2 orders create call:
        // https://developer.paypal.com/api/orders/v2/#orders-create-request-body
        const createOrderPayload = {
            purchase_units: [
                {
                    amount: {
                        value: y
                    }, 
                    description: x
                }
            ]
        };

        return actions.order.create(createOrderPayload);
    },

    // finalize the transaction
    onApprove: (data, actions) => {
        const captureOrderHandler = (details) => {
            const payerName = details.payer.name.given_name;

            
            var x = "Success"
            
            console.log(item.innerHTML)
            deleteFile(item.innerHTML); 
            listPrints();
            notiPop(x);
            
        };

        return actions.order.capture().then(captureOrderHandler);
    },
    

    // handle unrecoverable errors
    onError: (err) => {
        var x="Failed"
        notiPop(x);
        console.log(err)

    }
});

paypalButtonsComponent
    .render("#paypal-button-container")
    .catch((err) => {
        console.error('PayPal Buttons failed to render');
    });