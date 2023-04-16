import React, { Component, useState} from 'react';
import ethers, { } from 'ethers';
import { isTestnet } from "config/constants";

function clickMe() {
  alert('hi');
}
// function handleChanges(event: HTMLInputElement) {
//   // console.log(event.value);
// }

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
          <div className="grid grid-cols-3 grid-rows-2 gap-20 mt-20 justify-items-center">
            {/* {Left Card - Source chain} */}
            <div className="row-span-5 shadow-xl card w-96 bg-base-100">
              <form className="flex form-control col-span-3">
                <label htmlFor="chain-1" className="w-full input-group">Chain 1:
                </label>
                <input 
                  type="text"
                  placeholder="Enter address"
                  className="w-full input input-bordered"
                  id="chain-1"
                  ></input>

                <input
                  type="text"
                  placeholder="Enter message"
                  className="w-full input input-bordered"
                
                ></input>
              </form>
            </div>

            {/* Right Card - Dest chain */}
            <div className="row-span-5 shadow-xl card w-96 bg-base-100">
              <form className="flex form-control">
                <label htmlFor="chain-2" className="w-full input-group">Chain 2:
                </label>
                <input 
                  type="text"
                  placeholder="Enter address"
                  className="w-full input input-bordered"
                  ></input>

                <input
                  type="text"
                  placeholder="Enter message"
                  className="w-full input input-bordered"
                
                ></input>
              </form>
            </div>
            
              <div className="submit-run">
                <button className="btn btn-primary" onClick={clickMe}>RUN</button>
              </div>
          </div>
          </>
        )
      }
    }

export default Metamask;