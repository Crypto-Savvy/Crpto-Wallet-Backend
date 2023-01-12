const express = require("express");
const dbConfig = require("./src/config/dbConnection");

var coinList = [
  {
    id: "01coin",
    symbol: "zoc",
    name: "01coin",
  },
  {
    id: "0chain",
    symbol: "zcn",
    name: "Zus",
  },
  {
    id: "0x",
    symbol: "zrx",
    name: "0x",
  },
  {
    id: "0xcert",
    symbol: "zxc",
    name: "0xcert",
  },
  {
    id: "0xdao",
    symbol: "oxd",
    name: "0xDAO",
  },
  {
    id: "0xdao-v2",
    symbol: "oxd v2",
    name: "0xDAO V2",
  },
  {
    id: "0xmonero",
    symbol: "0xmr",
    name: "0xMonero",
  },
  {
    id: "0xpad",
    symbol: "0xpad",
    name: "0xPAD",
  },
  {
    id: "0xtrade",
    symbol: "0xt",
    name: "0xTrade",
  },
  {
    id: "0xwallet-token",
    symbol: "0xw",
    name: "0xWallet Token",
  },
  {
    id: "11957-olga",
    symbol: "realt-s-11957-olga-st-detroit-mi",
    name: "RealT - 11957 Olga St, Detroit, MI 48213",
  },
  {
    id: "12405-santa-rosa",
    symbol: "realt-s-12405-santa-rosa-dr-detroit-mi",
    name: "RealT - 12405 Santa Rosa Dr, Detroit, MI 48204",
  },
  {
    id: "12ships",
    symbol: "tshp",
    name: "12Ships",
  },
  {
    id: "1337",
    symbol: "1337",
    name: "Elite",
  },
  {
    id: "14066-santa-rosa",
    symbol: "realt-s-14066-santa-rosa-dr-detroit-mi",
    name: "RealT - 14066 Santa Rosa Dr, Detroit, MI 48238",
  },
  {
    id: "1617-s-avers",
    symbol: "realt-s-1617-s.avers-ave-chicago-il",
    name: "RealT - 1617 S Avers Ave, Chicago, IL 60623",
  },
  {
    id: "1815-s-avers",
    symbol: "realt-s-1815-s.avers-ave-chicago-il",
    name: "RealT - 1815 S Avers Ave, Chicago, IL 60623",
  },
  {
    id: "1art",
    symbol: "1art",
    name: "OneArt",
  },
  {
    id: "1bch",
    symbol: "1bch",
    name: "1BCH",
  },
  {
    id: "1box",
    symbol: "1box",
    name: "1BOX",
  },
  {
    id: "1doge",
    symbol: "1doge",
    name: "1Doge",
  },
  {
    id: "1-dollar",
    symbol: "oneusd",
    name: "1 Dollar",
  },
  {
    id: "1eco",
    symbol: "1eco",
    name: "1eco",
  },
  {
    id: "1eth",
    symbol: "1eth",
    name: "1ETH",
  },
  {
    id: "1hive-water",
    symbol: "water",
    name: "1Hive Water",
  },
  {
    id: "1inch",
    symbol: "1inch",
    name: "1inch",
  },
  {
    id: "1million-nfts",
    symbol: "1mil",
    name: "1MillionNFTs",
  },
  {
    id: "1million-token",
    symbol: "1mt",
    name: "1Million",
  },
  {
    id: "1move token",
    symbol: "1mt",
    name: "1Move Token",
  },
  {
    id: "1peco",
    symbol: "1peco",
    name: "1peco",
  },
  {
    id: "1reward-token",
    symbol: "1rt",
    name: "1Reward Token",
  },
  {
    id: "1safu",
    symbol: "safu",
    name: "1SAFU",
  },
  {
    id: "1sol",
    symbol: "1sol",
    name: "1Sol",
  },
  {
    id: "1sol-io-wormhole",
    symbol: "1sol",
    name: "1sol.io (Wormhole)",
  },
  {
    id: "1tronic",
    symbol: "1trc",
    name: "1TRONIC",
  },
  {
    id: "1-up",
    symbol: "1-up",
    name: "1-UP",
  },
  {
    id: "1world",
    symbol: "1wo",
    name: "1World",
  },
  {
    id: "1x-long-btc-implied-volatility-token",
    symbol: "bvol",
    name: "Bitcoin Volatility Token",
  },
  {
    id: "1x-short-btc-implied-volatility",
    symbol: "ibvol",
    name: "Inverse Bitcoin Volatility",
  },
  {
    id: "2044-nuclear-apocalypse",
    symbol: "2044",
    name: "2044 Nuclear Apocalypse",
  },
  {
    id: "20weth-80bal",
    symbol: "20weth-80bal",
    name: "20WETH-80BAL",
  },
  {
    id: "28vck",
    symbol: "vck",
    name: "28VCK",
  },
  {
    id: "2acoin",
    symbol: "arms",
    name: "2ACoin",
  },
  {
    id: "2crazynft",
    symbol: "2crz",
    name: "2crazyNFT",
  },
  {
    id: "2gather",
    symbol: "two",
    name: "2gather",
  },
  {
    id: "2g-carbon-coin",
    symbol: "2gcc",
    name: "2G Carbon Coin",
  },
  {
    id: "2key",
    symbol: "2key",
    name: "2key.network",
  },
  {
    id: "2local-2",
    symbol: "2lc",
    name: "2local",
  },
  {
    id: "2omb-finance",
    symbol: "2omb",
    name: "2omb",
  },
  {
    id: "2share",
    symbol: "2shares",
    name: "2SHARE",
  },
  {
    id: "300fit",
    symbol: "fit",
    name: "300FIT",
  },
  {
    id: "30mb-token",
    symbol: "3omb",
    name: "3OMB",
  },
  {
    id: "37protocol",
    symbol: "37c",
    name: "37Protocol",
  },
  {
    id: "3air",
    symbol: "3air",
    name: "3air",
  },
  {
    id: "3gg",
    symbol: "3gg",
    name: "3gg",
  },
  {
    id: "3qt",
    symbol: "3qt",
    name: "3QT",
  },
  {
    id: "3shares",
    symbol: "3share",
    name: "3Share",
  },
  {
    id: "3xcalibur",
    symbol: "xcal",
    name: "3xcalibur Ecosystem Token",
  },
  {
    id: "42-coin",
    symbol: "42",
    name: "42-coin",
  },
  {
    id: "4852-4854-w-cortez",
    symbol: "realt-s-4852-4854-w.cortez-st-chicago-il",
    name: "RealT - 4852-4854 W Cortez St, Chicago, IL 60651",
  },
  {
    id: "4artechnologies",
    symbol: "4art",
    name: "4ART Coin",
  },
  {
    id: "4d-twin-maps",
    symbol: "map",
    name: "4D Twin Maps",
  },
  {
    id: "4int",
    symbol: "4int",
    name: "4INT",
  },
  {
    id: "4jnet",
    symbol: "4jnet",
    name: "4JNET",
  },
  {
    id: "4mw",
    symbol: "4mw",
    name: "4 Meta World",
  },
  {
    id: "4new",
    symbol: "kwatt",
    name: "4New",
  },
  {
    id: "4play",
    symbol: "4play",
    name: "4PLAY",
  },
  {
    id: "4-stock",
    symbol: "4stc",
    name: "4-Stock",
  },
  {
    id: "50cent",
    symbol: "50c",
    name: "50Cent",
  },
  {
    id: "5g-cash",
    symbol: "vgc",
    name: "5G-CASH",
  },
  {
    id: "5km-run",
    symbol: "run",
    name: "5KM RUN",
  },
  {
    id: "73c9fc57-af8f-4bd8-935f-de69a853598d",
    symbol: "mbtc",
    name: "메타비트코인",
  },
  {
    id: "7pixels",
    symbol: "7pxs",
    name: "7Pixels",
  },
  {
    id: "7up",
    symbol: "7up",
    name: "7up",
  },
  {
    id: "888tron",
    symbol: "888",
    name: "888tron",
  },
  {
    id: "88mph",
    symbol: "mph",
    name: "88mph",
  },
  {
    id: "8bit-doge",
    symbol: "bitd",
    name: "8Bit Doge",
  },
  {
    id: "8pay",
    symbol: "8pay",
    name: "8Pay",
  },
  {
    id: "8x8-protocol",
    symbol: "exe",
    name: "8X8 Protocol",
  },
  {
    id: "99defi",
    symbol: "99defi",
    name: "99Defi",
  },
  {
    id: "99starz",
    symbol: "stz",
    name: "99Starz",
  },
  {
    id: "a4-finance",
    symbol: "a4",
    name: "A4 Finance",
  },
  {
    id: "aada-finance",
    symbol: "aada",
    name: "Aada Finance",
  },
  {
    id: "aag-ventures",
    symbol: "aag",
    name: "AAG",
  },
  {
    id: "aananaapegarden",
    symbol: "bag",
    name: "BananaApeGarden",
  },
  {
    id: "aarma",
    symbol: "arma",
    name: "Aarma",
  },
  {
    id: "aave",
    symbol: "aave",
    name: "Aave",
  },
  {
    id: "aave-aave",
    symbol: "aaave",
    name: "Aave AAVE",
  },
  {
    id: "aave-amm-bptbalweth",
    symbol: "aammbptbalweth",
    name: "Aave AMM BptBALWETH",
  },
  {
    id: "aave-amm-bptwbtcweth",
    symbol: "aammbptwbtcweth",
    name: "Aave AMM BptWBTCWETH",
  },
  {
    id: "aave-amm-dai",
    symbol: "aammdai",
    name: "Aave AMM DAI",
  },
  {
    id: "aave-amm-uniaaveweth",
    symbol: "aammuniaaveweth",
    name: "Aave AMM UniAAVEWETH",
  },
  {
    id: "aave-amm-unibatweth",
    symbol: "aammunibatweth",
    name: "Aave AMM UniBATWETH",
  },
  {
    id: "aave-amm-unicrvweth",
    symbol: "aammunicrvweth",
    name: "Aave AMM UniCRVWETH",
  },
  {
    id: "aave-amm-unidaiusdc",
    symbol: "aammunidaiusdc",
    name: "Aave AMM UniDAIUSDC",
  },
  {
    id: "aave-amm-unidaiweth",
    symbol: "aammunidaiweth",
    name: "Aave AMM UniDAIWETH",
  },
  {
    id: "aave-amm-unilinkweth",
    symbol: "aammunilinkweth",
    name: "Aave AMM UniLINKWETH",
  },
  {
    id: "aave-amm-unimkrweth",
    symbol: "aammunimkrweth",
    name: "Aave AMM UniMKRWETH",
  },
  {
    id: "aave-amm-unirenweth",
    symbol: "aammunirenweth",
    name: "Aave AMM UniRENWETH",
  },
  {
    id: "aave-amm-unisnxweth",
    symbol: "aammunisnxweth",
    name: "Aave AMM UniSNXWETH",
  },
  {
    id: "aave-amm-uniuniweth",
    symbol: "aammuniuniweth",
    name: "Aave AMM UniUNIWETH",
  },
  {
    id: "aave-amm-uniusdcweth",
    symbol: "aammuniusdcweth",
    name: "Aave AMM UniUSDCWETH",
  },
  {
    id: "aave-amm-uniwbtcusdc",
    symbol: "aammuniwbtcusdc",
    name: "Aave AMM UniWBTCUSDC",
  },
  {
    id: "aave-amm-uniwbtcweth",
    symbol: "aammuniwbtcweth",
    name: "Aave AMM UniWBTCWETH",
  },
  {
    id: "aave-amm-uniyfiweth",
    symbol: "aammuniyfiweth",
    name: "Aave AMM UniYFIWETH",
  },
  {
    id: "aave-amm-usdc",
    symbol: "aammusdc",
    name: "Aave AMM USDC",
  },
  {
    id: "aave-amm-usdt",
    symbol: "aammusdt",
    name: "Aave AMM USDT",
  },
  {
    id: "aave-amm-wbtc",
    symbol: "aammwbtc",
    name: "Aave AMM WBTC",
  },
  {
    id: "aave-amm-weth",
    symbol: "aammweth",
    name: "Aave AMM WETH",
  },
  {
    id: "aave-bal",
    symbol: "abal",
    name: "Aave BAL",
  },
  {
    id: "aave-balancer-pool-token",
    symbol: "abpt",
    name: "Aave Balancer Pool Token",
  },
  {
    id: "aave-bat",
    symbol: "abat",
    name: "Aave BAT",
  },
  {
    id: "aave-bat-v1",
    symbol: "abat",
    name: "Aave BAT v1",
  },
  {
    id: "aave-busd",
    symbol: "abusd",
    name: "Aave BUSD",
  },
  {
    id: "aave-busd-v1",
    symbol: "abusd",
    name: "Aave BUSD v1",
  },
  {
    id: "aave-crv",
    symbol: "acrv",
    name: "Aave CRV",
  },
  {
    id: "aave-dai",
    symbol: "adai",
    name: "Aave DAI",
  },
  {
    id: "aave-dai-v1",
    symbol: "adai",
    name: "Aave DAI v1",
  },
  {
    id: "aave-enj",
    symbol: "aenj",
    name: "Aave ENJ",
  },
  {
    id: "aave-enj-v1",
    symbol: "aenj",
    name: "Aave ENJ v1",
  },
  {
    id: "aave-eth-v1",
    symbol: "aeth",
    name: "Aave ETH v1",
  },
  {
    id: "aavegotchi",
    symbol: "ghst",
    name: "Aavegotchi",
  },
  {
    id: "aavegotchi-alpha",
    symbol: "alpha",
    name: "Aavegotchi ALPHA",
  },
  {
    id: "aavegotchi-fomo",
    symbol: "fomo",
    name: "Aavegotchi FOMO",
  },
  {
    id: "aavegotchi-fud",
    symbol: "fud",
    name: "Aavegotchi FUD",
  },
  {
    id: "aavegotchi-kek",
    symbol: "kek",
    name: "Aavegotchi KEK",
  },
  {
    id: "aave-gusd",
    symbol: "agusd",
    name: "Aave GUSD",
  },
  {
    id: "aave-interest-bearing-steth",
    symbol: "asteth",
    name: "Aave Interest Bearing STETH",
  },
  {
    id: "aave-knc",
    symbol: "aknc",
    name: "Aave KNC",
  },
  {
    id: "aave-knc-v1",
    symbol: "aknc",
    name: "Aave KNC v1",
  },
  {
    id: "aave-link",
    symbol: "alink",
    name: "Aave LINK",
  },
  {
    id: "aave-link-v1",
    symbol: "alink",
    name: "Aave LINK v1",
  },
  {
    id: "aave-mana",
    symbol: "amana",
    name: "Aave MANA",
  },
  {
    id: "aave-mana-v1",
    symbol: "amana",
    name: "Aave MANA v1",
  },
  {
    id: "aave-mkr",
    symbol: "amkr",
    name: "Aave MKR",
  },
  {
    id: "aave-mkr-v1",
    symbol: "amkr",
    name: "Aave MKR v1",
  },
  {
    id: "aave-polygon-aave",
    symbol: "amaave",
    name: "Aave Polygon AAVE",
  },
  {
    id: "aave-polygon-dai",
    symbol: "amdai",
    name: "Aave Polygon DAI",
  },
  {
    id: "aave-polygon-usdc",
    symbol: "amusdc",
    name: "Aave Polygon USDC",
  },
  {
    id: "aave-polygon-usdt",
    symbol: "amusdt",
    name: "Aave Polygon USDT",
  },
  {
    id: "aave-polygon-wbtc",
    symbol: "amwbtc",
    name: "Aave Polygon WBTC",
  },
  {
    id: "aave-polygon-weth",
    symbol: "amweth",
    name: "Aave Polygon WETH",
  },
  {
    id: "aave-polygon-wmatic",
    symbol: "amwmatic",
    name: "Aave Polygon WMATIC",
  },
  {
    id: "aave-rai",
    symbol: "arai",
    name: "Aave RAI",
  },
  {
    id: "aave-ren",
    symbol: "aren",
    name: "Aave REN",
  },
  {
    id: "aave-ren-v1",
    symbol: "aren",
    name: "Aave REN v1",
  },
  {
    id: "aave-snx",
    symbol: "asnx",
    name: "Aave SNX",
  },
  {
    id: "aave-snx-v1",
    symbol: "asnx",
    name: "Aave SNX v1",
  },
  {
    id: "aave-susd",
    symbol: "asusd",
    name: "Aave SUSD",
  },
  {
    id: "aave-susd-v1",
    symbol: "asusd",
    name: "Aave SUSD v1",
  },
  {
    id: "aave-tusd",
    symbol: "atusd",
    name: "Aave TUSD",
  },
  {
    id: "aave-tusd-v1",
    symbol: "atusd",
    name: "Aave TUSD v1",
  },
  {
    id: "aave-uni",
    symbol: "auni",
    name: "Aave UNI",
  },
  {
    id: "aave-usdc",
    symbol: "ausdc",
    name: "Aave USDC",
  },
  {
    id: "aave-usdc-v1",
    symbol: "ausdc",
    name: "Aave USDC v1",
  },
  {
    id: "aave-usdt",
    symbol: "ausdt",
    name: "Aave USDT",
  },
  {
    id: "aave-usdt-v1",
    symbol: "ausdt",
    name: "Aave USDT v1",
  },
  {
    id: "aave-wbtc",
    symbol: "awbtc",
    name: "Aave WBTC",
  },
  {
    id: "aave-wbtc-v1",
    symbol: "awbtc",
    name: "Aave WBTC v1",
  },
  {
    id: "aave-weth",
    symbol: "aweth",
    name: "Aave WETH",
  },
  {
    id: "aave-xsushi",
    symbol: "axsushi",
    name: "Aave XSUSHI",
  },
  {
    id: "aave-yfi",
    symbol: "ayfi",
    name: "Aave YFI",
  },
  {
    id: "aave-zrx",
    symbol: "azrx",
    name: "Aave ZRX",
  },
  {
    id: "aave-zrx-v1",
    symbol: "azrx",
    name: "Aave ZRX v1",
  },
  {
    id: "aax-token",
    symbol: "aab",
    name: "AAX",
  },
  {
    id: "abachi",
    symbol: "abi",
    name: "Abachi",
  },
  {
    id: "abcc-token",
    symbol: "at",
    name: "ABCC",
  },
  {
    id: "abc-floor-index",
    symbol: "abc",
    name: "ABC Floor Index",
  },
  {
    id: "abcmeta",
    symbol: "meta",
    name: "ABCMETA",
  },
  {
    id: "abel-finance",
    symbol: "abel",
    name: "ABEL Finance",
  },
  {
    id: "abell-coin",
    symbol: "abc",
    name: "Abell Coin",
  },
  {
    id: "abey",
    symbol: "abey",
    name: "Abey",
  },
  {
    id: "abitshadow-token",
    symbol: "abst",
    name: "Abitshadow",
  },
  {
    id: "able-finance",
    symbol: "able",
    name: "Able Finance",
  },
  {
    id: "aboat-token",
    symbol: "aboat",
    name: "Aboat Token",
  },
  {
    id: "absolute-sync-token",
    symbol: "ast",
    name: "Absolute Sync",
  },
  {
    id: "acala",
    symbol: "aca",
    name: "Acala",
  },
  {
    id: "acala-dollar",
    symbol: "ausd",
    name: "Acala Dollar (Karura)",
  },
  {
    id: "acala-dollar-acala",
    symbol: "ausd",
    name: "Acala Dollar (Acala)",
  },
  {
    id: "aca-token",
    symbol: "aca",
    name: "ACA",
  },
  {
    id: "accel-defi",
    symbol: "accel",
    name: "Accel Defi",
  },
  {
    id: "accesslauncher",
    symbol: "acx",
    name: "AccessLauncher",
  },
  {
    id: "ace-cash",
    symbol: "acec",
    name: "Ace Cash",
  },
  {
    id: "aced",
    symbol: "aced",
    name: "Aced [OLD]",
  },
  {
    id: "acent",
    symbol: "ace",
    name: "Acent",
  },
  {
    id: "acestarter",
    symbol: "astar",
    name: "AceStarter",
  },
  {
    id: "acetoken",
    symbol: "ace",
    name: "ACEToken",
  },
  {
    id: "acet-token",
    symbol: "act",
    name: "Acet",
  },
  {
    id: "ac-exchange-token",
    symbol: "acxt",
    name: "ACDX Exchange",
  },
  {
    id: "achain",
    symbol: "act",
    name: "Achain",
  },
  {
    id: "acknoledger",
    symbol: "ack",
    name: "AcknoLedger",
  },
  {
    id: "ac-milan-fan-token",
    symbol: "acm",
    name: "AC Milan Fan Token",
  },
  {
    id: "acoconut",
    symbol: "ac",
    name: "ACoconut",
  },
  {
    id: "acoin",
    symbol: "acoin",
    name: "Acoin",
  },
  {
    id: "acquire-fi",
    symbol: "acq",
    name: "Acquire.Fi",
  },
  {
    id: "acreage-coin",
    symbol: "acr",
    name: "Acreage Coin",
  },
  {
    id: "acria",
    symbol: "acria",
    name: "ACRIA",
  },
  {
    id: "across-protocol",
    symbol: "acx",
    name: "Across Protocol",
  },
  {
    id: "acryptos",
    symbol: "acs",
    name: "ACryptoS",
  },
  {
    id: "acryptosi",
    symbol: "acsi",
    name: "ACryptoSI",
  },
  {
    id: "actifit",
    symbol: "afit",
    name: "Actifit",
  },
  {
    id: "actinium",
    symbol: "acm",
    name: "Actinium",
  },
  {
    id: "action-coin",
    symbol: "actn",
    name: "Action Coin",
  },
  {
    id: "active-world-rewards-token",
    symbol: "awrt",
    name: "Active World Rewards",
  },
  {
    id: "acumen",
    symbol: "acm",
    name: "Acumen",
  },
  {
    id: "acute-angle-cloud",
    symbol: "aac",
    name: "Double-A Chain",
  },
  {
    id: "acy-finance",
    symbol: "acy",
    name: "ACY Finance",
  },
  {
    id: "adaboy",
    symbol: "adaboy",
    name: "ADABoy",
  },
  {
    id: "adacash",
    symbol: "adacash",
    name: "ADAcash",
  },
  {
    id: "adadao",
    symbol: "adao",
    name: "ADADao",
  },
  {
    id: "adaflect",
    symbol: "adaflect",
    name: "ADAFlect",
  },
  {
    id: "adalend",
    symbol: "adal",
    name: "Adalend",
  },
  {
    id: "adam",
    symbol: "adam",
    name: "ADAM",
  },
  {
    id: "adamant",
    symbol: "addy",
    name: "Adamant",
  },
  {
    id: "adamant-coin",
    symbol: "admc",
    name: "Adamant Coin",
  },
  {
    id: "adamant-messenger",
    symbol: "adm",
    name: "ADAMANT Messenger",
  },
  {
    id: "adana-demirspor",
    symbol: "demir",
    name: "Adana Demirspor",
  },
  {
    id: "adanaspor-fan-token",
    symbol: "adana",
    name: "Adanaspor Fan Token",
  },
  {
    id: "adapad",
    symbol: "adapad",
    name: "ADAPad",
  },
  {
    id: "adappter-token",
    symbol: "adp",
    name: "Adappter",
  },
  {
    id: "adaswap",
    symbol: "asw",
    name: "AdaSwap",
  },
  {
    id: "adax",
    symbol: "adax",
    name: "ADAX",
  },
  {
    id: "adbank",
    symbol: "adb",
    name: "adbank",
  },
  {
    id: "add-xyz-new",
    symbol: "add",
    name: "Add.xyz (NEW)",
  },
  {
    id: "adene",
    symbol: "aden",
    name: "Adene",
  },
  {
    id: "adex",
    symbol: "adx",
    name: "Ambire AdEx",
  },
  {
    id: "ad-flex-token",
    symbol: "adf",
    name: "Ad Flex",
  },
  {
    id: "aditus",
    symbol: "adi",
    name: "Aditus",
  },
  {
    id: "admonkey",
    symbol: "admonkey",
    name: "AdMonkey",
  },
  {
    id: "ado-network",
    symbol: "ado",
    name: "ADO.Network",
  },
  {
    id: "adonis",
    symbol: "adon",
    name: "Adonis [OLD]",
  },
  {
    id: "adonis-2",
    symbol: "adon",
    name: "Adonis",
  },
  {
    id: "adora-token",
    symbol: "ara",
    name: "Adora",
  },
  {
    id: "adroverse",
    symbol: "adr",
    name: "Adroverse",
  },
  {
    id: "adshares",
    symbol: "ads",
    name: "Adshares",
  },
  {
    id: "adtoken",
    symbol: "adt",
    name: "adChain",
  },
  {
    id: "advanced-internet-block",
    symbol: "aib",
    name: "Advanced Integrated Blocks",
  },
  {
    id: "advanced-united-continent",
    symbol: "auc",
    name: "Advanced United Continent",
  },
  {
    id: "advantis",
    symbol: "advt",
    name: "Advantis",
  },
  {
    id: "adventure-gold",
    symbol: "agld",
    name: "Adventure Gold",
  },
  {
    id: "adventure-inu",
    symbol: "adinu",
    name: "Adventure Inu",
  },
  {
    id: "adventurer-gold",
    symbol: "gold",
    name: "Adventurer Gold",
  },
  {
    id: "adventure-token",
    symbol: "twa",
    name: "Adventure",
  },
  {
    id: "advertise-coin",
    symbol: "adco",
    name: "Advertise Coin",
  },
  {
    id: "aegis",
    symbol: "ags",
    name: "Aegis",
  },
  {
    id: "aegis-launchpad",
    symbol: "agspad",
    name: "Aegis Launchpad",
  },
  {
    id: "aelf",
    symbol: "elf",
    name: "aelf",
  },
  {
    id: "aelin",
    symbol: "aelin",
    name: "Aelin",
  },
  {
    id: "aelysir",
    symbol: "ael",
    name: "Aelysir",
  },
  {
    id: "aen-smart-token",
    symbol: "aens",
    name: "AEN Smart",
  },
  {
    id: "aeon",
    symbol: "aeon",
    name: "Aeon",
  },
  {
    id: "aerarium-fi",
    symbol: "aera",
    name: "Aerarium Fi",
  },
  {
    id: "aerdrop",
    symbol: "aer",
    name: "Aerdrop",
  },
  {
    id: "aergo",
    symbol: "aergo",
    name: "Aergo",
  },
  {
    id: "aerochain",
    symbol: "aero-v2",
    name: "Aerochain Coin V2",
  },
  {
    id: "aeron",
    symbol: "arnx",
    name: "Aeron",
  },
  {
    id: "aerotoken",
    symbol: "aet",
    name: "AEROTOKEN",
  },
  {
    id: "aerotyne",
    symbol: "atyne",
    name: "Aerotyne",
  },
  {
    id: "aerovek-aviation",
    symbol: "aero",
    name: "Aerovek Aviation",
  },
  {
    id: "aeternity",
    symbol: "ae",
    name: "Aeternity",
  },
  {
    id: "aetherius",
    symbol: "aeth",
    name: "Aetherius",
  },
  {
    id: "aetherv2",
    symbol: "ath",
    name: "AetherV2",
  },
  {
    id: "aeur",
    symbol: "aeur",
    name: "AEUR",
  },
  {
    id: "aezora",
    symbol: "azr",
    name: "Azzure",
  },
  {
    id: "afen-blockchain",
    symbol: "afen",
    name: "AFEN Blockchain",
  },
  {
    id: "affinity",
    symbol: "afnty",
    name: "Affinity",
  },
  {
    id: "affyn",
    symbol: "fyn",
    name: "Affyn",
  },
  {
    id: "afin-coin",
    symbol: "afin",
    name: "Asian Fintech",
  },
  {
    id: "afkdao",
    symbol: "afk",
    name: "AFKDAO",
  },
  {
    id: "afrep",
    symbol: "afrep",
    name: "Afrep",
  },
  {
    id: "afreum",
    symbol: "afr",
    name: "Afreum",
  },
  {
    id: "afrix",
    symbol: "afx",
    name: "Afrix",
  },
  {
    id: "afrostar",
    symbol: "afro",
    name: "Afrostar",
  },
  {
    id: "afyonspor-fan-token",
    symbol: "afyon",
    name: "Afyonspor Fan Token",
  },
  {
    id: "aga-carbon-credit",
    symbol: "agac",
    name: "AGA Carbon Credit",
  },
  {
    id: "aga-carbon-rewards",
    symbol: "acar",
    name: "AGA Carbon Rewards",
  },
  {
    id: "again-project",
    symbol: "again",
    name: "Again Project",
  },
  {
    id: "agame",
    symbol: "ag",
    name: "AGAME",
  },
  {
    id: "aga-rewards",
    symbol: "edc",
    name: "Edcoin",
  },
  {
    id: "aga-rewards-2",
    symbol: "agar",
    name: "AGA Rewards",
  },
  {
    id: "aga-token",
    symbol: "aga",
    name: "AGA",
  },
  {
    id: "agavecoin",
    symbol: "agvc",
    name: "AgaveCoin",
  },
  {
    id: "agave-token",
    symbol: "agve",
    name: "Agave",
  },
  {
    id: "agenor",
    symbol: "age",
    name: "Agenor",
  },
  {
    id: "ageofgods",
    symbol: "aog",
    name: "AgeOfGods",
  },
  {
    id: "age-of-knights",
    symbol: "gem",
    name: "Age Of Knights",
  },
  {
    id: "age-of-tanks",
    symbol: "a.o.t",
    name: "Age Of Tanks",
  },
  {
    id: "age-of-zalmoxis-koson",
    symbol: "koson",
    name: "Age of Zalmoxis KOSON",
  },
  {
    id: "ageur",
    symbol: "ageur",
    name: "agEUR",
  },
  {
    id: "ageur-wormhole",
    symbol: "ageur",
    name: "agEUR (Wormhole)",
  },
  {
    id: "aggle-io",
    symbol: "aggl",
    name: "aggle.io",
  },
  {
    id: "aggregated-finance",
    symbol: "agfi",
    name: "Aggregated Finance",
  },
  {
    id: "agile",
    symbol: "agl",
    name: "Agile",
  },
  {
    id: "agora-defi",
    symbol: "agora",
    name: "Agora Defi",
  },
  {
    id: "agoras-currency-of-tau",
    symbol: "agrs",
    name: "Agoras: Currency of Tau",
  },
  {
    id: "agoric",
    symbol: "bld",
    name: "Agoric",
  },
  {
    id: "agpc",
    symbol: "agpc",
    name: "AGPC",
  },
  {
    id: "agrello",
    symbol: "dlt",
    name: "Agrello",
  },
  {
    id: "agricoin",
    symbol: "agn",
    name: "Agricoin",
  },
  {
    id: "agrinoble",
    symbol: "agn",
    name: "Agrinoble",
  },
  {
    id: "agrinovuscoin",
    symbol: "agri",
    name: "AgriNovusCoin",
  },
  {
    id: "agrocash-x",
    symbol: "xagc",
    name: "AgroCash X",
  },
  {
    id: "agro-global",
    symbol: "agro",
    name: "Agro Global",
  },
  {
    id: "agronomist",
    symbol: "agte",
    name: "Agronomist",
  },
  {
    id: "agx-coin",
    symbol: "agx",
    name: "AGX Coin",
  },
  {
    id: "ahatoken",
    symbol: "aht",
    name: "AhaToken",
  },
  {
    id: "a-hunters-dream",
    symbol: "caw",
    name: "A Hunters Dream",
  },
  {
    id: "aibra",
    symbol: "abr",
    name: "AIBRA",
  },
  {
    id: "aichain",
    symbol: "ait",
    name: "AICHAIN",
  },
  {
    id: "aicon",
    symbol: "aico",
    name: "Aicon",
  },
  {
    id: "aidcoin",
    symbol: "aid",
    name: "AidCoin",
  },
  {
    id: "aidi-finance",
    symbol: "aidi",
    name: "Aidi Finance",
  },
  {
    id: "aidi-inu",
    symbol: "aidi",
    name: "Aidi Inu",
  },
  {
    id: "ai-doctor",
    symbol: "aidoc",
    name: "AI Doctor",
  },
  {
    id: "aidos-kuneen",
    symbol: "adk",
    name: "Aidos Kuneen",
  },
  {
    id: "ailink-token",
    symbol: "ali",
    name: "AiLink",
  },
  {
    id: "aimedis-2",
    symbol: "aimx",
    name: "Aimedis",
  },
  {
    id: "ai-network",
    symbol: "ain",
    name: "AI Network",
  },
  {
    id: "ainu-token",
    symbol: "ainu",
    name: "Ainu",
  },
  {
    id: "aion",
    symbol: "aion",
    name: "Aion",
  },
  {
    id: "aioz-network",
    symbol: "aioz",
    name: "AIOZ Network",
  },
  {
    id: "aipro",
    symbol: "aipro",
    name: "AIPRO",
  },
  {
    id: "airbloc-protocol",
    symbol: "abl",
    name: "Airbloc",
  },
  {
    id: "airbnb-tokenized-stock-zipmex",
    symbol: "abnb",
    name: "Airbnb Tokenized Stock Zipmex",
  },
  {
    id: "aircoin-2",
    symbol: "air",
    name: "AirCoin",
  },
  {
    id: "aircoins",
    symbol: "airx",
    name: "Aircoins",
  },
  {
    id: "airdrop-world",
    symbol: "awt",
    name: "Airdrop World",
  },
  {
    id: "airight",
    symbol: "airi",
    name: "aiRight",
  },
  {
    id: "airnft-token",
    symbol: "airt",
    name: "AirNFT",
  },
  {
    id: "airpay",
    symbol: "airpay",
    name: "AirPay",
  },
  {
    id: "airswap",
    symbol: "ast",
    name: "AirSwap",
  },
  {
    id: "airtnt",
    symbol: "airtnt",
    name: "AirTnT",
  },
  {
    id: "aisf",
    symbol: "agt",
    name: "AISF",
  },
  {
    id: "aiwork",
    symbol: "awo",
    name: "AiWork",
  },
  {
    id: "ajeverse",
    symbol: "aje",
    name: "Ajeverse",
  },
  {
    id: "ajuna-network",
    symbol: "baju",
    name: "Ajuna Network",
  },
  {
    id: "akash-network",
    symbol: "akt",
    name: "Akash Network",
  },
  {
    id: "aki-inu",
    symbol: "aki",
    name: "Aki Inu",
  },
  {
    id: "akil-coin",
    symbol: "akl",
    name: "Akil Coin",
  },
  {
    id: "akita-inu",
    symbol: "akita",
    name: "Akita Inu",
  },
  {
    id: "akita-inu-asa",
    symbol: "akta",
    name: "Akita Inu ASA",
  },
  {
    id: "akitavax",
    symbol: "akitax",
    name: "Akitavax",
  },
  {
    id: "akitsuki",
    symbol: "aki",
    name: "Akitsuki",
  },
  {
    id: "akoin",
    symbol: "akn",
    name: "Akoin",
  },
  {
    id: "akroma",
    symbol: "aka",
    name: "Akroma",
  },
  {
    id: "akropolis",
    symbol: "akro",
    name: "Akropolis",
  },
  {
    id: "akropolis-delphi",
    symbol: "adel",
    name: "Delphi",
  },
  {
    id: "aktio",
    symbol: "aktio",
    name: "Aktio",
  },
  {
    id: "aladdin-cvxcrv",
    symbol: "acrv",
    name: "Aladdin cvxCRV",
  },
  {
    id: "aladdin-dao",
    symbol: "ald",
    name: "Aladdin DAO",
  },
  {
    id: "alanyaspor-fan-token",
    symbol: "ala",
    name: "Alanyaspor Fan Token",
  },
  {
    id: "alaya",
    symbol: "atp",
    name: "Alaya",
  },
  {
    id: "albedo",
    symbol: "albedo",
    name: "ALBEDO",
  },
  {
    id: "alcazar",
    symbol: "alcazar",
    name: "Alcazar",
  },
  {
    id: "alchemist",
    symbol: "mist",
    name: "Alchemist",
  },
  {
    id: "alchemix",
    symbol: "alcx",
    name: "Alchemix",
  },
  {
    id: "alchemix-eth",
    symbol: "aleth",
    name: "Alchemix ETH",
  },
  {
    id: "alchemix-usd",
    symbol: "alusd",
    name: "Alchemix USD",
  },
  {
    id: "alchemy-pay",
    symbol: "ach",
    name: "Alchemy Pay",
  },
  {
    id: "aldrin",
    symbol: "rin",
    name: "Aldrin",
  },
  {
    id: "aleph",
    symbol: "aleph",
    name: "Aleph.im",
  },
  {
    id: "alephium",
    symbol: "alph",
    name: "Alephium",
  },
  {
    id: "aleph-zero",
    symbol: "azero",
    name: "Aleph Zero",
  },
  {
    id: "alethea-artificial-liquid-intelligence-token",
    symbol: "ali",
    name: "Artificial Liquid Intelligence",
  },
  {
    id: "alex",
    symbol: "alex",
    name: "Alex",
  },
  {
    id: "alexgo",
    symbol: "alex",
    name: "ALEX Lab",
  },
  {
    id: "alfa-romeo-racing-orlen-fan-token",
    symbol: "sauber",
    name: "Alfa Romeo Racing ORLEN Fan Token",
  },
  {
    id: "alfweb3project",
    symbol: "alfw3",
    name: "ALFweb3Project",
  },
  {
    id: "algebra",
    symbol: "algb",
    name: "Algebra",
  },
  {
    id: "algoblocks",
    symbol: "algoblk",
    name: "AlgoBlocks",
  },
  {
    id: "algodao",
    symbol: "adao",
    name: "AlgoDAO",
  },
  {
    id: "algodex",
    symbol: "algx",
    name: "Algodex",
  },
  {
    id: "algofund",
    symbol: "algf",
    name: "AlgoFund",
  },
  {
    id: "algogems",
    symbol: "gems",
    name: "AlgoGems",
  },
  {
    id: "algomint",
    symbol: "gomint",
    name: "Algomint",
  },
  {
    id: "algopad",
    symbol: "algopad",
    name: "AlgoPad",
  },
  {
    id: "algopainter",
    symbol: "algop",
    name: "AlgoPainter",
  },
  {
    id: "algorand",
    symbol: "algo",
    name: "Algorand",
  },
  {
    id: "algory",
    symbol: "alg",
    name: "Algory",
  },
  {
    id: "algostable",
    symbol: "stbl",
    name: "AlgoStable",
  },
  {
    id: "algostake",
    symbol: "stke",
    name: "AlgoStake",
  },
  {
    id: "algovest",
    symbol: "avs",
    name: "AlgoVest",
  },
  {
    id: "alibabacoin",
    symbol: "abbc",
    name: "ABBC",
  },
  {
    id: "alibaba-tokenized-stock-defichain",
    symbol: "dbaba",
    name: "Alibaba Tokenized Stock Defichain",
  },
  {
    id: "alibaba-tokenized-stock-zipmex",
    symbol: "baba",
    name: "Alibaba Tokenized Stock Zipmex",
  },
  {
    id: "alicoin",
    symbol: "alicn",
    name: "Alicoin",
  },
  {
    id: "alien-chicken-farm",
    symbol: "acf",
    name: "Alien Chicken Farm",
  },
  {
    id: "alien-inu",
    symbol: "alien",
    name: "Alien Inu",
  },
  {
    id: "alienswap",
    symbol: "alien",
    name: "AlienSwap",
  },
  {
    id: "alien-wars-gold",
    symbol: "awg",
    name: "Alien Wars Gold",
  },
  {
    id: "alien-worlds",
    symbol: "tlm",
    name: "Alien Worlds",
  },
  {
    id: "alinx",
    symbol: "alix",
    name: "AlinX",
  },
  {
    id: "alita",
    symbol: "ali",
    name: "Alita",
  },
  {
    id: "alita-network",
    symbol: "alita",
    name: "Alita Network",
  },
  {
    id: "alitas",
    symbol: "alt",
    name: "Alitas",
  },
  {
    id: "alium-finance",
    symbol: "alm",
    name: "Alium Finance",
  },
  {
    id: "alkemi-network-dao-token",
    symbol: "alk",
    name: "Alkemi Network DAO",
  },
  {
    id: "alkimi",
    symbol: "$ads",
    name: "Alkimi",
  },
  {
    id: "all-art",
    symbol: "aart",
    name: "ALL.ART",
  },
  {
    id: "all-best-ico-satoshi",
    symbol: "allbi",
    name: "All Best ICO",
  },
  {
    id: "allbridge",
    symbol: "abr",
    name: "Allbridge",
  },
  {
    id: "all-coins-yield-capital",
    symbol: "acyc",
    name: "All Coins Yield Capital",
  },
  {
    id: "alldex-alliance",
    symbol: "axa",
    name: "Alldex Alliance",
  },
  {
    id: "allianceblock",
    symbol: "albt",
    name: "AllianceBlock",
  },
  {
    id: "alliance-fan-token",
    symbol: "all",
    name: "Alliance Fan Token",
  },
  {
    id: "alliance-token",
    symbol: "alto",
    name: "Alliance",
  },
  {
    id: "alliance-x-trading",
    symbol: "axt",
    name: "Alliance X Trading",
  },
  {
    id: "all-in",
    symbol: "allin",
    name: "All In",
  },
  {
    id: "allium-finance",
    symbol: "alm",
    name: "Allium Finance",
  },
  {
    id: "all-me",
    symbol: "me",
    name: "All.me",
  },
  {
    id: "alloy-project",
    symbol: "xao",
    name: "Alloy Project",
  },
  {
    id: "allpaycoin",
    symbol: "apcg",
    name: "ALLPAYCOIN",
  },
  {
    id: "allsafe",
    symbol: "asafe",
    name: "AllSafe",
  },
  {
    id: "all-sports-2",
    symbol: "soc",
    name: "All Sports",
  },
  {
    id: "allstars",
    symbol: "asx",
    name: "AllStars",
  },
  {
    id: "all-time-high",
    symbol: "ath",
    name: "All Time High",
  },
  {
    id: "alluo",
    symbol: "alluo",
    name: "Alluo",
  },
  {
    id: "ally",
    symbol: "aly",
    name: "Ally",
  },
  {
    id: "ally-direct",
    symbol: "drct",
    name: "Ally Direct",
  },
  {
    id: "almond",
    symbol: "alm",
    name: "Almond",
  },
  {
    id: "alnair-finance-nika",
    symbol: "nika",
    name: "Alnair Finance NIKA",
  },
  {
    id: "alnassr-fc-fan-token",
    symbol: "nassr",
    name: "Alnassr FC Fan Token",
  },
  {
    id: "aloha",
    symbol: "aloha",
    name: "Aloha",
  },
  {
    id: "alongside-crypto-market-index",
    symbol: "amkt",
    name: "Alongside Crypto Market Index",
  },
  {
    id: "alora",
    symbol: "alora",
    name: "Alora",
  },
  {
    id: "alpaca",
    symbol: "alpa",
    name: "Alpaca City",
  },
  {
    id: "alpaca-finance",
    symbol: "alpaca",
    name: "Alpaca Finance",
  },
  {
    id: "alpha5",
    symbol: "a5t",
    name: "Alpha5",
  },
  {
    id: "alpha-brain-capital-2",
    symbol: "acap",
    name: "Alpha Capital",
  },
  {
    id: "alphacoin",
    symbol: "alpha",
    name: "AlphaCoin",
  },
  {
    id: "alpha-coin",
    symbol: "apc",
    name: "Alpha Coin",
  },
  {
    id: "alphadex",
    symbol: "dex",
    name: "AlphaDex",
  },
  {
    id: "alpha-dex",
    symbol: "roar",
    name: "Alpha DEX",
  },
  {
    id: "alphafi",
    symbol: "alf",
    name: "ALPHAFI",
  },
  {
    id: "alpha-finance",
    symbol: "alpha",
    name: "Alpha Venture DAO",
  },
  {
    id: "alpha-genesis",
    symbol: "agen",
    name: "Alpha Genesis",
  },
  {
    id: "alpha-labz",
    symbol: "$alpha",
    name: "Alpha Labz",
  },
  {
    id: "alphalink",
    symbol: "ank",
    name: "AlphaLink",
  },
  {
    id: "alpha-pad",
    symbol: "apad",
    name: "Alpha Pad",
  },
  {
    id: "alpha-quark-token",
    symbol: "aqt",
    name: "Alpha Quark",
  },
  {
    id: "alpha-shares-v2",
    symbol: "$alpha",
    name: "Alpha Shares V2",
  },
  {
    id: "alphatoken",
    symbol: ".alpha",
    name: ".Alpha",
  },
  {
    id: "alphr",
    symbol: "alphr",
    name: "Alphr",
  },
  {
    id: "alpine-f1-team-fan-token",
    symbol: "alpine",
    name: "Alpine F1 Team Fan Token",
  },
  {
    id: "alrihla",
    symbol: "alrihla",
    name: "Alrihla",
  },
  {
    id: "alta-finance",
    symbol: "alta",
    name: "Alta Finance",
  },
  {
    id: "altair",
    symbol: "air",
    name: "Altair",
  },
  {
    id: "altava",
    symbol: "tava",
    name: "ALTAVA",
  },
  {
    id: "altbase",
    symbol: "altb",
    name: "Altbase",
  },
  {
    id: "alt-coin",
    symbol: "alt",
    name: "Alt Coin",
  },
  {
    id: "altcommunity-coin",
    symbol: "altom",
    name: "ALTOM",
  },
  {
    id: "alter",
    symbol: "alter",
    name: "Alter",
  },
  {
    id: "altered-state-token",
    symbol: "asto",
    name: "Altered State Machine",
  },
  {
    id: "alternatemoney",
    symbol: "am",
    name: "AlternateMoney",
  },
  {
    id: "alt-estate",
    symbol: "alt",
    name: "AltEstate",
  },
  {
    id: "altfins",
    symbol: "afins",
    name: "altFINS",
  },
  {
    id: "altfolio",
    symbol: "alt",
    name: "altfolio",
  },
  {
    id: "altimatum",
    symbol: "$alti",
    name: "Altimatum",
  },
  {
    id: "altmarkets-coin",
    symbol: "altm",
    name: "Altmarkets Coin",
  },
  {
    id: "altpay-finance",
    symbol: "altpay",
    name: "ALTPAY FINANCE",
  },
  {
    id: "altrucoin-2",
    symbol: "altrucoin",
    name: "Altrucoin",
  },
  {
    id: "altswitch",
    symbol: "alts",
    name: "AltSwitch",
  },
  {
    id: "altura",
    symbol: "alu",
    name: "Altura",
  },
  {
    id: "aluna",
    symbol: "aln",
    name: "Aluna",
  },
  {
    id: "alvey-chain",
    symbol: "walv",
    name: "Alvey Chain",
  },
  {
    id: "alyattes",
    symbol: "alya",
    name: "Alyattes",
  },
  {
    id: "amasa",
    symbol: "amas",
    name: "Amasa",
  },
  {
    id: "amaten",
    symbol: "ama",
    name: "Amaten",
  },
  {
    id: "amateras",
    symbol: "amt",
    name: "Amateras",
  },
  {
    id: "amaterasufi-izanagi",
    symbol: "iza",
    name: "AmaterasuFi Izanagi",
  },
  {
    id: "amatsu-mikaboshi",
    symbol: "mikaboshi",
    name: "Amatsu-Mikaboshi",
  },
  {
    id: "amaurot",
    symbol: "ama",
    name: "AMAUROT",
  },
  {
    id: "amax-network",
    symbol: "amax",
    name: "AMAX Network",
  },
  {
    id: "amazingdoge",
    symbol: "adoge",
    name: "AmazingDoge",
  },
  {
    id: "amazingteamdao",
    symbol: "amazingteam",
    name: "AmazingTeamDAO",
  },
  {
    id: "amazonacoin",
    symbol: "amz",
    name: "AmazonasCoin",
  },
  {
    id: "amazon-tokenized-stock-defichain",
    symbol: "damzn",
    name: "Amazon Tokenized Stock Defichain",
  },
  {
    id: "amazon-tokenized-stock-zipmex",
    symbol: "amzn",
    name: "Amazon Tokenized Stock Zipmex",
  },
  {
    id: "amazy",
    symbol: "azy",
    name: "Amazy",
  },
  {
    id: "amazy-move-token",
    symbol: "amt",
    name: "Amazy Move Token",
  },
  {
    id: "amber",
    symbol: "amb",
    name: "AirDAO",
  },
  {
    id: "ambire-wallet",
    symbol: "wallet",
    name: "Ambire Wallet",
  },
  {
    id: "amc-entertainment-preferred-tokenized-stock-on-ftx",
    symbol: "apeamc",
    name: "AMC Entertainment Preferred Tokenized Stock on FTX",
  },
  {
    id: "amc-fight-night",
    symbol: "amc",
    name: "AMC Fight Night",
  },
  {
    id: "amdg-token",
    symbol: "amdg",
    name: "AMDG",
  },
  {
    id: "amepay",
    symbol: "ame",
    name: "AME Chain",
  },
  {
    id: "american-shiba",
    symbol: "ushiba",
    name: "American Shiba",
  },
  {
    id: "ameta",
    symbol: "$aplus",
    name: "AMETA",
  },
  {
    id: "amgen",
    symbol: "amg",
    name: "Amgen",
  },
  {
    id: "amis",
    symbol: "amis",
    name: "AMIS",
  },
  {
    id: "amlp",
    symbol: "amlp",
    name: "aMLP",
  },
  {
    id: "ammf",
    symbol: "ammf",
    name: "aMMF",
  },
  {
    id: "ammyi-coin",
    symbol: "ami",
    name: "AMMYI Coin",
  },
  {
    id: "amnext",
    symbol: "amc",
    name: "Amnext",
  },
  {
    id: "amo",
    symbol: "amo",
    name: "AMO Coin",
  },
  {
    id: "amon",
    symbol: "amn",
    name: "Amon",
  },
  {
    id: "amond",
    symbol: "amon",
    name: "AmonD",
  },
  {
    id: "amoveo",
    symbol: "veo",
    name: "Amoveo",
  },
  {
    id: "ampleforth",
    symbol: "ampl",
    name: "Ampleforth",
  },
  {
    id: "ampleforth-governance-token",
    symbol: "forth",
    name: "Ampleforth Governance",
  },
  {
    id: "ampleswap",
    symbol: "ample",
    name: "AmpleSwap",
  },
  {
    id: "amplifi",
    symbol: "amplifi",
    name: "AmpliFi",
  },
  {
    id: "amplify",
    symbol: "ampt",
    name: "Amplify",
  },
  {
    id: "amplitude",
    symbol: "ampe",
    name: "Amplitude",
  },
  {
    id: "ampnet",
    symbol: "aapx",
    name: "AMPnet",
  },
  {
    id: "amp-token",
    symbol: "amp",
    name: "Amp",
  },
  {
    id: "amulet-staked-sol",
    symbol: "amtsol",
    name: "Amulet Staked SOL",
  },
  {
    id: "amun-defi-index",
    symbol: "dfi",
    name: "Amun DeFi Index",
  },
  {
    id: "amz-coin",
    symbol: "amz",
    name: "AMZ Coin",
  },
  {
    id: "anarchy",
    symbol: "anarchy",
    name: "Anarchy",
  },
  {
    id: "a-nation",
    symbol: "anation",
    name: "A-Nation",
  },
  {
    id: "anchor-beth-token",
    symbol: "beth",
    name: "Anchor bETH Token",
  },
  {
    id: "anchor-neural-world-token",
    symbol: "anw",
    name: "Anchor Neural World",
  },
  {
    id: "anchor-protocol",
    symbol: "anc",
    name: "Anchor Protocol",
  },
  {
    id: "anchorswap",
    symbol: "anchor",
    name: "AnchorSwap",
  },
  {
    id: "anchorust",
    symbol: "aust",
    name: "AnchorUST",
  },
  {
    id: "ancient-kingdom",
    symbol: "dom",
    name: "Ancient Kingdom",
  },
  {
    id: "ancient-raid",
    symbol: "raid",
    name: "Ancient Raid",
  },
  {
    id: "andronodes",
    symbol: "andro",
    name: "AndroNodes",
  },
  {
    id: "anduschain",
    symbol: "deb",
    name: "Anduschain",
  },
  {
    id: "angel-dust",
    symbol: "ad",
    name: "Angel Dust",
  },
  {
    id: "angel-nodes",
    symbol: "angel",
    name: "Angel Nodes",
  },
  {
    id: "angelscreed",
    symbol: "angel",
    name: "AngelsCreed",
  },
  {
    id: "angle-protocol",
    symbol: "angle",
    name: "ANGLE",
  },
  {
    id: "angola",
    symbol: "agla",
    name: "Angola",
  },
  {
    id: "angryb",
    symbol: "anb",
    name: "Angryb",
  },
  {
    id: "angry-doge",
    symbol: "anfd",
    name: "Angry Doge",
  },
  {
    id: "anifi-world",
    symbol: "anifi",
    name: "AniFi World",
  },
  {
    id: "animal-concerts-token",
    symbol: "anml",
    name: "Animal Concerts",
  },
  {
    id: "animal-farm",
    symbol: "afd",
    name: "Animal Farm Dogs",
  },
  {
    id: "animecoin",
    symbol: "ani",
    name: "Animecoin",
  },
  {
    id: "anime-token",
    symbol: "ani",
    name: "Anime",
  },
  {
    id: "animverse",
    symbol: "anm",
    name: "Animverse",
  },
  {
    id: "aniverse",
    symbol: "anv",
    name: "Aniverse",
  },
  {
    id: "anji",
    symbol: "anji",
    name: "Anji",
  },
  {
    id: "ankaragucu-fan-token",
    symbol: "anka",
    name: "Ankaragücü Fan Token",
  },
  {
    id: "ankr",
    symbol: "ankr",
    name: "Ankr",
  },
  {
    id: "ankreth",
    symbol: "ankreth",
    name: "Ankr Staked ETH",
  },
  {
    id: "ankr-reward-earning-matic",
    symbol: "ankrmatic",
    name: "Ankr Staked MATIC",
  },
  {
    id: "ankr-staked-bnb",
    symbol: "ankrbnb",
    name: "Ankr Staked BNB",
  },
  {
    id: "annex",
    symbol: "ann",
    name: "Annex Finance",
  },
  {
    id: "anomus-coin",
    symbol: "anom",
    name: "Anomus Coin",
  },
  {
    id: "anon",
    symbol: "anon",
    name: "ANON",
  },
  {
    id: "anonfloki",
    symbol: "anonfloki",
    name: "AnonFloki",
  },
  {
    id: "anon-inu",
    symbol: "ainu",
    name: "Anon Inu",
  },
  {
    id: "anonpay",
    symbol: "apay",
    name: "AnonPay",
  },
  {
    id: "anonydoxx",
    symbol: "adxx",
    name: "AnonyDoxx",
  },
  {
    id: "anonymous-bsc",
    symbol: "anon",
    name: "Anonymous BSC",
  },
  {
    id: "another-world",
    symbol: "awm",
    name: "Another World",
  },
  {
    id: "anrkey-x",
    symbol: "$anrx",
    name: "AnRKey X",
  },
  {
    id: "answer-governance",
    symbol: "agov",
    name: "Answer Governance",
  },
  {
    id: "answerly",
    symbol: "ansr",
    name: "Answerly",
  },
  {
    id: "antalyaspor",
    symbol: "akrep",
    name: "Antalyaspor",
  },
  {
    id: "antedao",
    symbol: "ante",
    name: "AnteDAO",
  },
  {
    id: "antex",
    symbol: "antex",
    name: "Antex",
  },
  {
    id: "antgold",
    symbol: "antg",
    name: "AntGold",
  },
  {
    id: "antiample",
    symbol: "xamp",
    name: "Antiample",
  },
  {
    id: "antimatter",
    symbol: "matter",
    name: "AntiMatter",
  },
  {
    id: "antnetworx",
    symbol: "antx",
    name: "AntNetworX",
  },
  {
    id: "any-blocknet",
    symbol: "ablock",
    name: "ANY Blocknet",
  },
  {
    id: "anypad",
    symbol: "apad",
    name: "Anypad",
  },
  {
    id: "anyswap",
    symbol: "any",
    name: "Anyswap",
  },
  {
    id: "aok",
    symbol: "aok",
    name: "AOK",
  },
  {
    id: "aonea-coin",
    symbol: "a1a",
    name: "Aonea Coin",
  },
  {
    id: "aos",
    symbol: "aos",
    name: "AOS",
  },
  {
    id: "apch",
    symbol: "apch",
    name: "APCH",
  },
  {
    id: "ape",
    symbol: "ape",
    name: "APE",
  },
  {
    id: "apecoin",
    symbol: "ape",
    name: "ApeCoin",
  },
  {
    id: "apedoge",
    symbol: "aped",
    name: "Apedoge",
  },
  {
    id: "ape-finance",
    symbol: "apefi",
    name: "Ape Finance",
  },
  {
    id: "apefund",
    symbol: "apefund",
    name: "ApeFund",
  },
  {
    id: "ape-fun-token",
    symbol: "aft",
    name: "Ape Fun",
  },
  {
    id: "apegrow",
    symbol: "apegrow",
    name: "ApeGrow",
  },
  {
    id: "ape-in",
    symbol: "apein",
    name: "Ape In",
  },
  {
    id: "ape_in_records",
    symbol: "air",
    name: "Ape In Records",
  },
  {
    id: "apejet",
    symbol: "jet",
    name: "ApeJet",
  },
  {
    id: "ape-king",
    symbol: "apk",
    name: "Ape King",
  },
  {
    id: "apemove",
    symbol: "ape",
    name: "APEmove",
  },
  {
    id: "apenft",
    symbol: "nft",
    name: "APENFT",
  },
  {
    id: "apeparkdao",
    symbol: "apd",
    name: "ApeParkDAO",
  },
  {
    id: "ape-punk",
    symbol: "ape$",
    name: "APE Punk",
  },
  {
    id: "apes-token",
    symbol: "apes",
    name: "Apes",
  },
  {
    id: "apeswap-finance",
    symbol: "banana",
    name: "ApeSwap",
  },
  {
    id: "ape-universe",
    symbol: "apeu",
    name: "Ape Universe",
  },
  {
    id: "apeusd",
    symbol: "apeusd",
    name: "ApeUSD",
  },
  {
    id: "apexit-finance",
    symbol: "apex",
    name: "ApeXit Finance",
  },
  {
    id: "apex-predator",
    symbol: "apex",
    name: "Apex Predator",
  },
  {
    id: "apex-protocol",
    symbol: "apxp",
    name: "APEX Protocol",
  },
  {
    id: "apex-token-2",
    symbol: "apex",
    name: "ApeX",
  },
  {
    id: "api3",
    symbol: "api3",
    name: "API3",
  },
  {
    id: "apidae",
    symbol: "apt",
    name: "Apidae",
  },
  {
    id: "apish-me",
    symbol: "apish",
    name: "Apish Me",
  },
  {
    id: "apix",
    symbol: "apix",
    name: "APIX",
  },
  {
    id: "apm-coin",
    symbol: "apm",
    name: "apM Coin",
  },
  {
    id: "apocalypse",
    symbol: "apoc",
    name: "Apocalypse",
  },
  {
    id: "apollo",
    symbol: "apl",
    name: "Apollo",
  },
  {
    id: "apollo-coin",
    symbol: "apx",
    name: "Apollo Coin",
  },
  {
    id: "apollo-crypto",
    symbol: "apollo",
    name: "Apollo Crypto",
  },
  {
    id: "apollofi",
    symbol: "apo",
    name: "ApolloFi",
  },
  {
    id: "apollon-limassol",
    symbol: "apl",
    name: "Apollon Limassol Fan Token",
  },
  {
    id: "apollox-2",
    symbol: "apx",
    name: "ApolloX",
  },
  {
    id: "apoyield",
    symbol: "soul",
    name: "APOyield",
  },
  {
    id: "appcoins",
    symbol: "appc",
    name: "AppCoins",
  },
  {
    id: "appics",
    symbol: "apx",
    name: "Appics",
  },
  {
    id: "apple",
    symbol: "apple",
    name: "Apple",
  },
  {
    id: "apple-binemon",
    symbol: "amb",
    name: "Apple (Binemon)",
  },
  {
    id: "apple-fruit",
    symbol: "apple",
    name: "Apple Fruit",
  },
  {
    id: "apple-protocol-token",
    symbol: "aapl",
    name: "Apple Protocol",
  },
  {
    id: "applepye",
    symbol: "applepye",
    name: "APPLEPYE",
  },
  {
    id: "appleswap",
    symbol: "apple",
    name: "AppleSwap",
  },
  {
    id: "apple-tokenized-stock-defichain",
    symbol: "daapl",
    name: "Apple Tokenized Stock Defichain",
  },
  {
    id: "apricot",
    symbol: "aprt",
    name: "Apricot",
  },
  {
    id: "april",
    symbol: "april",
    name: "April",
  },
  {
    id: "aprobit",
    symbol: "abt",
    name: "Aprobit",
  },
  {
    id: "apron",
    symbol: "apn",
    name: "Apron",
  },
  {
    id: "aptoge",
    symbol: "aptoge",
    name: "Aptoge",
  },
  {
    id: "aptos",
    symbol: "apt",
    name: "Aptos",
  },
  {
    id: "aptos-launch-token",
    symbol: "alt",
    name: "AptosLaunch Token",
  },
  {
    id: "apwine",
    symbol: "apw",
    name: "APWine",
  },
  {
    id: "apy-finance",
    symbol: "apy",
    name: "APY.Finance",
  },
  {
    id: "apyswap",
    symbol: "apys",
    name: "APYSwap",
  },
  {
    id: "apy-vision",
    symbol: "vision",
    name: "APY.vision",
  },
  {
    id: "aqar-chain",
    symbol: "aqr",
    name: "Aqar Chain",
  },
  {
    id: "aquadao",
    symbol: "$aqua",
    name: "AquaDAO",
  },
  {
    id: "aqua-goat",
    symbol: "aquagoat",
    name: "Aqua Goat",
  },
  {
    id: "aquanee",
    symbol: "aqdc",
    name: "Aquanee",
  },
  {
    id: "aquari",
    symbol: "aquari",
    name: "Aquari",
  },
  {
    id: "aquarius",
    symbol: "aqua",
    name: "Aquarius",
  },
  {
    id: "aquariuscoin",
    symbol: "arco",
    name: "AquariusCoin",
  },
  {
    id: "aquarius-fi",
    symbol: "aqu",
    name: "Aquarius.Fi",
  },
  {
    id: "aquatank",
    symbol: "aqua",
    name: "AquaTank",
  },
  {
    id: "aqua-unicorn",
    symbol: "auni",
    name: "Aqua Unicorn",
  },
  {
    id: "arabella",
    symbol: "ablc",
    name: "ARABELLA",
  },
  {
    id: "arabian-doge",
    symbol: "$adoge",
    name: "Arabian Doge",
  },
  {
    id: "arabic",
    symbol: "abic",
    name: "Arabic",
  },
  {
    id: "arable-protocol",
    symbol: "acre",
    name: "Arable Protocol",
  },
  {
    id: "arable-usd",
    symbol: "arusd",
    name: "Arable USD",
  },
  {
    id: "aragon",
    symbol: "ant",
    name: "Aragon",
  },
  {
    id: "arata",
    symbol: "arata",
    name: "Arata",
  },
  {
    id: "ara-token",
    symbol: "ara",
    name: "Ara",
  },
  {
    id: "araw-token",
    symbol: "araw",
    name: "ARAW",
  },
  {
    id: "arbidex",
    symbol: "abx",
    name: "Arbidex",
  },
  {
    id: "arbidoge",
    symbol: "adoge",
    name: "ArbiDoge",
  },
  {
    id: "arbinyan",
    symbol: "nyan",
    name: "ArbiNYAN",
  },
  {
    id: "arbis-finance",
    symbol: "arbis",
    name: "Arbis Finance",
  },
  {
    id: "arbismart-token",
    symbol: "rbis",
    name: "ArbiSmart",
  },
  {
    id: "arbitrage-token",
    symbol: "rbtr",
    name: "Arbitrage Token",
  },
  {
    id: "arb-protocol",
    symbol: "arb",
    name: "ARB Protocol",
  },
  {
    id: "arbucks",
    symbol: "buck",
    name: "Arbucks",
  },
  {
    id: "arbys",
    symbol: "arbys",
    name: "Arbys",
  },
  {
    id: "arc",
    symbol: "arc",
    name: "Arc",
  },
  {
    id: "arcade",
    symbol: "arc",
    name: "Arcade",
  },
  {
    id: "arcade2earn",
    symbol: "arcade",
    name: "Arcade2Earn",
  },
  {
    id: "arcade-canine",
    symbol: "okinu",
    name: "Arcade Canine",
  },
  {
    id: "arcade-kingdoms",
    symbol: "ack",
    name: "Arcade Kingdoms",
  },
  {
    id: "arcadenetwork",
    symbol: "arc",
    name: "ArcadeNetwork",
  },
  {
    id: "arcadia-token",
    symbol: "$arc",
    name: "Arcadia Token",
  },
  {
    id: "arcadium",
    symbol: "arcadium",
    name: "Arcadium",
  },
  {
    id: "arcaneleague",
    symbol: "arcaneleague",
    name: "ArcaneLeague",
  },
  {
    id: "arcane-token",
    symbol: "arcane",
    name: "Arcane Token",
  },
  {
    id: "arcblock",
    symbol: "abt",
    name: "Arcblock",
  },
  {
    id: "arcc",
    symbol: "arcc",
    name: "ARCC",
  },
  {
    id: "arc-finance",
    symbol: "arc",
    name: "Arc Finance",
  },
  {
    id: "arc-governance",
    symbol: "arcx",
    name: "ARC Governance",
  },
  {
    id: "archangel-token",
    symbol: "archa",
    name: "ArchAngel",
  },
  {
    id: "arch-blockchains",
    symbol: "chain",
    name: "Arch Blockchains",
  },
  {
    id: "archer-dao-governance-token",
    symbol: "arch",
    name: "Archer DAO Governance",
  },
  {
    id: "arch-ethereum-web3",
    symbol: "web3",
    name: "Arch Ethereum Web3",
  },
  {
    id: "archethic",
    symbol: "uco",
    name: "Archethic",
  },
  {
    id: "archetypal-network",
    symbol: "actp",
    name: "Archetypal Network",
  },
  {
    id: "archie-neko",
    symbol: "archie",
    name: "Archie Neko",
  },
  {
    id: "arcona",
    symbol: "arcona",
    name: "Arcona",
  },
  {
    id: "arcs",
    symbol: "arx",
    name: "ARCS",
  },
  {
    id: "arcticcoin",
    symbol: "arc",
    name: "Advanced Technology Coin",
  },
  {
    id: "arc-token",
    symbol: "arc",
    name: "Arc Protocol",
  },
  {
    id: "ardana",
    symbol: "dana",
    name: "Ardana",
  },
  {
    id: "ardcoin",
    symbol: "ardx",
    name: "ArdCoin",
  },
  {
    id: "ardor",
    symbol: "ardr",
    name: "Ardor",
  },
  {
    id: "aree-shards",
    symbol: "aes",
    name: "Aree Shards",
  },
  {
    id: "arenaplay",
    symbol: "apc",
    name: "ArenaPlay",
  },
  {
    id: "arena-token",
    symbol: "arena",
    name: "ArenaSwap",
  },
  {
    id: "arenum",
    symbol: "arnm",
    name: "Arenum",
  },
  {
    id: "ares-protocol",
    symbol: "ares",
    name: "Ares Protocol",
  },
  {
    id: "argentine-football-association-fan-token",
    symbol: "arg",
    name: "Argentine Football Association Fan Token",
  },
  {
    id: "argo",
    symbol: "argo",
    name: "ArGoApp",
  },
  {
    id: "argo-2",
    symbol: "argo",
    name: "Argo",
  },
  {
    id: "argo-finance",
    symbol: "argo",
    name: "Argo Finance",
  },
  {
    id: "argon",
    symbol: "argon",
    name: "Argon",
  },
  {
    id: "argonon-helium",
    symbol: "arg",
    name: "Argonon Helium",
  },
  {
    id: "ari10",
    symbol: "ari10",
    name: "Ari10",
  },
  {
    id: "aria-currency",
    symbol: "ria",
    name: "aRIA Currency",
  },
  {
    id: "ariadne",
    symbol: "ardn",
    name: "Ariadne",
  },
  {
    id: "arianee",
    symbol: "aria20",
    name: "Arianee",
  },
  {
    id: "aries-financial-token",
    symbol: "afib",
    name: "Aries Financial",
  },
  {
    id: "arion",
    symbol: "arion",
    name: "Arion",
  },
  {
    id: "arionum",
    symbol: "aro",
    name: "Arionum",
  },
  {
    id: "ari-swap",
    symbol: "ari",
    name: "Ari Swap",
  },
  {
    id: "ariva",
    symbol: "arv",
    name: "Ariva",
  },
  {
    id: "arix",
    symbol: "arix",
    name: "Arix",
  },
  {
    id: "arize",
    symbol: "arz",
    name: "ARize",
  },
  {
    id: "ark",
    symbol: "ark",
    name: "ARK",
  },
  {
    id: "arkadiko-protocol",
    symbol: "diko",
    name: "Arkadiko",
  },
  {
    id: "arkadiko-usda",
    symbol: "usda",
    name: "Arkadiko USDA",
  },
  {
    id: "arkania-protocol",
    symbol: "ania",
    name: "Arkania Protocol",
  },
  {
    id: "arkarus",
    symbol: "aks",
    name: "Arkarus",
  },
  {
    id: "arker-2",
    symbol: "arker",
    name: "Arker",
  },
  {
    id: "ark-innovation-etf-defichain",
    symbol: "darkk",
    name: "ARK Innovation ETF Defichain",
  },
  {
    id: "ark-of-the-universe",
    symbol: "arks",
    name: "Ark Of The Universe",
  },
  {
    id: "ark-rivals",
    symbol: "arkn",
    name: "Ark Rivals",
  },
  {
    id: "arkworld",
    symbol: "akw",
    name: "ArkWorld",
  },
  {
    id: "armor",
    symbol: "armor",
    name: "ARMOR",
  },
  {
    id: "armor-nxm",
    symbol: "arnxm",
    name: "Armor NXM",
  },
  {
    id: "army-node-finance",
    symbol: "army",
    name: "Army Node Finance",
  },
  {
    id: "arnoya-classic",
    symbol: "arnc",
    name: "Arnoya classic",
  },
  {
    id: "arowana-token",
    symbol: "arw",
    name: "Arowana",
  },
  {
    id: "arpa",
    symbol: "arpa",
    name: "ARPA",
  },
  {
    id: "arqma",
    symbol: "arq",
    name: "ArQmA",
  },
  {
    id: "arrow",
    symbol: "arw",
    name: "Arrow",
  },
  {
    id: "arsenal-fan-token",
    symbol: "afc",
    name: "Arsenal Fan Token",
  },
  {
    id: "artax",
    symbol: "xax",
    name: "ARTAX",
  },
  {
    id: "artbyte",
    symbol: "aby",
    name: "ArtByte",
  },
  {
    id: "artcoin",
    symbol: "ac",
    name: "ArtCoin",
  },
  {
    id: "arte",
    symbol: "arte",
    name: "ARTE",
  },
  {
    id: "artem",
    symbol: "artem",
    name: "Artem",
  },
  {
    id: "artemis",
    symbol: "mis",
    name: "Artemis",
  },
  {
    id: "artemis-vision",
    symbol: "arv",
    name: "Artemis Vision",
  },
  {
    id: "arteq-nft-investment-fund",
    symbol: "arteq",
    name: "artèQ NFT Investment Fund",
  },
  {
    id: "artery",
    symbol: "artr",
    name: "Artery",
  },
  {
    id: "artfinity-token",
    symbol: "at",
    name: "Artfinity",
  },
  {
    id: "art-gobblers-goo",
    symbol: "goo",
    name: "Art Gobblers Goo",
  },
  {
    id: "arth",
    symbol: "arth",
    name: "ARTH",
  },
  {
    id: "arthswap",
    symbol: "arsw",
    name: "ArthSwap",
  },
  {
    id: "artic-foundation",
    symbol: "artic",
    name: "ARTIC Foundation",
  },
  {
    id: "articoin",
    symbol: "atc",
    name: "ArtiCoin",
  },
  {
    id: "artificial-intelligence",
    symbol: "ai",
    name: "Artificial Intelligence",
  },
  {
    id: "artificial-intelligence-technology-network",
    symbol: "aitn",
    name: "Artificial Intelligence Technology Network",
  },
  {
    id: "artii-token",
    symbol: "artii",
    name: "ARTII",
  },
  {
    id: "artik",
    symbol: "artk",
    name: "Artik",
  },
  {
    id: "arti-project",
    symbol: "arti",
    name: "Arti Project",
  },
  {
    id: "artizen",
    symbol: "atnt",
    name: "Artizen",
  },
  {
    id: "artkit",
    symbol: "arti",
    name: "ArtKit",
  },
  {
    id: "artl",
    symbol: "artl",
    name: "ARTL",
  },
  {
    id: "artm",
    symbol: "artm",
    name: "ARTM",
  },
  {
    id: "artmeta",
    symbol: "$mart",
    name: "ArtMeta",
  },
  {
    id: "artonline",
    symbol: "art",
    name: "ArtOnline",
  },
  {
    id: "artrade",
    symbol: "atr",
    name: "Artrade",
  },
  {
    id: "artube",
    symbol: "att",
    name: "Artube",
  },
  {
    id: "artx",
    symbol: "artx",
    name: "ARTX",
  },
  {
    id: "arweave",
    symbol: "ar",
    name: "Arweave",
  },
  {
    id: "aryacoin",
    symbol: "aya",
    name: "Aryacoin",
  },
  {
    id: "asan-verse",
    symbol: "asan",
    name: "ASAN VERSE",
  },
  {
    id: "ascension",
    symbol: "asn",
    name: "Ascension",
  },
  {
    id: "ascension-protocol",
    symbol: "ascend",
    name: "Ascension Protocol",
  },
  {
    id: "asd",
    symbol: "asd",
    name: "AscendEx",
  },
  {
    id: "asec-frontier",
    symbol: "asec",
    name: "ASEC Frontier",
  },
  {
    id: "asgard-games",
    symbol: "asg",
    name: "Asgard Games",
  },
  {
    id: "asgardian-aereus",
    symbol: "volt",
    name: "Asgardian Aereus",
  },
  {
    id: "ash",
    symbol: "ash",
    name: "ASH",
  },
  {
    id: "ashera",
    symbol: "ash",
    name: "Ashera",
  },
  {
    id: "ashswap",
    symbol: "ash",
    name: "AshSwap",
  },
  {
    id: "ash-token",
    symbol: "ash",
    name: "Ash Token",
  },
  {
    id: "asia-coin",
    symbol: "asia",
    name: "Asia Coin",
  },
  {
    id: "asic-token",
    symbol: "asic",
    name: "ASIC Token",
  },
  {
    id: "asimi",
    symbol: "asimi",
    name: "ASIMI",
  },
  {
    id: "asix",
    symbol: "asix",
    name: "ASIX",
  },
  {
    id: "asixplus",
    symbol: "asix+",
    name: "AsixPlus",
  },
  {
    id: "askobar-network",
    symbol: "asko",
    name: "Asko",
  },
  {
    id: "as-monaco-fan-token",
    symbol: "asm",
    name: "AS Monaco Fan Token",
  },
  {
    id: "aspire",
    symbol: "asp",
    name: "Aspire",
  },
  {
    id: "aspo-world",
    symbol: "aspo",
    name: "ASPO World",
  },
  {
    id: "as-roma-fan-token",
    symbol: "asr",
    name: "AS Roma Fan Token",
  },
  {
    id: "assangedao",
    symbol: "justice",
    name: "AssangeDAO",
  },
  {
    id: "assaplay",
    symbol: "assa",
    name: "AssaPlay",
  },
  {
    id: "assara",
    symbol: "assa",
    name: "ASSARA",
  },
  {
    id: "assemble-protocol",
    symbol: "asm",
    name: "Assemble Protocol",
  },
  {
    id: "assent-protocol",
    symbol: "asnt",
    name: "Assent Protocol",
  },
  {
    id: "assetmantle",
    symbol: "mntl",
    name: "AssetMantle",
  },
  {
    id: "asta",
    symbol: "asta",
    name: "ASTA",
  },
  {
    id: "astar",
    symbol: "astr",
    name: "Astar",
  },
  {
    id: "aster",
    symbol: "atc",
    name: "Aster",
  },
  {
    id: "ast-finance",
    symbol: "ast",
    name: "AST.finance",
  },
  {
    id: "aston-martin-cognizant-fan-token",
    symbol: "am",
    name: "Aston Martin Cognizant Fan Token",
  },
  {
    id: "aston-villa-fan-token",
    symbol: "avl",
    name: "Aston Villa Fan Token",
  },
  {
    id: "astra-dao",
    symbol: "astra",
    name: "Astra DAO",
  },
  {
    id: "astrafer",
    symbol: "astrafer",
    name: "Astrafer",
  },
  {
    id: "astra-guild-ventures",
    symbol: "agv",
    name: "Astra Guild Ventures",
  },
  {
    id: "astrals-glxy",
    symbol: "glxy",
    name: "Astrals GLXY",
  },
  {
    id: "astra-nova",
    symbol: "$rvv",
    name: "Astra Nova",
  },
  {
    id: "astrapad",
    symbol: "astra",
    name: "AstraPad",
  },
  {
    id: "astrazion",
    symbol: "aznt",
    name: "AstraZion",
  },
  {
    id: "astriddao-token",
    symbol: "atid",
    name: "AstridDAO",
  },
  {
    id: "astro-babies",
    symbol: "abb",
    name: "Astro Babies",
  },
  {
    id: "astrobirdz",
    symbol: "abz",
    name: "AstroBirdz",
  },
  {
    id: "astro-cash",
    symbol: "astro",
    name: "Astro Cash",
  },
  {
    id: "astrodonkey",
    symbol: "dnky",
    name: "AstroDonkey",
  },
  {
    id: "astroelon",
    symbol: "elonone",
    name: "AstroElon",
  },
  {
    id: "astrogrow",
    symbol: "atg",
    name: "AstroGrow",
  },
  {
    id: "astronaut",
    symbol: "naut",
    name: "Astronaut",
  },
  {
    id: "astroport",
    symbol: "astroc",
    name: "Astroport Classic",
  },
  {
    id: "astroport-fi",
    symbol: "astro",
    name: "Astroport.fi",
  },
  {
    id: "astrospaces-io",
    symbol: "spaces",
    name: "AstroSpaces.io",
  },
  {
    id: "astroswap",
    symbol: "astro",
    name: "AstroSwap",
  },
  {
    id: "astrotools",
    symbol: "astro",
    name: "AstroTools",
  },
  {
    id: "astro-verse",
    symbol: "asv",
    name: "Astro Verse",
  },
  {
    id: "asuna-inu",
    symbol: "asunainu",
    name: "Asuna Inu",
  },
  {
    id: "asva",
    symbol: "asva",
    name: "Asva Labs",
  },
  {
    id: "asward-coin",
    symbol: "asc",
    name: "Ashward Coin",
  },
  {
    id: "asyagro",
    symbol: "asy",
    name: "ASYAGRO",
  },
  {
    id: "atari",
    symbol: "atri",
    name: "Atari",
  },
  {
    id: "atauro",
    symbol: "atr",
    name: "Atauro",
  },
  {
    id: "atbcoin",
    symbol: "atb",
    name: "ATBCoin",
  },
  {
    id: "atheios",
    symbol: "ath",
    name: "Atheios",
  },
  {
    id: "athena-money-owl",
    symbol: "owl",
    name: "Athena Money Owl",
  },
  {
    id: "athenas",
    symbol: "athenasv2",
    name: "Athenas",
  },
  {
    id: "atheneum",
    symbol: "aem",
    name: "Atheneum",
  },
  {
    id: "athens",
    symbol: "ath",
    name: "Athens",
  },
  {
    id: "ath-games",
    symbol: "athd",
    name: "ATH Games",
  },
  {
    id: "athos-finance",
    symbol: "ath",
    name: "Athos Finance",
  },
  {
    id: "athos-finance-usd",
    symbol: "athusd",
    name: "Athos Finance USD",
  },
  {
    id: "athos-meta",
    symbol: "atm",
    name: "Athos Meta",
  },
  {
    id: "atlantis",
    symbol: "atlas",
    name: "Atlantis",
  },
  {
    id: "atlantis-coin",
    symbol: "atc",
    name: "Atlantis Coin",
  },
  {
    id: "atlantis-finance",
    symbol: "atls",
    name: "Atlantis Finance",
  },
  {
    id: "atlantis-loans",
    symbol: "atl",
    name: "Atlantis Loans",
  },
  {
    id: "atlantis-loans-polygon",
    symbol: "atlx",
    name: "Atlantis Loans Polygon",
  },
  {
    id: "atlantis-metaverse",
    symbol: "tau",
    name: "Atlantis Metaverse",
  },
  {
    id: "atlantis-token",
    symbol: "atis",
    name: "Atlantis ATIS",
  },
  {
    id: "atlantis-universe-money",
    symbol: "aum",
    name: "Atlantis Universe Money",
  },
  {
    id: "atlas-dex",
    symbol: "ats",
    name: "Atlas DEX",
  },
  {
    id: "atlas-fc-fan-token",
    symbol: "atlas",
    name: "Atlas FC Fan Token",
  },
  {
    id: "atlas-navi",
    symbol: "navi",
    name: "Atlas Navi",
  },
  {
    id: "atlas-protocol",
    symbol: "atp",
    name: "Atlas Protocol",
  },
  {
    id: "atlas-usv",
    symbol: "usv",
    name: "Atlas USV",
  },
  {
    id: "atletico-madrid",
    symbol: "atm",
    name: "Atletico Madrid Fan Token",
  },
  {
    id: "atmos",
    symbol: "atmos",
    name: "Atmos",
  },
  {
    id: "atomic-wallet-coin",
    symbol: "awc",
    name: "Atomic Wallet Coin",
  },
  {
    id: "atompad",
    symbol: "atpad",
    name: "AtomPad",
  },
  {
    id: "atpay",
    symbol: "atpay",
    name: "AtPay",
  },
  {
    id: "atrollcity",
    symbol: "pine",
    name: "Atrollcity",
  },
  {
    id: "atromg8",
    symbol: "ag8",
    name: "ATROMG8",
  },
  {
    id: "attack-wagon",
    symbol: "atk",
    name: "Attack Wagon",
  },
  {
    id: "attila",
    symbol: "att",
    name: "Attila",
  },
  {
    id: "attrace",
    symbol: "attr",
    name: "Attrace",
  },
  {
    id: "auction",
    symbol: "auction",
    name: "Bounce",
  },
  {
    id: "auctus",
    symbol: "auc",
    name: "Auctus",
  },
  {
    id: "audiocoin",
    symbol: "adc",
    name: "AudioCoin",
  },
  {
    id: "auditchain",
    symbol: "audt",
    name: "Auditchain",
  },
  {
    id: "audius",
    symbol: "audio",
    name: "Audius",
  },
  {
    id: "audius-wormhole",
    symbol: "audio",
    name: "Audius (Wormhole)",
  },
  {
    id: "augmented-finance",
    symbol: "agf",
    name: "Augmented Finance",
  },
  {
    id: "augur",
    symbol: "rep",
    name: "Augur",
  },
  {
    id: "augury-finance",
    symbol: "omen",
    name: "Augury Finance",
  },
  {
    id: "aura-bal",
    symbol: "aurabal",
    name: "Aura BAL",
  },
  {
    id: "aura-finance",
    symbol: "aura",
    name: "Aura Finance",
  },
  {
    id: "aura-network",
    symbol: "aura",
    name: "Aura Network",
  },
  {
    id: "aureo",
    symbol: "aur",
    name: "AUREO",
  },
  {
    id: "aureus-nummus-gold",
    symbol: "ang",
    name: "Aureus Nummus Gold",
  },
  {
    id: "auric-network",
    symbol: "auscm",
    name: "Auric Network",
  },
  {
    id: "aurigami",
    symbol: "ply",
    name: "Aurigami",
  },
  {
    id: "aurix",
    symbol: "aur",
    name: "Aurix",
  },
  {
    id: "aurora",
    symbol: "aoa",
    name: "Aurora Chain",
  },
  {
    id: "auroracoin",
    symbol: "aur",
    name: "Auroracoin",
  },
  {
    id: "aurora-dao",
    symbol: "idex",
    name: "IDEX",
  },
  {
    id: "aurora-near",
    symbol: "aurora",
    name: "Aurora",
  },
  {
    id: "auroratoken",
    symbol: "aurora",
    name: "AuroraToken",
  },
  {
    id: "aurora-token",
    symbol: "$adtx",
    name: "Aurora Dimension",
  },
  {
    id: "aurory",
    symbol: "aury",
    name: "Aurory",
  },
  {
    id: "auruscoin",
    symbol: "awx",
    name: "AurusDeFi",
  },
  {
    id: "aurusgold",
    symbol: "awg",
    name: "AurusGOLD",
  },
  {
    id: "aurus-silver",
    symbol: "aws",
    name: "AurusSILVER",
  },
  {
    id: "aurusx",
    symbol: "ax",
    name: "AurusX",
  },
  {
    id: "ausdc",
    symbol: "ausdc",
    name: "aUSDC",
  },
  {
    id: "australian-crypto-coin-green",
    symbol: "accg",
    name: "Australian Crypto Coin Green",
  },
  {
    id: "australian-safe-shepherd",
    symbol: "ass",
    name: "Australian Safe Shepherd",
  },
  {
    id: "autentica",
    symbol: "aut",
    name: "Autentica",
  },
  {
    id: "authencity",
    symbol: "auth",
    name: "Authencity",
  },
  {
    id: "auto",
    symbol: "auto",
    name: "Auto",
  },
  {
    id: "autobahn-network",
    symbol: "txl",
    name: "Autobahn Network",
  },
  {
    id: "autobusd",
    symbol: "abs",
    name: "Autobusd",
  },
  {
    id: "autocrypto",
    symbol: "au",
    name: "AutoCrypto",
  },
  {
    id: "automata",
    symbol: "ata",
    name: "Automata",
  },
  {
    id: "autonio",
    symbol: "niox",
    name: "Autonio",
  },
  {
    id: "autoshark",
    symbol: "jaws",
    name: "AutoShark",
  },
  {
    id: "autosingle",
    symbol: "autos",
    name: "AutoSingle",
  },
  {
    id: "auto-staked-alex",
    symbol: "atalex",
    name: "Auto Staked ALEX",
  },
  {
    id: "autumn",
    symbol: "autumn",
    name: "Autumn",
  },
  {
    id: "aux-coin",
    symbol: "aux",
    name: "AUX Coin",
  },
  {
    id: "auxilium",
    symbol: "aux",
    name: "Auxilium",
  },
  {
    id: "avadex-token",
    symbol: "avex",
    name: "AvaDex Token",
  },
  {
    id: "avakus",
    symbol: "avak",
    name: "Avakus",
  },
  {
    id: "avalanche-2",
    symbol: "avax",
    name: "Avalanche",
  },
  {
    id: "avalanche-hills",
    symbol: "ahill",
    name: "Avalanche Hills",
  },
  {
    id: "avalanche-wormhole",
    symbol: "avax",
    name: "Avalanche (Wormhole)",
  },
  {
    id: "avalaunch",
    symbol: "xava",
    name: "Avalaunch",
  },
  {
    id: "avaocado-dao",
    symbol: "avg",
    name: "Avocado DAO",
  },
  {
    id: "avapay",
    symbol: "avapay",
    name: "AvaPay",
  },
  {
    id: "avara",
    symbol: "avr",
    name: "AVARA",
  },
  {
    id: "avastr-vault-nftx",
    symbol: "avastr",
    name: "AVASTR Vault (NFTX)",
  },
  {
    id: "avata-network",
    symbol: "avat",
    name: "AVATA Network",
  },
  {
    id: "avaterra",
    symbol: "terra",
    name: "Avaterra",
  },
  {
    id: "avatly",
    symbol: "ava",
    name: "Avatly",
  },
  {
    id: "avaware",
    symbol: "ave",
    name: "Avaware",
  },
  {
    id: "avaxlauncher",
    symbol: "avxl",
    name: "Avaxlauncher",
  },
  {
    id: "avaxtars",
    symbol: "avxt",
    name: "Avaxtars",
  },
  {
    id: "avefarm",
    symbol: "ave",
    name: "AveFarm",
  },
  {
    id: "aventus",
    symbol: "avt",
    name: "Aventus",
  },
  {
    id: "avenue-hamilton-token",
    symbol: "aht",
    name: "Avenue Hamilton Token",
  },
  {
    id: "avenue-university-token",
    symbol: "aut",
    name: "Avenue University Token",
  },
  {
    id: "avian-network",
    symbol: "avn",
    name: "AVIAN",
  },
  {
    id: "avinoc",
    symbol: "avinoc",
    name: "AVINOC",
  },
  {
    id: "avme",
    symbol: "avme",
    name: "AVME",
  },
  {
    id: "avnrich",
    symbol: "avn",
    name: "AVNRich",
  },
  {
    id: "avocado",
    symbol: "avo",
    name: "Avocado",
  },
  {
    id: "avocadocoin",
    symbol: "avdo",
    name: "AvocadoCoin",
  },
  {
    id: "avoteo",
    symbol: "avo",
    name: "Avoteo",
  },
  {
    id: "avwbtc",
    symbol: "avwbtc",
    name: "avWBTC",
  },
  {
    id: "avweth",
    symbol: "avweth",
    name: "avWETH",
  },
  {
    id: "axe",
    symbol: "axe",
    name: "Axe",
  },
  {
    id: "axel",
    symbol: "axel",
    name: "AXEL",
  },
  {
    id: "axelar",
    symbol: "axl",
    name: "Axelar",
  },
  {
    id: "axia",
    symbol: "axiav3",
    name: "Axia",
  },
  {
    id: "axial-token",
    symbol: "axial",
    name: "Axial Token",
  },
  {
    id: "axie-infinity",
    symbol: "axs",
    name: "Axie Infinity",
  },
  {
    id: "axie-infinity-shard-wormhole",
    symbol: "axset",
    name: "Axie Infinity Shard (Wormhole)",
  },
  {
    id: "axioms",
    symbol: "axi",
    name: "Axioms",
  },
  {
    id: "axion",
    symbol: "axn",
    name: "Axion",
  },
  {
    id: "axis-defi",
    symbol: "axis",
    name: "Axis DeFi",
  },
  {
    id: "axis-token",
    symbol: "axis",
    name: "AXIS",
  },
  {
    id: "axl-inu",
    symbol: "axl",
    name: "AXL INU",
  },
  {
    id: "axlusdc",
    symbol: "axlusdc",
    name: "Axelar USDC",
  },
  {
    id: "axlwbtc",
    symbol: "axlwbtc",
    name: "axlWBTC",
  },
  {
    id: "axlweth",
    symbol: "axlweth",
    name: "axlWETH",
  },
  {
    id: "axpire",
    symbol: "axpr",
    name: "Moola",
  },
  {
    id: "axus-coin",
    symbol: "axus",
    name: "Axus Coin",
  },
  {
    id: "azacoin",
    symbol: "aza",
    name: "AzaCoin",
  },
  {
    id: "azbit",
    symbol: "az",
    name: "Azbit",
  },
  {
    id: "azit",
    symbol: "azit",
    name: "azit",
  },
  {
    id: "aztec-nodes-sun",
    symbol: "sun",
    name: "Aztec Nodes SUN",
  },
  {
    id: "azuki",
    symbol: "azuki",
    name: "Azuki",
  },
  {
    id: "azuma-coin",
    symbol: "azum",
    name: "Azuma Coin",
  },
  {
    id: "az-world-socialfi",
    symbol: "azw",
    name: "AZ World SocialFi",
  },
  {
    id: "b20",
    symbol: "b20",
    name: "B20",
  },
  {
    id: "b21",
    symbol: "b21",
    name: "B21",
  },
  {
    id: "b2bcoin-2",
    symbol: "b2b",
    name: "B2Bcoin",
  },
  {
    id: "b8dex",
    symbol: "b8t",
    name: "B8DEX",
  },
  {
    id: "baanx",
    symbol: "bxx",
    name: "Baanx",
  },
  {
    id: "baasid",
    symbol: "baas",
    name: "BaaSid",
  },
  {
    id: "babacoin",
    symbol: "bbc",
    name: "Babacoin",
  },
  {
    id: "babb",
    symbol: "bax",
    name: "BABB",
  },
  {
    id: "babil-token",
    symbol: "babil",
    name: "BABIL TOKEN",
  },
  {
    id: "baboon-financial",
    symbol: "boon",
    name: "Baboon Financial",
  },
  {
    id: "baby-ada",
    symbol: "babyada",
    name: "Baby ADA",
  },
  {
    id: "baby-aetherius",
    symbol: "babyaeth",
    name: "Baby Aetherius",
  },
  {
    id: "baby-alvey",
    symbol: "balvey",
    name: "Baby Alvey",
  },
  {
    id: "babyapefunclub",
    symbol: "bafc",
    name: "BabyApeFunClub",
  },
  {
    id: "baby-bali",
    symbol: "bb",
    name: "Baby Bali",
  },
  {
    id: "baby-bitburnreflect",
    symbol: "bbbr",
    name: "Baby BitBurnReflect",
  },
  {
    id: "baby-bitcoin",
    symbol: "bbtc",
    name: "Baby Bitcoin",
  },
  {
    id: "babybnb",
    symbol: "babybnb",
    name: "BabyBNB",
  },
  {
    id: "babyboo",
    symbol: "babyboo",
    name: "BabyBoo",
  },
  {
    id: "baby-boxer",
    symbol: "bboxer",
    name: "Baby Boxer",
  },
  {
    id: "babybusd",
    symbol: "babybusd",
    name: "BabyBUSD",
  },
  {
    id: "baby-cake",
    symbol: "babycake",
    name: "Baby Cake",
  },
  {
    id: "baby-catcoin",
    symbol: "babycats",
    name: "Baby Catcoin",
  },
  {
    id: "baby-chedda",
    symbol: "babychedda",
    name: "Baby Chedda",
  },
  {
    id: "baby-cheems-inu",
    symbol: "bci",
    name: "Baby Cheems Inu",
  },
  {
    id: "babydogecake",
    symbol: "bdc",
    name: "BabyDogeCake",
  },
  {
    id: "baby-doge-cash",
    symbol: "babydogecash",
    name: "Baby Doge Cash",
  },
  {
    id: "baby-doge-coin",
    symbol: "babydoge",
    name: "Baby Doge Coin",
  },
  {
    id: "babydoge-coin-eth",
    symbol: "babydoge",
    name: "BabyDoge ETH",
  },
  {
    id: "baby-doge-inu",
    symbol: "$babydogeinu",
    name: "Baby Doge Inu",
  },
  {
    id: "baby-doge-money-maker",
    symbol: "babydogemm",
    name: "Baby Doge Money Maker",
  },
  {
    id: "babydogezilla",
    symbol: "babydogezilla",
    name: "BabyDogeZilla",
  },
  {
    id: "baby-dogo-coin",
    symbol: "babydogo",
    name: "Baby Dogo Coin",
  },
  {
    id: "babydot",
    symbol: "bdot",
    name: "BabyDot",
  },
  {
    id: "baby-doug",
    symbol: "babydoug",
    name: "Baby Doug",
  },
  {
    id: "babyeth",
    symbol: "babyeth",
    name: "BabyEth",
  },
  {
    id: "babyethereum",
    symbol: "bbeth",
    name: "BabyEthereum",
  },
  {
    id: "babyeth-v2",
    symbol: "babyethv2",
    name: "BabyETH V2",
  },
  {
    id: "baby-everdoge",
    symbol: "baby everdoge",
    name: "Baby EverDoge",
  },
  {
    id: "babyfeg",
    symbol: "bbfeg",
    name: "Babyfeg",
  },
  {
    id: "babyfloki",
    symbol: "babyfloki",
    name: "BabyFloki",
  },
  {
    id: "baby-floki",
    symbol: "babyfloki",
    name: "Baby Floki",
  },
  {
    id: "baby-floki-coin",
    symbol: "babyflokicoin",
    name: "Baby Floki Coin",
  },
  {
    id: "baby-floki-doge",
    symbol: "babyfd",
    name: "Baby Floki Doge",
  },
  {
    id: "baby-floki-inu",
    symbol: "bfloki",
    name: "Baby Floki Inu",
  },
  {
    id: "babyfootball",
    symbol: "cup",
    name: "BabyFootball",
  },
  {
    id: "baby-fps-token",
    symbol: "bfps",
    name: "Baby FPS",
  },
  {
    id: "baby-kishu",
    symbol: "babykishu",
    name: "Baby Kishu",
  },
  {
    id: "babykitty",
    symbol: "babykitty",
    name: "BabyKitty",
  },
  {
    id: "babykraken",
    symbol: "krakbaby",
    name: "BabyKraken",
  },
  {
    id: "baby-kshark",
    symbol: "bks",
    name: "Baby KShark",
  },
  {
    id: "baby-lambo-inu",
    symbol: "blinu",
    name: "Baby Lambo Inu",
  },
  {
    id: "babyllama",
    symbol: "babyllama",
    name: "Babyllama",
  },
  {
    id: "babylondao",
    symbol: "bby",
    name: "BabylonDAO",
  },
  {
    id: "babylon-finance",
    symbol: "babl",
    name: "Babylon Finance",
  },
  {
    id: "babylonia",
    symbol: "baby",
    name: "Babylonia",
  },
  {
    id: "babylons",
    symbol: "babi",
    name: "Babylons",
  },
  {
    id: "baby-loop",
    symbol: "bloop",
    name: "Baby Loop",
  },
  {
    id: "baby-lovely-inu",
    symbol: "blovely",
    name: "Baby Lovely Inu",
  },
  {
    id: "baby-meta",
    symbol: "babymeta",
    name: "Baby Meta",
  },
  {
    id: "baby-moon-floki",
    symbol: "floki",
    name: "Baby Moon Floki",
  },
  {
    id: "babyokx",
    symbol: "babyokx",
    name: "BABYOKX (BSC)",
  },
  {
    id: "babyokx-2",
    symbol: "babyokx",
    name: "BABYOKX",
  },
  {
    id: "baby-panda",
    symbol: "bpanda",
    name: "Baby Panda",
  },
  {
    id: "baby-pig-token",
    symbol: "babypig",
    name: "Baby Pig",
  },
  {
    id: "baby-pokemoon",
    symbol: "bpm",
    name: "Baby Pokemoon",
  },
  {
    id: "babypumpkin-finance",
    symbol: "bump",
    name: "BabyPumpkin Finance",
  },
  {
    id: "babyquick",
    symbol: "babyquick",
    name: "BabyQuick",
  },
  {
    id: "babyrabbit",
    symbol: "babyrabbit",
    name: "Babyrabbit",
  },
  {
    id: "baby-ripple",
    symbol: "babyxrp",
    name: "Baby Ripple",
  },
  {
    id: "baby-saitama",
    symbol: "babysaitama",
    name: "Baby Saitama",
  },
  {
    id: "baby-samo-coin",
    symbol: "baby",
    name: "Baby Samo Coin",
  },
  {
    id: "baby-satoshi",
    symbol: "sats",
    name: "Baby Satoshi",
  },
  {
    id: "baby-shark",
    symbol: "shark",
    name: "Baby Shark",
  },
  {
    id: "baby-shark-tank",
    symbol: "bashtank",
    name: "Baby Shark Tank",
  },
  {
    id: "baby-shiba-coin",
    symbol: "babyshiba",
    name: "Baby Shiba Coin",
  },
  {
    id: "baby-shiba-inu",
    symbol: "babyshibainu",
    name: "Baby Shiba Inu",
  },
  {
    id: "babyshibby-inu",
    symbol: "babyshib",
    name: "BabyShibby Inu",
  },
  {
    id: "baby-soulja-boy",
    symbol: "draco",
    name: "Baby Soulja Boy",
  },
  {
    id: "babyswap",
    symbol: "baby",
    name: "BabySwap",
  },
  {
    id: "baby-tether",
    symbol: "babytether",
    name: "BABY TETHER",
  },
  {
    id: "babytigergold",
    symbol: "babytiger",
    name: "BabyTigerGold",
  },
  {
    id: "baby-trump",
    symbol: "babytrump",
    name: "Baby Trump",
  },
  {
    id: "baby-uniwswap",
    symbol: "$buniw",
    name: "Baby Uniwswap",
  },
  {
    id: "babywakandainu",
    symbol: "babywkd",
    name: "Babywakandainu",
  },
  {
    id: "babywhale",
    symbol: "bbw",
    name: "BabyWhale",
  },
  {
    id: "baby-woj",
    symbol: "bwj",
    name: "Baby WOJ",
  },
  {
    id: "babyxape",
    symbol: "babyx",
    name: "BabyXape",
  },
  {
    id: "babyxrp",
    symbol: "bbyxrp",
    name: "BabyXrp",
  },
  {
    id: "babyzoro-inu",
    symbol: "babyzoroinu",
    name: "Babyzoro Inu",
  },
  {
    id: "backed-protocol",
    symbol: "bakt",
    name: "Backed Protocol",
  },
  {
    id: "bacon-coin",
    symbol: "bacon",
    name: "Bacon Coin",
  },
  {
    id: "bacondao",
    symbol: "bacon",
    name: "BaconDAO",
  },
  {
    id: "bacon-protocol-home",
    symbol: "home",
    name: "Bacon Protocol Home",
  },
  {
    id: "baconswap",
    symbol: "bacon",
    name: "BaconSwap",
  },
  {
    id: "baddest-alpha-ape-bundle",
    symbol: "aped",
    name: "Baddest Alpha Ape Bundle",
  },
  {
    id: "badger-dao",
    symbol: "badger",
    name: "Badger DAO",
  },
  {
    id: "badger-sett-badger",
    symbol: "bbadger",
    name: "Badger Sett Badger",
  },
  {
    id: "badger-sett-digg",
    symbol: "bdigg",
    name: "Badger Sett Digg",
  },
  {
    id: "bae",
    symbol: "bae",
    name: "Bae",
  },
  {
    id: "baepay",
    symbol: "baepay",
    name: "BAEPAY",
  },
  {
    id: "bafe-io",
    symbol: "bafe",
    name: "Bafe.io",
  },
  {
    id: "bafi-finance-token",
    symbol: "bafi",
    name: "Bafi Finance",
  },
  {
    id: "bagel",
    symbol: "bagel",
    name: "Bagels Finance",
  },
  {
    id: "bagus-wallet",
    symbol: "bg",
    name: "Bagus Wallet",
  },
  {
    id: "bahtcoin",
    symbol: "bht",
    name: "Bahtcoin",
  },
  {
    id: "bai-stablecoin",
    symbol: "bai",
    name: "BAI Stablecoin",
  },
  {
    id: "baitcoin",
    symbol: "bait",
    name: "Baitcoin",
  },
  {
    id: "baj",
    symbol: "bjt",
    name: "BAJ",
  },
  {
    id: "bakc-vault-nftx",
    symbol: "bakc",
    name: "BAKC Vault (NFTX)",
  },
  {
    id: "bake-coin",
    symbol: "bakecoin",
    name: "Bake Coin",
  },
  {
    id: "baked-token",
    symbol: "baked",
    name: "Baked",
  },
  {
    id: "bakerytoken",
    symbol: "bake",
    name: "BakerySwap",
  },
  {
    id: "bakerytools",
    symbol: "tbake",
    name: "BakeryTools",
  },
  {
    id: "baklava",
    symbol: "bava",
    name: "Baklava",
  },
  {
    id: "balanced-dollars",
    symbol: "bnusd",
    name: "Balanced Dollars",
  },
  {
    id: "balance-network",
    symbol: "bln",
    name: "Balance Network",
  },
  {
    id: "balancer",
    symbol: "bal",
    name: "Balancer",
  },
  {
    id: "balancer-80-bal-20-weth",
    symbol: "b-80bal-20weth",
    name: "Balancer 80 BAL 20 WETH",
  },
  {
    id: "balancer-boosted-aave-dai",
    symbol: "bb-a-dai",
    name: "Balancer Boosted Aave DAI",
  },
  {
    id: "balancer-boosted-aave-usdc",
    symbol: "bb-a-usdc",
    name: "Balancer Boosted Aave USDC",
  },
  {
    id: "balancer-boosted-aave-usdt",
    symbol: "bb-a-usdt",
    name: "Balancer Boosted Aave USDT",
  },
  {
    id: "balance-tokens",
    symbol: "baln",
    name: "Balanced Network",
  },
  {
    id: "balicoin",
    symbol: "bali",
    name: "Bali Coin",
  },
  {
    id: "balikesirspor-token",
    symbol: "blks",
    name: "Balıkesirspor Token",
  },
  {
    id: "balisari",
    symbol: "bst",
    name: "Balisari",
  },
  {
    id: "bali-social-integrated",
    symbol: "bsi",
    name: "Bali Social Integrated",
  },
  {
    id: "bali-token",
    symbol: "bli",
    name: "Bali Token",
  },
  {
    id: "balkari-token",
    symbol: "bkr",
    name: "Balkari",
  },
  {
    id: "ball-coin",
    symbol: "ball",
    name: "BALL Coin",
  },
  {
    id: "balloonsville-air",
    symbol: "air",
    name: "Balloonsville AIR",
  },
  {
    id: "ballswap",
    symbol: "bsp",
    name: "BallSwap",
  },
  {
    id: "ball-token",
    symbol: "ball",
    name: "Ball",
  },
  {
    id: "balpha",
    symbol: "balpha",
    name: "bAlpha",
  },
  {
    id: "bamboo",
    symbol: "bam",
    name: "BAMBOO",
  },
  {
    id: "bamboo-coin",
    symbol: "bmbo",
    name: "Bamboo Coin",
  },
  {
    id: "bamboo-defi",
    symbol: "bamboo",
    name: "BambooDeFi",
  },
  {
    id: "bamboonium",
    symbol: "bamb",
    name: "Bamboonium",
  },
  {
    id: "bami",
    symbol: "bami",
    name: "Bami",
  },
  {
    id: "banana",
    symbol: "banana",
    name: "Banana",
  },
  {
    id: "banana-bucks",
    symbol: "bab",
    name: "Banana Bucks",
  },
  {
    id: "bananaclubtoken",
    symbol: "bct",
    name: "BananaClubToken",
  },
  {
    id: "banana-finance",
    symbol: "banana",
    name: "Banana Finance",
  },
  {
    id: "banana-index",
    symbol: "bandex",
    name: "Banana Index",
  },
  {
    id: "banana-task-force-ape",
    symbol: "btfa",
    name: "Banana Task Force Ape",
  },
  {
    id: "bananatok",
    symbol: "bna",
    name: "BananaTok",
  },
  {
    id: "banana-token",
    symbol: "bnana",
    name: "Chimpion",
  },
  {
    id: "banano",
    symbol: "ban",
    name: "Banano",
  },
  {
    id: "banca",
    symbol: "banca",
    name: "Banca",
  },
  {
    id: "bancambios-ax",
    symbol: "bxs",
    name: "Bancambios AX",
  },
  {
    id: "bancor",
    symbol: "bnt",
    name: "Bancor Network",
  },
  {
    id: "bancor-governance-token",
    symbol: "vbnt",
    name: "Bancor Governance",
  },
  {
    id: "band-protocol",
    symbol: "band",
    name: "Band Protocol",
  },
  {
    id: "bankera",
    symbol: "bnk",
    name: "Bankera",
  },
  {
    id: "bankers-dream",
    symbol: "bank$",
    name: "Bankers Dream",
  },
  {
    id: "banketh",
    symbol: "banketh",
    name: "BankEth",
  },
  {
    id: "bankless-bed-index",
    symbol: "bed",
    name: "Bankless BED Index",
  },
  {
    id: "bankless-dao",
    symbol: "bank",
    name: "Bankless DAO",
  },
  {
    id: "bankless-defi-innovation-index",
    symbol: "gmi",
    name: "Bankless DeFi Innovation Index",
  },
  {
    id: "bankroll-extended-token",
    symbol: "bnkrx",
    name: "Bankroll Extended",
  },
  {
    id: "bankroll-network",
    symbol: "bnkr",
    name: "Bankroll Network",
  },
  {
    id: "bankroll-vault",
    symbol: "vlt",
    name: "Bankroll Vault",
  },
  {
    id: "banksocial",
    symbol: "bsl",
    name: "BankSocial",
  },
  {
    id: "banque-universal",
    symbol: "cbu",
    name: "Banque Universal",
  },
  {
    id: "bantu",
    symbol: "xbn",
    name: "Bantu",
  },
  {
    id: "bao",
    symbol: "bao",
    name: "BAO",
  },
  {
    id: "bao-finance",
    symbol: "bao",
    name: "Bao Finance",
  },
  {
    id: "bao-finance-v2",
    symbol: "bao",
    name: "Bao Finance V2",
  },
  {
    id: "baousd",
    symbol: "baousd",
    name: "baoUSD",
  },
  {
    id: "barbecueswap",
    symbol: "bbq",
    name: "BarbecueSwap",
  },
  {
    id: "barfight",
    symbol: "bfight",
    name: "BARFIGHT",
  },
  {
    id: "barking",
    symbol: "bark",
    name: "Barking",
  },
  {
    id: "barnbridge",
    symbol: "bond",
    name: "BarnBridge",
  },
  {
    id: "barter",
    symbol: "brtr",
    name: "Barter",
  },
  {
    id: "bartertrade",
    symbol: "bart",
    name: "BarterTrade",
  },
  {
    id: "basan",
    symbol: "basan",
    name: "Basan",
  },
  {
    id: "based-finance",
    symbol: "based",
    name: "Based Finance",
  },
  {
    id: "based-money",
    symbol: "$based",
    name: "Based Money",
  },
  {
    id: "based-shares",
    symbol: "bshare",
    name: "BASED Shares",
  },
  {
    id: "based-token",
    symbol: "bdc",
    name: "Based",
  },
  {
    id: "base-protocol",
    symbol: "base",
    name: "Base Protocol",
  },
  {
    id: "basic",
    symbol: "basic",
    name: "BASIC",
  },
  {
    id: "basic-attention-token",
    symbol: "bat",
    name: "Basic Attention",
  },
  {
    id: "basid-coin",
    symbol: "basid",
    name: "Basid Coin",
  },
  {
    id: "basilisk",
    symbol: "bsx",
    name: "Basilisk",
  },
  {
    id: "basis-cash",
    symbol: "bac",
    name: "Basis Cash",
  },
  {
    id: "basiscoin-share",
    symbol: "bcs",
    name: "Basis Coin Share",
  },
  {
    id: "basis-dollar",
    symbol: "bsd",
    name: "Basis Dollar",
  },
  {
    id: "basis-dollar-share",
    symbol: "bsds",
    name: "Basis Dollar Share",
  },
  {
    id: "basis-gold-share-heco",
    symbol: "bags",
    name: "Basis Gold Share (Heco)",
  },
  {
    id: "basis-markets",
    symbol: "basis",
    name: "basis.markets",
  },
  {
    id: "basis-share",
    symbol: "bas",
    name: "Basis Share",
  },
  {
    id: "basketball-legends",
    symbol: "bbl",
    name: "Basketball Legends",
  },
  {
    id: "basketcoin",
    symbol: "bskt",
    name: "BasketCoin",
  },
  {
    id: "basketdao",
    symbol: "bask",
    name: "BasketDAO",
  },
  {
    id: "baskonia-fan-token",
    symbol: "bkn",
    name: "Baskonia Fan Token",
  },
  {
    id: "bastion-protocol",
    symbol: "bstn",
    name: "Bastion Protocol",
  },
  {
    id: "bata",
    symbol: "bta",
    name: "Bata",
  },
  {
    id: "batorrent",
    symbol: "ba",
    name: "BaTorrent",
  },
  {
    id: "battle-esports-coin",
    symbol: "bes",
    name: "battle esports coin",
  },
  {
    id: "battle-for-giostone",
    symbol: "bfg",
    name: "Battle For Giostone",
  },
  {
    id: "battleforten",
    symbol: "bft",
    name: "BattleForTEN",
  },
  {
    id: "battle-hero",
    symbol: "bath",
    name: "Battle Hero",
  },
  {
    id: "battle-infinity",
    symbol: "ibat",
    name: "Battle Infinity",
  },
  {
    id: "battle-of-guardians-share",
    symbol: "bgs",
    name: "Battle of Guardians Share",
  },
  {
    id: "battle-pets",
    symbol: "pet",
    name: "Battle Pets",
  },
  {
    id: "battle-saga",
    symbol: "btl",
    name: "Battle Saga",
  },
  {
    id: "battleverse",
    symbol: "bvc",
    name: "BattleVerse",
  },
  {
    id: "battle-world",
    symbol: "bwo",
    name: "Battle World",
  },
  {
    id: "bayc-vault-nftx",
    symbol: "bayc",
    name: "BAYC Vault (NFTX)",
  },
  {
    id: "bazaars",
    symbol: "bzr",
    name: "Bazaars",
  },
  {
    id: "bb-gaming",
    symbol: "bb",
    name: "BB Gaming",
  },
  {
    id: "bbscoin",
    symbol: "bbs",
    name: "BBSCoin",
  },
  {
    id: "bbs-network",
    symbol: "bbs",
    name: "BBS Network",
  },
  {
    id: "bcpay-fintech",
    symbol: "bcpay",
    name: "BCPAY FinTech",
  },
  {
    id: "b-cube-ai",
    symbol: "bcube",
    name: "B-cube.ai",
  },
  {
    id: "bcv",
    symbol: "bcv",
    name: "BitCapitalVendor",
  },
  {
    id: "bdcashprotocol-ecosystem",
    symbol: "bdeco",
    name: "BdcashProtocol Ecosystem",
  },
  {
    id: "bdlt",
    symbol: "bdlt",
    name: "BDLT",
  },
  {
    id: "bdollar",
    symbol: "bdo",
    name: "bDollar",
  },
  {
    id: "bdollar-share",
    symbol: "sbdo",
    name: "bDollar Share",
  },
  {
    id: "beach-token",
    symbol: "beach",
    name: "Beach Token",
  },
  {
    id: "beacon",
    symbol: "becn",
    name: "Beacon",
  },
  {
    id: "beagle-inu",
    symbol: "bic",
    name: "Beagle Inu",
  },
  {
    id: "beam",
    symbol: "beam",
    name: "BEAM",
  },
  {
    id: "beamswap",
    symbol: "glint",
    name: "BeamSwap",
  },
  {
    id: "bean",
    symbol: "bean",
    name: "Bean",
  },
  {
    id: "bean-cash",
    symbol: "bitb",
    name: "Bean Cash",
  },
  {
    id: "bearex",
    symbol: "brex",
    name: "BeaRex",
  },
  {
    id: "bearn-fi",
    symbol: "bfi",
    name: "Bearn.fi",
  },
  {
    id: "beast-masters",
    symbol: "master",
    name: "Beast Masters",
  },
  {
    id: "beast-nft",
    symbol: "bnft",
    name: "Beast NFT",
  },
  {
    id: "beatzcoin",
    symbol: "btzc",
    name: "BeatzCoin",
  },
  {
    id: "beauty-bakery-linked-operation-transaction-technology",
    symbol: "lott",
    name: "Beauty Bakery Linked Operation Transaction Technology",
  },
  {
    id: "beavis-and-butthead",
    symbol: "bbh",
    name: "Beavis and Butthead",
  },
  {
    id: "becoswap-token",
    symbol: "beco",
    name: "BecoSwap",
  },
  {
    id: "bedrock",
    symbol: "rock",
    name: "Bedrock",
  },
  {
    id: "bee-capital",
    symbol: "bee",
    name: "Bee Capital",
  },
  {
    id: "beechat",
    symbol: "chat",
    name: "BeeChat",
  },
  {
    id: "beeco",
    symbol: "bgc",
    name: "Bee Token",
  },
  {
    id: "beefy-escrowed-fantom",
    symbol: "beftm",
    name: "Beefy Escrowed Fantom",
  },
  {
    id: "beefy-finance",
    symbol: "bifi",
    name: "Beefy.Finance",
  },
  {
    id: "bee-inu",
    symbol: "beeinu",
    name: "Bee Inu",
  },
  {
    id: "beenode",
    symbol: "bnode",
    name: "Beenode",
  },
  {
    id: "beep",
    symbol: "botz",
    name: "Beep",
  },
  {
    id: "beer-money",
    symbol: "beer",
    name: "Beer Money",
  },
  {
    id: "beeruscat",
    symbol: "bcat",
    name: "BeerusCat",
  },
  {
    id: "beethoven-x",
    symbol: "beets",
    name: "Beethoven X",
  },
  {
    id: "beetlecoin",
    symbol: "beet",
    name: "Beetlecoin",
  },
  {
    id: "befasterholdertoken",
    symbol: "bfht",
    name: "BeFaster Holder Token",
  },
  {
    id: "befitter",
    symbol: "fiu",
    name: "beFITTER",
  },
  {
    id: "befitter-health",
    symbol: "hee",
    name: "beFITTER Health",
  },
  {
    id: "be-gaming-coin",
    symbol: "bgc",
    name: "Be Gaming Coin",
  },
  {
    id: "beholder",
    symbol: "eye",
    name: "Behodler",
  },
  {
    id: "bela",
    symbol: "aqua",
    name: "Bela Aqua",
  },
  {
    id: "beldex",
    symbol: "bdx",
    name: "Beldex",
  },
  {
    id: "belecx-protocol",
    symbol: "bex",
    name: "BelecX Protocol",
  },
  {
    id: "belifex",
    symbol: "befx",
    name: "Belifex",
  },
  {
    id: "belka",
    symbol: "blk",
    name: "Belka [OLD]",
  },
  {
    id: "belka-2",
    symbol: "blk",
    name: "Belka",
  },
  {
    id: "bella-protocol",
    symbol: "bel",
    name: "Bella Protocol",
  },
  {
    id: "bellcoin",
    symbol: "bell",
    name: "Bellcoin",
  },
  {
    id: "belon-dao",
    symbol: "be",
    name: "Belon DAO",
  },
  {
    id: "belrium",
    symbol: "bel",
    name: "Belrium",
  },
  {
    id: "belt",
    symbol: "belt",
    name: "Belt",
  },
  {
    id: "beluga-fi",
    symbol: "beluga",
    name: "Beluga.fi",
  },
  {
    id: "bem",
    symbol: "bemt",
    name: "BEM",
  },
  {
    id: "be-meta-famous",
    symbol: "bmf",
    name: "Be Meta Famous",
  },
  {
    id: "bemil-coin",
    symbol: "bem",
    name: "Bemil Coin",
  },
  {
    id: "benchmark-protocol",
    symbol: "mark",
    name: "Benchmark Protocol",
  },
  {
    id: "benddao",
    symbol: "bend",
    name: "BendDAO",
  },
  {
    id: "bened",
    symbol: "bnd",
    name: "Bened",
  },
  {
    id: "benqi",
    symbol: "qi",
    name: "BENQI",
  },
  {
    id: "benqi-liquid-staked-avax",
    symbol: "savax",
    name: "BENQI Liquid Staked AVAX",
  },
  {
    id: "bent-finance",
    symbol: "bent",
    name: "Bent Finance",
  },
  {
    id: "benzene",
    symbol: "bzn",
    name: "Benzene",
  },
  {
    id: "bep20-leo",
    symbol: "bleo",
    name: "BEP20 LEO",
  },
  {
    id: "bepay",
    symbol: "becoin",
    name: "bePAY Finance",
  },
  {
    id: "bepis",
    symbol: "bepis",
    name: "BEPIS",
  },
  {
    id: "bepro-network",
    symbol: "bepro",
    name: "BEPRO Network",
  },
  {
    id: "bergerdoge",
    symbol: "bergerdoge",
    name: "BergerDoge",
  },
  {
    id: "berith-coin",
    symbol: "brt",
    name: "Berith Coin",
  },
  {
    id: "bernard",
    symbol: "bern",
    name: "Bernard",
  },
  {
    id: "bernaswap",
    symbol: "bera",
    name: "Bernaswap",
  },
  {
    id: "berry",
    symbol: "berry",
    name: "Berry",
  },
  {
    id: "berry-data",
    symbol: "bry",
    name: "Berry Data",
  },
  {
    id: "berryswap",
    symbol: "berry",
    name: "BerrySwap",
  },
  {
    id: "berylbit",
    symbol: "brb",
    name: "BerylBit",
  },
  {
    id: "beshare-token",
    symbol: "bst",
    name: "Beshare",
  },
  {
    id: "beskar",
    symbol: "bsk-baa025",
    name: "Beskar",
  },
  {
    id: "bestay",
    symbol: "bsy",
    name: "Bestay",
  },
  {
    id: "beta-finance",
    symbol: "beta",
    name: "Beta Finance",
  },
  {
    id: "beta-token",
    symbol: "beta",
    name: "Beta",
  },
  {
    id: "betaverse",
    symbol: "bet",
    name: "Betaverse",
  },
  {
    id: "betcoin",
    symbol: "bet",
    name: "BETCOIN",
  },
  {
    id: "betdice",
    symbol: "dice",
    name: "BetDice",
  },
  {
    id: "betero",
    symbol: "bte",
    name: "Betero",
  },
  {
    id: "betgosu",
    symbol: "gosu",
    name: "BetGosu",
  },
  {
    id: "bethereum",
    symbol: "bether",
    name: "Bethereum",
  },
  {
    id: "betify",
    symbol: "betify",
    name: "Betify",
  },
  {
    id: "betller-coin",
    symbol: "btllr",
    name: "Betller Coin",
  },
  {
    id: "betswap-gg",
    symbol: "bsgg",
    name: "Betswap.gg",
  },
  {
    id: "betswirl",
    symbol: "bets",
    name: "BetSwirl",
  },
  {
    id: "betterment-digital",
    symbol: "bemd",
    name: "Betterment Digital",
  },
  {
    id: "better-money",
    symbol: "better",
    name: "Better Money",
  },
  {
    id: "bet-to-earn",
    symbol: "bte",
    name: "Bet To Earn",
  },
  {
    id: "betu",
    symbol: "betu",
    name: "Betu",
  },
  {
    id: "beyondcoin",
    symbol: "bynd",
    name: "Beyondcoin",
  },
  {
    id: "beyond-finance",
    symbol: "byn",
    name: "Beyondfi",
  },
  {
    id: "beyondpay",
    symbol: "bpay",
    name: "Beyondpay",
  },
  {
    id: "beyond-protocol",
    symbol: "bp",
    name: "Beyond Protocol",
  },
  {
    id: "bezant",
    symbol: "bznt",
    name: "Bezant",
  },
  {
    id: "bezoge-earth",
    symbol: "bezoge",
    name: "Bezoge Earth",
  },
  {
    id: "bfg-token",
    symbol: "bfg",
    name: "BetFury",
  },
  {
    id: "bficoin",
    symbol: "bfic",
    name: "Bficoin",
  },
  {
    id: "bfk-warzone",
    symbol: "bfk",
    name: "BFK WARZONE",
  },
  {
    id: "bgan-vault-nftx",
    symbol: "bgan",
    name: "BGAN Vault (NFTX)",
  },
  {
    id: "bhbd",
    symbol: "bhbd",
    name: "bHBD",
  },
  {
    id: "bhive",
    symbol: "bhive",
    name: "bHIVE",
  },
  {
    id: "bhnetwork",
    symbol: "bhat",
    name: "BHNetwork",
  },
  {
    id: "bho-network",
    symbol: "bho",
    name: "BHO Network",
  },
  {
    id: "biblecoin",
    symbol: "bibl",
    name: "Biblecoin",
  },
  {
    id: "biblepay",
    symbol: "bbp",
    name: "BiblePay",
  },
  {
    id: "bibox-token",
    symbol: "bix",
    name: "Bibox",
  },
  {
    id: "bib-token",
    symbol: "bib",
    name: "BIB Token",
  },
  {
    id: "biconomy",
    symbol: "bico",
    name: "Biconomy",
  },
  {
    id: "biconomy-exchange-token",
    symbol: "bit",
    name: "Biconomy Exchange",
  },
  {
    id: "bictory-finance",
    symbol: "bt",
    name: "Bictory Finance",
  },
  {
    id: "bicyclefi",
    symbol: "bcf",
    name: "BicycleFi",
  },
  {
    id: "bidao",
    symbol: "bid",
    name: "Bidao",
  },
  {
    id: "bidipass",
    symbol: "bdp",
    name: "BidiPass",
  },
  {
    id: "bidz-coin",
    symbol: "bidz",
    name: "BIDZ Coin",
  },
  {
    id: "bifi",
    symbol: "bifi",
    name: "BiFi",
  },
  {
    id: "bifrost",
    symbol: "bfc",
    name: "Bifrost",
  },
  {
    id: "bifrost-native-coin",
    symbol: "bnc",
    name: "Bifrost Native Coin",
  },
  {
    id: "bigbang-core",
    symbol: "bbc",
    name: "BigBang Core",
  },
  {
    id: "bigbang-game",
    symbol: "bbgc",
    name: "BigBang Game",
  },
  {
    id: "bigbom-eco",
    symbol: "bbo",
    name: "Bigbom",
  },
  {
    id: "big-crypto-game",
    symbol: "crypto",
    name: "Big Crypto Game",
  },
  {
    id: "big-data-protocol",
    symbol: "bdp",
    name: "Big Data Protocol",
  },
  {
    id: "big-defi-energy",
    symbol: "bde",
    name: "Big Defi Energy",
  },
  {
    id: "big-digital-shares",
    symbol: "bds",
    name: "Big Digital Shares",
  },
  {
    id: "big-dog-coin",
    symbol: "bdog",
    name: "Big Dog Coin",
  },
  {
    id: "big-eth",
    symbol: "bigeth",
    name: "BIG ETH",
  },
  {
    id: "bigfoot",
    symbol: "foot",
    name: "BIGFOOT",
  },
  {
    id: "biggerminds",
    symbol: "mind+",
    name: "BiggerMINDS",
  },
  {
    id: "big-league",
    symbol: "bglg",
    name: "Big League",
  },
  {
    id: "bigo-token",
    symbol: "bigo",
    name: "BIGOCOIN",
  },
  {
    id: "bigshortbets",
    symbol: "bigsb",
    name: "BigShortBets",
  },
  {
    id: "big-turn",
    symbol: "turn",
    name: "Big Turn",
  },
  {
    id: "bigwinner",
    symbol: "big",
    name: "Bigwinner",
  },
  {
    id: "biitgatti",
    symbol: "bitgatti",
    name: "Bitgatti",
  },
  {
    id: "bikerush",
    symbol: "brt",
    name: "Bikerush",
  },
  {
    id: "bilira",
    symbol: "tryb",
    name: "BiLira",
  },
  {
    id: "billionaire-plus",
    symbol: "bplus",
    name: "Billionaire Plus",
  },
  {
    id: "billionhappiness",
    symbol: "bhc",
    name: "BillionHappiness",
  },
  {
    id: "bill-murray-inu",
    symbol: "$bminu",
    name: "Bill Murray Inu",
  },
  {
    id: "bill-token",
    symbol: "bill",
    name: "Bill",
  },
  {
    id: "binahero",
    symbol: "hero",
    name: "BinaHero",
  },
  {
    id: "binamon",
    symbol: "bmon",
    name: "Binamon",
  },
  {
    id: "binance8",
    symbol: "b8",
    name: "Binance8",
  },
  {
    id: "binance-bitcoin",
    symbol: "btcb",
    name: "Binance Bitcoin",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
  },
  {
    id: "binance-coin-wormhole",
    symbol: "bnb",
    name: "Binance Coin (Wormhole)",
  },
  {
    id: "binance-eth",
    symbol: "beth",
    name: "Binance ETH staking",
  },
  {
    id: "binanceidr",
    symbol: "bidr",
    name: "BIDR",
  },
  {
    id: "binance-multi-chain-capital",
    symbol: "bmcc",
    name: "Binance Multi-Chain Capital",
  },
  {
    id: "binance-peg-avalanche",
    symbol: "avax",
    name: "Binance-Peg Avalanche",
  },
  {
    id: "binance-peg-bitcoin-cash",
    symbol: "bch",
    name: "Binance-Peg Bitcoin Cash",
  },
  {
    id: "binance-peg-cardano",
    symbol: "ada",
    name: "Binance-Peg Cardano",
  },
  {
    id: "binance-peg-dogecoin",
    symbol: "doge",
    name: "Binance-Peg Dogecoin",
  },
  {
    id: "binance-peg-eos",
    symbol: "eos",
    name: "Binance-Peg EOS",
  },
  {
    id: "binance-peg-filecoin",
    symbol: "fil",
    name: "Binance-Peg Filecoin",
  },
  {
    id: "binance-peg-firo",
    symbol: "firo",
    name: "Binance-Peg Firo",
  },
  {
    id: "binance-peg-iotex",
    symbol: "iotx",
    name: "Binance-Peg IoTeX",
  },
  {
    id: "binance-peg-litecoin",
    symbol: "ltc",
    name: "Binance-Peg Litecoin",
  },
  {
    id: "binance-peg-ontology",
    symbol: "ont",
    name: "Binance-Peg Ontology",
  },
  {
    id: "binance-peg-polkadot",
    symbol: "dot",
    name: "Binance-Peg Polkadot",
  },
  {
    id: "binance-peg-xrp",
    symbol: "xrp",
    name: "Binance-Peg XRP",
  },
  {
    id: "binance-smart-chain-girl",
    symbol: "bscgirl",
    name: "Binance Smart Chain Girl",
  },
  {
    id: "binance-usd",
    symbol: "busd",
    name: "Binance USD",
  },
  {
    id: "binance-wrapped-btc",
    symbol: "bbtc",
    name: "Binance Wrapped BTC",
  },
  {
    id: "binance-wrapped-dot",
    symbol: "bdot",
    name: "Binance Wrapped DOT",
  },
  {
    id: "binapet",
    symbol: "bpet",
    name: "Binapet",
  },
  {
    id: "binarydao",
    symbol: "byte",
    name: "BinaryDAO",
  },
  {
    id: "binaryx",
    symbol: "bnx",
    name: "BinaryX",
  },
  {
    id: "bincentive",
    symbol: "bcnt",
    name: "Bincentive",
  },
  {
    id: "binemon",
    symbol: "bin",
    name: "Binemon",
  },
  {
    id: "bingdwendwen",
    symbol: "bingdwendwen",
    name: "BingDwenDwen",
  },
  {
    id: "bingo",
    symbol: "$bingo",
    name: "Tomorrowland",
  },
  {
    id: "binjit-coin",
    symbol: "bnj",
    name: "Binjit Coin",
  },
  {
    id: "binom-protocol",
    symbol: "binom",
    name: "Binom Protocol",
  },
  {
    id: "binopoly",
    symbol: "bino",
    name: "Binopoly",
  },
  {
    id: "binspirit",
    symbol: "binspirit",
    name: "binSPIRIT",
  },
  {
    id: "binstarter",
    symbol: "bsr",
    name: "BinStarter",
  },
  {
    id: "bintex-futures",
    symbol: "bntx",
    name: "Bintex Futures",
  },
  {
    id: "biokkoin",
    symbol: "bkkg",
    name: "Biokkoin",
  },
  {
    id: "biometric-financial",
    symbol: "biofi",
    name: "BiometricFinancial",
  },
  {
    id: "biopassport",
    symbol: "biot",
    name: "Bio Passport",
  },
  {
    id: "bios",
    symbol: "bios",
    name: "0x_nodes",
  },
  {
    id: "birake",
    symbol: "bir",
    name: "Birake",
  },
  {
    id: "birb-2",
    symbol: "birb",
    name: "Birb",
  },
  {
    id: "birdchain",
    symbol: "bird",
    name: "Birdchain",
  },
  {
    id: "bird-money",
    symbol: "bird",
    name: "Bird.Money",
  },
  {
    id: "birdtoken",
    symbol: "birdtoken",
    name: "birdToken",
  },
  {
    id: "bishu-finance",
    symbol: "bishufi",
    name: "Bishu Finance",
  },
  {
    id: "bismuth",
    symbol: "bis",
    name: "Bismuth",
  },
  {
    id: "bistroo",
    symbol: "bist",
    name: "Bistroo",
  },
  {
    id: "biswap",
    symbol: "bsw",
    name: "Biswap",
  },
  {
    id: "biswap-token",
    symbol: "biswap",
    name: "Biswap Token",
  },
  {
    id: "bit",
    symbol: "bit",
    name: "Bit",
  },
  {
    id: "bit2me",
    symbol: "b2m",
    name: "Bit2Me",
  },
  {
    id: "bitant",
    symbol: "bitant",
    name: "BitANT",
  },
  {
    id: "bitazza",
    symbol: "btz",
    name: "Bitazza",
  },
  {
    id: "bitball",
    symbol: "btb",
    name: "Bitball",
  },
  {
    id: "bitball-treasure",
    symbol: "btrs",
    name: "Bitball Treasure",
  },
  {
    id: "bitbar",
    symbol: "btb",
    name: "Bitbar",
  },
  {
    id: "bitbase-token",
    symbol: "btbs",
    name: "BitBase Token",
  },
  {
    id: "bitberry-token",
    symbol: "bbr",
    name: "Bitberry",
  },
  {
    id: "bitblocks-fire",
    symbol: "bfire",
    name: "Bitblocks Fire",
  },
  {
    id: "bitbook-token",
    symbol: "bbt",
    name: "BitBook",
  },
  {
    id: "bitboost",
    symbol: "bbt",
    name: "BitBoost",
  },
  {
    id: "bitbox-classic",
    symbol: "cbitbox",
    name: "Bitbox Classic",
  },
  {
    id: "bitburn",
    symbol: "burn",
    name: "Bitburn",
  },
  {
    id: "bitcanna",
    symbol: "bcna",
    name: "BitCanna",
  },
  {
    id: "bitcash",
    symbol: "bitc",
    name: "BitCash",
  },
  {
    id: "bitcastle",
    symbol: "castle",
    name: "bitcastle",
  },
  {
    id: "bit-castle-war",
    symbol: "bcw",
    name: "Bit Castle War",
  },
  {
    id: "bitcci-cash",
    symbol: "bitcca",
    name: "Bitcci Cash",
  },
  {
    id: "bitcicoin",
    symbol: "bitci",
    name: "Bitcicoin",
  },
  {
    id: "bitci-racing-token",
    symbol: "brace",
    name: "Bitci Racing Token",
  },
  {
    id: "bitclave",
    symbol: "cat",
    name: "BitClave",
  },
  {
    id: "bitcny",
    symbol: "bitcny",
    name: "bitCNY",
  },
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
  },
  {
    id: "bitcoin-2",
    symbol: "btc2",
    name: "Bitcoin 2",
  },
  {
    id: "bitcoin-adult",
    symbol: "btad",
    name: "Bitcoin Adult",
  },
  {
    id: "bitcoin-and-ethereum-standard-token",
    symbol: "best",
    name: "Bitcoin and Ethereum Standard",
  },
  {
    id: "bitcoin-anonymous",
    symbol: "btca",
    name: "Bitcoin Anonymous",
  },
  {
    id: "bitcoin-asia",
    symbol: "btca",
    name: "Bitcoin Asia",
  },
  {
    id: "bitcoin-asset-2",
    symbol: "bta",
    name: "Bitcoin Asset",
  },
  {
    id: "bitcoin-atom",
    symbol: "bca",
    name: "Bitcoin Atom",
  },
  {
    id: "bitcoin-avalanche-bridged-btc-b",
    symbol: "btc.b",
    name: "Bitcoin Avalanche Bridged (BTC.b)",
  },
  {
    id: "bitcoinbam",
    symbol: "btcbam",
    name: "BitcoinBam",
  },
  {
    id: "bitcoin-bep2",
    symbol: "btcb",
    name: "Bitcoin BEP2",
  },
  {
    id: "bitcoinbrand",
    symbol: "btcb",
    name: "BitcoinBrand",
  },
  {
    id: "bitcoin-cash",
    symbol: "bch",
    name: "Bitcoin Cash",
  },
  {
    id: "bitcoin-cash-sv",
    symbol: "bsv",
    name: "Bitcoin SV",
  },
  {
    id: "bitcoin-city-coin",
    symbol: "bcity",
    name: "Bitcoin City Coin",
  },
  {
    id: "bitcoin-confidential",
    symbol: "bc",
    name: "Bitcoin Confidential",
  },
  {
    id: "bitcoin-diamond",
    symbol: "bcd",
    name: "Bitcoin Diamond",
  },
  {
    id: "bitcoin-e-wallet",
    symbol: "bitwallet",
    name: "Bitcoin E-wallet",
  },
  {
    id: "bitcoin-fast",
    symbol: "bcf",
    name: "Bitcoin Fast",
  },
  {
    id: "bitcoin-free-cash",
    symbol: "bfc",
    name: "Bitcoin Free Cash",
  },
  {
    id: "bitcoin-god",
    symbol: "god",
    name: "Bitcoin God",
  },
  {
    id: "bitcoin-gold",
    symbol: "btg",
    name: "Bitcoin Gold",
  },
  {
    id: "bitcoin-green",
    symbol: "bitg",
    name: "Bitcoin Green",
  },
  {
    id: "bitcoin-hd",
    symbol: "bhd",
    name: "Bitcoin HD",
  },
  {
    id: "bitcoin-hot",
    symbol: "bth",
    name: "Bitcoin Hot",
  },
  {
    id: "bitcoin-international",
    symbol: "btci",
    name: "Bitcoin International",
  },
  {
    id: "bitcoin-latinum",
    symbol: "ltnm",
    name: "Bitcoin Latinum",
  },
  {
    id: "bitcoin-legend",
    symbol: "bcl",
    name: "Bitcoin Legend",
  },
  {
    id: "bitcoin-lightning",
    symbol: "bltg",
    name: "Block-Logic",
  },
  {
    id: "bitcoinmoney",
    symbol: "bcm",
    name: "BitcoinMoney",
  },
  {
    id: "bitcoinmono",
    symbol: "btcmz",
    name: "BitcoinMono",
  },
  {
    id: "bitcoin-one",
    symbol: "btcone",
    name: "BitCoin One",
  },
  {
    id: "bitcoin-pay",
    symbol: "btcpay",
    name: "Bitcoin Pay",
  },
  {
    id: "bitcoin-plus",
    symbol: "xbc",
    name: "Bitcoin Plus",
  },
  {
    id: "bitcoinpos",
    symbol: "btcs",
    name: "BitcoinPoS",
  },
  {
    id: "bitcoin-private",
    symbol: "btcp",
    name: "Bitcoin Private",
  },
  {
    id: "bitcoin-pro",
    symbol: "btcp",
    name: "Bitcoin Pro",
  },
  {
    id: "bitcoin-red",
    symbol: "btcred",
    name: "Bitcoin Red",
  },
  {
    id: "bitcoin-scrypt",
    symbol: "btcs",
    name: "Bitcoin Scrypt",
  },
  {
    id: "bitcoinsov",
    symbol: "bsov",
    name: "BitcoinSoV",
  },
  {
    id: "bitcoin-subsidium",
    symbol: "xbtx",
    name: "Bitcoin Subsidium",
  },
  {
    id: "bitcoin-token",
    symbol: "btct",
    name: "BitcoinToken",
  },
  {
    id: "bitcoin-trc20",
    symbol: "btct",
    name: "Bitcoin TRC20",
  },
  {
    id: "bitcoin-trust",
    symbol: "bct",
    name: "Bitcoin Trust",
  },
  {
    id: "bitcoin-ultra",
    symbol: "btcu",
    name: "BitcoinUltra",
  },
  {
    id: "bitcoinv",
    symbol: "btcv",
    name: "BitcoinV",
  },
  {
    id: "bitcoin-vault",
    symbol: "btcv",
    name: "Bitcoin Vault",
  },
  {
    id: "bitcoin-volatility-index-token",
    symbol: "btcv",
    name: "Bitcoin Volatility Index Token",
  },
  {
    id: "bitcoinx",
    symbol: "bcx",
    name: "BitcoinX",
  },
  {
    id: "bitcoinx-2",
    symbol: "btcx",
    name: "BitcoinXGames",
  },
  {
    id: "bitcoinz",
    symbol: "btcz",
    name: "BitcoinZ",
  },
  {
    id: "bitcoiva",
    symbol: "bca",
    name: "Bitcoiva",
  },
  {
    id: "bitcolojix",
    symbol: "btcix",
    name: "BITCOLOJIX",
  },
  {
    id: "bitcomine",
    symbol: "bme",
    name: "BitcoMine",
  },
  {
    id: "bitcomo",
    symbol: "bm",
    name: "Bitcomo",
  },
  {
    id: "bitconnect",
    symbol: "bcc",
    name: "Bitconnect",
  },
  {
    id: "bitcore",
    symbol: "btx",
    name: "BitCore",
  },
  {
    id: "bitcrex-coin",
    symbol: "bic",
    name: "Bitcrex Coin",
  },
  {
    id: "bitdao",
    symbol: "bit",
    name: "BitDAO",
  },
  {
    id: "bitdegree",
    symbol: "bdg",
    name: "BitDegree",
  },
  {
    id: "bitdoge",
    symbol: "bdoge",
    name: "BitDoge",
  },
  {
    id: "bitdollars",
    symbol: "btcd",
    name: "Bitdollars",
  },
  {
    id: "bitenium-token",
    symbol: "bt",
    name: "Bitenium",
  },
  {
    id: "bitfex-2",
    symbol: "bce",
    name: "Bitfex",
  },
  {
    id: "bitflowers",
    symbol: "petal",
    name: "bitFlowers",
  },
  {
    id: "bitforex",
    symbol: "bf",
    name: "Bitforex",
  },
  {
    id: "bit-game-verse-token",
    symbol: "bgvt",
    name: "Bit Game Verse Token",
  },
  {
    id: "bitgear",
    symbol: "gear",
    name: "Bitgear",
  },
  {
    id: "bitgem",
    symbol: "xbtg",
    name: "Bitgem",
  },
  {
    id: "bitgesell",
    symbol: "bgl",
    name: "Bitgesell",
  },
  {
    id: "bitget-token",
    symbol: "bgb",
    name: "Bitget Token",
  },
  {
    id: "bitguild",
    symbol: "plat",
    name: "BitGuild PLAT",
  },
  {
    id: "bithachi",
    symbol: "bith",
    name: "Bithachi",
  },
  {
    id: "bithashex",
    symbol: "bhax",
    name: "Bithashex",
  },
  {
    id: "bithash-token",
    symbol: "bt",
    name: "BitHash",
  },
  {
    id: "bit-hotel",
    symbol: "bth",
    name: "Bit Hotel",
  },
  {
    id: "bitica-coin",
    symbol: "bdcc",
    name: "BITICA COIN",
  },
  {
    id: "bitindi-chain",
    symbol: "bni",
    name: "Bitindi Chain",
  },
  {
    id: "bitjob",
    symbol: "stu",
    name: "bitJob",
  },
  {
    id: "bitkub-coin",
    symbol: "kub",
    name: "Bitkub Coin",
  },
  {
    id: "bitlevex",
    symbol: "blex",
    name: "Bitlevex",
  },
  {
    id: "bitlocus",
    symbol: "btl",
    name: "Bitlocus",
  },
  {
    id: "bitmark",
    symbol: "marks",
    name: "Bitmark",
  },
  {
    id: "bitmart-token",
    symbol: "bmx",
    name: "BitMart",
  },
  {
    id: "bitmex-token",
    symbol: "bmex",
    name: "BitMEX",
  },
  {
    id: "bit-miner-chain",
    symbol: "btmc",
    name: "Bit Miner Chain",
  },
  {
    id: "bitmon",
    symbol: "bit",
    name: "Bitmon",
  },
  {
    id: "bitnautic",
    symbol: "btnt",
    name: "BitNautic",
  },
  {
    id: "bitnorm",
    symbol: "bn",
    name: "Bitnorm",
  },
  {
    id: "bito-coin",
    symbol: "bito",
    name: "BITO Coin",
  },
  {
    id: "bitone",
    symbol: "bio",
    name: "BITONE",
  },
  {
    id: "bitonyx-token",
    symbol: "btnyx",
    name: "BitOnyx",
  },
  {
    id: "bitorbit",
    symbol: "bitorb",
    name: "BitOrbit",
  },
  {
    id: "bitoreum",
    symbol: "btrm",
    name: "Bitoreum",
  },
  {
    id: "bitpaid-token",
    symbol: "btp",
    name: "Bitpaid",
  },
  {
    id: "bitpanda-ecosystem-token",
    symbol: "best",
    name: "Bitpanda Ecosystem",
  },
  {
    id: "bit-public-talent-network",
    symbol: "bptn",
    name: "Bit Public Talent Network",
  },
  {
    id: "bitrent",
    symbol: "rntb",
    name: "BitRent",
  },
  {
    id: "bit-rides",
    symbol: "rides",
    name: "Bit Rides",
  },
  {
    id: "bitrise-token",
    symbol: "brise",
    name: "Bitgert",
  },
  {
    id: "bitroncoin",
    symbol: "btrn",
    name: "BitronCoin",
  },
  {
    id: "bitrue-token",
    symbol: "btr",
    name: "Bitrue Coin",
  },
  {
    id: "bitscreener",
    symbol: "bitx",
    name: "BitScreener",
  },
  {
    id: "bitshares",
    symbol: "bts",
    name: "BitShares",
  },
  {
    id: "bitshark",
    symbol: "btshk",
    name: "Bitshark",
  },
  {
    id: "bitshiba",
    symbol: "shiba",
    name: "BitShiba",
  },
  {
    id: "bitsliced",
    symbol: "sliced",
    name: "Bitsliced",
  },
  {
    id: "bitsong",
    symbol: "btsg",
    name: "BitSong",
  },
  {
    id: "bitsonic-token",
    symbol: "bsc",
    name: "Bitsonic",
  },
  {
    id: "bitspawn",
    symbol: "spwn",
    name: "Bitspawn",
  },
  {
    id: "bitstake",
    symbol: "xbs",
    name: "BitStake",
  },
  {
    id: "bitsten-token",
    symbol: "bst",
    name: "Bitsten [OLD]",
  },
  {
    id: "bit-store-coin",
    symbol: "store",
    name: "Bit Store",
  },
  {
    id: "bitsubishi",
    symbol: "bitsu",
    name: "Bitsubishi",
  },
  {
    id: "bitsum",
    symbol: "mat",
    name: "Matka",
  },
  {
    id: "bitswift",
    symbol: "bits",
    name: "Bitswift",
  },
  {
    id: "bittensor",
    symbol: "tao",
    name: "Bittensor",
  },
  {
    id: "bitto-exchange",
    symbol: "bitto",
    name: "BITTO",
  },
  {
    id: "bittoken",
    symbol: "bitt",
    name: "BITT",
  },
  {
    id: "bittokens",
    symbol: "bxt",
    name: "BitTokens",
  },
  {
    id: "bittorrent",
    symbol: "btt",
    name: "BitTorrent",
  },
  {
    id: "bittorrent-old",
    symbol: "bttold",
    name: "BitTorrent [OLD]",
  },
  {
    id: "bittube",
    symbol: "tube",
    name: "BitTube",
  },
  {
    id: "bittwatt",
    symbol: "bwt",
    name: "Bittwatt",
  },
  {
    id: "bitvalley",
    symbol: "bitv",
    name: "BitValley",
  },
  {
    id: "bitvalve-2",
    symbol: "btv",
    name: "BitValve",
  },
  {
    id: "bitvote",
    symbol: "btv",
    name: "Bitvote",
  },
  {
    id: "bitwhite",
    symbol: "btw",
    name: "BitWhite",
  },
  {
    id: "bitwin24",
    symbol: "bwi",
    name: "Bitwin24",
  },
  {
    id: "bitz",
    symbol: "bitz",
    name: "bitz",
  },
  {
    id: "bitzen",
    symbol: "bzen",
    name: "Bitzen",
  },
  {
    id: "bitzipp",
    symbol: "bzp",
    name: "BitZipp",
  },
  {
    id: "bixb-coin",
    symbol: "bixb",
    name: "BixB Coin",
  },
  {
    id: "bixcpro",
    symbol: "bixcpro",
    name: "BIXCPRO",
  },
  {
    id: "bizzcoin",
    symbol: "bizz",
    name: "BIZZCOIN",
  },
  {
    id: "bkex-token",
    symbol: "bkk",
    name: "BKEX Chain",
  },
  {
    id: "black-box",
    symbol: "bbox",
    name: "Black Box",
  },
  {
    id: "blackcoin",
    symbol: "blk",
    name: "BlackCoin",
  },
  {
    id: "black-diamond",
    symbol: "diamonds",
    name: "Black Diamond",
  },
  {
    id: "black-dragon-society",
    symbol: "bds",
    name: "Black Dragon Society",
  },
  {
    id: "blackdragon-token",
    symbol: "bdt",
    name: "BlackDragon",
  },
  {
    id: "blackhat-coin",
    symbol: "blkc",
    name: "BlackHat Coin",
  },
  {
    id: "blackhole-protocol",
    symbol: "black",
    name: "BlackHole Protocol",
  },
  {
    id: "blackholeswap-compound-dai-usdc",
    symbol: "bhsc",
    name: "BlackHoleSwap-Compound DAI/USDC",
  },
  {
    id: "black-label",
    symbol: "klb",
    name: "Black Label",
  },
  {
    id: "blackpearl-chain",
    symbol: "bplc",
    name: "BlackPearl",
  },
  {
    id: "black-phoenix",
    symbol: "bpx",
    name: "Black Phoenix",
  },
  {
    id: "blackpoker",
    symbol: "bpkr",
    name: "BlackPoker",
  },
  {
    id: "blackpool-token",
    symbol: "bpt",
    name: "BlackPool",
  },
  {
    id: "blackswan-nodes",
    symbol: "swan",
    name: "BlackSwan Nodes",
  },
  {
    id: "black-token",
    symbol: "black",
    name: "Black Token",
  },
  {
    id: "black-whale",
    symbol: "blk",
    name: "Black Whale",
  },
  {
    id: "blade",
    symbol: "blade",
    name: "BladeWarrior",
  },
  {
    id: "blanc",
    symbol: "blanc",
    name: "Blanc",
  },
  {
    id: "blank",
    symbol: "blank",
    name: "BlockWallet",
  },
  {
    id: "blatform",
    symbol: "bform",
    name: "Blatform",
  },
  {
    id: "blaze-network",
    symbol: "blzn",
    name: "Blaze Network",
  },
  {
    id: "blazestake-staked-sol",
    symbol: "bsol",
    name: "BlazeStake Staked SOL",
  },
  {
    id: "blind-boxes",
    symbol: "bles",
    name: "Blind Boxes",
  },
  {
    id: "blin-metaverse",
    symbol: "blin",
    name: "Blin Metaverse",
  },
  {
    id: "blithe",
    symbol: "blt",
    name: "Blithe",
  },
  {
    id: "blitz-labs",
    symbol: "blitz",
    name: "Blitz Labs",
  },
  {
    id: "blitzpredict",
    symbol: "xbp",
    name: "BlitzPick",
  },
  {
    id: "blizzard",
    symbol: "xblzd",
    name: "Blizzard",
  },
  {
    id: "blizzard-network",
    symbol: "blizz",
    name: "Blizzard Network",
  },
  {
    id: "blizz-finance",
    symbol: "blzz",
    name: "Blizz Finance",
  },
  {
    id: "blocery",
    symbol: "bly",
    name: "Blocery",
  },
  {
    id: "block2play",
    symbol: "b2p",
    name: "Block2Play",
  },
  {
    id: "block-ape-scissors",
    symbol: "bas",
    name: "Block Ape Scissors",
  },
  {
    id: "blockasset",
    symbol: "block",
    name: "Blockasset",
  },
  {
    id: "blockaura",
    symbol: "tbac",
    name: "BlockAura",
  },
  {
    id: "blockbank",
    symbol: "bbank",
    name: "blockbank",
  },
  {
    id: "blockbase",
    symbol: "bbt",
    name: "BlockBase",
  },
  {
    id: "blockblend",
    symbol: "bbl",
    name: "BlockBlend",
  },
  {
    id: "blockburn",
    symbol: "burn",
    name: "BlockBurn",
  },
  {
    id: "blockcdn",
    symbol: "bcdn",
    name: "BlockCDN",
  },
  {
    id: "blockchain-adventurers-guild",
    symbol: "bag",
    name: "Blockchain Adventurers Guild",
  },
  {
    id: "blockchain-based-distributed-super-computing-platform",
    symbol: "mbcc",
    name: "Blockchain-Based Distributed Super Computing Platform",
  },
  {
    id: "blockchain-brawlers",
    symbol: "brwl",
    name: "Blockchain Brawlers",
  },
  {
    id: "blockchain-certified-data-token",
    symbol: "bcdt",
    name: "EvidenZ",
  },
  {
    id: "blockchain-cuties-universe",
    symbol: "cute",
    name: "Blockchain Cuties Universe",
  },
  {
    id: "blockchain-cuties-universe-governance",
    symbol: "bcug",
    name: "Blockchain Cuties Universe Governance",
  },
  {
    id: "blockchain-euro-project",
    symbol: "bepr",
    name: "Blockchain Euro Project",
  },
  {
    id: "blockchain-exchange-alliance",
    symbol: "bxa",
    name: "Blockchain Exchange Alliance",
  },
  {
    id: "blockchain-io",
    symbol: "bcio",
    name: "Blockchain.io",
  },
  {
    id: "blockchain-monster-hunt",
    symbol: "bcmc",
    name: "Blockchain Monster Hunt",
  },
  {
    id: "blockchain-of-hash-power",
    symbol: "bhp",
    name: "Blockchain of Hash Power",
  },
  {
    id: "blockchainpoland",
    symbol: "bcp",
    name: "BlockchainPoland",
  },
  {
    id: "blockchain-quotations-index-token",
    symbol: "bqt",
    name: "Blockchain Quotations Index",
  },
  {
    id: "blockchainspace",
    symbol: "guild",
    name: "BlockchainSpace",
  },
  {
    id: "blockclout",
    symbol: "clout",
    name: "BLOCKCLOUT",
  },
  {
    id: "block-commerce-protocol",
    symbol: "bcp",
    name: "Block Commerce Protocol",
  },
  {
    id: "block-creatures",
    symbol: "moolah",
    name: "Block Creatures",
  },
  {
    id: "block-e",
    symbol: "block-e",
    name: "BLOCK-E",
  },
  {
    id: "blockearth",
    symbol: "blet",
    name: "Blockearth",
  },
  {
    id: "block-forest",
    symbol: "bft",
    name: "Block Forest",
  },
  {
    id: "blockmason-credit-protocol",
    symbol: "bcpt",
    name: "Blockmason Credit Protocol",
  },
  {
    id: "blockmason-link",
    symbol: "blink",
    name: "BlockMason Link",
  },
  {
    id: "blockmax",
    symbol: "ocb",
    name: "BLOCKMAX",
  },
  {
    id: "blockmine",
    symbol: "gold nugget",
    name: "Blockmine",
  },
  {
    id: "block-monsters",
    symbol: "mnstrs",
    name: "Block Monsters",
  },
  {
    id: "blocknet",
    symbol: "block",
    name: "Blocknet",
  },
  {
    id: "blocknotex",
    symbol: "bnox",
    name: "BlockNoteX",
  },
  {
    id: "blockpad",
    symbol: "blos",
    name: "Blockius",
  },
  {
    id: "blockpass",
    symbol: "pass",
    name: "Blockpass",
  },
  {
    id: "blockport",
    symbol: "bux",
    name: "BUX",
  },
  {
    id: "blockrock",
    symbol: "bro$",
    name: "BlockRock",
  },
  {
    id: "blocks",
    symbol: "blocks",
    name: "BLOCKS",
  },
  {
    id: "blocksafu",
    symbol: "bsafu",
    name: "BlockSafu",
  },
  {
    id: "blocksmith-labs-forge",
    symbol: "$forge",
    name: "Blocksmith Labs Forge",
  },
  {
    id: "blockspace-token",
    symbol: "bls",
    name: "Blocks Space",
  },
  {
    id: "blocksport",
    symbol: "bspt",
    name: "Blocksport",
  },
  {
    id: "blocksquare",
    symbol: "bst",
    name: "Blocksquare",
  },
  {
    id: "blockstack",
    symbol: "stx",
    name: "Stacks",
  },
  {
    id: "blockster",
    symbol: "bxr",
    name: "Blockster",
  },
  {
    id: "blockswap-network",
    symbol: "cbsn",
    name: "BlockSwap Network [OLD]",
  },
  {
    id: "blockswap-network-2",
    symbol: "bsn",
    name: "Blockswap Network",
  },
  {
    id: "blocksworkz",
    symbol: "blkz",
    name: "BlocksWorkz",
  },
  {
    id: "blocktanium",
    symbol: "bkt",
    name: "Blocktanium",
  },
  {
    id: "blockv",
    symbol: "vee",
    name: "BLOCKv",
  },
  {
    id: "blockwarrior",
    symbol: "blwa",
    name: "BlockWarrior",
  },
  {
    id: "blockwrk",
    symbol: "wrk",
    name: "BlockWRK",
  },
  {
    id: "blockxpress",
    symbol: "bx",
    name: "BlockXpress",
  },
  {
    id: "bloc-money",
    symbol: "bloc",
    name: "Bloc.Money",
  },
  {
    id: "blocsport-one",
    symbol: "bls",
    name: "Metacourt",
  },
  {
    id: "blocto-token",
    symbol: "blt",
    name: "Blocto",
  },
  {
    id: "blokpad",
    symbol: "bpad",
    name: "BlokPad",
  },
  {
    id: "bloktopia",
    symbol: "blok",
    name: "Bloktopia",
  },
  {
    id: "bloom",
    symbol: "blt",
    name: "Bloom",
  },
  {
    id: "bloomzed-token",
    symbol: "blct",
    name: "Bloomzed Loyalty Club Ticket",
  },
  {
    id: "blossomcoin",
    symbol: "blosm",
    name: "BlossomCoin",
  },
  {
    id: "blowup",
    symbol: "$blow",
    name: "BlowUP",
  },
  {
    id: "blox",
    symbol: "cdt",
    name: "Blox",
  },
  {
    id: "bloxmove-erc20",
    symbol: "blxm",
    name: "bloXmove",
  },
  {
    id: "blox-token",
    symbol: "blox",
    name: "Blox SDK",
  },
  {
    id: "bluca",
    symbol: "bluc",
    name: "Bluca",
  },
  {
    id: "blue",
    symbol: "blue",
    name: "Blue Protocol",
  },
  {
    id: "blueart",
    symbol: "bla",
    name: "BLUEART TOKEN",
  },
  {
    id: "blue-baikal",
    symbol: "bbc",
    name: "Blue Baikal",
  },
  {
    id: "bluebenx",
    symbol: "benx",
    name: "BlueBenx [OLD]",
  },
  {
    id: "bluebenx-2",
    symbol: "benx",
    name: "BlueBenx",
  },
  {
    id: "bluebit",
    symbol: "bbt",
    name: "BlueBit",
  },
  {
    id: "bluechips-token",
    symbol: "bchip",
    name: "BLUECHIPS",
  },
  {
    id: "bluecoin",
    symbol: "blu",
    name: "Bluecoin",
  },
  {
    id: "blue-gold",
    symbol: "blg",
    name: "Blue Gold",
  },
  {
    id: "blue-horizon",
    symbol: "blh",
    name: "Blue Horizon",
  },
  {
    id: "bluejay",
    symbol: "blu",
    name: "Bluejay",
  },
  {
    id: "bluelight",
    symbol: "kale",
    name: "Bluelight",
  },
  {
    id: "blueshift",
    symbol: "blues",
    name: "Blueshift",
  },
  {
    id: "bluesparrow",
    symbol: "bluesparrow",
    name: "BlueSparrow",
  },
  {
    id: "bluesparrow-token",
    symbol: "bluesparrow",
    name: "BlueSparrow [OLD]",
  },
  {
    id: "bluewizard",
    symbol: "wiz",
    name: "BlueWizard",
  },
  {
    id: "blur",
    symbol: "blur",
    name: "Blur",
  },
  {
    id: "blur-finance",
    symbol: "blr",
    name: "Blur Finance",
  },
  {
    id: "blurt",
    symbol: "blurt",
    name: "Blurt",
  },
  {
    id: "bluzelle",
    symbol: "blz",
    name: "Bluzelle",
  },
  {
    id: "bmax",
    symbol: "bmax",
    name: "BMAX",
  },
  {
    id: "bmchain-token",
    symbol: "bmt",
    name: "BMCHAIN",
  },
  {
    id: "bnb48-club-token",
    symbol: "koge",
    name: "BNB48 Club",
  },
  {
    id: "bnbback",
    symbol: "bnbback",
    name: "BNBBack",
  },
  {
    id: "bnb-bank",
    symbol: "bbk",
    name: "BNB Bank",
  },
  {
    id: "bnbdefi",
    symbol: "$defi",
    name: "BNBDeFi",
  },
  {
    id: "bnb-diamond",
    symbol: "bnbd",
    name: "BNB Diamond",
  },
  {
    id: "bnb-dragon",
    symbol: "bnbdragon",
    name: "BnB Dragon",
  },
  {
    id: "bnbheroes-token",
    symbol: "bnbh",
    name: "BnbHeroes",
  },
  {
    id: "bnbpot",
    symbol: "bnbp",
    name: "BNBPot",
  },
  {
    id: "bnb-superheroes",
    symbol: "bsh",
    name: "BNB Superheroes",
  },
  {
    id: "bnbtiger",
    symbol: "bnbtiger",
    name: "BNBTiger",
  },
  {
    id: "bnext-b3x",
    symbol: "b3x",
    name: "Bnext B3X",
  },
  {
    id: "bnktothefuture",
    symbol: "bft",
    name: "BnkToTheFuture",
  },
  {
    id: "bnpl-pay",
    symbol: "bnpl",
    name: "BNPL Pay",
  },
  {
    id: "bnsd-finance",
    symbol: "bnsd",
    name: "BNSD Finance",
  },
  {
    id: "bns-token",
    symbol: "bns",
    name: "BNS",
  },
  {
    id: "bns-token-old",
    symbol: "bns",
    name: "BNS Token [OLD]",
  },
  {
    id: "bnx-finex",
    symbol: "bnx",
    name: "Bnx Finex",
  },
  {
    id: "board",
    symbol: "board",
    name: "Board",
  },
  {
    id: "bob",
    symbol: "bob",
    name: "BOB",
  },
  {
    id: "boba-brewery",
    symbol: "bre",
    name: "Boba Brewery",
  },
  {
    id: "bobadoge",
    symbol: "bdoge",
    name: "BobaDoge",
  },
  {
    id: "boba-network",
    symbol: "boba",
    name: "Boba Network",
  },
  {
    id: "bobatama",
    symbol: "boba",
    name: "Bobamask",
  },
  {
    id: "bobcoin",
    symbol: "bobc",
    name: "Bobcoin",
  },
  {
    id: "bobo-cash",
    symbol: "bobo",
    name: "Bobo Cash",
  },
  {
    id: "bobs_repair",
    symbol: "bob",
    name: "Bob's Repair",
  },
  {
    id: "bocachica",
    symbol: "chica",
    name: "BocaChica",
  },
  {
    id: "bocoin",
    symbol: "boc",
    name: "BOCOIN",
  },
  {
    id: "boda-token",
    symbol: "bodav2",
    name: "BODA",
  },
  {
    id: "bodhi-network",
    symbol: "nbot",
    name: "Bodhi Network",
  },
  {
    id: "bodrumspor-fan-token",
    symbol: "bdrm",
    name: "Bodrumspor Fan Token",
  },
  {
    id: "bofb",
    symbol: "bofb",
    name: "bofb",
  },
  {
    id: "bogged-finance",
    symbol: "bog",
    name: "Bogged Finance",
  },
  {
    id: "bohr-2",
    symbol: "br",
    name: "BoHr",
  },
  {
    id: "boid",
    symbol: "boid",
    name: "Boid",
  },
  {
    id: "boji",
    symbol: "boji",
    name: "Boji",
  },
  {
    id: "boku",
    symbol: "boku",
    name: "Boryoku Dragonz",
  },
  {
    id: "bold-point",
    symbol: "bpt",
    name: "Bold Point",
  },
  {
    id: "bole-token",
    symbol: "bole",
    name: "Boleld",
  },
  {
    id: "bolide",
    symbol: "blid",
    name: "Bolide",
  },
  {
    id: "bolivarcoin",
    symbol: "boli",
    name: "Bolivarcoin",
  },
  {
    id: "bollycoin",
    symbol: "bolly",
    name: "BollyCoin",
  },
  {
    id: "bologna-fc-fan-token",
    symbol: "bfc",
    name: "Bologna FC Fan Token",
  },
  {
    id: "bolt",
    symbol: "bolt",
    name: "Bolt",
  },
  {
    id: "boltt-coin",
    symbol: "boltt",
    name: "BolttCoin",
  },
  {
    id: "bomb",
    symbol: "bomb",
    name: "BOMB",
  },
  {
    id: "bombcrypto-coin",
    symbol: "bomb",
    name: "Bombcrypto Coin",
  },
  {
    id: "bomber-coin",
    symbol: "bcoin",
    name: "BombCrypto",
  },
  {
    id: "bomb-money",
    symbol: "bomb",
    name: "Bomb Money",
  },
  {
    id: "bomb-money-bshare",
    symbol: "bshare",
    name: "Bomb Money BShare",
  },
  {
    id: "bondappetite-usd",
    symbol: "usdap",
    name: "BondAppetite USD",
  },
  {
    id: "bondappetit-gov-token",
    symbol: "bag",
    name: "BondAppetit Governance",
  },
  {
    id: "bonded-cronos",
    symbol: "bcro",
    name: "Bonded Cronos",
  },
  {
    id: "bonded-damm",
    symbol: "bdamm",
    name: "Bonded dAMM",
  },
  {
    id: "bondly",
    symbol: "bondly",
    name: "Forj",
  },
  {
    id: "bondly-defi",
    symbol: "bond",
    name: "Bondly",
  },
  {
    id: "bone-2",
    symbol: "bone",
    name: "Bone",
  },
  {
    id: "bone-fragment",
    symbol: "bft",
    name: "Bone Fragment",
  },
  {
    id: "bone-shibaswap",
    symbol: "bone",
    name: "Bone ShibaSwap",
  },
  {
    id: "boneswap",
    symbol: "bone",
    name: "BoneSwap",
  },
  {
    id: "bone-token",
    symbol: "bone",
    name: "PolyPup Bone",
  },
  {
    id: "bonfi",
    symbol: "bnf",
    name: "BonFi",
  },
  {
    id: "bonfida",
    symbol: "fida",
    name: "Bonfida",
  },
  {
    id: "bonfire",
    symbol: "bonfire",
    name: "Bonfire",
  },
  {
    id: "bongweedcoin",
    symbol: "bwc",
    name: "BongWeedCoin",
  },
  {
    id: "bonk",
    symbol: "bonk",
    name: "Bonk",
  },
  {
    id: "bontecoin",
    symbol: "bonte",
    name: "Bontecoin",
  },
  {
    id: "boo-finance",
    symbol: "boofi",
    name: "Boo Finance",
  },
  {
    id: "boolean",
    symbol: "bool",
    name: "Boolean",
  },
  {
    id: "boo-mirrorworld",
    symbol: "xboo",
    name: "Boo MirrorWorld",
  },
  {
    id: "boop",
    symbol: "boop",
    name: "Boop",
  },
  {
    id: "boorio",
    symbol: "orio",
    name: "Boorio",
  },
  {
    id: "boost",
    symbol: "boost",
    name: "Boost",
  },
  {
    id: "boosted-finance",
    symbol: "boost",
    name: "Boosted Finance",
  },
  {
    id: "boosted-lusd",
    symbol: "blusd",
    name: "Boosted LUSD",
  },
  {
    id: "booster",
    symbol: "boo",
    name: "Booster",
  },
  {
    id: "boosto",
    symbol: "bst",
    name: "BOOSTO",
  },
  {
    id: "bora",
    symbol: "bora",
    name: "BORA",
  },
  {
    id: "borderless-money",
    symbol: "bom",
    name: "Borderless Money",
  },
  {
    id: "borealis",
    symbol: "brl",
    name: "Borealis",
  },
  {
    id: "bored",
    symbol: "$bored",
    name: "Bored",
  },
  {
    id: "bored-apemove",
    symbol: "bape",
    name: "Bored APEmove",
  },
  {
    id: "bored-ape-social-club",
    symbol: "bape",
    name: "Bored Ape Social Club",
  },
  {
    id: "bored-candy-city",
    symbol: "candy",
    name: "Bored Candy City",
  },
  {
    id: "bored-floki-yacht-club",
    symbol: "bfyc",
    name: "Bored Floki Yacht Club",
  },
  {
    id: "boredmemes",
    symbol: "boredm",
    name: "BoredMemes",
  },
  {
    id: "boringdao",
    symbol: "boring",
    name: "BoringDAO",
  },
  {
    id: "boringdao-btc",
    symbol: "obtc",
    name: "BoringDAO BTC",
  },
  {
    id: "boringdao-[old]",
    symbol: "bor",
    name: "BoringDAO [OLD]",
  },
  {
    id: "boring-protocol",
    symbol: "bop",
    name: "Boring Protocol",
  },
  {
    id: "bork",
    symbol: "bork",
    name: "Bork",
  },
  {
    id: "bork-inu",
    symbol: "bork",
    name: "Bork Inu",
  },
  {
    id: "boruto-inu",
    symbol: "boruto",
    name: "Boruto Inu",
  },
  {
    id: "boryoku-genesis-dragonz-index",
    symbol: "drgnz",
    name: "Boryoku Genesis Dragonz Index",
  },
  {
    id: "bosagora",
    symbol: "boa",
    name: "BOSAGORA",
  },
  {
    id: "boson-protocol",
    symbol: "boson",
    name: "Boson Protocol",
  },
  {
    id: "boss",
    symbol: "boss",
    name: "Boss",
  },
  {
    id: "bossdao",
    symbol: "boss",
    name: "BossDao",
  },
  {
    id: "bossswap",
    symbol: "boss",
    name: "Boss Swap",
  },
  {
    id: "bostrom",
    symbol: "boot",
    name: "Bostrom",
  },
  {
    id: "botopiafinance",
    symbol: "btop",
    name: "BotopiaFinance",
  },
  {
    id: "bot-planet",
    symbol: "bot",
    name: "Bot Planet",
  },
  {
    id: "botto",
    symbol: "botto",
    name: "Botto",
  },
  {
    id: "bottos",
    symbol: "bto",
    name: "Bottos",
  },
  {
    id: "botxcoin",
    symbol: "botx",
    name: "BOTXCOIN",
  },
  {
    id: "boulpik-token",
    symbol: "boulpik",
    name: "Boulpik Token",
  },
  {
    id: "bountie-hunter",
    symbol: "bountie",
    name: "Bountie Hunter",
  },
  {
    id: "bounty",
    symbol: "bnty",
    name: "Bounty",
  },
  {
    id: "bounty0x",
    symbol: "bnty",
    name: "Bounty0x",
  },
  {
    id: "bountymarketcap",
    symbol: "bmc",
    name: "BountyMarketCap",
  },
  {
    id: "boutspro",
    symbol: "bouts",
    name: "BoutsPro",
  },
  {
    id: "bovineverse-bvt",
    symbol: "bvt",
    name: "Bovineverse BVT",
  },
  {
    id: "bowscoin",
    symbol: "bsc",
    name: "BowsCoin",
  },
  {
    id: "boxaxis",
    symbol: "baxs",
    name: "BoxAxis",
  },
  {
    id: "boxcasino",
    symbol: "boxc",
    name: "BOXCASINO",
  },
  {
    id: "boxch",
    symbol: "boxch",
    name: "Boxch",
  },
  {
    id: "boxerdoge",
    symbol: "boxerdoge",
    name: "BoxerDOGE",
  },
  {
    id: "boxer-inu",
    symbol: "boxer",
    name: "Boxer Inu",
  },
  {
    id: "box-token",
    symbol: "box",
    name: "BOX Token",
  },
  {
    id: "bozkurt-token",
    symbol: "bt",
    name: "Bozkurt",
  },
  {
    id: "bpm",
    symbol: "bpm",
    name: "BPM",
  },
  {
    id: "b-protocol",
    symbol: "bpro",
    name: "B.Protocol",
  },
  {
    id: "brainiac",
    symbol: "brains",
    name: "Brainiac",
  },
  {
    id: "braintrust",
    symbol: "btrst",
    name: "Braintrust",
  },
  {
    id: "branaverse",
    symbol: "brana",
    name: "Branaverse",
  },
  {
    id: "brandpad-finance",
    symbol: "brand",
    name: "BrandPad Finance",
  },
  {
    id: "brayzin-heist",
    symbol: "brzh",
    name: "Brayzin Heist",
  },
  {
    id: "brazil-fan-token",
    symbol: "bft",
    name: "Brazil National Football Team Fan Token",
  },
  {
    id: "brcp-token",
    symbol: "brcp",
    name: "BRCP",
  },
  {
    id: "bread",
    symbol: "brd",
    name: "Bread",
  },
  {
    id: "breederdao",
    symbol: "breed",
    name: "BreederDAO",
  },
  {
    id: "breezecoin",
    symbol: "brze",
    name: "Breezecoin",
  },
  {
    id: "brewlabs",
    symbol: "brewlabs",
    name: "Brewlabs",
  },
  {
    id: "bribe-token-2",
    symbol: "bribe",
    name: "BRIBE Token",
  },
  {
    id: "brick",
    symbol: "brick",
    name: "r/FortNiteBR Bricks",
  },
  {
    id: "brick-token",
    symbol: "brick",
    name: "Brick",
  },
  {
    id: "bridge",
    symbol: "brg.x",
    name: "Bridges Exchange",
  },
  {
    id: "bridgecoin-2",
    symbol: "brc",
    name: "BridgeCoin",
  },
  {
    id: "bridge-mutual",
    symbol: "bmi",
    name: "Bridge Mutual",
  },
  {
    id: "bridge-network",
    symbol: "brdg",
    name: "Bridge Network",
  },
  {
    id: "bridge-oracle",
    symbol: "brg",
    name: "Bridge Oracle",
  },
  {
    id: "bridgesplit-brand-index",
    symbol: "bbi",
    name: "Bridgesplit Brand Index",
  },
  {
    id: "bridgetech-usdt",
    symbol: "busdt",
    name: "BridgeTech USDT",
  },
  {
    id: "bright-token",
    symbol: "bright",
    name: "BrightID",
  },
  {
    id: "bright-union",
    symbol: "bright",
    name: "Bright Union",
  },
  {
    id: "brightypad",
    symbol: "byp",
    name: "BrightyPad",
  },
  {
    id: "bring",
    symbol: "anoir",
    name: "Noir",
  },
  {
    id: "bring-finance",
    symbol: "brng",
    name: "bRing.Finance",
  },
  {
    id: "brisepad",
    symbol: "bpad",
    name: "Brisepad",
  },
  {
    id: "brise-paradise",
    symbol: "prds",
    name: "Brise Paradise",
  },
  {
    id: "briseswap",
    symbol: "bswap",
    name: "Briseswap",
  },
  {
    id: "britto",
    symbol: "brt",
    name: "Britto",
  },
  {
    id: "brmv-token",
    symbol: "brmv",
    name: "BRMV",
  },
  {
    id: "brn-metaverse",
    symbol: "brn",
    name: "BRN Metaverse",
  },
  {
    id: "brokkr",
    symbol: "bro",
    name: "Brokkr",
  },
  {
    id: "brokoli",
    symbol: "brkl",
    name: "Brokoli",
  },
  {
    id: "broovs-projects",
    symbol: "brs",
    name: "Broovs Projects",
  },
  {
    id: "brother-music-platform",
    symbol: "bmp",
    name: "Brother Music Platform",
  },
  {
    id: "bro-token",
    symbol: "bro",
    name: "Bro",
  },
  {
    id: "browniesswap",
    symbol: "brown",
    name: "BrowniesSwap",
  },
  {
    id: "brz",
    symbol: "brz",
    name: "Brazilian Digital",
  },
  {
    id: "bscarmy",
    symbol: "barmy",
    name: "BscArmy",
  },
  {
    id: "bscbay",
    symbol: "bscb",
    name: "BSCBAY",
  },
  {
    id: "bscbets",
    symbol: "bets",
    name: "BSCBETS",
  },
  {
    id: "bscbond",
    symbol: "bscb",
    name: "BscBond",
  },
  {
    id: "bscex",
    symbol: "bscx",
    name: "BSCEX",
  },
  {
    id: "bscgold",
    symbol: "bscgold",
    name: "BSCGold",
  },
  {
    id: "bsclaunch",
    symbol: "bsl",
    name: "BSClaunch",
  },
  {
    id: "bsc-memepad",
    symbol: "bscm",
    name: "BSC MemePad",
  },
  {
    id: "bscpad",
    symbol: "bscpad",
    name: "BSCPAD",
  },
  {
    id: "bscstarter",
    symbol: "start",
    name: "Starter.xyz",
  },
  {
    id: "bsc-station",
    symbol: "bscs",
    name: "BSC Station",
  },
  {
    id: "bscview",
    symbol: "bscv",
    name: "Bscview",
  },
  {
    id: "bsdium",
    symbol: "bscd",
    name: "BSDium",
  },
  {
    id: "bsha3",
    symbol: "bsha3",
    name: "BSHA3",
  },
  {
    id: "bsocial",
    symbol: "bins",
    name: "BSocial",
  },
  {
    id: "btc-2x-flexible-leverage-index",
    symbol: "btc2x-fli",
    name: "BTC 2x Flexible Leverage Index",
  },
  {
    id: "btc-2x-flexible-leverage-index-polygon",
    symbol: "btc2x-fli-p",
    name: "BTC 2x Flexible Leverage Index (Polygon)",
  },
  {
    id: "btcmoon",
    symbol: "btcm",
    name: "BTCMoon",
  },
  {
    id: "btc-proxy",
    symbol: "btcpx",
    name: "BTC Proxy",
  },
  {
    id: "btc-standard-hashrate-token",
    symbol: "btcst",
    name: "BTC Standard Hashrate Token",
  },
  {
    id: "btf",
    symbol: "btf",
    name: "Bitcoin Faith",
  },
  {
    id: "bt-finance",
    symbol: "bt",
    name: "BT.Finance",
  },
  {
    id: "btmiracles",
    symbol: "bm",
    name: "BtMiracles",
  },
  {
    id: "btour-chain",
    symbol: "msot",
    name: "BTour Chain",
  },
  {
    id: "btrips",
    symbol: "btr",
    name: "BTRIPS",
  },
  {
    id: "bts-chain",
    symbol: "btsc",
    name: "BTS Chain",
  },
  {
    id: "btse-token",
    symbol: "btse",
    name: "BTSE Token",
  },
  {
    id: "btu-protocol",
    symbol: "btu",
    name: "BTU Protocol",
  },
  {
    id: "bubblefong",
    symbol: "bbf",
    name: "Bubblefong",
  },
  {
    id: "bubble-network",
    symbol: "bbl",
    name: "Bubble Network",
  },
  {
    id: "buckhath-coin",
    symbol: "bhig",
    name: "BuckHath Coin",
  },
  {
    id: "bucky-badger",
    symbol: "bucky",
    name: "Bucky Badger",
  },
  {
    id: "buddy",
    symbol: "bud",
    name: "Buddy",
  },
  {
    id: "buddy-dao",
    symbol: "bdy",
    name: "Buddy DAO",
  },
  {
    id: "buff-coin",
    symbol: "buff",
    name: "Buff Coin",
  },
  {
    id: "buff-doge-coin",
    symbol: "dogecoin",
    name: "Buff Doge Coin",
  },
  {
    id: "buffedshiba",
    symbol: "bshib",
    name: "BuffedShiba",
  },
  {
    id: "buff-floki",
    symbol: "bufloki",
    name: "Buff Floki",
  },
  {
    id: "buff-samo",
    symbol: "bsamo",
    name: "Buff Samo",
  },
  {
    id: "buff-shiba-inu",
    symbol: "buffshiba",
    name: "Buff Shiba Inu",
  },
  {
    id: "buffswap",
    symbol: "buffs",
    name: "BuffSwap",
  },
  {
    id: "bugg-finance",
    symbol: "bugg",
    name: "BUGG Finance",
  },
  {
    id: "bugg-inu",
    symbol: "bugg",
    name: "Bugg Inu",
  },
  {
    id: "buhund",
    symbol: "buh",
    name: "Buhund",
  },
  {
    id: "buidl-acadamey",
    symbol: "$bdgv",
    name: "BUIDL Acadamey",
  },
  {
    id: "build",
    symbol: "build",
    name: "BUILD",
  },
  {
    id: "build-finance",
    symbol: "build",
    name: "BUILD Finance",
  },
  {
    id: "buildup",
    symbol: "bup",
    name: "BuildUp",
  },
  {
    id: "bukh",
    symbol: "bukh",
    name: "bUKHI",
  },
  {
    id: "bulk-network",
    symbol: "bulk",
    name: "Bulk Network",
  },
  {
    id: "bullbankers",
    symbol: "bankers",
    name: "BullBankers",
  },
  {
    id: "bull-btc-club",
    symbol: "bbc",
    name: "Bull BTC Club",
  },
  {
    id: "bull-coin",
    symbol: "bull",
    name: "Bull Coin",
  },
  {
    id: "bulldog-billionaires",
    symbol: "bone",
    name: "Bulldog Billionaires",
  },
  {
    id: "bulldog-coin",
    symbol: "bulldog",
    name: "BullDog Coin",
  },
  {
    id: "bulldoge-chain",
    symbol: "wbdc",
    name: "BullDoge Chain",
  },
  {
    id: "bulldoge-inu",
    symbol: "bulld",
    name: "Bulldoge Inu",
  },
  {
    id: "bulldog-inu",
    symbol: "bull",
    name: "BullDog Inu",
  },
  {
    id: "bulldogswap",
    symbol: "budg",
    name: "BullDogSwap",
  },
  {
    id: "bullet-2",
    symbol: "blt",
    name: "Bullet",
  },
  {
    id: "bull-game",
    symbol: "bgt",
    name: "Bull Game ToKens",
  },
  {
    id: "bullieverse",
    symbol: "bull",
    name: "Bullieverse",
  },
  {
    id: "bullion",
    symbol: "cbx",
    name: "Bullion",
  },
  {
    id: "bullionfx",
    symbol: "bull",
    name: "BullionFX",
  },
  {
    id: "bullishapes",
    symbol: "bullish",
    name: "BullishApes",
  },
  {
    id: "bullperks",
    symbol: "blp",
    name: "BullPerks",
  },
  {
    id: "bullrise",
    symbol: "bull",
    name: "BullRise",
  },
  {
    id: "bullshit-inu",
    symbol: "bull",
    name: "Bullshit Inu",
  },
  {
    id: "bullswap-protocol",
    symbol: "bvl",
    name: "Bullswap Protocol",
  },
  {
    id: "bully-inu",
    symbol: "binu",
    name: "Bully Inu",
  },
  {
    id: "bumoon",
    symbol: "bumn",
    name: "BUMooN",
  },
  {
    id: "bumper",
    symbol: "bump",
    name: "Bumper",
  },
  {
    id: "bundles",
    symbol: "bund",
    name: "Bundles",
  },
  {
    id: "bunicorn",
    symbol: "buni",
    name: "Bunicorn",
  },
  {
    id: "bunnycoin",
    symbol: "bun",
    name: "Bunnycoin",
  },
  {
    id: "bunnyducky",
    symbol: "bud",
    name: "BunnyDucky",
  },
  {
    id: "bunny-king-metaverse",
    symbol: "bkm",
    name: "Bunny King Metaverse",
  },
  {
    id: "bunnypark",
    symbol: "bp",
    name: "BunnyPark",
  },
  {
    id: "bunnypark-game",
    symbol: "bg",
    name: "BunnyPark Game",
  },
  {
    id: "bunnyrocket",
    symbol: "bunnyrocket",
    name: "BunnyRocket",
  },
  {
    id: "bunnytoken",
    symbol: "bunny",
    name: "Bunny",
  },
  {
    id: "bunny-token-polygon",
    symbol: "polybunny",
    name: "Pancake Bunny Polygon",
  },
  {
    id: "bunnyverse",
    symbol: "bnv",
    name: "BunnyVerse",
  },
  {
    id: "bunny-zilla",
    symbol: "bunnyzilla",
    name: "Bunny Zilla",
  },
  {
    id: "bunscake",
    symbol: "bscake",
    name: "Bunscake",
  },
  {
    id: "burency",
    symbol: "buy",
    name: "Burency",
  },
  {
    id: "burger-swap",
    symbol: "burger",
    name: "BurgerCities",
  },
  {
    id: "burn1coin",
    symbol: "burn1coin",
    name: "Burn1Coin",
  },
  {
    id: "burnfloki",
    symbol: "bfloki",
    name: "BurnFloki",
  },
  {
    id: "burningmoon",
    symbol: "bm",
    name: "BurningMoon",
  },
  {
    id: "burnt-cake",
    symbol: "bcake",
    name: "Burnt Cake",
  },
  {
    id: "burnz",
    symbol: "burnz",
    name: "BURNZ",
  },
  {
    id: "burp",
    symbol: "burp",
    name: "Burp",
  },
  {
    id: "burrito-boyz-floor-index",
    symbol: "burr",
    name: "Burrito Boyz Floor Index",
  },
  {
    id: "burrow",
    symbol: "brrr",
    name: "Burrow",
  },
  {
    id: "bursaspor-fan-token",
    symbol: "tmsh",
    name: "Bursaspor Fan Token",
  },
  {
    id: "busdx",
    symbol: "busdx",
    name: "BUSDX",
  },
  {
    id: "busdx-fuel",
    symbol: "xfuel",
    name: "BUSDX Fuel",
  },
  {
    id: "busy-dao",
    symbol: "busy",
    name: "Busy",
  },
  {
    id: "buttcoin-2",
    symbol: "butt",
    name: "Button",
  },
  {
    id: "butterfly-protocol-2",
    symbol: "bfly",
    name: "Butterfly Protocol",
  },
  {
    id: "buying",
    symbol: "buy",
    name: "Buying.com",
  },
  {
    id: "buymainstreet",
    symbol: "mainst",
    name: "Main Street",
  },
  {
    id: "buymore",
    symbol: "more",
    name: "BuyMORE",
  },
  {
    id: "buyucoin-token",
    symbol: "buc",
    name: "BuyUCoin",
  },
  {
    id: "buzz",
    symbol: "buzz",
    name: "BUZZ",
  },
  {
    id: "buzzshow",
    symbol: "gldy",
    name: "Buzzshow",
  },
  {
    id: "b-watch-box",
    symbol: "box",
    name: "B.watch Box",
  },
  {
    id: "bxh",
    symbol: "bxh",
    name: "BXH",
  },
  {
    id: "bxmi-token",
    symbol: "bxmi",
    name: "Bxmi",
  },
  {
    id: "byepix",
    symbol: "epix",
    name: "Byepix",
  },
  {
    id: "byteball",
    symbol: "gbyte",
    name: "Obyte",
  },
  {
    id: "bytecoin",
    symbol: "bcn",
    name: "Bytecoin",
  },
  {
    id: "byteex",
    symbol: "bx",
    name: "ByteEx",
  },
  {
    id: "bytenext",
    symbol: "bnu",
    name: "ByteNext",
  },
  {
    id: "bytom",
    symbol: "btm",
    name: "Bytom",
  },
  {
    id: "bytz",
    symbol: "bytz",
    name: "BYTZ",
  },
  {
    id: "bzx-protocol",
    symbol: "bzrx",
    name: "bZx Protocol",
  },
  {
    id: "bzzone",
    symbol: "bzzone",
    name: "Bzzone",
  },
  {
    id: "c2x-2",
    symbol: "ctx",
    name: "C2X",
  },
  {
    id: "caashcow",
    symbol: "cow",
    name: "CaashCow",
  },
  {
    id: "caave",
    symbol: "caave",
    name: "cAAVE",
  },
  {
    id: "cabana-token",
    symbol: "cba",
    name: "Cabana",
  },
  {
    id: "cache-gold",
    symbol: "cgt",
    name: "CACHE Gold",
  },
  {
    id: "cad-coin",
    symbol: "cadc",
    name: "CAD Coin",
  },
  {
    id: "caduceus",
    symbol: "cmp",
    name: "Caduceus",
  },
  {
    id: "cafeswap-token",
    symbol: "brew",
    name: "CafeSwap",
  },
  {
    id: "caica-coin",
    symbol: "cicc",
    name: "CAICA Coin",
  },
  {
    id: "caietf-finance",
    symbol: "cai",
    name: "CAIETF.Finance",
  },
  {
    id: "cairo-finance-2",
    symbol: "caf",
    name: "CAIRO",
  },
  {
    id: "cake-bank",
    symbol: "cakebank",
    name: "Cake Bank",
  },
  {
    id: "cake-monster",
    symbol: "monsta",
    name: "Cake Monster",
  },
  {
    id: "cakepad",
    symbol: "ckp",
    name: "CakePad",
  },
  {
    id: "cakepow",
    symbol: "cakepow",
    name: "CakePoW",
  },
  {
    id: "cakepunks",
    symbol: "cakepunks",
    name: "CAKEPUNKS",
  },
  {
    id: "cakeswap",
    symbol: "cakeswap",
    name: "CakeSwap",
  },
  {
    id: "caketools",
    symbol: "ckt",
    name: "Caketools",
  },
  {
    id: "cakewswap",
    symbol: "cakew",
    name: "CakeWSwap",
  },
  {
    id: "calamari-network",
    symbol: "kma",
    name: "Calamari Network",
  },
  {
    id: "calaswap",
    symbol: "cls",
    name: "Calaswap",
  },
  {
    id: "calaxy",
    symbol: "clxy",
    name: "Calaxy",
  },
  {
    id: "calicoin",
    symbol: "cali",
    name: "CaliCoin",
  },
  {
    id: "californium",
    symbol: "cf",
    name: "Californium",
  },
  {
    id: "callisto",
    symbol: "clo",
    name: "Callisto Network",
  },
  {
    id: "calo-app",
    symbol: "calo",
    name: "Calo",
  },
  {
    id: "calo-fit",
    symbol: "fit",
    name: "Calo FIT",
  },
  {
    id: "calo-indoor",
    symbol: "ifit",
    name: "Calo Indoor",
  },
  {
    id: "camelcoin",
    symbol: "cml",
    name: "Camelcoin",
  },
  {
    id: "camelot-token",
    symbol: "grail",
    name: "Camelot Token",
  },
  {
    id: "cameltoken",
    symbol: "cmlt",
    name: "Camel",
  },
  {
    id: "camp",
    symbol: "camp",
    name: "Camp",
  },
  {
    id: "canadian-inuit-dog",
    symbol: "cadinu",
    name: "Canadian Inuit Dog [OLD]",
  },
  {
    id: "canadian-inuit-dog-2",
    symbol: "cadinu",
    name: "Canadian Inuit Dog",
  },
  {
    id: "canary",
    symbol: "cnr",
    name: "Canary",
  },
  {
    id: "canary-dollar",
    symbol: "cand",
    name: "Canary Dollar",
  },
  {
    id: "canaryx",
    symbol: "cnyx",
    name: "CanaryX",
  },
  {
    id: "candylad",
    symbol: "candylad",
    name: "Candylad",
  },
  {
    id: "cannabiscoin",
    symbol: "cann",
    name: "CannabisCoin",
  },
  {
    id: "cannumo",
    symbol: "canu",
    name: "Cannumo",
  },
  {
    id: "cantina-royale",
    symbol: "crt",
    name: "Cantina Royale",
  },
  {
    id: "canto",
    symbol: "canto",
    name: "CANTO",
  },
  {
    id: "canto-inu",
    symbol: "cinu",
    name: "Canto Inu",
  },
  {
    id: "cap",
    symbol: "cap",
    name: "Cap",
  },
  {
    id: "capital-aggregator-token",
    symbol: "cat+",
    name: "Capital Aggregator",
  },
  {
    id: "capital-dao-starter-token",
    symbol: "cds",
    name: "Capital DAO Starter",
  },
  {
    id: "capital-x-cell",
    symbol: "cxc",
    name: "CAPITAL X CELL",
  },
  {
    id: "capitol",
    symbol: "cptl",
    name: "Capitol",
  },
  {
    id: "cappasity",
    symbol: "capp",
    name: "Cappasity",
  },
  {
    id: "capricorn",
    symbol: "corn",
    name: "Capricorn",
  },
  {
    id: "captain",
    symbol: "capt",
    name: "Captain",
  },
  {
    id: "captain-inu",
    symbol: "cptinu",
    name: "Captain Inu",
  },
  {
    id: "captain-planet",
    symbol: "ctp",
    name: "Captain Planet",
  },
  {
    id: "captain-shibarrow",
    symbol: "shibarrow",
    name: "Captain Shibarrow",
  },
  {
    id: "capybara",
    symbol: "capy",
    name: "Capybara",
  },
  {
    id: "carat",
    symbol: "carat",
    name: "CARAT",
  },
  {
    id: "carbofoot",
    symbol: "cfoot",
    name: "CarboFoot",
  },
  {
    id: "carbon",
    symbol: "crbn",
    name: "Carbon",
  },
  {
    id: "carboncoin",
    symbol: "carbon",
    name: "Carboncoin",
  },
  {
    id: "carbon-credit",
    symbol: "cct",
    name: "Carbon Credit",
  },
  {
    id: "carbon-labs",
    symbol: "carb",
    name: "Carbon Labs",
  },
  {
    id: "carbon-seed",
    symbol: "carbon",
    name: "Carbon Seed",
  },
  {
    id: "carbon-usd",
    symbol: "usc",
    name: "Carbon USD",
  },
  {
    id: "car-coin",
    symbol: "ccm",
    name: "Car Coin",
  },
  {
    id: "cardalonia",
    symbol: "lonia",
    name: "Cardalonia",
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
  },
  {
    id: "cardanoevo",
    symbol: "cevo",
    name: "CardanoEvo",
  },
  {
    id: "cardence",
    symbol: "$crdn",
    name: "Cardence",
  },
  {
    id: "cardiocoin",
    symbol: "crdc",
    name: "Cardiocoin",
  },
  {
    id: "cards-of-bsc",
    symbol: "cob",
    name: "Cards of BSC",
  },
  {
    id: "cardstack",
    symbol: "card",
    name: "Cardstack",
  },
  {
    id: "cardstarter",
    symbol: "cards",
    name: "Cardstarter",
  },
  {
    id: "cardwallet",
    symbol: "cw",
    name: "CardWallet",
  },
  {
    id: "carecoin",
    symbol: "care",
    name: "CareCoin",
  },
  {
    id: "care-coin",
    symbol: "crc",
    name: "Care Coin",
  },
  {
    id: "cargolink",
    symbol: "clx",
    name: "CargoLink",
  },
  {
    id: "cargox",
    symbol: "cxo",
    name: "CargoX",
  },
  {
    id: "carma-coin",
    symbol: "carma",
    name: "Carma Coin",
  },
  {
    id: "carnomaly",
    symbol: "carr",
    name: "Carnomaly",
  },
  {
    id: "carr-finance",
    symbol: "crt",
    name: "Carrot Finance",
  },
  {
    id: "carrot-stable-coin",
    symbol: "carrot",
    name: "Carrot Stable Coin",
  },
  {
    id: "carrot-token",
    symbol: "carrot",
    name: "Carrot Token",
  },
  {
    id: "carry",
    symbol: "cre",
    name: "Carry",
  },
  {
    id: "cartesi",
    symbol: "ctsi",
    name: "Cartesi",
  },
  {
    id: "carvertical",
    symbol: "cv",
    name: "carVertical",
  },
  {
    id: "cash2",
    symbol: "cash2",
    name: "Cash2",
  },
  {
    id: "cashaa",
    symbol: "cas",
    name: "Cashaa",
  },
  {
    id: "cashbackpro",
    symbol: "cbp",
    name: "CashBackPro",
  },
  {
    id: "cashbet-coin",
    symbol: "cbc",
    name: "CBC.network",
  },
  {
    id: "cashcats",
    symbol: "$cats",
    name: "CashCats",
  },
  {
    id: "cashcow",
    symbol: "cow",
    name: "CashCow",
  },
  {
    id: "cashdog",
    symbol: "cashdog",
    name: "CashDog",
  },
  {
    id: "cash-driver",
    symbol: "cd",
    name: "Cash Driver",
  },
  {
    id: "cashera",
    symbol: "csr",
    name: "Cashera",
  },
  {
    id: "cashpay",
    symbol: "cpz",
    name: "CashPay",
  },
  {
    id: "cash-tech",
    symbol: "cate",
    name: "Cash Tech",
  },
  {
    id: "cashzone",
    symbol: "cashz",
    name: "CashZone",
  },
  {
    id: "casinocoin",
    symbol: "csc",
    name: "Casinocoin",
  },
  {
    id: "casinoxmetaverse",
    symbol: "$casio",
    name: "CasinoXMetaverse",
  },
  {
    id: "casper-network",
    symbol: "cspr",
    name: "Casper Network",
  },
  {
    id: "casperpad",
    symbol: "cspd",
    name: "CasperPad",
  },
  {
    id: "castello-coin",
    symbol: "cast",
    name: "Castello Coin",
  },
  {
    id: "castweet",
    symbol: "ctt",
    name: "Castweet",
  },
  {
    id: "cat",
    symbol: "cat",
    name: "Kitty Finance CAT",
  },
  {
    id: "catalina-whales-index",
    symbol: "whales",
    name: "Catalina Whales Index",
  },
  {
    id: "catapult",
    symbol: "atd",
    name: "A2DAO",
  },
  {
    id: "catapult-ac",
    symbol: "cplt",
    name: "Catapult.ac",
  },
  {
    id: "catbonk",
    symbol: "cabo",
    name: "Catbonk",
  },
  {
    id: "catboy-2",
    symbol: "catboy",
    name: "CatBoy",
  },
  {
    id: "catbread",
    symbol: "catbread",
    name: "CatBread",
  },
  {
    id: "cat-cat-token",
    symbol: "cat",
    name: "Cat",
  },
  {
    id: "catcher-dao",
    symbol: "cdao",
    name: "Catcher DAO",
  },
  {
    id: "catch-up",
    symbol: "cu",
    name: "Catch Up",
  },
  {
    id: "catchy",
    symbol: "catchy",
    name: "Catchy",
  },
  {
    id: "catcoin-cash",
    symbol: "catcoin",
    name: "CatCoin.com",
  },
  {
    id: "catcoin-token",
    symbol: "cats",
    name: "CatCoin Token",
  },
  {
    id: "catecoin",
    symbol: "cate",
    name: "CateCoin",
  },
  {
    id: "catex-token",
    symbol: "catt",
    name: "Catex",
  },
  {
    id: "catge-coin",
    symbol: "catge",
    name: "Catge Coin",
  },
  {
    id: "catgirl",
    symbol: "catgirl",
    name: "Catgirl",
  },
  {
    id: "catheon-gaming",
    symbol: "catheon",
    name: "Catheon Gaming",
  },
  {
    id: "cato",
    symbol: "cato",
    name: "CATO",
  },
  {
    id: "catocoin",
    symbol: "cato",
    name: "CatoCoin",
  },
  {
    id: "catpay",
    symbol: "catpay",
    name: "CATpay",
  },
  {
    id: "catscoin",
    symbol: "cats",
    name: "Catscoin",
  },
  {
    id: "cat-sphynx",
    symbol: "cpx",
    name: "Cat Sphynx",
  },
  {
    id: "cat-token",
    symbol: "cat",
    name: "Mooncat CAT",
  },
  {
    id: "catvills-coin",
    symbol: "catvills",
    name: "Catvills Coin",
  },
  {
    id: "catzcoin",
    symbol: "catz",
    name: "CatzCoin",
  },
  {
    id: "cavapoo",
    symbol: "cava",
    name: "Cavapoo",
  },
  {
    id: "cave",
    symbol: "cave",
    name: "CaveWorld",
  },
  {
    id: "cbbn-token",
    symbol: "cbbn",
    name: "CBBN",
  },
  {
    id: "cbdao",
    symbol: "bree",
    name: "CBDAO",
  },
  {
    id: "cberry",
    symbol: "cby",
    name: "CBerry",
  },
  {
    id: "cbet-token",
    symbol: "cbet",
    name: "CBET",
  },
  {
    id: "cbfinu",
    symbol: "cbfinu",
    name: "CBFINU",
  },
  {
    id: "cbomber",
    symbol: "cbomber",
    name: "CBOMBER",
  },
  {
    id: "cc",
    symbol: "cc",
    name: "CC",
  },
  {
    id: "cca",
    symbol: "cca",
    name: "CCA",
  },
  {
    id: "c-charge",
    symbol: "cchg",
    name: "C+Charge",
  },
  {
    id: "ccomp",
    symbol: "ccomp",
    name: "cCOMP",
  },
  {
    id: "ccore",
    symbol: "cco",
    name: "Ccore",
  },
  {
    id: "ccswap",
    symbol: "cc",
    name: "CCSwap",
  },
  {
    id: "ccuniverse",
    symbol: "uvu",
    name: "CCUniverse",
  },
  {
    id: "cdai",
    symbol: "cdai",
    name: "cDAI",
  },
  {
    id: "cdbio",
    symbol: "mcd",
    name: "CDbio",
  },
  {
    id: "cdzexchange",
    symbol: "cdz",
    name: "CDzExchange",
  },
  {
    id: "ceasports",
    symbol: "cspt",
    name: "CEASports",
  },
  {
    id: "cebiolabs",
    symbol: "cbsl",
    name: "CeBioLabs",
  },
  {
    id: "cedars",
    symbol: "ceds",
    name: "CEDARS",
  },
  {
    id: "ceek",
    symbol: "ceek",
    name: "CEEK Smart VR",
  },
  {
    id: "ceji",
    symbol: "ceji",
    name: "Ceji",
  },
  {
    id: "celcoin",
    symbol: "celc",
    name: "CelCoin",
  },
  {
    id: "celeb",
    symbol: "celeb",
    name: "Celeb",
  },
  {
    id: "celer-network",
    symbol: "celr",
    name: "Celer Network",
  },
  {
    id: "celery",
    symbol: "cly",
    name: "Celery",
  },
  {
    id: "celestial",
    symbol: "celt",
    name: "Celestial",
  },
  {
    id: "celestial-unity",
    symbol: "cu",
    name: "Celestial Unity",
  },
  {
    id: "celletf",
    symbol: "ecell",
    name: "Consensus Cell Network",
  },
  {
    id: "cellframe",
    symbol: "cell",
    name: "Cellframe",
  },
  {
    id: "celo",
    symbol: "celo",
    name: "Celo",
  },
  {
    id: "celo-dollar",
    symbol: "cusd",
    name: "Celo Dollar",
  },
  {
    id: "celo-euro",
    symbol: "ceur",
    name: "Celo Euro",
  },
  {
    id: "celo-euro-wormhole",
    symbol: "ceur",
    name: "Celo Euro (Wormhole)",
  },
  {
    id: "celolaunch",
    symbol: "cla",
    name: "CeloLaunch",
  },
  {
    id: "celo-real-creal",
    symbol: "creal",
    name: "Celo Real (cREAL)",
  },
  {
    id: "celostarter",
    symbol: "cstar",
    name: "CeloStarter",
  },
  {
    id: "celsius-degree-token",
    symbol: "cel",
    name: "Celsius Network",
  },
  {
    id: "celsiusx-wrapped-ada",
    symbol: "cxada",
    name: "CelsiusX Wrapped ADA",
  },
  {
    id: "celsiusx-wrapped-btc",
    symbol: "cxbtc",
    name: "CelsiusX Wrapped BTC",
  },
  {
    id: "celsiusx-wrapped-doge",
    symbol: "cxdoge",
    name: "CelsiusX Wrapped DOGE",
  },
  {
    id: "celsiusx-wrapped-eth",
    symbol: "cxeth",
    name: "CelsiusX Wrapped ETH",
  },
  {
    id: "cens-world",
    symbol: "cens",
    name: "Cens World",
  },
  {
    id: "centaur",
    symbol: "cntr",
    name: "Centaur",
  },
  {
    id: "centaurify",
    symbol: "cent",
    name: "Centaurify",
  },
  {
    id: "centcex",
    symbol: "cenx",
    name: "Centcex",
  },
  {
    id: "centralex",
    symbol: "cenx",
    name: "Centralex",
  },
  {
    id: "centrality",
    symbol: "cennz",
    name: "CENNZnet",
  },
  {
    id: "centric-cash",
    symbol: "cns",
    name: "Centric Swap",
  },
  {
    id: "centrifuge",
    symbol: "cfg",
    name: "Centrifuge",
  },
  {
    id: "centrofi",
    symbol: "centro",
    name: "CentroFi",
  },
  {
    id: "centurion",
    symbol: "cnt",
    name: "Centurion",
  },
  {
    id: "centurion-inu",
    symbol: "cent",
    name: "Centurion Inu",
  },
  {
    id: "centurion-invest",
    symbol: "cix",
    name: "Centurion Invest",
  },
  {
    id: "cerberus-2",
    symbol: "crbrus",
    name: "Cerberus",
  },
  {
    id: "cere-network",
    symbol: "cere",
    name: "Cere Network",
  },
  {
    id: "ceres",
    symbol: "ceres",
    name: "Ceres",
  },
  {
    id: "cerium",
    symbol: "xce",
    name: "Cerium",
  },
  {
    id: "certik",
    symbol: "ctk",
    name: "Shentu",
  },
  {
    id: "certrise",
    symbol: "cert",
    name: "CertRise",
  },
  {
    id: "certurium",
    symbol: "crt",
    name: "Certurium",
  },
  {
    id: "cetf",
    symbol: "cetf",
    name: "Cell ETF",
  },
  {
    id: "cexlt",
    symbol: "clt",
    name: "Cexlt",
  },
  {
    id: "cfl365-finance",
    symbol: "cfl365",
    name: "CFL365 Finance",
  },
  {
    id: "cforforum-token",
    symbol: "cfo",
    name: "Cfoforum",
  },
  {
    id: "cfx-quantum",
    symbol: "cfxq",
    name: "CFX Quantum",
  },
  {
    id: "chads-vc",
    symbol: "chads",
    name: "CHADS VC",
  },
  {
    id: "chain-2",
    symbol: "xcn",
    name: "Chain",
  },
  {
    id: "chain4energy",
    symbol: "c4e",
    name: "Chain4Energy",
  },
  {
    id: "chainbing",
    symbol: "cbg",
    name: "Chainbing",
  },
  {
    id: "chaincade",
    symbol: "chaincade",
    name: "ChainCade",
  },
  {
    id: "chain-colosseum",
    symbol: "colos",
    name: "Chain Colosseum",
  },
  {
    id: "chaincorn",
    symbol: "cornx",
    name: "Chaincorn",
  },
  {
    id: "chain-estate-dao",
    symbol: "ches",
    name: "Chain Estate DAO",
  },
  {
    id: "chainflix",
    symbol: "cfxt",
    name: "Chainflix",
  },
  {
    id: "chain-games",
    symbol: "chain",
    name: "Chain Games",
  },
  {
    id: "chainge-finance",
    symbol: "chng",
    name: "Chainge Finance",
  },
  {
    id: "chain-guardians",
    symbol: "cgg",
    name: "Chain Guardians",
  },
  {
    id: "chainium",
    symbol: "chx",
    name: "WeOwn",
  },
  {
    id: "chainlink",
    symbol: "link",
    name: "Chainlink",
  },
  {
    id: "chainlink-wormhole",
    symbol: "link",
    name: "Chainlink (Wormhole)",
  },
  {
    id: "chainlist",
    symbol: "clist",
    name: "Chainlist",
  },
  {
    id: "chain-of-legends",
    symbol: "cleg",
    name: "Chain of Legends",
  },
  {
    id: "chainpay",
    symbol: "cpay",
    name: "Chainpay",
  },
  {
    id: "chain-pet",
    symbol: "cpet",
    name: "Chain Pet",
  },
  {
    id: "chainport",
    symbol: "portx",
    name: "ChainPort",
  },
  {
    id: "chains",
    symbol: "cha",
    name: "Chains",
  },
  {
    id: "chainsquare",
    symbol: "chs",
    name: "Chainsquare",
  },
  {
    id: "chainswap",
    symbol: "asap",
    name: "Chainswap",
  },
  {
    id: "chainswaps",
    symbol: "chain",
    name: "ChainSwaps",
  },
  {
    id: "chain-wars-essence",
    symbol: "cwe",
    name: "Chain Wars",
  },
  {
    id: "chainx",
    symbol: "pcx",
    name: "ChainX",
  },
  {
    id: "challenge-coin",
    symbol: "hero",
    name: "Challenge Coin",
  },
  {
    id: "challengedac",
    symbol: "chl",
    name: "ChallengeDAC",
  },
  {
    id: "champion",
    symbol: "cham",
    name: "Champion",
  },
  {
    id: "change",
    symbol: "cag",
    name: "Change",
  },
  {
    id: "changenow",
    symbol: "now",
    name: "ChangeNOW",
  },
  {
    id: "changer",
    symbol: "cng",
    name: "Changer",
  },
  {
    id: "changex",
    symbol: "change",
    name: "ChangeX",
  },
  {
    id: "channels",
    symbol: "can",
    name: "Channels",
  },
  {
    id: "chaos",
    symbol: "chaos",
    name: "Chaos",
  },
  {
    id: "chaotic-finance",
    symbol: "chaos",
    name: "Chaotic Finance",
  },
  {
    id: "charactbit",
    symbol: "chb",
    name: "Charactbit",
  },
  {
    id: "charg-coin",
    symbol: "chg",
    name: "Charg Coin",
  },
  {
    id: "chargedefi-charge",
    symbol: "charge",
    name: "ChargeDeFi Charge",
  },
  {
    id: "chargedefi-static",
    symbol: "static",
    name: "ChargeDeFi Static",
  },
  {
    id: "charged-particles",
    symbol: "ionx",
    name: "Charged Particles",
  },
  {
    id: "charitas",
    symbol: "char",
    name: "Charitas",
  },
  {
    id: "charity-alfa",
    symbol: "mich",
    name: "Charity Alfa",
  },
  {
    id: "charitydao",
    symbol: "chd",
    name: "CharityDAO",
  },
  {
    id: "charity-dao-token",
    symbol: "chdao",
    name: "Charity DAO Token",
  },
  {
    id: "charizard-inu",
    symbol: "charizard",
    name: "Charizard Inu",
  },
  {
    id: "charli3",
    symbol: "c3",
    name: "Charli3",
  },
  {
    id: "charlie-finance",
    symbol: "cht",
    name: "Charlie Finance",
  },
  {
    id: "charm",
    symbol: "charm",
    name: "Charm",
  },
  {
    id: "chartex",
    symbol: "chart",
    name: "ChartEx",
  },
  {
    id: "checkdot",
    symbol: "cdt",
    name: "CheckDot",
  },
  {
    id: "checkerchain",
    symbol: "checkr",
    name: "CheckerChain",
  },
  {
    id: "checkmate-token",
    symbol: "cmt",
    name: "CheckMate Token",
  },
  {
    id: "checoin",
    symbol: "checoin",
    name: "CheCoin",
  },
  {
    id: "chedda",
    symbol: "chedda",
    name: "Chedda",
  },
  {
    id: "cheelee",
    symbol: "cheelee",
    name: "Cheelee",
  },
  {
    id: "cheems",
    symbol: "cheems",
    name: "Cheems",
  },
  {
    id: "cheems-inu",
    symbol: "$cinu",
    name: "CHEEMS INU",
  },
  {
    id: "cheersland",
    symbol: "cheers",
    name: "CheersLand",
  },
  {
    id: "cheese",
    symbol: "cheese",
    name: "Cheese",
  },
  {
    id: "cheesecakeswap",
    symbol: "ccake",
    name: "CheesecakeSwap",
  },
  {
    id: "cheesedao",
    symbol: "cheez",
    name: "CheeseDAO",
  },
  {
    id: "cheesesoda-token",
    symbol: "soda",
    name: "CheeseSoda",
  },
  {
    id: "cheeseswap",
    symbol: "chs",
    name: "CheeseSwap",
  },
  {
    id: "cheese-swap",
    symbol: "cheese",
    name: "Cheese Swap",
  },
  {
    id: "cheesus",
    symbol: "cheesus",
    name: "Cheesus",
  },
  {
    id: "chefcake",
    symbol: "chefcake",
    name: "ChefCake",
  },
  {
    id: "chellitcoin",
    symbol: "chlt",
    name: "Chellitcoin",
  },
  {
    id: "chemix-ecology-governance-token",
    symbol: "kun",
    name: "Chemix Ecology Governance",
  },
  {
    id: "cheqd-network",
    symbol: "cheq",
    name: "CHEQD Network",
  },
  {
    id: "cherish",
    symbol: "chc",
    name: "Cherish",
  },
  {
    id: "cherry-network",
    symbol: "cher",
    name: "Cherry Network",
  },
  {
    id: "cherrypye",
    symbol: "cherrypye",
    name: "CHERRYPYE",
  },
  {
    id: "cherryswap",
    symbol: "che",
    name: "CherrySwap",
  },
  {
    id: "cherry-token",
    symbol: "yt",
    name: "Cherry YT",
  },
  {
    id: "chesscoin-0-32",
    symbol: "chess",
    name: "ChessCoin 0.32%",
  },
  {
    id: "chex-token",
    symbol: "chex",
    name: "CHEX Token",
  },
  {
    id: "chhipscoin",
    symbol: "chh",
    name: "CHHIPSCOIN",
  },
  {
    id: "chia",
    symbol: "xch",
    name: "Chia",
  },
  {
    id: "chiba-inu",
    symbol: "chiba",
    name: "Chiba Inu",
  },
  {
    id: "chicken",
    symbol: "kfc",
    name: "Chicken",
  },
  {
    id: "chickenlegs",
    symbol: "corn",
    name: "ChickenLegs",
  },
  {
    id: "chi-coin",
    symbol: "chi",
    name: "CHI Coin",
  },
  {
    id: "chi-gastoken",
    symbol: "chi",
    name: "Chi Gas",
  },
  {
    id: "chihiro-inu",
    symbol: "chiro",
    name: "Chihiro Inu",
  },
  {
    id: "chihuahua",
    symbol: "hua",
    name: "Chihuahua",
  },
  {
    id: "chihuahua-in-space",
    symbol: "cis",
    name: "Chihuahua In Space",
  },
  {
    id: "chihuahuasol",
    symbol: "chih",
    name: "ChihuahuaSol",
  },
  {
    id: "chihuahua-token",
    symbol: "huahua",
    name: "Chihuahua Chain",
  },
  {
    id: "chihuahua-token-19fcd0de-eb4d-4fd7-bc4a-a202247dfdbb",
    symbol: "chh",
    name: "Chihuahua Token",
  },
  {
    id: "chihuahuax",
    symbol: "chihua",
    name: "Chihuahuax",
  },
  {
    id: "chihua-token",
    symbol: "chihua",
    name: "Chihua",
  },
  {
    id: "chikincoin",
    symbol: "ckc",
    name: "ChikinCoin",
  },
  {
    id: "chikn-egg",
    symbol: "egg",
    name: "Chikn Egg",
  },
  {
    id: "chikn-feed",
    symbol: "feed",
    name: "chikn feed",
  },
  {
    id: "chikn-fert",
    symbol: "fert",
    name: "Chikn Fert",
  },
  {
    id: "chikn-worm",
    symbol: "worm",
    name: "Chikn Worm",
  },
  {
    id: "childhoods-end",
    symbol: "o",
    name: "Childhoods End",
  },
  {
    id: "chiliz",
    symbol: "chz",
    name: "Chiliz",
  },
  {
    id: "chimaera",
    symbol: "wchi",
    name: "XAYA",
  },
  {
    id: "chimeras",
    symbol: "chim",
    name: "Chimeras",
  },
  {
    id: "chimp-fight",
    symbol: "nana",
    name: "Nana",
  },
  {
    id: "chinaom",
    symbol: "com",
    name: "ChinaOM",
  },
  {
    id: "chip",
    symbol: "chip",
    name: "Chip",
  },
  {
    id: "chipstars",
    symbol: "chips",
    name: "Chipstars",
  },
  {
    id: "chipz",
    symbol: "chpz",
    name: "Chipz",
  },
  {
    id: "chirpley",
    symbol: "chrp",
    name: "Chirpley",
  },
  {
    id: "chiva-token",
    symbol: "chiv",
    name: "Chiva",
  },
  {
    id: "chives-coin",
    symbol: "xcc",
    name: "Chives Coin",
  },
  {
    id: "chiwawa",
    symbol: "chiwa",
    name: "Chiwawa",
  },
  {
    id: "choccyswap",
    symbol: "ccy",
    name: "ChoccySwap",
  },
  {
    id: "choice-coin",
    symbol: "choice",
    name: "Choice Coin",
  },
  {
    id: "choise",
    symbol: "cho",
    name: "Choise.com",
  },
  {
    id: "chonk",
    symbol: "chonk",
    name: "Chonk",
  },
  {
    id: "chooky-inu",
    symbol: "$choo",
    name: "Chooky Inu",
  },
  {
    id: "chopper-inu",
    symbol: "chopper",
    name: "Chopper Inu",
  },
  {
    id: "chorusx",
    symbol: "cx1",
    name: "ChorusX",
  },
  {
    id: "chow-chow-finance",
    symbol: "chow",
    name: "Chow Chow Finance",
  },
  {
    id: "christmas-floki",
    symbol: "floc",
    name: "Christmas Floki",
  },
  {
    id: "christmas-shiba",
    symbol: "xshib",
    name: "Christmas Shiba",
  },
  {
    id: "chromaway",
    symbol: "chr",
    name: "Chromia",
  },
  {
    id: "chrome-swap",
    symbol: "csw",
    name: "Chrome Swap",
  },
  {
    id: "chromium-dollar",
    symbol: "cr",
    name: "Chromium Dollar",
  },
  {
    id: "chronicle",
    symbol: "xnl",
    name: "Chronicle",
  },
  {
    id: "chronicum",
    symbol: "chro",
    name: "Chronicum",
  },
  {
    id: "chronobank",
    symbol: "time",
    name: "chrono.tech",
  },
  {
    id: "chronologic",
    symbol: "day",
    name: "Chronologic",
  },
  {
    id: "chronoly",
    symbol: "crno",
    name: "Chronoly",
  },
  {
    id: "chubbies",
    symbol: "chubbies20",
    name: "Chubbies",
  },
  {
    id: "chubbyakita",
    symbol: "cakita",
    name: "ChubbyAkita",
  },
  {
    id: "chug-token",
    symbol: "chug",
    name: "CHUG",
  },
  {
    id: "chumbai-valley",
    symbol: "chmb",
    name: "Chumbi Valley",
  },
  {
    id: "cia",
    symbol: "cia",
    name: "CIA",
  },
  {
    id: "cigarette-token",
    symbol: "cig",
    name: "Cigarette",
  },
  {
    id: "cindicator",
    symbol: "cnd",
    name: "Cindicator",
  },
  {
    id: "cindrum",
    symbol: "cind",
    name: "Cindrum",
  },
  {
    id: "cinnamoon",
    symbol: "cimo",
    name: "Cinnamoon",
  },
  {
    id: "cino-games",
    symbol: "cino",
    name: "Cino Games",
  },
  {
    id: "cipher-2",
    symbol: "cpr",
    name: "CIPHER",
  },
  {
    id: "circlepod",
    symbol: "cpx",
    name: "Circlepod",
  },
  {
    id: "circleswap",
    symbol: "cir",
    name: "CircleSwap",
  },
  {
    id: "circuits-of-value",
    symbol: "coval",
    name: "Circuits of Value",
  },
  {
    id: "cirquity",
    symbol: "cirq",
    name: "Cirquity",
  },
  {
    id: "cirrus",
    symbol: "crs",
    name: "Cirrus",
  },
  {
    id: "cirus",
    symbol: "cirus",
    name: "Cirus",
  },
  {
    id: "citadao",
    symbol: "knight",
    name: "CitaDAO",
  },
  {
    id: "citadel",
    symbol: "ctl",
    name: "Citadel",
  },
  {
    id: "citadel-one",
    symbol: "xct",
    name: "Citadel.one",
  },
  {
    id: "citizen-finance",
    symbol: "cifi",
    name: "Citizen Finance",
  },
  {
    id: "citrus",
    symbol: "cts",
    name: "Citrus",
  },
  {
    id: "city-coin",
    symbol: "city",
    name: "City Coin",
  },
  {
    id: "city-of-dream",
    symbol: "cod",
    name: "City of Dream",
  },
  {
    id: "citystates-medieval",
    symbol: "csm",
    name: "CityStates Medieval",
  },
  {
    id: "city-tycoon-games",
    symbol: "ctg",
    name: "City Tycoon Games",
  },
  {
    id: "civfund-stone",
    symbol: "0ne",
    name: "Civfund Stone",
  },
  {
    id: "civic",
    symbol: "cvc",
    name: "Civic",
  },
  {
    id: "civic-power",
    symbol: "power",
    name: "Civic Power",
  },
  {
    id: "civilization",
    symbol: "civ",
    name: "Civilization",
  },
  {
    id: "claimswap",
    symbol: "cla",
    name: "ClaimSwap",
  },
  {
    id: "clams",
    symbol: "clam",
    name: "Clams",
  },
  {
    id: "clash",
    symbol: "clh",
    name: "Clash",
  },
  {
    id: "clash-of-cars",
    symbol: "clash",
    name: "Clash Of Cars",
  },
  {
    id: "clash-of-lilliput",
    symbol: "col",
    name: "Clash of Lilliput",
  },
  {
    id: "class-coin",
    symbol: "class",
    name: "Class Coin",
  },
  {
    id: "classicbitcoin",
    symbol: "cbtc",
    name: "ClassicBitcoin",
  },
  {
    id: "classicdoge",
    symbol: "xdoge",
    name: "ClassicDoge",
  },
  {
    id: "classzz",
    symbol: "czz",
    name: "ClassZZ",
  },
  {
    id: "clay-nation",
    symbol: "clay",
    name: "Clay Nation",
  },
  {
    id: "claystack-staked-matic",
    symbol: "csmatic",
    name: "ClayStack Staked MATIC",
  },
  {
    id: "cleancarbon",
    symbol: "carbo",
    name: "CleanCarbon",
  },
  {
    id: "cleanocean",
    symbol: "clean",
    name: "CleanOcean",
  },
  {
    id: "clearcryptos",
    symbol: "ccx",
    name: "ClearCryptos",
  },
  {
    id: "cleardao",
    symbol: "clh",
    name: "ClearDAO",
  },
  {
    id: "clearpoll",
    symbol: "poll",
    name: "ClearPoll",
  },
  {
    id: "clearpool",
    symbol: "cpool",
    name: "Clearpool",
  },
  {
    id: "clear-water",
    symbol: "$clear",
    name: "Clear Water",
  },
  {
    id: "cleeps",
    symbol: "clps",
    name: "Cleeps",
  },
  {
    id: "clever-cvx",
    symbol: "clevcvx",
    name: "CLever CVX",
  },
  {
    id: "clever-token",
    symbol: "clev",
    name: "CLever",
  },
  {
    id: "click",
    symbol: "clk",
    name: "Click",
  },
  {
    id: "clifford-inu",
    symbol: "cliff",
    name: "Clifford Inu",
  },
  {
    id: "climb-token-finance",
    symbol: "climb",
    name: "Climb Token Finance",
  },
  {
    id: "clintex-cti",
    symbol: "cti",
    name: "ClinTex CTi",
  },
  {
    id: "cliq",
    symbol: "ct",
    name: "CLIQ",
  },
  {
    id: "cloakcoin",
    symbol: "cloak",
    name: "Cloakcoin",
  },
  {
    id: "cloak-coin",
    symbol: "cloak",
    name: "Cloak Coin",
  },
  {
    id: "clock-24",
    symbol: "c24",
    name: "Clock 24",
  },
  {
    id: "cloudbric",
    symbol: "clbk",
    name: "Cloudbric",
  },
  {
    id: "cloudchat",
    symbol: "cc",
    name: "CloudChat",
  },
  {
    id: "cloudcoin",
    symbol: "cc",
    name: "CloudCoin",
  },
  {
    id: "cloudname",
    symbol: "cname",
    name: "Cloudname",
  },
  {
    id: "cloud-pet",
    symbol: "cpet",
    name: "Cloud Pet",
  },
  {
    id: "cloud-protocol",
    symbol: "cpro",
    name: "Cloud Protocol",
  },
  {
    id: "cloudtx",
    symbol: "cloud",
    name: "CloudTx",
  },
  {
    id: "cloutcontracts",
    symbol: "ccs",
    name: "CloutContracts",
  },
  {
    id: "clover",
    symbol: "clv",
    name: "Clover",
  },
  {
    id: "clover-finance",
    symbol: "clv",
    name: "Clover Finance",
  },
  {
    id: "club-atletico-independiente",
    symbol: "cai",
    name: "Club Atletico Independiente Fan Token",
  },
  {
    id: "club-donkey",
    symbol: "cdonk",
    name: "Club Donkey",
  },
  {
    id: "clube-atletico-mineiro-fan-token",
    symbol: "galo",
    name: "Clube Atlético Mineiro Fan Token",
  },
  {
    id: "clubrare-empower",
    symbol: "mpwr",
    name: "Empower",
  },
  {
    id: "club-santos-laguna-fan-token",
    symbol: "san",
    name: "Club Santos Laguna Fan Token",
  },
  {
    id: "clucoin",
    symbol: "clu",
    name: "CluCoin",
  },
  {
    id: "clytie",
    symbol: "cly",
    name: "Clytie",
  },
  {
    id: "cmc-coin",
    symbol: "cmcc",
    name: "CMC Coin",
  },
  {
    id: "cneta",
    symbol: "cneta",
    name: "cNETA",
  },
  {
    id: "cng-casino",
    symbol: "cng",
    name: "CNG Casino",
  },
  {
    id: "cnh-tether",
    symbol: "cnht",
    name: "CNH Tether",
  },
  {
    id: "cnl-token",
    symbol: "cnl",
    name: "CNL",
  },
  {
    id: "cnn",
    symbol: "cnn",
    name: "Content Neutrality Network",
  },
  {
    id: "cnns",
    symbol: "cnns",
    name: "CNNS",
  },
  {
    id: "coal",
    symbol: "mlb",
    name: "COAL",
  },
  {
    id: "coalculus",
    symbol: "coal",
    name: "Coalculus",
  },
  {
    id: "cobak-token",
    symbol: "cbk",
    name: "Cobak",
  },
  {
    id: "coban",
    symbol: "coban",
    name: "COBAN",
  },
  {
    id: "coca-network",
    symbol: "cocn",
    name: "Coca Network",
  },
  {
    id: "cockapoo",
    symbol: "cpoo",
    name: "Cockapoo",
  },
  {
    id: "cocktailbar",
    symbol: "coc",
    name: "cocktailbar.finance",
  },
  {
    id: "cocos-bcx",
    symbol: "cocos",
    name: "COCOS BCX",
  },
  {
    id: "coco-swap",
    symbol: "coco",
    name: "Coco Swap",
  },
  {
    id: "code-7",
    symbol: "code7",
    name: "Code 7",
  },
  {
    id: "codex",
    symbol: "cdex",
    name: "Codex",
  },
  {
    id: "codex-finance",
    symbol: "codex",
    name: "CODEX Finance",
  },
  {
    id: "codi-finance",
    symbol: "codi",
    name: "Codi Finance",
  },
  {
    id: "coffin-dollar",
    symbol: "cousd",
    name: "Coffin Dollar",
  },
  {
    id: "coffin-finance",
    symbol: "coffin",
    name: "Coffin Finance",
  },
  {
    id: "cofix",
    symbol: "cofi",
    name: "CoFiX",
  },
  {
    id: "cogecoin",
    symbol: "coge",
    name: "Cogecoin",
  },
  {
    id: "cogiverse",
    symbol: "cogi",
    name: "9D NFT",
  },
  {
    id: "coic",
    symbol: "coic",
    name: "COIC",
  },
  {
    id: "coil",
    symbol: "coil",
    name: "Coil",
  },
  {
    id: "coin",
    symbol: "coin",
    name: "Coin",
  },
  {
    id: "coin4trade",
    symbol: "c4t",
    name: "Coin4Trade",
  },
  {
    id: "coin98",
    symbol: "c98",
    name: "Coin98",
  },
  {
    id: "coin98-dollar",
    symbol: "cusd",
    name: "Coin98 Dollar",
  },
  {
    id: "coinage-finance",
    symbol: "cage",
    name: "Coinage Finance",
  },
  {
    id: "coinalpha",
    symbol: "alp",
    name: "CoinAlpha",
  },
  {
    id: "coin-artist",
    symbol: "coin",
    name: "Coin Artist",
  },
  {
    id: "coinary-token",
    symbol: "cyt",
    name: "Coinary",
  },
  {
    id: "coinbase-stock",
    symbol: "coin",
    name: "Coinbase Tokenized Stock on FTX",
  },
  {
    id: "coinbase-tokenized-stock-defichain",
    symbol: "dcoin",
    name: "Coinbase Tokenized Stock Defichain",
  },
  {
    id: "coinbase-wrapped-staked-eth",
    symbol: "cbeth",
    name: "Coinbase Wrapped Staked ETH",
  },
  {
    id: "coinbond",
    symbol: "cbd",
    name: "Coinbond",
  },
  {
    id: "coin-capsule",
    symbol: "caps",
    name: "Ternoa",
  },
  {
    id: "coinclaim",
    symbol: "clm",
    name: "CoinClaim",
  },
  {
    id: "coindeal-token",
    symbol: "cdl",
    name: "CoinDeal Token",
  },
  {
    id: "coindom",
    symbol: "scc",
    name: "Stem Cell Coin",
  },
  {
    id: "coin-edelweis",
    symbol: "edel",
    name: "Coin Edelweis",
  },
  {
    id: "coinerr",
    symbol: "err",
    name: "Coinerr",
  },
  {
    id: "coinex-token",
    symbol: "cet",
    name: "CoinEx",
  },
  {
    id: "coinfantasy",
    symbol: "cfan",
    name: "CoinFantasy",
  },
  {
    id: "coinfarm",
    symbol: "cfarm",
    name: "CoinFarm",
  },
  {
    id: "coin-fast-alert",
    symbol: "cfa",
    name: "Coin Fast Alert [OLD]",
  },
  {
    id: "coinfi",
    symbol: "cofi",
    name: "CoinFi",
  },
  {
    id: "coinfirm-amlt",
    symbol: "amlt",
    name: "AMLT Network",
  },
  {
    id: "coinflect",
    symbol: "wcflt",
    name: "Coinflect",
  },
  {
    id: "coin-gabbar-token",
    symbol: "cgt",
    name: "Coin Gabbar Token",
  },
  {
    id: "coinghost",
    symbol: "gst",
    name: "CoinGhost",
  },
  {
    id: "coinhub",
    symbol: "chb",
    name: "COINHUB",
  },
  {
    id: "coinlancer",
    symbol: "cl",
    name: "Coinlancer",
  },
  {
    id: "coinlion",
    symbol: "lion",
    name: "CoinLion",
  },
  {
    id: "coinloan",
    symbol: "clt",
    name: "CoinLoan",
  },
  {
    id: "coinmerge",
    symbol: "cmerge",
    name: "CoinMerge (ERC20)",
  },
  {
    id: "coinmerge-bsc",
    symbol: "cmerge",
    name: "CoinMerge (BEP20)",
  },
  {
    id: "coinmetro",
    symbol: "xcm",
    name: "Coinmetro",
  },
  {
    id: "coinmooner",
    symbol: "mooner",
    name: "CoinMooner",
  },
  {
    id: "coin-of-nature",
    symbol: "con",
    name: "Coin of Nature",
  },
  {
    id: "coin-of-the-champions",
    symbol: "coc",
    name: "Coin of the champions",
  },
  {
    id: "coinpad",
    symbol: "cp",
    name: "Coinpad",
  },
  {
    id: "coinpoker",
    symbol: "chp",
    name: "CoinPoker",
  },
  {
    id: "coinracer",
    symbol: "crace",
    name: "Coinracer",
  },
  {
    id: "coinradr",
    symbol: "radr",
    name: "CoinRadr",
  },
  {
    id: "coinsbit-token",
    symbol: "cnb",
    name: "Coinsbit Token",
  },
  {
    id: "coinscan",
    symbol: "scan",
    name: "CoinScan",
  },
  {
    id: "coinscope",
    symbol: "coinscope",
    name: "Coinscope",
  },
  {
    id: "coinspaid",
    symbol: "cpd",
    name: "CoinsPaid",
  },
  {
    id: "coinstox",
    symbol: "csx",
    name: "Coinstox",
  },
  {
    id: "coinwealth",
    symbol: "cnw",
    name: "CoinWealth",
  },
  {
    id: "coinweb",
    symbol: "cweb",
    name: "Coinweb",
  },
  {
    id: "coinwind",
    symbol: "cow",
    name: "CoinWind",
  },
  {
    id: "coinxpad",
    symbol: "cxpad",
    name: "CoinxPad",
  },
  {
    id: "coinzix-token",
    symbol: "zix",
    name: "Coinzix Token",
  },
  {
    id: "cola-token",
    symbol: "cola",
    name: "Cola",
  },
  {
    id: "cold-finance",
    symbol: "cold",
    name: "Cold Finance",
  },
  {
    id: "coldstack",
    symbol: "cls",
    name: "Coldstack",
  },
  {
    id: "colizeum",
    symbol: "zeum",
    name: "Colizeum",
  },
  {
    id: "collateral-pay",
    symbol: "coll",
    name: "Collateral Pay",
  },
  {
    id: "collateral-pay-governance",
    symbol: "collg",
    name: "Collateral Pay Governance",
  },
  {
    id: "collectcoin-2",
    symbol: "clct",
    name: "CollectCoin",
  },
  {
    id: "collective",
    symbol: "co2",
    name: "Collective",
  },
  {
    id: "collector-coin",
    symbol: "ags",
    name: "Collector Coin",
  },
  {
    id: "collegecoinnetwork",
    symbol: "ccn",
    name: "CollegeCoinNetwork",
  },
  {
    id: "collegicoin",
    symbol: "clg",
    name: "Collegicoin",
  },
  {
    id: "collie-inu",
    symbol: "collie",
    name: "COLLIE INU",
  },
  {
    id: "colligo",
    symbol: "cotk",
    name: "Colligo",
  },
  {
    id: "colony",
    symbol: "cly",
    name: "Colony",
  },
  {
    id: "colony-avalanche-index",
    symbol: "cai",
    name: "Colony Avalanche Index",
  },
  {
    id: "colony-network-token",
    symbol: "clny",
    name: "Colony Network",
  },
  {
    id: "colossuscoinxt",
    symbol: "colx",
    name: "ColossusXT",
  },
  {
    id: "colr-coin",
    symbol: "$colr",
    name: "colR Coin",
  },
  {
    id: "comb-finance",
    symbol: "comb",
    name: "Comb Finance",
  },
  {
    id: "comdex",
    symbol: "cmdx",
    name: "Comdex",
  },
  {
    id: "comfy",
    symbol: "comfy",
    name: "Comfy",
  },
  {
    id: "comfy-share",
    symbol: "cshare",
    name: "Comfy Share",
  },
  {
    id: "communique",
    symbol: "cmq",
    name: "Communique",
  },
  {
    id: "community-business-token",
    symbol: "cbt",
    name: "Community Business Token",
  },
  {
    id: "community-coin-2",
    symbol: "ctc",
    name: "Community Coin Foundation",
  },
  {
    id: "community-doge-coin",
    symbol: "ccdoge",
    name: "Community Doge Coin",
  },
  {
    id: "community-metaverse",
    symbol: "comt",
    name: "Community Metaverse",
  },
  {
    id: "communitytoken",
    symbol: "ct",
    name: "Cojam",
  },
  {
    id: "community-vote-power",
    symbol: "cvp",
    name: "Community Vote Power",
  },
  {
    id: "comodo-coin",
    symbol: "cmd",
    name: "Comodo Coin",
  },
  {
    id: "companion",
    symbol: "cmpn",
    name: "Companion",
  },
  {
    id: "compendium-fi",
    symbol: "cmfi",
    name: "Compendium.Fi",
  },
  {
    id: "complifi",
    symbol: "comfi",
    name: "CompliFi",
  },
  {
    id: "compound-0x",
    symbol: "czrx",
    name: "c0x",
  },
  {
    id: "compound-basic-attention-token",
    symbol: "cbat",
    name: "cBAT",
  },
  {
    id: "compound-chainlink-token",
    symbol: "clink",
    name: "cLINK",
  },
  {
    id: "compound-coin",
    symbol: "comp",
    name: "Compound Coin",
  },
  {
    id: "compounded-marinated-umami",
    symbol: "cmumami",
    name: "Compounded Marinated UMAMI",
  },
  {
    id: "compound-ether",
    symbol: "ceth",
    name: "cETH",
  },
  {
    id: "compound-governance-token",
    symbol: "comp",
    name: "Compound",
  },
  {
    id: "compound-maker",
    symbol: "cmkr",
    name: "cMKR",
  },
  {
    id: "compound-sushi",
    symbol: "csushi",
    name: "cSUSHI",
  },
  {
    id: "compound-uniswap",
    symbol: "cuni",
    name: "cUNI",
  },
  {
    id: "compound-usd-coin",
    symbol: "cusdc",
    name: "cUSDC",
  },
  {
    id: "compound-usdt",
    symbol: "cusdt",
    name: "cUSDT",
  },
  {
    id: "compound-wrapped-btc",
    symbol: "cwbtc",
    name: "cWBTC",
  },
  {
    id: "compound-yearn-finance",
    symbol: "cyfi",
    name: "cYFI",
  },
  {
    id: "comsa",
    symbol: "cms",
    name: "COMSA",
  },
  {
    id: "comtech-gold",
    symbol: "cgo",
    name: "Comtech Gold",
  },
  {
    id: "concave",
    symbol: "cnv",
    name: "Concave",
  },
  {
    id: "conceal",
    symbol: "ccx",
    name: "Conceal",
  },
  {
    id: "concentrated-voting-power",
    symbol: "cvp",
    name: "PowerPool Concentrated Voting Power",
  },
  {
    id: "concentrator",
    symbol: "ctr",
    name: "Concentrator",
  },
  {
    id: "concertvr",
    symbol: "cvt",
    name: "concertVR",
  },
  {
    id: "concierge-io",
    symbol: "ava",
    name: "Travala.com",
  },
  {
    id: "concordium",
    symbol: "ccd",
    name: "Concordium",
  },
  {
    id: "concrete-codes",
    symbol: "conc",
    name: "Concrete Codes",
  },
  {
    id: "condorchain",
    symbol: "cdr",
    name: "CondorChain",
  },
  {
    id: "confetti",
    symbol: "cfti",
    name: "Confetti",
  },
  {
    id: "conflux-token",
    symbol: "cfx",
    name: "Conflux",
  },
  {
    id: "conic-finance",
    symbol: "cnc",
    name: "Conic",
  },
  {
    id: "conjee",
    symbol: "conj",
    name: "Conjee",
  },
  {
    id: "connect-financial",
    symbol: "cnfi",
    name: "Connect Financial",
  },
  {
    id: "connectico",
    symbol: "con",
    name: "Connectico",
  },
  {
    id: "connectjob",
    symbol: "cjt",
    name: "ConnectJob",
  },
  {
    id: "connectome",
    symbol: "cntm",
    name: "Connectome",
  },
  {
    id: "connect-token",
    symbol: "cnt",
    name: "Connect Stela",
  },
  {
    id: "constellation-labs",
    symbol: "dag",
    name: "Constellation",
  },
  {
    id: "constitutiondao",
    symbol: "people",
    name: "ConstitutionDAO",
  },
  {
    id: "constitutiondao-wormhole",
    symbol: "people",
    name: "ConstitutionDAO (Wormhole)",
  },
  {
    id: "contentbox",
    symbol: "box",
    name: "ContentBox",
  },
  {
    id: "contentos",
    symbol: "cos",
    name: "Contentos",
  },
  {
    id: "contents-shopper-token",
    symbol: "cst",
    name: "Contents Shopper Token",
  },
  {
    id: "content-value-network",
    symbol: "cvnt",
    name: "Conscious Value Network",
  },
  {
    id: "continuum-finance",
    symbol: "ctn",
    name: "Continuum Finance",
  },
  {
    id: "continuum-world",
    symbol: "um",
    name: "Continuum World",
  },
  {
    id: "contracoin",
    symbol: "ctcn",
    name: "Contracoin",
  },
  {
    id: "contracto",
    symbol: "lock",
    name: "Contracto",
  },
  {
    id: "contribute",
    symbol: "trib",
    name: "Contribute",
  },
  {
    id: "conun",
    symbol: "con",
    name: "CONUN",
  },
  {
    id: "convergence",
    symbol: "conv",
    name: "Convergence",
  },
  {
    id: "converter-finance",
    symbol: "con",
    name: "Converter Finance",
  },
  {
    id: "convex-crv",
    symbol: "cvxcrv",
    name: "Convex CRV",
  },
  {
    id: "convex-finance",
    symbol: "cvx",
    name: "Convex Finance",
  },
  {
    id: "cook",
    symbol: "cook",
    name: "Cook",
  },
  {
    id: "cookiesale",
    symbol: "cookie",
    name: "CookieSale",
  },
  {
    id: "cookies-protocol",
    symbol: "cp",
    name: "Cookies Protocol",
  },
  {
    id: "coolmining",
    symbol: "cooha",
    name: "CoolMining",
  },
  {
    id: "cool-monke-banana",
    symbol: "cmb",
    name: "Cool Monke Banana",
  },
  {
    id: "cool-vault-nftx",
    symbol: "cool",
    name: "COOL Vault (NFTX)",
  },
  {
    id: "cope",
    symbol: "cope",
    name: "Cope",
  },
  {
    id: "copiosa",
    symbol: "cop",
    name: "Copiosa",
  },
  {
    id: "copuppy",
    symbol: "cp",
    name: "CoPuppy",
  },
  {
    id: "copycat-finance",
    symbol: "copycat",
    name: "Copycat Finance",
  },
  {
    id: "coral-swap",
    symbol: "coral",
    name: "Coral Swap",
  },
  {
    id: "cordium",
    symbol: "cord",
    name: "Cordium",
  },
  {
    id: "core",
    symbol: "cmcx",
    name: "CORE MultiChain",
  },
  {
    id: "coredao",
    symbol: "coredao",
    name: "coreDAO",
  },
  {
    id: "corestarter",
    symbol: "cstr",
    name: "CoreStarter",
  },
  {
    id: "coreto",
    symbol: "cor",
    name: "Coreto",
  },
  {
    id: "coreum",
    symbol: "core",
    name: "Coreum",
  },
  {
    id: "corgicoin",
    symbol: "corgi",
    name: "CorgiCoin",
  },
  {
    id: "corgidoge",
    symbol: "corgi",
    name: "Corgidoge",
  },
  {
    id: "corgi-finance",
    symbol: "cog",
    name: "Corgi Finance",
  },
  {
    id: "corgi-inu",
    symbol: "corgi",
    name: "Corgi Inu",
  },
  {
    id: "corginftgame",
    symbol: "cor",
    name: "CorgiNFTGame",
  },
  {
    id: "corgiswap",
    symbol: "coris",
    name: "CorgiSwap",
  },
  {
    id: "corionx",
    symbol: "corx",
    name: "CorionX",
  },
  {
    id: "corite",
    symbol: "co",
    name: "Corite",
  },
  {
    id: "coritiba-f-c-fan-token",
    symbol: "crtb",
    name: "Coritiba F.C. Fan Token",
  },
  {
    id: "corn",
    symbol: "corn",
    name: "CORN",
  },
  {
    id: "cornatto",
    symbol: "cnc",
    name: "Cornatto",
  },
  {
    id: "corni",
    symbol: "corni",
    name: "Corni",
  },
  {
    id: "cornichon",
    symbol: "corn",
    name: "Cornichon",
  },
  {
    id: "cornucopias",
    symbol: "copi",
    name: "Cornucopias",
  },
  {
    id: "corra-finance",
    symbol: "cora",
    name: "Corra.Finance",
  },
  {
    id: "corsac-v2",
    symbol: "csct",
    name: "Corsac v2",
  },
  {
    id: "cortex",
    symbol: "ctxc",
    name: "Cortex",
  },
  {
    id: "cortexdao",
    symbol: "cxd",
    name: "CortexDAO",
  },
  {
    id: "coshi-inu",
    symbol: "coshi",
    name: "CoShi Inu",
  },
  {
    id: "cosmic-ape-coin",
    symbol: "cac",
    name: "Cosmic Ape Coin",
  },
  {
    id: "cosmic-cash",
    symbol: "csc",
    name: "Cosmic Cash",
  },
  {
    id: "cosmic-champs",
    symbol: "cosg",
    name: "Cosmic Champs",
  },
  {
    id: "cosmic-coin",
    symbol: "cosmic",
    name: "Cosmic Coin",
  },
  {
    id: "cosmicswap",
    symbol: "cosmic",
    name: "CosmicSwap",
  },
  {
    id: "cosmic-universe-magic-token",
    symbol: "magic",
    name: "Cosmic Universe Magic",
  },
  {
    id: "cosmos",
    symbol: "atom",
    name: "Cosmos Hub",
  },
  {
    id: "cosmostarter",
    symbol: "csms",
    name: "Cosmostarter",
  },
  {
    id: "cosplay-token-2",
    symbol: "cot",
    name: "Cosplay Token",
  },
  {
    id: "cost-coin",
    symbol: "akm",
    name: "COST COIN+",
  },
  {
    id: "coti",
    symbol: "coti",
    name: "COTI",
  },
  {
    id: "cotrader",
    symbol: "cot",
    name: "CoTrader",
  },
  {
    id: "couchain",
    symbol: "cou",
    name: "Couchain",
  },
  {
    id: "cougar-token",
    symbol: "cgs",
    name: "CougarSwap",
  },
  {
    id: "council-of-apes",
    symbol: "coape",
    name: "Council of Apes",
  },
  {
    id: "counos-coin",
    symbol: "cca",
    name: "Counos Coin",
  },
  {
    id: "counosx",
    symbol: "ccxx",
    name: "CounosX",
  },
  {
    id: "counterparty",
    symbol: "xcp",
    name: "Counterparty",
  },
  {
    id: "couponbay",
    symbol: "cup",
    name: "CouponBay",
  },
  {
    id: "covalent",
    symbol: "cqt",
    name: "Covalent",
  },
  {
    id: "covalent-cova",
    symbol: "cova",
    name: "Cova Unity",
  },
  {
    id: "covenant-child",
    symbol: "covn",
    name: "Covenant",
  },
  {
    id: "covercompared",
    symbol: "cvr",
    name: "CoverCompared",
  },
  {
    id: "cover-protocol",
    symbol: "cover",
    name: "Cover Protocol",
  },
  {
    id: "covesting",
    symbol: "cov",
    name: "Covesting",
  },
  {
    id: "covey",
    symbol: "$cvy",
    name: "Covey",
  },
  {
    id: "covicoin",
    symbol: "cvc",
    name: "CoviCoin",
  },
  {
    id: "covid-19-recovery-token",
    symbol: "covdr",
    name: "COVID-19 Recovery",
  },
  {
    id: "covid-doge",
    symbol: "covid doge",
    name: "Covid Doge",
  },
  {
    id: "cowboy-snake",
    symbol: "cows",
    name: "Cowboy Snake",
  },
  {
    id: "cowcoin",
    symbol: "cc",
    name: "CowCoin",
  },
  {
    id: "cow-inu",
    symbol: "ci",
    name: "Cow Inu",
  },
  {
    id: "cow-protocol",
    symbol: "cow",
    name: "CoW Protocol",
  },
  {
    id: "cowry",
    symbol: "cow",
    name: "COWRY",
  },
  {
    id: "coxswap",
    symbol: "cox",
    name: "Coxswap [OLD]",
  },
  {
    id: "coxswap-2",
    symbol: "cox",
    name: "Coxswap",
  },
  {
    id: "cpchain",
    symbol: "cpc",
    name: "CPChain",
  },
  {
    id: "cplay-network",
    symbol: "cplay",
    name: "CPLAY Network",
  },
  {
    id: "cpos-cloud-payment",
    symbol: "cpos",
    name: "CPOS Cloud Payment",
  },
  {
    id: "cpuchain",
    symbol: "cpu",
    name: "CPUchain",
  },
  {
    id: "cpucoin",
    symbol: "cpu",
    name: "CPUcoin",
  },
  {
    id: "crabada",
    symbol: "cra",
    name: "Crabada",
  },
  {
    id: "crab-market",
    symbol: "crab",
    name: "Crab Market",
  },
  {
    id: "crabstrike",
    symbol: "cst",
    name: "CrabStrike",
  },
  {
    id: "crafting-finance",
    symbol: "crf",
    name: "Crafting Finance",
  },
  {
    id: "craft-network",
    symbol: "cft",
    name: "Craft network",
  },
  {
    id: "cramer-coin",
    symbol: "cramer",
    name: "Cramer Coin",
  },
  {
    id: "crane-miners",
    symbol: "crane",
    name: "Crane Miners",
  },
  {
    id: "cranx-chain",
    symbol: "granx",
    name: "GranX Chain",
  },
  {
    id: "cratos",
    symbol: "crts",
    name: "Cratos",
  },
  {
    id: "crave",
    symbol: "crave",
    name: "Crave",
  },
  {
    id: "crazy-bunny-equity-token",
    symbol: "cbunny",
    name: "Crazy Bunny Equity",
  },
  {
    id: "crazy-internet-coin",
    symbol: "cic",
    name: "Crazy Internet Coin",
  },
  {
    id: "crazyminer",
    symbol: "pwr",
    name: "CrazyMiner",
  },
  {
    id: "crazysharo",
    symbol: "sharo",
    name: "CrazySharo",
  },
  {
    id: "crazytime",
    symbol: "crazytime",
    name: "CrazyTime",
  },
  {
    id: "crazy-treasure-token",
    symbol: "ctt",
    name: "Crazy Treasure Token",
  },
  {
    id: "crb-coin",
    symbol: "crb",
    name: "CRB Coin",
  },
  {
    id: "crd-network",
    symbol: "crd",
    name: "CRD Network",
  },
  {
    id: "crdt",
    symbol: "crdt",
    name: "CRDT",
  },
  {
    id: "cre8r-dao",
    symbol: "cre8r",
    name: "CRE8R DAO",
  },
  {
    id: "cream",
    symbol: "crm",
    name: "Creamcoin",
  },
  {
    id: "cream-2",
    symbol: "cream",
    name: "Cream",
  },
  {
    id: "creama",
    symbol: "creama",
    name: "Creama",
  },
  {
    id: "cream-eth2",
    symbol: "creth2",
    name: "Cream ETH 2",
  },
  {
    id: "creamlands",
    symbol: "cream",
    name: "Creamlands",
  },
  {
    id: "creamy",
    symbol: "creamy",
    name: "Creamy",
  },
  {
    id: "create",
    symbol: "ct",
    name: "Create",
  },
  {
    id: "creaticles",
    symbol: "cre8",
    name: "Creaticles",
  },
  {
    id: "creator-platform",
    symbol: "ctr",
    name: "Creator Platform",
  },
  {
    id: "creature_hunters",
    symbol: "chts",
    name: "Puzzle Hunters",
  },
  {
    id: "creda",
    symbol: "creda",
    name: "CreDA",
  },
  {
    id: "credefi",
    symbol: "credi",
    name: "Credefi",
  },
  {
    id: "credit",
    symbol: "credit",
    name: "Credit",
  },
  {
    id: "credit-2",
    symbol: "credit",
    name: "PROXI DeFi",
  },
  {
    id: "creditcoin-2",
    symbol: "ctc",
    name: "Creditcoin",
  },
  {
    id: "credits",
    symbol: "cs",
    name: "CREDITS",
  },
  {
    id: "credit-suisse-inu",
    symbol: "csi",
    name: "Credit Suisse Inu",
  },
  {
    id: "creditum",
    symbol: "credit",
    name: "Creditum",
  },
  {
    id: "creds",
    symbol: "creds",
    name: "Creds",
  },
  {
    id: "creo-engine",
    symbol: "creo",
    name: "Creo Engine",
  },
  {
    id: "crescent-network",
    symbol: "cre",
    name: "Crescent Network",
  },
  {
    id: "cresio",
    symbol: "xcre",
    name: "Cresio",
  },
  {
    id: "crespo",
    symbol: "cso",
    name: "Crespo",
  },
  {
    id: "crevacoin",
    symbol: "creva",
    name: "Crevacoin",
  },
  {
    id: "cricket-foundation",
    symbol: "cric",
    name: "Cricket Foundation",
  },
  {
    id: "cricket-star-manager",
    symbol: "csm",
    name: "Cricket Star Manager",
  },
  {
    id: "crime-gold",
    symbol: "crime",
    name: "Crime Gold",
  },
  {
    id: "crinet",
    symbol: "cnt",
    name: "Crinet",
  },
  {
    id: "cripco",
    symbol: "ip3",
    name: "Cripco",
  },
  {
    id: "criptoville-coins-2",
    symbol: "cvlc2",
    name: "CriptoVille Coins 2",
  },
  {
    id: "crir-msh",
    symbol: "msh",
    name: "CRIR MSH",
  },
  {
    id: "croatian-ff-fan-token",
    symbol: "vatreni",
    name: "Croatian FF Fan Token",
  },
  {
    id: "croblanc",
    symbol: "croblanc",
    name: "Croblanc",
  },
  {
    id: "crodex",
    symbol: "crx",
    name: "Crodex",
  },
  {
    id: "crogecoin",
    symbol: "croge",
    name: "Crogecoin",
  },
  {
    id: "croissant-games",
    symbol: "croissant",
    name: "Croissant Games",
  },
  {
    id: "croking",
    symbol: "crk",
    name: "Croking",
  },
  {
    id: "crolend",
    symbol: "crd",
    name: "Crolend",
  },
  {
    id: "crolon-mars",
    symbol: "clmrs",
    name: "Crolon Mars",
  },
  {
    id: "crome",
    symbol: "crom",
    name: "Crome",
  },
  {
    id: "cronaswap",
    symbol: "crona",
    name: "CronaSwap",
  },
  {
    id: "cronodes",
    symbol: "crn",
    name: "CroNodes",
  },
  {
    id: "cronos-id",
    symbol: "croid",
    name: "Cronos ID",
  },
  {
    id: "cronosnode",
    symbol: "cron",
    name: "CronosNode",
  },
  {
    id: "cronospad",
    symbol: "cpad",
    name: "Cronospad",
  },
  {
    id: "cronosphere",
    symbol: "sphere",
    name: "Cronosphere",
  },
  {
    id: "cronosverse",
    symbol: "vrse",
    name: "CronosVerse",
  },
  {
    id: "cronus-finance",
    symbol: "crn",
    name: "Cronus Finance",
  },
  {
    id: "cropbytes",
    symbol: "cbx",
    name: "CropBytes",
  },
  {
    id: "cropperfinance",
    symbol: "crp",
    name: "CropperFinance",
  },
  {
    id: "cro-predict",
    symbol: "crp",
    name: "CRO Predict",
  },
  {
    id: "cross-chain-bch",
    symbol: "ccbch",
    name: "Cross-Chain BCH",
  },
  {
    id: "cross-chain-bridge",
    symbol: "bridge",
    name: "Cross-Chain Bridge",
  },
  {
    id: "cross-chain-capital",
    symbol: "ccc",
    name: "Cross Chain Capital",
  },
  {
    id: "cross-chain-farming",
    symbol: "ccf",
    name: "Cross Chain Farming",
  },
  {
    id: "crosschain-iotx",
    symbol: "ciotx",
    name: "Crosschain IOTX",
  },
  {
    id: "crossfi",
    symbol: "crfi",
    name: "CrossFi",
  },
  {
    id: "crosspad",
    symbol: "cross",
    name: "CrossPad",
  },
  {
    id: "crossswap",
    symbol: "cswap",
    name: "CrossSwap",
  },
  {
    id: "crosswallet",
    symbol: "cwt",
    name: "CrossWallet",
  },
  {
    id: "crossx",
    symbol: "crx",
    name: "CrossX",
  },
  {
    id: "crowd",
    symbol: "cwd",
    name: "CROWD",
  },
  {
    id: "crowdswap",
    symbol: "crowd",
    name: "CrowdSwap",
  },
  {
    id: "crowdy",
    symbol: "crw",
    name: "Crowdy",
  },
  {
    id: "crown",
    symbol: "crw",
    name: "Crown",
  },
  {
    id: "crowns",
    symbol: "cws",
    name: "Seascape Crowns",
  },
  {
    id: "crown-sovereign",
    symbol: "csov",
    name: "Crown Sovereign",
  },
  {
    id: "crownsterling",
    symbol: "wcsov",
    name: "CrownSterling",
  },
  {
    id: "crown-token",
    symbol: "cwt",
    name: "Crown CWT",
  },
  {
    id: "crowny-token",
    symbol: "crwny",
    name: "Crowny",
  },
  {
    id: "crude-token",
    symbol: "crude",
    name: "Crude",
  },
  {
    id: "crunchy-dao",
    symbol: "crdao",
    name: "Crunchy DAO",
  },
  {
    id: "crunchy-network",
    symbol: "crunch",
    name: "Crunchy Network",
  },
  {
    id: "crusaders-of-crypto",
    symbol: "crusader",
    name: "Crusaders of Crypto",
  },
  {
    id: "crust-network",
    symbol: "cru",
    name: "Crust Network",
  },
  {
    id: "crust-storage-market",
    symbol: "csm",
    name: "Crust Shadow",
  },
  {
    id: "crybet",
    symbol: "cbt",
    name: "CryBet",
  },
  {
    id: "crycash",
    symbol: "crc",
    name: "CRYCASH",
  },
  {
    id: "cry-coin",
    symbol: "cryy",
    name: "Cry Cat Coin",
  },
  {
    id: "cryn",
    symbol: "cryn",
    name: "CRYN",
  },
  {
    id: "cryowar-token",
    symbol: "cwar",
    name: "Cryowar",
  },
  {
    id: "cryptaur",
    symbol: "cpt",
    name: "Cryptaur",
  },
  {
    id: "crypterium",
    symbol: "crpt",
    name: "Crypterium",
  },
  {
    id: "crypteriumcoin",
    symbol: "ccoin",
    name: "Crypteriumcoin",
  },
  {
    id: "cryptex",
    symbol: "crx",
    name: "CryptEx",
  },
  {
    id: "cryptex-finance",
    symbol: "ctx",
    name: "Cryptex Finance",
  },
  {
    id: "cryptia",
    symbol: "crypt",
    name: "Cryptia",
  },
  {
    id: "cryption-network",
    symbol: "cnt",
    name: "Cryption Network",
  },
  {
    id: "crypto-arc",
    symbol: "arc",
    name: "CryptoArc",
  },
  {
    id: "cryptoart-ai",
    symbol: "cart",
    name: "CryptoArt.Ai",
  },
  {
    id: "crypto-bank",
    symbol: "cbank",
    name: "Crypto Bank",
  },
  {
    id: "crypto-birds",
    symbol: "xcb",
    name: "Crypto Birds",
  },
  {
    id: "cryptoblades",
    symbol: "skill",
    name: "CryptoBlades",
  },
  {
    id: "cryptoblades-kingdoms",
    symbol: "king",
    name: "CryptoBlades Kingdoms",
  },
  {
    id: "cryptoblast",
    symbol: "cbt",
    name: "CryptoBlast",
  },
  {
    id: "cryptobonusmiles",
    symbol: "cbm",
    name: "CryptoBonusMiles",
  },
  {
    id: "cryptobosscoin",
    symbol: "cbc",
    name: "CryptoBossCoin",
  },
  {
    id: "crypto-carbon-energy",
    symbol: "cyce",
    name: "Crypto Carbon Energy",
  },
  {
    id: "cryptocars",
    symbol: "ccar",
    name: "CryptoCars",
  },
  {
    id: "cryptocart",
    symbol: "ccv2",
    name: "CryptoCart V2",
  },
  {
    id: "cryptocean",
    symbol: "cron",
    name: "Cryptocean",
  },
  {
    id: "crypto-chip",
    symbol: "bvc",
    name: "Crypto Chip",
  },
  {
    id: "cryptochrome",
    symbol: "chm",
    name: "Cryptochrome",
  },
  {
    id: "cryptoclans",
    symbol: "coc",
    name: "CryptoClans",
  },
  {
    id: "crypto-classic",
    symbol: "crc",
    name: "Crypto Classic",
  },
  {
    id: "cryptocoinpay",
    symbol: "ccp",
    name: "CryptoCoinPay",
  },
  {
    id: "crypto-com-chain",
    symbol: "cro",
    name: "Cronos",
  },
  {
    id: "cryptocurrency-market-index",
    symbol: "cmi",
    name: "Cryptocurrency Market Index",
  },
  {
    id: "crypto-development-services",
    symbol: "cds",
    name: "Crypto Development Services",
  },
  {
    id: "cryptodicehero",
    symbol: "hro",
    name: "CryptoDiceHero",
  },
  {
    id: "cryptodrop",
    symbol: "juice",
    name: "CryptoDrop",
  },
  {
    id: "crypto-emergency",
    symbol: "cem",
    name: "Crypto Emergency",
  },
  {
    id: "crypto-excellence",
    symbol: "ce",
    name: "Crypto Excellence",
  },
  {
    id: "cryptoexpress",
    symbol: "xpress",
    name: "CryptoXpress",
  },
  {
    id: "crypto-fantasy-coin",
    symbol: "cfc",
    name: "Crypto Fantasy Coin",
  },
  {
    id: "crypto-fantasy-league",
    symbol: "cfl",
    name: "Crypto Fantasy League",
  },
  {
    id: "cryptofi",
    symbol: "cfi",
    name: "Cryptofi",
  },
  {
    id: "cryptofifa",
    symbol: "ffa",
    name: "FFA.Games",
  },
  {
    id: "crypto-fight-club",
    symbol: "fight",
    name: "Crypto Fight Club",
  },
  {
    id: "cryptoflow",
    symbol: "cfl",
    name: "Cryptoflow",
  },
  {
    id: "cryptofranc",
    symbol: "xchf",
    name: "CryptoFranc",
  },
  {
    id: "cryptogamez",
    symbol: "cgaz",
    name: "CryptoGamez",
  },
  {
    id: "cryptogangsters",
    symbol: "cgang",
    name: "CryptoGangsters",
  },
  {
    id: "cryptogcoin",
    symbol: "crg",
    name: "Cryptogcoin",
  },
  {
    id: "crypto-gladiator-shards",
    symbol: "cgs",
    name: "Crypto Gladiator Shards",
  },
  {
    id: "crypto-global-united",
    symbol: "cgu",
    name: "Crypto Global United",
  },
  {
    id: "cryptogodz",
    symbol: "godz",
    name: "Cryptogodz",
  },
  {
    id: "crypto-holding-frank-token",
    symbol: "chft",
    name: "Crypto Holding Frank",
  },
  {
    id: "cryptohub",
    symbol: "chg",
    name: "Cryptohub",
  },
  {
    id: "cryptoids-game-coin",
    symbol: "cgc",
    name: "Cryptoids Game Coin",
  },
  {
    id: "cryptoindex-io",
    symbol: "cix100",
    name: "Cryptoindex.com 100",
  },
  {
    id: "crypto-international",
    symbol: "cri",
    name: "Crypto International",
  },
  {
    id: "crypto-inu",
    symbol: "abcd",
    name: "Crypto Inu",
  },
  {
    id: "crypto-island",
    symbol: "cisla",
    name: "Crypto Island",
  },
  {
    id: "cryptojetski",
    symbol: "cjet",
    name: "CryptoJetski",
  },
  {
    id: "crypto-kart-racing",
    symbol: "ckracing",
    name: "Crypto Kart Racing",
  },
  {
    id: "cryptokek",
    symbol: "kek",
    name: "Cryptokek",
  },
  {
    id: "cryptokenz",
    symbol: "cyt",
    name: "Cryptokenz",
  },
  {
    id: "cryptokki",
    symbol: "tokki",
    name: "CRYPTOKKI",
  },
  {
    id: "crypto-klash",
    symbol: "klh",
    name: "Crypto Klash",
  },
  {
    id: "crypto-kombat",
    symbol: "kombat",
    name: "Crypto Kombat",
  },
  {
    id: "cryptoku",
    symbol: "cku",
    name: "Cryptoku",
  },
  {
    id: "crypto-legions-bloodstone",
    symbol: "blst",
    name: "Crypto Legions Bloodstone",
  },
  {
    id: "crypto-legions-v3",
    symbol: "blv3",
    name: "Crypto Legions V3",
  },
  {
    id: "cryptolic",
    symbol: "cptlc",
    name: "Cryptolic",
  },
  {
    id: "cryptolion",
    symbol: "clion",
    name: "CryptoLion",
  },
  {
    id: "crypto-makers-foundation",
    symbol: "cmf",
    name: "Crypto Makers Foundation",
  },
  {
    id: "cryptomeda",
    symbol: "tech",
    name: "Cryptomeda",
  },
  {
    id: "crypto-media-network-2",
    symbol: "cmn",
    name: "Crypto Media Network",
  },
  {
    id: "cryptomines-eternal",
    symbol: "eternal",
    name: "CryptoMines Eternal",
  },
  {
    id: "cryptomines-reborn",
    symbol: "crux",
    name: "CryptoMines Reborn",
  },
  {
    id: "cryptomoonshots",
    symbol: "cms",
    name: "CryptoMoonShots",
  },
  {
    id: "crypto-mushroomz",
    symbol: "shroomz",
    name: "Crypto Mushroomz",
  },
  {
    id: "cryptoneur-network-foundation",
    symbol: "cnf",
    name: "CryptoNeur Network foundation",
  },
  {
    id: "cryptonex",
    symbol: "cnx",
    name: "Cryptonex",
  },
  {
    id: "cryptonia-poker",
    symbol: "cnp",
    name: "Cryptonia Poker",
  },
  {
    id: "cryptonits",
    symbol: "crt",
    name: "Cryptonits",
  },
  {
    id: "crypto-nodes",
    symbol: "crnd",
    name: "Crypto Nodes",
  },
  {
    id: "cryptonovae",
    symbol: "yae",
    name: "Cryptonovae",
  },
  {
    id: "cryptopay",
    symbol: "cpay",
    name: "Cryptopay",
  },
  {
    id: "cryptoperformance-coin",
    symbol: "cpc",
    name: "CryptoPerformance Coin",
  },
  {
    id: "crypto-perx",
    symbol: "cprx",
    name: "Crypto Perx",
  },
  {
    id: "crypto-phoenix",
    symbol: "cphx",
    name: "Crypto Phoenix",
  },
  {
    id: "crypto-piece",
    symbol: "belly",
    name: "Crypto Piece",
  },
  {
    id: "crypto-pitch",
    symbol: "cpi",
    name: "Crypto Pitch",
  },
  {
    id: "cryptoplanes",
    symbol: "cpan",
    name: "CryptoPlanes",
  },
  {
    id: "cryptoplants",
    symbol: "cpc",
    name: "CryptoPlants Club",
  },
  {
    id: "cryptopolis",
    symbol: "cpo",
    name: "Cryptopolis",
  },
  {
    id: "crypto-pote-token",
    symbol: "pope",
    name: "Crypto Pote",
  },
  {
    id: "crypto-price-index",
    symbol: "cpi",
    name: "Crypto Price Index",
  },
  {
    id: "cryptoprofile",
    symbol: "cp",
    name: "CryptoProfile",
  },
  {
    id: "crypto-puffs",
    symbol: "puffs",
    name: "Crypto Puffs",
  },
  {
    id: "cryptopunk-7171-hoodie",
    symbol: "hoodie",
    name: "CryptoPunk #7171",
  },
  {
    id: "cryptopunks-fraction-toke",
    symbol: "ipunks",
    name: "CryptoPunks Fraction Token",
  },
  {
    id: "cryptopunt",
    symbol: "pun",
    name: "CryptoPunt",
  },
  {
    id: "crypto-raiders",
    symbol: "raider",
    name: "Crypto Raiders",
  },
  {
    id: "crypto-realms-war",
    symbol: "yny",
    name: "Crypto Realms War",
  },
  {
    id: "cryptorg-token",
    symbol: "ctg",
    name: "Cryptorg",
  },
  {
    id: "crypto-rocket-launch",
    symbol: "crl",
    name: "Crypto Rocket Launch",
  },
  {
    id: "cryptorockets",
    symbol: "crocket",
    name: "CryptoRockets",
  },
  {
    id: "cryptorose",
    symbol: "crose",
    name: "CryptoRose",
  },
  {
    id: "crypto-royale",
    symbol: "roy",
    name: "Crypto Royale",
  },
  {
    id: "cryptorpg",
    symbol: "rpg",
    name: "CryptoRPG",
  },
  {
    id: "cryptosaga",
    symbol: "saga",
    name: "CryptoSaga",
  },
  {
    id: "cryptoshares",
    symbol: "shares",
    name: "Cryptoshares",
  },
  {
    id: "crypto-shield",
    symbol: "shield",
    name: "Crypto Shield",
  },
  {
    id: "cryptoships",
    symbol: "cship",
    name: "CryptoShips",
  },
  {
    id: "cryptoskates",
    symbol: "cst",
    name: "CryptoSkates",
  },
  {
    id: "crypto-snack",
    symbol: "snack",
    name: "Crypto Snack",
  },
  {
    id: "crypto-soccer",
    symbol: "csc",
    name: "Crypto Soccer",
  },
  {
    id: "cryptosoul",
    symbol: "soul",
    name: "CryptoSoul",
  },
  {
    id: "crypto-sports",
    symbol: "cspn",
    name: "Crypto Sports",
  },
  {
    id: "cryptosroom",
    symbol: "croom",
    name: "Cryptosroom",
  },
  {
    id: "cryptostone",
    symbol: "cps",
    name: "Cryptostone",
  },
  {
    id: "cryptostribe",
    symbol: "cstc",
    name: "CryptosTribe",
  },
  {
    id: "crypto-swap",
    symbol: "cpsp",
    name: "Crypto Swap",
  },
  {
    id: "cryptotanks",
    symbol: "tank",
    name: "CryptoTanks",
  },
  {
    id: "cryptotask-2",
    symbol: "ctask",
    name: "CryptoTask",
  },
  {
    id: "cryptotaxis-token",
    symbol: "ctax",
    name: "Cryptotaxis",
  },
  {
    id: "cryptotem",
    symbol: "totem",
    name: "Cryptotem",
  },
  {
    id: "crypto-tex",
    symbol: "ctex",
    name: "CRYPTO TEX",
  },
  {
    id: "cryptotrains",
    symbol: "ctrain",
    name: "CryptoTrains",
  },
  {
    id: "cryptotycoon",
    symbol: "ctt",
    name: "CryptoTycoon",
  },
  {
    id: "cryptounit",
    symbol: "cru",
    name: "Cryptounit",
  },
  {
    id: "crypto-vault",
    symbol: "cvt",
    name: "Crypto Vault",
  },
  {
    id: "crypto-village-accelerator",
    symbol: "cva",
    name: "Crypto Village Accelerator",
  },
  {
    id: "crypto-village-accelerator-cvag",
    symbol: "cvag",
    name: "Crypto Village Accelerator CVAG",
  },
  {
    id: "crypto-volatility-token",
    symbol: "cvol",
    name: "Crypto Volatility",
  },
  {
    id: "cryptovszombie",
    symbol: "cvz",
    name: "CryptoVsZombie",
  },
  {
    id: "cryptowar-xblade",
    symbol: "open",
    name: "OpenWorld",
  },
  {
    id: "crypto-warz",
    symbol: "warz",
    name: "Crypto Warz",
  },
  {
    id: "cryptowolf",
    symbol: "cwolf",
    name: "CryptoWolf",
  },
  {
    id: "cryptoworld-vip",
    symbol: "cwv",
    name: "CryptoWorld.VIP",
  },
  {
    id: "crypto-wrestling-inu",
    symbol: "$cwi",
    name: "Crypto Wrestling Inu",
  },
  {
    id: "cryptozerofi",
    symbol: "zeri_v2",
    name: "CryptoZerofi V2",
  },
  {
    id: "cryptozoo",
    symbol: "zoo",
    name: "CryptoZoo",
  },
  {
    id: "cryptozoon",
    symbol: "zoon",
    name: "CryptoZoon",
  },
  {
    id: "cryptrust",
    symbol: "ctrt",
    name: "Cryptrust",
  },
  {
    id: "cryptyk",
    symbol: "ctk",
    name: "Cryptyk",
  },
  {
    id: "crypworld",
    symbol: "cwc",
    name: "CrypWorld",
  },
  {
    id: "crystal",
    symbol: "crystal",
    name: "Crystal",
  },
  {
    id: "crystal-clear",
    symbol: "cct",
    name: "Crystal Clear",
  },
  {
    id: "crystal-dust",
    symbol: "csd",
    name: "Crystal Dust",
  },
  {
    id: "crystal-of-dragon",
    symbol: "cod",
    name: "Crystal Of Dragon",
  },
  {
    id: "crystal-palace-fan-token",
    symbol: "cpfc",
    name: "Crystal Palace FC Fan Token",
  },
  {
    id: "crystal-powder",
    symbol: "cp",
    name: "Crystal Powder",
  },
  {
    id: "crystal-token",
    symbol: "cyl",
    name: "Crystal CYL",
  },
  {
    id: "crystl-finance",
    symbol: "crystl",
    name: "Crystl Finance",
  },
  {
    id: "csp-dao-network",
    symbol: "nebo",
    name: "CSP DAO Network",
  },
  {
    id: "csr",
    symbol: "csr",
    name: "CSR",
  },
  {
    id: "ctc-2",
    symbol: "ctc",
    name: "CTC",
  },
  {
    id: "ctomorrow-platform",
    symbol: "ctp",
    name: "Ctomorrow Platform",
  },
  {
    id: "ctrl-x",
    symbol: "cut",
    name: "Ctrl-X",
  },
  {
    id: "cube",
    symbol: "itamcube",
    name: "CUBE",
  },
  {
    id: "cube-intelligence",
    symbol: "auto",
    name: "Cube Intelligence",
  },
  {
    id: "cube-network",
    symbol: "cube",
    name: "Cube Network",
  },
  {
    id: "cub-finance",
    symbol: "cub",
    name: "Cub Finance",
  },
  {
    id: "cubics",
    symbol: "cubic",
    name: "Cubics",
  },
  {
    id: "cubiex-power",
    symbol: "cbix-p",
    name: "Cubiex Power",
  },
  {
    id: "cubix",
    symbol: "cubix",
    name: "CUBIX",
  },
  {
    id: "cubtoken",
    symbol: "cubt",
    name: "CubToken",
  },
  {
    id: "cudos",
    symbol: "cudos",
    name: "Cudos",
  },
  {
    id: "cuex",
    symbol: "ccap",
    name: "CUEX Capital",
  },
  {
    id: "cult-dao",
    symbol: "cult",
    name: "Cult DAO",
  },
  {
    id: "cultiplan",
    symbol: "ctpl",
    name: "Cultiplan",
  },
  {
    id: "cuminu",
    symbol: "cuminu",
    name: "Cuminu",
  },
  {
    id: "cumrocket",
    symbol: "cummies",
    name: "CumRocket",
  },
  {
    id: "cuprum-coin",
    symbol: "cuc",
    name: "Cuprum Coin",
  },
  {
    id: "curate",
    symbol: "xcur",
    name: "Curate",
  },
  {
    id: "cure-chain",
    symbol: "chain",
    name: "CURE Chain",
  },
  {
    id: "curecoin",
    symbol: "cure",
    name: "Curecoin",
  },
  {
    id: "cure-token-v2",
    symbol: "cure",
    name: "CURE V2",
  },
  {
    id: "curio-governance",
    symbol: "cgt",
    name: "Curio Governance",
  },
  {
    id: "curryswap",
    symbol: "curry",
    name: "CurrySwap",
  },
  {
    id: "curve-dao-token",
    symbol: "crv",
    name: "Curve DAO",
  },
  {
    id: "curve-fi-amdai-amusdc-amusdt",
    symbol: "am3crv",
    name: "Curve.fi amDAI/amUSDC/amUSDT",
  },
  {
    id: "curve-fi-dai-usdc",
    symbol: "dai+usdc",
    name: "Curve.fi DAI/USDC",
  },
  {
    id: "curve-fi-frax-usdc",
    symbol: "crvfrax",
    name: "Curve.fi FRAX/USDC",
  },
  {
    id: "curve-fi-gdai-gusdc-gusdt",
    symbol: "g3crv",
    name: "Curve.fi gDAI/gUSDC/gUSDT",
  },
  {
    id: "curve-fi-renbtc-wbtc-sbtc",
    symbol: "crvrenwsbtc",
    name: "Curve.fi renBTC/wBTC/sBTC",
  },
  {
    id: "curve-fi-usdc-usdt",
    symbol: "2crv",
    name: "Curve.fi USDC/USDT",
  },
  {
    id: "curve-fi-ydai-yusdc-yusdt-ytusd",
    symbol: "ycurve",
    name: "LP-yCurve",
  },
  {
    id: "curvehash",
    symbol: "curve",
    name: "CURVEHASH",
  },
  {
    id: "custodiy",
    symbol: "cty",
    name: "CUSTODIY",
  },
  {
    id: "cutcoin",
    symbol: "cut",
    name: "CUTcoin",
  },
  {
    id: "cvault-finance",
    symbol: "core",
    name: "cVault.finance",
  },
  {
    id: "cvnx",
    symbol: "cvnx",
    name: "CVNX",
  },
  {
    id: "cvshots",
    symbol: "cvshot",
    name: "CVSHOTS",
  },
  {
    id: "cxn-network",
    symbol: "cxn",
    name: "CXN Network",
  },
  {
    id: "cyber-city",
    symbol: "cybr",
    name: "Cyber City",
  },
  {
    id: "cyberclassic",
    symbol: "class",
    name: "Cyberclassic",
  },
  {
    id: "cyber-crystal",
    symbol: "crystal",
    name: "Cyber Crystal",
  },
  {
    id: "cyberdoge",
    symbol: "cybrrrdoge",
    name: "CyberDoge",
  },
  {
    id: "cyberdragon-gold",
    symbol: "gold",
    name: "CyberDragon Gold",
  },
  {
    id: "cyberfi",
    symbol: "cfi",
    name: "CyberFi",
  },
  {
    id: "cyberfm",
    symbol: "cyfm",
    name: "CyberFM",
  },
  {
    id: "cybermiles",
    symbol: "cmt",
    name: "CyberMiles",
  },
  {
    id: "cyber-movie-chain",
    symbol: "cmct",
    name: "Cyber Movie Chain",
  },
  {
    id: "cybermusic",
    symbol: "cymt",
    name: "CyberMusic",
  },
  {
    id: "cyberpop-metaverse",
    symbol: "cyt",
    name: "Cyberpop Metaverse",
  },
  {
    id: "cyber-soccer",
    symbol: "coca",
    name: "CYBER SOCCER",
  },
  {
    id: "cybertronchain",
    symbol: "ctc",
    name: "CyberTronchain",
  },
  {
    id: "cybervein",
    symbol: "cvt",
    name: "CyberVein",
  },
  {
    id: "cybloc-battery-token",
    symbol: "cbt",
    name: "CyBall CyBloc Battery",
  },
  {
    id: "cyborg-apes",
    symbol: "borg",
    name: "Cyborg Apes",
  },
  {
    id: "cycan-network",
    symbol: "cyn",
    name: "Cycan Network",
  },
  {
    id: "cycle-token",
    symbol: "cycle",
    name: "Cycle",
  },
  {
    id: "cyc-lock",
    symbol: "cyc",
    name: "CYC'Lock",
  },
  {
    id: "cyclone-protocol",
    symbol: "cyc",
    name: "Cyclone Protocol",
  },
  {
    id: "cyclos",
    symbol: "cys",
    name: "Cykura",
  },
  {
    id: "cydotori",
    symbol: "dotr",
    name: "Cydotori",
  },
  {
    id: "cylum-finance",
    symbol: "cym",
    name: "Cylum Finance",
  },
  {
    id: "cyop-protocol",
    symbol: "cyop",
    name: "CyOp Protocol",
  },
  {
    id: "cypherdog-token",
    symbol: "cdog",
    name: "Cypherdog Token",
  },
  {
    id: "cypherium",
    symbol: "cph",
    name: "Cypherium",
  },
  {
    id: "cyptobit-network",
    symbol: "cbi",
    name: "Cyptobit Network",
  },
  {
    id: "cyrus-coin",
    symbol: "cyrus",
    name: "Cyrus Coin",
  },
  {
    id: "czbnb",
    symbol: "czbnb",
    name: "CZbnb",
  },
  {
    id: "czbusd",
    symbol: "czbusd",
    name: "CZbusd",
  },
  {
    id: "czfarm",
    symbol: "czf",
    name: "CZFarm",
  },
  {
    id: "czred",
    symbol: "czr",
    name: "CZRed",
  },
  {
    id: "czshares",
    symbol: "czshares",
    name: "CZshares",
  },
  {
    id: "czusd",
    symbol: "czusd",
    name: "CZUSD",
  },
  {
    id: "d3",
    symbol: "defi",
    name: "D3",
  },
  {
    id: "dabb-doge",
    symbol: "ddoge",
    name: "Dabb Doge",
  },
  {
    id: "dab-coin",
    symbol: "dab",
    name: "DAB Coin",
  },
  {
    id: "dachshund",
    symbol: "dsd",
    name: "Dachshund",
  },
  {
    id: "dacxi",
    symbol: "dacxi",
    name: "Dacxi",
  },
  {
    id: "daddybabydoge",
    symbol: "dbdt",
    name: "DBDT TOKEN",
  },
  {
    id: "daddybezos",
    symbol: "djbz",
    name: "DaddyBezos",
  },
  {
    id: "daddy-doge",
    symbol: "daddydoge",
    name: "Daddy Doge",
  },
  {
    id: "daddyusdt",
    symbol: "daddyusdt",
    name: "DaddyUSDT",
  },
  {
    id: "daefrom",
    symbol: "dae",
    name: "Daefrom",
  },
  {
    id: "daex",
    symbol: "dax",
    name: "DAEX",
  },
  {
    id: "dafin",
    symbol: "daf",
    name: "DaFIN",
  },
  {
    id: "dafi-protocol",
    symbol: "dafi",
    name: "Dafi Protocol",
  },
  {
    id: "dagger",
    symbol: "xdag",
    name: "Dagger",
  },
  {
    id: "dai",
    symbol: "dai",
    name: "Dai",
  },
  {
    id: "daikicoin",
    symbol: "dic",
    name: "Daikicoin",
  },
  {
    id: "daikokuten-sama",
    symbol: "dkks",
    name: "Daikokuten Sama",
  },
  {
    id: "dain-token",
    symbol: "dain",
    name: "Dain",
  },
  {
    id: "dairy-money-milk",
    symbol: "milk",
    name: "Dairy.Money MILK",
  },
  {
    id: "daisy",
    symbol: "daisy",
    name: "Daisy Protocol",
  },
  {
    id: "dalecoin",
    symbol: "dalc",
    name: "Dalecoin",
  },
  {
    id: "dali",
    symbol: "dali",
    name: "DALI",
  },
  {
    id: "dama",
    symbol: "dama",
    name: "DAMA",
  },
  {
    id: "damm",
    symbol: "damm",
    name: "dAMM",
  },
  {
    id: "danat-coin",
    symbol: "dnc",
    name: "Danat Coin",
  },
  {
    id: "dandy",
    symbol: "dandy",
    name: "Dandy Dego",
  },
  {
    id: "dangermoon",
    symbol: "dangermoon",
    name: "DangerMoon",
  },
  {
    id: "dante-finance",
    symbol: "dante",
    name: "Dante Finance",
  },
  {
    id: "dao1",
    symbol: "dao1",
    name: "DAO1",
  },
  {
    id: "dao-farmer-dfg",
    symbol: "dfg",
    name: "DAO Farmer DFG",
  },
  {
    id: "dao-farmer-dfm",
    symbol: "dfm",
    name: "DAO Farmer DFM",
  },
  {
    id: "dao-farmer-dfw",
    symbol: "dfw",
    name: "DAO Farmer DFW",
  },
  {
    id: "daohaus",
    symbol: "haus",
    name: "DAOhaus",
  },
  {
    id: "dao-invest",
    symbol: "vest",
    name: "DAO Invest",
  },
  {
    id: "daoland",
    symbol: "dld",
    name: "Daoland",
  },
  {
    id: "daolaunch",
    symbol: "dal",
    name: "DAOLaunch",
  },
  {
    id: "dao-maker",
    symbol: "dao",
    name: "DAO Maker",
  },
  {
    id: "daosol",
    symbol: "daosol",
    name: "daoSOL",
  },
  {
    id: "daosquare",
    symbol: "rice",
    name: "DAOSquare",
  },
  {
    id: "daostack",
    symbol: "gen",
    name: "DAOstack",
  },
  {
    id: "daovc",
    symbol: "daovc",
    name: "DAOvc",
  },
  {
    id: "daoventures",
    symbol: "dvd",
    name: "DAOventures",
  },
  {
    id: "daoverse",
    symbol: "dvrs",
    name: "DaoVerse",
  },
  {
    id: "dapp",
    symbol: "dapp",
    name: "LiquidApps",
  },
  {
    id: "dapp-com",
    symbol: "dappt",
    name: "Dapp.com",
  },
  {
    id: "dappercoin",
    symbol: "dapp",
    name: "DapperCoin",
  },
  {
    id: "dappnode",
    symbol: "node",
    name: "DAppNode",
  },
  {
    id: "dappradar",
    symbol: "radar",
    name: "DappRadar",
  },
  {
    id: "dappstore",
    symbol: "dappx",
    name: "dAppstore",
  },
  {
    id: "dappsy",
    symbol: "app",
    name: "Dappsy",
  },
  {
    id: "daps-token",
    symbol: "daps",
    name: "DAPS Coin",
  },
  {
    id: "darcmatter-coin",
    symbol: "darc",
    name: "Konstellation",
  },
  {
    id: "dar-dex-token",
    symbol: "dut",
    name: "Dar Dex",
  },
  {
    id: "darenft",
    symbol: "dnft",
    name: "DareNFT",
  },
  {
    id: "dareplay",
    symbol: "dpl",
    name: "DarePlay",
  },
  {
    id: "darkbuild-v2",
    symbol: "db",
    name: "Dark.Build",
  },
  {
    id: "darkcrypto",
    symbol: "dark",
    name: "DarkCrypto",
  },
  {
    id: "darkcrypto-foundation",
    symbol: "dcf",
    name: "DarkCrypto Foundation",
  },
  {
    id: "darkcrypto-share",
    symbol: "sky",
    name: "DarkCrypto Share",
  },
  {
    id: "darkcrystl",
    symbol: "darkcrystl",
    name: "DarkCrystl",
  },
  {
    id: "dark-energy-crystals",
    symbol: "dec",
    name: "Dark Energy Crystals",
  },
  {
    id: "dark-frontiers",
    symbol: "dark",
    name: "Dark Frontiers",
  },
  {
    id: "darkgang-finance",
    symbol: "darkg",
    name: "DarkGang Finance",
  },
  {
    id: "darkknight",
    symbol: "dknight",
    name: "Dark Knight",
  },
  {
    id: "dark-land-survival",
    symbol: "big",
    name: "Dark Land Survival",
  },
  {
    id: "dark-magic",
    symbol: "dmagic",
    name: "Dark Magic",
  },
  {
    id: "darkmatter",
    symbol: "dmt",
    name: "DarkMatter",
  },
  {
    id: "dark-matter",
    symbol: "dmt",
    name: "Dark Matter",
  },
  {
    id: "dark-matter-defi",
    symbol: "dmd",
    name: "Dark Matter Defi",
  },
  {
    id: "darkness-dollar",
    symbol: "dusd",
    name: "Darkness Dollar",
  },
  {
    id: "darkness-share",
    symbol: "ness",
    name: "Darkness Share",
  },
  {
    id: "darkopera-finance",
    symbol: "darko",
    name: "DarkOpera Finance",
  },
  {
    id: "dark-planet",
    symbol: "dp",
    name: "Dark Planet",
  },
  {
    id: "darkshield",
    symbol: "dks",
    name: "DarkShield",
  },
  {
    id: "darleygo-essence",
    symbol: "dge",
    name: "DarleyGo Essence",
  },
  {
    id: "dart-insurance",
    symbol: "dart",
    name: "dART Insurance",
  },
  {
    id: "dart-inu",
    symbol: "dart",
    name: "Dart Inu",
  },
  {
    id: "daruma",
    symbol: "daruma",
    name: "Daruma",
  },
  {
    id: "darussafaka-sports-club",
    symbol: "dsk",
    name: "Darüşşafaka Sports Club",
  },
  {
    id: "darwinia-commitment-token",
    symbol: "kton",
    name: "Darwinia Commitment",
  },
  {
    id: "darwinia-network-native-token",
    symbol: "ring",
    name: "Darwinia Network",
  },
  {
    id: "dascoin",
    symbol: "grn",
    name: "GreenPower",
  },
  {
    id: "dash",
    symbol: "dash",
    name: "Dash",
  },
  {
    id: "dash-diamond",
    symbol: "dashd",
    name: "Dash Diamond",
  },
  {
    id: "dashleague-crystals",
    symbol: "dlc",
    name: "DashLeague Crystals",
  },
  {
    id: "dashsports",
    symbol: "dass",
    name: "DashSports",
  },
  {
    id: "data",
    symbol: "dta",
    name: "DATA",
  },
  {
    id: "databroker-dao",
    symbol: "dtx",
    name: "DaTa eXchange DTX",
  },
  {
    id: "datachain-foundation",
    symbol: "dc",
    name: "DATACHAIN FOUNDATION",
  },
  {
    id: "data-economy-index",
    symbol: "data",
    name: "Data Economy Index",
  },
  {
    id: "data-enterprise-chain",
    symbol: "dec",
    name: "Data Enterprise Chain",
  },
  {
    id: "datahighway",
    symbol: "dhx",
    name: "DataHighway",
  },
  {
    id: "datakyc",
    symbol: "dkyc",
    name: "DataKYC",
  },
  {
    id: "datamine",
    symbol: "dam",
    name: "Datamine",
  },
  {
    id: "datx",
    symbol: "datx",
    name: "DATx",
  },
  {
    id: "dav",
    symbol: "dav",
    name: "DAV Network",
  },
  {
    id: "davidcoin",
    symbol: "dc",
    name: "DavidCoin",
  },
  {
    id: "davinci-coin",
    symbol: "dac",
    name: "Davinci Coin",
  },
  {
    id: "davinci-token",
    symbol: "vinci",
    name: "DaVinci",
  },
  {
    id: "davis-cup-fan-token",
    symbol: "davis",
    name: "Davis Cup Fan Token",
  },
  {
    id: "dawg",
    symbol: "dawg",
    name: "DAWG",
  },
  {
    id: "dawin-token",
    symbol: "dwt",
    name: "DaWin Token",
  },
  {
    id: "dawn-protocol",
    symbol: "dawn",
    name: "Dawn Protocol",
  },
  {
    id: "dawn-star-share",
    symbol: "solar",
    name: "Dawn Star Share",
  },
  {
    id: "dawn-star-token",
    symbol: "dsf",
    name: "Dawn Star Token",
  },
  {
    id: "day-by-day",
    symbol: "dbd",
    name: "Day By Day",
  },
  {
    id: "day-of-defeat",
    symbol: "dod",
    name: "Day Of Defeat",
  },
  {
    id: "daystarter",
    symbol: "dst",
    name: "DAYSTARTER",
  },
  {
    id: "dbx-2",
    symbol: "dbx",
    name: "DBX",
  },
  {
    id: "dcap",
    symbol: "$dcap",
    name: "DCAP",
  },
  {
    id: "dchess-king",
    symbol: "king",
    name: "DChess King",
  },
  {
    id: "dcoin-token",
    symbol: "dt",
    name: "Dcoin",
  },
  {
    id: "d-community",
    symbol: "dili",
    name: "D Community",
  },
  {
    id: "dddx-protocol",
    symbol: "dddx",
    name: "DDDX Protocol",
  },
  {
    id: "d-drops",
    symbol: "dop",
    name: "D-Drops",
  },
  {
    id: "dead-knight",
    symbol: "dkm",
    name: "Dead Knight",
  },
  {
    id: "deadpxlz",
    symbol: "ding",
    name: "DEADPXLZ",
  },
  {
    id: "deapcoin",
    symbol: "dep",
    name: "DEAPCOIN",
  },
  {
    id: "deathroad",
    symbol: "drace",
    name: "DeathRoad",
  },
  {
    id: "death-token",
    symbol: "death",
    name: "Death",
  },
  {
    id: "debio-network",
    symbol: "dbio",
    name: "DeBio Network",
  },
  {
    id: "deblox",
    symbol: "dgs",
    name: "Deblox",
  },
  {
    id: "decanect",
    symbol: "dcnt",
    name: "Decanect",
  },
  {
    id: "decaswap",
    symbol: "deca",
    name: "DecaSwap",
  },
  {
    id: "decaswap-corn",
    symbol: "corn",
    name: "DecaSwap CORN",
  },
  {
    id: "decentbet",
    symbol: "dbet",
    name: "DecentBet",
  },
  {
    id: "decent-database",
    symbol: "decent",
    name: "DECENT Database",
  },
  {
    id: "decentr",
    symbol: "dec",
    name: "Decentr",
  },
  {
    id: "decentrabnb",
    symbol: "dbnb",
    name: "DecentraBNB",
  },
  {
    id: "decentraland",
    symbol: "mana",
    name: "Decentraland",
  },
  {
    id: "decentraland-wormhole",
    symbol: "mana",
    name: "Decentraland (Wormhole)",
  },
  {
    id: "decentral-games",
    symbol: "dg",
    name: "Decentral Games",
  },
  {
    id: "decentral-games-governance",
    symbol: "xdg",
    name: "Decentral Games Governance",
  },
  {
    id: "decentral-games-ice",
    symbol: "ice",
    name: "Decentral Games ICE",
  },
  {
    id: "decentral-games-old",
    symbol: "dg",
    name: "Decentral Games (Old)",
  },
  {
    id: "decentralized-activism",
    symbol: "dact",
    name: "Decentralized Activism",
  },
  {
    id: "decentralized-advertising",
    symbol: "dad",
    name: "DAD",
  },
  {
    id: "decentralized-asset-trading-platform",
    symbol: "datp",
    name: "Decentralized Asset Trading Platform",
  },
  {
    id: "decentralized-autonomous-organization",
    symbol: "dao",
    name: "Decentralized Autonomous Organization",
  },
  {
    id: "decentralized-business-systems",
    symbol: "dbs",
    name: "Decentralized Business Systems",
  },
  {
    id: "decentralized-community-investment-protocol",
    symbol: "dcip",
    name: "Decentralized Community Investment Protocol",
  },
  {
    id: "decentralized-currency-assets",
    symbol: "dca",
    name: "Decentralize Currency",
  },
  {
    id: "decentralized-liquidity-program",
    symbol: "dlp",
    name: "Decentralized Liquidity Program",
  },
  {
    id: "decentralized-machine-learning",
    symbol: "dml",
    name: "Decentralized Machine Learning Protocol",
  },
  {
    id: "decentralized-mining-exchange",
    symbol: "dmc",
    name: "Decentralized Mining Exchange",
  },
  {
    id: "decentralized-nations",
    symbol: "dena",
    name: "Decentralized Nations",
  },
  {
    id: "decentralized-pirates",
    symbol: "depi",
    name: "Decentralized Pirates",
  },
  {
    id: "decentralized-united",
    symbol: "dcu",
    name: "Decentralized United",
  },
  {
    id: "decentralized-universal-basic-income",
    symbol: "dubi",
    name: "Decentralized Universal Basic Income",
  },
  {
    id: "decentralized-usd",
    symbol: "dusd",
    name: "Decentralized USD",
  },
  {
    id: "decentralized-vulnerability-platform",
    symbol: "dvp",
    name: "Decentralized Vulnerability Platform",
  },
  {
    id: "decentraweb",
    symbol: "dweb",
    name: "DecentraWeb",
  },
  {
    id: "decentsol",
    symbol: "dsol",
    name: "DecentSol",
  },
  {
    id: "decenturion",
    symbol: "dcnt",
    name: "Decenturion",
  },
  {
    id: "dechart",
    symbol: "dch",
    name: "DeChart",
  },
  {
    id: "decimal",
    symbol: "del",
    name: "Decimal",
  },
  {
    id: "decimated",
    symbol: "dio",
    name: "Decimated",
  },
  {
    id: "decode-coin",
    symbol: "decode",
    name: "Decode Coin",
  },
  {
    id: "decred",
    symbol: "dcr",
    name: "Decred",
  },
  {
    id: "decredit",
    symbol: "cdtc",
    name: "DeCredit",
  },
  {
    id: "decred-next",
    symbol: "dcrn",
    name: "Decred-Next",
  },
  {
    id: "decubate",
    symbol: "dcb",
    name: "Decubate",
  },
  {
    id: "decurian",
    symbol: "ecu",
    name: "Decurian",
  },
  {
    id: "deep-blue-sea",
    symbol: "dbea",
    name: "Deep Blue Sea",
  },
  {
    id: "deepbrain-chain",
    symbol: "dbc",
    name: "DeepBrain Chain",
  },
  {
    id: "deeper-network",
    symbol: "dpr",
    name: "Deeper Network",
  },
  {
    id: "deeponion",
    symbol: "onion",
    name: "DeepOnion",
  },
  {
    id: "deepspace",
    symbol: "dps",
    name: "DEEPSPACE",
  },
  {
    id: "deepspace-token",
    symbol: "dxo",
    name: "DeepSpace DXO",
  },
  {
    id: "deesse",
    symbol: "love",
    name: "Deesse",
  },
  {
    id: "deez-nuts",
    symbol: "deeznuts",
    name: "Deez Nuts",
  },
  {
    id: "defactor",
    symbol: "factr",
    name: "Defactor",
  },
  {
    id: "defhold",
    symbol: "defo",
    name: "DefHold",
  },
  {
    id: "defi-04ab07ad-43a9-4d63-a379-2c6a2499f748",
    symbol: "dfx",
    name: "DeFi²",
  },
  {
    id: "defi11",
    symbol: "d11",
    name: "DeFi11",
  },
  {
    id: "defiai",
    symbol: "dfai",
    name: "DeFiAI",
  },
  {
    id: "defiato",
    symbol: "dfiat",
    name: "DeFiato",
  },
  {
    id: "defi-bank-tycoon",
    symbol: "dbtycoon",
    name: "DeFi Bank Tycoon",
  },
  {
    id: "defibay",
    symbol: "dbay",
    name: "DefiBay",
  },
  {
    id: "defibet",
    symbol: "$dbet",
    name: "DefiBet",
  },
  {
    id: "defi-bids",
    symbol: "bid",
    name: "DeFi Bids",
  },
  {
    id: "defi-bomb",
    symbol: "dbomb",
    name: "Defi Bomb",
  },
  {
    id: "defibox",
    symbol: "box",
    name: "DefiBox",
  },
  {
    id: "defi-ch",
    symbol: "dfch",
    name: "DeFi.ch",
  },
  {
    id: "defichain",
    symbol: "dfi",
    name: "DeFiChain",
  },
  {
    id: "deficliq",
    symbol: "cliq",
    name: "DefiCliq",
  },
  {
    id: "defi-coin",
    symbol: "defc",
    name: "DeFi Coin",
  },
  {
    id: "deficonnect",
    symbol: "dfc",
    name: "DefiConnect V1",
  },
  {
    id: "deficonnect-v2",
    symbol: "dfc",
    name: "DefiConnect V2",
  },
  {
    id: "defi-degen-land",
    symbol: "ddl",
    name: "DeFi Degen Land",
  },
  {
    id: "defido",
    symbol: "defido",
    name: "DeFido",
  },
  {
    id: "defidollar",
    symbol: "dusd",
    name: "DefiDollar",
  },
  {
    id: "defidollar-dao",
    symbol: "dfd",
    name: "DefiDollar DAO",
  },
  {
    id: "defi-forge",
    symbol: "forge",
    name: "DeFi Forge",
  },
  {
    id: "defi-for-you",
    symbol: "dfy",
    name: "Defi For You",
  },
  {
    id: "defi-franc",
    symbol: "dchf",
    name: "DeFi Franc",
  },
  {
    id: "defi-franc-moneta",
    symbol: "mon",
    name: "Defi Franc Moneta",
  },
  {
    id: "defi-gold",
    symbol: "dfgl",
    name: "DeFi Gold",
  },
  {
    id: "defigram",
    symbol: "dfg",
    name: "Defigram",
  },
  {
    id: "defihorse",
    symbol: "dfh",
    name: "DeFiHorse",
  },
  {
    id: "defihorse-rocket-race",
    symbol: "rr",
    name: "DeFiHorse Rocket Race",
  },
  {
    id: "defi-hunters-dao",
    symbol: "ddao",
    name: "DeFi Hunters DAO",
  },
  {
    id: "defi-kingdoms",
    symbol: "jewel",
    name: "DeFi Kingdoms",
  },
  {
    id: "defi-kingdoms-crystal",
    symbol: "crystal",
    name: "DeFi Kingdoms Crystal",
  },
  {
    id: "defil",
    symbol: "dfl",
    name: "DeFIL",
  },
  {
    id: "defilancer",
    symbol: "defilancer",
    name: "Defilancer",
  },
  {
    id: "defi-land",
    symbol: "dfl",
    name: "DeFi Land",
  },
  {
    id: "defi-land-gold",
    symbol: "goldy",
    name: "DeFi Land Gold",
  },
  {
    id: "defi-launch",
    symbol: "dlaunch",
    name: "DeFi Launch",
  },
  {
    id: "defily",
    symbol: "dfl",
    name: "Defily",
  },
  {
    id: "defina-finance",
    symbol: "fina",
    name: "Defina Finance",
  },
  {
    id: "define",
    symbol: "dfa",
    name: "DeFine",
  },
  {
    id: "definer",
    symbol: "fin",
    name: "DeFiner",
  },
  {
    id: "definity",
    symbol: "defx",
    name: "DeFinity",
  },
  {
    id: "defi-on-mcw",
    symbol: "dfm",
    name: "DeFi on MCW",
  },
  {
    id: "defi-or-die",
    symbol: "dord",
    name: "DeFi Or Die",
  },
  {
    id: "defipie",
    symbol: "pie",
    name: "DeFiPie",
  },
  {
    id: "defiplaza",
    symbol: "dfp2",
    name: "DefiPlaza",
  },
  {
    id: "defipulse-index",
    symbol: "dpi",
    name: "DeFi Pulse Index",
  },
  {
    id: "defire",
    symbol: "cwap",
    name: "DeFIRE",
  },
  {
    id: "defis",
    symbol: "xgm",
    name: "Defis",
  },
  {
    id: "defiscale",
    symbol: "dfc",
    name: "DeFiScale",
  },
  {
    id: "defi-shopping-stake",
    symbol: "dss",
    name: "Defi Shopping Stake",
  },
  {
    id: "defiskeletons",
    symbol: "skeleton",
    name: "Defiskeletons",
  },
  {
    id: "defis-network",
    symbol: "dfs",
    name: "Defis Network",
  },
  {
    id: "defisportscoin",
    symbol: "dsc",
    name: "DefiSportsCoin",
  },
  {
    id: "defistarter",
    symbol: "dfi",
    name: "DfiStarter",
  },
  {
    id: "defi-stoa",
    symbol: "sta",
    name: "STOA Network",
  },
  {
    id: "defit",
    symbol: "defit",
    name: "Digital Fitness",
  },
  {
    id: "defiville-island",
    symbol: "isla",
    name: "DefiVille Island",
  },
  {
    id: "defiwall",
    symbol: "fiwa",
    name: "DeFiWall",
  },
  {
    id: "defi-warrior",
    symbol: "fiwa",
    name: "Defi Warrior",
  },
  {
    id: "defi-yield-protocol",
    symbol: "dyp",
    name: "Dypius",
  },
  {
    id: "defly",
    symbol: "defly",
    name: "Defly",
  },
  {
    id: "deflyball",
    symbol: "defly",
    name: "Deflyball",
  },
  {
    id: "defrost-finance",
    symbol: "melt",
    name: "Defrost Finance",
  },
  {
    id: "defrost-finance-h2o",
    symbol: "h2o",
    name: "Defrost Finance H2O",
  },
  {
    id: "defun-gaming",
    symbol: "defun",
    name: "Defun Gaming",
  },
  {
    id: "defy",
    symbol: "defy",
    name: "DEFY",
  },
  {
    id: "defyswap",
    symbol: "dfy",
    name: "Defyswap",
  },
  {
    id: "degate",
    symbol: "dg",
    name: "DeGate",
  },
  {
    id: "degemeth",
    symbol: "dgm",
    name: "DeGEM",
  },
  {
    id: "degen",
    symbol: "degn",
    name: "Degen",
  },
  {
    id: "degenerate-ape-academy-floor-index",
    symbol: "dape",
    name: "Degenerate Ape Academy Floor Index",
  },
  {
    id: "degenerate-money",
    symbol: "degenr",
    name: "Degenerate Money",
  },
  {
    id: "degenerator",
    symbol: "meme",
    name: "Meme",
  },
  {
    id: "degen-gold",
    symbol: "dgold",
    name: "Degen Gold",
  },
  {
    id: "degen-index",
    symbol: "degen",
    name: "DEGEN Index",
  },
  {
    id: "degen-nugget",
    symbol: "nugget",
    name: "Degen NUGGET",
  },
  {
    id: "degen-protocol-token",
    symbol: "sh33p",
    name: "Degen Protocol",
  },
  {
    id: "degens",
    symbol: "degens",
    name: "Degens",
  },
  {
    id: "degenvc",
    symbol: "dgvc",
    name: "DegenVC",
  },
  {
    id: "degenx",
    symbol: "dgnx",
    name: "DegenX",
  },
  {
    id: "degis",
    symbol: "deg",
    name: "Degis",
  },
  {
    id: "dego-finance",
    symbol: "dego",
    name: "Dego Finance",
  },
  {
    id: "degrain",
    symbol: "dgrn",
    name: "Degrain",
  },
  {
    id: "degree-crypto-token",
    symbol: "dct",
    name: "Degree Crypto",
  },
  {
    id: "dehealth",
    symbol: "dhlt",
    name: "DeHealth",
  },
  {
    id: "dehero-community-token",
    symbol: "heroes",
    name: "Dehero Community",
  },
  {
    id: "dehive",
    symbol: "dhv",
    name: "DeHive",
  },
  {
    id: "dehorizon",
    symbol: "devt",
    name: "DeHorizon",
  },
  {
    id: "dehr-network",
    symbol: "dhr",
    name: "DeHR Network",
  },
  {
    id: "deip-protocol",
    symbol: "deip",
    name: "DEIP Protocol",
  },
  {
    id: "dei-token",
    symbol: "dei",
    name: "DEI",
  },
  {
    id: "dejitaru-kaida",
    symbol: "kaida",
    name: "Dejitaru Kaida",
  },
  {
    id: "dejitaru-shirudo",
    symbol: "shield",
    name: "Dejitaru Shirudo",
  },
  {
    id: "dejitaru-tsuka",
    symbol: "tsuka",
    name: "Dejitaru Tsuka",
  },
  {
    id: "dejitaru-tsuka-pow",
    symbol: "tsukaw",
    name: "Dejitaru Tsuka POW",
  },
  {
    id: "dekbox",
    symbol: "dek",
    name: "DekBox",
  },
  {
    id: "delfino-finance",
    symbol: "dlf",
    name: "Delfino Finance",
  },
  {
    id: "delio-dsp",
    symbol: "dsp",
    name: "Delio DSP",
  },
  {
    id: "deli-of-thrones",
    symbol: "dotx",
    name: "DeFi of Thrones",
  },
  {
    id: "delion",
    symbol: "dln",
    name: "Delion",
  },
  {
    id: "deliq",
    symbol: "dlq",
    name: "Deliq",
  },
  {
    id: "delos-defi",
    symbol: "delos",
    name: "Delos Defi",
  },
  {
    id: "delot-io",
    symbol: "delot",
    name: "DELOT.IO",
  },
  {
    id: "delphy",
    symbol: "dpy",
    name: "Delphy",
  },
  {
    id: "deltachain",
    symbol: "delta",
    name: "DeltaChain",
  },
  {
    id: "delta-exchange-token",
    symbol: "deto",
    name: "Delta Exchange",
  },
  {
    id: "deltafi",
    symbol: "delfi",
    name: "DeltaFi",
  },
  {
    id: "delta-financial",
    symbol: "delta",
    name: "Delta Financial",
  },
  {
    id: "deltaflare",
    symbol: "honr",
    name: "DeltaFlare",
  },
  {
    id: "deltaflip",
    symbol: "deltaf",
    name: "DeltaFlip",
  },
  {
    id: "deltahub-community",
    symbol: "dhc",
    name: "DeltaHub Community",
  },
  {
    id: "delta-theta",
    symbol: "dlta",
    name: "delta.theta",
  },
  {
    id: "demeter",
    symbol: "deo",
    name: "Demeter",
  },
  {
    id: "demeter-usd",
    symbol: "dusd",
    name: "Demeter USD",
  },
  {
    id: "demodyfi",
    symbol: "dmod",
    name: "Demodyfi",
  },
  {
    id: "demole",
    symbol: "dmlg",
    name: "Demole",
  },
  {
    id: "denarius",
    symbol: "d",
    name: "Denarius",
  },
  {
    id: "dendomains",
    symbol: "ddn",
    name: "Den Domains",
  },
  {
    id: "dengba-planet",
    symbol: "dbt",
    name: "Dengba Planet",
  },
  {
    id: "denizlispor-fan-token",
    symbol: "dnz",
    name: "Denizlispor Fan Token",
  },
  {
    id: "dent",
    symbol: "dent",
    name: "Dent",
  },
  {
    id: "dentacoin",
    symbol: "dcn",
    name: "Dentacoin",
  },
  {
    id: "dentrocoin",
    symbol: "dentro",
    name: "Dentrocoin",
  },
  {
    id: "deonex-token",
    symbol: "don",
    name: "DEONEX",
  },
  {
    id: "depay",
    symbol: "depay",
    name: "DePay",
  },
  {
    id: "deploying-more-capital",
    symbol: "dmc",
    name: "Deploying More Capital",
  },
  {
    id: "depocket",
    symbol: "depo",
    name: "DePocket",
  },
  {
    id: "deportivo-alaves-fan-token",
    symbol: "daft",
    name: "Deportivo Alavés Fan Token",
  },
  {
    id: "depth-token",
    symbol: "dep",
    name: "Depth",
  },
  {
    id: "dequant",
    symbol: "deq",
    name: "Dequant",
  },
  {
    id: "derace",
    symbol: "derc",
    name: "DeRace",
  },
  {
    id: "deracoin",
    symbol: "drc",
    name: "Deracoin",
  },
  {
    id: "derify-protocol",
    symbol: "drf",
    name: "Derify Protocol",
  },
  {
    id: "deri-protocol",
    symbol: "deri",
    name: "Deri Protocol",
  },
  {
    id: "derivadao",
    symbol: "ddx",
    name: "DerivaDAO",
  },
  {
    id: "derived",
    symbol: "dvdx",
    name: "Derived",
  },
  {
    id: "dero",
    symbol: "dero",
    name: "Dero",
  },
  {
    id: "desmos",
    symbol: "dsm",
    name: "Desmos",
  },
  {
    id: "deso",
    symbol: "deso",
    name: "Decentralized Social",
  },
  {
    id: "despace-protocol",
    symbol: "des",
    name: "DeSpace Protocol",
  },
  {
    id: "destorage",
    symbol: "ds",
    name: "DeStorage",
  },
  {
    id: "deusdc",
    symbol: "deusdc",
    name: "deUSDC",
  },
  {
    id: "deus-finance-2",
    symbol: "deus",
    name: "DEUS Finance",
  },
  {
    id: "deutsche-emark",
    symbol: "dem",
    name: "Deutsche eMark",
  },
  {
    id: "deuxpad",
    symbol: "deux",
    name: "DeuxPad",
  },
  {
    id: "devault",
    symbol: "dvt",
    name: "DeVault",
  },
  {
    id: "dev-doing-something",
    symbol: "dev",
    name: "Dev Doing Something",
  },
  {
    id: "developer-dao",
    symbol: "code",
    name: "Developer DAO",
  },
  {
    id: "devery",
    symbol: "eve",
    name: "Devery",
  },
  {
    id: "devikins",
    symbol: "dvk",
    name: "Devikins",
  },
  {
    id: "devil-finance",
    symbol: "devil",
    name: "Devil Finance",
  },
  {
    id: "devil-token",
    symbol: "devl",
    name: "Devil",
  },
  {
    id: "devious-licks-gold",
    symbol: "dgold",
    name: "Devious Licks Gold",
  },
  {
    id: "devita-global",
    symbol: "life",
    name: "DEVITA",
  },
  {
    id: "devolution",
    symbol: "devo",
    name: "DeVolution",
  },
  {
    id: "devour",
    symbol: "restaurants",
    name: "Devour Token",
  },
  {
    id: "devour-2",
    symbol: "dpay",
    name: "Devour",
  },
  {
    id: "dev-protocol",
    symbol: "dev",
    name: "Dev Protocol",
  },
  {
    id: "dexa-coin",
    symbol: "dexa",
    name: "DEXA COIN",
  },
  {
    id: "dexalot",
    symbol: "alot",
    name: "Dexalot",
  },
  {
    id: "dexbrowser",
    symbol: "bro",
    name: "DexBrowser",
  },
  {
    id: "dexcheck",
    symbol: "dxcheck",
    name: "DexCheck",
  },
  {
    id: "dexe",
    symbol: "dexe",
    name: "DeXe",
  },
  {
    id: "dexfin",
    symbol: "dxf",
    name: "Dexfin",
  },
  {
    id: "dexfolio",
    symbol: "dexf",
    name: "Dexfolio",
  },
  {
    id: "dex-game",
    symbol: "dxgm",
    name: "DexGame",
  },
  {
    id: "dexioprotocol-v1",
    symbol: "dexi",
    name: "Dexioprotocol V1",
  },
  {
    id: "dexioprotocol-v2",
    symbol: "dexi",
    name: "Dexioprotocol",
  },
  {
    id: "dexira",
    symbol: "dex",
    name: "dexIRA",
  },
  {
    id: "dexit-finance",
    symbol: "dxt",
    name: "Dexit Network",
  },
  {
    id: "dexkit",
    symbol: "kit",
    name: "DexKit",
  },
  {
    id: "dexlab",
    symbol: "dxl",
    name: "Dexlab",
  },
  {
    id: "dexo",
    symbol: "dexo",
    name: "DEXO",
  },
  {
    id: "dexpad",
    symbol: "dxp",
    name: "DexPad",
  },
  {
    id: "dexpools",
    symbol: "dxp",
    name: "Vela Exchange",
  },
  {
    id: "dexshare",
    symbol: "dexshare",
    name: "dexSHARE",
  },
  {
    id: "dexsport",
    symbol: "desu",
    name: "Dexsport",
  },
  {
    id: "dextf",
    symbol: "dextf",
    name: "Domani Protocol",
  },
  {
    id: "dextoken-governance",
    symbol: "dexg",
    name: "Dextoken Governance",
  },
  {
    id: "dextools",
    symbol: "dext",
    name: "DexTools",
  },
  {
    id: "dex-trade-coin",
    symbol: "dxc",
    name: "Dex-Trade Coin",
  },
  {
    id: "dextro",
    symbol: "dxo",
    name: "Dextro",
  },
  {
    id: "dexwallet",
    symbol: "dwt",
    name: "DexWallet",
  },
  {
    id: "dfe-finance",
    symbol: "dfe",
    name: "DFE.Finance",
  },
  {
    id: "dfinance",
    symbol: "xfi",
    name: "Dfinance",
  },
  {
    id: "dfohub",
    symbol: "buidl",
    name: "dfohub",
  },
  {
    id: "dforce-token",
    symbol: "df",
    name: "dForce",
  },
  {
    id: "dfs-mafia",
    symbol: "dfsm",
    name: "DFS Mafia V2",
  },
  {
    id: "dfsocial-gaming-2",
    symbol: "dfsg",
    name: "DFSocial Gaming",
  },
  {
    id: "dfund",
    symbol: "dfnd",
    name: "dFund",
  },
  {
    id: "dfx-finance",
    symbol: "dfx",
    name: "DFX Finance",
  },
  {
    id: "dfyn-network",
    symbol: "dfyn",
    name: "Dfyn Network",
  },
  {
    id: "dgld",
    symbol: "dgld",
    name: "DGLD",
  },
  {
    id: "dgpayment",
    symbol: "dgp",
    name: "DGPayment",
  },
  {
    id: "dgt-community-token",
    symbol: "dgt",
    name: "DGT Community Token",
  },
  {
    id: "dhabicoin",
    symbol: "dbc",
    name: "Dhabicoin",
  },
  {
    id: "dhealth",
    symbol: "dhp",
    name: "dHealth",
  },
  {
    id: "dhedge-dao",
    symbol: "dht",
    name: "dHEDGE DAO",
  },
  {
    id: "diabolo",
    symbol: "dcash",
    name: "Diabolo",
  },
  {
    id: "dia-data",
    symbol: "dia",
    name: "DIA",
  },
  {
    id: "diamond",
    symbol: "dmd",
    name: "Diamond",
  },
  {
    id: "diamond-boyz-coin",
    symbol: "dbz",
    name: "Diamond Boyz Coin",
  },
  {
    id: "diamond-coin",
    symbol: "diamond",
    name: "Diamond Coin",
  },
  {
    id: "diamond-dnd",
    symbol: "dnd",
    name: "Diamond DND",
  },
  {
    id: "diamond-hands-token",
    symbol: "dhc",
    name: "Diamond Hands DHC",
  },
  {
    id: "diamondhold",
    symbol: "dhold",
    name: "DiamondHold",
  },
  {
    id: "diamond-launch",
    symbol: "dlc",
    name: "Diamond Launch",
  },
  {
    id: "diamond-love",
    symbol: "love",
    name: "Diamond Love",
  },
  {
    id: "diamond-platform-token",
    symbol: "dpt",
    name: "Diamond Platform",
  },
  {
    id: "diamondq",
    symbol: "diq",
    name: "DiamondQ",
  },
  {
    id: "diamondshiba",
    symbol: "ds$",
    name: "DiamondShiba",
  },
  {
    id: "diamond-xrpl",
    symbol: "diamond",
    name: "Diamond XRPL",
  },
  {
    id: "dibs-money",
    symbol: "dibs",
    name: "Dibs Money",
  },
  {
    id: "dibs-share",
    symbol: "dshare",
    name: "Dibs Share",
  },
  {
    id: "didcoin-2",
    symbol: "did",
    name: "Didcoin",
  },
  {
    id: "diego",
    symbol: "dig",
    name: "DIEGO",
  },
  {
    id: "die-protocol",
    symbol: "die",
    name: "Die Protocol",
  },
  {
    id: "diffusion",
    symbol: "diff",
    name: "Diffusion",
  },
  {
    id: "difo-network",
    symbol: "dfn",
    name: "Difo Network",
  },
  {
    id: "dify-finance",
    symbol: "yfiii",
    name: "Dify.Finance",
  },
  {
    id: "dig-chain",
    symbol: "dig",
    name: "Dig Chain",
  },
  {
    id: "digg",
    symbol: "digg",
    name: "DIGG",
  },
  {
    id: "digible",
    symbol: "digi",
    name: "Digible",
  },
  {
    id: "digibyte",
    symbol: "dgb",
    name: "DigiByte",
  },
  {
    id: "digichain",
    symbol: "digichain",
    name: "Digichain Coin",
  },
  {
    id: "digicol-token",
    symbol: "dgcl",
    name: "DigiCol",
  },
  {
    id: "digi-dinar",
    symbol: "ddr",
    name: "Digi Dinar",
  },
  {
    id: "digidinar-token",
    symbol: "ddrt",
    name: "DigiDinar Token",
  },
  {
    id: "digifinextoken",
    symbol: "dft",
    name: "DigiFinex",
  },
  {
    id: "digihealth",
    symbol: "dgh",
    name: "Digihealth",
  },
  {
    id: "digimetaverse",
    symbol: "dgmv",
    name: "DigiMetaverse",
  },
  {
    id: "digimoney",
    symbol: "dgm",
    name: "DigiMoney",
  },
  {
    id: "digimon-rabbit",
    symbol: "drb",
    name: "Digimon Rabbit",
  },
  {
    id: "digipad",
    symbol: "dgp",
    name: "Digipad",
  },
  {
    id: "digiswap",
    symbol: "digis",
    name: "DigiSwap",
  },
  {
    id: "digital-bank-of-africa",
    symbol: "dba",
    name: "Digital Bank of Africa",
  },
  {
    id: "digitalbits",
    symbol: "xdb",
    name: "DigitalBits",
  },
  {
    id: "digitalcoin",
    symbol: "dgc",
    name: "Digitalcoin",
  },
  {
    id: "digitaldollar",
    symbol: "dusd",
    name: "DigitalDollar",
  },
  {
    id: "digital-financial-exchange",
    symbol: "difx",
    name: "Digital Financial Exchange",
  },
  {
    id: "digital-money-bits",
    symbol: "dmb",
    name: "Digital Money Bits",
  },
  {
    id: "digitalnote",
    symbol: "xdn",
    name: "DigitalNote",
  },
  {
    id: "digitalprice",
    symbol: "dp",
    name: "DigitalPrice",
  },
  {
    id: "digital-rand",
    symbol: "dzar",
    name: "Digital Rand",
  },
  {
    id: "digital-reserve-currency",
    symbol: "drc",
    name: "Digital Reserve Currency",
  },
  {
    id: "digital-standard-unit",
    symbol: "dsu",
    name: "Digital Standard Unit",
  },
  {
    id: "digital-swis-franc",
    symbol: "dsfr",
    name: "Digital Swiss Franc",
  },
  {
    id: "digital-ticks",
    symbol: "dtx",
    name: "Digital Ticks",
  },
  {
    id: "digitex-futures-exchange",
    symbol: "dgtx",
    name: "Digitex",
  },
  {
    id: "digits-dao",
    symbol: "digits",
    name: "Digits DAO",
  },
  {
    id: "digixdao",
    symbol: "dgd",
    name: "DigixDAO",
  },
  {
    id: "digix-gold",
    symbol: "dgx",
    name: "Digix Gold",
  },
  {
    id: "dignity-gold",
    symbol: "digau",
    name: "Dignity Gold",
  },
  {
    id: "dike",
    symbol: "dike",
    name: "Dike",
  },
  {
    id: "dimecoin",
    symbol: "dime",
    name: "Dimecoin",
  },
  {
    id: "diminutive-coin",
    symbol: "dimi",
    name: "Diminutive Coin",
  },
  {
    id: "dimitra",
    symbol: "dmtr",
    name: "Dimitra",
  },
  {
    id: "dimo",
    symbol: "dimo",
    name: "DIMO",
  },
  {
    id: "dina",
    symbol: "dina",
    name: "Dina",
  },
  {
    id: "dinamo-zagreb-fan-token",
    symbol: "dzg",
    name: "Dinamo Zagreb Fan Token",
  },
  {
    id: "dinastycoin",
    symbol: "dcy",
    name: "Dinastycoin",
  },
  {
    id: "dinero",
    symbol: "din",
    name: "Dinero",
  },
  {
    id: "dinerobet",
    symbol: "dinero",
    name: "Dinerobet",
  },
  {
    id: "dinger-token",
    symbol: "dinger",
    name: "Dinger",
  },
  {
    id: "dingocoin",
    symbol: "dingo",
    name: "Dingocoin",
  },
  {
    id: "dingo-token",
    symbol: "dingo",
    name: "Dingo",
  },
  {
    id: "dink-donk",
    symbol: "dink",
    name: "Dink Doink",
  },
  {
    id: "dino",
    symbol: "dino",
    name: "Dino",
  },
  {
    id: "dinoegg",
    symbol: "dinoegg",
    name: "DINOEGG",
  },
  {
    id: "dinoland",
    symbol: "dnl",
    name: "Dinoland",
  },
  {
    id: "dinolfg",
    symbol: "dino",
    name: "DinoLFG",
  },
  {
    id: "dinopark",
    symbol: "dinop",
    name: "DinoPark",
  },
  {
    id: "dinosaureggs",
    symbol: "dsg",
    name: "Dinosaur Eggs",
  },
  {
    id: "dinostep",
    symbol: "dns",
    name: "DinoStep",
  },
  {
    id: "dinoswap",
    symbol: "dino",
    name: "DinoSwap",
  },
  {
    id: "dinox",
    symbol: "dnxc",
    name: "DinoX",
  },
  {
    id: "diolaunch",
    symbol: "dla",
    name: "Diolaunch",
  },
  {
    id: "dione",
    symbol: "dione",
    name: "Dione",
  },
  {
    id: "dionpay",
    symbol: "dion",
    name: "Dionpay",
  },
  {
    id: "dipper-network",
    symbol: "dip",
    name: "Dipper Network",
  },
  {
    id: "disbalancer",
    symbol: "ddos",
    name: "disBalancer",
  },
  {
    id: "district0x",
    symbol: "dnt",
    name: "district0x",
  },
  {
    id: "distx",
    symbol: "distx",
    name: "DistX",
  },
  {
    id: "ditto-staked-aptos",
    symbol: "stapt",
    name: "Ditto Staked Aptos",
  },
  {
    id: "divergence-protocol",
    symbol: "diver",
    name: "Divergence Protocol",
  },
  {
    id: "divi",
    symbol: "divi",
    name: "Divi",
  },
  {
    id: "divi-land",
    symbol: "dvld",
    name: "DIVI LAND",
  },
  {
    id: "diviner-protocol",
    symbol: "dpt",
    name: "Diviner Protocol",
  },
  {
    id: "divs",
    symbol: "divs",
    name: "Divs",
  },
  {
    id: "diyarbekirspor",
    symbol: "diyar",
    name: "Diyarbekirspor",
  },
  {
    id: "dkargo",
    symbol: "dka",
    name: "dKargo",
  },
  {
    id: "dkey-bank",
    symbol: "dkey",
    name: "DKEY Bank",
  },
  {
    id: "dlp-duck-token",
    symbol: "duck",
    name: "DLP Duck",
  },
  {
    id: "dmarket",
    symbol: "dmt",
    name: "DMarket",
  },
  {
    id: "dmd",
    symbol: "dmd",
    name: "DMD",
  },
  {
    id: "dmm-governance",
    symbol: "dmg",
    name: "DMM: Governance",
  },
  {
    id: "dmt-token",
    symbol: "dmt",
    name: "DMT",
  },
  {
    id: "dmz-token",
    symbol: "dmz",
    name: "DMZ",
  },
  {
    id: "dna-dollar",
    symbol: "dna",
    name: "DNA Dollar",
  },
  {
    id: "dnaxcat",
    symbol: "dxct",
    name: "DNAxCAT",
  },
  {
    id: "dnd-metaverse",
    symbol: "dndb",
    name: "DnD Metaverse",
  },
  {
    id: "doaibu",
    symbol: "doa",
    name: "Doaibu",
  },
  {
    id: "dobermann",
    symbol: "dobe",
    name: "Dobermann",
  },
  {
    id: "dock",
    symbol: "dock",
    name: "Dock",
  },
  {
    id: "docuchain",
    symbol: "dcct",
    name: "DocuChain",
  },
  {
    id: "documentchain",
    symbol: "dms",
    name: "Documentchain",
  },
  {
    id: "dodo",
    symbol: "dodo",
    name: "DODO",
  },
  {
    id: "dodreamchain",
    symbol: "drm",
    name: "DoDreamChain",
  },
  {
    id: "doex",
    symbol: "doex",
    name: "DOEX",
  },
  {
    id: "dog",
    symbol: "dog",
    name: "Dog [OLD]",
  },
  {
    id: "dog-2",
    symbol: "dog",
    name: "Dog",
  },
  {
    id: "dogami",
    symbol: "doga",
    name: "Dogami",
  },
  {
    id: "dog-boss",
    symbol: "dogboss",
    name: "Dog Boss",
  },
  {
    id: "dog-collar",
    symbol: "collar",
    name: "Dog Collar",
  },
  {
    id: "dogdeficoin",
    symbol: "dogdefi",
    name: "DogDeFiCoin",
  },
  {
    id: "doge-1-mission-to-the-moon",
    symbol: "doge-1",
    name: "Doge-1 Mission to the moon",
  },
  {
    id: "doge-alliance",
    symbol: "dogeally",
    name: "Doge Alliance",
  },
  {
    id: "doge-ape",
    symbol: "dogeape",
    name: "Doge Ape",
  },
  {
    id: "doge-army-token",
    symbol: "dgat",
    name: "Doge Army",
  },
  {
    id: "dogebonk",
    symbol: "dobo",
    name: "DogeBonk",
  },
  {
    id: "dogecash",
    symbol: "dogec",
    name: "DogeCash",
  },
  {
    id: "dogechain",
    symbol: "dc",
    name: "Dogechain",
  },
  {
    id: "doge-cheems",
    symbol: "$dheems",
    name: "Doge Cheems",
  },
  {
    id: "dogeclaw",
    symbol: "claw",
    name: "Dogeclaw",
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
  },
  {
    id: "dogecoin-2",
    symbol: "doge2",
    name: "Dogecoin 2.0",
  },
  {
    id: "dogecola",
    symbol: "dogecola",
    name: "DOGECOLA",
  },
  {
    id: "dogecolony",
    symbol: "dogeco",
    name: "Dogecolony",
  },
  {
    id: "dogecube",
    symbol: "dogecube",
    name: "DogeCube",
  },
  {
    id: "dogedead",
    symbol: "dogedead",
    name: "DogeDead",
  },
  {
    id: "dogedi",
    symbol: "dogedi",
    name: "DOGEDI",
  },
  {
    id: "doge-digger",
    symbol: "dogedigger",
    name: "Doge Digger",
  },
  {
    id: "dogedragon",
    symbol: "dd",
    name: "DogeDragon",
  },
  {
    id: "doge-eat-doge",
    symbol: "omnom",
    name: "Doge Eat Doge",
  },
  {
    id: "dogefather-token",
    symbol: "father",
    name: "DogeFather Token",
  },
  {
    id: "dogefi",
    symbol: "dogefi",
    name: "DogeFi",
  },
  {
    id: "doge-floki-coin",
    symbol: "dofi",
    name: "Doge Floki Coin",
  },
  {
    id: "dogefood",
    symbol: "dogefood",
    name: "DogeFood",
  },
  {
    id: "dogegamer",
    symbol: "dga",
    name: "Doge Gamer",
  },
  {
    id: "dogegayson",
    symbol: "goge",
    name: "DogeGaySon",
  },
  {
    id: "dogegf",
    symbol: "dogegf",
    name: "DogeGF",
  },
  {
    id: "doge-gold-floki",
    symbol: "$dgf",
    name: "Doge Gold Floki",
  },
  {
    id: "doge-inu",
    symbol: "dinu",
    name: "Doge Inu",
  },
  {
    id: "dogeking",
    symbol: "dogeking",
    name: "DogeKing",
  },
  {
    id: "dogekongzilla",
    symbol: "dogekongzilla",
    name: "DogeKongZilla",
  },
  {
    id: "dogelana",
    symbol: "dgln",
    name: "Dogelana",
  },
  {
    id: "dogelon-classic",
    symbol: "elonc",
    name: "Dogelon Classic",
  },
  {
    id: "dogelon-mars",
    symbol: "elon",
    name: "Dogelon Mars",
  },
  {
    id: "dogelon-mars-wormhole",
    symbol: "elon",
    name: "Dogelon Mars (Wormhole)",
  },
  {
    id: "doge-lumens",
    symbol: "dxlm",
    name: "DogeLumens",
  },
  {
    id: "dogematic",
    symbol: "dm",
    name: "Dogematic",
  },
  {
    id: "dogemetaverse",
    symbol: "dogemeta",
    name: "Dogemetaverse",
  },
  {
    id: "dogemon-go",
    symbol: "dogo",
    name: "DogemonGo",
  },
  {
    id: "dogemoon",
    symbol: "dogemoon",
    name: "Dogemoon",
  },
  {
    id: "dogens",
    symbol: "dogens",
    name: "Dogens",
  },
  {
    id: "dogeon",
    symbol: "don",
    name: "Dogeon",
  },
  {
    id: "dogepad-finance",
    symbol: "dpf",
    name: "Dogepad Finance",
  },
  {
    id: "dogepepsi",
    symbol: "dogepepsi",
    name: "DogePepsi",
  },
  {
    id: "dogepow",
    symbol: "dogew",
    name: "DogePow",
  },
  {
    id: "doge-protocol",
    symbol: "dogep",
    name: "Doge Protocol",
  },
  {
    id: "doge-pup-token",
    symbol: "dogepup",
    name: "Doge Pup",
  },
  {
    id: "doge-rise-up",
    symbol: "dogeriseup",
    name: "Doge Rise Up",
  },
  {
    id: "doge-run",
    symbol: "drun",
    name: "Doge Run",
  },
  {
    id: "dogeshiba",
    symbol: "doshib",
    name: "DogeShiba",
  },
  {
    id: "dogeshrek",
    symbol: "dogeshrek",
    name: "DogeShrek",
  },
  {
    id: "doge-solar",
    symbol: "dsolar",
    name: "Doge Solar",
  },
  {
    id: "dogestribute",
    symbol: "dgstb",
    name: "Dogestribute",
  },
  {
    id: "dogeswap",
    symbol: "doges",
    name: "Dogeswap",
  },
  {
    id: "doge-token",
    symbol: "doget",
    name: "Doge Token",
  },
  {
    id: "dogetools",
    symbol: "dtools",
    name: "DogeTools",
  },
  {
    id: "dogetrend",
    symbol: "dogetrend",
    name: "DogeTrend",
  },
  {
    id: "doge-tv",
    symbol: "$dgtv",
    name: "Doge-TV",
  },
  {
    id: "doge-universe",
    symbol: "spacexdoge",
    name: "Doge Universe",
  },
  {
    id: "dogeville",
    symbol: "dville",
    name: "DogeVille",
  },
  {
    id: "dogewhale",
    symbol: "dogewhale",
    name: "Dogewhale",
  },
  {
    id: "doge-yellow-coin",
    symbol: "dogey",
    name: "Doge Yellow Coin",
  },
  {
    id: "dogeyield",
    symbol: "dogy",
    name: "DogeYield",
  },
  {
    id: "dogey-inu",
    symbol: "dinu",
    name: "Dogey-Inu",
  },
  {
    id: "dogezilla",
    symbol: "dogezilla",
    name: "DogeZilla",
  },
  {
    id: "doge-zilla",
    symbol: "dogez",
    name: "DogeZilla Token",
  },
  {
    id: "dogezone",
    symbol: "dgz",
    name: "Dogezone",
  },
  {
    id: "dogger",
    symbol: "dogger",
    name: "Dogger",
  },
  {
    id: "doggod",
    symbol: "god",
    name: "DOGGOD",
  },
  {
    id: "doggy",
    symbol: "doggy",
    name: "Doggy",
  },
  {
    id: "doggystyle-coin",
    symbol: "dsc",
    name: "DoggyStyle Coin",
  },
  {
    id: "dogira",
    symbol: "dogira",
    name: "Dogira",
  },
  {
    id: "doglaikacoin",
    symbol: "dlc",
    name: "Doglaikacoin",
  },
  {
    id: "dog-landing-on-the-moon",
    symbol: "dogmoon",
    name: "Dog Landing On The Moon",
  },
  {
    id: "dog-masked",
    symbol: "dogmsk",
    name: "Dog Masked",
  },
  {
    id: "dogmi-coin",
    symbol: "dogmi",
    name: "DOGMI Coin",
  },
  {
    id: "dogs-kombat",
    symbol: "dk",
    name: "Dogs Kombat",
  },
  {
    id: "dogsofelon",
    symbol: "doe",
    name: "Dogs Of Elon",
  },
  {
    id: "dogswap-token",
    symbol: "dog",
    name: "Dogeswap (HECO)",
  },
  {
    id: "dog-tag",
    symbol: "tag",
    name: "Dog Tag",
  },
  {
    id: "dogu-inu",
    symbol: "dogu",
    name: "Dogu Inu",
  },
  {
    id: "dogyrace",
    symbol: "dor",
    name: "DogyRace",
  },
  {
    id: "dogz",
    symbol: "dogz",
    name: "Dogz",
  },
  {
    id: "dohrnii",
    symbol: "dhn",
    name: "Dohrnii",
  },
  {
    id: "doichain",
    symbol: "doi",
    name: "Doichain",
  },
  {
    id: "dojo",
    symbol: "dojo",
    name: "DOJO",
  },
  {
    id: "dojocoin",
    symbol: "dojo",
    name: "Dojocoin",
  },
  {
    id: "dokdo",
    symbol: "dkd",
    name: "Dokdo",
  },
  {
    id: "doken",
    symbol: "dkn",
    name: "DoKEN V2",
  },
  {
    id: "doki-doki-finance",
    symbol: "doki",
    name: "Doki Doki",
  },
  {
    id: "dola-borrowing-right",
    symbol: "dbr",
    name: "DOLA Borrowing Right",
  },
  {
    id: "dola-usd",
    symbol: "dola",
    name: "Dola",
  },
  {
    id: "dollarback",
    symbol: "back",
    name: "DollarBack",
  },
  {
    id: "dollarmoon",
    symbol: "dmoon",
    name: "DollarMoon",
  },
  {
    id: "dollars",
    symbol: "usdx",
    name: "Dollars",
  },
  {
    id: "domain-coin",
    symbol: "dmn",
    name: "Domain Coin",
  },
  {
    id: "domestic-collectors",
    symbol: "dmc",
    name: "Domestic Collectors",
  },
  {
    id: "domi",
    symbol: "domi",
    name: "Domi",
  },
  {
    id: "dominica-coin",
    symbol: "dmc",
    name: "Dominica Coin",
  },
  {
    id: "dominium-2",
    symbol: "dom",
    name: "Dominium",
  },
  {
    id: "domraider",
    symbol: "drt",
    name: "DomRaider",
  },
  {
    id: "dona",
    symbol: "dona",
    name: "DONA",
  },
  {
    id: "donkey",
    symbol: "donk",
    name: "Donkey",
  },
  {
    id: "don-key",
    symbol: "don",
    name: "Don-key",
  },
  {
    id: "donkey-token",
    symbol: "don",
    name: "Donkey DON",
  },
  {
    id: "donnie-finance",
    symbol: "don",
    name: "Donnie Finance",
  },
  {
    id: "don-t-buy-inu",
    symbol: "dbi",
    name: "Don't Buy Inu",
  },
  {
    id: "dont-play-with-kitty",
    symbol: "dpwk",
    name: "Dont Play With Kitty",
  },
  {
    id: "donut",
    symbol: "donut",
    name: "Donut",
  },
  {
    id: "doogee",
    symbol: "doogee",
    name: "Doogee",
  },
  {
    id: "doom-hero-dao",
    symbol: "dhd",
    name: "Doom Hero Dao",
  },
  {
    id: "doom-hero-game",
    symbol: "dhg",
    name: "Doom Hero Game",
  },
  {
    id: "doont-buy",
    symbol: "dbuy",
    name: "Doont Buy",
  },
  {
    id: "door",
    symbol: "door",
    name: "DOOR",
  },
  {
    id: "dope",
    symbol: "dope",
    name: "DOPE",
  },
  {
    id: "dope-wars-paper",
    symbol: "paper",
    name: "Dope Wars Paper",
  },
  {
    id: "dopewarz",
    symbol: "dwz",
    name: "DopeWarz",
  },
  {
    id: "dopex",
    symbol: "dpx",
    name: "Dopex",
  },
  {
    id: "dopex-rebate-token",
    symbol: "rdpx",
    name: "Dopex Rebate",
  },
  {
    id: "dopple-finance",
    symbol: "dop",
    name: "Dopple Finance",
  },
  {
    id: "doraemoninu",
    symbol: "doraemoninu",
    name: "DoraemonInu",
  },
  {
    id: "dora-factory",
    symbol: "dora",
    name: "Dora Factory",
  },
  {
    id: "doragonland",
    symbol: "dor",
    name: "DoragonLand",
  },
  {
    id: "doren",
    symbol: "dre",
    name: "DoRen",
  },
  {
    id: "dosa",
    symbol: "$dosa",
    name: "Dosa",
  },
  {
    id: "dose-token",
    symbol: "dose",
    name: "DOSE",
  },
  {
    id: "dos-network",
    symbol: "dos",
    name: "DOS Network",
  },
  {
    id: "dotarcade",
    symbol: "adt",
    name: "DotArcade",
  },
  {
    id: "dot-dot-finance",
    symbol: "ddd",
    name: "Dot Dot Finance",
  },
  {
    id: "dot-finance",
    symbol: "pink",
    name: "Dot Finance",
  },
  {
    id: "dotmoovs",
    symbol: "moov",
    name: "dotmoovs",
  },
  {
    id: "do-token",
    symbol: "do",
    name: "Do",
  },
  {
    id: "dotoracle",
    symbol: "dto",
    name: "DotOracle",
  },
  {
    id: "dotori",
    symbol: "dtr",
    name: "Dotori",
  },
  {
    id: "doubledice-token",
    symbol: "dodi",
    name: "DoubleDice",
  },
  {
    id: "double-swap-token",
    symbol: "dst",
    name: "Double Swap Token",
  },
  {
    id: "doubloon",
    symbol: "dbl",
    name: "Doubloon",
  },
  {
    id: "douge",
    symbol: "douge",
    name: "Douge",
  },
  {
    id: "dough",
    symbol: "dough",
    name: "Dough",
  },
  {
    id: "dovu",
    symbol: "dov",
    name: "Dovu",
  },
  {
    id: "doxed",
    symbol: "dox",
    name: "Doxed",
  },
  {
    id: "doxxed-santa",
    symbol: "dxsanta",
    name: "Doxxed Santa",
  },
  {
    id: "dpad-finance",
    symbol: "dpad",
    name: "Dpad Finance",
  },
  {
    id: "dpk",
    symbol: "dpk token",
    name: "DPK",
  },
  {
    id: "dprating",
    symbol: "rating",
    name: "DPRating",
  },
  {
    id: "dps-doubloon",
    symbol: "dbl",
    name: "DPS Doubloon",
  },
  {
    id: "dps-rum",
    symbol: "rum",
    name: "DPS Rum",
  },
  {
    id: "dps-treasuremaps",
    symbol: "tmap",
    name: "DPS TreasureMaps",
  },
  {
    id: "dr1ver",
    symbol: "dr1$",
    name: "Dr1ver",
  },
  {
    id: "drachma-exchange",
    symbol: "dra",
    name: "Drachma Exchange",
  },
  {
    id: "drac-network",
    symbol: "drac",
    name: "DRAC Network",
  },
  {
    id: "dracoomaster",
    symbol: "bas",
    name: "DracooMaster",
  },
  {
    id: "dracula",
    symbol: "drc",
    name: "Dracula",
  },
  {
    id: "dragoma",
    symbol: "dma",
    name: "Dragoma",
  },
  {
    id: "dragon",
    symbol: "dragon",
    name: "Dragon",
  },
  {
    id: "dragonbit",
    symbol: "drgb",
    name: "Dragonbit",
  },
  {
    id: "dragonbite",
    symbol: "bite",
    name: "DragonBite",
  },
  {
    id: "dragonchain",
    symbol: "drgn",
    name: "Dragonchain",
  },
  {
    id: "dragon-crypto-argenti",
    symbol: "dcar",
    name: "Dragon Crypto Argenti",
  },
  {
    id: "dragon-crypto-aurum",
    symbol: "dcau",
    name: "Dragon Crypto Aurum",
  },
  {
    id: "dragon-evolution-augmente",
    symbol: "dear",
    name: "Dragon Evolution Augmente",
  },
  {
    id: "dragon-kart-token",
    symbol: "kart",
    name: "Dragon Kart",
  },
  {
    id: "dragonknight",
    symbol: "dk",
    name: "Dragon Knight",
  },
  {
    id: "dragon-mainland-shards",
    symbol: "dms",
    name: "Dragon Mainland Shards",
  },
  {
    id: "dragonmaster-token",
    symbol: "dmt",
    name: "DragonMaster",
  },
  {
    id: "dragonmaster-totem",
    symbol: "totem",
    name: "DragonMaster Totem",
  },
  {
    id: "dragonmoon",
    symbol: "dmoon",
    name: "DragonMoon",
  },
  {
    id: "dragon-pool",
    symbol: "dp",
    name: "Dragon Pool",
  },
  {
    id: "dragonrace",
    symbol: "dragace",
    name: "Dragonrace",
  },
  {
    id: "dragonsb",
    symbol: "sb",
    name: "DragonSB",
  },
  {
    id: "dragonsea",
    symbol: "dge",
    name: "DragonSea",
  },
  {
    id: "dragons-quick",
    symbol: "dquick",
    name: "Dragon's Quick",
  },
  {
    id: "dragonvein",
    symbol: "dvc",
    name: "DragonVein",
  },
  {
    id: "dragon-verse",
    symbol: "drv",
    name: "Dragon Verse",
  },
  {
    id: "dragon-war",
    symbol: "draw",
    name: "Dragon War",
  },
  {
    id: "draken",
    symbol: "drk",
    name: "Draken",
  },
  {
    id: "drawshop-kingdom-reverse-joystick",
    symbol: "joy",
    name: "Drawshop Kingdom Reverse Joystick",
  },
  {
    id: "drc-mobility",
    symbol: "drc",
    name: "DRC Mobility",
  },
  {
    id: "dreamdao",
    symbol: "dream",
    name: "DreamDAO",
  },
  {
    id: "dreamn",
    symbol: "$dreamn",
    name: "DreamN",
  },
  {
    id: "dreamr-platform-token",
    symbol: "dmr",
    name: "Dreamr Platform",
  },
  {
    id: "dreamscoin",
    symbol: "dream",
    name: "DreamsCoin",
  },
  {
    id: "dream-soccer",
    symbol: "dsoccer",
    name: "Dream Soccer",
  },
  {
    id: "dreams-quest",
    symbol: "dreams",
    name: "Dreams Quest",
  },
  {
    id: "dream-swap",
    symbol: "dream",
    name: "Dream Swap",
  },
  {
    id: "dream-token",
    symbol: "dream",
    name: "Dream",
  },
  {
    id: "dreamverse",
    symbol: "dv",
    name: "Dreamverse",
  },
  {
    id: "dreamy-undersea-world",
    symbol: "duw",
    name: "Dreamy Undersea World",
  },
  {
    id: "drep-new",
    symbol: "drep",
    name: "Drep",
  },
  {
    id: "drife",
    symbol: "drf",
    name: "Drife",
  },
  {
    id: "driftdelivery-cc",
    symbol: "drift",
    name: "DriftDelivery.CC",
  },
  {
    id: "drip-network",
    symbol: "drip",
    name: "Drip Network",
  },
  {
    id: "dripto",
    symbol: "dryp",
    name: "Dripto",
  },
  {
    id: "drive-crypto",
    symbol: "drivecrypto",
    name: "Drive Crypto",
  },
  {
    id: "drivenx",
    symbol: "dvx",
    name: "DRIVENx",
  },
  {
    id: "drivez",
    symbol: "driv",
    name: "Drivez",
  },
  {
    id: "drivez-earn",
    symbol: "inco",
    name: "DRIVEZ Earn",
  },
  {
    id: "dronefly",
    symbol: "kdc",
    name: "DroneFly",
  },
  {
    id: "drops-ownership-power",
    symbol: "dop",
    name: "Drops Ownership Power",
  },
  {
    id: "drunk-robots",
    symbol: "metal",
    name: "Drunk Robots",
  },
  {
    id: "drunk-skunks-drinking-club",
    symbol: "stink",
    name: "Drunk Skunks Drinking Club",
  },
  {
    id: "d-runt",
    symbol: "drnt",
    name: "D-RUNT",
  },
  {
    id: "dsc-mix",
    symbol: "mix",
    name: "DSC Mix",
  },
  {
    id: "dshares",
    symbol: "dshare",
    name: "DShares",
  },
  {
    id: "dt-dragon-coin",
    symbol: "dt",
    name: "DT Dragon Coin",
  },
  {
    id: "dtng",
    symbol: "dtng",
    name: "DTNG",
  },
  {
    id: "dtravel",
    symbol: "trvl",
    name: "TRVL",
  },
  {
    id: "dtsla",
    symbol: "dtsla",
    name: "Tesla Tokenized Stock Defichain",
  },
  {
    id: "dtube-coin",
    symbol: "dtube",
    name: "Dtube Coin",
  },
  {
    id: "dua-token",
    symbol: "dua",
    name: "DUA Token",
  },
  {
    id: "ducato-finance",
    symbol: "ducato",
    name: "Ducato Finance",
  },
  {
    id: "duckdaodime",
    symbol: "ddim",
    name: "DuckDaoDime",
  },
  {
    id: "duckduck-token",
    symbol: "duck",
    name: "DuckDuck",
  },
  {
    id: "duckereum",
    symbol: "ducker",
    name: "Duckereum",
  },
  {
    id: "duckie-land-multi-metaverse",
    symbol: "mmeta",
    name: "Duckie Land Multi Metaverse",
  },
  {
    id: "duckies",
    symbol: "duckies",
    name: "Yellow Duckies",
  },
  {
    id: "duck-punkz-universe-floor-index",
    symbol: "dpunkz",
    name: "Duck Punkz Universe Floor Index",
  },
  {
    id: "duckrocket",
    symbol: "duck",
    name: "DuckRocket",
  },
  {
    id: "duck-vault-nftx",
    symbol: "duck",
    name: "DUCK Vault (NFTX)",
  },
  {
    id: "duckydefi",
    symbol: "degg",
    name: "DuckyDefi",
  },
  {
    id: "dude",
    symbol: "dude",
    name: "DuDe",
  },
  {
    id: "duelist-king",
    symbol: "dkt",
    name: "Duelist King",
  },
  {
    id: "duel-network",
    symbol: "duel",
    name: "Duel Network",
  },
  {
    id: "duet-protocol",
    symbol: "duet",
    name: "Duet Protocol",
  },
  {
    id: "dukascoin",
    symbol: "duk+",
    name: "Dukascoin",
  },
  {
    id: "dukecoin",
    symbol: "dkc",
    name: "Dukecoin",
  },
  {
    id: "duke-inu-token",
    symbol: "duke",
    name: "Duke Inu",
  },
  {
    id: "dumpbuster",
    symbol: "gtfo",
    name: "DumpBuster",
  },
  {
    id: "dungeon",
    symbol: "dgn",
    name: "Dungeon",
  },
  {
    id: "dungeonswap",
    symbol: "dnd",
    name: "DungeonSwap",
  },
  {
    id: "duo",
    symbol: "duo",
    name: "DUO Network",
  },
  {
    id: "durham-inu",
    symbol: "rbi",
    name: "Durham Inu",
  },
  {
    id: "dusk-network",
    symbol: "dusk",
    name: "DUSK Network",
  },
  {
    id: "dust",
    symbol: "dust",
    name: "Dust",
  },
  {
    id: "dust-protocol",
    symbol: "dust",
    name: "DUST Protocol",
  },
  {
    id: "duzce",
    symbol: "duzce",
    name: "Duzce",
  },
  {
    id: "dvision-network",
    symbol: "dvi",
    name: "Dvision Network",
  },
  {
    id: "dwagon",
    symbol: "$dwagon",
    name: "Dwagon",
  },
  {
    id: "dxbpay",
    symbol: "dxb",
    name: "DXBPay",
  },
  {
    id: "dxcad",
    symbol: "dxcad",
    name: "dXCAD",
  },
  {
    id: "dxchain",
    symbol: "dx",
    name: "DxChain",
  },
  {
    id: "dxdao",
    symbol: "dxd",
    name: "DXdao",
  },
  {
    id: "dxsale-network",
    symbol: "sale",
    name: "DxSale Network",
  },
  {
    id: "dx-spot",
    symbol: "dxs",
    name: "Dx Spot",
  },
  {
    id: "dxy-finance",
    symbol: "dxy",
    name: "DXY Finance",
  },
  {
    id: "dyakon",
    symbol: "dyn",
    name: "DYAKON",
  },
  {
    id: "dydx",
    symbol: "dydx",
    name: "dYdX",
  },
  {
    id: "dydx-wormhole",
    symbol: "dydx",
    name: "dYdX (Wormhole)",
  },
  {
    id: "dymmax",
    symbol: "dmx",
    name: "Dymmax",
  },
  {
    id: "dynamic",
    symbol: "dyn",
    name: "Dynamic",
  },
  {
    id: "dynamic-set-dollar",
    symbol: "dsd",
    name: "Dynamic Set Dollar",
  },
  {
    id: "dynamite",
    symbol: "dyt",
    name: "DoYourTip",
  },
  {
    id: "dynamite-token",
    symbol: "dynmt",
    name: "Dynamite",
  },
  {
    id: "dynamix",
    symbol: "dyna",
    name: "Dynamix",
  },
  {
    id: "dynamo-coin",
    symbol: "dynamo",
    name: "Dynamo Coin",
  },
  {
    id: "dynex",
    symbol: "dnx",
    name: "Dynex",
  },
  {
    id: "dynochain",
    symbol: "dnd",
    name: "DynoChain",
  },
  {
    id: "dyor",
    symbol: "dyor",
    name: "DYOR",
  },
  {
    id: "dystopia",
    symbol: "dyst",
    name: "Dystopia",
  },
  {
    id: "dyzilla",
    symbol: "dyzilla",
    name: "DYZilla",
  },
  {
    id: "e1337",
    symbol: "1337",
    name: "1337",
  },
  {
    id: "eaglecoin-2",
    symbol: "elc",
    name: "EagleCoin",
  },
  {
    id: "eagle-mining-network",
    symbol: "egon",
    name: "EAGLE MINING NETWORK",
  },
  {
    id: "eagonswap-token",
    symbol: "eagon",
    name: "EagonSwap",
  },
  {
    id: "early-bird",
    symbol: "ebird",
    name: "Early Bird",
  },
  {
    id: "earnbusd",
    symbol: "ebusd",
    name: "EarnBUSD",
  },
  {
    id: "earncraft",
    symbol: "plot",
    name: "Earncraft",
  },
  {
    id: "earndefi",
    symbol: "edc",
    name: "EarnDeFi",
  },
  {
    id: "earnguild",
    symbol: "earn",
    name: "EarnGuild",
  },
  {
    id: "earnx-v2",
    symbol: "earnx",
    name: "EarnX V2",
  },
  {
    id: "earnytv",
    symbol: "$earny",
    name: "EarnyTV",
  },
  {
    id: "earnzcoin",
    symbol: "erz",
    name: "EarnzCoin",
  },
  {
    id: "earthbyt",
    symbol: "ebyt",
    name: "EarthByt",
  },
  {
    id: "earthcoin",
    symbol: "eac",
    name: "Earthcoin",
  },
  {
    id: "earthfund",
    symbol: "1earth",
    name: "EarthFund",
  },
  {
    id: "ease",
    symbol: "ease",
    name: "EASE",
  },
  {
    id: "easter-floki",
    symbol: "efloki",
    name: "Easter Floki",
  },
  {
    id: "easticoin",
    symbol: "esti",
    name: "Easticoin",
  },
  {
    id: "easyfi",
    symbol: "ez",
    name: "EasyFi V2",
  },
  {
    id: "easymine",
    symbol: "emt",
    name: "easyMine",
  },
  {
    id: "eat-to-earn",
    symbol: "eater",
    name: "Eat to Earn",
  },
  {
    id: "eautocoin",
    symbol: "ato",
    name: "EAutocoin",
  },
  {
    id: "eblockstock",
    symbol: "ebso",
    name: "eBlockStock",
  },
  {
    id: "ebox",
    symbol: "ebox",
    name: "Ebox",
  },
  {
    id: "ebsp-token",
    symbol: "ebsp",
    name: "EBSP",
  },
  {
    id: "ecash",
    symbol: "xec",
    name: "eCash",
  },
  {
    id: "eceltron",
    symbol: "ectr",
    name: "eCeltron",
  },
  {
    id: "echain-network",
    symbol: "ect",
    name: "Echain Network",
  },
  {
    id: "e-chat",
    symbol: "echt",
    name: "e-Chat",
  },
  {
    id: "echidna",
    symbol: "ecd",
    name: "Echidna",
  },
  {
    id: "echoin",
    symbol: "ec",
    name: "Echoin",
  },
  {
    id: "echolink",
    symbol: "eko",
    name: "EchoLink",
  },
  {
    id: "echosoracoin",
    symbol: "esrc",
    name: "EchoSoraCoin",
  },
  {
    id: "ecio-space",
    symbol: "ecio",
    name: "ECIO Space",
  },
  {
    id: "eclat",
    symbol: "elt",
    name: "ECLAT",
  },
  {
    id: "eclipse-2",
    symbol: "ecp",
    name: "Eclipse",
  },
  {
    id: "eco",
    symbol: "eco",
    name: "ECO",
  },
  {
    id: "ecobit",
    symbol: "ecob",
    name: "Ecobit",
  },
  {
    id: "ecochain",
    symbol: "ecoc",
    name: "Ecochain",
  },
  {
    id: "ecochain-token",
    symbol: "ect",
    name: "Ecochain Finance",
  },
  {
    id: "ecocredit",
    symbol: "eco",
    name: "EcoCREDIT",
  },
  {
    id: "eco-defi",
    symbol: "ecop",
    name: "Eco DeFi",
  },
  {
    id: "ecofi",
    symbol: "eco",
    name: "EcoFi",
  },
  {
    id: "ecog9coin",
    symbol: "egc",
    name: "EcoG9coin",
  },
  {
    id: "ecoin-2",
    symbol: "ecoin",
    name: "Ecoin",
  },
  {
    id: "ecoin-finance",
    symbol: "ecoin",
    name: "Ecoin Finance",
  },
  {
    id: "ecomi",
    symbol: "omi",
    name: "ECOMI",
  },
  {
    id: "ecoreal-estate",
    symbol: "ecoreal",
    name: "Ecoreal Estate",
  },
  {
    id: "ecoscu",
    symbol: "ecu",
    name: "ECOSC",
  },
  {
    id: "ecosystem-coin-network",
    symbol: "ecn",
    name: "Ecosystem Coin Network",
  },
  {
    id: "eco-value-coin",
    symbol: "evc",
    name: "Eco Value Coin",
  },
  {
    id: "ecowatt",
    symbol: "ewt",
    name: "Ecowatt",
  },
  {
    id: "ecoway",
    symbol: "ecy",
    name: "Ecoway",
  },
  {
    id: "ecox",
    symbol: "ecox",
    name: "ECOx",
  },
  {
    id: "ecredits",
    symbol: "ecs",
    name: "eCredits",
  },
  {
    id: "ecs-gold",
    symbol: "ecg",
    name: "ECS Gold",
  },
  {
    id: "e-c-vitoria-fan-token",
    symbol: "vtra",
    name: "E.C. Vitoria Fan Token",
  },
  {
    id: "edac",
    symbol: "edac",
    name: "EDAC",
  },
  {
    id: "edain",
    symbol: "eai",
    name: "Edain",
  },
  {
    id: "eddaswap",
    symbol: "edda",
    name: "EDDASwap",
  },
  {
    id: "eden",
    symbol: "eden",
    name: "EDEN",
  },
  {
    id: "edenchain",
    symbol: "edn",
    name: "Edenchain",
  },
  {
    id: "edenloop",
    symbol: "elt",
    name: "EdenLoop",
  },
  {
    id: "edge",
    symbol: "edge",
    name: "Edge",
  },
  {
    id: "edge-activity",
    symbol: "eat",
    name: "EDGE Activity",
  },
  {
    id: "edgecoin-2",
    symbol: "edgt",
    name: "Edgecoin",
  },
  {
    id: "edgeless",
    symbol: "edg",
    name: "Edgeless",
  },
  {
    id: "edgeswap",
    symbol: "egs",
    name: "EdgeSwap",
  },
  {
    id: "edgeware",
    symbol: "edg",
    name: "Edgeware",
  },
  {
    id: "education-assessment-cult",
    symbol: "eac",
    name: "Education Assessment Cult",
  },
  {
    id: "education-ecosystem",
    symbol: "ledu",
    name: "Education Ecosystem",
  },
  {
    id: "edufex",
    symbol: "edux",
    name: "Edufex",
  },
  {
    id: "effect-network",
    symbol: "efx",
    name: "Effect Network",
  },
  {
    id: "efficiency-dao",
    symbol: "eff",
    name: "Efficiency DAO",
  },
  {
    id: "efin-decentralized",
    symbol: "wefin",
    name: "eFin Decentralized",
  },
  {
    id: "efinity",
    symbol: "efi",
    name: "Efinity",
  },
  {
    id: "efk-token",
    symbol: "efk",
    name: "EFK Token",
  },
  {
    id: "eft",
    symbol: "eft",
    name: "EFT",
  },
  {
    id: "efun",
    symbol: "efun",
    name: "EFUN",
  },
  {
    id: "egg-n-partners",
    symbol: "eggt",
    name: "Egg N Partners",
  },
  {
    id: "eggplant",
    symbol: "eggplant",
    name: "Eggplant",
  },
  {
    id: "eggplant-finance",
    symbol: "eggp",
    name: "Eggplant Finance",
  },
  {
    id: "eggplus",
    symbol: "eggplus",
    name: "EggPlus",
  },
  {
    id: "egg-protocol",
    symbol: "egg",
    name: "EGG Protocol",
  },
  {
    id: "egod",
    symbol: "egod",
    name: "egoD",
  },
  {
    id: "egod-the-savior",
    symbol: "$savior",
    name: "Egod The Savior",
  },
  {
    id: "egold",
    symbol: "egold",
    name: "eGold",
  },
  {
    id: "egoplatform",
    symbol: "ego",
    name: "EGO",
  },
  {
    id: "egoras-credit",
    symbol: "egc",
    name: "Egoras Credit",
  },
  {
    id: "egretia",
    symbol: "egt",
    name: "Egretia",
  },
  {
    id: "ehash",
    symbol: "ehash",
    name: "EHash",
  },
  {
    id: "ehive",
    symbol: "ehive",
    name: "eHive",
  },
  {
    id: "eidos",
    symbol: "eidos",
    name: "EIDOS",
  },
  {
    id: "eifi-finance",
    symbol: "eifi",
    name: "EIFI Finance",
  },
  {
    id: "eight-hours",
    symbol: "ehrt",
    name: "Eight Hours",
  },
  {
    id: "eiichiro-oda-inu",
    symbol: "oda",
    name: "Eiichiro Oda Inu",
  },
  {
    id: "einsteinium",
    symbol: "emc2",
    name: "Einsteinium",
  },
  {
    id: "ekta-2",
    symbol: "ekta",
    name: "Ekta",
  },
  {
    id: "elamachain",
    symbol: "elama",
    name: "Elamachain",
  },
  {
    id: "elan",
    symbol: "elan",
    name: "Elan",
  },
  {
    id: "elasticswap",
    symbol: "tic",
    name: "ElasticSwap",
  },
  {
    id: "elastos",
    symbol: "ela",
    name: "Elastos",
  },
  {
    id: "elden-knights",
    symbol: "knights",
    name: "Elden Knights",
  },
  {
    id: "el-dorado-exchange",
    symbol: "ede",
    name: "El Dorado Exchange",
  },
  {
    id: "electra",
    symbol: "eca",
    name: "Electra",
  },
  {
    id: "electra-protocol",
    symbol: "xep",
    name: "Electra Protocol",
  },
  {
    id: "electric-cash",
    symbol: "elcash",
    name: "Electric Cash",
  },
  {
    id: "electric-vehicle-direct-currency",
    symbol: "evdc",
    name: "Electric Vehicle Direct Currency",
  },
  {
    id: "electric-vehicle-zone",
    symbol: "evz",
    name: "Electric Vehicle Zone",
  },
  {
    id: "electrify-asia",
    symbol: "elec",
    name: "Electrify.Asia",
  },
  {
    id: "electronero",
    symbol: "etnx",
    name: "Electronero",
  },
  {
    id: "electronero-pulse",
    symbol: "etnxp",
    name: "Electronero Pulse",
  },
  {
    id: "electroneum",
    symbol: "etn",
    name: "Electroneum",
  },
  {
    id: "electronicgulden",
    symbol: "efl",
    name: "Electronic Gulden",
  },
  {
    id: "electronic-usd",
    symbol: "eusd",
    name: "Electronic USD",
  },
  {
    id: "electrum-dark",
    symbol: "eld",
    name: "Electrum Dark",
  },
  {
    id: "element-black",
    symbol: "elt",
    name: "Element Black",
  },
  {
    id: "elementrem",
    symbol: "ele",
    name: "Elementrem",
  },
  {
    id: "elements-2",
    symbol: "elm",
    name: "Elements",
  },
  {
    id: "elemon",
    symbol: "elmon",
    name: "Elemon",
  },
  {
    id: "elena-protocol",
    symbol: "elena",
    name: "Elena Protocol",
  },
  {
    id: "elephant-money",
    symbol: "elephant",
    name: "Elephant Money",
  },
  {
    id: "elevate",
    symbol: "ele",
    name: "Elevate",
  },
  {
    id: "eleventoken",
    symbol: "elvn",
    name: "11Minutes",
  },
  {
    id: "elf-wallet",
    symbol: "elf",
    name: "ELF Wallet",
  },
  {
    id: "elfworld",
    symbol: "elft",
    name: "Elfworld",
  },
  {
    id: "eligma",
    symbol: "goc",
    name: "GoCrypto",
  },
  {
    id: "elis",
    symbol: "xls",
    name: "ELIS",
  },
  {
    id: "elite-swap",
    symbol: "elt",
    name: "Elite Swap",
  },
  {
    id: "elitium",
    symbol: "eum",
    name: "Elitium",
  },
  {
    id: "elk-finance",
    symbol: "elk",
    name: "Elk Finance",
  },
  {
    id: "ellerium",
    symbol: "elm",
    name: "ELLERIUM",
  },
  {
    id: "ellipsis",
    symbol: "eps",
    name: "Ellipsis [OLD]",
  },
  {
    id: "ellipsis-x",
    symbol: "epx",
    name: "Ellipsis X",
  },
  {
    id: "eloin",
    symbol: "eloin",
    name: "Eloin",
  },
  {
    id: "elo-inu",
    symbol: "elo inu",
    name: "Elo Inu",
  },
  {
    id: "elonbank",
    symbol: "elonbank",
    name: "ElonBank",
  },
  {
    id: "elondoge-dao",
    symbol: "edao",
    name: "ElonDoge DAO",
  },
  {
    id: "elon-doge-token",
    symbol: "edoge",
    name: "ElonDoge.io",
  },
  {
    id: "elongate",
    symbol: "elongate",
    name: "ElonGate",
  },
  {
    id: "elongate-duluxe",
    symbol: "elongd",
    name: "Elongate Deluxe",
  },
  {
    id: "elon-goat",
    symbol: "egt",
    name: "Elon GOAT",
  },
  {
    id: "elongrab",
    symbol: "elongrab",
    name: "Elongrab",
  },
  {
    id: "elonhype",
    symbol: "elonhype",
    name: "ElonHype",
  },
  {
    id: "eloniumcoin",
    symbol: "elnc",
    name: "EloniumCoin",
  },
  {
    id: "elonjet",
    symbol: "elonjet",
    name: "ElonJet",
  },
  {
    id: "elons-marvin",
    symbol: "marvin",
    name: "Elon's Marvin",
  },
  {
    id: "elons-rabbit",
    symbol: "erabbit",
    name: "ELONs RABBIT",
  },
  {
    id: "elpis-battle",
    symbol: "eba",
    name: "Elpis Battle",
  },
  {
    id: "elron",
    symbol: "elr",
    name: "Elron",
  },
  {
    id: "elrond-erd-2",
    symbol: "egld",
    name: "MultiversX (Elrond)",
  },
  {
    id: "el-rune-rune-game",
    symbol: "el",
    name: "EL Rune (Rune.Game)",
  },
  {
    id: "eltcoin",
    symbol: "eltcoin",
    name: "Eltcoin",
  },
  {
    id: "elumia",
    symbol: "elu",
    name: "Elumia",
  },
  {
    id: "elvantis",
    symbol: "elv",
    name: "Elvantis",
  },
  {
    id: "elves-century",
    symbol: "elves",
    name: "Elves Century",
  },
  {
    id: "elya",
    symbol: "elya",
    name: "Elya",
  },
  {
    id: "elyfi",
    symbol: "elfi",
    name: "ELYFI",
  },
  {
    id: "elynet-token",
    symbol: "elyx",
    name: "Elynet",
  },
  {
    id: "elysia",
    symbol: "el",
    name: "ELYSIA",
  },
  {
    id: "elysian",
    symbol: "ely",
    name: "Elysian",
  },
  {
    id: "elysiant-token",
    symbol: "els",
    name: "Elysian ELS",
  },
  {
    id: "elysiumg",
    symbol: "lcmg",
    name: "ElysiumG",
  },
  {
    id: "emanate",
    symbol: "emt",
    name: "Emanate",
  },
  {
    id: "ember",
    symbol: "ember",
    name: "Ember",
  },
  {
    id: "embr",
    symbol: "embr",
    name: "Embr",
  },
  {
    id: "emcis-network",
    symbol: "emc1",
    name: "EMCIS NETWORK",
  },
  {
    id: "emerald-crypto",
    symbol: "emd",
    name: "Emerald Crypto",
  },
  {
    id: "emercoin",
    symbol: "emc",
    name: "EmerCoin",
  },
  {
    id: "emg-coin",
    symbol: "emg",
    name: "EMG Coin",
  },
  {
    id: "eminer",
    symbol: "em",
    name: "Eminer",
  },
  {
    id: "emirate-swap-token",
    symbol: "emc",
    name: "Emirate Swap Token",
  },
  {
    id: "emirex-token",
    symbol: "emrx",
    name: "Emirex",
  },
  {
    id: "emiswap",
    symbol: "esw",
    name: "EmiSwap",
  },
  {
    id: "emitearthelement",
    symbol: "earth",
    name: "EmitEarthElement",
  },
  {
    id: "emocoin",
    symbol: "emo",
    name: "Emocoin",
  },
  {
    id: "e-money",
    symbol: "ngm",
    name: "e-Money",
  },
  {
    id: "e-money-eur",
    symbol: "eeur",
    name: "e-Money EUR",
  },
  {
    id: "empire-capital-token",
    symbol: "ecc",
    name: "Empire Capital",
  },
  {
    id: "empire-token",
    symbol: "empire",
    name: "Empire",
  },
  {
    id: "emp-money",
    symbol: "emp",
    name: "Emp Money",
  },
  {
    id: "empowa",
    symbol: "emp",
    name: "Empowa",
  },
  {
    id: "emp-shares",
    symbol: "eshare",
    name: "EMP Shares",
  },
  {
    id: "empty-set-crypto",
    symbol: "esc",
    name: "Empty Set Crypto",
  },
  {
    id: "empty-set-dollar",
    symbol: "esd",
    name: "Empty Set Dollar",
  },
  {
    id: "empty-set-share",
    symbol: "ess",
    name: "Empty Set Share",
  },
  {
    id: "empyrean",
    symbol: "empyr",
    name: "Empyrean",
  },
  {
    id: "encountr",
    symbol: "enctr",
    name: "Encountr",
  },
  {
    id: "encrypgen",
    symbol: "dna",
    name: "EncrypGen",
  },
  {
    id: "encyclopedia-wta",
    symbol: "encwta",
    name: "Encyclopedia wTa",
  },
  {
    id: "endless-battlefield",
    symbol: "eb",
    name: "Endless Battlefield",
  },
  {
    id: "endor",
    symbol: "edr",
    name: "Endor Protocol",
  },
  {
    id: "endpoint-cex-fan-token",
    symbol: "endcex",
    name: "Endpoint Cex Fan Token",
  },
  {
    id: "enegra",
    symbol: "egx",
    name: "Enegra",
  },
  {
    id: "energi",
    symbol: "nrg",
    name: "Energi",
  },
  {
    id: "energi-dollar",
    symbol: "usde",
    name: "Energi Dollar",
  },
  {
    id: "energo",
    symbol: "tsl",
    name: "Tesla TSL",
  },
  {
    id: "energy",
    symbol: "nrgy",
    name: "ENERGY",
  },
  {
    id: "energy8",
    symbol: "e8",
    name: "Energy8",
  },
  {
    id: "energy-efficient-mortgage-tokenized-stock-defichain",
    symbol: "deem",
    name: "iShares MSCI Emerging Markets ETF Defichain",
  },
  {
    id: "energyfi",
    symbol: "eft",
    name: "Energyfi",
  },
  {
    id: "energytrade-token",
    symbol: "ett",
    name: "EnergyTrade Token",
  },
  {
    id: "energy-web-token",
    symbol: "ewt",
    name: "Energy Web",
  },
  {
    id: "enex",
    symbol: "enx",
    name: "ENEX",
  },
  {
    id: "eng-crypto",
    symbol: "eng",
    name: "Eng Crypto",
  },
  {
    id: "engine-token",
    symbol: "engn",
    name: "Engine Token",
  },
  {
    id: "enigma",
    symbol: "eng",
    name: "Enigma",
  },
  {
    id: "enjincoin",
    symbol: "enj",
    name: "Enjin Coin",
  },
  {
    id: "enjinstarter",
    symbol: "ejs",
    name: "Enjinstarter",
  },
  {
    id: "enjoy-network",
    symbol: "eyn",
    name: "Enjoy Network",
  },
  {
    id: "enkix",
    symbol: "ekx",
    name: "EnkiX",
  },
  {
    id: "enno-cash",
    symbol: "enno",
    name: "ENNO Cash",
  },
  {
    id: "eno",
    symbol: "eno",
    name: "ENO",
  },
  {
    id: "enq-enecuum",
    symbol: "enq",
    name: "Enecuum",
  },
  {
    id: "enreachdao",
    symbol: "nrch",
    name: "EnreachDAO",
  },
  {
    id: "enrex",
    symbol: "enrx",
    name: "Enrex",
  },
  {
    id: "enterbutton",
    symbol: "entc",
    name: "EnterButton",
  },
  {
    id: "entercoin",
    symbol: "entrc",
    name: "EnterCoin",
  },
  {
    id: "enterdao",
    symbol: "entr",
    name: "EnterDAO",
  },
  {
    id: "entice-v2",
    symbol: "ntic",
    name: "Entice",
  },
  {
    id: "entity",
    symbol: "entity",
    name: "Entity",
  },
  {
    id: "entropyfi",
    symbol: "erp",
    name: "Entropyfi",
  },
  {
    id: "envida",
    symbol: "edat",
    name: "EnviDa",
  },
  {
    id: "envion",
    symbol: "evn",
    name: "Envion",
  },
  {
    id: "enviro",
    symbol: "enviro",
    name: "Enviro",
  },
  {
    id: "envision",
    symbol: "vis",
    name: "Envision",
  },
  {
    id: "envoy-network",
    symbol: "env",
    name: "Envoy",
  },
  {
    id: "eos",
    symbol: "eos",
    name: "EOS",
  },
  {
    id: "eosbet",
    symbol: "bet",
    name: "EarnBet",
  },
  {
    id: "eosblack",
    symbol: "black",
    name: "eosBLACK",
  },
  {
    id: "eosdac",
    symbol: "eosdac",
    name: "eosDAC",
  },
  {
    id: "eosforce",
    symbol: "eosc",
    name: "EOSForce",
  },
  {
    id: "eos-pow-coin",
    symbol: "pow",
    name: "EOS PoW Coin",
  },
  {
    id: "eox",
    symbol: "eox",
    name: "EOX",
  },
  {
    id: "epanus",
    symbol: "eps",
    name: "Epanus",
  },
  {
    id: "epic-cash",
    symbol: "epic",
    name: "Epic Cash",
  },
  {
    id: "epichero",
    symbol: "epichero",
    name: "EpicHero",
  },
  {
    id: "epik-prime",
    symbol: "epik",
    name: "Epik Prime",
  },
  {
    id: "epik-protocol",
    symbol: "epk",
    name: "EpiK Protocol",
  },
  {
    id: "eq9",
    symbol: "eq9",
    name: "Equals9",
  },
  {
    id: "eqifi",
    symbol: "eqx",
    name: "EQIFi",
  },
  {
    id: "equalizer",
    symbol: "eqz",
    name: "Equalizer",
  },
  {
    id: "equalizer-dex",
    symbol: "equal",
    name: "Equalizer DEX",
  },
  {
    id: "equilibrium",
    symbol: "eq",
    name: "Equilibrium Games",
  },
  {
    id: "equilibrium-eosdt",
    symbol: "eosdt",
    name: "Equilibrium EOSDT",
  },
  {
    id: "equilibrium-token",
    symbol: "eq",
    name: "Equilibrium",
  },
  {
    id: "equinox",
    symbol: "enx",
    name: "Equinox",
  },
  {
    id: "equitrader",
    symbol: "eqt",
    name: "EquiTrader",
  },
  {
    id: "era",
    symbol: "era",
    name: "Era",
  },
  {
    id: "era7",
    symbol: "era",
    name: "Era7",
  },
  {
    id: "era7-game-of-truth",
    symbol: "got",
    name: "Era7: Game of Truth",
  },
  {
    id: "e-radix",
    symbol: "exrd",
    name: "e-Radix",
  },
  {
    id: "era-swap-token",
    symbol: "es",
    name: "Era Swap",
  },
  {
    id: "ergo",
    symbol: "erg",
    name: "Ergo",
  },
  {
    id: "erica-social-token",
    symbol: "est",
    name: "Erica Social Token",
  },
  {
    id: "eristica",
    symbol: "ert",
    name: "Eristica",
  },
  {
    id: "eron",
    symbol: "eron",
    name: "ERON",
  },
  {
    id: "eroverse",
    symbol: "ero",
    name: "Eroverse",
  },
  {
    id: "ertha",
    symbol: "ertha",
    name: "Ertha",
  },
  {
    id: "erth-point",
    symbol: "erth",
    name: "Erth Point",
  },
  {
    id: "erugo-world-coin",
    symbol: "ewc",
    name: "Erugo World Coin",
  },
  {
    id: "erzurumspor-token",
    symbol: "erz",
    name: "Erzurumspor Token",
  },
  {
    id: "escoin-token",
    symbol: "elg",
    name: "Escoin",
  },
  {
    id: "esg",
    symbol: "esg",
    name: "ESG",
  },
  {
    id: "esg-chain",
    symbol: "esgc",
    name: "ESG Chain",
  },
  {
    id: "eska",
    symbol: "esk",
    name: "Eska",
  },
  {
    id: "eskisehir-fan-token",
    symbol: "eses",
    name: "Eskişehir Fan Token",
  },
  {
    id: "espers",
    symbol: "esp",
    name: "Espers",
  },
  {
    id: "esportgame",
    symbol: "esm",
    name: "EsportGame",
  },
  {
    id: "esports",
    symbol: "ert",
    name: "Esports.com",
  },
  {
    id: "esportspro",
    symbol: "espro",
    name: "EsportsPro",
  },
  {
    id: "esportsref",
    symbol: "esr",
    name: "EsportsRef",
  },
  {
    id: "essentia",
    symbol: "ess",
    name: "Essentia",
  },
  {
    id: "eswapping-v2",
    symbol: "eswapv2",
    name: "eSwapping v2",
  },
  {
    id: "eterland",
    symbol: "eter",
    name: "Eterland",
  },
  {
    id: "etermon",
    symbol: "etm",
    name: "Etermon",
  },
  {
    id: "eterna-hybrid-exchange",
    symbol: "ehx",
    name: "Eterna Hybrid Exchange",
  },
  {
    id: "eternalflow",
    symbol: "eft",
    name: "EternalFlow",
  },
  {
    id: "eternal-oasis",
    symbol: "etos",
    name: "Eternal Oasis",
  },
  {
    id: "eternal-spire-v2",
    symbol: "ensp",
    name: "Eternal Spire V2",
  },
  {
    id: "eternal-world",
    symbol: "etl",
    name: "Eternal World",
  },
  {
    id: "etg-finance",
    symbol: "etgf",
    name: "ETG Finance",
  },
  {
    id: "eth2-staking-by-poolx",
    symbol: "eth2",
    name: "Eth 2.0 Staking by Pool-X",
  },
  {
    id: "eth-2x-flexible-leverage-index",
    symbol: "eth2x-fli",
    name: "Index Coop - ETH 2x Flexible Leverage Index",
  },
  {
    id: "eth3s",
    symbol: "eth3s",
    name: "ETH3S",
  },
  {
    id: "etha-lend",
    symbol: "etha",
    name: "ETHA Lend",
  },
  {
    id: "ethart",
    symbol: "arte",
    name: "Items",
  },
  {
    id: "ethax",
    symbol: "ethax",
    name: "ETHAX",
  },
  {
    id: "ethbnt",
    symbol: "ethbnt",
    name: "ETHBNT Relay",
  },
  {
    id: "ethburn",
    symbol: "burning",
    name: "EthBurn",
  },
  {
    id: "ethdown",
    symbol: "ethdown",
    name: "ETHDOWN",
  },
  {
    id: "ethdox",
    symbol: "ethdox",
    name: "ETHDOX",
  },
  {
    id: "etheal",
    symbol: "heal",
    name: "Etheal",
  },
  {
    id: "etheking",
    symbol: "ethe",
    name: "ETHEKing",
  },
  {
    id: "ether-1",
    symbol: "etho",
    name: "Etho Protocol",
  },
  {
    id: "ethera-black",
    symbol: "etb",
    name: "Ethera Black",
  },
  {
    id: "etherbone",
    symbol: "ethbn",
    name: "EtherBone",
  },
  {
    id: "etherconnect",
    symbol: "ecc",
    name: "Etherconnect",
  },
  {
    id: "ethereans",
    symbol: "os",
    name: "Ethereans",
  },
  {
    id: "etherean-socks",
    symbol: "eth2socks",
    name: "Etherean Socks",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
  },
  {
    id: "ethereum-cash",
    symbol: "ecash",
    name: "Ethereum Cash",
  },
  {
    id: "ethereum-classic",
    symbol: "etc",
    name: "Ethereum Classic",
  },
  {
    id: "ethereumfair",
    symbol: "ethf",
    name: "EthereumFair",
  },
  {
    id: "ethereum-gold-project",
    symbol: "etgp",
    name: "Ethereum Gold Project",
  },
  {
    id: "ethereum-lite",
    symbol: "elite",
    name: "Ethereum Lite",
  },
  {
    id: "ethereummax",
    symbol: "emax",
    name: "EthereumMax",
  },
  {
    id: "ethereum-meta",
    symbol: "ethm",
    name: "Ethereum Meta",
  },
  {
    id: "ethereum-name-service",
    symbol: "ens",
    name: "Ethereum Name Service",
  },
  {
    id: "ethereum-pos-iou",
    symbol: "eths",
    name: "Ethereum PoS Fork IOU",
  },
  {
    id: "ethereum-pow-iou",
    symbol: "ethw",
    name: "EthereumPoW",
  },
  {
    id: "ethereum-push-notification-service",
    symbol: "push",
    name: "Push Protocol",
  },
  {
    id: "ethereum-stake",
    symbol: "ethys",
    name: "Ethereum Stake",
  },
  {
    id: "ethereum-victory",
    symbol: "evic",
    name: "Ethereum Victory",
  },
  {
    id: "ethereum-volatility-index-token",
    symbol: "ethv",
    name: "Ethereum Volatility Index Token",
  },
  {
    id: "ethereum-wormhole",
    symbol: "eth",
    name: "Ethereum (Wormhole)",
  },
  {
    id: "ethereum-wrapped-filecoin",
    symbol: "efil",
    name: "Ethereum Wrapped Filecoin",
  },
  {
    id: "ethereumx",
    symbol: "etx",
    name: "EthereumX",
  },
  {
    id: "ethereum-yield",
    symbol: "ethy",
    name: "Ethereum Yield",
  },
  {
    id: "ethergem",
    symbol: "egem",
    name: "EtherGem",
  },
  {
    id: "etherinc",
    symbol: "eti",
    name: "EtherInc",
  },
  {
    id: "etherisc",
    symbol: "dip",
    name: "Etherisc DIP",
  },
  {
    id: "etherland",
    symbol: "eland",
    name: "Etherland",
  },
  {
    id: "etherlite-2",
    symbol: "etl",
    name: "EtherLite",
  },
  {
    id: "ethermail",
    symbol: "emt",
    name: "EtherMail",
  },
  {
    id: "ethermon",
    symbol: "emon",
    name: "Ethermon",
  },
  {
    id: "ethernaal",
    symbol: "naal",
    name: "Ethernaal",
  },
  {
    id: "ethernal",
    symbol: "ethernal",
    name: "Ethernal",
  },
  {
    id: "ethernal-finance",
    symbol: "ethfin",
    name: "Ethernal Finance",
  },
  {
    id: "ethernity-chain",
    symbol: "ern",
    name: "Ethernity Chain",
  },
  {
    id: "etherparty",
    symbol: "fuel",
    name: "Etherparty",
  },
  {
    id: "etherpay",
    symbol: "ethpy",
    name: "Etherpay",
  },
  {
    id: "etherrock-72",
    symbol: "pebble",
    name: "Etherrock #72",
  },
  {
    id: "ethersmart",
    symbol: "etm",
    name: "EtherSmart",
  },
  {
    id: "ethersniper",
    symbol: "ets",
    name: "Ethersniper",
  },
  {
    id: "ethersocks",
    symbol: "sox",
    name: "Ethersocks",
  },
  {
    id: "ethfan-burn",
    symbol: "$efb",
    name: "ETHFan Burn",
  },
  {
    id: "eth-fan-token",
    symbol: "eft",
    name: "ETH Fan Token Ecosystem",
  },
  {
    id: "ethichub",
    symbol: "ethix",
    name: "EthicHub",
  },
  {
    id: "ethlend",
    symbol: "lend",
    name: "Aave [OLD]",
  },
  {
    id: "eth-max-yield-index",
    symbol: "ethmaxy",
    name: "ETH Max Yield Index",
  },
  {
    id: "ethorse",
    symbol: "horse",
    name: "Ethorse",
  },
  {
    id: "ethos",
    symbol: "vgx",
    name: "Voyager VGX",
  },
  {
    id: "ethpad",
    symbol: "ethpad",
    name: "ETHPad",
  },
  {
    id: "ethrise",
    symbol: "$ethrise",
    name: "ETHRISE",
  },
  {
    id: "eth-shiba",
    symbol: "ethshib",
    name: "Eth Shiba",
  },
  {
    id: "ethst-governance-token",
    symbol: "et",
    name: "ETHST Governance",
  },
  {
    id: "ethtez",
    symbol: "ethtz",
    name: "ETHtez",
  },
  {
    id: "ethup",
    symbol: "ethup",
    name: "ETHUP",
  },
  {
    id: "ethverse",
    symbol: "ethv",
    name: "Ethverse",
  },
  {
    id: "ethw-id",
    symbol: "eid",
    name: "ETHW ID",
  },
  {
    id: "etna-metabolism",
    symbol: "mtb",
    name: "ETNA Metabolism",
  },
  {
    id: "etna-network",
    symbol: "etna",
    name: "ETNA Network",
  },
  {
    id: "etrade",
    symbol: "ett",
    name: "Etrade",
  },
  {
    id: "etxinfinity",
    symbol: "etx",
    name: "ETXInfinity",
  },
  {
    id: "eub-chain",
    symbol: "eubc",
    name: "EUB Chain",
  },
  {
    id: "euler",
    symbol: "eul",
    name: "Euler",
  },
  {
    id: "euler-tools",
    symbol: "euler",
    name: "Euler Tools",
  },
  {
    id: "euno",
    symbol: "euno",
    name: "EUNO",
  },
  {
    id: "eunomia",
    symbol: "ents",
    name: "EUNOMIA",
  },
  {
    id: "euphoria-2",
    symbol: "wagmi",
    name: "Euphoria",
  },
  {
    id: "euro-coin",
    symbol: "euroc",
    name: "Euro Coin",
  },
  {
    id: "eurocoinpay",
    symbol: "ecte",
    name: "Eurocoin ECTE",
  },
  {
    id: "euronin",
    symbol: "euronin",
    name: "Euronin",
  },
  {
    id: "europa",
    symbol: "orbit",
    name: "Europa",
  },
  {
    id: "euro-shiba-inu",
    symbol: "eshib",
    name: "Euro Shiba Inu",
  },
  {
    id: "euro-stable-token",
    symbol: "eurst",
    name: "Euro Stable Token",
  },
  {
    id: "evai-2",
    symbol: "ev",
    name: "Evai",
  },
  {
    id: "evanesco-network",
    symbol: "eva",
    name: "Evanesco Network",
  },
  {
    id: "evedo",
    symbol: "eved",
    name: "Evedo",
  },
  {
    id: "eve-exchange",
    symbol: "eve",
    name: "EVE",
  },
  {
    id: "evencoin",
    symbol: "evn",
    name: "EvenCoin",
  },
  {
    id: "everbnb",
    symbol: "everbnb",
    name: "EverBNB",
  },
  {
    id: "everchain",
    symbol: "ec",
    name: "EverChain",
  },
  {
    id: "everdome",
    symbol: "dome",
    name: "Everdome",
  },
  {
    id: "everdot",
    symbol: "everdot",
    name: "EverDot",
  },
  {
    id: "everearn",
    symbol: "earn",
    name: "EverEarn",
  },
  {
    id: "everestcoin",
    symbol: "evcoin",
    name: "EverestCoin",
  },
  {
    id: "evereth",
    symbol: "evereth",
    name: "EverETH",
  },
  {
    id: "everex",
    symbol: "evx",
    name: "Everex",
  },
  {
    id: "evergreen-token",
    symbol: "egt",
    name: "Evergreen",
  },
  {
    id: "evergrowcoin",
    symbol: "egc",
    name: "EverGrow Coin",
  },
  {
    id: "everid",
    symbol: "id",
    name: "Everest",
  },
  {
    id: "everipedia",
    symbol: "iq",
    name: "IQ",
  },
  {
    id: "everlens",
    symbol: "elen",
    name: "Everlens",
  },
  {
    id: "evermars",
    symbol: "evm",
    name: "EverMars",
  },
  {
    id: "everreflect",
    symbol: "evrf",
    name: "EverReflect",
  },
  {
    id: "everrise",
    symbol: "rise",
    name: "EverRise",
  },
  {
    id: "eversafu",
    symbol: "eversafu",
    name: "EverSAFU",
  },
  {
    id: "eversafuv2",
    symbol: "es2",
    name: "EverSAFUv2",
  },
  {
    id: "everscale",
    symbol: "ever",
    name: "Everscale",
  },
  {
    id: "eversol",
    symbol: "esol",
    name: "EVERSOL",
  },
  {
    id: "eversol-staked-sol",
    symbol: "esol",
    name: "Eversol Staked SOL",
  },
  {
    id: "everstart",
    symbol: "start",
    name: "EverStart",
  },
  {
    id: "everswap",
    symbol: "ever",
    name: "EverSwap",
  },
  {
    id: "everton-fan-token",
    symbol: "efc",
    name: "Everton Fan Token",
  },
  {
    id: "everus",
    symbol: "evr",
    name: "Everus",
  },
  {
    id: "everyape-bsc",
    symbol: "evape",
    name: "EveryApe BSC",
  },
  {
    id: "everycoin",
    symbol: "evy",
    name: "EveryCoin",
  },
  {
    id: "every-game",
    symbol: "egame",
    name: "Every Game",
  },
  {
    id: "evident-proof-transaction-token",
    symbol: "eptt",
    name: "Evident Proof Transaction",
  },
  {
    id: "evil-coin",
    symbol: "evil",
    name: "Evil Coin",
  },
  {
    id: "evil-shiba-inu",
    symbol: "esi",
    name: "Evil Shiba Inu",
  },
  {
    id: "evilsquidgame",
    symbol: "evilsquid",
    name: "EvilSquidGame",
  },
  {
    id: "evmos",
    symbol: "evmos",
    name: "Evmos",
  },
  {
    id: "evmos-domains",
    symbol: "evd",
    name: "Evmos Domains",
  },
  {
    id: "evmoswap",
    symbol: "emo",
    name: "EvmoSwap",
  },
  {
    id: "evny-token",
    symbol: "evny",
    name: "EVNY",
  },
  {
    id: "evo-finance",
    symbol: "evo",
    name: "Evo Finance",
  },
  {
    id: "evoload",
    symbol: "evld",
    name: "Evoload",
  },
  {
    id: "evolution-finance",
    symbol: "evn",
    name: "Evolution Finance",
  },
  {
    id: "evoverse-power",
    symbol: "epw",
    name: "Evoverse Power",
  },
  {
    id: "evoverses",
    symbol: "evo",
    name: "EvoVerses",
  },
  {
    id: "evoverse-shard",
    symbol: "evs",
    name: "Evoverse Shard",
  },
  {
    id: "evrice",
    symbol: "evc",
    name: "Evrice",
  },
  {
    id: "evrynet",
    symbol: "evry",
    name: "Evrynet",
  },
  {
    id: "evulus",
    symbol: "evu",
    name: "Evulus",
  },
  {
    id: "exalt",
    symbol: "exalt",
    name: "Exalt",
  },
  {
    id: "excalibur",
    symbol: "exc",
    name: "Excalibur",
  },
  {
    id: "excelon",
    symbol: "xlon",
    name: "Excelon",
  },
  {
    id: "exchangecoin",
    symbol: "excc",
    name: "ExchangeCoin",
  },
  {
    id: "exchange-genesis-ethlas-medium",
    symbol: "xgem",
    name: "Exchange Genesis Ethlas Medium",
  },
  {
    id: "exchange-union",
    symbol: "xuc",
    name: "Exchange Union",
  },
  {
    id: "exciting-japan-coin",
    symbol: "xjp",
    name: "eXciting Japan Coin",
  },
  {
    id: "exclusivecoin",
    symbol: "excl",
    name: "ExclusiveCoin",
  },
  {
    id: "excursion-token",
    symbol: "exc",
    name: "Excursion Token",
  },
  {
    id: "exeedme",
    symbol: "xed",
    name: "Exeedme",
  },
  {
    id: "exeno",
    symbol: "exn",
    name: "Exeno Coin",
  },
  {
    id: "exenpay-token",
    symbol: "exenp",
    name: "ExenPay",
  },
  {
    id: "exentoken",
    symbol: "exen",
    name: "Exen",
  },
  {
    id: "exgold",
    symbol: "exg",
    name: "Exgold",
  },
  {
    id: "exmoc",
    symbol: "exmoc",
    name: "EXMOC",
  },
  {
    id: "exmo-coin",
    symbol: "exm",
    name: "EXMO Coin",
  },
  {
    id: "exmr-monero",
    symbol: "exmr",
    name: "EXMR FDN",
  },
  {
    id: "exnetwork-token",
    symbol: "exnt",
    name: "ExNetwork",
  },
  {
    id: "exobots",
    symbol: "exos",
    name: "Exobots",
  },
  {
    id: "exodusext",
    symbol: "ext",
    name: "ExodusExt",
  },
  {
    id: "exohood",
    symbol: "exo",
    name: "Exohood",
  },
  {
    id: "exosama-network",
    symbol: "sama",
    name: "Exosama Network",
  },
  {
    id: "exp",
    symbol: "exp",
    name: "Exp",
  },
  {
    id: "expanse",
    symbol: "exp",
    name: "Expanse",
  },
  {
    id: "experience-chain",
    symbol: "xpc",
    name: "eXPerience Chain",
  },
  {
    id: "experiencecoin",
    symbol: "epc",
    name: "ExperienceCoin",
  },
  {
    id: "experty-wisdom-token",
    symbol: "wis",
    name: "Experty Wisdom",
  },
  {
    id: "exponential-capital",
    symbol: "expo",
    name: "Exponential Capital",
  },
  {
    id: "export-mortos-platform",
    symbol: "emp",
    name: "Export Motors Platform",
  },
  {
    id: "exrnchain",
    symbol: "exrn",
    name: "EXRNchain",
  },
  {
    id: "exrt-network",
    symbol: "exrt",
    name: "EXRT Network",
  },
  {
    id: "extractodao-bull",
    symbol: "xbll",
    name: "ExtractoDAO Bull",
  },
  {
    id: "extradna",
    symbol: "xdna",
    name: "extraDNA",
  },
  {
    id: "extraterrestrial-token",
    symbol: "et",
    name: "Extraterrestrial Token",
  },
  {
    id: "exzo",
    symbol: "xzo",
    name: "Exzo",
  },
  {
    id: "exzocoin",
    symbol: "exzo",
    name: "ExzoCoin 2.0",
  },
  {
    id: "eyes-protocol",
    symbol: "eyes",
    name: "EYES Protocol",
  },
  {
    id: "ezcoinmarket",
    symbol: "ecm",
    name: "Ezcoinmarket",
  },
  {
    id: "ezillion",
    symbol: "ezi",
    name: "Ezillion",
  },
  {
    id: "ezystayz",
    symbol: "ezy",
    name: "Ezystayz",
  },
  {
    id: "ezzy-game",
    symbol: "ezy",
    name: "EZZY Game",
  },
  {
    id: "f1d-token",
    symbol: "f1d",
    name: "F1D Token",
  },
  {
    id: "fable-of-the-dragon",
    symbol: "tyrant",
    name: "Fable Of The Dragon",
  },
  {
    id: "fable-of-the-shiba",
    symbol: "syrant",
    name: "Fable Of The Shiba",
  },
  {
    id: "fabric",
    symbol: "fab",
    name: "Fabric",
  },
  {
    id: "fabwelt",
    symbol: "welt",
    name: "Fabwelt",
  },
  {
    id: "face",
    symbol: "face",
    name: "Faceter",
  },
  {
    id: "facebook-tokenized-stock-defichain",
    symbol: "dfb",
    name: "Facebook Tokenized Stock Defichain",
  },
  {
    id: "facedao",
    symbol: "face",
    name: "FaceDAO",
  },
  {
    id: "face-meta-2-0",
    symbol: "facemeta",
    name: "Face Meta 2.0",
  },
  {
    id: "face-vault-nftx",
    symbol: "face",
    name: "FACE Vault (NFTX)",
  },
  {
    id: "facts",
    symbol: "bkc",
    name: "FACTS",
  },
  {
    id: "fado-go",
    symbol: "fado",
    name: "FADO Go",
  },
  {
    id: "fahrenheit-chain",
    symbol: "wfac",
    name: "Fahrenheit Chain",
  },
  {
    id: "fairgame",
    symbol: "fair",
    name: "FairGame",
  },
  {
    id: "fairmint",
    symbol: "fair",
    name: "Fairmint",
  },
  {
    id: "fairswap",
    symbol: "fair",
    name: "FairSwap",
  },
  {
    id: "fairum",
    symbol: "fai",
    name: "Fairum",
  },
  {
    id: "fairy",
    symbol: "fairy",
    name: "Fairy",
  },
  {
    id: "fairy-finance-unicorn",
    symbol: "unicorn",
    name: "Fairy Finance UNICORN",
  },
  {
    id: "fairy-forest",
    symbol: "ffn",
    name: "Fairy Forest",
  },
  {
    id: "faithcoin",
    symbol: "faith",
    name: "FaithCoin",
  },
  {
    id: "faith-tribe",
    symbol: "ftrb",
    name: "Faith Tribe",
  },
  {
    id: "falafel",
    symbol: "falafel",
    name: "Falafel",
  },
  {
    id: "falcon",
    symbol: "fln",
    name: "Falcon",
  },
  {
    id: "falcon-nine",
    symbol: "f9",
    name: "Falcon Nine",
  },
  {
    id: "falcon-swaps",
    symbol: "falcons",
    name: "Falcon Swaps",
  },
  {
    id: "falcon-token",
    symbol: "fnt",
    name: "Falcon Project",
  },
  {
    id: "falconx",
    symbol: "falcx",
    name: "FalconX",
  },
  {
    id: "fame-mma",
    symbol: "fame",
    name: "Fame MMA",
  },
  {
    id: "fame-reward-plus",
    symbol: "frp",
    name: "Fame Reward Plus",
  },
  {
    id: "familyparty",
    symbol: "fpc",
    name: "FamilyParty",
  },
  {
    id: "famous-coin",
    symbol: "famous",
    name: "Famous Coin",
  },
  {
    id: "famous-five",
    symbol: "fafi",
    name: "Famous Five",
  },
  {
    id: "famous-fox-federation",
    symbol: "foxy",
    name: "Famous Fox Federation",
  },
  {
    id: "fam-token",
    symbol: "fam",
    name: "FAM",
  },
  {
    id: "fanadise",
    symbol: "fan",
    name: "Fanadise",
  },
  {
    id: "fanbi-token",
    symbol: "fbt",
    name: "FANBI TOKEN",
  },
  {
    id: "fanc",
    symbol: "fanc",
    name: "fanC",
  },
  {
    id: "fancy-games",
    symbol: "fnc",
    name: "Fancy Games",
  },
  {
    id: "fandom",
    symbol: "fdm",
    name: "Fautor",
  },
  {
    id: "fandom-chain",
    symbol: "kdc",
    name: "Fandom Chain",
  },
  {
    id: "fandora-network",
    symbol: "fan",
    name: "Fandora Network",
  },
  {
    id: "fanfury",
    symbol: "fury",
    name: "Fanfury",
  },
  {
    id: "fango",
    symbol: "xfg",
    name: "Fango",
  },
  {
    id: "fang-token",
    symbol: "fang",
    name: "FANG",
  },
  {
    id: "fanitrade",
    symbol: "fani",
    name: "FaniTrade",
  },
  {
    id: "fanspel",
    symbol: "fan",
    name: "Fanspel",
  },
  {
    id: "fans-squid",
    symbol: "fst",
    name: "Fans Squid",
  },
  {
    id: "fanstime",
    symbol: "fti",
    name: "FansTime",
  },
  {
    id: "fantastic-protocol-fxm-token",
    symbol: "fxm",
    name: "Fantastic Protocol FXM",
  },
  {
    id: "fantastic-protocol-peg-ftm",
    symbol: "ftmx",
    name: "Fantastic Protocol Peg-FTM",
  },
  {
    id: "fantasy-gold",
    symbol: "fgc",
    name: "Fantasy Gold",
  },
  {
    id: "fantasy-monster",
    symbol: "fts",
    name: "Fantasy Monster",
  },
  {
    id: "fantasy-war",
    symbol: "fawa",
    name: "Fantasy War",
  },
  {
    id: "fantohm",
    symbol: "fhm",
    name: "Fantohm",
  },
  {
    id: "fan-tokens-football",
    symbol: "ftf",
    name: "Fan Tokens Football",
  },
  {
    id: "fantom",
    symbol: "ftm",
    name: "Fantom",
  },
  {
    id: "fantom-doge",
    symbol: "rip",
    name: "Fantom Doge",
  },
  {
    id: "fantomgo",
    symbol: "ftg",
    name: "OnGo",
  },
  {
    id: "fantom-libero-financial",
    symbol: "flibero",
    name: "Fantom Libero Financial",
  },
  {
    id: "fantom-maker",
    symbol: "fame",
    name: "Fantom Maker",
  },
  {
    id: "fantom-oasis",
    symbol: "ftmo",
    name: "Fantom Oasis",
  },
  {
    id: "fantom-of-the-opera-apes",
    symbol: "fantomapes",
    name: "Fantom of the Opera Apes",
  },
  {
    id: "fantomstarter",
    symbol: "fs",
    name: "FantomStarter",
  },
  {
    id: "fantom-usd",
    symbol: "fusd",
    name: "Fantom USD",
  },
  {
    id: "fantums-of-opera-token",
    symbol: "foo",
    name: "Fantums of Opera",
  },
  {
    id: "fanverse-token",
    symbol: "ft",
    name: "Fanverse Token",
  },
  {
    id: "fanzee-token",
    symbol: "fnz",
    name: "Fanzee Token",
  },
  {
    id: "fanzy",
    symbol: "fx1",
    name: "FANZY",
  },
  {
    id: "faraland",
    symbol: "fara",
    name: "FaraLand",
  },
  {
    id: "farmercryptocoin",
    symbol: "fcc",
    name: "FarmerCryptoCoin",
  },
  {
    id: "farmerdoge",
    symbol: "crop",
    name: "FarmerDoge",
  },
  {
    id: "farmers-only",
    symbol: "fox",
    name: "FoxSwap",
  },
  {
    id: "farmers-world-wood",
    symbol: "fww",
    name: "Farmers World Wood",
  },
  {
    id: "farming-paradise",
    symbol: "fpg",
    name: "Farming Paradise",
  },
  {
    id: "farmland-protocol",
    symbol: "far",
    name: "Farmland Protocol",
  },
  {
    id: "farm-planet",
    symbol: "fpl",
    name: "Farm Planet",
  },
  {
    id: "farm-skylines",
    symbol: "fsk",
    name: "Farm Skylines",
  },
  {
    id: "farms-of-ryoshi",
    symbol: "noni",
    name: "Farms of Ryoshi",
  },
  {
    id: "fashion-coin",
    symbol: "fshn",
    name: "Fashion Coin",
  },
  {
    id: "fasst",
    symbol: "fas",
    name: "Fasst",
  },
  {
    id: "fast-finance",
    symbol: "fast",
    name: "Fast Finance",
  },
  {
    id: "fast-food-wolf-game",
    symbol: "ffwool",
    name: "Fast Food Wolf Game",
  },
  {
    id: "fastmoon",
    symbol: "fastmoon",
    name: "FastMoon",
  },
  {
    id: "fastswap",
    symbol: "fast",
    name: "FastSwap",
  },
  {
    id: "fastswap-bsc",
    symbol: "fast",
    name: "Fastswap (BSC)",
  },
  {
    id: "fasttoken",
    symbol: "ftn",
    name: "Fasttoken",
  },
  {
    id: "fatcake",
    symbol: "fatcake",
    name: "FatCake",
  },
  {
    id: "fat-cat-killer",
    symbol: "killer",
    name: "Fat Cat Killer",
  },
  {
    id: "fate-token",
    symbol: "fate",
    name: "Fate",
  },
  {
    id: "fatih-karagumruk-sk-fan-token",
    symbol: "fksk",
    name: "Fatih Karagümrük SK Fan Token",
  },
  {
    id: "fat-satoshi",
    symbol: "fatoshi",
    name: "Fat Satoshi",
  },
  {
    id: "favecoin",
    symbol: "fave",
    name: "Favecoin",
  },
  {
    id: "favor",
    symbol: "favor",
    name: "Favor",
  },
  {
    id: "fayre",
    symbol: "fayre",
    name: "Fayre",
  },
  {
    id: "fbomb",
    symbol: "bomb",
    name: "fBOMB",
  },
  {
    id: "fc-barcelona-fan-token",
    symbol: "bar",
    name: "FC Barcelona Fan Token",
  },
  {
    id: "fc-porto",
    symbol: "porto",
    name: "FC Porto",
  },
  {
    id: "fc-sion-fan-token",
    symbol: "sion",
    name: "FC Sion Fan Token",
  },
  {
    id: "fds",
    symbol: "fds",
    name: "Fair Dollars",
  },
  {
    id: "fear",
    symbol: "fear",
    name: "FEAR",
  },
  {
    id: "feathercoin",
    symbol: "ftc",
    name: "Feathercoin",
  },
  {
    id: "fedoracoin",
    symbol: "tips",
    name: "Fedoracoin",
  },
  {
    id: "fedora-gold",
    symbol: "fed",
    name: "Fedora Gold",
  },
  {
    id: "feeder-finance",
    symbol: "feed",
    name: "Feeder Finance",
  },
  {
    id: "feg-token",
    symbol: "feg",
    name: "FEG",
  },
  {
    id: "feg-token-bsc",
    symbol: "feg",
    name: "FEG BSC",
  },
  {
    id: "feichang-niu",
    symbol: "fcn",
    name: "Feichang Niu",
  },
  {
    id: "feisty-doge-nft",
    symbol: "nfd",
    name: "Feisty Doge NFT",
  },
  {
    id: "fei-usd",
    symbol: "fei",
    name: "Fei USD",
  },
  {
    id: "felix",
    symbol: "flx",
    name: "Felix",
  },
  {
    id: "fellaz",
    symbol: "flz",
    name: "Fellaz",
  },
  {
    id: "fenerbahce-token",
    symbol: "fb",
    name: "Fenerbahçe",
  },
  {
    id: "fenix-danjon",
    symbol: "djn",
    name: "Fenix Danjon",
  },
  {
    id: "fenix-inu",
    symbol: "fnix",
    name: "Fenix Inu",
  },
  {
    id: "fenomy",
    symbol: "fenomy",
    name: "Fenomy",
  },
  {
    id: "fera",
    symbol: "fera",
    name: "Fera",
  },
  {
    id: "ferma",
    symbol: "ferma",
    name: "Ferma",
  },
  {
    id: "ferro",
    symbol: "fer",
    name: "Ferro",
  },
  {
    id: "ferrum-network",
    symbol: "frm",
    name: "Ferrum Network",
  },
  {
    id: "fertilizer",
    symbol: "frt",
    name: "Fertilizer",
  },
  {
    id: "festa-finance",
    symbol: "ffa",
    name: "Festa Finance",
  },
  {
    id: "fetch-ai",
    symbol: "fet",
    name: "Fetch.ai",
  },
  {
    id: "feyorra",
    symbol: "fey",
    name: "Feyorra",
  },
  {
    id: "fiat-dao-token",
    symbol: "fdt",
    name: "Fiat DAO",
  },
  {
    id: "fibitpro-exchange",
    symbol: "fbt",
    name: "Fibit Token",
  },
  {
    id: "fibodex",
    symbol: "fibo",
    name: "FiboDex",
  },
  {
    id: "fibos",
    symbol: "fo",
    name: "FIBOS",
  },
  {
    id: "fibo-token",
    symbol: "fibo",
    name: "FibSwap DEX",
  },
  {
    id: "fida",
    symbol: "fid",
    name: "Fida",
  },
  {
    id: "fidance",
    symbol: "fdc",
    name: "Fidance",
  },
  {
    id: "fidelis",
    symbol: "fdls",
    name: "FIDELIS",
  },
  {
    id: "fidex-exchange",
    symbol: "fex",
    name: "FIDEX Exchange",
  },
  {
    id: "fidira",
    symbol: "fid",
    name: "Fidira",
  },
  {
    id: "fidlecoin",
    symbol: "fidle",
    name: "Fidlecoin",
  },
  {
    id: "fidometa",
    symbol: "fmc",
    name: "FidoMeta",
  },
  {
    id: "fidu",
    symbol: "fidu",
    name: "Fidu",
  },
  {
    id: "fief",
    symbol: "fief",
    name: "Fief",
  },
  {
    id: "fifa-inu",
    symbol: "finu",
    name: "Fifa Inu",
  },
  {
    id: "fifa-laeeb",
    symbol: "laeeb",
    name: "FIFA Laeeb",
  },
  {
    id: "fifasport",
    symbol: "ffs",
    name: "FiFaSport",
  },
  {
    id: "fiftyonefifty",
    symbol: "fifty",
    name: "FIFTYONEFIFTY",
  },
  {
    id: "fight-4-hope",
    symbol: "f4h",
    name: "Fight 4 Hope",
  },
  {
    id: "fight-of-the-ages",
    symbol: "fota",
    name: "Fight Of The Ages",
  },
  {
    id: "filda",
    symbol: "filda",
    name: "Filda",
  },
  {
    id: "filecash",
    symbol: "fic",
    name: "Filecash",
  },
  {
    id: "filecoin",
    symbol: "fil",
    name: "Filecoin",
  },
  {
    id: "filecoin-standard-full-hashrate",
    symbol: "sfil",
    name: "Filecoin Standard Full Hashrate",
  },
  {
    id: "fileshare-platform",
    symbol: "fsc",
    name: "Fileshare Platform",
  },
  {
    id: "filestar",
    symbol: "star",
    name: "FileStar",
  },
  {
    id: "filipcoin",
    symbol: "fcp",
    name: "Filipcoin",
  },
  {
    id: "film-coin",
    symbol: "fliks",
    name: "Film Coin",
  },
  {
    id: "filmcredits",
    symbol: "film",
    name: "FILMCredits",
  },
  {
    id: "fimi-market-inc",
    symbol: "fimi",
    name: "Fimi Market Inc.",
  },
  {
    id: "final-frontier",
    symbol: "frnt",
    name: "Final Frontier",
  },
  {
    id: "finance-blocks",
    symbol: "fbx",
    name: "Finance Blocks",
  },
  {
    id: "finance-sports",
    symbol: "fsd",
    name: "Finance Sports",
  },
  {
    id: "finance-vote",
    symbol: "fvt",
    name: "Finance Vote",
  },
  {
    id: "finblox",
    symbol: "fbx",
    name: "Finblox",
  },
  {
    id: "findora",
    symbol: "fra",
    name: "Findora",
  },
  {
    id: "finexbox-token",
    symbol: "fnb",
    name: "Finexbox",
  },
  {
    id: "fingerprints",
    symbol: "prints",
    name: "FingerprintsDAO",
  },
  {
    id: "finminity",
    symbol: "fmt",
    name: "Finminity",
  },
  {
    id: "fino-dao",
    symbol: "fino",
    name: "FINO DAO",
  },
  {
    id: "fins-token",
    symbol: "fins",
    name: "Fins",
  },
  {
    id: "fintab",
    symbol: "fntb",
    name: "FinTab",
  },
  {
    id: "fintoken",
    symbol: "ftc",
    name: "FinToken",
  },
  {
    id: "fintropy",
    symbol: "fint",
    name: "Fintropy",
  },
  {
    id: "fintrux",
    symbol: "ftx",
    name: "FintruX",
  },
  {
    id: "finxflo",
    symbol: "fxf",
    name: "FINXFLO",
  },
  {
    id: "fio-protocol",
    symbol: "fio",
    name: "FIO Protocol",
  },
  {
    id: "fira",
    symbol: "fira",
    name: "FIRA",
  },
  {
    id: "fira-cronos",
    symbol: "fira",
    name: "Defira (Cronos)",
  },
  {
    id: "fireal",
    symbol: "frl",
    name: "Fireal",
  },
  {
    id: "fireants",
    symbol: "ants",
    name: "FireAnts",
  },
  {
    id: "fireball-2",
    symbol: "fire",
    name: "FireBall",
  },
  {
    id: "firebird-aggregator",
    symbol: "fba",
    name: "Firebird Aggregator",
  },
  {
    id: "firebot",
    symbol: "fbx",
    name: "FireBot",
  },
  {
    id: "fireflame-inu",
    symbol: "fire",
    name: "FireFlame Inu",
  },
  {
    id: "fire-lotto",
    symbol: "flot",
    name: "Fire Lotto",
  },
  {
    id: "fire-protocol",
    symbol: "fire",
    name: "Fire Protocol",
  },
  {
    id: "firerocket",
    symbol: "firerocket",
    name: "FireRocket",
  },
  {
    id: "firestarter",
    symbol: "flame",
    name: "FireStarter",
  },
  {
    id: "firetoken",
    symbol: "fire",
    name: "Firework Games",
  },
  {
    id: "fire-token-2",
    symbol: "fire",
    name: "Fire",
  },
  {
    id: "firezard",
    symbol: "zard",
    name: "FireZard",
  },
  {
    id: "firmachain",
    symbol: "fct",
    name: "Firmachain",
  },
  {
    id: "first-eleven",
    symbol: "f11",
    name: "First Eleven",
  },
  {
    id: "first-ever-nft",
    symbol: "fen",
    name: "First Ever NFT",
  },
  {
    id: "firsthare",
    symbol: "firsthare",
    name: "FirstHare",
  },
  {
    id: "firulais",
    symbol: "firu",
    name: "Firulais",
  },
  {
    id: "firulais-wallet-token",
    symbol: "fiwt",
    name: "Firulais Wallet",
  },
  {
    id: "fisco",
    symbol: "fscc",
    name: "FISCO Coin",
  },
  {
    id: "fish-crypto",
    symbol: "fico",
    name: "Fish Crypto",
  },
  {
    id: "fishera",
    symbol: "fshr",
    name: "Fishera",
  },
  {
    id: "fishing-town",
    symbol: "fhtn",
    name: "Fishing Town",
  },
  {
    id: "fishingtowngiltoken",
    symbol: "gil",
    name: "FishingTownGil",
  },
  {
    id: "fistbump",
    symbol: "fist",
    name: "Fistbump",
  },
  {
    id: "fit-beat",
    symbol: "ftb",
    name: "Fit&Beat",
  },
  {
    id: "fitevo",
    symbol: "fivo",
    name: "FitEvo",
  },
  {
    id: "fitmin",
    symbol: "ftm",
    name: "Fitmin",
  },
  {
    id: "fitmint",
    symbol: "fitt",
    name: "Fitmint",
  },
  {
    id: "fitn",
    symbol: "fitn",
    name: "FITN",
  },
  {
    id: "fitr-metaverse-token",
    symbol: "fmt",
    name: "FitR Metaverse Token",
  },
  {
    id: "fitr-social-token",
    symbol: "fst",
    name: "FitR Social Token",
  },
  {
    id: "fitscrypt",
    symbol: "$fit",
    name: "FitScrypt",
  },
  {
    id: "fit-token",
    symbol: "fit",
    name: "FIT",
  },
  {
    id: "fity",
    symbol: "fity",
    name: "Fity",
  },
  {
    id: "fivekm-kmt",
    symbol: "kmt",
    name: "FiveKM KMT",
  },
  {
    id: "fixed-income-asset-token",
    symbol: "fiat",
    name: "Fixed Income Asset",
  },
  {
    id: "fixed-trade-coin",
    symbol: "fxtc",
    name: "Fixed Trade Coin",
  },
  {
    id: "flag-media",
    symbol: "flag",
    name: "Flag Media",
  },
  {
    id: "flag-network",
    symbol: "flag",
    name: "Flag Network",
  },
  {
    id: "flamengo-fan-token",
    symbol: "mengo",
    name: "Flamengo Fan Token",
  },
  {
    id: "flamingo-finance",
    symbol: "flm",
    name: "Flamingo Finance",
  },
  {
    id: "flappy-floki",
    symbol: "flaflo",
    name: "Flappy Floki",
  },
  {
    id: "flappyrats",
    symbol: "frats",
    name: "FlappyRats",
  },
  {
    id: "flare-finance",
    symbol: "exfi",
    name: "Flare Finance",
  },
  {
    id: "flare-token",
    symbol: "1flr",
    name: "Flare",
  },
  {
    id: "flash-inu",
    symbol: "flash",
    name: "Flash Inu",
  },
  {
    id: "flash-stake",
    symbol: "flash",
    name: "Flashstake",
  },
  {
    id: "flash-token",
    symbol: "flash",
    name: "Flash Loans",
  },
  {
    id: "flash-token-2",
    symbol: "flash",
    name: "Flash",
  },
  {
    id: "flashx-ultra",
    symbol: "fsxu",
    name: "FlashX Ultra",
  },
  {
    id: "flatqube",
    symbol: "qube",
    name: "FlatQube",
  },
  {
    id: "fleta",
    symbol: "fleta",
    name: "FLETA",
  },
  {
    id: "flex-coin",
    symbol: "flex",
    name: "FLEX Coin",
  },
  {
    id: "flexq",
    symbol: "flq",
    name: "FlexQ",
  },
  {
    id: "flex-usd",
    symbol: "flexusd",
    name: "flexUSD",
  },
  {
    id: "flipstar",
    symbol: "flip",
    name: "FlipStar",
  },
  {
    id: "flits",
    symbol: "fls",
    name: "Flits",
  },
  {
    id: "flixxo",
    symbol: "flixx",
    name: "Flixxo",
  },
  {
    id: "float-protocol",
    symbol: "bank",
    name: "Float Protocol",
  },
  {
    id: "float-protocol-float",
    symbol: "float",
    name: "Float Protocol: Float",
  },
  {
    id: "flock",
    symbol: "flock",
    name: "Flock",
  },
  {
    id: "floki",
    symbol: "floki",
    name: "FLOKI",
  },
  {
    id: "flokibonk",
    symbol: "flobo",
    name: "FlokiBonk",
  },
  {
    id: "floki-chain",
    symbol: "flokichain",
    name: "Floki Chain",
  },
  {
    id: "flokicoke",
    symbol: "flokicoke",
    name: "FlokiCoke",
  },
  {
    id: "flokigainz",
    symbol: "gainz",
    name: "FlokiGainz",
  },
  {
    id: "flokigrow",
    symbol: "flokigrow",
    name: "FlokiGrow",
  },
  {
    id: "flokimarvin",
    symbol: "$pals",
    name: "FlokiMarvin",
  },
  {
    id: "floki-millions",
    symbol: "millions",
    name: "Floki Millions",
  },
  {
    id: "flokimooni",
    symbol: "flokim",
    name: "Flokimooni",
  },
  {
    id: "floki-musk",
    symbol: "floki",
    name: "Floki Musk",
  },
  {
    id: "flokirocket",
    symbol: "rkf",
    name: "FlokiRocket",
  },
  {
    id: "floki-rocket",
    symbol: "rloki",
    name: "Floki Rocket",
  },
  {
    id: "floki-santa",
    symbol: "flokisanta",
    name: "Floki Santa",
  },
  {
    id: "flokiswap",
    symbol: "flokis",
    name: "FlokiSwap",
  },
  {
    id: "floof",
    symbol: "floof",
    name: "FLOOF",
  },
  {
    id: "floordao",
    symbol: "floor",
    name: "FloorDAO",
  },
  {
    id: "florida-man",
    symbol: "fman",
    name: "Florida Man",
  },
  {
    id: "florin",
    symbol: "xfl",
    name: "Florin",
  },
  {
    id: "floshin",
    symbol: "floshin",
    name: "Floshin",
  },
  {
    id: "flourishing-ai-token",
    symbol: "ai",
    name: "Flourishing AI",
  },
  {
    id: "flow",
    symbol: "flow",
    name: "Flow",
  },
  {
    id: "flowchaincoin",
    symbol: "flc",
    name: "Flowchain",
  },
  {
    id: "flower",
    symbol: "flow",
    name: "Flower",
  },
  {
    id: "fluffy-coin",
    symbol: "fluf",
    name: "Fluffy Coin",
  },
  {
    id: "fluffy-inu",
    symbol: "fluffy",
    name: "Fluffy Inu",
  },
  {
    id: "fluid-dai",
    symbol: "fdai",
    name: "Fluid DAI",
  },
  {
    id: "fluidfi",
    symbol: "fluid",
    name: "FluidFi",
  },
  {
    id: "fluid-frax",
    symbol: "ffrax",
    name: "Fluid FRAX",
  },
  {
    id: "fluid-tusd",
    symbol: "ftusd",
    name: "Fluid TUSD",
  },
  {
    id: "fluid-usdc",
    symbol: "fusdc",
    name: "Fluid USDC",
  },
  {
    id: "fluid-usdt",
    symbol: "fusdt",
    name: "Fluid USDT",
  },
  {
    id: "flurry",
    symbol: "flurry",
    name: "Flurry Finance",
  },
  {
    id: "flux",
    symbol: "flux",
    name: "Datamine FLUX",
  },
  {
    id: "flux-protocol",
    symbol: "flux",
    name: "Flux Protocol",
  },
  {
    id: "flux-token",
    symbol: "flx",
    name: "FluxProtocol",
  },
  {
    id: "flyapy",
    symbol: "fly",
    name: "FlyApy",
  },
  {
    id: "flycoin-fly",
    symbol: "fly",
    name: "Flycoin FLY",
  },
  {
    id: "flying-colours",
    symbol: "ours",
    name: "Flying Colours",
  },
  {
    id: "flypaper",
    symbol: "sticky",
    name: "FlyPaper",
  },
  {
    id: "flype-dao",
    symbol: "flyp",
    name: "FLYPE DAO",
  },
  {
    id: "flypme",
    symbol: "fyp",
    name: "FlypMe",
  },
  {
    id: "fm-gallery",
    symbol: "fmg",
    name: "FM Gallery",
  },
  {
    id: "fmoney-finance",
    symbol: "fmon",
    name: "FMONEY FINANCE",
  },
  {
    id: "fnb-protocol",
    symbol: "fnb",
    name: "FNB Protocol",
  },
  {
    id: "fncy",
    symbol: "fncy",
    name: "FNCY",
  },
  {
    id: "fndz-token",
    symbol: "fndz",
    name: "FNDZ",
  },
  {
    id: "fnkcom",
    symbol: "fnk",
    name: "Fnk.com",
  },
  {
    id: "foam-protocol",
    symbol: "foam",
    name: "FOAM",
  },
  {
    id: "fodl-finance",
    symbol: "fodl",
    name: "Fodl Finance",
  },
  {
    id: "foho-coin",
    symbol: "foho",
    name: "Foho Coin",
  },
  {
    id: "foincoin",
    symbol: "foin",
    name: "Foin",
  },
  {
    id: "folder-protocol",
    symbol: "fol",
    name: "Folder Protocol",
  },
  {
    id: "folk",
    symbol: "folk",
    name: "$FOLK",
  },
  {
    id: "follow-token",
    symbol: "folo",
    name: "Alpha Impact",
  },
  {
    id: "fomo",
    symbol: "fomo",
    name: "FOMO",
  },
  {
    id: "fomo-baby",
    symbol: "fomobaby",
    name: "FOMO BABY",
  },
  {
    id: "fomoeth",
    symbol: "fomoeth",
    name: "FomoETH",
  },
  {
    id: "fone",
    symbol: "fone",
    name: "Fone",
  },
  {
    id: "font",
    symbol: "font",
    name: "Font",
  },
  {
    id: "food-bank",
    symbol: "food",
    name: "Food Bank",
  },
  {
    id: "foodchain-global",
    symbol: "food",
    name: "FoodChain Global",
  },
  {
    id: "football-battle",
    symbol: "fbl",
    name: "Football Battle",
  },
  {
    id: "football-coin",
    symbol: "xfc",
    name: "Football Coin",
  },
  {
    id: "football-decentralized",
    symbol: "fbd",
    name: "Football Decentralized",
  },
  {
    id: "footballfanapp",
    symbol: "fnc",
    name: "FanCoin®",
  },
  {
    id: "football-fantasy-pro",
    symbol: "fanta",
    name: "Football Fantasy Pro",
  },
  {
    id: "footballgo",
    symbol: "fgsport",
    name: "FootBallGo",
  },
  {
    id: "football-on-internet-ground",
    symbol: "fig",
    name: "Football on Internet Ground",
  },
  {
    id: "footballstars",
    symbol: "fts",
    name: "FootballStars",
  },
  {
    id: "football-world-community",
    symbol: "fwc",
    name: "Football World Community",
  },
  {
    id: "footie-plus",
    symbol: "footie",
    name: "Footie Plus",
  },
  {
    id: "forbitspace",
    symbol: "fbs",
    name: "Forbitspace",
  },
  {
    id: "force-bridge-usdc",
    symbol: "usdc",
    name: "Force Bridge USDC",
  },
  {
    id: "forcecowboy",
    symbol: "fcb",
    name: "ForceCowBoy",
  },
  {
    id: "force-of-nature",
    symbol: "fon",
    name: "Force of Nature",
  },
  {
    id: "force-protocol",
    symbol: "for",
    name: "ForTube",
  },
  {
    id: "forefront",
    symbol: "ff",
    name: "Forefront",
  },
  {
    id: "forest-knight",
    symbol: "knight",
    name: "Forest Knight",
  },
  {
    id: "forest-tiger",
    symbol: "tiger",
    name: "Forest Tiger",
  },
  {
    id: "foreverblast",
    symbol: "feb",
    name: "ForeverBlast",
  },
  {
    id: "forever-burn",
    symbol: "fburn",
    name: "Forever Burn",
  },
  {
    id: "forevermoon",
    symbol: "fomo",
    name: "ForeverMoon",
  },
  {
    id: "forexcoin",
    symbol: "forex",
    name: "FOREXCOIN",
  },
  {
    id: "forge-finance",
    symbol: "forge",
    name: "Forge Finance",
  },
  {
    id: "for-loot-and-glory",
    symbol: "flag",
    name: "For Loot And Glory",
  },
  {
    id: "formation-fi",
    symbol: "form",
    name: "Formation FI",
  },
  {
    id: "formula",
    symbol: "fml",
    name: "FormulA",
  },
  {
    id: "forta",
    symbol: "fort",
    name: "Forta",
  },
  {
    id: "forthbox",
    symbol: "fbx",
    name: "ForthBox",
  },
  {
    id: "fortknoxter",
    symbol: "fkx",
    name: "FortKnoxster",
  },
  {
    id: "fortress",
    symbol: "fts",
    name: "Fortress Loans",
  },
  {
    id: "fortressdao",
    symbol: "fort",
    name: "Fortress",
  },
  {
    id: "fortuna",
    symbol: "fota",
    name: "Fortuna",
  },
  {
    id: "fortuna-sittard-fan-token",
    symbol: "for",
    name: "Fortuna Sittard Fan Token",
  },
  {
    id: "fortune",
    symbol: "fortune",
    name: "Fortune",
  },
  {
    id: "fortune-finance",
    symbol: "frtn",
    name: "Fortune Finance",
  },
  {
    id: "fortuneum",
    symbol: "fortune",
    name: "FORTUNEUM",
  },
  {
    id: "forus",
    symbol: "fors",
    name: "Forus",
  },
  {
    id: "fossil",
    symbol: "fossil",
    name: "Fossil",
  },
  {
    id: "foundation",
    symbol: "fnd",
    name: "Foundation",
  },
  {
    id: "foundrydao-logistics",
    symbol: "fry",
    name: "FoundryDAO Logistics",
  },
  {
    id: "fountain-protocol",
    symbol: "ftp",
    name: "Fountain Protocol",
  },
  {
    id: "foxboy",
    symbol: "fbb",
    name: "Foxboy",
  },
  {
    id: "fox-finance",
    symbol: "fox",
    name: "Fox Finance",
  },
  {
    id: "fox-financev2",
    symbol: "fox",
    name: "Fox Finance V2",
  },
  {
    id: "foxgirl",
    symbol: "foxgirl",
    name: "FoxGirl",
  },
  {
    id: "fox-trading-token",
    symbol: "foxt",
    name: "Fox Trading",
  },
  {
    id: "foxy-equilibrium",
    symbol: "foxy",
    name: "Foxy Equilibrium",
  },
  {
    id: "fozeus-coin",
    symbol: "fzs",
    name: "Fozeus Coin",
  },
  {
    id: "fqswap",
    symbol: "fqs",
    name: "FqSwap",
  },
  {
    id: "fractal",
    symbol: "fcl",
    name: "Fractal",
  },
  {
    id: "fraction",
    symbol: "fraction",
    name: "Fraction",
  },
  {
    id: "fractionalized-smb-2367",
    symbol: "daojones",
    name: "Fractionalized SMB-2367",
  },
  {
    id: "fractionalized-wave-999",
    symbol: "wav",
    name: "Fractionalized WAVE-999",
  },
  {
    id: "fracton-protocol",
    symbol: "ft",
    name: "Fracton Protocol",
  },
  {
    id: "fragments-of-arker",
    symbol: "foa",
    name: "Fragments of Arker",
  },
  {
    id: "fragmint",
    symbol: "frag",
    name: "Fragmint",
  },
  {
    id: "fraktionalized-thug-2856",
    symbol: "thug",
    name: "Fraktionalized THUG 2856",
  },
  {
    id: "frakt-token",
    symbol: "frkt",
    name: "FRAKT",
  },
  {
    id: "france-fan-token",
    symbol: "fra",
    name: "France Fan Token",
  },
  {
    id: "france-rev-finance",
    symbol: "frf",
    name: "France REV Finance",
  },
  {
    id: "frank-inu",
    symbol: "frank",
    name: "Frank Inu",
  },
  {
    id: "franklin",
    symbol: "fly",
    name: "Franklin",
  },
  {
    id: "frax",
    symbol: "frax",
    name: "Frax",
  },
  {
    id: "frax-ether",
    symbol: "frxeth",
    name: "Frax Ether",
  },
  {
    id: "frax-price-index",
    symbol: "fpi",
    name: "Frax Price Index",
  },
  {
    id: "frax-price-index-share",
    symbol: "fpis",
    name: "Frax Price Index Share",
  },
  {
    id: "frax-share",
    symbol: "fxs",
    name: "Frax Share",
  },
  {
    id: "fredenergy",
    symbol: "fred",
    name: "FRED Energy",
  },
  {
    id: "freebie-life-finance",
    symbol: "frb",
    name: "Freebie Life Finance",
  },
  {
    id: "freecash",
    symbol: "fch",
    name: "Freecash",
  },
  {
    id: "freecity",
    symbol: "fcity",
    name: "FreeCity",
  },
  {
    id: "freedom",
    symbol: "fdm",
    name: "Freedom",
  },
  {
    id: "freedomcoin",
    symbol: "freed",
    name: "Freedomcoin",
  },
  {
    id: "freedom-coin",
    symbol: "free",
    name: "FREEdom coin",
  },
  {
    id: "freedom-god-dao",
    symbol: "fgd",
    name: "Freedom God DAO",
  },
  {
    id: "freedom-jobs-business",
    symbol: "$fjb",
    name: "Freedom. Jobs. Business",
  },
  {
    id: "freedom-protocol",
    symbol: "free",
    name: "Freedom Protocol",
  },
  {
    id: "freedom-reserve",
    symbol: "fr",
    name: "Freedom Reserve",
  },
  {
    id: "freela",
    symbol: "frel",
    name: "Freela",
  },
  {
    id: "freeliquid",
    symbol: "fl",
    name: "Freeliquid",
  },
  {
    id: "freemoon-binance",
    symbol: "fmb",
    name: "FREEMOON BINANCE",
  },
  {
    id: "freerossdao",
    symbol: "free",
    name: "FreeRossDAO",
  },
  {
    id: "free-speech",
    symbol: "1amd",
    name: "Free Speech",
  },
  {
    id: "freeway",
    symbol: "fwt",
    name: "Freeway",
  },
  {
    id: "freicoin",
    symbol: "frc",
    name: "Freicoin",
  },
  {
    id: "freight-trust-network",
    symbol: "edi",
    name: "Freight Trust Network",
  },
  {
    id: "fren",
    symbol: "fren",
    name: "FREN",
  },
  {
    id: "frenchain",
    symbol: "fren",
    name: "FrenChain",
  },
  {
    id: "french-connection-finance",
    symbol: "fcf",
    name: "French Connection Finance",
  },
  {
    id: "french-digital-reserve",
    symbol: "fdr",
    name: "French Digital Reserve",
  },
  {
    id: "frenchie",
    symbol: "fren",
    name: "Frenchie",
  },
  {
    id: "frencoin",
    symbol: "fren",
    name: "FrenCoin",
  },
  {
    id: "frenzy",
    symbol: "fzy",
    name: "Frenzy",
  },
  {
    id: "freshcut-diamond",
    symbol: "fcd",
    name: "FreshCut Diamond",
  },
  {
    id: "freyala",
    symbol: "xya",
    name: "GameFi Crossing",
  },
  {
    id: "friends-with-benefits-pro",
    symbol: "fwb",
    name: "Friends With Benefits Pro",
  },
  {
    id: "friendz",
    symbol: "fdz",
    name: "Friendz",
  },
  {
    id: "fringe-finance",
    symbol: "frin",
    name: "Fringe Finance",
  },
  {
    id: "frmx-token",
    symbol: "frmx",
    name: "FRMx",
  },
  {
    id: "froge-finance",
    symbol: "frogex",
    name: "FrogeX",
  },
  {
    id: "froggies-token",
    symbol: "frgst",
    name: "Froggies",
  },
  {
    id: "frog-inu",
    symbol: "fgi",
    name: "Frog Inu",
  },
  {
    id: "frogswap",
    symbol: "frog",
    name: "FrogSwap",
  },
  {
    id: "frontfanz",
    symbol: "fanz",
    name: "FrontFanz",
  },
  {
    id: "frontier-token",
    symbol: "front",
    name: "Frontier",
  },
  {
    id: "front-row",
    symbol: "frr",
    name: "Frontrow",
  },
  {
    id: "frosty-floki-v2",
    symbol: "frostyfloki",
    name: "Frosty Floki V2",
  },
  {
    id: "froyo-games",
    symbol: "froyo",
    name: "Froyo Games",
  },
  {
    id: "frozentomb",
    symbol: "ftomb",
    name: "Frozentomb",
  },
  {
    id: "frozentomb-lot",
    symbol: "flot",
    name: "Frozentomb LOT",
  },
  {
    id: "frozen-walrus-share",
    symbol: "wshare",
    name: "Frozen Walrus Share",
  },
  {
    id: "fruits",
    symbol: "frts",
    name: "Fruits",
  },
  {
    id: "fruits-of-ryoshi",
    symbol: "yuzu",
    name: "Fruits of Ryoshi",
  },
  {
    id: "frutti-dino",
    symbol: "fdt",
    name: "Frutti Dino",
  },
  {
    id: "frz-solar-system",
    symbol: "frzss",
    name: "Frz Solar System",
  },
  {
    id: "frzswap",
    symbol: "frzw",
    name: "FRZSwap",
  },
  {
    id: "fsn",
    symbol: "fsn",
    name: "FUSION",
  },
  {
    id: "fstswap-osk",
    symbol: "osk",
    name: "FstSwap OSK",
  },
  {
    id: "fsw-token",
    symbol: "fsw",
    name: "Falconswap",
  },
  {
    id: "ftm-guru",
    symbol: "elite",
    name: "ftm.guru",
  },
  {
    id: "ftmlaunch",
    symbol: "ftml",
    name: "FTMlaunch",
  },
  {
    id: "ftribe-fighters",
    symbol: "f2c",
    name: "Ftribe Fighters",
  },
  {
    id: "ftx-token",
    symbol: "ftt",
    name: "FTX",
  },
  {
    id: "ftx-wormhole",
    symbol: "ftt",
    name: "FTX (Wormhole)",
  },
  {
    id: "fudcoin-official",
    symbol: "fud",
    name: "FUDcoin Official",
  },
  {
    id: "fudge",
    symbol: "$fudge",
    name: "Fudge",
  },
  {
    id: "fuel-token",
    symbol: "fuel",
    name: "Jetfuel Finance",
  },
  {
    id: "fufu",
    symbol: "fufu",
    name: "Fufu",
  },
  {
    id: "fuji",
    symbol: "fuji",
    name: "Fuji",
  },
  {
    id: "fujitoken",
    symbol: "fjt",
    name: "Fuji FJT",
  },
  {
    id: "fuma-finance",
    symbol: "fuma",
    name: "Fuma Finance",
  },
  {
    id: "fumoney",
    symbol: "fum",
    name: "FUMoney",
  },
  {
    id: "funcha",
    symbol: "fucha",
    name: "Funcha",
  },
  {
    id: "fundamenta",
    symbol: "fmta",
    name: "Fundamenta",
  },
  {
    id: "fund-of-yours",
    symbol: "foy",
    name: "Fund Of Yours",
  },
  {
    id: "funex",
    symbol: "funex",
    name: "Funex",
  },
  {
    id: "funfair",
    symbol: "fun",
    name: "FUN Token",
  },
  {
    id: "funfi",
    symbol: "fnf",
    name: "FunFi",
  },
  {
    id: "fungie-dao",
    symbol: "fng",
    name: "Fungie DAO",
  },
  {
    id: "furio",
    symbol: "$fur",
    name: "Furio",
  },
  {
    id: "furucombo",
    symbol: "combo",
    name: "Furucombo",
  },
  {
    id: "furukuru",
    symbol: "fuku",
    name: "Furukuru",
  },
  {
    id: "fuse-dollar",
    symbol: "fusd",
    name: "Fuse Dollar",
  },
  {
    id: "fusefi",
    symbol: "volt",
    name: "Voltage Finance",
  },
  {
    id: "fuse-network-token",
    symbol: "fuse",
    name: "Fuse",
  },
  {
    id: "fusible",
    symbol: "fusii",
    name: "Fusible",
  },
  {
    id: "fusotao",
    symbol: "tao",
    name: "Fusotao",
  },
  {
    id: "futura",
    symbol: "futura",
    name: "Futura",
  },
  {
    id: "futurax",
    symbol: "ftxt",
    name: "FUTURAX",
  },
  {
    id: "future",
    symbol: "ftr",
    name: "Future",
  },
  {
    id: "futurecoin",
    symbol: "future",
    name: "FutureCoin",
  },
  {
    id: "future-of-fintech",
    symbol: "fof",
    name: "Future Of Fintech",
  },
  {
    id: "futurescash",
    symbol: "fct",
    name: "FuturesCash",
  },
  {
    id: "futurescoin",
    symbol: "fc",
    name: "FuturesCoin",
  },
  {
    id: "futureswap",
    symbol: "fst",
    name: "Futureswap",
  },
  {
    id: "futurocoin",
    symbol: "fto",
    name: "FuturoCoin",
  },
  {
    id: "fuze-token",
    symbol: "fuze",
    name: "FUZE",
  },
  {
    id: "fuzex",
    symbol: "fxt",
    name: "FuzeX",
  },
  {
    id: "fuzz-finance",
    symbol: "fuzz",
    name: "Fuzz Finance",
  },
  {
    id: "fx-coin",
    symbol: "fx",
    name: "Function X",
  },
  {
    id: "fxt-token",
    symbol: "fxt",
    name: "FXT",
  },
  {
    id: "fxwallet",
    symbol: "fxl",
    name: "FXWallet",
  },
  {
    id: "fydcoin",
    symbol: "fyd",
    name: "FYDcoin",
  },
  {
    id: "fyooz",
    symbol: "fyz",
    name: "Fyooz",
  },
  {
    id: "g999",
    symbol: "g999",
    name: "G999",
  },
  {
    id: "gabecoin",
    symbol: "gabecoin",
    name: "Gabecoin",
  },
  {
    id: "gabur",
    symbol: "gbr",
    name: "Gabur",
  },
  {
    id: "gabx-finance",
    symbol: "gabx",
    name: "Gabx Finance",
  },
  {
    id: "gacube",
    symbol: "gac",
    name: "GACUBE",
  },
  {
    id: "gadget-war",
    symbol: "gwar",
    name: "Gadget War",
  },
  {
    id: "gafa",
    symbol: "gafa",
    name: "Gafa",
  },
  {
    id: "gaia-everworld",
    symbol: "gaia",
    name: "Gaia Everworld",
  },
  {
    id: "gaindao",
    symbol: "gain",
    name: "Gain DAO",
  },
  {
    id: "gainfull",
    symbol: "gfull",
    name: "Gainfull",
  },
  {
    id: "gain-protocol",
    symbol: "gain",
    name: "Gain Protocol",
  },
  {
    id: "gains",
    symbol: "gains",
    name: "Gains",
  },
  {
    id: "gains-farm",
    symbol: "gfarm2",
    name: "Gains Farm",
  },
  {
    id: "gains-network",
    symbol: "gns",
    name: "Gains Network",
  },
  {
    id: "gaj",
    symbol: "gaj",
    name: "Gaj Finance",
  },
  {
    id: "gala",
    symbol: "gala",
    name: "GALA",
  },
  {
    id: "galactic-arena-the-nftverse",
    symbol: "gan",
    name: "Galactic Arena: The NFTverse",
  },
  {
    id: "galactic-war",
    symbol: "galw",
    name: "Galactic War",
  },
  {
    id: "galatasaray-fan-token",
    symbol: "gal",
    name: "Galatasaray Fan Token",
  },
  {
    id: "galatic-kitty-fighters",
    symbol: "gkf",
    name: "Galatic Kitty Fighters",
  },
  {
    id: "galaxia",
    symbol: "gxa",
    name: "Galaxia",
  },
  {
    id: "galaxy-adventure",
    symbol: "gla",
    name: "Galaxy Adventure",
  },
  {
    id: "galaxy-arena",
    symbol: "esnc",
    name: "Galaxy Arena Metaverse",
  },
  {
    id: "galaxybusd",
    symbol: "galaxy",
    name: "GalaxyBUSD",
  },
  {
    id: "galaxycoin",
    symbol: "galaxy",
    name: "GalaxyCoin",
  },
  {
    id: "galaxy-doge",
    symbol: "galaxydoge",
    name: "Galaxy Doge",
  },
  {
    id: "galaxy-essential",
    symbol: "gxe",
    name: "Galaxy Essential",
  },
  {
    id: "galaxy-fight-club",
    symbol: "gcoin",
    name: "Galaxy Fight Club",
  },
  {
    id: "galaxy-finance",
    symbol: "gft",
    name: "Galaxy Finance",
  },
  {
    id: "galaxy-finance-glf",
    symbol: "glf",
    name: "Galaxy Finance GLF",
  },
  {
    id: "galaxy-heroes",
    symbol: "ghc",
    name: "Galaxy Heroes",
  },
  {
    id: "galaxy-heroes-coin",
    symbol: "ghc",
    name: "Galaxy Heroes Coin [OLD]",
  },
  {
    id: "galaxy-network",
    symbol: "gnc",
    name: "Galaxy Network",
  },
  {
    id: "galaxy-surge",
    symbol: "gals",
    name: "Galaxy Surge",
  },
  {
    id: "galaxy-war",
    symbol: "gwt",
    name: "Galaxy War",
  },
  {
    id: "gale-network",
    symbol: "gale",
    name: "Gale Network",
  },
  {
    id: "galeon",
    symbol: "galeon",
    name: "Galeon",
  },
  {
    id: "galileo",
    symbol: "gali",
    name: "Galileo",
  },
  {
    id: "galileo-protocol",
    symbol: "leox",
    name: "Galileo Protocol",
  },
  {
    id: "gamb",
    symbol: "gmb",
    name: "GAMB",
  },
  {
    id: "gambler-shiba",
    symbol: "gshiba",
    name: "Gambler Shiba",
  },
  {
    id: "game",
    symbol: "gtc",
    name: "Game",
  },
  {
    id: "game-ace-token",
    symbol: "gat",
    name: "Game Ace",
  },
  {
    id: "gameantz",
    symbol: "antz",
    name: "GameAntz",
  },
  {
    id: "gamebox",
    symbol: "gamebox",
    name: "Gamebox",
  },
  {
    id: "game-city",
    symbol: "gmci",
    name: "Game City",
  },
  {
    id: "game-coin",
    symbol: "gmex",
    name: "Game Coin",
  },
  {
    id: "gamecredits",
    symbol: "game",
    name: "GameCredits",
  },
  {
    id: "gamedao",
    symbol: "dao",
    name: "GameDAO",
  },
  {
    id: "gamee",
    symbol: "gmee",
    name: "GAMEE",
  },
  {
    id: "gamefantasystar",
    symbol: "gfs",
    name: "GameFantasyStar",
  },
  {
    id: "game-fantasy-token",
    symbol: "gft",
    name: "Game Fantasy",
  },
  {
    id: "game-federation",
    symbol: "gft",
    name: "Game Federation",
  },
  {
    id: "gamefi",
    symbol: "gafi",
    name: "GameFi",
  },
  {
    id: "gamefi-token",
    symbol: "gfi",
    name: "GameFi Protocol",
  },
  {
    id: "gameflip",
    symbol: "flp",
    name: "Gameflip",
  },
  {
    id: "game-gaw",
    symbol: "gaw",
    name: "Game Gaw",
  },
  {
    id: "game-gold-token",
    symbol: "$ggt",
    name: "Game Gold Token",
  },
  {
    id: "gameguru",
    symbol: "ggt",
    name: "GameGuru",
  },
  {
    id: "gamenft",
    symbol: "gnft",
    name: "GameNFT",
  },
  {
    id: "game-of-dragons",
    symbol: "god",
    name: "Game of Dragons",
  },
  {
    id: "gameology",
    symbol: "gmy",
    name: "Gameology",
  },
  {
    id: "gamer",
    symbol: "gmr",
    name: "GAMER",
  },
  {
    id: "gamer-arena",
    symbol: "gau",
    name: "Gamer Arena",
  },
  {
    id: "gamercoin",
    symbol: "ghx",
    name: "GamerCoin",
  },
  {
    id: "gamerse",
    symbol: "lfg",
    name: "Gamerse",
  },
  {
    id: "gamesafe",
    symbol: "gamesafe",
    name: "Gamesafe",
  },
  {
    id: "gamespad",
    symbol: "gmpd",
    name: "GamesPad",
  },
  {
    id: "gamesta",
    symbol: "gsg",
    name: "Gamesta",
  },
  {
    id: "game-stake",
    symbol: "gsk",
    name: "Game Stake",
  },
  {
    id: "gamestar-exchange",
    symbol: "gms",
    name: "GameStar",
  },
  {
    id: "gamestarplus",
    symbol: "gstar",
    name: "GameStarPlus",
  },
  {
    id: "game-stars",
    symbol: "gst",
    name: "Game Stars",
  },
  {
    id: "gamestarter",
    symbol: "game",
    name: "Gamestarter",
  },
  {
    id: "gamestation",
    symbol: "gamer",
    name: "GameStation",
  },
  {
    id: "gamestop-finance",
    symbol: "gme",
    name: "GameStop Finance",
  },
  {
    id: "gamestop-tokenized-stock-defichain",
    symbol: "dgme",
    name: "GameStop Tokenized Stock Defichain",
  },
  {
    id: "gameswap-org",
    symbol: "gswap",
    name: "Gameswap",
  },
  {
    id: "game-tree",
    symbol: "gtcoin",
    name: "Game Tree",
  },
  {
    id: "gameverse",
    symbol: "gmv",
    name: "GameVerse",
  },
  {
    id: "gamex",
    symbol: "gmx",
    name: "GameX",
  },
  {
    id: "game-x-change-potion",
    symbol: "gxp",
    name: "Game X Change Potion",
  },
  {
    id: "gameyoo",
    symbol: "gyc",
    name: "GameYoo",
  },
  {
    id: "gamezone",
    symbol: "gzone",
    name: "GameZone",
  },
  {
    id: "gami",
    symbol: "gami",
    name: "Gami",
  },
  {
    id: "gamifi",
    symbol: "gmi",
    name: "GamiFi",
  },
  {
    id: "gaming-doge",
    symbol: "gamingdoge",
    name: "Gaming Doge",
  },
  {
    id: "gamingshiba",
    symbol: "gamingshiba",
    name: "GamingShiba",
  },
  {
    id: "gaming-stars",
    symbol: "games",
    name: "Gaming Stars",
  },
  {
    id: "gamium",
    symbol: "gmm",
    name: "Gamium",
  },
  {
    id: "gami-world",
    symbol: "gami",
    name: "GAMI World",
  },
  {
    id: "gamma",
    symbol: "gamma",
    name: "Gamma",
  },
  {
    id: "gamma-strategies",
    symbol: "gamma",
    name: "Gamma Strategies",
  },
  {
    id: "gamyfi-token",
    symbol: "gfx",
    name: "GamyFi",
  },
  {
    id: "gandercoin",
    symbol: "gand",
    name: "GanderCoin",
  },
  {
    id: "gangstabet",
    symbol: "gbet",
    name: "GangstaBet",
  },
  {
    id: "gan-punks",
    symbol: "gpunks20",
    name: "Gan Punks",
  },
  {
    id: "gapcoin",
    symbol: "gap",
    name: "Gapcoin",
  },
  {
    id: "gard",
    symbol: "gard",
    name: "GARD",
  },
  {
    id: "gard-governance-token",
    symbol: "ggt",
    name: "GARD Governance",
  },
  {
    id: "gari-network",
    symbol: "gari",
    name: "Gari Network",
  },
  {
    id: "garlic",
    symbol: "grlc",
    name: "Garlic",
  },
  {
    id: "garlicoin",
    symbol: "grlc",
    name: "Garlicoin",
  },
  {
    id: "gary",
    symbol: "gary",
    name: "Gary",
  },
  {
    id: "gas",
    symbol: "gas",
    name: "Gas",
  },
  {
    id: "gasblock",
    symbol: "gsbl",
    name: "GasBlock",
  },
  {
    id: "gas-dao",
    symbol: "gas",
    name: "Gas DAO",
  },
  {
    id: "gasp",
    symbol: "gasp",
    name: "gAsp",
  },
  {
    id: "gastream",
    symbol: "gstrm",
    name: "GaStream",
  },
  {
    id: "gatechain-token",
    symbol: "gt",
    name: "Gate",
  },
  {
    id: "gatenet",
    symbol: "gate",
    name: "GATENet",
  },
  {
    id: "gateway-protocol",
    symbol: "gwp",
    name: "Gateway Protocol",
  },
  {
    id: "gather",
    symbol: "gth",
    name: "Gather",
  },
  {
    id: "gatorswap",
    symbol: "gator",
    name: "GatorSwap",
  },
  {
    id: "gaur-money",
    symbol: "gaur",
    name: "Gaur Money",
  },
  {
    id: "gaur-shares",
    symbol: "gshare",
    name: "Gaur Shares",
  },
  {
    id: "gax-liquidity-token-reward",
    symbol: "gltr",
    name: "GAX Liquidity Token Reward",
  },
  {
    id: "gazetv",
    symbol: "gaze",
    name: "GazeTV",
  },
  {
    id: "gaziantep-fk-fan-token",
    symbol: "gfk",
    name: "Gaziantep FK Fan Token",
  },
  {
    id: "gbox",
    symbol: "gbox",
    name: "GBOX",
  },
  {
    id: "gcn-coin",
    symbol: "gcn",
    name: "GCN Coin",
  },
  {
    id: "gdoge-finance",
    symbol: "gdoge",
    name: "GDOGE Finance",
  },
  {
    id: "gdrt",
    symbol: "gdrt",
    name: "GDRT",
  },
  {
    id: "gear",
    symbol: "gear",
    name: "Gear",
  },
  {
    id: "gearbox",
    symbol: "gear",
    name: "Gearbox",
  },
  {
    id: "gecoin",
    symbol: "gec",
    name: "Gecoin",
  },
  {
    id: "geegoopuzzle",
    symbol: "ggp",
    name: "Geegoopuzzle",
  },
  {
    id: "geek-protocol",
    symbol: "geek",
    name: "Geek Protocol",
  },
  {
    id: "geeq",
    symbol: "geeq",
    name: "GEEQ",
  },
  {
    id: "geist-dai",
    symbol: "gdai",
    name: "Geist Dai",
  },
  {
    id: "geist-eth",
    symbol: "geth",
    name: "Geist ETH",
  },
  {
    id: "geist-finance",
    symbol: "geist",
    name: "Geist Finance",
  },
  {
    id: "geist-ftm",
    symbol: "gftm",
    name: "Geist FTM",
  },
  {
    id: "geist-fusdt",
    symbol: "gfusdt",
    name: "Geist fUSDT",
  },
  {
    id: "geist-usdc",
    symbol: "gusdc",
    name: "Geist USDC",
  },
  {
    id: "geist-wbtc",
    symbol: "gwbtc",
    name: "Geist WBTC",
  },
  {
    id: "gelato",
    symbol: "gel",
    name: "Gelato",
  },
  {
    id: "geld-finance",
    symbol: "geldf",
    name: "GELD Finance",
  },
  {
    id: "gemcave-token",
    symbol: "gems",
    name: "GemCave Token",
  },
  {
    id: "gemdao",
    symbol: "gemdao",
    name: "Gemdao",
  },
  {
    id: "gem-exchange-and-trading",
    symbol: "gxt",
    name: "Gem Exchange and Trading",
  },
  {
    id: "gemguardian",
    symbol: "gemg",
    name: "GemGuardian",
  },
  {
    id: "gemie",
    symbol: "gem",
    name: "Gemie",
  },
  {
    id: "gemini-dollar",
    symbol: "gusd",
    name: "Gemini Dollar",
  },
  {
    id: "gemit-app",
    symbol: "gemit",
    name: "GEMIT.app",
  },
  {
    id: "gemlink",
    symbol: "glink",
    name: "GemLink",
  },
  {
    id: "gempad",
    symbol: "gems",
    name: "GemPad",
  },
  {
    id: "gempay",
    symbol: "gpay",
    name: "GemPay",
  },
  {
    id: "gems-2",
    symbol: "gem",
    name: "Gems",
  },
  {
    id: "gemuni",
    symbol: "geni",
    name: "GemUni",
  },
  {
    id: "gemx",
    symbol: "gemx",
    name: "GEMX",
  },
  {
    id: "genaro-network",
    symbol: "gnx",
    name: "Genaro Network",
  },
  {
    id: "genart",
    symbol: "genart",
    name: "GENART",
  },
  {
    id: "genclerbirligi-fan-token",
    symbol: "gbsk",
    name: "Gençlerbirliği Fan Token",
  },
  {
    id: "gencoin-capital",
    symbol: "gencap",
    name: "GenCoin Capital",
  },
  {
    id: "gene",
    symbol: "gene",
    name: "Gene",
  },
  {
    id: "genebank-token",
    symbol: "gnbt",
    name: "Genebank",
  },
  {
    id: "general-attention-currency",
    symbol: "xac",
    name: "General Attention Currency",
  },
  {
    id: "generation",
    symbol: "gen",
    name: "Generation",
  },
  {
    id: "genes-chain",
    symbol: "genes",
    name: "GENES Chain",
  },
  {
    id: "genesis-defi",
    symbol: "genf",
    name: "Genesis Defi",
  },
  {
    id: "genesis-finance",
    symbol: "gefi",
    name: "Genesis Finance",
  },
  {
    id: "genesis-mana",
    symbol: "mana",
    name: "Genesis Mana",
  },
  {
    id: "genesis-particle",
    symbol: "gp",
    name: "Genesis Particle",
  },
  {
    id: "genesis-pool",
    symbol: "gpool",
    name: "Genesis Pool",
  },
  {
    id: "genesis-shards",
    symbol: "gs",
    name: "Genesis Shards",
  },
  {
    id: "genesis-vision",
    symbol: "gvt",
    name: "Genesis Vision",
  },
  {
    id: "genesis-worlds",
    symbol: "genesis",
    name: "Genesis Worlds",
  },
  {
    id: "genesisx",
    symbol: "xgs",
    name: "GenesisX",
  },
  {
    id: "genesysgo-shadow",
    symbol: "shdw",
    name: "Shadow Token",
  },
  {
    id: "genesys-token",
    symbol: "gsys",
    name: "Genesys Token",
  },
  {
    id: "genexi",
    symbol: "gxi",
    name: "Genexi",
  },
  {
    id: "genie-protocol",
    symbol: "gnp",
    name: "Genie Protocol",
  },
  {
    id: "genius-coin",
    symbol: "genius",
    name: "Genius Coin",
  },
  {
    id: "geniux",
    symbol: "iux",
    name: "GeniuX",
  },
  {
    id: "genix",
    symbol: "genix",
    name: "Genix",
  },
  {
    id: "gennix",
    symbol: "gnnx",
    name: "Gennix",
  },
  {
    id: "genomesdao",
    symbol: "$gene",
    name: "GenomesDAO",
  },
  {
    id: "genopet-ki",
    symbol: "ki",
    name: "Genopets KI",
  },
  {
    id: "genopets",
    symbol: "gene",
    name: "Genopets",
  },
  {
    id: "genshinflokiinu",
    symbol: "gfloki",
    name: "GenshinFlokiInu",
  },
  {
    id: "genshin-nft",
    symbol: "genshin",
    name: "Genshin NFT",
  },
  {
    id: "genshiro",
    symbol: "gens",
    name: "Genshiro",
  },
  {
    id: "gensokishis-metaverse",
    symbol: "mv",
    name: "GensoKishi Metaverse",
  },
  {
    id: "genx",
    symbol: "genx",
    name: "GENX",
  },
  {
    id: "genz-token",
    symbol: "genz",
    name: "GENZ Token",
  },
  {
    id: "geocoin",
    symbol: "geo",
    name: "Geocoin",
  },
  {
    id: "geodb",
    symbol: "geo",
    name: "GeoDB",
  },
  {
    id: "geojam",
    symbol: "jam",
    name: "Geojam",
  },
  {
    id: "geopoly",
    symbol: "geo$",
    name: "Geopoly",
  },
  {
    id: "gera-coin",
    symbol: "gera",
    name: "Gera Coin",
  },
  {
    id: "germany-rabbit-token",
    symbol: "germany",
    name: "Germany Rabbit Token",
  },
  {
    id: "gerowallet",
    symbol: "gero",
    name: "GeroWallet",
  },
  {
    id: "get",
    symbol: "get",
    name: "GET",
  },
  {
    id: "getkicks",
    symbol: "kicks",
    name: "GetKicks",
  },
  {
    id: "get-token",
    symbol: "get",
    name: "GET Protocol",
  },
  {
    id: "geyser",
    symbol: "gysr",
    name: "Geyser",
  },
  {
    id: "geysercoin",
    symbol: "gsr",
    name: "GeyserCoin",
  },
  {
    id: "gforce",
    symbol: "gfce",
    name: "GFORCE",
  },
  {
    id: "gg-coin",
    symbol: "ggc",
    name: "Global Game Coin",
  },
  {
    id: "ggtkn",
    symbol: "ggtkn",
    name: "GGTKN",
  },
  {
    id: "gg-token",
    symbol: "ggtk",
    name: "GG",
  },
  {
    id: "ghospers-game",
    symbol: "ghsp",
    name: "Ghospers Game",
  },
  {
    id: "ghost-by-mcafee",
    symbol: "ghost",
    name: "Ghost",
  },
  {
    id: "ghostface",
    symbol: "ghostface",
    name: "Ghostface",
  },
  {
    id: "ghostmarket",
    symbol: "gm",
    name: "GhostMarket",
  },
  {
    id: "ghost-trader",
    symbol: "gtr",
    name: "Ghost Trader",
  },
  {
    id: "ghoul-token",
    symbol: "ghoul",
    name: "Ghoul",
  },
  {
    id: "giannidoge-esport",
    symbol: "gde",
    name: "GianniDoge Esport",
  },
  {
    id: "gibx-swap",
    symbol: "x",
    name: "GIBX Swap",
  },
  {
    id: "gictrade",
    symbol: "gict",
    name: "GICTrade",
  },
  {
    id: "giddy",
    symbol: "gddy",
    name: "Giddy",
  },
  {
    id: "gif-dao",
    symbol: "gif",
    name: "GIF DAO",
  },
  {
    id: "giftbag",
    symbol: "gbag",
    name: "Giftbag",
  },
  {
    id: "gift-coin",
    symbol: "gift",
    name: "Gift Coin",
  },
  {
    id: "giftedhands",
    symbol: "ghd",
    name: "Giftedhands",
  },
  {
    id: "gifto",
    symbol: "gto",
    name: "Gifto",
  },
  {
    id: "gigaswap",
    symbol: "giga",
    name: "GigaSwap",
  },
  {
    id: "giga-watt-token",
    symbol: "wtt",
    name: "Giga Watt",
  },
  {
    id: "gigecoin",
    symbol: "gig",
    name: "GigEcoin",
  },
  {
    id: "gimmer",
    symbol: "gmr",
    name: "Gimmer",
  },
  {
    id: "ginga-finance",
    symbol: "gin",
    name: "Ginga Finance",
  },
  {
    id: "ginoa",
    symbol: "ginoa",
    name: "Ginoa",
  },
  {
    id: "ginspirit",
    symbol: "ginspirit",
    name: "GinSpirit",
  },
  {
    id: "ginza-network",
    symbol: "ginza",
    name: "Ginza Network",
  },
  {
    id: "giotto",
    symbol: "giotto",
    name: "GIOTTO",
  },
  {
    id: "giresunspor-token",
    symbol: "grs",
    name: "Giresunspor Token",
  },
  {
    id: "gitcoin",
    symbol: "gtc",
    name: "Gitcoin",
  },
  {
    id: "gitshock-finance",
    symbol: "gtfx",
    name: "Gitshock Finance",
  },
  {
    id: "giveth",
    symbol: "giv",
    name: "Giveth",
  },
  {
    id: "givewell-inu",
    symbol: "ginu",
    name: "Givewell Inu",
  },
  {
    id: "givingtoservices-svs",
    symbol: "svs",
    name: "GivingToServices SVS",
  },
  {
    id: "givly-coin",
    symbol: "giv",
    name: "GIV",
  },
  {
    id: "gizadao",
    symbol: "giza",
    name: "GizaDao",
  },
  {
    id: "gld-tokenized-stock-defichain",
    symbol: "dgld",
    name: "SPDR Gold Shares Defichain",
  },
  {
    id: "gleec-coin",
    symbol: "gleec",
    name: "Gleec Coin",
  },
  {
    id: "glex",
    symbol: "glex",
    name: "GLEX",
  },
  {
    id: "glide-finance",
    symbol: "glide",
    name: "Glide Finance",
  },
  {
    id: "glimpse",
    symbol: "glms",
    name: "Glimpse",
  },
  {
    id: "glink-arts-shares",
    symbol: "garts",
    name: "Glink Arts Share",
  },
  {
    id: "glitch-protocol",
    symbol: "glch",
    name: "Glitch Protocol",
  },
  {
    id: "glitter-finance",
    symbol: "xgli",
    name: "Glitter Finance",
  },
  {
    id: "glitzkoin",
    symbol: "gtn",
    name: "GlitzKoin",
  },
  {
    id: "global-aex-token",
    symbol: "gat",
    name: "Global AEX",
  },
  {
    id: "globalboost",
    symbol: "bsty",
    name: "GlobalBoost-Y",
  },
  {
    id: "globalchainz",
    symbol: "gcz",
    name: "GlobalChainZ",
  },
  {
    id: "global-china-cash",
    symbol: "cnc",
    name: "Global China Cash",
  },
  {
    id: "globalcoin",
    symbol: "glc",
    name: "GlobalCoin",
  },
  {
    id: "global-coin-research",
    symbol: "gcr",
    name: "Global Coin Research",
  },
  {
    id: "global-crypto-alliance",
    symbol: "call",
    name: "Global Crypto Alliance",
  },
  {
    id: "global-digital-content",
    symbol: "gdc",
    name: "Global Digital Content",
  },
  {
    id: "global-gaming",
    symbol: "gmng",
    name: "Global Gaming",
  },
  {
    id: "global-human-trust",
    symbol: "ght",
    name: "Global Human Trust",
  },
  {
    id: "global-innovative-solutions",
    symbol: "gsi",
    name: "Global Innovative Solutions",
  },
  {
    id: "global-smart-asset",
    symbol: "gsa",
    name: "Global Smart Asset",
  },
  {
    id: "global-social-chain",
    symbol: "gsc",
    name: "Global Social Chain",
  },
  {
    id: "global-token-cash",
    symbol: "gtc",
    name: "Global Token Cash",
  },
  {
    id: "global-trading-xenocurren",
    symbol: "gtx",
    name: "Global Trading Xenocurrency",
  },
  {
    id: "global-trust-coin",
    symbol: "gtc",
    name: "Global Trust Coin",
  },
  {
    id: "globaltrustfund",
    symbol: "gtf",
    name: "GLOBALTRUSTFUND",
  },
  {
    id: "globe-derivative-exchange",
    symbol: "gdt",
    name: "Globe Derivative Exchange",
  },
  {
    id: "globiance-exchange",
    symbol: "gbex",
    name: "Globiance Exchange",
  },
  {
    id: "glorydoge",
    symbol: "gloryd",
    name: "GloryDoge",
  },
  {
    id: "glory-hero",
    symbol: "gho",
    name: "Glory Hero",
  },
  {
    id: "glosfer-token",
    symbol: "glo",
    name: "Glosfer",
  },
  {
    id: "glouki",
    symbol: "glk",
    name: "Glouki",
  },
  {
    id: "glow",
    symbol: "glow",
    name: "Glow",
  },
  {
    id: "glowv2",
    symbol: "glowv2",
    name: "GlowV2",
  },
  {
    id: "glox-finance",
    symbol: "glox",
    name: "Glox Finance",
  },
  {
    id: "glufco",
    symbol: "glf",
    name: "Glufco",
  },
  {
    id: "glyph-vault-nftx",
    symbol: "glyph",
    name: "GLYPH Vault (NFTX)",
  },
  {
    id: "gm",
    symbol: "gm",
    name: "GM",
  },
  {
    id: "gmcoin",
    symbol: "gm",
    name: "GM Holding",
  },
  {
    id: "gmcoin-2",
    symbol: "gmcoin",
    name: "GMCoin",
  },
  {
    id: "gmd-protocol",
    symbol: "gmd",
    name: "GMD Protocol",
  },
  {
    id: "gm-floki",
    symbol: "gmfloki",
    name: "GM Floki",
  },
  {
    id: "gmsol",
    symbol: "gmsol",
    name: "GMSOL",
  },
  {
    id: "gmt-token",
    symbol: "gmt",
    name: "GMT Token",
  },
  {
    id: "gmx",
    symbol: "gmx",
    name: "GMX",
  },
  {
    id: "gn",
    symbol: "gn",
    name: "GN",
  },
  {
    id: "gnar-token",
    symbol: "gnar",
    name: "GNAR",
  },
  {
    id: "gnft",
    symbol: "gnft",
    name: "GNFT",
  },
  {
    id: "gnome",
    symbol: "$gnome",
    name: "GNOME",
  },
  {
    id: "gnome-mines",
    symbol: "gmines",
    name: "Gnome Mines",
  },
  {
    id: "gnome-mines-token-v2",
    symbol: "gminesv2",
    name: "Gnome Mines Token V2",
  },
  {
    id: "gnosis",
    symbol: "gno",
    name: "Gnosis",
  },
  {
    id: "gny",
    symbol: "gny",
    name: "GNY",
  },
  {
    id: "go2e-otm",
    symbol: "otm",
    name: "GO2E OTM",
  },
  {
    id: "go2e-token",
    symbol: "gte",
    name: "GO2E GTE",
  },
  {
    id: "goal-champion",
    symbol: "gc",
    name: "Goal Champion",
  },
  {
    id: "goal-token",
    symbol: "goal",
    name: "Goal Token",
  },
  {
    id: "goalw",
    symbol: "glw",
    name: "GoalW",
  },
  {
    id: "goat-coin",
    symbol: "goat",
    name: "Goat Coin",
  },
  {
    id: "goat-gang",
    symbol: "ggt",
    name: "Goat Gang",
  },
  {
    id: "goats",
    symbol: "goats",
    name: "GOATS",
  },
  {
    id: "g-o-a-t-token",
    symbol: "g.o.a.t",
    name: "G.O.A.T",
  },
  {
    id: "gobi-labs",
    symbol: "gobi",
    name: "Gobi Labs",
  },
  {
    id: "goblin",
    symbol: "goblin",
    name: "Goblin",
  },
  {
    id: "gobtc",
    symbol: "gobtc",
    name: "goBTC",
  },
  {
    id: "gobyte",
    symbol: "gbx",
    name: "GoByte",
  },
  {
    id: "gochain",
    symbol: "go",
    name: "GoChain",
  },
  {
    id: "gocryptome",
    symbol: "gcme",
    name: "GoCryptoMe",
  },
  {
    id: "gode-chain",
    symbol: "gode",
    name: "Gode Chain",
  },
  {
    id: "gods-and-legends",
    symbol: "gnlr",
    name: "Gods and Legends",
  },
  {
    id: "gods-unchained",
    symbol: "gods",
    name: "Gods Unchained",
  },
  {
    id: "godzilla",
    symbol: "godz",
    name: "Godzilla",
  },
  {
    id: "goeth",
    symbol: "goeth",
    name: "goETH",
  },
  {
    id: "gofit-token",
    symbol: "gof",
    name: "GoFit Token",
  },
  {
    id: "gogocoin",
    symbol: "gogo",
    name: "GOGOcoin",
  },
  {
    id: "gogo-finance",
    symbol: "gogo",
    name: "GOGO Finance",
  },
  {
    id: "gogolcoin",
    symbol: "gol",
    name: "GogolCoin",
  },
  {
    id: "goin",
    symbol: "goin",
    name: "GOIN",
  },
  {
    id: "goku",
    symbol: "goku",
    name: "Goku",
  },
  {
    id: "gokumarket-credit",
    symbol: "gmc",
    name: "GokuMarket Credit",
  },
  {
    id: "golcoin",
    symbol: "golc",
    name: "GOLCOIN",
  },
  {
    id: "gold8",
    symbol: "gold8",
    name: "GOLD8",
  },
  {
    id: "goldario",
    symbol: "gld",
    name: "Goldario",
  },
  {
    id: "goldblocks",
    symbol: "gb",
    name: "GoldBlocks",
  },
  {
    id: "goldcoin",
    symbol: "glc",
    name: "Goldcoin",
  },
  {
    id: "goldefy",
    symbol: "god",
    name: "GoldeFy",
  },
  {
    id: "golden-age",
    symbol: "ga",
    name: "Golden Age",
  },
  {
    id: "golden-ball",
    symbol: "glb",
    name: "Golden Ball",
  },
  {
    id: "golden-banana",
    symbol: "gba",
    name: "Golden Banana",
  },
  {
    id: "goldendiamond9",
    symbol: "g9",
    name: "GoldenDiamond9",
  },
  {
    id: "golden-doge",
    symbol: "gdoge",
    name: "Golden Doge",
  },
  {
    id: "golden-goal",
    symbol: "gdg",
    name: "Golden Goal",
  },
  {
    id: "golden-goose",
    symbol: "gold",
    name: "Golden Goose",
  },
  {
    id: "golden-ratio-coin",
    symbol: "goldr",
    name: "Golden Ratio Coin",
  },
  {
    id: "golden-roots",
    symbol: "gdr",
    name: "Golden Roots",
  },
  {
    id: "golden-token",
    symbol: "gold",
    name: "Golden",
  },
  {
    id: "goldenzone",
    symbol: "gld",
    name: "Goldenzone",
  },
  {
    id: "goldex-token",
    symbol: "gldx",
    name: "Goldex",
  },
  {
    id: "goldfarm",
    symbol: "gold",
    name: "GoldFarm",
  },
  {
    id: "gold-fever-native-gold",
    symbol: "ngl",
    name: "Gold Fever Native Gold",
  },
  {
    id: "goldfinch",
    symbol: "gfi",
    name: "Goldfinch",
  },
  {
    id: "gold-guaranteed-coin",
    symbol: "ggcm",
    name: "Gold Guaranteed Coin",
  },
  {
    id: "goldkash",
    symbol: "xgk",
    name: "GoldKash",
  },
  {
    id: "goldminer",
    symbol: "gm",
    name: "GoldMiner",
  },
  {
    id: "gold-mining-members",
    symbol: "gmm",
    name: "Gold Mining Members",
  },
  {
    id: "goldmint",
    symbol: "mntp",
    name: "Goldmint",
  },
  {
    id: "goldnugget",
    symbol: "ngt",
    name: "Gold Nugget",
  },
  {
    id: "goldpesa-option",
    symbol: "gpo",
    name: "GoldPesa Option",
  },
  {
    id: "gold-retriever",
    symbol: "gldn",
    name: "Gold Retriever",
  },
  {
    id: "gold-rush-finance",
    symbol: "$grush",
    name: "Gold Rush Finance",
  },
  {
    id: "gold-secured-currency",
    symbol: "gsx",
    name: "Gold Secured Currency",
  },
  {
    id: "gold-socialfi-gamefi",
    symbol: "gsg",
    name: "Gold Socialfi GameFi",
  },
  {
    id: "goldstars-coin",
    symbol: "gsc",
    name: "Goldstars Coin",
  },
  {
    id: "golem",
    symbol: "glm",
    name: "Golem",
  },
  {
    id: "golff",
    symbol: "gof",
    name: "Golff",
  },
  {
    id: "golfrochain",
    symbol: "golf",
    name: "Golfrochain",
  },
  {
    id: "golteum",
    symbol: "gltm",
    name: "Golteum",
  },
  {
    id: "gomeat",
    symbol: "gomt",
    name: "GoMeat",
  },
  {
    id: "gomics",
    symbol: "gom",
    name: "Gomics",
  },
  {
    id: "gomoney2",
    symbol: "gom2",
    name: "GoMoney2",
  },
  {
    id: "gondola-finance",
    symbol: "gdl",
    name: "Gondola Finance",
  },
  {
    id: "gonetwork",
    symbol: "got",
    name: "GoNetwork",
  },
  {
    id: "good-bridging",
    symbol: "gb",
    name: "Good Bridging",
  },
  {
    id: "good-dog",
    symbol: "heel",
    name: "Good Dog",
  },
  {
    id: "good-doge",
    symbol: "treat",
    name: "Good Doge",
  },
  {
    id: "good-games-guild",
    symbol: "ggg",
    name: "Good Games Guild",
  },
  {
    id: "good-person-coin",
    symbol: "gpcx",
    name: "Good Person Coin",
  },
  {
    id: "gooeys",
    symbol: "goo",
    name: "Gooeys",
  },
  {
    id: "goofydoge",
    symbol: "goofydoge",
    name: "GoofyDoge",
  },
  {
    id: "google-tokenized-stock-defichain",
    symbol: "dgoogl",
    name: "Google Tokenized Stock Defichain",
  },
  {
    id: "goons-of-balatroon",
    symbol: "gob",
    name: "Goons of Balatroon",
  },
  {
    id: "goose-finance",
    symbol: "egg",
    name: "Goose Finance",
  },
  {
    id: "goosefx",
    symbol: "gofx",
    name: "GooseFX",
  },
  {
    id: "go-out-now",
    symbol: "gon",
    name: "Go Out Now",
  },
  {
    id: "gorgeous",
    symbol: "gorgeous",
    name: "Gorgeous",
  },
  {
    id: "gorilla-diamond",
    symbol: "gdt",
    name: "Gorilla Diamond",
  },
  {
    id: "gorilla-inu",
    symbol: "gorilla inu",
    name: "Gorilla Inu",
  },
  {
    id: "gosh-realm",
    symbol: "gosh",
    name: "GOSH Realm",
  },
  {
    id: "gotem",
    symbol: "gotem",
    name: "gotEM",
  },
  {
    id: "got-guaranteed",
    symbol: "gotg",
    name: "Got Guaranteed",
  },
  {
    id: "gourmetgalaxy",
    symbol: "gum",
    name: "Gourmet Galaxy",
  },
  {
    id: "governance-algo",
    symbol: "galgo",
    name: "Governance Algo",
  },
  {
    id: "governance-ohm",
    symbol: "gohm",
    name: "Governance OHM",
  },
  {
    id: "governance-zil",
    symbol: "gzil",
    name: "governance ZIL",
  },
  {
    id: "governor-dao",
    symbol: "gdao",
    name: "Governor DAO",
  },
  {
    id: "govi",
    symbol: "govi",
    name: "CVI",
  },
  {
    id: "govworld",
    symbol: "gov",
    name: "GovWorld",
  },
  {
    id: "gowithmi",
    symbol: "gmat",
    name: "GoWithMi",
  },
  {
    id: "goztepe-s-k-fan-token",
    symbol: "goz",
    name: "Göztepe S.K. Fan Token",
  },
  {
    id: "gp-coin",
    symbol: "xgp",
    name: "GP Coin",
  },
  {
    id: "gpex",
    symbol: "gpx",
    name: "GPEX",
  },
  {
    id: "gps-ecosystem",
    symbol: "gps",
    name: "GPS Ecosystem",
  },
  {
    id: "gr33n",
    symbol: "build",
    name: "Gr33n",
  },
  {
    id: "grafenocoin-2",
    symbol: "gfnc",
    name: "GrafenoCoin",
  },
  {
    id: "graft-blockchain",
    symbol: "grft",
    name: "Graft Blockchain",
  },
  {
    id: "grail",
    symbol: "grail",
    name: "Grail",
  },
  {
    id: "grain-token",
    symbol: "grain",
    name: "Grain",
  },
  {
    id: "gram",
    symbol: "gram",
    name: "OpenGram",
  },
  {
    id: "grantsville",
    symbol: "gville",
    name: "Grantsville",
  },
  {
    id: "grape-2",
    symbol: "grape",
    name: "Grape Protocol",
  },
  {
    id: "grape-finance",
    symbol: "grape",
    name: "Grape Finance",
  },
  {
    id: "grapefruit-coin",
    symbol: "grpft",
    name: "Grapefruit Coin",
  },
  {
    id: "grape-token",
    symbol: "grape",
    name: "Grape",
  },
  {
    id: "grapevine",
    symbol: "xgrape",
    name: "GrapeVine",
  },
  {
    id: "graphen",
    symbol: "eltg",
    name: "Graphen",
  },
  {
    id: "graphene",
    symbol: "gfn",
    name: "Graphene",
  },
  {
    id: "graphlinq-protocol",
    symbol: "glq",
    name: "GraphLinq Protocol",
  },
  {
    id: "grave",
    symbol: "grve",
    name: "Grave",
  },
  {
    id: "graviocoin",
    symbol: "gio",
    name: "Graviocoin",
  },
  {
    id: "gravitationally-bound-aura",
    symbol: "graviaura",
    name: "Gravitationally Bound AURA",
  },
  {
    id: "graviton",
    symbol: "grav",
    name: "Graviton",
  },
  {
    id: "graviton-zero",
    symbol: "grav",
    name: "Graviton Zero",
  },
  {
    id: "gravitx",
    symbol: "grx",
    name: "GravitX",
  },
  {
    id: "gravity-bridge-dai",
    symbol: "g-dai",
    name: "Gravity Bridge DAI",
  },
  {
    id: "gravity-bridge-tether",
    symbol: "g-usdt",
    name: "Gravity Bridge Tether",
  },
  {
    id: "gravity-bridge-usdc",
    symbol: "g-usdc",
    name: "Gravity Bridge USDC",
  },
  {
    id: "gravity-bridge-wbtc",
    symbol: "g-wbtc",
    name: "Gravity Bridge WBTC",
  },
  {
    id: "gravity-bridge-weth",
    symbol: "g-weth",
    name: "Gravity Bridge WETH",
  },
  {
    id: "gravity-finance",
    symbol: "gfi",
    name: "Gravity Finance",
  },
  {
    id: "grearn",
    symbol: "gst",
    name: "GrEarn",
  },
  {
    id: "great-ape",
    symbol: "greatape",
    name: "Great Ape",
  },
  {
    id: "great-bounty-dealer",
    symbol: "gbd",
    name: "Great Bounty Dealer",
  },
  {
    id: "greatdane",
    symbol: "greatdane",
    name: "GreatDane",
  },
  {
    id: "greed",
    symbol: "$greed",
    name: "Greed",
  },
  {
    id: "greekmythology",
    symbol: "gmt",
    name: "GreekMythology",
  },
  {
    id: "greenair",
    symbol: "green",
    name: "GreenAir",
  },
  {
    id: "green-beli",
    symbol: "grbe",
    name: "Green Beli",
  },
  {
    id: "green-ben",
    symbol: "eben",
    name: "Green Ben",
  },
  {
    id: "green-chart",
    symbol: "green",
    name: "Green Chart",
  },
  {
    id: "green-climate-world",
    symbol: "wgc",
    name: "Green Climate World",
  },
  {
    id: "greencoin",
    symbol: "gre",
    name: "Greencoin",
  },
  {
    id: "green-cycgo",
    symbol: "gct",
    name: "Green CycGo",
  },
  {
    id: "green-dildo-finance",
    symbol: "gdildo",
    name: "Green Dildo Finance",
  },
  {
    id: "green-energy-coin",
    symbol: "gec",
    name: "Green Energy Coin",
  },
  {
    id: "greeneum-network",
    symbol: "green",
    name: "Greeneum Network",
  },
  {
    id: "green-flow",
    symbol: "grc",
    name: "GreenCoin.AI",
  },
  {
    id: "greenfuel",
    symbol: "greenfuel",
    name: "Greenfuel",
  },
  {
    id: "greenheart-cbd",
    symbol: "cbd",
    name: "Greenheart CBD",
  },
  {
    id: "greenhouse",
    symbol: "green",
    name: "Greenhouse",
  },
  {
    id: "green-life-energy",
    symbol: "gnl",
    name: "Green Life Energy",
  },
  {
    id: "green-light",
    symbol: "gl",
    name: "Green Light",
  },
  {
    id: "green-meta",
    symbol: "gmeta",
    name: "Green Meta",
  },
  {
    id: "green-pet-egg",
    symbol: "dfkgreenegg",
    name: "Green Pet Egg",
  },
  {
    id: "green-planet",
    symbol: "gamma",
    name: "Green Planet",
  },
  {
    id: "green-ride-token",
    symbol: "grt",
    name: "Green Ride",
  },
  {
    id: "greens",
    symbol: "greens",
    name: "Greens",
  },
  {
    id: "green-satoshi-token",
    symbol: "gst-sol",
    name: "STEPN Green Satoshi Token on Solana",
  },
  {
    id: "green-satoshi-token-bsc",
    symbol: "gst-bsc",
    name: "STEPN Green Satoshi Token on BSC",
  },
  {
    id: "green-satoshi-token-on-eth",
    symbol: "gst-eth",
    name: "STEPN Green Satoshi Token on ETH",
  },
  {
    id: "green-shiba-inu",
    symbol: "ginux",
    name: "Green Shiba Inu",
  },
  {
    id: "green-star",
    symbol: "grcc",
    name: "Green Star",
  },
  {
    id: "greentek",
    symbol: "gte",
    name: "GreenTek",
  },
  {
    id: "greentrust",
    symbol: "gnt",
    name: "GreenTrust",
  },
  {
    id: "greenworld",
    symbol: "gwd",
    name: "GreenWorld",
  },
  {
    id: "greenzonex",
    symbol: "gzx",
    name: "GreenZoneX",
  },
  {
    id: "greyhound",
    symbol: "greyhound",
    name: "Greyhound",
  },
  {
    id: "grey-pet-egg",
    symbol: "dfkgregg",
    name: "Grey Pet Egg",
  },
  {
    id: "grid",
    symbol: "grid",
    name: "GridPlus [OLD]",
  },
  {
    id: "gridcoin-research",
    symbol: "grc",
    name: "Gridcoin",
  },
  {
    id: "gridzone",
    symbol: "zone",
    name: "GridZone.io",
  },
  {
    id: "griffin-art",
    symbol: "gart",
    name: "Griffin Art",
  },
  {
    id: "griffin-art-ecosystem",
    symbol: "gart",
    name: "Griffin Art Ecosystem",
  },
  {
    id: "griffin-land",
    symbol: "gland",
    name: "Griffin Land",
  },
  {
    id: "grimace-coin",
    symbol: "grimace",
    name: "Grimace Coin",
  },
  {
    id: "grim-evo",
    symbol: "grim evo",
    name: "Grim EVO",
  },
  {
    id: "grimm",
    symbol: "grimm",
    name: "Grimm",
  },
  {
    id: "grimtoken",
    symbol: "grim",
    name: "Grim",
  },
  {
    id: "grin",
    symbol: "grin",
    name: "Grin",
  },
  {
    id: "grinbit",
    symbol: "grbt",
    name: "Grinbit",
  },
  {
    id: "grizzly-honey",
    symbol: "ghny",
    name: "Grizzly Honey",
  },
  {
    id: "grn-grid",
    symbol: "g",
    name: "GRN Grid",
  },
  {
    id: "gro-dao-token",
    symbol: "gro",
    name: "Gro DAO",
  },
  {
    id: "groestlcoin",
    symbol: "grs",
    name: "Groestlcoin",
  },
  {
    id: "grok",
    symbol: "grok",
    name: "Grok",
  },
  {
    id: "grom",
    symbol: "gr",
    name: "GROM",
  },
  {
    id: "groupdao",
    symbol: "gdo",
    name: "GroupDao",
  },
  {
    id: "gro-vault-token",
    symbol: "gvt",
    name: "Gro Vault",
  },
  {
    id: "grove",
    symbol: "gvr",
    name: "Grove",
  },
  {
    id: "growing-fi",
    symbol: "grow",
    name: "Growing.fi",
  },
  {
    id: "growmoon",
    symbol: "gm",
    name: "GrowMoon",
  },
  {
    id: "growth-defi",
    symbol: "xgro",
    name: "GROWTH DeFi",
  },
  {
    id: "grow-token-2",
    symbol: "grow",
    name: "Grow",
  },
  {
    id: "gscarab",
    symbol: "gscarab",
    name: "GScarab",
  },
  {
    id: "gsenetwork",
    symbol: "gse",
    name: "GSENetwork",
  },
  {
    id: "gsmcoin",
    symbol: "gsm",
    name: "GSMcoin",
  },
  {
    id: "gstcoin",
    symbol: "gst",
    name: "GSTCOIN",
  },
  {
    id: "gti-token",
    symbol: "gti",
    name: "GTI Token",
  },
  {
    id: "gton-capital",
    symbol: "gton",
    name: "GTON CAPITAL",
  },
  {
    id: "gtrax",
    symbol: "gtrx",
    name: "GTraX",
  },
  {
    id: "gu",
    symbol: "gu",
    name: "Kugle GU",
  },
  {
    id: "guapcoin",
    symbol: "guap",
    name: "Guapcoin",
  },
  {
    id: "guarded-ether",
    symbol: "geth",
    name: "Guarded Ether",
  },
  {
    id: "guardian-token",
    symbol: "guard",
    name: "Guardian GUARD",
  },
  {
    id: "guider",
    symbol: "gdr",
    name: "Guider",
  },
  {
    id: "guildfi",
    symbol: "gf",
    name: "GuildFi",
  },
  {
    id: "guild-of-guardians",
    symbol: "gog",
    name: "Guild of Guardians",
  },
  {
    id: "guitarswap",
    symbol: "gut",
    name: "GuitarSwap",
  },
  {
    id: "gulden",
    symbol: "munt",
    name: "Munt",
  },
  {
    id: "gulfcoin-2",
    symbol: "gulf",
    name: "GulfCoin",
  },
  {
    id: "guncoin",
    symbol: "gun",
    name: "Guncoin",
  },
  {
    id: "gunstar-metaverse",
    symbol: "gsts",
    name: "Gunstar Metaverse",
  },
  {
    id: "gunstar-metaverse-currency",
    symbol: "gsc",
    name: "Gunstar Metaverse Currency",
  },
  {
    id: "gunthy",
    symbol: "gunthy",
    name: "GUNTHY",
  },
  {
    id: "guss-one",
    symbol: "guss",
    name: "GUSS.ONE",
  },
  {
    id: "guzzler",
    symbol: "gzlr",
    name: "Guzzler",
  },
  {
    id: "gxchain",
    symbol: "gxc",
    name: "GXChain",
  },
  {
    id: "gyen",
    symbol: "gyen",
    name: "GYEN",
  },
  {
    id: "gym-network",
    symbol: "gymnet",
    name: "Gym Network",
  },
  {
    id: "gyro",
    symbol: "gyro",
    name: "Gyro",
  },
  {
    id: "h2finance",
    symbol: "yfih2",
    name: "H2Finance",
  },
  {
    id: "h2o",
    symbol: "h2o",
    name: "H2O",
  },
  {
    id: "h2o-dao",
    symbol: "h2o",
    name: "H2O Dao",
  },
  {
    id: "h2o-securities",
    symbol: "h2on",
    name: "H2O Securities",
  },
  {
    id: "h3ro3s",
    symbol: "h3ro3s",
    name: "H3RO3S",
  },
  {
    id: "habitat",
    symbol: "hbt",
    name: "Habitat",
  },
  {
    id: "habits",
    symbol: "hbx",
    name: "Habits",
  },
  {
    id: "hachiko-charity",
    symbol: "hkc",
    name: "Hachiko Charity",
  },
  {
    id: "hachikoinu",
    symbol: "inu",
    name: "HachikoInu",
  },
  {
    id: "hackenai",
    symbol: "hai",
    name: "Hacken HAI",
  },
  {
    id: "hackerlabs-dao",
    symbol: "hld",
    name: "Hackerlabs DAO",
  },
  {
    id: "hackspace-capital",
    symbol: "hac",
    name: "Hackspace Capital",
  },
  {
    id: "hai-governence-token",
    symbol: "damo",
    name: "Hai DAMO",
  },
  {
    id: "haino-2",
    symbol: "he",
    name: "Haino",
  },
  {
    id: "haki-token",
    symbol: "haki",
    name: "HAKI Token",
  },
  {
    id: "hakka-finance",
    symbol: "hakka",
    name: "Hakka Finance",
  },
  {
    id: "hakuna-metata",
    symbol: "tata",
    name: "HakunaMatata (old)",
  },
  {
    id: "hakuswap",
    symbol: "haku",
    name: "HakuSwap",
  },
  {
    id: "halcyon",
    symbol: "hal",
    name: "Halcyon",
  },
  {
    id: "halfpizza",
    symbol: "piza",
    name: "Half Pizza",
  },
  {
    id: "halloween-crows",
    symbol: "scary",
    name: "Halloween Crows",
  },
  {
    id: "halloween-floki",
    symbol: "floh",
    name: "Halloween Floki",
  },
  {
    id: "halo-coin",
    symbol: "halo",
    name: "Halo Coin",
  },
  {
    id: "halo-network",
    symbol: "ho",
    name: "HALO Network",
  },
  {
    id: "halving-coin",
    symbol: "halv",
    name: "Halving",
  },
  {
    id: "hamdan-coin",
    symbol: "hmc",
    name: "Hamdan Coin",
  },
  {
    id: "hamster",
    symbol: "ham",
    name: "Hamster",
  },
  {
    id: "hanagold-token",
    symbol: "hng",
    name: "HanaGold",
  },
  {
    id: "hanchain",
    symbol: "han",
    name: "HanChain",
  },
  {
    id: "handle-fi",
    symbol: "forex",
    name: "handle.fi",
  },
  {
    id: "handleusd",
    symbol: "fxusd",
    name: "handleUSD",
  },
  {
    id: "handshake",
    symbol: "hns",
    name: "Handshake",
  },
  {
    id: "handy",
    symbol: "handy",
    name: "Handy",
  },
  {
    id: "hanu-yokia",
    symbol: "hanu",
    name: "Hanu Yokia",
  },
  {
    id: "hanzo-inu",
    symbol: "hanzo",
    name: "Hanzo",
  },
  {
    id: "hapi",
    symbol: "hapi",
    name: "HAPI",
  },
  {
    id: "happy-birthday-coin",
    symbol: "hbdc",
    name: "Happy Birthday Coin",
  },
  {
    id: "happyfans",
    symbol: "happy",
    name: "HappyFans",
  },
  {
    id: "happyland",
    symbol: "hpl",
    name: "HappyLand",
  },
  {
    id: "happyland-reward-token",
    symbol: "hpw",
    name: "HappyLand Reward",
  },
  {
    id: "harambe",
    symbol: "harambe",
    name: "Harambe",
  },
  {
    id: "harambe-protocol",
    symbol: "riph",
    name: "Harambe Protocol",
  },
  {
    id: "hara-token",
    symbol: "hart",
    name: "Hara",
  },
  {
    id: "hare",
    symbol: "hare",
    name: "Hare",
  },
  {
    id: "hare-chain",
    symbol: "harec",
    name: "Hare Chain",
  },
  {
    id: "hare-plus",
    symbol: "hare plus",
    name: "Hare Plus",
  },
  {
    id: "hare-token",
    symbol: "hare",
    name: "Hare [OLD]",
  },
  {
    id: "harlequins-fan-token",
    symbol: "quins",
    name: "Harlequins Fan Token",
  },
  {
    id: "harmes-shares",
    symbol: "hshares",
    name: "Hermes Shares",
  },
  {
    id: "harmomized-app",
    symbol: "hmz",
    name: "Harmonized App",
  },
  {
    id: "harmony",
    symbol: "one",
    name: "Harmony",
  },
  {
    id: "harmonycoin",
    symbol: "hmc",
    name: "HarmonyCoin",
  },
  {
    id: "harmonylauncher",
    symbol: "harl",
    name: "HarmonyLauncher",
  },
  {
    id: "harmony-play",
    symbol: "hplay",
    name: "Harmony Play",
  },
  {
    id: "harmony-token",
    symbol: "harm",
    name: "Harmony Token",
  },
  {
    id: "harmonyville",
    symbol: "hville",
    name: "Harmonyville",
  },
  {
    id: "haroldcoin",
    symbol: "hrld",
    name: "Haroldcoin",
  },
  {
    id: "harrypotterobamasonic10inu",
    symbol: "bitcoin",
    name: "HarryPotterObamaSonic10Inu",
  },
  {
    id: "haru",
    symbol: "haru",
    name: "HARU",
  },
  {
    id: "harvest-finance",
    symbol: "farm",
    name: "Harvest Finance",
  },
  {
    id: "hash2o",
    symbol: "h2o",
    name: "Hash2O",
  },
  {
    id: "hashbit",
    symbol: "hbit",
    name: "HashBit",
  },
  {
    id: "hash-bridge-oracle",
    symbol: "hbo",
    name: "Hash Bridge Oracle",
  },
  {
    id: "hashbx",
    symbol: "hbx",
    name: "HashBX",
  },
  {
    id: "hashcoin",
    symbol: "hsc",
    name: "HashCoin",
  },
  {
    id: "hashflow",
    symbol: "hft",
    name: "Hashflow",
  },
  {
    id: "hashgard",
    symbol: "gard",
    name: "Hashgard",
  },
  {
    id: "hashland-coin",
    symbol: "hc",
    name: "HashLand Coin",
  },
  {
    id: "hashmasks",
    symbol: "mask20",
    name: "Hashmasks",
  },
  {
    id: "hashnet-biteco",
    symbol: "hnb",
    name: "HashNet BitEco",
  },
  {
    id: "hashpanda",
    symbol: "panda",
    name: "HashPanda",
  },
  {
    id: "hashrush",
    symbol: "rush",
    name: "HashRush",
  },
  {
    id: "hashshare",
    symbol: "hss",
    name: "Hashshare",
  },
  {
    id: "hashtagger",
    symbol: "mooo",
    name: "Hashtagger",
  },
  {
    id: "hatayspor-token",
    symbol: "hatay",
    name: "Hatayspor Token",
  },
  {
    id: "hatch-dao",
    symbol: "hatch",
    name: "Hatch DAO",
  },
  {
    id: "hatchypocket",
    symbol: "hatchy",
    name: "HatchyPocket",
  },
  {
    id: "hathor",
    symbol: "htr",
    name: "Hathor",
  },
  {
    id: "hati",
    symbol: "hati",
    name: "Hati",
  },
  {
    id: "hat-swap-city",
    symbol: "htc",
    name: "Hat Swap City",
  },
  {
    id: "haven",
    symbol: "xhv",
    name: "Haven",
  },
  {
    id: "havens-nook",
    symbol: "hxn",
    name: "Havens Nook",
  },
  {
    id: "haven-token",
    symbol: "haven",
    name: "Safehaven DeFi",
  },
  {
    id: "havven",
    symbol: "snx",
    name: "Synthetix Network",
  },
  {
    id: "havy-2",
    symbol: "havy",
    name: "Havy",
  },
  {
    id: "hawkdex",
    symbol: "hawk",
    name: "HawkDex",
  },
  {
    id: "hawksight",
    symbol: "hawk",
    name: "Hawksight",
  },
  {
    id: "hayfever",
    symbol: "hay",
    name: "Hayfever",
  },
  {
    id: "hbarpad",
    symbol: "hbarp",
    name: "HbarPad",
  },
  {
    id: "hbarx",
    symbol: "hbarx",
    name: "HBARX",
  },
  {
    id: "hdpunk-vault-nftx",
    symbol: "hdpunk",
    name: "HDPUNK Vault (NFTX)",
  },
  {
    id: "headline",
    symbol: "hdl",
    name: "Headline",
  },
  {
    id: "headstarter",
    symbol: "hst",
    name: "HeadStarter",
  },
  {
    id: "healing-potion",
    symbol: "hppot",
    name: "Healing Potion",
  },
  {
    id: "healthchainus",
    symbol: "hcut",
    name: "HealthChainUS",
  },
  {
    id: "heal-the-world",
    symbol: "heal",
    name: "Heal The World",
  },
  {
    id: "healthfi-app",
    symbol: "hefi",
    name: "HealthFi App",
  },
  {
    id: "healthify",
    symbol: "htf",
    name: "Healthify",
  },
  {
    id: "health-potion",
    symbol: "hep",
    name: "Health Potion",
  },
  {
    id: "hearn-fi",
    symbol: "hearn",
    name: "Hearn.fi",
  },
  {
    id: "heartnumber",
    symbol: "htn",
    name: "Heart Number",
  },
  {
    id: "heart-rate",
    symbol: "htr",
    name: "Heart Rate",
  },
  {
    id: "hearts",
    symbol: "heart",
    name: "Hearts",
  },
  {
    id: "heavenland-hto",
    symbol: "hto",
    name: "Heavenland HTO",
  },
  {
    id: "hebeblock",
    symbol: "hebe",
    name: "HebeBlock",
  },
  {
    id: "hecofi",
    symbol: "hfi",
    name: "HecoFi",
  },
  {
    id: "heco-origin-token",
    symbol: "hogt",
    name: "Heco Origin",
  },
  {
    id: "heco-peg-bnb",
    symbol: "bnb",
    name: "Heco-Peg Binance Coin",
  },
  {
    id: "heco-peg-xrp",
    symbol: "xrp",
    name: "Heco-Peg XRP",
  },
  {
    id: "hectagon",
    symbol: "hecta",
    name: "Hectagon",
  },
  {
    id: "hector-dao",
    symbol: "hec",
    name: "Hector Network",
  },
  {
    id: "hedera-hashgraph",
    symbol: "hbar",
    name: "Hedera",
  },
  {
    id: "hedgehog",
    symbol: "hedgehog",
    name: "Hedgehog",
  },
  {
    id: "hedgepay",
    symbol: "hpay",
    name: "HedgePay",
  },
  {
    id: "hedge-protocol",
    symbol: "hdg",
    name: "Hedge Protocol",
  },
  {
    id: "hedget",
    symbol: "hget",
    name: "Hedget",
  },
  {
    id: "hedgetrade",
    symbol: "hedg",
    name: "HedgeTrade",
  },
  {
    id: "hedge-usd",
    symbol: "ush",
    name: "Hedge USD",
  },
  {
    id: "hedpay",
    symbol: "hdp.ф",
    name: "HEdpAY",
  },
  {
    id: "hedron",
    symbol: "hdrn",
    name: "Hedron",
  },
  {
    id: "hedron-ethw",
    symbol: "hdrn",
    name: "Hedron ETHW",
  },
  {
    id: "hegic",
    symbol: "hegic",
    name: "Hegic",
  },
  {
    id: "helena",
    symbol: "helena",
    name: "Helena Financial",
  },
  {
    id: "hel-games",
    symbol: "hel",
    name: "Hel Games",
  },
  {
    id: "helicopter-finance",
    symbol: "copter",
    name: "Helicopter Finance",
  },
  {
    id: "helio-protocol-hay",
    symbol: "hay",
    name: "Destablecoin HAY",
  },
  {
    id: "helium",
    symbol: "hnt",
    name: "Helium",
  },
  {
    id: "helkin",
    symbol: "hk",
    name: "Helkin",
  },
  {
    id: "helleniccoin",
    symbol: "hnc",
    name: "HNC Coin",
  },
  {
    id: "hell-hounds",
    symbol: "soul",
    name: "HELL HOUNDS",
  },
  {
    id: "hellmoon",
    symbol: "hmoon",
    name: "HELLMOON",
  },
  {
    id: "hello-art",
    symbol: "htt",
    name: "Hello Art",
  },
  {
    id: "hello-labs",
    symbol: "hello",
    name: "HELLO",
  },
  {
    id: "hellsing-inu",
    symbol: "hellsing",
    name: "Hellsing Inu",
  },
  {
    id: "helmet-insure",
    symbol: "helmet",
    name: "Helmet Insure",
  },
  {
    id: "help-coin",
    symbol: "hlp",
    name: "HLP",
  },
  {
    id: "helper-search-token",
    symbol: "hsn",
    name: "Helper Search",
  },
  {
    id: "helpico",
    symbol: "help",
    name: "Helpico",
  },
  {
    id: "helpkidz-coin",
    symbol: "hkc",
    name: "HelpKidz Coin",
  },
  {
    id: "helpseed",
    symbol: "helps",
    name: "HelpSeed",
  },
  {
    id: "help-the-homeless-coin",
    symbol: "hth",
    name: "Help The Homeless Coin",
  },
  {
    id: "hempcoin-thc",
    symbol: "thc",
    name: "Hempcoin",
  },
  {
    id: "heptafranc",
    symbol: "hptf",
    name: "HEPTAFRANC",
  },
  {
    id: "hera-finance",
    symbol: "hera",
    name: "Hera Finance",
  },
  {
    id: "herbalist-token",
    symbol: "herb",
    name: "Herbalist",
  },
  {
    id: "herbee",
    symbol: "bee",
    name: "Herbee",
  },
  {
    id: "heres",
    symbol: "hrs",
    name: "Heres",
  },
  {
    id: "herity-network",
    symbol: "her",
    name: "Herity Network",
  },
  {
    id: "hermes",
    symbol: "hermes",
    name: "HERMES",
  },
  {
    id: "hermes-protocol",
    symbol: "hermes",
    name: "Hermes Protocol",
  },
  {
    id: "hermez-network-token",
    symbol: "hez",
    name: "Hermez Network",
  },
  {
    id: "hero",
    symbol: "hero",
    name: "HERO",
  },
  {
    id: "hero-arena",
    symbol: "hera",
    name: "Hero Arena",
  },
  {
    id: "hero-blaze-three-kingdoms",
    symbol: "mudol2",
    name: "Hero Blaze: Three Kingdoms",
  },
  {
    id: "herobook",
    symbol: "hbg",
    name: "HeroBook",
  },
  {
    id: "hero-cat-key",
    symbol: "hck",
    name: "Hero Cat Key",
  },
  {
    id: "hero-cat-token",
    symbol: "hct",
    name: "Hero Cat",
  },
  {
    id: "herocoin",
    symbol: "play",
    name: "HEROcoin",
  },
  {
    id: "heroeschained",
    symbol: "hec",
    name: "HeroesChained",
  },
  {
    id: "heroes-empires",
    symbol: "he",
    name: "Heroes & Empires",
  },
  {
    id: "heroes-of-nft",
    symbol: "hon",
    name: "Heroes of NFT",
  },
  {
    id: "hero-essence",
    symbol: "hes",
    name: "Hero Essence",
  },
  {
    id: "heroes-td",
    symbol: "htd",
    name: "Heroes TD",
  },
  {
    id: "heroestd-cgc",
    symbol: "cgc",
    name: "HeroesTD CGC",
  },
  {
    id: "herofi",
    symbol: "heroegg",
    name: "HeroFi",
  },
  {
    id: "herofi-token-2",
    symbol: "rofi",
    name: "HeroFi ROFI",
  },
  {
    id: "hero-inu",
    symbol: "heros",
    name: "Heros",
  },
  {
    id: "heropark",
    symbol: "hp",
    name: "HeroPark",
  },
  {
    id: "hero-token",
    symbol: "raise",
    name: "Raise",
  },
  {
    id: "heroverse",
    symbol: "her",
    name: "HeroVerse",
  },
  {
    id: "hertz-network",
    symbol: "htz",
    name: "Hertz Network",
  },
  {
    id: "heruka-tsangnyon",
    symbol: "tsangnyon",
    name: "HERUKA TSANGNYON",
  },
  {
    id: "herum",
    symbol: "ram",
    name: "Herum",
  },
  {
    id: "hesman-shard",
    symbol: "hes",
    name: "Hesman Shard",
  },
  {
    id: "hex",
    symbol: "hex",
    name: "HEX",
  },
  {
    id: "hex-ethw",
    symbol: "hex",
    name: "HEX ETHW",
  },
  {
    id: "hex-money",
    symbol: "hxy",
    name: "HXY Money",
  },
  {
    id: "hey",
    symbol: "hey",
    name: "Hey",
  },
  {
    id: "hiazuki",
    symbol: "hiazuki",
    name: "hiAZUKI",
  },
  {
    id: "hibayc",
    symbol: "hibayc",
    name: "hiBAYC",
  },
  {
    id: "hibiki-finance",
    symbol: "hibiki",
    name: "Hibiki Finance",
  },
  {
    id: "hiblocks",
    symbol: "hibs",
    name: "Hiblocks",
  },
  {
    id: "hic-et-nunc-dao",
    symbol: "hdao",
    name: "Hic et nunc DAO",
  },
  {
    id: "hiclonex",
    symbol: "hiclonex",
    name: "hiCLONEX",
  },
  {
    id: "hicoin",
    symbol: "xhi",
    name: "HiCoin",
  },
  {
    id: "hicoolcats",
    symbol: "hicoolcats",
    name: "hiCOOLCATS",
  },
  {
    id: "hidden-coin",
    symbol: "hdn",
    name: "Hidden Coin",
  },
  {
    id: "hideous-coin",
    symbol: "hideous",
    name: "Hideous Finance",
  },
  {
    id: "hidigital-btc",
    symbol: "hdbtc",
    name: "Hidigital btc",
  },
  {
    id: "hi-dollar",
    symbol: "hi",
    name: "hi Dollar",
  },
  {
    id: "hidoodles",
    symbol: "hidoodles",
    name: "hiDOODLES",
  },
  {
    id: "hiens3",
    symbol: "hiens3",
    name: "hiENS3",
  },
  {
    id: "hiens4",
    symbol: "hiens4",
    name: "hiENS4",
  },
  {
    id: "hierocoin",
    symbol: "bar",
    name: "Hierocoin",
  },
  {
    id: "hifidenza",
    symbol: "hifidenza",
    name: "hiFIDENZA",
  },
  {
    id: "hifi-gaming-society",
    symbol: "hifi",
    name: "HiFi Gaming Society",
  },
  {
    id: "hifluf",
    symbol: "hifluf",
    name: "hiFLUF",
  },
  {
    id: "higazers",
    symbol: "higazers",
    name: "hiGAZERS",
  },
  {
    id: "highest-yield-savings-service",
    symbol: "hyss",
    name: "Highest Yield Savings Service",
  },
  {
    id: "high-performance-blockchain",
    symbol: "hpb",
    name: "High Performance Blockchain",
  },
  {
    id: "high-roller-hippo-clique",
    symbol: "roll",
    name: "High Roller Hippo Clique",
  },
  {
    id: "highstreet",
    symbol: "high",
    name: "Highstreet",
  },
  {
    id: "hillstone",
    symbol: "hsf",
    name: "Hillstone Finance",
  },
  {
    id: "himalayan-cat-coin",
    symbol: "hima",
    name: "Himalayan Cat Coin",
  },
  {
    id: "himayc",
    symbol: "himayc",
    name: "hiMAYC",
  },
  {
    id: "himeebits",
    symbol: "himeebits",
    name: "hiMEEBITS",
  },
  {
    id: "himo-world",
    symbol: "himo",
    name: "Himo World",
  },
  {
    id: "hina-inu",
    symbol: "hina",
    name: "Hina Inu",
  },
  {
    id: "hintchain",
    symbol: "hint",
    name: "Hintchain",
  },
  {
    id: "hiod",
    symbol: "hiod",
    name: "hiOD",
  },
  {
    id: "hiodbs",
    symbol: "hiodbs",
    name: "hiODBS",
  },
  {
    id: "hipenguins",
    symbol: "hipenguins",
    name: "hiPENGUINS",
  },
  {
    id: "hippo-coin",
    symbol: "$hippo",
    name: "Hippo Coin",
  },
  {
    id: "hippo-inu",
    symbol: "hippo",
    name: "Hippo Inu",
  },
  {
    id: "hippopotamus",
    symbol: "hpo",
    name: "Hippo Wallet",
  },
  {
    id: "hippo-token",
    symbol: "hip",
    name: "Hippo",
  },
  {
    id: "hippowswap",
    symbol: "hswap",
    name: "HippowSwap",
  },
  {
    id: "hipunks",
    symbol: "hipunks",
    name: "hiPunks",
  },
  {
    id: "hiram",
    symbol: "hiram",
    name: "Hiram",
  },
  {
    id: "hiroki",
    symbol: "hiro",
    name: "Hiroki",
  },
  {
    id: "hisand33",
    symbol: "hisand33",
    name: "hiSAND33",
  },
  {
    id: "hisquiggle",
    symbol: "hisquiggle",
    name: "hiSQUIGGLE",
  },
  {
    id: "historia",
    symbol: "hta",
    name: "Historia",
  },
  {
    id: "historydao",
    symbol: "hao",
    name: "HistoryDAO",
  },
  {
    id: "hitbtc-token",
    symbol: "hit",
    name: "HitBTC",
  },
  {
    id: "hitchain",
    symbol: "hit",
    name: "HitChain",
  },
  {
    id: "hitop",
    symbol: "hitop",
    name: "Hitop",
  },
  {
    id: "hive",
    symbol: "hive",
    name: "Hive",
  },
  {
    id: "hive_dollar",
    symbol: "hbd",
    name: "Hive Dollar",
  },
  {
    id: "hive-investments-honey",
    symbol: "hny",
    name: "Hive.Investments HONEY",
  },
  {
    id: "hivemapper",
    symbol: "honey",
    name: "Hivemapper",
  },
  {
    id: "hiveterminal",
    symbol: "hvn",
    name: "Hiveterminal",
  },
  {
    id: "hive-vault",
    symbol: "hiv",
    name: "Hive Vault",
  },
  {
    id: "hk-coin",
    symbol: "hkc",
    name: "HK Coin",
  },
  {
    id: "hnb-protocol",
    symbol: "hnb",
    name: "HNB Protocol",
  },
  {
    id: "hnk-orijent-1919-token",
    symbol: "ori",
    name: "HNK Orijent 1919",
  },
  {
    id: "hoard",
    symbol: "hrd",
    name: "Hoard",
  },
  {
    id: "hobbs-networking",
    symbol: "hnw",
    name: "Hobbs Networking",
  },
  {
    id: "hobonickels",
    symbol: "hbn",
    name: "Hobonickels",
  },
  {
    id: "hodlassets",
    symbol: "hodl",
    name: "HodlAssets",
  },
  {
    id: "hodlcoin",
    symbol: "hodl",
    name: "HOdlcoin",
  },
  {
    id: "hodl-eth",
    symbol: "heth",
    name: "Hodl ETH",
  },
  {
    id: "hodl-finance",
    symbol: "hft",
    name: "Hodl Finance",
  },
  {
    id: "hodl-token",
    symbol: "hodl",
    name: "HODL",
  },
  {
    id: "hodooi-com",
    symbol: "hod",
    name: "HoDooi.com",
  },
  {
    id: "hoge-finance",
    symbol: "hoge",
    name: "Hoge Finance",
  },
  {
    id: "hoichi",
    symbol: "hoichi",
    name: "Hoichi",
  },
  {
    id: "hokkaidu-inu",
    symbol: "hokk",
    name: "Hokkaido Inu",
  },
  {
    id: "hold2earn",
    symbol: "h2e",
    name: "Hold2Earn",
  },
  {
    id: "holdex-finance",
    symbol: "holdex",
    name: "Holdex Finance",
  },
  {
    id: "holdr",
    symbol: "hldr",
    name: "Holdr",
  },
  {
    id: "holiday-token",
    symbol: "hol",
    name: "Holiday",
  },
  {
    id: "hollaex-token",
    symbol: "xht",
    name: "HollaEx",
  },
  {
    id: "hollygold",
    symbol: "hgold",
    name: "HollyGold",
  },
  {
    id: "holoclear",
    symbol: "holo",
    name: "HOLOCLEAR",
  },
  {
    id: "hololoot",
    symbol: "hol",
    name: "Hololoot",
  },
  {
    id: "holonus",
    symbol: "hln",
    name: "Holonus",
  },
  {
    id: "holoride",
    symbol: "ride",
    name: "holoride",
  },
  {
    id: "holotoken",
    symbol: "hot",
    name: "Holo",
  },
  {
    id: "holydoge",
    symbol: "hdoge",
    name: "HolyDoge",
  },
  {
    id: "holygrail",
    symbol: "hly",
    name: "HolyGrail",
  },
  {
    id: "holygrails-io",
    symbol: "holy",
    name: "HolyGrails.io",
  },
  {
    id: "holyheld-2",
    symbol: "move",
    name: "Mover",
  },
  {
    id: "holy-trinity",
    symbol: "holy",
    name: "Holy Trinity",
  },
  {
    id: "home-coin",
    symbol: "home",
    name: "Home Coin",
  },
  {
    id: "homeros",
    symbol: "hmr",
    name: "Homeros",
  },
  {
    id: "homerun",
    symbol: "hmrn",
    name: "Homerun",
  },
  {
    id: "hom-token",
    symbol: "homt",
    name: "HOMT",
  },
  {
    id: "hondaiscoin",
    symbol: "hndc",
    name: "HondaisCoin",
  },
  {
    id: "honest-mining",
    symbol: "hnst",
    name: "Honest",
  },
  {
    id: "honey",
    symbol: "hny",
    name: "Honey",
  },
  {
    id: "honey-badger",
    symbol: "honeybadger",
    name: "Honey Badger",
  },
  {
    id: "honeybee",
    symbol: "bee",
    name: "HoneyBee",
  },
  {
    id: "honeycomb-2",
    symbol: "honey",
    name: "Honeycomb",
  },
  {
    id: "honey-deluxe",
    symbol: "honeyd",
    name: "Honey Deluxe",
  },
  {
    id: "honeyfarm-finance",
    symbol: "honey",
    name: "HoneyFarm Finance",
  },
  {
    id: "honey-finance",
    symbol: "honey",
    name: "Honey Finance",
  },
  {
    id: "honeymoon-token",
    symbol: "moon",
    name: "HoneyMOON",
  },
  {
    id: "honeypad",
    symbol: "honey",
    name: "HONEYPAD",
  },
  {
    id: "honey-pot-beekeepers",
    symbol: "honey",
    name: "Honey Pot BeeKeepers",
  },
  {
    id: "hono",
    symbol: "hono",
    name: "Hono",
  },
  {
    id: "honor-token",
    symbol: "honor",
    name: "Honor",
  },
  {
    id: "honor-world-token",
    symbol: "hwt",
    name: "Honor World Token",
  },
  {
    id: "hooked-protocol",
    symbol: "hook",
    name: "Hooked Protocol",
  },
  {
    id: "hoop",
    symbol: "hoop",
    name: "Primal Hoop",
  },
  {
    id: "hoo-token",
    symbol: "hoo",
    name: "Hoo",
  },
  {
    id: "hope-galaxy",
    symbol: "hope",
    name: "HOPE Galaxy",
  },
  {
    id: "hope-token",
    symbol: "hope",
    name: "Hope",
  },
  {
    id: "hoppers-game",
    symbol: "fly",
    name: "Hoppers Game",
  },
  {
    id: "hop-protocol",
    symbol: "hop",
    name: "Hop Protocol",
  },
  {
    id: "hoppy",
    symbol: "hop",
    name: "HOPPY",
  },
  {
    id: "hopr",
    symbol: "hopr",
    name: "HOPR",
  },
  {
    id: "hoqu",
    symbol: "hqx",
    name: "HOQU",
  },
  {
    id: "hord",
    symbol: "hord",
    name: "Hord",
  },
  {
    id: "horde",
    symbol: "hor",
    name: "Last Horde",
  },
  {
    id: "horde-token",
    symbol: "$horde",
    name: "Horde",
  },
  {
    id: "horgi",
    symbol: "horgi",
    name: "Horgi",
  },
  {
    id: "horizondollar",
    symbol: "hzd",
    name: "Horizon Dollar",
  },
  {
    id: "horizon-protocol",
    symbol: "hzn",
    name: "Horizon Protocol",
  },
  {
    id: "horseafi",
    symbol: "horsea",
    name: "HorseaFi",
  },
  {
    id: "horsedrace",
    symbol: "horsedrace",
    name: "HorseDrace",
  },
  {
    id: "horuspay",
    symbol: "horus",
    name: "HorusPay",
  },
  {
    id: "hosky",
    symbol: "hosky",
    name: "Hosky",
  },
  {
    id: "hotbit-token",
    symbol: "htb",
    name: "Hotbit",
  },
  {
    id: "hot-cross",
    symbol: "hotcross",
    name: "Hot Cross",
  },
  {
    id: "hot-doge",
    symbol: "hotdoge",
    name: "HotDoge [OLD]",
  },
  {
    id: "hotdollars-token",
    symbol: "hds",
    name: "HotDollars",
  },
  {
    id: "hotelium",
    symbol: "htl",
    name: "Hotelium",
  },
  {
    id: "hotmoon",
    symbol: "hotmoon",
    name: "HotMoon",
  },
  {
    id: "hotzilla",
    symbol: "hotzilla",
    name: "HotZilla",
  },
  {
    id: "hound",
    symbol: "hound",
    name: "Hound",
  },
  {
    id: "hourglass",
    symbol: "wait",
    name: "Hourglass",
  },
  {
    id: "house-of-frenchies",
    symbol: "hofr",
    name: "House of Frenchies",
  },
  {
    id: "houston-token",
    symbol: "hou",
    name: "Houston Token",
  },
  {
    id: "howdoo",
    symbol: "udoo",
    name: "Hyprr",
  },
  {
    id: "howl-city",
    symbol: "hwl",
    name: "Howl City",
  },
  {
    id: "hrdgcoin",
    symbol: "hrdg",
    name: "HRDGCOIN",
  },
  {
    id: "hshare",
    symbol: "hc",
    name: "HyperCash",
  },
  {
    id: "h-space-metaverse",
    symbol: "hksm",
    name: "H-Space Metaverse",
  },
  {
    id: "hsuite",
    symbol: "hsuite",
    name: "HbarSuite",
  },
  {
    id: "htm",
    symbol: "htm",
    name: "HTM",
  },
  {
    id: "htmlcoin",
    symbol: "html",
    name: "HTMLCOIN",
  },
  {
    id: "htmoon2-0",
    symbol: "htmoon2.0",
    name: "HTMOON2.0",
  },
  {
    id: "hubble",
    symbol: "hbb",
    name: "Hubble",
  },
  {
    id: "hubcoin-2",
    symbol: "hub",
    name: "HubCoin",
  },
  {
    id: "hubgame",
    symbol: "hub",
    name: "HubGame",
  },
  {
    id: "hubin-network",
    symbol: "hbn",
    name: "Hubin Network",
  },
  {
    id: "hub-token",
    symbol: "hub",
    name: "Hub",
  },
  {
    id: "huckleberry",
    symbol: "finn",
    name: "Huckleberry",
  },
  {
    id: "huckleberry-inu",
    symbol: "hkby",
    name: "Huckleberry Inu",
  },
  {
    id: "hudi",
    symbol: "hudi",
    name: "Hudi",
  },
  {
    id: "hughug-coin",
    symbol: "hghg",
    name: "HUGHUG",
  },
  {
    id: "hugo-finance",
    symbol: "hugo",
    name: "Hugo Game",
  },
  {
    id: "huh",
    symbol: "huh",
    name: "HUH",
  },
  {
    id: "hulk-inu",
    symbol: "hulk",
    name: "Hulk Inu",
  },
  {
    id: "humandao",
    symbol: "hdao",
    name: "humanDAO",
  },
  {
    id: "humaniq",
    symbol: "hmq",
    name: "Humaniq",
  },
  {
    id: "humanize",
    symbol: "$hmt",
    name: "Humanize",
  },
  {
    id: "human-protocol",
    symbol: "hmt",
    name: "HUMAN Protocol",
  },
  {
    id: "humans-ai",
    symbol: "heart",
    name: "Humans.ai",
  },
  {
    id: "humanscape",
    symbol: "hum",
    name: "Humanscape",
  },
  {
    id: "human-world",
    symbol: "ssap",
    name: "Human World",
  },
  {
    id: "hummingbird-egg-token",
    symbol: "hegg",
    name: "Hummingbird Egg",
  },
  {
    id: "hummingbird-finance",
    symbol: "hmng",
    name: "Hummingbird Finance",
  },
  {
    id: "hummingbot",
    symbol: "hbot",
    name: "Hummingbot",
  },
  {
    id: "hummus",
    symbol: "hum",
    name: "Hummus",
  },
  {
    id: "hundred-finance",
    symbol: "hnd",
    name: "Hundred Finance",
  },
  {
    id: "hungarian-vizsla-inu",
    symbol: "hvi",
    name: "Hungarian Vizsla Inu",
  },
  {
    id: "hunger-token",
    symbol: "hunger",
    name: "Hunger",
  },
  {
    id: "hungrybear",
    symbol: "hungry",
    name: "HungryBear",
  },
  {
    id: "hungry-bees",
    symbol: "hbee",
    name: "Hungry Bees",
  },
  {
    id: "hunny-love-token",
    symbol: "love",
    name: "HunnyDAO",
  },
  {
    id: "hunter",
    symbol: "hntr",
    name: "Hunter",
  },
  {
    id: "hunter-crypto-coin",
    symbol: "hcc",
    name: "Hunter Crypto Coin",
  },
  {
    id: "hunter-diamond",
    symbol: "hunt",
    name: "Hunter Diamond",
  },
  {
    id: "hunt-token",
    symbol: "hunt",
    name: "Hunt",
  },
  {
    id: "huny",
    symbol: "huny",
    name: "Huny",
  },
  {
    id: "huobi-bitcoin-cash",
    symbol: "hbch",
    name: "Huobi Bitcoin Cash",
  },
  {
    id: "huobi-btc",
    symbol: "hbtc",
    name: "Huobi BTC",
  },
  {
    id: "huobi-ethereum",
    symbol: "heth",
    name: "Huobi Ethereum",
  },
  {
    id: "huobi-fil",
    symbol: "hfil",
    name: "Huobi Fil",
  },
  {
    id: "huobi-litecoin",
    symbol: "hltc",
    name: "Huobi Litecoin",
  },
  {
    id: "huobi-polkadot",
    symbol: "hdot",
    name: "Huobi Polkadot",
  },
  {
    id: "huobi-pool-token",
    symbol: "hpt",
    name: "Huobi Pool",
  },
  {
    id: "huobi-token",
    symbol: "ht",
    name: "Huobi",
  },
  {
    id: "hupayx",
    symbol: "hpx",
    name: "HUPAYX",
  },
  {
    id: "hurify",
    symbol: "hur",
    name: "Hurify",
  },
  {
    id: "hurrian-network",
    symbol: "mld",
    name: "Hurrian Network",
  },
  {
    id: "hurricane-nft",
    symbol: "nhct",
    name: "Hurricane NFT",
  },
  {
    id: "hurricaneswap-token",
    symbol: "hct",
    name: "HurricaneSwap",
  },
  {
    id: "husd",
    symbol: "husd",
    name: "HUSD",
  },
  {
    id: "hush",
    symbol: "hush",
    name: "Hush",
  },
  {
    id: "husky",
    symbol: "husky",
    name: "Husky",
  },
  {
    id: "husky-avax",
    symbol: "husky",
    name: "Husky AVAX",
  },
  {
    id: "husky-brother",
    symbol: "husky",
    name: "Husky Brother",
  },
  {
    id: "huskyshiba",
    symbol: "hshiba",
    name: "HuskyShiba",
  },
  {
    id: "husky-vc",
    symbol: "husky",
    name: "Husky VC",
  },
  {
    id: "hxro",
    symbol: "hxro",
    name: "Hxro",
  },
  {
    id: "hybrid-bank-cash",
    symbol: "hbc",
    name: "Hybrid Bank Cash",
  },
  {
    id: "hybrix",
    symbol: "hy",
    name: "Hybrix",
  },
  {
    id: "hycon",
    symbol: "hyc",
    name: "Hycon",
  },
  {
    id: "hydra",
    symbol: "hydra",
    name: "Hydra",
  },
  {
    id: "hydranet",
    symbol: "hdx",
    name: "Hydranet",
  },
  {
    id: "hydraverse",
    symbol: "hdv",
    name: "Hydraverse",
  },
  {
    id: "hydro",
    symbol: "hydro",
    name: "Hydro",
  },
  {
    id: "hydrolink",
    symbol: "hlnk",
    name: "HydroLink",
  },
  {
    id: "hydro-protocol",
    symbol: "hot",
    name: "Hydro Protocol",
  },
  {
    id: "hygenercoin",
    symbol: "hg",
    name: "Hygenercoin",
  },
  {
    id: "hymnode",
    symbol: "hnt",
    name: "Hymnode",
  },
  {
    id: "hyperalloy",
    symbol: "alloy",
    name: "HyperAlloy",
  },
  {
    id: "hypercent",
    symbol: "hype",
    name: "Hypercent",
  },
  {
    id: "hyperchain",
    symbol: "snc",
    name: "Hyper Chain",
  },
  {
    id: "hyperchain-2",
    symbol: "hyp",
    name: "Hyperchain",
  },
  {
    id: "hyperchainx",
    symbol: "hyper",
    name: "HyperChainX",
  },
  {
    id: "hyperdao",
    symbol: "hdao",
    name: "HyperDAO",
  },
  {
    id: "hyper-deflate",
    symbol: "hdfl",
    name: "Hyper Deflate",
  },
  {
    id: "hyper-finance",
    symbol: "hyfi",
    name: "Hyper Finance",
  },
  {
    id: "hyperonchain",
    symbol: "hpn",
    name: "HyperonChain",
  },
  {
    id: "hyperone",
    symbol: "hot",
    name: "HyperOne",
  },
  {
    id: "hyperquant",
    symbol: "hqt",
    name: "HyperQuant",
  },
  {
    id: "hyperrun",
    symbol: "hyperr",
    name: "HyperRun",
  },
  {
    id: "hypersign-identity-token",
    symbol: "hid",
    name: "Hypersign Identity",
  },
  {
    id: "hyperstake",
    symbol: "hyp",
    name: "Element",
  },
  {
    id: "hyperverse",
    symbol: "hvt",
    name: "HyperVerse",
  },
  {
    id: "hyruleswap",
    symbol: "rupee",
    name: "HyruleSwap",
  },
  {
    id: "hyve",
    symbol: "hyve",
    name: "Hyve",
  },
  {
    id: "hzm-coin",
    symbol: "hzm",
    name: "HZM Coin",
  },
  {
    id: "i0coin",
    symbol: "i0c",
    name: "I0Coin",
  },
  {
    id: "i9-coin",
    symbol: "i9c",
    name: "i9 Coin",
  },
  {
    id: "i9x-coin",
    symbol: "i9x",
    name: "i9X Coin",
  },
  {
    id: "iab",
    symbol: "iab",
    name: "IAB",
  },
  {
    id: "iagon",
    symbol: "iag",
    name: "Iagon",
  },
  {
    id: "iassets",
    symbol: "asset",
    name: "iAssets",
  },
  {
    id: "ibank",
    symbol: "ibank",
    name: "iBank",
  },
  {
    id: "ibetyou",
    symbol: "iby",
    name: "iBetYou",
  },
  {
    id: "ibg-eth",
    symbol: "ibg",
    name: "iBG Finance (ETH)",
  },
  {
    id: "ibg-token",
    symbol: "ibg",
    name: "iBG Finance (BSC)",
  },
  {
    id: "ibithub",
    symbol: "ibh",
    name: "iBitHub",
  },
  {
    id: "ibiza-token",
    symbol: "ibz",
    name: "Ibiza",
  },
  {
    id: "ibs",
    symbol: "ibs",
    name: "IBS",
  },
  {
    id: "ibtc-2",
    symbol: "ibtc",
    name: "iBTC",
  },
  {
    id: "ibuffer",
    symbol: "ibfr",
    name: "iBuffer",
  },
  {
    id: "ibuffer-token",
    symbol: "bfr",
    name: "Buffer Token",
  },
  {
    id: "icarus-network",
    symbol: "ica",
    name: "Icarus Network",
  },
  {
    id: "ic-drip-token",
    symbol: "icd",
    name: "IC Drip Token",
  },
  {
    id: "icebreak-r",
    symbol: "icebrk",
    name: "IceBreak-R",
  },
  {
    id: "icecream",
    symbol: "ice",
    name: "IceCream",
  },
  {
    id: "icecream-finance",
    symbol: "cream",
    name: "IceCream Finance",
  },
  {
    id: "icel-idman-yurdu",
    symbol: "miy",
    name: "Icel Idman Yurdu",
  },
  {
    id: "ice-token",
    symbol: "ice",
    name: "Popsicle Finance",
  },
  {
    id: "ichello",
    symbol: "ello",
    name: "Ichello",
  },
  {
    id: "ichi-farm",
    symbol: "ichi",
    name: "ICHI",
  },
  {
    id: "ichigo-inu",
    symbol: "ichigo",
    name: "Ichigo Inu",
  },
  {
    id: "icocryptomarketcap",
    symbol: "icmc",
    name: "IcoCryptoMarketCap",
  },
  {
    id: "i-coin",
    symbol: "icn",
    name: "I-Coin V2",
  },
  {
    id: "icolcoin",
    symbol: "icol",
    name: "Icolcoin",
  },
  {
    id: "icomex",
    symbol: "icmx",
    name: "iCOMEX",
  },
  {
    id: "icommunity",
    symbol: "icom",
    name: "iCommunity",
  },
  {
    id: "icon",
    symbol: "icx",
    name: "ICON",
  },
  {
    id: "iconiq-lab-token",
    symbol: "icnq",
    name: "Iconic ICNQ",
  },
  {
    id: "icon-usdc",
    symbol: "iusdc",
    name: "Icon USDC",
  },
  {
    id: "icosa",
    symbol: "icsa",
    name: "Icosa",
  },
  {
    id: "idavoll-network",
    symbol: "idv",
    name: "Idavoll DAO",
  },
  {
    id: "ideachain",
    symbol: "ich",
    name: "IdeaChain",
  },
  {
    id: "ideamarket",
    symbol: "imo",
    name: "Ideamarket",
  },
  {
    id: "ideaology",
    symbol: "idea",
    name: "Ideaology",
  },
  {
    id: "idefiyieldprotocol",
    symbol: "idyp",
    name: "iDeFiYieldProtocol",
  },
  {
    id: "idena",
    symbol: "idna",
    name: "Idena",
  },
  {
    id: "idendefi",
    symbol: "id",
    name: "IdenDEFI",
  },
  {
    id: "identity",
    symbol: "idtt",
    name: "Identity",
  },
  {
    id: "idexo-token",
    symbol: "ido",
    name: "Idexo",
  },
  {
    id: "idia",
    symbol: "idia",
    name: "Impossible Finance Launchpad",
  },
  {
    id: "idk",
    symbol: "idk",
    name: "IDK",
  },
  {
    id: "idle",
    symbol: "idle",
    name: "IDLE",
  },
  {
    id: "idle-cyber",
    symbol: "afk",
    name: "Idle Cyber",
  },
  {
    id: "idle-dai-risk-adjusted",
    symbol: "idledaisafe",
    name: "IdleDAI (Risk Adjusted)",
  },
  {
    id: "idle-dai-yield",
    symbol: "idledaiyield",
    name: "IdleDAI (Best Yield)",
  },
  {
    id: "idle-susd-yield",
    symbol: "idlesusdyield",
    name: "IdleSUSD (Yield)",
  },
  {
    id: "idle-token",
    symbol: "idle",
    name: "Idle Cyber Game",
  },
  {
    id: "idletreasureparty",
    symbol: "dtevil",
    name: "IdleTreasureParty",
  },
  {
    id: "idle-tusd-yield",
    symbol: "idletusdyield",
    name: "IdleTUSD (Best Yield)",
  },
  {
    id: "idle-usdc-risk-adjusted",
    symbol: "idleusdcsafe",
    name: "IdleUSDC (Risk Adjusted)",
  },
  {
    id: "idle-usdc-yield",
    symbol: "idleusdcyield",
    name: "IdleUSDC (Yield)",
  },
  {
    id: "idle-usdt-risk-adjusted",
    symbol: "idleusdtsafe",
    name: "IdleUSDT (Risk Adjusted)",
  },
  {
    id: "idle-usdt-yield",
    symbol: "idleusdtyield",
    name: "IdleUSDT (Yield)",
  },
  {
    id: "idle-wbtc-yield",
    symbol: "idlewbtcyield",
    name: "IdleWBTC (Best Yield)",
  },
  {
    id: "idm-token",
    symbol: "idm",
    name: "IDM Coop",
  },
  {
    id: "idol",
    symbol: "$idol",
    name: "IDOL",
  },
  {
    id: "idoscan",
    symbol: "idoscan",
    name: "Idoscan",
  },
  {
    id: "iethereum",
    symbol: "ieth",
    name: "iEthereum",
  },
  {
    id: "iexec-rlc",
    symbol: "rlc",
    name: "iExec RLC",
  },
  {
    id: "ifarm",
    symbol: "ifarm",
    name: "iFARM",
  },
  {
    id: "ifoswap-token",
    symbol: "h2o",
    name: "IFOSwap",
  },
  {
    id: "iftoken",
    symbol: "ift",
    name: "IFT",
  },
  {
    id: "ifx24",
    symbol: "ifx24",
    name: "IFX24",
  },
  {
    id: "ig-gold",
    symbol: "igg",
    name: "IG Gold",
  },
  {
    id: "ignis",
    symbol: "ignis",
    name: "Ignis",
  },
  {
    id: "ignite-2",
    symbol: "igt",
    name: "Ignite",
  },
  {
    id: "ignition",
    symbol: "ic",
    name: "Ignition",
  },
  {
    id: "igtoken",
    symbol: "ig",
    name: "IGT",
  },
  {
    id: "iguverse",
    symbol: "igup",
    name: "IguVerse",
  },
  {
    id: "iht-real-estate-protocol",
    symbol: "iht",
    name: "IHT Real Estate Protocol",
  },
  {
    id: "ijascoin",
    symbol: "ijc",
    name: "IjasCoin",
  },
  {
    id: "ikolf",
    symbol: "ikolf",
    name: "IKOLF",
  },
  {
    id: "ikura-token",
    symbol: "ikura",
    name: "Ikura",
  },
  {
    id: "ilcoin",
    symbol: "ilc",
    name: "ILCOIN",
  },
  {
    id: "illiquiddao",
    symbol: "jpegs",
    name: "IlliquidDAO",
  },
  {
    id: "illuvium",
    symbol: "ilv",
    name: "Illuvium",
  },
  {
    id: "ilus-coin",
    symbol: "ilus",
    name: "ILUS Coin",
  },
  {
    id: "imagecoin",
    symbol: "img",
    name: "ImageCoin",
  },
  {
    id: "imagictoken",
    symbol: "imagic",
    name: "iMagic",
  },
  {
    id: "ime-lab",
    symbol: "lime",
    name: "iMe Lab",
  },
  {
    id: "immortal-cat",
    symbol: "icc",
    name: "Immortal Cat",
  },
  {
    id: "immortaldao",
    symbol: "immo",
    name: "ImmortalDAO",
  },
  {
    id: "immortl",
    symbol: "imrtl",
    name: "Immortl",
  },
  {
    id: "immutable",
    symbol: "dara",
    name: "Immutable",
  },
  {
    id: "immutable-x",
    symbol: "imx",
    name: "ImmutableX",
  },
  {
    id: "imo",
    symbol: "imo",
    name: "IMO",
  },
  {
    id: "i-money-crypto",
    symbol: "imc",
    name: "i Money Crypto",
  },
  {
    id: "imov",
    symbol: "imt",
    name: "IMOV",
  },
  {
    id: "impactmarket",
    symbol: "pact",
    name: "impactMarket",
  },
  {
    id: "impactx",
    symbol: "impactx",
    name: "ImpactX",
  },
  {
    id: "impactxp",
    symbol: "impactxp",
    name: "ImpactXP",
  },
  {
    id: "impactxprime",
    symbol: "ixp",
    name: "IMPACTXPRIME",
  },
  {
    id: "imperial-obelisk",
    symbol: "imp",
    name: "Imperial Obelisk [OLD]",
  },
  {
    id: "imperial-obelisk-2",
    symbol: "imp",
    name: "Imperial Obelisk",
  },
  {
    id: "imperium-empires",
    symbol: "ime",
    name: "Imperium Empires",
  },
  {
    id: "impermax",
    symbol: "imx",
    name: "Impermax [OLD]",
  },
  {
    id: "impermax-2",
    symbol: "ibex",
    name: "Impermax",
  },
  {
    id: "impossible-finance",
    symbol: "if",
    name: "Impossible Finance",
  },
  {
    id: "impostors-blood",
    symbol: "blood",
    name: "Impostors Blood",
  },
  {
    id: "improved-bitcoin",
    symbol: "ibtc",
    name: "Improved Bitcoin",
  },
  {
    id: "impt",
    symbol: "impt",
    name: "IMPT",
  },
  {
    id: "impulse-by-fdr",
    symbol: "impulse",
    name: "Impulse By FDR",
  },
  {
    id: "impulseven",
    symbol: "i7",
    name: "ImpulseVen",
  },
  {
    id: "inari",
    symbol: "inari",
    name: "Inari",
  },
  {
    id: "incakoin",
    symbol: "nka",
    name: "IncaKoin",
  },
  {
    id: "inci-token",
    symbol: "inci",
    name: "Inci",
  },
  {
    id: "incognito-2",
    symbol: "prv",
    name: "Incognito",
  },
  {
    id: "incoin",
    symbol: "in",
    name: "InCoin",
  },
  {
    id: "income",
    symbol: "income",
    name: "Income",
  },
  {
    id: "income-island",
    symbol: "income",
    name: "Income Island",
  },
  {
    id: "incooom-genesis",
    symbol: "cooom",
    name: "Incooom Genesis",
  },
  {
    id: "incube-chain",
    symbol: "icb",
    name: "Incube Chain",
  },
  {
    id: "indahash",
    symbol: "idh",
    name: "indaHash",
  },
  {
    id: "index-chain",
    symbol: "idx",
    name: "Index Chain",
  },
  {
    id: "index-cooperative",
    symbol: "index",
    name: "Index Cooperative",
  },
  {
    id: "index-coop-eth-2x-flexible-leverage-index",
    symbol: "eth2x-fli-p",
    name: "Index Coop - ETH 2x Flexible Leverage Index (Polygon)",
  },
  {
    id: "index-coop-inverse-eth-flexible-leverage-index",
    symbol: "ieth-fli-p",
    name: "Index Coop - Inverse ETH Flexible Leverage Index",
  },
  {
    id: "index-coop-inverse-matic-flexible-leverage-index",
    symbol: "imatic-fli-p",
    name: "Index Coop - Inverse MATIC Flexible Leverage Index",
  },
  {
    id: "index-coop-matic-2x-flexible-leverage-index",
    symbol: "matic2x-fli-p",
    name: "Index Coop - MATIC 2x Flexible Leverage Index",
  },
  {
    id: "indexed-finance",
    symbol: "ndx",
    name: "Indexed Finance",
  },
  {
    id: "indian-shiba-inu",
    symbol: "indshib",
    name: "Indian Shiba Inu",
  },
  {
    id: "indigg",
    symbol: "indi",
    name: "IndiGG",
  },
  {
    id: "indigo-dao-governance-token",
    symbol: "indy",
    name: "Indigo Protocol",
  },
  {
    id: "indorse",
    symbol: "ind",
    name: "Indorse",
  },
  {
    id: "inery",
    symbol: "$inr",
    name: "Inery",
  },
  {
    id: "inescoin",
    symbol: "ines",
    name: "Inescoin",
  },
  {
    id: "infam",
    symbol: "inf",
    name: "Infam",
  },
  {
    id: "infchain",
    symbol: "inf",
    name: "InfChain",
  },
  {
    id: "infinite-arcade-tic",
    symbol: "tic",
    name: "Infinite Arcade TIC",
  },
  {
    id: "infinitee",
    symbol: "inftee",
    name: "Infinitee",
  },
  {
    id: "infinite-ecosystem",
    symbol: "infinity",
    name: "Infinite Ecosystem",
  },
  {
    id: "infinite-launch",
    symbol: "ila",
    name: "Infinite Launch",
  },
  {
    id: "infinito",
    symbol: "inft",
    name: "Infinito",
  },
  {
    id: "infinitx",
    symbol: "inx",
    name: "InfinitX",
  },
  {
    id: "infinity-angel",
    symbol: "ing",
    name: "Infinity Angel",
  },
  {
    id: "infinity-arena",
    symbol: "inaz",
    name: "Infinity Arena",
  },
  {
    id: "infinitycash",
    symbol: "ifc",
    name: "InfinityCash",
  },
  {
    id: "infinity-dao",
    symbol: "ind",
    name: "Infinity DAO",
  },
  {
    id: "infinity-esaham",
    symbol: "infs",
    name: "Infinity Esaham",
  },
  {
    id: "infinity-eth",
    symbol: "ieth",
    name: "Infinity ETH",
  },
  {
    id: "infinity-game-nft",
    symbol: "ign",
    name: "Infinity Game NFT",
  },
  {
    id: "infinitygaming",
    symbol: "play",
    name: "InfinityGaming",
  },
  {
    id: "infinity-pad",
    symbol: "ipad",
    name: "Infinity Pad [OLD]",
  },
  {
    id: "infinity-pad-2",
    symbol: "ipad",
    name: "Infinity PAD",
  },
  {
    id: "infinity-protocol",
    symbol: "infinity",
    name: "Infinity Protocol",
  },
  {
    id: "infinity-rocket-token",
    symbol: "irt",
    name: "Infinity Rocket",
  },
  {
    id: "infinity-skies",
    symbol: "isky",
    name: "Infinity Skies",
  },
  {
    id: "infinium",
    symbol: "inf",
    name: "Infinium",
  },
  {
    id: "inflation-adjusted-euro",
    symbol: "ieuros",
    name: "Inflation Adjusted EURO",
  },
  {
    id: "inflation-adjusted-usds",
    symbol: "iusds",
    name: "Inflation Adjusted USDS",
  },
  {
    id: "inflationcoin",
    symbol: "iflt",
    name: "InflationCoin",
  },
  {
    id: "inflation-hedging-coin",
    symbol: "ihc",
    name: "Inflation Hedging Coin",
  },
  {
    id: "inflex-finance",
    symbol: "inflex",
    name: "Inflex Finance",
  },
  {
    id: "infliv",
    symbol: "ifv",
    name: "INFLIV",
  },
  {
    id: "influencer",
    symbol: "imi",
    name: "Influencer",
  },
  {
    id: "influencer-finance",
    symbol: "influence",
    name: "Influencer Finance",
  },
  {
    id: "influxcoin",
    symbol: "infx",
    name: "Influxcoin",
  },
  {
    id: "infomatix",
    symbol: "info",
    name: "Infomatix",
  },
  {
    id: "info-token",
    symbol: "info",
    name: "Kardia Info",
  },
  {
    id: "inft-platform",
    symbol: "inft",
    name: "iNFT",
  },
  {
    id: "inftspace",
    symbol: "ins",
    name: "iNFTspace",
  },
  {
    id: "ingress",
    symbol: "igr",
    name: "Ingress",
  },
  {
    id: "inheritance-art",
    symbol: "iai",
    name: "inheritance Art",
  },
  {
    id: "init",
    symbol: "init",
    name: "Inite",
  },
  {
    id: "injective-protocol",
    symbol: "inj",
    name: "Injective",
  },
  {
    id: "ink",
    symbol: "ink",
    name: "Ink",
  },
  {
    id: "ink-fantom",
    symbol: "ink",
    name: "Ink Fantom",
  },
  {
    id: "ink-finance",
    symbol: "quill",
    name: "Ink Finance",
  },
  {
    id: "inkz",
    symbol: "inkz",
    name: "INKz",
  },
  {
    id: "inmediate",
    symbol: "dit",
    name: "Direct Insurance",
  },
  {
    id: "inme-run",
    symbol: "inmer",
    name: "INME Run",
  },
  {
    id: "inme-swap",
    symbol: "inmes",
    name: "Inme Swap [OLD]",
  },
  {
    id: "inme-swap-2",
    symbol: "inmes",
    name: "Inme Swap",
  },
  {
    id: "in-meta-travel",
    symbol: "imt",
    name: "In Meta Travel",
  },
  {
    id: "innitforthetech",
    symbol: "innit",
    name: "InnitForTheTECH",
  },
  {
    id: "innova",
    symbol: "inn",
    name: "Innova",
  },
  {
    id: "innovaminex",
    symbol: "minx",
    name: "InnovaMinex",
  },
  {
    id: "innovation-blockchain-payment",
    symbol: "ibp",
    name: "Innovation Blockchain Payment",
  },
  {
    id: "innovative-bioresearch",
    symbol: "innbc",
    name: "Innovative Bioresearch Coin",
  },
  {
    id: "innovativebioresearchclassic",
    symbol: "innbcl",
    name: "InnovativeBioresearchClassic",
  },
  {
    id: "ino-coin",
    symbol: "ino",
    name: "Ino Coin",
  },
  {
    id: "inoovi",
    symbol: "ivi",
    name: "Inoovi",
  },
  {
    id: "inpoker",
    symbol: "inp",
    name: "InPoker",
  },
  {
    id: "inpulse-x",
    symbol: "ipx",
    name: "InpulseX",
  },
  {
    id: "ins3-finance-coin",
    symbol: "itf",
    name: "Ins3.Finance Coin",
  },
  {
    id: "insight-protocol",
    symbol: "inx",
    name: "Insight Protocol",
  },
  {
    id: "insights-network",
    symbol: "instar",
    name: "INSTAR",
  },
  {
    id: "instadapp",
    symbol: "inst",
    name: "Instadapp",
  },
  {
    id: "instadapp-dai",
    symbol: "idai",
    name: "Instadapp DAI",
  },
  {
    id: "instadapp-eth",
    symbol: "ieth",
    name: "Instadapp ETH",
  },
  {
    id: "instadapp-usdc",
    symbol: "iusdc",
    name: "Instadapp USDC",
  },
  {
    id: "instadapp-wbtc",
    symbol: "iwbtc",
    name: "Instadapp WBTC",
  },
  {
    id: "instinct",
    symbol: "ins",
    name: "Instinct",
  },
  {
    id: "instrumental-finance",
    symbol: "strm",
    name: "Instrumental Finance",
  },
  {
    id: "insula",
    symbol: "isla",
    name: "Insula",
  },
  {
    id: "insurace",
    symbol: "insur",
    name: "InsurAce",
  },
  {
    id: "insurancefi",
    symbol: "if",
    name: "InsuranceFI",
  },
  {
    id: "insure",
    symbol: "sure",
    name: "inSure DeFi",
  },
  {
    id: "insuredao",
    symbol: "insure",
    name: "InsureDAO",
  },
  {
    id: "insured-finance",
    symbol: "infi",
    name: "Insured Finance",
  },
  {
    id: "insurepal",
    symbol: "ipl",
    name: "InsurePal",
  },
  {
    id: "insureum",
    symbol: "isr",
    name: "Insureum",
  },
  {
    id: "insurex",
    symbol: "ixt",
    name: "iXledger",
  },
  {
    id: "intdestcoin",
    symbol: "intd",
    name: "INTDESTCOIN [OLD]",
  },
  {
    id: "integral",
    symbol: "itgr",
    name: "Integral",
  },
  {
    id: "integritee",
    symbol: "teer",
    name: "Integritee",
  },
  {
    id: "intelligent-investment-chain",
    symbol: "iic",
    name: "Intelligent Investment Chain",
  },
  {
    id: "interbtc",
    symbol: "ibtc",
    name: "interBTC",
  },
  {
    id: "intercoin",
    symbol: "itr",
    name: "Intercoin",
  },
  {
    id: "interest-bearing-bitcoin",
    symbol: "ibbtc",
    name: "Badger Interest Bearing Bitcoin",
  },
  {
    id: "interest-bearing-eth",
    symbol: "ibeth",
    name: "Interest Bearing ETH",
  },
  {
    id: "interest-bearing-moo",
    symbol: "mmoo",
    name: "Interest Bearing MOO",
  },
  {
    id: "interest-compounding-eth-index",
    symbol: "iceth",
    name: "Interest Compounding ETH Index",
  },
  {
    id: "interest-protocol",
    symbol: "usdi",
    name: "Interest Protocol USDi",
  },
  {
    id: "interest-protocol-token",
    symbol: "ipt",
    name: "Interest Protocol Token",
  },
  {
    id: "interfinex-bills",
    symbol: "ifex",
    name: "Interfinex Bills",
  },
  {
    id: "intergalactic-cockroach",
    symbol: "icc",
    name: "Intergalactic Cockroach",
  },
  {
    id: "interlay",
    symbol: "intr",
    name: "Interlay",
  },
  {
    id: "inter-milan-fan-token",
    symbol: "inter",
    name: "Inter Milan Fan Token",
  },
  {
    id: "international-cryptox",
    symbol: "incx",
    name: "International CryptoX",
  },
  {
    id: "internet-computer",
    symbol: "icp",
    name: "Internet Computer",
  },
  {
    id: "internet-node-token",
    symbol: "int",
    name: "INTchain",
  },
  {
    id: "internet-of-energy-network",
    symbol: "ioen",
    name: "Internet of Energy Network",
  },
  {
    id: "internxt",
    symbol: "inxt",
    name: "Internxt",
  },
  {
    id: "interport-token",
    symbol: "itp",
    name: "Interport Token",
  },
  {
    id: "intersola",
    symbol: "isola",
    name: "Intersola",
  },
  {
    id: "inter-stable-token",
    symbol: "ist",
    name: "Inter Stable Token",
  },
  {
    id: "interstellar-domain-order",
    symbol: "ido",
    name: "Interstellar Domain Order",
  },
  {
    id: "intervalue",
    symbol: "inve",
    name: "InterValue",
  },
  {
    id: "intexcoin",
    symbol: "intx",
    name: "INTEXCOIN",
  },
  {
    id: "intucoin",
    symbol: "intu",
    name: "INTUCoin",
  },
  {
    id: "inu",
    symbol: "inu",
    name: "Inu.",
  },
  {
    id: "inugami",
    symbol: "inugami",
    name: "Inugami",
  },
  {
    id: "inu-inu",
    symbol: "inuinu",
    name: "Inu Inu",
  },
  {
    id: "inu-jump-and-the-temple-of-shiba",
    symbol: "inujump",
    name: "Inu Jump and the Temple of Shiba",
  },
  {
    id: "inuko-finance",
    symbol: "inuko",
    name: "Inuko Finance",
  },
  {
    id: "inusanity",
    symbol: "inusanity",
    name: "Inusanity",
  },
  {
    id: "inu-token",
    symbol: "inu",
    name: "INU",
  },
  {
    id: "inu-wars",
    symbol: "iwr",
    name: "Inu Wars",
  },
  {
    id: "inverse-bitcoin-volatility-index-token",
    symbol: "ibtcv",
    name: "Inverse Bitcoin Volatility Index Token",
  },
  {
    id: "inverse-btc-flexible-leverage-index",
    symbol: "ibtc-fli-p",
    name: "Inverse BTC Flexible Leverage Index",
  },
  {
    id: "inverse-ethereum-volatility-index-token",
    symbol: "iethv",
    name: "Inverse Ethereum Volatility Index Token",
  },
  {
    id: "inverse-finance",
    symbol: "inv",
    name: "Inverse Finance",
  },
  {
    id: "investdex",
    symbol: "invest",
    name: "InvestDex",
  },
  {
    id: "investin",
    symbol: "ivn",
    name: "Investin",
  },
  {
    id: "invest-like-stakeborg-index",
    symbol: "ilsi",
    name: "Invest Like Stakeborg Index",
  },
  {
    id: "invictus",
    symbol: "in",
    name: "Invictus",
  },
  {
    id: "invictus-capital-token",
    symbol: "icap",
    name: "Invictus Capital",
  },
  {
    id: "invictus-hyprion-fund",
    symbol: "ihf",
    name: "Invictus Hyperion Fund",
  },
  {
    id: "invi-token",
    symbol: "invi",
    name: "INVI",
  },
  {
    id: "invoice-coin",
    symbol: "ivc",
    name: "Invoice Coin",
  },
  {
    id: "invoke",
    symbol: "iv",
    name: "Invoker",
  },
  {
    id: "invox-finance",
    symbol: "invox",
    name: "Invox Finance",
  },
  {
    id: "inx",
    symbol: "inx",
    name: "INX",
  },
  {
    id: "iobusd",
    symbol: "iobusd",
    name: "ioBUSD",
  },
  {
    id: "iocoin",
    symbol: "ioc",
    name: "I/O Coin",
  },
  {
    id: "ioeth",
    symbol: "ioeth",
    name: "ioETH",
  },
  {
    id: "ioex",
    symbol: "ioex",
    name: "ioeX",
  },
  {
    id: "ioi-token",
    symbol: "ioi",
    name: "IOI",
  },
  {
    id: "ion",
    symbol: "ion",
    name: "Ion",
  },
  {
    id: "ionchain-token",
    symbol: "ionc",
    name: "IONChain",
  },
  {
    id: "ionomy",
    symbol: "ion",
    name: "Ionomy",
  },
  {
    id: "iostoken",
    symbol: "iost",
    name: "IOST",
  },
  {
    id: "iota",
    symbol: "miota",
    name: "IOTA",
  },
  {
    id: "ioten",
    symbol: "iotn",
    name: "IOTEN",
  },
  {
    id: "iotex",
    symbol: "iotx",
    name: "IoTeX",
  },
  {
    id: "iotex-monster-go",
    symbol: "mtgo",
    name: "Iotex Monster Go",
  },
  {
    id: "iotexpad",
    symbol: "tex",
    name: "IoTeXPad",
  },
  {
    id: "iotexshiba",
    symbol: "ioshib",
    name: "IoTexShiba",
  },
  {
    id: "iouni",
    symbol: "iouni",
    name: "ioUNI",
  },
  {
    id: "iousdc",
    symbol: "iousdc",
    name: "ioUSDC",
  },
  {
    id: "iousdt",
    symbol: "iousdt",
    name: "ioUSDT",
  },
  {
    id: "iowbtc",
    symbol: "iowbtc",
    name: "ioWBTC",
  },
  {
    id: "iown",
    symbol: "iown",
    name: "iOWN",
  },
  {
    id: "ipay",
    symbol: "ipay",
    name: "iPay",
  },
  {
    id: "ipi-shorter",
    symbol: "ipistr",
    name: "IPI Shorter",
  },
  {
    id: "ipor",
    symbol: "ipor",
    name: "IPOR",
  },
  {
    id: "ipse",
    symbol: "post",
    name: "IPSE",
  },
  {
    id: "ipulse",
    symbol: "pls",
    name: "iPulse",
  },
  {
    id: "ipverse",
    symbol: "ipv",
    name: "IPVERSE",
  },
  {
    id: "ipx-token",
    symbol: "ipx",
    name: "Tachyon Protocol",
  },
  {
    id: "iq-cash",
    symbol: "iq",
    name: "IQ.cash",
  },
  {
    id: "iqeon",
    symbol: "iqn",
    name: "IQeon",
  },
  {
    id: "iqoniq",
    symbol: "iqq",
    name: "Iqoniq",
  },
  {
    id: "irena-green-energy",
    symbol: "irena",
    name: "IRENA Green Energy",
  },
  {
    id: "iridium",
    symbol: "ird",
    name: "Iridium",
  },
  {
    id: "iris-ecosystem",
    symbol: "iristoken",
    name: "Iris Ecosystem",
  },
  {
    id: "iris-network",
    symbol: "iris",
    name: "IRISnet",
  },
  {
    id: "iris-token-2",
    symbol: "iris",
    name: "Iris",
  },
  {
    id: "iron-bank",
    symbol: "ib",
    name: "Iron Bank",
  },
  {
    id: "iron-bank-chf",
    symbol: "ibchf",
    name: "Iron Bank CHF",
  },
  {
    id: "iron-bank-euro",
    symbol: "ibeur",
    name: "Iron Bank EURO",
  },
  {
    id: "iron-bank-gbp",
    symbol: "ibgbp",
    name: "Iron Bank GBP",
  },
  {
    id: "iron-bsc",
    symbol: "iron",
    name: "Iron BSC",
  },
  {
    id: "iron-finance",
    symbol: "ice",
    name: "Iron Finance",
  },
  {
    id: "iron-stablecoin",
    symbol: "iron",
    name: "Iron",
  },
  {
    id: "iron-titanium-token",
    symbol: "titan",
    name: "IRON Titanium",
  },
  {
    id: "isengard-nft-marketplace",
    symbol: "iset-84e55e",
    name: "Isengard NFT Marketplace",
  },
  {
    id: "ishares-msci-world-etf-tokenized-stock-defichain",
    symbol: "durth",
    name: "iShares MSCI World ETF Tokenized Stock Defichain",
  },
  {
    id: "isiklar-coin",
    symbol: "isikc",
    name: "Isiklar Coin",
  },
  {
    id: "iskra-token",
    symbol: "isk",
    name: "ISKRA Token",
  },
  {
    id: "islamicoin",
    symbol: "islami",
    name: "ISLAMICOIN",
  },
  {
    id: "island-boyz",
    symbol: "$islbyz",
    name: "Island Boyz",
  },
  {
    id: "islander",
    symbol: "isa",
    name: "Islander",
  },
  {
    id: "isotopec",
    symbol: "iso",
    name: "IsotopeC",
  },
  {
    id: "ispolink",
    symbol: "isp",
    name: "Ispolink",
  },
  {
    id: "istanbul-basaksehir-fan-token",
    symbol: "ibfk",
    name: "İstanbul Başakşehir Fan Token",
  },
  {
    id: "istanbul-wild-cats-fan-token",
    symbol: "iwft",
    name: "İstanbul Wild Cats Fan Token",
  },
  {
    id: "istardust",
    symbol: "isdt",
    name: "Istardust",
  },
  {
    id: "istep",
    symbol: "istep",
    name: "iSTEP",
  },
  {
    id: "italian-national-football-team-fan-token",
    symbol: "ita",
    name: "Italian National Football Team Fan Token",
  },
  {
    id: "itam-games",
    symbol: "itam",
    name: "ITAM Games",
  },
  {
    id: "itc",
    symbol: "itc",
    name: "ITC",
  },
  {
    id: "itemverse",
    symbol: "item",
    name: "ITEMVERSE",
  },
  {
    id: "iten",
    symbol: "iten",
    name: "ITEN",
  },
  {
    id: "iteration-syndicate",
    symbol: "its",
    name: "Iteration Syndicate",
  },
  {
    id: "itheum",
    symbol: "itheum",
    name: "Itheum",
  },
  {
    id: "itrust-governance-token",
    symbol: "itg",
    name: "iTrust Governance",
  },
  {
    id: "itsbloc",
    symbol: "itsb",
    name: "ITSBLOC",
  },
  {
    id: "itsmyne",
    symbol: "myne",
    name: "ITSMYNE",
  },
  {
    id: "its-not-art",
    symbol: "$na",
    name: "Its Not Art",
  },
  {
    id: "itube",
    symbol: "itube",
    name: "iTube",
  },
  {
    id: "iusd",
    symbol: "iusd",
    name: "iUSD",
  },
  {
    id: "ivar-coin",
    symbol: "ivar",
    name: "Ivar Coin",
  },
  {
    id: "ivogel",
    symbol: "ivg",
    name: "IVOGEL",
  },
  {
    id: "i-will-poop-it-nft",
    symbol: "shit",
    name: "I will poop it NFT",
  },
  {
    id: "ixcoin",
    symbol: "ixc",
    name: "Ixcoin",
  },
  {
    id: "ixicash",
    symbol: "ixi",
    name: "IxiCash",
  },
  {
    id: "ixinium",
    symbol: "xxa",
    name: "Ixinium",
  },
  {
    id: "ixirswap",
    symbol: "ixir",
    name: "Ixirswap",
  },
  {
    id: "ixo",
    symbol: "ixo",
    name: "IXO",
  },
  {
    id: "ix-swap",
    symbol: "ixs",
    name: "IX Swap",
  },
  {
    id: "ix-token",
    symbol: "ixt",
    name: "IX",
  },
  {
    id: "izanagi",
    symbol: "nagi",
    name: "Izanagi",
  },
  {
    id: "ize",
    symbol: "ize",
    name: "IZE",
  },
  {
    id: "izombie",
    symbol: "izu",
    name: "iZombie",
  },
  {
    id: "izumi-bond-usd",
    symbol: "iusd",
    name: "iZUMi Bond USD",
  },
  {
    id: "izumi-finance",
    symbol: "izi",
    name: "Izumi Finance",
  },
  {
    id: "jackal-protocol",
    symbol: "jkl",
    name: "Jackal Protocol",
  },
  {
    id: "jackpool-finance",
    symbol: "jfi",
    name: "JackPool.finance",
  },
  {
    id: "jackpot",
    symbol: "777",
    name: "Jackpot",
  },
  {
    id: "jackpotdoge",
    symbol: "jpd",
    name: "JackpotDoge",
  },
  {
    id: "jackpot-universe",
    symbol: "juni",
    name: "Jackpot Universe",
  },
  {
    id: "jack-token",
    symbol: "jack",
    name: "Jack Token",
  },
  {
    id: "jacy",
    symbol: "jacy",
    name: "JACY",
  },
  {
    id: "jade",
    symbol: "jade",
    name: "Jade",
  },
  {
    id: "jade-currency",
    symbol: "jade",
    name: "Jade Currency",
  },
  {
    id: "jade-protocol",
    symbol: "jade",
    name: "Jade Protocol",
  },
  {
    id: "jaiho-crypto",
    symbol: "jaiho",
    name: "Jaiho Crypto",
  },
  {
    id: "jail-kwon",
    symbol: "jkwon",
    name: "JAIL KWON",
  },
  {
    id: "jam-token",
    symbol: "jam",
    name: "JAM Token",
  },
  {
    id: "janus-network",
    symbol: "jns",
    name: "Janus Network",
  },
  {
    id: "jarvis",
    symbol: "jar",
    name: "Jarvis+",
  },
  {
    id: "jarvis-reward-token",
    symbol: "jrt",
    name: "Jarvis Reward",
  },
  {
    id: "jarvis-synthetic-british-pound",
    symbol: "jgbp",
    name: "Jarvis Synthetic British Pound",
  },
  {
    id: "jarvis-synthetic-euro",
    symbol: "jeur",
    name: "Jarvis Synthetic Euro",
  },
  {
    id: "jarvis-synthetic-japanese-yen",
    symbol: "jjpy",
    name: "Jarvis Synthetic Japanese Yen",
  },
  {
    id: "jarvis-synthetic-swiss-franc",
    symbol: "jchf",
    name: "Jarvis Synthetic Swiss Franc",
  },
  {
    id: "jasan-wellness",
    symbol: "jw",
    name: "Jasan Wellness",
  },
  {
    id: "jasmycoin",
    symbol: "jasmy",
    name: "JasmyCoin",
  },
  {
    id: "javascript-token",
    symbol: "js",
    name: "JavaScript",
  },
  {
    id: "jax-network",
    symbol: "wjxn",
    name: "Jax.Network",
  },
  {
    id: "jd-coin",
    symbol: "jdc",
    name: "JD Coin",
  },
  {
    id: "jdi-token",
    symbol: "jdi",
    name: "JDI",
  },
  {
    id: "jedstar",
    symbol: "$jed",
    name: "JEDSTAR",
  },
  {
    id: "jeet-detector-bot",
    symbol: "jdb",
    name: "JDB",
  },
  {
    id: "jefe",
    symbol: "jefe",
    name: "Jefe",
  },
  {
    id: "jejudoge",
    symbol: "jejudoge",
    name: "Jejudoge",
  },
  {
    id: "jelly",
    symbol: "jelly",
    name: "Jelly",
  },
  {
    id: "jelly-esports",
    symbol: "jelly",
    name: "Jelly eSports",
  },
  {
    id: "jem",
    symbol: "jem",
    name: "Jem",
  },
  {
    id: "jen-coin",
    symbol: "jen",
    name: "JEN COIN",
  },
  {
    id: "jenny-dao-v2",
    symbol: "jenny",
    name: "Jenny DAO V2",
  },
  {
    id: "jenny-metaverse-dao-token",
    symbol: "ujenny",
    name: "Jenny DAO V1",
  },
  {
    id: "jeritex",
    symbol: "jrit",
    name: "JERITEX",
  },
  {
    id: "jet",
    symbol: "jet",
    name: "JET",
  },
  {
    id: "jetcoin",
    symbol: "jet",
    name: "Jetcoin",
  },
  {
    id: "jetoken",
    symbol: "jets",
    name: "JeToken",
  },
  {
    id: "jetset",
    symbol: "jts",
    name: "Jetset",
  },
  {
    id: "jewel",
    symbol: "jwl",
    name: "Jewel",
  },
  {
    id: "jexchange",
    symbol: "jex",
    name: "JEXchange",
  },
  {
    id: "jfin-coin",
    symbol: "jfin",
    name: "JFIN Coin",
  },
  {
    id: "jigen",
    symbol: "jig",
    name: "Jigen",
  },
  {
    id: "jigsaw",
    symbol: "jigsaw",
    name: "Jigsaw",
  },
  {
    id: "jigstack",
    symbol: "stak",
    name: "Jigstack",
  },
  {
    id: "jimizz",
    symbol: "jmz",
    name: "Jimizz",
  },
  {
    id: "jimngalaxy",
    symbol: "jimn",
    name: "JimnGalaxy",
  },
  {
    id: "jindoge",
    symbol: "jindoge",
    name: "Jindoge",
  },
  {
    id: "jindo-inu",
    symbol: "jind",
    name: "Jindo Inu",
  },
  {
    id: "jito-staked-sol",
    symbol: "jitosol",
    name: "Jito Staked SOL",
  },
  {
    id: "jk-coin",
    symbol: "jk",
    name: "JK Coin",
  },
  {
    id: "jmtime",
    symbol: "jmt",
    name: "JMTIME",
  },
  {
    id: "jobchain",
    symbol: "job",
    name: "Jobchain",
  },
  {
    id: "jockey-club",
    symbol: "jock",
    name: "Jockey Club",
  },
  {
    id: "jodie-inu",
    symbol: "jde",
    name: "Jodie Inu",
  },
  {
    id: "joe",
    symbol: "joe",
    name: "JOE",
  },
  {
    id: "joe-hat-token",
    symbol: "hat",
    name: "Joe Hat",
  },
  {
    id: "joe-yo-coin",
    symbol: "jyc",
    name: "Joe-Yo Coin",
  },
  {
    id: "joinblocks",
    symbol: "blocks",
    name: "JoinBlocks",
  },
  {
    id: "joincoin",
    symbol: "join",
    name: "JoinCoin",
  },
  {
    id: "jointer",
    symbol: "jntr",
    name: "Jointer",
  },
  {
    id: "jojo",
    symbol: "jojo",
    name: "JOJO",
  },
  {
    id: "jojo-inu",
    symbol: "jojo",
    name: "JoJo Inu",
  },
  {
    id: "jojos-adventure",
    symbol: "jojo",
    name: "JoJos Adventure",
  },
  {
    id: "joke-community",
    symbol: "$joke",
    name: "Joke Community",
  },
  {
    id: "jokermanor-metaverse",
    symbol: "jkt",
    name: "JokerManor Metaverse",
  },
  {
    id: "jokes-meme",
    symbol: "joke",
    name: "Jokes Meme",
  },
  {
    id: "joltify",
    symbol: "jolt",
    name: "Joltify",
  },
  {
    id: "jomon-shiba",
    symbol: "jshiba",
    name: "Jomon Shiba",
  },
  {
    id: "jones-dao",
    symbol: "jones",
    name: "Jones DAO",
  },
  {
    id: "joorschain",
    symbol: "jic",
    name: "JoorsChain",
  },
  {
    id: "jot-art",
    symbol: "jot",
    name: "Jot Art",
  },
  {
    id: "joulecoin",
    symbol: "xjo",
    name: "Joulecoin",
  },
  {
    id: "joys",
    symbol: "joys",
    name: "JOYS",
  },
  {
    id: "joystick1",
    symbol: "joy",
    name: "Joystick",
  },
  {
    id: "joystick-club",
    symbol: "joy",
    name: "Joystick.club",
  },
  {
    id: "jpeg-d",
    symbol: "jpeg",
    name: "JPEG'd",
  },
  {
    id: "jpegvaultdao-2",
    symbol: "jp3g",
    name: "JP3Gvault",
  },
  {
    id: "jpex-coin",
    symbol: "jpc",
    name: "JPEX Coin",
  },
  {
    id: "jpg-nft-index",
    symbol: "jpg",
    name: "JPG NFT Index",
  },
  {
    id: "jpgoldcoin",
    symbol: "jpgc",
    name: "JPGoldCoin",
  },
  {
    id: "jpool",
    symbol: "jsol",
    name: "JPool",
  },
  {
    id: "jpyc",
    symbol: "jpyc",
    name: "JPY Coin v1",
  },
  {
    id: "jpy-coin",
    symbol: "jpyc",
    name: "JPY Coin",
  },
  {
    id: "jswap-finance",
    symbol: "jf",
    name: "Jswap.Finance",
  },
  {
    id: "jubi-token",
    symbol: "jt",
    name: "Jubi Token",
  },
  {
    id: "juggernaut",
    symbol: "jgn",
    name: "Juggernaut",
  },
  {
    id: "juicebox",
    symbol: "jbx",
    name: "Juicebox",
  },
  {
    id: "julien",
    symbol: "julien",
    name: "JULIEN",
  },
  {
    id: "julswap",
    symbol: "juld",
    name: "JulSwap",
  },
  {
    id: "jumbo-exchange",
    symbol: "jumbo",
    name: "Jumbo Exchange",
  },
  {
    id: "jump-defi",
    symbol: "jump",
    name: "Jump DeFi",
  },
  {
    id: "jumptoken",
    symbol: "jmpt",
    name: "JumpToken",
  },
  {
    id: "jumpx",
    symbol: "jumpx",
    name: "JumpX",
  },
  {
    id: "junca-cash",
    symbol: "jcc",
    name: "Junca cash",
  },
  {
    id: "jungle",
    symbol: "jungle",
    name: "Jungle",
  },
  {
    id: "jungle-defi",
    symbol: "jfi",
    name: "Jungle DeFi",
  },
  {
    id: "jungleking-tigercoin",
    symbol: "tiger",
    name: "JungleKing TigerCoin",
  },
  {
    id: "juno-network",
    symbol: "juno",
    name: "JUNO",
  },
  {
    id: "juno-punk",
    symbol: "punk",
    name: "JUNO PUNK",
  },
  {
    id: "junoswap-raw-dao",
    symbol: "raw",
    name: "JunoSwap",
  },
  {
    id: "junsonmingchancoin",
    symbol: "jmc",
    name: "Junsonmingchancoin",
  },
  {
    id: "jupiter",
    symbol: "jup",
    name: "Jupiter",
  },
  {
    id: "jur",
    symbol: "jur",
    name: "Jur",
  },
  {
    id: "jurassic_nodes",
    symbol: "dino",
    name: "Jurassic Nodes",
  },
  {
    id: "just",
    symbol: "jst",
    name: "JUST",
  },
  {
    id: "justcarbon-governance",
    symbol: "jcg",
    name: "JustCarbon Governance",
  },
  {
    id: "justcarbon-removal",
    symbol: "jcr",
    name: "JustCarbon Removal",
  },
  {
    id: "justfarm",
    symbol: "jfm",
    name: "JustFarm",
  },
  {
    id: "justmoney-2",
    symbol: "jm",
    name: "JustMoney",
  },
  {
    id: "just-stablecoin",
    symbol: "usdj",
    name: "JUST Stablecoin",
  },
  {
    id: "juventus-fan-token",
    symbol: "juv",
    name: "Juventus Fan Token",
  },
  {
    id: "k21",
    symbol: "k21",
    name: "K21",
  },
  {
    id: "kaafila",
    symbol: "kfl",
    name: "Kaafila",
  },
  {
    id: "kabosu",
    symbol: "kabosu",
    name: "Kabosu",
  },
  {
    id: "kaby-arena",
    symbol: "kaby",
    name: "Kaby Arena",
  },
  {
    id: "kaby-gaming-token",
    symbol: "kgt",
    name: "Kaby Gaming",
  },
  {
    id: "kaddex",
    symbol: "kdx",
    name: "Kaddex",
  },
  {
    id: "kadena",
    symbol: "kda",
    name: "Kadena",
  },
  {
    id: "kaeri",
    symbol: "kaeri",
    name: "Kaeri",
  },
  {
    id: "kagla-finance",
    symbol: "kgl",
    name: "Kagla Finance",
  },
  {
    id: "kaidex",
    symbol: "kdx",
    name: "Kaidex",
  },
  {
    id: "kai-inu",
    symbol: "kaiinu",
    name: "Kai Inu",
  },
  {
    id: "kaiju-worlds",
    symbol: "kaiju",
    name: "Kaiju Worlds",
  },
  {
    id: "kaiken-shiba",
    symbol: "kshib",
    name: "Kaiken Shiba",
  },
  {
    id: "kainet",
    symbol: "kainet",
    name: "KAINET",
  },
  {
    id: "kaizen",
    symbol: "kzen",
    name: "Kaizen",
  },
  {
    id: "kaka-nft-world",
    symbol: "kaka",
    name: "KAKA NFT World",
  },
  {
    id: "kala",
    symbol: "kala",
    name: "Kala",
  },
  {
    id: "kalamint",
    symbol: "kalam",
    name: "Kalamint",
  },
  {
    id: "kalao",
    symbol: "klo",
    name: "Kalao",
  },
  {
    id: "kalera-nft",
    symbol: "kln",
    name: "Kalera NFT",
  },
  {
    id: "kalissa",
    symbol: "kali",
    name: "Kalissa",
  },
  {
    id: "kalisten",
    symbol: "ks",
    name: "Kalisten",
  },
  {
    id: "kalkicoin",
    symbol: "klc",
    name: "Kalkicoin",
  },
  {
    id: "kalkulus",
    symbol: "klks",
    name: "Kalkulus",
  },
  {
    id: "kalmar",
    symbol: "kalm",
    name: "KALM",
  },
  {
    id: "kamaleont",
    symbol: "klt",
    name: "Kamaleont",
  },
  {
    id: "kambria",
    symbol: "kat",
    name: "Kambria",
  },
  {
    id: "kampay",
    symbol: "kampay",
    name: "Kampay",
  },
  {
    id: "kan",
    symbol: "kan",
    name: "BitKan",
  },
  {
    id: "kanagawa-nami",
    symbol: "okinami",
    name: "Kanagawa Nami",
  },
  {
    id: "kanaloa-network",
    symbol: "kana",
    name: "Kanaloa Network",
  },
  {
    id: "kang3n",
    symbol: "kang3n",
    name: "kang3n",
  },
  {
    id: "kanga-exchange",
    symbol: "kng",
    name: "Kanga Exchange",
  },
  {
    id: "kangal",
    symbol: "kangal",
    name: "Kangal",
  },
  {
    id: "kangaroo",
    symbol: "gar",
    name: "Kangaroo",
  },
  {
    id: "kanpeki",
    symbol: "kae",
    name: "Kanpeki",
  },
  {
    id: "kaoya",
    symbol: "kaoya",
    name: "KAOYA",
  },
  {
    id: "kapital-dao",
    symbol: "kap",
    name: "Kapital DAO",
  },
  {
    id: "kappa",
    symbol: "kappa",
    name: "Kappa",
  },
  {
    id: "karastar-kara",
    symbol: "kara",
    name: "KaraStar",
  },
  {
    id: "karastar-umy",
    symbol: "umy",
    name: "KaraStar UMY",
  },
  {
    id: "karbo",
    symbol: "krb",
    name: "Karbo",
  },
  {
    id: "kardiachain",
    symbol: "kai",
    name: "KardiaChain",
  },
  {
    id: "karencoin",
    symbol: "karen",
    name: "KarenCoin",
  },
  {
    id: "karmadao",
    symbol: "kdao",
    name: "KarmaDao",
  },
  {
    id: "karma-dao",
    symbol: "karma",
    name: "Karma DAO",
  },
  {
    id: "karmaverse",
    symbol: "knot",
    name: "Karmaverse",
  },
  {
    id: "karmaverse-zombie-serum",
    symbol: "serum",
    name: "Karmaverse Zombie Serum",
  },
  {
    id: "karsiyaka-taraftar-token",
    symbol: "ksk",
    name: "Karşıyaka Taraftar Fan Token",
  },
  {
    id: "karura",
    symbol: "kar",
    name: "Karura",
  },
  {
    id: "kasa-central",
    symbol: "kasa",
    name: "Kasa Central",
  },
  {
    id: "kashhcoin",
    symbol: "kashh",
    name: "Kashhcoin",
  },
  {
    id: "kaspa",
    symbol: "kas",
    name: "Kaspa",
  },
  {
    id: "kassandra",
    symbol: "kacy",
    name: "Kassandra",
  },
  {
    id: "kasta",
    symbol: "kasta",
    name: "Kasta",
  },
  {
    id: "katalyo",
    symbol: "ktlyo",
    name: "Katalyo",
  },
  {
    id: "katana-inu",
    symbol: "kata",
    name: "Katana Inu",
  },
  {
    id: "kattana",
    symbol: "ktn",
    name: "Kattana",
  },
  {
    id: "katz-token",
    symbol: "katz",
    name: "KATZ House",
  },
  {
    id: "kauri",
    symbol: "kau",
    name: "Kauri",
  },
  {
    id: "kava",
    symbol: "kava",
    name: "Kava",
  },
  {
    id: "kava-lend",
    symbol: "hard",
    name: "Kava Lend",
  },
  {
    id: "kava-swap",
    symbol: "swp",
    name: "Kava Swap",
  },
  {
    id: "kawaii-islands",
    symbol: "kwt",
    name: "Kawaii Islands",
  },
  {
    id: "kawaiinu",
    symbol: "kawaii",
    name: "kawaiINU",
  },
  {
    id: "kawai-shiba",
    symbol: "kshiba",
    name: "Kawai Shiba",
  },
  {
    id: "kawakami",
    symbol: "kawa",
    name: "Kawakami",
  },
  {
    id: "kay-pacha",
    symbol: "pacha",
    name: "Kay Pacha",
  },
  {
    id: "kayserispor",
    symbol: "kysr",
    name: "Kayserispor",
  },
  {
    id: "kazoku-inu",
    symbol: "kazoku",
    name: "Kazoku INU",
  },
  {
    id: "kcal",
    symbol: "kcal",
    name: "KCAL",
  },
  {
    id: "kcash",
    symbol: "kcash",
    name: "Kcash",
  },
  {
    id: "kcc-memepad",
    symbol: "kccm",
    name: "KCC MemePad",
  },
  {
    id: "kccpad",
    symbol: "kccpad",
    name: "KCCPad",
  },
  {
    id: "kdag",
    symbol: "kdag",
    name: "King DAG",
  },
  {
    id: "kdlaunch",
    symbol: "kdl",
    name: "KDLaunch",
  },
  {
    id: "kdswap",
    symbol: "kds",
    name: "KDSwap",
  },
  {
    id: "keecoin",
    symbol: "keec",
    name: "KeeCoin",
  },
  {
    id: "keep3rv1",
    symbol: "kp3r",
    name: "Keep3rV1",
  },
  {
    id: "keep4r",
    symbol: "kp4r",
    name: "Keep4r",
  },
  {
    id: "keep-network",
    symbol: "keep",
    name: "Keep Network",
  },
  {
    id: "keeps-coin",
    symbol: "kverse",
    name: "KEEPs Coin",
  },
  {
    id: "keeshond",
    symbol: "$ksh",
    name: "Keeshond",
  },
  {
    id: "keisuke-inu",
    symbol: "$kei",
    name: "Keisuke Inu",
  },
  {
    id: "kekchain",
    symbol: "kek",
    name: "KeKChain",
  },
  {
    id: "kekwcoin",
    symbol: "kekw",
    name: "Kekwcoin",
  },
  {
    id: "kelvin",
    symbol: "kelvin",
    name: "Kelvin",
  },
  {
    id: "kelvpn",
    symbol: "kel",
    name: "KelVPN",
  },
  {
    id: "kemacoin",
    symbol: "kema",
    name: "KemaCoin",
  },
  {
    id: "kenshi",
    symbol: "kenshi",
    name: "Kenshi",
  },
  {
    id: "kentucky-fried-crypto",
    symbol: "kfc",
    name: "Kentucky Fried Crypto",
  },
  {
    id: "kephi-gallery",
    symbol: "kphi",
    name: "Kephi Gallery",
  },
  {
    id: "kepler452b",
    symbol: "452b",
    name: "Kepler452b",
  },
  {
    id: "kepler-network",
    symbol: "kmw",
    name: "Kepler Network",
  },
  {
    id: "kermit",
    symbol: "kermit",
    name: "Kermit Finance",
  },
  {
    id: "kermit-inu",
    symbol: "kti",
    name: "Kermit Inu",
  },
  {
    id: "kevacoin",
    symbol: "kva",
    name: "Kevacoin",
  },
  {
    id: "key",
    symbol: "key",
    name: "Key",
  },
  {
    id: "keyco",
    symbol: "kec",
    name: "Keyco",
  },
  {
    id: "keyfi",
    symbol: "keyfi",
    name: "KeyFi",
  },
  {
    id: "keys-token",
    symbol: "keys",
    name: "Keys",
  },
  {
    id: "keyswap",
    symbol: "key",
    name: "KeySwap",
  },
  {
    id: "keytango",
    symbol: "tango",
    name: "keyTango",
  },
  {
    id: "kfan-token",
    symbol: "kfan",
    name: "KFan",
  },
  {
    id: "khalifa-finance",
    symbol: "khalifa",
    name: "Khalifa Finance",
  },
  {
    id: "khaos-finance",
    symbol: "khaos",
    name: "Khaos Finance",
  },
  {
    id: "ki",
    symbol: "xki",
    name: "KI",
  },
  {
    id: "kiba-inu",
    symbol: "kiba",
    name: "Kiba Inu",
  },
  {
    id: "kibbleswap",
    symbol: "kib",
    name: "KibbleSwap",
  },
  {
    id: "kichicoin",
    symbol: "kich",
    name: "KichiCoin",
  },
  {
    id: "kick",
    symbol: "kick",
    name: "Kick",
  },
  {
    id: "kick-io",
    symbol: "kick",
    name: "KICK.IO",
  },
  {
    id: "kickpad",
    symbol: "kpad",
    name: "KickPad",
  },
  {
    id: "kiki-finance",
    symbol: "kiki",
    name: "Kiki Finance",
  },
  {
    id: "kikswap",
    symbol: "kik",
    name: "Kikswap",
  },
  {
    id: "killswitch",
    symbol: "ksw",
    name: "KillSwitch",
  },
  {
    id: "killthezero",
    symbol: "ktz",
    name: "KILLTHEZERO",
  },
  {
    id: "kiloample",
    symbol: "kmpl",
    name: "KiloAmple",
  },
  {
    id: "kilo-shiba-inu",
    symbol: "kshib",
    name: "Kilo Shiba Inu",
  },
  {
    id: "kilt-protocol",
    symbol: "kilt",
    name: "KILT Protocol",
  },
  {
    id: "kimchi-finance",
    symbol: "kimchi",
    name: "KIMCHI.finance",
  },
  {
    id: "kimex",
    symbol: "kmx",
    name: "KIMEX",
  },
  {
    id: "kin",
    symbol: "kin",
    name: "Kin",
  },
  {
    id: "kind-ads-token",
    symbol: "kind",
    name: "Kind Ads",
  },
  {
    id: "kindcow-finance",
    symbol: "kind",
    name: "Kindcow Finance",
  },
  {
    id: "kindly",
    symbol: "kind",
    name: "Kindly",
  },
  {
    id: "kindness-for-soul",
    symbol: "kfs g",
    name: "Kindness For Soul",
  },
  {
    id: "kineko",
    symbol: "kko",
    name: "KKO Protocol",
  },
  {
    id: "kineko-knk",
    symbol: "knk",
    name: "Kineko",
  },
  {
    id: "kine-protocol",
    symbol: "kine",
    name: "Kine Protocol",
  },
  {
    id: "king-arthur",
    symbol: "bking",
    name: "King Arthur",
  },
  {
    id: "kingaru",
    symbol: "kru",
    name: "Kingaru",
  },
  {
    id: "kingcorgi-chain",
    symbol: "kcc",
    name: "KingCorgi Chain",
  },
  {
    id: "kingdoge",
    symbol: "kdoge",
    name: "KingDoge",
  },
  {
    id: "king-dog-inu",
    symbol: "kingdog",
    name: "King Dog Inu",
  },
  {
    id: "kingdom-game-4-0",
    symbol: "kdg",
    name: "Kingdom Game 4.0",
  },
  {
    id: "kingdom-karnage",
    symbol: "kkt",
    name: "Kingdom Karnage",
  },
  {
    id: "kingdom-quest",
    symbol: "kgc",
    name: "Kingdom Quest",
  },
  {
    id: "kingdom-raids",
    symbol: "krs",
    name: "Kingdom Raids",
  },
  {
    id: "kingdomswap",
    symbol: "ks",
    name: "Kingdomswap [OLD]",
  },
  {
    id: "kingdomswap-2",
    symbol: "ks2",
    name: "Kingdom Swap 2.0",
  },
  {
    id: "kingdomverse",
    symbol: "$king",
    name: "Kingdomverse",
  },
  {
    id: "kingdomx",
    symbol: "kt",
    name: "KingdomX",
  },
  {
    id: "king-forever",
    symbol: "kfr",
    name: "KING FOREVER",
  },
  {
    id: "kingmaker",
    symbol: "power",
    name: "Kingmaker",
  },
  {
    id: "king-money",
    symbol: "kim",
    name: "King Money",
  },
  {
    id: "king-of-legends-2",
    symbol: "kol",
    name: "King of Legends",
  },
  {
    id: "king-of-shiba",
    symbol: "kingshiba",
    name: "King of Shiba",
  },
  {
    id: "kingpad",
    symbol: "crown",
    name: "KingPad",
  },
  {
    id: "king-samo",
    symbol: "ksamo",
    name: "King Samo",
  },
  {
    id: "kings-coin",
    symbol: "kings",
    name: "Kings Coin",
  },
  {
    id: "king-shiba",
    symbol: "kingshib",
    name: "King Shiba",
  },
  {
    id: "kingspeed",
    symbol: "ksc",
    name: "KingSpeed",
  },
  {
    id: "king-swap",
    symbol: "$king",
    name: "King Swap",
  },
  {
    id: "kingxchain",
    symbol: "kxc",
    name: "KingXChain",
  },
  {
    id: "kintsugi",
    symbol: "kint",
    name: "Kintsugi",
  },
  {
    id: "kintsugi-btc",
    symbol: "kbtc",
    name: "Kintsugi BTC",
  },
  {
    id: "kira",
    symbol: "kira",
    name: "KIRA",
  },
  {
    id: "kiradoge-coin",
    symbol: "kiradoge",
    name: "Kiradoge",
  },
  {
    id: "kira-network",
    symbol: "kex",
    name: "KIRA Network",
  },
  {
    id: "kirby",
    symbol: "kirby",
    name: "Kirby",
  },
  {
    id: "kirobo",
    symbol: "kiro",
    name: "KIRO",
  },
  {
    id: "kishiburno",
    symbol: "kishiburno",
    name: "Kishiburno",
  },
  {
    id: "kishimoto",
    symbol: "kishimoto",
    name: "Kishimoto",
  },
  {
    id: "kishimoto-inu",
    symbol: "kishimoto",
    name: "Kishimoto (old)",
  },
  {
    id: "kishu-baby",
    symbol: "kishubaby",
    name: "Kishu Baby",
  },
  {
    id: "kishu-inu",
    symbol: "kishu",
    name: "Kishu Inu",
  },
  {
    id: "kishu-ken",
    symbol: "kishk",
    name: "Kishu Ken",
  },
  {
    id: "kishutama",
    symbol: "kishutama",
    name: "Kishutama",
  },
  {
    id: "kissan",
    symbol: "ksn",
    name: "Kissan",
  },
  {
    id: "kitsumon",
    symbol: "$kmc",
    name: "Kitsumon",
  },
  {
    id: "kitsune-inu-2",
    symbol: "kitsune",
    name: "Kitsune Inu",
  },
  {
    id: "kitsune-mask",
    symbol: "kmask",
    name: "Kitsune Mask",
  },
  {
    id: "kitten-coin",
    symbol: "kittens",
    name: "Kitten Coin",
  },
  {
    id: "kittenfinance",
    symbol: "kif",
    name: "KittenFinance",
  },
  {
    id: "kitty",
    symbol: "kit",
    name: "Kitty",
  },
  {
    id: "kittycake",
    symbol: "kcake",
    name: "KittyCake",
  },
  {
    id: "kittycoin",
    symbol: "kitty",
    name: "Kitty Coin",
  },
  {
    id: "kitty-coin-solana",
    symbol: "kitty",
    name: "Kitty Coin Solana",
  },
  {
    id: "kitty-finance",
    symbol: "kitty",
    name: "Kitty Finance",
  },
  {
    id: "kitty-inu",
    symbol: "kitty",
    name: "Kitty Inu",
  },
  {
    id: "kitty-solana",
    symbol: "kitty",
    name: "Kitty Solana",
  },
  {
    id: "kitty-vault-nftx",
    symbol: "kitty",
    name: "KITTY Vault (NFTX)",
  },
  {
    id: "kiwigo",
    symbol: "kgo",
    name: "Kiwigo",
  },
  {
    id: "klap-finance",
    symbol: "klap",
    name: "Klap Finance",
  },
  {
    id: "klaycity-orb",
    symbol: "orb",
    name: "Orbcity",
  },
  {
    id: "klaydice",
    symbol: "dice",
    name: "Klaydice",
  },
  {
    id: "klayfi-finance",
    symbol: "kfi",
    name: "KlayFi Finance",
  },
  {
    id: "klayswap-protocol",
    symbol: "ksp",
    name: "KlaySwap Protocol",
  },
  {
    id: "klaytn-dai",
    symbol: "kdai",
    name: "Klaytn Dai",
  },
  {
    id: "klay-token",
    symbol: "klay",
    name: "Klaytn",
  },
  {
    id: "klayuniverse",
    symbol: "kut",
    name: "KlayUniverse",
  },
  {
    id: "kleekai",
    symbol: "klee",
    name: "KleeKai",
  },
  {
    id: "klend",
    symbol: "klt",
    name: "KLend",
  },
  {
    id: "kleros",
    symbol: "pnk",
    name: "Kleros",
  },
  {
    id: "kleva",
    symbol: "kleva",
    name: "KLEVA",
  },
  {
    id: "klever",
    symbol: "klv",
    name: "Klever",
  },
  {
    id: "klever-finance",
    symbol: "kfi",
    name: "Klever Finance",
  },
  {
    id: "klex",
    symbol: "klex",
    name: "KLEX",
  },
  {
    id: "klima-dao",
    symbol: "klima",
    name: "Klima DAO",
  },
  {
    id: "klimatas",
    symbol: "kts",
    name: "Klimatas",
  },
  {
    id: "kling",
    symbol: "kling",
    name: "Kling",
  },
  {
    id: "klist-protocol",
    symbol: "list",
    name: "KList Protocol",
  },
  {
    id: "kmushicoin",
    symbol: "ktv",
    name: "Kmushicoin",
  },
  {
    id: "knekted",
    symbol: "knt",
    name: "Knekted",
  },
  {
    id: "knights-peasants",
    symbol: "knight",
    name: "Knights & Peasants",
  },
  {
    id: "knightswap",
    symbol: "knight",
    name: "KnightSwap",
  },
  {
    id: "knight-war-spirits",
    symbol: "kws",
    name: "Knight War Spirits",
  },
  {
    id: "knit-finance",
    symbol: "kft",
    name: "Knit Finance",
  },
  {
    id: "knoxfs",
    symbol: "kfx",
    name: "KnoxFS",
  },
  {
    id: "koacombat",
    symbol: "koacombat",
    name: "KoaCombat",
  },
  {
    id: "koala-token",
    symbol: "mkoala",
    name: "Koala",
  },
  {
    id: "kobocoin",
    symbol: "kobo",
    name: "Kobocoin",
  },
  {
    id: "kocaelispor-fan-token",
    symbol: "kstt",
    name: "Kocaelispor Fan Token",
  },
  {
    id: "kodachi-token",
    symbol: "kodachi",
    name: "Kodachi Token",
  },
  {
    id: "koda-finance",
    symbol: "koda",
    name: "Koda Cryptocurrency",
  },
  {
    id: "kodi",
    symbol: "kodi",
    name: "KODI",
  },
  {
    id: "koel-coin",
    symbol: "koel",
    name: "Koel Coin",
  },
  {
    id: "kogecoin",
    symbol: "kogecoin",
    name: "KogeCoin",
  },
  {
    id: "koi-network",
    symbol: "koi",
    name: "Koi Network",
  },
  {
    id: "koinos",
    symbol: "koin",
    name: "Koinos",
  },
  {
    id: "koisan",
    symbol: "kic",
    name: "Koisan",
  },
  {
    id: "koji",
    symbol: "koji",
    name: "Koji",
  },
  {
    id: "kok",
    symbol: "kok",
    name: "KOK",
  },
  {
    id: "kokoa-finance",
    symbol: "kokoa",
    name: "Kokoa Finance",
  },
  {
    id: "kokoa-stable-dollar",
    symbol: "ksd",
    name: "Kokoa Stable Dollar",
  },
  {
    id: "kokoswap",
    symbol: "koko",
    name: "KokoSwap",
  },
  {
    id: "kolibri-dao",
    symbol: "kdao",
    name: "Kolibri DAO",
  },
  {
    id: "kolibri-usd",
    symbol: "kusd",
    name: "Kolibri USD",
  },
  {
    id: "kollect",
    symbol: "kol",
    name: "Kollect",
  },
  {
    id: "kollector",
    symbol: "kltr",
    name: "Kollector",
  },
  {
    id: "kolnet",
    symbol: "kolnet",
    name: "KOLNET",
  },
  {
    id: "kols-offering-token",
    symbol: "kot",
    name: "Kols Offering",
  },
  {
    id: "komet",
    symbol: "komet",
    name: "Komet",
  },
  {
    id: "kommunitas",
    symbol: "kom",
    name: "Kommunitas",
  },
  {
    id: "komodo",
    symbol: "kmd",
    name: "Komodo",
  },
  {
    id: "kompete",
    symbol: "kompete",
    name: "KOMPETE Token",
  },
  {
    id: "kondux-v2",
    symbol: "kndx",
    name: "KONDUX",
  },
  {
    id: "kong-land-alpha-citizenship",
    symbol: "citizen",
    name: "KONG Land Alpha Citizenship",
  },
  {
    id: "kongtama",
    symbol: "kongtama",
    name: "Kongtama",
  },
  {
    id: "konjungate",
    symbol: "konj",
    name: "KONJUNGATE",
  },
  {
    id: "konnect",
    symbol: "kct",
    name: "Konnect",
  },
  {
    id: "konomi-network",
    symbol: "kono",
    name: "Konomi Network",
  },
  {
    id: "konpay",
    symbol: "kon",
    name: "KonPay",
  },
  {
    id: "koreadoge",
    symbol: "kdoge",
    name: "Koreadoge",
  },
  {
    id: "korea-entertainment-education-shopping",
    symbol: "kees",
    name: "Korea Entertainment Education & Shopping",
  },
  {
    id: "kori-inu",
    symbol: "kori",
    name: "Kori Inu",
  },
  {
    id: "koromaru",
    symbol: "koromaru",
    name: "KOROMARU",
  },
  {
    id: "korss-chain-launchpad",
    symbol: "kclp",
    name: "Kross Chain Launchpad",
  },
  {
    id: "kostren-finance",
    symbol: "ktn",
    name: "Kostren Finance",
  },
  {
    id: "koto",
    symbol: "koto",
    name: "Koto",
  },
  {
    id: "kounotori",
    symbol: "kto",
    name: "Kounotori",
  },
  {
    id: "kpop-coin",
    symbol: "kpop",
    name: "KPOP Coin",
  },
  {
    id: "krabots",
    symbol: "krac",
    name: "Krabots",
  },
  {
    id: "kragger-inu",
    symbol: "kinu",
    name: "Kragger Inu",
  },
  {
    id: "krakenpad",
    symbol: "krp",
    name: "Krakenpad",
  },
  {
    id: "kranz-token",
    symbol: "krz",
    name: "Kranz",
  },
  {
    id: "krause",
    symbol: "$krause",
    name: "KRAUSE",
  },
  {
    id: "kred",
    symbol: "kred",
    name: "KRED",
  },
  {
    id: "krida-fans",
    symbol: "krida",
    name: "Krida Fans",
  },
  {
    id: "krill",
    symbol: "krill",
    name: "Krill",
  },
  {
    id: "kripto",
    symbol: "kripto",
    name: "Kripto",
  },
  {
    id: "kripto-galaxy-battle",
    symbol: "kaba",
    name: "Kripto Galaxy Battle",
  },
  {
    id: "krogan",
    symbol: "kro",
    name: "Krogan",
  },
  {
    id: "kromatika",
    symbol: "krom",
    name: "Kromatika",
  },
  {
    id: "krome-shares",
    symbol: "krome",
    name: "KROME Shares",
  },
  {
    id: "krome-stablecoin",
    symbol: "usdk",
    name: "KROME stablecoin",
  },
  {
    id: "kronobit",
    symbol: "knb",
    name: "Kronobit",
  },
  {
    id: "krook-coin",
    symbol: "krook",
    name: "Krook Coin",
  },
  {
    id: "krown",
    symbol: "krw",
    name: "KROWN",
  },
  {
    id: "kryll",
    symbol: "krl",
    name: "KRYLL",
  },
  {
    id: "kryptobellion",
    symbol: "krypto",
    name: "Kryptobellion",
  },
  {
    id: "krypto-kitty",
    symbol: "kty",
    name: "Krypto Kitty",
  },
  {
    id: "kryptomon",
    symbol: "kmon",
    name: "Kryptomon",
  },
  {
    id: "krypton-dao",
    symbol: "krd",
    name: "Krypton DAO",
  },
  {
    id: "krypton-token",
    symbol: "kgc",
    name: "Krypton Galaxy Coin",
  },
  {
    id: "kryptopets",
    symbol: "kpets",
    name: "KryptoPets",
  },
  {
    id: "kryptview",
    symbol: "kvt",
    name: "Kryptview",
  },
  {
    id: "kryxivia-game",
    symbol: "kxa",
    name: "Kryxivia Game",
  },
  {
    id: "kryza-network",
    symbol: "krn",
    name: "KRYZA Network",
  },
  {
    id: "ksm-starter",
    symbol: "kst",
    name: "Karus Starter",
  },
  {
    id: "kstarcoin",
    symbol: "ksc",
    name: "KStarCoin",
  },
  {
    id: "k-tune",
    symbol: "ktt",
    name: "K-Tune",
  },
  {
    id: "kuaitoken",
    symbol: "kt",
    name: "Kuai",
  },
  {
    id: "kubecoin",
    symbol: "kube",
    name: "KubeCoin",
  },
  {
    id: "kubic",
    symbol: "kubic",
    name: "Kubic",
  },
  {
    id: "kucoin-shares",
    symbol: "kcs",
    name: "KuCoin",
  },
  {
    id: "kudoge",
    symbol: "kudo",
    name: "KuDoge",
  },
  {
    id: "kujira",
    symbol: "kuji",
    name: "Kujira",
  },
  {
    id: "kuky-star",
    symbol: "kuky",
    name: "Kuky Star",
  },
  {
    id: "kulupu",
    symbol: "klp",
    name: "Kulupu",
  },
  {
    id: "kumadex-token",
    symbol: "dkuma",
    name: "KumaDex Token",
  },
  {
    id: "kuma-inu",
    symbol: "kuma",
    name: "Kuma Inu",
  },
  {
    id: "kumu-finance",
    symbol: "kumu",
    name: "Kumu Finance",
  },
  {
    id: "kunci-coin",
    symbol: "kunci",
    name: "Kunci Coin",
  },
  {
    id: "kunoichix",
    symbol: "kuno",
    name: "KunoichiX",
  },
  {
    id: "kurai-inu",
    symbol: "kurai",
    name: "Kurai Inu",
  },
  {
    id: "kuramainu",
    symbol: "kunu",
    name: "KuramaInu",
  },
  {
    id: "kurobi",
    symbol: "kuro",
    name: "Kurobi",
  },
  {
    id: "kuro-shiba",
    symbol: "kuro",
    name: "Kuro Shiba",
  },
  {
    id: "kurrent",
    symbol: "kurt",
    name: "Kurrent",
  },
  {
    id: "kusama",
    symbol: "ksm",
    name: "Kusama",
  },
  {
    id: "kusd-t",
    symbol: "kusd-t",
    name: "KUSD-T",
  },
  {
    id: "kush-finance",
    symbol: "kseed",
    name: "Kush Finance",
  },
  {
    id: "kusunoki-samurai",
    symbol: "kusunoki",
    name: "Kusunoki Samurai",
  },
  {
    id: "kuswap",
    symbol: "kus",
    name: "KuSwap",
  },
  {
    id: "kuwa-oracle",
    symbol: "kuor",
    name: "Kuwa Oracle",
  },
  {
    id: "kuy-token",
    symbol: "kuy",
    name: "KUY",
  },
  {
    id: "kwai",
    symbol: "kwai",
    name: "KWAI",
  },
  {
    id: "kwenta",
    symbol: "kwenta",
    name: "Kwenta",
  },
  {
    id: "kwiktrust",
    symbol: "ktx",
    name: "KwikTrust",
  },
  {
    id: "kyanite",
    symbol: "kyan",
    name: "Kyanite",
  },
  {
    id: "kyberdyne",
    symbol: "kbd",
    name: "Kyberdyne",
  },
  {
    id: "kyber-network",
    symbol: "kncl",
    name: "Kyber Network Crystal Legacy",
  },
  {
    id: "kyber-network-crystal",
    symbol: "knc",
    name: "Kyber Network Crystal",
  },
  {
    id: "kyccoin",
    symbol: "kycc",
    name: "KYCCOIN",
  },
  {
    id: "kylin-network",
    symbol: "kyl",
    name: "Kylin Network",
  },
  {
    id: "kyoko",
    symbol: "kyoko",
    name: "Kyoko",
  },
  {
    id: "kyrrex",
    symbol: "krrx",
    name: "Kyrrex",
  },
  {
    id: "kyte-one",
    symbol: "kte",
    name: "Kyte.One",
  },
  {
    id: "kzcash",
    symbol: "kzc",
    name: "Kzcash",
  },
  {
    id: "l2pad",
    symbol: "l2pad",
    name: "L2PAD",
  },
  {
    id: "l3usd",
    symbol: "l3usd",
    name: "L3USD",
  },
  {
    id: "label-foundation",
    symbol: "lbl",
    name: "LABEL Foundation",
  },
  {
    id: "labracoin",
    symbol: "labra",
    name: "LabraCoin",
  },
  {
    id: "labs-group",
    symbol: "labs",
    name: "LABS Group",
  },
  {
    id: "labs-protocol",
    symbol: "labs",
    name: "LABS Protocol",
  },
  {
    id: "laddercaster",
    symbol: "lada",
    name: "LadderCaster",
  },
  {
    id: "lady-uni",
    symbol: "luni",
    name: "Lady Uni",
  },
  {
    id: "ladz",
    symbol: "ladz",
    name: "LADZ",
  },
  {
    id: "laeeb",
    symbol: "laeeb",
    name: "LaEeb",
  },
  {
    id: "la-eeb",
    symbol: "la´eeb",
    name: "La´eeb",
  },
  {
    id: "la-eeb-football",
    symbol: "laeeb",
    name: "La'eeb Football",
  },
  {
    id: "laeeb-inu",
    symbol: "laeeb",
    name: "Laeeb Inu",
  },
  {
    id: "laeeb-inu-erc",
    symbol: "laeeb",
    name: "Laeeb Inu ERC",
  },
  {
    id: "laeeb-token-2",
    symbol: "laeeb",
    name: "LaEeb Token",
  },
  {
    id: "laika",
    symbol: "laika",
    name: "Laika",
  },
  {
    id: "laine-stake",
    symbol: "lainesol",
    name: "Laine Stake",
  },
  {
    id: "lakeviewmeta",
    symbol: "lvm",
    name: "LakeViewMeta",
  },
  {
    id: "lambda",
    symbol: "lamb",
    name: "Lambda",
  },
  {
    id: "lamden",
    symbol: "tau",
    name: "Lamden",
  },
  {
    id: "lamea",
    symbol: "lamea",
    name: "LAMEA",
  },
  {
    id: "lanacoin",
    symbol: "lana",
    name: "LanaCoin",
  },
  {
    id: "lance-coin",
    symbol: "lce",
    name: "Lance Coin",
  },
  {
    id: "lanceria",
    symbol: "lanc",
    name: "Lanceria",
  },
  {
    id: "landboard",
    symbol: "land",
    name: "Landboard",
  },
  {
    id: "land-of-conquest-slg",
    symbol: "slg",
    name: "Land Of Conquest SLG",
  },
  {
    id: "land-of-fantasy",
    symbol: "lof",
    name: "Land of Fantasy",
  },
  {
    id: "landshare",
    symbol: "land",
    name: "Landshare",
  },
  {
    id: "landworld",
    symbol: "lwd",
    name: "Landworld",
  },
  {
    id: "lapad",
    symbol: "lpdt",
    name: "LaPAD",
  },
  {
    id: "la-peseta",
    symbol: "pta",
    name: "La Peseta",
  },
  {
    id: "lapislazuli",
    symbol: "lilli",
    name: "Lapislazuli",
  },
  {
    id: "laqira-protocol",
    symbol: "lqr",
    name: "Laqira Protocol",
  },
  {
    id: "larix",
    symbol: "larix",
    name: "Larix",
  },
  {
    id: "laro",
    symbol: "lrc",
    name: "Laro",
  },
  {
    id: "lasereyes",
    symbol: "lsr",
    name: "LaserEyes",
  },
  {
    id: "laser-eyes",
    symbol: "lasereyes",
    name: "Laser Eyes",
  },
  {
    id: "lasrever",
    symbol: "lsvr",
    name: "Lasrever",
  },
  {
    id: "last-survivor",
    symbol: "lsc",
    name: "Last Survivor",
  },
  {
    id: "latiumx",
    symbol: "latx",
    name: "LatiumX",
  },
  {
    id: "latoken",
    symbol: "la",
    name: "LA",
  },
  {
    id: "lattice-token",
    symbol: "ltx",
    name: "Lattice",
  },
  {
    id: "launchblock",
    symbol: "lbp",
    name: "LaunchBlock",
  },
  {
    id: "launchpool",
    symbol: "lpool",
    name: "Launchpool",
  },
  {
    id: "launchwall",
    symbol: "wall",
    name: "LaunchWall",
  },
  {
    id: "launchzone",
    symbol: "lz",
    name: "LaunchZone",
  },
  {
    id: "laurus-coin",
    symbol: "lscn",
    name: "Laurus Coin",
  },
  {
    id: "lavaswap",
    symbol: "lava",
    name: "Lavaswap",
  },
  {
    id: "lavax-labs",
    symbol: "lavax",
    name: "LavaX Labs",
  },
  {
    id: "law",
    symbol: "law",
    name: "LAW",
  },
  {
    id: "law-blocks",
    symbol: "lbt",
    name: "Law Blocks",
  },
  {
    id: "law-token",
    symbol: "law",
    name: "Law Token",
  },
  {
    id: "layer2dao",
    symbol: "l2dao",
    name: "Layer2DAO",
  },
  {
    id: "lazio-fan-token",
    symbol: "lazio",
    name: "Lazio Fan Token",
  },
  {
    id: "lazy-shiba",
    symbol: "lazyshiba",
    name: "Lazy Shiba",
  },
  {
    id: "lbk",
    symbol: "lbk",
    name: "LBK",
  },
  {
    id: "lbry-credits",
    symbol: "lbc",
    name: "LBRY Credits",
  },
  {
    id: "lcg",
    symbol: "lcg",
    name: "LCG",
  },
  {
    id: "lcms",
    symbol: "lcms",
    name: "LCMS",
  },
  {
    id: "lcx",
    symbol: "lcx",
    name: "LCX",
  },
  {
    id: "lead-token",
    symbol: "lead",
    name: "Lead",
  },
  {
    id: "leafcoin",
    symbol: "leaf",
    name: "Leafcoin",
  },
  {
    id: "leaguedao-governance-token",
    symbol: "leag",
    name: "LeagueDAO Governance",
  },
  {
    id: "league-of-ancients",
    symbol: "loa",
    name: "League of Ancients",
  },
  {
    id: "league-of-kingdoms",
    symbol: "loka",
    name: "League of Kingdoms",
  },
  {
    id: "league-of-pets",
    symbol: "glory",
    name: "League Of Pets",
  },
  {
    id: "league-of-zodiacs",
    symbol: "loz",
    name: "League of Zodiacs",
  },
  {
    id: "lean",
    symbol: "lean",
    name: "Lean",
  },
  {
    id: "leandro-lopes",
    symbol: "lopes",
    name: "Leandro Lopes",
  },
  {
    id: "lean-management-token",
    symbol: "lean",
    name: "Lean Management Token",
  },
  {
    id: "leapableio",
    symbol: "lea",
    name: "LeapableIO",
  },
  {
    id: "leap-token",
    symbol: "leap",
    name: "LEAP Token",
  },
  {
    id: "learning-cash-2",
    symbol: "ead",
    name: "Learning Cash",
  },
  {
    id: "learning-star",
    symbol: "lstar",
    name: "Learning Star",
  },
  {
    id: "leash",
    symbol: "leash",
    name: "Doge Killer",
  },
  {
    id: "ledgerscore",
    symbol: "led",
    name: "LedgerScore",
  },
  {
    id: "ledgis",
    symbol: "led",
    name: "Ledgis",
  },
  {
    id: "ledgity",
    symbol: "lty",
    name: "Ledgity",
  },
  {
    id: "leeds-united-fan-token",
    symbol: "lufc",
    name: "Leeds United Fan Token",
  },
  {
    id: "leek-token",
    symbol: "leek",
    name: "Leek",
  },
  {
    id: "legacy-ichi",
    symbol: "ichi",
    name: "Legacy ICHI",
  },
  {
    id: "legal-block",
    symbol: "lbk",
    name: "Legal Block",
  },
  {
    id: "legend-of-fantasy-war",
    symbol: "lfw",
    name: "Linked Finance World",
  },
  {
    id: "legends",
    symbol: "fwcl",
    name: "Legends",
  },
  {
    id: "legends-of-aria",
    symbol: "aria",
    name: "Legends Of Aria",
  },
  {
    id: "legends-of-elysium",
    symbol: "loe",
    name: "Legends of Elysium",
  },
  {
    id: "legends-of-mitra",
    symbol: "mita",
    name: "Legends of Mitra",
  },
  {
    id: "legends-room",
    symbol: "more",
    name: "More",
  },
  {
    id: "legia-warsaw-fan-token",
    symbol: "leg",
    name: "Legia Warsaw Fan Token",
  },
  {
    id: "legion-network",
    symbol: "lgx",
    name: "Legion Network",
  },
  {
    id: "lego-coin",
    symbol: "lego",
    name: "Lego Coin V1",
  },
  {
    id: "lego-coin-v2",
    symbol: "lego",
    name: "Lego Coin V2",
  },
  {
    id: "legolas-exchange",
    symbol: "lgo",
    name: "LGO",
  },
  {
    id: "leicester-tigers-fan-token",
    symbol: "tigers",
    name: "Leicester Tigers Fan Token",
  },
  {
    id: "leisure",
    symbol: "lis",
    name: "Leisure",
  },
  {
    id: "leisuremeta",
    symbol: "lm",
    name: "LeisureMeta",
  },
  {
    id: "leisurepay",
    symbol: "lpy",
    name: "LeisurePay",
  },
  {
    id: "lemochain",
    symbol: "lemo",
    name: "LemoChain",
  },
  {
    id: "lemonchain",
    symbol: "lemc",
    name: "LemonChain",
  },
  {
    id: "lemond",
    symbol: "lemd",
    name: "Lemond",
  },
  {
    id: "lemonn-token",
    symbol: "lmn",
    name: "Lemonn",
  },
  {
    id: "lemon-token",
    symbol: "lemn",
    name: "Crypto Lemon",
  },
  {
    id: "lenda",
    symbol: "lenda",
    name: "Lenda",
  },
  {
    id: "lendefi",
    symbol: "ldfi",
    name: "Lendefi",
  },
  {
    id: "lend-finance",
    symbol: "lend",
    name: "Lend Finance",
  },
  {
    id: "lend-flare-dao-token",
    symbol: "lft",
    name: "Lend Flare Dao",
  },
  {
    id: "lendhub",
    symbol: "lhb",
    name: "Lendhub",
  },
  {
    id: "lendingblock",
    symbol: "lnd",
    name: "Lendingblock",
  },
  {
    id: "lendroid-support-token",
    symbol: "lst",
    name: "Lendroid Support",
  },
  {
    id: "leo",
    symbol: "leo",
    name: "Leo",
  },
  {
    id: "leonicorn-swap",
    symbol: "leos",
    name: "Leonicorn Swap",
  },
  {
    id: "leonidas",
    symbol: "leo",
    name: "Leonidas",
  },
  {
    id: "leonidasbilic",
    symbol: "lio",
    name: "Leonidasbilic",
  },
  {
    id: "leonidas-token",
    symbol: "leonidas",
    name: "Leonidas Token",
  },
  {
    id: "leon-token",
    symbol: "leon",
    name: "Leonicorn LEON",
  },
  {
    id: "leopard",
    symbol: "leopard",
    name: "Leopard",
  },
  {
    id: "leo-token",
    symbol: "leo",
    name: "LEO Token",
  },
  {
    id: "lepasa",
    symbol: "lepa",
    name: "Lepasa",
  },
  {
    id: "leprechaun-finance",
    symbol: "lep",
    name: "Leprechaun Finance",
  },
  {
    id: "lepricon",
    symbol: "l3p",
    name: "Lepricon",
  },
  {
    id: "leslar-metaverse",
    symbol: "llverse",
    name: "LESLAR Metaverse",
  },
  {
    id: "letcoinshop",
    symbol: "lcs",
    name: "LetCoinShop",
  },
  {
    id: "lethean",
    symbol: "lthn",
    name: "Lethean",
  },
  {
    id: "letitride",
    symbol: "lir",
    name: "LetItRide",
  },
  {
    id: "lets-go-brandon",
    symbol: "letsgo",
    name: "Lets Go Brandon",
  },
  {
    id: "levante-ud-fan-token",
    symbol: "lev",
    name: "Levante U.D. Fan Token",
  },
  {
    id: "leve-invest",
    symbol: "leve",
    name: "Leve Invest",
  },
  {
    id: "levelapp",
    symbol: "lvl",
    name: "LevelApp",
  },
  {
    id: "levelg",
    symbol: "levelg",
    name: "LEVELG",
  },
  {
    id: "lever",
    symbol: "lever",
    name: "LeverFi",
  },
  {
    id: "leverageinu",
    symbol: "levi",
    name: "LeverageInu",
  },
  {
    id: "leverj-gluon",
    symbol: "l2",
    name: "Leverj Gluon",
  },
  {
    id: "lever-network",
    symbol: "lev",
    name: "Lever Network",
  },
  {
    id: "levin",
    symbol: "levin",
    name: "Levin",
  },
  {
    id: "levolution",
    symbol: "levl",
    name: "Levolution",
  },
  {
    id: "lexit-2",
    symbol: "lexi",
    name: "LEXIT",
  },
  {
    id: "lfgswap-finance",
    symbol: "lfg",
    name: "LFGSwap Finance",
  },
  {
    id: "lgcy-network",
    symbol: "lgcy",
    name: "LGCY Network",
  },
  {
    id: "lhcoin",
    symbol: "lhcoin",
    name: "LHCoin",
  },
  {
    id: "libera-financial",
    symbol: "libera",
    name: "Libera Financial",
  },
  {
    id: "liber-coin",
    symbol: "lbr",
    name: "LIBER COIN",
  },
  {
    id: "libero-financial",
    symbol: "libero",
    name: "Libero Financial",
  },
  {
    id: "libfx",
    symbol: "libfx",
    name: "Libfx",
  },
  {
    id: "libonomy",
    symbol: "lby",
    name: "Libonomy",
  },
  {
    id: "libra-credit",
    symbol: "lba",
    name: "Libra Credit",
  },
  {
    id: "lichang",
    symbol: "lc",
    name: "Lichang",
  },
  {
    id: "lido-dao",
    symbol: "ldo",
    name: "Lido DAO",
  },
  {
    id: "lido-dao-wormhole",
    symbol: "ldo",
    name: "Lido DAO (Wormhole)",
  },
  {
    id: "lido-on-kusama",
    symbol: "wstksm",
    name: "Lido on Kusama",
  },
  {
    id: "lido-staked-matic",
    symbol: "stmatic",
    name: "Lido Staked Matic",
  },
  {
    id: "lido-staked-polkadot",
    symbol: "stdot",
    name: "Lido Staked Polkadot",
  },
  {
    id: "lido-staked-sol",
    symbol: "stsol",
    name: "Lido Staked SOL",
  },
  {
    id: "lien",
    symbol: "lien",
    name: "Lien",
  },
  {
    id: "lif3",
    symbol: "lif3",
    name: "LIF3",
  },
  {
    id: "lif3-lshare",
    symbol: "lshare",
    name: "LIF3 LSHARE",
  },
  {
    id: "life-coin",
    symbol: "lfc",
    name: "Life Coin",
  },
  {
    id: "life-crypto",
    symbol: "life",
    name: "Life Crypto",
  },
  {
    id: "life-dao",
    symbol: "lf",
    name: "Life DAO",
  },
  {
    id: "lifetime",
    symbol: "lft",
    name: "Lifetime",
  },
  {
    id: "life-token-v2",
    symbol: "ltnv2",
    name: "Life v2",
  },
  {
    id: "lifinity",
    symbol: "lfnty",
    name: "Lifinity",
  },
  {
    id: "lightcoin",
    symbol: "lhc",
    name: "Lightcoin",
  },
  {
    id: "light-defi",
    symbol: "light",
    name: "Light Defi",
  },
  {
    id: "lightening-cash",
    symbol: "lic",
    name: "Lightening Cash",
  },
  {
    id: "lightning-bitcoin",
    symbol: "lbtc",
    name: "Lightning Bitcoin",
  },
  {
    id: "lightningcash-gold",
    symbol: "lnc",
    name: "LightningCash",
  },
  {
    id: "lightningcoin",
    symbol: "lc",
    name: "LightningCoin",
  },
  {
    id: "lightning-protocol",
    symbol: "light",
    name: "Lightning Protocol",
  },
  {
    id: "lightstreams",
    symbol: "pht",
    name: "Lightstreams Photon",
  },
  {
    id: "light-year",
    symbol: "lc",
    name: "Light Year",
  },
  {
    id: "lightyears",
    symbol: "year",
    name: "Lightyears",
  },
  {
    id: "likecoin",
    symbol: "like",
    name: "LikeCoin",
  },
  {
    id: "lil-floki",
    symbol: "lilfloki",
    name: "Lil Floki",
  },
  {
    id: "lilith-swap",
    symbol: "llth",
    name: "Lilith Swap",
  },
  {
    id: "lillion",
    symbol: "lil",
    name: "Lillion",
  },
  {
    id: "lilly-finance",
    symbol: "ly",
    name: "Lilly Token",
  },
  {
    id: "limcore",
    symbol: "limc",
    name: "LimCore",
  },
  {
    id: "limestone-network",
    symbol: "limex",
    name: "Limestone Network",
  },
  {
    id: "limited-euro",
    symbol: "leur",
    name: "Limited Euro",
  },
  {
    id: "limited-usd",
    symbol: "lusd",
    name: "Limited USD",
  },
  {
    id: "limitswap",
    symbol: "limit",
    name: "LimitSwap",
  },
  {
    id: "limocoin-swap",
    symbol: "lmcswap",
    name: "Limocoin Swap",
  },
  {
    id: "lina",
    symbol: "lina",
    name: "LINA",
  },
  {
    id: "linda",
    symbol: "mrx",
    name: "Metrix Coin",
  },
  {
    id: "linear",
    symbol: "lina",
    name: "Linear",
  },
  {
    id: "linear-protocol",
    symbol: "linear",
    name: "LiNEAR Protocol",
  },
  {
    id: "linework-coin",
    symbol: "lwc",
    name: "Linework Coin",
  },
  {
    id: "linfinity",
    symbol: "lfc",
    name: "Linfinity",
  },
  {
    id: "lingose",
    symbol: "ling",
    name: "Lingose",
  },
  {
    id: "linix",
    symbol: "lnx",
    name: "LNX Protocol",
  },
  {
    id: "link",
    symbol: "ln",
    name: "LINK",
  },
  {
    id: "linka",
    symbol: "linka",
    name: "LINKA",
  },
  {
    id: "linkart",
    symbol: "lar",
    name: "LinkArt",
  },
  {
    id: "linkcoin-token",
    symbol: "lkn",
    name: "LinkCoin",
  },
  {
    id: "linkdao",
    symbol: "lkd",
    name: "LinkDao",
  },
  {
    id: "linker-coin",
    symbol: "lnc",
    name: "Linker Coin",
  },
  {
    id: "linkeye",
    symbol: "let",
    name: "Linkeye",
  },
  {
    id: "link-machine-learning",
    symbol: "lml",
    name: "Link Machine Learning",
  },
  {
    id: "linkpool",
    symbol: "lpl",
    name: "LinkPool",
  },
  {
    id: "links",
    symbol: "links",
    name: "Links",
  },
  {
    id: "linksync",
    symbol: "sync",
    name: "LinkSync",
  },
  {
    id: "linspirit",
    symbol: "linspirit",
    name: "linSpirit",
  },
  {
    id: "lion-scrub-money",
    symbol: "lion",
    name: "Lion Scrub Money [OLD]",
  },
  {
    id: "lion-scrub-money-2",
    symbol: "lion",
    name: "Lion Scrub Money",
  },
  {
    id: "lion-token",
    symbol: "lion",
    name: "Lion",
  },
  {
    id: "liq-protocol",
    symbol: "liq",
    name: "LIQ Protocol",
  },
  {
    id: "liquid-astr",
    symbol: "nastr",
    name: "Liquid ASTR",
  },
  {
    id: "liquid-collectibles",
    symbol: "lico",
    name: "Liquid Collectibles",
  },
  {
    id: "liquid-cro",
    symbol: "lcro",
    name: "Liquid CRO",
  },
  {
    id: "liquid-crowdloan-dot",
    symbol: "lcdot",
    name: "Liquid Crowdloan DOT",
  },
  {
    id: "liquiddriver",
    symbol: "lqdr",
    name: "LiquidDriver",
  },
  {
    id: "liquid-finance",
    symbol: "liqd",
    name: "Liquid Finance",
  },
  {
    id: "liquid-icp",
    symbol: "licp",
    name: "Liquid ICP",
  },
  {
    id: "liquidifty",
    symbol: "lqt",
    name: "Liquidifty",
  },
  {
    id: "liquidify",
    symbol: "lat",
    name: "Liquidify",
  },
  {
    id: "liquid-ksm",
    symbol: "lksm",
    name: "Liquid KSM",
  },
  {
    id: "liquid-staking-crescent",
    symbol: "bcre",
    name: "Liquid Staking Crescent",
  },
  {
    id: "liquid-staking-dot",
    symbol: "ldot",
    name: "Liquid Staking Dot",
  },
  {
    id: "liquidswap",
    symbol: "lqd",
    name: "LiquidSwap",
  },
  {
    id: "liquidus",
    symbol: "liq",
    name: "Liquidus",
  },
  {
    id: "liquinity",
    symbol: "lqnty",
    name: "Liquinity",
  },
  {
    id: "liquity",
    symbol: "lqty",
    name: "Liquity",
  },
  {
    id: "liquity-usd",
    symbol: "lusd",
    name: "Liquity USD",
  },
  {
    id: "liqwid-finance",
    symbol: "lq",
    name: "Liqwid Finance",
  },
  {
    id: "lisk",
    symbol: "lsk",
    name: "Lisk",
  },
  {
    id: "listenify",
    symbol: "audio",
    name: "Listenify",
  },
  {
    id: "listen-to-earn",
    symbol: "lte",
    name: "Listen To Earn",
  },
  {
    id: "lit",
    symbol: "lit",
    name: "LIT",
  },
  {
    id: "litebar",
    symbol: "ltb",
    name: "LiteBar",
  },
  {
    id: "litebitcoin",
    symbol: "lbtc",
    name: "LiteBitcoin",
  },
  {
    id: "litecash",
    symbol: "cash",
    name: "Litecash",
  },
  {
    id: "litecoin",
    symbol: "ltc",
    name: "Litecoin",
  },
  {
    id: "litecoin-cash",
    symbol: "lcc",
    name: "Litecoin Cash",
  },
  {
    id: "litecoin-plus",
    symbol: "lcp",
    name: "Litecoin Plus",
  },
  {
    id: "litecoin-sv",
    symbol: "lsv",
    name: "Litecoin SV",
  },
  {
    id: "litecoin-token",
    symbol: "ltk",
    name: "Litecoin LTK",
  },
  {
    id: "litecoin-ultra",
    symbol: "ltcu",
    name: "LiteCoin Ultra",
  },
  {
    id: "litecoinz",
    symbol: "ltz",
    name: "LitecoinZ",
  },
  {
    id: "litedex",
    symbol: "ldx",
    name: "Litedex",
  },
  {
    id: "litedoge",
    symbol: "ldoge",
    name: "LiteDoge",
  },
  {
    id: "litentry",
    symbol: "lit",
    name: "Litentry",
  },
  {
    id: "liteusd",
    symbol: "lite",
    name: "LiteUSD",
  },
  {
    id: "litex",
    symbol: "lxt",
    name: "LITEX",
  },
  {
    id: "litherium",
    symbol: "lith",
    name: "Litherium",
  },
  {
    id: "lithium-2",
    symbol: "lithium",
    name: "Lithium",
  },
  {
    id: "lithium-finance",
    symbol: "lith",
    name: "Lithium Finance",
  },
  {
    id: "lithium-ventures",
    symbol: "ions",
    name: "Lithium Ventures",
  },
  {
    id: "lithosphere",
    symbol: "litho",
    name: "Lithosphere",
  },
  {
    id: "lith-token",
    symbol: "lith",
    name: "Lith [OLD]",
  },
  {
    id: "lition",
    symbol: "lit",
    name: "Lition",
  },
  {
    id: "little-angry-bunny-v2",
    symbol: "lab-v2",
    name: "Little Angry Bunny v2",
  },
  {
    id: "little-bunny-rocket",
    symbol: "lbr",
    name: "Little Bunny Rocket",
  },
  {
    id: "littleghosts-ectoplasm",
    symbol: "ecto",
    name: "LittleGhosts Ectoplasm",
  },
  {
    id: "littleinu",
    symbol: "linu",
    name: "LittleInu",
  },
  {
    id: "little-rabbit-v2",
    symbol: "ltrbt",
    name: "Little Rabbit V2",
  },
  {
    id: "littlesesame",
    symbol: "lsc",
    name: "Littlesesame",
  },
  {
    id: "little-ugly-duck",
    symbol: "lud",
    name: "Little Ugly Duck",
  },
  {
    id: "litx",
    symbol: "litx",
    name: "Lith Token",
  },
  {
    id: "livegreen-coin",
    symbol: "lgc",
    name: "LiveGreen Coin",
  },
  {
    id: "livenpay",
    symbol: "lvn",
    name: "LivenPay",
  },
  {
    id: "livepeer",
    symbol: "lpt",
    name: "Livepeer",
  },
  {
    id: "live-swap-coin",
    symbol: "lsc",
    name: "Live Swap Coin",
  },
  {
    id: "livetrade-token",
    symbol: "ltd",
    name: "LiveTrade",
  },
  {
    id: "lixir-protocol",
    symbol: "lix",
    name: "Lixir Finance",
  },
  {
    id: "lizard-token",
    symbol: "lizard",
    name: "Lizard",
  },
  {
    id: "lizardtoken-finance",
    symbol: "liz",
    name: "LizardToken.Finance",
  },
  {
    id: "lnko-token",
    symbol: "lnko",
    name: "LNKO",
  },
  {
    id: "loa-protocol",
    symbol: "loa",
    name: "LOA Protocol",
  },
  {
    id: "lobby",
    symbol: "lby",
    name: "Lobby",
  },
  {
    id: "lobis",
    symbol: "lobi",
    name: "Lobis",
  },
  {
    id: "localcoinswap",
    symbol: "lcs",
    name: "LocalCoinSwap",
  },
  {
    id: "localtrade",
    symbol: "ltt",
    name: "LocalTrade",
  },
  {
    id: "local-traders",
    symbol: "lct",
    name: "Local Traders",
  },
  {
    id: "locgame",
    symbol: "locg",
    name: "LOCGame",
  },
  {
    id: "lockchain",
    symbol: "loc",
    name: "LockTrip",
  },
  {
    id: "locker-token",
    symbol: "lkt",
    name: "Locker Token",
  },
  {
    id: "lockness",
    symbol: "lkn",
    name: "Lockness",
  },
  {
    id: "locometa",
    symbol: "loco",
    name: "LocoMeta",
  },
  {
    id: "locus-chain",
    symbol: "locus",
    name: "Locus Chain",
  },
  {
    id: "lodestar",
    symbol: "lode",
    name: "Lodestar",
  },
  {
    id: "lode-token",
    symbol: "lode",
    name: "LODE Token",
  },
  {
    id: "lofi",
    symbol: "lofi",
    name: "LOFI",
  },
  {
    id: "loge-of-the-rings",
    symbol: "loge",
    name: "Loge Of The Rings",
  },
  {
    id: "logos",
    symbol: "log",
    name: "LOGOS",
  },
  {
    id: "loki-network",
    symbol: "oxen",
    name: "Oxen",
  },
  {
    id: "lokr",
    symbol: "lkr",
    name: "Lokr",
  },
  {
    id: "lol",
    symbol: "lol",
    name: "LOL",
  },
  {
    id: "loltoken",
    symbol: "lol",
    name: "LOLTOKEN",
  },
  {
    id: "londoncoingold",
    symbol: "ldxg",
    name: "LondonCoinGold",
  },
  {
    id: "lonelyfans",
    symbol: "lof",
    name: "LonelyFans",
  },
  {
    id: "loobr",
    symbol: "loobr",
    name: "LooBr",
  },
  {
    id: "lookscoin",
    symbol: "look",
    name: "LooksCoin",
  },
  {
    id: "looksrare",
    symbol: "looks",
    name: "LooksRare",
  },
  {
    id: "loomi",
    symbol: "loomi",
    name: "Loomi",
  },
  {
    id: "loom-network",
    symbol: "loomold",
    name: "Loom Network (OLD)",
  },
  {
    id: "loom-network-new",
    symbol: "loom",
    name: "Loom Network (NEW)",
  },
  {
    id: "loon-network",
    symbol: "loon",
    name: "Loon Network",
  },
  {
    id: "loop",
    symbol: "loop",
    name: "LOOP",
  },
  {
    id: "loopnetwork",
    symbol: "loop",
    name: "LoopNetwork",
  },
  {
    id: "loopring",
    symbol: "lrc",
    name: "Loopring",
  },
  {
    id: "loopswap",
    symbol: "lswap",
    name: "LoopSwap",
  },
  {
    id: "loop-x-network",
    symbol: "loop",
    name: "Loop X Network",
  },
  {
    id: "loot",
    symbol: "loot",
    name: "Lootex",
  },
  {
    id: "loot-dollar",
    symbol: "lootdollar",
    name: "Loot Dollar",
  },
  {
    id: "loot-token",
    symbol: "loot",
    name: "Loot",
  },
  {
    id: "lord-arena",
    symbol: "lorda",
    name: "Lord Arena",
  },
  {
    id: "lorde-edge",
    symbol: "edgelon",
    name: "Lorde Edge",
  },
  {
    id: "lord-of-power-golden-eagle",
    symbol: "gde",
    name: "Lord of Power Golden Eagle",
  },
  {
    id: "lords",
    symbol: "lords",
    name: "LORDS",
  },
  {
    id: "lordtoken",
    symbol: "ltt",
    name: "LordToken",
  },
  {
    id: "loserchick-egg",
    symbol: "egg",
    name: "LoserChick EGG",
  },
  {
    id: "loser-coin",
    symbol: "lowb",
    name: "Loser Coin",
  },
  {
    id: "lossless",
    symbol: "lss",
    name: "Lossless",
  },
  {
    id: "lost-world",
    symbol: "lost",
    name: "Lost World",
  },
  {
    id: "lotoblock",
    symbol: "loto",
    name: "Lotoblock",
  },
  {
    id: "lot-trade",
    symbol: "lott",
    name: "LOT.TRADE",
  },
  {
    id: "loud-market",
    symbol: "loud",
    name: "Loud Market",
  },
  {
    id: "louverture",
    symbol: "lvt",
    name: "Louverture V2",
  },
  {
    id: "louvre-finance",
    symbol: "louvre",
    name: "Louvre Finance",
  },
  {
    id: "lovechain",
    symbol: "lov",
    name: "LoveChain",
  },
  {
    id: "lovelace-world",
    symbol: "lace",
    name: "Lovelace World",
  },
  {
    id: "lovely-inu-finance",
    symbol: "lovely",
    name: "Lovely Inu finance",
  },
  {
    id: "lovely-swap-token",
    symbol: "lst",
    name: "Lovely Swap",
  },
  {
    id: "lovepot-token",
    symbol: "love",
    name: "LovePot",
  },
  {
    id: "lox-network",
    symbol: "lox",
    name: "Lox Network",
  },
  {
    id: "lp-3pool-curve",
    symbol: "3crv",
    name: "LP 3pool Curve",
  },
  {
    id: "lp-finance",
    symbol: "lpfi",
    name: "LP Finance DAO",
  },
  {
    id: "lpi-dao",
    symbol: "lpi",
    name: "LPI DAO",
  },
  {
    id: "lp-renbtc-curve",
    symbol: "renbtccurve",
    name: "LP renBTC Curve",
  },
  {
    id: "lp-scurve",
    symbol: "scurve",
    name: "LP-sCurve",
  },
  {
    id: "lp-yearn-crv-vault",
    symbol: "lp-ycrv",
    name: "LP Yearn CRV Vault",
  },
  {
    id: "lto-network",
    symbol: "lto",
    name: "LTO Network",
  },
  {
    id: "ltradex",
    symbol: "ltex",
    name: "Ltradex",
  },
  {
    id: "lua-token",
    symbol: "lua",
    name: "LuaSwap",
  },
  {
    id: "luca",
    symbol: "luca",
    name: "LUCA",
  },
  {
    id: "lucent",
    symbol: "lcnt",
    name: "Lucent",
  },
  {
    id: "lucha",
    symbol: "lucha",
    name: "Lucha",
  },
  {
    id: "lucidao",
    symbol: "lcd",
    name: "Lucidao",
  },
  {
    id: "lucid-lands",
    symbol: "llg",
    name: "Lucid Lands",
  },
  {
    id: "luck2earn",
    symbol: "luck",
    name: "Luck2Earn",
  },
  {
    id: "luckchain",
    symbol: "bash",
    name: "LuckChain",
  },
  {
    id: "luckdao",
    symbol: "luck",
    name: "LuckDao",
  },
  {
    id: "luckstar",
    symbol: "lst",
    name: "Luckstar",
  },
  {
    id: "lucky-block",
    symbol: "lblock",
    name: "Lucky Block",
  },
  {
    id: "lucky-cats",
    symbol: "katz",
    name: "Lucky Cats",
  },
  {
    id: "luckychip",
    symbol: "lc",
    name: "LuckyChip",
  },
  {
    id: "luckydragon",
    symbol: "lucky",
    name: "LuckyDragon",
  },
  {
    id: "lucky-lion",
    symbol: "lucky",
    name: "Lucky Lion",
  },
  {
    id: "luckymeta",
    symbol: "lmt",
    name: "LuckyMeta",
  },
  {
    id: "lucky-property-development-invest",
    symbol: "lpdi",
    name: "Lucky Property Development Invest",
  },
  {
    id: "lucky-roo",
    symbol: "roo",
    name: "Lucky Roo",
  },
  {
    id: "lucky-shinu",
    symbol: "lushi",
    name: "Lucky Shinu",
  },
  {
    id: "lucretius",
    symbol: "luc",
    name: "Lucretius",
  },
  {
    id: "lucro",
    symbol: "lcr",
    name: "Lucro",
  },
  {
    id: "lucrosus-capital",
    symbol: "$luca",
    name: "Lucrosus Capital",
  },
  {
    id: "lucy",
    symbol: "lucy",
    name: "LUCY",
  },
  {
    id: "ludena-protocol",
    symbol: "ldn",
    name: "Ludena Protocol",
  },
  {
    id: "ludos",
    symbol: "lud",
    name: "Ludos Protocol",
  },
  {
    id: "luffy-inu",
    symbol: "luffy",
    name: "Luffy",
  },
  {
    id: "lukso-token",
    symbol: "lyxe",
    name: "LUKSO",
  },
  {
    id: "lulu-market-luck",
    symbol: "luck",
    name: "LULU Market Luck",
  },
  {
    id: "lulz",
    symbol: "lulz",
    name: "LULZ",
  },
  {
    id: "lumenswap",
    symbol: "lsp",
    name: "Lumenswap",
  },
  {
    id: "lumerin",
    symbol: "lmr",
    name: "Lumerin",
  },
  {
    id: "lumi-credits",
    symbol: "lumi",
    name: "LUMI Credits",
  },
  {
    id: "lumiiitoken",
    symbol: "lumiii",
    name: "Lumiii",
  },
  {
    id: "luminos-mining-protocol",
    symbol: "lumi",
    name: "Luminos Mining Protocol",
  },
  {
    id: "lum-network",
    symbol: "lum",
    name: "Lum Network",
  },
  {
    id: "luna-ape-protocol",
    symbol: "$lunape",
    name: "Luna Ape Protocol",
  },
  {
    id: "lunachow",
    symbol: "luchow",
    name: "LunaChow",
  },
  {
    id: "lunadoge",
    symbol: "loge",
    name: "LunaDoge",
  },
  {
    id: "lunafi",
    symbol: "lfi",
    name: "Lunafi",
  },
  {
    id: "lunagens",
    symbol: "lung",
    name: "LunaGens",
  },
  {
    id: "luna-inu",
    symbol: "linu",
    name: "Luna Inu",
  },
  {
    id: "lunaland",
    symbol: "lln",
    name: "LunaLand",
  },
  {
    id: "lunaone",
    symbol: "xln",
    name: "LunaOne",
  },
  {
    id: "luna-pad",
    symbol: "lunapad",
    name: "Luna-Pad",
  },
  {
    id: "lunar",
    symbol: "lnr",
    name: "Lunar [OLD]",
  },
  {
    id: "lunar-2",
    symbol: "lnr",
    name: "Lunar",
  },
  {
    id: "luna-rush",
    symbol: "lus",
    name: "Luna Rush",
  },
  {
    id: "lunatics",
    symbol: "lunat",
    name: "Lunatics",
  },
  {
    id: "luna-wormhole",
    symbol: "lunc",
    name: "Terra Classic (Wormhole)",
  },
  {
    id: "lunchdao",
    symbol: "lunch",
    name: "LunchDAO",
  },
  {
    id: "lunch-money",
    symbol: "lmy",
    name: "Lunch Money",
  },
  {
    id: "lunes",
    symbol: "lunes",
    name: "Lunes",
  },
  {
    id: "lung-protocol",
    symbol: "l2p",
    name: "Lung Protocol",
  },
  {
    id: "lunr-token",
    symbol: "lunr",
    name: "Lunr",
  },
  {
    id: "lunyr",
    symbol: "lun",
    name: "Lunyr",
  },
  {
    id: "lusd",
    symbol: "lusd",
    name: "LUSD",
  },
  {
    id: "lusd3crv-f",
    symbol: "lusd3crv",
    name: "LUSD3CRV-f",
  },
  {
    id: "luto-cash",
    symbol: "luto",
    name: "Luto Cash",
  },
  {
    id: "lux-bio-exchange-coin",
    symbol: "lbxc",
    name: "LUX BIO EXCHANGE COIN",
  },
  {
    id: "luxcoin",
    symbol: "lux",
    name: "LUXCoin",
  },
  {
    id: "luxeracing",
    symbol: "luxe",
    name: "LuxeRacing",
  },
  {
    id: "luxetoken",
    symbol: "luxetoken",
    name: "LuxeToken",
  },
  {
    id: "luxfi",
    symbol: "lxf",
    name: "LuxFi",
  },
  {
    id: "luxo",
    symbol: "luxo",
    name: "Luxo",
  },
  {
    id: "luxor",
    symbol: "lux",
    name: "Luxor",
  },
  {
    id: "luxtto",
    symbol: "lxto",
    name: "LuxTTO",
  },
  {
    id: "luxurious-pro-network-token",
    symbol: "lpnt",
    name: "Luxurious Pro Network",
  },
  {
    id: "luxy",
    symbol: "luxy",
    name: "Luxy",
  },
  {
    id: "luzion-protocol",
    symbol: "lzn",
    name: "Luzion Protocol",
  },
  {
    id: "lydia-finance",
    symbol: "lyd",
    name: "Lydia Finance",
  },
  {
    id: "lyfe-2",
    symbol: "lyfe",
    name: "Lyfe",
  },
  {
    id: "lyfe-gold",
    symbol: "lgold",
    name: "Lyfe Gold",
  },
  {
    id: "lyfe-land",
    symbol: "lland",
    name: "Lyfe Land",
  },
  {
    id: "lyfe-silver",
    symbol: "lsilver",
    name: "Lyfe Silver",
  },
  {
    id: "lympo",
    symbol: "lym",
    name: "Lympo",
  },
  {
    id: "lympo-market-token",
    symbol: "lmt",
    name: "Lympo Market",
  },
  {
    id: "lynkey",
    symbol: "lynk",
    name: "LynKey",
  },
  {
    id: "lynx",
    symbol: "lynx",
    name: "Lynx",
  },
  {
    id: "lyocredit",
    symbol: "lyo",
    name: "LYO Credit",
  },
  {
    id: "lyptus-token",
    symbol: "lyptus",
    name: "Lyptus",
  },
  {
    id: "lyra",
    symbol: "lyr",
    name: "Lyra",
  },
  {
    id: "lyra-finance",
    symbol: "lyra",
    name: "Lyra Finance",
  },
  {
    id: "lys-capital",
    symbol: "lys",
    name: "LYS Capital",
  },
  {
    id: "m2",
    symbol: "m2",
    name: "M2",
  },
  {
    id: "m7v2",
    symbol: "m7v2",
    name: "M7V2",
  },
  {
    id: "macaronswap",
    symbol: "mcrn",
    name: "MacaronSwap",
  },
  {
    id: "machinecoin",
    symbol: "mac",
    name: "Machinecoin",
  },
  {
    id: "machix",
    symbol: "mcx",
    name: "Machi X",
  },
  {
    id: "madagascar-token",
    symbol: "$time",
    name: "Madagascar",
  },
  {
    id: "mad-bucks",
    symbol: "mad",
    name: "MAD Bucks",
  },
  {
    id: "madchad",
    symbol: "madchad",
    name: "MadChad",
  },
  {
    id: "made-in-real-life",
    symbol: "mirl",
    name: "Made In Real Life",
  },
  {
    id: "mad-hatter-society",
    symbol: "madhat",
    name: "Mad Hatter Society",
  },
  {
    id: "mad-meerkat-etf",
    symbol: "metf",
    name: "Mad Meerkat ETF",
  },
  {
    id: "mad-meerkat-optimizer",
    symbol: "mmo",
    name: "Mad Meerkat Optimizer",
  },
  {
    id: "mad-meerkat-optimizer-polygon",
    symbol: "mmo",
    name: "Mad Meerkat Optimizer (Polygon)",
  },
  {
    id: "mad-network",
    symbol: "mad",
    name: "MADNetwork",
  },
  {
    id: "mad-usd",
    symbol: "musd",
    name: "Mad USD",
  },
  {
    id: "mad-viking-games",
    symbol: "mvg",
    name: "Mad Viking Games",
  },
  {
    id: "madworld",
    symbol: "umad",
    name: "MADworld",
  },
  {
    id: "maecenas",
    symbol: "art",
    name: "Maecenas",
  },
  {
    id: "mafacoin",
    symbol: "mafa",
    name: "MafaCoin",
  },
  {
    id: "maga-coin",
    symbol: "maga",
    name: "MAGA Coin BSC",
  },
  {
    id: "maga-coin-eth",
    symbol: "maga",
    name: "MAGA Coin ETH",
  },
  {
    id: "magic",
    symbol: "magic",
    name: "Magic",
  },
  {
    id: "magic-beasties",
    symbol: "bsts",
    name: "Magic Beasties",
  },
  {
    id: "magic-birds-token",
    symbol: "mbt",
    name: "Magic Birds",
  },
  {
    id: "magic-bnb",
    symbol: "mbnb",
    name: "MAGIC BNB",
  },
  {
    id: "magicbox",
    symbol: "mbt",
    name: "MagicBox",
  },
  {
    id: "magiccraft",
    symbol: "mcrt",
    name: "MagicCraft",
  },
  {
    id: "magic-cube",
    symbol: "mcc",
    name: "Magic Cube Coin",
  },
  {
    id: "magic-cube-finance",
    symbol: "mast",
    name: "Magic Cube Finance",
  },
  {
    id: "magicdoge",
    symbol: "magicdoge",
    name: "MagicDOGE",
  },
  {
    id: "magic-eggs",
    symbol: "maga",
    name: "Magic Eggs",
  },
  {
    id: "magic-elpis-gem",
    symbol: "meg",
    name: "Magic Elpis Gem",
  },
  {
    id: "magic-forest",
    symbol: "magf",
    name: "Magic Forest",
  },
  {
    id: "magic-internet-money",
    symbol: "mim",
    name: "Magic Internet Money",
  },
  {
    id: "magic-manor",
    symbol: "mgc",
    name: "Magic Manor",
  },
  {
    id: "magicofgold",
    symbol: "magic",
    name: "MagicofGold",
  },
  {
    id: "magic-of-universe",
    symbol: "mgc",
    name: "Magic of Universe",
  },
  {
    id: "magic-power",
    symbol: "mgp",
    name: "Magic Power",
  },
  {
    id: "magic-square",
    symbol: "sqr",
    name: "Magic Square",
  },
  {
    id: "magic-token",
    symbol: "magic",
    name: "MagicLand",
  },
  {
    id: "magik",
    symbol: "magik",
    name: "Magik",
  },
  {
    id: "magnetgold",
    symbol: "mtg",
    name: "MagnetGold",
  },
  {
    id: "magpie",
    symbol: "mgp",
    name: "Magpie",
  },
  {
    id: "magpiecoin",
    symbol: "mgpc",
    name: "MagpieCoin",
  },
  {
    id: "magus-nodes",
    symbol: "magus",
    name: "Magus Nodes",
  },
  {
    id: "mahadao",
    symbol: "maha",
    name: "MahaDAO",
  },
  {
    id: "maia",
    symbol: "maia",
    name: "Maia",
  },
  {
    id: "maiar-dex",
    symbol: "mex",
    name: "Maiar DEX",
  },
  {
    id: "maidcoin",
    symbol: "$maid",
    name: "MaidCoin",
  },
  {
    id: "maidsafecoin",
    symbol: "emaid",
    name: "MaidSafeCoin",
  },
  {
    id: "main",
    symbol: "main",
    name: "Main",
  },
  {
    id: "mainframe",
    symbol: "mft",
    name: "Hifi Finance",
  },
  {
    id: "mainstream-for-the-underground",
    symbol: "mftu",
    name: "Mainstream For The Underground",
  },
  {
    id: "maison-capital",
    symbol: "msn",
    name: "Maison Capital",
  },
  {
    id: "maker",
    symbol: "mkr",
    name: "Maker",
  },
  {
    id: "makes",
    symbol: "mks",
    name: "Makes",
  },
  {
    id: "makiswap",
    symbol: "maki",
    name: "MakiSwap",
  },
  {
    id: "makk",
    symbol: "makk",
    name: "Makk",
  },
  {
    id: "malinka",
    symbol: "mlnk",
    name: "Malinka",
  },
  {
    id: "mama-dao",
    symbol: "mama",
    name: "Mama DAO",
  },
  {
    id: "mamaverse",
    symbol: "coinmama",
    name: "MamaVerse",
  },
  {
    id: "mammoth-mmt",
    symbol: "mmt",
    name: "Mammoth MMT",
  },
  {
    id: "manarium",
    symbol: "ari",
    name: "Manarium",
  },
  {
    id: "manateecoin",
    symbol: "mtc",
    name: "ManateeCoin",
  },
  {
    id: "manchester-city-fan-token",
    symbol: "city",
    name: "Manchester City Fan Token",
  },
  {
    id: "mancium",
    symbol: "manc",
    name: "Mancium",
  },
  {
    id: "mandala-2",
    symbol: "mndl",
    name: "Mandala",
  },
  {
    id: "mandala-exchange-token",
    symbol: "mdx",
    name: "Mandala Exchange",
  },
  {
    id: "mandox-2",
    symbol: "mandox",
    name: "MandoX",
  },
  {
    id: "maneki-neko",
    symbol: "neki",
    name: "Maneki-neko",
  },
  {
    id: "mangamon",
    symbol: "man",
    name: "MangaMon",
  },
  {
    id: "mangata-x",
    symbol: "mgx",
    name: "Mangata X",
  },
  {
    id: "manga-token",
    symbol: "$manga",
    name: "Manga",
  },
  {
    id: "mangochain",
    symbol: "mgp",
    name: "MangoChain",
  },
  {
    id: "mangoman-intelligent",
    symbol: "mmit",
    name: "MANGOMAN INTELLIGENT",
  },
  {
    id: "mango-markets",
    symbol: "mngo",
    name: "Mango",
  },
  {
    id: "manifold-finance",
    symbol: "fold",
    name: "Manifold Finance",
  },
  {
    id: "manna",
    symbol: "manna",
    name: "Manna",
  },
  {
    id: "mantis-network",
    symbol: "mntis",
    name: "Mantis Network",
  },
  {
    id: "mantra-dao",
    symbol: "om",
    name: "MANTRA",
  },
  {
    id: "manufactory-2",
    symbol: "mnft",
    name: "ManuFactory",
  },
  {
    id: "manyswap",
    symbol: "many",
    name: "Manyswap",
  },
  {
    id: "many-worlds",
    symbol: "many",
    name: "Many Worlds",
  },
  {
    id: "maorabbit",
    symbol: "maorabbit",
    name: "MaoRabbit",
  },
  {
    id: "mao-zedong",
    symbol: "mao",
    name: "Mao Zedong",
  },
  {
    id: "mapcoin",
    symbol: "mapc",
    name: "MapCoin",
  },
  {
    id: "maple",
    symbol: "mpl",
    name: "Maple",
  },
  {
    id: "mapmetrics",
    symbol: "mmaps",
    name: "MapMetrics",
  },
  {
    id: "maps",
    symbol: "maps",
    name: "MAPS",
  },
  {
    id: "marble",
    symbol: "$marble",
    name: "Marble Dao",
  },
  {
    id: "marble-heroes",
    symbol: "mbh",
    name: "Marble Heroes",
  },
  {
    id: "marbleprix",
    symbol: "marblex7",
    name: "MarblePrix",
  },
  {
    id: "marblex",
    symbol: "mbx",
    name: "Marblex",
  },
  {
    id: "marcopolo",
    symbol: "map",
    name: "MAP Protocol",
  },
  {
    id: "margarita",
    symbol: "margarita",
    name: "Margarita",
  },
  {
    id: "marginswap",
    symbol: "mfi",
    name: "Marginswap",
  },
  {
    id: "marhabadefi",
    symbol: "mrhb",
    name: "MarhabaDeFi",
  },
  {
    id: "maria",
    symbol: "maria",
    name: "Maria",
  },
  {
    id: "marinade",
    symbol: "mnde",
    name: "Marinade",
  },
  {
    id: "mariofloki",
    symbol: "mrfloki",
    name: "MarioFloki",
  },
  {
    id: "markaccy",
    symbol: "mkcy",
    name: "Markaccy",
  },
  {
    id: "market-ledger",
    symbol: "ml",
    name: "Market Ledger",
  },
  {
    id: "market-making-pro",
    symbol: "mmpro",
    name: "Market Making Pro",
  },
  {
    id: "marketmove",
    symbol: "move",
    name: "MarketMove",
  },
  {
    id: "market-neutral-yield-eth",
    symbol: "mnye",
    name: "Market Neutral Yield ETH",
  },
  {
    id: "marketpeak",
    symbol: "peak",
    name: "PEAKDEFI",
  },
  {
    id: "marlin",
    symbol: "pond",
    name: "Marlin",
  },
  {
    id: "marmaj",
    symbol: "marmaj",
    name: "Marmaj",
  },
  {
    id: "mar-network",
    symbol: "mars",
    name: "Mars Network",
  },
  {
    id: "marnotaur",
    symbol: "taur",
    name: "Marnotaur",
  },
  {
    id: "marosca-inu",
    symbol: "marosca",
    name: "Marosca Inu",
  },
  {
    id: "mars",
    symbol: "mars",
    name: "Mars",
  },
  {
    id: "mars4",
    symbol: "mars4",
    name: "MARS4",
  },
  {
    id: "marscoin",
    symbol: "mars",
    name: "Marscoin",
  },
  {
    id: "marscolony",
    symbol: "clny",
    name: "MarsColony",
  },
  {
    id: "marsdao",
    symbol: "mdao",
    name: "MarsDAO",
  },
  {
    id: "mars-doge",
    symbol: "marsdoge",
    name: "Mars Doge",
  },
  {
    id: "mars-ecosystem-token",
    symbol: "xms",
    name: "Mars Ecosystem",
  },
  {
    id: "mars-floki-inu",
    symbol: "floki",
    name: "Mars Floki Inu",
  },
  {
    id: "marshall-rogan-inu",
    symbol: "mri",
    name: "Marshall Inu",
  },
  {
    id: "marshmellowdefi",
    symbol: "mash",
    name: "MarshmallowDeFi",
  },
  {
    id: "mars-inu",
    symbol: "marsinu",
    name: "Mars Inu",
  },
  {
    id: "mars-panda-world",
    symbol: "mpt",
    name: "Mars Panda World",
  },
  {
    id: "mars-protocol-2",
    symbol: "mars",
    name: "Mars Protocol",
  },
  {
    id: "marsrise",
    symbol: "marsrise",
    name: "MarsRise",
  },
  {
    id: "marsupilamii",
    symbol: "mars",
    name: "Marsupilamii",
  },
  {
    id: "marsx",
    symbol: "mx",
    name: "MarsX",
  },
  {
    id: "martexcoin",
    symbol: "mxt",
    name: "MarteXcoin",
  },
  {
    id: "martiandoge",
    symbol: "martiandoge",
    name: "MartianDoge",
  },
  {
    id: "martin-shkreli-inu",
    symbol: "msi",
    name: "Martin Shkreli Inu",
  },
  {
    id: "martkist",
    symbol: "martk",
    name: "Martkist",
  },
  {
    id: "marumarunft",
    symbol: "maru",
    name: "marumaruNFT",
  },
  {
    id: "marvelous-nfts",
    symbol: "mnft",
    name: "Marvelous NFTs",
  },
  {
    id: "marvininu",
    symbol: "marvin",
    name: "MarvinInu",
  },
  {
    id: "marvin-inu",
    symbol: "marvin",
    name: "Marvin Inu",
  },
  {
    id: "marx",
    symbol: "marx",
    name: "MarX",
  },
  {
    id: "marxcoin",
    symbol: "marx",
    name: "MarxCoin",
  },
  {
    id: "masari",
    symbol: "msr",
    name: "Masari",
  },
  {
    id: "mas-finance",
    symbol: "mas",
    name: "MAS FINANCE",
  },
  {
    id: "maskdoge",
    symbol: "md3",
    name: "MaskDogeV3",
  },
  {
    id: "mask-network",
    symbol: "mask",
    name: "Mask Network",
  },
  {
    id: "mask-vault-nftx",
    symbol: "mask",
    name: "MASK Vault (NFTX)",
  },
  {
    id: "masq",
    symbol: "masq",
    name: "MASQ",
  },
  {
    id: "mass",
    symbol: "mass",
    name: "MASS",
  },
  {
    id: "massive-protocol",
    symbol: "mav",
    name: "Massive Protocol",
  },
  {
    id: "mass-vehicle-ledger",
    symbol: "mvl",
    name: "MVL",
  },
  {
    id: "masterpiece-maker",
    symbol: "mama",
    name: "Masterpiece Maker",
  },
  {
    id: "masterwin",
    symbol: "mw",
    name: "MasterWin",
  },
  {
    id: "mata",
    symbol: "mata",
    name: "Mata",
  },
  {
    id: "matador-token",
    symbol: "mtdr",
    name: "Matador",
  },
  {
    id: "matchcup",
    symbol: "match",
    name: "Matchcup",
  },
  {
    id: "matchpool",
    symbol: "gup",
    name: "Guppy",
  },
  {
    id: "material",
    symbol: "mtrl",
    name: "Material",
  },
  {
    id: "materium",
    symbol: "mtrm",
    name: "Materium",
  },
  {
    id: "math",
    symbol: "math",
    name: "MATH",
  },
  {
    id: "matic-aave-aave",
    symbol: "maaave",
    name: "Matic Aave Interest Bearing AAVE",
  },
  {
    id: "matic-aave-dai",
    symbol: "madai",
    name: "Matic Aave Interest Bearing DAI",
  },
  {
    id: "matic-aave-link",
    symbol: "malink",
    name: "Matic Aave Interest Bearing LINK",
  },
  {
    id: "matic-aave-tusd",
    symbol: "matusd",
    name: "Matic Aave interest bearing TUSD",
  },
  {
    id: "matic-aave-usdc",
    symbol: "mausdc",
    name: "Matic Aave Interest Bearing USDC",
  },
  {
    id: "matic-aave-weth",
    symbol: "maweth",
    name: "Matic Aave Interest Bearing WETH",
  },
  {
    id: "matic-aave-yfi",
    symbol: "mayfi",
    name: "Matic Aave Interest Bearing YFI",
  },
  {
    id: "matic-dai-stablecoin",
    symbol: "dai-matic",
    name: "Matic DAI Stablecoin",
  },
  {
    id: "maticlaunch",
    symbol: "mtcl",
    name: "MaticLaunch",
  },
  {
    id: "matic-launchpad",
    symbol: "maticpad",
    name: "Matic Launchpad",
  },
  {
    id: "matic-network",
    symbol: "matic",
    name: "Polygon",
  },
  {
    id: "maticverse",
    symbol: "mverse",
    name: "MaticVerse",
  },
  {
    id: "matic-wormhole",
    symbol: "maticpo",
    name: "MATIC (Wormhole)",
  },
  {
    id: "matrak-fan-token",
    symbol: "mtrk",
    name: "Matrak Fan Token",
  },
  {
    id: "matrix-2",
    symbol: "mtix",
    name: "Matrix",
  },
  {
    id: "matrix-ai-network",
    symbol: "man",
    name: "Matrix AI Network",
  },
  {
    id: "matrixetf",
    symbol: "mdf",
    name: "MatrixETF",
  },
  {
    id: "matrix-protocol",
    symbol: "mtx",
    name: "Matrix Protocol",
  },
  {
    id: "matrix-solana-index",
    symbol: "msi",
    name: "Matrix Solana Index",
  },
  {
    id: "matrixswap",
    symbol: "matrix",
    name: "Matrix Labs",
  },
  {
    id: "matryx",
    symbol: "mtx",
    name: "MATRYX",
  },
  {
    id: "matsuswap",
    symbol: "matsuswap",
    name: "MatsuSwap",
  },
  {
    id: "mavaverse-token",
    symbol: "mvx",
    name: "Mavaverse",
  },
  {
    id: "max-bidding",
    symbol: "$max",
    name: "Max Bidding",
  },
  {
    id: "maxcoin",
    symbol: "max",
    name: "Maxcoin",
  },
  {
    id: "maximus",
    symbol: "maxi",
    name: "Maximus",
  },
  {
    id: "maximus-base",
    symbol: "base",
    name: "Maximus BASE",
  },
  {
    id: "maximus-coin",
    symbol: "mxz",
    name: "Maximus Coin",
  },
  {
    id: "maximus-dao",
    symbol: "maxi",
    name: "Maximus DAO",
  },
  {
    id: "maximus-deci",
    symbol: "deci",
    name: "Maximus DECI",
  },
  {
    id: "maximus-lucky",
    symbol: "lucky",
    name: "Maximus LUCKY",
  },
  {
    id: "maximus-team",
    symbol: "team",
    name: "Maximus TEAM",
  },
  {
    id: "maximus-trio",
    symbol: "trio",
    name: "Maximus TRIO",
  },
  {
    id: "maxity",
    symbol: "max",
    name: "Maxity",
  },
  {
    id: "maxonrow",
    symbol: "mxw",
    name: "Maxonrow",
  },
  {
    id: "max-property-group",
    symbol: "mcf",
    name: "Max Crowdfund",
  },
  {
    id: "max-revive",
    symbol: "maxr",
    name: "Max Revive",
  },
  {
    id: "max-token",
    symbol: "max",
    name: "MAX",
  },
  {
    id: "maxx-finance",
    symbol: "maxx",
    name: "MAXX Finance",
  },
  {
    id: "maya-preferred-223",
    symbol: "mayp",
    name: "Maya Preferred",
  },
  {
    id: "mayc-vault-nftx",
    symbol: "mayc",
    name: "MAYC Vault (NFTX)",
  },
  {
    id: "maza",
    symbol: "mzc",
    name: "Maza",
  },
  {
    id: "mbd-financials",
    symbol: "mbd",
    name: "MBD Financials",
  },
  {
    id: "mbitbooks",
    symbol: "mbit",
    name: "MBitBooks",
  },
  {
    id: "mcdex",
    symbol: "mcb",
    name: "MUX Protocol",
  },
  {
    id: "mcdoge",
    symbol: "mcdoge",
    name: "McDoge",
  },
  {
    id: "mcelo",
    symbol: "mcelo",
    name: "mCELO",
  },
  {
    id: "mceur",
    symbol: "mceur",
    name: "mcEUR",
  },
  {
    id: "mcfinance",
    symbol: "mcf",
    name: "MCFinance",
  },
  {
    id: "mch-coin",
    symbol: "mchc",
    name: "MCH Coin",
  },
  {
    id: "mci-coin",
    symbol: "cyclub",
    name: "Cyclub",
  },
  {
    id: "mcity",
    symbol: "mct",
    name: "Mcity",
  },
  {
    id: "mclaren-f1-fan-token",
    symbol: "mcl",
    name: "McLaren F1 Fan Token",
  },
  {
    id: "mcn-ventures",
    symbol: "mcn",
    name: "MCN Ventures",
  },
  {
    id: "mcobit",
    symbol: "mct",
    name: "Mcobit",
  },
  {
    id: "mcoin1",
    symbol: "mcoin",
    name: "mCoin",
  },
  {
    id: "mcontent",
    symbol: "mcontent",
    name: "MContent",
  },
  {
    id: "mcs-token",
    symbol: "mcs",
    name: "MCS",
  },
  {
    id: "mdex",
    symbol: "mdx",
    name: "Mdex",
  },
  {
    id: "mdsquare",
    symbol: "tmed",
    name: "MDsquare",
  },
  {
    id: "mead",
    symbol: "mead",
    name: "Mead",
  },
  {
    id: "meanfi",
    symbol: "mean",
    name: "Mean DAO",
  },
  {
    id: "measurable-data-token",
    symbol: "mdt",
    name: "Measurable Data",
  },
  {
    id: "meblox-protocol",
    symbol: "meb",
    name: "Meblox Protocol",
  },
  {
    id: "mechachain",
    symbol: "$mecha",
    name: "Mechanium",
  },
  {
    id: "mecha-infinity",
    symbol: "mec",
    name: "MECHA",
  },
  {
    id: "mecha-morphing",
    symbol: "mape",
    name: "Mecha Morphing",
  },
  {
    id: "mechashiba",
    symbol: "mec",
    name: "MechaShiba",
  },
  {
    id: "mechaverse",
    symbol: "mc",
    name: "Mechaverse",
  },
  {
    id: "mech-master",
    symbol: "mech",
    name: "Mech Master",
  },
  {
    id: "meconcash",
    symbol: "mch",
    name: "Meconcash",
  },
  {
    id: "medal-of-honour",
    symbol: "moh",
    name: "Medal of Honour",
  },
  {
    id: "medamon",
    symbol: "mon",
    name: "Medamon",
  },
  {
    id: "medano",
    symbol: "mdo",
    name: "Medano",
  },
  {
    id: "medcarecoin",
    symbol: "mcc",
    name: "MedCareCoin",
  },
  {
    id: "media-eye",
    symbol: "eye",
    name: "MEDIA EYE",
  },
  {
    id: "media-licensing-token",
    symbol: "mlt",
    name: "Media Licensing Token",
  },
  {
    id: "media-network",
    symbol: "media",
    name: "Media Network",
  },
  {
    id: "medibit",
    symbol: "medibit",
    name: "MEDIBIT",
  },
  {
    id: "medibloc",
    symbol: "med",
    name: "Medibloc",
  },
  {
    id: "medicalchain",
    symbol: "mtn",
    name: "Medicalchain",
  },
  {
    id: "medical-token-currency",
    symbol: "mtc",
    name: "Doc.com",
  },
  {
    id: "medicalveda",
    symbol: "mveda",
    name: "MedicalVeda",
  },
  {
    id: "medic-coin",
    symbol: "medic",
    name: "Medic Coin",
  },
  {
    id: "mediconnect",
    symbol: "medi",
    name: "MediConnect",
  },
  {
    id: "medieval-empires",
    symbol: "mee",
    name: "Medieval Empires",
  },
  {
    id: "medifakt",
    symbol: "fakt",
    name: "Medifakt",
  },
  {
    id: "medishares",
    symbol: "mds",
    name: "MediShares",
  },
  {
    id: "medi-token",
    symbol: "medi",
    name: "Medi",
  },
  {
    id: "medium",
    symbol: "mdm",
    name: "MEDIUM",
  },
  {
    id: "medooza-ecosystem",
    symbol: "mdza",
    name: "Medooza Ecosystem",
  },
  {
    id: "medping",
    symbol: "mpg",
    name: "Medping",
  },
  {
    id: "meebitsdao-pool",
    symbol: "mbbt",
    name: "MeebitsDAO Pool",
  },
  {
    id: "meeb-master",
    symbol: "meeb",
    name: "Meeb Master",
  },
  {
    id: "meeb-vault-nftx",
    symbol: "meeb",
    name: "MEEB Vault (NFTX)",
  },
  {
    id: "meeds-dao",
    symbol: "meed",
    name: "Meeds DAO",
  },
  {
    id: "meeiro",
    symbol: "mee",
    name: "Meeiro",
  },
  {
    id: "meerkat-shares",
    symbol: "mshare",
    name: "Meerkat Shares",
  },
  {
    id: "meetin-token",
    symbol: "meti",
    name: "Meetin Token",
  },
  {
    id: "meetone",
    symbol: "meetone",
    name: "MEET.ONE",
  },
  {
    id: "meetple",
    symbol: "mpt",
    name: "Meetple",
  },
  {
    id: "megabonk",
    symbol: "mbonk",
    name: "megaBonk",
  },
  {
    id: "megacryptopolis",
    symbol: "mega",
    name: "MegaCryptoPolis",
  },
  {
    id: "mega-lottery-services-global",
    symbol: "mlr",
    name: "Mega Lottery Services Global",
  },
  {
    id: "megamoon",
    symbol: "mgmoon",
    name: "MegaMoon",
  },
  {
    id: "mega-protocol",
    symbol: "mega",
    name: "Mega Protocol",
  },
  {
    id: "megashibazilla",
    symbol: "msz",
    name: "MegaShibaZilla",
  },
  {
    id: "megatech",
    symbol: "mgt",
    name: "Megatech",
  },
  {
    id: "megatoken",
    symbol: "mega",
    name: "MegaToken",
  },
  {
    id: "megaweapon",
    symbol: "$weapon",
    name: "Megaweapon",
  },
  {
    id: "megaworld",
    symbol: "mega",
    name: "MegaWorld",
  },
  {
    id: "meh",
    symbol: "meh",
    name: "meh",
  },
  {
    id: "mei-flex",
    symbol: "mf",
    name: "Mei Flex",
  },
  {
    id: "me-in",
    symbol: "mein",
    name: "Me-in",
  },
  {
    id: "meishu",
    symbol: "meishu",
    name: "Meishu",
  },
  {
    id: "mekkacoin",
    symbol: "mek",
    name: "MekkaCoin",
  },
  {
    id: "mekkafroggo",
    symbol: "mekka",
    name: "MekkaFroggo",
  },
  {
    id: "mekka-froggo",
    symbol: "lfgo",
    name: "Mekka Froggo",
  },
  {
    id: "melalie",
    symbol: "mel",
    name: "MELX",
  },
  {
    id: "meland-ai",
    symbol: "meld",
    name: "Meland.ai",
  },
  {
    id: "meld",
    symbol: "meld",
    name: "MELD",
  },
  {
    id: "meld-gold",
    symbol: "mcau",
    name: "Meld Gold",
  },
  {
    id: "melega",
    symbol: "marco",
    name: "Melega",
  },
  {
    id: "meli-games",
    symbol: "meli",
    name: "Meli Games",
  },
  {
    id: "meliora",
    symbol: "mora",
    name: "Meliora",
  },
  {
    id: "melody",
    symbol: "melody",
    name: "Melody",
  },
  {
    id: "melody-sgs",
    symbol: "sgs",
    name: "Melody SGS",
  },
  {
    id: "melody-sns",
    symbol: "sns",
    name: "Melody SNS",
  },
  {
    id: "melon",
    symbol: "mln",
    name: "Enzyme",
  },
  {
    id: "melonheadsprotocol",
    symbol: "mhsp",
    name: "MelonHeadSProtocol",
  },
  {
    id: "melonx",
    symbol: "$mlnx",
    name: "MELONx",
  },
  {
    id: "melos-studio",
    symbol: "melos",
    name: "Melos Studio",
  },
  {
    id: "melo-token",
    symbol: "melo",
    name: "Melo",
  },
  {
    id: "membrana-platform",
    symbol: "mbn",
    name: "Membrana",
  },
  {
    id: "memebank",
    symbol: "mbk",
    name: "MeMeBank",
  },
  {
    id: "memecard",
    symbol: "mmc",
    name: "MemeCard",
  },
  {
    id: "memecoin",
    symbol: "mem",
    name: "Memecoin",
  },
  {
    id: "meme-elon-doge-floki",
    symbol: "memelon",
    name: "Meme Elon Doge Floki",
  },
  {
    id: "memeflate",
    symbol: "mflate",
    name: "Memeflate",
  },
  {
    id: "meme-inu",
    symbol: "meme",
    name: "Meme Inu",
  },
  {
    id: "meme-kong",
    symbol: "mkong",
    name: "Meme Kong",
  },
  {
    id: "meme-lordz",
    symbol: "$lordz",
    name: "Meme Lordz",
  },
  {
    id: "meme-ltd",
    symbol: "meme20",
    name: "MEME LTD",
  },
  {
    id: "meme-machine",
    symbol: "mema",
    name: "Meme Machine",
  },
  {
    id: "memenft-official",
    symbol: "mnft",
    name: "MemeNFT Official",
  },
  {
    id: "memenopoly-money",
    symbol: "mnop",
    name: "Memenopoly Money",
  },
  {
    id: "memepad",
    symbol: "mepad",
    name: "MemePad",
  },
  {
    id: "meme-protocol",
    symbol: "meme",
    name: "Meme Protocol",
  },
  {
    id: "memetic",
    symbol: "meme",
    name: "Memetic",
  },
  {
    id: "memeverse",
    symbol: "meme",
    name: "Memeverse",
  },
  {
    id: "memewars",
    symbol: "mwar",
    name: "MemeWars",
  },
  {
    id: "menapay",
    symbol: "mpay",
    name: "Menapay",
  },
  {
    id: "mend",
    symbol: "mend",
    name: "Mend",
  },
  {
    id: "menzy",
    symbol: "mnz",
    name: "Menzy",
  },
  {
    id: "meong-token",
    symbol: "meong",
    name: "Meong",
  },
  {
    id: "meowcoin",
    symbol: "mewc",
    name: "MeowCoin",
  },
  {
    id: "merchant-token",
    symbol: "mto",
    name: "Merchant",
  },
  {
    id: "merchdao",
    symbol: "mrch",
    name: "MerchDAO",
  },
  {
    id: "mercor-finance",
    symbol: "mrcr",
    name: "Mercor Finance",
  },
  {
    id: "merculet",
    symbol: "mvp",
    name: "Merculet",
  },
  {
    id: "mercurial",
    symbol: "mer",
    name: "Mercurial",
  },
  {
    id: "mercury",
    symbol: "mer",
    name: "Mercury",
  },
  {
    id: "merebel",
    symbol: "meri",
    name: "Merebel",
  },
  {
    id: "merge",
    symbol: "merge",
    name: "Merge",
  },
  {
    id: "meridian-network",
    symbol: "lock",
    name: "Meridian Network",
  },
  {
    id: "merit-circle",
    symbol: "mc",
    name: "Merit Circle",
  },
  {
    id: "merkle-network",
    symbol: "merkle",
    name: "Merkle Network",
  },
  {
    id: "merrychristmas",
    symbol: "hohoho",
    name: "MerryChristmas",
  },
  {
    id: "merry-christmas-token",
    symbol: "mct",
    name: "Merry Christmas Token",
  },
  {
    id: "meschain",
    symbol: "mes",
    name: "MesChain",
  },
  {
    id: "mesefa",
    symbol: "sefa",
    name: "Mesefa",
  },
  {
    id: "meshbox",
    symbol: "mesh",
    name: "MeshBox",
  },
  {
    id: "meshswap-protocol",
    symbol: "mesh",
    name: "Meshswap Protocol",
  },
  {
    id: "meso",
    symbol: "meso",
    name: "Meso",
  },
  {
    id: "messier",
    symbol: "m87",
    name: "MESSIER",
  },
  {
    id: "meta",
    symbol: "mta",
    name: "mStable Governance: Meta",
  },
  {
    id: "meta-age-of-empires",
    symbol: "maoe",
    name: "Meta Age of Empires",
  },
  {
    id: "metaair",
    symbol: "mair",
    name: "MetaAir",
  },
  {
    id: "meta-apes-peel",
    symbol: "peel",
    name: "Meta Apes PEEL",
  },
  {
    id: "meta-apes-shell",
    symbol: "shell",
    name: "Meta Apes Shell",
  },
  {
    id: "metaaxis",
    symbol: "mta",
    name: "MetaAxis",
  },
  {
    id: "metababy",
    symbol: "baby",
    name: "Metababy",
  },
  {
    id: "metabeat",
    symbol: "$beat",
    name: "MetaBeat",
  },
  {
    id: "metabet",
    symbol: "mbet",
    name: "MetaBET",
  },
  {
    id: "metablackout",
    symbol: "mbt",
    name: "MetaBlackout",
  },
  {
    id: "metabolic",
    symbol: "mtbc",
    name: "Metabolic",
  },
  {
    id: "metabomb",
    symbol: "mtb",
    name: "MetaBomb",
  },
  {
    id: "metabrands",
    symbol: "mage",
    name: "MetaBrands",
  },
  {
    id: "metabridge",
    symbol: "mtb",
    name: "MetaBridge",
  },
  {
    id: "meta-bsc",
    symbol: "meta",
    name: "Meta BSC",
  },
  {
    id: "metabullrun",
    symbol: "mbr",
    name: "MetaBullRun",
  },
  {
    id: "metaburst",
    symbol: "mebu",
    name: "Metaburst",
  },
  {
    id: "metabusdcoin",
    symbol: "mbc",
    name: "MetaBUSDCoin",
  },
  {
    id: "metabusiness",
    symbol: "mefi",
    name: "Metabusiness",
  },
  {
    id: "meta-capital",
    symbol: "mcap",
    name: "Meta Capital",
  },
  {
    id: "meta-car",
    symbol: "meta car",
    name: "Meta Car",
  },
  {
    id: "metacash",
    symbol: "meta",
    name: "MetaCash",
  },
  {
    id: "meta-cat",
    symbol: "mcat",
    name: "Meta Cat",
  },
  {
    id: "metacelo",
    symbol: "cmeta",
    name: "MetaCelo",
  },
  {
    id: "meta-cloth",
    symbol: "meta cloth",
    name: "Meta Cloth",
  },
  {
    id: "metacoin",
    symbol: "mtc",
    name: "Metacoin",
  },
  {
    id: "metacontinental",
    symbol: "con",
    name: "MetaContinental",
  },
  {
    id: "meta-course",
    symbol: "course",
    name: "Meta Course",
  },
  {
    id: "metacraft",
    symbol: "mct",
    name: "Metacraft",
  },
  {
    id: "metacraft-mineral",
    symbol: "memi",
    name: "Metacraft Mineral",
  },
  {
    id: "meta-dance",
    symbol: "mdt",
    name: "Meta Dance",
  },
  {
    id: "metaderby",
    symbol: "dby",
    name: "Metaderby",
  },
  {
    id: "metaderby-hoof",
    symbol: "hoof",
    name: "Metaderby Hoof",
  },
  {
    id: "metadium",
    symbol: "meta",
    name: "Metadium",
  },
  {
    id: "metadoctor",
    symbol: "medoc",
    name: "MetaDoctor",
  },
  {
    id: "meta-doge",
    symbol: "metadoge",
    name: "Meta Doge",
  },
  {
    id: "metadoge-v2",
    symbol: "metadogev2",
    name: "MetaDoge V2",
  },
  {
    id: "metadrace",
    symbol: "drace",
    name: "MetaDrace",
  },
  {
    id: "metadubai",
    symbol: "mdb",
    name: "MetaDubai",
  },
  {
    id: "metaegg-defi",
    symbol: "megg",
    name: "Metaegg DeFi",
  },
  {
    id: "metaelfland-token",
    symbol: "melt",
    name: "MetaElfLand Token",
  },
  {
    id: "metaf1",
    symbol: "f1t",
    name: "MetaF1",
  },
  {
    id: "metafabric",
    symbol: "fabric",
    name: "MetaFabric",
  },
  {
    id: "meta-farmer-finance",
    symbol: "mff",
    name: "Meta Farmer Finance",
  },
  {
    id: "metafastest",
    symbol: "metaf",
    name: "METAFASTEST",
  },
  {
    id: "metaficial-world",
    symbol: "mw",
    name: "Metaficial World",
  },
  {
    id: "metafighter",
    symbol: "mf",
    name: "MetaFighter",
  },
  {
    id: "metafinance",
    symbol: "mfi",
    name: "MetaFinance",
  },
  {
    id: "meta_finance",
    symbol: "mf1",
    name: "Meta Finance",
  },
  {
    id: "metafish",
    symbol: "fish",
    name: "Metafish",
  },
  {
    id: "metafishing",
    symbol: "dgc",
    name: "MetaFishing [OLD]",
  },
  {
    id: "metafishing-2",
    symbol: "dgc",
    name: "MetaFishing",
  },
  {
    id: "metaflip",
    symbol: "metaflip",
    name: "MetaFlip",
  },
  {
    id: "meta-floki",
    symbol: "mfloki",
    name: "Meta Floki",
  },
  {
    id: "metafluence",
    symbol: "meto",
    name: "Metafluence",
  },
  {
    id: "metafootball",
    symbol: "mtf",
    name: "MetaFootball",
  },
  {
    id: "metafooty",
    symbol: "mfy",
    name: "MetaFooty",
  },
  {
    id: "metagalaxy-land",
    symbol: "megaland",
    name: "Metagalaxy Land",
  },
  {
    id: "metagame",
    symbol: "seed",
    name: "MetaGame",
  },
  {
    id: "metagame-arena",
    symbol: "mga",
    name: "Metagame Arena",
  },
  {
    id: "metagamehub-dao",
    symbol: "mgh",
    name: "MetaGameHub DAO",
  },
  {
    id: "metagamespace",
    symbol: "metags",
    name: "MetaGameSpace",
  },
  {
    id: "metagaming-guild",
    symbol: "mgg",
    name: "MetaGaming Guild",
  },
  {
    id: "metagamz",
    symbol: "metag",
    name: "MetagamZ",
  },
  {
    id: "metagear",
    symbol: "gear",
    name: "MetaGear",
  },
  {
    id: "metagochi",
    symbol: "mgchi",
    name: "Metagochi",
  },
  {
    id: "metagods",
    symbol: "mgod",
    name: "MetaGods",
  },
  {
    id: "metagox",
    symbol: "mtx",
    name: "Metagox",
  },
  {
    id: "meta-grow",
    symbol: "meta",
    name: "META GROW",
  },
  {
    id: "metahamster",
    symbol: "mham",
    name: "Metahamster",
  },
  {
    id: "metahash",
    symbol: "mhc",
    name: "#MetaHash",
  },
  {
    id: "metahero",
    symbol: "hero",
    name: "Metahero",
  },
  {
    id: "metahome",
    symbol: "metahome",
    name: "MetaHome",
  },
  {
    id: "meta-house",
    symbol: "meta house",
    name: "Meta House",
  },
  {
    id: "meta-inu-token",
    symbol: "meta",
    name: "Meta Inu Token",
  },
  {
    id: "meta-islands",
    symbol: "igo",
    name: "Meta Islands",
  },
  {
    id: "metajuice",
    symbol: "vcoin",
    name: "Metajuice",
  },
  {
    id: "metakeeper",
    symbol: "mkp",
    name: "MetaKeeper",
  },
  {
    id: "metakings",
    symbol: "mtk",
    name: "Metakings",
  },
  {
    id: "metakombat",
    symbol: "kombat",
    name: "MetaKombat",
  },
  {
    id: "meta-kongz",
    symbol: "mkc",
    name: "Meta Kongz",
  },
  {
    id: "metal",
    symbol: "mtl",
    name: "Metal DAO",
  },
  {
    id: "metalama",
    symbol: "lama",
    name: "MetaLama",
  },
  {
    id: "metaland-dao",
    symbol: "meta",
    name: "Metaland DAO",
  },
  {
    id: "metaland-gameverse",
    symbol: "mst",
    name: "Monster",
  },
  {
    id: "metalandmap",
    symbol: "mland",
    name: "MetaLandmap",
  },
  {
    id: "metalaunchpad",
    symbol: "mlp",
    name: "MetaLaunchPad",
  },
  {
    id: "metal-blockchain",
    symbol: "metal",
    name: "Metal Blockchain",
  },
  {
    id: "metal-friends",
    symbol: "mtls",
    name: "Metal Friends",
  },
  {
    id: "metalk",
    symbol: "meta",
    name: "Metalk",
  },
  {
    id: "metal-music-coin",
    symbol: "mtlmc3",
    name: "Metal Music Coin",
  },
  {
    id: "metaloop-tech",
    symbol: "mlt",
    name: "Metaloop Tech",
  },
  {
    id: "metalswap",
    symbol: "xmt",
    name: "MetalSwap",
  },
  {
    id: "metamall",
    symbol: "mall",
    name: "MetaMall",
  },
  {
    id: "metamars",
    symbol: "metam",
    name: "MetaMars",
  },
  {
    id: "metamate",
    symbol: "mtm",
    name: "MetaMate",
  },
  {
    id: "metamerce",
    symbol: "merce",
    name: "MetaMerce",
  },
  {
    id: "metamerce-token",
    symbol: "mmtkn",
    name: "MetaMerce Token",
  },
  {
    id: "metamic-e-sports-games",
    symbol: "meg",
    name: "MetaMic E-Sports Games",
  },
  {
    id: "meta-miner",
    symbol: "miner",
    name: "Meta Miner",
  },
  {
    id: "metamonkeyai",
    symbol: "mmai",
    name: "MetamonkeyAi",
  },
  {
    id: "metamoon",
    symbol: "metamoon",
    name: "MetaMoon",
  },
  {
    id: "metamounts",
    symbol: "mount",
    name: "MetaMounts",
  },
  {
    id: "metamui",
    symbol: "mmui",
    name: "MetaMUI",
  },
  {
    id: "meta-musk",
    symbol: "meta",
    name: "Meta Musk",
  },
  {
    id: "meta-mvrs",
    symbol: "mvrs",
    name: "Meta MVRS",
  },
  {
    id: "meta-nebulas-ionz",
    symbol: "ionz",
    name: "IONZ",
  },
  {
    id: "metanept",
    symbol: "nept",
    name: "Metanept",
  },
  {
    id: "metan-evolutions",
    symbol: "metan",
    name: "Metan Evolutions",
  },
  {
    id: "metaniagames",
    symbol: "metania",
    name: "MetaniaGames",
  },
  {
    id: "metano",
    symbol: "metano",
    name: "Metano",
  },
  {
    id: "metanyx",
    symbol: "metx",
    name: "Metanyx",
  },
  {
    id: "metaoceancity",
    symbol: "moc",
    name: "MetaOceanCity",
  },
  {
    id: "metaoctagon",
    symbol: "motg",
    name: "MetaOctagon",
  },
  {
    id: "metaoneverse",
    symbol: "m1verse",
    name: "MetaOneVerse",
  },
  {
    id: "metapad",
    symbol: "mpd",
    name: "Metapad",
  },
  {
    id: "metapets",
    symbol: "metapets",
    name: "MetaPets",
  },
  {
    id: "metaplace",
    symbol: "mpc",
    name: "Metaplace",
  },
  {
    id: "metaplanet",
    symbol: "mpl",
    name: "MetaPlanet",
  },
  {
    id: "metaplayers-gg",
    symbol: "fps",
    name: "MetaPlayers.gg",
  },
  {
    id: "metaple-finance",
    symbol: "mlx",
    name: "Metaple Finance",
  },
  {
    id: "metaplex",
    symbol: "mplx",
    name: "Metaplex",
  },
  {
    id: "meta-pool",
    symbol: "meta",
    name: "Meta Pool",
  },
  {
    id: "metapplay",
    symbol: "metap",
    name: "MetapPlay",
  },
  {
    id: "meta-protocol",
    symbol: "mpc",
    name: "META PROTOCOL",
  },
  {
    id: "metaq",
    symbol: "metaq",
    name: "MetaQ",
  },
  {
    id: "metaraca",
    symbol: "metar",
    name: "MetaRaca",
  },
  {
    id: "metaracers",
    symbol: "mrs",
    name: "MetaRacers",
  },
  {
    id: "metarare",
    symbol: "mtra",
    name: "MetaRare",
  },
  {
    id: "metareset",
    symbol: "reset",
    name: "MetaReset",
  },
  {
    id: "metarim",
    symbol: "rim",
    name: "MetaRim",
  },
  {
    id: "metarix",
    symbol: "mtrx",
    name: "Metarix",
  },
  {
    id: "metaroid-nft",
    symbol: "metaroid",
    name: "Metaroid NFT",
  },
  {
    id: "metars-genesis",
    symbol: "mrs",
    name: "Metars Genesis",
  },
  {
    id: "meta-ruffy",
    symbol: "mr",
    name: "MetaRuffy (MR)",
  },
  {
    id: "meta-ruffy-old",
    symbol: "mr",
    name: "Meta Ruffy [OLD]",
  },
  {
    id: "metarun",
    symbol: "mrun",
    name: "Metarun",
  },
  {
    id: "metasafemoon",
    symbol: "metasfm",
    name: "MetaSafeMoon",
  },
  {
    id: "metaseer",
    symbol: "metas",
    name: "Metaseer",
  },
  {
    id: "metasens",
    symbol: "msu",
    name: "Metasens",
  },
  {
    id: "meta-shark",
    symbol: "mts",
    name: "Meta Shark",
  },
  {
    id: "metashells",
    symbol: "shell",
    name: "MetaShells",
  },
  {
    id: "metashiba",
    symbol: "metashib",
    name: "MetaShiba",
  },
  {
    id: "meta-shiba",
    symbol: "mshiba",
    name: "Meta Shiba",
  },
  {
    id: "metashooter",
    symbol: "mhunt",
    name: "MetaShooter",
  },
  {
    id: "meta-skinny-hope",
    symbol: "metash",
    name: "Meta Skinny&Hope",
  },
  {
    id: "metasnooker",
    symbol: "msr",
    name: "MetaSnooker",
  },
  {
    id: "metasoccer",
    symbol: "msu",
    name: "MetaSoccer",
  },
  {
    id: "metaspace",
    symbol: "mspace",
    name: "Metaspace",
  },
  {
    id: "meta-space-2045",
    symbol: "mtw",
    name: "Meta Space 2045",
  },
  {
    id: "meta-spatial",
    symbol: "spat",
    name: "Meta Spatial",
  },
  {
    id: "metaspets",
    symbol: "msp",
    name: "MetaSpets",
  },
  {
    id: "metasphere",
    symbol: "mtsp",
    name: "Metasphere",
  },
  {
    id: "meta-sports",
    symbol: "msg",
    name: "Meta Sports",
  },
  {
    id: "metasportstoken",
    symbol: "mst",
    name: "MetaSportsToken",
  },
  {
    id: "metastocks",
    symbol: "mtsks",
    name: "MetaStocks",
  },
  {
    id: "metastrike",
    symbol: "mts",
    name: "Metastrike",
  },
  {
    id: "metaswap",
    symbol: "msc",
    name: "MetaSwap",
  },
  {
    id: "meta-to-earn",
    symbol: "mte",
    name: "Meta to Earn",
  },
  {
    id: "metatoken",
    symbol: "mtk",
    name: "MetaToken",
  },
  {
    id: "metatoll",
    symbol: "tax",
    name: "MetaToll",
  },
  {
    id: "metatown",
    symbol: "mtown",
    name: "MetaTown",
  },
  {
    id: "metatrone",
    symbol: "met",
    name: "Metatrone",
  },
  {
    id: "metaufo",
    symbol: "metaufo",
    name: "MetaUFO",
  },
  {
    id: "meta-utopia",
    symbol: "land",
    name: "Meta Utopia",
  },
  {
    id: "metavault-dao",
    symbol: "mvd",
    name: "Metavault DAO",
  },
  {
    id: "metavault-trade",
    symbol: "mvx",
    name: "Metavault Trade",
  },
  {
    id: "metavegas",
    symbol: "metavegas",
    name: "MetaVegas",
  },
  {
    id: "metaverseair",
    symbol: "mvrs",
    name: "MetaverseAir",
  },
  {
    id: "metaverse-box-game",
    symbol: "mtvg",
    name: "Metaverse Box Game",
  },
  {
    id: "metaverse-dao",
    symbol: "mdao",
    name: "Metaverse DAO",
  },
  {
    id: "metaverse-dog",
    symbol: "mvdg",
    name: "MetaVerse Dog",
  },
  {
    id: "metaverse-dualchain-network-architecture",
    symbol: "dna",
    name: "Metaverse DNA",
  },
  {
    id: "metaverse-etp",
    symbol: "etp",
    name: "Metaverse ETP",
  },
  {
    id: "metaverse-exchange",
    symbol: "metacex",
    name: "Metaverse Exchange",
  },
  {
    id: "metaverse-face",
    symbol: "mefa",
    name: "Metaverse Face",
  },
  {
    id: "metaverse-hub",
    symbol: "mhub",
    name: "Metaverse Hub",
  },
  {
    id: "metaverse-index",
    symbol: "mvi",
    name: "Metaverse Index",
  },
  {
    id: "metaverse-index-token",
    symbol: "metai",
    name: "Metaverse Index Token",
  },
  {
    id: "metaverse-m",
    symbol: "m",
    name: "MetaVerse-M",
  },
  {
    id: "metaversemgl",
    symbol: "mglc",
    name: "MetaverseMGL",
  },
  {
    id: "metaverse-miner",
    symbol: "meta",
    name: "Metaverse Miner",
  },
  {
    id: "metaverse-network-4e5ee514-56c4-4989-84df-c0b89cd19ec0",
    symbol: "nuum",
    name: "Metaverse.Network",
  },
  {
    id: "metaverse-network-pioneer",
    symbol: "neer",
    name: "Metaverse.Network Pioneer",
  },
  {
    id: "metaverse-nft-index",
    symbol: "play",
    name: "Metaverse NFT Index",
  },
  {
    id: "metaverser",
    symbol: "mtvt",
    name: "Metaverser",
  },
  {
    id: "metaverse-vr",
    symbol: "mevr",
    name: "Metaverse VR",
  },
  {
    id: "metaverse-world",
    symbol: "world",
    name: "Metaverse World",
  },
  {
    id: "metaversex",
    symbol: "metax",
    name: "MetaverseX",
  },
  {
    id: "metavie-token",
    symbol: "metavie",
    name: "Metavie",
  },
  {
    id: "metavisa",
    symbol: "mesa",
    name: "metavisa",
  },
  {
    id: "metavpad",
    symbol: "metav",
    name: "MetaVPad",
  },
  {
    id: "metawars",
    symbol: "wars",
    name: "MetaWars",
  },
  {
    id: "metawar-token",
    symbol: "mtwr",
    name: "MetaWar Token",
  },
  {
    id: "metawear",
    symbol: "wear",
    name: "MetaWear",
  },
  {
    id: "metaweb3pad",
    symbol: "metaweb3pa",
    name: "MetaWeb3Pad",
  },
  {
    id: "metaworld",
    symbol: "mw",
    name: "MetaWorld",
  },
  {
    id: "meta-world-game",
    symbol: "mtw",
    name: "Meta World Game",
  },
  {
    id: "metax",
    symbol: "x1",
    name: "MetaX",
  },
  {
    id: "metaxhunter",
    symbol: "xhunter",
    name: "MetaXHunter",
  },
  {
    id: "metaxiz",
    symbol: "mexi",
    name: "Metaxiz",
  },
  {
    id: "metaxy",
    symbol: "mxy",
    name: "Metaxy",
  },
  {
    id: "meta-z",
    symbol: "mzt",
    name: "Meta Z",
  },
  {
    id: "metazilla",
    symbol: "mz",
    name: "MetaZilla",
  },
  {
    id: "metazombie",
    symbol: "zombie",
    name: "MetaZombie",
  },
  {
    id: "meteorite-network",
    symbol: "meteor",
    name: "Meteorite Network",
  },
  {
    id: "meter",
    symbol: "mtrg",
    name: "Meter Governance",
  },
  {
    id: "meter-governance-mapped-by-meter-io",
    symbol: "emtrg",
    name: "Meter Governance mapped by Meter.io",
  },
  {
    id: "meter-stable",
    symbol: "mtr",
    name: "Meter Stable",
  },
  {
    id: "metfi",
    symbol: "mfi",
    name: "MetFi",
  },
  {
    id: "metfx-watch-to-earn",
    symbol: "mfx",
    name: "METFX Watch To Earn",
  },
  {
    id: "method-fi",
    symbol: "mthd",
    name: "Method Finance",
  },
  {
    id: "metis",
    symbol: "mts",
    name: "Metis MTS",
  },
  {
    id: "metis-token",
    symbol: "metis",
    name: "Metis",
  },
  {
    id: "metoo",
    symbol: "metoo",
    name: "Metoo",
  },
  {
    id: "metoshi",
    symbol: "meto",
    name: "Metoshi",
  },
  {
    id: "metria",
    symbol: "metr",
    name: "Metria Network",
  },
  {
    id: "metric-exchange",
    symbol: "metric",
    name: "MetricExchange",
  },
  {
    id: "metronome",
    symbol: "met",
    name: "Metronome",
  },
  {
    id: "metroverse",
    symbol: "met",
    name: "Metroverse",
  },
  {
    id: "mettalex",
    symbol: "mtlx",
    name: "Mettalex",
  },
  {
    id: "metti-inu",
    symbol: "metti",
    name: "Metti Inu",
  },
  {
    id: "meverse",
    symbol: "mev",
    name: "MEVerse",
  },
  {
    id: "mexc-football-fan-token-index",
    symbol: "football",
    name: "MEXC Football Fan Token Index",
  },
  {
    id: "mexican-peso-tether",
    symbol: "mxnt",
    name: "Mexican Peso Tether",
  },
  {
    id: "mfet",
    symbol: "mfet",
    name: "MFET",
  },
  {
    id: "mg-social",
    symbol: "mgs",
    name: "MG.Social",
  },
  {
    id: "miamicoin",
    symbol: "mia",
    name: "MiamiCoin",
  },
  {
    id: "miaswap",
    symbol: "mia",
    name: "MiaSwap",
  },
  {
    id: "mib-coin",
    symbol: "mib",
    name: "MIB Coin",
  },
  {
    id: "mibr-fan-token",
    symbol: "mibr",
    name: "MIBR Fan Token",
  },
  {
    id: "microbitcoin",
    symbol: "mbc",
    name: "MicroBitcoin",
  },
  {
    id: "micro-bitcoin-finance",
    symbol: "mbtc",
    name: "Micro Bitcoin Finance",
  },
  {
    id: "microchains-gov-token",
    symbol: "mcg",
    name: "MicroChains Gov Token",
  },
  {
    id: "microcoin",
    symbol: "mcc",
    name: "MicroCoin",
  },
  {
    id: "microcosm",
    symbol: "mic",
    name: "Microcosm",
  },
  {
    id: "microcredittoken",
    symbol: "1mct",
    name: "MicroCredit",
  },
  {
    id: "micromines",
    symbol: "micro",
    name: "Micromines",
  },
  {
    id: "micromoney",
    symbol: "amm",
    name: "MicroMoney",
  },
  {
    id: "micronft",
    symbol: "mnt",
    name: "microNFT",
  },
  {
    id: "micropets",
    symbol: "pets",
    name: "MicroPets",
  },
  {
    id: "micro-santa-coin",
    symbol: "microsanta",
    name: "Micro Santa Coin",
  },
  {
    id: "microsoft-tokenized-stock-defichain",
    symbol: "dmsft",
    name: "Microsoft Tokenized Stock Defichain",
  },
  {
    id: "microtick",
    symbol: "tick",
    name: "Microtick",
  },
  {
    id: "microtuber",
    symbol: "mct",
    name: "MicroTuber",
  },
  {
    id: "mida",
    symbol: "mida",
    name: "MIDA",
  },
  {
    id: "midas",
    symbol: "midas",
    name: "Midas",
  },
  {
    id: "midas-miner",
    symbol: "mmi",
    name: "Midas Miner",
  },
  {
    id: "midas-protocol",
    symbol: "mas",
    name: "Midas Protocol",
  },
  {
    id: "mie-network",
    symbol: "mie",
    name: "MIE Network",
  },
  {
    id: "miidas",
    symbol: "miidas",
    name: "Miidas",
  },
  {
    id: "miku",
    symbol: "miku",
    name: "Miku",
  },
  {
    id: "milady-vault-nftx",
    symbol: "milady",
    name: "Milady Vault (NFTX)",
  },
  {
    id: "milestonebased",
    symbol: "mile",
    name: "milestoneBased",
  },
  {
    id: "mileverse",
    symbol: "mvc",
    name: "MileVerse",
  },
  {
    id: "milf-finance",
    symbol: "milf",
    name: "MILF Finance",
  },
  {
    id: "military-finance",
    symbol: "mil",
    name: "Military Finance",
  },
  {
    id: "militia-games",
    symbol: "milit",
    name: "Militia Games",
  },
  {
    id: "milk",
    symbol: "milk",
    name: "Cool Cats Milk",
  },
  {
    id: "milk2",
    symbol: "milk",
    name: "CashCow Protocol Milk",
  },
  {
    id: "milk-alliance",
    symbol: "mlk",
    name: "MiL.k Alliance",
  },
  {
    id: "milk-and-butter",
    symbol: "mb",
    name: "Milk and Butter",
  },
  {
    id: "milkshakeswap",
    symbol: "milk",
    name: "Milkshake Swap",
  },
  {
    id: "milky-finance",
    symbol: "mifi",
    name: "Milky Finance",
  },
  {
    id: "milkyswap",
    symbol: "milky",
    name: "MilkySwap",
  },
  {
    id: "milky-token",
    symbol: "milky",
    name: "Milky",
  },
  {
    id: "milkyway",
    symbol: "milky",
    name: "MilkyWay",
  },
  {
    id: "milkywayex",
    symbol: "milky",
    name: "MilkyWayEx",
  },
  {
    id: "millenniumclub",
    symbol: "mclb",
    name: "MillenniumClub Coin",
  },
  {
    id: "millennium-sapphire",
    symbol: "msto",
    name: "Millennium Sapphire",
  },
  {
    id: "millimeter",
    symbol: "mm",
    name: "Millimeter",
  },
  {
    id: "million",
    symbol: "mm",
    name: "Million",
  },
  {
    id: "millionaire-land",
    symbol: "tok",
    name: "Millionaire Land",
  },
  {
    id: "millionaire-maker",
    symbol: "million",
    name: "Millionaire Maker",
  },
  {
    id: "milliondollarbaby",
    symbol: "mdb",
    name: "MillionDollarBaby",
  },
  {
    id: "million-monke",
    symbol: "mimo",
    name: "Million Monke",
  },
  {
    id: "million-pixel",
    symbol: "xix",
    name: "Million Pixel",
  },
  {
    id: "millionsy",
    symbol: "milli",
    name: "MILLIONSY",
  },
  {
    id: "millonarios-fc-fan-token",
    symbol: "mfc",
    name: "Millonarios FC Fan Token",
  },
  {
    id: "milo-inu",
    symbol: "milo",
    name: "Milo Inu",
  },
  {
    id: "mim",
    symbol: "swarm",
    name: "MIM",
  },
  {
    id: "mimas-finance",
    symbol: "mimas",
    name: "Mimas Finance",
  },
  {
    id: "mimatic",
    symbol: "mimatic",
    name: "MAI",
  },
  {
    id: "mimblewimblecoin",
    symbol: "mwc",
    name: "MimbleWimbleCoin",
  },
  {
    id: "mimir-token",
    symbol: "mimir",
    name: "Mimir",
  },
  {
    id: "mimo-parallel-governance-token",
    symbol: "mimo",
    name: "Mimo Governance",
  },
  {
    id: "mimosa",
    symbol: "mimo",
    name: "Mimosa",
  },
  {
    id: "mina-protocol",
    symbol: "mina",
    name: "Mina Protocol",
  },
  {
    id: "minato",
    symbol: "mnto",
    name: "Minato",
  },
  {
    id: "mincoin",
    symbol: "mnc",
    name: "Mincoin",
  },
  {
    id: "mindcell",
    symbol: "mdc",
    name: "MindCell",
  },
  {
    id: "mindcoin",
    symbol: "mnd",
    name: "MindCoin",
  },
  {
    id: "mindfolk-wood",
    symbol: "$wood",
    name: "Mindfolk Wood",
  },
  {
    id: "mind-music",
    symbol: "mnd",
    name: "Mind Music",
  },
  {
    id: "mindol",
    symbol: "min",
    name: "MINDOL",
  },
  {
    id: "minds",
    symbol: "minds",
    name: "Minds",
  },
  {
    id: "mindsync",
    symbol: "mai",
    name: "Mindsync",
  },
  {
    id: "minebase",
    symbol: "mbase",
    name: "Minebase",
  },
  {
    id: "mine-empire",
    symbol: "gem",
    name: "Mine Empire",
  },
  {
    id: "mine-network",
    symbol: "mnet",
    name: "MINE Network",
  },
  {
    id: "mineral",
    symbol: "mnr",
    name: "Mineral",
  },
  {
    id: "minerblox",
    symbol: "mblox",
    name: "MinerBlox",
  },
  {
    id: "minergate-token",
    symbol: "mg",
    name: "MinerGate",
  },
  {
    id: "minerjoe",
    symbol: "gold",
    name: "MinerJoe",
  },
  {
    id: "minersdefi",
    symbol: "miners",
    name: "MinersDefi",
  },
  {
    id: "miners-of-kadenia",
    symbol: "mok",
    name: "Miners of Kadenia",
  },
  {
    id: "minerva-wallet",
    symbol: "miva",
    name: "Minerva Wallet",
  },
  {
    id: "mine-shares",
    symbol: "mine",
    name: "Mine Shares",
  },
  {
    id: "mines-of-dalarnia",
    symbol: "dar",
    name: "Mines of Dalarnia",
  },
  {
    id: "mineum",
    symbol: "mnm",
    name: "Mineum",
  },
  {
    id: "mini",
    symbol: "mini",
    name: "Mini",
  },
  {
    id: "mini-baby-doge",
    symbol: "minibabydoge",
    name: "Mini Baby Doge",
  },
  {
    id: "minibitcoin",
    symbol: "mbtc",
    name: "MiniBitcoin",
  },
  {
    id: "minibtc",
    symbol: "minibtc",
    name: "MiniBTC",
  },
  {
    id: "minidoge",
    symbol: "minidoge",
    name: "MiniDOGE",
  },
  {
    id: "minifootball",
    symbol: "minifootball",
    name: "Minifootball",
  },
  {
    id: "minimals",
    symbol: "mms",
    name: "Minimals",
  },
  {
    id: "mini-mongoose",
    symbol: "minimongoose",
    name: "mini Mongoose",
  },
  {
    id: "miningnft",
    symbol: "mit",
    name: "MiningNFT",
  },
  {
    id: "minionverse",
    symbol: "mivrs",
    name: "Minionverse",
  },
  {
    id: "minipanther",
    symbol: "mp",
    name: "MiniPanther",
  },
  {
    id: "minishib-token",
    symbol: "minishib",
    name: "miniSHIB Token",
  },
  {
    id: "minisportzilla",
    symbol: "minisportz",
    name: "MiniSportZilla",
  },
  {
    id: "miniverse-dollar",
    symbol: "mvdollar",
    name: "MiniVerse Dollar",
  },
  {
    id: "miniverse-share",
    symbol: "mshare",
    name: "Miniverse Share",
  },
  {
    id: "minix",
    symbol: "mnx",
    name: "MiniX",
  },
  {
    id: "minswap",
    symbol: "min",
    name: "Minswap",
  },
  {
    id: "mint-club",
    symbol: "mint",
    name: "Mint Club",
  },
  {
    id: "mintcoin",
    symbol: "mint",
    name: "Mintcoin",
  },
  {
    id: "minted",
    symbol: "mtd",
    name: "Minted",
  },
  {
    id: "minter-hub",
    symbol: "hub",
    name: "Minter Hub",
  },
  {
    id: "minter-network",
    symbol: "bip",
    name: "Minter Network",
  },
  {
    id: "mint-marble",
    symbol: "mim",
    name: "Mint Marble",
  },
  {
    id: "minto",
    symbol: "btcmt",
    name: "Minto",
  },
  {
    id: "mintyswap",
    symbol: "mintys",
    name: "MintySwap",
  },
  {
    id: "miracle-universe",
    symbol: "mu",
    name: "Miracle Universe",
  },
  {
    id: "mirai-token",
    symbol: "mirai",
    name: "Mirai Labs",
  },
  {
    id: "miraqle",
    symbol: "mql",
    name: "MiraQle",
  },
  {
    id: "mirarc-chain",
    symbol: "mat",
    name: "MirArc Chain",
  },
  {
    id: "mirocana",
    symbol: "miro",
    name: "Mirocana",
  },
  {
    id: "mirrored-ether",
    symbol: "meth",
    name: "Mirrored Ether",
  },
  {
    id: "mirror-finance",
    symbol: "mirror",
    name: "Mirror Finance",
  },
  {
    id: "mirror-protocol",
    symbol: "mir",
    name: "Mirror Protocol",
  },
  {
    id: "misbloc",
    symbol: "msb",
    name: "Misbloc",
  },
  {
    id: "mission-helios",
    symbol: "helios",
    name: "Mission Helios",
  },
  {
    id: "mist",
    symbol: "mist",
    name: "Mist",
  },
  {
    id: "mithril",
    symbol: "mith",
    name: "Mithril",
  },
  {
    id: "mithril-share",
    symbol: "mis",
    name: "Mithril Share",
  },
  {
    id: "mithrilverse",
    symbol: "mithril",
    name: "Mithrilverse",
  },
  {
    id: "mixin",
    symbol: "xin",
    name: "Mixin",
  },
  {
    id: "mixmarvel",
    symbol: "mix",
    name: "MixMarvel",
  },
  {
    id: "mixsome",
    symbol: "some",
    name: "Mixsome",
  },
  {
    id: "mixtrust",
    symbol: "mxt",
    name: "MixTrust",
  },
  {
    id: "miyazaki-inu",
    symbol: "miyazaki",
    name: "Miyazaki Inu",
  },
  {
    id: "mjackswap",
    symbol: "mjack",
    name: "MjackSwap",
  },
  {
    id: "mkitty",
    symbol: "mkitty",
    name: "mKitty",
  },
  {
    id: "mktcash",
    symbol: "mch",
    name: "Mktcash",
  },
  {
    id: "mktcoin",
    symbol: "mkt",
    name: "MktCoin",
  },
  {
    id: "mloky",
    symbol: "mloky",
    name: "MLOKY",
  },
  {
    id: "mm72",
    symbol: "mm72",
    name: "MM72",
  },
  {
    id: "mmacoin",
    symbol: "mma",
    name: "MMACoin",
  },
  {
    id: "mma-gaming",
    symbol: "mma",
    name: "MMA Gaming",
  },
  {
    id: "mmaon",
    symbol: "mmaon",
    name: "MMAON",
  },
  {
    id: "mmfinance",
    symbol: "mmf",
    name: "MMFinance (Cronos)",
  },
  {
    id: "mmfinance-polygon",
    symbol: "mmf",
    name: "MMFinance (Polygon)",
  },
  {
    id: "mmf-money",
    symbol: "burrow",
    name: "MMF Money",
  },
  {
    id: "mmg-token",
    symbol: "mmg",
    name: "Mad Monkey Guild",
  },
  {
    id: "mmmluckup7",
    symbol: "mmm7",
    name: "MMMLUCKUP7",
  },
  {
    id: "mmocoin",
    symbol: "mmo",
    name: "MMOCoin",
  },
  {
    id: "mms-cash",
    symbol: "mcash",
    name: "MMS Cash",
  },
  {
    id: "mms-coin",
    symbol: "mmsc",
    name: "MMS Coin",
  },
  {
    id: "mnmcoin",
    symbol: "mnmc",
    name: "MNMCoin",
  },
  {
    id: "mo",
    symbol: "mo",
    name: "MO",
  },
  {
    id: "moar",
    symbol: "moar",
    name: "Moar Finance",
  },
  {
    id: "mobiecoin",
    symbol: "mbx",
    name: "MobieCoin",
  },
  {
    id: "mobifi",
    symbol: "mofi",
    name: "MobiFi",
  },
  {
    id: "mobilecoin",
    symbol: "mob",
    name: "MobileCoin",
  },
  {
    id: "mobile-crypto-pay-coin",
    symbol: "mcpc",
    name: "Mobile Crypto Pay Coin",
  },
  {
    id: "mobilego",
    symbol: "mgo",
    name: "MobileGo",
  },
  {
    id: "mobilian-coin",
    symbol: "mbn",
    name: "Mobilian Coin",
  },
  {
    id: "mobility-coin",
    symbol: "mobic",
    name: "Mobility Coin",
  },
  {
    id: "mobipad",
    symbol: "mbp",
    name: "Mobipad",
  },
  {
    id: "mobist",
    symbol: "mitx",
    name: "Mobist",
  },
  {
    id: "mobius",
    symbol: "mobi",
    name: "Mobius",
  },
  {
    id: "mobius-finance",
    symbol: "mot",
    name: "Mobius Finance",
  },
  {
    id: "mobius-money",
    symbol: "mobi",
    name: "Mobius Money",
  },
  {
    id: "mobix",
    symbol: "mobx",
    name: "MOBIX",
  },
  {
    id: "mobox",
    symbol: "mbox",
    name: "Mobox",
  },
  {
    id: "moby-dick-2",
    symbol: "moby",
    name: "Moby Dick",
  },
  {
    id: "mochi-inu",
    symbol: "mochi",
    name: "Mochi Inu",
  },
  {
    id: "mochi-market",
    symbol: "moma",
    name: "Mochi Market",
  },
  {
    id: "mocossi-planet",
    symbol: "mcos",
    name: "Mocossi Planet",
  },
  {
    id: "moda-dao",
    symbol: "moda",
    name: "MODA DAO",
  },
  {
    id: "modden",
    symbol: "mddn",
    name: "Modden",
  },
  {
    id: "modefi",
    symbol: "mod",
    name: "Modefi",
  },
  {
    id: "model-x-coin",
    symbol: "modx",
    name: "MODEL-X-coin",
  },
  {
    id: "modex",
    symbol: "modex",
    name: "Modex",
  },
  {
    id: "modihost",
    symbol: "aim",
    name: "ModiHost",
  },
  {
    id: "moebius",
    symbol: "mobi",
    name: "Moebius",
  },
  {
    id: "moeda-loyalty-points",
    symbol: "mda",
    name: "Moeda Loyalty Points",
  },
  {
    id: "mogu",
    symbol: "mogx",
    name: "Mogu",
  },
  {
    id: "mogul-productions",
    symbol: "stars",
    name: "Mogul Productions",
  },
  {
    id: "mohash",
    symbol: "moh",
    name: "Mohash",
  },
  {
    id: "mojito",
    symbol: "mojo",
    name: "Mojito",
  },
  {
    id: "mojitoswap",
    symbol: "mjt",
    name: "MojitoSwap",
  },
  {
    id: "mojo-v2",
    symbol: "mojov2",
    name: "Mojo V2",
  },
  {
    id: "molecular-future",
    symbol: "mof",
    name: "Molecular Future",
  },
  {
    id: "mollector",
    symbol: "mol",
    name: "Mollector",
  },
  {
    id: "moma-protocol",
    symbol: "momat",
    name: "Moma Protocol",
  },
  {
    id: "momento",
    symbol: "momento",
    name: "Momento",
  },
  {
    id: "moments",
    symbol: "mmt",
    name: "Moments Market",
  },
  {
    id: "momentum-2",
    symbol: "mass",
    name: "Momentum",
  },
  {
    id: "momentum-token",
    symbol: "mtm",
    name: "Momentum MTM",
  },
  {
    id: "mommon",
    symbol: "mmon",
    name: "Mammon",
  },
  {
    id: "mommy-doge",
    symbol: "mommydoge",
    name: "Mommy Doge",
  },
  {
    id: "momo-key",
    symbol: "key",
    name: "MoMo Key",
  },
  {
    id: "momo-protocol",
    symbol: "momo",
    name: "Momo Protocol",
  },
  {
    id: "mona",
    symbol: "mona",
    name: "Monaco Planet",
  },
  {
    id: "monaco",
    symbol: "mco",
    name: "MCO",
  },
  {
    id: "monacoin",
    symbol: "mona",
    name: "MonaCoin",
  },
  {
    id: "monastery-finance",
    symbol: "monk",
    name: "Monastery Finance",
  },
  {
    id: "monavale",
    symbol: "mona",
    name: "Monavale",
  },
  {
    id: "mondayclub",
    symbol: "monday",
    name: "MondayClub",
  },
  {
    id: "mondo-community-coin",
    symbol: "mndcc",
    name: "Mondo Community Coin",
  },
  {
    id: "monerium-eur-money",
    symbol: "eure",
    name: "Monerium EUR emoney",
  },
  {
    id: "monero",
    symbol: "xmr",
    name: "Monero",
  },
  {
    id: "monero-classic-xmc",
    symbol: "xmc",
    name: "Monero-Classic",
  },
  {
    id: "monerov",
    symbol: "xmv",
    name: "MoneroV",
  },
  {
    id: "mones",
    symbol: "mones",
    name: "Mones",
  },
  {
    id: "moneta",
    symbol: "moneta",
    name: "Moneta",
  },
  {
    id: "monetaryunit",
    symbol: "mue",
    name: "MonetaryUnit",
  },
  {
    id: "monetas",
    symbol: "mntg",
    name: "Monetas",
  },
  {
    id: "monetha",
    symbol: "mth",
    name: "Monetha",
  },
  {
    id: "moneybrain-bips",
    symbol: "bips",
    name: "Moneybrain BiPS",
  },
  {
    id: "moneybyte",
    symbol: "mon",
    name: "Moneybyte",
  },
  {
    id: "moneydefiswap",
    symbol: "msd",
    name: "MoneydefiSwap",
  },
  {
    id: "moneyhero",
    symbol: "myh",
    name: "Moneyhero",
  },
  {
    id: "moneyswap",
    symbol: "mswap",
    name: "MoneySwap",
  },
  {
    id: "moneytoken",
    symbol: "imt",
    name: "Money IMT",
  },
  {
    id: "moneytree",
    symbol: "money",
    name: "MoneyTree",
  },
  {
    id: "monfter",
    symbol: "mon",
    name: "Monfter",
  },
  {
    id: "mongol-nft",
    symbol: "mnft",
    name: "Mongol NFT",
  },
  {
    id: "mongoose",
    symbol: "mongoose",
    name: "Mongoose",
  },
  {
    id: "mongoosecoin",
    symbol: "mongoose",
    name: "MongooseCoin",
  },
  {
    id: "moniwar",
    symbol: "mowa",
    name: "Moniwar",
  },
  {
    id: "monk",
    symbol: "monk",
    name: "Monk",
  },
  {
    id: "monkeyball",
    symbol: "mbs",
    name: "MonkeyLeague",
  },
  {
    id: "monkey-king",
    symbol: "wukong",
    name: "Monkey King",
  },
  {
    id: "monnfts",
    symbol: "mon",
    name: "MONNFTS",
  },
  {
    id: "monnos",
    symbol: "mns",
    name: "Monnos",
  },
  {
    id: "monomoney",
    symbol: "mono",
    name: "MonoMoney",
  },
  {
    id: "mononoke-inu",
    symbol: "mononoke-inu",
    name: "Mononoke Inu",
  },
  {
    id: "monopoly-meta",
    symbol: "mpm",
    name: "Monopoly Meta",
  },
  {
    id: "monopoly-millionaire-control",
    symbol: "mmc",
    name: "Monopoly Millionaire Control",
  },
  {
    id: "monopoly-millionaire-game",
    symbol: "mmg",
    name: "Monopoly Millionaire Game",
  },
  {
    id: "monox",
    symbol: "mono",
    name: "MonoX",
  },
  {
    id: "monsoon-finance",
    symbol: "mcash",
    name: "Monsoon Finance",
  },
  {
    id: "monsta-infinite",
    symbol: "moni",
    name: "Monsta Infinite",
  },
  {
    id: "monstaverse",
    symbol: "monstr",
    name: "MonstaVerse",
  },
  {
    id: "monster-adventure-token",
    symbol: "mat",
    name: "Monster Adventure",
  },
  {
    id: "monster-battle",
    symbol: "mbs",
    name: "Monster Battle",
  },
  {
    id: "monster-cash-share",
    symbol: "mss",
    name: "Monster Slayer Share",
  },
  {
    id: "monster-galaxy",
    symbol: "ggm",
    name: "Monster Galaxy",
  },
  {
    id: "monster-of-god",
    symbol: "monx",
    name: "Monster of God",
  },
  {
    id: "monsterquest",
    symbol: "mqst",
    name: "MonsterQuest",
  },
  {
    id: "monsterra",
    symbol: "mstr",
    name: "Monsterra",
  },
  {
    id: "monsterra-mag",
    symbol: "mag",
    name: "Monsterra MAG",
  },
  {
    id: "monster-saga",
    symbol: "mts",
    name: "Monster Saga",
  },
  {
    id: "monsters-clan",
    symbol: "mons",
    name: "Monsters Clan",
  },
  {
    id: "monster-valley",
    symbol: "monster",
    name: "Monster Valley",
  },
  {
    id: "monster-world",
    symbol: "mw",
    name: "Monster World",
  },
  {
    id: "monstock",
    symbol: "mon",
    name: "Monstock",
  },
  {
    id: "monverse",
    symbol: "monstr",
    name: "Monverse",
  },
  {
    id: "moochii",
    symbol: "moochii",
    name: "Moochii",
  },
  {
    id: "moola-celo-atoken",
    symbol: "mcelo",
    name: "Moola CELO AToken",
  },
  {
    id: "moola-celo-dollars",
    symbol: "mcusd",
    name: "Moola Celo Dollars",
  },
  {
    id: "moola-interest-bearing-creal",
    symbol: "mcreal",
    name: "Moola interest bearing CREAL",
  },
  {
    id: "moola-market",
    symbol: "moo",
    name: "Moola Market",
  },
  {
    id: "moomonster",
    symbol: "moo",
    name: "MooMonster",
  },
  {
    id: "moon",
    symbol: "moon",
    name: "r/CryptoCurrency Moons",
  },
  {
    id: "moonai",
    symbol: "mooi",
    name: "Moonaï",
  },
  {
    id: "moonarch",
    symbol: "moonarch",
    name: "Moonarch",
  },
  {
    id: "moonbeam",
    symbol: "glmr",
    name: "Moonbeam",
  },
  {
    id: "moonbeans",
    symbol: "beans",
    name: "MoonBeans",
  },
  {
    id: "moonbear-finance",
    symbol: "mbf",
    name: "MoonBear.Finance",
  },
  {
    id: "moonbird",
    symbol: "mbird",
    name: "Moonbird",
  },
  {
    id: "moonbirds-nft-index-by-mexc",
    symbol: "nmoon",
    name: "Moonbirds NFT Index by MEXC",
  },
  {
    id: "mooncake",
    symbol: "moon",
    name: "MoonCake",
  },
  {
    id: "mooncat-vault-nftx",
    symbol: "mooncat",
    name: "MOONCAT Vault (NFTX)",
  },
  {
    id: "mooncoin",
    symbol: "moon",
    name: "Mooncoin",
  },
  {
    id: "moonedge",
    symbol: "mooned",
    name: "MoonEdge",
  },
  {
    id: "mooner",
    symbol: "mnr",
    name: "Mooner",
  },
  {
    id: "moonery",
    symbol: "mnry",
    name: "Moonery",
  },
  {
    id: "mooney",
    symbol: "mooney",
    name: "Moon DAO",
  },
  {
    id: "moon-eye",
    symbol: "me",
    name: "Moon Eye",
  },
  {
    id: "moonfarmer",
    symbol: "mfm",
    name: "MoonFarmer",
  },
  {
    id: "moonfarm-finance",
    symbol: "mfo",
    name: "MoonFarm Finance",
  },
  {
    id: "moongame",
    symbol: "mgt",
    name: "Moongame",
  },
  {
    id: "mooni",
    symbol: "mooni",
    name: "Mooni",
  },
  {
    id: "moonienft",
    symbol: "mny",
    name: "MoonieNFT",
  },
  {
    id: "moonions",
    symbol: "moonion",
    name: "Moonions",
  },
  {
    id: "moonka",
    symbol: "mka",
    name: "Moonka",
  },
  {
    id: "moonkat-finance",
    symbol: "mkat",
    name: "MoonKat Finance",
  },
  {
    id: "moonlana",
    symbol: "mola",
    name: "MoonLana",
  },
  {
    id: "moonlift",
    symbol: "mltpx",
    name: "Moonlift Capital",
  },
  {
    id: "moonlight-metaverse",
    symbol: "$mlm",
    name: "Moonlight Metaverse",
  },
  {
    id: "moon-light-night",
    symbol: "mlnt",
    name: "Moon Light Night",
  },
  {
    id: "moonlight-token",
    symbol: "moonlight",
    name: "Moonlight",
  },
  {
    id: "moon-maker-protocol",
    symbol: "mmp",
    name: "Moon Maker Protocol",
  },
  {
    id: "moonminer",
    symbol: "moonminer",
    name: "MoonMiner",
  },
  {
    id: "moon-nation-game",
    symbol: "mng",
    name: "Moon Nation Game",
  },
  {
    id: "moonpaw",
    symbol: "moonpaw",
    name: "MoonPaw",
  },
  {
    id: "moonpot",
    symbol: "pots",
    name: "Moonpot",
  },
  {
    id: "moon-rabbit",
    symbol: "aaa",
    name: "Moon Rabbit",
  },
  {
    id: "moonretriever",
    symbol: "fetch",
    name: "MoonRetriever",
  },
  {
    id: "moonrise",
    symbol: "moonrise",
    name: "MoonRise",
  },
  {
    id: "moonriver",
    symbol: "movr",
    name: "Moonriver",
  },
  {
    id: "moon-rocket-coin",
    symbol: "mrc",
    name: "Moon Rocket Coin",
  },
  {
    id: "moonrock-v2",
    symbol: "rock",
    name: "MoonRock V2",
  },
  {
    id: "moonscape",
    symbol: "mscp",
    name: "Moonscape",
  },
  {
    id: "moonsdust",
    symbol: "moond",
    name: "MoonsDust",
  },
  {
    id: "moonshot",
    symbol: "moonshot",
    name: "Moonshot [OLD]",
  },
  {
    id: "moonshots-farm",
    symbol: "bones",
    name: "Moonshots Farm",
  },
  {
    id: "moonstarter",
    symbol: "mnst",
    name: "MoonStarter",
  },
  {
    id: "moonswap",
    symbol: "moon",
    name: "MoonSwap",
  },
  {
    id: "moon-token",
    symbol: "dodb",
    name: "DODbase",
  },
  {
    id: "moontools",
    symbol: "moons",
    name: "MoonTools",
  },
  {
    id: "moon-tropica",
    symbol: "cah",
    name: "Moon Tropica",
  },
  {
    id: "moontrust",
    symbol: "mntt",
    name: "MoonTrust",
  },
  {
    id: "moontrustbsc",
    symbol: "mnttbsc",
    name: "MoonTrustBSC",
  },
  {
    id: "moonway",
    symbol: "mw2",
    name: "MoonWay",
  },
  {
    id: "moonwell",
    symbol: "mfam",
    name: "Moonwell Apollo",
  },
  {
    id: "moonwell-artemis",
    symbol: "well",
    name: "Moonwell Artemis",
  },
  {
    id: "moonwilly",
    symbol: "moonwilly",
    name: "MoonWilly",
  },
  {
    id: "moonwolf-io",
    symbol: "wolf",
    name: "moonwolf.io",
  },
  {
    id: "mops",
    symbol: "mops",
    name: "Mops",
  },
  {
    id: "morcilla-war",
    symbol: "mor",
    name: "Morcilla War",
  },
  {
    id: "moreal",
    symbol: "mor",
    name: "Moreal",
  },
  {
    id: "moremoney-usd",
    symbol: "money",
    name: "Moremoney USD",
  },
  {
    id: "more-token",
    symbol: "more",
    name: "Moremoney Finance",
  },
  {
    id: "mork",
    symbol: "mork",
    name: "MORK",
  },
  {
    id: "morpher",
    symbol: "mph",
    name: "Morpher",
  },
  {
    id: "morpheus-labs",
    symbol: "mitx",
    name: "Morpheus Labs",
  },
  {
    id: "morpheus-network",
    symbol: "mnw",
    name: "Morpheus Network",
  },
  {
    id: "morpheus-token",
    symbol: "pills",
    name: "Morpheus Swap",
  },
  {
    id: "morphie",
    symbol: "mrfi",
    name: "Morphie",
  },
  {
    id: "morpho-network",
    symbol: "morpho",
    name: "Morpho Network",
  },
  {
    id: "morphswap",
    symbol: "ms",
    name: "Morphswap",
  },
  {
    id: "mor-stablecoin",
    symbol: "mor",
    name: "Mor Stablecoin",
  },
  {
    id: "mortaldoge",
    symbol: "mortaldoge",
    name: "MortalDoge",
  },
  {
    id: "mortal-wars",
    symbol: "mwt",
    name: "Mortal Wars",
  },
  {
    id: "moshiheads",
    symbol: "moshi",
    name: "Moshiheads",
  },
  {
    id: "moss-carbon-credit",
    symbol: "mco2",
    name: "Moss Carbon Credit",
  },
  {
    id: "moss-governance",
    symbol: "moss",
    name: "Moss Governance",
  },
  {
    id: "mossland",
    symbol: "moc",
    name: "Mossland",
  },
  {
    id: "mosterisland",
    symbol: "mi",
    name: "MosterIsland",
  },
  {
    id: "motacoin",
    symbol: "mota",
    name: "MotaCoin",
  },
  {
    id: "mother-earth",
    symbol: "mot",
    name: "Mother Earth",
  },
  {
    id: "mother-of-memes",
    symbol: "mom",
    name: "Mother of Memes",
  },
  {
    id: "motionwreck-games",
    symbol: "mwg",
    name: "MotionWreck Games",
  },
  {
    id: "motiv-protocol",
    symbol: "mov",
    name: "MOTIV Protocol",
  },
  {
    id: "motocoin",
    symbol: "moto",
    name: "Motocoin",
  },
  {
    id: "motogp-fan-token",
    symbol: "mgpt",
    name: "MotoGP Fan Token",
  },
  {
    id: "motoverse",
    symbol: "mile",
    name: "Motoverse",
  },
  {
    id: "mound-token",
    symbol: "mnd",
    name: "Mound",
  },
  {
    id: "mouse-haunt",
    symbol: "mht",
    name: "Mouse Haunt",
  },
  {
    id: "movecash",
    symbol: "mca",
    name: "MoveCash",
  },
  {
    id: "move-network",
    symbol: "movd",
    name: "MOVE Network",
  },
  {
    id: "moverich",
    symbol: "mvrc",
    name: "MoveRich",
  },
  {
    id: "movey",
    symbol: "movey",
    name: "Movey",
  },
  {
    id: "movez",
    symbol: "movez",
    name: "MoveZ",
  },
  {
    id: "moviebloc",
    symbol: "mbl",
    name: "MovieBloc",
  },
  {
    id: "movingon-finance",
    symbol: "movon",
    name: "MovingOn Finance",
  },
  {
    id: "movn",
    symbol: "mov",
    name: "MOVN",
  },
  {
    id: "mozox",
    symbol: "mozox",
    name: "MozoX",
  },
  {
    id: "mp3",
    symbol: "mp3",
    name: "MP3",
  },
  {
    id: "mrweb-finance",
    symbol: "ama",
    name: "MrWeb Finance [OLD]",
  },
  {
    id: "mrweb-finance-2",
    symbol: "ama",
    name: "MrWeb Finance",
  },
  {
    id: "msgsender",
    symbol: "msg",
    name: "MsgSender",
  },
  {
    id: "mshare",
    symbol: "mshare",
    name: "MShare",
  },
  {
    id: "msol",
    symbol: "msol",
    name: "Marinade staked SOL",
  },
  {
    id: "mstable-btc",
    symbol: "mbtc",
    name: "mStable BTC",
  },
  {
    id: "mstation",
    symbol: "mst",
    name: "MStation",
  },
  {
    id: "mtg-token",
    symbol: "mtg",
    name: "MTG Token",
  },
  {
    id: "mtop",
    symbol: "mtop",
    name: "MTOP",
  },
  {
    id: "mt-pelerin-shares",
    symbol: "mps",
    name: "Mt Pelerin Shares",
  },
  {
    id: "mttcoin",
    symbol: "mttcoin",
    name: "MTTCoin",
  },
  {
    id: "mt-token",
    symbol: "mt",
    name: "MT Token",
  },
  {
    id: "mtvx",
    symbol: "mtvx",
    name: "MTVX",
  },
  {
    id: "mu-coin",
    symbol: "mu",
    name: "Mu Coin",
  },
  {
    id: "mu-continent",
    symbol: "mu",
    name: "Mu Continent",
  },
  {
    id: "mudra-mdr",
    symbol: "mdr",
    name: "Mudra MDR",
  },
  {
    id: "muesliswap-milk",
    symbol: "milk",
    name: "MuesliSwap MILK",
  },
  {
    id: "muesliswap-yield-token",
    symbol: "myield",
    name: "MuesliSwap Yield",
  },
  {
    id: "mugen-finance",
    symbol: "mgn",
    name: "Mugen Finance",
  },
  {
    id: "mu-gold",
    symbol: "mug",
    name: "Mu Gold",
  },
  {
    id: "mu-inu",
    symbol: "muinu",
    name: "Mu Inu",
  },
  {
    id: "multichain",
    symbol: "multi",
    name: "Multichain",
  },
  {
    id: "multi-chain-capital-2",
    symbol: "mcc",
    name: "Multi-Chain Capital",
  },
  {
    id: "multi-farm-capital",
    symbol: "mfc",
    name: "Multi-Farm Capital",
  },
  {
    id: "multigame",
    symbol: "multi",
    name: "Multigame",
  },
  {
    id: "multipad",
    symbol: "mpad",
    name: "MultiPad",
  },
  {
    id: "multiplanetary-inus",
    symbol: "inus",
    name: "MultiPlanetary Inus",
  },
  {
    id: "multiplier",
    symbol: "mxx",
    name: "Multiplier",
  },
  {
    id: "multiplier-bsc",
    symbol: "bmxx",
    name: "Multiplier (BSC)",
  },
  {
    id: "multi-strategies-capital",
    symbol: "msc",
    name: "Multi Strategies Capital",
  },
  {
    id: "multivac",
    symbol: "mtv",
    name: "MultiVAC",
  },
  {
    id: "multiverse",
    symbol: "ai",
    name: "Multiverse",
  },
  {
    id: "multiverse-capital",
    symbol: "mvc",
    name: "Multiverse Capital",
  },
  {
    id: "multiversepad",
    symbol: "mtvp",
    name: "MultiversePad",
  },
  {
    id: "mu-meme",
    symbol: "mume",
    name: "Mu Meme",
  },
  {
    id: "mummy-finance",
    symbol: "mmy",
    name: "Mummy Finance",
  },
  {
    id: "muna",
    symbol: "muna",
    name: "Muna",
  },
  {
    id: "munch-token",
    symbol: "munch",
    name: "Munch",
  },
  {
    id: "mundocrypto",
    symbol: "mct",
    name: "Mundocrypto",
  },
  {
    id: "mundo-token",
    symbol: "$mundo",
    name: "MUNDO",
  },
  {
    id: "muni",
    symbol: "muni",
    name: "MUNI",
  },
  {
    id: "murasaki",
    symbol: "mura",
    name: "Murasaki",
  },
  {
    id: "mus",
    symbol: "mus",
    name: "Musashi Finance",
  },
  {
    id: "musclex",
    symbol: "m-x",
    name: "MuscleX",
  },
  {
    id: "musd",
    symbol: "musd",
    name: "mStable USD",
  },
  {
    id: "muse-2",
    symbol: "muse",
    name: "Muse DAO",
  },
  {
    id: "muse-ent-nft",
    symbol: "msct",
    name: "Muse ENT NFT",
  },
  {
    id: "museum-of-crypto-art",
    symbol: "moca",
    name: "Museum of Crypto Art",
  },
  {
    id: "mushe",
    symbol: "xmu",
    name: "Mushe",
  },
  {
    id: "musicfi",
    symbol: "mf",
    name: "MusicFi",
  },
  {
    id: "music-infinity-token",
    symbol: "mit",
    name: "Music Infinity",
  },
  {
    id: "musk",
    symbol: "musk",
    name: "Musk",
  },
  {
    id: "musk-doge",
    symbol: "mkd",
    name: "Musk Doge",
  },
  {
    id: "musk-gold",
    symbol: "musk",
    name: "MUSK Gold",
  },
  {
    id: "musk-melon",
    symbol: "melon",
    name: "Musk Melon",
  },
  {
    id: "musk-metaverse",
    symbol: "metamusk",
    name: "Musk Metaverse",
  },
  {
    id: "muso-finance-2",
    symbol: "muso",
    name: "MUSO Finance",
  },
  {
    id: "must",
    symbol: "must",
    name: "Must",
  },
  {
    id: "mutant-froggo",
    symbol: "froggo",
    name: "Mutant Froggo",
  },
  {
    id: "mute",
    symbol: "mute",
    name: "Mute",
  },
  {
    id: "muu-inu",
    symbol: "$muu",
    name: "MUU",
  },
  {
    id: "muuu",
    symbol: "muuu",
    name: "Muuu Finance",
  },
  {
    id: "mvpad",
    symbol: "mvd",
    name: "MvPad",
  },
  {
    id: "mvs-multiverse",
    symbol: "mvs",
    name: "MVS Multiverse",
  },
  {
    id: "mxc",
    symbol: "mxc",
    name: "MXC",
  },
  {
    id: "mxgp-fan-token",
    symbol: "mxgp",
    name: "MXGP Fan Token",
  },
  {
    id: "mxm",
    symbol: "mxm",
    name: "MXM",
  },
  {
    id: "mxmboxceus-token",
    symbol: "mbe",
    name: "MxmBoxcEus Token",
  },
  {
    id: "mx-token",
    symbol: "mx",
    name: "MX",
  },
  {
    id: "mx-token-2",
    symbol: "mxt",
    name: "MX TOKEN",
  },
  {
    id: "mybit-token",
    symbol: "myb",
    name: "MyBit",
  },
  {
    id: "mybricks",
    symbol: "bricks",
    name: "MyBricks",
  },
  {
    id: "myce",
    symbol: "yce",
    name: "MYCE",
  },
  {
    id: "mycelium",
    symbol: "myc",
    name: "Mycelium",
  },
  {
    id: "my-ceremonial-event",
    symbol: "myce",
    name: "MY Ceremonial Event",
  },
  {
    id: "myconstant",
    symbol: "mct",
    name: "MyConstant",
  },
  {
    id: "my-defi-legends",
    symbol: "dlegends",
    name: "My DeFi Legends",
  },
  {
    id: "my-defi-pet",
    symbol: "dpet",
    name: "My DeFi Pet",
  },
  {
    id: "my-farm-token",
    symbol: "mft",
    name: "My Farm Token",
  },
  {
    id: "my-identity-coin",
    symbol: "myid",
    name: "My Identity Coin",
  },
  {
    id: "my-liquidity-partner",
    symbol: "mlp",
    name: "My Liquidity Partner",
  },
  {
    id: "my-master-war",
    symbol: "mat",
    name: "My Master War",
  },
  {
    id: "mymessage",
    symbol: "mesa",
    name: "myMessage",
  },
  {
    id: "my-neighbor-alice",
    symbol: "alice",
    name: "My Neighbor Alice",
  },
  {
    id: "myobu",
    symbol: "myobu",
    name: "Myōbu",
  },
  {
    id: "mypiggiesbank",
    symbol: "piggie",
    name: "MyPiggiesBank",
  },
  {
    id: "mypoints-e-commerce",
    symbol: "mypo",
    name: "MyPoints E-Commerce",
  },
  {
    id: "myriadcoin",
    symbol: "xmy",
    name: "Myriad",
  },
  {
    id: "myriad-social",
    symbol: "myria",
    name: "Myriad Social",
  },
  {
    id: "mysterium",
    symbol: "myst",
    name: "Mysterium",
  },
  {
    id: "mystery",
    symbol: "myst",
    name: "MYSTERY",
  },
  {
    id: "mystic-poker",
    symbol: "myp",
    name: "Mystic Poker",
  },
  {
    id: "myteamcoin",
    symbol: "myc",
    name: "Myteamcoin",
  },
  {
    id: "mytheria",
    symbol: "myra",
    name: "Mytheria",
  },
  {
    id: "mythos",
    symbol: "myth",
    name: "Mythos",
  },
  {
    id: "myth-token",
    symbol: "myth",
    name: "Myth",
  },
  {
    id: "mytoken",
    symbol: "mt",
    name: "MyToken",
  },
  {
    id: "mytrade",
    symbol: "myt",
    name: "Mytrade",
  },
  {
    id: "mytvchain",
    symbol: "mytv",
    name: "MyTVchain",
  },
  {
    id: "my-universe",
    symbol: "myuni",
    name: "My Universe",
  },
  {
    id: "n00dle",
    symbol: "n00d",
    name: "n00dle",
  },
  {
    id: "nabob",
    symbol: "nabob",
    name: "Nabob",
  },
  {
    id: "nabox",
    symbol: "nabox",
    name: "Nabox",
  },
  {
    id: "nacho-finance",
    symbol: "nacho",
    name: "Nacho Finance",
  },
  {
    id: "nada-protocol-token",
    symbol: "nada",
    name: "NADA Protocol Token",
  },
  {
    id: "naffiti",
    symbol: "naff",
    name: "Naffiti",
  },
  {
    id: "nafter",
    symbol: "naft",
    name: "Nafter",
  },
  {
    id: "nafty",
    symbol: "nafty",
    name: "Nafty",
  },
  {
    id: "naga",
    symbol: "ngc",
    name: "NAGA",
  },
  {
    id: "naga-kingdom",
    symbol: "naga",
    name: "Naga Kingdom",
  },
  {
    id: "nagaswap",
    symbol: "bnw",
    name: "NagaSwap",
  },
  {
    id: "nahmii",
    symbol: "nii",
    name: "Nahmii",
  },
  {
    id: "naka-bodhi-token",
    symbol: "nbot",
    name: "Naka Bodhi",
  },
  {
    id: "nakamoto-games",
    symbol: "naka",
    name: "Nakamoto Games",
  },
  {
    id: "name-changing-token",
    symbol: "nct",
    name: "Name Change",
  },
  {
    id: "namecoin",
    symbol: "nmc",
    name: "Namecoin",
  },
  {
    id: "nami-corporation-token",
    symbol: "nami",
    name: "Nami Corporation",
  },
  {
    id: "nano",
    symbol: "xno",
    name: "Nano",
  },
  {
    id: "nano-bitcoin-token",
    symbol: "nbtc",
    name: "Nano Bitcoin",
  },
  {
    id: "nanobyte",
    symbol: "nbt",
    name: "NanoByte",
  },
  {
    id: "nano-dogecoin",
    symbol: "indc",
    name: "Nano Dogecoin",
  },
  {
    id: "nanometer-bitcoin",
    symbol: "nmbtc",
    name: "NanoMeter Bitcoin",
  },
  {
    id: "naos-finance",
    symbol: "naos",
    name: "NAOS Finance",
  },
  {
    id: "napoleon-x",
    symbol: "npx",
    name: "Napoleon X",
  },
  {
    id: "napoli-fan-token",
    symbol: "nap",
    name: "Napoli Fan Token",
  },
  {
    id: "narfex",
    symbol: "nrfx",
    name: "Narfex",
  },
  {
    id: "narwhal",
    symbol: "nrwl",
    name: "Narwhal",
  },
  {
    id: "nasa-doge",
    symbol: "nasadoge",
    name: "Nasa Doge",
  },
  {
    id: "nasdacoin",
    symbol: "nsd",
    name: "Nasdacoin",
  },
  {
    id: "nasdex-token",
    symbol: "nsdx",
    name: "NASDEX",
  },
  {
    id: "natas-token",
    symbol: "natas",
    name: "NaTaS Token",
  },
  {
    id: "natiol",
    symbol: "nai",
    name: "Natiol",
  },
  {
    id: "nation3",
    symbol: "nation",
    name: "Nation3",
  },
  {
    id: "native-utility-token",
    symbol: "nut",
    name: "Native Utility",
  },
  {
    id: "natural-farm-union-protocol",
    symbol: "nfup",
    name: "Natural Farm Union Protocol",
  },
  {
    id: "nature-based-offset",
    symbol: "nbo",
    name: "Nature Based Offset",
  },
  {
    id: "natus-vincere-fan-token",
    symbol: "navi",
    name: "Natus Vincere Fan Token",
  },
  {
    id: "nav-coin",
    symbol: "nav",
    name: "Navcoin",
  },
  {
    id: "navibration",
    symbol: "navi",
    name: "Navibration",
  },
  {
    id: "naxar",
    symbol: "naxar",
    name: "Naxar",
  },
  {
    id: "nayuta-coin",
    symbol: "nc",
    name: "Nayuta Coin",
  },
  {
    id: "nblh",
    symbol: "nblh",
    name: "NBLH",
  },
  {
    id: "nbox",
    symbol: "nbox",
    name: "NBOX",
  },
  {
    id: "ndau",
    symbol: "ndau",
    name: "Ndau",
  },
  {
    id: "ndb",
    symbol: "ndb",
    name: "NDB",
  },
  {
    id: "ndex",
    symbol: "ndx",
    name: "nDEX",
  },
  {
    id: "near",
    symbol: "near",
    name: "NEAR Protocol",
  },
  {
    id: "nearpad",
    symbol: "pad",
    name: "NearPad",
  },
  {
    id: "neblio",
    symbol: "nebl",
    name: "Neblio",
  },
  {
    id: "nebulas",
    symbol: "nas",
    name: "Nebulas",
  },
  {
    id: "nebulatoken",
    symbol: "nebula",
    name: "NebulaToken",
  },
  {
    id: "neco-fun",
    symbol: "neco",
    name: "Neco Fun",
  },
  {
    id: "neeo",
    symbol: "neeo",
    name: "NEEO",
  },
  {
    id: "nef-rune-rune-game",
    symbol: "nef",
    name: "NEF Rune (Rune.Game)",
  },
  {
    id: "neftipedia",
    symbol: "nft",
    name: "NEFTiPEDiA",
  },
  {
    id: "neighbourhoods",
    symbol: "nht",
    name: "Neighbourhoods",
  },
  {
    id: "nekocoin",
    symbol: "nekos",
    name: "Nekocoin",
  },
  {
    id: "neko-network",
    symbol: "neko",
    name: "Neko Network",
  },
  {
    id: "nelo-metaverse",
    symbol: "nelo",
    name: "NELO Metaverse",
  },
  {
    id: "nelore-coin",
    symbol: "nlc",
    name: "Nelore Coin",
  },
  {
    id: "neloverse",
    symbol: "nve",
    name: "Neloverse",
  },
  {
    id: "nem",
    symbol: "xem",
    name: "NEM",
  },
  {
    id: "nemesis",
    symbol: "nms",
    name: "Nemesis",
  },
  {
    id: "nemesis-dao",
    symbol: "nms",
    name: "Nemesis DAO",
  },
  {
    id: "nemesis-wealth-projects-bsc",
    symbol: "nms",
    name: "Nemesis Wealth Projects BSC",
  },
  {
    id: "nemo",
    symbol: "nemo",
    name: "NEMO",
  },
  {
    id: "neo",
    symbol: "neo",
    name: "NEO",
  },
  {
    id: "neofi",
    symbol: "neofi",
    name: "NeoFi",
  },
  {
    id: "neon",
    symbol: "neon",
    name: "Neon",
  },
  {
    id: "neon-exchange",
    symbol: "nex",
    name: "Nash",
  },
  {
    id: "neonomad-finance",
    symbol: "nni",
    name: "Neonomad Finance",
  },
  {
    id: "neopin",
    symbol: "npt",
    name: "Neopin",
  },
  {
    id: "neorbit",
    symbol: "nrb",
    name: "Neorbit",
  },
  {
    id: "neos-credits",
    symbol: "ncr",
    name: "Neos Credits",
  },
  {
    id: "neoworld-cash",
    symbol: "nash",
    name: "NeoWorld Cash",
  },
  {
    id: "neoxa",
    symbol: "neox",
    name: "Neoxa",
  },
  {
    id: "neptune-mutual",
    symbol: "npm",
    name: "Neptune Mutual",
  },
  {
    id: "nerdy-inu",
    symbol: "nerdy",
    name: "Nerdy Inu",
  },
  {
    id: "nerian-network",
    symbol: "nerian",
    name: "Nerian Network",
  },
  {
    id: "nerva",
    symbol: "xnv",
    name: "Nerva",
  },
  {
    id: "nerve-finance",
    symbol: "nrv",
    name: "Nerve Finance",
  },
  {
    id: "nerveflux",
    symbol: "nerve",
    name: "NerveFlux",
  },
  {
    id: "nervenetwork",
    symbol: "nvt",
    name: "NerveNetwork",
  },
  {
    id: "nervos-network",
    symbol: "ckb",
    name: "Nervos Network",
  },
  {
    id: "nest",
    symbol: "nest",
    name: "Nest Protocol",
  },
  {
    id: "nest-arcade",
    symbol: "nesta",
    name: "Nest Arcade",
  },
  {
    id: "nest-egg",
    symbol: "negg",
    name: "Nest Egg",
  },
  {
    id: "nestegg-coin",
    symbol: "egg",
    name: "NestEgg Coin",
  },
  {
    id: "nesten",
    symbol: "nit",
    name: "Nesten",
  },
  {
    id: "nestree",
    symbol: "egg",
    name: "Nestree",
  },
  {
    id: "neta",
    symbol: "neta",
    name: "NETA",
  },
  {
    id: "netcoin",
    symbol: "net",
    name: "Netcoin",
  },
  {
    id: "netcoincapital",
    symbol: "ncc",
    name: "Netcoincapital",
  },
  {
    id: "netflix-tokenized-stock-defichain",
    symbol: "dnflx",
    name: "Netflix Tokenized Stock Defichain",
  },
  {
    id: "nether",
    symbol: "ntr",
    name: "Nether",
  },
  {
    id: "netkoin",
    symbol: "ntk",
    name: "Netkoin",
  },
  {
    id: "netm",
    symbol: "ntm",
    name: "Netm",
  },
  {
    id: "neton",
    symbol: "nto",
    name: "Neton",
  },
  {
    id: "netswap",
    symbol: "nett",
    name: "Netswap",
  },
  {
    id: "netvrk",
    symbol: "ntvrk",
    name: "Netvrk",
  },
  {
    id: "netzero",
    symbol: "nzero",
    name: "NETZERO",
  },
  {
    id: "neumark",
    symbol: "neu",
    name: "Neumark",
  },
  {
    id: "neural-protocol",
    symbol: "nrp",
    name: "Neural Protocol",
  },
  {
    id: "neurochain",
    symbol: "ncc",
    name: "NeuroChain",
  },
  {
    id: "neuron-chain",
    symbol: "neuron",
    name: "Neuron Chain",
  },
  {
    id: "neurotoken",
    symbol: "ntk",
    name: "Neuro NTK",
  },
  {
    id: "neutrino",
    symbol: "usdn",
    name: "Neutrino USD",
  },
  {
    id: "neutrino-system-base-token",
    symbol: "nsbt",
    name: "Neutrino System Base",
  },
  {
    id: "neutron",
    symbol: "ntrn",
    name: "Neutron",
  },
  {
    id: "neutron-1",
    symbol: "ntrn",
    name: "Neutron Coin",
  },
  {
    id: "neuy",
    symbol: "neuy",
    name: "NEUY",
  },
  {
    id: "nevacoin",
    symbol: "neva",
    name: "NevaCoin",
  },
  {
    id: "newb-farm",
    symbol: "newb",
    name: "NewB.Farm",
  },
  {
    id: "new-bitshares",
    symbol: "nbs",
    name: "New BitShares",
  },
  {
    id: "newdex-token",
    symbol: "dex",
    name: "Newdex",
  },
  {
    id: "new-earth-order-money",
    symbol: "neom",
    name: "New Earth Order Money",
  },
  {
    id: "new-frontier-presents",
    symbol: "nfp",
    name: "New Frontier Presents",
  },
  {
    id: "newinu",
    symbol: "newinu",
    name: "Newinu",
  },
  {
    id: "new-landbox",
    symbol: "land",
    name: "LandBox",
  },
  {
    id: "newo-coin",
    symbol: "newo",
    name: "NEWO Coin",
  },
  {
    id: "new-order",
    symbol: "newo",
    name: "New Order",
  },
  {
    id: "new-paradigm-assets-solution",
    symbol: "npas",
    name: "New Paradigm Assets Solution",
  },
  {
    id: "new-power-coin",
    symbol: "npw",
    name: "New Power Coin",
  },
  {
    id: "newscrypto-coin",
    symbol: "nwc",
    name: "Newscrypto Coin",
  },
  {
    id: "newsolution-2-0",
    symbol: "nste",
    name: "NewSolution 2.0",
  },
  {
    id: "newton-project",
    symbol: "new",
    name: "Newton Project",
  },
  {
    id: "newtowngaming",
    symbol: "ntg",
    name: "NEWTOWNGAMING",
  },
  {
    id: "new-world-order",
    symbol: "state",
    name: "New World Order",
  },
  {
    id: "new-year-resolution",
    symbol: "nyr",
    name: "New Year Resolution",
  },
  {
    id: "new-year-token",
    symbol: "nyt",
    name: "New Year",
  },
  {
    id: "newyorkcoin",
    symbol: "nyc",
    name: "NewYorkCoin",
  },
  {
    id: "newyork-exchange",
    symbol: "nye",
    name: "NewYork Exchange",
  },
  {
    id: "nexalt",
    symbol: "xlt",
    name: "Nexalt",
  },
  {
    id: "nexdax",
    symbol: "nt",
    name: "NexDAX",
  },
  {
    id: "nexo",
    symbol: "nexo",
    name: "NEXO",
  },
  {
    id: "nextdao",
    symbol: "nax",
    name: "NextDAO",
  },
  {
    id: "next-defi-protocol",
    symbol: "nxdf",
    name: "NeXt-DeFi Protocol",
  },
  {
    id: "next-earth",
    symbol: "nxtt",
    name: "Next Earth",
  },
  {
    id: "nextech-network",
    symbol: "nx",
    name: "Nxtech Network",
  },
  {
    id: "nextexchange",
    symbol: "next",
    name: "NEXT",
  },
  {
    id: "next-level",
    symbol: "nxl",
    name: "Next Level",
  },
  {
    id: "next-token",
    symbol: "nxt",
    name: "Next NXT",
  },
  {
    id: "nextype-finance",
    symbol: "nt",
    name: "NEXTYPE Finance",
  },
  {
    id: "nexum",
    symbol: "nexm",
    name: "Nexum",
  },
  {
    id: "nexus",
    symbol: "nxs",
    name: "Nexus",
  },
  {
    id: "nexus-asa",
    symbol: "gp",
    name: "Nexus ASA",
  },
  {
    id: "nexus-beth-token-share-representation",
    symbol: "neth",
    name: "Nexus bETH token share representation",
  },
  {
    id: "nexus-bluna-token-share-representation",
    symbol: "nluna",
    name: "Nexus bLuna token share representation",
  },
  {
    id: "nexus-dubai",
    symbol: "nxd",
    name: "Nexus Dubai",
  },
  {
    id: "nexus-governance-token",
    symbol: "psi",
    name: "Nexus Protocol",
  },
  {
    id: "nexuspad",
    symbol: "nexus",
    name: "Nexuspad",
  },
  {
    id: "nexus-token",
    symbol: "nexus",
    name: "Nexus Crypto Services",
  },
  {
    id: "nezuko-inu",
    symbol: "nezuko",
    name: "Nezuko Inu",
  },
  {
    id: "nfans",
    symbol: "nfs",
    name: "Nfans",
  },
  {
    id: "nfcore",
    symbol: "nfcr",
    name: "NFCore",
  },
  {
    id: "nfraction",
    symbol: "nfta",
    name: "NFracTion",
  },
  {
    id: "nft11",
    symbol: "nft11",
    name: "NFT11",
  },
  {
    id: "nft2stake",
    symbol: "nft2$",
    name: "NFT2STAKE",
  },
  {
    id: "nft-alley",
    symbol: "alley",
    name: "NFT Alley",
  },
  {
    id: "nft-art-finance",
    symbol: "nftart",
    name: "NFT Art Finance",
  },
  {
    id: "nftascii",
    symbol: "nftascii",
    name: "NFTASCII",
  },
  {
    id: "nftb",
    symbol: "nftb",
    name: "NFTb",
  },
  {
    id: "nftblackmarket",
    symbol: "nbm",
    name: "NFTBlackmarket",
  },
  {
    id: "nftbomb",
    symbol: "nbp",
    name: "NFTBomb",
  },
  {
    id: "nftbooks",
    symbol: "nftbs",
    name: "NFTBooks",
  },
  {
    id: "nft-champions",
    symbol: "champ",
    name: "NFT Champions",
  },
  {
    id: "nftcircle",
    symbol: "nftc",
    name: "NFTCircle",
  },
  {
    id: "nft-crosschain",
    symbol: "crc",
    name: "NFT Crosschain",
  },
  {
    id: "nftdao",
    symbol: "nao",
    name: "NFTDAO",
  },
  {
    id: "nfteyez",
    symbol: "eye",
    name: "NftEyez",
  },
  {
    id: "nftfundart",
    symbol: "nfa",
    name: "NFTFundArt",
  },
  {
    id: "nftfy",
    symbol: "nftfy",
    name: "Nftfy",
  },
  {
    id: "nftgamingstars",
    symbol: "gs1",
    name: "NFTGamingStars",
  },
  {
    id: "nft-global-platform",
    symbol: "nftg",
    name: "NFT Global Platform",
  },
  {
    id: "nftify",
    symbol: "n1",
    name: "NFTify",
  },
  {
    id: "nftime",
    symbol: "nftm",
    name: "Nftime",
  },
  {
    id: "nft-index",
    symbol: "nfti",
    name: "NFT Index",
  },
  {
    id: "nftlaunch",
    symbol: "nftl",
    name: "NFTLaunch",
  },
  {
    id: "nftlootbox",
    symbol: "loot",
    name: "LootBox.io",
  },
  {
    id: "nftmake",
    symbol: "make",
    name: "NFTMAKE",
  },
  {
    id: "nft-maker",
    symbol: "$nmkr",
    name: "NMKR",
  },
  {
    id: "nftmall",
    symbol: "gem",
    name: "NFTmall",
  },
  {
    id: "nftmart-token",
    symbol: "nmt",
    name: "NFTMart",
  },
  {
    id: "nft-maze",
    symbol: "maze",
    name: "NFT MAZE",
  },
  {
    id: "nftmusic",
    symbol: "music",
    name: "NFTMusic.ai",
  },
  {
    id: "nftnetwork",
    symbol: "nftn",
    name: "NFTNetwork",
  },
  {
    id: "nftpad",
    symbol: "nftpad",
    name: "NFTPad",
  },
  {
    id: "nft-platform-index",
    symbol: "nftp",
    name: "NFT Platform Index",
  },
  {
    id: "nft-protocol",
    symbol: "nft",
    name: "NFT Protocol",
  },
  {
    id: "nftpunk-finance",
    symbol: "nftpunk",
    name: "NFTPunk.Finance",
  },
  {
    id: "nftrade",
    symbol: "nftd",
    name: "NFTrade",
  },
  {
    id: "nft-royal-token",
    symbol: "nrt",
    name: "NFT Royal",
  },
  {
    id: "nft-soccer-games",
    symbol: "nfsg",
    name: "NFT Soccer Games",
  },
  {
    id: "nft-stars",
    symbol: "nfts",
    name: "NFT Stars",
  },
  {
    id: "nft-starter",
    symbol: "nst",
    name: "NFT Starter",
  },
  {
    id: "nftstyle",
    symbol: "nftstyle",
    name: "NFTStyle",
  },
  {
    id: "nft-tech",
    symbol: "nftt",
    name: "NFT Tech",
  },
  {
    id: "nft-tone",
    symbol: "tone",
    name: "NFT Tone",
  },
  {
    id: "nft-track-protocol",
    symbol: "ntp",
    name: "NFT Track Protocol",
  },
  {
    id: "nftwiki",
    symbol: "nftk",
    name: "NFTWiki",
  },
  {
    id: "nft-worlds",
    symbol: "wrld",
    name: "NFT Worlds",
  },
  {
    id: "nftx",
    symbol: "nftx",
    name: "NFTX",
  },
  {
    id: "nfty-token",
    symbol: "nfty",
    name: "NFTY",
  },
  {
    id: "nfx-coin",
    symbol: "nfxc",
    name: "NFX Coin",
  },
  {
    id: "nicheman",
    symbol: "nicheman",
    name: "Nicheman",
  },
  {
    id: "niftify",
    symbol: "nift",
    name: "Niftify",
  },
  {
    id: "niftsy",
    symbol: "niftsy",
    name: "Envelop (Niftsy)",
  },
  {
    id: "nifty-league",
    symbol: "nftl",
    name: "Nifty League",
  },
  {
    id: "niftypays",
    symbol: "nifty",
    name: "NiftyPays",
  },
  {
    id: "nifty-token",
    symbol: "nfty",
    name: "NFTY DeFi Protocol",
  },
  {
    id: "night-life-crypto",
    symbol: "nlife",
    name: "Night Life Crypto",
  },
  {
    id: "niifi",
    symbol: "niifi",
    name: "NiiFi",
  },
  {
    id: "nil-coin",
    symbol: "nil",
    name: "NIL",
  },
  {
    id: "nil-dao",
    symbol: "nil",
    name: "Nil DAO",
  },
  {
    id: "nimbus",
    symbol: "nbu",
    name: "Nimbus",
  },
  {
    id: "nimbus-governance-token",
    symbol: "gnbu",
    name: "Nimbus Governance",
  },
  {
    id: "nimbus-utility",
    symbol: "nimb",
    name: "Nimbus Utility",
  },
  {
    id: "nimiq-2",
    symbol: "nim",
    name: "Nimiq",
  },
  {
    id: "ninenoble",
    symbol: "nnn",
    name: "Ninenoble",
  },
  {
    id: "ninja-fantasy-token",
    symbol: "nfs",
    name: "Ninja Fantasy",
  },
  {
    id: "ninja-panda-inu",
    symbol: "npi",
    name: "Ninja Panda Inu",
  },
  {
    id: "ninja-protocol",
    symbol: "ninja",
    name: "Ninja Protocol",
  },
  {
    id: "ninja-squad",
    symbol: "nst",
    name: "Ninja Squad",
  },
  {
    id: "ninky",
    symbol: "ninky",
    name: "Idle Ninja Online",
  },
  {
    id: "ninneko",
    symbol: "nino",
    name: "Ninneko",
  },
  {
    id: "nintia-estate",
    symbol: "ninti",
    name: "Nintia Estate",
  },
  {
    id: "niob",
    symbol: "niob",
    name: "NIOB",
  },
  {
    id: "niobio-cash",
    symbol: "nbr",
    name: "Niobio",
  },
  {
    id: "niobium-coin",
    symbol: "nbc",
    name: "Niobium Coin",
  },
  {
    id: "nippon-lagoon",
    symbol: "nlc",
    name: "Nippon Lagoon",
  },
  {
    id: "niros",
    symbol: "niros",
    name: "Niros",
  },
  {
    id: "nirvana-ana",
    symbol: "ana",
    name: "Nirvana ANA",
  },
  {
    id: "nirvana-chain",
    symbol: "nac",
    name: "Nirvana Chain",
  },
  {
    id: "nirvana-nirv",
    symbol: "nirv",
    name: "Nirvana NIRV",
  },
  {
    id: "nirvana-prana",
    symbol: "prana",
    name: "Nirvana prANA",
  },
  {
    id: "nitro",
    symbol: "nitro",
    name: "Nitro",
  },
  {
    id: "nitrodoge",
    symbol: "nitrodoge",
    name: "nitroDOGE",
  },
  {
    id: "nitroex",
    symbol: "ntx",
    name: "NitroEX",
  },
  {
    id: "nitrofloki",
    symbol: "nifloki",
    name: "NitroFloki",
  },
  {
    id: "nitro-league",
    symbol: "nitro",
    name: "Nitro League",
  },
  {
    id: "nitro-network",
    symbol: "ncash",
    name: "Nitro Network",
  },
  {
    id: "nitroshiba",
    symbol: "nishib",
    name: "NitroShiba",
  },
  {
    id: "nix-bridge-token",
    symbol: "voice",
    name: "Voice",
  },
  {
    id: "nkcl-classic",
    symbol: "nkclc",
    name: "NKCL Classic",
  },
  {
    id: "nkn",
    symbol: "nkn",
    name: "NKN",
  },
  {
    id: "nnsdao-protocol",
    symbol: "ndp",
    name: "NnsDAO Protocol",
  },
  {
    id: "noah",
    symbol: "noah",
    name: "Noah",
  },
  {
    id: "noah-coin",
    symbol: "noahp",
    name: "Noah Decentralized State Coin",
  },
  {
    id: "noah-s-ark-coin",
    symbol: "nac",
    name: "Noah's Ark Coin",
  },
  {
    id: "noa-play",
    symbol: "noa",
    name: "NOA PLAY",
  },
  {
    id: "nobility",
    symbol: "nbl",
    name: "Nobility",
  },
  {
    id: "noblecoin",
    symbol: "nobl",
    name: "NobleCoin",
  },
  {
    id: "noblesscoin",
    symbol: "nbls",
    name: "Noblesscoin",
  },
  {
    id: "nobo-finance",
    symbol: "nobf",
    name: "Nobo Finance",
  },
  {
    id: "nobunaga",
    symbol: "nbng",
    name: "Nobunaga",
  },
  {
    id: "nocapcoin",
    symbol: "ncc",
    name: "NoCapCoin",
  },
  {
    id: "nodebunch",
    symbol: "noch",
    name: "NodeBunch",
  },
  {
    id: "nodeify",
    symbol: "ndfi",
    name: "Nodeify",
  },
  {
    id: "noderunners",
    symbol: "ndr",
    name: "Node Runners",
  },
  {
    id: "nodeseeds",
    symbol: "nds",
    name: "Nodeseeds",
  },
  {
    id: "nodestats",
    symbol: "ns",
    name: "Nodestats",
  },
  {
    id: "nodetrade",
    symbol: "mnx",
    name: "Nodetrade",
  },
  {
    id: "nodle-network",
    symbol: "nodl",
    name: "Nodle Network",
  },
  {
    id: "nody",
    symbol: "nody",
    name: "Nody",
  },
  {
    id: "noe-crypto-bank",
    symbol: "noe",
    name: "NOE GLOBAL",
  },
  {
    id: "nogoaltoken",
    symbol: "ino",
    name: "NoGoal",
  },
  {
    id: "noia-network",
    symbol: "noia",
    name: "Syntropy",
  },
  {
    id: "noir-phygital",
    symbol: "noir",
    name: "Noir Phygital",
  },
  {
    id: "noku",
    symbol: "noku",
    name: "Noku",
  },
  {
    id: "nole-npc",
    symbol: "npc",
    name: "NPC DAO",
  },
  {
    id: "no-limit-ape",
    symbol: "nla",
    name: "No Limit Ape",
  },
  {
    id: "nolimitcoin",
    symbol: "nlc",
    name: "NoLimitCoin",
  },
  {
    id: "nomad-exiles",
    symbol: "pride",
    name: "Nomad Exiles",
  },
  {
    id: "nominex",
    symbol: "nmx",
    name: "Nominex",
  },
  {
    id: "non-fungible-history",
    symbol: "nfh2",
    name: "Non-Fungible History",
  },
  {
    id: "non-fungible-media-token",
    symbol: "nfmt",
    name: "Non Fungible Media Token",
  },
  {
    id: "non-fungible-toke",
    symbol: "toke",
    name: "Non-Fungible TOKE",
  },
  {
    id: "non-fungible-yearn",
    symbol: "nfy",
    name: "Non-Fungible Yearn",
  },
  {
    id: "no-one",
    symbol: "noone",
    name: "No One",
  },
  {
    id: "nora-token",
    symbol: "nra",
    name: "Nora",
  },
  {
    id: "nord-finance",
    symbol: "nord",
    name: "Nord Finance",
  },
  {
    id: "nosana",
    symbol: "nos",
    name: "Nosana",
  },
  {
    id: "noshit",
    symbol: "nsh",
    name: "NoShit",
  },
  {
    id: "nosnitches",
    symbol: "nosnitch",
    name: "Nosnitches",
  },
  {
    id: "nostra",
    symbol: "nos",
    name: "Nostra",
  },
  {
    id: "nostra-uno",
    symbol: "uno",
    name: "UNO",
  },
  {
    id: "nosturis",
    symbol: "ntrs",
    name: "Nosturis",
  },
  {
    id: "nota",
    symbol: "usnota",
    name: "NOTA",
  },
  {
    id: "notable",
    symbol: "nbl",
    name: "Notable",
  },
  {
    id: "not-another-shit-altcoin",
    symbol: "nasa",
    name: "Not Another Shit Altcoin",
  },
  {
    id: "note",
    symbol: "note",
    name: "Note",
  },
  {
    id: "nothing",
    symbol: "nada",
    name: "Nothing",
  },
  {
    id: "notional-finance",
    symbol: "note",
    name: "Notional Finance",
  },
  {
    id: "nova",
    symbol: "nova",
    name: "NOVA",
  },
  {
    id: "novacoin",
    symbol: "nvc",
    name: "Novacoin",
  },
  {
    id: "nova-finance",
    symbol: "nova",
    name: "Nova Finance",
  },
  {
    id: "novara-calcio-fan-token",
    symbol: "nov",
    name: "Novara Calcio Fan Token",
  },
  {
    id: "novem-gold",
    symbol: "nnn",
    name: "Novem Gold",
  },
  {
    id: "novem-pro",
    symbol: "nvm",
    name: "Novem Pro",
  },
  {
    id: "nowar",
    symbol: "nowar",
    name: "Nowar",
  },
  {
    id: "nowarshiba",
    symbol: "nshiba",
    name: "Nowarshiba",
  },
  {
    id: "nowlage-coin",
    symbol: "nac",
    name: "Nowlage Coin",
  },
  {
    id: "npccoin",
    symbol: "npc",
    name: "NPCcoin",
  },
  {
    id: "npc-coin",
    symbol: "npc",
    name: "NPC Coin",
  },
  {
    id: "npick-block",
    symbol: "npick",
    name: "NPick Block",
  },
  {
    id: "n-protocol",
    symbol: "n",
    name: "N Protocol",
  },
  {
    id: "nrgy-defi",
    symbol: "nrgy",
    name: "NRGY Defi",
  },
  {
    id: "nshare",
    symbol: "nshare",
    name: "NSHARE",
  },
  {
    id: "nsights",
    symbol: "nsi",
    name: "nSights",
  },
  {
    id: "nss-coin",
    symbol: "nss",
    name: "NSS Coin",
  },
  {
    id: "nsur-coin",
    symbol: "nsur",
    name: "NSUR Coin",
  },
  {
    id: "nsure-network",
    symbol: "nsure",
    name: "Nsure Network",
  },
  {
    id: "nthchain",
    symbol: "nth",
    name: "NTHCHAIN",
  },
  {
    id: "nucleus-vision",
    symbol: "ncash",
    name: "Nucleus Vision",
  },
  {
    id: "nuco-cloud",
    symbol: "ncdt",
    name: "Nuco.Cloud",
  },
  {
    id: "nucoin",
    symbol: "nuc",
    name: "NuCoin",
  },
  {
    id: "nucypher",
    symbol: "nu",
    name: "NuCypher",
  },
  {
    id: "nudes",
    symbol: "nudes",
    name: "NUDES",
  },
  {
    id: "nugencoin",
    symbol: "nugen",
    name: "Nugencoin",
  },
  {
    id: "nukplan",
    symbol: "nkpl",
    name: "Nukplan",
  },
  {
    id: "nuls",
    symbol: "nuls",
    name: "Nuls",
  },
  {
    id: "num-ars",
    symbol: "nuars",
    name: "Num ARS",
  },
  {
    id: "number-1-token",
    symbol: "nr1",
    name: "Number 1",
  },
  {
    id: "numbers-protocol",
    symbol: "num",
    name: "NUM Token",
  },
  {
    id: "numeraire",
    symbol: "nmr",
    name: "Numeraire",
  },
  {
    id: "numisme",
    symbol: "nume",
    name: "NumisMe",
  },
  {
    id: "numitor",
    symbol: "numi",
    name: "Numitor",
  },
  {
    id: "nuna",
    symbol: "nuna",
    name: "Nuna",
  },
  {
    id: "nunet",
    symbol: "ntx",
    name: "NuNet",
  },
  {
    id: "nunu-spirits",
    symbol: "nnt",
    name: "Nunu Spirits",
  },
  {
    id: "nurifootball",
    symbol: "nrfb",
    name: "NuriFootBall",
  },
  {
    id: "nusa-finance",
    symbol: "nusa",
    name: "NUSA",
  },
  {
    id: "nusd",
    symbol: "susd",
    name: "sUSD",
  },
  {
    id: "nusd-hotbit",
    symbol: "nusd",
    name: "nUSD (HotBit)",
  },
  {
    id: "nutgain",
    symbol: "nutgv2",
    name: "NUTGAIN",
  },
  {
    id: "nutsdao",
    symbol: "nuts",
    name: "NutsDAO",
  },
  {
    id: "nuvo-cash",
    symbol: "nuvo",
    name: "Nuvo Cash",
  },
  {
    id: "nvidia-tokenized-stock-defichain",
    symbol: "dnvda",
    name: "Nvidia Tokenized Stock Defichain",
  },
  {
    id: "nvirworld",
    symbol: "nvir",
    name: "NvirWorld",
  },
  {
    id: "nvl-project",
    symbol: "nvl",
    name: "NVL Project",
  },
  {
    id: "nxd-next",
    symbol: "nxdt",
    name: "NXD Next",
  },
  {
    id: "nxm",
    symbol: "nxm",
    name: "Nexus Mutual",
  },
  {
    id: "nxt",
    symbol: "nxt",
    name: "NXT",
  },
  {
    id: "nxusd",
    symbol: "nxusd",
    name: "NXUSD",
  },
  {
    id: "nyan-cat",
    symbol: "ncat",
    name: "NCAT",
  },
  {
    id: "nyancoin",
    symbol: "nyan",
    name: "Nyancoin",
  },
  {
    id: "nyan-v2",
    symbol: "nyan-2",
    name: "Nyan V2",
  },
  {
    id: "nycccoin",
    symbol: "nyc",
    name: "NewYorkCityCoin",
  },
  {
    id: "nym",
    symbol: "nym",
    name: "Nym",
  },
  {
    id: "nyx-token",
    symbol: "nyxt",
    name: "Nyx",
  },
  {
    id: "nyzo",
    symbol: "nyzo",
    name: "Nyzo",
  },
  {
    id: "nzd-stablecoin",
    symbol: "nzds",
    name: "NZD Stablecoin",
  },
  {
    id: "o3-swap",
    symbol: "o3",
    name: "O3 Swap",
  },
  {
    id: "o5o",
    symbol: "o5o",
    name: "O5O",
  },
  {
    id: "oasis-2",
    symbol: "xos",
    name: "OASIS",
  },
  {
    id: "oasis-city",
    symbol: "osc",
    name: "Oasis City",
  },
  {
    id: "oasis-network",
    symbol: "rose",
    name: "Oasis Network",
  },
  {
    id: "oasys",
    symbol: "oas",
    name: "Oasys",
  },
  {
    id: "oath",
    symbol: "oath",
    name: "Oath",
  },
  {
    id: "obol",
    symbol: "obol",
    name: "Obol",
  },
  {
    id: "obortech",
    symbol: "obot",
    name: "Obortech",
  },
  {
    id: "obrok",
    symbol: "obrok",
    name: "OBRok",
  },
  {
    id: "observer-coin",
    symbol: "obsr",
    name: "Observer",
  },
  {
    id: "obsidium",
    symbol: "obs",
    name: "Obsidium",
  },
  {
    id: "obtoken",
    symbol: "obt",
    name: "OB",
  },
  {
    id: "ocavu-network",
    symbol: "ocavu",
    name: "Ocavu Network",
  },
  {
    id: "occamfi",
    symbol: "occ",
    name: "OccamFi",
  },
  {
    id: "occamx",
    symbol: "ocx",
    name: "OccamX",
  },
  {
    id: "oceanex",
    symbol: "oce",
    name: "OceanEX",
  },
  {
    id: "oceanland",
    symbol: "oland",
    name: "OceanLand",
  },
  {
    id: "ocean-protocol",
    symbol: "ocean",
    name: "Ocean Protocol",
  },
  {
    id: "oceans-finance-v2",
    symbol: "oceansv2",
    name: "Oceans Finance",
  },
  {
    id: "oceans-swap",
    symbol: "odex",
    name: "Oceans Swap",
  },
  {
    id: "oceidon-blox",
    symbol: "oblox",
    name: "Oceidon Blox",
  },
  {
    id: "ociswap",
    symbol: "oci",
    name: "Ociswap",
  },
  {
    id: "oc-protocol",
    symbol: "ocp",
    name: "OC Protocol",
  },
  {
    id: "octafarm",
    symbol: "octf",
    name: "Octafarm",
  },
  {
    id: "octane-protocol-token",
    symbol: "octane",
    name: "Octane Protocol",
  },
  {
    id: "octaplex-network",
    symbol: "plx",
    name: "Octaplex Network",
  },
  {
    id: "oction",
    symbol: "octi",
    name: "Oction",
  },
  {
    id: "octocoin",
    symbol: "888",
    name: "Octocoin",
  },
  {
    id: "octofi",
    symbol: "octo",
    name: "OctoFi",
  },
  {
    id: "octogamex",
    symbol: "ogt",
    name: "OctoGamex",
  },
  {
    id: "octopus-network",
    symbol: "oct",
    name: "Octopus Network",
  },
  {
    id: "octopus-protocol",
    symbol: "ops",
    name: "Octopus Protocol",
  },
  {
    id: "octorand",
    symbol: "octo",
    name: "Octorand",
  },
  {
    id: "octus-bridge",
    symbol: "bridge",
    name: "Octus Bridge",
  },
  {
    id: "octus-social-media-market",
    symbol: "octsmm",
    name: "Octus Social Media Market",
  },
  {
    id: "oculus-vision",
    symbol: "ocv",
    name: "Oculus Vision",
  },
  {
    id: "oddz",
    symbol: "oddz",
    name: "Oddz",
  },
  {
    id: "odem",
    symbol: "ode",
    name: "ODEM",
  },
  {
    id: "odin-protocol",
    symbol: "odin",
    name: "Odin Protocol",
  },
  {
    id: "odop",
    symbol: "odop",
    name: "oDOP",
  },
  {
    id: "oduwa-coin",
    symbol: "owc",
    name: "Oduwa Coin",
  },
  {
    id: "odyssey",
    symbol: "ocn",
    name: "Odyssey",
  },
  {
    id: "oec-bch",
    symbol: "bchk",
    name: "OEC BCH",
  },
  {
    id: "oec-binance-coin",
    symbol: "bnb",
    name: "OEC Binance Coin",
  },
  {
    id: "oec-btc",
    symbol: "btck",
    name: "OEC BTC",
  },
  {
    id: "oec-chainlink",
    symbol: "linkk",
    name: "OEC Chainlink",
  },
  {
    id: "oec-dai",
    symbol: "daik",
    name: "OEC DAI",
  },
  {
    id: "oec-dot",
    symbol: "dotk",
    name: "OEC DOT",
  },
  {
    id: "oec-etc",
    symbol: "etck",
    name: "OEC ETC",
  },
  {
    id: "oec-eth",
    symbol: "ethk",
    name: "OEC ETH",
  },
  {
    id: "oec-fil",
    symbol: "filk",
    name: "OEC FIL",
  },
  {
    id: "oec-ltc",
    symbol: "ltck",
    name: "OEC LTC",
  },
  {
    id: "oec-shib",
    symbol: "shibk",
    name: "OEC SHIB",
  },
  {
    id: "oec-token",
    symbol: "okt",
    name: "OKC",
  },
  {
    id: "oec-tron",
    symbol: "trxk",
    name: "OEC Tron",
  },
  {
    id: "oec-uni",
    symbol: "unik",
    name: "OEC UNI",
  },
  {
    id: "official-crypto-cowboy-token",
    symbol: "occt",
    name: "Official Crypto Cowboy",
  },
  {
    id: "offline",
    symbol: "off",
    name: "Offline",
  },
  {
    id: "offshift",
    symbol: "xft",
    name: "Offshift",
  },
  {
    id: "ofi-cash",
    symbol: "ofi",
    name: "OFI.cash",
  },
  {
    id: "og-fan-token",
    symbol: "og",
    name: "OG Fan Token",
  },
  {
    id: "oh-finance",
    symbol: "oh",
    name: "Oh! Finance",
  },
  {
    id: "ohm-coin",
    symbol: "ohmc",
    name: "Ohmcoin",
  },
  {
    id: "ohmd",
    symbol: "$wsohmd",
    name: "OHMD",
  },
  {
    id: "oho-blockchain",
    symbol: "oho",
    name: "OHO Blockchain",
  },
  {
    id: "oikos",
    symbol: "oks",
    name: "Oikos",
  },
  {
    id: "oilage",
    symbol: "oil",
    name: "OILage",
  },
  {
    id: "oiler",
    symbol: "oil",
    name: "Oiler",
  },
  {
    id: "oin-finance",
    symbol: "oin",
    name: "OIN Finance",
  },
  {
    id: "oiocoin",
    symbol: "oioc",
    name: "OIOCoin",
  },
  {
    id: "ojamu",
    symbol: "oja",
    name: "Ojamu",
  },
  {
    id: "oje-token",
    symbol: "oje",
    name: "Oje",
  },
  {
    id: "okaleido",
    symbol: "oka",
    name: "Okaleido",
  },
  {
    id: "okay-bears-floor-index",
    symbol: "okayb",
    name: "Okay Bears Floor Index",
  },
  {
    id: "okb",
    symbol: "okb",
    name: "OKB",
  },
  {
    id: "okcash",
    symbol: "ok",
    name: "Okcash",
  },
  {
    id: "okdex",
    symbol: "okdex",
    name: "okdex",
  },
  {
    id: "okex-fly",
    symbol: "okfly",
    name: "Okex Fly",
  },
  {
    id: "okeycoin",
    symbol: "okey",
    name: "OKEYCOIN",
  },
  {
    id: "okidoki-social",
    symbol: "doki",
    name: "Okidoki Social",
  },
  {
    id: "ok-lets-go",
    symbol: "oklg",
    name: "ok.lets.go.",
  },
  {
    id: "okletsplay",
    symbol: "oklp",
    name: "OkLetsPlay",
  },
  {
    id: "okratech-token",
    symbol: "ort",
    name: "Okratech",
  },
  {
    id: "okse",
    symbol: "okse",
    name: "Okse",
  },
  {
    id: "okuru",
    symbol: "xot",
    name: "Okuru",
  },
  {
    id: "okx-staked-dot1",
    symbol: "okdot1",
    name: "OKX Staked DOT1",
  },
  {
    id: "okx-staked-dot2",
    symbol: "okdot2",
    name: "OKX Staked DOT2",
  },
  {
    id: "ola-city",
    symbol: "ola",
    name: "Ola City",
  },
  {
    id: "olecoin",
    symbol: "ole",
    name: "OleCoin",
  },
  {
    id: "olive",
    symbol: "olv",
    name: "OLIVE",
  },
  {
    id: "olivecash",
    symbol: "olive",
    name: "Olive Cash",
  },
  {
    id: "oloid",
    symbol: "oloid",
    name: "OLOID",
  },
  {
    id: "olympic-doge",
    symbol: "olympic doge",
    name: "Olympic Doge",
  },
  {
    id: "olympus",
    symbol: "ohm",
    name: "Olympus",
  },
  {
    id: "olympus-v1",
    symbol: "ohm",
    name: "Olympus v1",
  },
  {
    id: "oly-sport",
    symbol: "oly",
    name: "Oly Sport",
  },
  {
    id: "olyverse",
    symbol: "oly",
    name: "Olyverse",
  },
  {
    id: "omax-token",
    symbol: "omax",
    name: "Omax",
  },
  {
    id: "ombre",
    symbol: "omb",
    name: "Ombre",
  },
  {
    id: "omchain",
    symbol: "omc",
    name: "Omchain",
  },
  {
    id: "omega",
    symbol: "omega",
    name: "OMEGA",
  },
  {
    id: "omega-finance",
    symbol: "omg",
    name: "Omega Finance",
  },
  {
    id: "omega-particle",
    symbol: "omp",
    name: "Omega Particle",
  },
  {
    id: "omega-protocol-money",
    symbol: "opm",
    name: "Omega Protocol Money",
  },
  {
    id: "omicron",
    symbol: "omic",
    name: "Omicron",
  },
  {
    id: "omisego",
    symbol: "omg",
    name: "OMG Network",
  },
  {
    id: "omm-tokens",
    symbol: "omm",
    name: "Omm",
  },
  {
    id: "omni",
    symbol: "omni",
    name: "Omni",
  },
  {
    id: "omniaverse",
    symbol: "omnia",
    name: "OmniaVerse",
  },
  {
    id: "omni-cash",
    symbol: "oca$h",
    name: "Omni Cash",
  },
  {
    id: "omni-consumer-protocol",
    symbol: "ocp",
    name: "Omni Consumer Protocol",
  },
  {
    id: "omnidex",
    symbol: "charm",
    name: "OmniDex",
  },
  {
    id: "omni-real-estate-token",
    symbol: "ort",
    name: "Omni Real Estate",
  },
  {
    id: "omnis",
    symbol: "omnis",
    name: "OMNIS",
  },
  {
    id: "omnisea",
    symbol: "osea",
    name: "Omnisea",
  },
  {
    id: "omniwhirl",
    symbol: "whirl",
    name: "OmniWhirl",
  },
  {
    id: "omotenashicoin",
    symbol: "mtns",
    name: "OmotenashiCoin",
  },
  {
    id: "onbuff",
    symbol: "onit",
    name: "ONBUFF",
  },
  {
    id: "ondo-finance",
    symbol: "ondo",
    name: "Ondo Finance",
  },
  {
    id: "one",
    symbol: "one",
    name: "One",
  },
  {
    id: "one-basis-cash",
    symbol: "obs",
    name: "One Basis Cash",
  },
  {
    id: "onebit",
    symbol: "1bit",
    name: "OneBit",
  },
  {
    id: "onebtc",
    symbol: "onebtc",
    name: "Legacy oneBTC",
  },
  {
    id: "one-cash",
    symbol: "onc",
    name: "One Cash",
  },
  {
    id: "one-dex",
    symbol: "odex",
    name: "One DEX",
  },
  {
    id: "onegetcoin",
    symbol: "ogc",
    name: "Onegetcoin",
  },
  {
    id: "oneichi",
    symbol: "oneichi",
    name: "oneICHI",
  },
  {
    id: "one-ledger",
    symbol: "olt",
    name: "OneLedger",
  },
  {
    id: "onemoon",
    symbol: "onemoon",
    name: "OneMoon",
  },
  {
    id: "one-piece",
    symbol: "onepiece",
    name: "ONE PIECE",
  },
  {
    id: "onerare",
    symbol: "orare",
    name: "OneRare",
  },
  {
    id: "onering",
    symbol: "ring",
    name: "OneRing",
  },
  {
    id: "oneroot-network",
    symbol: "rnt",
    name: "OneRoot Network",
  },
  {
    id: "one-share",
    symbol: "ons",
    name: "One Share",
  },
  {
    id: "onespace",
    symbol: "1sp",
    name: "Onespace",
  },
  {
    id: "oneswap-dao-token",
    symbol: "ones",
    name: "OneSwap DAO",
  },
  {
    id: "one-world-coin",
    symbol: "owo",
    name: "One World Coin",
  },
  {
    id: "ong",
    symbol: "ong",
    name: "Ontology Gas",
  },
  {
    id: "onigiri",
    symbol: "onigiri",
    name: "Onigiri",
  },
  {
    id: "oni-token",
    symbol: "oni",
    name: "ONINO",
  },
  {
    id: "online-cold-wallet",
    symbol: "ocw",
    name: "Online Cold Wallet",
  },
  {
    id: "online-expo",
    symbol: "expo",
    name: "Expo",
  },
  {
    id: "only1",
    symbol: "like",
    name: "Only1",
  },
  {
    id: "onooks",
    symbol: "ooks",
    name: "Onooks",
  },
  {
    id: "onston",
    symbol: "onston",
    name: "Onston",
  },
  {
    id: "ontology",
    symbol: "ont",
    name: "Ontology",
  },
  {
    id: "ontpay",
    symbol: "ontp",
    name: "ONTPAY",
  },
  {
    id: "onus",
    symbol: "onus",
    name: "ONUS",
  },
  {
    id: "onx-finance",
    symbol: "onx",
    name: "OnX Finance",
  },
  {
    id: "onyx",
    symbol: "onyx",
    name: "Onyx",
  },
  {
    id: "oobit",
    symbol: "obt",
    name: "Oobit",
  },
  {
    id: "oogear",
    symbol: "og",
    name: "Oogear",
  },
  {
    id: "oogi",
    symbol: "oogi",
    name: "OOGI",
  },
  {
    id: "ookeenga",
    symbol: "okg",
    name: "Ookeenga",
  },
  {
    id: "ooki",
    symbol: "ooki",
    name: "Ooki",
  },
  {
    id: "oolongswap",
    symbol: "olo",
    name: "OolongSwap",
  },
  {
    id: "ooze",
    symbol: "ooze",
    name: "Ooze",
  },
  {
    id: "opacity",
    symbol: "opct",
    name: "Opacity",
  },
  {
    id: "opalcoin",
    symbol: "auop",
    name: "Opalcoin",
  },
  {
    id: "opbr",
    symbol: "opbr",
    name: "OPBR",
  },
  {
    id: "openai-erc",
    symbol: "openai erc",
    name: "OpenAI ERC",
  },
  {
    id: "openalexa-protocol",
    symbol: "oap",
    name: "OpenAlexa Protocol",
  },
  {
    id: "openanx",
    symbol: "oax",
    name: "OAX",
  },
  {
    id: "openblox",
    symbol: "obx",
    name: "OpenBlox",
  },
  {
    id: "opendao",
    symbol: "sos",
    name: "OpenDAO",
  },
  {
    id: "open-governance-token",
    symbol: "open",
    name: "OPEN Governance",
  },
  {
    id: "openleverage",
    symbol: "ole",
    name: "OpenLeverage",
  },
  {
    id: "openlink",
    symbol: "olink",
    name: "OpenLink",
  },
  {
    id: "openlink-dao",
    symbol: "olink",
    name: "Openlink DAO",
  },
  {
    id: "openlive-nft",
    symbol: "opv",
    name: "OpenLive NFT",
  },
  {
    id: "opennity",
    symbol: "opnn",
    name: "Opennity",
  },
  {
    id: "openocean",
    symbol: "ooe",
    name: "OpenOcean",
  },
  {
    id: "open-platform",
    symbol: "open",
    name: "Open Platform",
  },
  {
    id: "open-proprietary-protocol",
    symbol: "opp",
    name: "Open Proprietary Protocol",
  },
  {
    id: "openstream-world",
    symbol: "osw",
    name: "OpenStream World",
  },
  {
    id: "openswap",
    symbol: "oswap",
    name: "OpenSwap",
  },
  {
    id: "openswap-token",
    symbol: "openx",
    name: "OpenSwap.One",
  },
  {
    id: "openx-locked-velo",
    symbol: "opxvevelo",
    name: "OpenX Locked Velo",
  },
  {
    id: "openxswap",
    symbol: "openx",
    name: "OpenXSwap",
  },
  {
    id: "openxswap-gov-token",
    symbol: "xopenx",
    name: "OpenXSwap Gov. Token",
  },
  {
    id: "operon-origins",
    symbol: "oro",
    name: "Operon Origins",
  },
  {
    id: "opes-wrapped-pe",
    symbol: "wpe",
    name: "OPES (Wrapped PE)",
  },
  {
    id: "opium",
    symbol: "opium",
    name: "Opium",
  },
  {
    id: "oppa",
    symbol: "oppa",
    name: "OPPA",
  },
  {
    id: "oppa-token",
    symbol: "oppa",
    name: "OPPA Token",
  },
  {
    id: "optical-bitcoin",
    symbol: "obtc",
    name: "Optical Bitcoin",
  },
  {
    id: "optimism",
    symbol: "op",
    name: "Optimism",
  },
  {
    id: "optimismpad",
    symbol: "opp",
    name: "OptimismPad",
  },
  {
    id: "optimus",
    symbol: "optcm",
    name: "Optimus",
  },
  {
    id: "optimus-finance",
    symbol: "fin",
    name: "Optimus Finance",
  },
  {
    id: "optimus-opt",
    symbol: "opt",
    name: "Optimus OPT",
  },
  {
    id: "optimus-opt2",
    symbol: "opt2",
    name: "Optimus OPT2",
  },
  {
    id: "optimus-opt3",
    symbol: "opt3",
    name: "Optimus OPT3",
  },
  {
    id: "option-panda-platform",
    symbol: "opa",
    name: "Option Panda Platform",
  },
  {
    id: "option-room",
    symbol: "room",
    name: "OptionRoom",
  },
  {
    id: "optionroom-governance-token",
    symbol: "court",
    name: "OptionRoom Governance",
  },
  {
    id: "options-market",
    symbol: "osm",
    name: "Options Market",
  },
  {
    id: "opulous",
    symbol: "opul",
    name: "Opulous",
  },
  {
    id: "opx-finance",
    symbol: "opx",
    name: "OPX Finance",
  },
  {
    id: "opyn-squeeth",
    symbol: "osqth",
    name: "Opyn Squeeth",
  },
  {
    id: "oraclechain",
    symbol: "oct",
    name: "OracleChain",
  },
  {
    id: "oracle-dao",
    symbol: "orc",
    name: "Oracle Dao",
  },
  {
    id: "oracleswap",
    symbol: "oracle",
    name: "OracleSwap",
  },
  {
    id: "oracle-system",
    symbol: "orc",
    name: "Oracle System",
  },
  {
    id: "oracolxor",
    symbol: "xor",
    name: "Oracolxor",
  },
  {
    id: "oragonx",
    symbol: "orgn",
    name: "OragonX",
  },
  {
    id: "oraichain-token",
    symbol: "orai",
    name: "Oraichain",
  },
  {
    id: "oraidex",
    symbol: "oraix",
    name: "OraiDEX",
  },
  {
    id: "orakler",
    symbol: "orkl",
    name: "Orakler",
  },
  {
    id: "orakuru",
    symbol: "ork",
    name: "Orakuru",
  },
  {
    id: "orao-network",
    symbol: "orao",
    name: "ORAO Network",
  },
  {
    id: "orbis",
    symbol: "orbc",
    name: "Orbis",
  },
  {
    id: "orbitau-taureum",
    symbol: "taum",
    name: "Orbitau Taureum",
  },
  {
    id: "orbit-bridge-klaytn-belt",
    symbol: "obelt",
    name: "Orbit Bridge Klaytn BELT",
  },
  {
    id: "orbit-bridge-klaytn-binance-coin",
    symbol: "obnb",
    name: "Orbit Bridge Klaytn Binance Coin",
  },
  {
    id: "orbit-bridge-klaytn-ethereum",
    symbol: "oeth",
    name: "Orbit Bridge Klaytn Ethereum",
  },
  {
    id: "orbit-bridge-klaytn-handy",
    symbol: "ohandy",
    name: "Orbit Bridge Klaytn Handy",
  },
  {
    id: "orbit-bridge-klaytn-matic",
    symbol: "omatic",
    name: "Orbit Bridge Klaytn MATIC",
  },
  {
    id: "orbit-bridge-klaytn-orbit-chain",
    symbol: "oorc",
    name: "Orbit Bridge Klaytn Orbit Chain",
  },
  {
    id: "orbit-bridge-klaytn-ripple",
    symbol: "oxrp",
    name: "Orbit Bridge Klaytn Ripple",
  },
  {
    id: "orbit-bridge-klaytn-usdc",
    symbol: "ousdc",
    name: "Orbit Bridge Klaytn USDC",
  },
  {
    id: "orbit-bridge-klaytn-usd-tether",
    symbol: "ousdt",
    name: "Orbit Bridge Klaytn USD Tether",
  },
  {
    id: "orbit-bridge-klaytn-wrapped-btc",
    symbol: "owbtc",
    name: "Orbit Bridge Klaytn Wrapped BTC",
  },
  {
    id: "orbit-chain",
    symbol: "orc",
    name: "Orbit Chain",
  },
  {
    id: "orbitcoin",
    symbol: "orb",
    name: "Orbitcoin",
  },
  {
    id: "orbit-token",
    symbol: "orbit",
    name: "First On The Moon ORBIT",
  },
  {
    id: "orbler",
    symbol: "orbr",
    name: "Orbler",
  },
  {
    id: "orbs",
    symbol: "orbs",
    name: "Orbs",
  },
  {
    id: "orbyt-token",
    symbol: "orbyt",
    name: "ORBYT Token",
  },
  {
    id: "orca",
    symbol: "orca",
    name: "Orca",
  },
  {
    id: "orca-avai",
    symbol: "avai",
    name: "Orca AVAI",
  },
  {
    id: "orcadao",
    symbol: "orca",
    name: "Orca DAO",
  },
  {
    id: "orchid-protocol",
    symbol: "oxt",
    name: "Orchid Protocol",
  },
  {
    id: "orclands-metaverse",
    symbol: "orc",
    name: "Orclands Metaverse",
  },
  {
    id: "order",
    symbol: "order",
    name: "Order",
  },
  {
    id: "order-of-the-apeverse",
    symbol: "oav",
    name: "Order of the Apeverse",
  },
  {
    id: "oreoswap",
    symbol: "oreo",
    name: "OreoSwap",
  },
  {
    id: "ore-token",
    symbol: "ore",
    name: "ORE",
  },
  {
    id: "organix",
    symbol: "ogx",
    name: "Organix",
  },
  {
    id: "orient-walt",
    symbol: "htdf",
    name: "Orient Walt",
  },
  {
    id: "original-crypto-coin",
    symbol: "tusc",
    name: "The Universal Settlement Coin",
  },
  {
    id: "origindao",
    symbol: "og",
    name: "OriginDAO",
  },
  {
    id: "origin-dollar",
    symbol: "ousd",
    name: "Origin Dollar",
  },
  {
    id: "origin-dollar-governance",
    symbol: "ogv",
    name: "Origin Dollar Governance",
  },
  {
    id: "origin-protocol",
    symbol: "ogn",
    name: "Origin Protocol",
  },
  {
    id: "origin-sport",
    symbol: "ors",
    name: "Origin Sport",
  },
  {
    id: "origintrail",
    symbol: "trac",
    name: "OriginTrail",
  },
  {
    id: "origo",
    symbol: "ogo",
    name: "Origo",
  },
  {
    id: "origyn-foundation",
    symbol: "ogy",
    name: "ORIGYN Foundation",
  },
  {
    id: "orion-cash",
    symbol: "orc",
    name: "Orion Cash",
  },
  {
    id: "orion-money",
    symbol: "orion",
    name: "Orion Money",
  },
  {
    id: "orion-protocol",
    symbol: "orn",
    name: "Orion Protocol",
  },
  {
    id: "orkan",
    symbol: "ork",
    name: "Orkan",
  },
  {
    id: "orlando-chain",
    symbol: "orl",
    name: "Orlando Chain",
  },
  {
    id: "orlycoin",
    symbol: "orly",
    name: "Orlycoin",
  },
  {
    id: "ormeus-cash",
    symbol: "omc",
    name: "Ormeus Cash",
  },
  {
    id: "ormeuscoin",
    symbol: "orme",
    name: "Ormeus Coin",
  },
  {
    id: "ormeus-ecosystem",
    symbol: "eco",
    name: "Ormeus Ecosystem",
  },
  {
    id: "oro",
    symbol: "oro",
    name: "ORO",
  },
  {
    id: "ort-rune-rune-game",
    symbol: "ort",
    name: "ORT Rune (Rune.Game)",
  },
  {
    id: "oryxfi",
    symbol: "oryx",
    name: "OryxFi",
  },
  {
    id: "osis",
    symbol: "osis",
    name: "OSIS",
  },
  {
    id: "osk",
    symbol: "osk",
    name: "OSK",
  },
  {
    id: "osmiumcoin",
    symbol: "os76",
    name: "OsmiumCoin",
  },
  {
    id: "osmosis",
    symbol: "osmo",
    name: "Osmosis",
  },
  {
    id: "otcbtc-token",
    symbol: "otb",
    name: "OTCBTC",
  },
  {
    id: "otherdao",
    symbol: "othr",
    name: "OtherDAO",
  },
  {
    id: "otium-technologies",
    symbol: "otium",
    name: "Otium Technologies",
  },
  {
    id: "otocash",
    symbol: "oto",
    name: "OTOCASH",
  },
  {
    id: "oto-protocol",
    symbol: "oto",
    name: "OTO Protocol",
  },
  {
    id: "ot-pendle-eth",
    symbol: "ot-pe-29dec2022",
    name: "OT-PENDLE/ETH",
  },
  {
    id: "otterclam",
    symbol: "clam",
    name: "OtterClam",
  },
  {
    id: "otter-finance",
    symbol: "otr",
    name: "Otter Finance",
  },
  {
    id: "ouro-governance-share",
    symbol: "ogs",
    name: "Ouro Governance Share",
  },
  {
    id: "ouro-stablecoin",
    symbol: "ouro",
    name: "Ouro Stablecoin",
  },
  {
    id: "ouse",
    symbol: "ouse",
    name: "Ouse",
  },
  {
    id: "outer-ring",
    symbol: "gq",
    name: "Outer Ring MMO",
  },
  {
    id: "outpost",
    symbol: "out",
    name: "OutPost",
  },
  {
    id: "outrace",
    symbol: "ore",
    name: "Outrace",
  },
  {
    id: "ovato",
    symbol: "ovo",
    name: "Ovato",
  },
  {
    id: "overlay-protocol",
    symbol: "ovl",
    name: "Overlay Protocol",
  },
  {
    id: "overline-emblem",
    symbol: "emb",
    name: "Overline Emblem",
  },
  {
    id: "overload-game",
    symbol: "ovl",
    name: "Overlord Game",
  },
  {
    id: "overlord",
    symbol: "lord",
    name: "Overlord",
  },
  {
    id: "ovr",
    symbol: "ovr",
    name: "Ovr",
  },
  {
    id: "owgaming",
    symbol: "ow",
    name: "OWGaming",
  },
  {
    id: "owldao",
    symbol: "owl",
    name: "OwlDAO",
  },
  {
    id: "owloper",
    symbol: "owl",
    name: "Owloper Owl",
  },
  {
    id: "owndata",
    symbol: "own",
    name: "OWNDATA",
  },
  {
    id: "ownix",
    symbol: "onx",
    name: "Ownix",
  },
  {
    id: "ownly",
    symbol: "own",
    name: "Ownly",
  },
  {
    id: "own-token",
    symbol: "own",
    name: "OWN Token",
  },
  {
    id: "oxbitcoin",
    symbol: "0xbtc",
    name: "0xBitcoin",
  },
  {
    id: "oxbull-solana",
    symbol: "oxs",
    name: "Oxbull Solana",
  },
  {
    id: "oxbull-tech-2",
    symbol: "oxb",
    name: "Oxbull Tech",
  },
  {
    id: "oxfinance",
    symbol: "oxfi",
    name: "Oxfinance",
  },
  {
    id: "oxo-farm",
    symbol: "oxo",
    name: "OXO.Farm",
  },
  {
    id: "oxsolid",
    symbol: "oxsolid",
    name: "oxSOLID",
  },
  {
    id: "oxygen",
    symbol: "oxy",
    name: "Oxygen",
  },
  {
    id: "oxymetatoken",
    symbol: "omt",
    name: "OxyMetaToken",
  },
  {
    id: "oxyo2",
    symbol: "ox2",
    name: "OxyO2",
  },
  {
    id: "p2p",
    symbol: "p2p",
    name: "P2P",
  },
  {
    id: "p2p-solutions-foundation",
    symbol: "p2ps",
    name: "P2P solutions foundation",
  },
  {
    id: "p2p-taxi",
    symbol: "p2ptxt",
    name: "p2p taxi",
  },
  {
    id: "paccoin",
    symbol: "pac",
    name: "PAC Protocol",
  },
  {
    id: "pacific",
    symbol: "paf",
    name: "Pacific",
  },
  {
    id: "pacific-defi",
    symbol: "pacific",
    name: "Pacific DeFi",
  },
  {
    id: "packageportal",
    symbol: "port",
    name: "PackagePortal",
  },
  {
    id: "packetchain",
    symbol: "ptcl",
    name: "Packetchain",
  },
  {
    id: "packswap",
    symbol: "pact",
    name: "PactSwap",
  },
  {
    id: "pacoca",
    symbol: "pacoca",
    name: "Pacoca",
  },
  {
    id: "pagan-gods-fur-token",
    symbol: "fur",
    name: "Pagan Gods Fur",
  },
  {
    id: "page",
    symbol: "page",
    name: "Page",
  },
  {
    id: "page-network",
    symbol: "pgx",
    name: "Page Network",
  },
  {
    id: "paid-network",
    symbol: "paid",
    name: "PAID Network",
  },
  {
    id: "paint",
    symbol: "paint",
    name: "MurAll",
  },
  {
    id: "paint-swap",
    symbol: "brush",
    name: "Paint Swap",
  },
  {
    id: "pakcoin",
    symbol: "pak",
    name: "Pakcoin",
  },
  {
    id: "palace",
    symbol: "paa",
    name: "Palace",
  },
  {
    id: "paladin",
    symbol: "pal",
    name: "Paladin",
  },
  {
    id: "paladin-dao",
    symbol: "pal",
    name: "Paladin DAO",
  },
  {
    id: "palantir-tokenized-stock-defichain",
    symbol: "dpltr",
    name: "Palantir Tokenized Stock Defichain",
  },
  {
    id: "palette",
    symbol: "plt",
    name: "Palette",
  },
  {
    id: "palgold",
    symbol: "palg",
    name: "PalGold",
  },
  {
    id: "pallapay",
    symbol: "palla",
    name: "Pallapay",
  },
  {
    id: "palmare",
    symbol: "pal",
    name: "Palmare",
  },
  {
    id: "palmpay",
    symbol: "palm",
    name: "PalmPay",
  },
  {
    id: "palmswap",
    symbol: "palm",
    name: "PalmSwap",
  },
  {
    id: "pamp-network",
    symbol: "pamp",
    name: "Pamp Network",
  },
  {
    id: "pampther",
    symbol: "pampther",
    name: "Pampther",
  },
  {
    id: "pana-dao",
    symbol: "pana",
    name: "PANA",
  },
  {
    id: "pancake-bunny",
    symbol: "bunny",
    name: "Pancake Bunny",
  },
  {
    id: "pancake-games",
    symbol: "gcake",
    name: "Pancake Games",
  },
  {
    id: "pancake-hunny",
    symbol: "hunny",
    name: "Hunny Finance",
  },
  {
    id: "pancakelock",
    symbol: "plock",
    name: "PancakeLock",
  },
  {
    id: "pancakepoll",
    symbol: "ppoll",
    name: "PancakePoll",
  },
  {
    id: "pancakeswap-token",
    symbol: "cake",
    name: "PancakeSwap",
  },
  {
    id: "pancaketools",
    symbol: "tcake",
    name: "PancakeTools",
  },
  {
    id: "pandacoin",
    symbol: "pnd",
    name: "Pandacoin",
  },
  {
    id: "panda-coin",
    symbol: "panda",
    name: "Panda Coin",
  },
  {
    id: "pandadao",
    symbol: "panda",
    name: "PandaDAO",
  },
  {
    id: "panda-multiverse",
    symbol: "pndmlv",
    name: "Panda Multiverse",
  },
  {
    id: "pando",
    symbol: "pando",
    name: "Pando",
  },
  {
    id: "pandora-cash",
    symbol: "pcash",
    name: "Pandora Cash",
  },
  {
    id: "pandora-protocol",
    symbol: "pndr",
    name: "Pandora Protocol",
  },
  {
    id: "pandora-spirit",
    symbol: "psr",
    name: "Pandora Spirit",
  },
  {
    id: "pando-token",
    symbol: "ptx",
    name: "PandoProject",
  },
  {
    id: "pando-usd",
    symbol: "pusd",
    name: "Pando USD",
  },
  {
    id: "pangea-governance-token",
    symbol: "stone",
    name: "PANGEA GOVERNANCE TOKEN",
  },
  {
    id: "pangolin",
    symbol: "png",
    name: "Pangolin",
  },
  {
    id: "pangolin-songbird",
    symbol: "psb",
    name: "Pangolin Songbird",
  },
  {
    id: "panicswap",
    symbol: "panic",
    name: "PanicSwap",
  },
  {
    id: "pankuku",
    symbol: "kuku",
    name: "panKUKU",
  },
  {
    id: "pantheon-x",
    symbol: "xpn",
    name: "PANTHEON X",
  },
  {
    id: "panther",
    symbol: "zkp",
    name: "Panther Protocol",
  },
  {
    id: "pantherswap",
    symbol: "panther",
    name: "PantherSwap",
  },
  {
    id: "pantos",
    symbol: "pan",
    name: "Pantos",
  },
  {
    id: "panvala-pan",
    symbol: "pan",
    name: "Panvala Pan",
  },
  {
    id: "papa-doge",
    symbol: "papadoge",
    name: "Papa Doge",
  },
  {
    id: "paparazzi",
    symbol: "pazzi",
    name: "Paparazzi",
  },
  {
    id: "paper-dab1cd41-029d-4207-b87f-fd98d6fe737c",
    symbol: "$paper",
    name: "$PAPER",
  },
  {
    id: "paper-dao",
    symbol: "ppr",
    name: "Paper DAO",
  },
  {
    id: "paper-fantom",
    symbol: "paper",
    name: "Paper",
  },
  {
    id: "pappay",
    symbol: "pappay",
    name: "Pappay",
  },
  {
    id: "paprprintr-finance",
    symbol: "papr",
    name: "Paprprintr Finance",
  },
  {
    id: "parachute",
    symbol: "par",
    name: "Parachute",
  },
  {
    id: "paradisefi",
    symbol: "eden",
    name: "ParadiseFi",
  },
  {
    id: "paradisehotel-nft",
    symbol: "pht",
    name: "ParadiseHotel NFT",
  },
  {
    id: "paradox-metaverse",
    symbol: "paradox",
    name: "Paradox Metaverse",
  },
  {
    id: "paragen",
    symbol: "rgen",
    name: "Paragen",
  },
  {
    id: "paragonsdao",
    symbol: "pdt",
    name: "ParagonsDAO",
  },
  {
    id: "paralink-network",
    symbol: "para",
    name: "Paralink Network",
  },
  {
    id: "parallelcoin",
    symbol: "duo",
    name: "ParallelCoin",
  },
  {
    id: "parallel-finance",
    symbol: "para",
    name: "Parallel Finance",
  },
  {
    id: "paras",
    symbol: "paras",
    name: "Paras",
  },
  {
    id: "parasol-finance",
    symbol: "psol",
    name: "Parasol Finance",
  },
  {
    id: "parasset",
    symbol: "aset",
    name: "Parasset",
  },
  {
    id: "parastate",
    symbol: "state",
    name: "ParaState",
  },
  {
    id: "paraswap",
    symbol: "psp",
    name: "ParaSwap",
  },
  {
    id: "paratoken-2",
    symbol: "para",
    name: "Para",
  },
  {
    id: "parex",
    symbol: "prx",
    name: "Parex",
  },
  {
    id: "paribu-net",
    symbol: "prb",
    name: "Paribu Net",
  },
  {
    id: "paribus",
    symbol: "pbx",
    name: "Paribus",
  },
  {
    id: "paris-saint-germain-fan-token",
    symbol: "psg",
    name: "Paris Saint-Germain Fan Token",
  },
  {
    id: "parkgene",
    symbol: "gene",
    name: "Parkgene",
  },
  {
    id: "parma",
    symbol: "parma",
    name: "PARMA",
  },
  {
    id: "parrotly",
    symbol: "pbirb",
    name: "Parrotly",
  },
  {
    id: "parrot-protocol",
    symbol: "prt",
    name: "Parrot Protocol",
  },
  {
    id: "parrot-usd",
    symbol: "pai",
    name: "Parrot USD",
  },
  {
    id: "parsiq",
    symbol: "prq",
    name: "PARSIQ",
  },
  {
    id: "parsl",
    symbol: "seed",
    name: "Parsl",
  },
  {
    id: "par-stablecoin",
    symbol: "par",
    name: "Parallel",
  },
  {
    id: "particl",
    symbol: "part",
    name: "Particl",
  },
  {
    id: "particle-2",
    symbol: "prtcle",
    name: "Particle",
  },
  {
    id: "particle-technology",
    symbol: "part",
    name: "Particle Technology",
  },
  {
    id: "partneroid",
    symbol: "ptr",
    name: "Partner Coin",
  },
  {
    id: "parts-of-four-coin",
    symbol: "p4c",
    name: "Parts of Four Coin",
  },
  {
    id: "partyfi",
    symbol: "pfi",
    name: "PartyFi",
  },
  {
    id: "pascalcoin",
    symbol: "pasc",
    name: "Pascal",
  },
  {
    id: "pasha",
    symbol: "pasha",
    name: "Pasha",
  },
  {
    id: "passive-income",
    symbol: "psi",
    name: "Passive Income",
  },
  {
    id: "passive-token",
    symbol: "passive",
    name: "Passive",
  },
  {
    id: "pastel",
    symbol: "psl",
    name: "Pastel",
  },
  {
    id: "pathdao",
    symbol: "path",
    name: "PathDAO",
  },
  {
    id: "pathfundv2",
    symbol: "path",
    name: "PathFundV2",
  },
  {
    id: "patientory",
    symbol: "ptoy",
    name: "Patientory",
  },
  {
    id: "patron",
    symbol: "pat",
    name: "Patron",
  },
  {
    id: "paul-token",
    symbol: "paul",
    name: "PAUL",
  },
  {
    id: "pavecoin",
    symbol: "pvn",
    name: "Pavecoin",
  },
  {
    id: "pavia",
    symbol: "pavia",
    name: "Pavia",
  },
  {
    id: "paw",
    symbol: "paw",
    name: "Paw",
  },
  {
    id: "pawn-2",
    symbol: "pawn",
    name: "Pawn",
  },
  {
    id: "pawn-my-nft",
    symbol: "pnft",
    name: "Pawn My NFT",
  },
  {
    id: "paws-funds",
    symbol: "paws",
    name: "Paws Funds",
  },
  {
    id: "pawthereum",
    symbol: "pawth",
    name: "Pawthereum",
  },
  {
    id: "pawtocol",
    symbol: "upi",
    name: "Pawtocol",
  },
  {
    id: "paw-v2",
    symbol: "paw",
    name: "Paw V2",
  },
  {
    id: "pax-gold",
    symbol: "paxg",
    name: "PAX Gold",
  },
  {
    id: "paxos-gold-wormhole",
    symbol: "paxg",
    name: "Paxos Gold (Wormhole)",
  },
  {
    id: "paxos-standard",
    symbol: "usdp",
    name: "Pax Dollar",
  },
  {
    id: "pax-world",
    symbol: "paxw",
    name: "pax.world",
  },
  {
    id: "payaccept",
    symbol: "payt",
    name: "PayAccept",
  },
  {
    id: "payb",
    symbol: "payb",
    name: "PayB",
  },
  {
    id: "paybandcoin",
    symbol: "pybc",
    name: "PaybandCoin",
  },
  {
    id: "paybolt",
    symbol: "pay",
    name: "PayBolt",
  },
  {
    id: "paycent",
    symbol: "pyn",
    name: "Paycent",
  },
  {
    id: "paycer-protocol",
    symbol: "pcr",
    name: "Paycer Protocol",
  },
  {
    id: "paycheck-defi",
    symbol: "check",
    name: "Paycheck",
  },
  {
    id: "pay-coin",
    symbol: "pci",
    name: "Paycoin",
  },
  {
    id: "paycon-token",
    symbol: "con",
    name: "Paycon",
  },
  {
    id: "paydex",
    symbol: "dpay",
    name: "PayDex",
  },
  {
    id: "payflow",
    symbol: "pft",
    name: "PayFlow",
  },
  {
    id: "paygo",
    symbol: "paygo",
    name: "PayGo",
  },
  {
    id: "pay-it-now",
    symbol: "pin",
    name: "Pay It Now",
  },
  {
    id: "paymastercoin",
    symbol: "pmc",
    name: "PayMasterCoin",
  },
  {
    id: "paynet-coin",
    symbol: "payn",
    name: "PAYNET",
  },
  {
    id: "paypolitan-token",
    symbol: "epan",
    name: "Paypolitan",
  },
  {
    id: "payrue",
    symbol: "propel",
    name: "Propel",
  },
  {
    id: "paytomat",
    symbol: "pti",
    name: "Paytomat",
  },
  {
    id: "payturn",
    symbol: "ptr",
    name: "Payturn",
  },
  {
    id: "payyoda",
    symbol: "yot",
    name: "PayYoda",
  },
  {
    id: "payz-payments",
    symbol: "payz",
    name: "Payz Payments",
  },
  {
    id: "pbtc35a",
    symbol: "pbtc35a",
    name: "pBTC35A",
  },
  {
    id: "pchain",
    symbol: "pi",
    name: "Plian",
  },
  {
    id: "pdbc-defichain",
    symbol: "dpdbc",
    name: "PDBC Defichain",
  },
  {
    id: "pdshare",
    symbol: "pdshare",
    name: "PDSHARE",
  },
  {
    id: "pdx-coin",
    symbol: "pdx",
    name: "PDX Coin",
  },
  {
    id: "peace-dao",
    symbol: "peace",
    name: "Peace DAO",
  },
  {
    id: "peace-token",
    symbol: "pet",
    name: "Peace",
  },
  {
    id: "peach-finance",
    symbol: "peech",
    name: "Peach Finance",
  },
  {
    id: "peachfolio",
    symbol: "pchf",
    name: "Peachfolio",
  },
  {
    id: "peachpye",
    symbol: "peachpye",
    name: "PEACHPYE",
  },
  {
    id: "peacockcoin-eth",
    symbol: "pekc",
    name: "Peacockcoin (ETH)",
  },
  {
    id: "pea-farm",
    symbol: "pea",
    name: "Pea Farm",
  },
  {
    id: "peak-finance",
    symbol: "peak",
    name: "Peak Finance",
  },
  {
    id: "peakmines-peak",
    symbol: "peak",
    name: "Peakmines PEAK",
  },
  {
    id: "peanut",
    symbol: "nux",
    name: "Peanut",
  },
  {
    id: "pear",
    symbol: "pear",
    name: "Pear",
  },
  {
    id: "peardao",
    symbol: "pex",
    name: "PearDAO",
  },
  {
    id: "pearl-finance",
    symbol: "pearl",
    name: "Pearl Finance",
  },
  {
    id: "pebble",
    symbol: "pbl",
    name: "Pebble",
  },
  {
    id: "pecora-network",
    symbol: "pen",
    name: "Pecora Network",
  },
  {
    id: "peculium-2",
    symbol: "pcl",
    name: "Peculium",
  },
  {
    id: "peecoin-charts",
    symbol: "peecoin",
    name: "PeeCoin Charts",
  },
  {
    id: "peepcoin",
    symbol: "pcn",
    name: "Peepcoin",
  },
  {
    id: "peercoin",
    symbol: "ppc",
    name: "Peercoin",
  },
  {
    id: "peerex-network",
    symbol: "perx",
    name: "PeerEx Network",
  },
  {
    id: "peerguess",
    symbol: "guess",
    name: "PeerGuess",
  },
  {
    id: "peet-defi",
    symbol: "pte",
    name: "Peet DeFi",
  },
  {
    id: "pegasus-pow",
    symbol: "$pgs",
    name: "Pegasus",
  },
  {
    id: "pegasys",
    symbol: "psys",
    name: "Pegasys",
  },
  {
    id: "pegaxy-stone",
    symbol: "pgx",
    name: "Pegaxy Stone",
  },
  {
    id: "pegazus-finance",
    symbol: "peg",
    name: "Pegazus Finance",
  },
  {
    id: "peghub-com",
    symbol: "phub",
    name: "PegHub.com",
  },
  {
    id: "pegnet",
    symbol: "peg",
    name: "PegNet",
  },
  {
    id: "pego-network",
    symbol: "osk-dao",
    name: "Pego Network",
  },
  {
    id: "pele-network",
    symbol: "pele",
    name: "PELE Network",
  },
  {
    id: "pembrock",
    symbol: "pem",
    name: "Pembrock",
  },
  {
    id: "pencil-dao",
    symbol: "pencil",
    name: "Pencil DAO",
  },
  {
    id: "pendle",
    symbol: "pendle",
    name: "Pendle",
  },
  {
    id: "penguin-finance",
    symbol: "pefi",
    name: "Penguin Finance",
  },
  {
    id: "penguin-karts",
    symbol: "pgk",
    name: "Penguin Karts",
  },
  {
    id: "penguin-party-fish",
    symbol: "fish",
    name: "Penguin Party Fish",
  },
  {
    id: "penny-token",
    symbol: "penny",
    name: "Penny Token",
  },
  {
    id: "penrose-finance",
    symbol: "pen",
    name: "Penrose Finance",
  },
  {
    id: "pension-plan",
    symbol: "pp",
    name: "Pension Plan",
  },
  {
    id: "peony-coin",
    symbol: "pny",
    name: "Peony Coin",
  },
  {
    id: "peoples-punk",
    symbol: "dddd",
    name: "People's Punk",
  },
  {
    id: "peoplez",
    symbol: "lez",
    name: "Peoplez",
  },
  {
    id: "peos",
    symbol: "peos",
    name: "pEOS",
  },
  {
    id: "pepe-bet",
    symbol: "pepebet",
    name: "PEPE.bet",
  },
  {
    id: "pepedex",
    symbol: "ppdex",
    name: "Pepedex",
  },
  {
    id: "pepegold",
    symbol: "peps",
    name: "PEPS Coin",
  },
  {
    id: "pepegold-6ea5105a-8bbe-45bc-bd1c-dc9b01a19be7",
    symbol: "pepe",
    name: "PEPEGOLD",
  },
  {
    id: "pepemoon",
    symbol: "pepe",
    name: "Pepemoon",
  },
  {
    id: "pera-finance",
    symbol: "pera",
    name: "Pera Finance",
  },
  {
    id: "perfect-world",
    symbol: "pfw",
    name: "Perfect World",
  },
  {
    id: "peri-finance",
    symbol: "peri",
    name: "PERI Finance",
  },
  {
    id: "perion",
    symbol: "perc",
    name: "Perion",
  },
  {
    id: "perlin",
    symbol: "perl",
    name: "PERL.eco",
  },
  {
    id: "permission-coin",
    symbol: "ask",
    name: "Permission Coin",
  },
  {
    id: "perpetual-protocol",
    symbol: "perp",
    name: "Perpetual Protocol",
  },
  {
    id: "perpetuum-coin",
    symbol: "prp",
    name: "Perpetuum Coin",
  },
  {
    id: "perp-inu",
    symbol: "perpi",
    name: "Perp Inu",
  },
  {
    id: "perseus-fintech",
    symbol: "prs",
    name: "Perseus Fintech",
  },
  {
    id: "persia",
    symbol: "persia",
    name: "Persia",
  },
  {
    id: "persib-fan-token",
    symbol: "persib",
    name: "Persib Fan Token",
  },
  {
    id: "persistence",
    symbol: "xprt",
    name: "Persistence",
  },
  {
    id: "persistence-staked-xprt",
    symbol: "stkxprt",
    name: "pSTAKE Staked XPRT",
  },
  {
    id: "perth-mint-gold-token",
    symbol: "pmgt",
    name: "Perth Mint Gold Token",
  },
  {
    id: "peruvian-national-football-team-fan-token",
    symbol: "fpft",
    name: "Peruvian National Football Team Fan Token",
  },
  {
    id: "pesabase",
    symbol: "pesa",
    name: "Pesabase",
  },
  {
    id: "peseta-digital",
    symbol: "ptd",
    name: "Peseta Digital",
  },
  {
    id: "peseta-token",
    symbol: "pst",
    name: "Peseta Token",
  },
  {
    id: "petals",
    symbol: "pts",
    name: "Petals",
  },
  {
    id: "peth",
    symbol: "peth",
    name: "pETH",
  },
  {
    id: "peth18c",
    symbol: "peth18c",
    name: "pETH18C",
  },
  {
    id: "petoverse",
    symbol: "peto",
    name: "Petoverse",
  },
  {
    id: "petrodollar",
    symbol: "xpd",
    name: "PetroDollar",
  },
  {
    id: "petroleum-oil",
    symbol: "oil",
    name: "Petroleum OIL",
  },
  {
    id: "pet-store",
    symbol: "psbd",
    name: "Pet Store",
  },
  {
    id: "pett-network",
    symbol: "pett",
    name: "Pett Network",
  },
  {
    id: "pexcoin",
    symbol: "pex",
    name: "Pexcoin",
  },
  {
    id: "pftm",
    symbol: "pftm",
    name: "pFTM",
  },
  {
    id: "pgala",
    symbol: "pgala",
    name: "pGALA",
  },
  {
    id: "pgov",
    symbol: "pgov",
    name: "PGOV",
  },
  {
    id: "pha",
    symbol: "pha",
    name: "Phala Network",
  },
  {
    id: "phaeton",
    symbol: "phae",
    name: "Phaeton",
  },
  {
    id: "phant",
    symbol: "pnt",
    name: "Phant",
  },
  {
    id: "phantasia",
    symbol: "fant",
    name: "Phantasia",
  },
  {
    id: "phantasma",
    symbol: "soul",
    name: "Phantasma",
  },
  {
    id: "phantasma-energy",
    symbol: "kcal",
    name: "Phantasma Energy",
  },
  {
    id: "phantom-protocol",
    symbol: "phm",
    name: "Phantom Protocol",
  },
  {
    id: "phenix-finance",
    symbol: "phnx",
    name: "Phenix Finance [OLD]",
  },
  {
    id: "phenix-finance-2",
    symbol: "phnx",
    name: "Phenix Finance",
  },
  {
    id: "phenix-finance-polygon",
    symbol: "phnx",
    name: "Phenix Finance (Polygon)",
  },
  {
    id: "philcoin",
    symbol: "phl",
    name: "Philcoin",
  },
  {
    id: "philips-pay-coin",
    symbol: "ppc",
    name: "PHILLIPS PAY COIN",
  },
  {
    id: "phobos-token",
    symbol: "pbos",
    name: "Phobos Token",
  },
  {
    id: "phoenix",
    symbol: "phx",
    name: "Phoenix",
  },
  {
    id: "phoenixcoin",
    symbol: "pxc",
    name: "Phoenixcoin",
  },
  {
    id: "phoenixdao",
    symbol: "phnx",
    name: "PhoenixDAO",
  },
  {
    id: "phoenix-defi-finance",
    symbol: "pnixs",
    name: "Phoenix Defi Finance",
  },
  {
    id: "phoenixdefi-finance",
    symbol: "pnix",
    name: "PhoenixDefi.Finance",
  },
  {
    id: "phoenix-global",
    symbol: "phb",
    name: "Phoenix Global",
  },
  {
    id: "phoenix-protocol-b7a9513c-36e9-4a6b-b6ae-6a1a76bb913e",
    symbol: "pp",
    name: "Phoenix Protocol",
  },
  {
    id: "phoenix-token",
    symbol: "phx",
    name: "Phoenix Finance",
  },
  {
    id: "phoneum",
    symbol: "pht",
    name: "Phoneum",
  },
  {
    id: "phonon-dao",
    symbol: "phonon",
    name: "Phonon DAO",
  },
  {
    id: "phore",
    symbol: "phr",
    name: "Phore",
  },
  {
    id: "phoswap",
    symbol: "pho",
    name: "Phoswap",
  },
  {
    id: "photochromic",
    symbol: "phcr",
    name: "PhotoChromic",
  },
  {
    id: "photonswap",
    symbol: "photon",
    name: "PhotonSwap",
  },
  {
    id: "phunk-vault-nftx",
    symbol: "phunk",
    name: "PHUNK Vault (NFTX)",
  },
  {
    id: "phuntoken",
    symbol: "phtk",
    name: "Phun Token",
  },
  {
    id: "phuture",
    symbol: "phtr",
    name: "Phuture",
  },
  {
    id: "phuture-defi-index",
    symbol: "pdi",
    name: "Phuture DeFi Index",
  },
  {
    id: "physis",
    symbol: "phy",
    name: "Physis",
  },
  {
    id: "pias",
    symbol: "pias",
    name: "PIAS",
  },
  {
    id: "pibble",
    symbol: "pib",
    name: "Pibble",
  },
  {
    id: "picasso",
    symbol: "pica",
    name: "PICASSO",
  },
  {
    id: "piccolo-inu",
    symbol: "pinu",
    name: "Piccolo Inu",
  },
  {
    id: "picipo",
    symbol: "picipo",
    name: "Picipo",
  },
  {
    id: "pick",
    symbol: "pick",
    name: "PICK",
  },
  {
    id: "pickle-finance",
    symbol: "pickle",
    name: "Pickle Finance",
  },
  {
    id: "picogo",
    symbol: "pico",
    name: "PicoGo",
  },
  {
    id: "piconnect",
    symbol: "pico",
    name: "PiConnect",
  },
  {
    id: "piction-network",
    symbol: "pxl",
    name: "Piction Network",
  },
  {
    id: "pidao",
    symbol: "pid",
    name: "PIDAO",
  },
  {
    id: "piedao-balanced-crypto-pie",
    symbol: "bcp",
    name: "PieDAO Balanced Crypto Pie",
  },
  {
    id: "piedao-btc",
    symbol: "btc++",
    name: "PieDAO BTC++",
  },
  {
    id: "piedao-defi",
    symbol: "defi++",
    name: "PieDAO DEFI++",
  },
  {
    id: "piedao-defi-large-cap",
    symbol: "defi+l",
    name: "PieDAO DEFI Large Cap",
  },
  {
    id: "piedao-defi-small-cap",
    symbol: "defi+s",
    name: "PieDAO DEFI Small Cap",
  },
  {
    id: "piedao-dough-v2",
    symbol: "dough",
    name: "PieDAO DOUGH v2",
  },
  {
    id: "piedao-yearn-ecosystem-pie",
    symbol: "ypie",
    name: "PieDAO Yearn Ecosystem Pie",
  },
  {
    id: "pie-share",
    symbol: "pie",
    name: "Pie Share",
  },
  {
    id: "pige-inu",
    symbol: "pinu",
    name: "Pige Inu",
  },
  {
    id: "pigeoncoin",
    symbol: "pgn",
    name: "Pigeoncoin",
  },
  {
    id: "pigeon-sol",
    symbol: "pgnt",
    name: "Pigeon Sol",
  },
  {
    id: "pig-finance",
    symbol: "pig",
    name: "Pig Finance",
  },
  {
    id: "piggy",
    symbol: "piggy",
    name: "Piggy",
  },
  {
    id: "piggy-bank-token",
    symbol: "piggy",
    name: "PiggyBank",
  },
  {
    id: "piggy-finance",
    symbol: "piggy",
    name: "Piggy Finance",
  },
  {
    id: "piggy-share",
    symbol: "pshare",
    name: "Piggy Share",
  },
  {
    id: "pigs-2",
    symbol: "afp",
    name: "PIGS",
  },
  {
    id: "pikachu",
    symbol: "pika",
    name: "Pika",
  },
  {
    id: "pikaster",
    symbol: "mls",
    name: "Metaland Shares",
  },
  {
    id: "pillar",
    symbol: "plr",
    name: "Pillar",
  },
  {
    id: "pilot",
    symbol: "ptd",
    name: "Pilot",
  },
  {
    id: "pimride",
    symbol: "pim",
    name: "PIMRIDE",
  },
  {
    id: "pi-network-defi",
    symbol: "pinetworkdefi",
    name: "Pi Network DeFi",
  },
  {
    id: "pi-network-iou",
    symbol: "pi",
    name: "Pi Network",
  },
  {
    id: "pinkcoin",
    symbol: "pink",
    name: "Pinkcoin",
  },
  {
    id: "pinkelon",
    symbol: "pinke",
    name: "PinkElon",
  },
  {
    id: "pinkie-inu",
    symbol: "pinkie",
    name: "Pinkie Inu",
  },
  {
    id: "pinkmoon",
    symbol: "pinkm",
    name: "PinkMoon",
  },
  {
    id: "pinknode",
    symbol: "pnode",
    name: "Pinknode",
  },
  {
    id: "pink-panda",
    symbol: "pinkpanda",
    name: "Pink Panda",
  },
  {
    id: "pink-panther",
    symbol: "pink",
    name: "PINK PANTHER",
  },
  {
    id: "pinkpea-finance",
    symbol: "pea",
    name: "PinkPea.Finance",
  },
  {
    id: "pinksale",
    symbol: "pinksale",
    name: "PinkSale",
  },
  {
    id: "pinkslip-finance",
    symbol: "pslip",
    name: "Pinkslip Finance",
  },
  {
    id: "pinkswap-token",
    symbol: "pinks",
    name: "PinkSwap",
  },
  {
    id: "pintu-token",
    symbol: "ptu",
    name: "Pintu",
  },
  {
    id: "piogold",
    symbol: "pio",
    name: "PioGold",
  },
  {
    id: "pippi-finance",
    symbol: "pipi",
    name: "Pippi Finance",
  },
  {
    id: "pi-protocol",
    symbol: "pip",
    name: "Pi Protocol",
  },
  {
    id: "piratecash",
    symbol: "pirate",
    name: "PirateCash",
  },
  {
    id: "pirate-chain",
    symbol: "arrr",
    name: "Pirate Chain",
  },
  {
    id: "piratecoin",
    symbol: "piratecoin☠",
    name: "PirateCoin",
  },
  {
    id: "pirate-dice",
    symbol: "booty",
    name: "Pirate Dice",
  },
  {
    id: "piratera",
    symbol: "pira",
    name: "Piratera",
  },
  {
    id: "piratesking",
    symbol: "pkt",
    name: "PiratesKing",
  },
  {
    id: "pirate-x-pirate",
    symbol: "pxp",
    name: "Pirate x Pirate",
  },
  {
    id: "pirichain",
    symbol: "piri",
    name: "Pirichain",
  },
  {
    id: "piston",
    symbol: "pstn",
    name: "Piston",
  },
  {
    id: "pist-trust",
    symbol: "pist",
    name: "Pist Trust",
  },
  {
    id: "pitbull",
    symbol: "pit",
    name: "Pitbull",
  },
  {
    id: "pitbull-inu",
    symbol: "piti",
    name: "Pitbull Inu",
  },
  {
    id: "pitch-fxs",
    symbol: "pitchfxs",
    name: "Pitch FXS",
  },
  {
    id: "pitquidity-capital",
    symbol: "pitqc",
    name: "Pitquidity Capital",
  },
  {
    id: "pivot-token",
    symbol: "pvt",
    name: "Pivot",
  },
  {
    id: "pivx",
    symbol: "pivx",
    name: "PIVX",
  },
  {
    id: "pivx-lite",
    symbol: "pivxl",
    name: "Pivx Lite",
  },
  {
    id: "pixel-doge",
    symbol: "pxdoge",
    name: "Pixel Doge",
  },
  {
    id: "pixel-kings",
    symbol: "kngs",
    name: "Pixel Kings",
  },
  {
    id: "pixelpotus",
    symbol: "pxl",
    name: "PixelPotus",
  },
  {
    id: "pixels-so",
    symbol: "pixl",
    name: "Pixels.so",
  },
  {
    id: "pixelverse",
    symbol: "pixel",
    name: "PixelVerse",
  },
  {
    id: "pixeos",
    symbol: "pixeos",
    name: "PixEOS",
  },
  {
    id: "pixie",
    symbol: "pix",
    name: "Pixie",
  },
  {
    id: "pixiu-finance",
    symbol: "pixiu",
    name: "Pixiu Finance",
  },
  {
    id: "pixl-coin-2",
    symbol: "pxlc",
    name: "Pixl Coin",
  },
  {
    id: "pixls-vault-nftx",
    symbol: "pixls",
    name: "PIXLS Vault (NFTX)",
  },
  {
    id: "pizza-game",
    symbol: "pizza",
    name: "Pizza Game",
  },
  {
    id: "pizza-nft",
    symbol: "$pizza",
    name: "Pizza NFT",
  },
  {
    id: "pizza-pug-coin",
    symbol: "ppug",
    name: "Pizza Pug Coin",
  },
  {
    id: "pizzaswap",
    symbol: "pizza",
    name: "PizzaSwap",
  },
  {
    id: "pizza-usde",
    symbol: "pizza",
    name: "PIZZA",
  },
  {
    id: "pkg-token",
    symbol: "pkg",
    name: "PKG",
  },
  {
    id: "pkt",
    symbol: "pkt",
    name: "PKT",
  },
  {
    id: "placeh",
    symbol: "phl",
    name: "Placeholders",
  },
  {
    id: "place-war",
    symbol: "place",
    name: "PlaceWar Governance",
  },
  {
    id: "plair",
    symbol: "pla",
    name: "Plair",
  },
  {
    id: "planet",
    symbol: "pla",
    name: "PLANET",
  },
  {
    id: "planet-alliance-star-dao",
    symbol: "star",
    name: "Planet Alliance STAR DAO",
  },
  {
    id: "planetapeclub",
    symbol: "plac",
    name: "PlanetApeClub",
  },
  {
    id: "planetcats",
    symbol: "catcoin",
    name: "PlanetCats",
  },
  {
    id: "planet-finance",
    symbol: "aqua",
    name: "Planet Finance",
  },
  {
    id: "planet-infinity",
    symbol: "pli",
    name: "Planet infinity",
  },
  {
    id: "planet-inu",
    symbol: "planetinu",
    name: "Planet Inu",
  },
  {
    id: "planet-sandbox",
    symbol: "psb",
    name: "Planet Sandbox",
  },
  {
    id: "planetwatch",
    symbol: "planets",
    name: "PlanetWatch",
  },
  {
    id: "plant-empires",
    symbol: "pefi",
    name: "Plant Empires",
  },
  {
    id: "plant-exodus",
    symbol: "pexo",
    name: "Plant Exodus",
  },
  {
    id: "plant-vs-undead-token",
    symbol: "pvu",
    name: "Plant vs Undead",
  },
  {
    id: "plasma-finance",
    symbol: "ppay",
    name: "Plasma Finance",
  },
  {
    id: "plastiks",
    symbol: "plastik",
    name: "Plastiks",
  },
  {
    id: "plata-network",
    symbol: "plata",
    name: "Plata Network",
  },
  {
    id: "platincoin",
    symbol: "plc",
    name: "PlatinCoin",
  },
  {
    id: "platinx",
    symbol: "ptx",
    name: "PlatinX",
  },
  {
    id: "plato-farm",
    symbol: "mark",
    name: "Plato Farm",
  },
  {
    id: "plato-game",
    symbol: "plato",
    name: "Plato Game",
  },
  {
    id: "platoncoin",
    symbol: "pltc",
    name: "PlatonCoin",
  },
  {
    id: "platon-network",
    symbol: "lat",
    name: "PlatON Network",
  },
  {
    id: "platypus-finance",
    symbol: "ptp",
    name: "Platypus Finance",
  },
  {
    id: "play2live",
    symbol: "luc",
    name: "Level-Up Coin",
  },
  {
    id: "play4cash",
    symbol: "p4c",
    name: "Play4Cash",
  },
  {
    id: "playa3ull-games",
    symbol: "3ull",
    name: "Playa3ull Games",
  },
  {
    id: "playcent",
    symbol: "pcnt",
    name: "Playcent",
  },
  {
    id: "playchip",
    symbol: "pla",
    name: "PlayChip",
  },
  {
    id: "playdapp",
    symbol: "pla",
    name: "PlayDapp",
  },
  {
    id: "playermon",
    symbol: "pym",
    name: "Playermon",
  },
  {
    id: "playersonly",
    symbol: "po",
    name: "PlayersOnly",
  },
  {
    id: "playervsplayercoin",
    symbol: "pvp",
    name: "PlayerVsPlayerCoin",
  },
  {
    id: "playfuel",
    symbol: "plf",
    name: "PlayFuel",
  },
  {
    id: "playgame",
    symbol: "pxg",
    name: "PlayGame",
  },
  {
    id: "playground",
    symbol: "playa",
    name: "Playground",
  },
  {
    id: "playground-waves-floor-index",
    symbol: "waves",
    name: "Playground Waves Floor Index",
  },
  {
    id: "play-it-forward-dao",
    symbol: "pif",
    name: "Play It Forward DAO",
  },
  {
    id: "playkey",
    symbol: "pkt",
    name: "PlayKey",
  },
  {
    id: "playmarket",
    symbol: "pmt",
    name: "DAO PlayMarket 2.0",
  },
  {
    id: "playmusic",
    symbol: "play",
    name: "Playmusic",
  },
  {
    id: "playnity",
    symbol: "ply",
    name: "PlayNity",
  },
  {
    id: "playpad",
    symbol: "ppad",
    name: "PlayPad",
  },
  {
    id: "playposeidon-nft",
    symbol: "ppp",
    name: "PlayPoseidon NFT",
  },
  {
    id: "plc-ultima",
    symbol: "plcu",
    name: "PLC Ultima",
  },
  {
    id: "plearn",
    symbol: "pln",
    name: "PLEARN",
  },
  {
    id: "pleasure-coin",
    symbol: "nsfw",
    name: "Pleasure Coin",
  },
  {
    id: "plebe-gaming",
    symbol: "pleb",
    name: "Plebe Gaming",
  },
  {
    id: "pledge",
    symbol: "plgr",
    name: "Pledge",
  },
  {
    id: "pledgecamp",
    symbol: "plg",
    name: "Pledgecamp",
  },
  {
    id: "plenty-dao",
    symbol: "plenty",
    name: "Plenty DeFi",
  },
  {
    id: "plex",
    symbol: "plex",
    name: "PLEX",
  },
  {
    id: "plgnet",
    symbol: "plug",
    name: "PL^Gnet",
  },
  {
    id: "plotx",
    symbol: "plot",
    name: "PlotX",
  },
  {
    id: "plug-chain",
    symbol: "pc",
    name: "Plug Chain",
  },
  {
    id: "plugin",
    symbol: "pli",
    name: "Plugin",
  },
  {
    id: "plunge",
    symbol: "plg",
    name: "Plunge",
  },
  {
    id: "pluracoin",
    symbol: "plura",
    name: "PluraCoin",
  },
  {
    id: "plus-coin",
    symbol: "nplc",
    name: "Plus Coin",
  },
  {
    id: "plusonecoin",
    symbol: "plus1",
    name: "PlusOneCoin",
  },
  {
    id: "pluton",
    symbol: "plu",
    name: "Pluton",
  },
  {
    id: "pluto-network",
    symbol: "ptn",
    name: "Pluto Network",
  },
  {
    id: "plutonian-dao",
    symbol: "pld",
    name: "Plutonian DAO",
  },
  {
    id: "plutonium",
    symbol: "pln",
    name: "Plutonium",
  },
  {
    id: "plutopepe",
    symbol: "pluto",
    name: "PlutoPepe",
  },
  {
    id: "pluto-pluto",
    symbol: "pluto",
    name: "Pluto PLUTO",
  },
  {
    id: "plutusdao",
    symbol: "pls",
    name: "PlutusDAO",
  },
  {
    id: "plutusfi",
    symbol: "plut",
    name: "PlutusFi",
  },
  {
    id: "pmg-coin",
    symbol: "pmg",
    name: "PMG Coin",
  },
  {
    id: "pmxx",
    symbol: "pmxx",
    name: "PMXX",
  },
  {
    id: "pnetwork",
    symbol: "pnt",
    name: "pNetwork",
  },
  {
    id: "pn-token",
    symbol: "pn",
    name: "PN",
  },
  {
    id: "poa-network",
    symbol: "poa",
    name: "POA Network",
  },
  {
    id: "poc-blockchain",
    symbol: "poc",
    name: "POC Blockchain",
  },
  {
    id: "poc-chain",
    symbol: "pocc",
    name: "POC Chain",
  },
  {
    id: "pochi-inu",
    symbol: "pochi",
    name: "Pochi Inu",
  },
  {
    id: "pocket-arena",
    symbol: "poc",
    name: "Pocket Arena",
  },
  {
    id: "pocket-battles-nft-war",
    symbol: "pkt",
    name: "Pocket Battles: NFT War",
  },
  {
    id: "pocketcoin",
    symbol: "pkoin",
    name: "Pocketcoin",
  },
  {
    id: "pocket-doge",
    symbol: "pckt",
    name: "Pocket",
  },
  {
    id: "pocket-network",
    symbol: "pokt",
    name: "Pocket Network",
  },
  {
    id: "pocket-node",
    symbol: "node",
    name: "Pocket Node",
  },
  {
    id: "pocmon-2",
    symbol: "mon",
    name: "PocMon",
  },
  {
    id: "pocoland",
    symbol: "poco",
    name: "Pocoland",
  },
  {
    id: "poet",
    symbol: "poe",
    name: "Po.et",
  },
  {
    id: "pofi",
    symbol: "pofi",
    name: "PoFi",
  },
  {
    id: "pog-coin",
    symbol: "pog",
    name: "PolygonumOnline",
  },
  {
    id: "point-coin",
    symbol: "point",
    name: "Point Coin",
  },
  {
    id: "point-network",
    symbol: "point",
    name: "Point Network",
  },
  {
    id: "pointpay",
    symbol: "pxp",
    name: "PointPay",
  },
  {
    id: "pokedx",
    symbol: "pdx",
    name: "PokeDX",
  },
  {
    id: "pokelon",
    symbol: "pokelon",
    name: "POKELON",
  },
  {
    id: "poken",
    symbol: "pkn",
    name: "Poken",
  },
  {
    id: "pokeplay-token",
    symbol: "ppc",
    name: "PokePlay Token",
  },
  {
    id: "pokerfi",
    symbol: "pokerfi",
    name: "PokerFi",
  },
  {
    id: "pokmonsters",
    symbol: "pok",
    name: "Pokmonsters",
  },
  {
    id: "polar",
    symbol: "polar",
    name: "POLAR",
  },
  {
    id: "polaris",
    symbol: "polar",
    name: "Polarisdefi",
  },
  {
    id: "polaris-finance-orbital",
    symbol: "orbital",
    name: "Polaris Finance Orbital",
  },
  {
    id: "polaris-share",
    symbol: "pola",
    name: "Polaris Share",
  },
  {
    id: "polars",
    symbol: "pol",
    name: "Polars",
  },
  {
    id: "polar-shares",
    symbol: "spolar",
    name: "Polar Shares",
  },
  {
    id: "polar-sync",
    symbol: "polar",
    name: "Polar Sync",
  },
  {
    id: "polar-token",
    symbol: "polar",
    name: "Polaris Finance Polar",
  },
  {
    id: "polinate",
    symbol: "poli",
    name: "Polinate",
  },
  {
    id: "polis",
    symbol: "polis",
    name: "Polis",
  },
  {
    id: "polkabridge",
    symbol: "pbr",
    name: "PolkaBridge",
  },
  {
    id: "polka-city",
    symbol: "polc",
    name: "Polkacity",
  },
  {
    id: "polka-classic",
    symbol: "dotc",
    name: "Polka Classic",
  },
  {
    id: "polkadex",
    symbol: "pdex",
    name: "Polkadex",
  },
  {
    id: "polkadomain",
    symbol: "name",
    name: "PolkaDomain",
  },
  {
    id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
  },
  {
    id: "polkaex",
    symbol: "pkex",
    name: "PolkaEx",
  },
  {
    id: "polkafantasy",
    symbol: "xp",
    name: "PolkaFantasy",
  },
  {
    id: "polkafoundry",
    symbol: "pkf",
    name: "Firebird",
  },
  {
    id: "polkago",
    symbol: "$plkg",
    name: "Polkago",
  },
  {
    id: "polkainsure-finance",
    symbol: "pis",
    name: "Polkainsure Finance",
  },
  {
    id: "polkally",
    symbol: "kally",
    name: "Kally",
  },
  {
    id: "polkamarkets",
    symbol: "polk",
    name: "Polkamarkets",
  },
  {
    id: "polkapet-world",
    symbol: "pets",
    name: "PolkaPet World",
  },
  {
    id: "polkaplay",
    symbol: "polo",
    name: "NftyPlay",
  },
  {
    id: "polkarare",
    symbol: "prare",
    name: "Polkarare",
  },
  {
    id: "polkasocial-network",
    symbol: "psn",
    name: "Polkasocial Network",
  },
  {
    id: "polkastarter",
    symbol: "pols",
    name: "Polkastarter",
  },
  {
    id: "polkastation",
    symbol: "polkas",
    name: "PolkaStation",
  },
  {
    id: "polkaswap",
    symbol: "pswap",
    name: "Polkaswap",
  },
  {
    id: "polka-ventures",
    symbol: "polven",
    name: "Polka Ventures",
  },
  {
    id: "polkawar",
    symbol: "pwar",
    name: "PolkaWar",
  },
  {
    id: "polker",
    symbol: "pkr",
    name: "Polker",
  },
  {
    id: "pollchain",
    symbol: "poll",
    name: "Pollchain",
  },
  {
    id: "pollen",
    symbol: "pln",
    name: "Pollen",
  },
  {
    id: "pollen-coin",
    symbol: "pcn",
    name: "Pollen Coin",
  },
  {
    id: "pollux-coin",
    symbol: "pox",
    name: "Pollux Coin",
  },
  {
    id: "polly",
    symbol: "polly",
    name: "Polly Finance",
  },
  {
    id: "polly-defi-nest",
    symbol: "ndefi",
    name: "Polly DeFi Nest",
  },
  {
    id: "polyalpha-finance",
    symbol: "alpha",
    name: "PolyAlpha Finance",
  },
  {
    id: "polybeta-finance",
    symbol: "beta",
    name: "PolyBeta Finance",
  },
  {
    id: "polybius",
    symbol: "plbt",
    name: "Polybius",
  },
  {
    id: "polycake-finance",
    symbol: "pcake",
    name: "PolyCake Finance",
  },
  {
    id: "polycat-finance",
    symbol: "fish",
    name: "Polycat Finance",
  },
  {
    id: "polychain-monsters",
    symbol: "pmon",
    name: "Polychain Monsters",
  },
  {
    id: "polychain-monsters-genesis",
    symbol: "pmlg",
    name: "Polychain Monsters Genesis",
  },
  {
    id: "polycub",
    symbol: "polycub",
    name: "PolyCub",
  },
  {
    id: "polydoge",
    symbol: "polydoge",
    name: "PolyDoge",
  },
  {
    id: "polyfarm-egg",
    symbol: "egg",
    name: "PolyFarm EGG",
  },
  {
    id: "polygamma",
    symbol: "gamma",
    name: "PolyGamma Finance",
  },
  {
    id: "polygen",
    symbol: "pgen",
    name: "Polygen",
  },
  {
    id: "polygod",
    symbol: "gull",
    name: "PolyGod",
  },
  {
    id: "polygold",
    symbol: "polygold",
    name: "PolyGold",
  },
  {
    id: "polygon-babydoge",
    symbol: "polybabydoge",
    name: "Polygon BabyDoge",
  },
  {
    id: "polygon-ecosystem-index",
    symbol: "peco",
    name: "Amun Polygon Ecosystem Index",
  },
  {
    id: "polygonfarm-finance",
    symbol: "spade",
    name: "PolygonFarm Finance",
  },
  {
    id: "polygon-hbd",
    symbol: "phbd",
    name: "Polygon HBD",
  },
  {
    id: "polygon-hive",
    symbol: "phive",
    name: "Polygon Hive",
  },
  {
    id: "polylastic",
    symbol: "polx",
    name: "Polylastic",
  },
  {
    id: "polylauncher",
    symbol: "angel",
    name: "Polylauncher",
  },
  {
    id: "polymath",
    symbol: "poly",
    name: "Polymath",
  },
  {
    id: "poly-maximus",
    symbol: "poly",
    name: "POLY Maximus",
  },
  {
    id: "polymesh",
    symbol: "polyx",
    name: "Polymesh",
  },
  {
    id: "polypad",
    symbol: "polypad",
    name: "PolyPad",
  },
  {
    id: "poly-peg-mdex",
    symbol: "hmdx",
    name: "Poly-Peg Mdex",
  },
  {
    id: "polypug",
    symbol: "polypug",
    name: "PolyPug",
  },
  {
    id: "polypup",
    symbol: "pup",
    name: "PolyPup",
  },
  {
    id: "polyquity",
    symbol: "pyq",
    name: "PolyQuity",
  },
  {
    id: "polyquity-dollar",
    symbol: "pyd",
    name: "PolyQuity Dollar",
  },
  {
    id: "polyroll",
    symbol: "roll",
    name: "Polyroll",
  },
  {
    id: "polysage",
    symbol: "sage",
    name: "Polysage",
  },
  {
    id: "polyshark-finance",
    symbol: "shark",
    name: "PolyShark Finance",
  },
  {
    id: "polyshield",
    symbol: "shi3ld",
    name: "PolyShield",
  },
  {
    id: "polysports",
    symbol: "ps1",
    name: "POLYSPORTS",
  },
  {
    id: "polyswarm",
    symbol: "nct",
    name: "PolySwarm",
  },
  {
    id: "polytrade",
    symbol: "trade",
    name: "Polytrade",
  },
  {
    id: "polywhale",
    symbol: "krill",
    name: "Polywhale",
  },
  {
    id: "polywolf",
    symbol: "moon",
    name: "Polywolf",
  },
  {
    id: "polyx",
    symbol: "pxt",
    name: "POLYX",
  },
  {
    id: "polyyeld-token",
    symbol: "yeld",
    name: "PolyYeld",
  },
  {
    id: "polyyield-token",
    symbol: "yield",
    name: "PolyYield",
  },
  {
    id: "polyyork",
    symbol: "york",
    name: "PolyYork",
  },
  {
    id: "polyzap",
    symbol: "pzap",
    name: "PolyZap",
  },
  {
    id: "pomeranian",
    symbol: "pom",
    name: "Pomeranian",
  },
  {
    id: "pomeranian-eth",
    symbol: "pom",
    name: "Pomeranian ETH",
  },
  {
    id: "pomerium",
    symbol: "pmr",
    name: "Pomerium",
  },
  {
    id: "pomi",
    symbol: "pomi",
    name: "Pomi",
  },
  {
    id: "pomo",
    symbol: "pomo",
    name: "Pomo",
  },
  {
    id: "pompom",
    symbol: "pom",
    name: "PomPom",
  },
  {
    id: "pontem-network",
    symbol: "pont",
    name: "Pontem Network",
  },
  {
    id: "pontoon",
    symbol: "toon",
    name: "Pontoon",
  },
  {
    id: "ponydao",
    symbol: "pnyd",
    name: "PonyDAO",
  },
  {
    id: "pony-index",
    symbol: "pony",
    name: "PONY Index",
  },
  {
    id: "ponzicoin",
    symbol: "ponzi",
    name: "PonziCoin",
  },
  {
    id: "pooch",
    symbol: "pooch",
    name: "Pooch",
  },
  {
    id: "poochain",
    symbol: "poop",
    name: "Poochain",
  },
  {
    id: "poocoin",
    symbol: "poocoin",
    name: "PooCoin",
  },
  {
    id: "poodle",
    symbol: "poodl",
    name: "Poodl",
  },
  {
    id: "poodlefi",
    symbol: "pfi",
    name: "PoodleFi",
  },
  {
    id: "poo-doge",
    symbol: "poo doge",
    name: "Poo Doge",
  },
  {
    id: "poofcash",
    symbol: "poof",
    name: "PoofCash",
  },
  {
    id: "poogrow",
    symbol: "poogrow",
    name: "PooGrow",
  },
  {
    id: "poolcoin",
    symbol: "pool",
    name: "POOLCOIN",
  },
  {
    id: "poollotto-finance",
    symbol: "plt",
    name: "Poollotto.finance",
  },
  {
    id: "pool-party",
    symbol: "pp",
    name: "Pool Party",
  },
  {
    id: "pooltogether",
    symbol: "pool",
    name: "PoolTogether",
  },
  {
    id: "pool-token",
    symbol: "pool",
    name: "Pool",
  },
  {
    id: "poolz-finance",
    symbol: "poolz",
    name: "Poolz Finance",
  },
  {
    id: "poomoon",
    symbol: "poo",
    name: "POOMOON",
  },
  {
    id: "poopcoin",
    symbol: "poop",
    name: "PoopCoin",
  },
  {
    id: "poopsicle",
    symbol: "poop",
    name: "Poopsicle",
  },
  {
    id: "poordoge",
    symbol: "poordoge",
    name: "PoorDoge",
  },
  {
    id: "poorpleb",
    symbol: "pp",
    name: "PoorPleb",
  },
  {
    id: "poor-quack",
    symbol: "poor",
    name: "Poor Quack",
  },
  {
    id: "pop",
    symbol: "pop!",
    name: "POP",
  },
  {
    id: "pop-chest-token",
    symbol: "pop",
    name: "POP Network",
  },
  {
    id: "popcoin",
    symbol: "pop",
    name: "Popcoin",
  },
  {
    id: "popcorn",
    symbol: "pop",
    name: "Popcorn",
  },
  {
    id: "popkon",
    symbol: "popk",
    name: "POPKON",
  },
  {
    id: "populous",
    symbol: "ppt",
    name: "Populous",
  },
  {
    id: "populous-xbrl-token",
    symbol: "pxt",
    name: "Populous XBRL",
  },
  {
    id: "poriverse",
    symbol: "riken",
    name: "Poriverse",
  },
  {
    id: "porkswap",
    symbol: "pswap",
    name: "PorkSwap",
  },
  {
    id: "pornrocket",
    symbol: "pornrocket",
    name: "PornRocket",
  },
  {
    id: "porta",
    symbol: "kian",
    name: "Porta",
  },
  {
    id: "portals-ivory-index",
    symbol: "ivry",
    name: "Portals Ivory Index",
  },
  {
    id: "porte-token",
    symbol: "porte",
    name: "Porte",
  },
  {
    id: "port-finance",
    symbol: "port",
    name: "Port Finance",
  },
  {
    id: "portify",
    symbol: "pfy",
    name: "Portify",
  },
  {
    id: "portion",
    symbol: "prt",
    name: "Portion",
  },
  {
    id: "portugal-national-team-fan-token",
    symbol: "por",
    name: "Portugal National Team Fan Token",
  },
  {
    id: "portuma",
    symbol: "por",
    name: "Portuma",
  },
  {
    id: "pos-32",
    symbol: "pos32",
    name: "PoS-32",
  },
  {
    id: "pos-coin",
    symbol: "pos",
    name: "POS Coin",
  },
  {
    id: "poseidon-2",
    symbol: "psdn",
    name: "Poseidon",
  },
  {
    id: "poseidon-finance",
    symbol: "psdn",
    name: "Poseidon Finance",
  },
  {
    id: "poseidon-ocean",
    symbol: "psdnocean",
    name: "Poseidon OCEAN",
  },
  {
    id: "position-token",
    symbol: "posi",
    name: "Position",
  },
  {
    id: "positron-token",
    symbol: "pot",
    name: "Positron",
  },
  {
    id: "posschain",
    symbol: "poss",
    name: "Posschain",
  },
  {
    id: "postcoin",
    symbol: "post",
    name: "PostCoin",
  },
  {
    id: "posthuman",
    symbol: "phmn",
    name: "POSTHUMAN",
  },
  {
    id: "potato",
    symbol: "potato",
    name: "Potato",
  },
  {
    id: "potcoin",
    symbol: "pot",
    name: "Potcoin",
  },
  {
    id: "potent-coin",
    symbol: "ptt",
    name: "Potent Coin",
  },
  {
    id: "potentiam",
    symbol: "ptm",
    name: "Potentiam",
  },
  {
    id: "poundtoken",
    symbol: "gbpt",
    name: "poundtoken",
  },
  {
    id: "powabit",
    symbol: "powa",
    name: "Powabit",
  },
  {
    id: "pow-doge",
    symbol: "dogw",
    name: "PoW Doge",
  },
  {
    id: "powerfan",
    symbol: "pfan",
    name: "PowerFan",
  },
  {
    id: "powerful",
    symbol: "pwfl",
    name: "Powerful",
  },
  {
    id: "power-index-pool-token",
    symbol: "pipt",
    name: "Power Index Pool",
  },
  {
    id: "power-ledger",
    symbol: "powr",
    name: "Power Ledger",
  },
  {
    id: "power-nodes",
    symbol: "power",
    name: "Power Nodes",
  },
  {
    id: "power-of-deep-ocean",
    symbol: "podo",
    name: "Power Of Deep Ocean",
  },
  {
    id: "powerswap",
    symbol: "power",
    name: "PowerSwap",
  },
  {
    id: "powertrade-fuel",
    symbol: "ptf",
    name: "PowerTrade Fuel",
  },
  {
    id: "power-vault",
    symbol: "powv",
    name: "Power Vault",
  },
  {
    id: "powerzilla",
    symbol: "powerzilla",
    name: "PowerZilla",
  },
  {
    id: "powpad",
    symbol: "pp",
    name: "Powpad",
  },
  {
    id: "powsea",
    symbol: "sea",
    name: "PowSea",
  },
  {
    id: "powswap",
    symbol: "pow",
    name: "Powswap",
  },
  {
    id: "pqbert",
    symbol: "pqbert",
    name: "pQBERT",
  },
  {
    id: "pray",
    symbol: "pray",
    name: "PRAY TOKEN",
  },
  {
    id: "prcy-coin",
    symbol: "prcy",
    name: "PRivaCY Coin",
  },
  {
    id: "predictcoin",
    symbol: "pred",
    name: "Predictcoin",
  },
  {
    id: "prelax",
    symbol: "peax",
    name: "Prelax",
  },
  {
    id: "prema",
    symbol: "prmx",
    name: "PREMA",
  },
  {
    id: "premia",
    symbol: "premia",
    name: "Premia",
  },
  {
    id: "premio",
    symbol: "premio",
    name: "Premio",
  },
  {
    id: "prepo",
    symbol: "ppo",
    name: "prePO",
  },
  {
    id: "pre-retogeum",
    symbol: "prtg",
    name: "Pre-Retogeum",
  },
  {
    id: "presaledao",
    symbol: "af-presaledao",
    name: "PresaleDAO",
  },
  {
    id: "presale-world",
    symbol: "presale",
    name: "Presale.World",
  },
  {
    id: "presearch",
    symbol: "pre",
    name: "Presearch",
  },
  {
    id: "primal-2",
    symbol: "prm",
    name: "Primal Network",
  },
  {
    id: "primal-b3099cd0-995a-4311-80d5-9c133153b38e",
    symbol: "primal",
    name: "PRIMAL",
  },
  {
    id: "primas",
    symbol: "pst",
    name: "Primas",
  },
  {
    id: "primate",
    symbol: "primate",
    name: "Primate",
  },
  {
    id: "prime",
    symbol: "d2d",
    name: "Prime",
  },
  {
    id: "prime-chain",
    symbol: "pmc",
    name: "Prime Chain",
  },
  {
    id: "primecoin",
    symbol: "xpm",
    name: "Primecoin",
  },
  {
    id: "prime-dai",
    symbol: "pdai",
    name: "Prime DAI",
  },
  {
    id: "prime-numbers",
    symbol: "prnt",
    name: "Prime Numbers",
  },
  {
    id: "primex-finance",
    symbol: "pmx",
    name: "Primex Finance",
  },
  {
    id: "prime-xi",
    symbol: "pxi",
    name: "Prime-XI",
  },
  {
    id: "primo-dao",
    symbol: "primo",
    name: "Primo DAO",
  },
  {
    id: "princess-striker-gem",
    symbol: "prsg",
    name: "Princess Striker Gem",
  },
  {
    id: "prism",
    symbol: "prism",
    name: "Prism",
  },
  {
    id: "prism-cluna",
    symbol: "cluna",
    name: "Prism cLUNA",
  },
  {
    id: "prism-governance-token",
    symbol: "xprism",
    name: "Prism Governance",
  },
  {
    id: "prism-protocol",
    symbol: "prism",
    name: "Prism Protocol",
  },
  {
    id: "prism-yluna",
    symbol: "yluna",
    name: "Prism yLUNA",
  },
  {
    id: "privacoin",
    symbol: "prvc",
    name: "PrivaCoin",
  },
  {
    id: "privacyswap",
    symbol: "prv",
    name: "PrivacySwap",
  },
  {
    id: "privapp-network",
    symbol: "bpriva",
    name: "Privapp Network",
  },
  {
    id: "privateum",
    symbol: "pri",
    name: "Privateum",
  },
  {
    id: "privatix",
    symbol: "prix",
    name: "Privatix",
  },
  {
    id: "privcy",
    symbol: "priv",
    name: "PRiVCY",
  },
  {
    id: "privilege",
    symbol: "prvg",
    name: "Privilege",
  },
  {
    id: "prizm",
    symbol: "pzm",
    name: "Prizm",
  },
  {
    id: "prntr",
    symbol: "prntr",
    name: "PRNTR",
  },
  {
    id: "probably-nothing",
    symbol: "prbly",
    name: "Probably Nothing",
  },
  {
    id: "probinex",
    symbol: "pbx",
    name: "Probinex",
  },
  {
    id: "probit-exchange",
    symbol: "prob",
    name: "Probit",
  },
  {
    id: "professional-fighters-league-fan-token",
    symbol: "pfl",
    name: "Professional Fighters League Fan Token",
  },
  {
    id: "project202",
    symbol: "p202",
    name: "Project 202",
  },
  {
    id: "project21",
    symbol: "p21",
    name: "Project21",
  },
  {
    id: "project-babel",
    symbol: "pbt",
    name: "Project Babel",
  },
  {
    id: "project-carecoin",
    symbol: "caresv2",
    name: "Project CareCoin",
  },
  {
    id: "projectfeenixv2",
    symbol: "feenixv2",
    name: "ProjectFeenixv2",
  },
  {
    id: "project-galaxy",
    symbol: "gal",
    name: "Galxe",
  },
  {
    id: "project-inverse",
    symbol: "xiv",
    name: "Planet Inverse",
  },
  {
    id: "projectmars",
    symbol: "mars",
    name: "ProjectMars",
  },
  {
    id: "project-oasis",
    symbol: "oasis",
    name: "ProjectOasis",
  },
  {
    id: "project-quantum",
    symbol: "qbit",
    name: "Project Quantum",
  },
  {
    id: "project-with",
    symbol: "wiken",
    name: "Project WITH",
  },
  {
    id: "projectx",
    symbol: "xil",
    name: "Xillion",
  },
  {
    id: "project-x",
    symbol: "nanox",
    name: "Project-X",
  },
  {
    id: "projekt-gold",
    symbol: "gold",
    name: "Projekt Gold",
  },
  {
    id: "prometeus",
    symbol: "prom",
    name: "Prom",
  },
  {
    id: "prometheus",
    symbol: "phi",
    name: "Prometheus",
  },
  {
    id: "prometheus-token",
    symbol: "pro",
    name: "Peak Finance Prometheus",
  },
  {
    id: "promise-token",
    symbol: "promise",
    name: "Promise",
  },
  {
    id: "promodio",
    symbol: "pmd",
    name: "Promodio",
  },
  {
    id: "promo-swipe-coin",
    symbol: "psc",
    name: "Promo Swipe Coin",
  },
  {
    id: "proof-of-apes",
    symbol: "poa",
    name: "Proof Of Apes",
  },
  {
    id: "proof-of-degen",
    symbol: "bnb2.0",
    name: "Proof of Degen",
  },
  {
    id: "proof-of-liquidity",
    symbol: "pol",
    name: "Proof Of Liquidity",
  },
  {
    id: "proof-of-memes",
    symbol: "eth2.0",
    name: "Proof Of Memes - Ethereum",
  },
  {
    id: "proof-of-memes-pomchain",
    symbol: "pom",
    name: "Proof Of Memes",
  },
  {
    id: "propel-token",
    symbol: "pel",
    name: "Propel PEL",
  },
  {
    id: "property-blockchain-trade",
    symbol: "pbt",
    name: "PROPERTY BLOCKCHAIN TRADE",
  },
  {
    id: "prophet",
    symbol: "pro",
    name: "Prophet",
  },
  {
    id: "propland",
    symbol: "prop",
    name: "Propland",
  },
  {
    id: "props",
    symbol: "props",
    name: "Props",
  },
  {
    id: "propy",
    symbol: "pro",
    name: "Propy",
  },
  {
    id: "proshares-bitcoin-strategy-etf",
    symbol: "bito",
    name: "ProShares Bitcoin Strategy ETF",
  },
  {
    id: "prospectorcrane",
    symbol: "crane$",
    name: "ProspectorCrane",
  },
  {
    id: "prosper",
    symbol: "pros",
    name: "Prosper",
  },
  {
    id: "prosperity-gold",
    symbol: "prgd",
    name: "Prosperity Gold",
  },
  {
    id: "prostarter-token",
    symbol: "prot",
    name: "ProStarter",
  },
  {
    id: "protector-roge",
    symbol: "proge",
    name: "Protector Roge",
  },
  {
    id: "protectors-of-the-realm",
    symbol: "wer1",
    name: "Protectors of the Realm",
  },
  {
    id: "proteo",
    symbol: "proteo",
    name: "Proteo",
  },
  {
    id: "proteo-defi",
    symbol: "proteo",
    name: "Proteo DeFi",
  },
  {
    id: "protocol-finance",
    symbol: "pfi",
    name: "Protocol Finance",
  },
  {
    id: "protocol-zero",
    symbol: "zro",
    name: "Protocol Zero",
  },
  {
    id: "protocon",
    symbol: "pen",
    name: "Protocon",
  },
  {
    id: "protofi",
    symbol: "proto",
    name: "Protofi",
  },
  {
    id: "proton",
    symbol: "xpr",
    name: "Proton",
  },
  {
    id: "proton-coin",
    symbol: "pro",
    name: "Proton Coin",
  },
  {
    id: "proton-loan",
    symbol: "loan",
    name: "Proton Loan",
  },
  {
    id: "protoreality-games",
    symbol: "prgc",
    name: "ProtoReality Games",
  },
  {
    id: "provenance-blockchain",
    symbol: "hash",
    name: "Provenance Blockchain",
  },
  {
    id: "province",
    symbol: "maple",
    name: "Province",
  },
  {
    id: "proximax",
    symbol: "xpx",
    name: "ProximaX",
  },
  {
    id: "proxy",
    symbol: "prxy",
    name: "Proxy",
  },
  {
    id: "proxynode",
    symbol: "prx",
    name: "ProxyNode",
  },
  {
    id: "pruf-protocol",
    symbol: "pruf",
    name: "PRüF Protocol",
  },
  {
    id: "pryz",
    symbol: "pryz",
    name: "Pryz",
  },
  {
    id: "pspace",
    symbol: "pspace",
    name: "pSPACE",
  },
  {
    id: "pstake-finance",
    symbol: "pstake",
    name: "pSTAKE Finance",
  },
  {
    id: "pstake-staked-atom",
    symbol: "stkatom",
    name: "pSTAKE Staked ATOM",
  },
  {
    id: "pstake-staked-bnb",
    symbol: "stkbnb",
    name: "pSTAKE Staked BNB",
  },
  {
    id: "pstake-staked-eth",
    symbol: "stketh",
    name: "pSTAKE Staked ETH",
  },
  {
    id: "psule",
    symbol: "sule",
    name: "Sule",
  },
  {
    id: "psyche",
    symbol: "usd1",
    name: "Psyche",
  },
  {
    id: "psycho-doge",
    symbol: "psychodoge",
    name: "Psycho Doge",
  },
  {
    id: "psy-coin",
    symbol: "psy",
    name: "PSY Coin",
  },
  {
    id: "psyoptions",
    symbol: "psy",
    name: "PsyOptions",
  },
  {
    id: "ptokens-btc",
    symbol: "pbtc",
    name: "pTokens BTC [OLD]",
  },
  {
    id: "ptokens-btc-2",
    symbol: "pbtc",
    name: "pTokens BTC",
  },
  {
    id: "ptokens-ore",
    symbol: "ore",
    name: "ORE Network",
  },
  {
    id: "ptx",
    symbol: "ptx",
    name: "ProtocolX",
  },
  {
    id: "pube-finance",
    symbol: "pube",
    name: "Pube Finance",
  },
  {
    id: "pub-finance",
    symbol: "pint",
    name: "Pub Finance",
  },
  {
    id: "public-index-network",
    symbol: "pin",
    name: "Public Index Network",
  },
  {
    id: "public-mint",
    symbol: "mint",
    name: "Public Mint",
  },
  {
    id: "publish",
    symbol: "news",
    name: "PUBLISH",
  },
  {
    id: "puddingswap",
    symbol: "pud",
    name: "PuddingSwap",
  },
  {
    id: "pudgy-vault-nftx",
    symbol: "pudgy",
    name: "PUDGY Vault (NFTX)",
  },
  {
    id: "puff",
    symbol: "puff",
    name: "PUFF",
  },
  {
    id: "puglife",
    symbol: "pugl",
    name: "PugLife",
  },
  {
    id: "puli-inu",
    symbol: "puli",
    name: "Puli",
  },
  {
    id: "pulsar-coin",
    symbol: "plsr",
    name: "Pulsar Coin",
  },
  {
    id: "pulseapecoin",
    symbol: "$plsa",
    name: "PulseApeCoin",
  },
  {
    id: "pulsedoge",
    symbol: "pulsedoge",
    name: "PulseDoge",
  },
  {
    id: "pulsedogecoin",
    symbol: "plsd",
    name: "PulseDogecoin",
  },
  {
    id: "pulsefloki",
    symbol: "plsf",
    name: "PulseFloki",
  },
  {
    id: "pulsemoon",
    symbol: "pulsemoon",
    name: "PulseMoon",
  },
  {
    id: "pulsepad",
    symbol: "plspad",
    name: "PulsePad",
  },
  {
    id: "pulse-token",
    symbol: "pulse",
    name: "PulseMarkets",
  },
  {
    id: "pumapay",
    symbol: "pma",
    name: "PumaPay",
  },
  {
    id: "puml-better-health",
    symbol: "puml",
    name: "PUML Better Health",
  },
  {
    id: "pumlx",
    symbol: "pumlx",
    name: "PUMLx",
  },
  {
    id: "pumpopoly",
    symbol: "pumpopoly",
    name: "Pumpopoly",
  },
  {
    id: "pumptopia",
    symbol: "ptpa",
    name: "Pumptopia",
  },
  {
    id: "pundi-x",
    symbol: "npxs",
    name: "Pundi X [OLD]",
  },
  {
    id: "pundi-x-2",
    symbol: "pundix",
    name: "Pundi X",
  },
  {
    id: "pundi-x-nem",
    symbol: "npxsxem",
    name: "Pundi X NEM",
  },
  {
    id: "pundi-x-purse",
    symbol: "purse",
    name: "Pundi X PURSE",
  },
  {
    id: "punk-panda-messenger",
    symbol: "ppm",
    name: "Punk Panda Messenger",
  },
  {
    id: "punks-comic",
    symbol: "punks",
    name: "PUNKS Comic",
  },
  {
    id: "punks-comic-pow",
    symbol: "pow",
    name: "POW",
  },
  {
    id: "punk-shiba",
    symbol: "punks",
    name: "Punk Shiba",
  },
  {
    id: "punk-vault-nftx",
    symbol: "punk",
    name: "Punk Vault (NFTX)",
  },
  {
    id: "pupazzi-punk-brise-of-sun",
    symbol: "pps",
    name: "Pupazzi Punk Brise Of Sun",
  },
  {
    id: "pup-doge",
    symbol: "pupdoge",
    name: "Pup Doge",
  },
  {
    id: "pupper",
    symbol: "pup",
    name: "Pupper",
  },
  {
    id: "puppets-arts",
    symbol: "puppets",
    name: "Puppets Arts",
  },
  {
    id: "purefi",
    symbol: "ufi",
    name: "PureFi",
  },
  {
    id: "puregold-token",
    symbol: "pgpay",
    name: "PGPay",
  },
  {
    id: "puriever",
    symbol: "pure",
    name: "Puriever",
  },
  {
    id: "purple-butterfly-trading",
    symbol: "pbtt",
    name: "Purple Butterfly Trading",
  },
  {
    id: "purple-floki-inu",
    symbol: "purplefloki",
    name: "Purple Floki Inu",
  },
  {
    id: "purpose",
    symbol: "prps",
    name: "Purpose",
  },
  {
    id: "purr-vault-nftx",
    symbol: "purr",
    name: "PURR Vault (NFTX)",
  },
  {
    id: "pusd",
    symbol: "pusd",
    name: "PUSD_Polyquity",
  },
  {
    id: "pusd-2",
    symbol: "pusd",
    name: "PUSd",
  },
  {
    id: "pussy-financial",
    symbol: "pussy",
    name: "Pussy Financial",
  },
  {
    id: "putincoin",
    symbol: "put",
    name: "PUTinCoin",
  },
  {
    id: "puzzle-and-dragons-x",
    symbol: "padx",
    name: "Puzzle And Dragons X",
  },
  {
    id: "puzzle-swap",
    symbol: "puzzle",
    name: "Puzzle Swap",
  },
  {
    id: "pw-gold",
    symbol: "pwg",
    name: "PW-GOLD",
  },
  {
    id: "pye-2",
    symbol: "pye",
    name: "PYE",
  },
  {
    id: "pylon-eco-token",
    symbol: "petn",
    name: "Pylon Eco",
  },
  {
    id: "pylon-protocol",
    symbol: "mine",
    name: "Pylon Protocol",
  },
  {
    id: "pyram-token",
    symbol: "pyram",
    name: "Pyram",
  },
  {
    id: "pyrexcoin",
    symbol: "gpyx",
    name: "GoldenPyrex",
  },
  {
    id: "pyrk",
    symbol: "pyrk",
    name: "Pyrk",
  },
  {
    id: "pyromatic",
    symbol: "pyro",
    name: "PYROmatic",
  },
  {
    id: "pyrrho-defi",
    symbol: "pyo",
    name: "Pyrrho",
  },
  {
    id: "q2",
    symbol: "q2",
    name: "Pocketful of Quarters",
  },
  {
    id: "q8e20-token",
    symbol: "q8e20",
    name: "Q8E20 Token",
  },
  {
    id: "qanplatform",
    symbol: "qanx",
    name: "QANplatform",
  },
  {
    id: "qao",
    symbol: "&#127760;",
    name: "QAO",
  },
  {
    id: "qash",
    symbol: "qash",
    name: "QASH",
  },
  {
    id: "qatar",
    symbol: "qatar",
    name: "QAtar",
  },
  {
    id: "qatargrow",
    symbol: "qatargrow",
    name: "QatarGrow",
  },
  {
    id: "qatar-inu",
    symbol: "qatar",
    name: "Qatar Inu",
  },
  {
    id: "qatar-inu-token",
    symbol: "qatar",
    name: "Qatar Inu Token",
  },
  {
    id: "qawalla",
    symbol: "qwla",
    name: "Qawalla",
  },
  {
    id: "qbao",
    symbol: "qbt",
    name: "Qbao",
  },
  {
    id: "qchain-qdt",
    symbol: "qdt",
    name: "QChain QDT",
  },
  {
    id: "qchi",
    symbol: "qch",
    name: "QChi",
  },
  {
    id: "q-dao-governance-token-v1-0",
    symbol: "qdao",
    name: "Q DAO Governance v1.0",
  },
  {
    id: "qfora",
    symbol: "quroz",
    name: "Qfora",
  },
  {
    id: "qian-second-generation-dollar",
    symbol: "qsd",
    name: "QIAN Second Generation Dollar",
  },
  {
    id: "qi-dao",
    symbol: "qi",
    name: "Qi Dao",
  },
  {
    id: "qie",
    symbol: "qie",
    name: "QI Blockchain",
  },
  {
    id: "qiswap",
    symbol: "qi",
    name: "QiSwap",
  },
  {
    id: "qitchain-network",
    symbol: "qtc",
    name: "Qitcoin",
  },
  {
    id: "qitmeer-network",
    symbol: "meer",
    name: "Qitmeer Network",
  },
  {
    id: "qlindo",
    symbol: "qlindo",
    name: "QLINDO",
  },
  {
    id: "qlink",
    symbol: "qlc",
    name: "Kepple",
  },
  {
    id: "qmall",
    symbol: "qmall",
    name: "Qmall",
  },
  {
    id: "qmcoin",
    symbol: "qmc",
    name: "QMCoin",
  },
  {
    id: "qobit",
    symbol: "qob",
    name: "Qobit",
  },
  {
    id: "qoiniq",
    symbol: "qiq",
    name: "QoinIQ",
  },
  {
    id: "qommoditya",
    symbol: "qaa",
    name: "Qommodity",
  },
  {
    id: "qowatt",
    symbol: "qwt",
    name: "QoWatt",
  },
  {
    id: "qqq-token",
    symbol: "qqq",
    name: "Poseidon Network",
  },
  {
    id: "qqq-tokenized-stock-defichain",
    symbol: "dqqq",
    name: "Invesco QQQ Trust Defichain",
  },
  {
    id: "qredit",
    symbol: "xqr",
    name: "Qredit",
  },
  {
    id: "qredo",
    symbol: "qrdo",
    name: "Qredo",
  },
  {
    id: "qrkita-token",
    symbol: "qrt",
    name: "Qrkita",
  },
  {
    id: "qroni",
    symbol: "qni",
    name: "Qroni",
  },
  {
    id: "qtoken",
    symbol: "qto",
    name: "Qtoken",
  },
  {
    id: "qtum",
    symbol: "qtum",
    name: "Qtum",
  },
  {
    id: "quadency",
    symbol: "quad",
    name: "Quadency",
  },
  {
    id: "quadrans",
    symbol: "qdt",
    name: "Quadrans",
  },
  {
    id: "quadrant-protocol",
    symbol: "equad",
    name: "Quadrant Protocol",
  },
  {
    id: "quai-dao",
    symbol: "quai",
    name: "Quai Dao",
  },
  {
    id: "quai-network",
    symbol: "quai",
    name: "Quai Network",
  },
  {
    id: "quam-network",
    symbol: "quam",
    name: "Quam Network",
  },
  {
    id: "quannabu",
    symbol: "qbu",
    name: "Quannabu",
  },
  {
    id: "quantfury",
    symbol: "qtf",
    name: "Quantfury",
  },
  {
    id: "quantic",
    symbol: "quantic",
    name: "Quantic",
  },
  {
    id: "quantis",
    symbol: "quan",
    name: "Quantis",
  },
  {
    id: "quantland",
    symbol: "qlt",
    name: "Quantland",
  },
  {
    id: "quant-network",
    symbol: "qnt",
    name: "Quant",
  },
  {
    id: "quantstamp",
    symbol: "qsp",
    name: "Quantstamp",
  },
  {
    id: "quantum-assets",
    symbol: "qa",
    name: "Quantum Assets",
  },
  {
    id: "quantum-resistant-ledger",
    symbol: "qrl",
    name: "Quantum Resistant Ledger",
  },
  {
    id: "quantum-tech",
    symbol: "qua",
    name: "Quantum Tech",
  },
  {
    id: "quarashi",
    symbol: "qua",
    name: "Quarashi",
  },
  {
    id: "quark",
    symbol: "qrk",
    name: "Quark",
  },
  {
    id: "quark-chain",
    symbol: "qkc",
    name: "QuarkChain",
  },
  {
    id: "quartz",
    symbol: "qtz",
    name: "Quartz",
  },
  {
    id: "quasacoin",
    symbol: "qua",
    name: "Quasacoin",
  },
  {
    id: "qube-2",
    symbol: "qube",
    name: "Qube",
  },
  {
    id: "qubit",
    symbol: "qbt",
    name: "Qubit",
  },
  {
    id: "quebecoin",
    symbol: "qbc",
    name: "Quebecoin",
  },
  {
    id: "questra-finance",
    symbol: "qfi",
    name: "QUESTRA FINANCE",
  },
  {
    id: "quick",
    symbol: "quick",
    name: "Quickswap [OLD]",
  },
  {
    id: "quickchart",
    symbol: "quickchart",
    name: "QuickChart",
  },
  {
    id: "quick-mining",
    symbol: "qm",
    name: "Quick Mining",
  },
  {
    id: "quicksilver",
    symbol: "qck",
    name: "Quicksilver",
  },
  {
    id: "quickswap",
    symbol: "quick",
    name: "Quickswap",
  },
  {
    id: "quick-transfer-coin",
    symbol: "qtc",
    name: "Quick Transfer Coin",
  },
  {
    id: "quickx-protocol",
    symbol: "qcx",
    name: "QuickX Protocol",
  },
  {
    id: "quidax",
    symbol: "qdx",
    name: "Quidax",
  },
  {
    id: "quidd",
    symbol: "quidd",
    name: "Quidd",
  },
  {
    id: "quid-ika",
    symbol: "quid",
    name: "Quid Ika",
  },
  {
    id: "quinads",
    symbol: "quin",
    name: "QUINADS",
  },
  {
    id: "quincoin",
    symbol: "qin",
    name: "QUINCOIN",
  },
  {
    id: "quint",
    symbol: "quint",
    name: "Quint",
  },
  {
    id: "quipuswap-governance-token",
    symbol: "quipu",
    name: "QuipuSwap Governance",
  },
  {
    id: "quiverx",
    symbol: "qrx",
    name: "QuiverX",
  },
  {
    id: "quizdrop",
    symbol: "qdrop",
    name: "QuizDrop",
  },
  {
    id: "quiztok",
    symbol: "qtcon",
    name: "Quiztok",
  },
  {
    id: "quo",
    symbol: "quo",
    name: "Quoll Finance",
  },
  {
    id: "quorum",
    symbol: "rum",
    name: "Quorum",
  },
  {
    id: "quoth",
    symbol: "quoth",
    name: "Quoth",
  },
  {
    id: "quotient",
    symbol: "xqn",
    name: "Quotient",
  },
  {
    id: "quras-token",
    symbol: "xqc",
    name: "Quras",
  },
  {
    id: "r34p",
    symbol: "r34p",
    name: "R34P",
  },
  {
    id: "rabbit2023",
    symbol: "rabbit",
    name: "Rabbit2023",
  },
  {
    id: "rabbit-finance",
    symbol: "rabbit",
    name: "Rabbit Finance",
  },
  {
    id: "rabbit-halloween",
    symbol: "rh31",
    name: "Rabbit Halloween",
  },
  {
    id: "rabbitswap",
    symbol: "rabbit",
    name: "RabbitSwap",
  },
  {
    id: "rabona",
    symbol: "ra",
    name: "Rabona",
  },
  {
    id: "rac",
    symbol: "rac",
    name: "RAC",
  },
  {
    id: "racefi",
    symbol: "racefi",
    name: "RaceFi",
  },
  {
    id: "race-kingdom",
    symbol: "atoz",
    name: "Race Kingdom",
  },
  {
    id: "racex",
    symbol: "racex",
    name: "RaceX",
  },
  {
    id: "racing-club-fan-token",
    symbol: "racing",
    name: "Racing Club Fan Token",
  },
  {
    id: "racoon",
    symbol: "rac",
    name: "Racøøn",
  },
  {
    id: "rad",
    symbol: "rad",
    name: "RAD",
  },
  {
    id: "radar",
    symbol: "radar",
    name: "Radar",
  },
  {
    id: "radial-finance",
    symbol: "rdl",
    name: "Radial Finance",
  },
  {
    id: "radiant",
    symbol: "rxd",
    name: "Radiant",
  },
  {
    id: "radiant-capital",
    symbol: "rdnt",
    name: "Radiant Capital",
  },
  {
    id: "radicle",
    symbol: "rad",
    name: "Radicle",
  },
  {
    id: "radio-caca",
    symbol: "raca",
    name: "Radio Caca",
  },
  {
    id: "radio-hero",
    symbol: "raho",
    name: "Radio Hero",
  },
  {
    id: "radioreum",
    symbol: "theradio",
    name: "Radioreum",
  },
  {
    id: "radioshack",
    symbol: "radio",
    name: "RadioShack",
  },
  {
    id: "radium",
    symbol: "val",
    name: "Validity",
  },
  {
    id: "radix",
    symbol: "xrd",
    name: "Radix",
  },
  {
    id: "rae-token",
    symbol: "rae",
    name: "Receive Access Ecosystem",
  },
  {
    id: "rafflet",
    symbol: "raf",
    name: "Rafflet",
  },
  {
    id: "rage-fan",
    symbol: "rage",
    name: "Rage.Fan",
  },
  {
    id: "raggiecoin",
    symbol: "rag",
    name: "RaggieCoin",
  },
  {
    id: "rai",
    symbol: "rai",
    name: "Rai Reflex Index",
  },
  {
    id: "raicoin",
    symbol: "rai",
    name: "Raicoin",
  },
  {
    id: "raiden-network",
    symbol: "rdn",
    name: "Raiden Network",
  },
  {
    id: "raider-aurum",
    symbol: "aurum",
    name: "Raider Aurum",
  },
  {
    id: "raid-token",
    symbol: "raid",
    name: "Raid",
  },
  {
    id: "rai-finance",
    symbol: "sofi",
    name: "RAI Finance",
  },
  {
    id: "railgun",
    symbol: "rail",
    name: "Railgun",
  },
  {
    id: "rail-polygon",
    symbol: "railpoly",
    name: "Rail Polygon",
  },
  {
    id: "rainbowtoken",
    symbol: "rainbowtoken",
    name: "RainbowToken",
  },
  {
    id: "rainbow-token",
    symbol: "rnbw",
    name: "HaloDAO",
  },
  {
    id: "rainbow-token-2",
    symbol: "rbw",
    name: "Crypto Unicorns Rainbow",
  },
  {
    id: "rainicorn",
    symbol: "raini",
    name: "Rainicorn",
  },
  {
    id: "rainmaker-games",
    symbol: "rain",
    name: "Rainmaker Games",
  },
  {
    id: "rainspirit",
    symbol: "rainspirit",
    name: "rainSPIRIT",
  },
  {
    id: "raise-finance",
    symbol: "raise",
    name: "Raise Finance",
  },
  {
    id: "rake-finance",
    symbol: "rak",
    name: "Rake Finance",
  },
  {
    id: "rally-2",
    symbol: "rly",
    name: "Rally",
  },
  {
    id: "rally-solana",
    symbol: "srly",
    name: "Rally (Solana)",
  },
  {
    id: "ramenswap",
    symbol: "ramen",
    name: "RamenSwap",
  },
  {
    id: "ramestta",
    symbol: "rama",
    name: "Ramestta",
  },
  {
    id: "ramifi",
    symbol: "ram",
    name: "Ramifi Protocol",
  },
  {
    id: "ramp",
    symbol: "ramp",
    name: "RAMP [OLD]",
  },
  {
    id: "random",
    symbol: "rndm",
    name: "Random",
  },
  {
    id: "rangers-fan-token",
    symbol: "rft",
    name: "Rangers Fan Token",
  },
  {
    id: "rangers-protocol-gas",
    symbol: "rpg",
    name: "Rangers Protocol",
  },
  {
    id: "rankerdao",
    symbol: "ranker",
    name: "RankerDao",
  },
  {
    id: "ran-x-crypto",
    symbol: "rxc",
    name: "Ran x Crypto",
  },
  {
    id: "rapids",
    symbol: "rpd",
    name: "Rapids",
  },
  {
    id: "rapidz",
    symbol: "rpzx",
    name: "Rapidz",
  },
  {
    id: "raptoreum",
    symbol: "rtm",
    name: "Raptoreum",
  },
  {
    id: "raptor-finance-2",
    symbol: "rptr",
    name: "Raptor Finance",
  },
  {
    id: "rare",
    symbol: "rare",
    name: "Rare",
  },
  {
    id: "rare-ball-shares",
    symbol: "rbp",
    name: "Rare Ball Potion",
  },
  {
    id: "rare-fnd",
    symbol: "fnd",
    name: "Rare FND",
  },
  {
    id: "raresama",
    symbol: "poop",
    name: "Raresama",
  },
  {
    id: "rarible",
    symbol: "rari",
    name: "Rarible",
  },
  {
    id: "rari-governance-token",
    symbol: "rgt",
    name: "Rari Governance",
  },
  {
    id: "rasko",
    symbol: "rasko",
    name: "rASKO",
  },
  {
    id: "rasta-finance",
    symbol: "rasta",
    name: "Rasta Finance",
  },
  {
    id: "ratalert-fastfood",
    symbol: "ffood",
    name: "RatAlert FastFood",
  },
  {
    id: "ratboy-bsc",
    symbol: "wentxn",
    name: "RatBoy BSC",
  },
  {
    id: "rate3",
    symbol: "rte",
    name: "Rate3",
  },
  {
    id: "ratecoin",
    symbol: "xra",
    name: "Ratecoin",
  },
  {
    id: "ratio-finance",
    symbol: "ratio",
    name: "Ratio Protocol",
  },
  {
    id: "ratio-stable-coin",
    symbol: "usdr",
    name: "Ratio Stable Coin",
  },
  {
    id: "ratscoin",
    symbol: "rats",
    name: "Ratscoin",
  },
  {
    id: "ratscoin-team-dao",
    symbol: "ratsdao",
    name: "Ratscoin Team Dao",
  },
  {
    id: "ravelin-finance",
    symbol: "rav",
    name: "Ravelin Finance",
  },
  {
    id: "ravencoin",
    symbol: "rvn",
    name: "Ravencoin",
  },
  {
    id: "ravencoin-classic",
    symbol: "rvc",
    name: "Ravencoin Classic",
  },
  {
    id: "raven-dark",
    symbol: "xrd",
    name: "Raven Dark",
  },
  {
    id: "ravendex",
    symbol: "rave",
    name: "Ravendex",
  },
  {
    id: "ravenmoon",
    symbol: "rvm",
    name: "RavenMoon",
  },
  {
    id: "raven-protocol",
    symbol: "raven",
    name: "Raven Protocol",
  },
  {
    id: "rax",
    symbol: "rax",
    name: "RAX",
  },
  {
    id: "raydium",
    symbol: "ray",
    name: "Raydium",
  },
  {
    id: "ray-network",
    symbol: "xray",
    name: "Ray Network",
  },
  {
    id: "rays",
    symbol: "rays",
    name: "RAYS",
  },
  {
    id: "raze-network",
    symbol: "raze",
    name: "Raze Network",
  },
  {
    id: "razor-network",
    symbol: "razor",
    name: "Razor Network",
  },
  {
    id: "rbxsamurai",
    symbol: "rbxs",
    name: "RBXSamurai",
  },
  {
    id: "rbx-token",
    symbol: "rbx",
    name: "RBX",
  },
  {
    id: "rccc",
    symbol: "rccc",
    name: "RCCC",
  },
  {
    id: "rc-celta-de-vigo-fan-token",
    symbol: "cft",
    name: "RC Celta de Vigo Fan Token",
  },
  {
    id: "rcd-espanyol-fan-token",
    symbol: "enft",
    name: "RCD Espanyol Fan Token",
  },
  {
    id: "rchain",
    symbol: "rev",
    name: "RChain",
  },
  {
    id: "reach-dao",
    symbol: "$read",
    name: "Reach DAO",
  },
  {
    id: "readfi",
    symbol: "rdf",
    name: "ReadFi",
  },
  {
    id: "readon",
    symbol: "read",
    name: "ReadON",
  },
  {
    id: "realfevr",
    symbol: "fevr",
    name: "RealFevr",
  },
  {
    id: "realfinance-network",
    symbol: "refi",
    name: "Realfinance Network",
  },
  {
    id: "realio-network",
    symbol: "rio",
    name: "Realio",
  },
  {
    id: "realital-metaverse",
    symbol: "reta",
    name: "Realital Metaverse",
  },
  {
    id: "reallink",
    symbol: "real",
    name: "RealLink",
  },
  {
    id: "realliq",
    symbol: "rlq",
    name: "Realliq",
  },
  {
    id: "realm",
    symbol: "realm",
    name: "Realm",
  },
  {
    id: "realmoneyworld",
    symbol: "rmw",
    name: "RealMoneyWorld",
  },
  {
    id: "realms-of-ethernity",
    symbol: "reth",
    name: "Realms of Ethernity",
  },
  {
    id: "realms-of-ruby",
    symbol: "ruby",
    name: "Realms of Ruby",
  },
  {
    id: "real-realm",
    symbol: "real",
    name: "Real Realm",
  },
  {
    id: "realtract",
    symbol: "ret",
    name: "RealTract",
  },
  {
    id: "real-usd",
    symbol: "usdr",
    name: "Real USD",
  },
  {
    id: "realy-metaverse",
    symbol: "real",
    name: "Realy Metaverse",
  },
  {
    id: "reapchain",
    symbol: "reap",
    name: "ReapChain",
  },
  {
    id: "reaper-token",
    symbol: "reaper",
    name: "Reaper",
  },
  {
    id: "rebase-aggregator-capital",
    symbol: "$react",
    name: "Rebase Aggregator Capital",
  },
  {
    id: "rebel-bots",
    symbol: "rbls",
    name: "Rebel Bots",
  },
  {
    id: "rebellion-dao",
    symbol: "reb",
    name: "Rebellion DAO",
  },
  {
    id: "rebellion-protocol",
    symbol: "rebl",
    name: "Rebellion Protocol",
  },
  {
    id: "rebeltradertoken",
    symbol: "rtt",
    name: "RebelTrader",
  },
  {
    id: "rebit",
    symbol: "keyt",
    name: "Rebit",
  },
  {
    id: "reborn",
    symbol: "rb",
    name: "REBorn",
  },
  {
    id: "rebus",
    symbol: "rebus",
    name: "Rebus",
  },
  {
    id: "recast1",
    symbol: "r1",
    name: "Recast1",
  },
  {
    id: "recession-coin",
    symbol: "econ",
    name: "Recession Coin",
  },
  {
    id: "recharge",
    symbol: "rcg",
    name: "Recharge",
  },
  {
    id: "recharge-finance",
    symbol: "r3fi",
    name: "Recharge Finance",
  },
  {
    id: "recovery-right-token",
    symbol: "rrt",
    name: "Recovery Right",
  },
  {
    id: "recycle-x",
    symbol: "rcx",
    name: "Recycle-X",
  },
  {
    id: "recycling-cyc",
    symbol: "cyc",
    name: "Recycling CYC",
  },
  {
    id: "red",
    symbol: "red",
    name: "Red",
  },
  {
    id: "redacted",
    symbol: "btrfly",
    name: "Redacted",
  },
  {
    id: "redacted-money",
    symbol: "red",
    name: "Redacted Money",
  },
  {
    id: "redancoin",
    symbol: "redan",
    name: "REDANCOIN",
  },
  {
    id: "reddcoin",
    symbol: "rdd",
    name: "Reddcoin",
  },
  {
    id: "redfeg",
    symbol: "redfeg",
    name: "RedFeg",
  },
  {
    id: "redfireants",
    symbol: "rants",
    name: "redFireAnts",
  },
  {
    id: "redfox-labs-2",
    symbol: "rfox",
    name: "RFOX",
  },
  {
    id: "redi",
    symbol: "redi",
    name: "REDi",
  },
  {
    id: "red-kishu",
    symbol: "redkishu",
    name: "Red Kishu",
  },
  {
    id: "redlight-chain",
    symbol: "redlc",
    name: "Redlight Chain",
  },
  {
    id: "redlight-node-district",
    symbol: "playmates",
    name: "Redlight Node District",
  },
  {
    id: "redluna",
    symbol: "redluna",
    name: "Redluna",
  },
  {
    id: "redmars",
    symbol: "rmars",
    name: "REDMARS",
  },
  {
    id: "redpanda-earth-v2",
    symbol: "redpanda",
    name: "RedPanda Earth V2",
  },
  {
    id: "red-pill",
    symbol: "rpp",
    name: "Red Pill",
  },
  {
    id: "redpill-2",
    symbol: "rpill",
    name: "RedPill",
  },
  {
    id: "red-pulse",
    symbol: "phb",
    name: "Phoenix Global [OLD]",
  },
  {
    id: "red-shiba-token",
    symbol: "rst",
    name: "Red Shiba",
  },
  {
    id: "redstone",
    symbol: "redstone",
    name: "RedStone",
  },
  {
    id: "red-token",
    symbol: "red",
    name: "RED TOKEN",
  },
  {
    id: "redux-protocol",
    symbol: "rdx",
    name: "Redux Protocol",
  },
  {
    id: "reef",
    symbol: "reef",
    name: "Reef",
  },
  {
    id: "reesykle",
    symbol: "sycle",
    name: "Reesykle",
  },
  {
    id: "refereum",
    symbol: "rfr",
    name: "Refereum",
  },
  {
    id: "ref-finance",
    symbol: "ref",
    name: "Ref Finance",
  },
  {
    id: "refi",
    symbol: "refi",
    name: "Reimagined Finance",
  },
  {
    id: "refinable",
    symbol: "fine",
    name: "Refinable",
  },
  {
    id: "reflect-finance",
    symbol: "rfi",
    name: "reflect.finance",
  },
  {
    id: "reflecto",
    symbol: "rto",
    name: "Reflecto",
  },
  {
    id: "reflecto-usd",
    symbol: "rusd",
    name: "Reflecto USD",
  },
  {
    id: "reflex",
    symbol: "rfx",
    name: "Reflex",
  },
  {
    id: "reflexer-ungovernance-token",
    symbol: "flx",
    name: "Reflexer Ungovernance",
  },
  {
    id: "reflex-finance-v2",
    symbol: "reflex",
    name: "Reflex Finance V2",
  },
  {
    id: "reforestation-mahogany",
    symbol: "rmog",
    name: "Reforestation Mahogany",
  },
  {
    id: "reftoken",
    symbol: "ref",
    name: "Ref",
  },
  {
    id: "refugees-token",
    symbol: "$rfg",
    name: "Refugees",
  },
  {
    id: "regen",
    symbol: "regen",
    name: "Regen",
  },
  {
    id: "regularpresale",
    symbol: "regu",
    name: "RegularPresale",
  },
  {
    id: "rei-network",
    symbol: "rei",
    name: "REI Network",
  },
  {
    id: "relaxable",
    symbol: "relax",
    name: "Relaxable",
  },
  {
    id: "relay-token",
    symbol: "relay",
    name: "Relay Chain",
  },
  {
    id: "release-ico-project",
    symbol: "rel",
    name: "RELEASE",
  },
  {
    id: "relevant",
    symbol: "rel",
    name: "Relevant",
  },
  {
    id: "relic",
    symbol: "relic",
    name: "Relic",
  },
  {
    id: "relictumpro-genesis-token",
    symbol: "gtn",
    name: "RelictumPro Genesis Token",
  },
  {
    id: "relite-finance",
    symbol: "reli",
    name: "Relite Finance",
  },
  {
    id: "reltime",
    symbol: "rtc",
    name: "Reltime",
  },
  {
    id: "rematicegc",
    symbol: "rmtx",
    name: "RematicEGC",
  },
  {
    id: "remex",
    symbol: "rmx",
    name: "RemeX",
  },
  {
    id: "remi",
    symbol: "remi",
    name: "REMI",
  },
  {
    id: "remme",
    symbol: "rem",
    name: "Remme",
  },
  {
    id: "rena-finance",
    symbol: "rena",
    name: "RENA Finance",
  },
  {
    id: "renbch",
    symbol: "renbch",
    name: "renBCH",
  },
  {
    id: "renbtc",
    symbol: "renbtc",
    name: "renBTC",
  },
  {
    id: "render-token",
    symbol: "rndr",
    name: "Render",
  },
  {
    id: "rendoge",
    symbol: "rendoge",
    name: "renDOGE",
  },
  {
    id: "renewable-energy",
    symbol: "ret",
    name: "Renewable Energy",
  },
  {
    id: "renfil",
    symbol: "renfil",
    name: "renFIL",
  },
  {
    id: "renrenbit",
    symbol: "rrb",
    name: "Renrenbit",
  },
  {
    id: "rens",
    symbol: "rens",
    name: "Rens",
  },
  {
    id: "rentberry",
    symbol: "berry",
    name: "Rentberry",
  },
  {
    id: "rentible",
    symbol: "rnb",
    name: "Rentible",
  },
  {
    id: "renzec",
    symbol: "renzec",
    name: "renZEC",
  },
  {
    id: "repo",
    symbol: "repo",
    name: "Repo Coin",
  },
  {
    id: "represent",
    symbol: "rpt",
    name: "Represent",
  },
  {
    id: "reptilian",
    symbol: "rptc",
    name: "Reptilian",
  },
  {
    id: "republic-credits",
    symbol: "rpc",
    name: "Republic Credits",
  },
  {
    id: "republic-protocol",
    symbol: "ren",
    name: "REN",
  },
  {
    id: "request-network",
    symbol: "req",
    name: "Request",
  },
  {
    id: "researchcoin",
    symbol: "rsc",
    name: "ResearchCoin",
  },
  {
    id: "reserve",
    symbol: "rsv",
    name: "Reserve",
  },
  {
    id: "reserve-rights-token",
    symbol: "rsr",
    name: "Reserve Rights",
  },
  {
    id: "resfinex-token",
    symbol: "res",
    name: "Resfinex Token",
  },
  {
    id: "resource-protocol",
    symbol: "source",
    name: "ReSource Protocol",
  },
  {
    id: "restore-truth-token",
    symbol: "rtt",
    name: "Restore Truth",
  },
  {
    id: "retawars-goldrose-token",
    symbol: "grt",
    name: "Retawars GoldRose Token",
  },
  {
    id: "retawatch",
    symbol: "rtw",
    name: "RETAWATCH",
  },
  {
    id: "reth",
    symbol: "reth",
    name: "rETH",
  },
  {
    id: "reth2",
    symbol: "reth2",
    name: "rETH2",
  },
  {
    id: "retire-token",
    symbol: "retire",
    name: "Retire",
  },
  {
    id: "retrocade",
    symbol: "rc",
    name: "RetroCade",
  },
  {
    id: "retromoon",
    symbol: "retro",
    name: "Retromoon",
  },
  {
    id: "retsuko",
    symbol: "suko",
    name: "Retsuko",
  },
  {
    id: "rev3al",
    symbol: "rev3l",
    name: "REV3AL",
  },
  {
    id: "revain",
    symbol: "rev",
    name: "Revain",
  },
  {
    id: "revault-network",
    symbol: "reva",
    name: "Revault Network",
  },
  {
    id: "revenant",
    symbol: "gamefi",
    name: "Revenant",
  },
  {
    id: "revenue-coin",
    symbol: "rvc",
    name: "Revenue Coin",
  },
  {
    id: "reverse",
    symbol: "rvrs",
    name: "Reverse",
  },
  {
    id: "revest-finance",
    symbol: "rvst",
    name: "Revest Finance",
  },
  {
    id: "review-capital",
    symbol: "recap",
    name: "Review Capital",
  },
  {
    id: "revival",
    symbol: "rvl",
    name: "REVIVAL",
  },
  {
    id: "revivalx",
    symbol: "rvlx",
    name: "RevivalX",
  },
  {
    id: "revive",
    symbol: "rve",
    name: "Revive",
  },
  {
    id: "revoland",
    symbol: "revo",
    name: "Revoland",
  },
  {
    id: "revolotto",
    symbol: "rvl",
    name: "Revolotto",
  },
  {
    id: "revolt",
    symbol: "revt",
    name: "Revolt",
  },
  {
    id: "revolt-2-earn",
    symbol: "rvlt",
    name: "Revolt 2 Earn",
  },
  {
    id: "revolution",
    symbol: "rev",
    name: "Revolution",
  },
  {
    id: "revolutiongames",
    symbol: "rvlng",
    name: "RevolutionGames",
  },
  {
    id: "revolution-populi",
    symbol: "rvp",
    name: "Revolution Populi",
  },
  {
    id: "revoluzion",
    symbol: "rvz",
    name: "Revoluzion",
  },
  {
    id: "revolve-games",
    symbol: "rpg",
    name: "Revolve Games",
  },
  {
    id: "revomon",
    symbol: "revo",
    name: "Revomon",
  },
  {
    id: "revuto",
    symbol: "revu",
    name: "Revuto",
  },
  {
    id: "revv",
    symbol: "revv",
    name: "REVV",
  },
  {
    id: "reward-cycle",
    symbol: "rc",
    name: "Reward Cycle",
  },
  {
    id: "reward-cycle-2",
    symbol: "rc2",
    name: "Reward Cycle 2",
  },
  {
    id: "rewardeum",
    symbol: "reum",
    name: "Rewardeum",
  },
  {
    id: "reward-hunters-token",
    symbol: "rht",
    name: "Reward Hunters",
  },
  {
    id: "rewardiqa",
    symbol: "rew",
    name: "Rewardiqa",
  },
  {
    id: "rewardscoin",
    symbol: "rwsc",
    name: "RewardsCoin",
  },
  {
    id: "rewards-token",
    symbol: "rewards",
    name: "Rewards Token",
  },
  {
    id: "re-water",
    symbol: "wtr",
    name: "re:water",
  },
  {
    id: "rex-token",
    symbol: "xrx",
    name: "Rex",
  },
  {
    id: "rfust",
    symbol: "rfust",
    name: "rfUST",
  },
  {
    id: "rhegic2",
    symbol: "rhegic2",
    name: "rHEGIC2",
  },
  {
    id: "rhinofi",
    symbol: "dvf",
    name: "Rhino.fi",
  },
  {
    id: "rhinos-finance",
    symbol: "rho",
    name: "Rhinos Finance",
  },
  {
    id: "rho-token",
    symbol: "rho",
    name: "Rho",
  },
  {
    id: "rhythm",
    symbol: "rhythm",
    name: "Rhythm",
  },
  {
    id: "ribbit",
    symbol: "ribt",
    name: "Ribbit",
  },
  {
    id: "ribbon-finance",
    symbol: "rbn",
    name: "Ribbon Finance",
  },
  {
    id: "rice",
    symbol: "rice",
    name: "Rice",
  },
  {
    id: "riceswap",
    symbol: "rice",
    name: "RiceSwap",
  },
  {
    id: "rice-wallet",
    symbol: "rice",
    name: "Rice Wallet",
  },
  {
    id: "rich",
    symbol: "rch",
    name: "Rich",
  },
  {
    id: "richcity",
    symbol: "rich",
    name: "RichCity",
  },
  {
    id: "richie",
    symbol: "rich",
    name: "Richie 2.0",
  },
  {
    id: "richierich-coin",
    symbol: "rich",
    name: "RichieRich Coin",
  },
  {
    id: "richochet",
    symbol: "ric",
    name: "Ricochet",
  },
  {
    id: "richquack",
    symbol: "quack",
    name: "Rich Quack",
  },
  {
    id: "rich-santa",
    symbol: "santa",
    name: "Rich Santa",
  },
  {
    id: "richverse",
    symbol: "riv",
    name: "Richverse",
  },
  {
    id: "richway-finance",
    symbol: "rich",
    name: "Richway.Finance",
  },
  {
    id: "rickmortydoxx",
    symbol: "rickmortydoxx",
    name: "RickMortyDoxx",
  },
  {
    id: "ricnatum",
    symbol: "rcnt",
    name: "Ricnatum",
  },
  {
    id: "ride2earn",
    symbol: "rdn",
    name: "Ride2Earn",
  },
  {
    id: "ride_finance",
    symbol: "rides",
    name: "Rides Finance",
  },
  {
    id: "ride-my-car",
    symbol: "ride",
    name: "Ride My Car",
  },
  {
    id: "ride-to-earn",
    symbol: "rd2e",
    name: "Ride To Earn",
  },
  {
    id: "ridge",
    symbol: "ridge",
    name: "Ridge",
  },
  {
    id: "ridotto",
    symbol: "rdt",
    name: "Ridotto",
  },
  {
    id: "riecoin",
    symbol: "ric",
    name: "Riecoin",
  },
  {
    id: "rifi-united",
    symbol: "ru",
    name: "RIFI United",
  },
  {
    id: "rif-token",
    symbol: "rif",
    name: "RSK Infrastructure Framework",
  },
  {
    id: "rigel-finance",
    symbol: "rigel",
    name: "Rigel Finance",
  },
  {
    id: "rigel-protocol",
    symbol: "rgp",
    name: "Rigel Protocol",
  },
  {
    id: "rigoblock",
    symbol: "grg",
    name: "RigoBlock",
  },
  {
    id: "rijent-coin",
    symbol: "rtc",
    name: "Rijent Coin",
  },
  {
    id: "rikkei-finance",
    symbol: "rifi",
    name: "Rikkei Finance",
  },
  {
    id: "rimaunangis",
    symbol: "rxt",
    name: "RIMAUNANGIS",
  },
  {
    id: "rin-finance-coin",
    symbol: "rifico",
    name: "Rin Finance Coin",
  },
  {
    id: "ring",
    symbol: "ring",
    name: "Ring",
  },
  {
    id: "ring-financial",
    symbol: "ring",
    name: "RING Financial",
  },
  {
    id: "rio-defi",
    symbol: "rfuel",
    name: "RioDeFi",
  },
  {
    id: "riot-racers",
    symbol: "riot",
    name: "Riot Racers",
  },
  {
    id: "ripae",
    symbol: "pae",
    name: "Ripae",
  },
  {
    id: "ripae-avax",
    symbol: "pavax",
    name: "Ripae AVAX",
  },
  {
    id: "ripae-pbnb",
    symbol: "pbnb",
    name: "Ripae pBNB",
  },
  {
    id: "ripae-pmatic",
    symbol: "pmatic",
    name: "Ripae pMATIC",
  },
  {
    id: "ripio-coin",
    symbol: "rpc",
    name: "Ripio Coin",
  },
  {
    id: "ripio-credit-network",
    symbol: "rcn",
    name: "Ripio Credit Network",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
  },
  {
    id: "ripple-alpha",
    symbol: "xla",
    name: "Ripple Alpha",
  },
  {
    id: "rise",
    symbol: "rise",
    name: "Rise",
  },
  {
    id: "risecoin",
    symbol: "rsc",
    name: "Risecoin",
  },
  {
    id: "risehero",
    symbol: "rise",
    name: "RiseHero",
  },
  {
    id: "rise-of-defenders",
    symbol: "rdr",
    name: "Rise of Defenders",
  },
  {
    id: "rise-of-elves",
    symbol: "roe",
    name: "Rise of Elves",
  },
  {
    id: "rise-of-empire",
    symbol: "roemp",
    name: "Rise Of Empire",
  },
  {
    id: "rise-of-nebula",
    symbol: "ron",
    name: "Rise Of Nebula",
  },
  {
    id: "riseupv2",
    symbol: "riv2",
    name: "RiseUpV2",
  },
  {
    id: "risu",
    symbol: "risu",
    name: "Risu",
  },
  {
    id: "risuchainswap",
    symbol: "rcs",
    name: "RisuChainSwap",
  },
  {
    id: "ritestream",
    symbol: "rite",
    name: "ritestream",
  },
  {
    id: "rito",
    symbol: "rito",
    name: "Rito",
  },
  {
    id: "ri-token",
    symbol: "ri",
    name: "Xiotri RI",
  },
  {
    id: "riverboat",
    symbol: "rib",
    name: "RiverBoat",
  },
  {
    id: "rivrdoge",
    symbol: "rivrdoge",
    name: "RivrDoge",
  },
  {
    id: "rizen-coin",
    symbol: "rzn",
    name: "Rizen Coin (Old)",
  },
  {
    id: "rizespor-token",
    symbol: "rize",
    name: "Rizespor Token",
  },
  {
    id: "rizon",
    symbol: "atolo",
    name: "RIZON",
  },
  {
    id: "rloop",
    symbol: "rloop",
    name: "rLoop",
  },
  {
    id: "rmrk",
    symbol: "rmrk",
    name: "RMRK",
  },
  {
    id: "road",
    symbol: "road",
    name: "ROAD",
  },
  {
    id: "roar-token",
    symbol: "roar",
    name: "SOL Tigers Roar",
  },
  {
    id: "roarts",
    symbol: "roar",
    name: "RoArts",
  },
  {
    id: "robinos",
    symbol: "rbn",
    name: "Robinos",
  },
  {
    id: "robocock-ultra-world",
    symbol: "gken",
    name: "Robocock Ultra World",
  },
  {
    id: "robodoge-coin",
    symbol: "robodoge",
    name: "RoboDoge Coin",
  },
  {
    id: "robofi-token",
    symbol: "vics",
    name: "RoboFi",
  },
  {
    id: "robo-inu-finance",
    symbol: "rbif",
    name: "Robo Inu Finance",
  },
  {
    id: "robonomics-network",
    symbol: "xrt",
    name: "Robonomics Network",
  },
  {
    id: "robonomics-web-services",
    symbol: "rws",
    name: "Robonomics Web Services",
  },
  {
    id: "roboots",
    symbol: "rbo",
    name: "Roboots",
  },
  {
    id: "robot",
    symbol: "robot",
    name: "Robot",
  },
  {
    id: "robotina",
    symbol: "rox",
    name: "Robotina",
  },
  {
    id: "robo-token",
    symbol: "robo",
    name: "Robo",
  },
  {
    id: "robot-warriors",
    symbol: "metabot",
    name: "Robot Warriors",
  },
  {
    id: "robust-token",
    symbol: "rbt",
    name: "Robust",
  },
  {
    id: "rocket-bunny",
    symbol: "bunny",
    name: "Rocket Bunny",
  },
  {
    id: "rocketbusd",
    symbol: "rocketbusd",
    name: "RocketBUSD",
  },
  {
    id: "rocketcoin-2",
    symbol: "rocket",
    name: "RocketCoin",
  },
  {
    id: "rocketdoge",
    symbol: "rd",
    name: "RocketDoge",
  },
  {
    id: "rocketfi",
    symbol: "rocketfi",
    name: "RocketFi",
  },
  {
    id: "rocket-global-coin",
    symbol: "rckc",
    name: "Rocket Global Coin",
  },
  {
    id: "rocket-pool",
    symbol: "rpl",
    name: "Rocket Pool",
  },
  {
    id: "rocket-pool-eth",
    symbol: "reth",
    name: "Rocket Pool ETH",
  },
  {
    id: "rocket-raccoon",
    symbol: "roc",
    name: "Rocket Raccoon",
  },
  {
    id: "rocket-raccoon-v2",
    symbol: "roc",
    name: "Rocket Raccoon V2",
  },
  {
    id: "rockettoken-2",
    symbol: "rktn",
    name: "RocketToken",
  },
  {
    id: "rocketverse",
    symbol: "rkv",
    name: "RocketVerse",
  },
  {
    id: "rocket-video",
    symbol: "rvt",
    name: "Rocket Video",
  },
  {
    id: "rocketx",
    symbol: "rvf",
    name: "RocketX exchange",
  },
  {
    id: "rocki",
    symbol: "rocki",
    name: "Rocki",
  },
  {
    id: "rock-n-rain-coin",
    symbol: "rnrc",
    name: "Rock N Rain Coin",
  },
  {
    id: "rocks-idle-game",
    symbol: "rocks",
    name: "Rocks Idle Game",
  },
  {
    id: "rocky-inu",
    symbol: "rocky",
    name: "Rocky Inu",
  },
  {
    id: "roco-finance",
    symbol: "roco",
    name: "Roco Finance",
  },
  {
    id: "rodeo-coin",
    symbol: "rodeo",
    name: "Rodeo Coin",
  },
  {
    id: "rogan",
    symbol: "rogan",
    name: "Rogan",
  },
  {
    id: "roge",
    symbol: "roge",
    name: "Rogue Doge",
  },
  {
    id: "rogin-ai",
    symbol: "rog",
    name: "ROGin AI",
  },
  {
    id: "rogue-coin",
    symbol: "rogue",
    name: "Rogue Coin",
  },
  {
    id: "roi",
    symbol: "roi",
    name: "5ROI",
  },
  {
    id: "roima-inc",
    symbol: "rmai",
    name: "ROIMA INC",
  },
  {
    id: "rolaz-gold",
    symbol: "rgld",
    name: "Rolaz Gold",
  },
  {
    id: "rollbit-coin",
    symbol: "rlb",
    name: "Rollbit Coin",
  },
  {
    id: "rollium",
    symbol: "rlm",
    name: "MarbleVerse",
  },
  {
    id: "rome",
    symbol: "rome",
    name: "Rome",
  },
  {
    id: "rond",
    symbol: "rond",
    name: "ROND",
  },
  {
    id: "ronin",
    symbol: "ron",
    name: "Ronin",
  },
  {
    id: "ronpaulcoin",
    symbol: "rpc",
    name: "RonPaulCoin",
  },
  {
    id: "roobee",
    symbol: "roobee",
    name: "Roobee",
  },
  {
    id: "rook",
    symbol: "rook",
    name: "Rook",
  },
  {
    id: "rooster-battle",
    symbol: "rice",
    name: "Rooster Battle",
  },
  {
    id: "root",
    symbol: "root",
    name: "Root",
  },
  {
    id: "rootkit",
    symbol: "root",
    name: "Rootkit",
  },
  {
    id: "rootstock",
    symbol: "rbtc",
    name: "Rootstock RSK",
  },
  {
    id: "rope",
    symbol: "$rope",
    name: "Rope",
  },
  {
    id: "rope-token",
    symbol: "rope",
    name: "Rope Token",
  },
  {
    id: "ror-universe",
    symbol: "ror",
    name: "ROR Universe",
  },
  {
    id: "rose",
    symbol: "rose",
    name: "Rose",
  },
  {
    id: "roseon-finance",
    symbol: "rosn",
    name: "Roseon Finance",
  },
  {
    id: "ro-slayers",
    symbol: "slyr",
    name: "RO Slayers",
  },
  {
    id: "rosywhale",
    symbol: "rosy",
    name: "RosyWhale",
  },
  {
    id: "rotharium",
    symbol: "rth",
    name: "Rotharium",
  },
  {
    id: "rotten",
    symbol: "rot",
    name: "Rotten",
  },
  {
    id: "round-dollar",
    symbol: "rd",
    name: "Round Dollar",
  },
  {
    id: "roundrobin-protocol-token",
    symbol: "rrt",
    name: "RoundRobin Protocol",
  },
  {
    id: "round-x",
    symbol: "rndx",
    name: "Round X",
  },
  {
    id: "roush-fenway-racing-fan-token",
    symbol: "roush",
    name: "Roush Fenway Racing Fan Token",
  },
  {
    id: "route",
    symbol: "route",
    name: "Router Protocol",
  },
  {
    id: "rover-inu",
    symbol: "rover",
    name: "Rover Inu",
  },
  {
    id: "rowan-coin",
    symbol: "rwn",
    name: "Rowan Coin",
  },
  {
    id: "roxe",
    symbol: "roc",
    name: "Roxe",
  },
  {
    id: "royalada",
    symbol: "royalada",
    name: "RoyalADA",
  },
  {
    id: "royale",
    symbol: "roya",
    name: "Royale",
  },
  {
    id: "royal-gold",
    symbol: "rgold",
    name: "Royal Gold",
  },
  {
    id: "royal-protocol",
    symbol: "roy",
    name: "Royal Protocol",
  },
  {
    id: "royal-smart-future-token",
    symbol: "rsft",
    name: "ROYAL SMART FUTURE TOKEN",
  },
  {
    id: "rps-league",
    symbol: "rps",
    name: "Rps League",
  },
  {
    id: "rss3",
    symbol: "rss3",
    name: "RSS3",
  },
  {
    id: "rubic",
    symbol: "rbc",
    name: "Rubic",
  },
  {
    id: "rubidium",
    symbol: "rbd",
    name: "Rubidium",
  },
  {
    id: "rubix",
    symbol: "rbt",
    name: "Rubix",
  },
  {
    id: "rublix",
    symbol: "rblx",
    name: "Rublix",
  },
  {
    id: "ruby",
    symbol: "ruby",
    name: "RUBY",
  },
  {
    id: "ruby-cash",
    symbol: "ruby",
    name: "Ruby Cash",
  },
  {
    id: "ruby-currency",
    symbol: "rbc",
    name: "Ruby Currency",
  },
  {
    id: "ruby-play-network",
    symbol: "ruby",
    name: "Ruby Play Network",
  },
  {
    id: "ruff",
    symbol: "ruff",
    name: "Ruff",
  },
  {
    id: "r-u-generous",
    symbol: "rug",
    name: "R U Generous",
  },
  {
    id: "rugpull-prevention",
    symbol: "rugpull",
    name: "Rugpull Prevention",
  },
  {
    id: "rug-radio",
    symbol: "rug",
    name: "RUG RADIO",
  },
  {
    id: "rugzombie",
    symbol: "zmbe",
    name: "RugZombie",
  },
  {
    id: "ruler-protocol",
    symbol: "ruler",
    name: "Ruler Protocol",
  },
  {
    id: "run",
    symbol: "run",
    name: "Run",
  },
  {
    id: "runblox",
    symbol: "rux",
    name: "RunBlox",
  },
  {
    id: "run-burn",
    symbol: "rbt",
    name: "Run&Burn",
  },
  {
    id: "rune",
    symbol: "rune",
    name: "Rune",
  },
  {
    id: "runearner",
    symbol: "runearn",
    name: "RunEarner",
  },
  {
    id: "rune-shards",
    symbol: "rxs",
    name: "Rune Shards",
  },
  {
    id: "run-for-life",
    symbol: "rfl",
    name: "Run For Life",
  },
  {
    id: "runner-land",
    symbol: "rltv2",
    name: "RLTv2",
  },
  {
    id: "run-together",
    symbol: "run",
    name: "Run Together",
  },
  {
    id: "rupee",
    symbol: "rup",
    name: "Rupee",
  },
  {
    id: "rupiah-token",
    symbol: "idrt",
    name: "Rupiah Token",
  },
  {
    id: "rusd",
    symbol: "rusd",
    name: "rUSD",
  },
  {
    id: "rushcoin",
    symbol: "rush",
    name: "RushCoin",
  },
  {
    id: "rutheneum",
    symbol: "rth",
    name: "Rutheneum",
  },
  {
    id: "ruufcoin",
    symbol: "ruuf",
    name: "RuufCoin",
  },
  {
    id: "ruyi",
    symbol: "ruyi",
    name: "Ruyi",
  },
  {
    id: "rxcdnatoken",
    symbol: "dna",
    name: "RxcDna",
  },
  {
    id: "rxcgames",
    symbol: "rxcg",
    name: "RXCGames",
  },
  {
    id: "ryi-unity",
    symbol: "ryiu",
    name: "RYI Unity",
  },
  {
    id: "ryo",
    symbol: "ryo",
    name: "Ryo Currency",
  },
  {
    id: "ryoma",
    symbol: "ryoma",
    name: "Ryoma",
  },
  {
    id: "ryoshis-vision",
    symbol: "ryoshi",
    name: "Ryoshis Vision",
  },
  {
    id: "ryoshi-token",
    symbol: "ryoshi",
    name: "Ryoshi",
  },
  {
    id: "s4fe",
    symbol: "s4f",
    name: "S4FE",
  },
  {
    id: "sabac-warrior",
    symbol: "sw",
    name: "Sabac Warrior",
  },
  {
    id: "sabaka-inu",
    symbol: "sabaka inu",
    name: "Sabaka Inu",
  },
  {
    id: "saber",
    symbol: "sbr",
    name: "Saber",
  },
  {
    id: "sacred-tails",
    symbol: "st",
    name: "Sacred Tails",
  },
  {
    id: "sadbaby-2",
    symbol: "sdby",
    name: "Sadbaby",
  },
  {
    id: "saddle-finance",
    symbol: "sdl",
    name: "Saddle Finance",
  },
  {
    id: "safcoin",
    symbol: "saf",
    name: "SafCoin",
  },
  {
    id: "safe",
    symbol: "safe",
    name: "Safe Token",
  },
  {
    id: "safe-anwang",
    symbol: "safe",
    name: "SAFE(AnWang)",
  },
  {
    id: "safe-baby-shiba",
    symbol: "sbsh",
    name: "Safe Baby Shiba",
  },
  {
    id: "safebank",
    symbol: "safebank",
    name: "SafeBank",
  },
  {
    id: "safebank-token",
    symbol: "sbank",
    name: "SafeBank BSC",
  },
  {
    id: "safebitcoin",
    symbol: "safebtc",
    name: "SafeBitcoin",
  },
  {
    id: "safeblast",
    symbol: "blast",
    name: "SafeBlast",
  },
  {
    id: "safecapital",
    symbol: "scap",
    name: "SafeCapital",
  },
  {
    id: "safecap-token",
    symbol: "sfc",
    name: "SafeCap",
  },
  {
    id: "safechaintoken",
    symbol: "sct",
    name: "Safechain",
  },
  {
    id: "safeclassic",
    symbol: "safeclassic",
    name: "SafeClassic",
  },
  {
    id: "safe-coin-2",
    symbol: "safe",
    name: "SafeCoin",
  },
  {
    id: "safecookie",
    symbol: "safecookie",
    name: "SafeCookie",
  },
  {
    id: "safe-deal",
    symbol: "sfd",
    name: "SafeDeal",
  },
  {
    id: "safedogecoin-v2",
    symbol: "safedoge",
    name: "SafeDogeCoin V2",
  },
  {
    id: "safedollar",
    symbol: "sdo",
    name: "SafeDollar",
  },
  {
    id: "safedollar-shares",
    symbol: "sds",
    name: "SafeDollar Shares",
  },
  {
    id: "safe-drive",
    symbol: "drive",
    name: "Safe Drive",
  },
  {
    id: "safe-earn",
    symbol: "safearn",
    name: "Safe Earn",
  },
  {
    id: "safeearth",
    symbol: "safeearth",
    name: "SafeEarth",
  },
  {
    id: "safe-energy",
    symbol: "energyx",
    name: "Safe Energy",
  },
  {
    id: "safegem",
    symbol: "gems",
    name: "Safegem",
  },
  {
    id: "safehamsters",
    symbol: "safehamsters",
    name: "SafeHamsters",
  },
  {
    id: "safe-haven",
    symbol: "sha",
    name: "Safe Haven",
  },
  {
    id: "safeinsure",
    symbol: "sins",
    name: "SafeInsure",
  },
  {
    id: "safelaunch",
    symbol: "sfex",
    name: "SafeLaunch",
  },
  {
    id: "safelcarus",
    symbol: "safeicarus",
    name: "SafeIcarus",
  },
  {
    id: "safemars",
    symbol: "safemars",
    name: "Safemars",
  },
  {
    id: "safemars-protocol",
    symbol: "smars",
    name: "Safemars Protocol",
  },
  {
    id: "safememe",
    symbol: "sme",
    name: "SafeMeme",
  },
  {
    id: "safemoney",
    symbol: "safemoney",
    name: "SafeMoney",
  },
  {
    id: "safemoneybsc",
    symbol: "safemoney",
    name: "SafeMoneyBSC",
  },
  {
    id: "safemoon",
    symbol: "safemoon",
    name: "SafeMoon [OLD]",
  },
  {
    id: "safemoon-1996",
    symbol: "sm96",
    name: "Safemoon 1996",
  },
  {
    id: "safemoon-2",
    symbol: "sfm",
    name: "SafeMoon",
  },
  {
    id: "safemoon-inu",
    symbol: "smi",
    name: "SafeMoon Inu",
  },
  {
    id: "safemoon-swap",
    symbol: "sfms",
    name: "SafeMoon Swap",
  },
  {
    id: "safemoon-zilla",
    symbol: "sfz",
    name: "Safemoon Zilla",
  },
  {
    id: "safenami",
    symbol: "safenami",
    name: "SafeNami",
  },
  {
    id: "safe-nebula",
    symbol: "snb",
    name: "Safe Nebula",
  },
  {
    id: "safepal",
    symbol: "sfp",
    name: "SafePal",
  },
  {
    id: "safepe",
    symbol: "loox",
    name: "SafePe",
  },
  {
    id: "safeplus",
    symbol: "$splusv2",
    name: "SafePlus V2",
  },
  {
    id: "safermoon",
    symbol: "safermoon",
    name: "SAFERMOON",
  },
  {
    id: "safe-seafood-coin",
    symbol: "ssf",
    name: "Safe SeaFood Coin",
  },
  {
    id: "safe-shield",
    symbol: "sfshld",
    name: "Safe Shield",
  },
  {
    id: "safestar",
    symbol: "safestar",
    name: "Safestar",
  },
  {
    id: "safesun",
    symbol: "safesun",
    name: "SafeSun",
  },
  {
    id: "safeswap-online",
    symbol: "swap",
    name: "SafeSwap Online",
  },
  {
    id: "safeswap-token",
    symbol: "ssgtx",
    name: "Safeswap SSGTX",
  },
  {
    id: "safetesla",
    symbol: "safetesla",
    name: "SafeTesla",
  },
  {
    id: "safe-token",
    symbol: "safe",
    name: "Safe",
  },
  {
    id: "safetrees",
    symbol: "trees",
    name: "Safetrees",
  },
  {
    id: "safety",
    symbol: "sft",
    name: "Safety",
  },
  {
    id: "safe-universe",
    symbol: "sfu",
    name: "Safe Universe",
  },
  {
    id: "safewhale",
    symbol: "swhal",
    name: "SafeWhale",
  },
  {
    id: "safewolf",
    symbol: "sw",
    name: "SafeWolf",
  },
  {
    id: "safezone",
    symbol: "safezone",
    name: "SafeZone [OLD]",
  },
  {
    id: "safezone-2",
    symbol: "safezone",
    name: "SafeZone",
  },
  {
    id: "saffron-finance",
    symbol: "sfi",
    name: "saffron.finance",
  },
  {
    id: "safle",
    symbol: "safle",
    name: "Safle",
  },
  {
    id: "safuchain",
    symbol: "safu",
    name: "Safuchain",
  },
  {
    id: "safufide",
    symbol: "safest",
    name: "SafuFide",
  },
  {
    id: "safu-protocol",
    symbol: "safu",
    name: "SAFU Protocol",
  },
  {
    id: "safutitano",
    symbol: "safti",
    name: "SafuTitano",
  },
  {
    id: "safuu",
    symbol: "safuu",
    name: "SAFUU",
  },
  {
    id: "sagaworld",
    symbol: "sagaw",
    name: "SagaWorld",
  },
  {
    id: "saharadao",
    symbol: "mng",
    name: "SaharaDAO",
  },
  {
    id: "sai",
    symbol: "sai",
    name: "Sai",
  },
  {
    id: "sail",
    symbol: "sail",
    name: "SAIL",
  },
  {
    id: "saint-inu",
    symbol: "saint",
    name: "Saint Inu",
  },
  {
    id: "saint-ligne",
    symbol: "stle",
    name: "Saint Ligne",
  },
  {
    id: "saint-token",
    symbol: "saint",
    name: "Saint",
  },
  {
    id: "saitama-inu",
    symbol: "saitama",
    name: "Saitama",
  },
  {
    id: "saitamax",
    symbol: "saitax",
    name: "SaitamaX",
  },
  {
    id: "saitanobi",
    symbol: "saitanobi",
    name: "Saitanobi",
  },
  {
    id: "saitarealty",
    symbol: "srlty",
    name: "SaitaRealty",
  },
  {
    id: "saito",
    symbol: "saito",
    name: "Saito",
  },
  {
    id: "saitoki-inu",
    symbol: "saitoki",
    name: "Saitoki Inu",
  },
  {
    id: "saiyan-inu",
    symbol: "sayan",
    name: "Saiyan Inu",
  },
  {
    id: "sak3",
    symbol: "sak3",
    name: "SAKE",
  },
  {
    id: "sakaryaspor",
    symbol: "skry",
    name: "Sakaryaspor",
  },
  {
    id: "sake-token",
    symbol: "sake",
    name: "SakeSwap",
  },
  {
    id: "sakhalin-husky",
    symbol: "sahu",
    name: "Sakhalin Husky",
  },
  {
    id: "sakura",
    symbol: "sku",
    name: "Sakura",
  },
  {
    id: "sakura-neko",
    symbol: "neko",
    name: "Sakura Neko",
  },
  {
    id: "sakura-planet",
    symbol: "sak",
    name: "Sakura Planet",
  },
  {
    id: "salary",
    symbol: "slr",
    name: "Salary",
  },
  {
    id: "salary-mining",
    symbol: "slrm",
    name: "Salary Mining",
  },
  {
    id: "salmon",
    symbol: "slm",
    name: "Salmon",
  },
  {
    id: "salmonation",
    symbol: "sui",
    name: "Salmonation",
  },
  {
    id: "salo-players",
    symbol: "salo",
    name: "Salo Players",
  },
  {
    id: "salt",
    symbol: "salt",
    name: "SALT",
  },
  {
    id: "saltmarble",
    symbol: "sml",
    name: "Saltmarble",
  },
  {
    id: "salus",
    symbol: "sls",
    name: "SaluS",
  },
  {
    id: "samecoin",
    symbol: "same",
    name: "Samecoin",
  },
  {
    id: "samo-inu",
    symbol: "sinu",
    name: "Samo INU",
  },
  {
    id: "samoyedcoin",
    symbol: "samo",
    name: "Samoyedcoin",
  },
  {
    id: "samsunspor-fan-token",
    symbol: "sam",
    name: "Samsunspor Fan Token",
  },
  {
    id: "samurai-legends",
    symbol: "smg",
    name: "Samurai Legends",
  },
  {
    id: "samusky-token",
    symbol: "samu",
    name: "Samusky",
  },
  {
    id: "sanctum",
    symbol: "sanctum",
    name: "Sanctum",
  },
  {
    id: "sandclock",
    symbol: "quartz",
    name: "Sandclock",
  },
  {
    id: "san-diego-coin",
    symbol: "sand",
    name: "San Diego Coin",
  },
  {
    id: "sandwich-network",
    symbol: "$sandwich",
    name: "Sandwich Network",
  },
  {
    id: "sangkara",
    symbol: "misa",
    name: "Sangkara",
  },
  {
    id: "sanin-inu",
    symbol: "sani",
    name: "Sanin Inu",
  },
  {
    id: "sanji-inu",
    symbol: "sanji",
    name: "Sanji Inu",
  },
  {
    id: "sanliurfaspor-token",
    symbol: "urfa",
    name: "Sanliurfaspor Token",
  },
  {
    id: "sanshu-inu",
    symbol: "sanshu",
    name: "Sanshu Inu",
  },
  {
    id: "santaclaus",
    symbol: "santa",
    name: "Santaclaus",
  },
  {
    id: "santa-coin-2",
    symbol: "santa",
    name: "Santa Coin",
  },
  {
    id: "santa-floki-v2",
    symbol: "hohoho",
    name: "Santa Floki v2.0",
  },
  {
    id: "santa-inu",
    symbol: "saninu",
    name: "Santa Inu",
  },
  {
    id: "santiment-network-token",
    symbol: "san",
    name: "Santiment Network",
  },
  {
    id: "santos-fc-fan-token",
    symbol: "santos",
    name: "Santos FC Fan Token",
  },
  {
    id: "sao-paulo-fc-fan-token",
    symbol: "spfc",
    name: "Sao Paulo FC Fan Token",
  },
  {
    id: "sapchain",
    symbol: "sap",
    name: "Sapchain",
  },
  {
    id: "sapien",
    symbol: "spn",
    name: "Sapien",
  },
  {
    id: "sappchat",
    symbol: "app",
    name: "SappChat",
  },
  {
    id: "sapphire",
    symbol: "sapp",
    name: "Sapphire",
  },
  {
    id: "sarabichain",
    symbol: "sarabi",
    name: "SarabiChain",
  },
  {
    id: "saracens-fan-token",
    symbol: "sarries",
    name: "Saracens Fan Token",
  },
  {
    id: "sarcophagus",
    symbol: "sarco",
    name: "Sarcophagus",
  },
  {
    id: "sashimi",
    symbol: "sashimi",
    name: "Sashimi",
  },
  {
    id: "satelstar",
    symbol: "stsr",
    name: "SatelStar",
  },
  {
    id: "satisfinance",
    symbol: "sat",
    name: "SatisFinance",
  },
  {
    id: "satopay",
    symbol: "stop",
    name: "SatoPay",
  },
  {
    id: "sator",
    symbol: "sao",
    name: "Sator",
  },
  {
    id: "satoshicity",
    symbol: "city",
    name: "SatoshiCity",
  },
  {
    id: "satoshi-island",
    symbol: "stc",
    name: "Satoshi Island",
  },
  {
    id: "satoshi-monsters",
    symbol: "ssm",
    name: "Satoshi Monsters",
  },
  {
    id: "satoshistreetbets",
    symbol: "ssb",
    name: "SatoshiStreetBets",
  },
  {
    id: "satoshiswap-2",
    symbol: "swap",
    name: "SatoshiSwap",
  },
  {
    id: "satozhi",
    symbol: "satoz",
    name: "Satozhi",
  },
  {
    id: "satt",
    symbol: "satt",
    name: "SaTT",
  },
  {
    id: "saturna",
    symbol: "sat",
    name: "Saturna",
  },
  {
    id: "saucerswap",
    symbol: "sauce",
    name: "SaucerSwap",
  },
  {
    id: "saudi-shiba-inu",
    symbol: "saudishib",
    name: "SAUDI SHIBA INU",
  },
  {
    id: "saunafinance-token",
    symbol: "sauna",
    name: "SaunaFinance",
  },
  {
    id: "sav3",
    symbol: "sav3",
    name: "SAV3",
  },
  {
    id: "savage",
    symbol: "savg",
    name: "SAVAGE",
  },
  {
    id: "savanna",
    symbol: "svn",
    name: "Savanna",
  },
  {
    id: "saveanimal",
    symbol: "saveanimal",
    name: "SaveAnimal",
  },
  {
    id: "save-baby-doge",
    symbol: "babydoge",
    name: "Save Baby Doge",
  },
  {
    id: "savebee-farm-honeycomb",
    symbol: "hc",
    name: "SAVEBEE FARM HONEYCOMB",
  },
  {
    id: "savebritney",
    symbol: "sbrt",
    name: "SaveBritney",
  },
  {
    id: "savedroid",
    symbol: "svd",
    name: "Savedroid",
  },
  {
    id: "saveplanetearth",
    symbol: "spe",
    name: "SavePlanetEarth",
  },
  {
    id: "savetheworld",
    symbol: "save",
    name: "SaveTheWorld",
  },
  {
    id: "savix",
    symbol: "svx",
    name: "Savix",
  },
  {
    id: "sawa-crypto",
    symbol: "sawa",
    name: "SAWA Crypto",
  },
  {
    id: "sax-token",
    symbol: "sax",
    name: "IdleStoneage SAX",
  },
  {
    id: "saylor-moon",
    symbol: "smoon",
    name: "SaylorMoon",
  },
  {
    id: "sbet",
    symbol: "sbet",
    name: "SBET",
  },
  {
    id: "sbf-coin",
    symbol: "sbfc",
    name: "SBF Coin",
  },
  {
    id: "sbtc",
    symbol: "sbtc",
    name: "sBTC",
  },
  {
    id: "sbu-honey",
    symbol: "bhny",
    name: "SBU Honey",
  },
  {
    id: "scalara-nft-index",
    symbol: "nfti",
    name: "Scalara NFT Index",
  },
  {
    id: "scaleswap-token",
    symbol: "sca",
    name: "Scaleswap",
  },
  {
    id: "scallop",
    symbol: "sclp",
    name: "Scallop",
  },
  {
    id: "scalpingcoin",
    symbol: "scalp",
    name: "SCALPingcoin",
  },
  {
    id: "scan-defi",
    symbol: "scan",
    name: "Scan DeFi",
  },
  {
    id: "scanetchain",
    symbol: "swc",
    name: "Scanetchain",
  },
  {
    id: "scarab-finance",
    symbol: "scarab",
    name: "Scarab Finance",
  },
  {
    id: "scarcity",
    symbol: "scx",
    name: "Scarcity",
  },
  {
    id: "scardust",
    symbol: "scard",
    name: "SCARDust",
  },
  {
    id: "scarecrow",
    symbol: "scare",
    name: "ScareCrow",
  },
  {
    id: "scarface-finance",
    symbol: "scar",
    name: "Scarface Finance",
  },
  {
    id: "scarface-lion",
    symbol: "sfl",
    name: "ScarFace Lion",
  },
  {
    id: "scary-bunny",
    symbol: "sb",
    name: "Scary Bunny",
  },
  {
    id: "scaryswap",
    symbol: "scary",
    name: "Scaryswap",
  },
  {
    id: "s-c-corinthians-fan-token",
    symbol: "sccp",
    name: "S.C. Corinthians Fan Token",
  },
  {
    id: "schain-wallet",
    symbol: "scha",
    name: "Schain Wallet",
  },
  {
    id: "schillingcoin",
    symbol: "sch",
    name: "Schilling-Coin",
  },
  {
    id: "scholarship-coin",
    symbol: "scho",
    name: "Scholarship Coin",
  },
  {
    id: "schrodinger",
    symbol: "kitty dinger",
    name: "Schrodinger",
  },
  {
    id: "sci-coin",
    symbol: "sci",
    name: "SCI Coin",
  },
  {
    id: "scientia",
    symbol: "scie",
    name: "Scientia",
  },
  {
    id: "scientix",
    symbol: "scix",
    name: "Scientix",
  },
  {
    id: "scifi-index",
    symbol: "scifi",
    name: "SCIFI Index",
  },
  {
    id: "sc-internacional-fan-token",
    symbol: "saci",
    name: "SC Internacional Fan Token",
  },
  {
    id: "scolcoin",
    symbol: "scol",
    name: "Scolcoin",
  },
  {
    id: "sconex",
    symbol: "sconex",
    name: "SCOneX",
  },
  {
    id: "scoobi-doge",
    symbol: "scoobi",
    name: "Scoobi Doge",
  },
  {
    id: "scootercoin",
    symbol: "scoot",
    name: "ScooterCoin",
  },
  {
    id: "scopecoin",
    symbol: "xscp",
    name: "ScopeCoin",
  },
  {
    id: "scopuly-token",
    symbol: "scop",
    name: "Scopuly",
  },
  {
    id: "scorcher",
    symbol: "scor",
    name: "SCORCHER",
  },
  {
    id: "scorefam",
    symbol: "sft",
    name: "Scorefam",
  },
  {
    id: "score-token",
    symbol: "sco",
    name: "Score",
  },
  {
    id: "scotty-beam",
    symbol: "scotty",
    name: "Scotty Beam",
  },
  {
    id: "scouthub",
    symbol: "hub",
    name: "Scouthub",
  },
  {
    id: "scrap",
    symbol: "scrap",
    name: "Scrap",
  },
  {
    id: "scratch",
    symbol: "scratch",
    name: "Scratch",
  },
  {
    id: "scream",
    symbol: "scream",
    name: "Scream",
  },
  {
    id: "scriv",
    symbol: "scriv",
    name: "SCRIV",
  },
  {
    id: "scro",
    symbol: "scroh",
    name: "Scro",
  },
  {
    id: "scroll-token",
    symbol: "xd",
    name: "Data Transaction XD",
  },
  {
    id: "scrooge",
    symbol: "scrooge",
    name: "Scrooge",
  },
  {
    id: "scrooge-junior",
    symbol: "scrooge jr",
    name: "SCROOGE JUNIOR",
  },
  {
    id: "scry-info",
    symbol: "ddd",
    name: "Scry.info",
  },
  {
    id: "scrypta",
    symbol: "lyra",
    name: "Scrypta",
  },
  {
    id: "sculptor",
    symbol: "sculpt",
    name: "Sculptor",
  },
  {
    id: "sdao",
    symbol: "sdao",
    name: "SDAO",
  },
  {
    id: "sea",
    symbol: "sea",
    name: "Sea",
  },
  {
    id: "seachain",
    symbol: "seachain",
    name: "SeaChain",
  },
  {
    id: "seadog-metaverse",
    symbol: "seadog",
    name: "Seadog Metaverse",
  },
  {
    id: "seahorsechain",
    symbol: "seah",
    name: "SeahorseChain",
  },
  {
    id: "sealem-token",
    symbol: "st",
    name: "Sealem",
  },
  {
    id: "seamlessswap-token",
    symbol: "seamless",
    name: "SeamlessSwap",
  },
  {
    id: "seancecircle",
    symbol: "seance",
    name: "SeanceCircle",
  },
  {
    id: "seasy",
    symbol: "seasy",
    name: "SEASY",
  },
  {
    id: "seatlabnft",
    symbol: "seat",
    name: "SeatlabNFT",
  },
  {
    id: "seba",
    symbol: "seba",
    name: "Seba",
  },
  {
    id: "sechain",
    symbol: "snn",
    name: "SeChain",
  },
  {
    id: "secret",
    symbol: "scrt",
    name: "Secret",
  },
  {
    id: "secret-erc20",
    symbol: "wscrt",
    name: "Secret (ERC20)",
  },
  {
    id: "secret-finance",
    symbol: "sefi",
    name: "Secret Finance",
  },
  {
    id: "secretsky-finance",
    symbol: "ssf",
    name: "SecretSky Finance",
  },
  {
    id: "secretum",
    symbol: "ser",
    name: "Secretum",
  },
  {
    id: "secretworld",
    symbol: "ssd",
    name: "SecretWorld",
  },
  {
    id: "secure-cash",
    symbol: "scsx",
    name: "Secure Cash",
  },
  {
    id: "secured-moonrat-token",
    symbol: "smrat",
    name: "Secured MoonRat",
  },
  {
    id: "secured-ship",
    symbol: "ship",
    name: "Secured Ship",
  },
  {
    id: "sedo-pow-token",
    symbol: "sedo",
    name: "SEDO POW",
  },
  {
    id: "seed2need",
    symbol: "silo",
    name: "Seed2Need",
  },
  {
    id: "seedbox",
    symbol: "sbx",
    name: "SeedBox",
  },
  {
    id: "seeded-network",
    symbol: "seeded",
    name: "Seeded Network",
  },
  {
    id: "seeder-finance",
    symbol: "leaf",
    name: "Seeder Finance",
  },
  {
    id: "seedify-fund",
    symbol: "sfund",
    name: "Seedify.fund",
  },
  {
    id: "seedling",
    symbol: "sdln",
    name: "Seedling",
  },
  {
    id: "seedon",
    symbol: "seon",
    name: "Seedon",
  },
  {
    id: "seeds",
    symbol: "seeds",
    name: "Seeds",
  },
  {
    id: "seedswap",
    symbol: "snft",
    name: "SeedSwap",
  },
  {
    id: "seedswap-token",
    symbol: "seed",
    name: "SeedSwap SEED",
  },
  {
    id: "seed-venture",
    symbol: "seed",
    name: "Seed Venture",
  },
  {
    id: "seek-tiger",
    symbol: "sti",
    name: "Seek Tiger",
  },
  {
    id: "seele",
    symbol: "seele",
    name: "Seele",
  },
  {
    id: "seen",
    symbol: "seen",
    name: "SEEN",
  },
  {
    id: "seesaw",
    symbol: "ssw",
    name: "Seesaw",
  },
  {
    id: "seigniorage-shares",
    symbol: "share",
    name: "Seigniorage Shares",
  },
  {
    id: "seiren-games-network",
    symbol: "serg",
    name: "Seiren Games Network",
  },
  {
    id: "sektor-token",
    symbol: "sektor",
    name: "Sektor Token",
  },
  {
    id: "sekuritance",
    symbol: "skrt",
    name: "Sekuritance",
  },
  {
    id: "sekuya",
    symbol: "skuy",
    name: "Sekuya",
  },
  {
    id: "selfbar",
    symbol: "sbar",
    name: "Selfbar",
  },
  {
    id: "selfkey",
    symbol: "key",
    name: "SelfKey",
  },
  {
    id: "semicon1",
    symbol: "smc1",
    name: "semicon1",
  },
  {
    id: "senate",
    symbol: "senate",
    name: "SENATE",
  },
  {
    id: "sendcrypto",
    symbol: "sendc",
    name: "SendCrypto",
  },
  {
    id: "sense",
    symbol: "sense",
    name: "Sense",
  },
  {
    id: "sense4fit",
    symbol: "sfit",
    name: "Sense4FIT",
  },
  {
    id: "sensei",
    symbol: "sensei",
    name: "Sensei",
  },
  {
    id: "sensei-shib",
    symbol: "$sensei",
    name: "Sensei Shib",
  },
  {
    id: "sensi",
    symbol: "sensi",
    name: "Sensi",
  },
  {
    id: "sensitrust",
    symbol: "sets",
    name: "Sensitrust",
  },
  {
    id: "senso",
    symbol: "senso",
    name: "SENSO",
  },
  {
    id: "senspark",
    symbol: "sen",
    name: "Senspark",
  },
  {
    id: "sentiment-token",
    symbol: "sent",
    name: "Sentiment",
  },
  {
    id: "sentinel",
    symbol: "dvpn",
    name: "Sentinel",
  },
  {
    id: "sentinel-chain",
    symbol: "senc",
    name: "Sentinel Chain",
  },
  {
    id: "sentinel-group",
    symbol: "dvpn",
    name: "Sentinel [OLD]",
  },
  {
    id: "sentinel-protocol",
    symbol: "upp",
    name: "Sentinel Protocol",
  },
  {
    id: "sentivate",
    symbol: "sntvt",
    name: "Sentivate",
  },
  {
    id: "sentre",
    symbol: "sntr",
    name: "Sentre",
  },
  {
    id: "seor-network",
    symbol: "seor",
    name: "SEOR Network",
  },
  {
    id: "septillion",
    symbol: "spt",
    name: "Septillion",
  },
  {
    id: "serene",
    symbol: "serene",
    name: "Serene",
  },
  {
    id: "serenity",
    symbol: "seren",
    name: "Serenity",
  },
  {
    id: "serenity-financial",
    symbol: "srnt",
    name: "Serenity Financial",
  },
  {
    id: "serey-coin",
    symbol: "sry",
    name: "Serey Coin",
  },
  {
    id: "serum",
    symbol: "srm",
    name: "Serum",
  },
  {
    id: "serum-ecosystem-token",
    symbol: "seco",
    name: "Serum Ecosystem",
  },
  {
    id: "serum-ser",
    symbol: "ser",
    name: "Serum SER",
  },
  {
    id: "serum-wormhole-from-ethereum",
    symbol: "srmet",
    name: "Serum (Wormhole from Ethereum)",
  },
  {
    id: "sescrt",
    symbol: "sescrt",
    name: "StakeEasy Secret Derivative Token",
  },
  {
    id: "seth",
    symbol: "seth",
    name: "sETH",
  },
  {
    id: "seth2",
    symbol: "seth2",
    name: "sETH2",
  },
  {
    id: "sether",
    symbol: "seth",
    name: "Sether",
  },
  {
    id: "setter-protocol",
    symbol: "set",
    name: "Setter Protocol",
  },
  {
    id: "seur",
    symbol: "seur",
    name: "sEUR",
  },
  {
    id: "severe-rise-games",
    symbol: "srgt",
    name: "Severe Rise Games",
  },
  {
    id: "sewer-rat-social-club-chiz-token",
    symbol: "chiz",
    name: "Sewer Rat Social Club CHIZ Token",
  },
  {
    id: "sexcoin",
    symbol: "sxc",
    name: "Sexcoin",
  },
  {
    id: "sf-capital",
    symbol: "sfcp",
    name: "SF Capital",
  },
  {
    id: "s-finance",
    symbol: "sfg",
    name: "S.Finance",
  },
  {
    id: "sgd-tracker",
    symbol: "blusgd",
    name: "SGD Tracker",
  },
  {
    id: "shabu-shabu",
    symbol: "kobe",
    name: "Shabu Shabu",
  },
  {
    id: "shack",
    symbol: "shack",
    name: "Shack",
  },
  {
    id: "shade-cash",
    symbol: "shade",
    name: "Shade Cash",
  },
  {
    id: "shade-protocol",
    symbol: "shd",
    name: "Shade Protocol",
  },
  {
    id: "shadows",
    symbol: "dows",
    name: "Shadows",
  },
  {
    id: "shadow-token",
    symbol: "shdw",
    name: "Shadow",
  },
  {
    id: "shaggy-token",
    symbol: "shag",
    name: "SHAGGY TOKEN",
  },
  {
    id: "shakita-inu",
    symbol: "shak",
    name: "Shakita Inu",
  },
  {
    id: "shaman",
    symbol: "shaman",
    name: "Shaman",
  },
  {
    id: "shaman-king-inu",
    symbol: "shaman",
    name: "Shaman King Inu [OLD]",
  },
  {
    id: "shambala",
    symbol: "bala",
    name: "Shambala",
  },
  {
    id: "shanum",
    symbol: "shan",
    name: "Shanum",
  },
  {
    id: "shapeshift-fox-token",
    symbol: "fox",
    name: "ShapeShift FOX",
  },
  {
    id: "shard",
    symbol: "shard",
    name: "Shard Coin",
  },
  {
    id: "shard-2",
    symbol: "shard",
    name: "Shard",
  },
  {
    id: "sharder-protocol",
    symbol: "ss",
    name: "Sharder protocol",
  },
  {
    id: "shardeum",
    symbol: "shm",
    name: "Shardeum",
  },
  {
    id: "shardingdao",
    symbol: "shd",
    name: "ShardingDAO",
  },
  {
    id: "shardus",
    symbol: "ult",
    name: "Shardus",
  },
  {
    id: "sharedstake-governance-token",
    symbol: "sgtv2",
    name: "SharedStake Governance v2",
  },
  {
    id: "sharering",
    symbol: "shr",
    name: "Share",
  },
  {
    id: "sharity",
    symbol: "$shari",
    name: "Sharity",
  },
  {
    id: "shark",
    symbol: "shark",
    name: "Shark",
  },
  {
    id: "shar-pei",
    symbol: "sharpei",
    name: "Shar Pei",
  },
  {
    id: "shazu",
    symbol: "shazu",
    name: "Shazu",
  },
  {
    id: "shd-cash",
    symbol: "shdc",
    name: "SHD Cash",
  },
  {
    id: "shebolleth-commerce",
    symbol: "sbecom",
    name: "SheBollETH Commerce",
  },
  {
    id: "sheepasheep",
    symbol: "ylgy",
    name: "SheepAsheep",
  },
  {
    id: "sheeptoken",
    symbol: "sheep",
    name: "Sheep",
  },
  {
    id: "sheesh",
    symbol: "sheesh",
    name: "Sheesh",
  },
  {
    id: "sheesha-finance",
    symbol: "sheesha",
    name: "Sheesha Finance (BEP20)",
  },
  {
    id: "sheesha-finance-erc20",
    symbol: "sheesha",
    name: "Sheesha Finance (ERC20)",
  },
  {
    id: "sheesha-finance-polygon",
    symbol: "msheesha",
    name: "Sheesha Finance Polygon",
  },
  {
    id: "sheesheth",
    symbol: "sheesh",
    name: "SHEESHETH",
  },
  {
    id: "shelby-token",
    symbol: "sby",
    name: "Shelby",
  },
  {
    id: "shelling",
    symbol: "shl",
    name: "Shelling",
  },
  {
    id: "shell-token",
    symbol: "shell",
    name: "Shell",
  },
  {
    id: "shengweihu",
    symbol: "shengweihu",
    name: "Shengweihu",
  },
  {
    id: "shepherd-inu",
    symbol: "sinu",
    name: "Shepherd Inu",
  },
  {
    id: "shera",
    symbol: "shr",
    name: "shera [OLD]",
  },
  {
    id: "shera-2",
    symbol: "shr",
    name: "Shera",
  },
  {
    id: "sherlock",
    symbol: "sher",
    name: "Sherlock",
  },
  {
    id: "sherlock365",
    symbol: "lock",
    name: "Sherlock365",
  },
  {
    id: "shiba-bsc",
    symbol: "shibsc",
    name: "SHIBA BSC",
  },
  {
    id: "shibacash",
    symbol: "shibacash",
    name: "ShibaCash",
  },
  {
    id: "shiba-classic",
    symbol: "shibc",
    name: "Shiba Classic",
  },
  {
    id: "shibacorgi",
    symbol: "shico",
    name: "ShibaCorgi",
  },
  {
    id: "shibadoge",
    symbol: "shibdoge",
    name: "ShibaDoge",
  },
  {
    id: "shiba-dollars",
    symbol: "shibadollars",
    name: "Shiba Dollars",
  },
  {
    id: "shiba-dragon",
    symbol: "shibad",
    name: "Shiba Dragon",
  },
  {
    id: "shiba-elon",
    symbol: "eshib",
    name: "Shiba Elon",
  },
  {
    id: "shibaelonverse",
    symbol: "shibev",
    name: "ShibaElonVerse",
  },
  {
    id: "shiba-evil",
    symbol: "sbe",
    name: "Shiba Evil",
  },
  {
    id: "shiba-fantom",
    symbol: "shiba",
    name: "Shiba Fantom",
  },
  {
    id: "shiba-floki",
    symbol: "floki",
    name: "Shiba Floki Inu",
  },
  {
    id: "shibaforest",
    symbol: "shf",
    name: "ShibaForest",
  },
  {
    id: "shibafriend-nft",
    symbol: "shf",
    name: "Shibafriend NFT",
  },
  {
    id: "shibagalaxy",
    symbol: "shibgx",
    name: "ShibaGalaxy",
  },
  {
    id: "shibagun",
    symbol: "shibgun",
    name: "Shibagun",
  },
  {
    id: "shiba-inu",
    symbol: "shib",
    name: "Shiba Inu",
  },
  {
    id: "shiba-inu-billionaire",
    symbol: "shibib",
    name: "Shiba Inu Billionaire",
  },
  {
    id: "shiba-inu-classic",
    symbol: "shibic",
    name: "SHIBIC",
  },
  {
    id: "shiba-inu-empire",
    symbol: "shibemp",
    name: "Shiba Inu Empire",
  },
  {
    id: "shiba-inu-mother",
    symbol: "shibm",
    name: "Shiba Inu Mother",
  },
  {
    id: "shiba-inu-wormhole",
    symbol: "shib",
    name: "Shiba Inu (Wormhole)",
  },
  {
    id: "shibaken-finance",
    symbol: "shibaken",
    name: "Shibaken Finance",
  },
  {
    id: "shibalana",
    symbol: "shiba",
    name: "Shibalana",
  },
  {
    id: "shiba-light",
    symbol: "shibt",
    name: "Shiba Light",
  },
  {
    id: "shibalite",
    symbol: "shiblite",
    name: "ShibaLite",
  },
  {
    id: "shibamax",
    symbol: "smax",
    name: "ShibaMax",
  },
  {
    id: "shibamon",
    symbol: "shibamon",
    name: "Shibamon",
  },
  {
    id: "shibana",
    symbol: "bana",
    name: "Shibana",
  },
  {
    id: "shibanft",
    symbol: "shibanft",
    name: "ShibaNFT",
  },
  {
    id: "shibanova",
    symbol: "nova",
    name: "ShibaNova",
  },
  {
    id: "shiba-predator",
    symbol: "qom",
    name: "Shiba Predator",
  },
  {
    id: "shiba-punkz",
    symbol: "spunk",
    name: "Shiba Punkz",
  },
  {
    id: "shibapup",
    symbol: "shibapup",
    name: "ShibaPup",
  },
  {
    id: "shiba-ramen",
    symbol: "shibaramen",
    name: "Shiba Ramen",
  },
  {
    id: "shib-army",
    symbol: "shibarmy",
    name: "Shib Army",
  },
  {
    id: "shibatsuka",
    symbol: "stsuka",
    name: "ShibaTsuka",
  },
  {
    id: "shiba-universe",
    symbol: "shibu",
    name: "Shiba Universe",
  },
  {
    id: "shibavax",
    symbol: "shibx",
    name: "Shibavax",
  },
  {
    id: "shibaverse",
    symbol: "verse",
    name: "Shibaverse",
  },
  {
    id: "shibaverse-token",
    symbol: "shiver",
    name: "Shibaverse SHIVER",
  },
  {
    id: "shiba-watch",
    symbol: "shibaw",
    name: "Shiba Watch",
  },
  {
    id: "shibaw-inu",
    symbol: "shibaw",
    name: "ShibaW Inu",
  },
  {
    id: "shiba-world-cup",
    symbol: "swc",
    name: "Shiba World Cup",
  },
  {
    id: "shib-cake",
    symbol: "shibcake",
    name: "SHIB CAKE",
  },
  {
    id: "shibchain",
    symbol: "sc",
    name: "ShibChain",
  },
  {
    id: "shibcraft",
    symbol: "shft",
    name: "Shibcraft",
  },
  {
    id: "shibdoge-sc",
    symbol: "shibdoge",
    name: "ShibDoge SC",
  },
  {
    id: "shibelon",
    symbol: "shibelon",
    name: "ShibElon",
  },
  {
    id: "shibgeki",
    symbol: "shibgeki",
    name: "Shibgeki",
  },
  {
    id: "shib-generating",
    symbol: "shg",
    name: "Shib Generating",
  },
  {
    id: "shibgf",
    symbol: "shibgf",
    name: "SHIBGF",
  },
  {
    id: "shibgotchi",
    symbol: "shibgotchi",
    name: "SHiBGOTCHi",
  },
  {
    id: "shibird",
    symbol: "shird",
    name: "Shibird",
  },
  {
    id: "shibkiller",
    symbol: "shibkiller",
    name: "ShibKiller",
  },
  {
    id: "shibmerican",
    symbol: "shibmerican",
    name: "Shibmerican",
  },
  {
    id: "shibmoon-sc",
    symbol: "shibm",
    name: "ShibMoon SC",
  },
  {
    id: "shibnobi",
    symbol: "shinja",
    name: "Shibnobi",
  },
  {
    id: "shiboki-2",
    symbol: "shiboki",
    name: "Shiboki",
  },
  {
    id: "shibonk",
    symbol: "shibo",
    name: "Shibonk",
  },
  {
    id: "shibqueen",
    symbol: "shibqueen",
    name: "ShibQueen",
  },
  {
    id: "shibrobi",
    symbol: "shiborg",
    name: "ShibRobi",
  },
  {
    id: "shibrwd",
    symbol: "srwd",
    name: "ShibRWD",
  },
  {
    id: "shibtama",
    symbol: "shibtama",
    name: "Shibtama",
  },
  {
    id: "shibui-dao",
    symbol: "shibui",
    name: "Shibui DAO",
  },
  {
    id: "shibu-life",
    symbol: "shibu",
    name: "Shibu Life",
  },
  {
    id: "shibuya-white-rabbit",
    symbol: "wrab",
    name: "Shibuya White Rabbit",
  },
  {
    id: "shibvinci",
    symbol: "shiv",
    name: "ShibVinci",
  },
  {
    id: "shiden",
    symbol: "sdn",
    name: "Shiden Network",
  },
  {
    id: "shido",
    symbol: "shido",
    name: "Shido",
  },
  {
    id: "shield",
    symbol: "xsh",
    name: "SHIELD",
  },
  {
    id: "shield-dao",
    symbol: "sld",
    name: "Shield (SLD)",
  },
  {
    id: "shield-finance",
    symbol: "coli",
    name: "Coliquidity",
  },
  {
    id: "shield-network",
    symbol: "shieldnet",
    name: "Shield Network",
  },
  {
    id: "shield-protocol-2",
    symbol: "shield",
    name: "Shield Protocol",
  },
  {
    id: "shield-protocol-token",
    symbol: "shield",
    name: "Shield Protocol Token",
  },
  {
    id: "shih-tzu",
    symbol: "shih",
    name: "Shih Tzu",
  },
  {
    id: "shihtzu-exchange",
    symbol: "stzu",
    name: "Shihtzu Exchange",
  },
  {
    id: "shih-tzu-inu",
    symbol: "shih-tzu",
    name: "Shih Tzu Inu",
  },
  {
    id: "shika-finance",
    symbol: "shika",
    name: "Shika Finance",
  },
  {
    id: "shikoku",
    symbol: "shik",
    name: "Shikoku",
  },
  {
    id: "shikoku-inu",
    symbol: "shiko",
    name: "Shikoku Inu",
  },
  {
    id: "shilling",
    symbol: "sh",
    name: "Shilling",
  },
  {
    id: "shill-token",
    symbol: "shill",
    name: "Project SEED SHILL",
  },
  {
    id: "shilly-bar",
    symbol: "shbar",
    name: "Shilly Bar",
  },
  {
    id: "shimmer",
    symbol: "smr",
    name: "Shimmer",
  },
  {
    id: "shina-inu",
    symbol: "shi",
    name: "Shina Inu",
  },
  {
    id: "shinchan-token",
    symbol: "shinnosuke",
    name: "ShinChan",
  },
  {
    id: "shinedao",
    symbol: "shn",
    name: "ShineDAO",
  },
  {
    id: "shinemine",
    symbol: "shine",
    name: "ShineMine",
  },
  {
    id: "shinji-inu",
    symbol: "shinji",
    name: "Shinji Inu",
  },
  {
    id: "shinjiro",
    symbol: "shox",
    name: "Shinjiro",
  },
  {
    id: "shinshu-inu",
    symbol: "shinshu",
    name: "Shinshu Inu",
  },
  {
    id: "shintama",
    symbol: "shintama",
    name: "Shintama",
  },
  {
    id: "shinuri",
    symbol: "shinuri",
    name: "Shinuri",
  },
  {
    id: "shiny",
    symbol: "shiny",
    name: "Shiny",
  },
  {
    id: "shiny-ore",
    symbol: "so",
    name: "Shiny Ore",
  },
  {
    id: "shipchain",
    symbol: "ship",
    name: "ShipChain",
  },
  {
    id: "shipitpro",
    symbol: "shpp",
    name: "ShipItPro",
  },
  {
    id: "shiplay",
    symbol: "sply",
    name: "ShiPlay",
  },
  {
    id: "shirainu",
    symbol: "shr",
    name: "ShiraINU",
  },
  {
    id: "shirtum",
    symbol: "shi",
    name: "Shirtum",
  },
  {
    id: "shiryo-inu",
    symbol: "shiryo-inu",
    name: "Shiryo",
  },
  {
    id: "shita-kiri-suzume",
    symbol: "suzume",
    name: "Shita-kiri Suzume",
  },
  {
    id: "shitcoin",
    symbol: "shit",
    name: "ShitCoin",
  },
  {
    id: "shitzu",
    symbol: "shitzu",
    name: "Shitzu",
  },
  {
    id: "shiwa",
    symbol: "shiwa",
    name: "Shiwa",
  },
  {
    id: "shkooby-inu",
    symbol: "shkooby",
    name: "SHKOOBY INU",
  },
  {
    id: "shoebill-coin",
    symbol: "shbl",
    name: "Shoebill Coin",
  },
  {
    id: "shoefy",
    symbol: "shoe",
    name: "ShoeFy",
  },
  {
    id: "shontoken",
    symbol: "shon",
    name: "Shon",
  },
  {
    id: "shoot",
    symbol: "shoo",
    name: "SHOOT",
  },
  {
    id: "shopayment",
    symbol: "spay",
    name: "Shopayment",
  },
  {
    id: "shopdi",
    symbol: "shod",
    name: "Shopdi",
  },
  {
    id: "shopnext",
    symbol: "next",
    name: "ShopNEXT",
  },
  {
    id: "shoppi-coin",
    symbol: "shop",
    name: "Shoppi Coin",
  },
  {
    id: "shopping-io",
    symbol: "spi",
    name: "Shopping.io OLD",
  },
  {
    id: "shopping-io-token",
    symbol: "shop",
    name: "Shopping.io",
  },
  {
    id: "shorty",
    symbol: "shorty",
    name: "Shorty",
  },
  {
    id: "showcase-token",
    symbol: "sho",
    name: "Showcase",
  },
  {
    id: "showhand",
    symbol: "hand",
    name: "ShowHand",
  },
  {
    id: "showtime-potocol",
    symbol: "stp",
    name: "ShowTime Potocol",
  },
  {
    id: "shping",
    symbol: "shping",
    name: "Shping",
  },
  {
    id: "shree",
    symbol: "shr",
    name: "SHREE",
  },
  {
    id: "shroom-finance",
    symbol: "shroom",
    name: "Niftyx Protocol",
  },
  {
    id: "shrooms",
    symbol: "shrm",
    name: "Shrooms",
  },
  {
    id: "shuey-rhon-inu",
    symbol: "shuey",
    name: "Shuey Rhon Inu",
  },
  {
    id: "shuffle-by-hupayx",
    symbol: "sfl",
    name: "SHUFFLE by HUPAYX",
  },
  {
    id: "shumi",
    symbol: "shumi",
    name: "SHUMI",
  },
  {
    id: "shuna-inuverse",
    symbol: "shunav2",
    name: "Shuna Inuverse",
  },
  {
    id: "shyft-network-2",
    symbol: "shft",
    name: "Shyft Network",
  },
  {
    id: "si14bet",
    symbol: "si14",
    name: "Si14Bet",
  },
  {
    id: "siacashcoin",
    symbol: "scc",
    name: "SiaCashCoin",
  },
  {
    id: "siaclassic",
    symbol: "scc",
    name: "SiaClassic",
  },
  {
    id: "siacoin",
    symbol: "sc",
    name: "Siacoin",
  },
  {
    id: "siambitcoin",
    symbol: "sbtc",
    name: "SiamBitcoin",
  },
  {
    id: "siaprime-coin",
    symbol: "scp",
    name: "ScPrime",
  },
  {
    id: "sibcoin",
    symbol: "sib",
    name: "SIBCoin",
  },
  {
    id: "siberian-husky",
    symbol: "shusky",
    name: "Siberian Husky",
  },
  {
    id: "sicash",
    symbol: "sic",
    name: "SICash",
  },
  {
    id: "siddcoin",
    symbol: "sidd",
    name: "Siddcoin",
  },
  {
    id: "sidekick-token",
    symbol: "sk",
    name: "SideKick",
  },
  {
    id: "sideshift-token",
    symbol: "xai",
    name: "SideShift",
  },
  {
    id: "sidus",
    symbol: "sidus",
    name: "Sidus",
  },
  {
    id: "sienna",
    symbol: "sienna",
    name: "Sienna",
  },
  {
    id: "sienna-erc20",
    symbol: "wsienna",
    name: "Sienna [ERC-20]",
  },
  {
    id: "sif",
    symbol: "sif",
    name: "Sif",
  },
  {
    id: "sifchain",
    symbol: "erowan",
    name: "Sifchain",
  },
  {
    id: "sifu-vision",
    symbol: "sifu",
    name: "SIFU",
  },
  {
    id: "sign",
    symbol: "sign",
    name: "Sign",
  },
  {
    id: "signal",
    symbol: "sgnl",
    name: "Signal",
  },
  {
    id: "signal-token",
    symbol: "sig",
    name: "Signal SIG",
  },
  {
    id: "signata",
    symbol: "sata",
    name: "Signata",
  },
  {
    id: "signaturechain",
    symbol: "sign",
    name: "SignatureChain",
  },
  {
    id: "signed",
    symbol: "sign",
    name: "Signed",
  },
  {
    id: "signum",
    symbol: "signa",
    name: "Signum",
  },
  {
    id: "sikka",
    symbol: "sikka",
    name: "SIKKA",
  },
  {
    id: "silent-notary",
    symbol: "ubsn",
    name: "Silent Notary",
  },
  {
    id: "sil-finance",
    symbol: "sil",
    name: "SIL Finance V2",
  },
  {
    id: "silk",
    symbol: "silk",
    name: "Spider Tanks",
  },
  {
    id: "silkchain",
    symbol: "silk",
    name: "SilkChain",
  },
  {
    id: "silo-finance",
    symbol: "silo",
    name: "Silo Finance",
  },
  {
    id: "silva-token",
    symbol: "silva",
    name: "Silva",
  },
  {
    id: "silvercashs",
    symbol: "svc",
    name: "Silvercashs",
  },
  {
    id: "silverstonks",
    symbol: "sstx",
    name: "Silver Stonks",
  },
  {
    id: "silver-tokenized-stock-defichain",
    symbol: "dslv",
    name: "iShares Silver Trust Defichain",
  },
  {
    id: "simba-empire",
    symbol: "sim",
    name: "Simba Empire",
  },
  {
    id: "simba-inu",
    symbol: "simbainu",
    name: "Simba Inu",
  },
  {
    id: "simba-storage-token",
    symbol: "sst",
    name: "SIMBA Storage",
  },
  {
    id: "simba-token",
    symbol: "simba",
    name: "Simba",
  },
  {
    id: "simbcoin-swap",
    symbol: "smbswap",
    name: "SimbCoin Swap",
  },
  {
    id: "simple-masternode-coin",
    symbol: "smnc",
    name: "Simple Masternode Coin",
  },
  {
    id: "simple-token",
    symbol: "ost",
    name: "OST",
  },
  {
    id: "simpli-finance",
    symbol: "simpli",
    name: "Simpli Finance",
  },
  {
    id: "simply",
    symbol: "simply",
    name: "Simply",
  },
  {
    id: "simp-token",
    symbol: "simp",
    name: "Simp",
  },
  {
    id: "simracer-coin",
    symbol: "src",
    name: "Simracer Coin",
  },
  {
    id: "sincere-cate",
    symbol: "$scate",
    name: "Sincere Cate",
  },
  {
    id: "sincere-doge",
    symbol: "sdoge",
    name: "Sincere Doge",
  },
  {
    id: "sinceredogedao",
    symbol: "sdao",
    name: "SincereDogeDAO",
  },
  {
    id: "sin-city",
    symbol: "sin",
    name: "Sinverse",
  },
  {
    id: "sinfinite",
    symbol: "sfn",
    name: "Sinfinite",
  },
  {
    id: "singh",
    symbol: "singh",
    name: "Singh",
  },
  {
    id: "single-earth",
    symbol: "merit",
    name: "Single Earth",
  },
  {
    id: "single-finance",
    symbol: "single",
    name: "Single Finance",
  },
  {
    id: "sing-token",
    symbol: "sing",
    name: "Sing",
  },
  {
    id: "sing-token-avalanche",
    symbol: "sing",
    name: "Sing (Avalanche)",
  },
  {
    id: "sing-token-bsc",
    symbol: "sing",
    name: "Sing (BSC)",
  },
  {
    id: "sing-token-ftm",
    symbol: "sing",
    name: "Sing FTM",
  },
  {
    id: "singulardtv",
    symbol: "sngls",
    name: "SingularDTV",
  },
  {
    id: "singularity",
    symbol: "sgly",
    name: "Singularity",
  },
  {
    id: "singularitydao",
    symbol: "sdao",
    name: "SingularityDAO",
  },
  {
    id: "singularitynet",
    symbol: "agix",
    name: "SingularityNET",
  },
  {
    id: "sint-truidense-voetbalvereniging-fan-token",
    symbol: "stv",
    name: "Sint-Truidense Voetbalvereniging Fan Token",
  },
  {
    id: "sipher",
    symbol: "sipher",
    name: "Sipher",
  },
  {
    id: "siren",
    symbol: "si",
    name: "Siren",
  },
  {
    id: "sirin-labs-token",
    symbol: "srn",
    name: "Sirin Labs",
  },
  {
    id: "sirius-finance",
    symbol: "srs",
    name: "Sirius Finance",
  },
  {
    id: "sishi-finance",
    symbol: "sishi",
    name: "Sishi Finance",
  },
  {
    id: "siuuu",
    symbol: "siu",
    name: "Siuuu",
  },
  {
    id: "sivasspor",
    symbol: "siv",
    name: "Sivasspor",
  },
  {
    id: "six-network",
    symbol: "six",
    name: "SIX Network",
  },
  {
    id: "sjwcoin",
    symbol: "sjw",
    name: "SJWCoin",
  },
  {
    id: "skale",
    symbol: "skl",
    name: "SKALE",
  },
  {
    id: "skate-metaverse-coin",
    symbol: "smc",
    name: "Skate Metaverse Coin",
  },
  {
    id: "skeb",
    symbol: "skeb",
    name: "Skeb",
  },
  {
    id: "skey-network",
    symbol: "skey",
    name: "Skey Network",
  },
  {
    id: "skillchain",
    symbol: "ski",
    name: "Skillchain",
  },
  {
    id: "skinchain",
    symbol: "skc",
    name: "SKINCHAIN",
  },
  {
    id: "skincoin",
    symbol: "skin",
    name: "SkinCoin",
  },
  {
    id: "sklay",
    symbol: "sklay",
    name: "sKLAY",
  },
  {
    id: "skraps",
    symbol: "skrp",
    name: "Skraps",
  },
  {
    id: "skrumble-network",
    symbol: "skm",
    name: "Skrumble Network",
  },
  {
    id: "skull",
    symbol: "skull",
    name: "Skull",
  },
  {
    id: "sky-bandit-coin",
    symbol: "sbc",
    name: "Sky Bandit Coin",
  },
  {
    id: "skybridger",
    symbol: "skbr",
    name: "SkyBridger",
  },
  {
    id: "skycoin",
    symbol: "sky",
    name: "Skycoin",
  },
  {
    id: "skydos",
    symbol: "sdc",
    name: "SkyDOS",
  },
  {
    id: "skylands",
    symbol: "skylands",
    name: "SkyLands",
  },
  {
    id: "skyplay",
    symbol: "skp",
    name: "SKYPlay",
  },
  {
    id: "skyrim-finance",
    symbol: "skyrim",
    name: "Skyrim Finance",
  },
  {
    id: "skyup",
    symbol: "su",
    name: "skyup",
  },
  {
    id: "sky-v2",
    symbol: "sky",
    name: "SkyToken",
  },
  {
    id: "skyward-finance",
    symbol: "skyward",
    name: "Skyward Finance",
  },
  {
    id: "slam-token",
    symbol: "slam",
    name: "Slam",
  },
  {
    id: "slay-to-earn",
    symbol: "slay2earn",
    name: "Slay To Earn",
  },
  {
    id: "sleepearn-finance",
    symbol: "sen",
    name: "SleepEarn Finance",
  },
  {
    id: "sleepfuture",
    symbol: "sleepee",
    name: "SleepFuture",
  },
  {
    id: "sleepy-shib",
    symbol: "sleepy-shib",
    name: "Sleepy-Shib",
  },
  {
    id: "sleepy-sloth",
    symbol: "sleepy",
    name: "Sleepy Sloth Finance",
  },
  {
    id: "slimcoin",
    symbol: "slm",
    name: "Slimcoin",
  },
  {
    id: "slime-royale-cupid-essence",
    symbol: "sce",
    name: "Slime Royale Cupid Essence",
  },
  {
    id: "slime-royale-gold",
    symbol: "srg",
    name: "Slime Royale Gold",
  },
  {
    id: "slnv2",
    symbol: "slnv2",
    name: "SLNV2",
  },
  {
    id: "slothcoin",
    symbol: "sloth",
    name: "SlothCoin",
  },
  {
    id: "small-doge",
    symbol: "sdog",
    name: "Small Doge",
  },
  {
    id: "small-fish-cookie",
    symbol: "sfc",
    name: "Small Fish Cookie",
  },
  {
    id: "smart-block-chain-city",
    symbol: "sbcc",
    name: "Smart Block Chain City",
  },
  {
    id: "smartcash",
    symbol: "smart",
    name: "SmartCash",
  },
  {
    id: "smartcoin-2",
    symbol: "smrt",
    name: "SmartCoin",
  },
  {
    id: "smart-coin-smrtr",
    symbol: "smrtr",
    name: "SmarterCoin",
  },
  {
    id: "smartcredit-token",
    symbol: "smartcredit",
    name: "SmartCredit",
  },
  {
    id: "smart-donation-coin",
    symbol: "sdc",
    name: "Smart Donation Coin",
  },
  {
    id: "smart-electrum",
    symbol: "select",
    name: "Smart Electrum",
  },
  {
    id: "smartfi",
    symbol: "smtf",
    name: "SmartFi",
  },
  {
    id: "smartlands",
    symbol: "dnt",
    name: "Definder Network",
  },
  {
    id: "smartlink",
    symbol: "smak",
    name: "Smartlink",
  },
  {
    id: "smartlox",
    symbol: "smartlox",
    name: "SmartLOX",
  },
  {
    id: "smart-marketing-token",
    symbol: "smt",
    name: "Smart Marketing",
  },
  {
    id: "smart-medical-coin",
    symbol: "smc",
    name: "Smart Medical Coin",
  },
  {
    id: "smartmesh",
    symbol: "smt",
    name: "SmartMesh",
  },
  {
    id: "smart-mfg",
    symbol: "mfg",
    name: "Smart MFG",
  },
  {
    id: "smart-money-coin",
    symbol: "smc",
    name: "Smart Money Coin",
  },
  {
    id: "smartnft",
    symbol: "smartnft",
    name: "SmartNFT",
  },
  {
    id: "smartofgiving",
    symbol: "aog",
    name: "smARTOFGIVING",
  },
  {
    id: "smartpad-2",
    symbol: "pad",
    name: "SmartPad",
  },
  {
    id: "smart-palmare",
    symbol: "spal",
    name: "Smart Palmare",
  },
  {
    id: "smart-reward-token",
    symbol: "srt",
    name: "Smart Reward Token",
  },
  {
    id: "smartshare",
    symbol: "ssp",
    name: "Smartshare",
  },
  {
    id: "smart-shiba",
    symbol: "smartshib",
    name: "Smart Shiba",
  },
  {
    id: "smart-token",
    symbol: "smart",
    name: "Smart",
  },
  {
    id: "smart-valor",
    symbol: "valor",
    name: "Smart Valor",
  },
  {
    id: "smart-wallet-token",
    symbol: "swt",
    name: "Smart Wallet",
  },
  {
    id: "smartway-finance",
    symbol: "smart",
    name: "Smartway.Finance",
  },
  {
    id: "smart-world-union",
    symbol: "swu",
    name: "Smart World Union",
  },
  {
    id: "smartx",
    symbol: "sat",
    name: "SmartX",
  },
  {
    id: "smarty-pay",
    symbol: "spy",
    name: "Smarty Pay",
  },
  {
    id: "smash-cash",
    symbol: "smash",
    name: "Smash Cash",
  },
  {
    id: "smaugs-nft",
    symbol: "smg",
    name: "Smaugs NFT",
  },
  {
    id: "smd-coin",
    symbol: "smd",
    name: "SMD Coin",
  },
  {
    id: "smegmars",
    symbol: "smgm",
    name: "SMEGMARS",
  },
  {
    id: "smelt",
    symbol: "smelt",
    name: "Smelt",
  },
  {
    id: "smg",
    symbol: "smg",
    name: "SMG",
  },
  {
    id: "smile-coin",
    symbol: "smile",
    name: "Smile Coin",
  },
  {
    id: "smileycoin",
    symbol: "smly",
    name: "Smileycoin",
  },
  {
    id: "smolting-inu",
    symbol: "smol",
    name: "Smolting Inu",
  },
  {
    id: "smooth-love-potion",
    symbol: "slp",
    name: "Smooth Love Potion",
  },
  {
    id: "smoothy",
    symbol: "smty",
    name: "Smoothy",
  },
  {
    id: "smpcoin",
    symbol: "smpc",
    name: "SMPCOIN",
  },
  {
    id: "smscodes",
    symbol: "smsct",
    name: "SMSCodes",
  },
  {
    id: "smurfsinu",
    symbol: "smurf",
    name: "SmurfsINU",
  },
  {
    id: "snail-trail",
    symbol: "slime",
    name: "Snail Trail",
  },
  {
    id: "snake-city",
    symbol: "snct",
    name: "Snake City",
  },
  {
    id: "snake-token",
    symbol: "snk",
    name: "CryptoSnake",
  },
  {
    id: "snapex",
    symbol: "snap",
    name: "SnapEx",
  },
  {
    id: "snapy",
    symbol: "spy",
    name: "Snapy",
  },
  {
    id: "snetwork",
    symbol: "snet",
    name: "Snetwork",
  },
  {
    id: "snfts-seedify-nft-space",
    symbol: "snfts",
    name: "Seedify NFT Space",
  },
  {
    id: "snglsdao-governance-token",
    symbol: "sgt",
    name: "snglsDAO Governance",
  },
  {
    id: "snkrz",
    symbol: "skz",
    name: "SNKRZ",
  },
  {
    id: "snook",
    symbol: "snk",
    name: "Snook",
  },
  {
    id: "snoshares",
    symbol: "snoshare",
    name: "Snoshares",
  },
  {
    id: "snovio",
    symbol: "snov",
    name: "Snovian.Space",
  },
  {
    id: "snow",
    symbol: "icz",
    name: "Snow",
  },
  {
    id: "snowballtoken",
    symbol: "snowball",
    name: "Snowball Token",
  },
  {
    id: "snowball-token",
    symbol: "snob",
    name: "Snowball",
  },
  {
    id: "snowbank",
    symbol: "sb",
    name: "Snowbank",
  },
  {
    id: "snowblossom",
    symbol: "snow",
    name: "SnowBlossom",
  },
  {
    id: "snowcrash-token",
    symbol: "nora",
    name: "SnowCrash",
  },
  {
    id: "snowdog",
    symbol: "sdog",
    name: "Snowdog",
  },
  {
    id: "snowflake",
    symbol: "$snow",
    name: "Snowflake",
  },
  {
    id: "snowswap",
    symbol: "snow",
    name: "Snowswap",
  },
  {
    id: "snowtomb",
    symbol: "stomb",
    name: "Snowtomb",
  },
  {
    id: "snowtomb-lot",
    symbol: "slot",
    name: "Snowtomb LOT",
  },
  {
    id: "soakmont",
    symbol: "skmt",
    name: "Soakmont",
  },
  {
    id: "soba-token",
    symbol: "soba",
    name: "SOBA",
  },
  {
    id: "so-cal",
    symbol: "sct",
    name: "So Cal",
  },
  {
    id: "socaverse",
    symbol: "soca",
    name: "Socaverse",
  },
  {
    id: "soccer-crypto",
    symbol: "sot",
    name: "Soccer Crypto",
  },
  {
    id: "soccer-galaxy",
    symbol: "sog",
    name: "Soccer Galaxy",
  },
  {
    id: "soccerhub",
    symbol: "sch",
    name: "SoccerHub",
  },
  {
    id: "soccer-infinity",
    symbol: "socin",
    name: "Soccer Infinity",
  },
  {
    id: "soccerinu",
    symbol: "soccer",
    name: "SoccerInu",
  },
  {
    id: "soccers-dog",
    symbol: "sd",
    name: "Soccers Dog",
  },
  {
    id: "socean-staked-sol",
    symbol: "scnsol",
    name: "Socean Staked Sol",
  },
  {
    id: "socialblox",
    symbol: "sblx",
    name: "SocialBlox",
  },
  {
    id: "social-capitalism-2",
    symbol: "socap",
    name: "Social Capitalism",
  },
  {
    id: "social-good-project",
    symbol: "sg",
    name: "SocialGood",
  },
  {
    id: "sociall",
    symbol: "scl",
    name: "Sociall",
  },
  {
    id: "social-send",
    symbol: "send",
    name: "Social Send",
  },
  {
    id: "socialswap-token",
    symbol: "sst",
    name: "Social Swap",
  },
  {
    id: "socialx-2",
    symbol: "sosx",
    name: "SocialX",
  },
  {
    id: "socialxclub",
    symbol: "sxc",
    name: "SocialxClub",
  },
  {
    id: "society-of-galactic-exploration",
    symbol: "sge",
    name: "Society of Galactic Exploration",
  },
  {
    id: "socilink",
    symbol: "soc",
    name: "SociLink",
  },
  {
    id: "soda-coin",
    symbol: "soc",
    name: "SODA Coin",
  },
  {
    id: "sodatsu",
    symbol: "sodatsu",
    name: "Sodatsu",
  },
  {
    id: "softchain",
    symbol: "scc",
    name: "SoftChain",
  },
  {
    id: "soft-dao",
    symbol: "soft",
    name: "Soft DAO",
  },
  {
    id: "soga-project",
    symbol: "soga",
    name: "SOGA Project",
  },
  {
    id: "sokuswap",
    symbol: "soku",
    name: "SokuSwap",
  },
  {
    id: "solabrador",
    symbol: "solab",
    name: "Solabrador",
  },
  {
    id: "solace",
    symbol: "solace",
    name: "SOLACE",
  },
  {
    id: "solace-coin",
    symbol: "solace",
    name: "Solace Coin",
  },
  {
    id: "solalambo",
    symbol: "sob",
    name: "SolaLambo",
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
  },
  {
    id: "solana-ecosystem-index",
    symbol: "soli",
    name: "Solana Ecosystem Index",
  },
  {
    id: "solana-inu",
    symbol: "inu",
    name: "Solana Inu",
  },
  {
    id: "solana-nut",
    symbol: "solnut",
    name: "Solana Nut",
  },
  {
    id: "solana-paws",
    symbol: "paws",
    name: "Solana Paws",
  },
  {
    id: "solanaprime",
    symbol: "prime",
    name: "SolanaPrime",
  },
  {
    id: "solanasail-governance-token",
    symbol: "gsail",
    name: "SolanaSail Governance",
  },
  {
    id: "solanax",
    symbol: "sold",
    name: "Solanax",
  },
  {
    id: "sola-ninja",
    symbol: "snj",
    name: "Sola Ninja",
  },
  {
    id: "solanium",
    symbol: "slim",
    name: "Solanium",
  },
  {
    id: "solanyx",
    symbol: "syx",
    name: "Solanyx",
  },
  {
    id: "solape-token",
    symbol: "solape",
    name: "SOLAPE",
  },
  {
    id: "solar",
    symbol: "solar",
    name: "Solar",
  },
  {
    id: "solarbeam",
    symbol: "solar",
    name: "Solarbeam",
  },
  {
    id: "solar-bear",
    symbol: "solbear",
    name: "Solar Bear",
  },
  {
    id: "solar-energy",
    symbol: "seg",
    name: "Solar Energy",
  },
  {
    id: "solareum-wallet",
    symbol: "xsb",
    name: "Solareum Wallet",
  },
  {
    id: "solarfare",
    symbol: "slf",
    name: "Solarfare",
  },
  {
    id: "solarflare",
    symbol: "flare",
    name: "Solarflare",
  },
  {
    id: "solar-full-cycle",
    symbol: "sfc",
    name: "Solar Full Cycle",
  },
  {
    id: "solaris-betting-token",
    symbol: "sbt",
    name: "Solaris Betting Token",
  },
  {
    id: "solaris-finance",
    symbol: "slr",
    name: "Solaris Finance",
  },
  {
    id: "solarix",
    symbol: "solarix",
    name: "SOLARIX",
  },
  {
    id: "solarminex",
    symbol: "smx",
    name: "SolarMineX",
  },
  {
    id: "solarmoon",
    symbol: "solar",
    name: "Solarmoon",
  },
  {
    id: "solarr",
    symbol: "slrr",
    name: "Solarr",
  },
  {
    id: "sola-token",
    symbol: "sola",
    name: "SOLA",
  },
  {
    id: "sola-x",
    symbol: "sax",
    name: "SOLA-X",
  },
  {
    id: "sol-baby-doge",
    symbol: "sbabydoge",
    name: "SOL Baby Doge",
  },
  {
    id: "solbank-token",
    symbol: "sbnk",
    name: "Solbank",
  },
  {
    id: "solberg",
    symbol: "slb",
    name: "Solberg",
  },
  {
    id: "solberry",
    symbol: "solberry",
    name: "SolBerry",
  },
  {
    id: "solbit",
    symbol: "sbt",
    name: "SOLBIT",
  },
  {
    id: "solcash",
    symbol: "solcash",
    name: "SOLCash",
  },
  {
    id: "solcats",
    symbol: "meow",
    name: "Solcats",
  },
  {
    id: "solchicks-shards",
    symbol: "shards",
    name: "SolChicks Shards",
  },
  {
    id: "solchicks-token",
    symbol: "chicks",
    name: "SolChicks",
  },
  {
    id: "solcial",
    symbol: "slcl",
    name: "Solcial",
  },
  {
    id: "solclout",
    symbol: "sct",
    name: "SolClout",
  },
  {
    id: "solcondoms",
    symbol: "condoms",
    name: "SolCondoms",
  },
  {
    id: "solcubator",
    symbol: "solc",
    name: "Solcubator",
  },
  {
    id: "soldate-token",
    symbol: "date",
    name: "SolDate",
  },
  {
    id: "solderland",
    symbol: "sldr",
    name: "Solderland",
  },
  {
    id: "soldex",
    symbol: "solx",
    name: "Soldex",
  },
  {
    id: "soldiernodes",
    symbol: "sld",
    name: "SoldierNodes",
  },
  {
    id: "soldo",
    symbol: "sld",
    name: "Soldo",
  },
  {
    id: "soldoge",
    symbol: "sdoge",
    name: "SolDoge",
  },
  {
    id: "solend",
    symbol: "slnd",
    name: "Solend",
  },
  {
    id: "solex-finance",
    symbol: "slx",
    name: "Solex Finance",
  },
  {
    id: "solfarm",
    symbol: "tulip",
    name: "Tulip Protocol",
  },
  {
    id: "solfina",
    symbol: "solfi",
    name: "Solfina",
  },
  {
    id: "solfire-finance",
    symbol: "fire",
    name: "Solfire Finance",
  },
  {
    id: "sol-flowers",
    symbol: "flwr",
    name: "SOL Flowers",
  },
  {
    id: "solice",
    symbol: "slc",
    name: "Solice",
  },
  {
    id: "solideth",
    symbol: "solideth",
    name: "SolidETH",
  },
  {
    id: "solidex",
    symbol: "sex",
    name: "Solidex",
  },
  {
    id: "solidly",
    symbol: "solid",
    name: "Solidly",
  },
  {
    id: "solid-protocol",
    symbol: "solid",
    name: "Solid Protocol",
  },
  {
    id: "solidsex-tokenized-vesolid",
    symbol: "solidsex",
    name: "SOLIDsex: Tokenized veSOLID",
  },
  {
    id: "solily-protocol",
    symbol: "lily",
    name: "Solily Protocol",
  },
  {
    id: "solit",
    symbol: "slt",
    name: "Solit",
  },
  {
    id: "solminter",
    symbol: "smrt",
    name: "Solminter",
  },
  {
    id: "solmoon",
    symbol: "solmo",
    name: "SolMoon",
  },
  {
    id: "solo-coin",
    symbol: "solo",
    name: "Sologenic",
  },
  {
    id: "solomon-defi",
    symbol: "slm",
    name: "Solomon Defi",
  },
  {
    id: "solootbox-dao",
    symbol: "box",
    name: "Solootbox DAO",
  },
  {
    id: "solo-vault-nftx",
    symbol: "solo",
    name: "SOLO Vault (NFTX)",
  },
  {
    id: "soloxcoin",
    symbol: "sl",
    name: "SoloxCoin",
  },
  {
    id: "solpad-finance",
    symbol: "solpad",
    name: "Solpad Finance",
  },
  {
    id: "solpatrol-bail",
    symbol: "bail",
    name: "SolPatrol Bail",
  },
  {
    id: "solpay-finance",
    symbol: "solpay",
    name: "SolPay Finance",
  },
  {
    id: "solrazr",
    symbol: "solr",
    name: "SolRazr",
  },
  {
    id: "solrise-finance",
    symbol: "slrs",
    name: "Solrise Finance",
  },
  {
    id: "solster",
    symbol: "str",
    name: "Solster",
  },
  {
    id: "soltato-fries",
    symbol: "fries",
    name: "Soltato FRIES",
  },
  {
    id: "solum",
    symbol: "solum",
    name: "Solum",
  },
  {
    id: "soluna",
    symbol: "slna",
    name: "Soluna",
  },
  {
    id: "solust",
    symbol: "solust",
    name: "solUST",
  },
  {
    id: "solve-care",
    symbol: "solve",
    name: "SOLVE",
  },
  {
    id: "solvent",
    symbol: "svt",
    name: "Solvent",
  },
  {
    id: "solvia",
    symbol: "sva",
    name: "Solvia",
  },
  {
    id: "solview",
    symbol: "solv",
    name: "Solview",
  },
  {
    id: "solv-protocol",
    symbol: "solv",
    name: "Solv Protocol",
  },
  {
    id: "sol-wormhole",
    symbol: "sol",
    name: "SOL (Wormhole)",
  },
  {
    id: "solx-gaming-guild",
    symbol: "sgg",
    name: "SolX Gaming Guild",
  },
  {
    id: "solyard-finance",
    symbol: "yard",
    name: "Solyard Finance",
  },
  {
    id: "sombra-network",
    symbol: "smbr",
    name: "Sombra",
  },
  {
    id: "somdej",
    symbol: "sdc",
    name: "Somdej",
  },
  {
    id: "somee-advertising-token",
    symbol: "sat",
    name: "SoMee Advertising",
  },
  {
    id: "somee-social",
    symbol: "somee",
    name: "SoMee.Social",
  },
  {
    id: "somee-social-old",
    symbol: "ong",
    name: "SoMee.Social [OLD]",
  },
  {
    id: "somesing",
    symbol: "ssx",
    name: "SOMESING Exchange",
  },
  {
    id: "sommelier",
    symbol: "somm",
    name: "Sommelier",
  },
  {
    id: "somnium",
    symbol: "som",
    name: "Somnium",
  },
  {
    id: "somnium-space-cubes",
    symbol: "cube",
    name: "Somnium Space CUBEs",
  },
  {
    id: "sonar",
    symbol: "ping",
    name: "Sonar",
  },
  {
    id: "sonarwatch",
    symbol: "sonar",
    name: "SonarWatch",
  },
  {
    id: "songbird",
    symbol: "sgb",
    name: "Songbird",
  },
  {
    id: "songcoin",
    symbol: "song",
    name: "SongCoin",
  },
  {
    id: "sonic-suite",
    symbol: "sonic",
    name: "Sonic Suite",
  },
  {
    id: "sonm",
    symbol: "snm",
    name: "SONM",
  },
  {
    id: "sonne-finance",
    symbol: "sonne",
    name: "Sonne Finance",
  },
  {
    id: "sonocoin",
    symbol: "sono",
    name: "SonoCoin",
  },
  {
    id: "son-of-doge-v2",
    symbol: "sod",
    name: "Son of Doge",
  },
  {
    id: "soonaverse",
    symbol: "soon",
    name: "Soonaverse",
  },
  {
    id: "sopay",
    symbol: "sop",
    name: "SoPay",
  },
  {
    id: "sora",
    symbol: "xor",
    name: "Sora",
  },
  {
    id: "sorachancoin",
    symbol: "sora",
    name: "SorachanCoin",
  },
  {
    id: "sora-synthetics",
    symbol: "xst",
    name: "SORA Synthetics",
  },
  {
    id: "sora-synthetic-usd",
    symbol: "xstusd",
    name: "SORA Synthetic USD",
  },
  {
    id: "sora-validator-token",
    symbol: "val",
    name: "Sora Validator",
  },
  {
    id: "sos-foundation",
    symbol: "sos",
    name: "SOS Foundation",
  },
  {
    id: "sota-finance",
    symbol: "sota",
    name: "SOTA Finance",
  },
  {
    id: "soul-dog-city-bones",
    symbol: "bones",
    name: "Soul Dogs City Bones",
  },
  {
    id: "soulocoin",
    symbol: "soulo",
    name: "SouloCoin",
  },
  {
    id: "soulsaver",
    symbol: "soul",
    name: "Soulsaver",
  },
  {
    id: "souls-of-meta",
    symbol: "som",
    name: "Souls of Meta",
  },
  {
    id: "soul-stone",
    symbol: "sst",
    name: "Soul Stone",
  },
  {
    id: "soul-swap",
    symbol: "soul",
    name: "Soul Swap",
  },
  {
    id: "sound-coin",
    symbol: "sound",
    name: "Sound Coin",
  },
  {
    id: "souni-token",
    symbol: "son",
    name: "Souni",
  },
  {
    id: "soup-finance",
    symbol: "soup",
    name: "Soup Finance",
  },
  {
    id: "sourceless",
    symbol: "str",
    name: "Sourceless",
  },
  {
    id: "source-protocol",
    symbol: "srcx",
    name: "Source Protocol",
  },
  {
    id: "southxchange-coin",
    symbol: "sxcc",
    name: "SouthXchange Coin",
  },
  {
    id: "sov",
    symbol: "sov",
    name: "SOV",
  },
  {
    id: "sovi-token",
    symbol: "sovi",
    name: "Sovi",
  },
  {
    id: "sovryn",
    symbol: "sov",
    name: "Sovryn",
  },
  {
    id: "sowl",
    symbol: "sowl",
    name: "SOWL",
  },
  {
    id: "soy-finance",
    symbol: "soy",
    name: "Soy Finance",
  },
  {
    id: "spacechain-erc-20",
    symbol: "spc",
    name: "SpaceChain (ERC-20)",
  },
  {
    id: "spacecoin",
    symbol: "space",
    name: "Spacecoin",
  },
  {
    id: "spacecorgi",
    symbol: "scorgi",
    name: "SpaceCorgi",
  },
  {
    id: "space-corsair-key",
    symbol: "sck",
    name: "Space Corsair Key",
  },
  {
    id: "spacecowboy",
    symbol: "scb",
    name: "SpaceCowBoy",
  },
  {
    id: "space-crypto",
    symbol: "spg",
    name: "Space Crypto",
  },
  {
    id: "spacedawgs",
    symbol: "dawgs",
    name: "SpaceDawgs",
  },
  {
    id: "spacefalcon",
    symbol: "fcon",
    name: "SpaceFalcon",
  },
  {
    id: "spacegoat-token",
    symbol: "sgt",
    name: "SpaceGoat",
  },
  {
    id: "spacegrime",
    symbol: "grimex",
    name: "SpaceGrime",
  },
  {
    id: "space-hamster",
    symbol: "hams",
    name: "Space Hamster",
  },
  {
    id: "space-iz",
    symbol: "spiz",
    name: "SPACE-iZ",
  },
  {
    id: "spacelens",
    symbol: "space",
    name: "Spacelens",
  },
  {
    id: "space-link",
    symbol: "splink",
    name: "Space Link",
  },
  {
    id: "spacemine",
    symbol: "mine",
    name: "SpaceMine",
  },
  {
    id: "space-misfits",
    symbol: "smcw",
    name: "Space Misfits",
  },
  {
    id: "space-monkey-token",
    symbol: "monke",
    name: "Space Monkey MONKE",
  },
  {
    id: "spacen",
    symbol: "sn",
    name: "SpaceN",
  },
  {
    id: "space-ore",
    symbol: "spo",
    name: "Space Ore",
  },
  {
    id: "spacepi",
    symbol: "spacepi",
    name: "SpacePi",
  },
  {
    id: "spacerat",
    symbol: "srat",
    name: "SpaceRat",
  },
  {
    id: "space-rebase",
    symbol: "space",
    name: "Space Rebase",
  },
  {
    id: "space-rebase-xusd",
    symbol: "xusd",
    name: "Space Rebase XUSD",
  },
  {
    id: "spacerobotdao",
    symbol: "srd",
    name: "SpaceRobotDao",
  },
  {
    id: "spaceship-war",
    symbol: "spw",
    name: "Spaceship War",
  },
  {
    id: "spaceshipx",
    symbol: "xship",
    name: "XSHIP",
  },
  {
    id: "space-sip",
    symbol: "sip",
    name: "Space SIP",
  },
  {
    id: "space-soldier",
    symbol: "soldier",
    name: "Space Soldier",
  },
  {
    id: "spaceswap-milk2",
    symbol: "milk2",
    name: "Spaceswap MILK2",
  },
  {
    id: "spaceswap-shake",
    symbol: "shake",
    name: "Spaceswap SHAKE",
  },
  {
    id: "spacetoast",
    symbol: "spacetoast",
    name: "SpaceToast",
  },
  {
    id: "space-token",
    symbol: "space",
    name: "ApeRocket Space",
  },
  {
    id: "space-token-bsc",
    symbol: "space",
    name: "Space Token BSC",
  },
  {
    id: "spacevikings",
    symbol: "svt",
    name: "SpaceVikings",
  },
  {
    id: "spacexlife",
    symbol: "safe",
    name: "SpaceXliFe",
  },
  {
    id: "space-xmitter",
    symbol: "sx",
    name: "Space Xmitter",
  },
  {
    id: "spacey-2025",
    symbol: "spay",
    name: "SpaceY 2025",
  },
  {
    id: "spain-national-fan-token",
    symbol: "snft",
    name: "Spain National Football Team Fan Token",
  },
  {
    id: "spankchain",
    symbol: "spank",
    name: "SpankChain",
  },
  {
    id: "sparklab",
    symbol: "spark",
    name: "SparkLab",
  },
  {
    id: "sparkle-coin",
    symbol: "sctk",
    name: "Sparkle Coin",
  },
  {
    id: "sparkpoint",
    symbol: "srk",
    name: "SparkPoint",
  },
  {
    id: "sparkpoint-fuel",
    symbol: "sfuel",
    name: "SparkPoint Fuel",
  },
  {
    id: "sparks",
    symbol: "spk",
    name: "SparksPay",
  },
  {
    id: "sparq",
    symbol: "sparq",
    name: "Sparq",
  },
  {
    id: "spartacats",
    symbol: "purr",
    name: "Spartacats",
  },
  {
    id: "spartacus",
    symbol: "spa",
    name: "Spartacus",
  },
  {
    id: "spartacus-money",
    symbol: "lambda",
    name: "Spartacus Money",
  },
  {
    id: "spartan",
    symbol: "300",
    name: "Spartan",
  },
  {
    id: "spartancoin",
    symbol: "spn",
    name: "SpartanCoin",
  },
  {
    id: "spartan-protocol-token",
    symbol: "sparta",
    name: "Spartan Protocol",
  },
  {
    id: "spartan-token",
    symbol: "spa",
    name: "Spartans",
  },
  {
    id: "spdr-s-p-500-etf-trust-defichain",
    symbol: "dspy",
    name: "SPDR S&P 500 ETF Trust Defichain",
  },
  {
    id: "spectra",
    symbol: "spc",
    name: "Spectra",
  },
  {
    id: "spectrecoin",
    symbol: "alias",
    name: "Alias",
  },
  {
    id: "spectresecuritycoin",
    symbol: "xspc",
    name: "SpectreSecurityCoin",
  },
  {
    id: "spectrum",
    symbol: "spt",
    name: "SPECTRUM",
  },
  {
    id: "spectrum-finance",
    symbol: "$spf",
    name: "Spectrum Finance",
  },
  {
    id: "spectrum-token",
    symbol: "spec",
    name: "Spectrum Protocol",
  },
  {
    id: "speedcash",
    symbol: "scs",
    name: "Speedcash",
  },
  {
    id: "speed-mining-service",
    symbol: "sms",
    name: "Speed Mining Service",
  },
  {
    id: "speed-star-joc",
    symbol: "joc",
    name: "Speed Star JOC",
  },
  {
    id: "speed-star-speed",
    symbol: "speed",
    name: "Speed Star SPEED",
  },
  {
    id: "speed-star-star",
    symbol: "star",
    name: "Speed Star STAR",
  },
  {
    id: "spellfire",
    symbol: "spellfire",
    name: "Spellfire",
  },
  {
    id: "spell-token",
    symbol: "spell",
    name: "Spell",
  },
  {
    id: "spender-x",
    symbol: "spdx",
    name: "SPENDER-X",
  },
  {
    id: "sperax",
    symbol: "spa",
    name: "Sperax",
  },
  {
    id: "sperax-usd",
    symbol: "usds",
    name: "Sperax USD",
  },
  {
    id: "sphere",
    symbol: "sphr",
    name: "Sphere",
  },
  {
    id: "sphere-finance",
    symbol: "sphere",
    name: "Sphere Finance",
  },
  {
    id: "sphere-social",
    symbol: "sat",
    name: "Social Activity",
  },
  {
    id: "spheresxs",
    symbol: "sxs",
    name: "SphereSXS",
  },
  {
    id: "spherium",
    symbol: "sphri",
    name: "Spherium",
  },
  {
    id: "spheroid-universe",
    symbol: "sph",
    name: "Spheroid Universe",
  },
  {
    id: "sphinxel",
    symbol: "spx",
    name: "Sphinxel",
  },
  {
    id: "sphynx",
    symbol: "sphynx",
    name: "Sphynx",
  },
  {
    id: "sphynxfi",
    symbol: "sf",
    name: "SphynxFi",
  },
  {
    id: "sphynx-labs",
    symbol: "sphynx",
    name: "Sphynx Labs",
  },
  {
    id: "spice",
    symbol: "spice",
    name: "Spice Token",
  },
  {
    id: "spice-dao",
    symbol: "spice",
    name: "Spice DAO",
  },
  {
    id: "spiceeuro",
    symbol: "euros",
    name: "SpiceEURO",
  },
  {
    id: "spice-finance",
    symbol: "spice",
    name: "SPICE",
  },
  {
    id: "spice-trade",
    symbol: "spice",
    name: "Spice Trade",
  },
  {
    id: "spiceusd",
    symbol: "usds",
    name: "SpiceUSD",
  },
  {
    id: "spiderdao",
    symbol: "spdr",
    name: "SpiderDAO",
  },
  {
    id: "spillways",
    symbol: "spillways",
    name: "Spillways",
  },
  {
    id: "spinada-cash",
    symbol: "spin",
    name: "Spinada Cash",
  },
  {
    id: "spindle",
    symbol: "spd",
    name: "SPINDLE",
  },
  {
    id: "spintop",
    symbol: "spin",
    name: "Spintop",
  },
  {
    id: "spiral",
    symbol: "spr",
    name: "Spiral",
  },
  {
    id: "spiritdao-ghost",
    symbol: "ghost",
    name: "SpiritDAO Ghost",
  },
  {
    id: "spiritswap",
    symbol: "spirit",
    name: "SpiritSwap",
  },
  {
    id: "spitz-chain",
    symbol: "spc",
    name: "Spitz Chain",
  },
  {
    id: "splash",
    symbol: "spl",
    name: "Splash",
  },
  {
    id: "splinterlands",
    symbol: "sps",
    name: "Splintershards",
  },
  {
    id: "splyt",
    symbol: "shopx",
    name: "SHOPX",
  },
  {
    id: "spookeletons-token",
    symbol: "spkl",
    name: "Spookeletons",
  },
  {
    id: "spookyhalloweenfloki",
    symbol: "shf",
    name: "SpookyHalloweenFloki",
  },
  {
    id: "spookyshiba-2",
    symbol: "spky",
    name: "SpookyShiba",
  },
  {
    id: "spookyswap",
    symbol: "boo",
    name: "Spookyswap",
  },
  {
    id: "spooky-uni",
    symbol: "spku",
    name: "Spooky Uni",
  },
  {
    id: "spool-dao-token",
    symbol: "spool",
    name: "Spool DAO",
  },
  {
    id: "spore",
    symbol: "spore",
    name: "Spore",
  },
  {
    id: "spores-network",
    symbol: "spo",
    name: "Spores Network",
  },
  {
    id: "sporkdao",
    symbol: "spork",
    name: "SporkDAO",
  },
  {
    id: "sport",
    symbol: "sport",
    name: "SPORT",
  },
  {
    id: "sport-and-leisure",
    symbol: "snl",
    name: "Sport and Leisure",
  },
  {
    id: "sportium",
    symbol: "sprt",
    name: "Sportium",
  },
  {
    id: "sportoken",
    symbol: "spt",
    name: "Sportoken",
  },
  {
    id: "sports-2k75",
    symbol: "s2k",
    name: "Sports 2K75",
  },
  {
    id: "sports-bet",
    symbol: "sbet",
    name: "Sports Bet",
  },
  {
    id: "sportsicon",
    symbol: "$icons",
    name: "SportsIcon",
  },
  {
    id: "sportsverse",
    symbol: "sv",
    name: "Sportsverse",
  },
  {
    id: "sporty",
    symbol: "sporty",
    name: "Sporty",
  },
  {
    id: "sportzchain",
    symbol: "spn",
    name: "Sportzchain",
  },
  {
    id: "spot",
    symbol: "spot",
    name: "Spot",
  },
  {
    id: "spotrax",
    symbol: "spox",
    name: "Spotrax",
  },
  {
    id: "spots",
    symbol: "spt",
    name: "Spots",
  },
  {
    id: "spring",
    symbol: "spring",
    name: "Spring",
  },
  {
    id: "sprink",
    symbol: "sprink",
    name: "Sprink",
  },
  {
    id: "sprint-coin",
    symbol: "sprx",
    name: "Sprint Coin",
  },
  {
    id: "spritzmoon-crypto",
    symbol: "spritzmoon",
    name: "SpritzMoon Crypto",
  },
  {
    id: "sprouts",
    symbol: "sprts",
    name: "Sprouts",
  },
  {
    id: "sproutsextreme",
    symbol: "spex",
    name: "SproutsExtreme",
  },
  {
    id: "spume",
    symbol: "spume",
    name: "Spume",
  },
  {
    id: "spunk-vault-nftx",
    symbol: "spunk",
    name: "SPUNK Vault (NFTX)",
  },
  {
    id: "sqgl-vault-nftx",
    symbol: "sqgl",
    name: "SQGL Vault (NFTX)",
  },
  {
    id: "squad",
    symbol: "squad",
    name: "Superpower Squad",
  },
  {
    id: "square-token",
    symbol: "squa",
    name: "Square",
  },
  {
    id: "squawk",
    symbol: "squawk",
    name: "Squawk [OLD]",
  },
  {
    id: "squawk-2",
    symbol: "squawk",
    name: "Squawk",
  },
  {
    id: "squeeze-token",
    symbol: "squeeze",
    name: "Squeeze",
  },
  {
    id: "squid-game",
    symbol: "squid",
    name: "Squid Game",
  },
  {
    id: "squidgrow",
    symbol: "squidgrow",
    name: "SquidGrow",
  },
  {
    id: "squid-moon",
    symbol: "sqm",
    name: "Squid Moon",
  },
  {
    id: "squirrel-finance",
    symbol: "nuts",
    name: "Squirrel Finance",
  },
  {
    id: "squirt-game",
    symbol: "squirt",
    name: "Squirt Game",
  },
  {
    id: "squishiverse",
    symbol: "slime",
    name: "SquishiVerse",
  },
  {
    id: "squoge-coin",
    symbol: "sqc",
    name: "Squoge Coin",
  },
  {
    id: "srnartgallery",
    symbol: "sact",
    name: "srnArtGallery",
  },
  {
    id: "srnartgallery-tokenized-arts",
    symbol: "sista",
    name: "srnArtGallery Tokenized Arts",
  },
  {
    id: "srune",
    symbol: "srune",
    name: "sRUNE",
  },
  {
    id: "ssv-network",
    symbol: "ssv",
    name: "SSV Network",
  },
  {
    id: "stabilize",
    symbol: "stbz",
    name: "Stabilize",
  },
  {
    id: "stabilize-bsc",
    symbol: "stbb",
    name: "Stabilize BSC",
  },
  {
    id: "stabilize-token",
    symbol: "set",
    name: "Stabilize SET",
  },
  {
    id: "stabilize-usd",
    symbol: "susd",
    name: "Stabilize USD",
  },
  {
    id: "stable-1inch",
    symbol: "one1inch",
    name: "Stable 1inch",
  },
  {
    id: "stable-asset",
    symbol: "sta",
    name: "STABLE ASSET",
  },
  {
    id: "stabledoc-token",
    symbol: "sdt",
    name: "Stabledoc",
  },
  {
    id: "stablefund-usd",
    symbol: "sfusd",
    name: "StableFund USD",
  },
  {
    id: "stable-one-rocket",
    symbol: "srocket",
    name: "Stable One Rocket",
  },
  {
    id: "stableusd",
    symbol: "usds",
    name: "Stably USDS",
  },
  {
    id: "stablexswap",
    symbol: "stax",
    name: "StableXSwap",
  },
  {
    id: "stabl-fi",
    symbol: "cash",
    name: "Stabl.fi",
  },
  {
    id: "stacker-ventures",
    symbol: "stack",
    name: "Stacker Ventures",
  },
  {
    id: "stackos",
    symbol: "stack",
    name: "StackOS",
  },
  {
    id: "stacktical",
    symbol: "dsla",
    name: "DSLA Protocol",
  },
  {
    id: "stacy",
    symbol: "stacy",
    name: "Stacy",
  },
  {
    id: "stader",
    symbol: "sd",
    name: "Stader",
  },
  {
    id: "stader-bnbx",
    symbol: "bnbx",
    name: "Stader BNBx",
  },
  {
    id: "stader-maticx",
    symbol: "maticx",
    name: "Stader MaticX",
  },
  {
    id: "stader-nearx",
    symbol: "nearx",
    name: "Stader NearX",
  },
  {
    id: "stader-sftmx",
    symbol: "sftmx",
    name: "Stader sFTMX",
  },
  {
    id: "stadium",
    symbol: "std",
    name: "Stadium",
  },
  {
    id: "stadium-pepe",
    symbol: "spep",
    name: "Stadium Pepe",
  },
  {
    id: "stafi",
    symbol: "fis",
    name: "Stafi",
  },
  {
    id: "stakeborg-dao",
    symbol: "standard",
    name: "Stakeborg DAO",
  },
  {
    id: "stakecube",
    symbol: "scc",
    name: "Stakecube",
  },
  {
    id: "staked-aave-balancer-pool-token",
    symbol: "stkabpt",
    name: "Staked Aave Balancer Pool Token",
  },
  {
    id: "stake-dao",
    symbol: "sdt",
    name: "Stake DAO",
  },
  {
    id: "stake-dao-crv",
    symbol: "sdcrv",
    name: "Stake DAO CRV",
  },
  {
    id: "staked-celo",
    symbol: "stcelo",
    name: "Staked Celo",
  },
  {
    id: "staked-ether",
    symbol: "steth",
    name: "Lido Staked Ether",
  },
  {
    id: "staked-frax-ether",
    symbol: "sfrxeth",
    name: "Staked Frax Ether",
  },
  {
    id: "staked-icx",
    symbol: "sicx",
    name: "Staked ICX",
  },
  {
    id: "staked-kcs",
    symbol: "skcs",
    name: "Staked KCS",
  },
  {
    id: "staked-near",
    symbol: "stnear",
    name: "Staked NEAR",
  },
  {
    id: "staked-tarot",
    symbol: "xtarot",
    name: "Staked TAROT",
  },
  {
    id: "stakedthorus",
    symbol: "stho",
    name: "Staked Thorus",
  },
  {
    id: "staked-yearn-crv-vault",
    symbol: "st-ycrv",
    name: "Staked Yearn CRV Vault",
  },
  {
    id: "stakeeasy-bjuno",
    symbol: "bjuno",
    name: "StakeEasy bJuno",
  },
  {
    id: "stakeeasy-juno-derivative",
    symbol: "sejuno",
    name: "StakeEasy Juno Derivative",
  },
  {
    id: "stake-link",
    symbol: "sdl",
    name: "stake.link",
  },
  {
    id: "stakemoon",
    symbol: "smoon",
    name: "Stakemoon",
  },
  {
    id: "staker",
    symbol: "str",
    name: "Staker",
  },
  {
    id: "staker-dao",
    symbol: "stkr",
    name: "Staker DAO",
  },
  {
    id: "stakewise",
    symbol: "swise",
    name: "StakeWise",
  },
  {
    id: "stakewise-reward-gno",
    symbol: "rgno",
    name: "StakeWise Reward GNO",
  },
  {
    id: "stamen-tellus-token",
    symbol: "stt",
    name: "Stamen Tellus Token",
  },
  {
    id: "standard-euro",
    symbol: "seuro",
    name: "Standard Euro",
  },
  {
    id: "standard-protocol",
    symbol: "stnd",
    name: "Standard Protocol",
  },
  {
    id: "standard-token",
    symbol: "tst",
    name: "The Standard Token",
  },
  {
    id: "stand-cash",
    symbol: "sac",
    name: "Stand Cash",
  },
  {
    id: "stand-share",
    symbol: "sas",
    name: "Stand Share",
  },
  {
    id: "star-atlas",
    symbol: "atlas",
    name: "Star Atlas",
  },
  {
    id: "star-atlas-dao",
    symbol: "polis",
    name: "Star Atlas DAO",
  },
  {
    id: "starbase",
    symbol: "star",
    name: "Starbase",
  },
  {
    id: "starbaseuniverse",
    symbol: "suni",
    name: "StarbaseUniverse",
  },
  {
    id: "starbots",
    symbol: "bot",
    name: "Starbots",
  },
  {
    id: "starbots-gear",
    symbol: "gear",
    name: "Starbots GEAR",
  },
  {
    id: "starchain",
    symbol: "stc",
    name: "StarChain",
  },
  {
    id: "star-chain",
    symbol: "star",
    name: "Star Chain",
  },
  {
    id: "starchi",
    symbol: "elixir",
    name: "Starchi",
  },
  {
    id: "starcoin",
    symbol: "stc",
    name: "Starcoin",
  },
  {
    id: "starduke",
    symbol: "sdk",
    name: "StarDuke",
  },
  {
    id: "starfish-finance",
    symbol: "sean",
    name: "Starfish Finance",
  },
  {
    id: "starfish-os",
    symbol: "sfo",
    name: "StarFish OS",
  },
  {
    id: "starfish-os-igt",
    symbol: "igt",
    name: "Starfish OS IGT",
  },
  {
    id: "stargate-finance",
    symbol: "stg",
    name: "Stargate Finance",
  },
  {
    id: "stargaze",
    symbol: "stars",
    name: "Stargaze",
  },
  {
    id: "stargazer-protocol",
    symbol: "stardust",
    name: "Stargazer Protocol",
  },
  {
    id: "starkmeta",
    symbol: "smeta",
    name: "StarkMeta",
  },
  {
    id: "starknet",
    symbol: "strk",
    name: "StarkNet",
  },
  {
    id: "starlaunch",
    symbol: "stars",
    name: "StarLaunch",
  },
  {
    id: "starlay-finance",
    symbol: "lay",
    name: "Starlay Finance",
  },
  {
    id: "starlink",
    symbol: "starl",
    name: "StarLink",
  },
  {
    id: "starly",
    symbol: "starly",
    name: "Starly",
  },
  {
    id: "starmon-token",
    symbol: "smon",
    name: "StarMon",
  },
  {
    id: "starname",
    symbol: "iov",
    name: "Starname",
  },
  {
    id: "starpad",
    symbol: "srp",
    name: "Starpad",
  },
  {
    id: "starpark",
    symbol: "starp",
    name: "STARPARK",
  },
  {
    id: "starplay",
    symbol: "stpc",
    name: "StarPlay",
  },
  {
    id: "starsharks",
    symbol: "sss",
    name: "StarSharks",
  },
  {
    id: "starsharks-sea",
    symbol: "sea",
    name: "StarSharks SEA",
  },
  {
    id: "starship",
    symbol: "starship",
    name: "StarShip",
  },
  {
    id: "star-ship-royal",
    symbol: "ssr",
    name: "Star Ship Royal",
  },
  {
    id: "starship-token",
    symbol: "stars",
    name: "StarShip Stars",
  },
  {
    id: "starslax",
    symbol: "sslx",
    name: "StarSlax",
  },
  {
    id: "starswap",
    symbol: "star",
    name: "StarSwap",
  },
  {
    id: "star-wars-cat",
    symbol: "swcat",
    name: "Star Wars Cat",
  },
  {
    id: "starwire",
    symbol: "str",
    name: "Starwire",
  },
  {
    id: "starworks-global-ecosystem",
    symbol: "starx",
    name: "STARX",
  },
  {
    id: "starz",
    symbol: "stz",
    name: "Starz",
  },
  {
    id: "stasis-eurs",
    symbol: "eurs",
    name: "STASIS EURO",
  },
  {
    id: "stat",
    symbol: "stat",
    name: "STAT",
  },
  {
    id: "stater",
    symbol: "str",
    name: "Stater",
  },
  {
    id: "statera",
    symbol: "sta",
    name: "Statera",
  },
  {
    id: "statik",
    symbol: "statik",
    name: "Statik",
  },
  {
    id: "sta-token",
    symbol: "sta",
    name: "STA",
  },
  {
    id: "status",
    symbol: "snt",
    name: "Status",
  },
  {
    id: "stay",
    symbol: "stay",
    name: "STAY",
  },
  {
    id: "staykx",
    symbol: "stx",
    name: "StaykX",
  },
  {
    id: "staysafu",
    symbol: "safu",
    name: "StaySAFU",
  },
  {
    id: "staysbase",
    symbol: "sbs",
    name: "StaysBASE",
  },
  {
    id: "steakbank-finance",
    symbol: "sbf",
    name: "SteakBank Finance",
  },
  {
    id: "steakhut-finance",
    symbol: "steak",
    name: "SteakHut Finance",
  },
  {
    id: "steaks-finance",
    symbol: "steak",
    name: "Steaks Finance",
  },
  {
    id: "stealthcoin",
    symbol: "xst",
    name: "Stealth",
  },
  {
    id: "steam-exchange",
    symbol: "steamx",
    name: "Steam Exchange",
  },
  {
    id: "steel",
    symbol: "steel",
    name: "Steel",
  },
  {
    id: "steem",
    symbol: "steem",
    name: "Steem",
  },
  {
    id: "steem-dollars",
    symbol: "sbd",
    name: "Steem Dollars",
  },
  {
    id: "stelia",
    symbol: "stelia",
    name: "Stelia",
  },
  {
    id: "stellar",
    symbol: "xlm",
    name: "Stellar",
  },
  {
    id: "stellar-diamond",
    symbol: "xld",
    name: "Stellar Diamond",
  },
  {
    id: "stellarinu",
    symbol: "stellarinu",
    name: "StellarInu",
  },
  {
    id: "stellaswap",
    symbol: "stella",
    name: "StellaSwap",
  },
  {
    id: "stellite",
    symbol: "xla",
    name: "Scala",
  },
  {
    id: "stemx",
    symbol: "stemx",
    name: "STEMX",
  },
  {
    id: "step",
    symbol: "step",
    name: "Step",
  },
  {
    id: "step-app-fitfi",
    symbol: "fitfi",
    name: "Step App",
  },
  {
    id: "step-c",
    symbol: "stc",
    name: "Step C",
  },
  {
    id: "stepex",
    symbol: "spex",
    name: "StepEx",
  },
  {
    id: "step-finance",
    symbol: "step",
    name: "Step Finance",
  },
  {
    id: "stepg",
    symbol: "stepg",
    name: "STEPG",
  },
  {
    id: "step-hero",
    symbol: "hero",
    name: "Step Hero",
  },
  {
    id: "step-hero-soul",
    symbol: "step",
    name: "Step Hero Soul",
  },
  {
    id: "stepn",
    symbol: "gmt",
    name: "STEPN",
  },
  {
    id: "stepwatch",
    symbol: "swp",
    name: "Stepwatch",
  },
  {
    id: "stepwatch-land-token",
    symbol: "swld",
    name: "Stepwatch Land Token",
  },
  {
    id: "stepwell",
    symbol: "stw",
    name: "StepWell",
  },
  {
    id: "stfu-labs",
    symbol: "stfu",
    name: "STFU Labs",
  },
  {
    id: "stickman-battleground",
    symbol: "stman",
    name: "Stickman Battleground",
  },
  {
    id: "stilton",
    symbol: "stilt",
    name: "Stilton",
  },
  {
    id: "stilton-musk",
    symbol: "stilton",
    name: "Stilton Musk [OLD]",
  },
  {
    id: "stima",
    symbol: "stima",
    name: "STIMA",
  },
  {
    id: "stimmy",
    symbol: "stimmy",
    name: "$STIMMY",
  },
  {
    id: "sting",
    symbol: "stn",
    name: "Sting",
  },
  {
    id: "stingdefi",
    symbol: "sdfi",
    name: "StingDefi",
  },
  {
    id: "stipend",
    symbol: "spd",
    name: "Stipend",
  },
  {
    id: "stkatom",
    symbol: "stkatom",
    name: "stkATOM",
  },
  {
    id: "stkd-scrt",
    symbol: "stkd",
    name: "Stkd SCRT",
  },
  {
    id: "stobox-token",
    symbol: "stbu",
    name: "Stobox",
  },
  {
    id: "ston",
    symbol: "ston",
    name: "Ston",
  },
  {
    id: "stoneage-nft",
    symbol: "ges",
    name: "Stoneage NFT",
  },
  {
    id: "stonedao",
    symbol: "sdt",
    name: "StoneDAO",
  },
  {
    id: "stoned-ape-crew-index",
    symbol: "sac",
    name: "Stoned Ape Crew Index",
  },
  {
    id: "stone-token",
    symbol: "stn",
    name: "Stone",
  },
  {
    id: "stonk-2",
    symbol: "stonk",
    name: "Stonk",
  },
  {
    id: "stonkleague",
    symbol: "aegis",
    name: "StonkLeague",
  },
  {
    id: "stopelon",
    symbol: "stopelon",
    name: "StopElon",
  },
  {
    id: "storage-area-network-anywhere",
    symbol: "sana",
    name: "Storage Area Network Anywhere",
  },
  {
    id: "storepay",
    symbol: "spc",
    name: "Storepay",
  },
  {
    id: "storiqa",
    symbol: "stq",
    name: "Storiqa",
  },
  {
    id: "storj",
    symbol: "storj",
    name: "Storj",
  },
  {
    id: "storm",
    symbol: "stmx",
    name: "StormX",
  },
  {
    id: "storm-bringer-token",
    symbol: "stb",
    name: "Storm Bringer",
  },
  {
    id: "storm-token",
    symbol: "storm",
    name: "Storm",
  },
  {
    id: "storx",
    symbol: "srx",
    name: "StorX",
  },
  {
    id: "story",
    symbol: "story",
    name: "Story",
  },
  {
    id: "stox",
    symbol: "stx",
    name: "Stox",
  },
  {
    id: "stp-network",
    symbol: "stpt",
    name: "STP",
  },
  {
    id: "strains",
    symbol: "sfn",
    name: "Strains",
  },
  {
    id: "straitsx-indonesia-rupiah",
    symbol: "xidr",
    name: "XIDR",
  },
  {
    id: "stratis",
    symbol: "strax",
    name: "Stratis",
  },
  {
    id: "stratos",
    symbol: "stos",
    name: "Stratos",
  },
  {
    id: "strawberry-share",
    symbol: "$straw",
    name: "Strawberry Share",
  },
  {
    id: "strayacoin",
    symbol: "nah",
    name: "Strayacoin",
  },
  {
    id: "streakk",
    symbol: "stkk",
    name: "Streakk",
  },
  {
    id: "stream2earn",
    symbol: "streamn",
    name: "Stream2Earn",
  },
  {
    id: "streamcoin",
    symbol: "strm",
    name: "StreamCoin",
  },
  {
    id: "streamer-inu",
    symbol: "streamerinu",
    name: "Streamer Inu",
  },
  {
    id: "stream-protocol",
    symbol: "stpl",
    name: "Stream Protocol",
  },
  {
    id: "streamr",
    symbol: "data",
    name: "Streamr",
  },
  {
    id: "streamr-xdata",
    symbol: "xdata",
    name: "Streamr XDATA",
  },
  {
    id: "streeth",
    symbol: "streeth",
    name: "STREETH",
  },
  {
    id: "street-runner",
    symbol: "srg",
    name: "Street Runner",
  },
  {
    id: "stride",
    symbol: "strd",
    name: "Stride",
  },
  {
    id: "stride-staked-atom",
    symbol: "statom",
    name: "Stride Staked Atom",
  },
  {
    id: "strike",
    symbol: "strk",
    name: "Strike",
  },
  {
    id: "strikecoin",
    symbol: "strx",
    name: "StrikeX",
  },
  {
    id: "stripcoin",
    symbol: "strip",
    name: "StripCoin",
  },
  {
    id: "strip-finance",
    symbol: "strip",
    name: "Strip Finance",
  },
  {
    id: "strips-finance",
    symbol: "strp",
    name: "Strips Finance",
  },
  {
    id: "stripto",
    symbol: "strip",
    name: "Stripto",
  },
  {
    id: "strite",
    symbol: "stri",
    name: "Strite",
  },
  {
    id: "strong",
    symbol: "strong",
    name: "Strong",
  },
  {
    id: "stronger",
    symbol: "strngr",
    name: "Stronger",
  },
  {
    id: "stronghands",
    symbol: "shnd",
    name: "StrongHands",
  },
  {
    id: "stronghands-finance",
    symbol: "ishnd",
    name: "StrongHands Finance",
  },
  {
    id: "stronghands-masternode",
    symbol: "shmn",
    name: "StrongHands Masternode",
  },
  {
    id: "stronghold-token",
    symbol: "shx",
    name: "Stronghold",
  },
  {
    id: "strongnode",
    symbol: "sne",
    name: "StrongNode",
  },
  {
    id: "structure-finance",
    symbol: "stf",
    name: "Structure Finance",
  },
  {
    id: "strudel-finance",
    symbol: "trdl",
    name: "Strudel Finance",
  },
  {
    id: "strx-finance",
    symbol: "sfi",
    name: "STRX Finance",
  },
  {
    id: "student-coin",
    symbol: "stc",
    name: "Student Coin",
  },
  {
    id: "studyum",
    symbol: "stud",
    name: "Studyum",
  },
  {
    id: "style",
    symbol: "style",
    name: "Style",
  },
  {
    id: "stylike-governance",
    symbol: "styl",
    name: "Stylike Governance",
  },
  {
    id: "subdao",
    symbol: "gov",
    name: "SubDAO",
  },
  {
    id: "subme",
    symbol: "sub",
    name: "Subme",
  },
  {
    id: "substratum",
    symbol: "sub",
    name: "Substratum",
  },
  {
    id: "success-inu",
    symbol: "success",
    name: "SUCCESS INU",
  },
  {
    id: "succession",
    symbol: "sccn",
    name: "Succession",
  },
  {
    id: "successlife",
    symbol: "sxl",
    name: "Successlife",
  },
  {
    id: "such-shiba",
    symbol: "such",
    name: "Such Shiba",
  },
  {
    id: "sucrecoin",
    symbol: "xsr",
    name: "Sucrecoin",
  },
  {
    id: "sudoswap",
    symbol: "sudo",
    name: "sudoswap",
  },
  {
    id: "sugarbounce",
    symbol: "tip",
    name: "SugarBounce",
  },
  {
    id: "sugarchain",
    symbol: "sugar",
    name: "Sugarchain",
  },
  {
    id: "sugar-kingdom",
    symbol: "candy",
    name: "Sugar Kingdom",
  },
  {
    id: "sui",
    symbol: "sui",
    name: "Sui",
  },
  {
    id: "sukhavati-network",
    symbol: "skt",
    name: "Sukhavati Network",
  },
  {
    id: "suku",
    symbol: "suku",
    name: "SUKU",
  },
  {
    id: "summer",
    symbol: "summer",
    name: "Summer",
  },
  {
    id: "summoners-arena-essence",
    symbol: "sae",
    name: "Summoners Arena Essence",
  },
  {
    id: "sumokoin",
    symbol: "sumo",
    name: "Sumokoin",
  },
  {
    id: "sumotex",
    symbol: "smtx",
    name: "SUMOTEX",
  },
  {
    id: "sumswap",
    symbol: "sum",
    name: "SumSwap",
  },
  {
    id: "suncontract",
    symbol: "snc",
    name: "SunContract",
  },
  {
    id: "sundaeswap",
    symbol: "sundae",
    name: "SundaeSwap",
  },
  {
    id: "sunder-goverance-token",
    symbol: "sunder",
    name: "Sunder Goverance",
  },
  {
    id: "suneku",
    symbol: "suneku",
    name: "Suneku",
  },
  {
    id: "sunflower-finance",
    symbol: "sfo",
    name: "Sunflower Finance",
  },
  {
    id: "sunflower-land",
    symbol: "sfl",
    name: "Sunflower Land",
  },
  {
    id: "sunflower-token",
    symbol: "stk",
    name: "Sunflower Token",
  },
  {
    id: "sunny-aggregator",
    symbol: "sunny",
    name: "Sunny Aggregator",
  },
  {
    id: "sunnysideup",
    symbol: "ssu",
    name: "SunnySideUp",
  },
  {
    id: "sunrise",
    symbol: "sunc",
    name: "Sunrise",
  },
  {
    id: "sun-token",
    symbol: "sun",
    name: "Sun Token",
  },
  {
    id: "supa-foundation",
    symbol: "supa",
    name: "SUPA Foundation",
  },
  {
    id: "supe-infinity",
    symbol: "supe",
    name: "Supe Infinity",
  },
  {
    id: "super8",
    symbol: "s8",
    name: "Super8",
  },
  {
    id: "super-athletes-token",
    symbol: "sat",
    name: "Super Athletes Token",
  },
  {
    id: "superbid",
    symbol: "superbid",
    name: "SuperBid",
  },
  {
    id: "superbonds",
    symbol: "sb",
    name: "SuperBonds",
  },
  {
    id: "supercars",
    symbol: "car",
    name: "Supercars",
  },
  {
    id: "supercats",
    symbol: "s-cats",
    name: "SUPERCATS",
  },
  {
    id: "superciety",
    symbol: "super",
    name: "Superciety",
  },
  {
    id: "supercoin",
    symbol: "super",
    name: "SuperCoin",
  },
  {
    id: "super-coinview-token",
    symbol: "scv",
    name: "Super CoinView",
  },
  {
    id: "superdoge",
    symbol: "supdog",
    name: "SuperDoge",
  },
  {
    id: "superfarm",
    symbol: "super",
    name: "SuperVerse",
  },
  {
    id: "super-hero",
    symbol: "sh",
    name: "Super Hero",
  },
  {
    id: "superinu",
    symbol: "sinu",
    name: "SuperInu",
  },
  {
    id: "superlauncher-dao",
    symbol: "launch",
    name: "Superlauncher",
  },
  {
    id: "supermegahyperdoge",
    symbol: "smhdoge",
    name: "SuperMegaHyperDoge",
  },
  {
    id: "supernova",
    symbol: "snt",
    name: "Supernova",
  },
  {
    id: "superpower-squad",
    symbol: "ecg",
    name: "Superpower Squad ECG",
  },
  {
    id: "super-protocol-token",
    symbol: "tee",
    name: "Super Protocol Token",
  },
  {
    id: "superrare",
    symbol: "rare",
    name: "SuperRare",
  },
  {
    id: "super-rare-ball-shares",
    symbol: "srbp",
    name: "Super Rare Ball Potion",
  },
  {
    id: "super-shiba",
    symbol: "$sshiba",
    name: "Super Shiba",
  },
  {
    id: "superskynet",
    symbol: "ssn",
    name: "SuperSkyNet",
  },
  {
    id: "superstep",
    symbol: "sgmt",
    name: "SuperStep",
  },
  {
    id: "super-three-kingdoms",
    symbol: "stk",
    name: "Super Three Kingdoms",
  },
  {
    id: "supertx-governance-token",
    symbol: "sup",
    name: "SuperTx Governance",
  },
  {
    id: "superwalk",
    symbol: "grnd",
    name: "SuperWalk",
  },
  {
    id: "super-whale-dao",
    symbol: "swdao",
    name: "Super Whale DAO",
  },
  {
    id: "super-zero",
    symbol: "sero",
    name: "SERO",
  },
  {
    id: "supplycon",
    symbol: "splc",
    name: "SupplyCon",
  },
  {
    id: "support-doge",
    symbol: "supd",
    name: "Support Doge",
  },
  {
    id: "supremacy",
    symbol: "sups",
    name: "Supremacy",
  },
  {
    id: "supreme-finance",
    symbol: "hype",
    name: "Supreme Finance",
  },
  {
    id: "supreme-finance-hypes",
    symbol: "hypes",
    name: "Supreme Finance HYPES",
  },
  {
    id: "suprenft",
    symbol: "snft",
    name: "SupreNFT",
  },
  {
    id: "suqa",
    symbol: "sin",
    name: "SINOVATE",
  },
  {
    id: "sureremit",
    symbol: "rmt",
    name: "SureRemit",
  },
  {
    id: "surfexutilitytoken",
    symbol: "surf",
    name: "SurfExUtilityToken",
  },
  {
    id: "surf-finance",
    symbol: "surf",
    name: "Surf.Finance",
  },
  {
    id: "surf-live",
    symbol: "surf",
    name: "Surf Live",
  },
  {
    id: "surfswap",
    symbol: "tide",
    name: "Surfswap",
  },
  {
    id: "surge-inu",
    symbol: "surge",
    name: "Surge Inu",
  },
  {
    id: "survival-game-online",
    symbol: "surv",
    name: "Survival Game Online",
  },
  {
    id: "surviving-soldiers",
    symbol: "ssg",
    name: "Surviving Soldiers",
  },
  {
    id: "survivor",
    symbol: "$srv",
    name: "Survivor",
  },
  {
    id: "sushi",
    symbol: "sushi",
    name: "Sushi",
  },
  {
    id: "sushiba",
    symbol: "sushiba",
    name: "Sushiba",
  },
  {
    id: "sustainable-energy-token",
    symbol: "set",
    name: "Sustainable Energy",
  },
  {
    id: "suterusu",
    symbol: "suter",
    name: "Suterusu",
  },
  {
    id: "suvereno",
    symbol: "suv",
    name: "Suvereno",
  },
  {
    id: "suzaku",
    symbol: "suza",
    name: "Suzaku",
  },
  {
    id: "swace",
    symbol: "swace",
    name: "Swace",
  },
  {
    id: "swagbucks",
    symbol: "bucks",
    name: "SwagBucks",
  },
  {
    id: "swag-finance",
    symbol: "swag",
    name: "SWAG Finance",
  },
  {
    id: "s-wallet-protocol",
    symbol: "swp",
    name: "S-Wallet Protocol",
  },
  {
    id: "swamp-coin",
    symbol: "swamp",
    name: "Swamp Coin",
  },
  {
    id: "swampy",
    symbol: "swamp",
    name: "Swampy",
  },
  {
    id: "swanlana",
    symbol: "swan",
    name: "Swanlana",
  },
  {
    id: "swap",
    symbol: "xwp",
    name: "Swap",
  },
  {
    id: "swapdex",
    symbol: "sdx",
    name: "SwapDEX",
  },
  {
    id: "swaperry",
    symbol: "perry",
    name: "Swaperry",
  },
  {
    id: "swapfish",
    symbol: "fish",
    name: "SwapFish",
  },
  {
    id: "swapfolio",
    symbol: "swfl",
    name: "Swapfolio",
  },
  {
    id: "swapify",
    symbol: "swify",
    name: "Swapify",
  },
  {
    id: "swapp",
    symbol: "swapp",
    name: "SWAPP Protocol",
  },
  {
    id: "swappery-token",
    symbol: "swpr",
    name: "The Swappery",
  },
  {
    id: "swappi",
    symbol: "ppi",
    name: "Swappi",
  },
  {
    id: "swapr",
    symbol: "swpr",
    name: "Swapr",
  },
  {
    id: "swaptracker",
    symbol: "swpt",
    name: "SwapTracker",
  },
  {
    id: "swapx",
    symbol: "xwap",
    name: "SwapX",
  },
  {
    id: "swapxi-token",
    symbol: "swapxi",
    name: "SwapXI",
  },
  {
    id: "swapz-app",
    symbol: "swapz",
    name: "SWAPZ.app",
  },
  {
    id: "swarm",
    symbol: "swm",
    name: "Swarm Network",
  },
  {
    id: "swarm-bzz",
    symbol: "bzz",
    name: "Swarm",
  },
  {
    id: "swarm-city",
    symbol: "swt",
    name: "Swarm City",
  },
  {
    id: "swarm-markets",
    symbol: "smt",
    name: "Swarm Markets",
  },
  {
    id: "swash",
    symbol: "swash",
    name: "Swash",
  },
  {
    id: "sway-social",
    symbol: "sway",
    name: "Sway Social",
  },
  {
    id: "sweatcoin",
    symbol: "sweat",
    name: "Sweatcoin - Sweat Economy",
  },
  {
    id: "sweep-capital",
    symbol: "sweep",
    name: "Sweep Capital",
  },
  {
    id: "sweep-token",
    symbol: "sweep",
    name: "Sweep Token",
  },
  {
    id: "sweettoken",
    symbol: "swt",
    name: "SweetToken",
  },
  {
    id: "sweply",
    symbol: "swply",
    name: "Sweply",
  },
  {
    id: "swerve-dao",
    symbol: "swrv",
    name: "Swerve",
  },
  {
    id: "swerve-protocol",
    symbol: "swerve",
    name: "SWERVE Protocol",
  },
  {
    id: "swftcoin",
    symbol: "swftc",
    name: "SWFTCOIN",
  },
  {
    id: "swgtoken",
    symbol: "swg",
    name: "SWG",
  },
  {
    id: "swiftcash",
    symbol: "swift",
    name: "SwiftCash",
  },
  {
    id: "swiftlance-token",
    symbol: "swl",
    name: "Swiftlance",
  },
  {
    id: "swinca-2",
    symbol: "swi",
    name: "Swinca",
  },
  {
    id: "swing",
    symbol: "swing",
    name: "Swing",
  },
  {
    id: "swingby",
    symbol: "swingby",
    name: "Swingby",
  },
  {
    id: "swing-dao",
    symbol: "swing",
    name: "Swing DAO",
  },
  {
    id: "swing-xyz",
    symbol: "$swing",
    name: "Swing.xyz",
  },
  {
    id: "swipe",
    symbol: "sxp",
    name: "SXP",
  },
  {
    id: "swirltoken",
    symbol: "swirl",
    name: "Swirl",
  },
  {
    id: "swissborg",
    symbol: "chsb",
    name: "SwissBorg",
  },
  {
    id: "swiss-nft-fund",
    symbol: "swissnftfund",
    name: "Swiss NFT Fund",
  },
  {
    id: "switch",
    symbol: "esh",
    name: "Switch",
  },
  {
    id: "switcheo",
    symbol: "swth",
    name: "Carbon Protocol",
  },
  {
    id: "swivel-governance",
    symbol: "swiv",
    name: "Swivel Governance",
  },
  {
    id: "swole-doge",
    symbol: "swole",
    name: "Swole Doge",
  },
  {
    id: "swop",
    symbol: "swop",
    name: "Swop",
  },
  {
    id: "swtcoin",
    symbol: "swat",
    name: "SWTCoin",
  },
  {
    id: "swusd",
    symbol: "swusd",
    name: "Swerve.fi USD",
  },
  {
    id: "sx-network",
    symbol: "sx",
    name: "SX Network",
  },
  {
    id: "sya-x-flooz",
    symbol: "sya",
    name: "SYA x Flooz",
  },
  {
    id: "sybc-coin",
    symbol: "sybc",
    name: "SYBC Coin",
  },
  {
    id: "syfin",
    symbol: "syf",
    name: "Syfin",
  },
  {
    id: "sylo",
    symbol: "sylo",
    name: "Sylo",
  },
  {
    id: "syltare",
    symbol: "syl",
    name: "SYLTARE",
  },
  {
    id: "symbiosis-finance",
    symbol: "sis",
    name: "Symbiosis Finance",
  },
  {
    id: "symbol",
    symbol: "xym",
    name: "Symbol",
  },
  {
    id: "symmetric",
    symbol: "symm",
    name: "Symmetric",
  },
  {
    id: "symverse",
    symbol: "sym",
    name: "SymVerse",
  },
  {
    id: "synapse-2",
    symbol: "syn",
    name: "Synapse",
  },
  {
    id: "synapse-network",
    symbol: "snp",
    name: "Synapse Network",
  },
  {
    id: "syncdao-governance",
    symbol: "sdg",
    name: "SyncDAO Governance",
  },
  {
    id: "synchrobitcoin",
    symbol: "snb",
    name: "SynchroBitcoin",
  },
  {
    id: "synchrocoin",
    symbol: "syc",
    name: "SynchroCoin",
  },
  {
    id: "synchrony",
    symbol: "scy",
    name: "Synchrony",
  },
  {
    id: "sync-network",
    symbol: "sync",
    name: "Sync Network",
  },
  {
    id: "syndicate-2",
    symbol: "synr",
    name: "MOBLAND",
  },
  {
    id: "synesis-one",
    symbol: "sns",
    name: "Synesis One",
  },
  {
    id: "synex-coin",
    symbol: "minecraft",
    name: "Synex Coin",
  },
  {
    id: "synthetic-ftt",
    symbol: "xftt",
    name: "Synthetic FTT",
  },
  {
    id: "synthetic-sol",
    symbol: "xsol",
    name: "Synthetic SOL",
  },
  {
    id: "synthetic-usd",
    symbol: "xusd",
    name: "Synthetic USD",
  },
  {
    id: "synthetify-token",
    symbol: "sny",
    name: "Synthetify",
  },
  {
    id: "synth-ousd",
    symbol: "ousd",
    name: "Synth oUSD",
  },
  {
    id: "sypool",
    symbol: "syp",
    name: "Sypool",
  },
  {
    id: "syscoin",
    symbol: "sys",
    name: "Syscoin",
  },
  {
    id: "t23",
    symbol: "t23",
    name: "T23",
  },
  {
    id: "t99",
    symbol: "t99",
    name: "T99",
  },
  {
    id: "tabank",
    symbol: "tab",
    name: "Tabank",
  },
  {
    id: "taboo-token",
    symbol: "taboo",
    name: "Taboo",
  },
  {
    id: "tabtrader",
    symbol: "ttt",
    name: "TabTrader",
  },
  {
    id: "tacos",
    symbol: "taco",
    name: "Tacos",
  },
  {
    id: "tadpole-finance",
    symbol: "tad",
    name: "Tadpole",
  },
  {
    id: "tagcoin",
    symbol: "tag",
    name: "Tagcoin",
  },
  {
    id: "tag-protocol",
    symbol: "tag",
    name: "Tag Protocol",
  },
  {
    id: "tagrcoin",
    symbol: "tagr",
    name: "TAGRcoin",
  },
  {
    id: "tahu",
    symbol: "tahu",
    name: "TAHU",
  },
  {
    id: "tai",
    symbol: "tai",
    name: "tBridge",
  },
  {
    id: "tail",
    symbol: "tail",
    name: "Tail",
  },
  {
    id: "tails",
    symbol: "tails",
    name: "Tails",
  },
  {
    id: "tajcoin",
    symbol: "taj",
    name: "TajCoin",
  },
  {
    id: "takamaka-green-coin",
    symbol: "tkg",
    name: "Takamaka",
  },
  {
    id: "takeda-shin",
    symbol: "takeda",
    name: "Takeda Shin",
  },
  {
    id: "takepile",
    symbol: "take",
    name: "Takepile",
  },
  {
    id: "taki",
    symbol: "taki",
    name: "Taki",
  },
  {
    id: "taklimakan-network",
    symbol: "tan",
    name: "Taklimakan Network",
  },
  {
    id: "tako-token",
    symbol: "tako",
    name: "Tako",
  },
  {
    id: "talaria-inu",
    symbol: "tali",
    name: "Talaria Inu",
  },
  {
    id: "talecraft",
    symbol: "craft",
    name: "TaleCraft",
  },
  {
    id: "talent",
    symbol: "tnt",
    name: "Talent",
  },
  {
    id: "talent-coin",
    symbol: "tlnt",
    name: "Talent Coin",
  },
  {
    id: "talent-token",
    symbol: "ttx",
    name: "Talent TTX",
  },
  {
    id: "taler",
    symbol: "tlr",
    name: "Taler",
  },
  {
    id: "talkado",
    symbol: "talk",
    name: "Talkado",
  },
  {
    id: "talken",
    symbol: "talk",
    name: "Talken",
  },
  {
    id: "tamadoge",
    symbol: "tama",
    name: "Tamadoge",
  },
  {
    id: "tama-finance",
    symbol: "tama",
    name: "Tama Finance",
  },
  {
    id: "tangent",
    symbol: "tang",
    name: "Tangent",
  },
  {
    id: "tangle",
    symbol: "tngl",
    name: "Tangle",
  },
  {
    id: "tangoswap",
    symbol: "tango",
    name: "TangoSwap",
  },
  {
    id: "tank-battle",
    symbol: "tbl",
    name: "Tank Battle",
  },
  {
    id: "tank-gold",
    symbol: "tgold",
    name: "Tank Gold",
  },
  {
    id: "tanks",
    symbol: "tanks",
    name: "Tanks",
  },
  {
    id: "tanuki-token",
    symbol: "tanuki",
    name: "Tanuki",
  },
  {
    id: "tao-te-ching",
    symbol: "ttc",
    name: "Tao Te Ching",
  },
  {
    id: "tap",
    symbol: "xtp",
    name: "Tap",
  },
  {
    id: "tap-fantasy",
    symbol: "tap",
    name: "Tap Fantasy",
  },
  {
    id: "tap-fantasy-gold",
    symbol: "tfgold",
    name: "Tap Fantasy Gold",
  },
  {
    id: "tap-fantasy-mc",
    symbol: "tfmc",
    name: "Tap Fantasy MC",
  },
  {
    id: "tapio-protocol",
    symbol: "tap",
    name: "Tapio Protocol",
  },
  {
    id: "tapme-token",
    symbol: "tap",
    name: "TAPME",
  },
  {
    id: "tapmydata",
    symbol: "tap",
    name: "TapX",
  },
  {
    id: "tarality",
    symbol: "taral",
    name: "Tarality",
  },
  {
    id: "taraxa",
    symbol: "tara",
    name: "Taraxa",
  },
  {
    id: "tardigrades-finance",
    symbol: "trdg",
    name: "TRDGtoken",
  },
  {
    id: "tari-world",
    symbol: "tari",
    name: "Tari World",
  },
  {
    id: "tarot",
    symbol: "tarot",
    name: "Tarot",
  },
  {
    id: "taroverse",
    symbol: "taro",
    name: "Taroverse",
  },
  {
    id: "taroverse-gold",
    symbol: "tgold",
    name: "Taroverse Gold",
  },
  {
    id: "tart",
    symbol: "tart",
    name: "Tartarus Finance",
  },
  {
    id: "tastenft",
    symbol: "taste",
    name: "TasteNFT",
  },
  {
    id: "tate-token",
    symbol: "topg",
    name: "Tate Token",
  },
  {
    id: "tattoomoney",
    symbol: "tat2",
    name: "TattooMoney",
  },
  {
    id: "tavittcoin",
    symbol: "tavitt",
    name: "Tavittcoin",
  },
  {
    id: "taxa-token",
    symbol: "txt",
    name: "Taxa Network",
  },
  {
    id: "tax-haven-inu",
    symbol: "taxhaveninu",
    name: "Tax Haven Inu",
  },
  {
    id: "tazor",
    symbol: "tazor",
    name: "Tazor",
  },
  {
    id: "tbcc",
    symbol: "tbcc",
    name: "TBCC",
  },
  {
    id: "t-bitcoin",
    symbol: "tbtc",
    name: "τBitcoin",
  },
  {
    id: "tbtc",
    symbol: "tbtc",
    name: "tBTC",
  },
  {
    id: "tcgcoin",
    symbol: "tcgcoin",
    name: "TCGCoin",
  },
  {
    id: "tcgcoin-2-0",
    symbol: "tcg2",
    name: "TCGCoin 2.0",
  },
  {
    id: "tcg-verse",
    symbol: "tcgc",
    name: "TCG Verse",
  },
  {
    id: "tcoin-fun",
    symbol: "tco",
    name: "Tcoin.fun",
  },
  {
    id: "tdoge",
    symbol: "tdoge",
    name: "τDoge",
  },
  {
    id: "teadao",
    symbol: "tea",
    name: "TeaDAO",
  },
  {
    id: "team-heretics-fan-token",
    symbol: "th",
    name: "Team Heretics Fan Token",
  },
  {
    id: "team-vitality-fan-token",
    symbol: "vit",
    name: "Team Vitality Fan Token",
  },
  {
    id: "teaswap-art",
    symbol: "tsa",
    name: "Teaswap Art",
  },
  {
    id: "tea-token",
    symbol: "tea",
    name: "Tea",
  },
  {
    id: "technoland",
    symbol: "techno",
    name: "Technoland",
  },
  {
    id: "techpay",
    symbol: "tpc",
    name: "Techpay",
  },
  {
    id: "techtrees",
    symbol: "ttc",
    name: "TechTrees",
  },
  {
    id: "tecracoin",
    symbol: "tcr",
    name: "TecraCoin ERC20",
  },
  {
    id: "tectonic",
    symbol: "tonic",
    name: "Tectonic",
  },
  {
    id: "teddy-dog",
    symbol: "tdg",
    name: "Teddy Dog",
  },
  {
    id: "teddy-doge",
    symbol: "teddy",
    name: "Teddy Doge",
  },
  {
    id: "teddy-doge-v2",
    symbol: "teddy v2",
    name: "Teddy Doge V2",
  },
  {
    id: "teddy-dollar",
    symbol: "tsd",
    name: "Teddy Dollar",
  },
  {
    id: "te-food",
    symbol: "tone",
    name: "TE-FOOD",
  },
  {
    id: "tegro",
    symbol: "tgr",
    name: "Tegro",
  },
  {
    id: "teh-golden-one",
    symbol: "gold 1",
    name: "Teh Golden One",
  },
  {
    id: "tekcoin",
    symbol: "tek",
    name: "TEKcoin",
  },
  {
    id: "telcoin",
    symbol: "tel",
    name: "Telcoin",
  },
  {
    id: "telefy",
    symbol: "tele",
    name: "Telefy",
  },
  {
    id: "telegram-inu",
    symbol: "tinu",
    name: "Telegram Inu",
  },
  {
    id: "teleport",
    symbol: "port",
    name: "Teleport",
  },
  {
    id: "tellor",
    symbol: "trb",
    name: "Tellor",
  },
  {
    id: "telos",
    symbol: "tlos",
    name: "Telos",
  },
  {
    id: "telos-coin",
    symbol: "telos",
    name: "Teloscoin",
  },
  {
    id: "temco",
    symbol: "temco",
    name: "TEMCO",
  },
  {
    id: "temdao",
    symbol: "tem",
    name: "TemDAO",
  },
  {
    id: "templardao",
    symbol: "tem",
    name: "Templar DAO",
  },
  {
    id: "temple",
    symbol: "temple",
    name: "TempleDAO",
  },
  {
    id: "tempus",
    symbol: "temp",
    name: "Tempus",
  },
  {
    id: "temtem",
    symbol: "tem",
    name: "Temtum",
  },
  {
    id: "ten",
    symbol: "tenfi",
    name: "TEN",
  },
  {
    id: "ten-best-coins",
    symbol: "tbc",
    name: "Ten Best Coins",
  },
  {
    id: "tendies",
    symbol: "tend",
    name: "Tendies",
  },
  {
    id: "tendieswap",
    symbol: "tendie",
    name: "TendieSwap",
  },
  {
    id: "teneo",
    symbol: "ten",
    name: "Teneo",
  },
  {
    id: "tenet",
    symbol: "ten",
    name: "Tenet",
  },
  {
    id: "tenset",
    symbol: "10set",
    name: "Tenset",
  },
  {
    id: "tenshi",
    symbol: "tenshi",
    name: "Tenshi",
  },
  {
    id: "tenup",
    symbol: "tup",
    name: "Tenup",
  },
  {
    id: "ten-wallet",
    symbol: "tenw",
    name: "TEN Wallet",
  },
  {
    id: "tenx",
    symbol: "pay",
    name: "TenX",
  },
  {
    id: "tepleton",
    symbol: "tep",
    name: "Tepleton",
  },
  {
    id: "terablock",
    symbol: "tbc",
    name: "TeraBlock",
  },
  {
    id: "terareum",
    symbol: "tera",
    name: "Terareum",
  },
  {
    id: "tera-smart-money",
    symbol: "tera",
    name: "TERA",
  },
  {
    id: "teritori",
    symbol: "tori",
    name: "Teritori",
  },
  {
    id: "ternio",
    symbol: "tern",
    name: "Ternio",
  },
  {
    id: "terracoin",
    symbol: "trc",
    name: "Terracoin",
  },
  {
    id: "terraform-dao",
    symbol: "terraform",
    name: "Terraform DAO",
  },
  {
    id: "terra-luna",
    symbol: "lunc",
    name: "Terra Luna Classic",
  },
  {
    id: "terra-luna-2",
    symbol: "luna",
    name: "Terra",
  },
  {
    id: "terra-name-service",
    symbol: "tns",
    name: "Terra Name Service",
  },
  {
    id: "terran-coin",
    symbol: "trr",
    name: "Terran Coin",
  },
  {
    id: "terra-poker-token",
    symbol: "tpt",
    name: "Terra Poker Token",
  },
  {
    id: "terrausd",
    symbol: "ustc",
    name: "TerraClassicUSD",
  },
  {
    id: "terrausd-wormhole",
    symbol: "ust",
    name: "TerraUSD (Wormhole)",
  },
  {
    id: "terra-world-token",
    symbol: "twd",
    name: "Terra World",
  },
  {
    id: "teseract",
    symbol: "tess",
    name: "Tesseract",
  },
  {
    id: "teslafunds",
    symbol: "tsf",
    name: "Transaction Service Fee",
  },
  {
    id: "tesla-inu",
    symbol: "tesinu",
    name: "Tesla Inu",
  },
  {
    id: "tessla-coin",
    symbol: "tsla",
    name: "Tessla Coin",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
  },
  {
    id: "tether-avalanche-bridged-usdt-e",
    symbol: "usdte",
    name: "Tether Avalanche Bridged (USDT.e)",
  },
  {
    id: "tether-eurt",
    symbol: "eurt",
    name: "Euro Tether",
  },
  {
    id: "tether-gold",
    symbol: "xaut",
    name: "Tether Gold",
  },
  {
    id: "tether-pow",
    symbol: "usdw",
    name: "Tether Pow",
  },
  {
    id: "tether-usd-celer",
    symbol: "ceusdt",
    name: "Tether USD - Celer",
  },
  {
    id: "tether-usd-pos-wormhole",
    symbol: "usdtpo",
    name: "Tether USD (PoS) (Wormhole)",
  },
  {
    id: "tether-usd-wormhole",
    symbol: "usdtso",
    name: "Tether USD (Wormhole)",
  },
  {
    id: "tether-usd-wormhole-from-ethereum",
    symbol: "usdtet",
    name: "Tether USD (Wormhole from Ethereum)",
  },
  {
    id: "tethys-finance",
    symbol: "tethys",
    name: "Tethys Finance",
  },
  {
    id: "tetu",
    symbol: "tetu",
    name: "TETU",
  },
  {
    id: "tetubal",
    symbol: "tetubal",
    name: "tetuBAL",
  },
  {
    id: "tetuqi",
    symbol: "tetuqi",
    name: "tetuQi",
  },
  {
    id: "texas-protocol",
    symbol: "txs",
    name: "Texas Protocol",
  },
  {
    id: "tezos",
    symbol: "xtz",
    name: "Tezos",
  },
  {
    id: "tfs-token",
    symbol: "tfs",
    name: "TFS",
  },
  {
    id: "tg-dao",
    symbol: "tgdao",
    name: "TG DAO",
  },
  {
    id: "tgold",
    symbol: "txau",
    name: "tGOLD",
  },
  {
    id: "tgrade",
    symbol: "tgd",
    name: "Tgrade",
  },
  {
    id: "thales",
    symbol: "thales",
    name: "Thales",
  },
  {
    id: "the-4th-pillar",
    symbol: "four",
    name: "4thpillar technologies",
  },
  {
    id: "the-abyss",
    symbol: "abyss",
    name: "Abyss",
  },
  {
    id: "the-akragas-decadrachm",
    symbol: "thead",
    name: "The Akragas Decadrachm",
  },
  {
    id: "the-amaze-world",
    symbol: "amze",
    name: "The Amaze World",
  },
  {
    id: "the-americans-nft",
    symbol: "usacoin",
    name: "The Americans NFT",
  },
  {
    id: "the-ape",
    symbol: "ta",
    name: "The Ape",
  },
  {
    id: "the-ape-society",
    symbol: "society",
    name: "The Ape Society",
  },
  {
    id: "the-apis",
    symbol: "api",
    name: "The APIS",
  },
  {
    id: "the-atlas-coin",
    symbol: "$atlas",
    name: "The Atlas Coin",
  },
  {
    id: "the-bend",
    symbol: "bend",
    name: "The Bend",
  },
  {
    id: "thebigcoin",
    symbol: "big",
    name: "TheBigCoin",
  },
  {
    id: "the-big-five",
    symbol: "bft",
    name: "The Big Five",
  },
  {
    id: "the-bitcoin-family",
    symbol: "family",
    name: "The Bitcoin Family",
  },
  {
    id: "theca",
    symbol: "theca",
    name: "Theca",
  },
  {
    id: "the-cat-inu",
    symbol: "thecat",
    name: "The Cat Inu",
  },
  {
    id: "the-champcoin",
    symbol: "tcc",
    name: "The ChampCoin",
  },
  {
    id: "the-citadel",
    symbol: "thecitadel",
    name: "The Citadel",
  },
  {
    id: "the-commission",
    symbol: "cmsn",
    name: "The Commission",
  },
  {
    id: "the-coop-network",
    symbol: "gmd",
    name: "The Coop Network",
  },
  {
    id: "the-corgi-of-polkabridge",
    symbol: "corgib",
    name: "The Corgi of PolkaBridge",
  },
  {
    id: "the-crypto-prophecies",
    symbol: "tcp",
    name: "The Crypto Prophecies",
  },
  {
    id: "the-crypto-you",
    symbol: "milk",
    name: "The Crypto You",
  },
  {
    id: "the-daox-index",
    symbol: "daox",
    name: "The DAOX Index",
  },
  {
    id: "the-debt-box",
    symbol: "debt",
    name: "The Debt Box",
  },
  {
    id: "the-doge-nft",
    symbol: "dog",
    name: "The Doge NFT",
  },
  {
    id: "the-dragon-gate",
    symbol: "koi",
    name: "The Dragon Gate",
  },
  {
    id: "the-dynasty",
    symbol: "dyt",
    name: "The Dynasty",
  },
  {
    id: "the-employment-commons-work-token",
    symbol: "work",
    name: "The Employment Commons Work",
  },
  {
    id: "the-essential-coin",
    symbol: "esc",
    name: "The Essential Coin",
  },
  {
    id: "the-everlasting-parachain",
    symbol: "elp",
    name: "The Everlasting Parachain",
  },
  {
    id: "the-fire-token",
    symbol: "xfr",
    name: "The Fire",
  },
  {
    id: "theflashcurrency",
    symbol: "tfc",
    name: "TheFlashCurrency",
  },
  {
    id: "the-forbidden-forest",
    symbol: "forestplus",
    name: "The Forbidden Forest",
  },
  {
    id: "theforce-trade",
    symbol: "foc",
    name: "TheForce Trade",
  },
  {
    id: "thefutbolcoin",
    symbol: "tfc",
    name: "TheFutbolCoin",
  },
  {
    id: "the-genesis-block",
    symbol: "genblok",
    name: "The Genesis Block",
  },
  {
    id: "the-golden-dog",
    symbol: "dog",
    name: "The Golden Dog",
  },
  {
    id: "the-graph",
    symbol: "grt",
    name: "The Graph",
  },
  {
    id: "the-guest-list",
    symbol: "tgl",
    name: "The Guest List",
  },
  {
    id: "the-hash-speed",
    symbol: "ths",
    name: "The Hash Speed",
  },
  {
    id: "theholyrogercoin",
    symbol: "roger",
    name: "TheHolyRogerCoin",
  },
  {
    id: "the-husl",
    symbol: "husl",
    name: "The HUSL",
  },
  {
    id: "the-k0de",
    symbol: "k0de",
    name: "The $k0de",
  },
  {
    id: "the-killbox-game",
    symbol: "kbox",
    name: "The Killbox Game",
  },
  {
    id: "the-laboratory",
    symbol: "$lab",
    name: "The Laboratory",
  },
  {
    id: "the-landlord",
    symbol: "lndlrd",
    name: "The Landlord",
  },
  {
    id: "the-last-war",
    symbol: "tlw",
    name: "The Last War",
  },
  {
    id: "the-legend-of-deification",
    symbol: "tlod",
    name: "The Legend of Deification",
  },
  {
    id: "the-mars",
    symbol: "mrst",
    name: "Mars Token",
  },
  {
    id: "the-mars-shiba",
    symbol: "marsshib",
    name: "The Mars Shiba",
  },
  {
    id: "the-meebits",
    symbol: "nmeebits",
    name: "The Meebits",
  },
  {
    id: "the-meme-finance",
    symbol: "mefi",
    name: "The meme finance",
  },
  {
    id: "the-midas-touch-gold",
    symbol: "tmtg",
    name: "The Midas Touch Gold",
  },
  {
    id: "themis",
    symbol: "get",
    name: "Themis Network",
  },
  {
    id: "themis-2",
    symbol: "mis",
    name: "Themis",
  },
  {
    id: "the-monopolist",
    symbol: "mono",
    name: "The Monopolist",
  },
  {
    id: "the-moon-shiba",
    symbol: "moonshib",
    name: "The Moon Shiba",
  },
  {
    id: "the-neighbours",
    symbol: "neibr",
    name: "The Neighbours",
  },
  {
    id: "the-neko",
    symbol: "neko",
    name: "The Neko",
  },
  {
    id: "the-next-world-coin",
    symbol: "tnc",
    name: "The Next World Coin",
  },
  {
    id: "the-node",
    symbol: "the",
    name: "THENODE",
  },
  {
    id: "the-open-network",
    symbol: "ton",
    name: "Toncoin",
  },
  {
    id: "theos",
    symbol: "theos",
    name: "Theos",
  },
  {
    id: "theoscoin",
    symbol: "ths",
    name: "Theoscoin",
  },
  {
    id: "the-pablo-token",
    symbol: "pablo",
    name: "The Pablo",
  },
  {
    id: "the-parallel",
    symbol: "prl",
    name: "The Parallel",
  },
  {
    id: "the-path-of-light",
    symbol: "yori",
    name: "The Path Of Light",
  },
  {
    id: "the-people-coin",
    symbol: "peeps",
    name: "The People’s Coin",
  },
  {
    id: "the-philosophers-stone",
    symbol: "tpos",
    name: "The Philosophers Stone",
  },
  {
    id: "the-phoenix",
    symbol: "fire",
    name: "The Phoenix",
  },
  {
    id: "the-plant-dao",
    symbol: "sprout",
    name: "The Plant Dao",
  },
  {
    id: "the-protocol",
    symbol: "the",
    name: "The Protocol",
  },
  {
    id: "the-randomdao",
    symbol: "rnd",
    name: "The RandomDAO",
  },
  {
    id: "the-real-golden-inu",
    symbol: "trgi",
    name: "The Real Golden Inu",
  },
  {
    id: "the-realm-defenders",
    symbol: "trd",
    name: "The Realm Defenders",
  },
  {
    id: "the-real-tsygan",
    symbol: "tsygan",
    name: "The Real Tsygan",
  },
  {
    id: "the-reaper",
    symbol: "rpr",
    name: "The Reaper",
  },
  {
    id: "the-sandbox",
    symbol: "sand",
    name: "The Sandbox",
  },
  {
    id: "the-sandbox-wormhole",
    symbol: "sand",
    name: "The Sandbox (Wormhole)",
  },
  {
    id: "thesolandao",
    symbol: "sdo",
    name: "TheSolanDAO",
  },
  {
    id: "the-space",
    symbol: "space",
    name: "The Space",
  },
  {
    id: "the-sprint-token",
    symbol: "tst",
    name: "The Sprint Token",
  },
  {
    id: "the-starship-finance",
    symbol: "bip",
    name: "The Starship Finance",
  },
  {
    id: "the-sun-rises",
    symbol: "sunrise",
    name: "The Sun Rises",
  },
  {
    id: "thetadrop",
    symbol: "tdrop",
    name: "ThetaDrop",
  },
  {
    id: "theta-fuel",
    symbol: "tfuel",
    name: "Theta Fuel",
  },
  {
    id: "the-tale-of-osaku",
    symbol: "osaku",
    name: "The Tale of Osaku",
  },
  {
    id: "thetan-arena",
    symbol: "thg",
    name: "Thetan Arena",
  },
  {
    id: "thetan-coin",
    symbol: "thc",
    name: "Thetan Coin",
  },
  {
    id: "theta-token",
    symbol: "theta",
    name: "Theta Network",
  },
  {
    id: "the-three-kingdoms",
    symbol: "ttk",
    name: "The Three Kingdoms",
  },
  {
    id: "the-tokenized-bitcoin",
    symbol: "imbtc",
    name: "The Tokenized Bitcoin",
  },
  {
    id: "the-troller-coin",
    symbol: "troller",
    name: "The Troller Coin",
  },
  {
    id: "the-virtua-kolect",
    symbol: "tvk",
    name: "The Virtua Kolect",
  },
  {
    id: "the-wasted-lands",
    symbol: "wal",
    name: "The Wasted Lands",
  },
  {
    id: "the-web3-project",
    symbol: "twep",
    name: "The Web3 Project",
  },
  {
    id: "the-winkyverse",
    symbol: "wnk",
    name: "The Winkyverse",
  },
  {
    id: "the-wolf-pack",
    symbol: "pack",
    name: "The Wolf Pack",
  },
  {
    id: "the-xenobots-project",
    symbol: "xeno",
    name: "The Xenobots Project",
  },
  {
    id: "the-youth-pay",
    symbol: "typ",
    name: "The Youth Pay",
  },
  {
    id: "thingschain",
    symbol: "tic",
    name: "Thingschain",
  },
  {
    id: "thingsgo-online",
    symbol: "tgo",
    name: "ThingsGo.Online",
  },
  {
    id: "thor",
    symbol: "thor",
    name: "ThorFi",
  },
  {
    id: "thorchain",
    symbol: "rune",
    name: "THORChain",
  },
  {
    id: "thorchain-erc20",
    symbol: "rune",
    name: "THORChain (ERC20)",
  },
  {
    id: "thoreum-v2",
    symbol: "thoreum",
    name: "Thoreum V3",
  },
  {
    id: "thors-mead",
    symbol: "mead",
    name: "Thors Mead",
  },
  {
    id: "thorstarter",
    symbol: "xrune",
    name: "Thorstarter",
  },
  {
    id: "thorswap",
    symbol: "thor",
    name: "THORSwap",
  },
  {
    id: "thorus",
    symbol: "tho",
    name: "Thorus",
  },
  {
    id: "thorwallet",
    symbol: "tgt",
    name: "THORWallet DEX",
  },
  {
    id: "thought",
    symbol: "tht",
    name: "Thought",
  },
  {
    id: "thousand-islands",
    symbol: "island",
    name: "Thousand Islands",
  },
  {
    id: "threefold-token",
    symbol: "tft",
    name: "ThreeFold",
  },
  {
    id: "three-kingdoms",
    symbol: "rtk",
    name: "Three Kingdoms",
  },
  {
    id: "threeoh-dao",
    symbol: "3oh",
    name: "ThreeOh DAO",
  },
  {
    id: "threshold-network-token",
    symbol: "t",
    name: "Threshold Network",
  },
  {
    id: "throne",
    symbol: "thn",
    name: "Throne",
  },
  {
    id: "thrupenny",
    symbol: "tpy",
    name: "Thrupenny",
  },
  {
    id: "thunderada-app",
    symbol: "thunderada",
    name: "ThunderADA.app",
  },
  {
    id: "thunderbnb",
    symbol: "thunderbnb",
    name: "ThunderBNB",
  },
  {
    id: "thunder-brawl",
    symbol: "thb",
    name: "Thunder Brawl",
  },
  {
    id: "thundereth",
    symbol: "thundereth",
    name: "ThunderETH",
  },
  {
    id: "thunder-lands",
    symbol: "tndr",
    name: "Thunder Lands",
  },
  {
    id: "thunder-token",
    symbol: "tt",
    name: "ThunderCore",
  },
  {
    id: "thx",
    symbol: "thx",
    name: "Thx!",
  },
  {
    id: "thx-network",
    symbol: "thx",
    name: "THX Network",
  },
  {
    id: "tia",
    symbol: "tia",
    name: "TIA",
  },
  {
    id: "tianya-token",
    symbol: "tyt",
    name: "Tianya",
  },
  {
    id: "tianyu-finance",
    symbol: "tyc",
    name: "Tianyu Finance",
  },
  {
    id: "tiara",
    symbol: "tti",
    name: "Tiara",
  },
  {
    id: "ticket-finance",
    symbol: "ticket",
    name: "Ticket Finance",
  },
  {
    id: "tictalk",
    symbol: "tic",
    name: "TicTalk",
  },
  {
    id: "tidal-finance",
    symbol: "tidal",
    name: "Tidal Finance",
  },
  {
    id: "tidex-token",
    symbol: "tdx",
    name: "Tidex",
  },
  {
    id: "tierion",
    symbol: "tnt",
    name: "Tierion",
  },
  {
    id: "tierra-meta",
    symbol: "trmt",
    name: "Tierra Meta",
  },
  {
    id: "tifi-token",
    symbol: "tifi",
    name: "TiFi",
  },
  {
    id: "tigercash",
    symbol: "tch",
    name: "TigerCash",
  },
  {
    id: "tiger-cub",
    symbol: "tcub",
    name: "Tiger Cub",
  },
  {
    id: "tiger-king",
    symbol: "tking",
    name: "Tiger King Coin",
  },
  {
    id: "tigerqueen",
    symbol: "tqueen",
    name: "TigerQueen",
  },
  {
    id: "tiger-scrub-money",
    symbol: "tiger",
    name: "Tiger Scrub Money [OLD]",
  },
  {
    id: "tiger-scrub-money-2",
    symbol: "tiger",
    name: "Tiger Scrub Money",
  },
  {
    id: "tiger-token",
    symbol: "tgnb",
    name: "Tiger",
  },
  {
    id: "tiger-trade",
    symbol: "ti̇gr",
    name: "Tiger.Trade",
  },
  {
    id: "tigres-fan-token",
    symbol: "tigres",
    name: "Tigres Fan Token",
  },
  {
    id: "tiki-token",
    symbol: "tiki",
    name: "Tiki",
  },
  {
    id: "tikky-inu",
    symbol: "tikky",
    name: "Tikky Inu",
  },
  {
    id: "tiktoken",
    symbol: "tiktoken",
    name: "TikToken",
  },
  {
    id: "tillage",
    symbol: "till",
    name: "Tillage",
  },
  {
    id: "tilwiki",
    symbol: "tlw",
    name: "TilWiki",
  },
  {
    id: "timechain-swap-token",
    symbol: "tcs",
    name: "Timechain Swap",
  },
  {
    id: "timeleap-finance",
    symbol: "time",
    name: "Timeleap Finance",
  },
  {
    id: "timelockcoin",
    symbol: "tym",
    name: "TimeLockCoin",
  },
  {
    id: "time-new-bank",
    symbol: "tnb",
    name: "Time New Bank",
  },
  {
    id: "timers",
    symbol: "ipm",
    name: "Timers",
  },
  {
    id: "tiny-bonez",
    symbol: "t1ny",
    name: "Tiny Bonez",
  },
  {
    id: "tiny-coin",
    symbol: "tinc",
    name: "Tiny Coin",
  },
  {
    id: "tiny-colony",
    symbol: "tiny",
    name: "Tiny Colony",
  },
  {
    id: "tip-blue",
    symbol: "blue",
    name: "Tip.Blue",
  },
  {
    id: "tipsy",
    symbol: "tipsy",
    name: "Tipsy",
  },
  {
    id: "tipsycoin",
    symbol: "$tipsy",
    name: "TipsyCoin",
  },
  {
    id: "tiraverse",
    symbol: "tvrs",
    name: "TiraVerse",
  },
  {
    id: "titan-coin",
    symbol: "ttn",
    name: "Titan Coin",
  },
  {
    id: "titan-hunters",
    symbol: "tita",
    name: "Titan Hunters",
  },
  {
    id: "titania-token",
    symbol: "titania",
    name: "Titania",
  },
  {
    id: "titano",
    symbol: "titano",
    name: "Titano",
  },
  {
    id: "titanswap",
    symbol: "titan",
    name: "TitanSwap",
  },
  {
    id: "titi-financial",
    symbol: "titi",
    name: "Titi Financial",
  },
  {
    id: "titi-protocol",
    symbol: "titi",
    name: "TiTi Protocol",
  },
  {
    id: "title-network",
    symbol: "tnet",
    name: "Bitcoin Clashic",
  },
  {
    id: "titsv2",
    symbol: "tits",
    name: "TitsV2",
  },
  {
    id: "tkn-token",
    symbol: "tknt",
    name: "TKN",
  },
  {
    id: "tlabs",
    symbol: "tbs",
    name: "TLabs",
  },
  {
    id: "tlchain",
    symbol: "tlc",
    name: "TLChain",
  },
  {
    id: "tlpt",
    symbol: "tlpt",
    name: "tLPT",
  },
  {
    id: "t-mac-dao",
    symbol: "tmg",
    name: "T-mac DAO",
  },
  {
    id: "tmatic",
    symbol: "tmatic",
    name: "tMATIC",
  },
  {
    id: "tmy-coin",
    symbol: "tmy",
    name: "TMY Coin",
  },
  {
    id: "tnc-coin",
    symbol: "tnc",
    name: "TNC Coin",
  },
  {
    id: "tnns",
    symbol: "tnns",
    name: "TNNS",
  },
  {
    id: "tokamak-network",
    symbol: "ton",
    name: "Tokamak Network",
  },
  {
    id: "tokemak",
    symbol: "toke",
    name: "Tokemak",
  },
  {
    id: "tokenarium",
    symbol: "tknrm",
    name: "Tokenarium",
  },
  {
    id: "tokenasset",
    symbol: "ntb",
    name: "TokenAsset",
  },
  {
    id: "tokenbank",
    symbol: "tbank",
    name: "Tokenbank",
  },
  {
    id: "tokenbook",
    symbol: "tbk",
    name: "TokenBook",
  },
  {
    id: "tokenbot",
    symbol: "tkb",
    name: "TokenBot",
  },
  {
    id: "tokenbox",
    symbol: "tbx",
    name: "Tokenbox",
  },
  {
    id: "tokencard",
    symbol: "tkn",
    name: "Monolith",
  },
  {
    id: "token-cashpay",
    symbol: "tcp",
    name: "Token CashPay",
  },
  {
    id: "token-cheetah",
    symbol: "chtt",
    name: "Cheetah",
  },
  {
    id: "tokenclub",
    symbol: "tct",
    name: "TokenClub",
  },
  {
    id: "tokendesk",
    symbol: "tds",
    name: "TokenDesk",
  },
  {
    id: "token-dforce-usd",
    symbol: "usx",
    name: "dForce USD",
  },
  {
    id: "token-engineering-commons",
    symbol: "tec",
    name: "Token Engineering Commons",
  },
  {
    id: "tokenfy",
    symbol: "tknfy",
    name: "Tokenfy",
  },
  {
    id: "tokengo",
    symbol: "gpt",
    name: "GoPower",
  },
  {
    id: "tokenize-xchange",
    symbol: "tkx",
    name: "Tokenize Xchange",
  },
  {
    id: "tokenjenny",
    symbol: "jenn",
    name: "TokenJenny",
  },
  {
    id: "token-kennel",
    symbol: "kennel",
    name: "Kennel",
  },
  {
    id: "tokenlon",
    symbol: "lon",
    name: "Tokenlon",
  },
  {
    id: "token-of-fire",
    symbol: "rhllor",
    name: "Token of Fire",
  },
  {
    id: "tokenoid",
    symbol: "noid",
    name: "Tokenoid",
  },
  {
    id: "tokenomy",
    symbol: "ten",
    name: "Tokenomy",
  },
  {
    id: "tokenplace",
    symbol: "tok",
    name: "Tokenplace",
  },
  {
    id: "tokenplay",
    symbol: "top",
    name: "Tokenplay",
  },
  {
    id: "token-pocket",
    symbol: "tpt",
    name: "TokenPocket Token",
  },
  {
    id: "token-runner",
    symbol: "tkrn",
    name: "Token Runner",
  },
  {
    id: "token-shelby",
    symbol: "tsy",
    name: "Token Shelby",
  },
  {
    id: "tokentuber",
    symbol: "tuber",
    name: "TokenTuber",
  },
  {
    id: "tokerr",
    symbol: "tokr",
    name: "Tokerr",
  },
  {
    id: "tokes",
    symbol: "tks",
    name: "Tokes",
  },
  {
    id: "toko",
    symbol: "toko",
    name: "Tokoin",
  },
  {
    id: "tokocrypto",
    symbol: "tko",
    name: "Tokocrypto",
  },
  {
    id: "tokonft",
    symbol: "tkn",
    name: "TokoNFT",
  },
  {
    id: "tokpie",
    symbol: "tkp",
    name: "TOKPIE",
  },
  {
    id: "toksi",
    symbol: "toi",
    name: "Toksi",
  },
  {
    id: "tokyo",
    symbol: "tokc",
    name: "Tokyo Coin",
  },
  {
    id: "tokyo-au",
    symbol: "tokau",
    name: "Tokyo AU",
  },
  {
    id: "tokyo-inu",
    symbol: "toki",
    name: "Tokyo Inu",
  },
  {
    id: "tolar",
    symbol: "tol",
    name: "Tolar",
  },
  {
    id: "tomato-coin",
    symbol: "bptc",
    name: "Tomato Coin",
  },
  {
    id: "tomb",
    symbol: "tomb",
    name: "Tomb",
  },
  {
    id: "tomb-shares",
    symbol: "tshare",
    name: "Tomb Shares",
  },
  {
    id: "tomcat",
    symbol: "tcat",
    name: "TomCat",
  },
  {
    id: "tom-coin",
    symbol: "tmc",
    name: "Tom Coin",
  },
  {
    id: "tom-finance",
    symbol: "tom",
    name: "TOM Finance",
  },
  {
    id: "tomochain",
    symbol: "tomo",
    name: "TomoChain",
  },
  {
    id: "tomoe",
    symbol: "tomoe",
    name: "TomoChain ERC-20",
  },
  {
    id: "tomtomcoin",
    symbol: "toms",
    name: "TomTomCoin",
  },
  {
    id: "tonestra",
    symbol: "tnr",
    name: "Tonestra",
  },
  {
    id: "tongtong-coin",
    symbol: "ttc",
    name: "Tongtong Coin",
  },
  {
    id: "tonstarter",
    symbol: "tos",
    name: "TONStarter",
  },
  {
    id: "tontoken",
    symbol: "ton",
    name: "TON",
  },
  {
    id: "toobcoin",
    symbol: "toob",
    name: "Toobcoin",
  },
  {
    id: "tools",
    symbol: "tools",
    name: "TOOLS",
  },
  {
    id: "too-token",
    symbol: "too",
    name: "TOO",
  },
  {
    id: "topbidder",
    symbol: "bid",
    name: "TopBidder",
  },
  {
    id: "topchain",
    symbol: "topc",
    name: "TopChain",
  },
  {
    id: "top-coin-token",
    symbol: "tct",
    name: "Top Coin",
  },
  {
    id: "topg-coin",
    symbol: "topg",
    name: "TopG Coin",
  },
  {
    id: "topmanager",
    symbol: "tmt",
    name: "TopManager",
  },
  {
    id: "top-network",
    symbol: "top",
    name: "TOP Network",
  },
  {
    id: "top-one",
    symbol: "top1",
    name: "TOP ONE",
  },
  {
    id: "topshelf-finance",
    symbol: "liqr",
    name: "Topshelf Finance",
  },
  {
    id: "topss",
    symbol: "topss",
    name: "TOPSS",
  },
  {
    id: "tor",
    symbol: "tor",
    name: "TOR",
  },
  {
    id: "tora-inu",
    symbol: "tora",
    name: "Tora Inu",
  },
  {
    id: "torchain",
    symbol: "tor",
    name: "Torchain",
  },
  {
    id: "torches",
    symbol: "tor",
    name: "Torches",
  },
  {
    id: "torekko",
    symbol: "trk",
    name: "Torekko",
  },
  {
    id: "torg",
    symbol: "torg",
    name: "TORG",
  },
  {
    id: "torii-finance",
    symbol: "torii",
    name: "Torii Finance",
  },
  {
    id: "torkpad",
    symbol: "tpad",
    name: "TorkPad",
  },
  {
    id: "tornado-cash",
    symbol: "torn",
    name: "Tornado Cash",
  },
  {
    id: "torpedo",
    symbol: "torpedo",
    name: "Torpedo",
  },
  {
    id: "torq-coin",
    symbol: "torq",
    name: "TORQ Coin",
  },
  {
    id: "tortuga-staked-aptos",
    symbol: "tapt",
    name: "Tortuga Staked Aptos",
  },
  {
    id: "torum",
    symbol: "xtm",
    name: "Torum",
  },
  {
    id: "tosa-inu",
    symbol: "tos",
    name: "Tosa Inu",
  },
  {
    id: "tosdis",
    symbol: "dis",
    name: "TosDis",
  },
  {
    id: "toshinori-inu",
    symbol: "toshinori",
    name: "Toshinori Inu",
  },
  {
    id: "toshi-token",
    symbol: "toshi",
    name: "Toshimon",
  },
  {
    id: "tosidrop",
    symbol: "ctosi",
    name: "TosiDrop",
  },
  {
    id: "total-crypto-market-cap-token",
    symbol: "tcap",
    name: "Total Crypto Market Cap",
  },
  {
    id: "totally-a-rug-pull",
    symbol: "tarp",
    name: "Totally A Rug Pull",
  },
  {
    id: "totem-earth-systems",
    symbol: "ctzn",
    name: "Totem",
  },
  {
    id: "totemfi",
    symbol: "totm",
    name: "TotemFi",
  },
  {
    id: "to-the-moon-token",
    symbol: "ton",
    name: "To The Moon Token",
  },
  {
    id: "totoro-inu",
    symbol: "totoro",
    name: "Totoro Inu",
  },
  {
    id: "toucan-protocol-base-carbon-tonne",
    symbol: "bct",
    name: "Toucan Protocol: Base Carbon Tonne",
  },
  {
    id: "toucan-protocol-nature-carbon-tonne",
    symbol: "nct",
    name: "Toucan Protocol: Nature Carbon Tonne",
  },
  {
    id: "touchcon",
    symbol: "toc",
    name: "TouchCon",
  },
  {
    id: "tourismx",
    symbol: "trmx",
    name: "TourismX",
  },
  {
    id: "tourist-shiba-inu",
    symbol: "tourists",
    name: "Tourist Shiba Inu",
  },
  {
    id: "tourist-token",
    symbol: "toto",
    name: "Tourist",
  },
  {
    id: "tower",
    symbol: "tower",
    name: "Tower",
  },
  {
    id: "town-star",
    symbol: "town",
    name: "Town Star",
  },
  {
    id: "toxicdeer-finance",
    symbol: "deer",
    name: "ToxicDeer Finance",
  },
  {
    id: "toxicdeer-share",
    symbol: "xdshare",
    name: "ToxicDeer Share",
  },
  {
    id: "toxicgamenft",
    symbol: "txc",
    name: "ToxicGameNft",
  },
  {
    id: "tpro",
    symbol: "tpro",
    name: "TPRO",
  },
  {
    id: "tp-swap",
    symbol: "tp",
    name: "Token Swap",
  },
  {
    id: "tr3zor",
    symbol: "tr3",
    name: "Tr3zor",
  },
  {
    id: "trabzonspor-fan-token",
    symbol: "tra",
    name: "Trabzonspor Fan Token",
  },
  {
    id: "trace-network-labs",
    symbol: "trace",
    name: "Trace Network Labs",
  },
  {
    id: "tracer",
    symbol: "trc",
    name: "Tracer",
  },
  {
    id: "tracer-dao",
    symbol: "tcr",
    name: "Tracer DAO",
  },
  {
    id: "tractor-joe",
    symbol: "tractor",
    name: "Tractor Joe",
  },
  {
    id: "tradao",
    symbol: "tod",
    name: "TraDAO",
  },
  {
    id: "trade-fighter",
    symbol: "tdf",
    name: "Trade Fighter",
  },
  {
    id: "tradeflow",
    symbol: "tflow",
    name: "TradeFlow",
  },
  {
    id: "traders-coin",
    symbol: "trdc",
    name: "Traders Coin",
  },
  {
    id: "traders-global-business",
    symbol: "tgb",
    name: "Traders Global Business",
  },
  {
    id: "tradestars",
    symbol: "tsx",
    name: "TradeStars",
  },
  {
    id: "trade-win",
    symbol: "twi",
    name: "Trade.win",
  },
  {
    id: "tranche-finance",
    symbol: "slice",
    name: "Tranche Finance",
  },
  {
    id: "tranchess",
    symbol: "chess",
    name: "Tranchess",
  },
  {
    id: "tranquil-finance",
    symbol: "tranq",
    name: "Tranquil Finance",
  },
  {
    id: "tranquility-city",
    symbol: "lumen",
    name: "Tranquility City",
  },
  {
    id: "tranquil-staked-one",
    symbol: "stone",
    name: "Tranquil Staked ONE",
  },
  {
    id: "transcodium",
    symbol: "tns",
    name: "Transcodium",
  },
  {
    id: "transhuman-coin",
    symbol: "thc",
    name: "Transhuman Coin",
  },
  {
    id: "transient",
    symbol: "tsct",
    name: "Transient",
  },
  {
    id: "tratok",
    symbol: "trat",
    name: "Tratok",
  },
  {
    id: "trava-finance",
    symbol: "trava",
    name: "Trava Finance",
  },
  {
    id: "travel-care-2",
    symbol: "travel",
    name: "Travel Care",
  },
  {
    id: "travel-coin",
    symbol: "tcoin",
    name: "Travel Coin",
  },
  {
    id: "travelnote",
    symbol: "tvnt",
    name: "TravelNote",
  },
  {
    id: "travgopv",
    symbol: "tpv",
    name: "TravGoPV",
  },
  {
    id: "traxia",
    symbol: "tmt",
    name: "Traxia",
  },
  {
    id: "traxx",
    symbol: "traxx",
    name: "Traxx",
  },
  {
    id: "trazable",
    symbol: "trz",
    name: "Trazable",
  },
  {
    id: "treasure-sl",
    symbol: "tsl",
    name: "Treasure SL",
  },
  {
    id: "treasure-token-finance",
    symbol: "trove",
    name: "TroveDAO",
  },
  {
    id: "treasure-under-sea",
    symbol: "tus",
    name: "Treasure Under Sea",
  },
  {
    id: "treasury-bond-eth-tokenized-stock-defichain",
    symbol: "dtlt",
    name: "iShares 20+ Year Treasury Bond ETF Defichain",
  },
  {
    id: "treat",
    symbol: "treat",
    name: "Treat",
  },
  {
    id: "treatdao",
    symbol: "treat",
    name: "TreatDAO [OLD]",
  },
  {
    id: "treatdao-v2",
    symbol: "treat",
    name: "TreatDAO",
  },
  {
    id: "treeb",
    symbol: "treeb",
    name: "Retreeb",
  },
  {
    id: "treecle",
    symbol: "trcl",
    name: "Treecle",
  },
  {
    id: "tremendous-coin",
    symbol: "tmds",
    name: "Tremendous Coin",
  },
  {
    id: "trendering",
    symbol: "trnd",
    name: "Trendering",
  },
  {
    id: "trendsy",
    symbol: "trndz",
    name: "Trendsy",
  },
  {
    id: "trezarcoin",
    symbol: "tzc",
    name: "TrezarCoin",
  },
  {
    id: "triall",
    symbol: "trl",
    name: "Triall",
  },
  {
    id: "trias-token",
    symbol: "trias",
    name: "TriasLab",
  },
  {
    id: "tribalpunk-cryptoverse",
    symbol: "anta",
    name: "Tribalpunk Cryptoverse",
  },
  {
    id: "tribal-token",
    symbol: "tribl",
    name: "Tribal Token",
  },
  {
    id: "tribar",
    symbol: "xtri",
    name: "Tribar",
  },
  {
    id: "tribe-2",
    symbol: "tribe",
    name: "Tribe",
  },
  {
    id: "tribeland",
    symbol: "trbl",
    name: "Tribeland",
  },
  {
    id: "tribeone",
    symbol: "haka",
    name: "TribeOne",
  },
  {
    id: "tribe-token",
    symbol: "tribex",
    name: "Tribe Token",
  },
  {
    id: "trice",
    symbol: "tri",
    name: "Trice",
  },
  {
    id: "trickle",
    symbol: "h2o",
    name: "Trickle",
  },
  {
    id: "triflex-token",
    symbol: "trfx",
    name: "Triflex",
  },
  {
    id: "triipmiles",
    symbol: "tiim",
    name: "TriipMiles",
  },
  {
    id: "trillium",
    symbol: "tt",
    name: "Trillium",
  },
  {
    id: "trinity",
    symbol: "tty",
    name: "Trinity",
  },
  {
    id: "trinity-network-credit",
    symbol: "tnc",
    name: "Trinity Network Credit",
  },
  {
    id: "trinity-swap",
    symbol: "trinity",
    name: "Trinity Swap",
  },
  {
    id: "tripcandy",
    symbol: "candy",
    name: "TripCandy",
  },
  {
    id: "tripedia",
    symbol: "trip",
    name: "Tripedia",
  },
  {
    id: "trip-leverage-token",
    symbol: "tlt",
    name: "Trip Leverage",
  },
  {
    id: "tripolar",
    symbol: "tripolar",
    name: "Tripolar",
  },
  {
    id: "trips-community",
    symbol: "trips",
    name: "Trips Community",
  },
  {
    id: "trism",
    symbol: "trism",
    name: "Trism",
  },
  {
    id: "trisolaris",
    symbol: "tri",
    name: "Trisolaris",
  },
  {
    id: "triton",
    symbol: "xeq",
    name: "Equilibria",
  },
  {
    id: "trittium",
    symbol: "trtt",
    name: "Trittium",
  },
  {
    id: "triumphx",
    symbol: "trix",
    name: "TriumphX",
  },
  {
    id: "triveum",
    symbol: "trv",
    name: "Triveum",
  },
  {
    id: "trivian",
    symbol: "trivia",
    name: "Trivians",
  },
  {
    id: "trodl",
    symbol: "tro",
    name: "Trodl",
  },
  {
    id: "trolite",
    symbol: "trl",
    name: "Trolite",
  },
  {
    id: "trollbox",
    symbol: "tox",
    name: "trollbox",
  },
  {
    id: "trollcoin",
    symbol: "troll",
    name: "Trollcoin",
  },
  {
    id: "tron",
    symbol: "trx",
    name: "TRON",
  },
  {
    id: "tronado",
    symbol: "trdo",
    name: "TRONADO",
  },
  {
    id: "tronbetdice",
    symbol: "dice",
    name: "TRONbetDice",
  },
  {
    id: "tronbetlive",
    symbol: "live",
    name: "TRONbetLive",
  },
  {
    id: "tron-bsc",
    symbol: "trx",
    name: "TRON (BSC)",
  },
  {
    id: "tronclassic",
    symbol: "trxc",
    name: "TronClassic",
  },
  {
    id: "troneuroperewardcoin",
    symbol: "terc",
    name: "TronEuropeRewardCoin",
  },
  {
    id: "tronpad",
    symbol: "tronpad",
    name: "TRONPAD",
  },
  {
    id: "tropical-finance",
    symbol: "daiquiri",
    name: "Tropical Finance",
  },
  {
    id: "troy",
    symbol: "troy",
    name: "Troy",
  },
  {
    id: "trubadger",
    symbol: "trubgr",
    name: "TruBadger",
  },
  {
    id: "truebit-protocol",
    symbol: "tru",
    name: "Truebit Protocol",
  },
  {
    id: "trueburn",
    symbol: "true",
    name: "TrueBurn",
  },
  {
    id: "true-chain",
    symbol: "true",
    name: "TrueChain",
  },
  {
    id: "truecnh",
    symbol: "tcnh",
    name: "TrueCNH",
  },
  {
    id: "truedeck",
    symbol: "tdp",
    name: "TrueDeck",
  },
  {
    id: "truefeedbackchain",
    symbol: "tfbx",
    name: "Truefeedback",
  },
  {
    id: "truefi",
    symbol: "tru",
    name: "TrueFi",
  },
  {
    id: "trueflip",
    symbol: "tfl",
    name: "TrueFlip",
  },
  {
    id: "truegame",
    symbol: "tgame",
    name: "Truegame",
  },
  {
    id: "true-pnl",
    symbol: "pnl",
    name: "True PNL",
  },
  {
    id: "true-usd",
    symbol: "tusd",
    name: "TrueUSD",
  },
  {
    id: "trustbase",
    symbol: "tbe",
    name: "TrustBase",
  },
  {
    id: "trusted-node",
    symbol: "tnode",
    name: "Trusted Node",
  },
  {
    id: "trustfi-network-token",
    symbol: "tfi",
    name: "TrustFi Network",
  },
  {
    id: "trustkeys-network",
    symbol: "trustk",
    name: "TrustKeys Network",
  },
  {
    id: "trustnft",
    symbol: "trustnft",
    name: "TrustNFT",
  },
  {
    id: "trustpad",
    symbol: "tpad",
    name: "TrustPad",
  },
  {
    id: "trustpay",
    symbol: "tph",
    name: "Trustpay",
  },
  {
    id: "trustrise",
    symbol: "trise",
    name: "TrustRise",
  },
  {
    id: "trustswap",
    symbol: "swap",
    name: "Trustswap",
  },
  {
    id: "trustverse",
    symbol: "trv",
    name: "TrustVerse",
  },
  {
    id: "trust-wallet-token",
    symbol: "twt",
    name: "Trust Wallet",
  },
  {
    id: "trustworks",
    symbol: "trust",
    name: "Trustworks",
  },
  {
    id: "trx3l",
    symbol: "trx3l",
    name: "TRX3L",
  },
  {
    id: "tryc",
    symbol: "tryc",
    name: "TRYC",
  },
  {
    id: "try-finance",
    symbol: "try",
    name: "Try.Finance",
  },
  {
    id: "tryhards",
    symbol: "try",
    name: "TryHards",
  },
  {
    id: "tryvium-2",
    symbol: "tryv",
    name: "Tryvium",
  },
  {
    id: "tsilver",
    symbol: "txag",
    name: "tSILVER",
  },
  {
    id: "tsuki-inu",
    symbol: "tkinu",
    name: "Tsuki Inu",
  },
  {
    id: "tsuki-no-usagi",
    symbol: "gyokuto",
    name: "Tsuki no usagi",
  },
  {
    id: "tsukiverse-galactic-adventures",
    symbol: "tsuga",
    name: "Tsukiverse:Galactic Adventures",
  },
  {
    id: "tsukuyomi-no-mikoto",
    symbol: "mikoto",
    name: "Tsukuyomi-no-Mikoto",
  },
  {
    id: "tsuzuki-inu",
    symbol: "tzki",
    name: "Tsuzuki Inu",
  },
  {
    id: "ttcoin",
    symbol: "tc",
    name: "TTcoin",
  },
  {
    id: "ttx-metaverse",
    symbol: "xmeta",
    name: "TTX Metaverse",
  },
  {
    id: "tudabirds",
    symbol: "burd",
    name: "tudaBirds",
  },
  {
    id: "tuf-token",
    symbol: "tuf",
    name: "TUF Token",
  },
  {
    id: "tundra-token",
    symbol: "tundra",
    name: "Tundra",
  },
  {
    id: "tune",
    symbol: "tun",
    name: "TUNE",
  },
  {
    id: "tune-fm",
    symbol: "jam",
    name: "Tune.Fm",
  },
  {
    id: "tune-token",
    symbol: "tune",
    name: "TUNE TOKEN",
  },
  {
    id: "turbo-wallet",
    symbol: "turbo",
    name: "Turbo Wallet",
  },
  {
    id: "turex",
    symbol: "tur",
    name: "Turex",
  },
  {
    id: "turkiye-basketbol-federasyonu-token",
    symbol: "tbft",
    name: "Türkiye Basketbol Federasyonu Fan Token",
  },
  {
    id: "turkiye-motosiklet-federasyonu-fan-token",
    symbol: "tmft",
    name: "Türkiye Motosiklet Federasyonu Fan Token",
  },
  {
    id: "turnt-up-tikis",
    symbol: "tut",
    name: "Turnt Up Tikis",
  },
  {
    id: "turtlecoin",
    symbol: "trtl",
    name: "TurtleCoin",
  },
  {
    id: "turtle-shell-islands",
    symbol: "shell",
    name: "Turtle Shell Islands",
  },
  {
    id: "turtles-token",
    symbol: "trtls",
    name: "Turtles",
  },
  {
    id: "tutela",
    symbol: "tutl",
    name: "Tutela",
  },
  {
    id: "tutellus",
    symbol: "tut",
    name: "Tutellus",
  },
  {
    id: "tutti-frutti-finance",
    symbol: "tff",
    name: "Tutti Frutti",
  },
  {
    id: "tuzlaspor",
    symbol: "tuzla",
    name: "Tuzlaspor Token",
  },
  {
    id: "tvt",
    symbol: "tvt",
    name: "TVT",
  },
  {
    id: "twelve-legions",
    symbol: "ctl",
    name: "Twelve Legions",
  },
  {
    id: "twinci",
    symbol: "twin",
    name: "Twinci",
  },
  {
    id: "twirl-governance-token",
    symbol: "tgt",
    name: "Twirl Governance",
  },
  {
    id: "twitterx",
    symbol: "twitterx",
    name: "TwitterX",
  },
  {
    id: "twoge-inu",
    symbol: "twoge",
    name: "Twoge Inu",
  },
  {
    id: "two-monkey-juice-bar",
    symbol: "$tmon",
    name: "Two Monkey Juice Bar",
  },
  {
    id: "txa",
    symbol: "txa",
    name: "TXA",
  },
  {
    id: "txbit",
    symbol: "txbit",
    name: "Txbit",
  },
  {
    id: "tycoon",
    symbol: "tyc",
    name: "Tycoon",
  },
  {
    id: "tycoon-global",
    symbol: "tct",
    name: "Tycoon Global",
  },
  {
    id: "typerium",
    symbol: "type",
    name: "Typerium",
  },
  {
    id: "typhoon-cash",
    symbol: "phoon",
    name: "Typhoon Cash",
  },
  {
    id: "typhoon-network",
    symbol: "typh",
    name: "Typhoon Network",
  },
  {
    id: "tyv",
    symbol: "tyv",
    name: "TYV",
  },
  {
    id: "tzbtc",
    symbol: "tzbtc",
    name: "tzBTC",
  },
  {
    id: "uangmarket",
    symbol: "uang",
    name: "UangMarket",
  },
  {
    id: "ubeswap",
    symbol: "ube",
    name: "Ubeswap",
  },
  {
    id: "ubiner",
    symbol: "ubin",
    name: "Ubiner",
  },
  {
    id: "ubiq",
    symbol: "ubq",
    name: "Ubiq",
  },
  {
    id: "ubix-network",
    symbol: "ubx",
    name: "UBIX Network",
  },
  {
    id: "ubu",
    symbol: "ubu",
    name: "UBU",
  },
  {
    id: "ubu-finance",
    symbol: "ubu",
    name: "UBU Finance",
  },
  {
    id: "ubxs-token",
    symbol: "ubxs",
    name: "UBXS",
  },
  {
    id: "uca",
    symbol: "uca",
    name: "UCA Coin",
  },
  {
    id: "ucash",
    symbol: "ucash",
    name: "U.CASH",
  },
  {
    id: "uchain",
    symbol: "ucn",
    name: "UChain",
  },
  {
    id: "uconetwork",
    symbol: "ucoil",
    name: "UCONetwork",
  },
  {
    id: "ucrowdme",
    symbol: "ucm",
    name: "UCROWDME",
  },
  {
    id: "ucx",
    symbol: "ucx",
    name: "UCX",
  },
  {
    id: "udder-chaos-milk",
    symbol: "milk",
    name: "MILK",
  },
  {
    id: "ufc-fan-token",
    symbol: "ufc",
    name: "UFC Fan Token",
  },
  {
    id: "ufocoin",
    symbol: "ufo",
    name: "Uniform Fiscal Object",
  },
  {
    id: "ufo-gaming",
    symbol: "ufo",
    name: "UFO Gaming",
  },
  {
    id: "uhive",
    symbol: "hve2",
    name: "Uhive",
  },
  {
    id: "uka-doge-coin",
    symbol: "udoge",
    name: "Uka Doge Coin",
  },
  {
    id: "ukrainedao-flag-nft",
    symbol: "love",
    name: "UkraineDAO Flag NFT",
  },
  {
    id: "ulanco",
    symbol: "uac",
    name: "Ulanco",
  },
  {
    id: "uland",
    symbol: "uland",
    name: "ULAND",
  },
  {
    id: "ulgen-hash-power",
    symbol: "uhp",
    name: "Ulgen Hash Power",
  },
  {
    id: "ulord",
    symbol: "ut",
    name: "Ulord",
  },
  {
    id: "ulti-arena",
    symbol: "ulti",
    name: "Ulti Arena",
  },
  {
    id: "ultiledger",
    symbol: "ult",
    name: "Ultiledger",
  },
  {
    id: "ultimate-champions",
    symbol: "champ",
    name: "Ultimate Champions",
  },
  {
    id: "ultimogg",
    symbol: "ultgg",
    name: "UltimoGG",
  },
  {
    id: "ultra",
    symbol: "uos",
    name: "Ultra",
  },
  {
    id: "ultrachad",
    symbol: "uchad",
    name: "UltraChad",
  },
  {
    id: "ultra-clear",
    symbol: "ucr",
    name: "Ultra Clear",
  },
  {
    id: "ultragate",
    symbol: "ulg",
    name: "Ultragate",
  },
  {
    id: "ultrain",
    symbol: "ugas",
    name: "Ultrain",
  },
  {
    id: "ultralpha",
    symbol: "uat",
    name: "UltrAlpha",
  },
  {
    id: "ultramoc",
    symbol: "umc",
    name: "Ultramoc",
  },
  {
    id: "ultra-nft",
    symbol: "unft",
    name: "Ultra NFT",
  },
  {
    id: "ultrasafe",
    symbol: "ultra",
    name: "UltraSafe",
  },
  {
    id: "ultron",
    symbol: "ulx",
    name: "ULTRON",
  },
  {
    id: "ultronglow",
    symbol: "utg",
    name: "UltronGlow",
  },
  {
    id: "uma",
    symbol: "uma",
    name: "UMA",
  },
  {
    id: "umami-finance",
    symbol: "umami",
    name: "Umami",
  },
  {
    id: "umbra-network",
    symbol: "umbr",
    name: "Umbria Network",
  },
  {
    id: "umbrellacoin",
    symbol: "umc",
    name: "Umbrella Coin",
  },
  {
    id: "umbrella-network",
    symbol: "umb",
    name: "Umbrella Network",
  },
  {
    id: "umee",
    symbol: "umee",
    name: "Umee",
  },
  {
    id: "umetaworld",
    symbol: "umw",
    name: "UMetaWorld",
  },
  {
    id: "ume-token",
    symbol: "ume",
    name: "UME",
  },
  {
    id: "umi",
    symbol: "umi",
    name: "UMI",
  },
  {
    id: "umi-digital",
    symbol: "umi",
    name: "Umi Digital",
  },
  {
    id: "unagii-dai",
    symbol: "udai",
    name: "Unagii Dai",
  },
  {
    id: "unagii-eth",
    symbol: "ueth",
    name: "Unagii ETH",
  },
  {
    id: "unagii-tether-usd",
    symbol: "uusdt",
    name: "Unagii Tether USD",
  },
  {
    id: "unagii-usd-coin",
    symbol: "uusdc",
    name: "Unagii USD Coin",
  },
  {
    id: "unagii-wrapped-bitcoin",
    symbol: "uwbtc",
    name: "Unagii Wrapped Bitcoin",
  },
  {
    id: "unbanked",
    symbol: "unbnk",
    name: "Unbanked",
  },
  {
    id: "unbound-finance",
    symbol: "unb",
    name: "Unbound Finance",
  },
  {
    id: "uncl",
    symbol: "uncl",
    name: "UNCL",
  },
  {
    id: "unclemine",
    symbol: "um",
    name: "UncleMine",
  },
  {
    id: "undead-blocks",
    symbol: "undead",
    name: "Undead Blocks",
  },
  {
    id: "undead-finance",
    symbol: "undead",
    name: "Undead Finance",
  },
  {
    id: "underminegold",
    symbol: "umg",
    name: "UnderMineGold",
  },
  {
    id: "u-network",
    symbol: "uuu",
    name: "U Network",
  },
  {
    id: "unfederalreserve",
    symbol: "ersdl",
    name: "unFederalReserve",
  },
  {
    id: "uniarts",
    symbol: "uart",
    name: "UniArts",
  },
  {
    id: "unibright",
    symbol: "ubt",
    name: "Unibright",
  },
  {
    id: "unicap-finance",
    symbol: "ucap",
    name: "Unicap.Finance",
  },
  {
    id: "unicly",
    symbol: "unic",
    name: "Unicly",
  },
  {
    id: "unicly-aavegotchi-astronauts-collection",
    symbol: "ugotchi",
    name: "Unicly Aavegotchi Astronauts Collection",
  },
  {
    id: "unicly-cryptopunks-collection",
    symbol: "upunk",
    name: "Unicly CryptoPunks Collection",
  },
  {
    id: "unicly-doki-doki-collection",
    symbol: "udoki",
    name: "Unicly Doki Doki Collection",
  },
  {
    id: "unicly-fewocious-collection",
    symbol: "ufewo",
    name: "Unicly Fewocious Collection",
  },
  {
    id: "unicly-genesis-collection",
    symbol: "uunicly",
    name: "Unicly Genesis Collection",
  },
  {
    id: "unicly-mooncats-collection",
    symbol: "umoon",
    name: "Unicly MoonCats Collection",
  },
  {
    id: "unicly-mystic-axies-collection",
    symbol: "uaxie",
    name: "Unicly Mystic Axies Collection",
  },
  {
    id: "unicorn-cake",
    symbol: "unic",
    name: "Unicorn Cake",
  },
  {
    id: "unicorn-milk",
    symbol: "unim",
    name: "Unicorn Milk",
  },
  {
    id: "unicorn-token",
    symbol: "uni",
    name: "UNICORN",
  },
  {
    id: "unicrypt-2",
    symbol: "uncx",
    name: "UniCrypt",
  },
  {
    id: "unidef",
    symbol: "u",
    name: "Unidef",
  },
  {
    id: "unidex",
    symbol: "unidx",
    name: "UniDex",
  },
  {
    id: "unido-ep",
    symbol: "udo",
    name: "Unido",
  },
  {
    id: "unidogefinance-token",
    symbol: "unido",
    name: "UnidogeFinance Token",
  },
  {
    id: "unifarm",
    symbol: "ufarm",
    name: "UniFarm",
  },
  {
    id: "unifees",
    symbol: "fees",
    name: "Unifees",
  },
  {
    id: "unifi",
    symbol: "unifi",
    name: "Covenants",
  },
  {
    id: "unification",
    symbol: "fund",
    name: "Unification",
  },
  {
    id: "unifi-defi",
    symbol: "unifi",
    name: "UNIFI DeFi",
  },
  {
    id: "unifi-protocol",
    symbol: "up",
    name: "UniFi Protocol",
  },
  {
    id: "unifi-protocol-dao",
    symbol: "unfi",
    name: "Unifi Protocol DAO",
  },
  {
    id: "unifty",
    symbol: "nif",
    name: "Unifty",
  },
  {
    id: "unifund",
    symbol: "ifund",
    name: "Unifund",
  },
  {
    id: "unikoin-gold",
    symbol: "ukg",
    name: "Unikoin Gold",
  },
  {
    id: "unilab-network",
    symbol: "ulab",
    name: "Unilab",
  },
  {
    id: "unilayer",
    symbol: "layer",
    name: "UniLayer",
  },
  {
    id: "unilock-network-2",
    symbol: "unl",
    name: "Unilock.Network",
  },
  {
    id: "unimex-network",
    symbol: "umx",
    name: "UniMex Network",
  },
  {
    id: "union-protocol-governance-token",
    symbol: "unn",
    name: "UNION Protocol Governance",
  },
  {
    id: "unipilot",
    symbol: "pilot",
    name: "Unipilot",
  },
  {
    id: "uniplay",
    symbol: "unp",
    name: "UniPlay",
  },
  {
    id: "unipower",
    symbol: "power",
    name: "UniPower",
  },
  {
    id: "uniqly",
    symbol: "uniq",
    name: "Uniqly",
  },
  {
    id: "uniqo",
    symbol: "uniqo",
    name: "Uniqo",
  },
  {
    id: "unique-fans",
    symbol: "fans",
    name: "Unique Fans",
  },
  {
    id: "unique-network",
    symbol: "unq",
    name: "Unique",
  },
  {
    id: "unique-one",
    symbol: "rare",
    name: "Unique One",
  },
  {
    id: "uniqueone-photo",
    symbol: "foto",
    name: "UniqueOne Photo",
  },
  {
    id: "unique-utility-token",
    symbol: "unqt",
    name: "Unique Utility",
  },
  {
    id: "unisocks",
    symbol: "socks",
    name: "Unisocks",
  },
  {
    id: "unistake",
    symbol: "unistake",
    name: "Unistake",
  },
  {
    id: "uniswap",
    symbol: "uni",
    name: "Uniswap",
  },
  {
    id: "uniswap-state-dollar",
    symbol: "usd",
    name: "unified Stable Dollar",
  },
  {
    id: "uniswap-wormhole",
    symbol: "uni",
    name: "Uniswap (Wormhole)",
  },
  {
    id: "unite",
    symbol: "unite",
    name: "Unite",
  },
  {
    id: "unitech",
    symbol: "utc",
    name: "Unitech",
  },
  {
    id: "unitedcoins",
    symbol: "units",
    name: "UnitedCoins",
  },
  {
    id: "unitedcrowd",
    symbol: "uct",
    name: "UnitedCrowd",
  },
  {
    id: "united-emirate-decentralized-coin",
    symbol: "uedc",
    name: "United Emirate Decentralized Coin",
  },
  {
    id: "united-token",
    symbol: "uted",
    name: "United",
  },
  {
    id: "united-traders-token",
    symbol: "utt",
    name: "United Traders",
  },
  {
    id: "unit-network",
    symbol: "unit",
    name: "Unit Network",
  },
  {
    id: "unit-protocol-duck",
    symbol: "duck",
    name: "Unit Protocol",
  },
  {
    id: "unitrade",
    symbol: "trade",
    name: "Unitrade",
  },
  {
    id: "unitus",
    symbol: "uis",
    name: "Unitus",
  },
  {
    id: "unity-network",
    symbol: "unt",
    name: "Unity Network",
  },
  {
    id: "unity-protocol",
    symbol: "unity",
    name: "Unity Protocol",
  },
  {
    id: "unityventures",
    symbol: "uv",
    name: "UnityVentures",
  },
  {
    id: "unium",
    symbol: "unm",
    name: "UNIUM",
  },
  {
    id: "universal-basic-income",
    symbol: "ubi",
    name: "Universal Basic Income",
  },
  {
    id: "universal-basic-offset",
    symbol: "ubo",
    name: "Universal Basic Offset",
  },
  {
    id: "universal-currency",
    symbol: "unit",
    name: "Universal Currency",
  },
  {
    id: "universal-eth",
    symbol: "unieth",
    name: "Universal ETH",
  },
  {
    id: "universal-floki-coin",
    symbol: "ufloki",
    name: "Universal Floki Coin",
  },
  {
    id: "universal-gold",
    symbol: "upxau",
    name: "Universal Gold",
  },
  {
    id: "universal-liquidity-union",
    symbol: "ulu",
    name: "Universal Liquidity Union",
  },
  {
    id: "universal-pickle",
    symbol: "$upl",
    name: "Universal Pickle",
  },
  {
    id: "universal-protocol-token",
    symbol: "upt",
    name: "Universal Protocol Token",
  },
  {
    id: "universe-coin",
    symbol: "unis",
    name: "Universe Coin",
  },
  {
    id: "universe-island",
    symbol: "uim",
    name: "Universe Island",
  },
  {
    id: "universe-xyz",
    symbol: "xyz",
    name: "Universe.XYZ",
  },
  {
    id: "universidad-de-chile-fan-token",
    symbol: "uch",
    name: "Universidad de Chile Fan Token",
  },
  {
    id: "uniwhales",
    symbol: "uwl",
    name: "UniWhales",
  },
  {
    id: "uniworld",
    symbol: "unw",
    name: "UniWorld",
  },
  {
    id: "uniwswap",
    symbol: "uniw",
    name: "UniWswap",
  },
  {
    id: "unix",
    symbol: "unix",
    name: "UniX",
  },
  {
    id: "unizen",
    symbol: "zcx",
    name: "Unizen",
  },
  {
    id: "unkai",
    symbol: "unkai",
    name: "Unkai",
  },
  {
    id: "unlend-finance",
    symbol: "uft",
    name: "UniLend Finance",
  },
  {
    id: "unlimitedip",
    symbol: "uip",
    name: "UnlimitedIP",
  },
  {
    id: "unlock",
    symbol: "unlock",
    name: "UNLOCK",
  },
  {
    id: "unlockd",
    symbol: "unlk",
    name: "Unlockd",
  },
  {
    id: "unlock-protocol",
    symbol: "udt",
    name: "Unlock Protocol",
  },
  {
    id: "unmarshal",
    symbol: "marsh",
    name: "Unmarshal",
  },
  {
    id: "unobtainium",
    symbol: "uno",
    name: "Unobtainium",
  },
  {
    id: "unobtanium",
    symbol: "uno",
    name: "Unobtanium",
  },
  {
    id: "unobtanium-tezos",
    symbol: "uno",
    name: "Unobtanium Tezos",
  },
  {
    id: "uno-re",
    symbol: "uno",
    name: "Uno Re",
  },
  {
    id: "unq",
    symbol: "unq",
    name: "Unique Venture clubs",
  },
  {
    id: "unreal-finance",
    symbol: "ugt",
    name: "Unreal Finance",
  },
  {
    id: "unslashed-finance",
    symbol: "usf",
    name: "Unslashed Finance",
  },
  {
    id: "unus-dao",
    symbol: "udo",
    name: "Unus Dao",
  },
  {
    id: "unvest",
    symbol: "unv",
    name: "Unvest",
  },
  {
    id: "upark",
    symbol: "upark",
    name: "uPark",
  },
  {
    id: "upbnb",
    symbol: "upbnb",
    name: "upBNB",
  },
  {
    id: "upbots",
    symbol: "ubxn",
    name: "UpBots",
  },
  {
    id: "upcoin",
    symbol: "upcoin",
    name: "Upcoin",
  },
  {
    id: "updog",
    symbol: "updog",
    name: "UpDog",
  },
  {
    id: "upfi-network",
    symbol: "ups",
    name: "UPFI Network",
  },
  {
    id: "upfire",
    symbol: "upr",
    name: "Upfire",
  },
  {
    id: "upfiring",
    symbol: "ufr",
    name: "Upfiring",
  },
  {
    id: "uplexa",
    symbol: "upx",
    name: "uPlexa",
  },
  {
    id: "uplift",
    symbol: "lift",
    name: "Uplift",
  },
  {
    id: "uponly-token",
    symbol: "upo",
    name: "UpOnly",
  },
  {
    id: "upper-dollar",
    symbol: "usdu",
    name: "Upper Dollar",
  },
  {
    id: "upper-euro",
    symbol: "euru",
    name: "Upper Euro",
  },
  {
    id: "upper-pound",
    symbol: "gbpu",
    name: "Upper Pound",
  },
  {
    id: "upshib",
    symbol: "upshib",
    name: "upShib",
  },
  {
    id: "upsorber",
    symbol: "up",
    name: "Upsorber",
  },
  {
    id: "up-spiral",
    symbol: "spiral",
    name: "Up Spiral",
  },
  {
    id: "uptrend",
    symbol: "trend",
    name: "UpTrend",
  },
  {
    id: "uquid-coin",
    symbol: "uqc",
    name: "Uquid Coin",
  },
  {
    id: "uraniumx",
    symbol: "urx",
    name: "UraniumX",
  },
  {
    id: "uranus",
    symbol: "urac",
    name: "Uranus",
  },
  {
    id: "ureeqa",
    symbol: "urqa",
    name: "UREEQA",
  },
  {
    id: "urubit",
    symbol: "urub",
    name: "Urubit",
  },
  {
    id: "urust-global",
    symbol: "urust",
    name: "Urust Global",
  },
  {
    id: "urus-token",
    symbol: "urus",
    name: "Aurox",
  },
  {
    id: "usd",
    symbol: "usd+",
    name: "USD+",
  },
  {
    id: "usd-balance",
    symbol: "usdb",
    name: "USD Balance",
  },
  {
    id: "usd-bancor",
    symbol: "usdb",
    name: "USD Bancor",
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USD Coin",
  },
  {
    id: "usd-coin-avalanche-bridged-usdc-e",
    symbol: "usdc",
    name: "USD Coin Avalanche Bridged (USDC.e)",
  },
  {
    id: "usd-coin-celer",
    symbol: "ceusdc",
    name: "USD Coin - Celer",
  },
  {
    id: "usd-coin-nomad",
    symbol: "nomadusdc",
    name: "USD Coin - Nomad",
  },
  {
    id: "usd-coin-pos-wormhole",
    symbol: "usdcpo",
    name: "USD Coin (PoS) (Wormhole)",
  },
  {
    id: "usd-coin-wormhole-from-ethereum",
    symbol: "usdcet",
    name: "USD Coin (Wormhole from Ethereum)",
  },
  {
    id: "usdd",
    symbol: "usdd",
    name: "USDD",
  },
  {
    id: "usdex-stablecoin",
    symbol: "usdex",
    name: "USDEX",
  },
  {
    id: "usd-freedom",
    symbol: "usdf",
    name: "USD Freedom",
  },
  {
    id: "usd-gambit",
    symbol: "usdg",
    name: "USD Gambit",
  },
  {
    id: "usdh",
    symbol: "usdh",
    name: "USDH",
  },
  {
    id: "usdk",
    symbol: "usdk",
    name: "USDK",
  },
  {
    id: "usd-mars",
    symbol: "usdm",
    name: "USD Mars",
  },
  {
    id: "usdo",
    symbol: "usdo",
    name: "USDO",
  },
  {
    id: "usdp",
    symbol: "usdp",
    name: "USDP Stablecoin",
  },
  {
    id: "usdtez",
    symbol: "usdtz",
    name: "USDtez",
  },
  {
    id: "usdv",
    symbol: "usdv",
    name: "USD Velero Stablecoin",
  },
  {
    id: "usdx",
    symbol: "usdx",
    name: "USDX",
  },
  {
    id: "usd-zee",
    symbol: "usdz",
    name: "USD ZEE",
  },
  {
    id: "useless-2",
    symbol: "use",
    name: "Useless",
  },
  {
    id: "usgold",
    symbol: "usg",
    name: "USGold",
  },
  {
    id: "ushare",
    symbol: "ushare",
    name: "USHARE",
  },
  {
    id: "ushi",
    symbol: "ushi",
    name: "Ushi",
  },
  {
    id: "usk",
    symbol: "usk",
    name: "USK",
  },
  {
    id: "usn",
    symbol: "usn",
    name: "USN",
  },
  {
    id: "usp",
    symbol: "usp",
    name: "USP",
  },
  {
    id: "utility-nft-coin",
    symbol: "unc",
    name: "Utility NFT Coin",
  },
  {
    id: "utip",
    symbol: "utip",
    name: "uTip",
  },
  {
    id: "utopia",
    symbol: "crp",
    name: "Crypton",
  },
  {
    id: "utopia-genesis-foundation",
    symbol: "uop",
    name: "Utopia Genesis Foundation",
  },
  {
    id: "utopia-token",
    symbol: "uto",
    name: "Secret Skellies Society Utopia",
  },
  {
    id: "utopia-usd",
    symbol: "uusd",
    name: "Utopia USD",
  },
  {
    id: "utrust",
    symbol: "utk",
    name: "Utrust",
  },
  {
    id: "utu-coin",
    symbol: "utu",
    name: "UTU Coin",
  },
  {
    id: "uvtoken",
    symbol: "uvt",
    name: "UvToken",
  },
  {
    id: "uwu-lend",
    symbol: "uwu",
    name: "UwU Lend",
  },
  {
    id: "uwu-vault-nftx",
    symbol: "uwu",
    name: "UWU Vault (NFTX)",
  },
  {
    id: "uxcord-token",
    symbol: "uxt",
    name: "Uxcord Token",
  },
  {
    id: "uxd-protocol-token",
    symbol: "uxp",
    name: "UXD Protocol",
  },
  {
    id: "uxd-stablecoin",
    symbol: "uxd",
    name: "UXD Stablecoin",
  },
  {
    id: "uzumaki-inu",
    symbol: "uzumaki",
    name: "Uzumaki Inu",
  },
  {
    id: "uzurocks",
    symbol: "uzrs",
    name: "UZUROCKS",
  },
  {
    id: "uzyth",
    symbol: "zyth",
    name: "Uzyth",
  },
  {
    id: "v3s-share",
    symbol: "vshare",
    name: "V3S Share",
  },
  {
    id: "vabble",
    symbol: "vab",
    name: "Vabble",
  },
  {
    id: "vacay",
    symbol: "vacay",
    name: "Vacay",
  },
  {
    id: "vacus-finance",
    symbol: "vcs",
    name: "Vacus Finance",
  },
  {
    id: "vader-protocol",
    symbol: "vader",
    name: "Vader Protocol",
  },
  {
    id: "vagabond",
    symbol: "vgo",
    name: "Vagabond",
  },
  {
    id: "vai",
    symbol: "vai",
    name: "Vai",
  },
  {
    id: "vaiot",
    symbol: "vai",
    name: "Vaiot",
  },
  {
    id: "valas-finance",
    symbol: "valas",
    name: "Valas Finance",
  },
  {
    id: "valencia-cf-fan-token",
    symbol: "vcf",
    name: "Valencia CF Fan Token",
  },
  {
    id: "valentine-floki",
    symbol: "flov",
    name: "Valentine Floki",
  },
  {
    id: "valhalla-protocol",
    symbol: "val",
    name: "Valhalla Protocol",
  },
  {
    id: "valimarket",
    symbol: "vali",
    name: "Valimarket",
  },
  {
    id: "valobit",
    symbol: "vbit",
    name: "VALOBIT",
  },
  {
    id: "value-finance",
    symbol: "vft",
    name: "Value Finance",
  },
  {
    id: "value-liquidity",
    symbol: "value",
    name: "Value DeFi",
  },
  {
    id: "vancat",
    symbol: "vancat",
    name: "Vancat [OLD]",
  },
  {
    id: "vancat-2",
    symbol: "vancat",
    name: "Vancat",
  },
  {
    id: "vanci-finance",
    symbol: "vancii",
    name: "Vanci Finance",
  },
  {
    id: "vanesse",
    symbol: "vnes",
    name: "Vanesse",
  },
  {
    id: "vanguard-real-estate-tokenized-stock-defichain",
    symbol: "dvnq",
    name: "Vanguard Real Estate Tokenized Stock Defichain",
  },
  {
    id: "vanguard-sp-500-etf-tokenized-stock-defichain",
    symbol: "dvoo",
    name: "Vanguard S&P 500 ETF Tokenized Stock Defichain",
  },
  {
    id: "vanilla-network",
    symbol: "vnla",
    name: "Vanilla Network",
  },
  {
    id: "vanity",
    symbol: "vny",
    name: "Vanity",
  },
  {
    id: "vankia-chain",
    symbol: "vkt",
    name: "Vankia Chain",
  },
  {
    id: "vanspor-token",
    symbol: "van",
    name: "Vanspor Token",
  },
  {
    id: "vantaur",
    symbol: "vtar",
    name: "Vantaur",
  },
  {
    id: "vanywhere",
    symbol: "vany",
    name: "Vanywhere",
  },
  {
    id: "vaperscoin",
    symbol: "vprc",
    name: "VapersCoin",
  },
  {
    id: "vapornodes",
    symbol: "vpnd",
    name: "VaporNodes",
  },
  {
    id: "vaporwave",
    symbol: "vwave",
    name: "Vaporwave",
  },
  {
    id: "varen",
    symbol: "vrn",
    name: "Varen",
  },
  {
    id: "vasco-da-gama-fan-token",
    symbol: "vasco",
    name: "Vasco da Gama Fan Token",
  },
  {
    id: "vault",
    symbol: "vault",
    name: "VAULT",
  },
  {
    id: "vaulteum",
    symbol: "vault",
    name: "Vaulteum",
  },
  {
    id: "vault-hill-city",
    symbol: "vhc",
    name: "Vault Hill City",
  },
  {
    id: "vaulty-token",
    symbol: "vlty",
    name: "Vaulty",
  },
  {
    id: "vbswap",
    symbol: "vbswap",
    name: "vBSWAP",
  },
  {
    id: "vcash",
    symbol: "xvc",
    name: "Vcash",
  },
  {
    id: "vcgamers",
    symbol: "vcg",
    name: "VCGamers",
  },
  {
    id: "veax",
    symbol: "veax",
    name: "Veax",
  },
  {
    id: "vechain",
    symbol: "vet",
    name: "VeChain",
  },
  {
    id: "veco",
    symbol: "veco",
    name: "Veco",
  },
  {
    id: "vecrv-dao-yvault",
    symbol: "yve-crvdao",
    name: "veCRV-DAO yVault",
  },
  {
    id: "vector-finance",
    symbol: "vtx",
    name: "Vector Finance",
  },
  {
    id: "vectorium",
    symbol: "vect",
    name: "Vectorium",
  },
  {
    id: "vectorspace",
    symbol: "vxv",
    name: "Vectorspace AI",
  },
  {
    id: "vedao",
    symbol: "weve",
    name: "veDAO",
  },
  {
    id: "veed",
    symbol: "veed",
    name: "VEED",
  },
  {
    id: "vee-finance",
    symbol: "vee",
    name: "Vee Finance",
  },
  {
    id: "vefi",
    symbol: "vef",
    name: "Vefi",
  },
  {
    id: "vega-coin",
    symbol: "vega",
    name: "Vega Coin",
  },
  {
    id: "vegannation-greencoin",
    symbol: "grnc",
    name: "VeganNation GreenCoin",
  },
  {
    id: "vega-protocol",
    symbol: "vega",
    name: "Vega Protocol",
  },
  {
    id: "vegasino",
    symbol: "vegas",
    name: "Vegasino",
  },
  {
    id: "vega-sport",
    symbol: "vega",
    name: "Vega Sport",
  },
  {
    id: "veggiecoin",
    symbol: "vegi",
    name: "VeggieCoin",
  },
  {
    id: "veil",
    symbol: "veil",
    name: "VEIL",
  },
  {
    id: "velas",
    symbol: "vlx",
    name: "Velas",
  },
  {
    id: "velaspad",
    symbol: "vlxpad",
    name: "VelasPad",
  },
  {
    id: "veldorabsc",
    symbol: "vdora",
    name: "VeldoraBSC",
  },
  {
    id: "velerodao",
    symbol: "vdgt",
    name: "VeleroDAO",
  },
  {
    id: "veles",
    symbol: "vls",
    name: "Veles",
  },
  {
    id: "velhalla",
    symbol: "scar",
    name: "Velhalla",
  },
  {
    id: "velo",
    symbol: "velo",
    name: "Velo",
  },
  {
    id: "velodrome-finance",
    symbol: "velo",
    name: "Velodrome Finance",
  },
  {
    id: "velorex",
    symbol: "vex",
    name: "Velorex",
  },
  {
    id: "vemate",
    symbol: "vmt",
    name: "Vemate",
  },
  {
    id: "vempire-ddao",
    symbol: "vemp",
    name: "vEmpire DDAO",
  },
  {
    id: "vendettadao",
    symbol: "$v",
    name: "VendettaDAO",
  },
  {
    id: "vendetta-finance",
    symbol: "ven",
    name: "Vendetta Finance",
  },
  {
    id: "vendit",
    symbol: "vndt",
    name: "Vendit",
  },
  {
    id: "venera",
    symbol: "vsw",
    name: "Venera",
  },
  {
    id: "venjocoin",
    symbol: "vjc",
    name: "VENJOCOIN",
  },
  {
    id: "veno",
    symbol: "veno",
    name: "Veno",
  },
  {
    id: "venox",
    symbol: "vnx",
    name: "Venox",
  },
  {
    id: "vent-finance",
    symbol: "vent",
    name: "Vent Finance",
  },
  {
    id: "vention",
    symbol: "vention",
    name: "Vention",
  },
  {
    id: "ventiswap",
    symbol: "vst",
    name: "VentiSwap",
  },
  {
    id: "venus",
    symbol: "xvs",
    name: "Venus",
  },
  {
    id: "venus-bch",
    symbol: "vbch",
    name: "Venus BCH",
  },
  {
    id: "venus-beth",
    symbol: "vbeth",
    name: "Venus BETH",
  },
  {
    id: "venus-btc",
    symbol: "vbtc",
    name: "Venus BTC",
  },
  {
    id: "venus-busd",
    symbol: "vbusd",
    name: "Venus BUSD",
  },
  {
    id: "venus-dai",
    symbol: "vdai",
    name: "Venus DAI",
  },
  {
    id: "venus-doge",
    symbol: "vdoge",
    name: "Venus DOGE",
  },
  {
    id: "venus-dot",
    symbol: "vdot",
    name: "Venus DOT",
  },
  {
    id: "venus-eth",
    symbol: "veth",
    name: "Venus ETH",
  },
  {
    id: "venus-fil",
    symbol: "vfil",
    name: "Venus FIL",
  },
  {
    id: "venus-link",
    symbol: "vlink",
    name: "Venus LINK",
  },
  {
    id: "venus-ltc",
    symbol: "vltc",
    name: "Venus LTC",
  },
  {
    id: "venus-reward-token",
    symbol: "vrt",
    name: "Venus Reward",
  },
  {
    id: "venus-sxp",
    symbol: "vsxp",
    name: "Venus SXP",
  },
  {
    id: "venus-usdc",
    symbol: "vusdc",
    name: "Venus USDC",
  },
  {
    id: "venus-usdt",
    symbol: "vusdt",
    name: "Venus USDT",
  },
  {
    id: "venus-xrp",
    symbol: "vxrp",
    name: "Venus XRP",
  },
  {
    id: "venus-xvs",
    symbol: "vxvs",
    name: "Venus XVS",
  },
  {
    id: "vera",
    symbol: "vera",
    name: "Vera",
  },
  {
    id: "vera-exchange",
    symbol: "vera",
    name: "VERA Exchange",
  },
  {
    id: "veraone",
    symbol: "vro",
    name: "VeraOne",
  },
  {
    id: "verasaw-plant-token",
    symbol: "vrs",
    name: "Verasaw Plant",
  },
  {
    id: "verasity",
    symbol: "vra",
    name: "Verasity",
  },
  {
    id: "verge",
    symbol: "xvg",
    name: "Verge",
  },
  {
    id: "veriblock",
    symbol: "vbk",
    name: "VeriBlock",
  },
  {
    id: "vericoin",
    symbol: "vrc",
    name: "VeriCoin",
  },
  {
    id: "veridocglobal",
    symbol: "vdg",
    name: "VeriDocGlobal",
  },
  {
    id: "verify",
    symbol: "cred",
    name: "Verify",
  },
  {
    id: "verify-token",
    symbol: "vrfy",
    name: "Verify VRFY",
  },
  {
    id: "veritaseum",
    symbol: "veri",
    name: "Veritaseum",
  },
  {
    id: "veritise",
    symbol: "vts",
    name: "Veritise",
  },
  {
    id: "verlux",
    symbol: "vlx",
    name: "Verlux",
  },
  {
    id: "verox",
    symbol: "vrx",
    name: "Verox",
  },
  {
    id: "versagames",
    symbol: "versa",
    name: "VersaGames",
  },
  {
    id: "versailles-heroes",
    symbol: "vrh",
    name: "Versailles Heroes",
  },
  {
    id: "versatile-finance",
    symbol: "$versa",
    name: "Versatile Finance",
  },
  {
    id: "verse",
    symbol: "verse",
    name: "Verse Token",
  },
  {
    id: "verse-bitcoin",
    symbol: "verse",
    name: "Verse",
  },
  {
    id: "version",
    symbol: "v",
    name: "Version",
  },
  {
    id: "verso",
    symbol: "vso",
    name: "Verso",
  },
  {
    id: "versoview",
    symbol: "vvt",
    name: "VersoView",
  },
  {
    id: "versus-farm",
    symbol: "versus",
    name: "Versus Farm",
  },
  {
    id: "vertcoin",
    symbol: "vtc",
    name: "Vertcoin",
  },
  {
    id: "vertex-protocol",
    symbol: "vrtx",
    name: "Vertex Protocol",
  },
  {
    id: "verus-coin",
    symbol: "vrsc",
    name: "Verus Coin",
  },
  {
    id: "verve",
    symbol: "verve",
    name: "Verve",
  },
  {
    id: "very-special-dragon",
    symbol: "vito",
    name: "Very Special Dragon",
  },
  {
    id: "vesper-finance",
    symbol: "vsp",
    name: "Vesper Finance",
  },
  {
    id: "vesper-vdollar",
    symbol: "vusd",
    name: "Vesper V-Dollar",
  },
  {
    id: "vesq",
    symbol: "vsq",
    name: "VESQ",
  },
  {
    id: "vesta-finance",
    symbol: "vsta",
    name: "Vesta Finance",
  },
  {
    id: "vestallytoken",
    symbol: "vtt",
    name: "VesTally",
  },
  {
    id: "vesta-stable",
    symbol: "vst",
    name: "Vesta Stable",
  },
  {
    id: "vestchain",
    symbol: "vest",
    name: "VestChain",
  },
  {
    id: "vestige",
    symbol: "vest",
    name: "Vestige",
  },
  {
    id: "vethor-token",
    symbol: "vtho",
    name: "VeThor",
  },
  {
    id: "vetoken-finance",
    symbol: "ve3d",
    name: "veToken Finance",
  },
  {
    id: "vetter-skylabs",
    symbol: "vsl",
    name: "Vetter Skylabs",
  },
  {
    id: "vetter-token",
    symbol: "vetter",
    name: "Vetter",
  },
  {
    id: "veusd",
    symbol: "veusd",
    name: "VeUSD",
  },
  {
    id: "vexanium",
    symbol: "vex",
    name: "Vexanium",
  },
  {
    id: "vfox",
    symbol: "vfox",
    name: "VFOX",
  },
  {
    id: "viacoin",
    symbol: "via",
    name: "Viacoin",
  },
  {
    id: "viagra-token",
    symbol: "viagra",
    name: "Viagra",
  },
  {
    id: "vibe",
    symbol: "vibe",
    name: "VIBE",
  },
  {
    id: "viberate",
    symbol: "vib",
    name: "Viberate",
  },
  {
    id: "vibing",
    symbol: "vbg",
    name: "Vibing",
  },
  {
    id: "vicat",
    symbol: "vicat",
    name: "ViCat",
  },
  {
    id: "vica-token",
    symbol: "vica",
    name: "ViCA",
  },
  {
    id: "vicdao-nelum",
    symbol: "nelum",
    name: "VICDAO NELUM",
  },
  {
    id: "vicewrld",
    symbol: "vicedao",
    name: "ViceWRLD DAO",
  },
  {
    id: "vicmove",
    symbol: "vim",
    name: "VicMove",
  },
  {
    id: "vicstep",
    symbol: "vic",
    name: "VICSTEP",
  },
  {
    id: "victoria-vr",
    symbol: "vr",
    name: "Victoria VR",
  },
  {
    id: "victorum",
    symbol: "vcc",
    name: "Victorum",
  },
  {
    id: "victory",
    symbol: "avic",
    name: "Victory",
  },
  {
    id: "victory-gem",
    symbol: "vtg",
    name: "Victory Gem",
  },
  {
    id: "vicuna",
    symbol: "vina",
    name: "VICUNA",
  },
  {
    id: "videocoin",
    symbol: "vid",
    name: "Vivid Labs",
  },
  {
    id: "vidiachange",
    symbol: "vida",
    name: "Vidiachange",
  },
  {
    id: "vidt-dao",
    symbol: "vidt",
    name: "VIDT DAO",
  },
  {
    id: "vidulum",
    symbol: "vdl",
    name: "Vidulum",
  },
  {
    id: "vidy",
    symbol: "vidy",
    name: "VIDY",
  },
  {
    id: "vidya",
    symbol: "vidya",
    name: "Vidya",
  },
  {
    id: "vidyx",
    symbol: "vidyx",
    name: "VidyX",
  },
  {
    id: "vig",
    symbol: "vig",
    name: "Vigor",
  },
  {
    id: "vigorus",
    symbol: "vis",
    name: "Vigorus",
  },
  {
    id: "viking-elon",
    symbol: "velon",
    name: "Viking Elon",
  },
  {
    id: "vikings-valhalla",
    symbol: "vv",
    name: "Vikings Valhalla",
  },
  {
    id: "viking-swap",
    symbol: "viking",
    name: "Viking Swap",
  },
  {
    id: "vikkytoken",
    symbol: "vikky",
    name: "Vikky",
  },
  {
    id: "vince-chain",
    symbol: "vce",
    name: "Vince Chain",
  },
  {
    id: "vinchain",
    symbol: "vin",
    name: "VINchain",
  },
  {
    id: "vindax-coin",
    symbol: "vd",
    name: "VinDax Coin",
  },
  {
    id: "vip-coin",
    symbol: "vip",
    name: "Vip Coin",
  },
  {
    id: "viper",
    symbol: "viper",
    name: "Viper",
  },
  {
    id: "viperpit",
    symbol: "xviper",
    name: "ViperPit",
  },
  {
    id: "viplus",
    symbol: "vpl",
    name: "Viplus",
  },
  {
    id: "vips-token",
    symbol: "vips",
    name: "VIPS Token",
  },
  {
    id: "vip-token",
    symbol: "vip",
    name: "VIP",
  },
  {
    id: "viral",
    symbol: "viral",
    name: "Viral",
  },
  {
    id: "vira-lata-finance",
    symbol: "reau",
    name: "Vira-Lata Finance",
  },
  {
    id: "viral-inu",
    symbol: "vinu",
    name: "Viral Inu",
  },
  {
    id: "viralup",
    symbol: "viral",
    name: "ViralUp",
  },
  {
    id: "vires-finance",
    symbol: "vires",
    name: "Vires Finance",
  },
  {
    id: "virgo",
    symbol: "vgo",
    name: "Virgo",
  },
  {
    id: "virtual-goods-token",
    symbol: "vgo",
    name: "Virtual Goods",
  },
  {
    id: "virtualmeta",
    symbol: "vma",
    name: "Virtual Meta",
  },
  {
    id: "virtual-reality-game-world",
    symbol: "vrgw",
    name: "Virtual Reality Game World",
  },
  {
    id: "virtual-tourist",
    symbol: "vt",
    name: "Virtual Tourist",
  },
  {
    id: "virtue",
    symbol: "virtue",
    name: "Virtue",
  },
  {
    id: "virtue-poker",
    symbol: "vpp",
    name: "Virtue Poker Points",
  },
  {
    id: "virtus-finance",
    symbol: "vap",
    name: "Virtus Finance",
  },
  {
    id: "visio",
    symbol: "visio",
    name: "Visio",
  },
  {
    id: "visiongame",
    symbol: "vision",
    name: "VisionGame",
  },
  {
    id: "vision-metaverse",
    symbol: "vs",
    name: "Vision Metaverse",
  },
  {
    id: "vision-network",
    symbol: "vsn",
    name: "Vision Network",
  },
  {
    id: "visor",
    symbol: "visr",
    name: "Visor",
  },
  {
    id: "vist",
    symbol: "vist",
    name: "VIST",
  },
  {
    id: "vitadao",
    symbol: "vita",
    name: "VitaDAO",
  },
  {
    id: "vita-inu",
    symbol: "vinu",
    name: "Vita Inu",
  },
  {
    id: "vitality",
    symbol: "vita",
    name: "Vitality",
  },
  {
    id: "vitall-markets",
    symbol: "vital",
    name: "Vitall Markets",
  },
  {
    id: "vital-network",
    symbol: "vital",
    name: "Vital Network",
  },
  {
    id: "vitamin-coin",
    symbol: "vitc",
    name: "Vitamin Coin",
  },
  {
    id: "vite",
    symbol: "vite",
    name: "Vite",
  },
  {
    id: "vitex",
    symbol: "vx",
    name: "ViteX Coin",
  },
  {
    id: "vitoge",
    symbol: "vitoge",
    name: "Vitoge",
  },
  {
    id: "vitteey",
    symbol: "vity",
    name: "Vitteey",
  },
  {
    id: "viva",
    symbol: "viva",
    name: "Viva",
  },
  {
    id: "viva-classic-2",
    symbol: "viva",
    name: "Viva Classic",
  },
  {
    id: "vivaion",
    symbol: "vivaion",
    name: "Vivaion",
  },
  {
    id: "vixco",
    symbol: "vix",
    name: "Vixco",
  },
  {
    id: "vizslaswap",
    symbol: "vizslaswap",
    name: "VizslaSwap",
  },
  {
    id: "vlaunch",
    symbol: "vpad",
    name: "VLaunch",
  },
  {
    id: "vm-tycoons-businesses",
    symbol: "businesses",
    name: "VM Tycoons Businesses",
  },
  {
    id: "vndc",
    symbol: "vndc",
    name: "VNDC",
  },
  {
    id: "vnx-exchange",
    symbol: "vnxlu",
    name: "VNX Exchange",
  },
  {
    id: "vnx-gold",
    symbol: "vnxau",
    name: "VNX Gold",
  },
  {
    id: "vodka-token",
    symbol: "vodka",
    name: "Vodka",
  },
  {
    id: "vodra",
    symbol: "vdr",
    name: "Vodra",
  },
  {
    id: "voice-street",
    symbol: "vst",
    name: "Voice Street",
  },
  {
    id: "void-ad9a561a-8bca-4c17-9a3f-483f5cf20ac0",
    symbol: "void",
    name: "VOID",
  },
  {
    id: "void-cash",
    symbol: "vcash",
    name: "void.cash",
  },
  {
    id: "void-games",
    symbol: "void",
    name: "Void Games",
  },
  {
    id: "volare-network",
    symbol: "volr",
    name: "Volare Network",
  },
  {
    id: "volatility-protocol-token",
    symbol: "vol",
    name: "Volatility Protocol",
  },
  {
    id: "volentix-vtx",
    symbol: "vtx",
    name: "Volentix",
  },
  {
    id: "volt",
    symbol: "acdc",
    name: "Volt",
  },
  {
    id: "voltage",
    symbol: "volt",
    name: "Voltage",
  },
  {
    id: "volta-vlt",
    symbol: "vlt",
    name: "Volta VLT",
  },
  {
    id: "volt-inu",
    symbol: "volt",
    name: "Volt Inu [OLD]",
  },
  {
    id: "volt-inu-2",
    symbol: "volt",
    name: "Volt Inu",
  },
  {
    id: "volt-protocol",
    symbol: "volt",
    name: "Volt Protocol",
  },
  {
    id: "voltswap",
    symbol: "volt",
    name: "VoltSwap",
  },
  {
    id: "voovoo",
    symbol: "voo",
    name: "VooVoo",
  },
  {
    id: "vortex-defi",
    symbol: "vtx",
    name: "Vortex DeFi",
  },
  {
    id: "vortex-protocol",
    symbol: "vp",
    name: "Vortex Protocol",
  },
  {
    id: "voucher-eth",
    symbol: "veth",
    name: "Voucher ETH",
  },
  {
    id: "vow",
    symbol: "vow",
    name: "Vow",
  },
  {
    id: "voxel-x-network",
    symbol: "vxl",
    name: "Voxel X Network",
  },
  {
    id: "vox-finance",
    symbol: "vox",
    name: "Vox.Finance",
  },
  {
    id: "voxies",
    symbol: "voxel",
    name: "Voxies",
  },
  {
    id: "voxnet",
    symbol: "vxon",
    name: "VoxNET",
  },
  {
    id: "voyager",
    symbol: "vgr",
    name: "Voyager",
  },
  {
    id: "voyce",
    symbol: "voyce",
    name: "Voyce",
  },
  {
    id: "voyr",
    symbol: "voyrme",
    name: "VOYR",
  },
  {
    id: "vpncoin",
    symbol: "vash",
    name: "VPNCoin",
  },
  {
    id: "vr-blocks",
    symbol: "vrblocks",
    name: "VR Blocks",
  },
  {
    id: "vres",
    symbol: "vrs",
    name: "VRES",
  },
  {
    id: "vrjam",
    symbol: "vrjam",
    name: "VRJAM",
  },
  {
    id: "vrynt",
    symbol: "vrynt",
    name: "VRYNT",
  },
  {
    id: "vsolidus",
    symbol: "vsol",
    name: "VSolidus",
  },
  {
    id: "v-systems",
    symbol: "vsys",
    name: "V.SYSTEMS",
  },
  {
    id: "vulcan-forged",
    symbol: "pyr",
    name: "Vulcan Forged",
  },
  {
    id: "vulcan-forged-lava",
    symbol: "lava",
    name: "Vulcan Forged LAVA",
  },
  {
    id: "vulcano-2",
    symbol: "vulc",
    name: "Vulcano",
  },
  {
    id: "vulkania-2",
    symbol: "vlk",
    name: "Vulkania",
  },
  {
    id: "vulture-peak",
    symbol: "vpk",
    name: "Vulture Peak",
  },
  {
    id: "vvs-finance",
    symbol: "vvs",
    name: "VVS Finance",
  },
  {
    id: "vxxl",
    symbol: "vxxl",
    name: "VXXL",
  },
  {
    id: "vybit",
    symbol: "vi",
    name: "Vybit",
  },
  {
    id: "vyfinance",
    symbol: "vyfi",
    name: "VyFinance",
  },
  {
    id: "vynk-chain",
    symbol: "vync",
    name: "VYNK Chain",
  },
  {
    id: "wabi",
    symbol: "wabi",
    name: "Wabi",
  },
  {
    id: "wadzpay-token",
    symbol: "wtk",
    name: "WadzPay",
  },
  {
    id: "wagerr",
    symbol: "wgr",
    name: "Wagerr",
  },
  {
    id: "waggle-network",
    symbol: "wag",
    name: "Waggle Network",
  },
  {
    id: "wagie",
    symbol: "wagie",
    name: "WAGIE",
  },
  {
    id: "wagmi",
    symbol: "wagmi",
    name: "WAGMI",
  },
  {
    id: "wagmi-game-2",
    symbol: "wagmigames",
    name: "WAGMI Game",
  },
  {
    id: "wagmi-on-solana",
    symbol: "wagmi",
    name: "WAGMI On Solana",
  },
  {
    id: "wagyuswap",
    symbol: "wag",
    name: "WagyuSwap",
  },
  {
    id: "waifer",
    symbol: "waif",
    name: "Waifer",
  },
  {
    id: "waifu",
    symbol: "waifu",
    name: "Waifu",
  },
  {
    id: "waifu-token",
    symbol: "waif",
    name: "Waifu Genesis Card Collection",
  },
  {
    id: "waifu-vault-nftx",
    symbol: "waifu",
    name: "WAIFU Vault (NFTX)",
  },
  {
    id: "wait",
    symbol: "wait",
    name: "WAIT",
  },
  {
    id: "wakanda-inu",
    symbol: "wkd",
    name: "Wakanda Inu",
  },
  {
    id: "waletoken",
    symbol: "wtn",
    name: "Wale",
  },
  {
    id: "walken",
    symbol: "wlkn",
    name: "Walken",
  },
  {
    id: "walkn",
    symbol: "walkn",
    name: "WalkN",
  },
  {
    id: "wallet-defi",
    symbol: "wdf",
    name: "Wallet Defi",
  },
  {
    id: "walletnow",
    symbol: "wnow",
    name: "WalletNow",
  },
  {
    id: "wallet-pay",
    symbol: "xpay",
    name: "Wallet Pay",
  },
  {
    id: "wallet-plus-x",
    symbol: "wpx",
    name: "Wallet Plus X",
  },
  {
    id: "wallet-swap",
    symbol: "wswap",
    name: "Wallet Swap",
  },
  {
    id: "wallfair",
    symbol: "wfair",
    name: "Wallfair",
  },
  {
    id: "wallphy",
    symbol: "wallphy",
    name: "Wallphy",
  },
  {
    id: "wallstreetbets-com",
    symbol: "wsb",
    name: "Wallstreetbets.com",
  },
  {
    id: "wall-street-bets-dapp",
    symbol: "wsb",
    name: "WallStreetBets DApp",
  },
  {
    id: "wall-street-games",
    symbol: "wsg",
    name: "Wall Street Games",
  },
  {
    id: "wall-street-inu",
    symbol: "wallstreetinu",
    name: "Wall Street Inu",
  },
  {
    id: "wallstreetninja",
    symbol: "wsn",
    name: "WallStreetNinja",
  },
  {
    id: "walrus",
    symbol: "wlrs",
    name: "Walrus",
  },
  {
    id: "walter-inu",
    symbol: "$winu",
    name: "Walter Inu",
  },
  {
    id: "waltonchain",
    symbol: "wtc",
    name: "Waltonchain",
  },
  {
    id: "wam",
    symbol: "wam",
    name: "Wam",
  },
  {
    id: "wanaka-farm",
    symbol: "wana",
    name: "Wanaka Farm",
  },
  {
    id: "wanaka-farm-wairere-token",
    symbol: "wai",
    name: "Wanaka Farm WAIRERE",
  },
  {
    id: "wanavax",
    symbol: "wanavax",
    name: "wanAVAX",
  },
  {
    id: "wanbtc",
    symbol: "wanbtc",
    name: "wanBTC",
  },
  {
    id: "wanchain",
    symbol: "wan",
    name: "Wanchain",
  },
  {
    id: "wanda-exchange",
    symbol: "we",
    name: "Wanda Exchange",
  },
  {
    id: "waneth",
    symbol: "waneth",
    name: "wanETH",
  },
  {
    id: "wannaswap",
    symbol: "wanna",
    name: "WannaSwap",
  },
  {
    id: "wanswap",
    symbol: "wasp",
    name: "WanSwap",
  },
  {
    id: "wanusdc",
    symbol: "wanusdc",
    name: "wanUSDC",
  },
  {
    id: "wanusdt",
    symbol: "wanusdt",
    name: "wanUSDT",
  },
  {
    id: "wanxrp",
    symbol: "wanxrp",
    name: "wanXRP",
  },
  {
    id: "war-bond",
    symbol: "wbond",
    name: "War Bond",
  },
  {
    id: "warena",
    symbol: "rena",
    name: "Warena",
  },
  {
    id: "warp-finance",
    symbol: "warp",
    name: "Warp Finance",
  },
  {
    id: "warrior-rare-essentials",
    symbol: "ware",
    name: "Warrior Rare Essentials",
  },
  {
    id: "warrior-token",
    symbol: "war",
    name: "Warrior",
  },
  {
    id: "wasabix",
    symbol: "wasabi",
    name: "WasabiX",
  },
  {
    id: "wasdaq-finance",
    symbol: "wsdq",
    name: "Wasdaq Finance",
  },
  {
    id: "wasder",
    symbol: "was",
    name: "Wasder",
  },
  {
    id: "waste-coin",
    symbol: "waco",
    name: "Waste Digital Coin",
  },
  {
    id: "watchdo",
    symbol: "wdo",
    name: "WatchDO",
  },
  {
    id: "wateenswap",
    symbol: "wtn",
    name: "Wateenswap",
  },
  {
    id: "waterfall-finance",
    symbol: "waterfall",
    name: "Waterfall Finance",
  },
  {
    id: "waterfall-governance-token",
    symbol: "wtf",
    name: "Waterfall Governance",
  },
  {
    id: "water-reminder",
    symbol: "water",
    name: "Water Reminder",
  },
  {
    id: "watr",
    symbol: "watr",
    name: "Watr",
  },
  {
    id: "wattton",
    symbol: "watt",
    name: "WATTTON",
  },
  {
    id: "waultswap",
    symbol: "wex",
    name: "WaultSwap",
  },
  {
    id: "wavelength",
    symbol: "wave",
    name: "Wavelength",
  },
  {
    id: "waves",
    symbol: "waves",
    name: "Waves",
  },
  {
    id: "waves-community-token",
    symbol: "wct",
    name: "Waves Community",
  },
  {
    id: "waves-ducks",
    symbol: "egg",
    name: "Waves Ducks",
  },
  {
    id: "waves-enterprise",
    symbol: "west",
    name: "Waves Enterprise",
  },
  {
    id: "waves-exchange",
    symbol: "wx",
    name: "WX.Network Token",
  },
  {
    id: "wavesgo",
    symbol: "wgo",
    name: "WavesGo",
  },
  {
    id: "wax",
    symbol: "waxp",
    name: "WAX",
  },
  {
    id: "waxe",
    symbol: "waxe",
    name: "WAXE",
  },
  {
    id: "wayawolfcoin",
    symbol: "ww",
    name: "WayaWolfCoin",
  },
  {
    id: "waykichain",
    symbol: "wicc",
    name: "WaykiChain",
  },
  {
    id: "waykichain-governance-coin",
    symbol: "wgrt",
    name: "WaykiChain Governance Coin",
  },
  {
    id: "wazirx",
    symbol: "wrx",
    name: "WazirX",
  },
  {
    id: "wb-mining",
    symbol: "wbm",
    name: "WB-Mining",
  },
  {
    id: "wbnb",
    symbol: "wbnb",
    name: "Wrapped BNB",
  },
  {
    id: "wdot",
    symbol: "wdot",
    name: "WDOT",
  },
  {
    id: "wealthsecrets",
    symbol: "wsc",
    name: "WealthSecrets",
  },
  {
    id: "wearesatoshi",
    symbol: "n8v",
    name: "NativeCoin",
  },
  {
    id: "weatherxm",
    symbol: "wxm",
    name: "WeatherXM",
  },
  {
    id: "weave",
    symbol: "weave",
    name: "Weave",
  },
  {
    id: "web3",
    symbol: "web3.0",
    name: "Web3",
  },
  {
    id: "web3-betting",
    symbol: "w3b",
    name: "Web3 Betting",
  },
  {
    id: "web3-doge",
    symbol: "web3",
    name: "Web3 Doge",
  },
  {
    id: "web3gold",
    symbol: "wrb3g",
    name: "Web3Gold",
  },
  {
    id: "web3-inu",
    symbol: "web3",
    name: "WEB3 Inu",
  },
  {
    id: "web5-inu",
    symbol: "web5",
    name: "WEB5 Inu",
  },
  {
    id: "web69",
    symbol: "web69",
    name: "Web69",
  },
  {
    id: "webchain",
    symbol: "mintme",
    name: "MintMe.com Coin",
  },
  {
    id: "webcoin",
    symbol: "web",
    name: "Webcoin",
  },
  {
    id: "webdollar",
    symbol: "webd",
    name: "webdollar",
  },
  {
    id: "webflix",
    symbol: "wfx",
    name: "WebFlix",
  },
  {
    id: "web-four",
    symbol: "webfour",
    name: "WEBFOUR",
  },
  {
    id: "weble-ecosystem-token",
    symbol: "wet",
    name: "Weble Ecosystem",
  },
  {
    id: "webooswap",
    symbol: "weboo",
    name: "WebooSwap",
  },
  {
    id: "webpay",
    symbol: "pay",
    name: "Webpay",
  },
  {
    id: "webuy",
    symbol: "we",
    name: "WeBuy",
  },
  {
    id: "wechain-coin",
    symbol: "wxtc",
    name: "WeChain Coin",
  },
  {
    id: "wecoown",
    symbol: "wcx",
    name: "WeCoOwn",
  },
  {
    id: "weentar",
    symbol: "wntr",
    name: "Weentar",
  },
  {
    id: "ween-token",
    symbol: "weens",
    name: "Ween",
  },
  {
    id: "wegro",
    symbol: "wegro",
    name: "WeGro",
  },
  {
    id: "wei",
    symbol: "wei",
    name: "WEI",
  },
  {
    id: "weld",
    symbol: "weld",
    name: "WELD",
  },
  {
    id: "wellness-convertible",
    symbol: "wcv",
    name: "Wellness Convertible",
  },
  {
    id: "welltrado",
    symbol: "wtl",
    name: "Welltrado",
  },
  {
    id: "we-love-gm",
    symbol: "gm",
    name: "we love gm",
  },
  {
    id: "welups-blockchain",
    symbol: "welups",
    name: "Welups Blockchain",
  },
  {
    id: "wemergetoken",
    symbol: "mrg",
    name: "WemergeToken",
  },
  {
    id: "wemix-token",
    symbol: "wemix",
    name: "WEMIX",
  },
  {
    id: "wenlambo-2",
    symbol: "wlbo",
    name: "Wenlambo",
  },
  {
    id: "wenmoon",
    symbol: "wm",
    name: "WenMoon",
  },
  {
    id: "wepiggy-coin",
    symbol: "wpc",
    name: "WePiggy Coin",
  },
  {
    id: "wepower",
    symbol: "wpr",
    name: "WePower",
  },
  {
    id: "werewolves-game",
    symbol: "wolf",
    name: "Werewolves Game",
  },
  {
    id: "wesendit",
    symbol: "wsi",
    name: "WeSendit",
  },
  {
    id: "wesleep",
    symbol: "wez",
    name: "WeSleep",
  },
  {
    id: "westarter",
    symbol: "war",
    name: "WeStarter",
  },
  {
    id: "weta-vr",
    symbol: "weta",
    name: "WETA VR",
  },
  {
    id: "wetc-hebeswap",
    symbol: "wetc",
    name: "WETC (HebeSwap)",
  },
  {
    id: "weth",
    symbol: "weth",
    name: "WETH",
  },
  {
    id: "wetrust",
    symbol: "trst",
    name: "WeTrust",
  },
  {
    id: "wettok-market",
    symbol: "wto",
    name: "Wettok Market",
  },
  {
    id: "wetux",
    symbol: "wetux",
    name: "WETUX",
  },
  {
    id: "weway",
    symbol: "wwy",
    name: "WeWay",
  },
  {
    id: "weyu",
    symbol: "weyu",
    name: "WEYU",
  },
  {
    id: "wgmi",
    symbol: "wgmi",
    name: "WGMI",
  },
  {
    id: "whale",
    symbol: "whale",
    name: "WHALE",
  },
  {
    id: "whale-coin",
    symbol: "whale",
    name: "Whale Coin",
  },
  {
    id: "whale-fall",
    symbol: "whale",
    name: "Whale Fall",
  },
  {
    id: "whale-maker-fund",
    symbol: "wmf",
    name: "Whale Maker Fund",
  },
  {
    id: "whalemap",
    symbol: "wmp",
    name: "Whalemap",
  },
  {
    id: "whaleroom",
    symbol: "whl",
    name: "WhaleRoom",
  },
  {
    id: "whalestreet-shrimp-token",
    symbol: "$hrimp",
    name: "WhaleStreet $hrimp",
  },
  {
    id: "whaleswap",
    symbol: "pod",
    name: "WhaleSwap",
  },
  {
    id: "whale-vault-nftx",
    symbol: "whale",
    name: "WHALE Vault (NFTX)",
  },
  {
    id: "wheat-token",
    symbol: "wheat",
    name: "Wheat (BSC)",
  },
  {
    id: "when-token",
    symbol: "when",
    name: "WhenHub",
  },
  {
    id: "whey",
    symbol: "whey",
    name: "WHEY",
  },
  {
    id: "whey-token",
    symbol: "whey",
    name: "Shredded Apes Whey",
  },
  {
    id: "whirl-finance",
    symbol: "whirl",
    name: "Whirl Finance",
  },
  {
    id: "whitebit",
    symbol: "wbt",
    name: "WhiteBIT Token",
  },
  {
    id: "whitecoin",
    symbol: "xwc",
    name: "Whitecoin",
  },
  {
    id: "white-ethereum",
    symbol: "white",
    name: "White Ethereum",
  },
  {
    id: "whiteheart",
    symbol: "white",
    name: "Whiteheart",
  },
  {
    id: "whiteswap",
    symbol: "wsd",
    name: "WhiteSwap",
  },
  {
    id: "whitex",
    symbol: "whx",
    name: "WhiteX",
  },
  {
    id: "whive",
    symbol: "whive",
    name: "Whive",
  },
  {
    id: "whole-earth-coin",
    symbol: "wec",
    name: "Whole Earth Coin",
  },
  {
    id: "whole-network",
    symbol: "node",
    name: "Whole Network",
  },
  {
    id: "wibx",
    symbol: "wbx",
    name: "WiBX",
  },
  {
    id: "wicrypt",
    symbol: "wnt",
    name: "Wicrypt",
  },
  {
    id: "widiland",
    symbol: "widi",
    name: "WidiLand",
  },
  {
    id: "widi-soul",
    symbol: "wso",
    name: "Widi Soul",
  },
  {
    id: "wifedoge",
    symbol: "wifedoge",
    name: "Wifedoge",
  },
  {
    id: "wiggly-finance",
    symbol: "wgl",
    name: "Wiggly Finance",
  },
  {
    id: "wigoswap",
    symbol: "wigo",
    name: "WigoSwap",
  },
  {
    id: "wiki-cat",
    symbol: "wkc",
    name: "Wiki Cat",
  },
  {
    id: "wild-beast-block",
    symbol: "wbb",
    name: "Wild Beast Block",
  },
  {
    id: "wilder-world",
    symbol: "wild",
    name: "Wilder World",
  },
  {
    id: "wild-island-game",
    symbol: "wild",
    name: "Wild Island Game",
  },
  {
    id: "winbinary",
    symbol: "winb",
    name: "WinBinary",
  },
  {
    id: "winco",
    symbol: "wco",
    name: "Winco",
  },
  {
    id: "windex",
    symbol: "wdex",
    name: "Windex",
  },
  {
    id: "windfall-token",
    symbol: "wft",
    name: "Windfall",
  },
  {
    id: "winding-tree",
    symbol: "lif",
    name: "Lif",
  },
  {
    id: "windoge95",
    symbol: "wndg95",
    name: "Windoge95",
  },
  {
    id: "wine-protocol",
    symbol: "wine",
    name: "Wine Protocol",
  },
  {
    id: "winerz",
    symbol: "$wnz",
    name: "Winerz",
  },
  {
    id: "wine-shares",
    symbol: "wine",
    name: "Wine Shares",
  },
  {
    id: "wing-finance",
    symbol: "wing",
    name: "Wing Finance",
  },
  {
    id: "wingriders",
    symbol: "wrt",
    name: "WingRiders",
  },
  {
    id: "wings",
    symbol: "wings",
    name: "Wings",
  },
  {
    id: "wingswap",
    symbol: "wis",
    name: "WingSwap",
  },
  {
    id: "wink",
    symbol: "win",
    name: "WINkLink",
  },
  {
    id: "winklink-bsc",
    symbol: "win",
    name: "WINkLink BSC",
  },
  {
    id: "winnow",
    symbol: "wnnw",
    name: "WinNow",
  },
  {
    id: "winry-inu",
    symbol: "winry",
    name: "Winry Inu",
  },
  {
    id: "winstars",
    symbol: "wnl",
    name: "WinStars Live",
  },
  {
    id: "winter",
    symbol: "winter",
    name: "Winter",
  },
  {
    id: "winterdog",
    symbol: "wdog",
    name: "Winterdog",
  },
  {
    id: "wipemyass",
    symbol: "wipe",
    name: "WipeMyAss",
  },
  {
    id: "wirex",
    symbol: "wxt",
    name: "WXT Token",
  },
  {
    id: "wirtual",
    symbol: "wirtual",
    name: "Wirtual",
  },
  {
    id: "wise-token11",
    symbol: "wise",
    name: "Wise",
  },
  {
    id: "wish-finance-2",
    symbol: "wish",
    name: "Wish Finance",
  },
  {
    id: "wisteria-swap",
    symbol: "wst",
    name: "Wisteria Swap",
  },
  {
    id: "witchain",
    symbol: "wit",
    name: "WITChain",
  },
  {
    id: "witch-token",
    symbol: "witch",
    name: "Witch Token",
  },
  {
    id: "witnet",
    symbol: "wit",
    name: "Witnet",
  },
  {
    id: "wiva",
    symbol: "wiva",
    name: "WIVA",
  },
  {
    id: "wizardia",
    symbol: "wzrd",
    name: "Wizardia",
  },
  {
    id: "wizards-and-dragons",
    symbol: "gp",
    name: "Wizards And Dragons",
  },
  {
    id: "wizard-token",
    symbol: "wizard",
    name: "Wizard BSC",
  },
  {
    id: "wizard-vault-nftx",
    symbol: "wizard",
    name: "WIZARD Vault (NFTX)",
  },
  {
    id: "wizarre-scroll",
    symbol: "scrl",
    name: "Wizarre Scroll",
  },
  {
    id: "wiz-protocol",
    symbol: "wiz",
    name: "WIZ Protocol",
  },
  {
    id: "wjewel",
    symbol: "wjewel",
    name: "WJEWEL",
  },
  {
    id: "wliti",
    symbol: "wliti",
    name: "wLITI",
  },
  {
    id: "wlitidao",
    symbol: "wld",
    name: "wLitiDAO",
  },
  {
    id: "wmatic",
    symbol: "wmatic",
    name: "Wrapped Matic",
  },
  {
    id: "wodex",
    symbol: "wmt",
    name: "Wodex",
  },
  {
    id: "wohlstand-token",
    symbol: "wt",
    name: "Wohlstand",
  },
  {
    id: "wojak-finance",
    symbol: "woj",
    name: "Wojak Finance",
  },
  {
    id: "wolfcoin",
    symbol: "wolf",
    name: "WOLFCOIN",
  },
  {
    id: "wolfecoin",
    symbol: "wolfe",
    name: "Wolfecoin",
  },
  {
    id: "wolf-game-wool",
    symbol: "wool",
    name: "Wolf Game Wool",
  },
  {
    id: "wolfgirl",
    symbol: "wlfgrl",
    name: "Wolfgirl",
  },
  {
    id: "wolf-girl",
    symbol: "wolfgirl",
    name: "Wolf Girl",
  },
  {
    id: "wolf-pups-2",
    symbol: "wolfies",
    name: "WOLF PUPS",
  },
  {
    id: "wolfsafepoorpeople",
    symbol: "wspp",
    name: "WolfSafePoorPeople",
  },
  {
    id: "wolfsafepoorpeople-polygon",
    symbol: "wspp",
    name: "WolfSafePoorPeople Polygon",
  },
  {
    id: "wolf-town-wool",
    symbol: "wtwool",
    name: "Wolf Town Wool",
  },
  {
    id: "wolf-ventures",
    symbol: "$wv",
    name: "Wolf Ventures",
  },
  {
    id: "wolfy",
    symbol: "wolfy",
    name: "WOLFY",
  },
  {
    id: "wolverinu",
    symbol: "wolverinu",
    name: "WOLVERINU [OLD]",
  },
  {
    id: "wolverinu-2",
    symbol: "wolverinu",
    name: "Wolverinu",
  },
  {
    id: "wolves-of-wall-street",
    symbol: "wows",
    name: "Wolves of Wall Street",
  },
  {
    id: "wombat",
    symbol: "wombat",
    name: "Wombat",
  },
  {
    id: "wombat-exchange",
    symbol: "wom",
    name: "Wombat Exchange",
  },
  {
    id: "wombex",
    symbol: "wmx",
    name: "Wombex",
  },
  {
    id: "women-empowerment-token",
    symbol: "wemp",
    name: "Women Empowerment",
  },
  {
    id: "wom-token",
    symbol: "wom",
    name: "WOM Protocol",
  },
  {
    id: "wonderfi-tokenized-stock",
    symbol: "wndr",
    name: "WonderFi Tokenized Stock",
  },
  {
    id: "wonderhero",
    symbol: "wnd",
    name: "WonderHero [OLD]",
  },
  {
    id: "wonderhero-2",
    symbol: "wnd",
    name: "WonderHero",
  },
  {
    id: "wonderhero-hon",
    symbol: "hon",
    name: "WonderHero HON",
  },
  {
    id: "wonderland",
    symbol: "time",
    name: "Wonderland TIME",
  },
  {
    id: "wonderman-nation",
    symbol: "wndr",
    name: "Wonderman Nation",
  },
  {
    id: "woodcoin",
    symbol: "log",
    name: "Woodcoin",
  },
  {
    id: "woof-token",
    symbol: "woof",
    name: "WOOF",
  },
  {
    id: "woofy",
    symbol: "woofy",
    name: "Woofy",
  },
  {
    id: "wool-token",
    symbol: "wool",
    name: "Wool",
  },
  {
    id: "woo-network",
    symbol: "woo",
    name: "WOO Network",
  },
  {
    id: "woonkly-power",
    symbol: "woop",
    name: "Woonkly Power",
  },
  {
    id: "woop",
    symbol: "woop",
    name: "WOOP",
  },
  {
    id: "woozoo-music",
    symbol: "wzm",
    name: "Woozoo Music",
  },
  {
    id: "wordlex",
    symbol: "wdx",
    name: "Wordlex",
  },
  {
    id: "workit",
    symbol: "wkit",
    name: "WORKIT",
  },
  {
    id: "work-quest",
    symbol: "wqt",
    name: "Work Quest",
  },
  {
    id: "worktips",
    symbol: "wtip",
    name: "Worktips",
  },
  {
    id: "world-bet-inu",
    symbol: "wbi",
    name: "World Bet Inu",
  },
  {
    id: "world-bet-token",
    symbol: "wbt",
    name: "World Bet Token",
  },
  {
    id: "worldcoin",
    symbol: "wdc",
    name: "WorldCoin",
  },
  {
    id: "worldcore",
    symbol: "wrc",
    name: "Worldcore",
  },
  {
    id: "worldcup-fan-token-pow",
    symbol: "wtf",
    name: "WorldCup Fan Token PoW",
  },
  {
    id: "world-cup-inu",
    symbol: "wci",
    name: "WORLD CUP INU",
  },
  {
    id: "world-cup-willie",
    symbol: "willie",
    name: "World Cup Willie",
  },
  {
    id: "world-football",
    symbol: "wofo",
    name: "World Football",
  },
  {
    id: "world-mobile-token",
    symbol: "wmt",
    name: "World Mobile Token",
  },
  {
    id: "world-of-defish",
    symbol: "wod",
    name: "World of Defish",
  },
  {
    id: "world-of-farms",
    symbol: "wof",
    name: "World of Farms",
  },
  {
    id: "world-of-waves",
    symbol: "wow",
    name: "World of Waves",
  },
  {
    id: "world-pay-coin",
    symbol: "wpc",
    name: "World Pay Coin",
  },
  {
    id: "worldpet",
    symbol: "wpt",
    name: "WORLDPET",
  },
  {
    id: "world-token",
    symbol: "world",
    name: "World",
  },
  {
    id: "wormfi",
    symbol: "worm",
    name: "WormFi",
  },
  {
    id: "worthpad",
    symbol: "worth",
    name: "Worthpad",
  },
  {
    id: "worthwhile",
    symbol: "whe",
    name: "Worthwhile",
  },
  {
    id: "wow100k",
    symbol: "100k",
    name: "Wow100K",
  },
  {
    id: "wownero",
    symbol: "wow",
    name: "Wownero",
  },
  {
    id: "wowswap",
    symbol: "wow",
    name: "WOWswap",
  },
  {
    id: "wow-token",
    symbol: "wow",
    name: "WOWNFT",
  },
  {
    id: "wozx",
    symbol: "wozx",
    name: "Efforce",
  },
  {
    id: "wpp-token",
    symbol: "wpp",
    name: "WPP Token",
  },
  {
    id: "wpt-investing-corp",
    symbol: "wpt",
    name: "WPT Investing Corp",
  },
  {
    id: "wrap-governance-token",
    symbol: "wrap",
    name: "WRAP Governance",
  },
  {
    id: "wrapped-accumulate",
    symbol: "wacme",
    name: "Wrapped Accumulate",
  },
  {
    id: "wrapped-ada",
    symbol: "wada",
    name: "Wrapped ADA",
  },
  {
    id: "wrapped-algo",
    symbol: "xalgo",
    name: "Wrapped ALGO",
  },
  {
    id: "wrapped-ampleforth",
    symbol: "wampl",
    name: "Wrapped Ampleforth",
  },
  {
    id: "wrapped-anatha",
    symbol: "wanatha",
    name: "Wrapped ANATHA",
  },
  {
    id: "wrapped-ar",
    symbol: "war",
    name: "Wrapped AR",
  },
  {
    id: "wrapped-astar",
    symbol: "wastr",
    name: "Wrapped Astar",
  },
  {
    id: "wrapped-atromg8",
    symbol: "wag8",
    name: "Wrapped ATROMG8",
  },
  {
    id: "wrapped-avax",
    symbol: "wavax",
    name: "Wrapped AVAX",
  },
  {
    id: "wrapped-avian",
    symbol: "wavn",
    name: "Wrapped Avian",
  },
  {
    id: "wrapped-bch",
    symbol: "wbch",
    name: "Wrapped BCH",
  },
  {
    id: "wrapped-bind",
    symbol: "wbind",
    name: "Wrapped BIND",
  },
  {
    id: "wrapped-bitcoin",
    symbol: "wbtc",
    name: "Wrapped Bitcoin",
  },
  {
    id: "wrapped-bitcoin-celer",
    symbol: "cewbtc",
    name: "Wrapped Bitcoin - Celer",
  },
  {
    id: "wrapped-bitcoin-sollet",
    symbol: "sobtc",
    name: "Wrapped Bitcoin (Sollet)",
  },
  {
    id: "wrapped-bitcoin-stacks",
    symbol: "xbtc",
    name: "Wrapped Bitcoin-Stacks",
  },
  {
    id: "wrapped-bnb-celer",
    symbol: "cewbnb",
    name: "Wrapped BNB - Celer",
  },
  {
    id: "wrapped-brise",
    symbol: "wbrise",
    name: "Wrapped Brise",
  },
  {
    id: "wrapped-btt",
    symbol: "wbtt",
    name: "Wrapped BTT",
  },
  {
    id: "wrapped-busd",
    symbol: "wbusd",
    name: "Wrapped BUSD",
  },
  {
    id: "wrapped-busd-allbridge-from-bsc",
    symbol: "abbusd",
    name: "Wrapped BUSD (Allbridge from BSC)",
  },
  {
    id: "wrapped-centrifuge",
    symbol: "wcfg",
    name: "Wrapped Centrifuge",
  },
  {
    id: "wrapped-chainlink-sollet",
    symbol: "solink",
    name: "Wrapped Chainlink (Sollet)",
  },
  {
    id: "wrapped-ckb",
    symbol: "wckb",
    name: "Wrapped CKB",
  },
  {
    id: "wrapped-conflux",
    symbol: "wcfx",
    name: "Wrapped Conflux",
  },
  {
    id: "wrapped-cro",
    symbol: "wcro",
    name: "Wrapped CRO",
  },
  {
    id: "wrapped-cryptokitties",
    symbol: "wck",
    name: "Wrapped CryptoKitties",
  },
  {
    id: "wrapped-cube",
    symbol: "wcube",
    name: "Wrapped Cube",
  },
  {
    id: "wrapped-cusd-allbridge-from-celo",
    symbol: "acusd",
    name: "Wrapped CUSD (Allbridge from Celo)",
  },
  {
    id: "wrapped-ecomi",
    symbol: "womi",
    name: "Wrapped ECOMI",
  },
  {
    id: "wrapped-elastos",
    symbol: "wela",
    name: "Wrapped Elastos",
  },
  {
    id: "wrapped-elrond",
    symbol: "wegld",
    name: "Wrapped Elrond",
  },
  {
    id: "wrapped-energi",
    symbol: "wnrg",
    name: "Wrapped Energi",
  },
  {
    id: "wrapped-ether",
    symbol: "wetc",
    name: "WETC",
  },
  {
    id: "wrapped-ether-celer",
    symbol: "ceweth",
    name: "Wrapped Ether - Celer",
  },
  {
    id: "wrapped-ethereum-sollet",
    symbol: "soeth",
    name: "Wrapped Ethereum (Sollet)",
  },
  {
    id: "wrapped-ethw",
    symbol: "wethw",
    name: "Wrapped ETHW",
  },
  {
    id: "wrapped-ever",
    symbol: "wever",
    name: "Wrapped Ever",
  },
  {
    id: "wrapped-fantom",
    symbol: "wftm",
    name: "Wrapped Fantom",
  },
  {
    id: "wrapped-fantom-celer",
    symbol: "cewftm",
    name: "Wrapped Fantom - Celer",
  },
  {
    id: "wrapped-filecoin",
    symbol: "wfil",
    name: "Wrapped Filecoin",
  },
  {
    id: "wrapped-flow",
    symbol: "wflow",
    name: "Wrapped Flow",
  },
  {
    id: "wrapped-gen-0-cryptokitties",
    symbol: "wg0",
    name: "Wrapped Gen-0 CryptoKitties",
  },
  {
    id: "wrapped-hec",
    symbol: "wshec",
    name: "Wrapped HEC",
  },
  {
    id: "wrapped-hoo",
    symbol: "whoo",
    name: "Wrapped HOO",
  },
  {
    id: "wrapped-huobi-token",
    symbol: "wht",
    name: "Wrapped Huobi",
  },
  {
    id: "wrapped-iotex",
    symbol: "wiotx",
    name: "Wrapped IoTex",
  },
  {
    id: "wrapped-kava",
    symbol: "wkava",
    name: "Wrapped Kava",
  },
  {
    id: "wrapped-kcs",
    symbol: "wkcs",
    name: "Wrapped KCS",
  },
  {
    id: "wrapped-klay",
    symbol: "wklay",
    name: "Wrapped KLAY",
  },
  {
    id: "wrapped-knoxfs",
    symbol: "wkfx",
    name: "Wrapped KnoxFS",
  },
  {
    id: "wrapped-leo",
    symbol: "wleo",
    name: "Wrapped LEO",
  },
  {
    id: "wrapped-memory",
    symbol: "wmemo",
    name: "Wonderful Memories",
  },
  {
    id: "wrapped-metrix",
    symbol: "mrxb",
    name: "Wrapped Metrix",
  },
  {
    id: "wrapped-moonbeam",
    symbol: "wglmr",
    name: "Wrapped Moonbeam",
  },
  {
    id: "wrapped-moon-cats",
    symbol: "mcat20",
    name: "Wrapped Moon Cats",
  },
  {
    id: "wrapped-ncg",
    symbol: "wncg",
    name: "Wrapped NCG",
  },
  {
    id: "wrapped-near",
    symbol: "wnear",
    name: "Wrapped Near",
  },
  {
    id: "wrapped-newyorkcoin",
    symbol: "wnyc",
    name: "Wrapped NewYorkCoin",
  },
  {
    id: "wrapped-nxm",
    symbol: "wnxm",
    name: "Wrapped NXM",
  },
  {
    id: "wrapped-oas",
    symbol: "woas",
    name: "Wrapped OAS",
  },
  {
    id: "wrapped-okt",
    symbol: "wokt",
    name: "Wrapped OKT",
  },
  {
    id: "wrapped-one",
    symbol: "wone",
    name: "Wrapped One",
  },
  {
    id: "wrapped-paycoin",
    symbol: "wpci",
    name: "Wrapped Paycoin",
  },
  {
    id: "wrapped-pkt",
    symbol: "wpkt",
    name: "Wrapped PKT",
  },
  {
    id: "wrapped-shiden-network",
    symbol: "sdn",
    name: "Wrapped Shiden Network",
  },
  {
    id: "wrapped-sol",
    symbol: "xsol",
    name: "Wrapped SOL",
  },
  {
    id: "wrapped-solana",
    symbol: "sol",
    name: "Wrapped Solana",
  },
  {
    id: "wrapped-staked-scr",
    symbol: "wsscr",
    name: "Wrapped Staked SCR",
  },
  {
    id: "wrapped-star",
    symbol: "wstr",
    name: "Wrapped Star",
  },
  {
    id: "wrapped-statera",
    symbol: "wsta",
    name: "Wrapped Statera",
  },
  {
    id: "wrapped-steth",
    symbol: "wsteth",
    name: "Wrapped stETH",
  },
  {
    id: "wrapped-strax",
    symbol: "wstrax",
    name: "Wrapped Strax",
  },
  {
    id: "wrapped-syscoin",
    symbol: "wsys",
    name: "Wrapped Syscoin",
  },
  {
    id: "wrapped-telos",
    symbol: "wtlos",
    name: "Wrapped Telos",
  },
  {
    id: "wrapped-terra",
    symbol: "lunc",
    name: "Wrapped Terra Classic",
  },
  {
    id: "wrapped-tezos",
    symbol: "wxtz",
    name: "StakerDAO Wrapped Tezos",
  },
  {
    id: "wrapped-tezos-2",
    symbol: "wtz",
    name: "Wrapped Tezos",
  },
  {
    id: "wrapped-thunderpokt",
    symbol: "wtpokt",
    name: "Wrapped ThunderPOKT",
  },
  {
    id: "wrapped-tomo",
    symbol: "wtomo",
    name: "Wrapped TOMO",
  },
  {
    id: "wrapped-ton-crystal",
    symbol: "wton",
    name: "Wrapped TON Crystal",
  },
  {
    id: "wrapped-tron",
    symbol: "wtrx",
    name: "Wrapped Tron",
  },
  {
    id: "wrapped-turtlecoin",
    symbol: "wtrtl",
    name: "Wrapped TurtleCoin",
  },
  {
    id: "wrapped-usdc",
    symbol: "xusd",
    name: "Wrapped USDC",
  },
  {
    id: "wrapped-usdt",
    symbol: "wusdt",
    name: "Wrapped USDT",
  },
  {
    id: "wrapped-usdt-allbridge-from-polygon",
    symbol: "apusdt",
    name: "Wrapped USDT (Allbridge from Polygon)",
  },
  {
    id: "wrapped-ust",
    symbol: "ustc",
    name: "Wrapped USTC",
  },
  {
    id: "wrapped-velas",
    symbol: "wvlx",
    name: "Wrapped Velas",
  },
  {
    id: "wrapped-virgin-gen-0-cryptokitties",
    symbol: "wvg0",
    name: "Wrapped Virgin Gen-0 CryptoKittties",
  },
  {
    id: "wrapped-wan",
    symbol: "wwan",
    name: "Wrapped Wan",
  },
  {
    id: "wrapped-wdoge",
    symbol: "wwdoge",
    name: "Wrapped WDOGE",
  },
  {
    id: "wrapped-wwshib",
    symbol: "wwshib",
    name: "Wrapped WWSHIB",
  },
  {
    id: "wrapped-xbtc",
    symbol: "wxbtc",
    name: "Wrapped xBTC",
  },
  {
    id: "wrapped-xdai",
    symbol: "wxdai",
    name: "Wrapped XDAI",
  },
  {
    id: "wrapped-xdc",
    symbol: "wxdc",
    name: "Wrapped XDC",
  },
  {
    id: "wrapped-xmr-btse",
    symbol: "wxmr",
    name: "Wrapped XMR by BTSE",
  },
  {
    id: "wrapped-xrp",
    symbol: "wxrp",
    name: "Wrapped XRP",
  },
  {
    id: "wrapped-yfi-sollet",
    symbol: "soyfi",
    name: "Wrapped YFI (Sollet)",
  },
  {
    id: "wrapped-zcash",
    symbol: "wzec",
    name: "Wrapped Zcash",
  },
  {
    id: "wrestling-shiba",
    symbol: "wwe",
    name: "Wrestling Shiba",
  },
  {
    id: "wsb-sh",
    symbol: "wsbt",
    name: "WSB.sh",
  },
  {
    id: "wtf-token",
    symbol: "wtf",
    name: "Fees.wtf",
  },
  {
    id: "wynd",
    symbol: "wynd",
    name: "WYND",
  },
  {
    id: "x2",
    symbol: "x2",
    name: "X2",
  },
  {
    id: "x-2",
    symbol: "x",
    name: "X",
  },
  {
    id: "x2y2",
    symbol: "x2y2",
    name: "X2Y2",
  },
  {
    id: "x42-protocol",
    symbol: "x42",
    name: "X42 Protocol",
  },
  {
    id: "x7101",
    symbol: "x7101",
    name: "X7101",
  },
  {
    id: "x7102",
    symbol: "x7102",
    name: "X7102",
  },
  {
    id: "x7103",
    symbol: "x7103",
    name: "X7103",
  },
  {
    id: "x7104",
    symbol: "x7104",
    name: "X7104",
  },
  {
    id: "x7105",
    symbol: "x7105",
    name: "X7105",
  },
  {
    id: "x7-coin",
    symbol: "x7c",
    name: "X7 Coin",
  },
  {
    id: "x7dao",
    symbol: "x7dao",
    name: "X7DAO",
  },
  {
    id: "x7r",
    symbol: "x7r",
    name: "X7R",
  },
  {
    id: "x8-project",
    symbol: "x8x",
    name: "X8X",
  },
  {
    id: "xaea-xii-token",
    symbol: "xaea-xii",
    name: "XAEA-Xii",
  },
  {
    id: "xai",
    symbol: "xai",
    name: "XAI Stablecoin",
  },
  {
    id: "xana",
    symbol: "xeta",
    name: "XANA",
  },
  {
    id: "xank",
    symbol: "xank",
    name: "Xank",
  },
  {
    id: "xaurum",
    symbol: "xaur",
    name: "Xaurum",
  },
  {
    id: "xave-coin",
    symbol: "xvc",
    name: "Xave Coin",
  },
  {
    id: "xave-token",
    symbol: "xav",
    name: "Xave",
  },
  {
    id: "xaviera-tech",
    symbol: "xts",
    name: "Xaviera Tech",
  },
  {
    id: "xaviera-techno-solutions",
    symbol: "xts",
    name: "Xaviera Techno Solutions",
  },
  {
    id: "xbe-token",
    symbol: "xbe",
    name: "XBE",
  },
  {
    id: "xbit",
    symbol: "xbt",
    name: "Xbit",
  },
  {
    id: "x-blox",
    symbol: "xbx",
    name: "X-BLOX",
  },
  {
    id: "xbn",
    symbol: "xbn",
    name: "Elastic BNB",
  },
  {
    id: "xbn-community-token",
    symbol: "xbc",
    name: "XBN Community",
  },
  {
    id: "xbullion",
    symbol: "gold",
    name: "XBullion",
  },
  {
    id: "xbullion_silver",
    symbol: "silv",
    name: "XBullion Silver",
  },
  {
    id: "xcad-network",
    symbol: "xcad",
    name: "XCAD Network",
  },
  {
    id: "x-capital",
    symbol: "xcap",
    name: "X Capital",
  },
  {
    id: "xcarnival",
    symbol: "xcv",
    name: "XCarnival",
  },
  {
    id: "x-cash",
    symbol: "xcash",
    name: "X-CASH",
  },
  {
    id: "xcavator",
    symbol: "xca",
    name: "Xcavator",
  },
  {
    id: "xcdot",
    symbol: "xcdot",
    name: "xcDOT",
  },
  {
    id: "xcel-swap",
    symbol: "xld",
    name: "Xcel Defi",
  },
  {
    id: "xceltoken-plus",
    symbol: "xlab",
    name: "XCELTOKEN PLUS",
  },
  {
    id: "xcf-token",
    symbol: "xcf",
    name: "XCF Token",
  },
  {
    id: "xcksm",
    symbol: "xcksm",
    name: "xcKSM",
  },
  {
    id: "xcom",
    symbol: "xc",
    name: "XCOM",
  },
  {
    id: "x-consoles",
    symbol: "game",
    name: "X-Consoles",
  },
  {
    id: "xcrx",
    symbol: "xcrx",
    name: "xCRX",
  },
  {
    id: "xdai",
    symbol: "xdai",
    name: "XDAI",
  },
  {
    id: "xdai-native-comb",
    symbol: "xcomb",
    name: "xDai Native Comb",
  },
  {
    id: "xdai-stake",
    symbol: "stake",
    name: "STAKE",
  },
  {
    id: "xdao",
    symbol: "xdao",
    name: "XDAO",
  },
  {
    id: "xdce-crowd-sale",
    symbol: "xdc",
    name: "XDC Network",
  },
  {
    id: "xdefi",
    symbol: "xdefi",
    name: "XDEFI",
  },
  {
    id: "xdefi-governance-token",
    symbol: "xdex",
    name: "XDEFI Governance",
  },
  {
    id: "xdoge",
    symbol: "xdoge",
    name: "Xdoge",
  },
  {
    id: "xdollar-stablecoin",
    symbol: "xusd",
    name: "xDollar Stablecoin",
  },
  {
    id: "x-ecosystem",
    symbol: "xeco",
    name: "X Ecosystem",
  },
  {
    id: "xeebster",
    symbol: "xeeb",
    name: "Xeebster",
  },
  {
    id: "xels",
    symbol: "xels",
    name: "XELS",
  },
  {
    id: "xen-crypto",
    symbol: "xen",
    name: "XEN Crypto",
  },
  {
    id: "xend-finance",
    symbol: "xend",
    name: "Xend Finance",
  },
  {
    id: "xenios",
    symbol: "xnc",
    name: "Xenios",
  },
  {
    id: "xeniumx",
    symbol: "xemx",
    name: "Xeniumx",
  },
  {
    id: "xeno-token",
    symbol: "xno",
    name: "Xeno",
  },
  {
    id: "xensor",
    symbol: "xsr",
    name: "Xensor",
  },
  {
    id: "xerium",
    symbol: "xerm",
    name: "Xerium",
  },
  {
    id: "xeta",
    symbol: "x3ta",
    name: "XETA",
  },
  {
    id: "xeus",
    symbol: "xeus",
    name: "XEUS",
  },
  {
    id: "xfarmer",
    symbol: "xf",
    name: "xFarmer",
  },
  {
    id: "xfinance",
    symbol: "xfi",
    name: "Xfinance",
  },
  {
    id: "xfinite-entertainment-token",
    symbol: "xet",
    name: "Xfinite Entertainment",
  },
  {
    id: "xfit",
    symbol: "xfit",
    name: "Xfit",
  },
  {
    id: "xfuel",
    symbol: "xfuel",
    name: "XFUEL",
  },
  {
    id: "xfund",
    symbol: "xfund",
    name: "xFUND",
  },
  {
    id: "xgold-coin",
    symbol: "xgold",
    name: "Xgold Coin",
  },
  {
    id: "x-hash",
    symbol: "xsh",
    name: "X-HASH",
  },
  {
    id: "xhashtag",
    symbol: "xtag",
    name: "xHashtag",
  },
  {
    id: "xhype",
    symbol: "xhp",
    name: "XHYPE",
  },
  {
    id: "xiamipool",
    symbol: "xmpt",
    name: "XiamiPool",
  },
  {
    id: "xiasi-inu",
    symbol: "xiasi",
    name: "Xiasi Inu",
  },
  {
    id: "xiden",
    symbol: "xden",
    name: "Xiden",
  },
  {
    id: "xido-finance",
    symbol: "xido",
    name: "Xido Finance",
  },
  {
    id: "xiglute-coin",
    symbol: "xgc",
    name: "Xiglute Coin",
  },
  {
    id: "xio",
    symbol: "xio",
    name: "Blockzero Labs",
  },
  {
    id: "xion-finance",
    symbol: "xgt",
    name: "Xion Finance",
  },
  {
    id: "xiotri",
    symbol: "xiot",
    name: "Xiotri",
  },
  {
    id: "xi-token",
    symbol: "xi",
    name: "Xi",
  },
  {
    id: "xjewel",
    symbol: "xjewel",
    name: "xJEWEL",
  },
  {
    id: "xlist",
    symbol: "xlist",
    name: "XList",
  },
  {
    id: "xl-moon",
    symbol: "xlmn",
    name: "XL-Moon",
  },
  {
    id: "xmark",
    symbol: "xmark",
    name: "xMARK",
  },
  {
    id: "x-mask",
    symbol: "xmc",
    name: "X-MASK",
  },
  {
    id: "xmatic",
    symbol: "xmatic",
    name: "xMATIC",
  },
  {
    id: "xmax",
    symbol: "xmx",
    name: "XMax",
  },
  {
    id: "xmetaversal",
    symbol: "xmeta",
    name: "XMetaversal",
  },
  {
    id: "x-metaverse",
    symbol: "xmeta",
    name: "X-Metaverse",
  },
  {
    id: "xmine",
    symbol: "xmn",
    name: "Xmine",
  },
  {
    id: "xmon",
    symbol: "xmon",
    name: "XMON",
  },
  {
    id: "xmooney",
    symbol: "xm",
    name: "xMooney",
  },
  {
    id: "xnft",
    symbol: "xnft",
    name: "xNFT Protocol",
  },
  {
    id: "xodex",
    symbol: "xodex",
    name: "Xodex",
  },
  {
    id: "xoloitzcuintli",
    symbol: "xolo",
    name: "xoloitzcuintli",
  },
  {
    id: "xov",
    symbol: "xov",
    name: "XOVBank",
  },
  {
    id: "xoycoin",
    symbol: "xoy",
    name: "XOYCoin",
  },
  {
    id: "xp",
    symbol: "xp",
    name: "XP",
  },
  {
    id: "xpansion-game",
    symbol: "xps",
    name: "Xpansion Game",
  },
  {
    id: "xpendium",
    symbol: "xpnd",
    name: "Xpendium",
  },
  {
    id: "xperps",
    symbol: "xperps",
    name: "xPERPS",
  },
  {
    id: "xpla",
    symbol: "xpla",
    name: "XPLA",
  },
  {
    id: "xplus-token",
    symbol: "xpt",
    name: "XPLUS Token",
  },
  {
    id: "xpmarket",
    symbol: "xpm",
    name: "XPmarket",
  },
  {
    id: "xp-network",
    symbol: "xpnet",
    name: "XP Network",
  },
  {
    id: "xpool",
    symbol: "xpo",
    name: "Xpool",
  },
  {
    id: "xpop",
    symbol: "xpop",
    name: "XPOP",
  },
  {
    id: "xpose-protocol",
    symbol: "xp",
    name: "Xpose Protocol",
  },
  {
    id: "xproject",
    symbol: "xpro",
    name: "XPROJECT",
  },
  {
    id: "x-protocol",
    symbol: "pot",
    name: "X Protocol",
  },
  {
    id: "xptp",
    symbol: "xptp",
    name: "xPTP",
  },
  {
    id: "xquake",
    symbol: "xqk",
    name: "XQuake",
  },
  {
    id: "xrdoge",
    symbol: "xrdoge",
    name: "XRdoge",
  },
  {
    id: "xreators",
    symbol: "ort",
    name: "XREATORS",
  },
  {
    id: "xrhodium",
    symbol: "xrc",
    name: "xRhodium",
  },
  {
    id: "xriba",
    symbol: "xra",
    name: "Xriba",
  },
  {
    id: "xrice-token",
    symbol: "xrice",
    name: "xRice Token",
  },
  {
    id: "xrpalike-gene",
    symbol: "xag",
    name: "Xrpalike Gene",
  },
  {
    id: "xrpaynet",
    symbol: "xrpaynet",
    name: "XRPayNet",
  },
  {
    id: "xrp-classic",
    symbol: "xrpc",
    name: "XRP Classic",
  },
  {
    id: "xrpfarm",
    symbol: "xf",
    name: "XRPFarm",
  },
  {
    id: "xr-shiba-inu",
    symbol: "xrshib",
    name: "XR Shiba Inu",
  },
  {
    id: "xrun",
    symbol: "xrun",
    name: "XRun",
  },
  {
    id: "xsauce",
    symbol: "xsauce",
    name: "xSAUCE",
  },
  {
    id: "xsgd",
    symbol: "xsgd",
    name: "XSGD",
  },
  {
    id: "xshare",
    symbol: "xshare",
    name: "SpaceShipX",
  },
  {
    id: "xsigma",
    symbol: "sig",
    name: "xSigma",
  },
  {
    id: "xsl-labs",
    symbol: "syl",
    name: "XSL Labs",
  },
  {
    id: "xspectar",
    symbol: "xspectar",
    name: "xSPECTAR",
  },
  {
    id: "xstudio",
    symbol: "txs",
    name: "XStudio",
  },
  {
    id: "xsushi",
    symbol: "xsushi",
    name: "xSUSHI",
  },
  {
    id: "xswap",
    symbol: "xsp",
    name: "XSwap",
  },
  {
    id: "xswap-protocol",
    symbol: "xsp",
    name: "XSwap Protocol",
  },
  {
    id: "xswap-treasure",
    symbol: "xtt",
    name: "XSwap Treasure",
  },
  {
    id: "xtal",
    symbol: "xtal",
    name: "XTAL",
  },
  {
    id: "xtblock-token",
    symbol: "xtt-b20",
    name: "XTblock",
  },
  {
    id: "xtcom-token",
    symbol: "xt",
    name: "XT.com",
  },
  {
    id: "xtime",
    symbol: "xtm",
    name: "XTime",
  },
  {
    id: "xtoken",
    symbol: "xtk",
    name: "xToken",
  },
  {
    id: "xtrabytes",
    symbol: "xby",
    name: "XTRABYTES",
  },
  {
    id: "xtra-fund",
    symbol: "xtra",
    name: "Xtra Fund",
  },
  {
    id: "xtremcoin",
    symbol: "xtr",
    name: "Xtremcoin",
  },
  {
    id: "xtrm",
    symbol: "xtrm",
    name: "XTRM",
  },
  {
    id: "xtusd",
    symbol: "xtusd",
    name: "XT Stablecoin XTUSD",
  },
  {
    id: "xuez",
    symbol: "xuez",
    name: "Xuez Coin",
  },
  {
    id: "xungible",
    symbol: "xgbl",
    name: "Xungible",
  },
  {
    id: "xusd",
    symbol: "xusd",
    name: "xUSD",
  },
  {
    id: "xusd-babelfish",
    symbol: "xusd",
    name: "XUSD (BabelFish)",
  },
  {
    id: "xusd-token",
    symbol: "xusd",
    name: "xUSD Token",
  },
  {
    id: "xverse",
    symbol: "xvc",
    name: "Xverse",
  },
  {
    id: "xwalrus",
    symbol: "xwlrs",
    name: "xWalrus",
  },
  {
    id: "xwin-finance",
    symbol: "xwin",
    name: "xWIN Finance",
  },
  {
    id: "x-world-games",
    symbol: "xwg",
    name: "X World Games",
  },
  {
    id: "xxcoin",
    symbol: "xx",
    name: "XX Network",
  },
  {
    id: "xx-platform",
    symbol: "xxp",
    name: "XX Platform",
  },
  {
    id: "xy-finance",
    symbol: "xy",
    name: "XY Finance",
  },
  {
    id: "xyo-network",
    symbol: "xyo",
    name: "XYO Network",
  },
  {
    id: "xysl",
    symbol: "xysl",
    name: "xYSL",
  },
  {
    id: "y2k",
    symbol: "y2k",
    name: "Y2K",
  },
  {
    id: "y-5-finance",
    symbol: "y5",
    name: "Y5 Crypto",
  },
  {
    id: "y5-trader",
    symbol: "y5tt",
    name: "Y5 Trader",
  },
  {
    id: "yachtx",
    symbol: "yachtx",
    name: "YachtX",
  },
  {
    id: "yacoin",
    symbol: "yac",
    name: "YACoin",
  },
  {
    id: "yadacoin",
    symbol: "yda",
    name: "YadaCoin",
  },
  {
    id: "yaki-gold",
    symbol: "yag",
    name: "Yaki Gold",
  },
  {
    id: "yaku",
    symbol: "yaku",
    name: "Yaku",
  },
  {
    id: "yakushima",
    symbol: "forest",
    name: "YAKUSHIMA",
  },
  {
    id: "yam-2",
    symbol: "yam",
    name: "YAM",
  },
  {
    id: "yamp-finance",
    symbol: "yamp",
    name: "Yamp Finance",
  },
  {
    id: "yam-v2",
    symbol: "yamv2",
    name: "YAM v2",
  },
  {
    id: "yarloo",
    symbol: "yarl",
    name: "Yarloo",
  },
  {
    id: "yas",
    symbol: "yas",
    name: "YAS",
  },
  {
    id: "yasha-dao",
    symbol: "yasha",
    name: "YASHA",
  },
  {
    id: "yawww",
    symbol: "yaw",
    name: "Yawww",
  },
  {
    id: "yaxis",
    symbol: "yaxis",
    name: "yAxis",
  },
  {
    id: "yay-games",
    symbol: "yay",
    name: "YAY Games",
  },
  {
    id: "yayo-coin",
    symbol: "yayo",
    name: "Yayo Coin",
  },
  {
    id: "yayswap",
    symbol: "yay",
    name: "YaySwap",
  },
  {
    id: "ycash",
    symbol: "yec",
    name: "Ycash",
  },
  {
    id: "yclub",
    symbol: "syc",
    name: "YCLUB",
  },
  {
    id: "y-coin",
    symbol: "yco",
    name: "Y Coin",
  },
  {
    id: "ydragon",
    symbol: "ydr",
    name: "YDragon",
  },
  {
    id: "yeabrswap",
    symbol: "sbear",
    name: "yBEARSwap",
  },
  {
    id: "yearn-cash",
    symbol: "yfic",
    name: "Yearn Cash",
  },
  {
    id: "yearn-classic-finance",
    symbol: "earn",
    name: "Yearn Classic Finance",
  },
  {
    id: "yearn-crv",
    symbol: "ycrv",
    name: "Yearn CRV",
  },
  {
    id: "yearn-finance",
    symbol: "yfi",
    name: "yearn.finance",
  },
  {
    id: "yearn-finance-bit",
    symbol: "yfbt",
    name: "Yearn Finance Bit",
  },
  {
    id: "yearn-finance-bit2",
    symbol: "yfb2",
    name: "Yearn Finance Bit2",
  },
  {
    id: "yearn-finance-diamond-token",
    symbol: "yfdt",
    name: "Yearn Finance Diamond",
  },
  {
    id: "yearn-finance-dot",
    symbol: "yfdot",
    name: "Yearn Finance DOT",
  },
  {
    id: "yearn-finance-management",
    symbol: "yefim",
    name: "Yearn Finance Management",
  },
  {
    id: "yearn-finance-passive-income",
    symbol: "yfpi",
    name: "Yearn Finance Passive Income",
  },
  {
    id: "yearnlab",
    symbol: "ylb",
    name: "Yearnlab",
  },
  {
    id: "yearn-lazy-ape",
    symbol: "yla",
    name: "Yearn Lazy Ape",
  },
  {
    id: "yearn-secure",
    symbol: "ysec",
    name: "Yearn Secure",
  },
  {
    id: "yee",
    symbol: "yee",
    name: "Yee",
  },
  {
    id: "yeld-finance",
    symbol: "yeld",
    name: "Yeld Finance",
  },
  {
    id: "yel-finance",
    symbol: "yel",
    name: "Yel.Finance",
  },
  {
    id: "yellowheart-protocol",
    symbol: "hrts",
    name: "YellowHeart Protocol",
  },
  {
    id: "yellow-road",
    symbol: "road",
    name: "Yellow Road",
  },
  {
    id: "yeni-malatyaspor-token",
    symbol: "yms",
    name: "Yeni Malatyaspor Token",
  },
  {
    id: "yenten",
    symbol: "ytn",
    name: "YENTEN",
  },
  {
    id: "yeon",
    symbol: "yeon",
    name: "Yeon",
  },
  {
    id: "yesorno",
    symbol: "yon",
    name: "YESorNO",
  },
  {
    id: "yes-world",
    symbol: "yes",
    name: "Yes World",
  },
  {
    id: "yeticoin",
    symbol: "yetic",
    name: "YetiCoin",
  },
  {
    id: "yeti-finance",
    symbol: "yeti",
    name: "Yeti Finance",
  },
  {
    id: "yetiswap",
    symbol: "yts",
    name: "YetiSwap",
  },
  {
    id: "yfdai-finance",
    symbol: "yf-dai",
    name: "YfDAI.finance",
  },
  {
    id: "yfdfi-finance",
    symbol: "yfd",
    name: "Your Finance Decentralized",
  },
  {
    id: "yfe-money",
    symbol: "yfe",
    name: "YFE Money",
  },
  {
    id: "yff-finance",
    symbol: "yff",
    name: "YFF.Finance",
  },
  {
    id: "yffi-finance",
    symbol: "yffi",
    name: "yffi finance",
  },
  {
    id: "yffii-finance",
    symbol: "yffii",
    name: "YFFII Finance",
  },
  {
    id: "yfii-finance",
    symbol: "yfii",
    name: "DFI.money",
  },
  {
    id: "yfii-gold",
    symbol: "yfiig",
    name: "YFII Gold",
  },
  {
    id: "yfilend-finance",
    symbol: "yfild",
    name: "YFILEND.FINANCE",
  },
  {
    id: "yfione",
    symbol: "yfo",
    name: "YFIONE",
  },
  {
    id: "yfix-finance",
    symbol: "yfix",
    name: "YFIX.finance",
  },
  {
    id: "yflink",
    symbol: "yfl",
    name: "YF Link",
  },
  {
    id: "yfox-finance",
    symbol: "yfox",
    name: "YFOX Finance",
  },
  {
    id: "yfx",
    symbol: "yfx",
    name: "Your Futures Exchange",
  },
  {
    id: "yield-app",
    symbol: "yld",
    name: "Yield App",
  },
  {
    id: "yieldblox",
    symbol: "ybx",
    name: "YieldBlox",
  },
  {
    id: "yield-guild-games",
    symbol: "ygg",
    name: "Yield Guild Games",
  },
  {
    id: "yieldification",
    symbol: "ydf",
    name: "Yieldification",
  },
  {
    id: "yieldlock",
    symbol: "ylf",
    name: "YieldLock",
  },
  {
    id: "yieldly",
    symbol: "yldy",
    name: "Yieldly",
  },
  {
    id: "yield-optimization-platform",
    symbol: "yop",
    name: "Yield Optimization Platform & Protocol",
  },
  {
    id: "yield-parrot",
    symbol: "lory",
    name: "Yield Parrot",
  },
  {
    id: "yield-protocol",
    symbol: "yield",
    name: "Yield Protocol",
  },
  {
    id: "yieldwatch",
    symbol: "watch",
    name: "Yieldwatch",
  },
  {
    id: "yield-yak",
    symbol: "yak",
    name: "Yield Yak",
  },
  {
    id: "yield-yak-avax",
    symbol: "yyavax",
    name: "Yield Yak AVAX",
  },
  {
    id: "yield-yld",
    symbol: "yld",
    name: "Yield YLD",
  },
  {
    id: "yin-finance",
    symbol: "yin",
    name: "YIN Finance",
  },
  {
    id: "yinyang",
    symbol: "yy",
    name: "YinYang",
  },
  {
    id: "ymplepay",
    symbol: "ympa",
    name: "YmplePay",
  },
  {
    id: "yobit-token",
    symbol: "yo",
    name: "Yobit",
  },
  {
    id: "yocoin",
    symbol: "yoc",
    name: "Yocoin",
  },
  {
    id: "yocoinyoco",
    symbol: "yoco",
    name: "YocoinYOCO",
  },
  {
    id: "yoda-coin-swap",
    symbol: "jedals",
    name: "Yoda Coin Swap",
  },
  {
    id: "yodeswap",
    symbol: "yode",
    name: "YodeSwap",
  },
  {
    id: "yofune-nushi",
    symbol: "koyo",
    name: "Yofune Nushi",
  },
  {
    id: "yogo",
    symbol: "yogo",
    name: "Yogo",
  },
  {
    id: "yohero",
    symbol: "yo",
    name: "YoHero",
  },
  {
    id: "yohero-yhc",
    symbol: "yhc",
    name: "YoHero (YHC)",
  },
  {
    id: "yokaiswap",
    symbol: "yok",
    name: "YokaiSwap",
  },
  {
    id: "yokcoin",
    symbol: "yok",
    name: "YOKcoin",
  },
  {
    id: "yokozuna-finance",
    symbol: "zuna",
    name: "Yokozuna Finance",
  },
  {
    id: "yolo-cash",
    symbol: "ylc",
    name: "YOLOCash",
  },
  {
    id: "yooshi",
    symbol: "yooshi",
    name: "YooShi",
  },
  {
    id: "yooshiba-inu",
    symbol: "yshibainu",
    name: "Yooshiba Inu",
  },
  {
    id: "yoplex",
    symbol: "yplx",
    name: "Yoplex",
  },
  {
    id: "yoshi-exchange",
    symbol: "yoshi",
    name: "Yoshi.exchange",
  },
  {
    id: "youbie",
    symbol: "$youb",
    name: "Youbie",
  },
  {
    id: "youcash",
    symbol: "youc",
    name: "YOUcash",
  },
  {
    id: "you-chain",
    symbol: "you",
    name: "YOU Chain",
  },
  {
    id: "youclout",
    symbol: "yct",
    name: "Youclout",
  },
  {
    id: "youcoin-metaverse",
    symbol: "ucon",
    name: "YouCoin Metaverse",
  },
  {
    id: "youliveeveryday",
    symbol: "ule",
    name: "YouLiveEveryday",
  },
  {
    id: "youminter",
    symbol: "umint",
    name: "YouMinter",
  },
  {
    id: "young",
    symbol: "yng",
    name: "Young",
  },
  {
    id: "young-boys-fan-token",
    symbol: "ybo",
    name: "Young Boys Fan Token",
  },
  {
    id: "youngparrot",
    symbol: "ypc",
    name: "YoungParrot",
  },
  {
    id: "yourkiss",
    symbol: "yks",
    name: "YourKiss",
  },
  {
    id: "youves-uusd",
    symbol: "uusd",
    name: "Youves uUSD",
  },
  {
    id: "youves-you-governance",
    symbol: "you",
    name: "Youves YOU Governance",
  },
  {
    id: "youwho",
    symbol: "you",
    name: "Youwho",
  },
  {
    id: "yoyow",
    symbol: "yoyow",
    name: "YOYOW",
  },
  {
    id: "yrise-finance",
    symbol: "yrise",
    name: "yRise Finance",
  },
  {
    id: "ysl",
    symbol: "ysl",
    name: "YSL",
  },
  {
    id: "ysoy-chain",
    symbol: "ysoy",
    name: "YSOY Chain",
  },
  {
    id: "ystar",
    symbol: "ysr",
    name: "Ystar",
  },
  {
    id: "ytofu",
    symbol: "ytofu",
    name: "yTOFU",
  },
  {
    id: "ytv-coin",
    symbol: "ytv",
    name: "YTV Coin",
  },
  {
    id: "yuan-chain-coin",
    symbol: "ycc",
    name: "Yuan Chain Coin",
  },
  {
    id: "yu-coin",
    symbol: "yucj",
    name: "Yu Coin [OLD]",
  },
  {
    id: "yu-coin-2",
    symbol: "yucj",
    name: "Yu Coin",
  },
  {
    id: "yugi",
    symbol: "yugi",
    name: "Yugi",
  },
  {
    id: "yummy",
    symbol: "yummy",
    name: "Yummy",
  },
  {
    id: "yup",
    symbol: "yup",
    name: "Yup",
  },
  {
    id: "yusd-stablecoin",
    symbol: "yusd",
    name: "YUSD Stablecoin",
  },
  {
    id: "yuse",
    symbol: "yuse",
    name: "Yuse",
  },
  {
    id: "yuzuswap",
    symbol: "yuzu",
    name: "YuzuSwap",
  },
  {
    id: "yvault-lp-ycurve",
    symbol: "yvault-lp-ycurve",
    name: "yUSD",
  },
  {
    id: "yvboost",
    symbol: "yvboost",
    name: "Yearn Compounding veCRV yVault",
  },
  {
    id: "yvs-finance",
    symbol: "yvs",
    name: "YVS Finance",
  },
  {
    id: "yye-energy",
    symbol: "yye",
    name: "YYE Energy",
  },
  {
    id: "yzz",
    symbol: "yzz",
    name: "YZZ",
  },
  {
    id: "z7dao",
    symbol: "z7",
    name: "Z7DAO",
  },
  {
    id: "zabaku-inu",
    symbol: "zabaku",
    name: "Zabaku Inu",
  },
  {
    id: "zada",
    symbol: "zada",
    name: "Zada",
  },
  {
    id: "zagent-gem",
    symbol: "zeg",
    name: "Zagent Gem",
  },
  {
    id: "zaif-token",
    symbol: "zaif",
    name: "Zaif",
  },
  {
    id: "zakumifi",
    symbol: "zafi",
    name: "ZakumiFi",
  },
  {
    id: "zambesigold",
    symbol: "zgd",
    name: "ZambesiGold",
  },
  {
    id: "zam-io",
    symbol: "zam",
    name: "Zam.io",
  },
  {
    id: "zamzam",
    symbol: "zamzam",
    name: "ZAMZAM",
  },
  {
    id: "zano",
    symbol: "zano",
    name: "Zano",
  },
  {
    id: "zantepay",
    symbol: "zantepay",
    name: "Zantepay",
  },
  {
    id: "zap",
    symbol: "zap",
    name: "Zap",
  },
  {
    id: "zappay",
    symbol: "zapc",
    name: "Zappay",
  },
  {
    id: "zappy",
    symbol: "zap",
    name: "Zappy",
  },
  {
    id: "zarcash",
    symbol: "zarh",
    name: "Zarhexcash",
  },
  {
    id: "zarp-stablecoin",
    symbol: "zarp",
    name: "ZARP Stablecoin",
  },
  {
    id: "zasset-zusd",
    symbol: "zusd",
    name: "Zasset zUSD",
  },
  {
    id: "zatcoin-2",
    symbol: "zpro",
    name: "ZAT Project",
  },
  {
    id: "zb-token",
    symbol: "zb",
    name: "ZB",
  },
  {
    id: "zcash",
    symbol: "zec",
    name: "Zcash",
  },
  {
    id: "zclassic",
    symbol: "zcl",
    name: "Zclassic",
  },
  {
    id: "zcoin",
    symbol: "firo",
    name: "Firo",
  },
  {
    id: "zcore",
    symbol: "zcr",
    name: "ZCore",
  },
  {
    id: "zcore-finance",
    symbol: "zefi",
    name: "ZCore Finance",
  },
  {
    id: "zebec-protocol",
    symbol: "zbc",
    name: "Zebec Protocol",
  },
  {
    id: "zebi",
    symbol: "zco",
    name: "Zebi",
  },
  {
    id: "zebra-dao",
    symbol: "zebra",
    name: "Zebra DAO",
  },
  {
    id: "zed-run",
    symbol: "zed",
    name: "ZED RUN",
  },
  {
    id: "zedxion",
    symbol: "zedxion",
    name: "Zedxion",
  },
  {
    id: "zedxion-usdz",
    symbol: "usdz",
    name: "Zedxion USDZ",
  },
  {
    id: "zeedex",
    symbol: "zdex",
    name: "Zeedex",
  },
  {
    id: "zeepin",
    symbol: "zpt",
    name: "Zeepin",
  },
  {
    id: "zeitcoin",
    symbol: "zeit",
    name: "Zeitcoin",
  },
  {
    id: "zeitgeist",
    symbol: "ztg",
    name: "Zeitgeist",
  },
  {
    id: "zelaanft",
    symbol: "nftz",
    name: "ZelaaNFT [OLD]",
  },
  {
    id: "zelaanft-2",
    symbol: "nftz",
    name: "ZelaaNFT",
  },
  {
    id: "zelaapayae",
    symbol: "zpae",
    name: "ZelaaPayAE",
  },
  {
    id: "zelcash",
    symbol: "flux",
    name: "Flux",
  },
  {
    id: "zelda-inu",
    symbol: "zlda",
    name: "Zelda Inu",
  },
  {
    id: "zeloop-eco-reward",
    symbol: "erw",
    name: "ZeLoop Eco Reward",
  },
  {
    id: "zelwin",
    symbol: "zlw",
    name: "Zelwin",
  },
  {
    id: "zenad",
    symbol: "znd",
    name: "Zenad",
  },
  {
    id: "zencash",
    symbol: "zen",
    name: "Horizen",
  },
  {
    id: "zenc-coin",
    symbol: "zenc",
    name: "Zenc Coin",
  },
  {
    id: "zenfuse",
    symbol: "zefu",
    name: "Zenfuse",
  },
  {
    id: "zenith-chain",
    symbol: "zenith",
    name: "Zenith Chain",
  },
  {
    id: "zenith-finance",
    symbol: "znt",
    name: "Zenith Finance",
  },
  {
    id: "zenlink-network-token",
    symbol: "zlk",
    name: "Zenlink Network",
  },
  {
    id: "zennies",
    symbol: "zeni",
    name: "Zennies",
  },
  {
    id: "zenon",
    symbol: "znn",
    name: "Zenon",
  },
  {
    id: "zensports",
    symbol: "sports",
    name: "ZenSports",
  },
  {
    id: "zenswap-network-token",
    symbol: "znt",
    name: "Zenswap Network ZNT",
  },
  {
    id: "zent-cash",
    symbol: "ztc",
    name: "Zent Cash",
  },
  {
    id: "zenzo",
    symbol: "znz",
    name: "ZENZO",
  },
  {
    id: "zeon",
    symbol: "zeon",
    name: "ZEON Network",
  },
  {
    id: "zeos",
    symbol: "zeos",
    name: "ZEOS",
  },
  {
    id: "zeptagram",
    symbol: "zptc",
    name: "Zeptacoin",
  },
  {
    id: "zer0zer0",
    symbol: "00",
    name: "00 Token",
  },
  {
    id: "zero",
    symbol: "zer",
    name: "Zero",
  },
  {
    id: "zero-exchange",
    symbol: "zero",
    name: "0.exchange",
  },
  {
    id: "zerogoki",
    symbol: "rei",
    name: "Zerogoki",
  },
  {
    id: "zerohybrid",
    symbol: "zht",
    name: "ZeroHybrid Network",
  },
  {
    id: "zeronauts",
    symbol: "zns",
    name: "Zeronauts",
  },
  {
    id: "zeroswap",
    symbol: "zee",
    name: "ZeroSwap",
  },
  {
    id: "zero-tech",
    symbol: "zero",
    name: "Zero Tech",
  },
  {
    id: "zero-utility-token",
    symbol: "zut",
    name: "Zero Utility",
  },
  {
    id: "zerox",
    symbol: "zerox",
    name: "ZeroX",
  },
  {
    id: "zerozed",
    symbol: "x0z",
    name: "Zerozed",
  },
  {
    id: "zest-synthetic-protocol",
    symbol: "zsp",
    name: "Zest Synthetic Protocol",
  },
  {
    id: "zetachain",
    symbol: "zeta",
    name: "ZetaChain",
  },
  {
    id: "zetacoin",
    symbol: "zet",
    name: "Zetacoin",
  },
  {
    id: "zeto",
    symbol: "ztc",
    name: "ZeTo",
  },
  {
    id: "zetrix",
    symbol: "ztx",
    name: "Zetrix",
  },
  {
    id: "zeus10000",
    symbol: "zeus10000",
    name: "ZEUS10000",
  },
  {
    id: "zeus-finance",
    symbol: "zeus",
    name: "Zeus Finance",
  },
  {
    id: "zeusshield",
    symbol: "zsc",
    name: "Zeusshield",
  },
  {
    id: "zeuxcoin",
    symbol: "zuc",
    name: "ZeuxCoin",
  },
  {
    id: "zfarm",
    symbol: "zfarm",
    name: "ZFarm",
  },
  {
    id: "zfmcoin",
    symbol: "zfm",
    name: "ZFMCOIN",
  },
  {
    id: "zhc-zero-hour-cash",
    symbol: "zhc",
    name: "ZHC : Zero Hour Cash",
  },
  {
    id: "zibu",
    symbol: "zibu",
    name: "Zibu",
  },
  {
    id: "zignaly",
    symbol: "zig",
    name: "Zignaly",
  },
  {
    id: "zigzag-2",
    symbol: "zz",
    name: "ZigZag",
  },
  {
    id: "zik-token",
    symbol: "zik",
    name: "Ziktalk",
  },
  {
    id: "zilchess",
    symbol: "zch",
    name: "ZilChess",
  },
  {
    id: "zillion-aakar-xo",
    symbol: "zillionxo",
    name: "Zillion Aakar XO",
  },
  {
    id: "zillioncoin",
    symbol: "zln",
    name: "ZillionCoin",
  },
  {
    id: "zilliqa",
    symbol: "zil",
    name: "Zilliqa",
  },
  {
    id: "zilpay-wallet",
    symbol: "zlp",
    name: "ZilPay Wallet",
  },
  {
    id: "zilstream",
    symbol: "stream",
    name: "ZilStream",
  },
  {
    id: "zilswap",
    symbol: "zwap",
    name: "ZilSwap",
  },
  {
    id: "zilwall",
    symbol: "zwall",
    name: "ZilWall",
  },
  {
    id: "zilwall-paint",
    symbol: "zpaint",
    name: "ZilWall Paint",
  },
  {
    id: "zimbocash",
    symbol: "zash",
    name: "ZIMBOCASH",
  },
  {
    id: "zin",
    symbol: "zin",
    name: "Zin",
  },
  {
    id: "zinari",
    symbol: "zina",
    name: "ZINARI",
  },
  {
    id: "zinja",
    symbol: "z",
    name: "Zinja",
  },
  {
    id: "ziobitx",
    symbol: "zbtx",
    name: "ZiobitX",
  },
  {
    id: "zion",
    symbol: "zion",
    name: "Zion",
  },
  {
    id: "ziontopia",
    symbol: "zion",
    name: "ZionTopia",
  },
  {
    id: "ziot",
    symbol: "ziot",
    name: "Ziot",
  },
  {
    id: "zip",
    symbol: "zip",
    name: "Zipper Network",
  },
  {
    id: "zipmex-token",
    symbol: "zmt",
    name: "Zipmex",
  },
  {
    id: "zippie",
    symbol: "zipt",
    name: "Zippie",
  },
  {
    id: "zipswap",
    symbol: "zip",
    name: "ZipSwap",
  },
  {
    id: "zircon-gamma-token",
    symbol: "zrg",
    name: "Zircon Gamma Token",
  },
  {
    id: "zirve-coin",
    symbol: "zirve",
    name: "Zirve Coin",
  },
  {
    id: "ziticoin",
    symbol: "ziti",
    name: "Ziticoin",
  },
  {
    id: "zjoe",
    symbol: "zjoe",
    name: "zJOE",
  },
  {
    id: "zkasino",
    symbol: "zkas",
    name: "ZKasino",
  },
  {
    id: "zklend",
    symbol: "zend",
    name: "zkLend",
  },
  {
    id: "zknftex",
    symbol: "$zkn",
    name: "zkNFTex",
  },
  {
    id: "zkspace",
    symbol: "zks",
    name: "ZKSpace",
  },
  {
    id: "zlot",
    symbol: "zlot",
    name: "zLOT",
  },
  {
    id: "zmine",
    symbol: "zmn",
    name: "ZMINE",
  },
  {
    id: "zodiacs",
    symbol: "zdc",
    name: "Zodiacs",
  },
  {
    id: "zodiacsv2",
    symbol: "zdcv2",
    name: "ZodiacsV2",
  },
  {
    id: "zodium",
    symbol: "zodi",
    name: "Zodium",
  },
  {
    id: "zogi",
    symbol: "zogi",
    name: "ZOGI",
  },
  {
    id: "zoid-pay",
    symbol: "zpay",
    name: "ZoidPay",
  },
  {
    id: "zombie-inu",
    symbol: "zinu",
    name: "Zombie Inu (OLD)",
  },
  {
    id: "zombie-inu-2",
    symbol: "zinu",
    name: "Zombie Inu",
  },
  {
    id: "zombie-runner",
    symbol: "zombie",
    name: "Zombie Runner",
  },
  {
    id: "zombie-skrat",
    symbol: "zskrat",
    name: "ZOMBIE SKRAT",
  },
  {
    id: "zombie-world-z",
    symbol: "zwz",
    name: "Zombie World Z",
  },
  {
    id: "zomfi",
    symbol: "zomfi",
    name: "Zomfi",
  },
  {
    id: "zomi",
    symbol: "zomi",
    name: "ZOMI",
  },
  {
    id: "zone",
    symbol: "zone",
    name: "Zone",
  },
  {
    id: "zonecoin",
    symbol: "zne",
    name: "Zonecoin",
  },
  {
    id: "zone-of-avoidance",
    symbol: "zoa",
    name: "Zone of Avoidance",
  },
  {
    id: "zoo-coin",
    symbol: "zoo",
    name: "ZooCoin",
  },
  {
    id: "zoo-crypto-world",
    symbol: "zoo",
    name: "ZOO Crypto World",
  },
  {
    id: "zoodao",
    symbol: "zoo",
    name: "ZooDAO",
  },
  {
    id: "zookeeper",
    symbol: "zoo",
    name: "ZooKeeper",
  },
  {
    id: "zoo-labs",
    symbol: "zoo",
    name: "Zoo Labs",
  },
  {
    id: "zoomswap",
    symbol: "zm",
    name: "ZoomSwap",
  },
  {
    id: "zoopad",
    symbol: "zoopad",
    name: "ZOOPAD",
  },
  {
    id: "zooshi",
    symbol: "zooshi",
    name: "Zooshi",
  },
  {
    id: "zoo-token",
    symbol: "zoot",
    name: "Zoo",
  },
  {
    id: "zoracles",
    symbol: "zora",
    name: "Zoracles",
  },
  {
    id: "zoro-inu",
    symbol: "zoro",
    name: "Zoro Inu",
  },
  {
    id: "zrcoin",
    symbol: "zrc",
    name: "ZrCoin",
  },
  {
    id: "zro",
    symbol: "zro",
    name: "Carb0n.fi",
  },
  {
    id: "zudgezury",
    symbol: "zzc",
    name: "ZudgeZury",
  },
  {
    id: "zufinance",
    symbol: "zuf",
    name: "ZuFinance",
  },
  {
    id: "zuki-moba",
    symbol: "zuki",
    name: "Zuki Moba",
  },
  {
    id: "zum-token",
    symbol: "zum",
    name: "ZUM",
  },
  {
    id: "zuna",
    symbol: "zuna",
    name: "Zuna",
  },
  {
    id: "zunami-protocol",
    symbol: "uzd",
    name: "Zunami USD",
  },
  {
    id: "zupi-coin",
    symbol: "zupi",
    name: "Zupi Coin",
  },
  {
    id: "zuplo",
    symbol: "zlp",
    name: "Zuplo",
  },
  {
    id: "zurrency",
    symbol: "zurr",
    name: "ZURRENCY",
  },
  {
    id: "zusd",
    symbol: "zusd",
    name: "ZUSD",
  },
  {
    id: "zuz-protocol",
    symbol: "zuz",
    name: "ZUZ Protocol",
  },
  {
    id: "z-versus-project",
    symbol: "zversus",
    name: "Z Versus Project",
  },
  {
    id: "zynecoin",
    symbol: "zyn",
    name: "Zynecoin",
  },
  {
    id: "zyro",
    symbol: "zyro",
    name: "Zyro",
  },
  {
    id: "zyrri",
    symbol: "zyr",
    name: "Zyrri",
  },
  {
    id: "zyx",
    symbol: "zyx",
    name: "ZYX",
  },
];

const Coin = require("./src/model/coin.model");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function createCoin() {
  try {
    // const coin = new Coin({
    //   ...req.body,
    //   _id: req.body.id,
    // });

    // await coin.save();

    for (var k in coinList) {
      var obj = JSON.parse(k);
      k = {
        ...k,
        imageUrl: "/coins/img/" + k.symbol + ".png",
      };
      console.log(k, coinList[k]);
    }
  } catch (error) {
    console.log({ error });
  }
}

createCoin();
