import React from "react";
import Tables from "./Tables";

const Main = () => {
    return (
        <main className='container'>
            <div className='container section-container'>
                <section className='balance'>
                    <p>Balance</p>
                    <p>N0.00</p>
                </section>
                <section className='ref'>
                    <p>Referral</p>
                    <p>0</p>
                </section>
                <section className='balance'>
                    <p>Transactions</p>
                    <p>0</p>
                </section>
                <section className='top-up'>
                    <p>Top Up</p>
                </section>
            </div>
            <br />
            <hr />
            <div className='table-container'>
                <Tables />
            </div>
        </main>
    );
};

export default Main;
