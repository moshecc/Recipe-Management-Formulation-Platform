import React, { useContext } from "react";
import { IoMdReturnRight } from "react-icons/io";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Pro.css";
import { ContextData } from "../../App";

export default function CreditCard() {
  const { ProPaypal } = useContext(ContextData);

  return (
    <>
      <div className="bgImg d-flex align-items-center">
        <Link to={"/main/pro"}>
          <div className="btn back-button">
            <div>
              <IoMdReturnRight size={30} />
            </div>
          </div>
        </Link>
        <div className="RecipeViewContiner container rtl ">
          <div className="row justify-content-center">
            <h3 className="col-12 d-flex justify-content-center my-5 text-pro ">
              {ProPaypal.name} תשלום לפרימיום
            </h3>
            <div className="col-6 textProPrice">
              <ul>
                <li>{ProPaypal.name}</li>
                <li>{ProPaypal.rec}</li>
                <li>ללא פרסומות</li>
              </ul>
              <h3 className="d-flex justify-content-center">  מחיר {ProPaypal.price} ₪</h3>
            </div>

            <div className="col-6">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "Abl-GtoxYS4GCkAb6CEYnlEUN5oCiHHVmpSp4JnBhTSt68QxwmOBoFMu_ng9hziwaF3EsYeeKxdkltuK",
                  currency: "ILS",
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: ProPaypal.price,
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
          </div>
        </div>
      </div>
    </>
  );
}
