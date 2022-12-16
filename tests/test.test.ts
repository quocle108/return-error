const { Chain } = require("qtest-js");
const { expectAction, expectThrow, expectBalance } = require("qtest-js");

describe('test_int64 test', () => {
  let chain;
  let contractAccount;

  beforeAll(async () => {
    chain = await Chain.setupChain('EOS');
    [contractAccount] = chain.accounts;
    await contractAccount.addCode('active');
    await contractAccount.setContract({
      abi: './build/test_int64.abi',
      wasm: './build/test_int64.wasm'
    });
  }, 60000);

  afterAll(async () => {
    await chain.clear();
  }, 10000);

  describe("init account table", function () {
    it('get value1', async () => {
      const receipt = await contractAccount.contract.action.getvalue1({});
      console.log("console: ", receipt.processed.action_traces[0].console);
      console.log("return_value_data: ", receipt.processed.action_traces[0].return_value_data);
      expect(receipt.processed.action_traces[0].return_value_data.toString()).toEqual('-4');
    });

    it('get value2', async () => {
      const receipt = await contractAccount.contract.action.getvalue2({});
      console.log("console: ", receipt.processed.action_traces[0].console);
      console.log("return_value_data: ", receipt.processed.action_traces[0].return_value_data);
      expect(receipt.processed.action_traces[0].return_value_data.toString()).toEqual('-90909090909090909');
    });
  });
});
