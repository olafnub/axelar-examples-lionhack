import React, { Component, useState} from 'react';
import ethers, { } from 'ethers';
import { isTestnet } from "config/constants";

function clickMe() {
  alert('(still in test) Read code for explanation');
}
// Hi - We mainly focused on the backend and the learning of creating a smart contract.
// {Because front-end was not mentioned in our base of judgment}
// {For the back-end, we were able to follow Stephen's instructions from his videos online and his workshop on saturday}

class Metamask extends Component {
    constructor(props: any) {
      super(props);

      this.state = {

      };
    }
    
    async connectToMetaMask() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      this.setState({selectedAddress: accounts[0] });
    }

    renderMetamask() {
      if (!this.state.selectedAddress) {
        return (
          <button onClick={() => this.connectToMetaMask()}>Connect to Metamask</button>
        )
      } else {
        return (
          <p>Welcome {this.state.selectedAddress}</p>
        );
      }
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
            
            <div>
              {this.renderMetamask()}
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