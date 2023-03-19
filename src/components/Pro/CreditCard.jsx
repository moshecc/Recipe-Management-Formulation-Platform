import React, {useContext} from 'react'
import { IoMdReturnRight } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import "./Pro.css"
import { ContextData } from '../../App'

export default function CreditCard() {
  const { ProPaypal} = useContext(ContextData);

  return (
    <>
    <div className='bgImg'>
    <Link to={"/main/pro"}>
          <div className="btn back-button">
            <div><IoMdReturnRight size={30}/></div>
          </div>
        </Link>
        <PayPalScriptProvider
        options={{ "client-id":"Abl-GtoxYS4GCkAb6CEYnlEUN5oCiHHVmpSp4JnBhTSt68QxwmOBoFMu_ng9hziwaF3EsYeeKxdkltuK" , currency: "ILS" }}
      >
           <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: {ProPaypal},
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
        />
        </PayPalScriptProvider>

        

    </div>

    </>
  )
}
