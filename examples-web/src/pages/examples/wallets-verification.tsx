import React, { Component, useState} from 'react';
import ethers, { } from 'ethers';
import { isTestnet } from "config/constants";

function clickMe() {
  alert('hi');
}

class Metamask extends Component {
    constructor(props: any) {
      super(props);
    }

    render() {
        return(
          <>
          <div className="header">
            <h1 className="text-4xl font-medium text-center">Multichain Wallet Ownership Verification</h1>
          </div>

          {/* {Full Body Card} */}
          <div className="grid grid-cols-2 gap-20 mt-20 justify-items-center">
            {/* {Left Card - Source chain} */}
            <div className="row-span-2 shadow-xl card w-96 bg-base-100">
              <form>
                <label>Chain 1</label>

              </form>
              <div className="submit-run">
                <button className="btn btn-primary" onClick={clickMe}>RUN</button>
              </div>
            </div>
          </div>
          </>
        )
      }
    }

export default Metamask;