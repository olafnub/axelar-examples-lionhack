pragma solidity ^0.8.0;

import { AxelarExecutable } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol';
import { IAxelarGateway } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol';
import { IAxelarGasService } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol';

contract SenderReceiver is AxelarExecutable {

    IAxelarGasService public immutable gasService;
    string public message;

    constructor(address gateway_, address gasService_) AxelarExecutable(gateway_) {
        gasService = IAxelarGasService(gasService_);
    }

    function sendMessage(
        string calldata destinationChain,
        string calldata destinationAddress,
        string calldata message_
    ) external payable {
        bytes memory payload = abi.encode(message_);

        gasService.payNativeGasForContractCall{value: msg.value} (
            address(this),
            destinationChain,
            destinationAddress,
            payload,
            msg.sender
        );

        gateway.callContract(destinationChain,destinationAddress,payload);
    }

    function _execute(
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload_
    ) internal override {
        message = abi.decode(payload_, (string));
        if(keccak256(abi.encodePacked(message)) == keccak256(abi.encodePacked("ping"))) {
            gateway.callContract(sourceChain,sourceAddress,abi.encode("pong"));
        }
    }

}

// 0x9EBa25bd026F5982b1d5774ccff4494A4DbF39b6 Avalanche
// 0xa42770003d9148D6AbC811117Ee245f57795D1Fa Moonbeam