let bsv = require('bsv')

function specToBrfcId(spec) {
    let hash = bsv.crypto.Hash.sha256sha256(Buffer.from(
        spec.title.trim() +
        (spec.author || '').trim() +
        (spec.version || '').trim()
    ));
    
    let bitcoinDisplayHash = hash
      .reverse()
      .toString('hex');
    
    return bitcoinDisplayHash.substring(0, 12);
    
}

let spec1 = {
    title: "BRFC Specifications",
    author: "andy (nChain)",
    version: "1"
}

let spec2 = {
    title: " bsvalias Payment Addressing (PayTo Protocol Prefix)",
    author: "andy (nChain)",
    version: "1"
}

let spec3 = {
    title: "bsvalias Integration with Simplified Payment Protocol ",
    author: "andy (nChain)",
    version: "1"
}

let minerIdSpec = {
    title: "minerId",
    author: "bowstave",
    version: "0.1"
}

let brfcId1 = specToBrfcId(spec1);
let brfcId2 = specToBrfcId(spec2);
let brfcId3 = specToBrfcId(spec3);
let brfcMinerId = specToBrfcId(minerIdSpec);

console.log("spec 1: " + brfcId1);
console.log("spec 2: " + brfcId2);
console.log("spec 3: " + brfcId3);
console.log("MinerId Spec: " + brfcMinerId);