import React from "react";
import burnerLogo from "../assets/burner-logo.png";
import subscriptionLogo from "../assets/subscription-logo.png";

const Card = ({ card }) => {
  const { name, budget_name, card_type, expiry, limit, spent, available_to_spend, status, frequency } = card;

  let cardLogo;
  if (card_type === "burner") {
    cardLogo = burnerLogo;
  } else if (card_type === "subscription") {
    cardLogo = subscriptionLogo;
  }

  return (
    <div className="card">
      <div className="cont">

      <div className="card-header">
     <div>
     <p><b>{name}</b></p>
      <p className="budget-name"> {budget_name} <span className="dot"></span> &nbsp; Budget</p>
      </div>
      <div>{cardLogo && <img className="card-logo" src={cardLogo} alt={card_type} />}
</div> 
    </div>
      <div className="card-body">
        <table>
              <tr>
                <td>Amount</td>
                <td>Frequency</td>
                <td>Expiry</td>
              </tr>
              <tr>
                <td>
                  {limit.value} {limit.currency}
                </td>
                <td>{frequency}</td>
                <td>{expiry}</td>
              </tr>
            </table>
            

            {/* <div className="line">
              <div className="green"></div>
              <div className="red"></div>
            </div> */}
            <div className="card-line" />
              

            <div>
              <div className="spent">
                <div>
                  <span className="greendot"></span>
                  <span> Spent</span>
                </div>
                <div>
                  {spent.value} {spent.currency}
                </div>
              </div>
              <div className="spent">
                <div>
                  <span className="reddot"></span>
                  <span> Balance</span>
                </div>
                <div>
                  {available_to_spend.value}{" "}
                  {available_to_spend.currency}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Card;
