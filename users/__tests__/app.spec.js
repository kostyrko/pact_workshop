const path = require("path")
const { Verifier } = require("@pact-foundation/pact");
const { server } = require("../app");

const PROVIDER_URL = "http://localhost:8081";

server.listen(8081, () => {
    console.log(`Users Service listening on ${PROVIDER_URL}`)
});

describe("Users Service Verification", () => {
    it("validates the expectations of Payments Service", () => {
        let opts = {
            provider: "Users Service",
            logLevel: "DEBUG",
            providerBaseUrl: PROVIDER_URL,
            pactUrls: [path.resolve(process.cwd(), "../payments/__tests__/pact/contracts/consumerservice-providerservice.json")],
            // pactUrls: ['http://localhost:8080/pacts/provider/ProviderService/consumer/ConsumerService/latest'],
            consumerVersionTags: ["dev"],
            providerVersionTagS: ["dev"],
            publishVerificationResult: false,
            // publishVerificationResult: true,
            providerVersion: "1.0.0"
        };
        return new Verifier(opts).verifyProvider().then(output => {
            console.log("Pact Verification Complete!");
            console.log(output);
        })
    })
});

