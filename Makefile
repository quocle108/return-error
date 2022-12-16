
clean:
	-rm -rf build


build: clean
	-mkdir -p ./build
	eosio-cpp -I include -w --abigen ./src/test_int64.cpp -o ./build/test_int64.wasm
