
#include <eosio/eosio.hpp>
using namespace eosio;
class [[eosio::contract]] test_int64 : public contract
{
public:
  using contract::contract;

  [[eosio::action]] int64_t getvalue1() {
        int64_t value = -4;
        eosio::print("getvalue1: ", value);
        return value;
  }

  [[eosio::action]] int64_t getvalue2() {
        int64_t value = -90909090909090909;
        eosio::print("getvalue2: ", value);
        return value;
  }
};
