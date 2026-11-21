(function(){
if(document.getElementById('decksty'))return;
try{if(window.frameElement&&window.frameElement.id==='hfr')return}catch(e){}
var TH=[
['classic','Classic',null],
['midnight','Midnight',{f:'linear-gradient(#26324a,#161d2e)',i:'#e8eefc',r:'#ff7a90',b:'#3b4a6b',k:'repeating-linear-gradient(45deg,#3b2a78 0 .055em,#5a44b0 .055em .11em)',kb:'#c9c2ff'}],
['parchment','Parchment',{f:'linear-gradient(#f7e9c8,#ead3a2)',i:'#3a2410',r:'#a3221a',b:'#b8975a',k:'repeating-linear-gradient(45deg,#6b4423 0 .055em,#8a5d33 .055em .11em)',kb:'#f2dfb4'}],
['neon','Neon',{f:'linear-gradient(#10101c,#05050b)',i:'#5de6ff',r:'#ff3fa4',b:'#7a3bff',k:'repeating-linear-gradient(45deg,#ff2fa0 0 .055em,#14d3ff .055em .11em)',kb:'#0b0b14'}],
['forest','Forest',{f:'linear-gradient(#eef7e6,#d8ebcb)',i:'#123d22',r:'#b3321f',b:'#8fb37c',k:'repeating-radial-gradient(circle at 50% 50%,#0f4a2a 0 .05em,#1d7a44 .05em .11em)',kb:'#e9f7df'}],
['ocean','Ocean',{f:'linear-gradient(#eaf8fd,#cfeaf6)',i:'#0c3556',r:'#d6455a',b:'#7cb7d6',k:'repeating-radial-gradient(circle at 50% 120%,#0b5d8a 0 .06em,#1b8fc2 .06em .12em)',kb:'#e6f6ff'}],
['sunset','Sunset',{f:'linear-gradient(#fff0e0,#ffcfb8)',i:'#4a1d2c',r:'#d3382c',b:'#e29a7a',k:'repeating-linear-gradient(160deg,#ff7a3d 0 .07em,#8a2f8f .07em .14em)',kb:'#ffe9d6'}],
['ink','Ink & Paper',{f:'linear-gradient(#f4f4ef,#e6e6df)',i:'#111',r:'#111',b:'#888',k:'repeating-linear-gradient(0deg,#111 0 .04em,#444 .04em .08em)',kb:'#f4f4ef'}],
['royal','Royal',{f:'linear-gradient(#fff7da,#f3e2a6)',i:'#2a1a05',r:'#9b1b30',b:'#c9a227',k:'repeating-linear-gradient(45deg,#3a1d7a 0 .06em,#c9a227 .06em .075em,#3a1d7a .075em .135em)',kb:'#f3e2a6'}],
['candy','Candy',{f:'linear-gradient(#fff2f9,#ffdcee)',i:'#5b2a86',r:'#e6359a',b:'#f3a6d0',k:'repeating-linear-gradient(45deg,#ff7ac0 0 .055em,#fff .055em .11em)',kb:'#fff'}],
['retro','Retro Diner',{f:'linear-gradient(#fff6d8,#ffe9ae)',i:'#0f5d63',r:'#e2452f',b:'#7cc7c2',k:'conic-gradient(#0f8f93 25%,#fff3c4 0 50%,#0f8f93 0 75%,#fff3c4 0) 0 0/.16em .16em',kb:'#fff3c4'}],
['aurora','Aurora',{f:'linear-gradient(#eafff7,#c9f2e4)',i:'#0b3a3a',r:'#c2335e',b:'#6fc7b0',k:'repeating-linear-gradient(45deg,#0b6e6a 0 .055em,#5be3b4 .055em .11em)',kb:'#5be3b4'}],
['ember','Ember',{f:'linear-gradient(#2a1612,#180a08)',i:'#ffd9b0',r:'#ff6a3a',b:'#7a2f1c',k:'repeating-linear-gradient(45deg,#b3270c 0 .055em,#ff8a1f .055em .11em)',kb:'#ff8a1f'}],
['glacier','Glacier',{f:'linear-gradient(#f4fbff,#dcefff)',i:'#12304d',r:'#d0435b',b:'#9cc4e4',k:'conic-gradient(#3b82c4 25%,#cfeaff 0 50%,#3b82c4 0 75%,#cfeaff 0) 0 0/.16em .16em',kb:'#cfeaff'}],
['sakura','Sakura',{f:'linear-gradient(#fff5f8,#ffdfe9)',i:'#4a1d36',r:'#e0457a',b:'#f0a8c2',k:'radial-gradient(circle,#ffffff .03em,transparent .035em) 0 0/.12em .12em,#f06fa0',kb:'#ffffff'}],
['jade','Jade',{f:'linear-gradient(#effaf0,#cfeed5)',i:'#0d3b24',r:'#b8322a',b:'#7fbf92',k:'repeating-radial-gradient(circle at 50% 50%,#0d6b43 0 .05em,#4fd08a .05em .11em)',kb:'#4fd08a'}],
['gilded','Gilded',{f:'linear-gradient(#fff9e0,#f4dc87)',i:'#3a2a00',r:'#a3151f',b:'#c9a227',k:'repeating-linear-gradient(45deg,#5a3d00 0 .055em,#f2c94c .055em .11em)',kb:'#f2c94c'}],
['slate','Slate',{f:'linear-gradient(#eceff3,#cfd6df)',i:'#1c2530',r:'#c23b4e',b:'#8794a6',k:'repeating-linear-gradient(0deg,#2f3a49 0 .05em,#5d6b80 .05em .1em)',kb:'#5d6b80'}],
['lava','Lava Lamp',{f:'linear-gradient(#fff1e6,#ffc9a8)',i:'#3a1020',r:'#d81f4a',b:'#ff8a5c',k:'repeating-linear-gradient(135deg,#ff4d2e 0 .04em,#7a1fa8 .04em .08em,#ff4d2e .08em .12em)',kb:'#7a1fa8'}],
['mint','Mint Chip',{f:'linear-gradient(#f2fff8,#d3f8e5)',i:'#2a1f14',r:'#c24a35',b:'#8fd9b3',k:'radial-gradient(circle,#9be8c4 .03em,transparent .035em) 0 0/.12em .12em,#5a3a26',kb:'#9be8c4'}],
['grape','Grape Soda',{f:'linear-gradient(#f7f0ff,#e1d0ff)',i:'#2a1050',r:'#d12a7a',b:'#a98be0',k:'repeating-linear-gradient(45deg,#5a2aa8 0 .055em,#b98cff .055em .11em)',kb:'#b98cff'}],
['lemon','Lemonade',{f:'linear-gradient(#fffde6,#fff3a6)',i:'#3a3000',r:'#e0502a',b:'#e6cf4a',k:'repeating-linear-gradient(0deg,#f2d21f 0 .05em,#fff7b0 .05em .1em)',kb:'#fff7b0'}],
['coral','Coral Reef',{f:'linear-gradient(#fff3ef,#ffd6cc)',i:'#0e3a4a',r:'#e8493f',b:'#ff9d8a',k:'repeating-linear-gradient(135deg,#ff6a5c 0 .04em,#17b3b8 .04em .08em,#ff6a5c .08em .12em)',kb:'#17b3b8'}],
['dune','Desert Dune',{f:'linear-gradient(#fbf0dc,#efd5a8)',i:'#4a2a10',r:'#b5381f',b:'#d4a96a',k:'repeating-linear-gradient(45deg,#c9783a 0 .055em,#f3cf8a .055em .11em)',kb:'#f3cf8a'}],
['arctic','Arctic Night',{f:'linear-gradient(#0f1a2e,#0a1220)',i:'#bfe6ff',r:'#ff7aa8',b:'#2c4a78',k:'repeating-linear-gradient(45deg,#123a6e 0 .055em,#6fd0ff .055em .11em)',kb:'#6fd0ff'}],
['bubble','Bubblegum',{f:'linear-gradient(#fff0fa,#ffd1ee)',i:'#4a1040',r:'#ff2e93',b:'#ff9ad0',k:'radial-gradient(circle,#7ad7ff .03em,transparent .035em) 0 0/.12em .12em,#ff67b5',kb:'#7ad7ff'}],
['pine','Pine Cabin',{f:'linear-gradient(#f1f5e8,#d9e3c4)',i:'#1f2e12',r:'#a63a22',b:'#8ea46a',k:'conic-gradient(#2e4a1f 25%,#6d8f45 0 50%,#2e4a1f 0 75%,#6d8f45 0) 0 0/.16em .16em',kb:'#6d8f45'}],
['copper','Copper Kettle',{f:'linear-gradient(#fff2e6,#f0c9a0)',i:'#3a1c0a',r:'#a8321a',b:'#c9803f',k:'repeating-radial-gradient(circle at 50% 50%,#8a4a22 0 .05em,#e8a368 .05em .11em)',kb:'#e8a368'}],
['steel','Steel Blue',{f:'linear-gradient(#eef4fa,#d3e1f0)',i:'#0e2a47',r:'#cc3a4a',b:'#7da3c9',k:'repeating-linear-gradient(0deg,#1f4f85 0 .05em,#7ab0e8 .05em .1em)',kb:'#7ab0e8'}],
['plum','Plum Wine',{f:'linear-gradient(#fbeff5,#ecc9db)',i:'#3a0f2a',r:'#b5173f',b:'#c47ba0',k:'repeating-linear-gradient(45deg,#6a1f4a 0 .055em,#c76a9c .055em .11em)',kb:'#c76a9c'}],
['sand','Sandcastle',{f:'linear-gradient(#fffaf0,#f1e1bd)',i:'#3d2d12',r:'#c4452b',b:'#d9bf86',k:'conic-gradient(#d9b86a 25%,#fff1c4 0 50%,#d9b86a 0 75%,#fff1c4 0) 0 0/.16em .16em',kb:'#fff1c4'}],
['storm','Storm Cloud',{f:'linear-gradient(#e9edf2,#c5cdd8)',i:'#1a2230',r:'#d0455c',b:'#8a96a8',k:'repeating-linear-gradient(135deg,#3d4757 0 .04em,#9aa6b8 .04em .08em,#3d4757 .08em .12em)',kb:'#9aa6b8'}],
['rose','Rose Garden',{f:'linear-gradient(#fff3f3,#ffd0d4)',i:'#4a0f1a',r:'#d4203d',b:'#f09aa6',k:'repeating-radial-gradient(circle at 50% 50%,#b3203e 0 .05em,#ff8a9c .05em .11em)',kb:'#ff8a9c'}],
['cobalt','Cobalt',{f:'linear-gradient(#eef2ff,#cfd9ff)',i:'#0c1a5c',r:'#e03a5a',b:'#7a93ee',k:'repeating-linear-gradient(45deg,#1a3ccc 0 .055em,#7a9cff .055em .11em)',kb:'#7a9cff'}],
['amber','Amber Glow',{f:'linear-gradient(#fff8e0,#ffe08a)',i:'#402800',r:'#d0381a',b:'#f0b429',k:'repeating-radial-gradient(circle at 50% 50%,#e68a00 0 .05em,#ffd36b .05em .11em)',kb:'#ffd36b'}],
['matcha','Matcha',{f:'linear-gradient(#f3f8e8,#dde9bf)',i:'#243214',r:'#bb3a2c',b:'#a4bc6c',k:'radial-gradient(circle,#c4de7c .03em,transparent .035em) 0 0/.12em .12em,#6a8a2e',kb:'#c4de7c'}],
['noir','Noir',{f:'linear-gradient(#1a1a1a,#0c0c0c)',i:'#f2f2f2',r:'#ff4a5c',b:'#444444',k:'repeating-linear-gradient(45deg,#111111 0 .055em,#ff2f4a .055em .11em)',kb:'#ff2f4a'}],
['pearl','Pearl',{f:'linear-gradient(#fffefb,#efe9f3)',i:'#2c2a38',r:'#c64a6a',b:'#cfc7da',k:'radial-gradient(circle,#ffffff .03em,transparent .035em) 0 0/.12em .12em,#cfc7e6',kb:'#ffffff'}],
['volcano','Volcano',{f:'linear-gradient(#2b1511,#1a0b09)',i:'#ffd2b8',r:'#ff5a2a',b:'#6a2a1a',k:'repeating-linear-gradient(135deg,#330c06 0 .04em,#ff4a0f .04em .08em,#330c06 .08em .12em)',kb:'#ff4a0f'}],
['meadow','Meadow',{f:'linear-gradient(#f6fde9,#e0f2b8)',i:'#1c3a10',r:'#d1402a',b:'#a8cf62',k:'repeating-linear-gradient(0deg,#3f8a2a 0 .05em,#a8e060 .05em .1em)',kb:'#a8e060'}],
['twilight','Twilight',{f:'linear-gradient(#eef0ff,#d3d6f7)',i:'#1a1a4a',r:'#d24a8a',b:'#8c90d9',k:'repeating-linear-gradient(135deg,#3a2f8a 0 .04em,#ff8ab8 .04em .08em,#3a2f8a .08em .12em)',kb:'#ff8ab8'}],
['teal','Teal Deal',{f:'linear-gradient(#effcfb,#cff3ef)',i:'#073a3a',r:'#c93a52',b:'#6cc9c2',k:'repeating-linear-gradient(45deg,#0a8a8a 0 .055em,#5ae0d6 .055em .11em)',kb:'#5ae0d6'}],
['cinnamon','Cinnamon Roll',{f:'linear-gradient(#fff4ea,#f0d2b6)',i:'#3a1f10',r:'#b5402a',b:'#d1a07a',k:'repeating-radial-gradient(circle at 50% 50%,#8a4a2a 0 .05em,#f0cfa8 .05em .11em)',kb:'#f0cfa8'}],
['sapphire','Sapphire',{f:'linear-gradient(#eaf3ff,#c4dcff)',i:'#0a2250',r:'#d93a6a',b:'#6fa0e8',k:'conic-gradient(#0f3a9a 25%,#4fa3ff 0 50%,#0f3a9a 0 75%,#4fa3ff 0) 0 0/.16em .16em',kb:'#4fa3ff'}],
['ruby','Ruby',{f:'linear-gradient(#fff0f2,#ffc9d1)',i:'#4a0a14',r:'#c2102f',b:'#ea7488',k:'repeating-linear-gradient(45deg,#9a0f2a 0 .055em,#ff5a78 .055em .11em)',kb:'#ff5a78'}],
['emerald','Emerald',{f:'linear-gradient(#ecfff4,#c4f5d9)',i:'#063a1f',r:'#c23a3a',b:'#5fcf8e',k:'repeating-linear-gradient(45deg,#0a7a45 0 .055em,#3be08a .055em .11em)',kb:'#3be08a'}],
['onyx','Onyx & Gold',{f:'linear-gradient(#16161a,#0a0a0d)',i:'#f2d27a',r:'#ff6a5a',b:'#8a6e22',k:'conic-gradient(#0a0a0d 25%,#c9a227 0 50%,#0a0a0d 0 75%,#c9a227 0) 0 0/.16em .16em',kb:'#c9a227'}],
['ivory','Ivory Tower',{f:'linear-gradient(#fffdf6,#f3ecd8)',i:'#2a2418',r:'#b8402a',b:'#d9cfae',k:'repeating-linear-gradient(0deg,#a8975a 0 .05em,#f3ecd8 .05em .1em)',kb:'#f3ecd8'}],
['peach','Peaches & Cream',{f:'linear-gradient(#fff6ee,#ffe0cc)',i:'#4a2418',r:'#e24a4a',b:'#ffb890',k:'radial-gradient(circle,#ffe9d6 .03em,transparent .035em) 0 0/.12em .12em,#ff9e6a',kb:'#ffe9d6'}],
['lavender','Lavender Field',{f:'linear-gradient(#f8f3ff,#e6d8fb)',i:'#2e1f55',r:'#c2447f',b:'#b79ae6',k:'repeating-linear-gradient(0deg,#8a6ad0 0 .05em,#e6d8fb .05em .1em)',kb:'#e6d8fb'}],
['mocha','Mocha',{f:'linear-gradient(#f7ede4,#e0c9b4)',i:'#2e1b10',r:'#a8402a',b:'#b8977a',k:'repeating-linear-gradient(45deg,#4a2c1a 0 .055em,#a8795a .055em .11em)',kb:'#a8795a'}],
['deepsea','Deep Sea',{f:'linear-gradient(#0e2a40,#081a2a)',i:'#b8f0ff',r:'#ff8a6a',b:'#1f5a82',k:'repeating-radial-gradient(circle at 50% 50%,#06304d 0 .05em,#27c4e8 .05em .11em)',kb:'#27c4e8'}],
['tango','Tango',{f:'linear-gradient(#fff2e8,#ffcfb0)',i:'#3a0f10',r:'#e8261f',b:'#ff9a5c',k:'repeating-linear-gradient(135deg,#e8261f 0 .04em,#ffb020 .04em .08em,#e8261f .08em .12em)',kb:'#ffb020'}],
['mono','Monochrome',{f:'linear-gradient(#fafafa,#e4e4e4)',i:'#111111',r:'#111111',b:'#999999',k:'conic-gradient(#222222 25%,#777777 0 50%,#222222 0 75%,#777777 0) 0 0/.16em .16em',kb:'#777777'}],
['cyber','Cyberpunk',{f:'linear-gradient(#0d0d1f,#06060f)',i:'#ffe14a',r:'#ff2fb0',b:'#3a1f8a',k:'repeating-linear-gradient(135deg,#130a3a 0 .04em,#00f0d8 .04em .08em,#130a3a .08em .12em)',kb:'#00f0d8'}],
['vintage','Vintage Rose',{f:'linear-gradient(#f8ecd8,#e8d2ae)',i:'#3a2418',r:'#a82a3a',b:'#c9a678',k:'repeating-radial-gradient(circle at 50% 50%,#7a2a3a 0 .05em,#e2b66a .05em .11em)',kb:'#e2b66a'}],
['spring','Spring Bloom',{f:'linear-gradient(#fffaf0,#fde7f0)',i:'#2c3a1a',r:'#e0457a',b:'#c9e08a',k:'radial-gradient(circle,#ffb0d0 .03em,transparent .035em) 0 0/.12em .12em,#8ccf5a',kb:'#ffb0d0'}],
['autumn','Autumn Leaves',{f:'linear-gradient(#fff4e0,#f4cfa0)',i:'#3a1a08',r:'#c2321a',b:'#d99a52',k:'repeating-linear-gradient(135deg,#b8451a 0 .04em,#f0a82a .04em .08em,#b8451a .08em .12em)',kb:'#f0a82a'}],
['galaxy','Galaxy',{f:'linear-gradient(#10122e,#080a1c)',i:'#d6dcff',r:'#ff7ac8',b:'#3a3f8a',k:'radial-gradient(circle,#a66bff .03em,transparent .035em) 0 0/.12em .12em,#1a1a5a',kb:'#a66bff'}],
['tropic','Tropical',{f:'linear-gradient(#fffbe8,#fff0a6)',i:'#0a3a2a',r:'#e8402a',b:'#3ed0a0',k:'repeating-linear-gradient(135deg,#14b88a 0 .04em,#ffdd3a .04em .08em,#14b88a .08em .12em)',kb:'#ffdd3a'}],
['carnival','Carnival',{f:'linear-gradient(#fff6e6,#ffe0a8)',i:'#2a0f3a',r:'#e0202a',b:'#ffb02a',k:'repeating-linear-gradient(0deg,#e0202a 0 .05em,#ffd02a .05em .1em)',kb:'#ffd02a'}]
];
var BGS=[["classic", "Classic Felt", "#1f6b3f", "#0a3320"], ["midnight", "Midnight Table", "#1a2748", "#0a1020"], ["parchment", "Parchment Table", "#c9a566", "#6b4a22"], ["neon", "Neon Table", "#1a0a3a", "#04030c"], ["forest", "Forest Table", "#1d6b3a", "#08301a"], ["ocean", "Ocean Table", "#1b6f9a", "#082a44"], ["sunset", "Sunset Table", "#ff7a4d", "#4a1a5a"], ["ink", "Ink Table", "#9a9a94", "#2a2a28"], ["royal", "Royal Table", "#4a1d8a", "#1a0a3a"], ["candy", "Candy Table", "#ff9ad0", "#a64aa8"], ["retro", "Retro Table", "#2aa7a2", "#0f4a4a"], ["aurora", "Aurora Table", "#0b3b4a", "#07202b"], ["ember", "Ember Table", "#4a1208", "#1b0603"], ["glacier", "Glacier Table", "#9fd0ee", "#3e7fb0"], ["sakura", "Sakura Table", "#ffc2d6", "#e0709a"], ["jade", "Jade Table", "#0f5a3a", "#062a1b"], ["gilded", "Gilded Table", "#5c4310", "#1f1604"], ["slate", "Slate Table", "#3a4656", "#151b24"], ["lava", "Lava Lamp Table", "#7a1fa8", "#2a0838"], ["mint", "Mint Chip Table", "#8fe0b8", "#3a9a74"], ["grape", "Grape Soda Table", "#4a1f8a", "#1c0b3a"], ["lemon", "Lemonade Table", "#ffe66b", "#e0b414"], ["coral", "Coral Reef Table", "#19a3b0", "#0a4c5c"], ["dune", "Desert Dune Table", "#d6a35c", "#8a5a22"], ["arctic", "Arctic Night Table", "#0c2145", "#040a18"], ["bubble", "Bubblegum Table", "#ff9ad0", "#d03c92"], ["pine", "Pine Cabin Table", "#2c4a22", "#0f1c0b"], ["copper", "Copper Kettle Table", "#8a4a22", "#2e1608"], ["steel", "Steel Blue Table", "#1f4f85", "#0a2240"], ["plum", "Plum Wine Table", "#5a1a42", "#20081a"], ["sand", "Sandcastle Table", "#e8d29a", "#b8955a"], ["storm", "Storm Cloud Table", "#4a5568", "#1a202c"], ["rose", "Rose Garden Table", "#8a1530", "#2a0610"], ["cobalt", "Cobalt Table", "#152a9a", "#060d3a"], ["amber", "Amber Glow Table", "#c27800", "#4a2c00"], ["matcha", "Matcha Table", "#7ea23a", "#324a14"], ["noir", "Noir Table", "#1c1c1c", "#000000"], ["pearl", "Pearl Table", "#d9d2e8", "#9a90b8"], ["volcano", "Volcano Table", "#5a1608", "#140503"], ["meadow", "Meadow Table", "#5fae3a", "#1f5a14"], ["twilight", "Twilight Table", "#3a2f8a", "#120e3a"], ["teal", "Teal Deal Table", "#0a6a6e", "#03282c"], ["cinnamon", "Cinnamon Roll Table", "#a8643a", "#4a2410"], ["sapphire", "Sapphire Table", "#0a2a7a", "#030f33"], ["ruby", "Ruby Table", "#7a0a22", "#26030b"], ["emerald", "Emerald Table", "#07603a", "#021f12"], ["onyx", "Onyx & Gold Table", "#101014", "#000000"], ["ivory", "Ivory Tower Table", "#e6dcc0", "#a89a70"], ["peach", "Peaches & Cream Table", "#ffc8a0", "#e0805a"], ["lavender", "Lavender Field Table", "#a88ae0", "#5a3a9a"], ["mocha", "Mocha Table", "#5a3a26", "#1f120a"], ["deepsea", "Deep Sea Table", "#06304d", "#010a14"], ["tango", "Tango Table", "#d8401a", "#5a0f08"], ["mono", "Monochrome Table", "#555555", "#1a1a1a"], ["cyber", "Cyberpunk Table", "#1a0a40", "#04020f"], ["vintage", "Vintage Rose Table", "#7a2a3a", "#2a0e14"], ["spring", "Spring Bloom Table", "#b8e88a", "#5aa83a"], ["autumn", "Autumn Leaves Table", "#a8451a", "#3a1608"], ["galaxy", "Galaxy Table", "#1a1a5a", "#04051a"], ["tropic", "Tropical Table", "#14b88a", "#0a5a58"], ["carnival", "Carnival Table", "#6a1fa8", "#240838"]];
var P={t:'classic',m:false,mv:1,jn:false,bg:'default',hs:false,gc:0,v6:1};
try{var q=JSON.parse(localStorage.getItem('deck.v1')||'null');if(q){P.t=q.t||P.t;P.m=(q.mv===1&&q.m===true);if(q.jn===true)P.jn=true;if(q.hs===true)P.hs=true;if(q.gc)P.gc=+q.gc||0;if(q.sx===false)P.sx=false;if(q.np===false)P.np=false;if(q.bg)P.bg=q.bg;if(q.tour)P.tour=1;if(q.v6){P.t=q.t||P.t;P.bg=q.bg||P.bg}else{P.t='classic';P.bg='default'}}}catch(e){}
if(window.__deck){P=window.__deck}else window.__deck=P;
if(P.t==='random'||P.t==='matchbg')P.t='classic';if(P.bg==='random'||P.bg==='match')P.bg='default';
function save(){window.__deck=P;try{localStorage.setItem('deck.v1',JSON.stringify(P))}catch(e){}}
function th(id){for(var i=0;i<TH.length;i++)if(TH[i][0]===id)return TH[i];return TH[0]}
function css(id){
  var t=th(id)[2];if(!t)return '';
  return '.card .face{background:'+t.f+';color:'+t.i+';border-color:'+t.b+'}.card .face.s1,.card .face.s2{color:'+t.r+'}'+
   '.card .back{background:'+t.k+';border-color:'+t.kb+'}'+
   '.pc:not(.dn){background:'+t.f+';color:'+t.i+'}.pc.rd:not(.dn){color:'+t.r+'}.pc.dn{background:'+t.k+';border-color:'+t.kb+'}'+
   '.pc.dn u{border-color:'+t.kb+'}';
}
function bgOf(id){for(var i=0;i<BGS.length;i++)if(BGS[i][0]===id)return BGS[i]}
var PATS=['','repeating-linear-gradient(45deg,rgba(255,255,255,.05) 0 14px,transparent 14px 28px),','radial-gradient(circle,rgba(255,255,255,.09) 2px,transparent 3px) 0 0/22px 22px,','repeating-radial-gradient(circle at 50% 40%,rgba(255,255,255,.05) 0 16px,transparent 16px 32px),','linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px) 0 0/26px 26px,linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px) 0 0/26px 26px,','repeating-linear-gradient(135deg,rgba(0,0,0,.09) 0 12px,transparent 12px 24px),'];
function bgVal(id){var b=bgOf(id);if(!b)return '';var n=BGS.indexOf(b);return PATS[n%PATS.length]+'radial-gradient(ellipse at 50% 30%,'+b[2]+','+b[3]+')'}
var E={t:'classic',bg:'default'};
function resolve(){
  var ids=TH.map(function(x){return x[0]}),r=function(){return ids[Math.floor(Math.random()*ids.length)]},t=P.t,bg=P.bg;
  if(t==='matchbg'&&bg==='match'){t=bg=r()}
  else if(t==='matchbg'){if(bg==='random')bg=r();t=(bg==='default')?'classic':bg}
  else if(bg==='match'){if(t==='random')t=r();bg=t}
  else{if(t==='random')t=r();if(bg==='random')bg=r()}
  E.t=t;E.bg=bg;
}
function bgCss(){
  if(!document.getElementById('menu'))return '';
  var id=E.bg;if(!id||id==='default')return '';
  var v=bgVal(id);return v?'#game{background:'+v+'!important}body{background:'+bgOf(id)[3]+'!important}':'';
}
var st=document.createElement('style');st.id='decksty';document.head.appendChild(st);
function apply(re){if(re!==false)resolve();st.textContent=css(E.t)+bgCss()}
apply();
/* ---------- picker ---------- */
var ui=document.createElement('style');
ui.textContent='#deckbtn{position:fixed;top:0;right:0;z-index:1100;height:28px;width:34px;padding:0;font-size:14px;border:0;background:rgba(0,0,0,.35);color:#fff;font:800 12px Roboto,Arial,sans-serif;letter-spacing:.06em;text-transform:uppercase;cursor:pointer}#deckbtn:active{background:rgba(0,0,0,.6)}'+
'#decksheet{position:fixed;inset:0;z-index:10050;background:rgba(5,10,20,.98);display:none;flex-direction:column;font-family:Roboto,Arial,sans-serif;color:#fff}#decksheet.on{display:flex}'+
'#decksheet h3{margin:0;padding:16px 14px 4px;font-size:22px;font-weight:900}#decksheet p{margin:0;padding:0 14px 10px;opacity:.75;font-size:13px}'+
'#dgrid{flex:1;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:6px 14px;align-content:start}'+
'.dt{border:3px solid transparent;background:rgba(255,255,255,.08);padding:10px 6px 8px;text-align:center;cursor:pointer;color:#fff;font:800 14px Roboto,Arial,sans-serif}.dt.sel{border-color:#ffc83d;background:rgba(255,200,61,.18)}'+
'.dt .pr{display:flex;justify-content:center;gap:6px;margin-bottom:6px;font-size:0}'+
'.dt .mc{width:44px;height:62px;border-radius:5px;position:relative;box-shadow:0 2px 5px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.25);font:900 18px/1 Roboto,Arial,sans-serif}.dt .mc b{position:absolute;left:5px;top:4px}.dt .mc i{position:absolute;right:4px;bottom:3px;font-style:normal;font-size:24px}'+
'#dtabs{display:flex;gap:6px;padding:4px 14px 6px}#dtabs button{flex:1;height:40px;border:0;background:rgba(255,255,255,.1);color:#fff;font:800 14px Roboto,Arial,sans-serif;cursor:pointer}#dtabs button.on{background:#ffc83d;color:#1a1200}.bgp{height:62px;margin-bottom:6px;border:1px solid rgba(255,255,255,.3);font-weight:800}#dfoot{display:flex;gap:6px;padding:10px 10px 16px}#dfoot button{font-size:12px!important;padding:0 2px!important;line-height:1.15}#dfoot button{flex:1;height:50px;border:0;background:rgba(255,255,255,.16);color:#fff;font:800 15px Roboto,Arial,sans-serif;cursor:pointer}#dfoot button.pri{background:#ffc83d;color:#1a1200}';
document.head.appendChild(ui);
var sh=document.createElement('div');sh.id='decksheet';document.body.appendChild(sh);
function plain(t){return t||{f:'linear-gradient(#fff,#f1efe6)',i:'#14171c',r:'#d4202a',b:'#b9b6aa',k:'repeating-linear-gradient(45deg,#1b4aa0 0 6px,#2c68cf 6px 12px)',kb:'#fff'}}
var TAB='cards';
function sp(id,ic,grad,name,sel,key,val){return '<button class="dt'+(sel?' sel':'')+'" data-'+key+'="'+val+'"><div class="bgp" style="background:'+grad+';display:flex;align-items:center;justify-content:center;font-size:26px">'+ic+'</div>'+name+'</button>'}
function render(){
  var h='<h3>🎴 Decks &amp; backgrounds</h3><div id="dtabs"><button data-tab="cards" class="'+(TAB==='cards'?'on':'')+'">Cards ('+TH.length+')</button><button data-tab="bg" class="'+(TAB==='bg'?'on':'')+'">Backgrounds ('+BGS.length+')</button></div>';
  h+='<p>Now showing: <b>'+th(E.t)[1]+'</b> deck on <b>'+(E.bg==='default'?'each game’s own':bgOf(E.bg)[1])+'</b> table.</p><div id="dgrid">';
  var rg='linear-gradient(135deg,#d4202a,#1b4aa0,#ffc83d,#2a9d5c)',mg='linear-gradient(135deg,#1f6b3f,#fff,#1b4aa0)';
  if(TAB==='cards'){
    TH.forEach(function(x){var t=plain(x[2]);
      h+='<button class="dt'+(P.t===x[0]?' sel':'')+'" data-t="'+x[0]+'"><div class="pr"><div class="mc" style="background:'+t.f+';color:'+t.i+';border-color:'+t.b+'"><b>A</b><i>♠</i></div><div class="mc" style="background:'+t.f+';color:'+t.r+';border-color:'+t.b+'"><b>K</b><i>♥</i></div><div class="mc" style="background:'+t.k+';border:3px solid '+t.kb+'"></div></div>'+x[1]+'</button>'});
  }else{
    h+=sp('d','▭','#333','Game default',P.bg==='default','bg','default');
    BGS.forEach(function(b){h+='<button class="dt bgd'+(P.bg===b[0]?' sel':'')+'" data-bg="'+b[0]+'"><div class="bgp" style="background:'+bgVal(b[0])+'"></div>'+b[1]+'</button>'});
  }
  h+='</div><div id="dfoot">'+(window.__cur&&window.__HOW&&window.__HOW[window.__cur]?'<button id="dtut">🎓 Ace tutorial</button>':'')+'<button id="dmasc">Mascot: '+(P.m?'On':'Off')+'</button><button id="dsfx">Sound FX: '+(P.sx===false?'Off':'On')+'</button><button id="dnp">Now Playing: '+(P.np===false?'Off':'On')+'</button><button id="djing">Jingle: '+(P.jn?'On':'Off')+'</button><button class="pri" id="dclose">Done</button></div>';
  sh.innerHTML=h;
}
sh.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;e.stopPropagation();
  if(b.dataset.tab){TAB=b.dataset.tab;render()}
  else if(b.dataset.bg){P.bg=b.dataset.bg;save();apply();render()}
  else if(b.id==='djing'){P.jn=!P.jn;save();render();if(P.jn)jingle()}
  else if(b.dataset.t){P.t=b.dataset.t;save();apply();render()}
  else if(b.id==='dsfx'){P.sx=P.sx===false;save();render();if(P.sx!==false&&window.__sfx)window.__sfx.gem(3,0)}
  else if(b.id==='dnp'){P.np=P.np===false;save();render();if(window.__npApply)window.__npApply()}
  else if(b.id==='dmasc'){P.m=!P.m;save();render()}
  else if(b.id==='dtut'){sh.classList.remove('on');setTimeout(function(){window.__howto(window.__cur)},100)}
  else if(b.id==='dclose'){sh.classList.remove('on')}
});
var btn=document.createElement('button');btn.id='deckbtn';btn.textContent='🎴';btn.setAttribute('aria-label','Decks, mascot & backgrounds');
btn.onclick=function(e){e.preventDefault();e.stopPropagation();render();sh.classList.add('on')};

/* ---------- mascot ---------- */
var mu=document.createElement('style');
mu.textContent='#ace .arr{position:absolute;font-size:30px;line-height:1;animation:arrb .5s ease-in-out infinite alternate;filter:drop-shadow(0 2px 2px rgba(0,0,0,.6))}#ace .arr.dn{transform:rotate(180deg);animation:arrbd .5s ease-in-out infinite alternate}@keyframes arrb{to{transform:translateY(-8px)}}@keyframes arrbd{from{transform:rotate(180deg) translateY(0)}to{transform:rotate(180deg) translateY(-8px)}}#ace{position:fixed;width:112px;z-index:8000;pointer-events:none;font-family:Roboto,Arial,sans-serif;opacity:0}'+
'#ace svg{width:100%;height:auto;display:block;overflow:visible}'+
'#ace.in{animation:aceIn .5s cubic-bezier(.2,1.4,.4,1) forwards}#ace.out{animation:aceOut .4s ease-in forwards}'+
'@keyframes aceIn{from{transform:scale(.1) rotate(-25deg);opacity:0}to{transform:none;opacity:1}}@keyframes aceOut{from{transform:none;opacity:1}to{transform:scale(.1) rotate(18deg);opacity:0}}'+
'#ace .bub{position:absolute;bottom:100%;margin-bottom:8px;width:max-content;max-width:210px;text-align:center;line-height:1.22;background:#fff;color:#14171c;font-weight:900;font-size:13.5px;padding:7px 11px;border:3px solid #14171c;transform:scale(0);transform-origin:var(--tx,50%) 100%;animation:bub .35s .3s cubic-bezier(.2,1.5,.4,1) forwards}'+
'#ace.below .bub{bottom:auto;top:100%;margin:8px 0 0;transform-origin:var(--tx,50%) 0}'+
'#ace .bub:after{content:"";position:absolute;left:var(--tx,50%);margin-left:-7px;bottom:-9px;width:12px;height:12px;background:#fff;border-right:3px solid #14171c;border-bottom:3px solid #14171c;transform:rotate(45deg)}'+
'#ace.below .bub:after{bottom:auto;top:-9px;border:0;border-left:3px solid #14171c;border-top:3px solid #14171c}'+
'@keyframes bub{to{transform:scale(1)}}'+
'#ace .arm{transform-box:fill-box;transform-origin:50% 0}'+
'#ace.wave .armR{animation:wave .45s ease-in-out 5 alternate}@keyframes wave{from{transform:rotate(-25deg)}to{transform:rotate(35deg)}}'+
'#ace.cheer .body{animation:hop .5s ease-out 4}@keyframes hop{0%,100%{transform:translateY(0)}45%{transform:translateY(-22px) rotate(-4deg)}}'+
'#ace.cheer .armL,#ace.cheer .armR{animation:cheer .3s ease-in-out infinite alternate}@keyframes cheer{from{transform:rotate(-30deg)}to{transform:rotate(30deg)}}'+
'#ace.sad .body{animation:sway 1.2s ease-in-out infinite alternate}@keyframes sway{from{transform:rotate(-3deg)}to{transform:rotate(3deg)}}'+
'#ace.sad .tear{animation:tear 1s ease-in infinite}@keyframes tear{0%{transform:translateY(0);opacity:1}100%{transform:translateY(16px);opacity:0}}'+
'#ace .hap,#ace .sd{display:none}#ace.sad .sd{display:inline}#ace:not(.sad) .hap{display:inline}#ace .tear{display:none}#ace.sad .tear{display:inline}'+
'#ace .sp{position:absolute;font-size:22px;opacity:0;animation:spk 1.1s ease-out infinite}'+
'@keyframes spk{0%{transform:translateY(10px) scale(.3);opacity:0}40%{opacity:1}100%{transform:translateY(-34px) scale(1.1);opacity:0}}';
document.head.appendChild(mu);
var INK='#14171c',FONT='Roboto,Arial,sans-serif';
var BODIES={
 card:'<rect x="20" y="8" width="80" height="108" rx="12" fill="#fffdf4" stroke="#14171c" stroke-width="4"/>'+
  '<text x="28" y="30" font-size="19" font-weight="900" fill="#d4202a" font-family="'+FONT+'">A</text><text x="27" y="46" font-size="14" fill="#d4202a">♥</text>'+
  '<g transform="rotate(180 60 62)"><text x="28" y="30" font-size="19" font-weight="900" fill="#d4202a" font-family="'+FONT+'">A</text><text x="27" y="46" font-size="14" fill="#d4202a">♥</text></g>'+
  '<text x="60" y="108" font-size="22" text-anchor="middle" fill="#14171c">♠</text>',
 poker:'<rect x="20" y="8" width="80" height="108" rx="12" fill="#fffdf4" stroke="#14171c" stroke-width="4"/>'+
  '<text x="28" y="100" font-size="17" font-weight="900" fill="#d4202a" font-family="'+FONT+'">A</text><text x="60" y="108" font-size="22" text-anchor="middle" fill="#14171c">♠</text><text x="92" y="100" font-size="17" text-anchor="end" fill="#d4202a">♥</text>'+
  '<path d="M16 36 Q60 14 104 36 L108 46 Q60 30 12 46Z" fill="#1f8a45" stroke="#14171c" stroke-width="3.5" stroke-linejoin="round"/><path d="M14 44 Q60 28 106 44 L104 50 Q60 36 16 50Z" fill="#0f5a2b" stroke="#14171c" stroke-width="2.5"/><text x="60" y="34" font-size="11" font-weight="900" text-anchor="middle" fill="#fff" font-family="'+FONT+'">$</text>',
 gem:'<defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9ff3ff"/><stop offset=".5" stop-color="#35b6ff"/><stop offset="1" stop-color="#6a5cff"/></linearGradient></defs>'+
  '<path d="M38 8 L82 8 L104 38 L104 82 L60 124 L16 82 L16 38Z" fill="url(#gg)" stroke="#14171c" stroke-width="4" stroke-linejoin="round"/>'+
  '<path d="M16 38 L104 38 M38 8 L48 38 L60 124 M82 8 L72 38 L60 124 M48 38 L16 82 M72 38 L104 82" stroke="#fff" stroke-opacity=".45" stroke-width="2" fill="none"/>'+
  '<path d="M30 24 L42 14" stroke="#fff" stroke-width="5" stroke-linecap="round"/>',
 tile:'<rect x="25" y="14" width="80" height="108" rx="12" fill="#1c8a55" stroke="#14171c" stroke-width="4"/><rect x="18" y="6" width="80" height="108" rx="12" fill="#fff8e6" stroke="#14171c" stroke-width="4"/>'+
  '<text x="30" y="30" font-size="18" font-weight="900" fill="#c4281f" font-family="'+FONT+'">中</text><text x="86" y="104" font-size="18" font-weight="900" text-anchor="end" fill="#1c8a55" font-family="'+FONT+'">發</text>'+
  '<g stroke="#1c8a55" stroke-width="3" stroke-linecap="round"><path d="M44 100 L44 108 M52 100 L52 108 M60 100 L60 108"/></g>',
 joy:'<circle cx="60" cy="22" r="22" fill="#e5252f" stroke="#14171c" stroke-width="4"/><ellipse cx="52" cy="14" rx="8" ry="5" fill="#fff" opacity=".6" transform="rotate(-30 52 14)"/><rect x="55" y="40" width="10" height="14" fill="#9aa3ad" stroke="#14171c" stroke-width="3"/><rect x="14" y="50" width="92" height="66" rx="14" fill="#3b4150" stroke="#14171c" stroke-width="4"/><circle cx="30" cy="106" r="7" fill="#ffd23d" stroke="#14171c" stroke-width="3"/><circle cx="90" cy="106" r="7" fill="#3da5ff" stroke="#14171c" stroke-width="3"/>',
 mag:'<path d="M92 88 L114 116" stroke="#14171c" stroke-width="15" stroke-linecap="round"/><path d="M92 88 L114 116" stroke="#b9722b" stroke-width="8" stroke-linecap="round"/>'+
  '<circle cx="58" cy="58" r="50" fill="#d9f2ff" stroke="#14171c" stroke-width="4"/><circle cx="58" cy="58" r="43" fill="none" stroke="#8fd0f5" stroke-width="3"/>'+
  '<path d="M26 38 Q34 24 48 20" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/><text x="58" y="104" font-size="15" font-weight="900" text-anchor="middle" fill="#1b5f86" font-family="'+FONT+'">ABC</text>',
 cube:'<rect x="20" y="8" width="80" height="108" rx="12" fill="#e9fbff" stroke="#14171c" stroke-width="4"/>'+
  '<g stroke="#14171c" stroke-opacity=".28" stroke-width="2"><path d="M47 14 V110 M73 14 V110 M26 44 H94 M26 80 H94"/></g>'+
  '<g stroke="#14171c" stroke-width="3.5"><path d="M20 44 H100 M20 80 H100" stroke-opacity="0"/></g>'+
  '<text x="30" y="30" font-size="17" font-weight="900" fill="#1b8fc2" font-family="'+FONT+'">7</text><text x="88" y="106" font-size="20" font-weight="900" text-anchor="end" fill="#d4202a" font-family="'+FONT+'">9</text>'
};
var VAR={xfrac:'cube',xdec:'cube',xtarget:'cube',xodd:'cube',xop:'cube',xdivis:'cube',xgcd:'cube',xfact:'cube',xspeed:'cube',xangle:'cube',xarea:'cube',xalg:'cube',xratio:'cube',xavg:'cube',xcmp:'cube',xplace:'cube',xround:'cube',xord:'cube',xneg:'cube',xpow:'cube',xsq:'cube',xdiv:'cube',xmul:'cube',xsub:'cube',xadd:'cube',mmatch:'cube',mnback:'cube',mshape:'cube',marrow:'cube',mcard:'cube',mshade:'cube',mcode:'cube',mname:'cube',mpair:'cube',mstream:'cube',mhilo:'cube',mtotal:'cube',mcount:'cube',mwhere:'cube',mpos:'cube',mshop:'cube',memoji:'cube',mchange:'cube',mmiss:'cube',mpath:'cube',mmirror:'cube',mflash:'cube',msimon:'cube',mletter:'cube',mdigit:'cube',znote:'cube',zchange:'cube',zcomp:'cube',zshape:'cube',zanim:'cube',znato:'cube',zmorse:'cube',zemoji:'cube',zcolor:'cube',zest:'cube',zseq:'cube',zprime:'cube',zfrac:'cube',zpct:'cube',zunit:'cube',zcal:'cube',ztime:'cube',zclock:'cube',zbase:'cube',zroman:'cube',zelem:'cube',zstate:'cube',zcont:'cube',zflag:'cube',zcap:'cube',whalv:'cube',walpha:'cube',watoz:'cube',wrain:'cube',wrecall:'cube',wsort:'cube',wodd:'cube',wspell:'cube',whid:'cube',wgap:'cube',wvowel:'cube',wchain:'cube',wbomb:'cube',wcount:'cube',wbuild:'cube',wbee:'cube',wboggle:'cube',wpyr:'cube',wladder:'cube',wcrypt:'cube',wwheel:'cube',whang:'cube',wjotto:'cube',wmulti:'cube',wguess:'cube',dodge:'cube',bigger:'cube',anagram:'cube',qcount:'cube',nback:'cube',mirror:'cube',stopline:'cube',stack:'cube',rhythm:'cube',schulte:'cube',mathsp:'cube',tapspd:'cube',typing:'cube',chimp:'cube',nummem:'cube',oddc:'cube',stroop:'cube',aim:'cube',whack:'cube',react:'cube',fifteens:'cube',dice21:'cube',dbingo:'cube',knuckle:'cube',tenzi:'cube',dmerge:'cube',ceelo:'cube',dwar:'cube',chicago:'cube',threes:'cube',ludo:'cube',qwixx:'cube',golfd:'cube',skunk:'cube',lcr:'cube',mexico:'cube',beetle:'cube',bunco:'cube',pokerd:'cube',scc:'cube',liars:'cube',shutbox:'cube',pig:'cube',farkle:'cube',yacht:'cube',fillpix:'cube',hitori:'cube',twist:'cube',soko:'cube',calcu:'cube',queens:'cube',maze:'cube',ten:'cube',m24:'cube',shik:'cube',sky:'cube',futo:'cube',takuzu:'cube',peg:'cube',pipe:'cube',water:'cube',code:'cube',flood:'cube',nono:'cube',echo:'cube',hanoi:'cube',slide:'cube',lights:'cube',mines:'cube',g2048:'cube',simon:'card',calc:'card',castle:'card',eightoff:'card',canfield:'card',bakers:'card',scorpion:'card',thieves:'card',yukon:'card',spider:'card',sevens:'card',slapjack:'card',beggar:'card',tycoon:'card',bingo:'poker',scratch:'poker',deuces:'poker',bigsix:'poker',reddog:'poker',casinowar:'poker',letitride:'poker',caribbean:'poker',sicbo:'poker',keno:'poker',craps:'poker',roulette:'poker',tcpoker:'poker',baccarat:'poker',vpoker:'poker',thirty1:'card',cheat:'card',hearts:'card',clock:'card',tripeaks:'card',pyramid:'card',accordion:'card',hilo:'card',memory:'card',snap:'card',crazy8:'card',colorrush:'card',golf:'card',klondike:'card',freecell:'card',blackjack:'poker',holdem:'poker',omaha:'poker',draw:'poker',stud:'poker',slots:'poker',jewel:'gem',mahjong:'tile',wordsearch:'mag',sudoku:'cube',sudoku2:'cube',acesup:'card',gin:'card',oldmaid:'card',gofish:'card',war:'card',checkers:'card',chess:'card',chinese:'card',hop:'joy',invade:'joy',blocks:'joy',chomp:'joy',pong:'joy',capsule:'joy',hopper:'joy',hopper2:'joy',hopper3:'joy',brick:'joy',rocks:'joy',snake:'joy',guard:'joy',bubble:'joy',duck:'joy',guesswho:'card',ttt:'card',uttt:'card',c4:'card',reversi:'card',gomoku:'card',dots:'card',mancala:'card',morris:'card',hex:'card',break:'card',fox:'card',snakes:'card',nim:'card',konane:'card',pentago:'card'};
function mkSVG(v){
 var face=(v==='mag'||v==='gem')?'':'';
 var fy=v==='mag'?-2:0;
 return '<svg viewBox="0 0 120 150"><g class="body">'+
 '<g class="legs"><rect x="40" y="112" width="9" height="22" fill="#14171c"/><rect x="71" y="112" width="9" height="22" fill="#14171c"/><ellipse cx="42" cy="136" rx="11" ry="5" fill="#d4202a" stroke="#14171c" stroke-width="3"/><ellipse cx="78" cy="136" rx="11" ry="5" fill="#d4202a" stroke="#14171c" stroke-width="3"/></g>'+
 '<g class="arm armL"><path d="M22 66 Q6 80 10 98" stroke="#14171c" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="10" cy="100" r="7" fill="#fff" stroke="#14171c" stroke-width="3"/></g>'+
 '<g class="arm armR"><path d="M98 66 Q114 80 110 98" stroke="#14171c" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="110" cy="100" r="7" fill="#fff" stroke="#14171c" stroke-width="3"/></g>'+
 BODIES[v==='magic'?'card':v]+
 '<g transform="translate(0 '+fy+')"><circle cx="45" cy="60" r="8" fill="#fff" stroke="#14171c" stroke-width="3"/><circle cx="75" cy="60" r="8" fill="#fff" stroke="#14171c" stroke-width="3"/>'+
 '<circle cx="46" cy="61" r="3.6" fill="#14171c"/><circle cx="76" cy="61" r="3.6" fill="#14171c"/>'+
 '<ellipse cx="36" cy="76" rx="6" ry="4" fill="#ff9db0" opacity=".8"/><ellipse cx="84" cy="76" rx="6" ry="4" fill="#ff9db0" opacity=".8"/>'+
 '<path class="hap" d="M46 80 Q60 96 74 80 Q60 86 46 80Z" fill="#7a1020" stroke="#14171c" stroke-width="3" stroke-linejoin="round"/>'+
 '<path class="sd" d="M47 90 Q60 78 73 90" stroke="#14171c" stroke-width="3.5" fill="none" stroke-linecap="round"/>'+
 '<path class="tear" d="M38 70 Q35 78 38 80 Q41 78 38 70Z" fill="#59b8ff"/></g>'+(v==='magic'?'<path d="M60 74 Q50 67 38 75 Q47 84 60 78 Q73 84 82 75 Q70 67 60 74Z" fill="#14171c"/><g><rect x="41" y="-16" width="38" height="28" rx="3" fill="#14171c"/><rect x="41" y="2" width="38" height="6" fill="#d4202a"/><ellipse cx="60" cy="12" rx="34" ry="6" fill="#14171c"/></g>':'')+'</g></svg>';
}
var CURV=VAR[window.__cur]||'card';
var SVG=mkSVG(CURV);
var OPEN=["Hey there!","Hello!","Hi friend!","Welcome back!","Howdy!","Greetings!","Well hello!","Good to see you!","Look who's here!","Hiya!","Ahoy!","Yo!","Salutations!","Bonjour!","Hola!","Ciao!","Aloha!","Hey, champ!","Psst!","Ta-da!","Oh, hi!","There you are!","Knock knock!","Rise and shine!","Time to shine!"];
var BODY=["Let's play some cards!","Deal me in!","Ready to win big?","Shuffle up and play!","Fortune favors you today.","I've got a good feeling about this one.","May your luck be golden!","Let's make some magic.","Show them what you've got!","Time for a little fun.","Let's crack this one together!","Your move, champ!","Cards, here we come!","Go get that high score!","Let's beat your best!","No pressure, just have fun!","Take your time, I'm cheering for you!","Let's find some winning moves.","Today feels like a lucky day!","Let's start with a smile."];
var GREET=[];OPEN.forEach(function(o){BODY.forEach(function(b){GREET.push(o+' '+b)})});window.__greetings=GREET;
var HAPPY=['You did it! 🎉','Nice win!','Brilliant!','Ace move!','Champion!'],SAD=['Good game!','Next time!','Shake it off!','So close!'],START=GREET;
var IDLEA=["Hello? Are you still there?","Knock knock… anyone home?","Psst! Are you still with me?","Earth to player! Still there?","Did you fall asleep on me?","Still there, champ?","Blink twice if you're alive!","Hey! You okay over there?","Ahem… are you still playing?","Is this thing on? Still there?","Check-in time! You still here?","Yoo-hoo! Anybody?","Just checking on you!","Are you still here with me?","Helloooo? Tap if you can hear me!","Seven whole minutes! Still there?","I haven't seen a move in ages.","Pardon the interruption!","Wake up, wake up!","Status report time! Are you around?"];
var IDLEB=["I'd tap your shoulder, but I have no reach.","I counted the pixels. Twice.","I've started naming the corners of the screen.","I alphabetized my feelings. Mostly 'hopeful'.","Take your time, I'm paid in sparkles.","I've written three poems about this board already.","My speech bubble is getting stage fright.","I practiced my victory dance. Nobody saw.","I could use a snack. Do mascots eat? Asking for me.","I've been staring so long I memorized the screen.","Don't mind me, just doing mascot yoga.","Even my shadow got bored.","The pieces are starting rumors about you.","I built a tiny fort out of imaginary snacks.","No pressure, but dust is settling on the board.","I tried juggling. Nobody saw. Tragic.","I've mastered the art of waiting. It's dull.","The board and I are having a staring contest. I'm losing.","I hummed the whole jingle twice. Out of tune.","If you're thinking really hard, I respect that."];
var HINTA=["Ooh, a hint!","Need a nudge? Here you go!","Peeking, are we?","Hint mode activated!","Stuck? It happens to the best!","Look at you, asking for help!","Consider yourself nudged!","Behold, wisdom!","Psst, over here!","Hint delivery!","The oracle has spoken!","Fine, I'll spill the beans!","Spoiler alert!","Clue o'clock!","Special delivery of a good idea!"];
var HINTB=["Don't tell anyone I helped you.","I charge extra in applause.","That one was free. The next costs a compliment.","I'm basically a genius with a wave.","You're welcome in advance.","I whispered it so the board couldn't hear.","I've been saving that one all day.","Even legends ask for directions.","No shame, I use hints in my dreams.","Pretend you thought of it yourself.","I'd take credit, but I'm modest.","It's what I do best, besides waving.","I squinted real hard for that one.","My hint-o-meter is off the charts.","I found it right behind the obvious thing.","Trust me, I'm a professional mascot.","I'd call that a team effort.","Hint tax: one smile, please.","I'm available for tips, mostly the helpful kind.","Nothing to see here, just me being brilliant."];
var BYEA=["Leaving already?","Bye for now!","See you later!","Off you go!","Farewell, friend!","Catch you next time!","Toodles!","Until we meet again!","Adios!","Au revoir!"];
var BYEB=["Don't be a stranger.","I'll keep your seat warm.","Come back soon, I get lonely.","I'll be here, waving.","Thanks for playing with me!","Remember to hydrate!","Go get 'em, champ.","I'll practice my cheering while you're gone.","Good game, good vibes.","Say hi to the other games for me!"];
function cross(a,b){var o=[];a.forEach(function(x){b.forEach(function(y){o.push(x+' '+y)})});return o}
var IDLE=cross(IDLEA,IDLEB),HINT=cross(HINTA,HINTB),BYE=cross(BYEA,BYEB);
window.__banks={idle:IDLE,hint:HINT,bye:BYE};

var busy=0,last=Date.now();
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function jingle(){
  if(!P.jn)return;
  try{
    var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
    var c=window.__actx||(window.__actx=new AC());if(c.state==='suspended')c.resume();
    var SC=[[0,2,4,7,9],[0,3,5,7,10],[0,2,4,5,7,9,11],[0,4,7],[0,2,3,7,8],[0,2,5,7,9]];
    var sc=pick(SC),root=pick([196,220,247,262,294,330]),wf=pick(['sine','triangle','square']),n=pick([6,7,8]);
    var t0=c.currentTime+.03,step=(2-.5)/n,m=c.createGain();m.gain.value=wf==='square'?.05:.12;m.connect(c.destination);
    var idx=Math.floor(Math.random()*sc.length),L=sc.length;
    function note(f,t,d,v){var o=c.createOscillator(),g=c.createGain();o.type=wf;o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(m);o.start(t);o.stop(t+d+.02)}
    for(var i=0;i<n;i++){idx=Math.max(0,Math.min(L*2-1,idx+pick([-2,-1,1,1,2])));var sem=sc[idx%L]+12*Math.floor(idx/L);note(root*Math.pow(2,sem/12),t0+i*step,step*.9,.9)}
    var te=t0+n*step;[0,4,7].forEach(function(sm){note(root*2*Math.pow(2,sm/12),te,.5,.7)});
    window.__jingleLog={notes:n,wave:wf,dur:n*step+.5};
  }catch(e){}
}
try{if(window.parent&&window.parent!==window&&window.parent.__actx&&!window.__actx)window.__actx=window.parent.__actx}catch(e){}
function actx(){try{var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;var c=window.__actx||(window.__actx=new AC());if(c.state==='suspended')c.resume();return c}catch(e){return null}}
function tn(c,f,t,dur,v,type,dest){var o=c.createOscillator(),g=c.createGain();o.type=type||'triangle';o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(dest||c.destination);o.start(t);o.stop(t+dur+.03)}
function noiseBuf(c){if(window.__nbuf&&window.__nbuf.sampleRate===c.sampleRate)return window.__nbuf;var b=c.createBuffer(1,c.sampleRate,c.sampleRate),a=b.getChannelData(0);for(var i=0;i<a.length;i++)a[i]=Math.random()*2-1;return window.__nbuf=b}
function nz(c,t,dur,f,q,v){var s=c.createBufferSource();s.buffer=noiseBuf(c);var bp=c.createBiquadFilter();bp.type='bandpass';bp.frequency.value=f;bp.Q.value=q;var g=c.createGain();g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+dur*.25);g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(bp);bp.connect(g);g.connect(c.destination);s.start(t,Math.random()*.5);s.stop(t+dur+.02)}
var PENT=[0,2,4,7,9];
function sf(name,fn){return function(){var L=window.__sfxLog||(window.__sfxLog=[]);L.push(name);if(P.sx===false)return;var c=actx();if(!c)return;var args=[c].concat([].slice.call(arguments));if(c.state==='running'){try{fn.apply(null,args)}catch(e){}return}var t0=Date.now();try{c.resume().then(function(){if(Date.now()-t0<350&&c.state==='running'){try{fn.apply(null,args)}catch(e){}}}).catch(function(){})}catch(e){}}}
window.__sfx={
  shuffle:sf('shuffle',function(c,v){v=v|0;var t=c.currentTime+.02,i;
    if(v===1){for(var g=0;g<4;g++){for(i=0;i<5;i++)nz(c,t+g*.22+i*.025,.05,900+g*300+Math.random()*400,1.6,.5);nz(c,t+g*.22+.14,.08,450,1.5,.5)}}
    else if(v===2){for(i=0;i<22;i++)nz(c,t+i*.028,.045,2500+i*90+Math.random()*600,1.4,.35+i*.012);nz(c,t+.7,.15,380,1.4,.7)}
    else if(v===3){[0,.32,.64].forEach(function(o){nz(c,t+o,.05,3200,1.2,.5);nz(c,t+o+.06,.12,700,1.4,.7);tn(c,120,t+o+.06,.12,.12,'sine')});for(i=0;i<8;i++)nz(c,t+1.0+i*.035,.05,1800+Math.random()*2000,1.2,.35)}
    else if(v===4){for(i=0;i<16;i++)nz(c,t+i*.032,.06,1200+i*220,1.8,.45);nz(c,t+.6,.1,2600,1,.3);nz(c,t+.72,.08,900,1.5,.5)}
    else{for(i=0;i<14;i++){var tt=t+i*.05+Math.random()*.02;nz(c,tt,.07,1500+Math.random()*2500,1.2,.5)}nz(c,t+.78,.12,500,1.5,.6);nz(c,t+.86,.1,900,1.5,.4)}}),
  gem:sf('gem',function(c,n,combo){n=Math.max(3,Math.min(n||3,7));var base=523.25*Math.pow(2,Math.min(combo||0,6)*2/12),t=c.currentTime+.01;for(var i=0;i<Math.min(n,5);i++){var k=PENT[i%5]+12*Math.floor(i/5);tn(c,base*Math.pow(2,k/12),t+i*.06,.22,.2,'triangle')}tn(c,base*4,t+.05,.3,.05,'sine');nz(c,t,.06,4000,2,.15)}),
  swap:sf('swap',function(c){var t=c.currentTime;tn(c,330,t,.08,.1,'sine');tn(c,440,t+.05,.08,.1,'sine')}),
  bad:sf('bad',function(c){var t=c.currentTime;tn(c,180,t,.14,.14,'square');tn(c,140,t+.1,.16,.14,'square')}),
  power:sf('power',function(c){var t=c.currentTime;[0,4,7,12,16].forEach(function(s,i){tn(c,392*Math.pow(2,s/12),t+i*.05,.35,.15,'sawtooth')});nz(c,t,.4,2500,.7,.25)}),
  boom:sf('boom',function(c){var t=c.currentTime,o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.setValueAtTime(160,t);o.frequency.exponentialRampToValueAtTime(40,t+.35);g.gain.setValueAtTime(.5,t);g.gain.exponentialRampToValueAtTime(.0001,t+.4);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+.45);nz(c,t,.3,900,.6,.4)}),
  win:sf('win',function(c){var t=c.currentTime;[0,4,7,12,16,19,24].forEach(function(s,i){tn(c,523.25*Math.pow(2,s/12),t+i*.09,.4,.18,'triangle')})}),
  lose:sf('lose',function(c){var t=c.currentTime;[7,4,0,-5].forEach(function(s,i){tn(c,392*Math.pow(2,s/12),t+i*.16,.3,.14,'triangle')})}),
  scratch:sf('scratch',function(c,v){v=v|0;var t=c.currentTime+.02,i;
    if(v===1){for(i=0;i<16;i++)nz(c,t+i*.055,.05,4200+(i%2)*1800+Math.random()*900,1,.4)}
    else if(v===2){for(i=0;i<4;i++){nz(c,t+i*.3,.26,2800+i*250,.7,.4);}nz(c,t+1.3,.05,1800,1.4,.3)}
    else if(v===3){for(i=0;i<12;i++)nz(c,t+i*.07+Math.random()*.02,.035+Math.random()*.04,3000+Math.random()*5000,.8,.45);nz(c,t+.95,.07,2200,1.1,.3)}
    else if(v===4){for(i=0;i<6;i++)nz(c,t+i*.15,.12,5200,.6,.3);nz(c,t+1,.04,1500,2,.45);nz(c,t+1.15,.04,1500,2,.35)}
    else{for(i=0;i<9;i++){var tt=t+i*.11+Math.random()*.03;nz(c,tt,.09,3500+Math.random()*3500,.9,.45)}nz(c,t+1.0,.06,2500,1.2,.25)}}),
  tiles:sf('tiles',function(c,v){v=v|0;var t=c.currentTime+.02,n=[16,12,20,10,14][v%5],i;for(i=0;i<n;i++){var tt=t+i*(.045+(v%3)*.01)+Math.random()*.02;nz(c,tt,.04,1400+Math.random()*1800,3,.55);tn(c,300+Math.random()*200,tt,.05,.08,'square')}nz(c,t+n*.05+.05,.12,600,1.4,.6)}),
  wood:sf('wood',function(c,v){v=v|0;var t=c.currentTime+.02,i;
    if(v===1){for(i=0;i<5;i++){tn(c,520+i*40,t+i*.09,.07,.18,'square');nz(c,t+i*.09,.04,1800,2,.4)}}
    else if(v===2){tn(c,180,t,.18,.25,'sine');nz(c,t,.05,1200,2,.5);tn(c,240,t+.22,.15,.2,'sine');nz(c,t+.22,.05,1500,2,.4);tn(c,320,t+.42,.2,.2,'sine');nz(c,t+.42,.05,1800,2,.4)}
    else if(v===3){for(i=0;i<8;i++){nz(c,t+i*.06,.04,900+i*180,2.4,.5);tn(c,200+i*30,t+i*.06,.05,.12,'triangle')}}
    else if(v===4){[0,.12,.3,.42].forEach(function(o){tn(c,420,t+o,.07,.2,'square');nz(c,t+o,.03,2400,2,.35)});tn(c,260,t+.6,.22,.22,'sine')}
    else{for(i=0;i<3;i++){tn(c,260+i*60,t+i*.14,.09,.22,'square');nz(c,t+i*.14,.04,1600,2.4,.5)}nz(c,t+.5,.12,500,1.3,.4)}}),
  start:sf('start',function(c,v){v=v|0;var t=c.currentTime+.01,i;
    var SC=[[0,4,7,11,14,19],[0,2,4,6,7,11,14],[0,3,7,10,12,15,19],[0,7,12,16,19,24],[0,4,9,12,16,21,24]][v%5];
    SC.forEach(function(s,i){var dt=v===3?.1:v===4?.045:.07;tn(c,392*Math.pow(2,s/12),t+i*dt,v===2?.7:.5,.14,v===1?'sine':'triangle');tn(c,784*Math.pow(2,s/12),t+i*dt,.35,.04,'sine')});
    nz(c,t,.5,6000,3,.18);tn(c,1568*(v===1?1.12:1),t+.5,.9,.06,'sine');if(v===3){tn(c,98,t,.7,.15,'sine')}if(v===4){nz(c,t+.4,.3,7500,2,.12)}}),
  womp:sf('womp',function(c){var t=c.currentTime+.02,seq=[[233,0,.42],[220,.5,.42],[196,1.0,.42],[175,1.5,.95]];seq.forEach(function(q,i){var o=c.createOscillator(),f=c.createBiquadFilter(),g=c.createGain();o.type='sawtooth';f.type='lowpass';f.Q.value=6;o.frequency.setValueAtTime(q[0],t+q[1]);if(i===3){o.frequency.linearRampToValueAtTime(q[0]*.82,t+q[1]+q[2])}f.frequency.setValueAtTime(1400,t+q[1]);f.frequency.exponentialRampToValueAtTime(260,t+q[1]+q[2]*.9);g.gain.setValueAtTime(.0001,t+q[1]);g.gain.exponentialRampToValueAtTime(.22,t+q[1]+.04);g.gain.exponentialRampToValueAtTime(.0001,t+q[1]+q[2]);o.connect(f);f.connect(g);g.connect(c.destination);o.start(t+q[1]);o.stop(t+q[1]+q[2]+.05)})}),
  dealing:sf('dealing',function(c,n){n=n||16;var t=c.currentTime+.02;for(var i=0;i<n;i++){nz(c,t+i*.06,.05,2400+Math.random()*900,1,.45);nz(c,t+i*.06+.02,.04,1100,1.2,.25)}}),
  flick:sf('flick',function(c){var t=c.currentTime;nz(c,t,.06,2800,1,.5);nz(c,t+.02,.05,1200,1,.3)}),
  isOn:function(){return P.sx!==false}
};
var SHUF={simon:1,calc:1,castle:1,eightoff:1,canfield:1,bakers:1,scorpion:1,thieves:1,yukon:1,spider:1,sevens:1,slapjack:1,beggar:1,thirty1:1,cheat:1,hearts:1,clock:1,tripeaks:1,pyramid:1,accordion:1,hilo:1,memory:1,snap:1,crazy8:1,colorrush:1,golf:1,klondike:1,freecell:1,mahjong:1,acesup:1,gin:1,oldmaid:1,gofish:1,war:1},CASINO={slots:1,blackjack:1,holdem:1,omaha:1,draw:1,stud:1},SCR={sudoku:1,sudoku2:1,wordsearch:1};
var BRD={checkers:1,chess:1,chinese:1};
function startSound(){
  if(Date.now()-(window.__ssT||0)<900)return;window.__ssT=Date.now();
  var g=window.__cur,sf=window.__sfx,v=Math.floor(Math.random()*5);if(!sf)return;window.__shufT=Date.now();
  if(g==='mahjong')sf.tiles(v);else if(BRD[g])sf.wood(v);else if(SHUF[g])sf.shuffle(v);else if(SCR[g])sf.scratch(v);else if(g==='jewel')sf.start(v);
  else if(CASINO[g]){var done=0,mo=new MutationObserver(function(ms){if(done)return;for(var i=0;i<ms.length;i++){var a=ms[i].addedNodes;for(var j=0;j<a.length;j++){var n=a[j];if(n.nodeType===1&&((n.classList&&n.classList.contains('pc'))||(n.querySelector&&n.querySelector('.pc')))){done=1;mo.disconnect();sf.shuffle(v);return}}}});mo.observe(document.body,{childList:true,subtree:true});setTimeout(function(){mo.disconnect()},4000)}
}
window.__dealSnd=function(){var m=document.getElementById('menu');if(m&&m.classList.contains('on')&&Date.now()-(window.__pageT||0)<2500)return;setTimeout(function(){if(window.__sfx)window.__sfx.dealing()},60)};
function unlockAudio(){try{var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;var c=window.__actx||(window.__actx=new AC());if(c.state==='suspended')c.resume()}catch(e){}}
function place(e,hasBub){
  var W=window.innerWidth,H=window.innerHeight,w=112,h=140;
  var x=Math.max(4,W-w-6),y=Math.max(60,H-h-66);
  e.style.left=x+'px';e.style.top=y+'px';
  var b=e.querySelector('.bub');if(!b)return;
  var bw=b.offsetWidth,want=w/2-bw/2,abs=Math.max(4,Math.min(x+want,W-bw-4));
  b.style.left=(abs-x)+'px';b.style.setProperty('--tx',(x+w/2-abs)+'px');
}
function hintTarget(){
  var l=document.querySelectorAll('.hint');
  for(var i=0;i<l.length;i++){var r=l[i].getBoundingClientRect();if(r.width>2&&r.height>2&&r.bottom>0&&r.top<window.innerHeight)return r}
  var b=document.getElementById('bHint');return b?b.getBoundingClientRect():null;
}
function showHint(talk){
  if(!P.m||busy)return;busy=1;var old=document.getElementById('ace');if(old)old.remove();
  var e=document.createElement('div');e.id='ace';e.className='ptr';
  e.innerHTML=mkSVG(CURV)+'<div class="arr">👆</div>'+(talk?'<div class="bub">'+pick(window.__banks&&window.__banks.hint&&window.__banks.hint.length?window.__banks.hint:['Need a hand? Try the hint button!'])+'</div>':'');
  document.body.appendChild(e);
  var r=hintTarget(),W=window.innerWidth,H=window.innerHeight,w=112,h=112,x,y,up=false;
  if(r){
    var cx=r.left+r.width/2;
    x=Math.max(4,Math.min(cx-w/2,W-w-4));
    if(r.bottom+h+40<H){y=r.bottom+34;up=true}else{y=Math.max(30,r.top-h-34)}
    e.style.left=x+'px';e.style.top=y+'px';
    var a=e.querySelector('.arr');a.style.left=(cx-x-14)+'px';
    if(up){a.style.top='-34px'}else{a.style.top=(h+4)+'px';a.classList.add('dn')}
  }else{e.style.left=(W/2-56)+'px';e.style.top='40%';e.querySelector('.arr').style.display='none'}
  if(talk){var bb=e.querySelector('.bub');if(bb){if(up)e.classList.add('below');var bw=bb.offsetWidth,ex=parseFloat(e.style.left)||0,ab=Math.max(4,Math.min(ex+w/2-bw/2,W-bw-4));bb.style.left=(ab-ex)+'px';bb.style.setProperty('--tx',(ex+w/2-ab)+'px')}}
  void e.offsetWidth;e.classList.add('in','wave');
  jingle();window.__aceLast={kind:'hint',talk:!!talk,text:'',x:e.style.left,y:e.style.top,ptr:1};
  setTimeout(function(){e.classList.add('out')},talk?5200:2800);
  setTimeout(function(){if(e.parentNode)e.remove();busy=0},talk?5650:3250);
}
function show(kind,custom){
  if(window.__NOACE)return;
  if(kind==='bye'||kind==='win'||kind==='sad')return;
  if(kind==='hint'&&(!custom||custom==='__idle'))return showHint(custom==='__idle');
  if(!P.m||busy)return;busy=1;var old=document.getElementById('ace');if(old)old.remove();
  var e=document.createElement('div');e.id='ace';
  var rookie=(P.gc||0)<5&&kind==='start';
  var txt=rookie?(kind==='bye'?'Bye':'Hi'):custom||(kind==='start'?pick(START):kind==='win'?pick(HAPPY):kind==='sad'?pick(SAD):kind==='idle'?pick(IDLE):kind==='hint'?pick(HINT):kind==='bye'?pick(BYE):pick(SAD));
  e.innerHTML=mkSVG(CURV)+'<div class="bub">'+txt+'</div>';
  if(kind==='win'){for(var i=0;i<5;i++){var s=document.createElement('span');s.className='sp';s.textContent=['⭐','✨','🎉','💫','⭐'][i];s.style.left=(6+i*20)+'px';s.style.top=(20+(i%2)*30)+'px';s.style.animationDelay=(i*.2)+'s';e.appendChild(s)}}
  document.body.appendChild(e);place(e);
  void e.offsetWidth;e.classList.add('in',kind==='win'?'cheer':kind==='sad'?'sad':'wave');
  jingle();
  window.__aceLast={kind:kind,text:txt,x:e.style.left,y:e.style.top};
  var dur=kind==='idle'?6500:kind==='hint'?3400:kind==='bye'?3000:kind==='start'?2800:3200;
  setTimeout(function(){e.classList.add('out')},dur);
  setTimeout(function(){if(e.parentNode)e.remove();busy=0},dur+450);
}
window.__ace=show;
window.__bye2=function(cb){
  return false;
  if(!P.m||window.__navP)return false;
  window.__navP=1;busy=0;var o=document.getElementById('ace');if(o)o.remove();
  show('bye');setTimeout(function(){window.__navP=0;cb()},1900);return true;
};
function endCheck(){
  var m=document.getElementById('modal');if(!m)return;var was=m.classList.contains('on');
  new MutationObserver(function(){
    var on=m.classList.contains('on');
    if(on&&!was){
      var t=(m.textContent||'').toLowerCase(),k=null;
      if(/out of (chips|lives|moves|time|money)|game over|time.?s up|busted|ran out|no (more )?moves|stuck|defeat|you lose|failed|💔|💸|💀/.test(t))k='sad';
      else if(/solved|you win|you won|cleared|complete|congrat|cash|you leave|perfect|found|winner|victory|well done|🎉|🏆|level up|won\b|stars|★|win!/.test(t))k='win';
      if(k){P.gc=(P.gc||0)+1;save();if(k==='sad'&&window.__sfx)window.__sfx.womp();}
      setTimeout(scoreCheck,450);
    }
    was=on;
  }).observe(m,{attributes:true,attributeFilter:['class']});
}
var menu=document.getElementById('menu');
var byeNow=!!window.__bye;window.__bye=false;
function touch(){last=Date.now()}
['pointerdown','touchstart','keydown','click'].forEach(function(n){document.addEventListener(n,touch,true)});
document.addEventListener('pointerdown',unlockAudio,true);document.addEventListener('touchend',unlockAudio,true);
if(menu){
  endCheck();
  document.addEventListener('pointerdown',function(e){if(e.target.closest&&e.target.closest('#mStart'))startSound()},true);
  document.addEventListener('click',function(e){
    if(e.target.closest&&e.target.closest('#mStart')){startSound();setTimeout(function(){show('start')},500)}
    if(e.target.closest&&e.target.closest('#dtut,details>summary,.howbtn,[data-how]'))setTimeout(function(){show('start')},400);
    var hb=e.target.closest&&e.target.closest('#bHint');if(hb&&!hb.disabled)setTimeout(function(){show('hint')},320);
  },true);
  setInterval(function(){
    var dx0={};try{dx0=JSON.parse(localStorage.getItem('deck.x')||'{}')||{}}catch(e){}if(!P.m||dx0.idle!==1||dx0.i2!==1)return;var lim=window.__idleMs||420000;
    if(Date.now()-last<lim)return;
    if(menu.classList.contains('on'))return;
    var md=document.getElementById('modal');if(md&&md.classList.contains('on'))return;
    last=Date.now();show('idle');
  },window.__idleTick||10000);
  if(false){}
  else if(!menu.classList.contains('on')){setTimeout(startSound,200);setTimeout(function(){show('start')},700)}
}
/* ---------- high scores ---------- */
var GN={golf:'Golf',klondike:'Klondike',freecell:'FreeCell',sudoku:'Sudoku',sudoku2:'Sudoku Shapes',slots:'Card Slots',mahjong:'Mahjong',wordsearch:'Word Search',jewel:'Jewels Game',blackjack:'Blackjack',holdem:"Hold'em",omaha:'Omaha',draw:'5-Card Draw',stud:'7-Card Stud',acesup:'Aces Up',gin:'Gin Rummy',oldmaid:'Old Maid',gofish:'Go Fish',war:'War',checkers:'Checkers',chess:'Chess',chinese:'Chinese Checkers'};
var HDEF={golf:{m:'time',b:[['classic',80]]},klondike:{m:'time',b:[['Draw 1',300],['Draw 3',420]]},freecell:{m:'moves',b:[['Standard',115]]},sudoku:{m:'time',b:[['Level 1',92],['Level 5',180],['Level 10',290]]},sudoku2:{m:'time',b:[['Easy · small',70],['Medium · small',120],['Easy · medium',150],['Medium · medium',260],['Hard · medium',420],['Medium · large',440]]},mahjong:{m:'time',b:[]},wordsearch:{m:'time',b:[['Level 1',60],['Level 5',110],['Level 10',170]]},jewel:{m:'score',b:[['Blitz',4000],['Level 1',3000],['Level 5',5200]]}};
['blackjack','holdem','omaha','draw','stud','slots'].forEach(function(g){HDEF[g]={m:'chips',b:[['Start $1,000',1500]]}});
var INI=['ACE','JKR','MAX','ZOE','BOB','LEE','SAM','KAT','DEX','NIA','OLI','RAY','TIM','VIC','WES','AMY','BEN','CAL','DAN','EVA','FIN','GUS','HAL','IVY','JON','KIM','LOU','MEG','NED','PIP','QUI','ROX','SAL','TEO','UMA','VAL','WYN','XAV','YAN','ZED'];
function hsLoad(){try{return JSON.parse(localStorage.getItem('hs.v1')||'{}')}catch(e){return {}}}
function hsSave(d){try{localStorage.setItem('hs.v1',JSON.stringify(d))}catch(e){}}
function hh(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function fakes(game,bucket,m,low,par){
  var r=rng(hh(game+'|'+bucket)),out=[],used={};
  for(var i=0;i<10;i++){
    var v,j=(r()-.5)*.05;
    if(low)v=par*(0.64+i*.072+j);else v=par*(1.9-i*.1+j);
    v=m==='score'?Math.round(v/10)*10:m==='chips'?Math.round(v/10)*10:Math.round(v);if(low&&v<1)v=1;
    var n;do{n=INI[Math.floor(r()*INI.length)]}while(used[n]);used[n]=1;
    out.push({n:n,v:v,f:1});
  }
  return out;
}
function fv(m,v){return m==='time'?Math.floor(v/60)+':'+('0'+Math.round(v%60)).slice(-2):m==='chips'?'$'+Math.round(v).toLocaleString():m==='moves'?v+' moves':Math.round(v).toLocaleString()}
function hsBoard(game,bucket,m,par){
  var d=hsLoad(),k=game+'|'+bucket,rec=d[k]||{real:[],hist:[]},low=m==='time'||m==='moves';
  par=rec.par||par||(HDEF[game]&&HDEF[game].b.filter(function(x){return x[0]===bucket})[0]||[0,100])[1];
  var all=fakes(game,bucket,m,low,par).concat(rec.real.map(function(x){return {n:x.n,v:x.v,real:1}}));
  all.sort(function(a,b){var d2=low?a.v-b.v:b.v-a.v;return d2||((b.real?1:0)-(a.real?1:0))*-1});
  return {top:all.slice(0,10),rec:rec,par:par,low:low,m:m};
}
function hsRank(bd,v){var c=0;bd.top.forEach(function(e){if(bd.low?e.v<=v:e.v>=v)c++});return c}
var hsRef=null;
function hsStyle(){
  var u=document.createElement('style');
  u.textContent='#hsbtn{position:fixed;top:0;right:34px;z-index:1100;height:28px;width:34px;padding:0;border:0;background:rgba(0,0,0,.35);color:#fff;font:800 14px Roboto,Arial,sans-serif;cursor:pointer}#hsbtn:active{background:rgba(0,0,0,.6)}'+
  '#hssheet,#hsov{position:fixed;inset:0;z-index:10060;background:rgba(5,10,20,.97);display:none;flex-direction:column;font-family:Roboto,Arial,sans-serif;color:#fff;overflow:auto}#hssheet.on,#hsov.on{display:flex}'+
  '#hsov{background:rgba(5,10,20,.9);align-items:center;justify-content:center}#hsov .bx,#hssheet .bx{width:min(92vw,380px);margin:0 auto;padding:16px 4px}'+
  '.hsh{font-size:22px;font-weight:900;margin:0 0 4px}.hsp{margin:0 0 10px;opacity:.8;font-size:14px}'+
  '.hsr{display:flex;gap:8px;margin:0 0 8px}.hsr select{flex:1;height:44px;border:0;background:rgba(255,255,255,.14);color:#fff;font:700 15px Roboto,Arial,sans-serif;padding:0 8px;border-radius:0}.hsr select option{color:#000}'+
  '.hst{width:100%;border-collapse:collapse;margin:6px 0 12px;font-size:16px}.hst td{padding:8px 6px;border-bottom:1px solid rgba(255,255,255,.1)}.hst td:first-child{width:30px;opacity:.7;font-weight:800}.hst td:last-child{text-align:right;font-variant-numeric:tabular-nums;font-weight:800}.hst tr.me td{background:rgba(255,200,61,.22);color:#ffd75e}.hst tr.hi td{background:rgba(255,200,61,.42);color:#fff}'+
  '.hsb{display:flex;gap:8px;margin-top:6px}.hsb button{flex:1;height:50px;border:0;background:rgba(255,255,255,.16);color:#fff;font:800 15px Roboto,Arial,sans-serif;cursor:pointer;border-radius:0}.hsb button.pri{background:#ffc83d;color:#1a1200}'+
  '#hsini{width:100%;box-sizing:border-box;height:64px;border:3px solid #ffc83d;background:#0d243f;color:#fff;font:900 36px Roboto,Arial,sans-serif;text-align:center;letter-spacing:.3em;text-transform:uppercase;margin:8px 0;border-radius:0}'+
  '#hsnote{position:fixed;left:50%;top:34px;transform:translateX(-50%);z-index:9050;background:#fff;color:#14171c;border:3px solid #14171c;padding:7px 12px;font:900 13px Roboto,Arial,sans-serif;max-width:86vw;text-align:center;display:none}#hsnote.on{display:block}';
  document.head.appendChild(u);
}
hsStyle();
var hsS=document.createElement('div');hsS.id='hssheet';document.body.appendChild(hsS);
var hsO=document.createElement('div');hsO.id='hsov';document.body.appendChild(hsO);
var hsN=document.createElement('div');hsN.id='hsnote';document.body.appendChild(hsN);
var hsB=document.createElement('button');hsB.id='hsbtn';hsB.textContent='🏆';hsB.setAttribute('aria-label','High scores');
var hsSel={g:window.__cur||'golf',b:null,hi:null};
function bucketsFor(g){
  var d=hsLoad(),seen={},out=[];
  (HDEF[g]?HDEF[g].b:[]).forEach(function(x){seen[x[0]]=1;out.push(x[0])});
  Object.keys(d).forEach(function(k){if(k.indexOf(g+'|')===0){var b=k.slice(g.length+1);if(!seen[b]){seen[b]=1;out.push(b)}}});
  return out;
}
function hsRender(){
  var g=hsSel.g,bs=bucketsFor(g);if(!hsSel.b||bs.indexOf(hsSel.b)<0)hsSel.b=bs[0]||null;
  var h='<div class="bx"><div style="position:sticky;top:0;z-index:5;display:flex;justify-content:flex-end;padding:8px 0;background:linear-gradient(rgba(5,10,20,.97) 75%,rgba(5,10,20,0))"><button id="hsx" style="height:40px;padding:0 16px;border:0;border-radius:99px;background:rgba(255,255,255,.18);color:#fff;font:900 14px Roboto,Arial,sans-serif;cursor:pointer">✕ Close</button></div><h2 class="hsh">🏆 High scores</h2><p class="hsp">Top 10 per game and board. Saved on this device.</p><button id="hson" style="display:block;width:100%;height:42px;margin:0 0 8px;border:2px solid #ffc83d;background:'+(P.hs?'rgba(255,200,61,.22)':'rgba(255,255,255,.08)')+';color:#fff;font:800 14px Roboto,Arial,sans-serif;cursor:pointer">Collect my high scores: '+(P.hs?'ON':'OFF')+'</button>'+(P.hs?'':'<p class="hsp">Off: your results are not saved and you won\'t be asked for initials. Turn it on to start collecting.</p>')+'<div class="hsr"><select id="hsg">';
  Object.keys(GN).forEach(function(k){h+='<option value="'+k+'"'+(k===g?' selected':'')+'>'+GN[k]+'</option>'});
  h+='</select><select id="hsb">';bs.forEach(function(b){h+='<option'+(b===hsSel.b?' selected':'')+'>'+b+'</option>'});h+='</select></div>';
  if(!hsSel.b)h+='<p class="hsp">Finish a game of '+GN[g]+' to unlock its leaderboard.</p>';
  else{
    var d=hsLoad(),rec=d[g+'|'+hsSel.b];var m=(rec&&rec.m)||(HDEF[g]&&HDEF[g].m)||'time';var bd=hsBoard(g,hsSel.b,m);
    h+='<table class="hst">';bd.top.forEach(function(e,i){h+='<tr class="'+(e.real?'me':'')+(hsSel.hi&&e.real&&e.v===hsSel.hi.v&&e.n===hsSel.hi.n?' hi':'')+'"><td>'+(i+1)+'</td><td>'+(e.n)+(e.real?' ★':'')+'</td><td>'+fv(m,e.v)+'</td></tr>'});h+='</table>';
    var hist=(rec&&rec.hist)||[];
    if(hist.length){var vals=hist.map(function(x){return x.v}),best=bd.low?Math.min.apply(null,vals):Math.max.apply(null,vals),avg=vals.reduce(function(a,b){return a+b},0)/vals.length;
      h+='<h2 class="hsh" style="font-size:17px">Your results</h2><p class="hsp">Played '+hist.length+' · Best '+fv(m,best)+' · Average '+fv(m,Math.round(avg))+'<br>Recent: '+hist.slice(-6).reverse().map(function(x){return fv(m,x.v)}).join(' · ')+'</p>'}
    else h+='<p class="hsp">No results yet on this board. Beat the numbers above!</p>';
  }
  h+='<div class="hsb"><button class="pri" id="hsx">Close</button></div></div>';
  hsS.innerHTML=h;
}
hsS.addEventListener('change',function(e){if(e.target.id==='hsg'){hsSel.g=e.target.value;hsSel.b=null;hsSel.hi=null}else if(e.target.id==='hsb')hsSel.b=e.target.value;hsRender()});
hsS.addEventListener('click',function(e){e.stopPropagation();if(e.target.id==='hson'){P.hs=!P.hs;save();hsRender();return}if(e.target.id==='hsx')hsS.classList.remove('on')});
hsB.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();hsSel.g=window.__cur||hsSel.g;hsSel.b=null;hsSel.hi=null;hsRender();hsS.classList.add('on')});
function note(t){hsN.textContent=t;hsN.classList.add('on');clearTimeout(note.t);note.t=setTimeout(function(){hsN.classList.remove('on')},3800)}
function hsSubmit(g,info){
  var m=info.metric,low=!!info.low,d=hsLoad(),k=g+'|'+info.bucket;
  var bd=hsBoard(g,info.bucket,m,info.par);var rec=d[k]||(d[k]={real:[],hist:[]});rec.m=m;rec.par=bd.par;
  var vals=rec.hist.map(function(x){return x.v});
  var pb=!vals.length||(low?info.value<Math.min.apply(null,vals):info.value>Math.max.apply(null,vals));
  var prev=vals.length?(low?Math.min.apply(null,vals):Math.max.apply(null,vals)):null;
  var rank=hsRank(bd,info.value)<10?(function(){var c=0;bd.top.forEach(function(e){if(low?e.v<info.value:e.v>info.value)c++});return c})():-1;
  rec.hist.push({v:info.value,t:Date.now()});if(rec.hist.length>50)rec.hist=rec.hist.slice(-50);
  hsSave(d);
  window.__hsLast={game:g,bucket:info.bucket,value:info.value,rank:rank,pb:pb};
  if(rank>=0){
    var ini=''; try{ini=localStorage.getItem('hs.ini')||''}catch(e){}
    hsO.innerHTML='<div class="bx"><h2 class="hsh">🏆 New high score!</h2><p class="hsp">'+fv(m,info.value)+' puts you at #'+(rank+1)+' on '+GN[g]+' · '+info.bucket+'. Enter your initials:</p><input id="hsini" maxlength="3" autocomplete="off" autocapitalize="characters" value="'+ini+'"><div class="hsb"><button id="hsskip">Skip</button><button class="pri" id="hssave">Save</button></div></div>';
    hsO.classList.add('on');
    hsO.onclick=function(ev){
      ev.stopPropagation();
      var id=ev.target.id;if(id!=='hssave'&&id!=='hsskip')return;
      if(id==='hssave'){
        var nm=(document.getElementById('hsini').value||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,3)||'YOU';
        try{localStorage.setItem('hs.ini',nm)}catch(e){}
        var dd=hsLoad(),r2=dd[k];r2.real.push({n:nm,v:info.value,t:Date.now()});
        r2.real.sort(function(a,b){return low?a.v-b.v:b.v-a.v});r2.real=r2.real.slice(0,10);hsSave(dd);
        hsSel.g=g;hsSel.b=info.bucket;hsSel.hi={n:nm,v:info.value};hsO.classList.remove('on');hsRender();hsS.classList.add('on');
      }else hsO.classList.remove('on');
    };
  }else if(pb&&prev!=null)note('🌟 Personal best! '+fv(m,info.value)+' (was '+fv(m,prev)+')');
  else if(prev!=null)note('Your best here: '+fv(m,prev)+' · this run '+fv(m,info.value));
  else note('First result saved: '+fv(m,info.value));
}
function scoreCheck(){
  var g=window.__cur;if(!P.hs||!g||typeof window.__scoreInfo!=='function')return;
  var info;try{info=window.__scoreInfo()}catch(e){return}
  if(!info||info.ref===hsRef||info.value==null||isNaN(info.value))return;
  hsRef=info.ref;hsSubmit(g,info);
}
window.__hs={submit:hsSubmit,check:scoreCheck,fakes:fakes,board:hsBoard,GN:GN};


/* ---------- how to play ---------- */
var HOW={
golf:{n:'Golf Solitaire',d:['🂷 6♠ → 🂶 7♥ ✓','7♥ → 8♣ ✓','8♣ → 7♦ ✓ (up or down!)'],s:[
['Goal','Clear every card from the board. Cards leave the board when they are one rank higher or lower than the card on your waste pile.'],
['How to play','Tap a board card that is exactly one rank above or below the waste card (suits don\'t matter; Ace and King do not wrap unless a mode says so). Out of plays? Tap the stock to flip a new card.'],
['Boards','There are 106 boards — different layouts of the cards. Pick one in the settings screen, tap 🎲 for a random one, or use the ⇄ bar in the game.'],
['Modes','15 modes: Classic, Sudden Death, Speed Run, Puzzle Pack and more. Each tweaks the goal, the clock or the stock. Read the one-line description under each.'],
['Difficulty','Difficulty comes from the board and mode you choose, plus helpers: wild tokens, jokers, Deal-5 picks and the streak unlock.'],
['Settings & undo','Turn on card highlights, animations and deal/win effects. You get 5 undos per game and Ace will offer 5 more when they run out. Tap 💡 Hint if you are stuck.']]},
klondike:{n:'Klondike',d:['♥6 onto ♠7 ✓','A♦ → foundation ✓','K♣ into empty column ✓'],s:[
['Goal','Build four foundation piles from Ace to King, one per suit.'],
['How to play','Stack cards in the seven columns in descending order, alternating red and black. Tap the stock to draw. Only a King can fill an empty column. Drag or tap cards to move them.'],
['Boards','114 pile layouts. Choose one in the settings, roll a random one, or switch from the ⇄ bar without leaving the game.'],
['Modes','15 modes including Classic, Vegas (bankroll), Gauntlet (5 deals), Blitz (timed) and Ironman (no undo).'],
['Difficulty','Draw 1 is gentler, Draw 3 is the classic challenge. You can also limit stock passes and use jokers or wild tokens.'],
['Settings & undo','Pick the draw count, passes, helpers and animations. You get 5 undos per game, then Ace asks if you want 5 more. 💡 Hint shows a good move.']]},
freecell:{n:'FreeCell',d:['4♠ → free cell','5♥ onto 6♣ ✓','A♠ → foundation ✓'],s:[
['Goal','Move all 52 cards to the four foundations, Ace up to King by suit.'],
['How to play','Everything is dealt face up. Build columns down in alternating colors. The four free cells hold one card each — use them to unlock buried cards. You can move several cards at once if you have enough free cells.'],
['Boards','110 layouts and every deal is checked to be winnable. Pick one, roll the dice, or use the ⇄ bar in the game.'],
['Modes','15 modes: Classic, Miser (fewest undos), Rush, Chaos, Puzzle Pack and more.'],
['Difficulty','Fewer free cells or stricter build rules make it harder. Puzzle Pack gives star ratings.'],
['Settings & undo','Set free cells, build rules and multi-card moves. You get 5 undos per game and can add 5 more when asked.']]},
sudoku:{n:'Sudoku',d:['Row needs 1–9 ✓','Column needs 1–9 ✓','3×3 box needs 1–9 ✓'],s:[
['Goal','Fill the 9×9 grid so every row, column and 3×3 box contains 1–9 exactly once.'],
['How to play','Tap a cell, then pick a digit. Use ✎ Notes for pencil marks. Matching digits and conflicts are highlighted.'],
['Boards','600 boards: 25 levels with 24 boards each. Pick level and board in the settings, roll a random one, or switch from the ⇄ bar in the game.'],
['Modes','16 modes: Classic, Daily, Memory, Parity, Sudden Death, Score Attack and more.'],
['Difficulty','Levels 1 to 25 get harder as there are fewer starting digits and trickier techniques.'],
['Settings','Turn mistake checking, lives, hints and highlighting on or off, and choose your animations.']]},
sudoku2:{n:'Sudoku Shapes',d:['4×4 ✓','Jigsaw regions ✓','Diagonals ✓'],s:[
['Goal','Fill the board so every row, column and region has each symbol once. Symbols go 1–9 then A, B, C on bigger boards.'],
['How to play','Tap a cell, then a symbol. Extra rules: shaded cells are extra regions, circles are even digits, squares are odd, and chess styles forbid repeats a knight or king move apart.'],
['Boards','100 styles from 4×4 to 12×12: boxes, Latin squares, jigsaw, diagonal, windoku, anti-knight, odd-even and cut-out shapes. Use ◀ ▶ 🎲 above the board to switch.'],
['Modes','One mode with three difficulty levels: Easy, Medium and Hard.'],
['Difficulty','Easy keeps more givens, Hard keeps the fewest. Bigger boards take longer.'],
['Settings','Show mistakes, highlight matching digits, timer and win animation.']]},
mahjong:{n:'Mahjong Solitaire',d:['Free tile + free tile','Matching pair ✓','Tiles removed'],s:[
['Goal','Remove every tile by matching pairs.'],
['How to play','A tile is free when nothing sits on top and its left or right side is open. Tap two free tiles that match to remove them. Flowers and seasons match within their group.'],
['Boards','250 layouts: pyramids, diamonds, shapes, mirrors, spirals and more. Pick one or roll the dice.'],
['Modes','11 modes: Classic, Timed, Daily, Zen, Purist, Marathon and more.'],
['Difficulty','Bigger, taller layouts are harder. Timed mode uses a par clock. You can choose whether deals are always solvable.'],
['Settings','Hints, shuffles, tile labels, animations and win effects.']]},
wordsearch:{n:'Word Search',d:['C A T S','Tap word in list','Tap first then last letter ✓'],s:[
['Goal','Find every hidden word in the grid.'],
['How to play','Swipe across letters to select a word, or tap a word in the list at the bottom and then tap its first and last letter. Words run in any direction your settings allow.'],
['Boards','20 levels and 72 word themes with over 10,000 words.'],
['Modes','Classic, Themed, Time Attack, Mystery and more.'],
['Difficulty','Higher levels use bigger grids, longer words and more directions.'],
['Board shape','Boards come in 50 shapes (heart, star, ring, letters…). Words only hide inside the shape. Choose Auto for a new shape each puzzle, or pick one in Settings.'],['Settings','Board shape, directions, grid size, hints and animations.']]},
jewel:{n:'Jewels Game',d:['💎💎 swap 💎 → match 3','4 in a row → power gem','Boom!'],s:[
['Goal','Reach each level\'s target before you run out of moves.'],
['How to play','Swap two neighbouring gems to line up 3 or more of a colour. Bigger matches make power gems (Nova, X-gem, Cross) that clear huge areas. Smash stones next to matches.'],
['Boards','200 campaign levels across 10 themed worlds, plus Blitz, Endless and Daily.'],
['Modes','Campaign, Blitz, Endless, Daily and more goal types: collect gems, break stones, score.'],
['Difficulty','Later levels give fewer moves, more colours and tougher stones. A hint shows by itself after 45 seconds of no move.'],
['Board shape','Auto changes the board shape as you climb: 50 shapes like Heart, Star, Ring and Diamond. Pick any one in Settings. Gems fall inside the shape and cannot cross gaps.'],['Settings','Board shape, sound effects, boosters, hints, gem symbols and win effects.']]},
blackjack:{n:'Blackjack',d:['Dealer 6 · You 10+A = 21 ✓','Hit / Stand / Double','Split pairs'],s:[
['Goal','Beat the dealer by getting closer to 21 without going over.'],
['How to play','Place a bet, then Hit to take a card, Stand to stop, Double to double your bet for one card, or Split a pair. Face cards are 10 and an Ace is 1 or 11.'],
['Modes','11 modes: Classic, Single Deck, 6:5, Double Exposure, Tournament, Survival and more.'],
['Chips','Start with chips you choose. Run out and it is game over, or cash out any time.'],
['Settings','Starting chips, speed, 10 table looks and deal and win animations.']]},
holdem:{n:'Texas Hold\'em',d:['2 hole cards','5 community cards','Best five wins'],s:[
['Goal','Win chips by making the best five-card hand or by making everyone fold.'],
['How to play','You get two private cards. Five shared cards come in stages: flop, turn and river. Bet, check, call, raise or fold in each round.'],
['Modes','No-Limit, Limit, Tournament, Heads-Up, Turbo, Pot-Limit and more.'],
['Chips','Choose your starting chips. Lose them all and you are out, or cash out any time.'],
['Settings','Speed, table look, deal and win animations.']]},
omaha:{n:'Omaha',d:['4 hole cards','Use exactly 2','+ exactly 3 from board'],s:[
['Goal','Make the best hand using exactly two of your four hole cards and exactly three board cards.'],
['How to play','Betting works like Hold\'em. Remember the exactly-two rule when you read your hand.'],
['Modes','Pot-Limit, Limit, Tournament, Heads-Up, Big O, No-Limit and Hi-Lo.'],
['Chips','Pick your starting chips. Cash out whenever you like.'],
['Settings','Speed, table look and animations.']]},
draw:{n:'5-Card Draw',d:['5 cards','Discard & draw','Best hand wins'],s:[
['Goal','Make the best five-card hand after one draw.'],
['How to play','Bet, then choose cards to discard and draw replacements, then bet again. Video Poker mode pays by paytable instead of opponents.'],
['Modes','Classic, Deuces Wild, Joker Wild, Lowball, Heads-Up, Video Poker and more.'],
['Chips','Start with chips you pick and cash out any time.'],
['Settings','Speed, table look and animations.']]},
stud:{n:'7-Card Stud',d:['2 down, 4 up, 1 down','No shared cards','Best five of seven'],s:[
['Goal','Build the best five-card hand from your seven cards.'],
['How to play','You get two cards down, then four up and one more down, with betting rounds in between. Watch your rivals\' upcards.'],
['Modes','Classic Limit, Razz, No-Limit, Heads-Up, Deuces Wild, Tournament.'],
['Chips','Choose your starting chips. Cash out any time.'],
['Settings','Speed, table look and animations.']]},
acesup:{n:'Aces Up',d:['7♠ under K♠ → remove 7♠','A♥ is the highest','Empty column → move a card'],s:[
['Goal','Finish with only the Aces (Kings in Kings Up).'],
['Game modes','15 modes change the rules: column count, deck size, colour or any-higher removal, reserve cells, drip dealing, twins and more. Pick one in the menu.'],
['Boards','Each mode has 100 fixed boards. Pick one to replay it, or choose Random.'],
['How to play','Four cards are dealt. If a column top card has a higher card of the same suit on another column top, tap it to remove it. Aces are high.'],
['Empty columns','Select a top card, then tap an empty column (or a reserve cell) to move it there.'],
['Dealing','When stuck tap the stock or Deal to add four more cards.'],
['Settings','Ace high or low. Five undos, with an option for five more.']]},
gin:{n:'Gin Rummy',d:['7♥ 8♥ 9♥ → Run','Q♠ Q♦ Q♣ → Set','Deadwood 10 or less → Knock'],s:[
['Goal','Reach the goal score before the computer.'],
['How to play','Draw from the stock or take the top discard, then select a card and discard it. Sets (3–4 of a rank) and runs (3+ in suit, Ace low) get coloured bars.'],
['Knock','When unmatched cards total 10 or less, select a discard and press Knock. Gin means no unmatched cards and earns a bonus. An undercut gives the other player 25.'],
['Settings','Goal score and computer level.']]},
oldmaid:{n:'Old Maid',d:['K♠ K♥ → Pair discarded','Q♣ is removed','Last Queen loses'],s:[
['Goal','Do not be left holding the last Queen.'],
['How to play','Pairs are discarded automatically. Tap one of the computer\'s face-down cards to take it, then the computer takes one of yours.'],
['Settings','Computer level and speed.']]},
gofish:{n:'Go Fish',d:['Ask: any 7s?','No? Go fish!','4 of a kind = a book'],s:[
['Goal','Collect the most books of four.'],
['How to play','Tap a card in your hand to choose a rank, then press Ask. If the computer has it you take them and go again. If not, draw from the stock.'],
['Settings','Starting hand size and computer level.']]},
hop:{n:'Hop Across',d:['Dodge the cars','Ride the logs','Fill all 5 pads'],s:[['Goal','Guide five frogs across the road and the river into the pads at the top.'],['Controls','Swipe or tap the arrows to hop. Tap the screen to hop forward.'],['Dangers','Cars squash you, water drowns you, turtles dive, and later levels add snakes and crocodiles.'],['Levels','50 levels. Beat one to unlock the next from the menu.']]},
invade:{n:'Star Invaders',d:['Drag to move','Tap to fire','Hide behind shields'],s:[['Goal','Shoot every alien before they reach the bottom.'],['Controls','Drag on the screen or use ◀ ▶. Tap or hold FIRE to shoot.'],['Tips','Shields soak up shots. The mystery saucer gives bonus points. Every 10th level is a boss.'],['Levels','50 waves that get faster and fiercer.']]},
blocks:{n:'Block Drop',d:['Swipe to move','Tap to turn','Clear the lines'],s:[['Goal','Clear the number of lines shown to finish the level.'],['Controls','Use the buttons, or swipe sideways to move, down to drop faster, up to slam down, and tap to turn.'],['Hold','Tap the HOLD box to stash a piece for later.'],['Levels','50 levels, faster each time, with junk rows from level 10.']]},
chomp:{n:'Chomper Maze',d:['Eat all the dots','Big pellet = eat ghosts','New maze each level'],s:[['Goal','Eat every dot while the ghosts chase you.'],['Controls','Swipe or use the arrows. You keep moving until you turn.'],['Pellets','Big pellets scare the ghosts so you can eat them for bonus points.'],['Levels','50 different mazes with faster ghosts as you go.']]},
pong:{n:'Paddle Duel',d:['Drag your paddle','Edge hits curve the ball','Beat the CPU'],s:[['Goal','Be first to the goal score to win the level.'],['Controls','Drag anywhere to slide your paddle, or use ◀ ▶.'],['Tips','Hit with the edge of the paddle for sharper angles.'],['Levels','50 difficulty levels, with a bumper and multiball later on.']]},
capsule:{n:'Capsule Drop',d:['1 or 2 colours per piece','Match 4 of a colour','Or fill a line'],s:[['Goal','Clear the target number of cells.'],['Clearing','Cells vanish when you complete a full line or line up four or more of the same colour. Cells above fall and can chain.'],['Controls','Same as Block Drop: swipe or use the buttons; tap to turn.'],['Levels','50 levels with more colours and junk cells as you go.']]},
hopper2:{n:'Pipe Hopper 2',d:['Pluck veggies','Stomp to stun','Grab and THROW'],s:[['Goal','Reach the flag. Every 10th level a boss guards it: throw things at it 3 times.'],['Controls','◀ ▶ move, ⬆ jump, 🥕 grab or throw.'],['Heroes','Pick Marco, Lui (high jump), Toadie (fast) or Peachy (hover) in the menu.'],['Cherries','Collect 5 for star power.']]},
hopper3:{n:'Pipe Hopper 3',d:['Hold run for the P-meter','Leaf = glide and fly','Kick the shells'],s:[['Goal','Reach the end card; bosses every 10th level.'],['Controls','◀ ▶ move, hold 💨 to run, tap 💨 to spin or shoot, ⬆ to jump / fly.'],['Power-ups','🍄 big, then 🍃 leaf or 🌼 fire flower from ? blocks.'],['Enemies','Stomp a shell-walker, then kick its shell. Piranha plants hide when you stand near.']]},
brick:{n:'Brick Smash',d:['Drag the paddle','Tap to launch','Catch power-ups'],s:[['Goal','Break every coloured brick; grey ones are steel.'],['Controls','Drag or use the pad. Hit with the edge for sharper angles.'],['Power-ups','W wide, M multiball, S slow, L lasers, H extra life.']]},
rocks:{n:'Rock Blaster',d:['Rotate and thrust','Shoot the rocks','Watch for saucers'],s:[['Goal','Destroy every rock; big ones split.'],['Controls','◀ ▶ rotate, 🚀 thrust, 🔥 fire.'],['Orbs','R rapid fire, S shield.']]},
snake:{n:'Snake Feast',d:['Swipe to turn','Eat apples','Dodge skulls and walls'],s:[['Goal','Eat the target number of apples.'],['Controls','D-pad or swipe.'],['Food','🍎 grow, ⭐ bonus, ☠️ poison.']]},
guard:{n:'Sky Guard',d:['Tap to fire','Blasts chain','Protect the cities'],s:[['Goal','Stop every missile before it hits a city.'],['Controls','Tap where the blast should go; 🎯 targets the nearest.'],['Tip','Ammo is limited. Lead moving missiles.']]},
ttt:{n:'Tic-Tac-Toe Plus',d:['Tap a square to place', '3×3, 4×4 or 5×5', 'Try Misère mode'],s:[['Goal','Bigger boards, longer lines and a misère twist.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
uttt:{n:'Ultimate Tic-Tac-Toe',d:['Win three boards in a row', 'Your square picks their board', 'Free-play variant'],s:[['Goal','Nine boards in one — your move sends your rival.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
c4:{n:'Four Drop',d:['Tap a column to drop', 'Connect 3, 4 or 5', 'Pop-out removes bottom discs'],s:[['Goal','Drop discs and connect your line — with pop-out and big boards.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
reversi:{n:'Disc Flip',d:['Trap enemy discs to flip', 'Corners are strong', 'Anti: fewest wins'],s:[['Goal','Outflank and flip — plus an Anti mode where fewest wins.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
gomoku:{n:'Five in a Row',d:['Make five in a row', 'Pente: capture pairs', 'Exact-five rule'],s:[['Goal','Gomoku, exact-five and Pente captures on three board sizes.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
dots:{n:'Dots & Boxes',d:['Draw a line between dots', 'Close a box, go again', 'Avoid giving a third side'],s:[['Goal','Close boxes and chain your way to the highest score.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
mancala:{n:'Mancala',d:['Tap a pit to sow', 'Last seed in store = extra turn', 'Capture opposite pits'],s:[['Goal','Sow, steal and fill your store — Kalah and Avalanche.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
morris:{n:'Nine Men\'s Morris',d:['Place then slide', 'Mills remove a man', 'Down to three can fly'],s:[['Goal','Make mills and capture men. Six, nine and twelve men.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
hex:{n:'Hex',d:['Red: top to bottom', 'Blue: left to right', 'Bridges are strong'],s:[['Goal','Link your sides of the honeycomb. No draws possible.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
break:{n:'Breakthrough',d:['Move forward or diagonal', 'Capture diagonally', 'Reach the far edge'],s:[['Goal','Charge across the board — first to the far row wins.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
fox:{n:'Fox & Geese',d:['Geese move forward', 'Fox jumps to capture', 'Trap the fox to win'],s:[['Goal','One fox against a flock — trap it or be eaten.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
snakes:{n:'Snakes & Ladders',d:['Tap to roll', 'Ladders climb', 'Snakes slide'],s:[['Goal','The race game with three boards and dice rules.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
nim:{n:'Nim Stones',d:['Tap a stone to take it', 'Take from one row only', 'Last stone wins'],s:[['Goal','Take stones; last one wins (or loses). The hard CPU is perfect.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
konane:{n:'Konane',d:['Jump orthogonally', 'Capture by jumping', 'No jump = you lose'],s:[['Goal','Hawaiian checkers: jump to capture and out-last your rival.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
pentago:{n:'Pentago',d:['Tap a hole to place', 'Rotate a quadrant', 'Make five in a row'],s:[['Goal','Place a marble, twist a quadrant. Five in a row wins.'],['Modes','Open Menu to pick Computer or 2 players, level, and variants.'],['Tip','Use Hint when stuck and Undo to take back a move.']]},
colorrush:{n:'Color Rush',d:['Match colour or number','Use action cards','Empty your hand first'],s:[['Goal','Be first to play every card.'],['Play','Match the top card by colour, number or symbol. Wilds go on anything.'],['Actions','⊘ skip, ⇄ reverse, +2 and +4 make the next player draw.']]},
crazy8:{n:'Crazy Eights',d:['Match suit or rank','8s change suit','Empty your hand'],s:[['Goal','Play all your cards first.'],['Play','Match the top card by suit or rank.'],['Eights','An 8 is wild - you pick the next suit.']]},
snap:{n:'Snap!',d:['Watch the pile','Tap SNAP on a match','False snaps cost a card'],s:[['Goal','Win all the cards.'],['Snap','When the top two cards match rank, tap SNAP first.'],['Penalty','A false snap loses you a card.']]},
memory:{n:'Memory Match',d:['Flip two cards','Matches stay up','Fewest moves wins'],s:[['Goal','Match every pair.'],['Solo','Clear the board in the fewest moves.'],['vs Robo','A match gives another turn; most pairs wins.']]},
hilo:{n:'Hi-Lo Streak',d:['Guess higher or lower','Same rank = no change','Wrong costs a life'],s:[['Goal','Build the longest streak.'],['Play','Tap Higher or Lower for the next card.'],['Lives','Each wrong guess costs a life.']]},
accordion:{n:'Accordion',d:['Tap a pile','Tap a glowing target','Fold to one pile'],s:[['Goal','End with a single pile.'],['Moves','Move onto the pile 1 or 3 to the left if suit or rank matches.'],['Undo','Undo to try a different fold.']]},
pyramid:{n:'Pyramid',d:['Pair cards summing to 13','Kings go alone','Clear the pyramid'],s:[['Goal','Remove every card.'],['Pairs','Uncovered cards that add to 13 can be removed.'],['Stock','Tap the stock to turn a waste card.']]},
tripeaks:{n:'TriPeaks',d:['Play one up or down','Reveal covered cards','Clear all peaks'],s:[['Goal','Clear all three peaks.'],['Play','Tap an uncovered card one rank from the waste.'],['Stock','Tap the stock when stuck.']]},
clock:{n:'Clock Patience',d:['Turn the top card','Place it at its hour','Avoid the 4th king early'],s:[['Goal','Turn every card.'],['Play','Each card goes face-up under the pile for its rank.'],['Lose','The 4th king ends the game early.']]},
hearts:{n:'Hearts',d:['Follow suit','Avoid hearts and Q♠','Lowest score wins'],s:[['Goal','Finish with the lowest score.'],['Points','Each heart is 1, the Q♠ is 13.'],['Moon','Take all points to give everyone else 26.']]},
cheat:{n:'Cheat (Bluff)',d:['Claim the required rank','Lie if you must','Call bluffs'],s:[['Goal','Empty your hand first.'],['Play','Lay 1-4 cards face down and claim the rank.'],['Call','A caught liar takes the pile; a wrong call takes it.']]},
thirty1:{n:'Thirty-One',d:['Draw and discard','Best suit counts','Knock to end round'],s:[['Goal','Be last player with lives.'],['Score','Your highest single-suit total: A=11, faces=10.'],['Knock','Knock to give everyone one last turn.']]},
vpoker:{n:'Video Poker',d:['Deal five cards','Hold the best ones','Draw and win'],s:[['Goal','Make the best 5-card hand.'],['Play','Tap cards to hold, then Draw.'],['Pays','Pair of jacks or better and up.']]},
baccarat:{n:'Baccarat',d:['Pick a side','Deal','Closest to 9 wins'],s:[['Goal','Back the winning hand.'],['Values','A=1, 2-9 face, tens and faces 0.'],['Pays','Player 1:1, Banker 0.95:1, Tie 8:1.']]},
tcpoker:{n:'Three Card Poker',d:['Place an ante','See your cards','Play or fold'],s:[['Goal','Beat the dealer.'],['Play','Play bet equals your ante.'],['Dealer','Needs Q-high to qualify.']]},
roulette:{n:'Roulette',d:['Place chips on the table','Spin the wheel','Collect winnings'],s:[['Goal','Back the number or group that hits.'],['Bets','Numbers pay 35:1, dozens 2:1, outside bets 1:1.'],['Zero','Zero beats every outside bet.']]},
craps:{n:'Craps',d:['Bet the Pass Line','Roll the dice','Make your point'],s:[['Come-out','7 or 11 wins the Pass Line, 2/3/12 loses.'],['Point','Any other number becomes the point; roll it again before a 7.'],['Field','One-roll bet on 2, 3, 4, 9, 10, 11, 12.']]},
keno:{n:'Keno',d:['Pick numbers','Draw 20 balls','Match to win'],s:[['Goal','Match as many drawn numbers as you can.'],['Picks','Choose 1 to 8 numbers.'],['Pays','More hits pay a higher multiplier.']]},
sicbo:{n:'Sic Bo',d:['Place bets','Roll three dice','Triples beat Big/Small'],s:[['Goal','Predict the dice.'],['Big/Small','Total 11-17 or 4-10, but a triple loses.'],['Numbers','Pay 1:1 for each matching die.']]},
caribbean:{n:'Caribbean Stud',d:['Ante and deal','Raise or fold','Beat the dealer'],s:[['Goal','Beat the dealer\'s hand.'],['Raise','Costs 2x your ante.'],['Qualify','Dealer needs Ace-King or better.']]},
letitride:{n:'Let It Ride',d:['Three equal bets','Pull back or ride','Pair of 10s or better pays'],s:[['Goal','Make a pair of tens or better.'],['Bets','Pull back bet 1 and bet 2 if you like.'],['Pays','Up to 1000:1 for a royal flush.']]},
casinowar:{n:'Casino War',d:['Bet and deal','Higher card wins','Tie means war'],s:[['Goal','Draw a higher card.'],['Tie','Surrender for half or go to war.'],['Ace','Aces are high.']]},
reddog:{n:'Red Dog',d:['Two cards dealt','Raise or not','Third card between wins'],s:[['Goal','Third card must land between the first two.'],['Spread','Bigger gaps pay less.'],['Pair','Third match pays 11:1.']]},
bigsix:{n:'Big Six Wheel',d:['Back a symbol','Spin','Joker and Flag pay 40:1'],s:[['Goal','Guess the symbol.'],['Pays','$1 pays 1:1 up to $20 pays 20:1.'],['Joker/Flag','Pay 40:1.']]},
deuces:{n:'Deuces Wild',d:['Deal','Hold cards','Deuces are wild'],s:[['Goal','Three of a kind or better.'],['Wilds','Every 2 stands for any card.'],['Top','Four deuces pays 200x.']]},
scratch:{n:'Scratch Cards',d:['Buy a card','Scratch boxes','Match three'],s:[['Goal','Match three symbols.'],['Prizes','Up to 100x the price.'],['Reveal','Tap Reveal all to finish fast.']]},
bingo:{n:'Bingo Rush',d:['Watch the balls','Dab your card','Call BINGO!'],s:[['Goal','Complete a line.'],['Dab','Tap numbers that were called.'],['Speed','Faster bingo pays more.']]},
tycoon:{n:'Property Tycoon',d:['Roll and buy streets','Build houses on sets','Bankrupt your rivals'],s:[['Goal','Be the last player with money, or the richest at the round limit.'],['Play','Roll, move, buy properties and pay rent. Tap any space for details.'],['Build','Own all streets of a colour to build houses and raise the rent.']]},
beggar:{n:'Beggar My Neighbour',d:['Lay a card','Pay for face cards','Collect every card'],s:[['Goal','Win all the cards.'],['Face cards','J=1, Q=2, K=3, A=4 cards owed.'],['Pile','Pay in full and the opponent takes the pile.']]},
slapjack:{n:'Slapjack',d:['Watch the pile','Slap on Jacks','Wrong slap costs a card'],s:[['Goal','Win all the cards.'],['Slap','Tap SLAP when a Jack lands.'],['Penalty','A wrong slap loses a card.']]},
sevens:{n:'Sevens (Fan Tan)',d:['Start from the 7♥','Build up and down','Empty your hand first'],s:[['Goal','Play all your cards first.'],['Play','Play a 7 or a card next to a suit line.'],['Pass','Only when you have no legal card.']]},
spider:{n:'Spider Solitaire',d:['Build runs downward','Deal from the stock when stuck','Clear every run'],s:[['Goal','Stack K to A in a single suit and it leaves the table.'],['Moves','Only same-suit runs move together. Tap the stock to deal a row.'],['Boards','Pick 1, 2, 3 or 4 suits and different column counts.']]},
yukon:{n:'Yukon',d:['Move any face-up card','Build alternating colours','Fill the four foundations'],s:[['Goal','Build the four foundations from Ace to King.'],['Moves','Any face-up card can move with the cards on top of it.'],['Boards','Russian, Alaska and colour-match variants are included.']]},
thieves:{n:'Forty Thieves',d:['Move one card at a time','Build down in a suit','Fill eight foundations'],s:[['Goal','Build eight foundations from Ace to King.'],['Moves','Move one card at a time. Tap the stock to flip the waste.'],['Boards','Josephine, Number Ten, Indian and more.']]},
scorpion:{n:'Scorpion',d:['Move any card plus those below','Build in a suit','Clear four runs'],s:[['Goal','Build four King-to-Ace runs in one suit.'],['Moves','Any face-up card moves with all below it.'],['Stock','The spare cards go one each onto the first columns.']]},
bakers:{n:'Baker\'s Dozen',d:['See every card','Free the low cards','Build the foundations'],s:[['Goal','Build the four foundations from Ace to King.'],['Moves','One card at a time onto a card one rank higher.'],['Kings','Kings start at the bottom of their columns.']]},
canfield:{n:'Canfield',d:['Watch the foundation rank','Build alternating colours','Use the reserve'],s:[['Goal','Build the foundations up from the first rank turned.'],['Reserve','Only its top card moves. It refills empty piles.'],['Stock','Draw one or three at a time.']]},
eightoff:{n:'Eight Off',d:['Park cards in the cells','Build in a suit','Fill the foundations'],s:[['Goal','Build four foundations from Ace to King.'],['Cells','Each free cell holds one card.'],['Boards','Eight Off and Seahaven Towers styles.']]},
castle:{n:'Beleaguered Castle',d:['Plan every move','Build down any suit','Raise the foundations'],s:[['Goal','Build each foundation up to the King.'],['Moves','One card at a time, onto a card one rank higher.'],['Boards','Streets and Alleys, forts and strongholds.']]},
calc:{n:'Calculation',d:['Learn each pile\'s step','Park cards on waste piles','Finish all four piles'],s:[['Goal','Fill four foundations, each counting by its own step.'],['Moves','Place the turned card on a foundation or a waste pile.'],['Boards','Different step patterns and waste piles.']]},
simon:{n:'Simple Simon',d:['Everything is visible','Build same-suit runs','Clear all four suits'],s:[['Goal','Complete four King-to-Ace runs.'],['Moves','Same-suit runs move together.'],['Boards','Staircase shapes of every size.']]},
g2048:{n:'2048',d:['Swipe to slide every tile','Equal tiles merge','Reach the target tile'],s:[['Goal','Merge equal tiles until you make the target tile.'],['Moves','Swipe or use arrow keys. All tiles slide at once.'],['Variants','Change the board size, the target and which tiles appear.']]},
mines:{n:'Minesweeper',d:['Numbers count nearby mines','Flag the mines you find','Open every safe square'],s:[['Goal','Open every square that is not a mine.'],['Flags','Use the Flag button or press and hold to flag.'],['Lives','Pick 3 lives to survive a mistake.']]},
lights:{n:'Lights Out',d:['Tap flips nearby lights','Turn every light off','Use Hint if you are stuck'],s:[['Goal','Switch every light off.'],['Patterns','Plus, diagonal, row and column, or knight jumps.'],['Solvable','Every board can be solved.']]},
slide:{n:'Sliding Tiles',d:['Slide tiles into the gap','Put the numbers in order','Peek shows the goal'],s:[['Goal','Arrange tiles 1 to N with the gap bottom-right.'],['Slides','Tap a tile in the gap row or column to slide several.'],['Scramble','Light, normal or heavy.']]},
hanoi:{n:'Tower of Hanoi',d:['Move one disc at a time','Never big on small','Move the tower to the last peg'],s:[['Goal','Move every disc to the last peg.'],['Rule','A bigger disc can never sit on a smaller one.'],['Variants','Four pegs or adjacent-only moves.']]},
echo:{n:'Pattern Echo',d:['Watch the pads light up','Repeat the pattern','Each round gets longer'],s:[['Goal','Repeat longer and longer patterns.'],['Modes','Growing, reverse, or a fresh pattern each round.'],['Lives','Allow mistakes to replay the pattern.']]},
nono:{n:'Nonogram',d:['Numbers give run lengths','Fill the black squares','Mark the empty ones'],s:[['Goal','Fill squares to match every clue.'],['Tools','Switch between Fill and Mark. Drag to paint lines.'],['Mistakes','Show them instantly or check at the end.']]},
flood:{n:'Flood Fill',d:['Pick a colour to flood','Grow your area','Fill the board in time'],s:[['Goal','Make the entire board one colour.'],['Moves','Each tap floods your area with that colour.'],['Limit','You have a fixed number of moves.']]},
code:{n:'Code Breaker',d:['Build a guess and check','Black: right colour and place','White: right colour wrong place'],s:[['Goal','Find the secret code before you run out of guesses.'],['Clues','Black pegs are exact, white pegs are misplaced.'],['Variants','Choose code length, colours and repeats.']]},
water:{n:'Water Sort',d:['Tap a tube then a target','Pour onto the same colour','Fill each tube with one colour'],s:[['Goal','Every tube is full of one colour or empty.'],['Pouring','Pour onto a matching top colour or an empty tube.'],['Blind','Only the top layer is visible.']]},
pipe:{n:'Pipe Connect',d:['Tap a tile to rotate it','Connect every pipe to the source','No open ends allowed'],s:[['Goal','Connect all pipes to the water source.'],['Rotate','Tap to rotate. Hold to lock a tile.'],['Wrap','Edges can connect to the opposite side.']]},
peg:{n:'Peg Solitaire',d:['Jump a peg over a peg','The jumped peg disappears','Finish with a single peg'],s:[['Goal','Leave one peg on the board.'],['Boards','English, European, triangle, plus and diamond.'],['Jumps','Straight, or diagonal in the extra variant.']]},
takuzu:{n:'Takuzu',d:['No three in a row','Equal 0s and 1s per line','No identical rows'],s:[['Goal','Fill every square with 0 or 1.'],['Rules','No three alike in a row, equal counts, unique lines.'],['Tap','Tap cycles empty, 0, 1.']]},
futo:{n:'Futoshiki',d:['1 to N in every row and column','Obey the inequality signs','Use pencil notes'],s:[['Goal','Fill the grid with no repeats in rows or columns.'],['Signs','The open side of a sign points to the larger number.'],['Notes','Pencil mode keeps small notes.']]},
sky:{n:'Skyscrapers',d:['Taller buildings hide shorter','Clues count visible buildings','No repeats in a line'],s:[['Goal','Fill 1 to N so every clue is right.'],['Clues','The number tells how many towers you can see.'],['Check','Clues turn green when satisfied.']]},
shik:{n:'Shikaku',d:['Each rectangle has one number','The number is its area','Cover the whole grid'],s:[['Goal','Cover the grid with rectangles.'],['Draw','Drag across squares. Tap a rectangle to remove it.'],['Check','Wrong areas are flagged.']]},
m24:{n:'Make 24',d:['Use every number once','Combine two numbers at a time','Reach the target'],s:[['Goal','Combine every number to make the target.'],['Moves','Tap a number, an operator, then another number.'],['Sets','Solve 1, 5 or 10 puzzles against the clock.']]},
ten:{n:'Ten Pairs',d:['Match equal or sum to ten','Pairs need a clear path','Add rows when stuck'],s:[['Goal','Clear every number.'],['Pairs','Equal numbers or numbers that add up to ten.'],['Refill','Add rows copies the remaining numbers.']]},
maze:{n:'Maze Runner',d:['Steer to the flag','Swipe to run along corridors','Fog hides the walls'],s:[['Goal','Reach the flag in the bottom-right.'],['Move','Arrow pad, swipe or keys.'],['Fog','Only squares near you are visible.']]},
queens:{n:'Queens',d:['One queen per row and column','One per colour region','Queens may not touch'],s:[['Goal','Place a queen in every row, column and region.'],['Marks','Tap once for ✕, twice for a queen.'],['Classic','Or play the classic no-attack puzzle.']]},
calcu:{n:'Calcudoku',d:['1 to N in every line','Boxes show a target','Use + − × ÷'],s:[['Goal','Fill the grid so every box hits its target.'],['Boxes','The small label gives the target and operation.'],['Variants','Choose operations and box size.']]},
soko:{n:'Box Pusher',d:['Push crates onto targets','You can only push','Plan before you move'],s:[['Goal','Put every crate on a target.'],['Move','Arrow pad, swipe or arrow keys.'],['Stuck','Undo or restart the level.']]},
twist:{n:'Tile Twist',d:['Tap a dot to rotate four tiles','Restore the order','Peek at the goal'],s:[['Goal','Put the tiles in order.'],['Twist','Each dot rotates the 2×2 block around it.'],['Look','Numbers, colour ramp, or both.']]},
hitori:{n:'Hitori',d:['Shade repeated numbers','Shaded squares never touch','Keep unshaded squares joined'],s:[['Goal','No number repeats among unshaded squares in a line.'],['Rules','Shaded squares cannot touch and white squares stay connected.'],['Tap','Shade, circle, then clear.']]},
fillpix:{n:'Fill-a-Pix',d:['Numbers count filled squares nearby','The count includes the square itself','Fill until every clue is right'],s:[['Goal','Satisfy every number clue.'],['Clues','Each counts the filled squares in the 3×3 block.'],['Status','Clues turn green when correct.']]},
yacht:{n:'Yacht',d:['Hold dice and re-roll','Fill one box each turn','Beat the bonus line'],s:[['Goal','Fill every box on the sheet for the highest score.'],['Rolls','Roll up to three times and hold the dice you like.'],['Variants','Choose the sheet, rolls, bonus and Yacht value.']]},
farkle:{n:'Farkle',d:['Set aside scoring dice','Roll again or bank','No scoring dice means Farkle'],s:[['Goal','Reach the target score before the others.'],['Risk','Bank your turn total or roll the rest.'],['Hot dice','Score with every die to roll all six again.']]},
pig:{n:'Pig',d:['Roll to add to your turn','Hold to bank','A 1 loses the turn'],s:[['Goal','Be first to the target score.'],['Hold','Bank your turn total at any time.'],['Variants','Play with one or two dice.']]},
shutbox:{n:'Shut the Box',d:['Shut tiles that sum to the roll','Shut them all to win','Low leftover is best'],s:[['Goal','Shut every tile, or leave the lowest total.'],['Move','Pick tiles that add up to the roll.'],['Variants','Boards of 9, 10 or 12 tiles.']]},
liars:{n:'Liar\'s Dice',d:['Peek at your own dice','Raise the bid or call','Lose a die when wrong'],s:[['Goal','Be the last player with dice.'],['Bids','Claim how many of a value are on the table.'],['Wilds','Ones can count as any value.']]},
scc:{n:'Ship, Captain & Crew',d:['Find 6, then 5, then 4','Keep them locked','Cargo is the other two dice'],s:[['Goal','Score the biggest cargo over the rounds.'],['Order','You need 6, 5 and 4 in that order.'],['Rolls','Three rolls to build your crew.']]},
pokerd:{n:'Poker Dice',d:['Hold and re-roll','Build the best hand','Highest hand wins'],s:[['Goal','Win the most rounds.'],['Hands','Five of a kind beats four, full house, straight and more.'],['Wilds','Optionally play with wild ones.']]},
bunco:{n:'Bunco',d:['Roll three dice','Score each die matching the round','Three of a kind is Bunco'],s:[['Goal','Win the most rounds or reach the target.'],['Scoring','One point per matching die; three is Bunco.'],['Rounds','The target number goes up each round.']]},
beetle:{n:'Beetle',d:['Roll the number you need','Add the body part','First finished wins'],s:[['Goal','Finish the beetle before the others.'],['Parts','Each number adds one body part.'],['Order','Build in order or in any order.']]},
mexico:{n:'Mexico',d:['Roll your best number','Beat the previous player','Lowest roll loses a life'],s:[['Goal','Be the last player with lives.'],['Ranking','Mexico (2-1) beats doubles, then high numbers.'],['Limits','Choose how many rolls a turn may use.']]},
lcr:{n:'Left Center Right',d:['Roll one die per chip','Pass chips on L, C, R','Last player with chips wins'],s:[['Goal','Be the last player holding chips.'],['Dice','L passes left, R right, C to the pot, dots keep.'],['Variants','Classic or the steal variant.']]},
skunk:{n:'Skunk',d:['Roll to build the pot','Bank before a 1','A skunk costs the round'],s:[['Goal','Have the most points after the rounds.'],['Skunk','Roll a 1 and you lose the round score.'],['Banking','Stay in or bank before the next roll.']]},
golfd:{n:'Dice Golf',d:['Pick the number of dice','Land exactly on the hole','Fewest strokes wins'],s:[['Goal','Finish the course in the fewest strokes.'],['Dice','Roll more dice to travel further.'],['Overshoot','Go past the hole and you bounce back.']]},
qwixx:{n:'Qwixx Solo',d:['Cross numbers left to right','More crosses score more','Penalties cost points'],s:[['Goal','Reach the goal score before the game ends.'],['Rows','Colour rows run up or down.'],['Locks','Lock rows to end the game sooner.']]},
ludo:{n:'Dice Race Ludo',d:['Roll a six to leave the yard','Race round the ring','Capture rivals on the way'],s:[['Goal','Get every token home first.'],['Start','A six brings a token on the board.'],['Variants','Exact finish, captures and bonus rolls.']]},
threes:{n:'Threes',d:['Keep at least one die','Threes count zero','Lowest total wins'],s:[['Goal','Win the most rounds with the lowest total.'],['Rolls','Keep dice and re-roll the rest.'],['Variants','Choose which face counts as zero.']]},
chicago:{n:'Chicago',d:['Roll the round number','Spend a token to re-roll','Highest score wins'],s:[['Goal','Score the most points over all rounds.'],['Hits','Two dice must total the round number.'],['Tokens','Spend tokens for re-rolls.']]},
dwar:{n:'Dice War',d:['Choose attack dice','Higher dice win','Destroy the enemy army'],s:[['Goal','Wipe out the enemy army.'],['Combat','Compare the highest dice pair by pair.'],['Ties','Ties favour the defender or cost both.']]},
ceelo:{n:'Cee-lo',d:['4-5-6 wins at once','Triples beat points','1-2-3 loses at once'],s:[['Goal','Finish with more chips than you started.'],['Hands','Triples, pair plus a point, 4-5-6 and 1-2-3.'],['Bets','Pick a bet size and number of rounds.']]},
dmerge:{n:'Dice Merge',d:['Place the next die','Merge matching groups','Sixes clear for a bonus'],s:[['Goal','Score as much as you can before the grid fills.'],['Merges','Matching dice that touch merge into the next number.'],['Chains','Merges can trigger more merges.']]},
tenzi:{n:'Tenzi',d:['Roll the free dice','Hold matching numbers','Get them all the same'],s:[['Goal','Hold every die on one number as fast as you can.'],['Holds','Tap matching dice to hold them.'],['Clock','The timer starts on your first roll.']]},
knuckle:{n:'Knucklebones',d:['Place each roll in a column','Matches multiply','Smash the opposite column'],s:[['Goal','Finish with the higher total.'],['Scoring','A column multiplies each matching die.'],['Smash','Matching dice in the opposite column are destroyed.']]},
dbingo:{n:'Dice Bingo',d:['Roll two dice','Mark a matching number','Complete lines first'],s:[['Goal','Complete the required lines before the CPU.'],['Marks','Totals mark your card; you choose which square.'],['Variants','One line, two lines or blackout.']]},
dice21:{n:'Dice 21',d:['Hit or stand','Do not go over','Beat the dealer'],s:[['Goal','End the hands with more chips than you started.'],['Dealer','The dealer rolls until their stand total.'],['Double','Double your bet for one more roll.']]},
fifteens:{n:'Fifteens',d:['Hold dice and re-roll','Groups that total 15 score','Bank before rolls run out'],s:[['Goal','Reach the goal total over the rounds.'],['Scoring','Two points for every group that hits the total.'],['Bonus','Optional points for pairs.']]},
react:{n:'Reaction Time',d:['Wait for the screen to turn green','Tap as fast as you can','Average your tries'],s:[['Goal','Get the lowest average reaction time.'],['Modes','Classic, decoy colours, or left-or-right.'],['Early taps','Redo the try or add 300 ms.']]},
whack:{n:'Whack-a-Mole',d:['Tap each mole that pops up','Chain hits for a combo','Avoid the bombs'],s:[['Goal','Score the most points.'],['Modes','Timed, Survival with 3 lives, or Frenzy.'],['Combo','Every 5 hits in a row adds a bonus point.']]},
aim:{n:'Aim Trainer',d:['Tap each target as it appears','Misses cost half a second','Lowest time wins'],s:[['Goal','Clear all the targets in the shortest time.'],['Modes','Pop-up, moving, or shrinking targets.'],['Size','Large, medium or small targets.']]},
stroop:{n:'Colour Clash',d:['Read the word and the ink','Tap the colour asked for','Streaks earn bonus points'],s:[['Goal','Score the most correct answers.'],['Questions','Name the ink, the word, or a mix.'],['Wrong answers','Lose a point, 3 seconds, or the run.']]},
oddc:{n:'Odd One Out',d:['Look for the odd tile','Tap it to level up','Boards grow and differences shrink'],s:[['Goal','Reach the highest level.'],['Modes','Timed 60 s, 3 lives, or a 15-level sprint.'],['Looks','Shade, hue or similar emoji.']]},
nummem:{n:'Number Memory',d:['Study the string as it flashes','Type it from memory','Each win adds a character'],s:[['Goal','Remember the longest string.'],['Characters','Digits, letters, or both.'],['Lives','1 or 3 chances.']]},
chimp:{n:'Chimp Memory',d:['Look at the numbered squares','Tap them from 1 upward','The rest hide as you start'],s:[['Goal','Clear the biggest board.'],['Modes','Hide on first tap, flash then hide, or letters.'],['Strikes','A wrong tap gives a fresh board.']]},
typing:{n:'Speed Typist',d:['Type the highlighted text','Wrong keys count as errors','Finish with a good WPM'],s:[['Goal','Type quickly and accurately.'],['Modes','Timed words, full phrases, or a letter drill.'],['Score','WPM, or time in the drill.']]},
tapspd:{n:'Tap Storm',d:['Tap as fast as you can','Alternate hands in Alternate mode','Chase the lit pad in Lit pads'],s:[['Goal','Land the most taps.'],['Modes','Single button, alternate hands, or lit pads.'],['Time','5, 10, 20 or 30 seconds.']]},
mathsp:{n:'Math Sprint',d:['Read the sum','Type the answer','It checks as you type'],s:[['Goal','Answer as many as possible.'],['Modes','Timed, Survival, or Race to 20.'],['Skip','Skipping counts as a miss.']]},
schulte:{n:'Number Hunt',d:['Find the next number','Tap it in order','Beat your best time'],s:[['Goal','Tap every number in order, fast.'],['Orders','Up, down, or alternating red and black.'],['Penalty','Wrong taps can add time.']]},
rhythm:{n:'Beat Tapper',d:['Watch the notes slide in','Tap as one touches the line','Keep the groove going'],s:[['Goal','Score the most points for timing.'],['Modes','On the beat, pattern, or off the beat.'],['Windows','Wide, normal or tight timing.']]},
stack:{n:'Tower Stack',d:['Tap to drop the block','Overhang is sliced off','Build as high as you can'],s:[['Goal','Stack the most floors.'],['Modes','Classic, perfect regrow, or precision.'],['Perfect','A perfect drop keeps the full width.']]},
stopline:{n:'Stop the Line',d:['Watch the marker slide','Tap to stop it in the zone','Dead centre scores most'],s:[['Goal','Collect the most points.'],['Modes','Steady, shrinking, speed-up, or drifting zone.'],['Scoring','Up to 100 points per round.']]},
mirror:{n:'Mirror Match',d:['Study the target shape','Pick the matching option','Rotate it in your head'],s:[['Goal','Answer as many as you can.'],['Tasks','Find the rotation, the mirror, or the odd one.'],['Length','10, 20 rounds or 60 seconds.']]},
nback:{n:'N-Back',d:['Watch the squares and letters','Press Match on an N-back repeat','Stay sharp until the end'],s:[['Goal','Get the highest balanced accuracy.'],['Tracks','Position, letter, or both at once.'],['Score','Hits and correct rests count.']]},
qcount:{n:'Quick Count',d:['Watch the dots flash','Pick how many you saw','Faster flashes are harder'],s:[['Goal','Get the most counts right.'],['Modes','Count all, count the red, or compare two sides.'],['Flash','0.5, 1 or 2 seconds.']]},
anagram:{n:'Anagram Rush',d:['Tap letters in order','Tap placed letters to undo','Use shuffle or a hint if stuck'],s:[['Goal','Solve as many words as possible.'],['Modes','Timed 90 s, race 10 words, or relaxed.'],['Themes','Animals, food, nature, home or mixed.']]},
bigger:{n:'Bigger or Smaller',d:['Read the two values','Tap the bigger or smaller one','Close calls are the hard ones'],s:[['Goal','Pick correctly, quickly.'],['Compare','Decimals, fractions, small sums, or mixed.'],['Modes','Timed, 3 lives, or race to 20.']]},
dodge:{n:'Lane Dodge',d:['Tap left or right to switch lanes','Dodge every barrier','Collect coins for bonus points'],s:[['Goal','Travel as far as you can.'],['Modes','Classic run, coin rush, or night drive.'],['Crashes','None, or two grace crashes.']]},
wguess:{n:'Word Guess',d:['Type a real word and press enter','Green is right, yellow is misplaced','Solve it in as few guesses as you can'],s:[['Goal','Find the hidden word within your guesses.'],['Modes','Classic, Hard (reuse clues), Daily (same word for everyone today) or Blind (counts only).'],['Board','Pick 4 to 7 letters and 4 to 8 guesses.']]},
wmulti:{n:'Multi Guess',d:['Every guess plays on every board','Use the clues across boards','Solve them all before guesses run out'],s:[['Goal','Solve every board.'],['Modes','Classic, one board at a time, or a 3-minute timer.'],['Boards','2 to 4 boards with 4 to 6 letter words.']]},
wjotto:{n:'Letter Lock',d:['Guess a real word','See how many letters match','Use the notes row to track letters'],s:[['Goal','Find the secret word.'],['Clue','Number of shared letters, plus exact places in Count + place mode.'],['Notes','Tap a letter to mark it in or out.']]},
whang:{n:'Hangman',d:['Tap letters to guess','Wrong letters add to the drawing','Hints cost a life'],s:[['Goal','Reveal the word before you run out of lives.'],['Modes','Single word, survival streak, or a 5-word race.'],['Settings','Category, lives and word length.']]},
wwheel:{n:'Phrase Wheel',d:['Spin and pick a consonant','Buy vowels or solve the phrase','Avoid bankrupt wedges'],s:[['Goal','Bank the most cash across rounds.'],['Wheel','Friendly, classic or risky wedges.'],['Solving','Tap Solve and type the missing letters.']]},
wcrypt:{n:'Cryptogram',d:['Tap a coded letter','Type the letter you think it is','Solve the whole saying'],s:[['Goal','Decode the saying as fast as you can.'],['Cipher','Letters or numbers.'],['Help','Hints reveal a letter and live mistake highlighting can be switched off.']]},
wladder:{n:'Word Ladder',d:['Tap a tile then a letter','Every step must be a real word','Reach the target in few moves'],s:[['Goal','Get from the start word to the target.'],['Modes','Classic, par + 2 limit, or timed.'],['Hints','Shows the next word on a shortest ladder.']]},
wpyr:{n:'Word Shrink',d:['Use the letters of the last word','Remove or add exactly one','Reach the end of the chain'],s:[['Goal','Walk the chain from a long word down to four letters, or build up.'],['Rule','Rearranging is allowed and every step is a real word.'],['Hints','Reveal the first letter for 10 seconds.']]},
wboggle:{n:'Letter Grid',d:['Drag across touching letters','Release to submit the word','Long words score more'],s:[['Goal','Score the most points.'],['Modes','Classic, score target, or find a hidden long word.'],['Boards','3×3 to 6×6 grids with timers.']]},
wbee:{n:'Honey Words',d:['Use the gold letter in every word','Find the pangram using every letter','Climb from Beginner to Genius'],s:[['Goal','Reach the top rank.'],['Modes','Free play, timed, or reach Amazing.'],['Scoring','Longer words score more; pangrams earn a bonus.']]},
wbuild:{n:'Word Builder',d:['Tap tiles to spell a word','Each tile is used once','Find the big word'],s:[['Goal','Find as many words as you can.'],['Modes','Timed, find 10 words, or use every letter.'],['Rack','6 to 9 letters.']]},
wcount:{n:'Longest Word',d:['Choose vowels or consonants','Find the longest word','Compare with the best possible'],s:[['Goal','Score the most points over the rounds.'],['Letters','Choose them yourself, random, or few vowels.'],['Scoring','Word length; using every tile doubles it.']]},
wbomb:{n:'Word Bomb',d:['Read the letters on the bomb','Type a word that contains them','Beat the fuse'],s:[['Goal','Stay alive as long as possible.'],['Modes','Survival, duel against the computer, or a 15-word sprint.'],['Settings','Letter difficulty, fuse length and lives.']]},
wchain:{n:'Word Chain',d:['Start with the last letter shown','No repeats allowed','Outlast the computer'],s:[['Goal','Never get stuck.'],['Modes','Versus computer, solo chain, or last two letters.'],['Settings','Word length, turn timer and computer skill.']]},
wvowel:{n:'Missing Vowels',d:['Look at the consonants','Work out the word','Type it or pick it'],s:[['Goal','Solve as many as possible.'],['Answer','Type it or pick from 4.'],['Modes','Timed, survival or race.']]},
wgap:{n:'Fill the Gaps',d:['Look at the blanks','Type the missing letters','Any valid word works'],s:[['Goal','Complete as many words as possible.'],['Blanks','Choose how many and what kind.'],['Modes','Timed, survival or race.']]},
whid:{n:'Hidden Words',d:['Look through the strip','Tap the first and last letter','Find every hidden word'],s:[['Goal','Find the hidden words.'],['Direction','Forwards, backwards or both.'],['Modes','Timed, survival or race.']]},
wspell:{n:'Spelling Check',d:['Read the choices','Pick the right or wrong spelling','Keep your streak going'],s:[['Goal','Answer as many as possible.'],['Tasks','Pick the correct spelling or spot the mistake.'],['Modes','Timed, survival or race.']]},
wodd:{n:'Category Clash',d:['Read the words','Tap the odd one out','Hard mode uses similar topics'],s:[['Goal','Spot the intruder quickly.'],['Difficulty','Easy uses very different themes; hard uses related ones.'],['Modes','Timed, survival or race.']]},
wsort:{n:'Theme Sort',d:['Read the word','Tap its group','Beat the clock'],s:[['Goal','Sort quickly and correctly.'],['Groups','2 to 4 groups.'],['Modes','Timed, no hurry, or race.']]},
wrecall:{n:'Word Recall',d:['Study the words','Tap the ones you saw','Each level adds one'],s:[['Goal','Reach the highest level.'],['Recall','Any order or in order.'],['Modes','Endless, five levels, or relaxed.']]},
wrain:{n:'Word Rain',d:['Type the first letter to lock on','Finish the word to clear it','Do not let words land'],s:[['Goal','Score the most points.'],['Modes','Survival, timed, or single letters.'],['Settings','Speed, word length and strict typing.']]},
watoz:{n:'A to Z Sprint',d:['Read the letter','Type a matching word','Clear the whole alphabet'],s:[['Goal','Clear all the letters fast.'],['Rule','Words start with, end with or contain the letter.'],['Modes','Race or timed.']]},
walpha:{n:'Alphabet Order',d:['Look at the words','Tap them in order','Mind the shared letters'],s:[['Goal','Sort rounds quickly.'],['Order','A to Z or Z to A.'],['Words','Different or same first letters.']]},
whalv:{n:'Word Halves',d:['Flip a blue and an orange card','Match the two halves of a word','Clear the board'],s:[['Goal','Match every word.'],['Modes','Fewest moves, timed, or shuffle on a miss.'],['Board','12 to 30 cards.']]},
zcap:{n:'Capital Quest',d:['Read the country or capital','Tap the matching answer','Keep your streak going'],s:[['Region','World or one continent.'],['Direction','Country to capital, or reverse.'],['Choices','3, 4 or 6 answers.']]},
zflag:{n:'Flag Finder',d:['Look at the flag','Tap the right country','Or find the flag for a name'],s:[['Region','World or one continent.'],['Direction','Flag to name, or name to flag.'],['Choices','3, 4 or 6 answers.']]},
zcont:{n:'Continent Sort',d:['See a country, flag or capital','Tap its continent','Beat the clock'],s:[['Continents','4 or all 6.'],['Show','Country name, flag or capital.']]},
zstate:{n:'US States',d:['Read the state or answer','Tap the match','Go for a streak'],s:[['Quiz on','Capitals, postal codes or both.'],['Direction','State to answer, or reverse.'],['Choices','3, 4 or 6.']]},
zelem:{n:'Element Match',d:['Read the symbol, name or number','Pick the match','Climb to harder sets'],s:[['Elements','First 20, 36 or 54.'],['Match','Symbol, name or atomic number.']]},
zroman:{n:'Roman Numerals',d:['Read the numeral','Pick or type the number','Or write a number in Roman'],s:[['Range','Up to 20, 100, 500 or 3999.'],['Answer','Choices or typed.']]},
zbase:{n:'Number Bases',d:['Read the number','Convert it','Pick the answer'],s:[['Base','Binary, octal or hex.'],['Size','3 to 8 bits.']]},
zclock:{n:'Clock Reader',d:['Read the hour and minute hands','Pick the time','Faster with practice'],s:[['Precision','Hours down to single minutes.'],['Format','12-hour or 24-hour.']]},
ztime:{n:'Time Math',d:['Read the time and duration','Work out the result','Mind the midnight wrap'],s:[['Question','Add, subtract or duration.'],['Step','5, 15 or 30 minutes.']]},
zcal:{n:'Calendar Whiz',d:['Read the date','Pick weekday, leap or day count','Use Doomsday tricks'],s:[['Question','Weekday, leap year or days in month.'],['Era','Modern, 1900-2100 or far.']]},
zunit:{n:'Unit Convert',d:['Read the units','Type the result on the keypad','Press OK'],s:[['Units','Length, mass, volume or temperature.'],['Difficulty','Whole numbers or decimals.']]},
zpct:{n:'Percent Pro',d:['Read the question','Type or pick the answer','Mental maths wins'],s:[['Type','Percent of, sale, tip, increase.'],['Percent set','Easy, 5s and 10s, or any.']]},
zfrac:{n:'Fraction Sums',d:['Read the fraction sum','Pick the lowest-terms answer','Watch the denominators'],s:[['Task','Simplify, add, multiply or mixed.'],['Denominators','Up to 6, 10 or 12.']]},
zprime:{n:'Prime Time',d:['Read the number','Decide prime or not','Pick the next prime'],s:[['Question','Yes/no, which, not, or next prime.'],['Range','Up to 30, 100, 500 or 2000.']]},
zseq:{n:'Sequence Solver',d:['Study the sequence','Find the rule','Give the next number'],s:[['Pattern','Arithmetic, geometric, squares, Fibonacci.'],['Terms','4 to 6 shown.']]},
zest:{n:'Estimation Station',d:['Round the numbers','Estimate the result','Pick the closest'],s:[['Operation','Multiply, add, divide or mixed.'],['Size','2, 3 or 4 digit numbers.']]},
zcolor:{n:'Colour Names',d:['Look at the swatch','Pick its name','Or find the swatch for a name'],s:[['Palette','Basic 8, 16 or all 28.'],['Direction','Swatch to name, or name to swatch.']]},
zemoji:{n:'Emoji Riddles',d:['Read the emoji','Work out the phrase','Pick or type it'],s:[['Answer','Choices or typed.']]},
zmorse:{n:'Morse Code',d:['Read the dots and dashes','Pick the letter','Or find the Morse for it'],s:[['Direction','Decode, encode or mixed.'],['Length','1 to 3 symbols.']]},
znato:{n:'NATO Alphabet',d:['Read the letter or word','Pick its partner','Learn the whole alphabet'],s:[['Letters','A-M, N-Z or all.'],['Direction','Letter to word, or reverse.']]},
zanim:{n:'Animal Class',d:['Look at the animal','Pick its class','Learn the groups'],s:[['Classes','2, 4 or all 6.'],['Show','Emoji, name or both.']]},
zshape:{n:'Shape Spotter',d:['Look at the polygon','Pick the answer','Use (n-2) x 180'],s:[['Question','Name, sides, angle sum, interior angle.'],['Max sides','6, 8 or 10.']]},
zcomp:{n:'Compass Turns',d:['Read the start direction','Follow each turn','Pick where you face'],s:[['Directions','4 or 8.'],['Turns','1 to 3 turns.']]},
zchange:{n:'Make Change',d:['Read the price and payment','Work out the change','Type or pick it'],s:[['Price','Up to $10, $20 or $100.'],['Cents','Whole dollars, quarters or any.']]},
znote:{n:'Note Reader',d:['Look at the note on the staff','Tap its letter name','Learn both clefs'],s:[['Clef','Treble, bass or both.'],['Range','On the staff or with ledger lines.']]},
mdigit:{n:'Digit Span',d:['Watch the digits','Type them back','Each level adds one'],s:[['Recall','Forward, backward or sorted.'],['Shown','All at once or one by one.']]},
mletter:{n:'Letter Span',d:['Watch the letters','Type them back','Each level adds one'],s:[['Recall','Forward or backward.'],['Letters','Consonants or all.']]},
msimon:{n:'Simon Echo',d:['Watch the pads','Tap them back','Sequence grows'],s:[['Pads','4, 6 or 9.'],['Repeat','Same or reverse order.']]},
mflash:{n:'Grid Flash',d:['Watch the lit squares','Tap them all','Bigger each level'],s:[['Grid','3×3 up to 6×6.'],['Shown','Together or one at a time.']]},
mmirror:{n:'Mirror Memory',d:['Study the pattern','Apply the transform','Tap the new squares'],s:[['Transform','Mirror, flip, rotate or mixed.']]},
mpath:{n:'Path Trace',d:['Watch the trail','Tap it in order','Trail grows'],s:[['Trail','Connected steps or jumps.'],['Retrace','Forward or backward.']]},
mmiss:{n:'Missing Item',d:['Study the pictures','See what vanished','Pick the missing ones'],s:[['Theme','Mixed, food, animals or things.'],['Missing','One or two items.']]},
mchange:{n:'Spot the Change',d:['Study the board','See the new board','Tap what changed'],s:[['Changes','1, 2 or 3 pieces.']]},
memoji:{n:'Emoji Recall',d:['Watch the pictures','Find them among decoys','Tap every one you saw'],s:[['Theme','Mixed, food, animals or things.']]},
mshop:{n:'Shopping List',d:['Read the list','Pick the items','No peeking'],s:[['Items','Food, household, mixed or nature.']]},
mpos:{n:'Position Recall',d:['Study the grid','See the hidden square','Pick what was there'],s:[['Contents','Emoji, digits or letters.']]},
mwhere:{n:'Where Was It',d:['Study the board','See which picture is asked','Tap its square'],s:[['Board','3×3 up to 6×6.']]},
mcount:{n:'Count Recall',d:['Watch the field','Count one kind','Pick or type'],s:[['Kinds','2, 3 or 4.'],['Field','Small or large.']]},
mtotal:{n:'Running Total',d:['Watch the numbers','Add them up','Type the total'],s:[['Signs','Plus only or plus and minus.']]},
mhilo:{n:'Card Counter',d:['Watch the cards','Keep the count','Type the total'],s:[['System','Hi-Lo, colour or aces.']]},
mstream:{n:'Stream Count',d:['Watch the stream','Count the target','Answer at the end'],s:[['Stream','Emoji, letters or digits.']]},
mpair:{n:'Word Pairs',d:['Study the pairs','See one half','Pick its partner'],s:[['Pairs','Word, number or emoji pairs.']]},
mname:{n:'Name Tags',d:['Meet the guests','Get asked about one','Pick the answer'],s:[['Asked','Job, city or mixed.']]},
mcode:{n:'Symbol Codes',d:['Study the key','Decode the message','Type or tap'],s:[['Symbols','3, 5, 7 or 9.']]},
mshade:{n:'Colour Shade',d:['Study the colour','Find it again','Shades get closer'],s:[['Colours','Any, grey, warm or cool.']]},
mcard:{n:'Card Recall',d:['Watch the cards','Tap them in order','Run grows'],s:[['Cards','Any, number or picture.']]},
marrow:{n:'Arrow Trail',d:['Watch the arrows','Tap them back','Run grows'],s:[['Directions','4 or 8 arrows.']]},
mshape:{n:'Shape Order',d:['Watch the shapes','Tap them back','Palette grows'],s:[['Palette','4, 6 or 8 shapes.']]},
mnback:{n:'N-Back',d:['Watch the stream','Tap Match on a repeat','Balanced score'],s:[['N','1, 2 or 3 steps back.'],['Stimulus','Position, letter or both.']]},
mmatch:{n:'Memory Pairs',d:['Flip two cards','Remember where they are','Clear the board'],s:[['Modes','Classic, clock, limited or peek.']]},
xadd:{n:'Add Sprint',d:['Read the sum','Pick or type the total','Beat the clock'],s:[['Digits','1 to 4 digits.'],['Numbers','2, 3 or 4 added.']]},
xsub:{n:'Subtract Sprint',d:['Read the sum','Answer it','Mind the signs'],s:[['Answers','Never negative, or may be.']]},
xmul:{n:'Times Tables',d:['Read the question','Answer it','Learn the tables'],s:[['Tables','5, 9, 12 or 20.']]},
xdiv:{n:'Division Drills',d:['Read the division','Give the answer asked','Watch remainders'],s:[['Remainders','Exact, quotient or remainder.']]},
xsq:{n:'Squares & Roots',d:['Read the number','Square or root it','Learn the squares'],s:[['Up to','10 to 30.']]},
xpow:{n:'Powers & Cubes',d:['Read the power','Work it out','Pick or type'],s:[['Powers','Cubes, 2, 10 or mixed.']]},
xneg:{n:'Negative Numbers',d:['Read the sum','Mind the signs','Pick or type'],s:[['Operation','Add/subtract or multiply/divide.']]},
xord:{n:'Order of Operations',d:['Find the first step','Follow the order','Answer'],s:[['Steps','2, 3 or 4.'],['Brackets','None, some or all.']]},
xround:{n:'Rounding',d:['Read the number','Round as asked','Pick or type'],s:[['Round to','Tens, hundreds, thousands or decimals.'],['Direction','Nearest, up or down.']]},
xplace:{n:'Place Value',d:['Look at the highlighted digit','Name its place or value','Pick the answer'],s:[['Question','Value or place.'],['Decimals','Whole numbers or decimals.']]},
xcmp:{n:'Compare Sizes',d:['Read the numbers','Find the biggest or smallest','Tap it'],s:[['Numbers','Fractions, decimals, mixed or integers.']]},
xavg:{n:'Averages',d:['Read the list','Find the average asked','Pick or type'],s:[['Find','Mean, median, mode, range or mixed.']]},
xratio:{n:'Ratios & Rates',d:['Read the problem','Work out the answer','Pick or type'],s:[['Task','Simplify, scale, unit rate.']]},
xalg:{n:'Solve for x',d:['Read the equation','Undo each step','Find x'],s:[['Form','x+a, ax, ax+b, x/a+b.']]},
xarea:{n:'Area & Perimeter',d:['Look at the shape','Compute it','Type the number'],s:[['Shapes','Rectangles, squares, triangles, circles.']]},
xangle:{n:'Angle Facts',d:['Read the angles','Use the angle sum','Find x'],s:[['Rule','90, 180 or 360 degrees.']]},
xspeed:{n:'Speed Distance Time',d:['Read the journey','Find what is missing','Pick or type'],s:[['Find','Speed, distance or time.']]},
xfact:{n:'Factors & Multiples',d:['Read the question','Pick the answer','Up to 100'],s:[['Question','Factor, multiple, not a factor, count.']]},
xgcd:{n:'GCD & LCM',d:['Read the pair','Find GCD or LCM','Pick or type'],s:[['Find','GCD, LCM or either.']]},
xdivis:{n:'Divisibility Rules',d:['Read the number','Apply the rule','Answer'],s:[['Divisor','Several sets.']]},
xop:{n:'Missing Operator',d:['Read the equation','Choose the operator','Quick!'],s:[['Operators','Two or four.']]},
xodd:{n:'Odd One Out',d:['Read the numbers','Find the one that differs','Tap it'],s:[['Rule','Even, prime, square, multiple.']]},
xtarget:{n:'Sum Target',d:['Read the target','Find the pair','Tap it'],s:[['Operation','Add, multiply, difference.']]},
xdec:{n:'Decimal Math',d:['Line up the points','Calculate','Answer'],s:[['Operation','Add, subtract or multiply.']]},
xfrac:{n:'Fraction Of',d:['Divide by the bottom','Multiply by the top','Answer'],s:[['Fractions','Easy, thirds/fifths, any.']]},
guesswho:{n:'Guess Who?',d:['Ask yes/no questions','Flip down characters','Guess to win'],s:[['Goal','Find your rival\'s secret character first.'],['Play','Tap Ask, then flip down characters that don\'t match.'],['Tip','Ask questions that split the field in half. A wrong guess loses!']]},
duck:{n:'Quack Shot',d:['Tap to shoot','3 shots per wave','The dog fetches or laughs'],s:[['Goal','Hit enough of the 10 ducks to reach the quota.'],['Controls','Tap a duck to shoot it.'],['Tip','Watch the flight pattern, then lead your shot.']]},
bubble:{n:'Bubble Pop',d:['Drag to aim','Match 3 or more','Bank off the walls'],s:[['Goal','Clear every bubble.'],['Controls','Drag to aim and release, or tap a spot.'],['Tip','Pop supporting bubbles so clumps fall.']]},
hopper:{n:'Pipe Hopper',d:['Run and jump','Stomp the blobs','Reach the flag'],s:[['Goal','Reach the flagpole before time runs out.'],['Controls','◀ ▶ to move, hold 💨 to run, ⬆ to jump (hold for higher).'],['Blocks','Bump ? blocks for coins and mushrooms. Big hoppers can smash bricks and survive a hit.'],['Levels','50 levels, each with a new layout.']]},
war:{n:'War',d:['K♠ vs 9♥ → K wins','Tie → WAR','Win all 52 cards'],s:[
['Goal','Win every card.'],
['How to play','Press Flip to turn over the top cards. Higher card takes both. Ties start a war with three face-down cards and one more flip.'],
['Auto','Press Auto to play the whole game.'],
['Settings','Normal or fast speed.']]},
checkers:{n:'Checkers',d:['● hops ● → capture','Reach the far row → King','Ten rule variants'],s:[
['Goal','Capture or block all of the opponent’s pieces.'],
['How to play','Tap a piece, then tap where it goes. For multi-jumps tap each landing square in turn. Reach the far row to become a king.'],
['Modes','American, Casual, Russian, Brazilian, Pool, International 10×10, Giveaway, Race to King, Mini 6×6, Underdog.'],
['Opponents','Computer (3 levels), 2 players on one device, or 2 devices.']]},
chess:{n:'Chess',d:['♞ moves in an L','King safe? Not mate','Ten ways to play'],s:[
['Goal','Checkmate the enemy king. Some modes have their own goals.'],
['How to play','Tap a piece, then a highlighted square. Castling, en passant and promotion all work.'],
['Modes','Standard, Chess960, King of the Hill, Three-Check, Antichess, Horde, Queen Odds, Pawn Race and two endgame drills.'],
['Opponents','Computer (3 levels), 2 players on one device, or 2 devices.']]},
chinese:{n:'Chinese Checkers',d:['Step to a neighbour hole','Hop over a marble','Chain hops in one turn'],s:[
['Goal','Move all your marbles to the opposite corner first.'],
['How to play','Tap a marble, then a white dot. You can step or hop over marbles and keep hopping in a chain.'],
['Modes','Classic, Sprint, Quick, three, four and six players, Super Hop, Race to 5, Underdog and Center Walls.'],
['Opponents','Computer (3 levels), 2 players on one device, or 2 devices.']]},
slots:{n:'Card Slots',d:['🂡 🂡 🂡 → Three of a kind','♥ ♥ ♥ → Flush','5♠ 6♠ 7♠ → Straight flush'],s:[
['Goal','Spin reels of playing cards and match them for payouts.'],
['How to play','Set your bet with − and + (or Max), then tap Spin. Pairs of Jacks or better, straights, flushes and three of a kind pay on the paylines.'],
['Modes','Classic 3-Reel, Five Lines (3×3), Wild Jokers, Poker Reels (5 reels paid like poker), Flush Frenzy, Hold & Respin, and Versus Computer: choose 2 to 7 cards, then you and the computer each spin that many. The better poker hand wins your bet.'],
['Chips','Start with chips you choose. Run out and it is over, or cash out from the menu any time.'],
['Settings','Starting chips, speed, table look and win animation.']]}
};

var hu=document.createElement('style');
hu.textContent='#howov{position:fixed;inset:0;z-index:9300;background:#040912;display:none;flex-direction:column;font-family:Roboto,Arial,sans-serif;color:#fff}#howov.on{display:flex}'+
'#howov .hd{padding:10px 14px 2px;font-size:19px;font-weight:900}#howov .cp{padding:0 14px 4px;font-size:13px;opacity:.8;min-height:18px;transition:opacity .2s}'+
'#howov .gm{flex:1 1 0;min-height:0;display:flex;justify-content:center;align-items:flex-start;overflow:hidden}#howov .gw{position:relative;overflow:hidden;border:3px solid #ffc83d;background:#000}#howov iframe{border:0;width:390px;height:664px;transform-origin:0 0;pointer-events:none;display:block}'+
'#howov .pn{display:flex;gap:10px;padding:8px 14px;background:#0d243f;border-top:3px solid #ffc83d}#howov .av{width:60px;flex:0 0 60px}#howov .av svg{width:100%;display:block;overflow:visible}'+
'#howov .tx{flex:1;min-width:0}#howov h4{margin:0 0 3px;font-size:17px;font-weight:900;color:#ffd75e}#howov p{margin:0;font-size:14px;line-height:1.35}'+
'#howov .nv{display:flex;gap:6px;padding:6px 14px calc(env(safe-area-inset-bottom) + 10px);background:#0d243f}#howov .nv button{flex:1;height:44px;border:0;background:rgba(255,255,255,.16);color:#fff;font:800 15px Roboto,Arial,sans-serif;cursor:pointer;border-radius:0}#howov .nv button.pri{background:#ffc83d;color:#1a1200}#howov .nv span{align-self:center;font-size:12px;opacity:.7;min-width:40px;text-align:center}'+
'#howov .av .armR{transform-box:fill-box;transform-origin:50% 0;animation:wave .5s ease-in-out infinite alternate}#howov .av .sd,#howov .av .tear{display:none}'+
'.howbtn{display:block;width:100%;border:2px solid #ffc83d;background:rgba(255,200,61,.14);color:#fff;font:800 15px Roboto,Arial,sans-serif;height:42px;margin:6px 0;cursor:pointer}';
document.head.appendChild(hu);
var ho=document.createElement('div');ho.id='howov';document.body.appendChild(ho);
var hk=null,hi=0,hdt=0,hfr=null,hready=false,hscale=1;
function hdoc(){try{return hfr&&hfr.contentDocument}catch(e){return null}}
function hlayout(){
  var gm=document.getElementById('hgm'),gw=document.getElementById('hgw');if(!gm||!gw)return;
  var s=Math.min((gm.clientHeight-6)/664,(gm.clientWidth-6)/390);if(!(s>0))s=.5;hscale=s;
  gw.style.width=Math.floor(390*s)+'px';gw.style.height=Math.floor(664*s)+'px';hfr.style.transform='scale('+s+')';
}
function howAct(){
  var d=hdoc();if(!d||!hready)return;var g=HOW[hk],t=(g.s[hi][0]||'').toLowerCase();
  var menu=d.getElementById('menu'),hl=d.getElementById('hlx');
  if(!hl){hl=d.createElement('div');hl.id='hlx';hl.style.cssText='position:fixed;z-index:99999;pointer-events:none;outline:4px solid #ffc83d;box-shadow:0 0 0 9999px rgba(0,0,0,.45);transition:all .3s;opacity:0';d.body.appendChild(hl)}
  var viewMenu=/mode|difficulty|board|level|setting|option|theme|style|stake|start|chips|deck|table/.test(t)&&!/hint/.test(t);
  var sel=null;
  if(viewMenu){if(menu){menu.classList.add('on');var sc=menu.querySelector('.mscroll');if(sc)sc.scrollTop=Math.max(0,hi-1)*170}}
  else{if(menu)menu.classList.remove('on');
    if(/hint|undo/.test(t))sel='#bHint';
    else sel='#game,#bd,#board,#gbox,#reels,#table,#grid';
    if(/hint|how to play|rules|moves|play/.test(t)){setTimeout(function(){try{var b=d.getElementById('bHint');if(b&&!b.disabled)b.click()}catch(e){}},700)}}
  setTimeout(function(){
    var el=null;if(sel)sel.split(',').some(function(q){el=d.querySelector(q);return el&&el.getBoundingClientRect().width>20});
    if(el){var r=el.getBoundingClientRect(),pad=3;hl.style.cssText+=';left:'+(r.left-pad)+'px;top:'+(r.top-pad)+'px;width:'+(r.width+pad*2)+'px;height:'+(r.height+pad*2)+'px;opacity:1'}else hl.style.opacity=0;
  },450);
}
function howShow(){
  var g=HOW[hk],st=g.s[hi],last=hi===g.s.length-1,v=VAR[hk]||'card';
  document.getElementById('hpn').innerHTML='<div class="av">'+mkSVG(v)+'</div><div class="tx"><h4>'+st[0]+'</h4><p>'+st[1]+'</p></div>';
  document.getElementById('hnv').innerHTML='<button id="hb"'+(hi?' disabled':'')+'>◀ Back</button><span>'+(hi+1)+'/'+g.s.length+'</span><button class="pri" id="hn">'+(last?'Done ✓':'Next ▶')+'</button><button id="hx">Close</button>';
  document.getElementById('hdemo').textContent=g.d[0];
  clearInterval(hdt);var f=0;hdt=setInterval(function(){var e=document.getElementById('hdemo');if(!e){clearInterval(hdt);return}f=(f+1)%g.d.length;e.style.opacity=0;setTimeout(function(){e.textContent=g.d[f];e.style.opacity=1},150)},1400);
  hlayout();howAct();
}
function hclose(){ho.classList.remove('on');clearInterval(hdt);ho.innerHTML='';hfr=null;hready=false}
function howto(key){
  if(!HOW[key])return;hk=key;hi=0;hready=false;
  ho.innerHTML='<div class="hd">🎓 How to play: '+HOW[key].n+'</div><div class="cp" id="hdemo"></div><div class="gm" id="hgm"><div class="gw" id="hgw"><iframe id="hfr" title="Live game preview"></iframe></div></div><div class="pn" id="hpn"></div><div class="nv" id="hnv"></div>';
  ho.classList.add('on');hfr=document.getElementById('hfr');howShow();
  var src=window.__gsrc&&window.__gsrc(key);
  if(src){
    var stub='<script>window.__lsok=0;try{var __m={};Object.defineProperty(window,"localStorage",{configurable:true,value:{getItem:function(k){return k in __m?__m[k]:null},setItem:function(k,v){__m[k]=String(v)},removeItem:function(k){delete __m[k]},clear:function(){__m={}},key:function(){return null},length:0}});window.__lsok=window.localStorage.getItem("x")===null?1:0}catch(e){}<\/script>';
    hfr.onload=function(){
      var w=hfr.contentWindow;
      setTimeout(function(){
        try{var d=hdoc(),b=d&&d.getElementById('mStart');
          if(w.__lsok&&b){b.click();hready=true;setTimeout(function(){hlayout();howAct()},900)}
          else{hready=true;howAct()}}catch(e){}
      },600);
    };
    hfr.srcdoc=src.replace('<head>','<head>'+stub);
  }
}
ho.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;e.stopPropagation();
  if(b.id==='hn'){if(hi>=HOW[hk].s.length-1){hclose()}else{hi++;howShow()}}
  else if(b.id==='hb'){if(hi>0){hi--;howShow()}}
  else if(b.id==='hx'){hclose()}
});
window.__howto=howto;window.__HOW=HOW;
var menuEl=document.getElementById('menu');
if(menuEl&&window.__cur){
  var injHow=function(){
    if(menuEl.querySelector('.howbtn'))return;var h1=menuEl.querySelector('h1');if(!h1)return;
    var b=document.createElement('button');b.className='howbtn';b.textContent='🎓 How to play — Ace shows you';b.onclick=function(e){e.stopPropagation();howto(window.__cur)};
    var tg=menuEl.querySelector('.tag')||h1;tg.after(b);
  };
  injHow();new MutationObserver(injHow).observe(menuEl,{childList:true});
}
/* ---------- hub tour ---------- */
var hubGrid=document.getElementById('grid'),hubRand=document.getElementById('rand');
if(hubGrid&&hubRand){
  var tu=document.createElement('style');
  tu.textContent='#tourace{position:fixed;left:4px;bottom:0;width:70px;z-index:80;cursor:pointer;animation:tbob 2.4s ease-in-out infinite;-webkit-tap-highlight-color:transparent}#tourace{pointer-events:none}#tourace svg{pointer-events:auto;width:100%;display:block;overflow:visible;filter:drop-shadow(0 4px 6px rgba(0,0,0,.5))}'+
  '#tourace .armR,#tpanel .armR{transform-box:fill-box;transform-origin:50% 0;animation:wave .5s ease-in-out infinite alternate}'+
  '#tourace .sd,#tourace .tear,#tpanel .sd,#tpanel .tear{display:none}'+
  '#tourace .tb{display:none;pointer-events:auto;position:absolute;left:68px;bottom:84px;background:#fff;color:#14171c;font:900 13px Roboto,Arial,sans-serif;padding:7px 10px;border:3px solid #14171c;white-space:normal;width:max-content;max-width:min(230px,calc(100vw - 84px));line-height:1.25;transform-origin:0 100%;animation:tpop .4s .5s cubic-bezier(.2,1.5,.4,1) both}'+
  '#tourace.say .tb{display:block}#tourace .tourgo{display:block;margin-top:6px;width:100%;border:0;background:#ffc83d;color:#1b1500;font:900 12px Roboto,Arial,sans-serif;padding:6px;cursor:pointer}@keyframes tbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}@keyframes tpop{from{transform:scale(0)}to{transform:scale(1)}}'+
  '#tour{position:fixed;inset:0;z-index:9500;display:none}#tour.on{display:block}'+
  '#tspot{position:fixed;box-shadow:0 0 0 9999px rgba(3,8,18,.84);outline:3px solid #ffc83d;transition:all .35s ease;pointer-events:none}'+
  '#tpanel{position:fixed;left:8px;right:8px;bottom:8px;background:#0d243f;border:3px solid #ffc83d;color:#fff;padding:10px 12px;font-family:Roboto,Arial,sans-serif;display:flex;gap:10px;flex-wrap:wrap}'+
  '#tpanel .av{width:58px;flex:0 0 58px;align-self:flex-start}#tpanel .av svg{width:100%;display:block;overflow:visible}'+
  '#tpanel .tx{flex:1;min-width:0}#tpanel h4{margin:0 0 3px;font-size:17px;font-weight:900;color:#ffd75e}#tpanel p{margin:0;font-size:14px;line-height:1.35}'+
  '#tpanel .nv2{flex:1 0 100%;display:flex;gap:6px;align-items:center}#tpanel .nv2 span{font-size:12px;opacity:.7;flex:1;text-align:center}#tpanel .nv2 button{height:42px;padding:0 14px;border:0;background:rgba(255,255,255,.16);color:#fff;font:800 14px Roboto,Arial,sans-serif;cursor:pointer}#tpanel .nv2 button.pri{background:linear-gradient(#ffd75e,#e0a000);color:#1b1500}#tpanel .nv2 button:disabled{opacity:.3}'+
  '#tmock{position:fixed;left:8px;right:8px;top:60px;display:none;justify-content:center;gap:14px;align-items:flex-start;color:#fff;font-family:Roboto,Arial,sans-serif}#tmock.on{display:flex;background:#0a1b30;border:3px solid #ffc83d;padding:12px}#tmock strong{color:#ffd75e}'+
  '#tmock .ph{position:relative;width:132px;height:228px;background:#0e2a4a;border:3px solid #fff;flex:0 0 auto;overflow:hidden}#tmock .ph>div{position:absolute;left:5px;right:5px}'+
  '#tmock .ph .bd{background:rgba(255,255,255,.08);outline:2px solid #ffc83d}#tmock .n{position:absolute;right:-1px;top:-1px;width:18px;height:18px;background:#ffc83d;color:#1b1500;font:900 12px/18px Arial;text-align:center;z-index:2}'+
  '#tmock ol{list-style:none;margin:0;padding:0;font-size:13.5px;line-height:1.3;flex:1;max-width:200px}#tmock li{margin-bottom:9px;padding-left:26px;position:relative}#tmock li b{position:absolute;left:0;top:0;width:19px;height:19px;background:#ffc83d;color:#1b1500;text-align:center;font:900 12px/19px Arial}';
  document.head.appendChild(tu);
  var ta=document.createElement('div');ta.id='tourace';var RV=['card','poker','gem','tile','mag','cube'];ta.innerHTML=mkSVG(RV[Math.floor(Math.random()*RV.length)])+'<div class="tb">Tap me for a tour!<button class="tourgo">🎓 Take the tour</button></div>';document.body.appendChild(ta);
  (function(){var J=(window.__JOKES||[["Why don't cards ever get cold?","They always have a full deck of jackets."],["What do you call a deck of cards in a bakery?","A pastry shuffle."],["Why was the king of hearts so calm?","He had a lot of heart."],["Why did the joker get invited everywhere?","He's a wild card."],["What's a card's favorite music?","Shuffle."],["Why did the ace feel so special?","He was number one."],["Why don't kings play hide and seek?","Everyone knows where the court is."],["What did the queen say to the jack?","Stop being so two-faced."],["How do cards say goodbye?","See you at the next deal."],["Why was the deck always tired?","It was constantly being cut and shuffled."],["What do you call a sleepy poker player?","Check-ed out."],["Why did the poker player bring a ladder?","To raise the stakes."],["Why can't you trust a deck of cards?","They're always up to a shuffle."],["What did the ace say to the two?","You're a little low."],["Why did the card go to school?","To get a little smarter. It was a bit flush with knowledge."],["How does a gambler stay calm?","He plays it cool and keeps a straight face."],["What do you call a pig that plays poker?","A card shark... with a curly tail."],["Why did the Jack of Spades go to the gym?","To get a better flush."],["Why are cards great friends?","They always stick together in a suit."],["Why was the Go Fish player so sad?","He kept getting no catch."],["What do fish play at the lake?","Go Fish, obviously."],["Why did the fish blush?","He saw the ocean's bottom."],["What do you call a fish that wears a bowtie?","Sofishticated."],["Why don't fish play cards?","They're afraid of the net."],["What does Old Maid do on weekends?","Stays out of the picture."],["Why did nobody want the queen of spades?","She was a total drag."],["Why did the chess player stay calm?","He knew his next move."],["Why did the knight bring a pillow?","He wanted to take a nap-kin."],["Why was the chess board so tired?","It had too many moves."],["Why did the pawn feel proud?","He was about to become a queen."],["What do you call a bishop on a roller coaster?","Diagonal-ly dizzy."],["Why do rooks never lie?","They're always straight with you."],["What's a chess player's favorite snack?","Checkmate-os."],["Why did the king stay home?","He felt a little checked."],["Why did the checker go to the party?","He wanted to jump in."],["Why was the checkers piece upset?","He got kinged out of line."],["What's red and black and fun all over?","A game of checkers."],["What do you call a checker with a crown?","Royalty."],["Why did the marble feel lost?","Because it lost its way in Chinese Checkers."],["What do you call a star-shaped board game?","A real standout."],["Why did the sudoku book look sad?","It had too many problems."],["Why do sudoku fans love numbers?","They always add up."],["What did one nine say to the other nine?","We're a perfect match."],["Why was six afraid of seven?","Because seven ate nine. (Seven eight nine.)"],["Why did the number nine hide?","He was feeling a little square."],["Why do math books look sad?","They have a lot of problems."],["What did the zero say to the eight?","Nice belt!"],["Why was the equal sign so humble?","He wasn't less than or greater than anyone."],["Why did the sudoku player stay up all night?","He was stuck on a square."],["What's a mahjong player's favorite snack?","Tile chips."],["Why did the mahjong tile get promoted?","It was a real bamboozle."],["What do you call a tile that tells jokes?","A tile-arious one."],["Why was the dragon tile so hot?","It had a lot of fire."],["What do you call a very kind mahjong tile?","A good match."],["Why did the word search player smile?","She found a word."],["Why was the word search so tricky?","It was hiding in plain sight."],["What did the letter A say?","Just search me."],["Why do letters never get lost?","They always know where they stand."],["Why did the dictionary get a promotion?","It always had the right words."],["What did the jewel say to the gem?","You're a real catch."],["Why was the gem so calm?","It had been through a lot of pressure."],["Why are jewels good at puzzles?","They always match."],["What do you call a diamond that sings?","A brilliant cut."],["Why did the ruby blush?","It was a little red."],["What did the emerald say?","I'm feeling green with envy."],["Why did the sapphire stay home?","It was feeling blue."],["Why did the slot machine go to therapy?","It had too many issues with commitment."],["Why did the slot machine blush?","It was caught pulling a fast one."],["What's a slot machine's favorite sport?","Spinning."],["Why was the slot machine so happy?","It had a lot of cherries."],["Why don't slot machines get lonely?","They're always surrounded by seven friends."],["What did one cherry say to another?","We make a great pair."],["Why was the lucky seven so confident?","He had a winning attitude."],["Why did the dice get a time-out?","It rolled its eyes."],["What do you call a nervous die?","A rolling stone."],["Why was the die so cool?","It had six faces and none of them were fake."],["Why did the poker chip win?","It had a lot of stack."],["Why did the chips go on vacation?","They were feeling cashed out."],["What's a gambler's favorite cheese?","Cheddar... all in!"],["Why was the casino so clean?","It always had the best wash-ing."],["What do you call a bluffing cat?","A poker-face."],["Why do cats make bad poker players?","They show their paws."],["Why was the dog a great poker player?","He never showed his tell, only his tail."],["Why don't bears play poker?","Their paws are too big for the cards."],["Why did the owl win at cards?","He was wise to the bluff."],["Why are bunnies good magicians?","They're always pulling things out of hats."],["How does a bunny do magic?","With a little hare-brained trick."],["What do you call a magician bunny?","A hop-tical illusionist."],["What's a magician's favorite animal?","A rabbit, of course. It's in the hat."],["Why did the magician go to school?","To improve his sleight of hand."],["Why did the magician sit down?","To do a sit-uation trick."],["What do you call a magician who loses his magic?","Ian."],["Why did the magician make his lunch disappear?","He was on an invisible diet."],["Why was the mustache so confident?","It always had a good lip."],["What did the mustache say to the nose?","I've got you covered."],["Why do magicians love cards?","It's a great trick up their sleeve."],["What did the magician say to the card?","Pick a card, any card. Don't tell me."],["Why did the card trick go wrong?","The audience was not on the same page."],["What's a magician's favorite number?","Twenty-seven. It's a trick."],["Why is 27 a magical number?","Because three times three times three is three-mendous."],["Why did the chicken cross the road?","To get to the other side. Classic."],["Why did the chicken join a band?","It had the drumsticks."],["What do you call a chicken at a card game?","A cluck-er."],["What do you call a sleeping bull?","A bulldozer."],["What do you call a cow with no legs?","Ground beef."],["What do you call a dog magician?","A labracadabrador."],["What do cows do on a date?","Go to the moo-vies."],["What do you call a fake noodle?","An impasta."],["Why did the scarecrow win an award?","He was outstanding in his field."],["What do you call cheese that isn't yours?","Nacho cheese."],["Why did the cookie go to the doctor?","It felt crummy."],["What do you call a bear with no teeth?","A gummy bear."],["What did the grape do when he got stepped on?","He let out a little wine."],["Why did the banana go to the doctor?","It wasn't peeling well."],["Why did the tomato blush?","It saw the salad dressing."],["What's a potato's favorite game?","Spud-oku."],["Why did the orange stop?","It ran out of juice."],["What do you call a sleeping dinosaur?","A dino-snore."],["What did the ocean say to the beach?","Nothing, it just waved."],["Why did the sun go to school?","To get brighter."],["Why did the moon skip dinner?","It was full."],["What did the star say to the sky?","You're out of this world."],["Why are stars so smart?","They always shine in class."],["Why did the cloud go to the party?","It heard there'd be a lot of rain-bows."],["What did the snowman say to the other snowman?","Do you smell carrots?"],["Why was the snowman so happy?","He had a cool personality."],["Why did the sheep go to the party?","To get a little baaa-ba-q."],["Why did the cow win the award?","It was out-standing in its field."],["What do you call a sleepy bull at a poker table?","A bore-dom."],["Why was the math book sad?","Too many problems to solve."],["Why did the student eat his homework?","The teacher said it was a piece of cake."],["Why did the computer get glasses?","To improve its web sight."],["Why was the computer cold?","It left its Windows open."],["Why did the phone wear glasses?","It lost all its contacts."],["Why did the smartphone go to school?","To become a smarter phone."],["What did the keyboard say to the mouse?","You're a click above the rest."],["Why did the robot go on vacation?","It needed to recharge."],["What do you call a robot who loves games?","A play-bot."],["Why was the robot so good at cards?","It had nerves of steel."],["Why did the app go to the doctor?","It had a bug."],["Why did the programmer quit his job?","He didn't get arrays."],["Why do programmers prefer dark mode?","Because light attracts bugs."],["What do you call a coder who loves nature?","A tree-hugger with a branch."],["What do you call 8 hobbits?","A hob-byte."],["Why was the cell phone wearing glasses?","It lost its contacts."],["Why did the clock get in trouble?","It kept tocking back."],["Why was the clock in time-out?","It kept ticking everyone off."],["What time is it when an elephant sits on the fence?","Time to fix the fence."],["Why did the watch go to the party?","It wanted to have a good time."],["What do you call a sleeping pizza?","A pizzzza."],["Why did the pizza maker go broke?","He just couldn't make enough dough."],["What did the pizza say to the cheese?","You're grate."],["Why did the burger join a band?","It had a lot of patty."],["Why did the fries get promoted?","They were a big hit."],["What do you call a sad cup of coffee?","Depresso."],["Why did the coffee call the police?","It got mugged."],["What did the tea say to the kettle?","You're always steaming over small things."],["Why did the donut go to the doctor?","It was feeling glazed."],["What do you call a nervous pastry?","A shaky croissant."],["What do you call a sweet musician?","A cookie crooner."],["Why did the ice cream truck break down?","Because of the rocky road."],["Why did the sundae feel nervous?","It was a little melted on the inside."],["What did the ice cream say to the cone?","You complete me."],["What's a ghost's favorite game?","Hide-and-shriek."],["Why was the ghost a bad liar?","You could see right through him."],["What do ghosts serve for dessert?","I scream."],["Why did the skeleton stay home?","He had no body to go with."],["Why don't skeletons fight each other?","They don't have the guts."],["What do you call a pumpkin that tells jokes?","A pun-kin."],["Why did the vampire quit poker?","He had a problem with the stakes."],["Why was the zombie a great poker player?","He never lost his head."],["Why did the witch bring a broom to the casino?","To sweep the pot."],["What do you call a wizard from outer space?","A flying sorcerer."],["Why did the dragon go to school?","To learn his fire-ABCs."],["What do you call a dragon that plays cards?","A flush of flames."],["Why did the knight go to the doctor?","He had a suit of armor allergy."],["Why did the king go to the dentist?","To get his crown checked."],["What do you call a royal sneeze?","Your Majesty's atchoo."],["Why was the queen so good at games?","She always had the upper hand."],["What did the jack say to the king?","You're a real card."],["Why did the prince bring a deck?","He heard it was a royal flush."],["What's a royal flush?","The best bathroom break ever, if you're a card."],["What did one hand say to the other?","Let's give them a big deal."],["Why do hands make good friends?","They always know how to deal."],["Why was the ace so humble?","He knew he could be high or low."],["Why did the two feel left out?","Everybody forgot about the deuce."],["Why was the three so cheerful?","It's a lucky triplet."],["What did the four say to the five?","You're better than I am by one."],["Why was the seven so rude?","He ate a nine, and tossed the rest."],["Why did the ten want to be a king?","It was only a few steps away."],["Why was the jack so tired?","He had to jump through hoops."],["What's a deck of cards' favorite tool?","A hammer, because it's always on the nail."],["Why did the heart go to the doctor?","It was feeling a little suit-ed."],["Why did the diamond win the argument?","It was crystal clear."],["Why did the club go to the party?","It was sure to make a hit."],["Why did the spade dig in?","Because it was digging the game."],["Which suit is the happiest?","Hearts. They have a lot of heart."],["Which suit is the gardener?","Spades. Always digging."],["Which suit is the richest?","Diamonds. They're always sparkling."],["Which suit is the strongest?","Clubs. They're always on the swing."],["What do you call a suit that goes to the gym?","A well-pressed spade."],["Why did the card get promoted?","It really made the cut."],["Why did the dealer get a medal?","He was a cut above the rest."],["Why was the dealer so honest?","He played it straight."],["Why was the dealer so calm?","He had a lot of deal-ing experience."],["Why did the player bring a pen to the card game?","To draw a card."],["Why was the game so cheap?","It was a steal."],["Why did the board game cross the road?","To get to the other side of the table."],["Why did the board get bored?","Nobody played on it."],["What did the board game say to the dice?","You roll me over."],["Why do board games make good friends?","They're always up for a roll."],["Why was the game piece so brave?","It took a lot of moves to get there."],["Why do gamers never get cold?","They're always surrounded by fans."],["Why did the gamer break up with his controller?","It had too many strings attached."],["Why was the gamer so tired?","He was up all night leveling up."],["What's a gamer's favorite snack?","Chips. Or sometimes cheese puffs."],["Why did the gamer bring a ladder?","To reach the next level."],["Why did the level go to therapy?","It had too many issues."],["Why was the high score so lonely?","Nobody could reach it."],["Why was the leaderboard so proud?","It was always at the top."],["Why did the puzzle go to the doctor?","It was feeling a little pieced together."],["Why was the puzzle so happy?","It finally found its missing piece."],["What do you call a puzzle that tells jokes?","A pun-zle."],["What's a puzzle's favorite music?","Jigsaw tunes."],["Why was the jigsaw puzzle so confident?","Everything fit together."],["Why did the crossword go to school?","It wanted to fill in the blanks."],["What did the crossword say to the pencil?","You're always erasing my plans."],["Why did the pencil go to the party?","It had a point."],["Why was the pencil so sharp?","It spent time in a good school."],["Why did the eraser quit?","It was tired of making mistakes."],["Why did the eraser get promoted?","It always fixed everything."],["What did the paper say to the pencil?","Write on."],["Why did the book go to the doctor?","It had a spine problem."],["Why was the library so quiet?","Everyone was booked."],["What do you call a book that loves jokes?","A page-turner."],["Why did the author sleep in the pantry?","He wanted to write the cookbook."],["What do you call a bear in the rain?","A drizzly bear."],["Why don't bears wear shoes?","They prefer bear feet."],["What do you call a lazy kangaroo?","A pouch potato."],["Why are frogs always so happy?","They eat whatever bugs them."],["What do you call a frog's favorite game?","Hop-scotch."],["What do you call an alligator in a vest?","An investigator."],["Why was the snake so good at games?","He had a great hiss-tory."],["Why did the turtle cross the road?","To get to the shell-ter."],["What do you call a turtle that tells time?","A tick-tock turtle."],["Why was the turtle slow at cards?","It was taking its time to shell out."],["Why do ducks make great detectives?","They always quack the case."],["What did the duck say after shopping?","Put it on my bill."],["What do you call a duck that gets all A's?","A wise quacker."],["Why did the owl go to the party?","It was a hoot."],["What do owls say when it rains?","Too-wet to too-woo."],["Why did the penguin cross the ice?","To get to the other slide."],["What do penguins eat for lunch?","Brrr-itos."],["What do you call a snowy bird in a suit?","A penguin at a formal."],["Why are cats so good at video games?","They have nine lives."],["Why did the cat sit on the computer?","To keep an eye on the mouse."],["What do you call a cat that loves bowling?","An alley cat."],["What's a cat's favorite color?","Purr-ple."],["Why did the dog sit in the shade?","He didn't want to be a hot dog."],["What do you call a dog with no legs?","Anything you want. He won't come."],["What do you call a dog that does magic tricks?","A Labracadabrador."],["Why was the dog so happy?","He had a ball."],["What did the horse say after it tripped?","Help, I've fallen and I can't giddyup!"],["Why did the horse go to the doctor?","It was a little hoarse."],["Why do bees have sticky hair?","They use honeycombs."],["What do you call a bee that can't make up its mind?","A maybe."],["Why did the bee get married?","He found his honey."],["What do you call a bee that's having a bad hair day?","A frizz-bee."],["Why do fish live in salt water?","Pepper makes them sneeze."],["What do you call a fish with two knees?","A two-knee fish."],["What's a dolphin's favorite game?","Marco Polo-phin."],["Why did the whale blush?","It saw the ocean's bottom."],["What do you call a crab at the gym?","A mussel-man."],["Why don't crabs share?","They're a little shellfish."],["Why did the octopus beat the shark in a fight?","It was well armed."],["What do you call an elephant that doesn't matter?","An irrelephant."],["Why are elephants bad at card games?","They can't hold a trump."],["Why do elephants never forget?","They never learned to play Old Maid."],["What's gray, has four legs and a trunk?","A mouse going on vacation."],["How do you fit an elephant in a fridge?","Open the door, put him in, close the door."],["Why did the giraffe get good grades?","He was head and shoulders above the rest."],["Why do giraffes have long necks?","Because their heads are so far from their bodies."],["What do you call a lion who wears a hat?","A mane attraction."],["Why did the lion eat the tightrope walker?","He wanted a balanced meal."],["What do you get from a pampered cow?","Spoiled milk."],["Why did the monkey like the banana?","It had appeal."],["What did the monkey say to the banana?","You've got good peel appeal."],["Why was the monkey great at cards?","He knew all the swings."],["Why are gorillas so good at poker?","They're great at raising the stakes... of the jungle."],["What do you call a parrot who's a pirate?","A pol-ly-gon."],["What did the pirate say on his 80th birthday?","Aye matey."],["Why couldn't the pirate play cards?","Because he was standing on the deck."],["Why did the pirate go to the casino?","To find the booty."],["How much did the pirate pay for his piercings?","A buccaneer."],["Why are pirates so good at singing?","They hit the high Cs."],["What's a pirate's favorite letter?","You'd think R, but his first love is the C."],["Why did the sailor bring a deck of cards?","To pass the time on deck."],["Why was the sailor so good at poker?","He knew how to bluff the waves."],["What do you call a boat that likes jokes?","A pun-toon."],["Why did the submarine blush?","It saw the dive."],["Why was the astronaut great at poker?","He always had a lot of space."],["Why did the astronaut take a deck of cards?","To pass the time in orbit."],["What do you call a spaceship that sings?","A rocket star."],["How does the moon cut its hair?","Eclipse it."],["What do you call an alien with three eyes?","An aliiien."],["Why did the alien get an A in school?","He was out of this world."],["Why did Mars blush?","It saw Earth's rocket."],["Why do planets go to school?","To get a little more grounded."],["Why can't you trust atoms?","They make up everything."],["What did the scientist say when he found two guys named Sodium and Hydrogen?","NaH."],["What do you call an acid with an attitude?","A-mean-o acid."],["Why did the physics teacher break up with the biology teacher?","There was no chemistry."],["What did one volcano say to the other?","I lava you."],["Why did the earthquake go to school?","To shake up the class."],["What do you call a tree that tells jokes?","A pun-tree."],["Why did the tree go to the dentist?","It needed a root canal."],["Why are trees so good at math?","They have a lot of square roots."],["What's a tree's favorite drink?","Root beer."],["What did the leaf say to the wind?","You really get around."],["Why was the flower so cheerful?","It was in full bloom."],["Why did the gardener bring a ladder?","To reach the high-rise flowers."],["What did the big flower say to the little flower?","Hi, bud!"],["Why was the rose so sad?","It was feeling a little thorny."],["Why did the mushroom get invited to the party?","He was a fungi."],["Why did the bicycle fall over?","It was two tired."],["Why did the car go to the doctor?","It had a flat tire."],["Why was the car a good listener?","It was all ears, I mean, all engine."],["Why did the traffic light turn red?","You would too if you had to change in the middle of the street."],["Why did the train go to school?","To get some training."],["What do you call a train loaded with toffee?","A chew-chew train."],["Why do trains make good friends?","They always stay on track."],["What did the plane say to the pilot?","I've got your back."],["Why did the airplane get good grades?","It was flying high."],["Why was the road so tired?","It had a lot of traffic."],["Why did the bridge go to therapy?","It had too many crossings."],["Why did the house go to the doctor?","It had a window problem."],["Why was the door so sad?","It always got knocked."],["What did the wall say to the other wall?","Meet you at the corner."],["What did the lamp say to the lightbulb?","You really light up my life."],["Why did the shoe go to the party?","It wanted to boot up the fun."],["Why did the sock go to the doctor?","It had a hole in its soul, I mean sole."],["Why did the hat go to jail?","It was a little hat-ty."],["What did the hat say to the scarf?","You hang around, and I'll go on ahead."],["Why was the belt arrested?","It held up some pants."],["What do you call a fish wearing a crown?","A king fish."],["Why do bakers work so hard?","They knead the dough."],["Why did the baker go broke?","He lost his bread."],["What do you call a loaf that likes cards?","A bread-winner."],["What did one plate say to the other?","Dinner is on me."],["Why was the spoon so good at jokes?","It was always stirring up laughs."],["Why did the fork go to jail?","It was a bit sharp."],["What did the knife say to the fork?","Don't be so pointy."],["Why did the cup go to the party?","It was a real mug of fun."],["What do you call a blind dinosaur?","A doyouthinkhesaurus."],["What do you call a dinosaur that never gives up?","A try-try-tops."],["Why did the T-rex bring a deck of cards?","It wanted to play a short-armed game."],["Why can't a T-rex clap?","Its arms are too short."],["Why was the dinosaur a bad poker player?","It was always extinct before the river."],["What do you call a bear with no ears?","B."],["What do you call a fish with no eyes?","A fsh."],["What do you call a cow in an earthquake?","A milkshake."],["What do you call a snowman in summer?","A puddle."],["How do you make a tissue dance?","Put a little boogie in it."],["What did zero say to eight?","Nice belt!"],["What's a math teacher's favorite season?","Sum-mer."],["Why is it hard to have a conversation with a clock?","It's always ticking."],["Why did the angle get good grades?","It was acute."],["Why did the circle go to the party?","It was going around."],["What do you call a number that can't stay still?","A roamin' numeral."],["Why is the number 6 so scared?","Because 7, 8, 9."],["What's a snake's favorite subject?","Hiss-tory."],["What's a cat's favorite subject?","Mouse-ic."],["Why do magicians never get lost?","They always have a trick up their sleeve."],["What do you call a magic dog?","A Labracadabrador."],["Why was the magic show a hit?","It had everyone spellbound."],["What did the magician say to the audience?","Abra-cadabra, here's your laugh."],["What's a magician's favorite chocolate?","Abra-cocoa-dabra."],["Why are card tricks so mysterious?","Because the magician always has an ace up his sleeve."],["How do magicians say hello?","With a wave of the hand."],["What did the card say to the magician?","You always pick on me."],["Why did the magician smile?","The trick finally worked."],["What's a magician's favorite game?","Hide-and-seek, he's good at the hide part."],["Why did the bunny get a promotion?","He was hat-tastic."],["Why do bunnies make great cooks?","They're good at carrot cake."],["What did the bunny say to the carrot?","I'm hopping to meet you."],["What do you call a rabbit with fleas?","Bugs Bunny."],["How do rabbits travel?","By hare-plane."],["What do you call a bunny with a really big attitude?","A hare-brain."],["Why are mustaches so funny?","They're really lip-service."],["What do you call a mustache on a cat?","A whisker."],["Why did the king need a nap?","It had been a long reign."],["What do you call a king who's always cold?","A frozen monarch."],["Why did the queen call the plumber?","Her crown was leaking."],["Why was the castle so loud?","It had a lot of drawbridge slams."],["How do knights get to the castle?","By the knight bus."],["What do you call a sleeping dragon?","A bore-alis."],["Why did the dragon go to the doctor?","It had a hot throat."],["Why are dragons great at poker?","They always show up with fire."],["What's a wizard's favorite card game?","Spell-itaire."],["What's a ghost's favorite card game?","Boo-jack."],["What's a cat's favorite card game?","Go Fish."],["What's a bee's favorite card game?","Buzz-ness."],["What's a snowman's favorite card game?","Freeze-Cell."],["What's a lazy person's favorite card game?","Solitaire. No one to deal with."],["What's a farmer's favorite card game?","Hearts. He likes the harvest."],["What's a baker's favorite card game?","Gin Rummy, with a little rum."],["What's a monkey's favorite card game?","Old Maid. It's all about the swing."],["What's a cow's favorite card game?","Moo-ker."],["What's a pirate's favorite card game?","Poker. Arrr, he likes the pot."],["What's a teacher's favorite game?","Sudoku. Lots of grading."],["What's a bird's favorite game?","Chirp-ess."],["What's a computer's favorite game?","Chess. It likes the byte."],["What's a frog's favorite game?","Leapfrog."],["What do you call a game with eggs?","Scramble."],["Why did the checker bring a book?","He was ready to turn the page."],["Why was the chess club so loud?","Everyone had a lot to say about the king."],["Why was the queen the best piece?","She could go anywhere."],["Why do chess players stay calm?","They plan ahead."],["Why did the pawn walk so slowly?","He was making sure to promote himself."],["How do chess players say hello?","En passant."],["What do chess players eat?","Roast beef, because of the rook."],["What did the bishop say to the knight?","Let's meet diagonally."],["Why did the rook go to the beach?","To castle."],["What do you call a chess piece that cries?","A pawn in the rain."],["Why was the king so important?","Because he was always in check."],["Why did the chess player go to the doctor?","He had a pawn in his side."],["What do you call a clever checker?","A jump-start."],["Why are checkers so jumpy?","Because they're always on the move."],["What did the red checker say to the black checker?","Let's have a jump."],["Why was the marble happy?","It was in a good hole."],["Why did the marble cross the board?","To get to the other point."],["Why was the star board so popular?","It had a lot of points."],["Why did the Chinese Checkers board win?","It had a lot of corners."],["What do you call a lucky marble?","A winner by a hop."],["Why did the joker laugh at the deck?","It had no sense of humor."],["Why did the joker get promoted?","He was wild."],["Why are jokers so rare?","Because they only show up twice."],["What's the joker's favorite sport?","Wild-water rafting."],["Why did the joker cross the road?","To prove he wasn't chicken."],["What's black and white and red all over?","A newspaper. Or a sunburned penguin."],["What do you call a deck with no suits?","A casual deck."],["What do you call a deck that loves to dance?","A shuffle-board."],["Why did the deck get a cold?","Too many drafts."],["Why did the deck go to the party?","Because it was a real hit."],["Why was the shuffle so smooth?","It was a cut above."],["Why did the shuffle stop?","It ran out of steam."],["How do you fix a broken deck?","With a spare joker."],["Why did the poker player always lose?","He kept folding under pressure."],["Why was the poker player a good friend?","He always called when you needed him."],["Why was the poker player so honest?","He had nothing to hide, except his cards."],["Why did the poker player get a haircut?","He wanted a good bluff."],["Why did the poker player pack a lunch?","He knew it was going to be a long hand."],["What do you call a poker player who loves art?","A bluff painter."],["What did the poker chip say to the table?","I'm all in."],["Why was the river so lucky?","It was always the last card."],["Why was the flop so surprised?","It didn't see itself coming."],["Why was the turn so slow?","It wasn't sure whether to bet."],["Why did the big blind get upset?","He felt a little forced."],["Why did the small blind go home?","He was a little short."],["Why did the hold'em player bring a map?","He wanted to find the river."],["Why did the Omaha player bring more cards?","Four was not enough."],["Why was the stud so strong?","Because it was seven cards of muscle."],["Why was the draw player so patient?","He liked to take a few cards in the future."],["Why was the blackjack player so lucky?","Because he had twenty-one reasons."],["Why did the blackjack player stand?","He was tired of hitting."],["What did one blackjack player say to the other?","Let's hit the town."],["Why did the dealer win?","He always had the house on his side."],["Why was the casino so cold?","It had a lot of drafts, I mean draws."],["What's a casino's favorite bird?","A jackpot-ro-ot."],["Why was the roulette wheel so dizzy?","It was always spinning."],["Why was the jackpot so lonely?","No one could reach it."],["Why did the cookie cry?","Its mom was a wafer so long."],["What do you call a nosy pepper?","Jalapeño business."],["Why did the lettuce win the race?","It was a head."],["What do you call a sad strawberry?","A blueberry."],["Why did the cucumber blush?","It was in a pickle."],["What do you call two bananas?","A pair of slippers."],["What did the lemon say to the lime?","You're looking a little green."],["Why are peaches so good at games?","They always get the pit right."],["Why did the apple go to the doctor?","It wasn't peeling well. It had a core issue."],["What do you call an apple that plays the trumpet?","A tooty-fruity."],["Why did the grape stop in the middle of the road?","It ran out of juice."],["Why do melons have weddings?","Because they cantaloupe."],["What did the corn say to the farmer?","Thanks for the ear."],["Why did the egg go to school?","To get egg-ucated."],["What did the egg say to the pan?","You crack me up."],["Why was the egg so good at games?","It knew how to scramble."],["Why did the pancake go to the party?","It was on a roll."],["What do you call a waffle that tells jokes?","A pun-cake."],["Why did the bread go to the doctor?","It felt a little crumby."],["What do you call a toast that loves cards?","A toast-master."],["Why are noodles so good at card games?","They know how to shuffle."],["What do you call a lazy spaghetti?","A noo-dle."],["What did the cheese say when it looked in the mirror?","Halloumi!"],["What do you call a cow that plays a musical instrument?","A moo-sician."],["What do you call a cow that tells jokes?","A laugh-a-moo."],["Why did the farmer win the poker game?","He had a full barn."],["What do you call a full house on a farm?","A hen-house."],["What do you call a hand of three pigs and two cows?","A full barn."],["Why do pigs make good poker players?","They never fold their hams."],["What do you call a pig that does karate?","A pork chop."],["What do you call a sheep that plays cards?","A baa-luffer."],["Why did the lamb join the band?","It had a lot of wool-ume."],["What do you call a sleeping sheep?","Baa-ed time."],["What did one wall say to the other?","I'll meet you at the corner."],["Why did the picture go to jail?","It was framed."],["What's a room's favorite game?","Hide-and-sofa."],["What did the couch say to the chair?","You're a seat for sore eyes."],["Why was the bed so happy?","It had a good rest."],["What did the pillow say to the blanket?","Cover me."],["Why did the clock go to the gym?","To work on its second hand."],["Why do pencils make good friends?","They always sketch the best moments."],["What do you call a pen that tells jokes?","A pun-pen."],["What did the ruler say to the pencil?","You're a real stand-up measure."],["Why did the teacher wear sunglasses?","His class was so bright."],["Why did the student bring a ladder to school?","He wanted to go to high school."],["Why was the math class so noisy?","Too many sum-body."],["What do you call a teacher who never farts in public?","A private tutor."],["What did the pencil sharpener say to the pencil?","Stop going in circles and get to the point."],["Why is the playground so happy?","It's a swing-ing place."],["What did the slide say to the swing?","Stop being so up and down."],["Why was the baseball team so good at poker?","They knew how to throw the curve."],["Why did the baseball player bring a deck?","He wanted to play a diamond."],["Why do basketball players love poker?","They're good at dealing."],["Why was the soccer ball sad?","It always got kicked around."],["Why did the golfer bring two pairs of pants?","In case he got a hole in one."],["What do you call a golfer who loves cards?","A hole-in-one-and-a-flush."],["Why is golf solitaire so relaxing?","There's no one else on the green."],["Why did the tennis player bring a pencil?","To keep score."],["Why was the tennis ball so busy?","It was always in the court."],["Why did the swimmer bring a deck?","To play a game of Go Fish."],["What do you call a skier who loves cards?","A slope-er."],["Why did the runner join the poker game?","He wanted a better stack."],["Why do bowlers make great poker players?","They always go for a strike."],["What do you call a very small bowling ball?","A mini-ball."],["Why did the bowler go to the casino?","He was on a roll."],["What do you call a pencil case in space?","A zero-gravity pouch."],["Why was the music so good at cards?","It had a lot of treble."],["Why did the piano go to the casino?","It wanted to play the keys."],["What do you call a guitar that plays poker?","An ace-oustic."],["Why did the drum go to the party?","Because it was beat."],["Why was the violin always winning?","It had a good bow."],["Why did the trumpet blush?","It was blowing a bit too hard."],["What's a musician's favorite poker hand?","A flute full house."],["Why did the band bring a deck?","To play a few rounds of shuffle."],["What do you call a singing card?","A treble ace."],["What did the singer say to the poker player?","Let me bring you a high note."],["Why did the artist win at cards?","He drew a great hand."],["Why was the painter so good at games?","He knew how to color his bluff."],["Why did the paintbrush go to the party?","It was a real stroke of luck."],["What do you call a sculptor who loves games?","A chisel-er."],["Why did the chef win at poker?","He had a great stew... art."],["What did the chef say to the card?","You're a real catch of the day."],["Why did the soup go to the casino?","It wanted to ladle some luck."],["What's a chef's favorite card game?","Spades. He's always digging in."],["Why was the cookbook so popular?","It always had great recipes for success."],["Why did the baker play cards?","He needed a good dough-ble."],["What did the barista say to the poker player?","You really know how to brew a bluff."],["Why did the waiter win the game?","He always served an ace."],["What's a waiter's favorite hand?","A full house with a side of fries."],["Why was the dentist so good at cards?","He always filled the pot."],["Why did the doctor win at poker?","He had a good bedside manner."],["What did the nurse say to the cards?","Take two and call me in the morning."],["Why did the lawyer bring a deck?","He wanted to play the court."],["Why did the judge win the game?","He always had the final say."],["What did the pilot say to the cards?","I'll be flying high with this one."],["Why did the firefighter win?","He had a hot hand."],["Why was the police officer so good at cards?","He always had the right to remain silent."],["What's a detective's favorite game?","Clue-doku."],["Why did the detective bring a deck?","To find a card in the stack of clues."],["Why do spies love cards?","They always play their cards close to the vest."],["What did the spy say to the king?","I've got you covered, Your Majesty."],["Why did the mailman win?","He always delivers."],["What did the librarian say to the card?","Shh, you're stacking too loudly."],["Why was the farmer so good at puzzles?","He had a field day."],["Why was the scientist so good at card tricks?","It was all in the chemistry."],["What do you call a clever mathematician?","A smarty-pi."],["Why did the number three go to the party?","It was a crowd of one, two, three."],["What did the number one say to the two?","You're twice the fun."],["Why did the number five go to school?","To get a high five."],["Why was the number ten so confident?","It had a perfect score."],["What do you call a number with a hat?","A top-ten."],["Why was the equation so happy?","It always had a solution."],["Why did the graph go to the party?","To plot a good time."],["What do you call a fish that plays math?","A sum-fish."],["Why did the calculator win?","It always counted on luck."],["What did the fraction say to the whole?","You complete me."],["What did the decimal say to the point?","You're always so precise."],["Why was the triangle so good at cards?","It had three solid sides."],["What do you call a very small hand of cards?","A mini-deal."],["Why was the hand so tired?","It had a lot of deals."],["Why was the card so sad?","It got left in the discard pile."],["Why was the discard pile so crowded?","Everyone had a card to give."],["Why was the stock pile so full?","It was well stocked."],["Why was the waste pile so sad?","Nobody wanted it."],["Why did the foundation get strong?","It was built a card at a time."],["Why did the tableau go to the party?","It was a real spread."],["What's a card's favorite place to stay?","A suit-e."],["Why did the card hang out with the queen?","It wanted a royal flush."],["What did the card say to the deck?","You're my type."],["Why do cards hate the rain?","They get all wet and shuffle-y."],["Why do cards love the sun?","It makes them shine."],["Why was the ace so proud?","He was either high or low, and always at the top."],["Why did Ace become a mascot?","He was a card, and the best one at that."],["Why is Ace so smart?","He's always one step ahead of the deal."],["Why does Ace love the home screen?","It's where all the games are."],["Why does Ace never lose?","He always has an ace up his sleeve."],["Why is Ace so cheerful?","He gets to see all the games."],["What does Ace say to the new player?","Welcome, you're in for a treat."],["What does Ace say after a win?","Ace-tounding!"],["What does Ace say after a loss?","Next time, partner."],["Why is Ace the best at hide and seek?","He's often found at the bottom of the deck."],["Why does Ace love jokes?","They're a real card trick for the face."],["What's Ace's favorite food?","Spade-ghetti."],["What's Ace's favorite color?","Heart red."],["What's Ace's favorite animal?","The ace-tronaut bunny."],["What's Ace's favorite game?","Whichever one you're playing."],["What's Ace's favorite number?","One, of course."],["What do you call Ace on a trampoline?","A high card."],["What's Ace's favorite drink?","A club soda."],["What's Ace's favorite movie?","Ace Ventura. Of course."],["Why did Ace go to the beach?","To catch some rays and a few good hands."],["Why was Ace so hot today?","He had a hot streak."],["Why was Ace cool today?","He had a cool hand."],["Why does Ace never gossip?","He keeps his cards close to the vest."],["Why does Ace love to travel?","He's always on the move, from game to game."]]),tb=ta.querySelector('.tb'),last=-1,first=true;if(!J.length||!tb)return;
   function say(){var i;do{i=Math.floor(Math.random()*J.length)}while(i===last&&J.length>1);last=i;
    tb.style.animation='none';void tb.offsetWidth;tb.style.animation='';tb.innerHTML='';var q=document.createElement('div'),a=document.createElement('div');q.textContent=J[i][0];a.textContent=J[i][1];a.style.cssText='margin-top:4px;color:#b3261e';tb.appendChild(q);tb.appendChild(a);var tg=document.createElement('button');tg.className='tourgo';tg.textContent='🎓 Take the tour';tb.appendChild(tg)}
   say();setInterval(say,60000)})();
  var tour=document.createElement('div');tour.id='tour';tour.innerHTML='<div id="tspot"></div><div id="tmock"></div><div id="tpanel"></div>';document.body.appendChild(tour);
  function ph(parts,lab){return '<div class="ph">'+parts+'</div><ol>'+lab.map(function(l,i){return '<li><b>'+(i+1)+'</b>'+l+'</li>'}).join('')+'</ol>'}
  function nb(n){return '<span class="n">'+n+'</span>'}
  var MK={
   sheet:ph('<div style="top:10px;height:150px;background:rgba(255,255,255,.1)"></div><div class="bd" style="bottom:48px;height:34px;background:#1c8a4e">'+nb(1)+'<div style="text-align:center;font:800 11px/34px Arial">▶ Play now</div></div><div class="bd" style="bottom:8px;height:34px;background:#2f6fd6">'+nb(2)+'<div style="text-align:center;font:800 11px/34px Arial">⚙ Update settings</div></div>',['<strong>Play now</strong> starts right away with your saved settings.','<strong>Update settings</strong> opens the setup page first.']),
   menu:ph('<div class="bd" style="top:8px;height:50px">'+nb(1)+'</div><div class="bd" style="top:64px;height:54px">'+nb(2)+'</div><div class="bd" style="top:124px;height:44px">'+nb(3)+'</div><div class="bd" style="bottom:8px;height:32px;background:#ffc83d">'+nb(4)+'</div>',['<strong>Game modes</strong> (tap one)','<strong>Level / board</strong> pickers','<strong>Options</strong> in folding sections','<strong>Play</strong> button']),
   ingame:ph('<div style="top:2px;height:14px;background:rgba(0,0,0,.4)">'+nb(1)+'</div><div class="bd" style="top:22px;height:24px">'+nb(2)+'</div><div class="bd" style="top:52px;height:114px">'+nb(3)+'</div><div class="bd" style="bottom:6px;height:34px">'+nb(4)+'</div>',['🏠 <strong>All games</strong> takes you back here','<strong>Score, time, moves</strong> and goals','<strong>The board</strong>: tap or drag','<strong>Buttons</strong>: undo, hint, menu']),
   chips:ph('<div class="bd" style="top:8px;height:24px">'+nb(1)+'<div style="font:800 11px/24px Arial;text-align:center">Chips $1,000</div></div><div class="bd" style="top:44px;height:70px">'+nb(2)+'</div><div class="bd" style="bottom:8px;height:44px">'+nb(3)+'</div>',['Your <strong>chips</strong>. Run out and the game ends.','The <strong>table</strong> and your cards.','<strong>Bet / Call / Raise / Fold</strong>. Open the menu to <strong>Cash out</strong> and keep your winnings.'])
  };
  var STEPS=[
   {t:"Hi, I'm Ace! 👋",x:"I'll show you around in about a minute. Tap Next, or Skip any time."},
   {t:'Game sections',x:'All 8 sections are shown here, two per row. Tap one and it pops out with its games.',sel:'.catc'},
   {t:'Game tiles',x:'Each tile is a game and shows what it offers: boards, modes and options. Tap one to open it.',sel:'.g'},
   {t:'Play now or settings',x:'After tapping a tile you choose how to start.',mock:'sheet'},
   {t:'The setup page',x:'Pick a mode, level or board, adjust helpers and animations, then press Play.',mock:'menu'},
   {t:'Random',x:"Can't decide? This picks a game for you and rolls the dice.",sel:'#rand'},
   {t:'Deck themes',x:'Change how every card looks with 60 themes and matching backgrounds. You can also switch me off here.',sel:'#deckbtn'},
   {t:'Inside a game',x:'Every game has the same layout.',mock:'ingame'},
   {t:'Hints and undo',x:'Tap 💡 Hint when stuck. Undo takes back a move. In Jewels Game a hint also shows by itself after 45 seconds of no move. Menu returns to the settings page.'},
   {t:'Chips and cashing out',x:'Poker, Blackjack and the other casino games start you with chips you choose.',mock:'chips'},
   {t:'Pick your puzzle',x:'Solitaire games and Sudoku have a ⇄ bar on the game screen to change the board or level, or roll a random one without leaving the game.'},
   {t:'Wins and losses',x:'When a game ends I pop up to celebrate with you, or cheer you up. Your best scores and stats are saved on this device.'},
   {t:"You're ready! 🎉",x:'Pick any tile, or let me choose for you.',last:1}
  ];
  var ti=0,tspot=document.getElementById('tspot'),tpanel=document.getElementById('tpanel'),tmock=document.getElementById('tmock');
  function tShow(){
    var st=STEPS[ti];
    if(st.sel==='.g'){if(window.__openCat)window.__openCat(0)}else if(window.__closeCat&&ti<3)window.__closeCat()
    tpanel.innerHTML='<div class="av">'+SVG+'</div><div class="tx"><h4>'+st.t+'</h4><p>'+st.x+'</p></div><div class="nv2"><button id="tb" '+(ti?'':'disabled')+'>◀ Back</button><span>'+(ti+1)+' / '+STEPS.length+'</span>'+(st.last?'<button id="tr">🎲 Random</button><button class="pri" id="tn">Done</button>':'<button id="tk">Skip</button><button class="pri" id="tn">Next ▶</button>')+'</div>';
    tmock.className=st.mock?'on':'';tmock.innerHTML=st.mock?MK[st.mock]:'';
    var el=st.sel?document.querySelector(st.sel):null;
    if(el){
      var fixed=getComputedStyle(el).position==='fixed';
      if(!fixed)window.scrollTo(0,Math.max(0,el.getBoundingClientRect().top+(window.pageYOffset||0)-90));
      setTimeout(function(){var r=el.getBoundingClientRect(),pad=4;tspot.style.cssText='left:'+(r.left-pad)+'px;top:'+(r.top-pad)+'px;width:'+(r.width+pad*2)+'px;height:'+Math.min(r.height+pad*2,300)+'px'},60);
    }else tspot.style.cssText='left:50%;top:40%;width:0;height:0';
  }
  function tOpen(){ti=0;tour.classList.add('on');tShow()}
  function tClose(){tour.classList.remove('on');ta.classList.remove('say');if(window.__closeCat)window.__closeCat();P.tour=1;save();try{window.scrollTo(0,0)}catch(e){}}
  ta.addEventListener('click',function(e){e.stopPropagation();if(e.target.closest&&e.target.closest('.tourgo')){ta.classList.remove('say');tOpen();return}ta.classList.toggle('say')});
  tour.addEventListener('click',function(e){
    var b=e.target.closest('button');if(!b)return;e.stopPropagation();
    if(b.id==='tn'){if(ti>=STEPS.length-1)tClose();else{ti++;tShow()}}
    else if(b.id==='tb'){if(ti>0){ti--;tShow()}}
    else if(b.id==='tk')tClose();
    else if(b.id==='tr'){tClose();hubRand.click()}
  });
  
}
/* ---------- magic trick (27-card trick, 20 variants) ---------- */
var MV=[
['Classic 27',27,3,'c','count','mid'],['Mini Nine',9,3,'r','say','first'],['Twenty-One',21,3,'c','fan','last'],['Sweet Sixteen',16,4,'c','count','rand'],
['Binary Sixteen',16,2,'r','fan','mid'],['Pocket Eight',8,2,'c','say','first'],['Five Rows',25,5,'r','count','mid'],['Big Six',36,6,'c','say','rand'],
['The Dozen',12,3,'r','count','last'],['Fifteen',15,3,'c','say','mid'],['Twenty',20,4,'r','fan','first'],['Two Dozen',24,4,'c','count','mid'],
['Eighteen',18,3,'r','fan','rand'],['Thirty',30,5,'c','say','last'],['Binary 32',32,2,'c','count','first'],['Ten Card',10,2,'r','say','rand'],
['Fourteen',14,2,'c','fan','mid'],['Twenty-Eight',28,4,'r','count','last'],['Thirty-Three',33,3,'c','fan','mid'],['Thirty-Five',35,5,'r','say','first']];
var MPAT=["Think of one card. Don't touch it, don't tell me!","Keep your card a secret. Just remember it.","I can't see your mind… yet!","Look at every card, then choose one silently.","No peeking at my hat!","Abracadabra… but first, pick a card in your head."];
var MQ=["Which {w} is your card in?","Is your card in a {w}? Tell me which one!","Point me to the {w} holding your card.","One more look. Which {w} now?","Almost there! Which {w}?"];
var MR=["Hmm, interesting…","Shuffling the magic dust…","The plot thickens!","Gathering the cards…","I'm getting a strong feeling…","Ooh, I see it forming!"];
var MFIN=["Ta-da! Is this your card?","Your card is… this one!","Magic never fails! Yours?","Behold, your card!"];
var SN=['Clubs','Diamonds','Hearts','Spades'],SS=['♣','♦','♥','♠'],RN={11:'Jack',12:'Queen',13:'King',14:'Ace'};
function mgName(c){return (RN[c.r]||c.r)+' of '+SN[c.s]}
function mgInit(v){
  var all=[];for(var s=0;s<4;s++)for(var r=2;r<=14;r++)all.push({r:r,s:s});
  for(var i=all.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=all[i];all[i]=all[j];all[j]=t}
  var n=v[1],p=v[2];
  return {v:v,n:n,p:p,deck:all.slice(0,n),C:Array.apply(null,Array(n)).map(function(_,i){return i}),round:0,done:false};
}
function mgPile(S,j){var out=[];for(var i=j;i<S.n;i+=S.p)out.push(i);return out}
// player says pile j; returns {order:newDeck, C:new positions, slot:s}
function mgAnswer(S,j){
  var p=S.p,m=S.n/p,C=S.C.filter(function(i){return i%p===j}),best=null,opts=[];
  for(var s=0;s<p;s++){
    var np=C.map(function(i){var t=(i-j)/p;return s*m+t});
    var cnt={},mx=0;np.forEach(function(x){var k=x%p;cnt[k]=(cnt[k]||0)+1;if(cnt[k]>mx)mx=cnt[k]});
    opts.push([s,mx,np]);
  }
  var mn=Math.min.apply(null,opts.map(function(o){return o[1]}));
  var good=opts.filter(function(o){return o[1]===mn}),mode=S.v[5],pref;
  if(mode==='first')pref=[0];else if(mode==='last')pref=[p-1];else if(mode==='mid')pref=[Math.floor(p/2)];else pref=[];
  var ch=good.filter(function(o){return pref.indexOf(o[0])>=0})[0]||good[Math.floor(Math.random()*good.length)];
  var piles=[];for(var q=0;q<p;q++)piles.push(mgPile(S,q).map(function(i){return S.deck[i]}));
  var chosen=piles[j],rest=piles.filter(function(_,q){return q!==j}),ord=[],ri=0;
  for(var s2=0;s2<p;s2++){if(s2===ch[0])ord.push(chosen);else ord.push(rest[ri++])}
  S.deck=[].concat.apply([],ord);S.C=ch[2];S.round++;S.slot=ch[0];
  if(S.C.length===1)S.done=true;
  return S;
}
window.__mgTest={MV:MV,init:mgInit,answer:mgAnswer};
var mgEl=null,mgS=null,mgLast=-1,mgBusy=false;
function mgCSS(){
  if(document.getElementById('mgsty'))return;
  var u=document.createElement('style');u.id='mgsty';
  u.textContent='#mg{position:fixed;inset:0;z-index:9400;background:radial-gradient(ellipse at 50% 20%,#3a1a6a,#0b0620 70%);color:#fff;font-family:Roboto,Arial,sans-serif;display:none;flex-direction:column}#mg.on{display:flex}'+
  '#mg .mh{display:flex;align-items:center;gap:8px;padding:8px 12px;font-weight:900;font-size:16px;background:rgba(0,0,0,.35)}#mg .mh span{flex:1}#mg .mh button{height:34px;padding:0 12px;border:0;background:rgba(255,255,255,.18);color:#fff;font:800 13px Roboto,Arial,sans-serif;cursor:pointer}'+
  '#mgst{position:relative;flex:1;min-height:0;margin:6px 8px}#mgst .mc{position:absolute;border-radius:5px;transition:left .45s ease,top .45s ease,transform .4s;box-shadow:0 2px 4px rgba(0,0,0,.5);font-weight:900;overflow:hidden;cursor:pointer}'+
  '#mgst .mc b{position:absolute;left:3px;top:1px;font-size:inherit;line-height:1;text-align:center;text-shadow:0 0 1px rgba(255,255,255,.6)}#mgst .mc b u{text-decoration:none;display:block;font-size:1.4em;line-height:1}#mgst.col .mc b u{display:inline;margin-left:1px}#mgst .mc i{position:absolute;right:3px;bottom:1px;font-style:normal;font-size:1.5em;line-height:1}#mgst .mc.bk{border:2px solid}'+
  '#mgst .hl{outline:3px solid #ffd75e;z-index:5000!important}'+
  '#mgbig{position:absolute;left:50%;top:48%;width:110px;height:154px;margin:-77px 0 0 -55px;z-index:9000;transform:scale(0) rotate(-12deg);transition:transform .6s cubic-bezier(.2,1.4,.4,1);font-weight:900;font-size:26px;border-radius:10px;box-shadow:0 8px 30px rgba(0,0,0,.7),0 0 40px rgba(255,215,94,.6)}#mgbig.on{transform:scale(1.4) rotate(0)}#mgbig b{position:absolute;left:8px;top:6px}#mgbig i{position:absolute;left:0;right:0;top:50%;margin-top:-32px;text-align:center;font-style:normal;font-size:64px;line-height:1}'+
  '#mgct{position:absolute;left:0;right:0;top:12%;text-align:center;font-size:54px;font-weight:900;color:#ffd75e;text-shadow:0 3px 0 #000}'+
  '#mg .pn{display:flex;gap:8px;padding:8px 12px;background:rgba(0,0,0,.4);border-top:3px solid #ffd75e;min-height:96px}#mg .av{width:62px;flex:0 0 62px}#mg .av svg{width:100%;display:block;overflow:visible}#mg .av .armR{transform-box:fill-box;transform-origin:50% 0;animation:wave .5s ease-in-out infinite alternate}#mg .av .sd,#mg .av .tear{display:none}'+
  '#mg .tx{flex:1;font-size:15px;font-weight:800;line-height:1.3;align-self:center}#mg .bt{display:flex;gap:6px;padding:8px 10px calc(env(safe-area-inset-bottom) + 10px);background:rgba(0,0,0,.4);flex-wrap:wrap}#mg .bt button{flex:1;min-width:70px;height:46px;border:0;background:rgba(255,255,255,.18);color:#fff;font:800 14px Roboto,Arial,sans-serif;cursor:pointer}#mg .bt button.pri{background:linear-gradient(#ffd75e,#e0a000);color:#1b1500}#mg .bt button:disabled{opacity:.35}';
  document.head.appendChild(u);
}
function mgTheme(){var t=th(E.t)[2]||{f:'linear-gradient(#fff,#f1efe6)',i:'#14171c',r:'#d4202a',b:'#b9b6aa',k:'repeating-linear-gradient(45deg,#1b4aa0 0 6px,#2c68cf 6px 12px)',kb:'#fff'};return t}
function mgCard(c,w,h,down){
  var t=mgTheme(),e=document.createElement('div');e.className='mc'+(down?' bk':'');e.style.width=w+'px';e.style.height=h+'px';e.style.fontSize=Math.max(9,Math.round(w*.3))+'px';
  if(down){e.style.background=t.k;e.style.borderColor=t.kb}
  else{e.style.background=t.f;e.style.color=(c.s===1||c.s===2)?t.r:t.i;e.innerHTML='<b>'+(RN[c.r]?RN[c.r][0]:c.r)+'<u>'+SS[c.s]+'</u></b><i>'+SS[c.s]+'</i>'}
  return e;
}
function mgSay(t){var e=document.getElementById('mgtx');if(e)e.textContent=t}
function mgBtns(h){document.getElementById('mgbt').innerHTML=h}
function mgDims(){var st=document.getElementById('mgst');return {W:st.clientWidth,H:st.clientHeight}}
function mgGeom(S){
  var d=mgDims(),p=S.p,m=S.n/p,col=S.v[3]==='c',g={};
  if(col){
    var w=Math.min(58,Math.floor((d.W-(p+1)*6)/p)),h=Math.round(w*1.4),step=Math.max(13,Math.min(h*.42,(d.H-h-8)/(m-1)));
    var gap=(d.W-p*w)/(p+1);
    g.pos=function(i){var pj=i%p,k=Math.floor(i/p);return [gap+pj*(w+gap),4+k*step]};g.w=w;g.h=h;
  }else{
    var rowH=(d.H-4)/p,h2=Math.min(Math.floor(rowH-5),84),w2=Math.round(h2/1.4),step2=Math.max(13,Math.min(w2*.6,(d.W-w2-8)/(m-1)));
    var x0=(d.W-(w2+step2*(m-1)))/2;
    g.pos=function(i){var pj=i%p,k=Math.floor(i/p);return [x0+k*step2,2+pj*rowH]};g.w=w2;g.h=h2;
  }
  g.stack=[(d.W-g.w)/2,(d.H-g.h)/2-10];return g;
}
function mgRender(mode){ // mode 'deal' or 'stack'
  var S=mgS,st=document.getElementById('mgst'),g=mgGeom(S);st.className=S.v[3]==='c'?'col':'';
  if(!S.els||S.els.length!==S.n){st.innerHTML='';S.els=S.deck.map(function(c){var e=mgCard(c,g.w,g.h,false);st.appendChild(e);return e})}
  var byKey={};
  S.deck.forEach(function(c,i){var e=S.els[i];
    // find element for this card: keep a card->el map
  });
  if(!S.map){S.map={};S.deck.forEach(function(c,i){S.map[c.r+'_'+c.s]=S.els[i]})}
  S.deck.forEach(function(c,i){
    var e=S.map[c.r+'_'+c.s];e.style.width=g.w+'px';e.style.height=g.h+'px';e.style.zIndex=i;
    e.style.transitionDelay=(mode==='deal'?i*28:i*8)+'ms';
    var xy=mode==='stack'?[g.stack[0]+(i%3)*.5,g.stack[1]+i*.4]:g.pos(i);
    e.style.left=xy[0]+'px';e.style.top=xy[1]+'px';
    e.dataset.p=i%S.p;
  });
}
function mgAsk(){
  var S=mgS,w=S.v[3]==='c'?'column':'row',lab=S.v[3]==='c'?'Column ':'Row ';
  var q=MQ[Math.min(S.round,MQ.length-1)].replace('{w}',w);
  mgSay(q);var h='';for(var j=0;j<S.p;j++)h+='<button data-pile="'+j+'">'+lab+(j+1)+'</button>';mgBtns(h);mgBusy=false;
}
function mgStart(){
  mgCSS();mgS=mgInit(mgPickV());
  var S=mgS;
  mgEl.querySelector('.mh span').textContent='🎩 Ace\'s Magic · '+S.v[0]+' ('+S.n+' cards)';
  var st=document.getElementById('mgst');st.innerHTML='';S.els=null;S.map=null;
  setTimeout(function(){mgRender('stack');setTimeout(function(){mgRender('deal');if(window.__sfx)window.__sfx.shuffle()},50)},30);
  mgSay(MPAT[Math.floor(Math.random()*MPAT.length)]+' I\'ve spread '+S.n+' cards in '+S.p+' '+(S.v[3]==='c'?'columns':'rows')+'.');
  mgBtns('<button class="pri" data-a="ready">I\'ve picked one ✨</button>');
}
function mgPickV(){var i;do{i=Math.floor(Math.random()*MV.length)}while(i===mgLast&&MV.length>1);mgLast=i;return MV[i]}
function mgNext(){
  var S=mgS;mgBusy=true;
  if(S.done){mgReveal();return}
  mgRender('stack');if(window.__sfx)window.__sfx.shuffle();
  mgSay(MR[Math.floor(Math.random()*MR.length)]);mgBtns('');
  setTimeout(function(){mgRender('deal');setTimeout(mgAsk,S.n*28+500)},700);
}
function mgReveal(){
  var S=mgS,x=S.C[0],card=S.deck[x],st=document.getElementById('mgst'),d=mgDims();
  mgBtns('');mgSay('Now I know your card…');
  var finish=function(){
    var t=mgTheme(),big=document.createElement('div');big.id='mgbig';big.style.background=t.f;big.style.color=(card.s===1||card.s===2)?t.r:t.i;
    big.innerHTML='<b>'+(RN[card.r]?RN[card.r][0]:card.r)+'</b><i>'+SS[card.s]+'</i>';st.appendChild(big);
    setTimeout(function(){big.classList.add('on');if(window.__sfx)window.__sfx.win()},50);
    mgSay(MFIN[Math.floor(Math.random()*MFIN.length)]+' The '+mgName(card)+'!');
    mgBtns('<button class="pri" data-a="yes">Yes! 🎉</button><button data-a="again">Another trick</button><button data-a="close">Close</button>');mgBusy=false;
  };
  var style=S.v[4];
  if(style==='count'){
    mgRender('stack');var ct=document.createElement('div');ct.id='mgct';st.appendChild(ct);var k=0;
    var iv=setInterval(function(){k++;ct.textContent=k;if(window.__sfx)window.__sfx.swap&&0;if(k>=x+1){clearInterval(iv);setTimeout(function(){ct.remove();[].forEach.call(st.querySelectorAll('.mc'),function(e){e.style.opacity=.25});finish()},300)}},Math.max(60,Math.min(160,1800/(x+1))));
    mgSay('Counting down through the deck…');
  }else if(style==='fan'){
    st.innerHTML='';S.els=null;S.map=null;var g=mgGeom(S);S.deck.forEach(function(c,i){var e=mgCard(c,g.w,g.h,true),xy=g.pos(i);e.style.left=xy[0]+'px';e.style.top=xy[1]+'px';e.style.zIndex=i;st.appendChild(e);if(i===x)S.fanEl=e});
    mgSay('Let me find it among all these backs…');
    var hand=document.createElement('div');hand.style.cssText='position:absolute;font-size:34px;z-index:8000;transition:all .9s;left:'+(d.W/2)+'px;top:-30px';hand.textContent='👇';st.appendChild(hand);
    setTimeout(function(){var xy=g.pos(x);hand.style.left=(xy[0]+g.w/2-14)+'px';hand.style.top=(xy[1]-34)+'px'},300);
    setTimeout(function(){S.fanEl.classList.add('hl');setTimeout(function(){hand.remove();finish()},700)},1500);
  }else{
    mgRender('stack');mgSay('Drumroll please… 🥁');setTimeout(finish,1200);
  }
}
function mgOpen(){
  mgCSS();
  if(!mgEl){
    mgEl=document.createElement('div');mgEl.id='mg';
    mgEl.innerHTML='<div class="mh"><span></span><button data-a="close">✕ Close</button></div><div id="mgst"></div><div class="pn"><div class="av">'+mkSVG('magic')+'</div><div class="tx" id="mgtx"></div></div><div class="bt" id="mgbt"></div>';
    document.body.appendChild(mgEl);
    mgEl.addEventListener('click',function(e){
      var b=e.target.closest('button'),pc=e.target.closest('.mc');
      var a=b&&b.dataset.a,pile=b&&b.dataset.pile;
      if(!b&&pc&&!mgBusy&&mgS&&!mgS.done&&document.querySelector('#mgbt [data-pile]'))pile=pc.dataset.p;
      if(a==='close'){mgEl.classList.remove('on')}
      else if(a==='again'){mgStart()}
      else if(a==='yes'){if(window.__sfx)window.__sfx.win();mgSay('Of course! Magic is what I do. 🎩');mgBtns('<button class="pri" data-a="again">Another trick</button><button data-a="close">Close</button>')}
      else if(a==='ready'){mgS.round=0;mgNext0()}
      else if(pile!=null&&pile!==''&&!mgBusy){mgBusy=true;mgAnswer(mgS,+pile);mgNext()}
    });
    window.addEventListener('resize',function(){if(mgEl.classList.contains('on')&&mgS&&mgS.els)mgRender('deal')});
  }
  mgEl.classList.add('on');setTimeout(mgStart,60);
}
function mgNext0(){mgAsk()}
window.__magic=mgOpen;

/* ---------- chrome: tools row, drawer, random buttons (batch 6) ---------- */
(function(){
var inGame=!!(document.getElementById('menu')&&window.__cur),hb=document.getElementById('homebar');
var ALL=['xfrac','xdec','xtarget','xodd','xop','xdivis','xgcd','xfact','xspeed','xangle','xarea','xalg','xratio','xavg','xcmp','xplace','xround','xord','xneg','xpow','xsq','xdiv','xmul','xsub','xadd','mmatch','mnback','mshape','marrow','mcard','mshade','mcode','mname','mpair','mstream','mhilo','mtotal','mcount','mwhere','mpos','mshop','memoji','mchange','mmiss','mpath','mmirror','mflash','msimon','mletter','mdigit','znote','zchange','zcomp','zshape','zanim','znato','zmorse','zemoji','zcolor','zest','zseq','zprime','zfrac','zpct','zunit','zcal','ztime','zclock','zbase','zroman','zelem','zstate','zcont','zflag','zcap','whalv','walpha','watoz','wrain','wrecall','wsort','wodd','wspell','whid','wgap','wvowel','wchain','wbomb','wcount','wbuild','wbee','wboggle','wpyr','wladder','wcrypt','wwheel','whang','wjotto','wmulti','wguess','dodge','bigger','anagram','qcount','nback','mirror','stopline','stack','rhythm','schulte','mathsp','tapspd','typing','chimp','nummem','oddc','stroop','aim','whack','react','fifteens','dice21','dbingo','knuckle','tenzi','dmerge','ceelo','dwar','chicago','threes','ludo','qwixx','golfd','skunk','lcr','mexico','beetle','bunco','pokerd','scc','liars','shutbox','pig','farkle','yacht','fillpix','hitori','twist','soko','calcu','queens','maze','ten','m24','shik','sky','futo','takuzu','peg','pipe','water','code','flood','nono','echo','hanoi','slide','lights','mines','g2048','simon','calc','castle','eightoff','canfield','bakers','scorpion','thieves','yukon','spider','sevens','slapjack','beggar','tycoon','bingo','scratch','deuces','bigsix','reddog','casinowar','letitride','caribbean','sicbo','keno','craps','roulette','tcpoker','baccarat','vpoker','thirty1','cheat','hearts','clock','tripeaks','pyramid','accordion','hilo','memory','snap','crazy8','colorrush','golf','klondike','freecell','acesup','gin','oldmaid','gofish','war','sudoku','sudoku2','mahjong','jewel','wordsearch','blackjack','slots','holdem','omaha','draw','stud','checkers','chess','chinese','hop','invade','blocks','chomp','pong','capsule','hopper','hopper2','hopper3','brick','rocks','snake','guard','bubble','duck','ttt','uttt','c4','reversi','gomoku','dots','mancala','morris','hex','break','fox','snakes','nim','konane','pentago','guesswho'];
var cs=document.createElement('style');
cs.textContent='#tools{display:flex;align-items:stretch;background:rgba(0,0,0,.5);font-family:Roboto,Arial,sans-serif;position:relative;z-index:1100}'+
'#tools>button{flex:1 1 0;min-width:0;aspect-ratio:1/1;height:auto!important;width:auto!important;margin:0!important;border:0!important;border-left:1px solid rgba(255,255,255,.1)!important;border-radius:0!important;background:none!important;color:#fff;font-size:28px!important;line-height:1;line-height:1;padding:0!important;cursor:pointer;display:flex;align-items:center;justify-content:center;position:static!important;box-shadow:none!important;-webkit-tap-highlight-color:transparent}'+
'#tools>button:first-child{border-left:0!important}#tools>button:active{background:rgba(255,255,255,.3)!important}#tools svg{width:min(36px,84%);height:auto;aspect-ratio:1/1}'+
'body>#tools.hubt{position:fixed;top:0;left:0;right:0}'+
'#homebar{display:block!important;height:auto!important;padding-right:0!important}#homebar .nav{display:flex;align-items:stretch}#homebar .nav>.hm{font-size:0!important;flex:0 0 48px!important;aspect-ratio:1/1;padding:0!important}#homebar .nav>button.cats{flex:0 0 48px!important;aspect-ratio:1/1;font-size:26px!important}#homebar .nav>.hm:before{content:"🏠";font-size:26px}'+
'#menu,#picker{top:calc(var(--nh,28px) + var(--th,26px))!important}'+
'#tltoast{position:fixed;left:50%;top:calc(var(--nh,0px) + var(--th,26px) + 38px);transform:translateX(-50%);z-index:9700;background:#fff;color:#14171c;border:3px solid #14171c;padding:6px 12px;font:900 13px Roboto,Arial,sans-serif;display:none;max-width:86vw;text-align:center}#tltoast.on{display:block}'+
'#aceopt{flex:0 0 46px!important;padding:0!important;display:flex;align-items:center;justify-content:center}#aceopt svg{width:30px;height:30px;overflow:visible}'+
'#menu.peek{position:fixed!important;left:0!important;right:0!important;bottom:0!important;top:auto!important;height:56vh!important;inset:auto 0 0 0!important;z-index:1050!important;border-top:3px solid #ffc83d;box-shadow:0 -12px 30px rgba(0,0,0,.6)}#menu.peek .startbar,#menu.peek .xlink,#menu.peek .howbtn{display:none!important}'+
'#peekbar{display:none;gap:6px;padding:6px 8px;background:#0b1626;align-items:center;color:#fff;font:900 14px Roboto,Arial,sans-serif;flex:0 0 auto}#menu.peek #peekbar{display:flex}#peekbar span{flex:1}#peekbar button{height:36px;border:0;padding:0 12px;background:rgba(255,255,255,.16);color:#fff;font:800 13px Roboto,Arial,sans-serif;cursor:pointer}#peekbar button.pri{background:#ffc83d;color:#1a1200}'+
'#erc{position:fixed;inset:0;z-index:9800;background:rgba(3,8,18,.9);display:none;align-items:center;justify-content:center;padding:20px}#erc.on{display:flex}#erc .bx{background:#0d243f;border:3px solid #ffc83d;color:#fff;padding:18px;max-width:340px;font-family:Roboto,Arial,sans-serif}#erc h3{margin:0 0 8px;font-size:20px}#erc p{margin:0 0 14px;font-size:14px;line-height:1.4;opacity:.9}#erc .bt{display:flex;gap:8px}#erc button{flex:1;height:46px;border:0;font:800 15px Roboto,Arial,sans-serif;cursor:pointer;background:rgba(255,255,255,.16);color:#fff}#erc button.dg{background:#d4202a}';
document.head.appendChild(cs);
var tools=document.createElement('div');tools.id='tools';
function mk(id,html,label,fn){var b=document.createElement('button');b.type='button';b.id=id;b.innerHTML=html;b.title=label;b.setAttribute('aria-label',label);b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();fn(e)});tools.appendChild(b);return b}
var tt=document.createElement('div');tt.id='tltoast';document.body.appendChild(tt);
function tsay(t){tt.textContent=t;tt.classList.add('on');clearTimeout(tsay.t);tsay.t=setTimeout(function(){tt.classList.remove('on')},1800)}
function go(k,rand){window.__AUTOPLAY=true;if(k===window.__cur&&window.__cur)window.__NEWG=true;if(rand)window.__RANDMODE=true;var f=function(){window.__go(k)};if(window.__bye2&&inGame){if(!window.__bye2(f))f()}else f()}
/* dice: random game (hub has its own animated roll) */
var hubRand=document.getElementById('rand');
if(hubRand){hubRand.innerHTML='🎲';hubRand.title='Random game';hubRand.setAttribute('aria-label','Random game');tools.appendChild(hubRand)}
else mk('rand','🎲','Random game',function(){var c=ALL.filter(function(k){return k!==window.__cur});go(pick(c),true)});
if(inGame){
  var nb=null;
  mk('newg','🔄','New game',function(e){if(nb){clearTimeout(nb);nb=null;go(window.__cur,false);return}tsay('Tap 🔄 again to start a new game');nb=setTimeout(function(){nb=null},2600)});
  if(window.__ADV&&!window.__ADV.tour)mk('advb','🗺','Adventure level',function(){if(window.__advInfo)window.__advInfo()});
  if(['klondike','freecell','golf','jewel','wordsearch'].indexOf(window.__cur)>=0)mk('tourb','🧭','Board Tour',function(){if(window.__tourOpen)window.__tourOpen(window.__cur)});
  mk('tutb','🎓','Start Ace tutorial',function(){if(window.__howto&&window.__HOW&&window.__HOW[window.__cur])window.__howto(window.__cur);else tsay('No tutorial for this game yet')});
  mk('nextl','⏭️','Next level',function(){
    if(window.__ADV&&window.__ADV.tour){if(window.__tourNext)window.__tourNext();return}
    if(window.__ADV){tsay('Win this level to move on!');return}
    if(typeof window.__next==='function'){try{window.__next();return}catch(e){}}
    var m=document.getElementById('modal'),bs=m&&m.classList.contains('on')?[].slice.call(m.querySelectorAll('button')):[];
    var nx=bs.filter(function(b){return /next|continue|another|new (game|deal|hand|puzzle)|play again/i.test(b.textContent)})[0];
    if(nx){nx.click();return}go(window.__cur,false)});
}
mk('magicb',document.getElementById('magicb')?'':'<svg viewBox="0 0 24 24"><ellipse cx="9" cy="6" rx="2.2" ry="5" fill="#fff" stroke="#14171c" stroke-width=".8"/><ellipse cx="15" cy="6" rx="2.2" ry="5" fill="#fff" stroke="#14171c" stroke-width=".8"/><ellipse cx="9" cy="6.5" rx="1" ry="3.2" fill="#ff9db4"/><ellipse cx="15" cy="6.5" rx="1" ry="3.2" fill="#ff9db4"/><rect x="5" y="11" width="14" height="8" fill="#222" stroke="#fff" stroke-width=".7"/><rect x="5" y="16" width="14" height="2" fill="#d4202a"/><rect x="2.5" y="18.5" width="19" height="3" rx="1.2" fill="#222" stroke="#fff" stroke-width=".7"/></svg>',"Ace's magic trick",function(){if(window.__magic)window.__magic()});
/* eraser + reset */
var erc=document.createElement('div');erc.id='erc';erc.innerHTML='<div class="bx"><h3>Reset everything?</h3><p>This erases all saved settings, games in progress, stats, high scores and deck choices on this device.</p><div class="bt"><button id="ern">Cancel</button><button class="dg" id="ery">Reset all</button></div></div>';document.body.appendChild(erc);
mk('erase','<svg viewBox="0 0 24 24" fill="none"><path d="M3.5 15.5 13 6a2 2 0 0 1 2.8 0l3.2 3.2a2 2 0 0 1 0 2.8L11 20H7l-3.5-3.5a1.4 1.4 0 0 1 0-1Z" fill="#ff9db4" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M9.5 9.5 16.5 16.5" stroke="#fff" stroke-width="1.6"/><path d="M11 20h9" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>','Reset all settings and games',function(){erc.classList.add('on')});
erc.addEventListener('click',function(e){if(e.target.id==='ern'||e.target===erc)erc.classList.remove('on');if(e.target.id==='ery'){try{localStorage.clear()}catch(x){}try{sessionStorage.clear()}catch(x){}window.__deck=null;erc.classList.remove('on');if(window.__go)window.__go('hub');else location.reload()}});
/* deck buttons (existing) + random deck / random background */
tools.appendChild(btn);
mk('rdeck','🔀','Random deck',function(){var ids=TH.map(function(x){return x[0]}).filter(function(i){return i!==E.t}),id=pick(ids);P.t=id;save();apply();tsay('Deck: '+th(id)[1]);if(sh.classList.contains('on'))render()});
mk('rbg','🎨','Random background',function(){var ids=BGS.map(function(x){return x[0]}).filter(function(i){return i!==E.bg}),id=pick(ids);P.bg=id;save();apply();tsay('Background: '+bgOf(id)[1]);if(sh.classList.contains('on'))render()});
mk('testlink','🧪','(testing) Live project',function(){var a=document.createElement('a');a.href='https://claude.ai/artifact/XU6q8DGrUXWkuDWdx29kNw';a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();setTimeout(function(){a.remove()},500)});
/* ---------- solitaire deck/background header bar ---------- */
(function(){
var SOL=['golf','klondike','freecell','acesup','spider','yukon','thieves','scorpion','bakers','canfield','eightoff','castle','calc','simon','pyramid','tripeaks','clock'];
var tries=0,tm=setInterval(function(){tries++;if(tries>160){clearInterval(tm);return}
 var cur=window.__cur;if(!cur||SOL.indexOf(cur)<0)return;
 var hud=document.getElementById('hud'),g=document.getElementById('game');if((!g&&!hud)||document.getElementById('deckbar'))return;
 clearInterval(tm);
 var cs=document.createElement('style');cs.textContent='#deckbar{display:flex;gap:4px;padding:4px 6px;background:rgba(0,0,0,.4);position:relative;z-index:5}#deckbar button{flex:1 1 0;min-width:0;min-height:36px;border:0;border-radius:0!important;background:rgba(255,255,255,.16);color:#fff;font:700 12px/1.1 Roboto,Arial,sans-serif;padding:0 2px;cursor:pointer;white-space:nowrap}#deckbar button:active{background:rgba(255,255,255,.34)}';document.head.appendChild(cs);
 var bar=document.createElement('div');bar.id='deckbar';
 bar.innerHTML='<button type="button" data-k="dp" aria-label="Previous deck style">◀ Deck</button><button type="button" data-k="dn" aria-label="Next deck style">Deck ▶</button><button type="button" data-k="bp" aria-label="Previous background">◀ Table</button><button type="button" data-k="bn" aria-label="Next background">Table ▶</button>';
 (hud&&hud.parentNode?hud.parentNode.insertBefore(bar,hud):g.insertBefore(bar,g.firstChild));
 function step(list,cur,d){var i=list.indexOf(cur);if(i<0)i=0;return list[(i+d+list.length)%list.length]}
 bar.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;e.stopPropagation();var k=b.dataset.k;
  if(k==='dp'||k==='dn'){var ids=TH.map(function(x){return x[0]}),id=step(ids,E.t,k==='dn'?1:-1);P.t=id;save();apply();tsay('Deck: '+th(id)[1])}
  else{var bi=['default'].concat(BGS.map(function(x){return x[0]})),nb=step(bi,E.bg,k==='bn'?1:-1);P.bg=nb;save();apply();tsay('Table: '+(nb==='default'?'Game default':bgOf(nb)[1]))}
  if(sh.classList.contains('on'))render()});
},250);
})();
/* ---------- 50-song soundtrack (chords + memorable motifs), on/off + picker ---------- */
(function(){
var SC={maj:[0,2,4,5,7,9,11],min:[0,2,3,5,7,8,10],dor:[0,2,3,5,7,9,10],lyd:[0,2,4,6,7,9,11],mix:[0,2,4,5,7,9,10]};
var NN=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
var CALM=['Sunday Morning','Quiet Lake','Warm Blanket','Rainy Window','Soft Snowfall','Lazy River','Moonlit Porch','Gentle Breeze','Cozy Fireplace','Tea Time','Starry Meadow','Slow Sunrise','Drifting Clouds','Lantern Glow','Velvet Evening','Still Water','Dandelion Wishes','Paper Boats','Cabin Rain','Midnight Library','Peaceful Garden','Sleepy Harbor','Feather Fall','Golden Hour','Coral Calm'];
var FUN=['Pocket Rocket','Sneaky Grin','Jelly Bounce','Pixel Parade','Silly Sprint','Cartwheel Carnival','Bubblegum Hop','Turbo Taco','Disco Hamster','Jazzy Jitterbug','Cheeky Chase','Confetti Cannon','Funky Pickle','Spring Loaded','Banana Boogie','Rocket Waltz','Happy Robot','Sneaker Squeak','Lucky Streak','Party Penguin','Sunny Swagger','Arcade Sunrise','Cherry Pop','Wobble Wobble','Victory Lap'];
var PC=[[0,5,3,4],[0,3,4,3],[5,3,0,4],[0,2,5,4],[3,0,4,5],[0,4,5,3],[1,4,0,5],[0,5,1,4]];
var PF=[[0,4,5,3],[0,3,0,4],[5,3,0,4],[0,5,3,4],[0,2,3,4],[0,6,5,4],[0,3,5,4],[1,4,0,0]];
var CM=['maj','lyd','dor','min','maj','mix','lyd','min'],FM=['maj','mix','min','maj','dor','maj','mix','min'];
var CR=[0,7,5,2,9,3,10,8,4,0,7,5,2],FR=[0,5,7,2,9,4,10,3,8,1,6,0,7];
var SONGS=[];
for(var i=0;i<25;i++){SONGS.push({n:CALM[i],k:'c',bpm:60+(i*7%25),r:CR[i%13],m:CM[i%8],p:PC[(i*3+1)%8],seed:i*17+3})}
for(var i=0;i<25;i++){SONGS.push({n:FUN[i],k:'f',bpm:112+(i*11%36),r:FR[i%13],m:FM[i%8],p:PF[(i*5+2)%8],seed:i*29+101})}
/* interleave: calm, fun, calm, fun ... */
var S2=[];for(var i=0;i<25;i++){S2.push(SONGS[i]);S2.push(SONGS[25+i])}SONGS=S2;
function rng(s){return function(){s=(s*1664525+1013904223)>>>0;return s/4294967296}}
function chordOf(s,d){var sc=SC[s.m],r=s.r,a=sc[d%7],b=sc[(d+2)%7]+(d+2>=7?12:0),c=sc[(d+4)%7]+(d+4>=7?12:0);
  var th=(b-a+12)%12,q=th===3?'m':'',fi=(c-a+12)%12;if(fi===6)q=(th===3?'dim':'♭5');return {notes:[r+a,r+b,r+c],name:NN[(r+a)%12]+q,deg:d}}
function build(s){var R=rng(s.seed),ch=s.p.map(function(d){return chordOf(s,d)}),calm=s.k==='c';
  /* motif: 8 eighth-slots per bar, values = scale-step offsets from chord root (or null) */
  var rh=calm?[[0,2,4,6],[0,3,5],[0,2,3,4,6],[0,4],[1,3,5,6]]:[[0,1,2,3,4,5,6,7],[0,2,3,4,6,7],[0,1,3,4,6],[0,2,4,5,6,7],[0,3,4,6,7]][0]&&[[0,1,2,3,4,5,6,7],[0,2,3,4,6,7],[0,1,3,4,6],[0,2,4,5,6,7],[0,3,4,6,7]];
  var slots=rh[Math.floor(R()*rh.length)],mo=slots.map(function(sl,j){return {t:sl,o:[0,2,4,2,7,4,5,2,1][Math.floor(R()*9)]+(j===0?0:0)}});
  mo[0].o=[0,2,4][Math.floor(R()*3)];
  var steps=[],bars=8,ev=[];
  for(var b=0;b<bars;b++){var c=ch[b%4],pass=b>=4,root=c.deg;
    mo.forEach(function(m,j){var o=m.o;if(b%4===3&&j===mo.length-1)o=pass?0:2;if(pass&&j%2===1)o+=((s.seed+j)%2?1:-1)*(b%4===1?1:0);
      var sc=SC[s.m],idx=root+o,oct=Math.floor(idx/7),pc=sc[((idx%7)+7)%7];var midi=60+s.r+pc+12*oct+(calm?12:12);
      ev.push({s:b*8+m.t,m:midi,d:calm?3.2:1.3})});}
  return {ch:ch,ev:ev,bars:bars}}
var AC=null,master=null,dly=null,timer=0,cur=0,on=false,nextT=0,step=0,song=null,loops=0,CUR=null,vol=.5;
function ctx(){if(AC)return AC;try{AC=new (window.AudioContext||window.webkitAudioContext)();master=AC.createGain();master.gain.value=vol;
  dly=AC.createDelay(1);dly.delayTime.value=.33;var fb=AC.createGain();fb.gain.value=.3;dly.connect(fb);fb.connect(dly);var wet=AC.createGain();wet.gain.value=.35;dly.connect(wet);wet.connect(master);master.connect(AC.destination)}catch(e){AC=null}return AC}
function hz(m){return 440*Math.pow(2,(m-69)/12)}
function tone(t,m,dur,type,g,send){var o=AC.createOscillator(),e=AC.createGain();o.type=type;o.frequency.value=hz(m);e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(g,t+.012);e.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(e);e.connect(master);if(send)e.connect(dly);o.start(t);o.stop(t+dur+.05)}
function hat(t,g){var n=AC.createBufferSource(),len=AC.sampleRate*.04|0,b=AC.createBuffer(1,len,AC.sampleRate),d=b.getChannelData(0);for(var i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);n.buffer=b;var f=AC.createBiquadFilter();f.type='highpass';f.frequency.value=7000;var e=AC.createGain();e.gain.value=g;n.connect(f);f.connect(e);e.connect(master);n.start(t)}
function sched(){if(!on||!AC)return;while(nextT<AC.currentTime+.35){var s=SONGS[cur],spb=60/s.bpm/2,P=song,pos=step%(P.bars*8),bar=Math.floor(pos/8),sl=pos%8,c=P.ch[bar%4],calm=s.k==='c',t=nextT;
  if(sl===0){c.notes.forEach(function(n,i){tone(t+(calm?i*.03:0),n-12,spb*8*.95,calm?'sine':'triangle',calm?.07:.05,calm)});
    tone(t,c.notes[0]-24,spb*(calm?7:2),calm?'sine':'square',calm?.12:.09)}
  if(!calm){if(sl===4)tone(t,c.notes[0]-24,spb*2,'square',.08);if(sl%2===0)hat(t,.05);if(sl%4===2){tone(t,c.notes[1]-12,spb*.9,'square',.03);tone(t,c.notes[2]-12,spb*.9,'square',.03)}}
  else if(sl===4){tone(t,c.notes[2]-12,spb*3,'sine',.04,true)}
  P.ev.forEach(function(e){if(e.s===pos)tone(t,e.m,spb*e.d,calm?'sine':'square',calm?.1:.045,calm)});
  nextT+=spb;step++;if(step%(P.bars*8)===0){loops++;if(loops>=2){loops=0;setSong((cur+1)%50,true);return}}}}
function setSong(i,keep){cur=i;song=build(SONGS[i]);step=0;loops=0;try{localStorage.setItem('deck.mus',JSON.stringify({on:on,i:cur}))}catch(e){}if(AC)nextT=AC.currentTime+.08;upd();if(keep)tsay2()}
function tsay2(){var s=SONGS[cur];try{tsay((s.k==='c'?'😌 ':'🎉 ')+s.n+' · '+song.ch.map(function(c){return c.name}).join(' – '))}catch(e){}}
function start(){if(!ctx())return;try{AC.resume()}catch(e){}on=true;window.__DECKMUS=true;try{if(window.A&&A.musicOff)A.musicOff()}catch(e){}if(!song)song=build(SONGS[cur]);nextT=AC.currentTime+.1;clearInterval(timer);timer=setInterval(sched,100);save();upd()}
function stop(){on=false;window.__DECKMUS=false;clearInterval(timer);try{AC&&AC.suspend()}catch(e){}save();upd();try{if(window.A&&A.musicOn&&A.state==='play')A.musicOn(A.g&&A.g.song)}catch(e){}}
function save(){try{localStorage.setItem('deck.mus',JSON.stringify({on:on,i:cur}))}catch(e){}}
var mb,lb,pn;
function isArc(){return typeof A!=='undefined'&&A&&A.musicOn&&typeof ST!=='undefined'}
function upd(){if(mb){var mo=isArc()&&!on?ST.music!==false:on;mb.innerHTML=mo?'🎵':'🔇';mb.style.opacity=mo?1:.75}if(pn&&pn.classList.contains('on'))draw()}
function draw(){var h='<div class="mh"><b>🎼 Soundtrack · 50 songs</b><button id="mOnOff">'+(on?'Turn off':'Turn on')+'</button><button id="mX">✕</button></div><div class="ml">';
  SONGS.forEach(function(s,i){var P=build(s);h+='<button data-i="'+i+'" class="'+(i===cur?'cur':'')+'"><span>'+(i+1)+'</span><b>'+(s.k==='c'?'😌 ':'🎉 ')+s.n+'</b><i>'+P.ch.map(function(c){return c.name}).join(' – ')+' · '+s.bpm+' bpm</i></button>'});
  pn.innerHTML=h+'</div>';var cb=pn.querySelector('.cur');if(cb&&!pn.__sc){pn.__sc=1;cb.scrollIntoView({block:'center'})}}
function init(){
  var st=document.createElement('style');st.textContent='#mpn{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.72);display:none;flex-direction:column;font-family:Roboto,Arial,sans-serif;color:#fff;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}#mpn.on{display:flex}#mpn .mh{display:flex;gap:8px;align-items:center;padding:10px 12px;background:#14171c}#mpn .mh b{flex:1;font-size:15px}#mpn .mh button{border:0;border-radius:10px;background:#2e86de;color:#fff;font-weight:700;padding:8px 12px;font-size:14px}#mpn .ml{overflow:auto;flex:1;padding:6px}#mpn .ml button{display:grid;grid-template-columns:28px 1fr;column-gap:8px;width:100%;text-align:left;background:rgba(255,255,255,.08);border:0;border-radius:10px;color:#fff;padding:9px 10px;margin:0 0 5px;font-size:14px}#mpn .ml button.cur{background:#2e86de}#mpn .ml span{grid-row:1/3;align-self:center;opacity:.6;font-size:12px}#mpn .ml i{font-style:normal;font-size:12px;opacity:.8}';document.head.appendChild(st);
  pn=document.createElement('div');pn.id='mpn';document.body.appendChild(pn);
  pn.addEventListener('click',function(e){var t=e.target.closest('button');if(!t){if(e.target===pn)pn.classList.remove('on');return}if(t.id==='mX'){pn.classList.remove('on');return}if(t.id==='mOnOff'){on?stop():start();return}if(t.dataset.i!==undefined){setSong(+t.dataset.i);if(!on)start();else{upd()}tsay2()}});
  mb=mk('musb','🔇','Music on/off',function(){if(isArc()){if(on){stop();tsay('Soundtrack off')}else{ST.music=ST.music===false;try{saveST()}catch(e){}if(ST.music===false){A.musicOff();tsay('Music off')}else{tsay('Music on');if(A.state==='play')A.musicOn(A.g&&A.g.song)}if(A.applyST)A.applyST();upd()}return}if(on){stop();tsay('Soundtrack off')}else{start();tsay2()}});
  lb=mk('songb','🎼','Pick a song',function(){pn.__sc=0;pn.classList.add('on');draw()});
  var h0=window.__hide,s0=window.__show;window.__hide=function(){h0&&h0();if(on&&AC)try{AC.suspend()}catch(e){}};window.__show=function(){s0&&s0();if(on&&AC)try{AC.resume()}catch(e){}};
  var sv=null;try{sv=JSON.parse(localStorage.getItem('deck.mus')||'null')}catch(e){}
  if(sv){cur=(sv.i|0)%50;song=build(SONGS[cur]);if(sv.on){on=true;var go1=function(){document.removeEventListener('pointerdown',go1,true);if(on&&!window.__MUSKICK){start()}};document.addEventListener('pointerdown',go1,true)}}
  upd()}
window.__SONGS=SONGS;window.__musicInit=init;
init();
})();

/* ---------- extras for every non-arcade game: haptics, tick sounds, wake lock, confetti, stats, streaks, idle hints, contrast, touch polish ---------- */
(function(){
var ARCG=(typeof A!=='undefined'&&A&&A.init);
var st=document.createElement('style');st.textContent='html,body{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;overscroll-behavior:none}body{touch-action:manipulation}body.hc{filter:contrast(1.18) saturate(1.2)}#xpn{position:fixed;inset:0;z-index:99998;background:rgba(0,0,0,.74);display:none;flex-direction:column;font-family:Roboto,Arial,sans-serif;color:#fff;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}#xpn.on{display:flex}#xpn .xh{display:flex;align-items:center;padding:10px 12px;background:#14171c}#xpn .xh b{flex:1;font-size:15px}#xpn .xh button{border:0;border-radius:10px;background:#2e86de;color:#fff;font-weight:700;padding:8px 12px}#xpn .xb{overflow:auto;flex:1;padding:10px 12px}#xpn .xr{display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.08);border-radius:10px;padding:10px 12px;margin-bottom:6px;font-size:14px}#xpn .xr small{display:block;opacity:.7;font-size:11px}#xpn .xr button{border:0;border-radius:14px;min-width:52px;padding:6px 10px;font-weight:800;background:#444;color:#fff}#xpn .xr button.on{background:#2fa84f}#xpn .xs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px}#xpn .xs span{background:rgba(255,255,255,.1);border-radius:8px;padding:5px 9px;font-size:12px}#xcf{position:fixed;inset:0;z-index:99997;pointer-events:none}';document.head.appendChild(st);
if(ARCG)return;
var D={hap:1,tick:1,awake:1,conf:1,hc:0,idle:0,i2:1},K='deck.x',SK='deck.s.'+(window.__cur||document.title);
try{var s0=JSON.parse(localStorage.getItem(K)||'null');if(s0){for(var k in s0)D[k]=s0[k];if(s0.i2!==1)D.idle=0}}catch(e){}
function sv(){try{localStorage.setItem(K,JSON.stringify(D))}catch(e){}}
var S={plays:0,wins:0,losses:0,streak:0,best:0,time:0};try{var s1=JSON.parse(localStorage.getItem(SK)||'null');if(s1)for(var k2 in s1)S[k2]=s1[k2]}catch(e){}
function ss(){try{localStorage.setItem(SK,JSON.stringify(S))}catch(e){}}
S.plays++;ss();
function ap(){['hc','rm','big','lh'].forEach(function(q){document.body.classList.toggle(q,!!D[q])})}ap();
/* 1 haptics + 2 tick sound */
var AC2=null;function tick(){if(!D.tick)return;try{AC2=AC2||new (window.AudioContext||window.webkitAudioContext)();var o=AC2.createOscillator(),g=AC2.createGain();o.type='triangle';o.frequency.value=1100;g.gain.setValueAtTime(.05,AC2.currentTime);g.gain.exponentialRampToValueAtTime(.0001,AC2.currentTime+.04);o.connect(g);g.connect(AC2.destination);o.start();o.stop(AC2.currentTime+.05)}catch(e){}}
var lastTouch=Date.now();
document.addEventListener('pointerdown',function(e){lastTouch=Date.now();var t=e.target&&e.target.closest&&e.target.closest('button,[role=button],.card,.btn,td,.cell');if(!t)return;if(D.hap)try{navigator.vibrate&&navigator.vibrate(6)}catch(x){}tick()},true);
/* 3 keep screen awake */
var wl=null;function awake(){if(!D.awake||!navigator.wakeLock||document.hidden)return;try{navigator.wakeLock.request('screen').then(function(l){wl=l}).catch(function(){})}catch(e){}}
awake();document.addEventListener('visibilitychange',function(){if(!document.hidden)awake()});
/* 4 confetti + 5 win/streak tracking, via modal observer */
function confetti(){var cv=document.createElement('canvas');cv.id='xcf';cv.width=innerWidth;cv.height=innerHeight;document.body.appendChild(cv);var c=cv.getContext('2d'),P=[];for(var i=0;i<110;i++)P.push({x:Math.random()*cv.width,y:-20-Math.random()*cv.height*.4,vx:(Math.random()-.5)*3,vy:2+Math.random()*4,r:3+Math.random()*4,c:['#ff4d6d','#ffd23d','#3da5ff','#7bd88f','#fff','#b388eb'][i%6],a:Math.random()*6});var t0=performance.now();
  (function f(now){var dt=now-t0;c.clearRect(0,0,cv.width,cv.height);P.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.vy+=.06;p.a+=.15;c.save();c.translate(p.x,p.y);c.rotate(p.a);c.fillStyle=p.c;c.fillRect(-p.r,-p.r/2,p.r*2,p.r);c.restore()});if(dt<2600)requestAnimationFrame(f);else cv.remove()})(t0)}
var seen=0,mo=document.getElementById('modal');
function check(){if(!mo||!mo.classList.contains('on')){seen=0;return}if(seen)return;var tx=mo.textContent||'';seen=1;
  var lose=/lose|lost|game over|bust|you.?re out|defeat|no moves|stuck|out of/i.test(tx),win=/win|won|complete|congrat|cleared|solved|victory|you beat|well done|perfect|great/i.test(tx);
  if(lose&&!win){S.losses++;S.streak=0;ss()}else if(win){S.wins++;S.streak++;S.best=Math.max(S.best,S.streak);ss();if(D.conf)confetti()}}
if(mo)new MutationObserver(check).observe(mo,{attributes:true,attributeFilter:['class']});
/* 6 play time */
setInterval(function(){if(!document.hidden&&Date.now()-lastTouch<120000){S.time+=5;ss()}},5000);
/* 8 daily streak toast */
try{var dk='deck.day',today=new Date().toDateString(),dd=JSON.parse(localStorage.getItem(dk)||'null')||{d:'',n:0};if(dd.d!==today){var y=new Date(Date.now()-864e5).toDateString();dd.n=dd.d===y?dd.n+1:1;dd.d=today;localStorage.setItem(dk,JSON.stringify(dd));if(dd.n>1)setTimeout(function(){try{tsay('🔥 '+dd.n+'-day play streak!')}catch(e){}},1500)}window.__dayStreak=dd.n}catch(e){}
/* 9 idle hint nudge */
setInterval(function(){if(D.idle&&!document.hidden&&Date.now()-lastTouch>75000){lastTouch=Date.now();try{show('hint')}catch(e){}}},10000);
/* 7 stats + settings panel */
var pn=document.createElement('div');pn.id='xpn';document.body.appendChild(pn);
function fmt(s){var m=Math.floor(s/60);return m>=60?Math.floor(m/60)+'h '+m%60+'m':m+'m'}
function tot(){var P=0,W=0,T=0;try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k.indexOf('deck.s.')===0){var o=JSON.parse(localStorage.getItem(k));P+=o.plays||0;W+=o.wins||0;T+=o.time||0}}}catch(e){}return {P:P,W:W,T:T}}
function row(k,t,sub){return '<div class="xr"><div>'+t+'<small>'+sub+'</small></div><button data-k="'+k+'" class="'+(D[k]?'on':'')+'">'+(D[k]?'On':'Off')+'</button></div>'}
function draw(){var T=tot();pn.innerHTML='<div class="xh"><b>⚙️ Extras &amp; stats</b><button id="xx">Done</button></div><div class="xb"><b>This game</b><div class="xs"><span>Plays '+S.plays+'</span><span>Wins '+S.wins+'</span><span>Losses '+S.losses+'</span><span>Win streak '+S.streak+'</span><span>Best streak '+S.best+'</span><span>Time '+fmt(S.time)+'</span></div><b>All games</b><div class="xs"><span>Sessions '+T.P+'</span><span>Wins '+T.W+'</span><span>Time '+fmt(T.T)+'</span><span>🔥 Day streak '+(window.__dayStreak||1)+'</span></div>'+
  row('hap','📳 Haptic taps','Tiny vibration on buttons (Android)')+row('tick','🔈 Tap sounds','Soft tick when you tap')+row('awake','💡 Keep screen on','Stops the phone dimming mid-game')+row('conf','🎉 Win confetti','Celebrate every win')+row('idle','💬 Idle hints','Ace offers a hint after 75s of no taps')+row('hc','🌗 High contrast','Punchier colours and contrast')+row('rm','🐢 Reduce motion','Turns off sweeping lights, pops and confetti')+row('big','🔠 Large buttons','Bigger, easier to hit controls')+row('lh','🤚 Left-handed layout','Mirrors the button bar')+'<div class="xr"><div>🧹 Reset<small>Put these extras back to normal</small></div><button data-k="__rs">Reset</button></div><div class="xr"><div>📊 Clear stats<small>Wipes plays, wins and streaks for every game</small></div><button data-k="__cs">Clear</button></div></div>'}
pn.addEventListener('click',function(e){var t=e.target.closest('button');if(!t){if(e.target===pn)pn.classList.remove('on');return}if(t.id==='xx'){pn.classList.remove('on');return}var k=t.dataset.k;if(k==='__rs'){D.hap=1;D.tick=1;D.awake=1;D.conf=1;D.idle=0;D.hc=0;D.rm=0;D.big=0;D.lh=0;sv();ap();draw();return}if(k==='__cs'){if(!t.dataset.sure){t.dataset.sure=1;t.textContent='Sure?';return}try{Object.keys(localStorage).forEach(function(q){if(q.indexOf('deck.s.')===0)localStorage.removeItem(q)})}catch(x){}S.plays=S.wins=S.losses=S.streak=S.best=S.time=0;draw();return}if(k){D[k]=D[k]?0:1;sv();ap();if(k==='awake'){if(D.awake)awake();else if(wl)try{wl.release()}catch(x){}}draw()}});
mk('xtrab','⚙️','Extras & stats',function(){draw();pn.classList.add('on')});
})();

tools.appendChild(hsB);
[].forEach.call(tools.querySelectorAll('button'),function(b){var T={deckbtn:'Card deck',hsbtn:'High scores',rand:'Random game',newg:'New game',tutb:'Tutorial',nextl:'Next level',magicb:'Magic trick',erase:'Reset all',rdeck:'Random deck',rbg:'Random background',musb:'Music on/off',songb:'Pick a song',xtrab:'Extras & stats'};if(!b.title||T[b.id]){b.title=T[b.id]||b.title||'Option';b.setAttribute('aria-label',b.title)}});
var tdd=document.createElement('div');tdd.id='tdd';tdd.appendChild(tools);document.body.appendChild(tdd);
var tbtn=document.createElement('button');tbtn.id='toolsb';tbtn.type='button';tbtn.title='Tools';tbtn.setAttribute('aria-label','Tools menu');tbtn.innerHTML='⚙️';
var hbar=null;
if(hb){var hnav=hb.querySelector('.nav');if(hnav){hnav.appendChild(tbtn);hbar=hnav}else{hb.appendChild(tbtn);hbar=hb}}
else{hbar=document.createElement('div');hbar.id='hubbar';hbar.innerHTML='<span class="ttl">🎲 Play Something!</span>';hbar.appendChild(tbtn);document.body.appendChild(hbar);try{document.body.style.paddingTop='calc(env(safe-area-inset-top) + 52px)'}catch(e){}}
function tclose(){tdd.classList.remove('on');tbtn.classList.remove('on')}
tbtn.addEventListener('click',function(e){e.stopPropagation();var on=!tdd.classList.contains('on');if(on){var r=hbar.getBoundingClientRect();tdd.style.top=r.bottom+'px'}tdd.classList.toggle('on',on);tbtn.classList.toggle('on',on)});
tdd.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('button');if(b&&b.id!=='musb'&&b.id!=='songb'&&b.id!=='xtrab'){setTimeout(tclose,60)}else if(b){setTimeout(tclose,60)}},true);
document.addEventListener('click',function(e){if(!e.target.closest||(!e.target.closest('#tdd')&&!e.target.closest('#toolsb')))tclose()});
(function(){var s=document.createElement('style');s.textContent='#tdd{position:fixed;left:6px;right:6px;z-index:9998;display:none;background:#10161f;border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.65);padding:8px;max-height:70vh;overflow:auto}#tdd.on{display:block}#tdd #tools{display:grid!important;grid-template-columns:repeat(5,1fr);gap:6px;background:none!important}#tdd #tools>button{aspect-ratio:auto!important;min-height:62px;flex-direction:column;gap:2px;border:1px solid rgba(255,255,255,.12)!important;border-radius:12px!important;background:rgba(255,255,255,.07)!important;font-size:24px!important;padding:6px 2px!important}#tdd #tools>button:after{content:attr(title);font:700 9px Roboto,Arial,sans-serif;opacity:.85;text-align:center;line-height:1.1;max-width:100%;overflow:hidden}#tdd #tools>button svg{width:28px;height:28px}#toolsb{flex:0 0 48px!important;aspect-ratio:1/1;font-size:24px!important;display:flex;align-items:center;justify-content:center;border:0;background:none;color:#fff;border-left:1px solid rgba(255,255,255,.1)}#toolsb.on{background:rgba(255,255,255,.25)}#hubbar{position:fixed;top:0;left:0;right:0;z-index:1100;display:flex;align-items:stretch;background:rgba(0,0,0,.55);padding-top:env(safe-area-inset-top);font:800 15px Roboto,Arial,sans-serif;color:#fff}#hubbar .ttl{flex:1;display:flex;align-items:center;padding:0 14px}';document.head.appendChild(s)})();
/* mischievous Ace options drawer (next to Menu) */
var menu=document.getElementById('menu'),bm=document.getElementById('bMenu');
if(inGame&&menu&&bm){
  var ab=document.createElement('button');ab.id='aceopt';ab.type='button';ab.className=bm.className;ab.title='Game options';ab.setAttribute('aria-label','Game options');
  ab.innerHTML='<svg viewBox="0 0 40 44"><path d="M9 8 5 -1 15 5Z M31 8 35 -1 25 5Z" fill="#d4202a" stroke="#14171c" stroke-width="1.5" stroke-linejoin="round"/><rect x="5" y="4" width="30" height="38" rx="5" fill="#fff" stroke="#14171c" stroke-width="2.5"/><path d="M10 16 17 19" stroke="#14171c" stroke-width="2.4" stroke-linecap="round"/><path d="M30 14 23 19" stroke="#14171c" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="14" cy="22" rx="3" ry="3.6" fill="#14171c"/><ellipse cx="26" cy="22" rx="3" ry="3.6" fill="#14171c"/><circle cx="15" cy="21" r="1.1" fill="#fff"/><circle cx="27" cy="21" r="1.1" fill="#fff"/><path d="M10 30c4 8 14 8 20 -1" stroke="#14171c" stroke-width="2.4" fill="#d4202a" stroke-linecap="round"/><path d="M27 29l3-3" stroke="#14171c" stroke-width="2" stroke-linecap="round"/><text x="8" y="14" font-size="8" font-weight="900" fill="#d4202a" font-family="Arial">A</text></svg>';
  bm.parentNode.insertBefore(ab,bm);try{if(getComputedStyle(bm.parentNode).display==='grid'){bm.parentNode.classList.add('ace3');var sx=document.createElement('style');sx.textContent='#ctl.ace3{grid-template-columns:repeat(var(--nc,3),1fr)!important;grid-auto-rows:minmax(0,1fr)!important}#ctl.ace3 button{min-width:0;min-height:0;height:auto;overflow:hidden}#ctl.ace3 #aceopt svg{width:24px;height:24px}';document.head.appendChild(sx)}}catch(e){}
  var pk=document.createElement('div');pk.id='peekbar';pk.innerHTML='<span>😈 Game options</span><button id="pktut">🎓 Tutorial</button><button id="pkx">▶ Resume</button><button class="pri" id="pknew">🔄 New game</button>';
  function ensurePk(){if(!menu.contains(pk))menu.insertBefore(pk,menu.firstChild)}ensurePk();
  function peekOff(){menu.classList.remove('peek');var r=menu.querySelector('#mResume')||[].filter.call(menu.querySelectorAll('#mStart'),function(x){return /resume/i.test(x.textContent)})[0];if(r)r.click();else menu.classList.remove('on')}
  ab.addEventListener('click',function(e){e.stopPropagation();if(menu.classList.contains('peek')){peekOff();return}if(menu.classList.contains('on'))return;bm.click();setTimeout(function(){if(menu.classList.contains('on')){ensurePk();menu.classList.add('peek')}},30)});
  pk.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;if(b.id==='pkx')peekOff();if(b.id==='pktut'){peekOff();setTimeout(function(){if(window.__howto&&window.__HOW&&window.__HOW[window.__cur])window.__howto(window.__cur)},150)}if(b.id==='pknew'){menu.classList.remove('peek');go(window.__cur,false)}});
  bm.addEventListener('click',function(){menu.classList.remove('peek')},true);
  new MutationObserver(function(){if(!menu.classList.contains('on')&&menu.classList.contains('peek'))menu.classList.remove('peek')}).observe(menu,{attributes:true,attributeFilter:['class']});
}
window.__tsay=tsay;
function sth(){try{var el=hbar||document.getElementById('hubbar');var h=el?el.getBoundingClientRect().height:48;document.documentElement.style.setProperty('--th','0px');document.documentElement.style.setProperty('--nh',h+'px')}catch(e){}}
window.addEventListener('resize',sth);setTimeout(sth,0);setTimeout(sth,300);
setTimeout(function(){try{window.dispatchEvent(new Event('resize'))}catch(e){}},60);
})();

})();
window.__MDX={"acesup":{"classic":["Classic","4 columns. Leave only the four Aces."],"kings":["Kings Up","Aces are low. Leave only the four Kings."],"five":["Five Columns","A fifth column gives more room."],"six":["Six Columns","Plenty of space — a relaxed game."],"three":["Three Columns","Cramped and tough. Deals 3 at a time."],"short":["Short Deck","36 cards: 6 to Ace."],"quick":["Quick Deck","20 cards: 10 to Ace. Over in a minute."],"color":["Colour Match","Remove a card when a higher card of the same colour shows."],"any":["Anything Higher","Remove a card when any higher card shows."],"res1":["One Reserve","A reserve cell can hold one card."],"res2":["Two Reserves","Two reserve cells for clever planning."],"drip":["Drip Deal","Each tap on the stock deals just one card."],"twins":["Twins","Two top cards of the same rank vanish together."],"double":["Double Deck","104 cards in 6 columns. A marathon!"],"duel":["Suit Duel","Only two suits (26 cards). Fast and friendly."]},"checkers":{"american":["American Checkers","8×8. Kings move one step. Captures are your choice."],"casual":["Casual","8×8. Captures are optional — relaxed play."],"russian":["Russian","8×8. Flying kings and men can capture backward."],"brazilian":["Brazilian","Russian rules plus the most-pieces rule when captures are forced."],"pool":["Pool","8×8. Men capture backward, kings move one step."],"intl":["International","10×10 board, flying kings, most-pieces rule."],"giveaway":["Giveaway","Forced captures — lose all your pieces to win!"],"race":["Race to King","First player to crown a king wins."],"mini":["Mini 6×6","Small board, quick games."],"under":["Underdog","You start with 8 pieces against 12."]},"chess":{"standard":["Standard chess","Classic rules with castling, en passant and promotion."],"c960":["Chess960","Shuffled back rank. Castling is disabled."],"hill":["King of the Hill","Walk your king to the middle four squares to win."],"three":["Three-Check","Give check three times to win."],"anti":["Antichess","Captures are forced. Lose all your pieces to win!"],"horde":["Horde","White has a wall of pawns and no king. Black must capture them all."],"qodds":["Queen Odds","The opponent starts without a queen."],"prace":["Pawn Race","Kings and pawns only. Promote a pawn to win."],"kqk":["Queen Endgame","King and queen against a lone king. Checkmate it!"],"krk":["Rook Endgame","King and rook against a lone king. Checkmate it!"]},"chinese":{"classic":["Classic","10 marbles each. Race to the opposite corner."],"sprint":["Sprint","6 marbles each — a shorter race."],"quick":["Quick","Only 3 marbles each. Over in minutes."],"three":["Three Players","10 marbles each. You, plus two more players."],"four":["Four Players","Two pairs of corners. You and three more."],"six":["Six Players","Every corner is in play."],"super":["Super Hop","Hop over a marble from any distance!"],"race5":["Race to 5","First to land 5 marbles in the goal corner wins."],"under":["Underdog","The opponent starts with only 7 marbles."],"walls":["Center Walls","Five neutral blocks sit in the middle. Hop over them."]},"blackjack":{"0":["Classic","6 decks · blackjack pays 3:2 · dealer stands on all 17s"],"1":["Single Deck","One deck, reshuffled often · blackjack pays 3:2"],"2":["Blackjack 6:5","Tough table: blackjack pays only 6:5"],"3":["Double Exposure","Both dealer cards face up · dealer wins ties · blackjack pays 1:1"],"4":["Tournament","20 hands only — finish with as many chips as you can"],"5":["Survival","Minimum bet climbs every 5 hands. Stay alive!"],"6":["Hit Soft 17","Dealer must hit soft 17 — a slightly tougher table"],"7":["Five-Card Charlie","Five cards without busting is an automatic win"],"8":["Spanish 21","No tens in the shoe · your 21 always wins · blackjack pays 3:2"],"9":["Lucky Streak","Every win in a row adds +10% to your payout (up to +50%)"],"10":["High Roller","$25 minimum bet · 8-deck shoe · big swings"]},"holdem":{"0":["No-Limit Cash","You + 4 opponents · no-limit betting · blinds stay put"],"1":["Limit","Fixed bet sizes, max 4 raises per round"],"2":["Tournament","6 players · blinds climb every 6 hands · outlast everyone"],"3":["Heads-Up","You vs one opponent · pure no-limit duel"],"4":["Turbo","4 players · blinds jump every 3 hands"],"5":["Pot-Limit","Raise at most the size of the pot"],"6":["Short Deck","36-card deck: no 2s through 5s. Hands come together more often"],"7":["Ante Up","Everyone antes every hand · bigger pots, more action"],"8":["Three-Handed","You and two opponents · wide-open aggressive poker"],"9":["Joker Wild","One wild joker in the deck. Anything can happen"],"10":["Sit & Go","3 players · winner takes all · blinds climb every 4 hands"]},"omaha":{"0":["Pot-Limit Cash","You + 4 opponents · the classic Omaha: raise up to the size of the pot"],"1":["Limit","Fixed bet sizes, max 4 raises per round"],"2":["Tournament","6 players · blinds climb every 6 hands · outlast everyone"],"3":["Heads-Up","You vs one opponent · pot-limit duel"],"4":["Big O","5 hole cards! Still use exactly 2 of them with 3 from the board"],"5":["No-Limit","Bet any amount, any time. Four cards, no mercy"],"6":["Hi-Lo 8-or-better","Pot splits between best high hand and best low (five cards 8 or lower)"],"7":["Ante Up","Everyone antes every hand · fat pots, constant action"],"8":["Three-Handed","You and two opponents · pot-limit and wide open"],"9":["Big O Hi-Lo","Five hole cards AND a split pot: scoop to win big"],"10":["Sit & Go","3 players · winner takes all · blinds climb every 4 hands"],"11":["Hi-Lo Heads-Up","One opponent, split pot, no place to hide"]},"draw":{"0":["Classic Draw","You vs 3 opponents · ante, bet, draw, bet, showdown"],"1":["Deuces Wild","All 2s are wild · five of a kind is the top hand"],"2":["Joker Wild","53-card deck with one wild Joker"],"3":["Lowball 2-7","Lowest hand wins · straights and flushes count against you · Ace is high"],"4":["Heads-Up Draw","You vs one opponent"],"5":["Video Poker","Jacks or Better · play solo against the paytable"],"6":["Video Poker: Deuces Wild","Deuces wild paytable · four deuces pays 200×"],"7":["Kings Wild","Every King is wild · five of a kind tops the table"],"8":["One-Eyed Jacks","The J♠ and J♥ are wild · rare but powerful"],"9":["A-5 Lowball","Lowest hand wins · Ace is low · straights and flushes do NOT count"],"10":["Fixed Limit","Fixed bet sizes, no pot-sized raises"],"11":["Double Wild","Deuces AND the Joker are wild · wildest game in town"]},"stud":{"0":["Classic Limit","You + 3 opponents · ante, bring-in, fixed bet sizes · 5 streets of betting"],"1":["Razz","Lowball stud — lowest A-5 hand wins · Aces are low, straights and flushes ignored"],"2":["No-Limit Stud","Bet any amount from the minimum up to all-in"],"3":["Heads-Up Stud","You vs one opponent · limit betting"],"4":["Deuces Wild","All 2s are wild · five of a kind is the top hand"],"5":["Tournament","5 players · antes and bets climb every 5 hands · outlast everyone"],"6":["Pot-Limit Stud","Raise up to the size of the pot"],"7":["Kings Wild","Every King is wild · five of a kind tops the table"],"8":["Big Ante","Antes are tripled — constant pressure, huge pots"],"9":["Heads-Up Razz","Lowball stud against one opponent"],"10":["Joker Wild","One wild Joker in the deck"]},"slots":{"0":["Classic 3-Reel","One payline. Match cards: trips, straights, flushes, high pairs."],"1":["Five Lines","3×3 reels with 5 paylines. Bet per line."],"2":["Wild Jokers","3×3 with 5 paylines and wild jokers on the reels."],"3":["Poker Reels","5 reels, one row. Paid like a poker hand."],"4":["Flush Frenzy","3 reels where suits and colors pay."],"5":["Hold & Respin","Hold the reels you like and respin once for half price."],"6":["Versus Computer","You and the computer each spin 2–7 cards (choose below). Best poker hand wins the bet."]},"gin":{"match":["Gin Rummy match","Make sets and runs, knock, and be first to the target score."]},"oldmaid":{"match":["Old Maid","Pair up cards and don’t get stuck with the Queen of Spades."]},"gofish":{"match":["Go Fish","Ask for ranks, collect books of four, and beat the computer."]},"war":{"match":["War","Flip cards and win the whole deck. Pure luck!"]},"sudoku2":{"shape":["Sudoku Shapes","A sudoku on an unusual board: boxes, jigsaw, diagonals and more."]}};/* ---------- adventure mode: 500 levels x 8 adventures, codes, briefing ---------- */
(function(){
var W=window,D=document;
if(!W.__ADVAPI){
var WN=['Sunny Meadow','Whispering Woods','Crystal Caves','Sandy Dunes','Frosty Peaks','Pirate Cove','Neon City','Haunted Manor','Dragon Mountain','Royal Castle'];
var GM={klondike:['Klondike','♠','#3fbf7f','Build all four foundations from Ace to King'],freecell:['FreeCell','♥','#e8564a','Build all four foundations from Ace to King'],golf:['Golf','⛳','#4fbf5f','Clear every card from the board'],mahjong:['Mahjong','🀄','#e0a040','Clear every tile from the board'],wordsearch:['Word Search','🔎','#c07cff','Find every word in the puzzle'],sudoku:['Sudoku','▦','#4f8cff','Complete the grid with no repeats'],jewel:['Jewel\u2019s Match','💎','#ff5fa0','Reach the level goal before moves run out'],
acesup:['Aces Up','🂡','#3fbf9f','Leave only the Aces (or Kings) on the table'],gin:['Gin Rummy','🂠','#e07a9a','Win the match against the computer'],oldmaid:['Old Maid','👵','#c9835a','Don\u2019t get stuck with the Old Maid'],gofish:['Go Fish','🐟','#6a7ce0','Collect more books than the computer'],war:['War','⚔️','#c05050','Win the deck'],sudoku2:['Sudoku Shapes','⬡','#4fa0ff','Complete the shaped sudoku'],
blackjack:['Blackjack','🂱','#2fae5f','Grow your chips to the goal'],slots:['Card Slots','🎰','#e0b020','Grow your chips to the goal'],holdem:['Hold\u2019em','♣','#d46a3a','Grow your chips to the goal'],omaha:['Omaha','🅾️','#b04ad0','Grow your chips to the goal'],draw:['5-Card Draw','✋','#3aa0c0','Grow your chips to the goal'],stud:['7-Card Stud','7️⃣','#a0803a','Grow your chips to the goal'],
checkers:['Checkers','🔴','#d4a24a','Beat the computer'],chess:['Chess','♟️','#8a8aa0','Beat the computer'],chinese:['Chinese Checkers','🔶','#e08a3a','Get your marbles home first']};
var NM1={klondike:'Klondike Trek',freecell:'FreeCell Frontier',golf:'Golf Tour',mahjong:'Mahjong Voyage',wordsearch:'Word Search Odyssey',sudoku:'Sudoku Summit',jewel:'Jewel Quest',acesup:'Aces Up Ascent',gin:'Gin Rummy Gauntlet',oldmaid:'Old Maid Mischief',gofish:'Go Fish Expedition',war:'War Campaign',sudoku2:'Shapes Safari',blackjack:'Blackjack Run',slots:'Slot Machine Spree',holdem:'Hold\u2019em Circuit',omaha:'Omaha Odyssey',draw:'Draw Poker Trail',stud:'Stud Showdown',checkers:'Checkers Clash',chess:'Chess Crusade',chinese:'Marble March'};
var NM2={klondike:'Klondike: Challenge Road',freecell:'FreeCell: Challenge Road',golf:'Golf: Challenge Road',mahjong:'Mahjong: Challenge Road',wordsearch:'Word Search: Challenge Road',sudoku:'Sudoku: Challenge Road',jewel:'Jewel\u2019s Match: Challenge Road',acesup:'Aces Up: Challenge Road',gin:'Gin Rummy: Challenge Road',oldmaid:'Old Maid: Challenge Road',gofish:'Go Fish: Challenge Road',war:'War: Challenge Road',sudoku2:'Sudoku Shapes: Challenge Road',blackjack:'Blackjack: Challenge Road',slots:'Card Slots: Challenge Road',holdem:'Hold\u2019em: Challenge Road',omaha:'Omaha: Challenge Road',draw:'5-Card Draw: Challenge Road',stud:'7-Card Stud: Challenge Road',checkers:'Checkers: Challenge Road',chess:'Chess: Challenge Road',chinese:'Chinese Checkers: Challenge Road'};
var ORDER1=['klondike','freecell','golf','mahjong','wordsearch','sudoku','jewel'],ORDER_N=['acesup','gin','oldmaid','gofish','war','sudoku2','blackjack','slots','holdem','omaha','draw','stud','checkers','chess','chinese'];
var ADVS=[];
function addA(id,g,n,v2){var m=GM[g]||['Grab Bag','🎒','#ffc83d','A different game every level!'];ADVS.push({id:id,g:g,v2:!!v2,n:n,ic:m[1],c:m[2],goal:m[3]})}
ORDER1.forEach(function(g){addA(g,g,NM1[g])});addA('grab','grab','Grab Bag Adventure');
ORDER1.forEach(function(g){addA(g+'_2',g,NM2[g],1)});addA('grab_2','grab','Grab Bag: Challenge Road',1);
ORDER_N.forEach(function(g){addA(g,g,NM1[g])});ORDER_N.forEach(function(g){addA(g+'_2',g,NM2[g],1)});
var NADV=ADVS.length;
var G7=ORDER1.slice(),G22=ORDER1.concat(ORDER_N);
function advOf(id){for(var i=0;i<ADVS.length;i++)if(ADVS[i].id===id)return ADVS[i]}
function H(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function mul(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function e0(){return D.getElementById('advov')}
function cl(v,a,b){return Math.max(a,Math.min(b,v))}
function pk(r,a){return a[Math.floor(r()*a.length)]}
function by(t,a){return a[Math.min(a.length-1,Math.floor(t*a.length))]}
/* ---- codes: 3 characters, 32-letter alphabet, 15 bits ---- */
var AL='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',KK=12347,CC=9173,MOD=32768,KI=(function(){for(var i=1;i<MOD;i+=2)if((i*KK)%MOD===1)return i})();
function encode(adv,n){var ix=ADVS.map(function(a){return a.id}).indexOf(adv),N=ix*500+(n-1),v=(N*KK+CC)%MOD;return AL[v>>10]+AL[(v>>5)&31]+AL[v&31]}
function decode(s){s=String(s||'').toUpperCase().replace(/[^A-Z0-9]/g,'').replace(/O/g,'0');if(s.length!==3)return null;var v=0;for(var i=0;i<3;i++){var k=AL.indexOf(s[i]);if(k<0)return null;v=v*32+k}var N=(((v-CC)%MOD+MOD)%MOD*KI)%MOD;if(N>=NADV*500)return null;return{adv:ADVS[Math.floor(N/500)].id,n:N%500+1}}
/* ---- progress ---- */
var P=W.__ADVP;if(!P){P={};try{P=JSON.parse(localStorage.getItem('adv.p')||'{}')||{}}catch(e){}W.__ADVP=P}
function saveP(){try{localStorage.setItem('adv.p',JSON.stringify(P))}catch(e){}}
function done(adv){return P[adv]||0}
/* ---- names / descriptions ---- */
var MD={
klondike:{classic:['Classic','Standard Klondike. Undo anytime.'],zen:['Zen','No score, no clock. Just play.'],thoughtful:['Thoughtful','Every card starts face up. Pure strategy.'],limit:['Move Limit','Win in 200 moves or fewer.'],time:['Time Attack','Beat the deal before the 5-minute clock runs out.'],iron:['Ironman','Draw 3, 3 passes, no undo, no hints.'],draw3:['Draw Three','Turn three cards at a time.'],xray:['X-Ray','Face-down cards are shown faintly.'],openking:['Open Kingdom','Any card may fill an empty column.'],jokerk:['Joker Klondike','Two jokers and a wild token help you.'],twopass:['Two Passes','Draw three with only two trips through the stock.']},
freecell:{classic:['Classic','Solve the deal. Free undo.'],miser:['Miser','Every undo costs 5 moves.'],time:['Time Attack','Solve it before the 8-minute clock runs out.'],zen:['Zen','No score, no clock, no pressure.'],twocells:['Two Cells','Only two free cells. Plan every move.'],kings:['Kings Only','Only a King may fill an empty column.'],anysuit:['Anything Goes','Build columns in any order.'],unlimited:['Unlimited Moves','Move as many cards at once as you like.'],wildcards:['Wild Cards','Two jokers and two wild tokens shake up the deal.']},
golf:{classic:['Classic','Clear the board with runs one rank up or down.'],zen:['Zen','Unlimited undo and new deals.'],pure:['Pure Golf','No wrap, no wilds, no jokers, no redeals.'],clock:['Round the Clock','Kings and Aces connect. No helpers.'],blind:['Blind Golf','Covered cards stay face-down until freed.'],party:['Joker Party','Four jokers in the deck, each one wild.'],mulligan:['Mulligan','Three redeals and three wild tokens.']},
mahjong:{classic:['Classic','Shuffles and hints available.'],timed:['Timed','Beat the clock. Shuffles and hints cost time.'],purist:['Purist','No hints, no shuffles. A dead end ends the game.'],oneshot:['One Shuffle','Exactly one shuffle for the whole board.'],nohint:['Blind Tiles','No hints, but three shuffles to bail you out.'],hinty:['Hint Heaven','Unlimited hints, but no shuffles.'],guaranteed:['Guaranteed Win','Every board is dealt so a full clear exists.'],sprint:['Sprint','A tight clock: 70% of the usual time.']},
wordsearch:{classic:['Classic','Find every word.'],themed:['Themed','Every word belongs to one theme.'],time:['Time Attack','Beat the clock. Hints cost time.'],mystery:['Mystery','The list shows only blanks and a first letter.'],purist:['Purist','No hints at all.'],allway:['All Directions','Words run in all eight directions.'],fog:['Fog','Blank word list, but three hints.'],giant:['Giant Grid','A huge 12×12 board with many words.'],quick:['Quick Bite','A small 7×7 grid.'],zen:['Zen','No clock, relaxed.']},
sudoku:{classic:['Classic','Mistakes are flagged and counted.'],zen:['Zen','No clock, no mistake count.'],strict:['Strict','3 lives and a single hint.'],attack:['Time Attack','Beat the par time for the level.'],memory:['Memory','The given numbers vanish after 10 seconds. 3 peeks.'],parity:['Parity','Empty squares are tinted odd or even.'],sudden:['Sudden Death','One mistake and the puzzle is over.'],purist:['Purist','No notes, no hints, no checking.'],blind:['Blindfold','All highlighting is switched off.'],speedx:['Speed Solve','Solve it in 60% of the par time.'],onehint:['One Hint','You get exactly one hint.'],twolives:['Two Lives','Only two mistakes allowed.'],iron:['Ironman','Three lives, no hints, no undo.']},
jewel:{campaign:['Campaign','Reach the goal before moves run out.'],quarry:['Stone Quarry','Smash 18 stones in 26 moves.'],hunt:['Gem Hunter','Collect 28 target gems in 24 moves.'],power:['Power Hour','Score 9,000 points in 20 moves.'],dynamite:['Dynamite Day','TNT, gold and rock. 22 moves.'],vault:['Obsidian Vault','Crack the obsidian stones in 30 moves.']}};
var BN={bigopen:'Big Open',openking:'Open Kingdom',big:'Big Cards',seven:'Seven Columns',six:'Six Columns',five:'Five Columns'};
function bn(k){return BN[k]||String(k).charAt(0).toUpperCase()+String(k).slice(1)}
var TH=['Animals','Food','Fruits','Colors','Space','Weather','Sports','Music','Jobs','Countries','Cities','Nature','Plants','Home','Tools','Clothes','Body','Family','School','Transport','Ocean','Holidays','Feelings','Science','Mythology','Camping','Garden','Kitchen','Money','Buildings','Birds','Insects','Games','Dinosaurs','Travel','Technology','Vegetables','Desserts','Drinks','Spices','Flowers','Trees','Gems','Math','Landforms','Medieval','Pirates','Fairy Tales','Fantasy','Circus','Theater','Art','Photography','Dance','Orchestra','Languages','Winter','Summer','Beach','Farm','Bakery','Office','Hospital','Emergency','Airport','Railway','Fitness','Cooking','Geology','Law','Detective','Robots'];
var LB={
draw:function(v){return 'Draw '+v+(v>1?' cards':' card')+' at a time'},
passes:function(v){return 'Stock passes: '+(v?v:'unlimited')},
anyEmpty:function(v){return v?'Any card may fill an empty column':null},
jokers:function(v){return v?v+' wild joker'+(v>1?'s':''):null},
wilds:function(v){return v?(v>50?'Unlimited':v)+' wild token'+(v===1?'':'s'):null},
cells:function(v){return 'Free cells: '+(v||'4')},
build:function(v){return 'Build columns: '+({alt:'alternating colours',suit:'same suit',any:'any card'}[v]||v)},
empty:function(v){return 'Empty column: '+(v==='king'?'Kings only':'any card')},
multi:function(v){return 'Multi-card moves: '+({super:'smart',all:'any number',one:'one at a time'}[v]||v)},
auto:function(v){return v?'Auto-collect on':null},
wrap:function(v){return v?'Wrap-around: Kings and Aces connect':'No wrap-around'},
wildRank:function(v){return v?'Every '+({1:'Ace',7:'7',13:'King'}[v]||v)+' is wild':null},
redeals:function(v){return v?v+' redeal'+(v>1?'s':''):'No redeals'},
hidden:function(v){return v?'Covered cards stay face-down':null},
deal5:function(v){return v?v+' Deal-5 pick'+(v>1?'s':''):null},
unlock:function(v){return v?'Streak bonus every '+v+' plays':null},
hints:function(v){return 'Hints: '+(v>50?'unlimited':v)},
shuffles:function(v){return 'Shuffles: '+(v>50?'unlimited':v)},
variety:function(v){return 'Tile variety: '+v},
solv:function(v){return v==='solvable'?'Solvable deal guaranteed':null},
level:function(v,st,g){return g==='sudoku'?'Puzzle level '+v+' ('+(v<4?'Beginner':v<9?'Easy':v<13?'Medium':v<17?'Hard':v<19?'Expert':'Master')+')':g==='jewel'?'Campaign level '+v:'Word level '+v+' of 20'},
theme:function(v){return 'Theme: '+v},
dirs:function(v){return 'Word directions: '+(v==='auto'?'auto':v)},
back:function(v){return v?'Backwards words allowed':'No backwards words'},
list:function(v){return v==='blanks'?'Word list shows blanks':null},
size:function(v){return v==='auto'?null:'Grid '+v+'×'+v},
lives:function(v){return v?'Lives: '+v:'Unlimited lives'},
check:function(v){return 'Mistake check: '+({instant:'instant',conflict:'duplicates only',off:'off'}[v]||v)},
hl:function(v){return v==='on'||v===true?null:(v==='off'||v===false?'Move highlighting off':'Highlighting: '+v)},
boost:function(v){return 'Boosters: '+(v>50?'unlimited':v)},
board:function(v,st,g){return g==='mahjong'?'Layout #'+(v+1):g==='acesup'?'Board #'+v+' of 100':'Board: '+bn(v)},
xray:function(v){return v?'X-ray on':null},
labels:function(v){return null},
timer:function(v){return v?null:'Timer hidden'},
need:function(v){return v>1?'Win '+v+' matches to clear the level':null},
goal:function(v){return 'Goal: reach $'+v.toLocaleString()},
start:function(v){return 'Starting chips: $'+v.toLocaleString()},
target:function(v){return 'Play to '+v+' points'},
ai:function(v){return 'Computer: '+v},
hand:function(v){return 'Starting hand: '+v+' cards'},
lvl:function(v){return 'Computer level: '+['','Easy','Medium','Hard'][v]},
side:function(v,st,g){return g==='checkers'?'You play '+(v?'Black':'Red'):g==='chinese'?null:'You play '+(v?'Black':'White')},
force:function(v){return v==='on'?'Captures are forced':'Captures are optional'},
autoq:function(v){return v?'Pawns auto-promote to queens':null},
ace:function(v){return 'Ace is '+v},
undo:function(v){return 'Undos: '+(v>50?'unlimited':v)},
auto:function(v,st,g){return g==='acesup'?(v?'Auto-remove on':null):(v?'Auto-collect on':null)},
style:function(v){return 'Board style #'+(v+1)+' of 100'},
diff:function(v){return 'Difficulty: '+['Easy','Medium','Hard'][v]},
mist:function(v){return v?null:'Mistakes not shown'},
same:function(v){return v?null:'No same-digit highlight'},
speed:function(v){return null}
};
var SHOW={klondike:['draw','passes','anyEmpty','jokers','wilds','board'],freecell:['cells','build','empty','multi','jokers','wilds','auto','board'],golf:['wrap','jokers','wildRank','wilds','redeals','hidden','deal5','unlock','board'],mahjong:['solv','hints','shuffles','variety','board'],wordsearch:['level','theme','dirs','back','list','size','hints'],sudoku:['level','check','lives','hints','hl','timer'],jewel:['level','boost'],acesup:['board','ace','undo','hl','auto'],gin:['target','ai'],oldmaid:[],gofish:['hand','ai'],war:[],checkers:['lvl','side','force','hl'],chess:['lvl','side','hl','autoq'],chinese:['lvl','side'],sudoku2:['style','diff','mist','same'],blackjack:['start'],slots:['start'],holdem:['start'],omaha:['start'],draw:['start'],stud:['start']};
var BASE={
klondike:{draw:1,passes:0,anyEmpty:false,jokers:0,wilds:0,xray:false,board:'classic'},
freecell:{cells:0,build:'alt',empty:'any',multi:'super',jokers:0,wilds:0,auto:false,board:'classic'},
golf:{wrap:true,jokers:0,wildRank:0,wilds:0,redeals:0,hidden:false,deal5:0,unlock:0,board:'big'},
mahjong:{solv:'random',hints:99,shuffles:3,variety:'easy',board:0},
wordsearch:{level:1,theme:'Animals',dirs:'auto',back:true,hints:99,list:'show',size:'auto',shape:'auto'},
sudoku:{level:1,board:0,check:'instant',lives:3,hints:99,hl:'on',auto:true,timer:true},
jewel:{level:1,boost:3,shape:'auto',lock:'open'},
acesup:{ace:'high',undo:5,hl:false,auto:false,board:0},gin:{target:100,ai:'normal'},oldmaid:{},gofish:{hand:7,ai:'normal'},war:{speed:'normal'},
checkers:{opp:'cpu',lvl:2,side:0,first:0,force:'off',fly:'mode',back:'mode',maj:'mode',hl:true},chess:{opp:'cpu',lvl:2,side:0,hl:true,autoq:false},chinese:{opp:'cpu',lvl:2,side:0},sudoku2:{style:1,diff:1,mist:1,same:1,timer:1},
blackjack:{start:1000,speed:.5},slots:{start:1000,speed:.5},holdem:{start:1000,speed:.5},omaha:{start:1000,speed:.5},draw:{start:1000,speed:.5},stud:{start:1000,speed:.5}};
/* ---- templates: m=mode, d=difficulty 0..1, st=extra settings ---- */
function T(m,d,f){return{m:m,d:d,f:f||function(){return{}}}}
var TPL={
klondike:[T('zen',.02,function(r){return{draw:1,wilds:3}}),T('xray',.08),T('openking',.12),T('thoughtful',.2),T('jokerk',.25),
 T('classic',.28,function(r,t){return{draw:1,passes:0,wilds:pk(r,[1,2,3]),board:pk(r,['classic','big','reverse','even','open'])}}),
 T('classic',.42,function(r,t){return{draw:3,passes:0,wilds:pk(r,[0,1,2]),anyEmpty:r()<.4,board:pk(r,['classic','big','even','peaks'])}}),
 T('draw3',.5),T('twopass',.65),T('time',.7,function(r,t){return{draw:t>.5?3:1,passes:0}}),T('limit',.8),
 T('classic',.86,function(r,t){return{draw:3,passes:pk(r,[1,2,3]),wilds:0,board:pk(r,['classic','valley','stripes','wide','tall'])}}),T('iron',.95)],
freecell:[T('zen',.02,function(r){return{cells:pk(r,[5,6]),wilds:3,auto:true}}),T('anysuit',.1),T('unlimited',.15),T('wildcards',.2),
 T('classic',.28,function(r,t){return{cells:pk(r,[5,6]),wilds:pk(r,[1,2]),auto:true,board:pk(r,['classic','reverse','seven','stairs'])}}),
 T('classic',.4,function(r,t){return{cells:4,wilds:pk(r,[0,1]),board:pk(r,['classic','reverse','hill','valley','ramp'])}}),
 T('time',.5),T('miser',.58),T('kings',.65),T('twocells',.78),
 T('classic',.86,function(r,t){return{cells:3,empty:'king',board:pk(r,['classic','heavy','ramp','hill'])}}),T('classic',.93,function(r,t){return{cells:3,build:'alt',empty:'king',multi:'super',board:pk(r,['classic','reverse'])}})],
golf:[T('zen',.02),T('classic',.08,function(r){return{wilds:99,redeals:3,jokers:2,deal5:3,board:pk(r,['big','classic','mini'])}}),T('mulligan',.2),T('party',.28),
 T('classic',.36,function(r){return{wilds:3,redeals:2,jokers:pk(r,[0,1]),unlock:pk(r,[0,3]),board:pk(r,['big','classic','pyramid','stairs'])}}),
 T('classic',.5,function(r){return{wilds:2,redeals:1,wildRank:pk(r,[0,1,7,13]),board:pk(r,['classic','pyramid','stairs','hourglass'])}}),
 T('blind',.6,function(r){return{wilds:pk(r,[1,2,3]),redeals:pk(r,[1,2])}}),
 T('classic',.72,function(r){return{wilds:1,redeals:0,board:pk(r,['classic','pyramid','hourglass','big'])}}),T('clock',.82),T('classic',.9,function(r){return{wilds:0,redeals:1,wrap:true,board:pk(r,['classic','big'])}}),T('pure',.97)],
mahjong:[T('guaranteed',.04,function(r){return{hints:99,shuffles:99,board:Math.floor(r()*100)}}),T('classic',.14,function(r){return{solv:'solvable',hints:99,shuffles:99,board:Math.floor(r()*100)}}),
 T('hinty',.25,function(r){return{solv:'solvable',board:Math.floor(r()*100)}}),T('nohint',.35,function(r){return{solv:'solvable',board:Math.floor(r()*100)}}),
 T('classic',.42,function(r){return{solv:'solvable',hints:5,shuffles:3,variety:'easy',board:Math.floor(r()*100)}}),
 T('timed',.5,function(r){return{solv:'solvable',board:Math.floor(r()*100)}}),T('oneshot',.6,function(r){return{solv:'solvable',board:Math.floor(r()*100)}}),
 T('classic',.7,function(r){return{solv:'solvable',hints:3,shuffles:1,variety:'hard',board:Math.floor(r()*100)}}),T('sprint',.78,function(r){return{solv:'solvable',board:Math.floor(r()*100)}}),
 T('purist',.9,function(r){return{solv:'solvable',board:Math.floor(r()*100)}}),T('purist',.97,function(r){return{solv:'solvable',variety:'hard',board:Math.floor(r()*100)}})],
wordsearch:[T('zen',.02,function(r,t){return{level:cl(1+Math.round(t*19),1,20),theme:pk(r,TH)}}),T('quick',.08,function(r,t){return{level:cl(1+Math.round(t*19),1,20)}}),
 T('classic',.15,function(r,t){return{level:cl(1+Math.round(t*19),1,20),dirs:'auto',hints:99}}),T('themed',.25,function(r,t){return{level:cl(1+Math.round(t*19),1,20),theme:pk(r,TH)}}),
 T('classic',.4,function(r,t){return{level:cl(1+Math.round(t*19),1,20),dirs:pk(r,[4,6]),hints:5,back:r()<.5}}),T('allway',.5,function(r,t){return{level:cl(1+Math.round(t*19),1,20)}}),
 T('mystery',.55,function(r,t){return{level:cl(1+Math.round(t*19),1,20)}}),T('fog',.6,function(r,t){return{level:cl(1+Math.round(t*19),1,20)}}),
 T('time',.68,function(r,t){return{level:cl(1+Math.round(t*19),1,20),theme:pk(r,TH)}}),T('giant',.75,function(r,t){return{level:cl(1+Math.round(t*19),1,20)}}),
 T('purist',.85,function(r,t){return{level:cl(1+Math.round(t*19),1,20),dirs:8,hints:0}}),T('classic',.95,function(r,t){return{level:cl(10+Math.round(t*10),1,20),dirs:8,back:true,list:'blanks',hints:0,size:12}})],
sudoku:[T('zen',.02,function(r,t){return{level:cl(1+Math.round(t*20),1,25)}}),T('parity',.1,function(r,t){return{level:cl(1+Math.round(t*20),1,25)}}),
 T('classic',.15,function(r,t){return{level:cl(1+Math.round(t*22),1,25),hints:99,check:'instant',lives:0}}),T('onehint',.35,function(r,t){return{level:cl(1+Math.round(t*22),1,25)}}),
 T('twolives',.45,function(r,t){return{level:cl(1+Math.round(t*21),1,25)}}),T('classic',.5,function(r,t){return{level:cl(2+Math.round(t*22),1,25),hints:3,lives:3,check:pk(r,['instant','conflict'])}}),
 T('strict',.52,function(r,t){return{level:cl(1+Math.round(t*20),1,25)}}),T('attack',.56,function(r,t){return{level:cl(1+Math.round(t*19),1,25)}}),T('memory',.62,function(r,t){return{level:cl(1+Math.round(t*18),1,25)}}),
 T('blind',.66,function(r,t){return{level:cl(1+Math.round(t*20),1,25)}}),T('speedx',.76,function(r,t){return{level:cl(1+Math.round(t*17),1,25)}}),T('iron',.86,function(r,t){return{level:cl(1+Math.round(t*17),1,25)}}),
 T('sudden',.9,function(r,t){return{level:cl(1+Math.round(t*17),1,25)}}),T('purist',.96,function(r,t){return{level:cl(1+Math.round(t*17),1,25)}})],
jewel:[T('campaign',.1,function(r,t){return{level:cl(1+Math.round(t*199),1,200),boost:99,shape:'auto'}}),T('campaign',.3,function(r,t){return{level:cl(1+Math.round(t*199),1,200),boost:5,shape:'auto'}}),T('campaign',.5,function(r,t){return{level:cl(1+Math.round(t*199),1,200),boost:3,shape:pk(r,['auto',Math.floor(r()*51)])}}),
 T('campaign',.7,function(r,t){return{level:cl(1+Math.round(t*199),1,200),boost:1,shape:'auto'}}),T('campaign',.9,function(r,t){return{level:cl(1+Math.round(t*199),1,200),boost:0,shape:'auto'}}),
 T('quarry',.35,function(r){return{boost:pk(r,[3,5,99])}}),T('hunt',.4,function(r){return{boost:pk(r,[3,5])}}),T('power',.55,function(r){return{boost:pk(r,[2,3])}}),T('dynamite',.62,function(r){return{boost:pk(r,[1,2,3])}}),T('vault',.75,function(r){return{boost:pk(r,[0,1,2])}})]};

var NEED=function(t,r,mx){return cl(1+Math.floor(t*(mx||5)+r()*.9),1,mx||5)};
var AUP=function(m,d,x){return T(m,d,function(r,t){return Object.assign({board:1+Math.floor(r()*100),ace:pk(r,['high','low']),undo:by(t,[99,10,5,3]),hl:t<.5,auto:t<.35,need:NEED(t,r,3)},x?x(r,t):{})})};
TPL.acesup=[AUP('quick',.08),AUP('six',.12),AUP('any',.16),AUP('five',.2),AUP('res2',.24),AUP('duel',.28),AUP('res1',.32),AUP('color',.36),AUP('twins',.4),AUP('classic',.44),AUP('kings',.5),AUP('short',.56),AUP('drip',.62),AUP('three',.75),AUP('double',.85)];
TPL.gin=[T('match',.1,function(r,t){return{target:pk(r,[25,50]),ai:'normal',need:1}}),T('match',.4,function(r,t){return{target:pk(r,[50,75,100]),ai:'normal',need:t>.5?2:1}}),T('match',.7,function(r,t){return{target:pk(r,[75,100,150]),ai:'hard',need:t>.8?3:2}}),T('match',.95,function(r,t){return{target:150,ai:'hard',need:3}})];
TPL.oldmaid=[T('match',.2,function(r,t){return{need:NEED(t,r,6)}}),T('match',.6,function(r,t){return{need:NEED(t*1.2,r,7)}}),T('match',.9,function(r,t){return{need:cl(3+Math.floor(t*4),4,8)}})];
TPL.gofish=[T('match',.15,function(r,t){return{hand:7,ai:'normal',need:NEED(t,r,3)}}),T('match',.45,function(r,t){return{hand:pk(r,[5,7]),ai:'normal',need:NEED(t,r,4)}}),T('match',.8,function(r,t){return{hand:5,ai:'hard',need:NEED(t,r,5)}})];
TPL.war=[T('match',.2,function(r,t){return{speed:'fast',need:NEED(t,r,3)}}),T('match',.6,function(r,t){return{speed:'fast',need:NEED(t,r,5)}}),T('match',.9,function(r,t){return{speed:'fast',need:cl(3+Math.floor(t*3),3,6)}})];
var BD=function(m,d,x){return T(m,d,function(r,t){return Object.assign({opp:'cpu',lvl:by(t+d*.3,[1,1,2,2,3]),side:pk(r,[0,1]),need:t>.75?2:1},x?x(r,t):{})})};
TPL.checkers=[BD('mini',.1),BD('race',.18),BD('under',.22),BD('casual',.3,function(r){return{force:'off',hl:true}}),BD('american',.4,function(r){return{force:pk(r,['off','on']),hl:r()<.6}}),BD('pool',.5),BD('russian',.6,function(r){return{force:'on'}}),BD('brazilian',.7,function(r){return{force:'on',hl:false}}),BD('intl',.8,function(r){return{force:'on'}}),BD('giveaway',.9)];
TPL.chess=[BD('kqk',.05,function(r){return{side:0,hl:true,autoq:true}}),BD('krk',.12,function(r){return{side:0,hl:true,autoq:true}}),BD('qodds',.22),BD('prace',.32),BD('hill',.45),BD('three',.5),BD('standard',.55,function(r,t){return{hl:t<.7}}),BD('c960',.65),BD('anti',.72),BD('horde',.82,function(r){return{side:pk(r,[0,1])}}),BD('standard',.95,function(r){return{hl:false}})];
TPL.chinese=[BD('quick',.1),BD('sprint',.2),BD('under',.25),BD('race5',.32),BD('super',.42),BD('classic',.5),BD('walls',.55),BD('three',.62),BD('four',.7),BD('six',.8)];
TPL.sudoku2=[T('shape',.1,function(r,t){return{style:Math.floor(r()*100),diff:0,mist:1,same:1,timer:1}}),T('shape',.4,function(r,t){return{style:Math.floor(r()*100),diff:t>.5?2:1,mist:1,same:pk(r,[0,1]),timer:1}}),T('shape',.7,function(r,t){return{style:Math.floor(r()*100),diff:pk(r,[1,2]),mist:pk(r,[0,1]),same:0,timer:1}}),T('shape',.95,function(r,t){return{style:Math.floor(r()*100),diff:2,mist:0,same:0,timer:1}})];
var CAS=function(m,d,x){return T(m,d,function(r,t){var st=by(t,[2500,1000,1000,500,500]),mult=1.12+t*.85+r()*.1,goal=Math.round(st*mult/50)*50;return Object.assign({start:st,speed:.5,goal:goal},x?x(r,t):{})})};
TPL.blackjack=[CAS(0,.1),CAS(1,.2),CAS(6,.3),CAS(7,.35),CAS(8,.4),CAS(9,.45),CAS(2,.5),CAS(3,.6),CAS(4,.65),CAS(5,.75),CAS(10,.85)];
TPL.slots=[CAS(0,.1),CAS(4,.25),CAS(1,.3),CAS(2,.4),CAS(3,.5),CAS(5,.6),CAS(6,.8)];
TPL.holdem=[CAS(0,.1),CAS(8,.2),CAS(3,.3),CAS(5,.4),CAS(7,.45),CAS(1,.5),CAS(9,.55),CAS(6,.62),CAS(4,.7),CAS(10,.8),CAS(2,.9)];
TPL.omaha=[CAS(0,.1),CAS(8,.2),CAS(3,.3),CAS(1,.4),CAS(5,.45),CAS(7,.5),CAS(4,.55),CAS(6,.65),CAS(9,.72),CAS(10,.8),CAS(2,.88)];
TPL.draw=[CAS(0,.1),CAS(1,.2),CAS(2,.25),CAS(4,.3),CAS(5,.4),CAS(6,.45),CAS(7,.5),CAS(8,.55),CAS(10,.65),CAS(3,.75),CAS(9,.85)];
TPL.stud=[CAS(0,.1),CAS(3,.2),CAS(4,.3),CAS(10,.4),CAS(2,.5),CAS(6,.55),CAS(7,.6),CAS(8,.7),CAS(1,.75),CAS(9,.85),CAS(5,.9)];
function choose(tp,r,t,boss){var tt=cl(t+(r()-.5)*.25+(boss?.22:0),0,1),c=tp.filter(function(x){return Math.abs(x.d-tt)<=.3});if(!c.length)c=tp;var w=c.map(function(x){return 1.3-Math.abs(x.d-tt)}),tot=0;w.forEach(function(x){tot+=x});var k=r()*tot;for(var i=0;i<c.length;i++){k-=w[i];if(k<=0)return c[i]}return c[c.length-1]}
var WN2=['Training Grounds','Rival Alley','Steel Gate','Storm Bridge','Emerald Vault','Ember Keep','Midnight Market','Silver Summit','Champion\u2019s Hall','Legend\u2019s Peak'];
function levelDef(adv,n){
  var A0=advOf(adv)||ADVS[0];n=cl(Math.round(n)||1,1,500);var r=mul(H(adv+':'+n)),v2=A0.v2,t=(n-1)/499,boss=n%10===0,fin=n===500,g=A0.g;
  if(v2){var run=Math.floor((n-1)/100),pos=((n-1)%100)/99;t=cl(pos*.72+run*.075+.03,0,1)}
  if(g==='grab'){var pool=v2?G22:G7;g=pool[Math.floor(r()*pool.length)];var pg=pool[Math.floor(mul(H(adv+':'+(n-1)))()*pool.length)];if(n>1&&g===pg)g=pool[(pool.indexOf(g)+1+Math.floor(r()*(pool.length-1)))%pool.length]}
  var tp=choose(TPL[g],r,t,boss||fin),ex=tp.f(r,t),st=Object.assign({},BASE[g],ex),need=ex.need||1,goal=ex.goal||0;
  delete st.need;delete st.goal;st.mode=tp.m;
  var lines=[];if(need>1)lines.push(LB.need(need));
  SHOW[g].filter(function(k){return k in ex}).forEach(function(k){var f=LB[k],s2=f?f(ex[k],st,g):null;if(s2)lines.push(s2)});
  var md=(MD[g]&&MD[g][tp.m])||(W.__MDX&&W.__MDX[g]&&W.__MDX[g][tp.m])||[String(tp.m),''],star=cl(Math.ceil((tp.d*.6+t*.5+(boss?.15:0))*5),1,5),w=Math.floor((n-1)/50),gm=GM[g];
  return{adv:adv,n:n,g:g,st:st,need:need,goalChips:goal,mode:tp.m,modeName:md[0],modeDesc:md[1],lines:lines,stars:star,boss:boss,fin:fin,world:w,worldName:(v2?WN2:WN)[w],v2:v2,ic:gm[1],c:gm[2],goal:goal?'Grow your chips to $'+goal.toLocaleString():gm[3],gname:gm[0]}
}
W.__ADVAPI={GM:GM,ORDER1:ORDER1,ORDER_N:ORDER_N,NADV:NADV,ADVS:ADVS,levelDef:levelDef,encode:encode,decode:decode,P:P,saveP:saveP,done:done,advOf:advOf,WN:WN};
}
/* ================= UI (rebuilt per page) ================= */
var A=W.__ADVAPI,V={view:'map',adv:'klondike',n:1,err:''};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
function css(){if(D.getElementById('advcss'))return;var s=D.createElement('style');s.id='advcss';s.textContent=
'#advov{position:fixed;inset:0;z-index:9900;background:radial-gradient(circle at 50% 0,#17335c,#060d1a 70%);display:none;overflow:auto;-webkit-overflow-scrolling:touch;font-family:Roboto,Arial,sans-serif;color:#fff}#advov.on{display:block}'+
'#advov .aw{max-width:440px;margin:0 auto;padding:calc(env(safe-area-inset-top) + 14px) 14px 28px}#advov h1{margin:0 0 4px;font-size:24px}#advov .sub{color:#b8c8e6;font-size:13px;margin:0 0 12px;line-height:1.35}'+
'#advov .gr{margin:0 0 9px;padding:8px 10px;border-left:6px solid var(--c);background:rgba(255,255,255,.07)}#advov .gh{display:flex;align-items:center;gap:8px;margin-bottom:6px}#advov .gh .i{font-size:22px}#advov .gh b{font-size:16px}#advov .gb{display:flex;gap:6px}#advov .ab{flex:1;border:0;background:rgba(255,255,255,.1);color:#fff;text-align:left;padding:8px;font:inherit;cursor:pointer}#advov .ab:active{background:rgba(255,255,255,.22)}#advov .ab b{display:block;font-size:13px}#advov .ab small{color:#b8c8e6;font-size:11px}'+
'#advov .cd{display:flex;align-items:center;gap:10px;width:100%;margin:0 0 9px;padding:11px 12px;border:0;border-left:6px solid var(--c);background:rgba(255,255,255,.08);color:#fff;text-align:left;cursor:pointer;font:inherit}#advov .cd:active{background:rgba(255,255,255,.18)}'+
'#advov .cd .i{font-size:28px;width:38px;text-align:center}#advov .cd b{display:block;font-size:16px}#advov .cd small{color:#b8c8e6;font-size:12px}#advov .bar{height:5px;background:rgba(255,255,255,.14);margin-top:5px}#advov .bar i{display:block;height:100%;background:var(--c)}'+
'#advov .bt{display:block;width:100%;height:50px;margin:8px 0 0;border:0;font:900 17px Roboto,Arial,sans-serif;background:linear-gradient(#ffd25e,#e89a00);color:#2a1800;cursor:pointer}#advov .bt.s{height:42px;font-size:14px;background:rgba(255,255,255,.16);color:#fff}'+
'#advov .box{background:rgba(255,255,255,.08);padding:12px;margin:0 0 10px}#advov .lv{font-size:54px;font-weight:900;line-height:1;margin:2px 0}#advov .wd{color:#ffd25e;font-size:12px;font-weight:900;letter-spacing:.08em;text-transform:uppercase}'+
'#advov .ln{margin:0;padding:0;list-style:none}#advov .ln li{padding:6px 0 6px 18px;position:relative;font-size:14px;border-top:1px solid rgba(255,255,255,.08)}#advov .ln li:before{content:"◆";position:absolute;left:0;color:var(--c,#ffd25e);font-size:10px;top:9px}'+
'#advov .mpw{margin:14px 0 6px;font:900 12px Roboto;color:#ffd25e;letter-spacing:.08em;text-transform:uppercase;display:flex;justify-content:space-between}#advov .mp{display:block;background:rgba(0,0,0,.25);padding:6px;border-radius:8px}#advov .mpr{display:flex;gap:4px;margin-bottom:4px}#advov .mpr.rv{flex-direction:row-reverse}#advov .mph{font:900 11px Roboto;color:#fff;background:linear-gradient(90deg,var(--c,#ffd25e),transparent);padding:3px 6px;margin:6px 0 4px;letter-spacing:.06em;text-transform:uppercase;color:#14171c}'+
'#advov .mn{flex:1 1 0;min-width:0;aspect-ratio:1;border:0;border-radius:50%;background:rgba(255,255,255,.1);color:rgba(255,255,255,.35);font:800 10px Roboto;padding:0;cursor:default;position:relative}#advov .mn.d{background:var(--c,#ffd25e);color:#14171c;cursor:pointer}#advov .mn.u{background:#fff;color:#14171c;cursor:pointer;animation:mnp 1.2s infinite}#advov .mn.bx{border-radius:4px;box-shadow:inset 0 0 0 2px #c0392b}#advov .mn.s{outline:3px solid #fff;outline-offset:1px;z-index:1}@keyframes mnp{50%{box-shadow:0 0 0 4px rgba(255,210,94,.7)}}'+
'#advov .cp{background:rgba(255,255,255,.16)!important}'+
'#advov .stk{position:sticky;top:0;z-index:20;display:flex;justify-content:flex-end;margin:calc(-1*(env(safe-area-inset-top) + 14px)) -14px 8px;padding:calc(env(safe-area-inset-top) + 8px) 10px 8px;background:linear-gradient(rgba(6,13,26,.97) 75%,rgba(6,13,26,0))}#advov .stk button{height:40px;padding:0 16px;border:0;border-radius:99px;background:rgba(255,255,255,.18);color:#fff;font:900 14px Roboto,Arial,sans-serif;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.4)}'+
'#advov .bs{display:inline-block;background:#c0392b;color:#fff;font:900 11px Roboto;padding:2px 7px;margin-left:6px;vertical-align:middle}#advov .st{color:#ffd25e;letter-spacing:2px}'+
'#advov .row{display:flex;gap:6px;align-items:center;margin:8px 0}#advov .row button{flex:1;height:40px;border:0;background:rgba(255,255,255,.16);color:#fff;font:800 14px Roboto;cursor:pointer}#advov input{flex:2;height:40px;border:2px solid #ffd25e;background:#0b1a33;color:#fff;font:900 22px Roboto;text-align:center;letter-spacing:.3em;text-transform:uppercase;min-width:0}'+
'#advov .code{font:900 46px Roboto,Arial,sans-serif;letter-spacing:.25em;text-align:center;color:#ffd25e;padding:8px 0 8px .25em;background:rgba(0,0,0,.35);border:2px dashed #ffd25e;margin:8px 0}#advov .er{color:#ff8f8f;font-size:13px;font-weight:700;min-height:16px}#advov .bk{background:none;border:0;color:#9fc3ff;font:800 14px Roboto;padding:6px 0;cursor:pointer}';
D.head.appendChild(s)}
function el(){css();var e=D.getElementById('advov');if(!e){e=D.createElement('div');e.id='advov';D.body.appendChild(e);e.addEventListener('click',onClick);e.addEventListener('input',function(x){if(x.target.id==='advcode'){x.target.value=x.target.value.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,3)}})}return e}
function mapHtml(adv,sel){
  var dn=A.done(adv),nxt=Math.min(500,dn+1),gm=(A.advOf(adv)&&A.GM[A.advOf(adv).g])||['','','#ffd25e'],o='<div class="mpw"><span>Path of 500 levels</span><span>'+dn+' done</span></div><div class="mp" id="advmap" style="--c:'+gm[2]+'">';
  for(var r=0;r<50;r++){
    if(r%5===0){var dd=A.levelDef(adv,r*10+1);o+='<div class="mph" style="--c:'+gm[2]+'">World '+(r/5+1)+(dd&&dd.worldName?' · '+esc(dd.worldName):'')+'</div>'}
    o+='<div class="mpr'+(r%2?' rv':'')+'">';
    for(var i=1;i<=10;i++){var n=r*10+i,c='mn';if(n<=dn)c+=' d';else if(n===nxt)c+=' u';if(n%10===0)c+=' bx';if(n===sel)c+=' s';
      o+='<button class="'+c+'" data-lv="'+n+'" aria-label="Level '+n+'">'+(n===500?'🏆':n)+'</button>'}
    o+='</div>'}
  return o+'</div>'}
function copyBtn(code){return '<button class="bt s cp" data-act="copy" data-code="'+code+'">📋 Copy code '+code+'</button>'}
function copyText(t,btn){var ok=function(){if(btn){var o=btn.textContent;btn.textContent='✓ Copied!';setTimeout(function(){btn.textContent=o},1400)}};
  try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok,function(){fb()});return}}catch(e){}fb();
  function fb(){try{var ta=D.createElement('textarea');ta.value=t;ta.style.cssText='position:fixed;opacity:0;top:0';D.body.appendChild(ta);ta.focus();ta.select();ta.setSelectionRange(0,9);D.execCommand('copy');ta.remove();ok()}catch(e){if(btn)btn.textContent='Code: '+t}}}
function stars(n){return '★'.repeat(n)+'☆'.repeat(5-n)}
function brief(d){var gi={ic:d.ic,c:d.c};return '<div class="box" style="--c:'+gi.c+'"><div class="wd">'+(d.v2?'Challenge Road · ':'')+'World '+(d.world+1)+' · '+esc(d.worldName)+'</div><div class="lv">Level '+d.n+(d.boss?'<span class="bs">'+(d.fin?'FINAL BOSS':'BOSS')+'</span>':'')+'</div>'+
 '<div style="font-size:17px;font-weight:900;margin:6px 0 2px">'+gi.ic+' '+esc(d.gname)+' · '+esc(d.modeName)+'</div><div style="color:#c9d6ee;font-size:13px;margin-bottom:6px">'+esc(d.modeDesc)+'</div>'+
 '<ul class="ln" style="--c:'+gi.c+'"><li><b>Goal:</b> '+esc(d.goal)+'</li>'+d.lines.map(function(l){return '<li>'+esc(l)+'</li>'}).join('')+'</ul><div style="margin-top:8px"><span style="font-size:12px;color:#b8c8e6">Difficulty</span> <span class="st">'+stars(d.stars)+'</span></div></div>'}
function render(){
  var e=el(),h='<div class="aw"><div class="stk"><button data-act="close" aria-label="Close">✕ Close</button></div>';
  if(V.view==='map'){
    h+='<h1>🗺 Adventure Mode</h1><p class="sub">Two adventures for every game plus Grab Bag mixes: 46 adventures, 500 levels each. Every level changes the rules and settings. Beat a level and you get a 3-character code to pick up where you left off.</p>';
    h+='<div class="box"><b>Have a code?</b><div class="row"><input id="advcode" maxlength="3" placeholder="ABC" autocomplete="off" autocapitalize="characters"><button id="advgo">Load</button></div><div class="er">'+esc(V.err)+'</div></div>';
    var rows=A.ORDER1.concat(A.ORDER_N).map(function(g){return{g:g,a1:g,a2:g+'_2'}});rows.push({g:'grab',a1:'grab',a2:'grab_2'});
    rows.forEach(function(rw){var gm=A.GM[rw.g]||['Grab Bag','🎒','#ffc83d'];function bt(id,lab){var p=A.done(id);return '<button class="ab" data-adv="'+id+'" style="--c:'+gm[2]+'"><b>'+lab+'</b><small>'+(p>=500?'🏆 Complete':'Level '+(p+1)+'/500')+'</small><div class="bar"><i style="width:'+(p/5)+'%"></i></div></button>'}
      h+='<div class="gr" style="--c:'+gm[2]+'"><div class="gh"><span class="i">'+gm[1]+'</span><b>'+gm[0]+'</b></div><div class="gb">'+bt(rw.a1,'Adventure 1')+bt(rw.a2,'Adventure 2')+'</div></div>'});
    h+='<button class="bk" data-act="close">✕ Close</button>';
  }else if(V.view==='adv'){
    var a=A.advOf(V.adv),mx=Math.min(500,A.done(V.adv)+1),d=A.levelDef(V.adv,V.n);
    h+='<button class="bk" data-act="map">◀ All adventures</button><h1>'+a.ic+' '+a.n+'</h1><p class="sub">'+(A.done(V.adv)>=500?'🏆 You finished every level!':'Levels completed: '+A.done(V.adv)+' / 500')+'</p>';
    h+=brief(d);
    h+='<div class="row"><button data-act="m10">−10</button><button data-act="m1">−1</button><button data-act="p1">+1</button><button data-act="p10">+10</button></div>';
    h+='<div class="row"><button data-act="latest">Jump to newest (Level '+mx+')</button></div>';
    h+='<div style="text-align:center;font-size:12px;color:#b8c8e6">Code for this level</div><div class="code">'+A.encode(V.adv,V.n)+'</div>';
    h+=copyBtn(A.encode(V.adv,V.n));h+='<button class="bt" data-act="start">▶ Start Level '+V.n+'</button>';h+=mapHtml(V.adv,V.n);
  }else if(V.view==='info'){
    h+='<h1>Adventure level</h1>'+brief(A.levelDef(V.adv,V.n))+(W.__ADV&&W.__ADV.need>1?'<div class="box"><b>Matches won: '+(W.__ADV.wins||0)+' / '+W.__ADV.need+'</b></div>':'')+'<div style="text-align:center;font-size:12px;color:#b8c8e6">Code to load this level</div><div class="code">'+A.encode(V.adv,V.n)+'</div>'+copyBtn(A.encode(V.adv,V.n))+'<button class="bt" data-act="close">▶ Back to the game</button><button class="bt s" data-act="restart">↻ Restart this level</button><button class="bt s" data-act="adv">🗺 Adventure map</button><button class="bt s" data-act="home">🏠 Quit adventure</button>';
  }else if(V.view==='done'){
    var a2=A.advOf(V.adv),nx=Math.min(500,V.n+1),last=V.n>=500;
    h+='<div style="text-align:center;padding-top:20px"><div style="font-size:64px">'+(last?'🏆':'🎉')+'</div><h1>'+(last?'Adventure complete!':'Level '+V.n+' complete!')+'</h1><p class="sub">'+(last?'You beat all 500 levels of '+esc(a2.n)+'.':'Nice! Write down this code to come back to <b>Level '+nx+'</b> any time.')+'</p>'+
     '<div style="font-size:12px;color:#b8c8e6">'+(last?'Code for Level 500':'Your code for Level '+nx)+'</div><div class="code" id="advshown">'+A.encode(V.adv,nx)+'</div>'+copyBtn(A.encode(V.adv,nx))+'</div>'+
     (last?'':'<button class="bt" data-act="next">Next level →</button>')+'<button class="bt s" data-act="adv">🗺 Adventure map</button><button class="bt s" data-act="home">🏠 Home</button>';
  }else if(V.view==='brief'){
    h+='<button class="bk" data-act="adv">◀ Back</button><h1>Get ready!</h1>'+brief(A.levelDef(V.adv,V.n))+'<button class="bt" data-act="start">▶ Start Level '+V.n+'</button>';
  }
  e.innerHTML=h+'</div>';e.classList.add('on');e.scrollTop=0}
function close(){var e=D.getElementById('advov');if(e)e.classList.remove('on')}
function launch(adv,n){var d=A.levelDef(adv,n);W.__ADV={adv:adv,n:n,g:d.g,st:d.st,won:false,need:d.need,wins:0,goal:d.goalChips};W.__AUTOPLAY=true;W.__RANDMODE=false;W.__ADVGO=1;close();try{if(window.__bye2&&D.getElementById('menu')){}}catch(x){}W.__go(d.g)}
function onClick(ev){
  var t=ev.target;ev.stopPropagation();
  var b=t.closest('[data-adv]');if(b){V.adv=b.getAttribute('data-adv');V.n=Math.min(500,A.done(V.adv)+1);V.view='adv';render();return}
  if(t.id==='advgo'){var c=A.decode(D.getElementById('advcode').value);if(!c){V.err='That code doesn’t match any level.';render();return}
    if(A.done(c.adv)<c.n-1){A.P[c.adv]=c.n-1;A.saveP()}V.adv=c.adv;V.n=c.n;V.err='';V.view='brief';render();return}
  var lv=t.closest&&t.closest('[data-lv]');if(lv){var nn=+lv.getAttribute('data-lv');if(nn<=Math.min(500,A.done(V.adv)+1)){V.n=nn;var sc=e0().scrollTop;render();e0().scrollTop=sc;var d0=D.querySelector('#advov .lv');}return}
  var cb=t.closest&&t.closest('[data-act="copy"]');if(cb){copyText(cb.getAttribute('data-code'),cb);return}
  var a=t.getAttribute&&t.getAttribute('data-act');if(!a)return;
  var mx=Math.min(500,A.done(V.adv)+1);
  if(a==='close')close();
  else if(a==='map'){V.view='map';V.err='';render()}
  else if(a==='adv'){V.view='adv';V.n=Math.min(V.n,Math.min(500,A.done(V.adv)+1));render()}
  else if(a==='m1'||a==='m10'||a==='p1'||a==='p10'){var k=a.charAt(0)==='m'?-1:1,s=a.slice(1)==='10'?10:1;V.n=cl(V.n+k*s,1,mx);render()}
  else if(a==='latest'){V.n=mx;render()}
  else if(a==='start')launch(V.adv,V.n);
  else if(a==='restart')launch(V.adv,V.n);
  else if(a==='next'){V.n=Math.min(500,V.n+1);V.view='brief';render()}
  else if(a==='home'){W.__ADV=null;close();W.__go('hub')}
}
function cl(v,a,b){return Math.max(a,Math.min(b,v))}
W.__advOpen=function(id){V.err='';if(id&&A.advOf(id)){V.adv=id;V.n=Math.min(500,A.done(id)+1);V.view='adv'}else V.view='map';render()};
W.__advInfo=function(){if(!W.__ADV)return;if(W.__ADV.tour){if(W.__tourInfo)W.__tourInfo();return}V.adv=W.__ADV.adv;V.n=W.__ADV.n;V.view='info';render()};
/* ---- hooks ---- */
if(W.__go&&!W.__go.__adv){var og=W.__go;W.__go=function(id){if(id==='hub'&&W.__ADV&&W.__ADV.tour)W.__ADV=null;if(!W.__ADVGO&&W.__ADV&&id!==W.__ADV.g)W.__ADV=null;W.__ADVGO=0;return og.apply(this,arguments)};W.__go.__adv=1}
function won(){var X=W.__ADV;if(!X||X.won)return;var m=D.getElementById('menu');if(m&&m.classList.contains('on'))return;if(X.tour){if(W.__tourWon)W.__tourWon(X);return}X.won=true;
  X.wins=(X.wins||0)+1;
  if(X.need>1&&X.wins<X.need){setTimeout(function(){if(W.__ADV!==X)return;var e=D.createElement('div');e.style.cssText='position:fixed;left:0;right:0;top:40%;z-index:9950;text-align:center;font:900 22px Roboto,Arial,sans-serif;color:#fff;background:rgba(0,0,0,.85);padding:18px';e.innerHTML='🎉 Win '+X.wins+' of '+X.need+'!<br><small style="font-size:14px;color:#ffd25e">Next match starting…</small>';D.body.appendChild(e);
    setTimeout(function(){if(W.__ADV!==X)return;X.won=false;W.__AUTOPLAY=true;W.__RANDMODE=false;W.__NEWG=true;W.__go(X.g)},2000)},900);return}
  var n=X.n;if(A.done(X.adv)<n){A.P[X.adv]=n;A.saveP()}
  setTimeout(function(){if(W.__ADV!==X)return;V.adv=X.adv;V.n=n;V.view='done';render()},1700)}
W.__fxw=function(fx,a){try{won()}catch(e){}return fx.win(a)};W.__advWin=function(){try{won()}catch(e){}};
})();

/* ---------- Board Tour: every board of 5 games, all unlocked, go board by board ---------- */
(function(){
var W=window,D=document;
var TD={"klondike": [["classic", "Classic", "Classic"], ["big", "Big Cards", "Classic"], ["giant", "Giant", "Classic"], ["open", "Open", "Classic"], ["bigopen", "Big Open", "Classic"], ["flat", "Flat", "Classic"], ["even", "Even", "Classic"], ["reverse", "Reverse", "Classic"], ["tall", "Tall", "Classic"], ["peaks", "Twin Peaks", "Classic"], ["valley", "Valley", "Classic"], ["wide", "Wide", "Classic"], ["mini", "Mini", "Classic"], ["stripes", "Stripes", "Classic"], ["g0_5_20", "Even 5·20A", "Even"], ["g1_5_40", "Even 5·40A", "Even"], ["g2_6_24", "Even 6·24A", "Even"], ["g3_6_32", "Even 6·32A", "Even"], ["g4_6_36", "Even 6·36A", "Even"], ["g5_7_28", "Even 7·28A", "Even"], ["g6_7_36", "Even 7·36A", "Even"], ["g7_7_40", "Even 7·40A", "Even"], ["g8_8_32", "Even 8·32A", "Even"], ["g9_8_40", "Even 8·40A", "Even"], ["g10_6_24", "Left Heavy 6·24C", "Left Heavy"], ["g11_6_28", "Left Heavy 6·28D", "Left Heavy"], ["g12_6_32", "Left Heavy 6·32C", "Left Heavy"], ["g13_7_20", "Left Heavy 7·20G", "Left Heavy"], ["g14_7_32", "Left Heavy 7·32C", "Left Heavy"], ["g15_7_36", "Left Heavy 7·36B", "Left Heavy"], ["g16_8_28", "Left Heavy 8·28D", "Left Heavy"], ["g17_8_28", "Left Heavy 8·28E", "Left Heavy"], ["g18_8_32", "Left Heavy 8·32F", "Left Heavy"], ["g19_8_36", "Left Heavy 8·36C", "Left Heavy"], ["g20_5_24", "Mound 5·24E", "Mound"], ["g21_5_28", "Mound 5·28D", "Mound"], ["g22_7_20", "Mound 7·20B", "Mound"], ["g23_7_28", "Mound 7·28C", "Mound"], ["g24_7_32", "Mound 7·32C", "Mound"], ["g25_7_36", "Mound 7·36A", "Mound"], ["g26_8_32", "Mound 8·32C", "Mound"], ["g27_8_36", "Mound 8·36C", "Mound"], ["g28_8_36", "Mound 8·36E", "Mound"], ["g29_8_40", "Mound 8·40F", "Mound"], ["g30_5_24", "Right Heavy 5·24C", "Right Heavy"], ["g31_5_28", "Right Heavy 5·28C", "Right Heavy"], ["g32_6_20", "Right Heavy 6·20E", "Right Heavy"], ["g33_7_20", "Right Heavy 7·20E", "Right Heavy"], ["g34_7_24", "Right Heavy 7·24F", "Right Heavy"], ["g35_7_40", "Right Heavy 7·40B", "Right Heavy"], ["g36_8_20", "Right Heavy 8·20E", "Right Heavy"], ["g37_8_24", "Right Heavy 8·24B", "Right Heavy"], ["g38_8_24", "Right Heavy 8·24G", "Right Heavy"], ["g39_8_32", "Right Heavy 8·32G", "Right Heavy"], ["g40_5_24", "Stairs Down 5·24C", "Stairs Down"], ["g41_6_24", "Stairs Down 6·24A", "Stairs Down"], ["g42_6_24", "Stairs Down 6·24G", "Stairs Down"], ["g43_7_36", "Stairs Down 7·36A", "Stairs Down"], ["g44_7_40", "Stairs Down 7·40B", "Stairs Down"], ["g45_8_28", "Stairs Down 8·28A", "Stairs Down"], ["g46_8_28", "Stairs Down 8·28F", "Stairs Down"], ["g47_8_28", "Stairs Down 8·28G", "Stairs Down"], ["g48_8_32", "Stairs Down 8·32F", "Stairs Down"], ["g49_8_32", "Stairs Down 8·32G", "Stairs Down"], ["g50_5_40", "Stairs Up 5·40A", "Stairs Up"], ["g51_6_20", "Stairs Up 6·20D", "Stairs Up"], ["g52_6_32", "Stairs Up 6·32F", "Stairs Up"], ["g53_6_40", "Stairs Up 6·40B", "Stairs Up"], ["g54_7_28", "Stairs Up 7·28G", "Stairs Up"], ["g55_7_32", "Stairs Up 7·32C", "Stairs Up"], ["g56_7_32", "Stairs Up 7·32E", "Stairs Up"], ["g57_8_28", "Stairs Up 8·28A", "Stairs Up"], ["g58_8_32", "Stairs Up 8·32F", "Stairs Up"], ["g59_8_32", "Stairs Up 8·32G", "Stairs Up"], ["g60_5_32", "Towers 5·32B", "Towers"], ["g61_6_20", "Towers 6·20E", "Towers"], ["g62_6_24", "Towers 6·24D", "Towers"], ["g63_6_32", "Towers 6·32A", "Towers"], ["g64_7_20", "Towers 7·20F", "Towers"], ["g65_7_24", "Towers 7·24G", "Towers"], ["g66_7_36", "Towers 7·36B", "Towers"], ["g67_8_24", "Towers 8·24G", "Towers"], ["g68_8_32", "Towers 8·32A", "Towers"], ["g69_8_40", "Towers 8·40B", "Towers"], ["g70_5_20", "Valley 5·20A", "Valley"], ["g71_7_28", "Valley 7·28A", "Valley"], ["g72_7_28", "Valley 7·28B", "Valley"], ["g73_7_28", "Valley 7·28D", "Valley"], ["g74_7_28", "Valley 7·28G", "Valley"], ["g75_7_40", "Valley 7·40B", "Valley"], ["g76_8_24", "Valley 8·24B", "Valley"], ["g77_8_24", "Valley 8·24G", "Valley"], ["g78_8_28", "Valley 8·28A", "Valley"], ["g79_8_40", "Valley 8·40D", "Valley"], ["g80_5_24", "Wave 5·24E", "Wave"], ["g81_5_24", "Wave 5·24G", "Wave"], ["g82_5_28", "Wave 5·28C", "Wave"], ["g83_5_36", "Wave 5·36C", "Wave"], ["g84_5_36", "Wave 5·36D", "Wave"], ["g85_5_40", "Wave 5·40A", "Wave"], ["g86_7_28", "Wave 7·28F", "Wave"], ["g87_7_36", "Wave 7·36C", "Wave"], ["g88_8_20", "Wave 8·20A", "Wave"], ["g89_8_32", "Wave 8·32E", "Wave"], ["g90_5_24", "Zigzag 5·24A", "Zigzag"], ["g91_5_28", "Zigzag 5·28D", "Zigzag"], ["g92_5_28", "Zigzag 5·28E", "Zigzag"], ["g93_5_36", "Zigzag 5·36A", "Zigzag"], ["g94_6_20", "Zigzag 6·20G", "Zigzag"], ["g95_6_28", "Zigzag 6·28C", "Zigzag"], ["g96_6_36", "Zigzag 6·36A", "Zigzag"], ["g97_6_40", "Zigzag 6·40C", "Zigzag"], ["g98_8_20", "Zigzag 8·20A", "Zigzag"], ["g99_8_32", "Zigzag 8·32A", "Zigzag"]], "freecell": [["classic", "Classic", "Classic"], ["reverse", "Reverse", "Classic"], ["seven", "Seven", "Classic"], ["six", "Big Six", "Classic"], ["five", "Giant Five", "Classic"], ["stairs", "Staircase", "Classic"], ["hill", "Hill", "Classic"], ["valley", "Valley", "Classic"], ["heavy", "Heavy Left", "Classic"], ["ramp", "Ramp", "Classic"], ["g0_5_52", "Even 5·52A", "Even"], ["g1_6_52", "Even 6·52A", "Even"], ["g2_7_52", "Even 7·52A", "Even"], ["g3_8_52", "Even 8·52A", "Even"], ["g4_6_52", "Left Heavy 6·52A", "Left Heavy"], ["g5_6_52", "Left Heavy 6·52B", "Left Heavy"], ["g6_7_52", "Left Heavy 7·52A", "Left Heavy"], ["g7_7_52", "Left Heavy 7·52B", "Left Heavy"], ["g8_7_52", "Left Heavy 7·52C", "Left Heavy"], ["g9_8_52", "Left Heavy 8·52A", "Left Heavy"], ["g10_8_52", "Left Heavy 8·52B", "Left Heavy"], ["g11_8_52", "Left Heavy 8·52C", "Left Heavy"], ["g12_8_52", "Left Heavy 8·52D", "Left Heavy"], ["g13_5_52", "Mound 5·52B", "Mound"], ["g14_6_52", "Mound 6·52C", "Mound"], ["g15_6_52", "Mound 6·52D", "Mound"], ["g16_6_52", "Mound 6·52F", "Mound"], ["g17_7_52", "Mound 7·52A", "Mound"], ["g18_7_52", "Mound 7·52B", "Mound"], ["g19_7_52", "Mound 7·52C", "Mound"], ["g20_7_52", "Mound 7·52D", "Mound"], ["g21_7_52", "Mound 7·52E", "Mound"], ["g22_7_52", "Mound 7·52F", "Mound"], ["g23_7_52", "Mound 7·52G", "Mound"], ["g24_8_52", "Mound 8·52C", "Mound"], ["g25_6_52", "Right Heavy 6·52A", "Right Heavy"], ["g26_6_52", "Right Heavy 6·52B", "Right Heavy"], ["g27_7_52", "Right Heavy 7·52A", "Right Heavy"], ["g28_7_52", "Right Heavy 7·52B", "Right Heavy"], ["g29_7_52", "Right Heavy 7·52C", "Right Heavy"], ["g30_8_52", "Right Heavy 8·52A", "Right Heavy"], ["g31_8_52", "Right Heavy 8·52B", "Right Heavy"], ["g32_8_52", "Right Heavy 8·52C", "Right Heavy"], ["g33_8_52", "Right Heavy 8·52D", "Right Heavy"], ["g34_5_52", "Stairs Down 5·52A", "Stairs Down"], ["g35_5_52", "Stairs Down 5·52B", "Stairs Down"], ["g36_6_52", "Stairs Down 6·52B", "Stairs Down"], ["g37_6_52", "Stairs Down 6·52E", "Stairs Down"], ["g38_7_52", "Stairs Down 7·52A", "Stairs Down"], ["g39_7_52", "Stairs Down 7·52B", "Stairs Down"], ["g40_7_52", "Stairs Down 7·52C", "Stairs Down"], ["g41_7_52", "Stairs Down 7·52D", "Stairs Down"], ["g42_7_52", "Stairs Down 7·52F", "Stairs Down"], ["g43_7_52", "Stairs Down 7·52G", "Stairs Down"], ["g44_8_52", "Stairs Down 8·52D", "Stairs Down"], ["g45_8_52", "Stairs Down 8·52G", "Stairs Down"], ["g46_6_52", "Stairs Up 6·52A", "Stairs Up"], ["g47_6_52", "Stairs Up 6·52B", "Stairs Up"], ["g48_6_52", "Stairs Up 6·52C", "Stairs Up"], ["g49_7_52", "Stairs Up 7·52B", "Stairs Up"], ["g50_7_52", "Stairs Up 7·52C", "Stairs Up"], ["g51_7_52", "Stairs Up 7·52D", "Stairs Up"], ["g52_7_52", "Stairs Up 7·52G", "Stairs Up"], ["g53_8_52", "Stairs Up 8·52A", "Stairs Up"], ["g54_8_52", "Stairs Up 8·52B", "Stairs Up"], ["g55_8_52", "Stairs Up 8·52C", "Stairs Up"], ["g56_8_52", "Stairs Up 8·52E", "Stairs Up"], ["g57_8_52", "Stairs Up 8·52G", "Stairs Up"], ["g58_6_52", "Towers 6·52A", "Towers"], ["g59_7_52", "Towers 7·52A", "Towers"], ["g60_7_52", "Towers 7·52B", "Towers"], ["g61_7_52", "Towers 7·52C", "Towers"], ["g62_8_52", "Towers 8·52A", "Towers"], ["g63_8_52", "Towers 8·52B", "Towers"], ["g64_8_52", "Towers 8·52C", "Towers"], ["g65_5_52", "Valley 5·52A", "Valley"], ["g66_5_52", "Valley 5·52C", "Valley"], ["g67_6_52", "Valley 6·52C", "Valley"], ["g68_6_52", "Valley 6·52G", "Valley"], ["g69_7_52", "Valley 7·52A", "Valley"], ["g70_7_52", "Valley 7·52B", "Valley"], ["g71_7_52", "Valley 7·52D", "Valley"], ["g72_7_52", "Valley 7·52E", "Valley"], ["g73_7_52", "Valley 7·52F", "Valley"], ["g74_7_52", "Valley 7·52G", "Valley"], ["g75_8_52", "Valley 8·52A", "Valley"], ["g76_8_52", "Valley 8·52D", "Valley"], ["g77_5_52", "Wave 5·52B", "Wave"], ["g78_5_52", "Wave 5·52C", "Wave"], ["g79_6_52", "Wave 6·52B", "Wave"], ["g80_6_52", "Wave 6·52C", "Wave"], ["g81_7_52", "Wave 7·52A", "Wave"], ["g82_7_52", "Wave 7·52E", "Wave"], ["g83_7_52", "Wave 7·52F", "Wave"], ["g84_8_52", "Wave 8·52A", "Wave"], ["g85_8_52", "Wave 8·52D", "Wave"], ["g86_8_52", "Wave 8·52F", "Wave"], ["g87_8_52", "Wave 8·52G", "Wave"], ["g88_5_52", "Zigzag 5·52A", "Zigzag"], ["g89_5_52", "Zigzag 5·52C", "Zigzag"], ["g90_6_52", "Zigzag 6·52A", "Zigzag"], ["g91_6_52", "Zigzag 6·52B", "Zigzag"], ["g92_6_52", "Zigzag 6·52C", "Zigzag"], ["g93_6_52", "Zigzag 6·52D", "Zigzag"], ["g94_7_52", "Zigzag 7·52A", "Zigzag"], ["g95_7_52", "Zigzag 7·52B", "Zigzag"], ["g96_7_52", "Zigzag 7·52D", "Zigzag"], ["g97_7_52", "Zigzag 7·52E", "Zigzag"], ["g98_7_52", "Zigzag 7·52F", "Zigzag"], ["g99_8_52", "Zigzag 8·52A", "Zigzag"]], "golf": [["big", "Big Cards", "Classic"], ["classic", "Classic", "Classic"], ["mini", "Mini", "Classic"], ["pyramid", "Pyramid", "Classic"], ["stairs", "Staircase", "Classic"], ["hourglass", "Hourglass", "Classic"], ["grid3x5", "Grid 3×5", "Grids"], ["grid3x6", "Grid 3×6", "Grids"], ["grid3x7", "Grid 3×7", "Grids"], ["grid3x8", "Grid 3×8", "Grids"], ["grid4x4", "Grid 4×4", "Grids"], ["grid4x5", "Grid 4×5", "Grids"], ["grid4x6", "Grid 4×6", "Grids"], ["grid4x7", "Grid 4×7", "Grids"], ["grid4x8", "Grid 4×8", "Grids"], ["grid5x5", "Grid 5×5", "Grids"], ["grid5x7", "Grid 5×7", "Grids"], ["grid5x8", "Grid 5×8", "Grids"], ["grid6x4", "Grid 6×4", "Grids"], ["grid6x5", "Grid 6×5", "Grids"], ["grid6x6", "Grid 6×6", "Grids"], ["grid7x3", "Grid 7×3", "Grids"], ["grid7x4", "Grid 7×4", "Grids"], ["frame5x5", "Frame 5×5", "Frames"], ["frame6x5", "Frame 6×5", "Frames"], ["frame7x5", "Frame 7×5", "Frames"], ["frame5x6", "Frame 5×6", "Frames"], ["frame6x6", "Frame 6×6", "Frames"], ["frame7x6", "Frame 7×6", "Frames"], ["frame6x7", "Frame 6×7", "Frames"], ["frame7x7", "Frame 7×7", "Frames"], ["dia5_5_2", "Diamond 5×5", "Shapes"], ["dia5_5_3", "Diamond 5×5 wide", "Shapes"], ["dia7_7_3", "Diamond 7×7", "Shapes"], ["dia5_7_3", "Diamond 5×7", "Shapes"], ["dia7_5_3", "Diamond 7×5", "Shapes"], ["dia6_6_3", "Diamond 6×6", "Shapes"], ["plus5_5_0", "Plus 5×5 thin", "Shapes"], ["plus5_5_1", "Plus 5×5 fat", "Shapes"], ["plus7_7_0", "Plus 7×7 thin", "Shapes"], ["plus7_7_1", "Plus 7×7 fat", "Shapes"], ["plus6_6_0.5", "Plus 6×6 fat", "Shapes"], ["plus7_5_1", "Plus 7×5 fat", "Shapes"], ["plus5_7_1", "Plus 5×7 fat", "Shapes"], ["x5_0", "X 5×5", "Shapes"], ["x7_0", "X 7×7", "Shapes"], ["x7_1", "X 7×7 thick", "Shapes"], ["x6_0", "X 6×6", "Shapes"], ["x6_1", "X 6×6 thick", "Shapes"], ["chk7_7_0", "Checker 7×7 A", "Shapes"], ["chk7_7_1", "Checker 7×7 B", "Shapes"], ["chk6_6_0", "Checker 6×6 A", "Shapes"], ["chk5_7_0", "Checker 5×7 A", "Shapes"], ["triL5", "Left Stairs 5", "Shapes"], ["triI5", "Hanging Stairs 5", "Shapes"], ["triR5", "Right Ramp 5", "Shapes"], ["triL6", "Left Stairs 6", "Shapes"], ["triI6", "Hanging Stairs 6", "Shapes"], ["triR6", "Right Ramp 6", "Shapes"], ["triL7", "Left Stairs 7", "Shapes"], ["triI7", "Hanging Stairs 7", "Shapes"], ["triR7", "Right Ramp 7", "Shapes"], ["col0", "Mountain", "Columns"], ["col1", "Great Mountain", "Columns"], ["col2", "Diamond Columns", "Columns"], ["col3", "Slope", "Columns"], ["col4", "Zigzag", "Columns"], ["col5", "Fence", "Columns"], ["col6", "Pillars", "Columns"], ["col7", "Teeth", "Columns"], ["col8", "Valley", "Columns"], ["col9", "Gem", "Columns"], ["col10", "Ramp", "Columns"], ["col11", "Crown", "Columns"], ["col12", "Long Ramp", "Columns"], ["col13", "Bridge", "Columns"], ["col14", "Castle", "Columns"], ["col15", "Canyon", "Columns"], ["bpyr4", "Pyramid 4", "Pyramids"], ["bpyr5", "Pyramid 5", "Pyramids"], ["bpyr6", "Pyramid 6", "Pyramids"], ["binv4", "Inverted 4", "Pyramids"], ["binv5", "Inverted 5", "Pyramids"], ["binv6", "Inverted 6", "Pyramids"], ["binv7", "Inverted 7", "Pyramids"], ["bdia3", "Brick Diamond 3", "Pyramids"], ["bdia4", "Brick Diamond 4", "Pyramids"], ["bdia5", "Brick Diamond 5", "Pyramids"], ["bdia6", "Brick Diamond 6", "Pyramids"], ["bhg3", "Brick Hourglass 3", "Pyramids"], ["bhg4", "Brick Hourglass 4", "Pyramids"], ["bhg5", "Brick Hourglass 5", "Pyramids"], ["trap0", "Trapezoid 3-7", "Pyramids"], ["trap1", "Trapezoid 7-3", "Pyramids"], ["trap2", "Trapezoid 4-7", "Pyramids"], ["trap3", "Trapezoid 7-4", "Pyramids"], ["trap4", "Trapezoid 5-7", "Pyramids"], ["brk4x5", "Brick Wall 4×5", "Pyramids"], ["brk5x5", "Brick Wall 5×5", "Pyramids"], ["brk6x4", "Brick Wall 6×4", "Pyramids"], ["brk6x5", "Brick Wall 6×5", "Pyramids"], ["brk5x6", "Brick Wall 5×6", "Pyramids"], ["brk6x6", "Brick Wall 6×6", "Pyramids"], ["brk4x7", "Brick Wall 4×7", "Pyramids"], ["brk5x7", "Brick Wall 5×7", "Pyramids"], ["twin3", "Twin Peaks", "Pyramids"]], "jewel": [[0, "Square"], [1, "Diamond"], [2, "Circle"], [3, "Ring"], [4, "Plus"], [5, "Big X"], [6, "Heart"], [7, "Triangle"], [8, "Down Triangle"], [9, "Hourglass"], [10, "Bow Tie"], [11, "Staircase"], [12, "Frame"], [13, "Cut Corners"], [14, "Fortress"], [15, "Arrow Up"], [16, "House"], [17, "Tree"], [18, "Moon"], [19, "Star"], [20, "Butterfly"], [21, "Mushroom"], [22, "Letter T"], [23, "Letter H"], [24, "Letter U"], [25, "Letter O"], [26, "Letter S"], [27, "Zigzag"], [28, "Waves"], [29, "Lattice"], [30, "Windows"], [31, "Checker Gaps"], [32, "Comb"], [33, "Slanted"], [34, "Diagonal Band"], [35, "Anti Band"], [36, "Crescent Moon"], [37, "Dumbbell"], [38, "Pinwheel"], [39, "Rocket"], [40, "Chevron"], [41, "Sword"], [42, "Key"], [43, "Spiral Gap"], [44, "Hex"], [45, "Skull"], [46, "Fish"], [47, "Duck Pond"], [48, "Mountains"], [49, "Skyline"], [50, "Gem"]], "wordsearch": [[0, "Square"], [1, "Diamond"], [2, "Circle"], [3, "Ring"], [4, "Plus"], [5, "Big X"], [6, "Heart"], [7, "Triangle"], [8, "Down Triangle"], [9, "Hourglass"], [10, "Bow Tie"], [11, "Staircase"], [12, "Frame"], [13, "Cut Corners"], [14, "Fortress"], [15, "Arrow Up"], [16, "House"], [17, "Tree"], [18, "Moon"], [19, "Star"], [20, "Butterfly"], [21, "Mushroom"], [22, "Letter T"], [23, "Letter H"], [24, "Letter U"], [25, "Letter O"], [26, "Letter S"], [27, "Zigzag"], [28, "Waves"], [29, "Lattice"], [30, "Windows"], [31, "Checker Gaps"], [32, "Comb"], [33, "Slanted"], [34, "Diagonal Band"], [35, "Anti Band"], [36, "Crescent Moon"], [37, "Dumbbell"], [38, "Pinwheel"], [39, "Rocket"], [40, "Chevron"], [41, "Sword"], [42, "Key"], [43, "Spiral Gap"], [44, "Hex"], [45, "Skull"], [46, "Fish"], [47, "Duck Pond"], [48, "Mountains"], [49, "Skyline"], [50, "Gem"]]};
var ORDER=['klondike','freecell','golf','jewel','wordsearch'];
var META={klondike:{n:'Klondike',ic:'♠',c:'#3fbf7f',w:'boards'},freecell:{n:'FreeCell',ic:'♥',c:'#e8564a'},golf:{n:'Golf',ic:'⛳',c:'#4fbf5f'},jewel:{n:'Jewels Game',ic:'💎',c:'#d86ad8',sh:1},wordsearch:{n:'Word Search',ic:'🔎',c:'#c07cff',sh:1}};
var TH=['Animals','Food','Fruits','Colors','Space','Weather','Sports','Music','Jobs','Countries','Cities','Nature','Plants','Home','Tools','Clothes','Body','Family','School','Transport','Ocean','Holidays','Feelings','Science','Mythology','Camping','Garden','Kitchen','Money','Buildings','Birds','Insects','Games','Dinosaurs','Travel','Technology','Vegetables','Desserts','Drinks','Spices','Flowers','Trees','Gems','Math','Landforms','Medieval','Pirates','Fairy Tales','Fantasy','Circus','Theater','Art','Photography','Dance','Orchestra','Languages','Winter','Summer','Beach','Farm','Bakery','Office','Hospital','Emergency','Airport','Railway','Fitness','Cooking','Geology','Law','Detective','Robots'];
var V={view:'games',g:'klondike',i:0};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function ld(){var p={d:{},l:{}};try{var x=JSON.parse(localStorage.getItem('tour.p')||'null');if(x&&x.d)p=x}catch(e){}if(!p.l)p.l={};return p}
function sv(p){try{localStorage.setItem('tour.p',JSON.stringify(p))}catch(e){}}
function cnt(p,g){var d=p.d[g]||{},n=0;TD[g].forEach(function(b){if(d[b[0]])n++});return n}
function firstUndone(p,g){var d=p.d[g]||{};for(var i=0;i<TD[g].length;i++)if(!d[TD[g][i][0]])return i;return -1}
function resume(p,g){var l=p.l[g];if(l!=null&&l>=0&&l<TD[g].length-1&&(p.d[g]||{})[TD[g][l][0]])return l+1;if(l!=null&&l>=0&&l<TD[g].length&&!(p.d[g]||{})[TD[g][l][0]])return l;var f=firstUndone(p,g);return f<0?0:f}
function stFor(g,i){var b=TD[g][i],k=b[0],n=TD[g].length;
  if(g==='klondike')return{mode:'classic',draw:1,passes:0,anyEmpty:false,jokers:0,wilds:0,xray:false,board:k};
  if(g==='freecell')return{mode:'classic',cells:0,build:'alt',empty:'any',multi:'super',jokers:0,wilds:0,auto:false,board:k};
  if(g==='golf')return{mode:'classic',wrap:true,jokers:0,wildRank:0,wilds:0,redeals:0,hidden:false,deal5:0,unlock:0,board:k};
  if(g==='jewel')return{mode:'campaign',level:Math.min(200,i+1),boost:3,shape:k,lock:'open'};
  return{mode:'classic',level:Math.max(1,Math.min(20,1+Math.floor(i*19/Math.max(1,n-1)))),theme:TH[i%TH.length],dirs:'auto',back:true,hints:99,list:'show',size:'auto',shape:String(k)};
}
function e0(){return D.getElementById('tourov')}
function css(){if(D.getElementById('tourcss'))return;var s=D.createElement('style');s.id='tourcss';s.textContent=
'#tourov{position:fixed;inset:0;z-index:9910;background:radial-gradient(circle at 50% 0,#10404a,#050f1a 70%);display:none;overflow:auto;-webkit-overflow-scrolling:touch;font-family:Roboto,Arial,sans-serif;color:#fff}#tourov.on{display:block}'+
'#tourov .tw{max-width:440px;margin:0 auto;padding:calc(env(safe-area-inset-top) + 14px) 14px 30px}#tourov h1{margin:0 0 4px;font-size:24px}#tourov .sub{color:#b8d4e6;font-size:13px;margin:0 0 12px;line-height:1.35}'+
'#tourov .cd{display:flex;align-items:center;gap:10px;width:100%;margin:0 0 9px;padding:11px 12px;border:0;border-left:6px solid var(--c);background:rgba(255,255,255,.08);color:#fff;text-align:left;cursor:pointer;font:inherit}#tourov .cd:active{background:rgba(255,255,255,.18)}'+
'#tourov .cd .i{font-size:28px;width:38px;text-align:center}#tourov .cd b{display:block;font-size:16px}#tourov .cd small{color:#b8d4e6;font-size:12px}#tourov .bar{height:5px;background:rgba(255,255,255,.14);margin-top:5px}#tourov .bar i{display:block;height:100%;background:var(--c)}'+
'#tourov .bt{display:block;width:100%;height:50px;margin:8px 0 0;border:0;font:900 17px Roboto,Arial,sans-serif;background:linear-gradient(#ffd25e,#e89a00);color:#2a1800;cursor:pointer}#tourov .bt.s{height:42px;font-size:14px;background:rgba(255,255,255,.16);color:#fff}'+
'#tourov .box{background:rgba(255,255,255,.08);padding:12px;margin:0 0 10px}#tourov .lv{font-size:54px;font-weight:900;line-height:1;margin:2px 0}#tourov .wd{color:#ffd25e;font-size:12px;font-weight:900;letter-spacing:.08em;text-transform:uppercase}'+
'#tourov .ch{margin:14px 0 6px;font:900 12px Roboto;color:#ffd25e;letter-spacing:.08em;text-transform:uppercase;display:flex;justify-content:space-between}#tourov .gr{display:grid;grid-template-columns:repeat(6,1fr);gap:5px}'+
'#tourov .mn{aspect-ratio:1;border:0;border-radius:8px;background:rgba(255,255,255,.12);color:#fff;font:800 12px Roboto;padding:0;cursor:pointer;position:relative}#tourov .mn.d{background:var(--c);color:#14171c}#tourov .mn.d:after{content:"✓";position:absolute;right:3px;top:0;font-size:9px}#tourov .mn.u{outline:3px solid #fff;outline-offset:1px;z-index:1}'+

'#tourov .stk{position:sticky;top:0;z-index:20;display:flex;justify-content:flex-end;margin:calc(-1*(env(safe-area-inset-top) + 14px)) -14px 8px;padding:calc(env(safe-area-inset-top) + 8px) 10px 8px;background:linear-gradient(rgba(6,13,26,.97) 75%,rgba(6,13,26,0))}#tourov .stk button{height:40px;padding:0 16px;border:0;border-radius:99px;background:rgba(255,255,255,.18);color:#fff;font:900 14px Roboto,Arial,sans-serif;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.4)}'+
'#tourov .tp{display:flex;gap:8px}#tourov .tp .bt{margin-top:8px}';
D.head.appendChild(s)}
function ov(){var o=e0();if(!o){css();o=D.createElement('div');o.id='tourov';D.body.appendChild(o);o.addEventListener('click',onClick)}return o}
function close(){var o=e0();if(o)o.classList.remove('on')}
function nameOf(g,i){return TD[g][i][1]}
function render(){var o=ov(),p=ld(),h='<div class="tw"><div class="stk"><button data-act="close" aria-label="Close">✕ Close</button></div>',m,g=V.g,b;
  if(V.view==='games'){
    h+='<h1>🧭 Board Tour</h1><p class="sub">Go board by board through every board of five games. Every board is unlocked — jump anywhere, or win a board to be offered the next one.</p>';
    ORDER.forEach(function(k){m=META[k];var n=TD[k].length,c=cnt(p,k);h+='<button class="cd" data-g="'+k+'" style="--c:'+m.c+'"><span class="i">'+m.ic+'</span><span style="flex:1"><b>'+m.n+'</b><small>'+c+' of '+n+' boards won</small><div class="bar"><i style="width:'+(100*c/n)+'%"></i></div></span></button>'});
    h+='<button class="bt s" data-act="close">Close</button>';
  }else if(V.view==='grid'){
    m=META[g];var n=TD[g].length,d=p.d[g]||{},rs=resume(p,g);
    h+='<h1>'+m.ic+' '+m.n+' Tour</h1><p class="sub">'+cnt(p,g)+' of '+n+' boards won. Tap any board to play it.</p>';
    h+='<button class="bt" data-act="go" data-i="'+rs+'">▶ '+(cnt(p,g)?'Continue':'Start')+' — board '+(rs+1)+': '+esc(nameOf(g,rs))+'</button>';
    var last=null;h+='<div style="--c:'+m.c+'">';
    TD[g].forEach(function(bb,i){var cat=bb[2]||'';if(cat!==last){if(last!==null)h+='</div>';h+='<div class="ch"><span>'+esc(cat||'Boards')+'</span></div><div class="gr">';last=cat}
      h+='<button class="mn'+(d[bb[0]]?' d':'')+(i===rs?' u':'')+'" data-i="'+i+'" title="'+esc(bb[1])+'">'+(i+1)+'</button>'});
    h+='</div></div><button class="bt s" data-act="games">← All tours</button>';
  }else{
    m=META[g];var i=V.i,bb=TD[g][i],dn=(p.d[g]||{})[bb[0]],X=W.__ADV,act=X&&X.tour&&X.g===g&&X.n===i+1;
    var ttl=V.view==='done'?'🎉 Board '+(i+1)+' complete!':V.view==='info'?'Board '+(i+1)+' of '+TD[g].length:'Board '+(i+1)+' of '+TD[g].length;
    h+='<div class="wd" style="--c:'+m.c+'">'+m.ic+' '+m.n+' · Board Tour</div><div class="lv" style="color:'+m.c+'">'+(i+1)+'</div><h1 style="margin-bottom:8px">'+esc(bb[1])+'</h1>';
    h+='<div class="box"><b>'+ttl+'</b><br><span class="sub" style="margin:0">'+(bb[2]?esc(bb[2])+' · ':'')+(dn?'Already won ✓':'Not won yet')+' · '+cnt(p,g)+' of '+TD[g].length+' boards won</span></div>';
    if(V.view==='done'){
      if(i<TD[g].length-1)h+='<button class="bt" data-act="go" data-i="'+(i+1)+'">Next board ▶<br><small>'+(i+2)+'. '+esc(nameOf(g,i+1))+'</small></button>';
      else h+='<div class="box"><b>🏁 You finished the whole '+m.n+' tour!</b></div>';
      h+='<button class="bt s" data-act="go" data-i="'+i+'">↻ Replay this board</button>';
      if(i>0)h+='<button class="bt s" data-act="go" data-i="'+(i-1)+'">◀ Previous board</button>';
    }else if(V.view==='info'){
      h+='<button class="bt" data-act="close">▶ Back to the game</button>';
      if(i>0)h+='<button class="bt s" data-act="go" data-i="'+(i-1)+'">◀ Previous board '+i+'</button>';
      if(i<TD[g].length-1)h+='<button class="bt s" data-act="go" data-i="'+(i+1)+'">⏭ Skip to board '+(i+2)+'</button>';
      h+='<button class="bt s" data-act="go" data-i="'+i+'">↻ Restart this board</button>';
    }else h+='<button class="bt" data-act="go" data-i="'+i+'">Play this board ▶</button>';
    h+='<button class="bt s" data-act="grid">🗺 Board map</button>';
    if(V.view==='info'||V.view==='done')h+='<button class="bt s" data-act="exit">✕ Leave the tour</button>';
  }
  o.innerHTML=h+'</div>';o.classList.add('on');o.scrollTop=0;
  if(V.view==='grid'){var u=o.querySelector('.mn.u');if(u)o.scrollTop=Math.max(0,u.offsetTop-160)}
}
function launch(g,i){var b=TD[g][i],p=ld();p.l[g]=i;sv(p);
  W.__ADV={tour:1,adv:'tour:'+g,n:i+1,g:g,st:stFor(g,i),won:false,need:1,wins:0,tn:TD[g].length,bname:b[1],bcat:b[2]||''};
  W.__AUTOPLAY=true;W.__RANDMODE=false;W.__ADVGO=1;close();W.__go(g)}
function onClick(ev){var t=ev.target;ev.stopPropagation();
  var c=t.closest&&t.closest('[data-g]');if(c){V.g=c.getAttribute('data-g');V.view='grid';render();return}
  var n=t.closest&&t.closest('.mn');if(n){V.i=+n.getAttribute('data-i');V.view='brief';render();return}
  var b=t.closest&&t.closest('[data-act]');if(!b)return;var a=b.getAttribute('data-act');
  if(a==='close')close();
  else if(a==='games'){V.view='games';render()}
  else if(a==='grid'){V.view='grid';render()}
  else if(a==='go'){launch(V.g,+b.getAttribute('data-i'))}
  else if(a==='exit'){W.__ADV=null;close();W.__go('hub')}
}
W.__tourOpen=function(g){var X=W.__ADV;if(g&&TD[g]){V.g=g;if(X&&X.tour&&X.g===g){V.i=X.n-1;V.view='info'}else V.view='grid'}else V.view='games';render()};
W.__tourInfo=function(){var X=W.__ADV;if(!X||!X.tour)return;V.g=X.g;V.i=X.n-1;V.view='info';render()};
W.__tourNext=function(){var X=W.__ADV;if(!X||!X.tour)return;if(X.n<TD[X.g].length)launch(X.g,X.n);else{V.g=X.g;V.i=X.n-1;V.view='done';render()}};
W.__tourGo=function(d){var X=W.__ADV;if(!X||!X.tour)return;var n=X.n-1+d;if(n<0||n>=TD[X.g].length)return;launch(X.g,n)};
W.__TOURD=TD;
W.__tourWon=function(X){X.won=true;var p=ld(),b=TD[X.g][X.n-1];(p.d[X.g]=p.d[X.g]||{})[b[0]]=1;p.l[X.g]=X.n-1;sv(p);
  try{tbar()}catch(e){}
  setTimeout(function(){if(W.__ADV!==X)return;V.g=X.g;V.i=X.n-1;V.view='done';render()},1700)};
/* during a tour the games' own board pickers would desync the tour */
if(W.__ADV&&W.__ADV.tour&&W.__ADV.g===W.__cur){var hs=D.createElement('style');hs.textContent='#boardbar,#boardbar.on,#wsbar,#wsbar.on{display:none!important}';D.head.appendChild(hs);setTimeout(function(){try{W.dispatchEvent(new Event('resize'))}catch(e){}},100)}
/* prev / next board bar */
function tbar(){
  var X=W.__ADV;if(!(X&&X.tour&&X.g===W.__cur))return;
  var hb=D.getElementById('homebar');if(!hb||!hb.parentNode)return;
  var bar=D.getElementById('tourbar');
  if(!bar){var s=D.getElementById('tourbcss');if(!s){s=D.createElement('style');s.id='tourbcss';s.textContent='#tourbar{flex:0 0 auto;display:flex;gap:6px;align-items:stretch;padding:4px 8px;background:rgba(0,0,0,.35);position:relative;z-index:3;box-sizing:border-box;width:100%}#tourbar button{border:0;color:#fff;background:rgba(255,255,255,.16);font:800 14px Roboto,Arial,sans-serif;height:34px;cursor:pointer;border-radius:8px;padding:0 6px}#tourbar button:active{background:rgba(255,255,255,.34)}#tourbar button:disabled{opacity:.3}#tourbar .tp,#tourbar .tn{flex:0 0 52px;font-size:17px}#tourbar .tm{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13px}#tourbar .tm.dn{background:rgba(63,191,127,.35)}';D.head.appendChild(s)}
    bar=D.createElement('div');bar.id='tourbar';hb.parentNode.insertBefore(bar,hb.nextSibling)}
  var p=ld(),n=X.n,N=TD[X.g].length,dn=(p.d[X.g]||{})[TD[X.g][n-1][0]];
  var h='<button class="tp" data-tg="-1" aria-label="Previous board" title="Previous board"'+(n<=1?' disabled':'')+'>◀</button><button class="tm'+(dn?' dn':'')+'" data-tg="map" title="Board map">🧭 Board '+n+' of '+N+' · '+esc(X.bname)+(dn?' ✓':'')+'</button><button class="tn" data-tg="1" aria-label="Next board" title="Next board"'+(n>=N?' disabled':'')+'>▶</button>';
  if(bar.__h!==h){bar.__h=h;bar.innerHTML=h;try{W.dispatchEvent(new Event('resize'))}catch(e){}}
}
D.addEventListener('click',function(e){var t=e.target&&e.target.closest&&e.target.closest('#tourbar [data-tg]');if(!t)return;e.stopPropagation();e.preventDefault();var v=t.getAttribute('data-tg');if(v==='map')W.__tourInfo();else W.__tourGo(+v)},true);
W.__tourBar=tbar;
if(W.__ADV&&W.__ADV.tour&&W.__ADV.g===W.__cur){setTimeout(tbar,150);setTimeout(tbar,900);try{new MutationObserver(function(){if(!D.getElementById('tourbar'))tbar()}).observe(D.body,{childList:true,subtree:true})}catch(e){}}
/* in-game menu entry */
function menuBtn(){
  var g=W.__cur;if(!g||!TD[g])return;var m=D.getElementById('menu');if(!m)return;
  if(m.querySelector('#tourmb'))return;
  var anchor=m.querySelector('.howbtn')||m.querySelector('h1');if(!anchor)return;
  var X=W.__ADV,on=X&&X.tour&&X.g===g,bt=D.createElement('button');bt.id='tourmb';bt.type='button';bt.className=(anchor.className&&/howbtn/.test(anchor.className)?'howbtn':'');
  bt.style.cssText='display:block;width:100%;margin:6px 0;padding:10px;border:0;border-radius:10px;background:linear-gradient(90deg,#0f6b7a,#1f9a8a);color:#fff;font:800 14px Roboto,Arial,sans-serif;cursor:pointer';
  bt.textContent=on?'🧭 Board Tour — board '+X.n+' of '+TD[g].length+' · open map':'🧭 Board Tour — play every board, one by one';
  anchor.parentNode.insertBefore(bt,anchor.nextSibling||anchor);
}
D.addEventListener('click',function(e){var t=e.target&&e.target.closest&&e.target.closest('#tourmb');if(!t)return;e.stopPropagation();e.preventDefault();var m=D.getElementById('menu');if(m)m.classList.remove('on');W.__tourOpen(W.__cur)},true);
if(W.__cur&&TD[W.__cur]){var m0=D.getElementById('menu');if(m0){try{new MutationObserver(function(){menuBtn()}).observe(m0,{childList:true,subtree:true})}catch(e){}}setTimeout(menuBtn,200)}
})();

/* ===== UI polish layer: 50 improvements (CSS + behaviour) for hub and every game page ===== */
(function(){
if(window.__uip)return;window.__uip=1;
var D=document,isHub=!!(D.getElementById('grid')&&D.getElementById('rand'));
var css='\
/* 1-4 touch feel */\
button,.g,.catc,[data-go],.hr,.hchip{-webkit-tap-highlight-color:transparent;touch-action:manipulation;-webkit-touch-callout:none}\
button:not(:disabled):active,.catc:active,.g:active,.hr:active,.hchip:active{transform:scale(.96)!important;filter:brightness(1.12);transition:transform .06s}\
html,body{overscroll-behavior:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color-scheme:dark}\
body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}input{-webkit-user-select:text;user-select:text}\
/* 6-7 a11y */\
button:focus-visible,input:focus-visible{outline:3px solid #ffd166;outline-offset:2px}\
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.001s!important;animation-iteration-count:1!important;transition-duration:.001s!important;scroll-behavior:auto!important}}\
/* 8 touch targets */\
.seg button{min-height:44px}#modal button{min-height:48px}\
/* 9-12 motion */\
@keyframes uipFade{from{opacity:0}to{opacity:1}}@keyframes uipPop{from{opacity:0;transform:scale(.92) translateY(8px)}to{opacity:1;transform:none}}@keyframes uipUp{from{opacity:0;transform:translate(-50%,14px)}to{opacity:1;transform:translate(-50%,0)}}@keyframes uipDrop{from{opacity:0;transform:translateY(-8px) scale(.98)}to{opacity:1;transform:none}}@keyframes uipRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}\
#modal.on{animation:uipFade .18s ease;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}#modal.on .mb{animation:uipPop .24s cubic-bezier(.2,.9,.3,1.15);border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.55)}#modal button{border-radius:12px}\
#toast.on{animation:uipUp .22s ease;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border-radius:14px;box-shadow:0 6px 20px rgba(0,0,0,.4)}\
#menu.on{animation:uipRise .26s ease}#hmdd,#tdd{animation:uipDrop .16s ease}\
/* 13-15 menu feel */\
.mscroll{-webkit-overflow-scrolling:touch;scroll-behavior:smooth;background:linear-gradient(rgba(0,0,0,.28),rgba(0,0,0,0)) top/100% 14px no-repeat local,linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.28)) bottom/100% 14px no-repeat local}\
.seg button{border-radius:11px;transition:background .15s,border-color .15s,box-shadow .15s}.seg button.sel{box-shadow:0 0 0 2px rgba(255,215,94,.55),0 4px 14px rgba(255,200,60,.22);font-weight:900}\
/* 16-19 chrome */\
.startbar button,#mStart{border-radius:16px;background-size:200% 100%;box-shadow:0 6px 18px rgba(255,190,40,.28)}\
#hud .cell,#hud div{font-variant-numeric:tabular-nums;border-radius:10px}\
#ctl button{border-radius:14px}\
.how,.stats span{border-radius:12px}\
/* 20 scrollbars */\
*{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.3) transparent}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background:rgba(255,255,255,.28);border-radius:3px}\
/* 23-25 */\
#table canvas{touch-action:none}#tdd button{min-height:52px}#homebar .ttl{max-width:48vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px}\
/* bigger, clearer button icons */#ctl button{min-height:58px}#ctl button span{font-size:27px!important;line-height:1.05}#ctl button{font-size:12.5px;letter-spacing:.01em}#ctl .mid button{min-height:38px!important;height:38px!important}#ctl .mid button span{font-size:20px!important}#ctl .acts button.act span{font-size:30px!important}#ctl .acts button.act em{font-size:11px!important}#homebar button,#homebar .nav button,#hubbar button{font-size:27px!important;min-width:52px;min-height:48px}#tdd button{font-size:30px!important;line-height:1.1}#tdd button:after{font-size:11px!important}#modal button,.startbar button{font-size:17px}.seg button{font-size:15px}\
/* hub */\
.catc{transition:transform .12s,box-shadow .2s}.catc:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.35)}\
#catpop.on .g{animation:uipRise .32s ease both}#catpop.on .g:nth-child(2){animation-delay:.04s}#catpop.on .g:nth-child(3){animation-delay:.08s}#catpop.on .g:nth-child(4){animation-delay:.12s}#catpop.on .g:nth-child(5){animation-delay:.16s}#catpop.on .g:nth-child(6){animation-delay:.2s}#catpop.on .g:nth-child(n+7){animation-delay:.24s}\
#hsx{position:relative;margin:0 0 12px}#hq{width:100%;height:48px;border-radius:14px;border:2px solid rgba(255,255,255,.18);background:rgba(255,255,255,.1);color:#fff;font:600 16px Roboto,Arial,sans-serif;padding:0 40px 0 44px;outline:none;-webkit-appearance:none}#hq::-webkit-search-cancel-button{display:none;-webkit-appearance:none}#hq:focus{border-color:#ffd166;background:rgba(255,255,255,.16)}#hsx:before{content:"🔎";position:absolute;left:14px;top:12px;font-size:18px;opacity:.8}#hqx{position:absolute;right:6px;top:6px;width:36px;height:36px;border:0;border-radius:50%;background:rgba(255,255,255,.15);color:#fff;font-size:15px;display:none}\
#hres{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}.hr{display:flex;align-items:center;gap:8px;text-align:left;border:0;border-radius:12px;background:rgba(255,255,255,.12);color:#fff;font:700 14px Roboto,Arial,sans-serif;padding:10px;min-height:48px}.hr small{display:block;font-weight:400;opacity:.65;font-size:11px}.hr .e{font-size:24px}#hempty{grid-column:1/-1;text-align:center;opacity:.7;padding:14px}\
.hrow h3{margin:14px 0 6px;font-size:14px;letter-spacing:.04em;text-transform:uppercase;opacity:.85}.hchips{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch}.hchip{flex:0 0 auto;display:flex;align-items:center;gap:6px;border:0;border-radius:20px;background:rgba(255,255,255,.14);color:#fff;font:700 13px Roboto,Arial,sans-serif;padding:8px 12px;min-height:40px}.hchip .e{font-size:20px}\
#hcont{display:none;width:100%;margin:0 0 10px;border:0;border-radius:14px;background:rgba(255,255,255,.14);color:#fff;font:800 15px Roboto,Arial,sans-serif;height:48px}\
#hcnt{opacity:.7;font-size:13px;text-align:center;margin:0 0 10px}\
.g .new{position:absolute;top:8px;right:8px;background:#ff4d6a;color:#fff;font-size:10px;font-weight:900;letter-spacing:.06em;padding:2px 7px;border-radius:9px}\
#favb{margin-left:auto;border:0;background:rgba(255,255,255,.14);color:#ffd166;font-size:22px;width:44px;height:44px;border-radius:50%}\
#spin{position:fixed;inset:0;z-index:2100;display:flex;align-items:center;justify-content:center;background:#0a1626;transition:opacity .25s}#spin i{width:44px;height:44px;border:5px solid rgba(255,255,255,.2);border-top-color:#ffd166;border-radius:50%;animation:uipSpin .8s linear infinite}@keyframes uipSpin{to{transform:rotate(360deg)}}\
';
var st=D.createElement('style');st.id='uipcss';st.textContent=css;(D.head||D.documentElement).appendChild(st);
/* 26 viewport/meta polish */
try{var m=D.querySelector('meta[name=viewport]');if(m&&!/viewport-fit/.test(m.content))m.content+=',viewport-fit=cover';if(!D.querySelector('meta[name=theme-color]')){var tc=D.createElement('meta');tc.name='theme-color';tc.content='#0a1626';D.head.appendChild(tc)}}catch(e){}
/* 27 block pinch-zoom */
['gesturestart','gesturechange'].forEach(function(e){D.addEventListener(e,function(ev){ev.preventDefault()},{passive:false})});

/* 28 Esc closes dropdowns/modals */
D.addEventListener('keydown',function(e){if(e.key!=='Escape')return;var d=D.getElementById('tdd');if(d&&d.style.display!=='none'){d.style.display='none'}var h=D.getElementById('hmdd');if(h)h.classList.remove('on');var s=D.getElementById('sheet');if(s)s.classList.remove('on');if(window.__closeCat)window.__closeCat()});
/* 29 outside-tap closes tools dropdown already handled; scroll closes dropdowns */
window.addEventListener('scroll',function(){var h=D.getElementById('hmdd');if(h)h.classList.remove('on')},true);
/* 30 toast de-dup */
try{var ot=window.toast;if(typeof ot==='function'){var lx='',lt2=0;window.toast=function(t){var n=Date.now();if(t===lx&&n-lt2<1200)return;lx=t;lt2=n;return ot.apply(this,arguments)}}}catch(e){}
/* 31 edge-swipe right from the left edge = go home (games only) */
if(!isHub){var sx=-1,sy=0,t0=0;D.addEventListener('touchstart',function(e){var t=e.touches[0];if(t.clientX<14){sx=t.clientX;sy=t.clientY;t0=Date.now()}else sx=-1},{passive:true});D.addEventListener('touchend',function(e){if(sx<0)return;var t=e.changedTouches[0];if(t.clientX-sx>90&&Math.abs(t.clientY-sy)<60&&Date.now()-t0<600){try{window.__go('hub')}catch(er){}}sx=-1},{passive:true})}
/* 32 keep audio quiet when the page is hidden */
D.addEventListener('visibilitychange',function(){try{if(D.hidden){window.__hiddenAt=Date.now();if(window.__AC&&window.__AC.suspend)window.__AC.suspend()}else if(window.__AC&&window.__AC.resume)window.__AC.resume()}catch(e){}});
if(!isHub)return;
var hs=D.createElement('style');hs.textContent='#tourace{display:none!important}';D.head.appendChild(hs);
/* ================= hub ================= */
var $=function(i){return D.getElementById(i)},LS=function(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},SS=function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
function ready(){if(!window.__GAMES||!window.__sheet||!$('grid')||!$('grid').children.length){setTimeout(ready,150);return}build()}
function build(){var G=window.__GAMES,wrap=$('grid').parentNode,anc=$('advbtn')||$('grid'),CATS=window.__CATS||[];
 function catOf(id){for(var i=0;i<CATS.length;i++)if(CATS[i][2].indexOf(id)>=0)return CATS[i][0].replace('&amp;','&');return ''}
 /* 33 search box + 34 clear button + 35 enter opens first + 36 matches tags/chips/category + 37 empty state */
 var box=D.createElement('div');box.id='hsx';box.innerHTML='<input id="hq" type="search" placeholder="Search '+G.length+' games…" autocomplete="off" enterkeyhint="go"><button id="hqx" aria-label="Clear">✕</button><div id="hres"></div>';wrap.insertBefore(box,anc);
 var q=$('hq'),res=$('hres'),x=$('hqx');
 function rows(list){res.innerHTML=list.length?list.map(function(g){return '<button class="hr" data-id="'+g.id+'"><span class="e">'+g.ic+'</span><span>'+g.name+'<small>'+catOf(g.id)+'</small></span></button>'}).join(''):'<div id="hempty">No games match “'+q.value.replace(/</g,'')+'”</div>'}
 function find(){var s=q.value.trim().toLowerCase();x.style.display=s?'block':'none';if(s)$('grid').style.setProperty('display','none','important');else $('grid').style.removeProperty('display');D.querySelectorAll('.hrow').forEach(function(r){r.style.display=s?'none':''});if(!s){res.innerHTML='';return}var out=G.filter(function(g){return (g.name+' '+g.tag+' '+g.chips.join(' ')+' '+catOf(g.id)+' '+g.id).toLowerCase().indexOf(s)>=0});rows(out)}
 q.addEventListener('input',find);x.onclick=function(){q.value='';find();q.focus()};
 q.addEventListener('keydown',function(e){if(e.key==='Enter'){var b=res.querySelector('.hr');if(b){q.blur();window.__sheet(window.__gOf(b.dataset.id),false)}}});
 res.addEventListener('click',function(e){var b=e.target.closest('.hr');if(b)window.__sheet(window.__gOf(b.dataset.id),false)});
 /* 38 game count */ var cnt=D.createElement('div');cnt.id='hcnt';cnt.textContent=G.length+' games · '+CATS.length+' categories';wrap.insertBefore(cnt,anc);
 /* 39 continue-last-game button */ var cont=D.createElement('button');cont.id='hcont';wrap.insertBefore(cont,anc);
 /* 40/41 favourites + recents rows */ var rowsEl=D.createElement('div');rowsEl.className='hrowsw';var adv=$('advbtn');$('grid').parentNode.insertBefore(rowsEl,$('grid'));
 function chips(ids){return '<div class="hchips">'+ids.map(function(id){var g=window.__gOf(id);return g?'<button class="hchip" data-id="'+id+'"><span class="e">'+g.ic+'</span>'+g.name+'</button>':''}).join('')+'</div>'}
 function refresh(){var fav=LS('hub.fav',[]),rec=LS('hub.recent',[]).filter(function(id){return window.__gOf(id)});var h='';if(fav.length)h+='<div class="hrow"><h3>⭐ Favourites</h3>'+chips(fav)+'</div>';if(rec.length)h+='<div class="hrow"><h3>🕘 Recently played</h3>'+chips(rec.slice(0,8))+'</div>';rowsEl.innerHTML=h;var l=rec[0];if(l){var g=window.__gOf(l);cont.style.display='block';cont.textContent='▶ Continue: '+g.ic+' '+g.name;cont.dataset.id=l}else cont.style.display='none'}
 rowsEl.addEventListener('click',function(e){var b=e.target.closest('.hchip');if(b)window.__sheet(window.__gOf(b.dataset.id),false)});
 cont.onclick=function(){try{window.__go(cont.dataset.id)}catch(e){}};
 window.__hubRefresh=refresh;refresh();
 /* 42 favourite star inside the game sheet */
 var sh=$('sheet');new MutationObserver(function(){var p=sh.querySelector('.panel h2');if(!p||sh.querySelector('#favb')||!window.__curSheet)return;var g=window.__curSheet,fav=LS('hub.fav',[]),b=D.createElement('button');b.id='favb';b.textContent=fav.indexOf(g.id)>=0?'★':'☆';b.setAttribute('aria-label','Favourite');b.onclick=function(e){e.stopPropagation();var f=LS('hub.fav',[]),i=f.indexOf(g.id);if(i>=0)f.splice(i,1);else f.unshift(g.id);SS('hub.fav',f);b.textContent=i>=0?'☆':'★';refresh()};p.style.display='flex';p.style.alignItems='center';p.style.gap='8px';p.appendChild(b)}).observe(sh,{childList:true,subtree:true});
 /* 43 NEW badges on the latest games */ var NEW=['ttt','uttt','c4','reversi','gomoku','dots','mancala','morris','hex','break','fox','snakes','nim','konane','pentago','brick','rocks','snake','guard','bubble','duck','xfrac','xdec','xtarget','xodd','xop','xdivis','xgcd','xfact','xspeed','xangle','xarea','xalg','xratio','xavg','xcmp','xplace','xround','xord','xneg','xpow','xsq','xdiv','xmul','xsub','xadd','mmatch','mnback','mshape','marrow','mcard','mshade','mcode','mname','mpair','mstream','mhilo','mtotal','mcount','mwhere','mpos','mshop','memoji','mchange','mmiss','mpath','mmirror','mflash','msimon','mletter','mdigit','znote','zchange','zcomp','zshape','zanim','znato','zmorse','zemoji','zcolor','zest','zseq','zprime','zfrac','zpct','zunit','zcal','ztime','zclock','zbase','zroman','zelem','zstate','zcont','zflag','zcap','whalv','walpha','watoz','wrain','wrecall','wsort','wodd','wspell','whid','wgap','wvowel','wchain','wbomb','wcount','wbuild','wbee','wboggle','wpyr','wladder','wcrypt','wwheel','whang','wjotto','wmulti','wguess','dodge','bigger','anagram','qcount','nback','mirror','stopline','stack','rhythm','schulte','mathsp','tapspd','typing','chimp','nummem','oddc','stroop','aim','whack','react','fifteens','dice21','dbingo','knuckle','tenzi','dmerge','ceelo','dwar','chicago','threes','ludo','qwixx','golfd','skunk','lcr','mexico','beetle','bunco','pokerd','scc','liars','shutbox','pig','farkle','yacht','fillpix','hitori','twist','soko','calcu','queens','maze','ten','m24','shik','sky','futo','takuzu','peg','pipe','water','code','flood','nono','echo','hanoi','slide','lights','mines','g2048','simon','calc','castle','eightoff','canfield','bakers','scorpion','thieves','yukon','spider','sevens','slapjack','beggar','tycoon','bingo','scratch','deuces','bigsix','reddog','casinowar','letitride','caribbean','sicbo','keno','craps','roulette','tcpoker','baccarat','vpoker','thirty1','cheat','hearts','clock','tripeaks','pyramid','accordion','hilo','memory','snap','crazy8','colorrush'];
 var pop=$('catpop');if(pop)new MutationObserver(function(){pop.querySelectorAll('.g').forEach(function(b){if(NEW.indexOf(b.dataset.id)>=0&&!b.querySelector('.new')){var s=D.createElement('span');s.className='new';s.textContent='NEW';b.appendChild(s)}})}).observe(pop,{childList:true,subtree:true});
 /* 44 favourites sort first inside a category popup */
 if(pop)new MutationObserver(function(){var cg=pop.querySelector('.cg');if(!cg||cg.dataset.sorted)return;cg.dataset.sorted=1;var fav=LS('hub.fav',[]);fav.slice().reverse().forEach(function(id){var b=cg.querySelector('[data-id="'+id+'"]');if(b)cg.insertBefore(b,cg.firstChild)})}).observe(pop,{childList:true,subtree:true});
 /* 45 remember hub scroll position */
 var sy=LS('hub.scroll',0);if(sy)setTimeout(function(){try{window.scrollTo(0,sy)}catch(e){}},200);window.addEventListener('scroll',function(){clearTimeout(build.t);build.t=setTimeout(function(){SS('hub.scroll',window.scrollY||0)},300)});
 /* 46 what's new panel */
}
ready();
})();
/* ===== 5 shared graphics enhancements, applied to every game ===== */
(function(){
if(window.__fx5)return;window.__fx5=1;
var css='\
/* 1 vignette + slow light sweep over the table */\
body::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:5;background:radial-gradient(ellipse at 50% 45%,rgba(255,255,255,.05),transparent 45%,rgba(0,0,0,.34) 100%)}\
body::before{content:"";position:fixed;inset:-20%;pointer-events:none;z-index:0;background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.045) 50%,transparent 60%);}\
@keyframes fx5sweep{from{transform:translateX(-40%)}to{transform:translateX(40%)}}\
/* 2 glossy tactile buttons */\
#ctl button,.startbar button,#modal .bt button,#menu .seg button{box-shadow:inset 0 1px 0 rgba(255,255,255,.28),inset 0 -3px 5px rgba(0,0,0,.14),0 2px 6px rgba(0,0,0,.35);transition:transform .08s,filter .15s}\
#ctl button:active,.startbar button:active,#modal .bt button:active,#menu .seg button:active{transform:scale(.95);filter:brightness(1.15)}\
/* 3 glass HUD with value pulse */\
#hud .cell{border:1px solid rgba(255,255,255,.14);box-shadow:0 2px 8px rgba(0,0,0,.3)}\
#hud .cell b{text-shadow:0 0 10px rgba(255,215,94,.35)}\
#hud .cell.fx5p b{animation:fx5pulse .5s ease-out}\
@keyframes fx5pulse{0%{transform:scale(1.35);color:#ffd75e}100%{transform:scale(1)}}\
/* 4 glossy cards, tiles and pieces */\
.cd:not(.back):not(.empty)::after,.uc:not(.back)::after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(135deg,rgba(255,255,255,.28),rgba(255,255,255,0) 40%);pointer-events:none}\
.cd:not(.back):not(.empty),.uc{box-shadow:0 1px 0 rgba(255,255,255,.6) inset,0 3px 6px rgba(0,0,0,.45)}\
.cd:active,.uc:active{transform:translateY(-3px) scale(1.04)}\
/* 5 animated dialogs, toasts and win confetti */\
#modal.on .mb{animation:fx5pop .3s cubic-bezier(.2,1.5,.4,1)}\
@keyframes fx5pop{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}\
#toast.on{animation:fx5toast .25s ease-out}\
@keyframes fx5toast{from{transform:translate(-50%,14px);opacity:0}}\
.fx5c{position:fixed;top:-30px;z-index:2000;pointer-events:none;font-size:22px;animation:fx5fall linear forwards}\
@keyframes fx5fall{to{transform:translateY(105vh) rotate(540deg);opacity:.9}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
function confetti(){var E=['🎉','✨','⭐','🟡','🎊','💫'];for(var i=0;i<26;i++){var e=document.createElement('div');e.className='fx5c';e.textContent=E[i%E.length];e.style.left=(Math.random()*96)+'vw';e.style.animationDuration=(1.6+Math.random()*1.6)+'s';e.style.animationDelay=(Math.random()*.5)+'s';document.body.appendChild(e);setTimeout(function(x){x.remove()},3800,e)}}
function watch(){var m=document.getElementById('modal');if(m){new MutationObserver(function(){if(m.classList.contains('on')){var h=m.querySelector('h2');if(h&&/win|cleared|bingo|won|champion|perfect|nice|great|victory|solved|complete/i.test(h.textContent)&&!/lose|lost|over/i.test(h.textContent))confetti()}}).observe(m,{attributes:true,attributeFilter:['class']})}
  var hud=document.getElementById('hud');if(hud){var prev={};var chk=function(){[].forEach.call(hud.querySelectorAll('.cell'),function(c,i){var b=c.querySelector('b');if(!b)return;var v=b.textContent;if(prev[i]!==undefined&&prev[i]!==v){c.classList.remove('fx5p');void c.offsetWidth;c.classList.add('fx5p')}prev[i]=v})};new MutationObserver(chk).observe(hud,{childList:true,subtree:true,characterData:true});chk()}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',watch);else watch();
})();
/* ===== UI pass: shared improvements for hub, in-game menus and settings ===== */
(function(){
if(window.__ui50)return;window.__ui50=1;
/* 1 clipboard rejection guard (fixes uncaught errors when copying is blocked) */
try{if(navigator.clipboard&&navigator.clipboard.writeText){var ow=navigator.clipboard.writeText.bind(navigator.clipboard);navigator.clipboard.writeText=function(t){try{var r=ow(t);return r&&r.catch?r.catch(function(){}):r}catch(e){return Promise.resolve()}}}}catch(e){}
var inGame=!!document.getElementById('hud'),inHub=!!document.getElementById('grid')&&!inGame;
var css='\
/* 2-6 touch + focus hygiene */\
button,[role=button],.catc,.opt{touch-action:manipulation;-webkit-tap-highlight-color:transparent}\
button,#hud,#ctl,#homebar,.catc{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}\
html,body{overscroll-behavior:none}\
button:focus-visible,input:focus-visible,.catc:focus-visible{outline:3px solid #ffd75e;outline-offset:2px}\
/* 7 reduced motion */\
@media (prefers-reduced-motion:reduce){body::before{animation:none!important}#modal.on .mb,#toast.on,.fx5c{animation:none!important}}\
body.rm::before{animation:none!important}body.rm #modal.on .mb,body.rm #toast.on,body.rm #menu.on,body.rm .panel{animation:none!important}body.rm .fx5c{display:none}\
/* 8 steady digits */\
#hud .cell b,.chip,.stats span{font-variant-numeric:tabular-nums}\
/* 9 notch and home indicator safe areas */\
#hud{padding-top:max(4px,env(safe-area-inset-top))}\
#ctl{padding-bottom:max(4px,env(safe-area-inset-bottom))}\
/* 10 comfortable tap targets */\
#ctl button,#menu .seg button,#modal .bt button{min-height:44px}\
/* 11 menu entrance */\
#menu.on{animation:ui50in .22s ease-out}@keyframes ui50in{from{opacity:0;transform:translateY(10px)}}\
/* 12 clear selected option */\
#menu .seg button{position:relative}#menu .seg button.sel::after{content:"✓";position:absolute;top:1px;right:4px;font-size:10px;font-weight:900}\
/* 13 sticky menu title */\
#menu h1{position:sticky;top:-16px;z-index:2;margin:-16px -16px 8px;padding:14px 16px 8px;background:linear-gradient(#0a2a1b 70%,rgba(10,42,27,0));text-shadow:0 0 18px rgba(255,215,94,.35)}\
/* 16 scroll fade above the start bar */\
.startbar{position:relative}.startbar::before{content:"";position:absolute;left:0;right:0;top:-18px;height:18px;pointer-events:none;background:linear-gradient(rgba(10,42,27,0),rgba(10,42,27,.85))}\
/* 17 gentle pulse on the main start button */\
#mStart{animation:ui50pulse 2.2s ease-in-out infinite}@keyframes ui50pulse{50%{box-shadow:0 0 0 6px rgba(255,215,94,.22)}}\
/* 18 how-to card */\
#menu .how{border-left:4px solid #ffd75e;border-radius:0 8px 8px 0}\
/* 19 stat chips */\
#menu .stats span{border-radius:12px;border:1px solid rgba(255,255,255,.12)}\
/* 20 clearer option rows */\
#menu .row{margin-bottom:10px}#menu .lab2{font-weight:800;letter-spacing:.02em}#menu .row small{opacity:.7;display:block;margin:1px 0 4px}\
/* 21-24 small and landscape screens */\
@media (max-width:340px){#hud .cell small{font-size:8px}#hud .cell b{font-size:15px}#ctl button{font-size:11px;padding-left:2px;padding-right:2px}}\
#hud .cell b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}\
@media (orientation:landscape) and (max-height:480px){#hud{transform-origin:top;padding-top:2px}#hud .cell{padding-top:2px;padding-bottom:2px}#ctl button{min-height:38px}}\
/* 25 toast pill above the control bar */\
#toast{border-radius:20px;max-width:86%;text-align:center;box-shadow:0 6px 18px rgba(0,0,0,.5)}\
/* 26 blurred dialog backdrop and bigger primary */\
#modal.on{backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px)}#modal .bt button.pri{font-size:17px;box-shadow:0 0 0 2px rgba(255,215,94,.5),0 4px 12px rgba(0,0,0,.4)}\
/* 29 obvious disabled state */\
#ctl button[disabled],#ctl button:disabled{opacity:.35;filter:grayscale(.6);pointer-events:none}\
/* 35-36 home bar */\
#homebar button,#homebar a{min-height:40px}#homebar .ttl,#homebar b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\
/* 33-34 table scroll behaviour */\
#table{overscroll-behavior:contain}#menu .mscroll{-webkit-overflow-scrolling:touch;overscroll-behavior:contain}\
/* settings: large buttons and left-handed layout */\
body.big #ctl button{min-height:58px;font-size:15px}body.big #ctl button span{font-size:24px}body.big .hand .cd,body.big .hand .uc{transform:scale(1.08)}\
body.lh #ctl{flex-direction:row-reverse}';
if(inHub)css+='\
/* 37 press feedback */\
.catc{transition:transform .12s,filter .12s,box-shadow .2s}.catc:active{transform:scale(.95);filter:brightness(1.15)}.catc:hover{box-shadow:0 8px 20px rgba(0,0,0,.4)}\
/* 38 staggered entrance */\
.catc{animation:ui50card .4s ease-out both}@keyframes ui50card{from{opacity:0;transform:translateY(14px) scale(.96)}}\
/* 39 16px search text stops iOS zoom-on-focus */\
#hq{font-size:16px!important}\
/* 42-43 game sheet */\
#sheet{backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.panel #play,.panel #go{position:sticky;bottom:0}\
/* 41 scroll-to-top */\
#ui50top{position:fixed;right:14px;bottom:calc(env(safe-area-inset-bottom) + 16px);width:44px;height:44px;border-radius:50%;border:0;background:#ffd75e;color:#1b1500;font:900 20px sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.5);z-index:50;display:none}#ui50top.on{display:block}\
/* 45 greeting */\
#ui50hi{text-align:center;font-weight:700;opacity:.85;margin:6px 0 2px;font-size:14px}\
/* 46 install tip */\
#ui50tip{margin:8px auto;max-width:520px;background:rgba(255,215,94,.14);border:1px solid rgba(255,215,94,.4);padding:8px 34px 8px 10px;font-size:12.5px;position:relative;border-radius:8px}#ui50tip button{position:absolute;right:4px;top:4px;border:0;background:none;color:#fff;font-size:18px}';
var st=document.createElement('style');st.id='ui50css';st.textContent=css;document.head.appendChild(st);
/* 32 block pinch zoom on iOS, 31 block long-press menus on the play area */
document.addEventListener('gesturestart',function(e){e.preventDefault()},{passive:false});
if(inGame)document.addEventListener('contextmenu',function(e){if(!(e.target.closest&&e.target.closest('input,textarea')))e.preventDefault()});
if(inGame){
 /* 15 Esc toggles the menu, 27 Enter hits the dialog's main button */
 document.addEventListener('keydown',function(e){var m=document.getElementById('modal');
  if(e.key==='Escape'){if(m&&m.classList.contains('on'))return;var mn=document.getElementById('bMenu'),me=document.getElementById('menu');if(me&&me.classList.contains('on')){var r=document.getElementById('mResume');if(r)r.click()}else if(mn)mn.click()}
  else if(e.key==='Enter'&&m&&m.classList.contains('on')){var b=m.querySelector('button.pri')||m.querySelector('button');if(b){e.preventDefault();b.click()}}});
 /* 28 short buzz when a result dialog opens */
 var md=document.getElementById('modal');if(md)new MutationObserver(function(){if(md.classList.contains('on')&&navigator.vibrate){try{navigator.vibrate(30)}catch(e){}}}).observe(md,{attributes:true,attributeFilter:['class']});
 /* 14 per-game reset of saved options */
 var me2=document.getElementById('menu');if(me2)new MutationObserver(function(){var sc=me2.querySelector('.mscroll');if(!sc||sc.querySelector('#ui50rs'))return;var b=document.createElement('button');b.id='ui50rs';b.textContent='↺ Reset this game\'s options';b.style.cssText='margin:6px 0 14px;padding:8px 12px;border:1px solid rgba(255,255,255,.25);background:none;color:#fff;border-radius:8px;font:inherit;font-size:13px;opacity:.8';
  b.onclick=function(){if(b.dataset.s!=='1'){b.dataset.s='1';b.textContent='Tap again to confirm';return}try{var g=window.GKEY||window.__cur;Object.keys(localStorage).forEach(function(k){if(k.indexOf((typeof GKEY!=='undefined'?GKEY:g)+'.')===0&&/\.st$/.test(k))localStorage.removeItem(k)})}catch(e){}location.reload()};sc.appendChild(b)}).observe(me2,{childList:true});
}
if(inHub){
 /* 41 scroll-to-top button */
 var tb=document.createElement('button');tb.id='ui50top';tb.textContent='↑';tb.setAttribute('aria-label','Back to top');tb.onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};document.body.appendChild(tb);window.addEventListener('scroll',function(){tb.classList.toggle('on',(window.scrollY||0)>400)},{passive:true});
 /* 40 "/" focuses the search box */
 document.addEventListener('keydown',function(e){var q=document.getElementById('hq');if(e.key==='/'&&q&&document.activeElement!==q){e.preventDefault();q.focus()}});
 /* 45 time-of-day greeting */
 var w=document.querySelector('.wrap'),g=document.getElementById('grid');if(w&&g&&!document.getElementById('ui50hi')){var h=new Date().getHours(),d=document.createElement('div');d.id='ui50hi';d.textContent=(h<5?'Late night gaming':h<12?'Good morning':h<18?'Good afternoon':'Good evening')+' - pick a game';w.insertBefore(d,w.firstChild)}
 /* 46 add-to-home-screen tip for iPhone Safari, shown once */
 try{if(/iPhone|iPad/.test(navigator.userAgent)&&!navigator.standalone&&!localStorage.getItem('ui50.tip')&&g){var t=document.createElement('div');t.id='ui50tip';t.innerHTML='📲 Tip: tap Share, then <b>Add to Home Screen</b> to play full screen.<button aria-label="Dismiss">×</button>';t.querySelector('button').onclick=function(){t.remove();localStorage.setItem('ui50.tip','1')};g.parentNode.insertBefore(t,g)}}catch(e){}
}
})();
/* ===== card game look: 10 visual upgrades for every card and solitaire game ===== */
(function(){
var CF='gin oldmaid gofish war acesup golf klondike freecell colorrush crazy8 snap memory hilo accordion pyramid tripeaks clock hearts cheat thirty1 beggar slapjack sevens spider yukon thieves scorpion bakers canfield eightoff castle calc simon'.split(' ');
var cur=window.__cur||'';if(CF.indexOf(cur)<0||!document.getElementById('hud'))return;
document.body.classList.add('cardfx');
var W=':where(body.cardfx)';
var css='\
/* 1 paper faces with an engraved inner frame */\
'+W+' .card .face,'+W+' .cd:not(.back):not(.empty){background:linear-gradient(160deg,#fffdf6,#efe9d6 70%,#e4dcc3);border:1px solid #a9a28a}\
'+W+' .card .face::before,'+W+' .cd:not(.back):not(.empty)::before{content:"";position:absolute;inset:3px;border:1px solid rgba(0,0,0,.13);border-radius:4px;pointer-events:none}\
/* 2 serif indices and a bolder suit */\
'+W+' .card .face b,'+W+' .cd b{font-family:Georgia,"Times New Roman",serif;letter-spacing:-.03em}\
'+W+' .card .face i,'+W+' .cd i{text-shadow:0 1px 0 rgba(255,255,255,.7)}\
/* 3 ornate card back with a gold medallion */\
'+W+' .card .back,'+W+' .cd.back{background:radial-gradient(circle,#f6d77a 0 9%,#b8861b 10% 13%,transparent 14%),repeating-linear-gradient(45deg,#14398a 0 4px,#1f57c0 4px 8px);border:3px solid #fff;box-shadow:inset 0 0 0 3px #14398a,inset 0 0 0 4px rgba(255,255,255,.65),0 2px 5px rgba(0,0,0,.5)}\
/* 4 layered shadows so cards sit on the table */\
'+W+' .card .face,'+W+' .card .back,'+W+' .cd:not(.sel):not(.ok):not(.hint){box-shadow:0 1px 1px rgba(0,0,0,.45),0 5px 9px rgba(0,0,0,.38)}\
/* 5 felt texture and a darker rail */\
'+W+' #table{background-image:radial-gradient(rgba(255,255,255,.055) 1px,transparent 1.2px);background-size:7px 7px;box-shadow:inset 0 0 46px rgba(0,0,0,.4)}\
/* 6 playable cards breathe */\
'+W+' .cd.ok:not(.sel),'+W+' .card.hint .face{animation:cfpulse 1.7s ease-in-out infinite}\
@keyframes cfpulse{50%{box-shadow:0 0 0 3px #7dffb0,0 0 14px 4px rgba(125,255,176,.7)}}\
/* 7 deal-in when a game starts */\
#table.cdeal .cd,#table.cdeal .uc{animation:cdin .4s cubic-bezier(.2,1.2,.4,1) backwards}\
#table.cdeal .cd:nth-child(2n),#table.cdeal .uc:nth-child(2n){animation-delay:.06s}#table.cdeal .cd:nth-child(3n),#table.cdeal .uc:nth-child(3n){animation-delay:.12s}#table.cdeal .cd:nth-child(5n),#table.cdeal .uc:nth-child(5n){animation-delay:.18s}\
@keyframes cdin{from{opacity:0;transform:translateY(-26px) rotate(-8deg) scale(.8)}}\
/* 8 name plates and chips */\
'+W+' .who{width:fit-content;margin-left:auto;margin-right:auto;background:rgba(0,0,0,.38);padding:2px 11px;border-radius:12px;border:1px solid rgba(255,255,255,.15)}\
'+W+' .who.act{background:linear-gradient(#ffd75e,#e0a000);color:#1b1500;border-color:#fff3;text-shadow:none}\
'+W+' .chip{background-image:linear-gradient(rgba(255,255,255,.16),rgba(0,0,0,.22));border:1px solid rgba(255,255,255,.18)}\
/* 9 status banner */\
'+W+' #kmsg{background:rgba(0,0,0,.34);border:1px solid rgba(255,215,94,.35);border-radius:14px;margin:4px 10px;padding:4px 10px}\
/* 10 suit-trimmed menu title and gold result frame */\
'+W+' #menu h1::after{content:"♠ ♥ ♦ ♣";display:block;font-size:12px;letter-spacing:.55em;color:#ffd75e;opacity:.85;margin-top:2px;text-shadow:none}\
'+W+' #modal .mb{border:2px solid #ffd75e;box-shadow:0 0 0 4px rgba(255,215,94,.18),0 12px 34px rgba(0,0,0,.6)}\
/* uno cards */\
.uc{isolation:isolate}.uc::before{content:"";position:absolute;inset:16% 10%;border-radius:50%;background:rgba(255,255,255,.2);transform:rotate(-28deg);z-index:-1}';
var st=document.createElement('style');st.id='cardfxcss';st.textContent=css;document.head.appendChild(st);
})();

/* keep layouts correct after the home bar or keyboard changes the play-area size */
(function(){var t=document.getElementById('table');if(!t||!document.getElementById('hud')||!window.ResizeObserver)return;var lh=0,lw=0,tm;new ResizeObserver(function(){var h=t.clientHeight,w=t.clientWidth;if(h===lh&&w===lw)return;lh=h;lw=w;clearTimeout(tm);tm=setTimeout(function(){try{window.dispatchEvent(new Event('resize'))}catch(e){}},80)}).observe(t);
var st=document.createElement('style');st.textContent='#kmsg:empty{display:none}';document.head.appendChild(st)})();

/* ===== hub improvements pack (hub only) ===== */
(function(){
if(window.__imp)return;window.__imp=1;
var D=document,isHub=!!(D.getElementById('grid')&&D.getElementById('rand'));
function LS(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}
function SS(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
/* ---- square corners everywhere in the UI (game docs) ---- */
if(!isHub){try{var sq=D.createElement('style');sq.id='impsq';sq.textContent=['button','input','select','textarea','[role=button]','.chip','.pill','.tag','.kk','.opt','.wbtn','.seg>*','#menu *','.startbar *','.mwrap *','#hud *','#modal','#modal *','#toast','#ctl *','.panel','#howov *','#hsov *','#decksheet *','#hssheet *','#hsnote','#tourace *','#tltoast','#erc *'].map(function(x){return x+':not(#_a):not(#_b):not(#_c)'}).join(',')+'{border-radius:0!important}';(D.head||D.documentElement).appendChild(sq)}catch(e){}}
/* ---- X to close the pre-game menu (back to the hub) ---- */
if(!isHub){(function(){function add(){try{var m=D.getElementById('menu');if(!m||m.querySelector('.impx'))return;var hm=D.querySelector('a.hm');if(!hm)return;var b=D.createElement('button');b.className='impx';b.type='button';b.setAttribute('aria-label','Close menu and go back');b.textContent='\u2715';b.onclick=function(e){e.stopPropagation();hm.click()};m.appendChild(b);var h=D.createElement('a');h.className='imph';h.href='https://jackrose2029.github.io/start/';h.target='_blank';h.rel='noopener';h.setAttribute('aria-label','Home');h.textContent='\uD83C\uDFE0';h.onclick=function(e){e.stopPropagation()};m.appendChild(h)}catch(e){}}
var st=D.createElement('style');st.textContent='#menu .impx{position:fixed;top:calc(env(safe-area-inset-top) + 84px);right:10px;z-index:60;width:44px;height:44px;border:2px solid rgba(255,255,255,.55);background:rgba(0,0,0,.55);color:#fff;font:700 22px/1 system-ui;border-radius:0;padding:0;display:flex;align-items:center;justify-content:center}#menu:not(.on) .impx{display:none}#menu .imph{position:fixed;top:calc(env(safe-area-inset-top) + 84px);left:10px;z-index:60;width:44px;height:44px;border:2px solid rgba(255,255,255,.55);background:rgba(0,0,0,.55);color:#fff;font:22px/1 system-ui;text-decoration:none;display:flex;align-items:center;justify-content:center;border-radius:0}#menu:not(.on) .imph{display:none}';(D.head||D.documentElement).appendChild(st);
add();setTimeout(add,600);setTimeout(add,2000)})()}
/* ---- in-game accessibility pack ---- */
if(!isHub&&D.getElementById('hud')){(function(){
function run(){try{
 /* G1 html lang */ if(!D.documentElement.lang)D.documentElement.lang='en';
 /* G2 toast is a live region */ var t=D.getElementById('toast');if(t&&!t.getAttribute('role')){t.setAttribute('role','status');t.setAttribute('aria-live','polite')}
 var m=D.getElementById('modal');if(m&&!m.getAttribute('role')){m.setAttribute('role','dialog');m.setAttribute('aria-modal','true')}
 /* G3 HUD is a live region too */ var h=D.getElementById('hud');if(h&&!h.getAttribute('aria-live')){h.setAttribute('role','status');h.setAttribute('aria-live','off')}
 /* G4 canvases get a label */ [].forEach.call(D.querySelectorAll('canvas:not([aria-label])'),function(c){c.setAttribute('role','img');c.setAttribute('aria-label',(D.title||'Game')+' play area')});
 /* G5 icon-only buttons get a name */ [].forEach.call(D.querySelectorAll('button:not([aria-label])'),function(b){var tx=(b.textContent||'').trim();if(tx&&/[A-Za-z0-9]/.test(tx))return;var n=b.title||(b.id?b.id.replace(/^b/,'').replace(/[-_]/g,' '):'')||'button';b.setAttribute('aria-label',n)});
 /* G6 browser chrome colour follows the table */ if(!D.querySelector('meta[name=theme-color]')){var c2=getComputedStyle(D.body).backgroundColor;if(c2&&c2!=='rgba(0, 0, 0, 0)'){var mt=D.createElement('meta');mt.name='theme-color';mt.content=c2;D.head.appendChild(mt)}}
}catch(e){}}
run();setTimeout(run,1200);new MutationObserver(function(){clearTimeout(run.t);run.t=setTimeout(run,400)}).observe(D.body,{childList:true,subtree:true});
/* G7 keep the home-bar clear of the iPhone home indicator */
if(window.__cur==='jewel'||/Jewel/.test(D.title)){var sj=D.createElement('style');sj.textContent='.gi svg,#bd .gi *{animation:none!important}.g.sel .gi,.g.sel.lucky .gi{filter:none!important;transform:none!important;animation:none!important;-webkit-filter:none!important;position:relative!important;left:0!important;top:0!important;inset:auto!important}.g.sel{will-change:auto!important;z-index:5!important}.g.sel::before,.g.sel::after{animation:none!important;transform:none!important}.g.sel .gi{box-shadow:0 0 0 3px #fff,0 0 10px 3px rgba(255,255,255,.9)!important;border-radius:50%!important}.cell,.cell *,#hud *{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}body::before,body::after{display:none!important}#howov .nv{position:static!important;inset:auto!important;border:0!important;border-radius:0!important;box-shadow:none!important;animation:none!important;transform:none!important}';D.head.appendChild(sj)}
var st2=D.createElement('style');st2.textContent='#ctl,.startbar,#homebar{padding-bottom:max(env(safe-area-inset-bottom),0px)}#mReset{min-height:40px;padding:8px 16px}.lv{min-height:40px;min-width:36px}#bbPick{white-space:normal;line-height:1.1}';D.head.appendChild(st2);
})()}
if(!isHub)return;
function $(i){return D.getElementById(i)}
var P=LS('imp.p',{plays:{},last:{},day:{},ach:{},q:[]});
function savP(){SS('imp.p',P)}
function dkey(t){var d=new Date(t||Date.now());return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)}
function ago(t){if(!t)return'';var s=(Date.now()-t)/1000;if(s<90)return'just now';if(s<3600)return Math.round(s/60)+' min ago';if(s<86400)return Math.round(s/3600)+' h ago';return Math.round(s/86400)+' d ago'}
function fmtT(s){s=Math.round(s||0);var h=Math.floor(s/3600),m=Math.floor(s%3600/60);return h?h+'h '+m+'m':m+'m'}
function gstat(id){var gg=window.__gOf&&window.__gOf(id),o=LS('deck.s.'+(gg?gg.url.slice(1):id),null)||{};return{plays:Math.max(o.plays||0,P.plays[id]||0),wins:o.wins||0,time:o.time||0,best:o.best||0}}
function allStats(){var G=window.__GAMES||[],o={plays:0,wins:0,time:0,tried:0};G.forEach(function(g){var s=gstat(g.id);o.plays+=s.plays;o.wins+=s.wins;o.time+=s.time;if(s.plays>0||P.last[g.id])o.tried++});return o}
/* ---- css ---- */
var css='#impbar{display:flex;gap:6px;overflow-x:auto;padding:4px 2px 8px;scrollbar-width:none}#impbar::-webkit-scrollbar{display:none}'
+'#impbar button,.impc{flex:0 0 auto;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;border-radius:16px;padding:7px 12px;font:600 13px system-ui;min-height:36px}'
+'#impbar button.on,.impc.on{background:#ffd75e;color:#222;border-color:#ffd75e}'
+'#impprog{margin:2px 2px 6px;height:8px;border-radius:5px;background:rgba(255,255,255,.12);overflow:hidden}#impprog i{display:block;height:100%;background:linear-gradient(90deg,#3fbf7f,#ffd75e)}'
+'#impprogt{font:600 12px system-ui;opacity:.8;margin:0 2px 2px}'
+'#impres{display:none}#impres.on{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:6px 0}#impres button{display:flex;gap:8px;align-items:center;text-align:left;border:0;border-radius:12px;padding:10px;background:rgba(255,255,255,.1);color:#fff;font:600 14px system-ui;min-height:48px}#impres small{display:block;font-weight:400;opacity:.7;font-size:11px}'
+'#impdaily{display:block;width:100%;margin:6px 0;border:0;border-radius:14px;padding:12px;text-align:left;color:#fff;font:700 15px system-ui;background:linear-gradient(135deg,#7a4dff,#ff6b9a)}#impdaily small{display:block;font-weight:500;opacity:.9;font-size:12px}'
+'#impgear{position:fixed;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:60;width:48px;height:48px;border-radius:24px;border:0;background:#222c;color:#fff;font-size:22px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);box-shadow:0 3px 12px #0008}'
+'#imppn{position:fixed;inset:0;z-index:8000;background:#000b;display:none;align-items:flex-end;justify-content:center}#imppn.on{display:flex}'
+'#imppn .ib{width:100%;max-width:520px;max-height:88vh;overflow:auto;background:#1b1f2a;color:#fff;border-radius:20px 20px 0 0;padding:14px 16px calc(24px + env(safe-area-inset-bottom));font:15px system-ui}'
+'#imppn h3{margin:14px 0 6px;font:800 15px system-ui}#imppn .ih{display:flex;justify-content:space-between;align-items:center}#imppn .ih b{font:800 18px system-ui}'
+'#imppn button{font:600 14px system-ui;border:0;border-radius:10px;padding:10px 12px;min-height:40px;background:#3a4256;color:#fff;margin:3px 3px 3px 0}#imppn button.pri{background:#ffd75e;color:#222}#imppn button.dng{background:#c0392b}'
+'#imppn .kv{display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #fff2}#imppn .bars{display:flex;gap:6px;align-items:flex-end;height:70px;margin:6px 0}#imppn .bars i{flex:1;background:#ffd75e;border-radius:4px 4px 0 0;min-height:2px;position:relative}#imppn .bars span{position:absolute;top:100%;left:0;right:0;text-align:center;font:10px system-ui;opacity:.7}'
+'#imppn .ach{display:flex;gap:10px;padding:8px 0;align-items:center;border-bottom:1px solid #fff2}#imppn .ach.lk{opacity:.4;filter:grayscale(1)}#imppn .ach .e{font-size:26px}#imppn .ach small{display:block;opacity:.7}'
+'#imppn textarea{width:100%;height:90px;border-radius:10px;border:1px solid #fff3;background:#0006;color:#fff;font:12px monospace;padding:8px;box-sizing:border-box}'
+'#imppn input[type=range]{width:100%}'
+'#imptoast{position:fixed;left:50%;top:calc(14px + env(safe-area-inset-top));transform:translateX(-50%);z-index:9500;background:#ffd75e;color:#222;padding:10px 16px;border-radius:14px;font:700 14px system-ui;box-shadow:0 4px 16px #0008;display:none;max-width:90vw;text-align:center}'
+'.impb{position:absolute;top:4px;left:4px;background:#000a;color:#fff;border-radius:8px;padding:1px 6px;font:700 10px system-ui}'
+'.g{position:relative}.impd{position:absolute;top:4px;right:4px;font-size:12px}'
+'.imps{display:flex;gap:6px;padding:4px 10px}.imps button{border:1px solid #fff3;background:#fff1;color:#fff;border-radius:14px;padding:6px 11px;font:600 12px system-ui;min-height:32px}.imps button.on{background:#ffd75e;color:#222}'
+'.imphist{display:flex;gap:6px;flex-wrap:wrap;margin:4px 2px}.imphist button{border:0;border-radius:12px;padding:6px 10px;background:rgba(255,255,255,.12);color:#fff;font:600 12px system-ui;min-height:32px}'
+'html.imphc body{filter:contrast(1.18) saturate(1.1)}html.imphc .g,html.imphc .catc{outline:2px solid #fff6}'
+'html.impnm *{animation-duration:.001s!important;animation-iteration-count:1!important;transition-duration:.001s!important}'
+'#impsheetst{margin:8px 0;padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.08);font:600 13px system-ui}'
+'#impctop{margin:6px 10px;border:0;border-radius:12px;padding:10px;background:#3fbf7f;color:#111;font:700 14px system-ui;min-height:42px}';
var st=D.createElement('style');st.textContent=css;D.head.appendChild(st);
/* settings applied at once: 31 font, 32 contrast, 33 motion */
var CFG=LS('imp.cfg',{fs:100,hc:0,nm:0});
function applyCfg(){D.documentElement.style.fontSize=CFG.fs+'%';D.documentElement.classList.toggle('imphc',!!CFG.hc);D.documentElement.classList.toggle('impnm',!!CFG.nm)}
applyCfg();
/* ---- simple mode: launches with no games shown; user picks which ones appear ---- */
var VIS=LS('imp.vis',{mode:'simple',ids:[]});if(!VIS||!VIS.ids)VIS={mode:'simple',ids:[]};
function savV(){SS('imp.vis',VIS);try{if(window.__impEmu)window.__impEmu()}catch(e){}}
function applyMode(){D.documentElement.classList.toggle('impsm',VIS.mode==='simple')}
applyMode();
var cssm='html.impsm .wrap>*:not(#impsm):not(#ui50hi){display:none!important}html.impsm #impgear{display:none!important}'
+'#impsm{display:none}html.impsm #impsm{display:block}'
+'#impsm .sh{display:flex;align-items:center;justify-content:space-between;margin:10px 2px}#impsm .sh b{font:800 18px system-ui;color:#fff}'
+'#impsm .sh{flex-wrap:wrap;gap:8px}#impsm .sh b{flex:1 0 100%}#impsm .sbt{display:flex;gap:8px;width:100%}#impsm .sbt .impgb{flex:1 1 0;min-width:0;width:50%;min-height:36px;padding:0 8px;font-size:13px;justify-content:center;white-space:nowrap}'
+'.impgb{border:0;border-radius:22px;background:#ffd75e;color:#222;font:800 15px system-ui;padding:0 16px;min-height:44px;display:inline-flex;align-items:center;gap:6px}'
+'#impsm .em{text-align:center;color:#fff;padding:36px 18px;border-radius:20px;background:rgba(255,255,255,.07);margin-top:18px}#impsm .em .big{font-size:54px}#impsm .em p{font:600 16px system-ui;opacity:.85;margin:10px 0 18px}'
+'#impsm .gg{display:grid;grid-template-columns:1fr 1fr;gap:10px}#impsm .gg button{display:flex;flex-direction:column;align-items:flex-start;gap:4px;text-align:left;border:0;border-radius:16px;padding:14px;color:#fff;background:linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.06));font:700 15px system-ui;min-height:92px}#impsm .gg button span{font-size:30px}#impsm .gg a{display:flex;flex-direction:column;align-items:flex-start;gap:4px;text-align:left;border:0;padding:14px;color:#fff;text-decoration:none;background:linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.06));font:700 15px system-ui;min-height:92px}#impsm .gg a span{font-size:30px}#impsm .go{text-decoration:none}#impsm .go b{text-decoration:none}#impsm .gg small{font:500 11px system-ui;opacity:.7}'
+'#impsm .impsq{margin:0 0 10px}#impsm .impsq input{-webkit-appearance:none;appearance:none;border-radius:0;outline:none;width:100%;box-sizing:border-box;border:2px solid rgba(255,255,255,.35);background:rgba(0,0,0,.35);color:#fff;font:16px system-ui;padding:12px;min-height:46px}'
+'#impsm .gl{display:flex;flex-direction:column;gap:8px}#impsm .gr{display:flex;gap:8px;align-items:stretch}#impsm .go{flex:1;min-width:0;display:flex;align-items:center;gap:10px;text-align:left;border:0;padding:10px 12px;color:#fff;background:rgba(255,255,255,.12);font:600 15px system-ui;min-height:52px}#impsm .go span{font-size:26px}#impsm .go b{font:700 15px system-ui}#impsm .go small{margin-left:auto;opacity:.65;font:500 11px system-ui;text-align:right}#impsm .ad{flex:0 0 auto;border:0;padding:0 12px;min-width:84px;background:#ffd75e;color:#222;font:800 13px system-ui}'
+'#impvp{position:fixed;inset:0;z-index:9000;background:#12151d;color:#fff;display:none;flex-direction:column}#impvp.on{display:flex}'
+'#impvp .vh{padding:calc(10px + env(safe-area-inset-top)) 14px 8px;display:flex;align-items:center;justify-content:space-between;gap:8px}#impvp .vh b{font:800 18px system-ui}'
+'#impvp .vq{margin:0 14px 8px;display:flex;gap:8px}#impvp .vq input{-webkit-appearance:none;appearance:none;outline:none;flex:1;min-width:0;border-radius:12px;border:1px solid #fff3;background:#0006;color:#fff;font:16px system-ui;padding:10px 12px}'
+'#impvp .vb{flex:1;overflow:auto;padding:0 12px calc(24px + env(safe-area-inset-bottom));-webkit-overflow-scrolling:touch}'
+'#impvp .vc{margin:8px 0;border-radius:14px;background:rgba(255,255,255,.07);overflow:hidden}#impvp .vch{display:flex;align-items:center;gap:8px;padding:12px;min-height:48px;font:700 15px system-ui}#impvp .vch .n{margin-left:auto;opacity:.7;font:600 13px system-ui}'
+'#impvp .vch button,#impvp .vx button{border:0;border-radius:10px;background:#3a4256;color:#fff;font:600 12px system-ui;padding:6px 10px;min-height:32px}'
+'#impvp .vr{display:flex;align-items:center;gap:10px;padding:10px 12px;border-top:1px solid #fff1;min-height:46px;font:600 15px system-ui}#impvp .vr input{width:24px;height:24px;accent-color:#ffd75e;flex:0 0 auto}#impvp .vr small{opacity:.6;font-weight:500;margin-left:auto;font-size:11px}'
+'#impvp .vf{padding:10px 14px calc(10px + env(safe-area-inset-bottom));border-top:1px solid #fff2;display:flex;gap:8px;justify-content:space-between;align-items:center;font:600 13px system-ui}'
+'#impvp .vf button{border:0;border-radius:12px;background:#3a4256;color:#fff;font:700 13px system-ui;padding:10px 12px;min-height:42px}';
cssm+='html *,html *::before,html *::after{border-radius:0!important}';cssm+='#tdd *:not(#_a):not(#_b):not(#_c),#tools button:not(#_a):not(#_b):not(#_c),#tdd:not(#_a):not(#_b):not(#_c){border-radius:0!important}';var stm=D.createElement('style');stm.textContent=cssm;D.head.appendChild(stm);
/* ---- achievements ---- */
var ACH=[
['first','🏅','First win','Win any game once',function(a){return a.wins>=1}],
['w10','🥈','Ten wins','Win 10 games',function(a){return a.wins>=10}],
['p100','💯','Hundred plays','Play 100 rounds',function(a){return a.plays>=100}],
['ex10','🧭','Explorer','Try 10 different games',function(a){return a.tried>=10}],
['ex50','🌍','Globetrotter','Try 50 different games',function(a){return a.tried>=50}],
['st3','🔥','3-day streak','Play 3 days in a row',function(a){return a.streak>=3}],
['st7','🔥','7-day streak','Play 7 days in a row',function(a){return a.streak>=7}],
['hr1','⏱','Marathon','Play for one hour in total',function(a){return a.time>=3600}],
['fav5','⭐','Collector','Favourite 5 games',function(a){return LS('hub.fav',[]).length>=5}],
['owl','🦉','Night owl','Play after 11 pm',function(a){return a.owl}]];
function streaks(){var d=P.day,k=Object.keys(d).sort(),best=0,run=0,prev=null;k.forEach(function(x){var t=new Date(x+'T12:00:00').getTime();run=(prev&&Math.round((t-prev)/864e5)===1)?run+1:1;prev=t;if(run>best)best=run});var cur=0,t=new Date();t.setHours(12);while(d[dkey(t.getTime())]){cur++;t=new Date(t.getTime()-864e5)}if(!cur){t=new Date(Date.now()-864e5);t.setHours(12);while(d[dkey(t.getTime())]){cur++;t=new Date(t.getTime()-864e5)}}return{cur:cur,best:best}}
function aggr(){var a=allStats(),s=streaks();a.streak=Math.max(s.cur,s.best);a.owl=!!P.owl;return a}
function toast(m){var t=$('imptoast');if(!t){t=D.createElement('div');t.id='imptoast';D.body.appendChild(t)}t.textContent=m;t.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(function(){t.style.display='none'},3200)}
function confetti(){if(CFG.nm)return;var E=['🎉','✨','⭐','🎊'];for(var i=0;i<18;i++){var e=D.createElement('div');e.textContent=E[i%4];e.style.cssText='position:fixed;top:-30px;z-index:500;pointer-events:none;font-size:22px;left:'+Math.random()*95+'vw;transition:transform '+(1.4+Math.random()*1.2)+'s linear;';D.body.appendChild(e);(function(x){setTimeout(function(){x.style.transform='translateY(110vh) rotate(400deg)'},30);setTimeout(function(){x.remove()},3000)})(e)}}
function checkAch(){var a=aggr(),n=0;ACH.forEach(function(x){if(!P.ach[x[0]]&&x[4](a)){P.ach[x[0]]=Date.now();n++;setTimeout(function(){toast('🏆 Achievement: '+x[2]);confetti()},400+n*3300)}});if(n)savP()}
/* ---- play logging via hash change (22 daily log) ---- */
var lastLog=0,lastId='';
function logPlay(){var nm=(location.hash||'').replace('#','');if(!nm||nm==='hub'||!window.__GAMES)return;var gm=window.__GAMES.filter(function(x){return x.url==='#'+nm})[0];if(!gm)return;var id=gm.id;if(id===lastId&&Date.now()-lastLog<1500)return;lastId=id;lastLog=Date.now();P.plays[id]=(P.plays[id]||0)+1;P.last[id]=Date.now();var k=dkey();P.day[k]=(P.day[k]||0)+1;if(new Date().getHours()>=23||new Date().getHours()<4)P.owl=1;savP();setTimeout(checkAch,500)}
var lh=location.hash;setInterval(function(){if(location.hash!==lh){lh=location.hash;logPlay();try{window.dispatchEvent(new Event('imphash'))}catch(e){}}},250);
/* ---- ui ---- */
function G(){return window.__GAMES||[]}
function catOf(id){if(id==='emu')return 'Emu';var C=window.__CATS||[];for(var i=0;i<C.length;i++)if(C[i][2].indexOf(id)>=0)return C[i][0].replace('&amp;','&');return''}
function open(g){if(window.__sheet)window.__sheet(g,false)}
function daily(){var G0=G(),k=dkey(),h=0;for(var i=0;i<k.length;i++)h=(h*31+k.charCodeAt(i))>>>0;return G0[h%G0.length]}
var filt='';
function build(){
 var wrap=$('grid').parentNode,anc=$('grid');

 /* ===== simple screen + game picker ===== */
 var EMU={id:'emu',ic:'🕹️',name:'Emu',url:'https://jackrose2028.github.io/gemu',tag:'emulator retro'};
 function GA(){return G().concat([EMU])}
 function GO(id){return id==='emu'?EMU:window.__gOf(id)}
 function isExt(g){return g&&/^https?:/.test(g.url||'')}
 var sm=D.createElement('div');sm.id='impsm';wrap.insertBefore(sm,wrap.children[1]||null);
 var vp=D.createElement('div');vp.id='impvp';D.body.appendChild(vp);
 var CATSL=function(){var C=window.__CATS||[],seen={},out=[];C.forEach(function(c){out.push({n:c[0].replace('&amp;','&'),e:c[1],ids:c[2].filter(function(i){return GO(i)})});c[2].forEach(function(i){seen[i]=1})});var rest=G().filter(function(g){return !seen[g.id]}).map(function(g){return g.id});if(rest.length)out.push({n:'Other',e:'🎮',ids:rest});out.push({n:'Emu',e:'🕹️',ids:['emu']});return out};
 var DU=['#klondike','#freecell','#golf','#jewel','#sudoku','#wordsearch','#mahjong'];function setDefaults(){VIS.ids=[];DU.forEach(function(u){var gg=GA().filter(function(x){return x.url===u})[0];if(gg)VIS.ids.push(gg.id)});VIS.ids.push('emu');VIS.mode='simple';applyMode()}
 if(VIS.def===4||VIS.def===5){if(VIS.ids.indexOf('emu')<0)VIS.ids.push('emu');VIS.def=6;savV()}else if(VIS.def!==6){setDefaults();VIS.def=6;savV()}
 function isVis(id){return VIS.ids.indexOf(id)>=0}
 function setVis(id,on){var i=VIS.ids.indexOf(id);if(on&&i<0)VIS.ids.push(id);if(!on&&i>=0)VIS.ids.splice(i,1)}
 var smq='';
 sm.innerHTML='<div id="impsmh"></div><div class="impsq"><input id="impsmq" type="text" inputmode="search" enterkeyhint="search" placeholder="🔎 Search all games (including hidden)…" autocomplete="off" autocapitalize="off"></div><div id="impsmb"></div>';
 function renderSimple(){var L=VIS.ids.map(function(i){return GO(i)}).filter(Boolean);var hd=sm.querySelector('#impsmh'),bd=sm.querySelector('#impsmb'),q=smq.trim().toLowerCase();
  hd.innerHTML='<div class="sh"><b>'+(q?'Search results':'Your games ('+L.length+')')+'</b><div class="sbt"><button class="impgb" id="impsg" aria-label="Add or remove games">⚙️ Add/remove games</button><button class="impgb" id="impsa" aria-label="Show all games">📚 Show all games</button></div></div>';
  if(q){var R=GA().filter(function(g){return (g.name+' '+catOf(g.id)+' '+(g.tag||'')).toLowerCase().indexOf(q)>=0}).slice(0,60);
   bd.innerHTML=R.length?'<div class="gl">'+R.map(function(g){var on=isVis(g.id);return '<div class="gr">'+(isExt(g)?'<a class="go" href="'+g.url+'" target="_blank" rel="noopener">':'<button class="go" data-id="'+g.id+'">')+'<span>'+g.ic+'</span><b>'+esc(g.name)+'</b><small>'+esc(catOf(g.id))+(on?'':' · hidden')+'</small>'+(isExt(g)?'</a>':'</button>')+'<button class="ad" data-add="'+g.id+'">'+(on?'✓ Added':'＋ Add')+'</button></div>'}).join('')+'</div>':'<div class="em"><p>No games match “'+esc(smq)+'”.</p></div>';return}
  if(!L.length){bd.innerHTML='<div class="em"><div class="big">🎮</div><p>No games yet.<br>Tap Add/remove games, or search above.</p></div>';return}
  bd.innerHTML='<div class="gg">'+L.map(function(g){return isExt(g)?'<a class="ext" href="'+g.url+'" target="_blank" rel="noopener"><span>'+g.ic+'</span>'+esc(g.name)+'<small>Emu · opens in a new tab</small></a>':'<button data-id="'+g.id+'"><span>'+g.ic+'</span>'+esc(g.name)+'<small>'+esc(catOf(g.id))+'</small></button>'}).join('')+'</div>'}
 sm.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;if(b.id==='impsg'){openVp();return}if(b.id==='impsa'){VIS.mode='full';savV();applyMode();toast('Full hub on');try{scrollTo(0,0)}catch(e){}return}if(b.dataset.add){var id=b.dataset.add;setVis(id,!isVis(id));savV();b.textContent=isVis(id)?'✓ Added':'＋ Add';var sm2=b.parentNode.querySelector('.go small');if(sm2){sm2.textContent=sm2.textContent.replace(' · hidden','')+(isVis(id)?'':' · hidden')}toast(isVis(id)?'Added to your games':'Removed from your games');return}if(b.dataset.id)open(GO(b.dataset.id))});
 sm.addEventListener('input',function(e){if(e.target.id==='impsmq'){smq=e.target.value;renderSimple()}});
 var vq='',vopen={};
 function openVp(){vp.classList.add('on');renderVp()}
 function closeVp(){vp.classList.remove('on');savV();renderSimple()}
 function renderVp(keepScroll){var bd=vp.querySelector('.vb'),sc=bd?bd.scrollTop:0;var Cs=CATSL(),q=vq.trim().toLowerCase(),h='';
  var full=VIS.mode==='full';
  Cs.forEach(function(c){var ids=c.ids;if(q)ids=ids.filter(function(i){var g=GO(i);return (g.name+' '+c.n).toLowerCase().indexOf(q)>=0});if(!ids.length)return;var n=c.ids.filter(isVis).length;var ex=q||vopen[c.n];
   h+='<div class="vc"><div class="vch" data-c="'+esc(c.n)+'"><span>'+c.e+'</span><span>'+esc(c.n)+'</span><span class="n">'+n+'/'+c.ids.length+'</span><span class="vx"><button data-all="'+esc(c.n)+'">All</button> <button data-none="'+esc(c.n)+'">None</button></span></div>'+(ex?ids.map(function(i){var g=GO(i);return '<label class="vr"><input type="checkbox" data-id="'+i+'"'+(isVis(i)?' checked':'')+'><span>'+g.ic+' '+esc(g.name)+'</span></label>'}).join(''):'')+'</div>'});
  var tot=VIS.ids.length;
  vp.innerHTML='<div class="vh"><b>⚙️ Choose your games</b><button class="impgb" id="impvd">Done</button></div><div class="vq"><input id="impvq" type="text" inputmode="search" placeholder="Search games…" value="'+esc(vq)+'"></div><div class="vb">'+(h||'<div style="opacity:.7;padding:20px">No games match.</div>')+'</div><div class="vf"><span>'+tot+' selected</span><span><button id="impvall">Select all</button> <button id="impvnone">Clear</button> <button id="impvdef">Defaults</button> <button id="impvmode">'+(full?'Use simple mode':'Show full hub')+'</button></span></div>';
  var nb=vp.querySelector('.vb');if(nb&&keepScroll)nb.scrollTop=sc;var qi=vp.querySelector('#impvq');if(qi&&D.activeElement!==qi&&keepScroll===2){qi.focus();qi.setSelectionRange(qi.value.length,qi.value.length)}}
 vp.addEventListener('click',function(e){var t=e.target;
  if(t.id==='impvd'){closeVp();return}
  if(t.id==='impvall'){GA().forEach(function(g){setVis(g.id,true)});savV();renderVp(1);return}
  if(t.id==='impvdef'){setDefaults();savV();renderVp(1);toast('Reset to the default games');return}
  if(t.id==='impvnone'){VIS.ids=[];savV();renderVp(1);return}
  if(t.id==='impvmode'){VIS.mode=VIS.mode==='full'?'simple':'full';savV();applyMode();toast(VIS.mode==='full'?'Full hub on':'Simple mode on');renderVp(1);return}
  if(t.dataset&&t.dataset.all){CATSL().forEach(function(c){if(c.n===t.dataset.all)c.ids.forEach(function(i){setVis(i,true)})});savV();renderVp(1);return}
  if(t.dataset&&t.dataset.none){CATSL().forEach(function(c){if(c.n===t.dataset.none)c.ids.forEach(function(i){setVis(i,false)})});savV();renderVp(1);return}
  var ch=t.closest&&t.closest('.vch');if(ch&&!t.closest('.vx')){var k=ch.dataset.c;vopen[k]=!vopen[k];renderVp(1)}});
 vp.addEventListener('change',function(e){var t=e.target;if(t.dataset&&t.dataset.id){setVis(t.dataset.id,t.checked);savV();var f=vp.querySelector('.vf span');if(f)f.textContent=VIS.ids.length+' selected';var c=t.closest('.vc');if(c){var cat=CATSL().filter(function(x){return x.n===c.querySelector('.vch').dataset.c})[0];if(cat)c.querySelector('.n').textContent=cat.ids.filter(isVis).length+'/'+cat.ids.length}}});
 vp.addEventListener('input',function(e){if(e.target.id==='impvq'){vq=e.target.value;renderVp(2)}});
 renderSimple();
 /* full mode: a chip to get back to the picker */
 window.__impEmu=function(){var ex=$('impemu'),on=VIS.ids.indexOf('emu')>=0;if(on&&!ex){var a=D.createElement('a');a.id='impemu';a.href=EMU.url;a.target='_blank';a.rel='noopener';a.textContent='🕹️ Emu — opens in a new tab';a.style.cssText='display:block;margin:10px 0;padding:16px;background:rgba(255,255,255,.12);color:#fff;font:700 16px system-ui;text-decoration:none';$('grid').parentNode.appendChild(a)}else if(!on&&ex)ex.remove()};window.__impEmu();
 var bk=D.createElement('button');bk.id='impback';bk.textContent='⬅ Back to my selected games';bk.style.cssText='display:block;width:100%;margin:0 0 10px;padding:14px;background:#ffd23f;color:#111;border:0;font:800 16px system-ui;cursor:pointer;border-radius:0';wrap.insertBefore(bk,wrap.firstChild);bk.addEventListener('click',function(){VIS.mode='simple';savV();applyMode();try{renderSimple()}catch(e){}toast('Simple mode on');try{scrollTo(0,0)}catch(e){}});
 (function hh(n){var hb=D.getElementById('hubbar');if(!hb){if(n<40)setTimeout(function(){hh(n+1)},250);return}if(D.getElementById('imphome'))return;var a=D.createElement('a');a.id='imphome';a.href='https://jackrose2029.github.io/start/';a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','Home');a.textContent='\uD83C\uDFE0';a.style.cssText='display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;margin:0 6px 0 0;align-self:center;flex:0 0 auto;color:#fff;text-decoration:none;font:22px/1 system-ui;border-radius:0';hb.insertBefore(a,hb.firstChild)})(0);
 /* 9 overall progress */
 var pg=D.createElement('div');pg.innerHTML='<div id="impprogt"></div><div id="impprog"><i></i></div>';wrap.insertBefore(pg,anc);
 /* 27/28 game of the day */
 var dd=D.createElement('button');dd.id='impdaily';wrap.insertBefore(dd,anc);
 /* 2-4 filters, 29 surprise */
 var bar=D.createElement('div');bar.id='impbar';bar.innerHTML='<button data-f="vis">⚙️ Choose games</button><button data-f="">All</button><button data-f="fav">⭐ Favourites</button><button data-f="new">🆕 Not played</button><button data-f="played">✔ Played</button><button data-f="sup">🎲 Surprise me</button><button data-f="clr">🧹 Clear recents</button>';wrap.insertBefore(bar,anc);
 var res=D.createElement('div');res.id='impres';wrap.insertBefore(res,anc);
 /* 30 search history */
 var hist=D.createElement('div');hist.className='imphist';hist.id='imphist';var hs=$('hsx');if(hs)hs.appendChild(hist);
 function played(id){var s=gstat(id);return s.plays>0||P.last[id]}
 function setF(f){filt=f;[].forEach.call(bar.querySelectorAll('button'),function(b){b.classList.toggle('on',b.dataset.f===f&&f!=='sup'&&f!=='clr')});var show=!!f;res.classList.toggle('on',show);if(show)$('grid').style.setProperty('display','none','important');else $('grid').style.removeProperty('display');D.querySelectorAll('.hrow').forEach(function(r){r.style.display=show?'none':''});if(!f){res.innerHTML='';return}var fav=LS('hub.fav',[]);var L=G().filter(function(g){return f==='fav'?fav.indexOf(g.id)>=0:f==='new'?!played(g.id):played(g.id)});res.innerHTML=L.length?L.map(function(g){var s=gstat(g.id);return '<button data-id="'+g.id+'"><span style="font-size:22px">'+g.ic+'</span><span>'+esc(g.name)+'<small>'+esc(catOf(g.id))+(s.plays?' · '+s.plays+' plays':'')+'</small></span></button>'}).join(''):'<div style="grid-column:1/3;opacity:.7;padding:12px">Nothing here yet.</div>'}
 bar.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var f=b.dataset.f;if(f==='vis'){openVp();return}if(f==='sup'){var u=G().filter(function(g){return !played(g.id)});var pool=u.length?u:G();open(pool[Math.floor(Math.random()*pool.length)]);return}if(f==='clr'){if(b.dataset.s!=='1'){b.dataset.s='1';b.textContent='Tap again to confirm';setTimeout(function(){b.dataset.s='';b.textContent='🧹 Clear recents'},2500);return}b.dataset.s='';b.textContent='🧹 Clear recents';try{localStorage.removeItem('hub.recent')}catch(e){}if(window.__hubRefresh)window.__hubRefresh();toast('Recents cleared');return}setF(f)});
 res.addEventListener('click',function(e){var b=e.target.closest('button');if(b)open(window.__gOf(b.dataset.id))});
 /* progress + daily refresh */
 function paint(){var a=allStats(),n=G().length;var td=P.day[dkey()]||0;$('impprogt').textContent='Tried '+a.tried+' of '+n+' games · '+a.plays+' plays · Today '+Math.min(td,3)+'/3 daily goal'+(td>=3?' ✔':'');$('impprog').firstChild.style.width=Math.min(100,a.tried/n*100)+'%';var g=daily(),done=P.last[g.id]&&dkey(P.last[g.id])===dkey();dd.innerHTML='🌟 Game of the day: '+g.ic+' '+esc(g.name)+(done?' ✔':'')+'<small>'+(done?'Done today — nice!':'Play it once today')+'</small>';dd.dataset.id=g.id;var c=$('hcont');if(c&&c.style.display!=='none'&&P.last[(LS('hub.recent',[])[0])]&&!/ · /.test(c.textContent))c.textContent+=' · '+ago(P.last[LS('hub.recent',[])[0]])}
 dd.onclick=function(){open(window.__gOf(dd.dataset.id))};
 paint();window.addEventListener('imphash',function(){setTimeout(paint,300)});setInterval(paint,20000);
 /* search history: save query on Enter / result click */
 var q=$('hq');function histPaint(){var h=P.q||[];hist.innerHTML=h.slice(0,6).map(function(t){return '<button data-q="'+esc(t)+'">🔍 '+esc(t)+'</button>'}).join('')}
 histPaint();
 if(q){q.addEventListener('keydown',function(e){if(e.key==='Enter'&&q.value.trim()){P.q=[q.value.trim()].concat((P.q||[]).filter(function(x){return x!==q.value.trim()})).slice(0,6);savP();histPaint()}});hist.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;q.value=b.dataset.q;q.dispatchEvent(new Event('input'));q.focus()})}
 /* 40 long-press to favourite + 7/8 badges + category sort/random/progress */
 var pop=$('catpop');
 function decorate(){var cg=pop&&pop.querySelector('.cg');if(!cg)return;var fav=LS('hub.fav',[]);[].forEach.call(cg.querySelectorAll('.g'),function(b){var id=b.dataset.id,s=gstat(id);var bd=b.querySelector('.impb');if(s.plays&&!bd){bd=D.createElement('span');bd.className='impb';b.appendChild(bd)}if(bd){var bt=s.plays+'× '+(s.wins&&s.plays?Math.round(s.wins/s.plays*100)+'%':'');if(bd.textContent!==bt)bd.textContent=bt}var dm=b.querySelector('.impd');if(fav.indexOf(id)>=0&&!dm){dm=D.createElement('span');dm.className='impd';dm.textContent='⭐';b.appendChild(dm)}else if(fav.indexOf(id)<0&&dm)dm.remove()});
  var pp=pop.querySelector('.pp');if(pp&&!pp.querySelector('.imps')){var ids=[].map.call(cg.querySelectorAll('.g'),function(b){return b.dataset.id});var tried=ids.filter(played).length;var hd=pp.querySelector('.ph2 b');if(hd&&!hd.dataset.p){hd.dataset.p=1;hd.textContent+=' · '+tried+'/'+ids.length+(tried===ids.length?' ✔ complete':'')}
   var sb=D.createElement('div');sb.className='imps';sb.innerHTML='<button data-s="d" class="on">Default</button><button data-s="a">A–Z</button><button data-s="m">Most played</button><button data-s="n">Not played</button>';cg.parentNode.insertBefore(sb,cg);var orig=[].slice.call(cg.children);sb.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;[].forEach.call(sb.children,function(x){x.classList.toggle('on',x===b)});var k=b.dataset.s,arr=orig.slice();if(k==='a')arr.sort(function(x,y){return x.querySelector('b').textContent.replace(/NEW|LAST/g,'').localeCompare(y.querySelector('b').textContent.replace(/NEW|LAST/g,''))});else if(k==='m')arr.sort(function(x,y){return gstat(y.dataset.id).plays-gstat(x.dataset.id).plays});else if(k==='n')arr.sort(function(x,y){return (played(x.dataset.id)?1:0)-(played(y.dataset.id)?1:0)});arr.forEach(function(x){cg.appendChild(x)})});
   var rb=D.createElement('button');rb.id='impctop';rb.textContent='🎲 Random game from this category';rb.onclick=function(){var un=ids.filter(function(i){return !played(i)}),pl=un.length?un:ids;open(window.__gOf(pl[Math.floor(Math.random()*pl.length)]))};cg.parentNode.insertBefore(rb,sb)}}
 var dT=0,dBusy=0;if(pop)new MutationObserver(function(){if(dBusy)return;clearTimeout(dT);dT=setTimeout(function(){dBusy=1;try{decorate()}catch(e){}setTimeout(function(){dBusy=0},50)},60)}).observe(pop,{childList:true});
 var lp=null;D.addEventListener('touchstart',function(e){var b=e.target.closest&&e.target.closest('#catpop .g');if(!b)return;lp=setTimeout(function(){var f=LS('hub.fav',[]),i=f.indexOf(b.dataset.id);if(i>=0)f.splice(i,1);else f.push(b.dataset.id);SS('hub.fav',f);b.dataset.lp='1';toast(i>=0?'Removed from favourites':'⭐ Added to favourites');if(window.__hubRefresh)window.__hubRefresh();decorate();checkAch()},550)},{passive:true});
 D.addEventListener('touchend',function(){clearTimeout(lp)},{passive:true});D.addEventListener('touchmove',function(){clearTimeout(lp)},{passive:true});
 D.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('#catpop .g');if(b&&b.dataset.lp){e.stopPropagation();e.preventDefault();delete b.dataset.lp}},true);
 /* sheet: 10 stats for this game + last played */
 var sh=$('sheet');if(sh)new MutationObserver(function(){var g=window.__curSheet,pn=sh.querySelector('.panel');if(!g||!pn||pn.querySelector('#impsheetst'))return;var s=gstat(g.id);var d=D.createElement('div');d.id='impsheetst';d.textContent=s.plays?('Your record: '+s.plays+' plays'+(s.wins?' · '+s.wins+' wins':'')+(s.time?' · '+fmtT(s.time):'')+(P.last[g.id]?' · last '+ago(P.last[g.id]):'')):'You haven\'t played this one yet';var pl=pn.querySelector('.pl');if(pl)pn.insertBefore(d,pl);var C=window.__CATS||[],sim=[];for(var i=0;i<C.length;i++)if(C[i][2].indexOf(g.id)>=0){sim=C[i][2].filter(function(x){return x!==g.id}).sort(function(){return Math.random()-.5}).slice(0,3);break}if(sim.length&&!pn.querySelector('#impsim')){var sd=D.createElement('div');sd.id='impsim';sd.className='imphist';sd.innerHTML='<span style="font:600 12px system-ui;opacity:.7;align-self:center">Similar:</span>'+sim.map(function(x){var o=window.__gOf(x);return o?'<button data-id="'+x+'">'+o.ic+' '+esc(o.name)+'</button>':''}).join('');sd.addEventListener('click',function(e){var b=e.target.closest('button');if(b){e.stopPropagation();open(window.__gOf(b.dataset.id))}});pn.appendChild(sd)}}).observe(sh,{childList:true,subtree:true});
 /* gear + panel */
 var gear=D.createElement('button');gear.id='impgear';gear.setAttribute('aria-label','Stats and settings');gear.textContent='📊';D.body.appendChild(gear);
 var pn=D.createElement('div');pn.id='imppn';D.body.appendChild(pn);
 function panel(){var a=aggr(),s=streaks(),G0=G();var tops=G0.map(function(g){return[g,gstat(g.id).plays]}).filter(function(x){return x[1]>0}).sort(function(x,y){return y[1]-x[1]}).slice(0,5);
  var days=[],mx=1;for(var i=6;i>=0;i--){var t=new Date(Date.now()-i*864e5);var n=P.day[dkey(t.getTime())]||0;days.push([['S','M','T','W','T','F','S'][t.getDay()],n]);if(n>mx)mx=n}
  var vol=Math.round((window.__vol==null?1:window.__vol)*100);
  var used=0;try{for(var j=0;j<localStorage.length;j++){var k=localStorage.key(j);used+=k.length+(localStorage.getItem(k)||'').length}}catch(e){}
  var h='<div class="ih"><b>📊 Stats &amp; settings</b><button class="pri" id="impx">Done</button></div>'
  +'<h3>Overview</h3><div class="kv"><span>Games tried</span><b>'+a.tried+' / '+G0.length+'</b></div><div class="kv"><span>Total plays</span><b>'+a.plays+'</b></div><div class="kv"><span>Total wins</span><b>'+a.wins+'</b></div><div class="kv"><span>Win rate</span><b>'+(a.plays?Math.round(a.wins/a.plays*100)+'%':'–')+'</b></div><div class="kv"><span>Time played</span><b>'+fmtT(a.time)+'</b></div><div class="kv"><span>Day streak</span><b>'+s.cur+' (best '+s.best+')</b></div>'
  +'<div class="kv"><span>Busiest day</span><b>'+(function(){var m=0;for(var k in P.day)if(P.day[k]>m)m=P.day[k];return m?m+' plays':'–'})()+'</b></div>'+'<h3>By category</h3>'+(window.__CATS||[]).map(function(c){var t=0,pl=0;c[2].forEach(function(i){var st=gstat(i);t+=st.time;if(st.plays||P.last[i])pl++});return '<div class="kv"><span>'+c[1]+' '+c[0].replace('&amp;','&')+'</span><b>'+pl+'/'+c[2].length+(t?' · '+fmtT(t):'')+'</b></div>'}).join('')+'<h3>Last 7 days</h3><div class="bars">'+days.map(function(d){return '<i style="height:'+Math.max(3,d[1]/mx*100)+'%"><span>'+d[0]+'</span></i>'}).join('')+'</div><div style="height:14px"></div>'
  +'<h3>Most played</h3>'+(tops.length?tops.map(function(x){return '<div class="kv"><span>'+x[0].ic+' '+esc(x[0].name)+'</span><b>'+x[1]+'</b></div>'}).join(''):'<div style="opacity:.7">Play a few games first.</div>')
  +'<h3>Achievements ('+Object.keys(P.ach).length+'/'+ACH.length+')</h3>'+ACH.map(function(x){var u=P.ach[x[0]];return '<div class="ach'+(u?'':' lk')+'"><span class="e">'+x[1]+'</span><span><b>'+x[2]+'</b><small>'+x[3]+(u?' · unlocked':'')+'</small></span></div>'}).join('')
  +'<h3>Settings</h3><div>Volume <b id="impvt">'+vol+'%</b><input type="range" id="impvol" min="0" max="100" value="'+vol+'"></div><div>Text size <button data-fs="-10">A−</button><button data-fs="10">A+</button><button data-fs="0">Reset</button></div><div><button id="imphcb" class="'+(CFG.hc?'pri':'')+'">High contrast: '+(CFG.hc?'on':'off')+'</button><button id="impnmb" class="'+(CFG.nm?'pri':'')+'">Reduce motion: '+(CFG.nm?'on':'off')+'</button></div>'
  +'<h3>Your data</h3><div class="kv"><span>Storage used</span><b>'+(used/1024).toFixed(1)+' KB</b></div><div><button id="impsh">Share my stats</button><button id="impex">Copy backup</button><button id="impim">Restore backup</button></div><textarea id="impta" placeholder="Paste a backup here, then tap Restore backup again" style="display:none"></textarea><div><button class="dng" id="imprs">Reset all progress</button></div><div style="opacity:.6;font-size:12px;margin-top:8px">Progress is stored on this device only.</div>';
  pn.innerHTML='<div class="ib">'+h+'</div>'}
 function gv(){var h=(location.hash||'').replace('#','');gear.style.display=(h&&h!=='hub')?'none':'block'}gv();window.addEventListener('imphash',gv);
 gear.onclick=function(){panel();pn.classList.add('on')};
 pn.addEventListener('click',function(e){var t=e.target;if(t===pn||t.id==='impx'){pn.classList.remove('on');return}
  if(t.dataset&&t.dataset.fs!==undefined){CFG.fs=t.dataset.fs==='0'?100:Math.max(80,Math.min(150,CFG.fs+ +t.dataset.fs));SS('imp.cfg',CFG);applyCfg();return}
  if(t.id==='imphcb'){CFG.hc=CFG.hc?0:1;SS('imp.cfg',CFG);applyCfg();panel();return}
  if(t.id==='impnmb'){CFG.nm=CFG.nm?0:1;SS('imp.cfg',CFG);applyCfg();panel();return}
  if(t.id==='impsh'){var a=allStats(),txt='My game hub: '+a.tried+'/'+G().length+' games tried, '+a.plays+' plays, '+a.wins+' wins, '+fmtT(a.time)+' played, '+Object.keys(P.ach).length+'/'+ACH.length+' achievements.';try{if(navigator.share){navigator.share({text:txt}).catch(function(){})}else{navigator.clipboard.writeText(txt);toast('Stats copied')}}catch(e){}return}
  if(t.id==='impex'){var o={};try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(/^(deck\.|hub\.|imp\.|hs\.|adv|tour)/.test(k))o[k]=localStorage.getItem(k)}}catch(e){}var j=JSON.stringify(o);var ta=$('impta');ta.style.display='block';ta.value=j;ta.select();try{navigator.clipboard.writeText(j);toast('Backup copied ('+Math.round(j.length/1024)+' KB)')}catch(e){toast('Select the text and copy it')}return}
  if(t.id==='impim'){var ta2=$('impta');if(ta2.style.display==='none'||!ta2.value.trim()){ta2.style.display='block';ta2.value='';ta2.focus();return}try{var o2=JSON.parse(ta2.value);var n=0;Object.keys(o2).forEach(function(k){if(/^(deck\.|hub\.|imp\.|hs\.|adv|tour)/.test(k)&&typeof o2[k]==='string'){localStorage.setItem(k,o2[k]);n++}});toast('Restored '+n+' items — reloading');setTimeout(function(){location.reload()},900)}catch(e){toast('That backup is not valid')}return}
  if(t.id==='imprs'){if(t.dataset.s!=='1'){t.dataset.s='1';t.textContent='Really reset? Tap again';return}try{var ks=[];for(var i2=0;i2<localStorage.length;i2++){var k2=localStorage.key(i2);if(/^(deck\.s\.|hub\.fav|hub\.recent|hub\.last|imp\.p|hs\.)/.test(k2))ks.push(k2)}ks.forEach(function(k3){localStorage.removeItem(k3)})}catch(e){}toast('Progress reset — reloading');setTimeout(function(){location.reload()},800)}});
 pn.addEventListener('input',function(e){if(e.target.id==='impvol'){var v=+e.target.value/100;$('impvt').textContent=Math.round(v*100)+'%';if(window.__setVol)window.__setVol(v)}});
 setTimeout(checkAch,1500);
}
function ready(){if(!window.__GAMES||!window.__sheet||!$('grid')||!$('grid').children.length||!$('hq')){setTimeout(ready,200);return}try{build()}finally{var w=Math.max(0,2000-(Date.now()-(window.__implt0||Date.now())));setTimeout(function(){D.documentElement.classList.add('implr')},w)}}
ready();
})();
