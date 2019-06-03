var ctx;
var question_number_easy_one = [
	[ "<div class='img_questionare'><img src='../pic/lvl2/ABQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,B" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ACQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,C" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ADQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AUQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,U" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BCQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,C" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BDQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CDQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/DEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "D,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/DFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "D,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/EFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "E,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ELQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "E,L" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GHQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,H" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GIQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,I" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GJQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,J" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GKQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,K" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GLQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,L" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GMQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,M" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GSQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,S" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/HNQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "H,N" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/IOQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "I,O" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/NOQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "N,O" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/NPQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "N,P" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/OPQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "O,P" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QRQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,R" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QSQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,S" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/RZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "R,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/TUQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "T,U" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/VWQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "V,W" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/VXQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "V,X" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/XYQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "X,Y" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/YZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Y,Z" ],
	


];

var question_number_easy_two = [
	[ "<div class='img_questionare'><img src='../pic/lvl2/ABQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,B" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ACQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,C" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ADQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AUQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,U" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BCQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,C" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BDQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CDQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/DEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "D,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/DFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "D,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/EFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "E,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ELQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "E,L" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GHQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,H" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GIQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,I" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GJQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,J" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GKQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,K" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GLQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,L" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GMQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,M" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GSQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,S" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/HNQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "H,N" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/IOQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "I,O" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/NOQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "N,O" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/NPQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "N,P" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/OPQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "O,P" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QRQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,R" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QSQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,S" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/RZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "R,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/TUQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "T,U" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/VWQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "V,W" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/VXQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "V,X" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/XYQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "X,Y" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/YZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Y,Z" ],

];

var question_number_easy_three = [
	[ "<div class='img_questionare'><img src='../pic/lvl2/ABQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,B" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ACQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,C" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ADQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AUQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,U" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BCQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,C" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BDQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CDQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/DEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "D,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/DFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "D,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/EFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "E,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ELQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "E,L" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GHQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,H" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GIQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,I" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GJQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,J" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GKQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,K" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GLQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,L" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GMQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,M" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GSQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,S" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/HNQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "H,N" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/IOQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "I,O" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/NOQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "N,O" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/NPQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "N,P" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/OPQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "O,P" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QRQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,R" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QSQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,S" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/RZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "R,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/TUQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "T,U" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/VWQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "V,W" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/VXQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "V,X" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/XYQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "X,Y" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/YZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Y,Z" ],
];

var question_number_easy_four = [
	[ "<div class='img_questionare'><img src='../pic/lvl2/ABQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,B" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ACQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,C" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ADQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AUQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,U" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BCQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,C" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BDQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CDQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/DEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "D,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/DFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "D,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/EFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "E,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ELQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "E,L" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GHQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,H" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GIQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,I" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GJQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,J" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GKQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,K" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GLQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,L" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GMQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,M" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GSQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,S" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/HNQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "H,N" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/IOQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "I,O" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/NOQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "N,O" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/NPQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "N,P" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/OPQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "O,P" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QRQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,R" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QSQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,S" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/RZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "R,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/TUQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "T,U" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/VWQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "V,W" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/VXQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "V,X" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/XYQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "X,Y" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/YZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Y,Z" ],
];

var question_number_easy_five = [
	[ "<div class='img_questionare'><img src='../pic/lvl2/ABQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,B" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ACQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,C" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ADQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AUQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,U" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/AZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "A,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BCQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,C" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BDQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/BZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "B,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CDQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,D" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/CFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "C,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/DEQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "D,E" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/DFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "D,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/EFQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "E,F" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/ELQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "E,L" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GHQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,H" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GIQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,I" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GJQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,J" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GKQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,K" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GLQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,L" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GMQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,M" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/GSQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "G,S" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/HNQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "H,N" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/IOQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "I,O" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/NOQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "N,O" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/NPQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "N,P" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/OPQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "O,P" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QRQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,R" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QSQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,S" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/QZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Q,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/RZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "R,Z" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/TUQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "T,U" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/VWQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "V,W" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/VXQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "V,X" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/XYQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "X,Y" ],
	[ "<div class='img_questionare'><img src='../pic/lvl2/YZQ.png' width='850px' height='400px'></div>", "Identify the missing letters!", "Y,Z" ],
];

var ran_e_1 = Math.floor(Math.random() * question_number_easy_one.length);
var ran_e_2 = Math.floor(Math.random() * question_number_easy_two.length);
var ran_e_3 = Math.floor(Math.random() * question_number_easy_three.length);
var ran_e_4 = Math.floor(Math.random() * question_number_easy_four.length);
var ran_e_5 = Math.floor(Math.random() * question_number_easy_five.length);

function _(x){
	return document.getElementById(x);
}



function q_easy1(){
	ctx = _("ctx");
	

	ctx.innerHTML += "<div id='level'><h1 class='animated infinite flash' id='level1'>Level 2.1 / 2.5</h1></div>";
	ctx.innerHTML += question_number_easy_one[ran_e_1][0] + "<br><br>";
	ctx.innerHTML += "<center><div class='font-background'><font size='5'><strong>" + question_number_easy_one[ran_e_1][1] + "</strong></font></div></center><br>";
	ctx.innerHTML += "<center><input type='text' name='easy1' id='easy1' maxlength='3' onkeyup='toeasy1();'> <input onclick='easy1()' type='button' value='SUBMIT' class='button2'></center>";
	ctx.innerHTML += "<center><div id='result'></div></center>";
	
	
}



function easy1(){

	var answer_e_1 = document.getElementById('easy1').value;
	
	if(answer_e_1 == question_number_easy_one[ran_e_1][2])
	{
		
		ctx.innerHTML = "<div class='des'><h1 id='congrats'>Great you got the correct answer!</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/passed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/happy.png' height='300px' width='200px' id='happy' class='animated infinite bounce'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/next.png' height='50px' width='150px' id='next' onclick='q_easy2()'></div>";
	}
	else {
		
		ctx.innerHTML = "<div class='des'><h1 id='youfailed'>YOU FAILED</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/failed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/cry.png' height='300px' width='200px' id='cry'></a></center></div>";
		ctx.innerHTML += "<a href='../html/LVL2.html'><div class='des'><img src='../pic/tryagain.png' height='50px' width='150px' id='refresh'></div>";
	}
}
function toeasy1(){
	var a=document.getElementById('easy1').value;
	document.getElementById('easy1').value=a.toUpperCase();
}



function q_easy2(){
	ctx = _("ctx");
	ctx.innerHTML = "<div id='level'><h1 class='animated infinite flash' id='level11'>LEVEL 2.2 / 2.5</h1></div>";
	ctx.innerHTML += question_number_easy_two[ran_e_2][0] + "<br><br>";
	ctx.innerHTML += "<center><div class='font-background'><font size='5'><strong>" + question_number_easy_two[ran_e_2][1] + "</strong></font></div></center><br>";
	ctx.innerHTML += "<center><input type='text' id='easy2' maxlength='3' onkeyup='toeasy2();'> <input onclick='easy2()' type='button' value='SUBMIT' class='button2'></center><br><br>";
	ctx.innerHTML += "<center><div id='result'></div></center>";
	
}

function easy2(){
	var answer_e_2 = document.getElementById('easy2').value;
	
	if(answer_e_2 == question_number_easy_two[ran_e_2][2])
	{
		
		ctx.innerHTML = "<div class='des'><h1 id='congrats'>Great you got the correct answer!</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/passed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/happy.png' height='300px' width='200px' id='happy' class='animated infinite bounce'></a></center></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/next.png' height='50px' width='150px' id='next' onclick='q_easy3()'></div>";
		
	}
	else {
		
		ctx.innerHTML = "<div class='des'><h1 id='youfailed'>YOU FAILED</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/failed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/cry.png' height='300px' width='200px' id='cry'></a></center></div>";
		ctx.innerHTML += "<a href='../html/LVL2.html'><div class='des'><img src='../pic/tryagain.png' height='50px' width='150px' id='refresh'></a></center></div>";
	}
}
function toeasy2(){
	var a=document.getElementById('easy2').value;
	document.getElementById('easy2').value=a.toUpperCase();
}

function q_easy3(){
	ctx.innerHTML = "<div id='level'><h1 class='animated infinite flash' id='level11'>LEVEL 2.3 / 2.5</h1></div>";
	ctx.innerHTML += question_number_easy_three[ran_e_3][0] + "<br><br>";
	ctx.innerHTML += "<center><div class='font-background'><font size='5'><strong>" + question_number_easy_three[ran_e_3][1] + "</strong></font></div></center><br>";
	ctx.innerHTML += "<center><input type='text' id='easy3' maxlength='3' onkeyup='toeasy3();'> <input onclick='easy3()' type='button' value='SUBMIT' class='button2'></center><br><br>";
	ctx.innerHTML += "<center><div id='result'></div></center>";
}

function easy3(){
	var answer_e_3 = document.getElementById('easy3').value;
	
	if(answer_e_3 == question_number_easy_three[ran_e_3][2])
	{
		ctx.innerHTML = "<div class='des'><h1 id='congrats'>Great you got the correct answer!</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/passed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/happy.png' height='300px' width='200px' id='happy' class='animated infinite bounce'></a></center></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/next.png' height='50px' width='150px' id='next' onclick='q_easy4()'></div>";
	}
	else {
		
		ctx.innerHTML = "<div class='des'><h1 id='youfailed'>YOU FAILED</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/failed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/cry.png' height='300px' width='200px' id='cry'></a></center></div>";
		ctx.innerHTML += "<a href='../html/LVL2.html'><div class='des'><img src='../pic/tryagain.png' height='50px' width='150px' id='refresh'></a></center></div>";
	}
}

function toeasy3(){
	var a=document.getElementById('easy3').value;
	document.getElementById('easy3').value=a.toUpperCase();
}

function q_easy4(){
	ctx.innerHTML = "<div id='level'><h1 class='animated infinite flash' id='level11'>LEVEL 2.4 / 2.5</h1></div>";
	ctx.innerHTML += question_number_easy_four[ran_e_4][0] + "<br><br>";
	ctx.innerHTML += "<center><div class='font-background'><font size='5'><strong>" + question_number_easy_four[ran_e_4][1] + "</strong></font></div></center><br>";
	ctx.innerHTML += "<center><input type='text' id='easy4' maxlength='3' onkeyup='toeasy4();'> <input onclick='easy4()' type='button' value='SUBMIT' class='button2'></center><br><br>";
	ctx.innerHTML += "<center><div id='result'></div></center>";
}

function easy4(){
	var answer_e_4 = document.getElementById('easy4').value;
	
	if(answer_e_4 == question_number_easy_four[ran_e_4][2])
	{
		ctx.innerHTML = "<div class='des'><h1 id='congrats'>Great you got the correct answer!</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/passed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/happy.png' height='300px' width='200px' id='happy' class='animated infinite bounce'></a></center></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/next.png' height='50px' width='150px' id='next' onclick='q_easy5()'></div>";
	}
	else {
		
		ctx.innerHTML = "<div class='des'><h1 id='youfailed'>YOU FAILED</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/failed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/cry.png' height='300px' width='200px' id='cry'></a></center></div>";
		ctx.innerHTML += "<a href='../html/LVL2.html'><div class='des'><img src='../pic/tryagain.png' height='50px' width='150px' id='refresh'></a></center></div>";
	}
}

function toeasy4(){
	var a=document.getElementById('easy4').value;
	document.getElementById('easy4').value=a.toUpperCase();
}

function q_easy5(){
	ctx.innerHTML = "<div id='level'><h1 class='animated infinite flash' id='level11'>LEVEL 2.5 / 2.5</h1></div>";
	ctx.innerHTML += question_number_easy_five[ran_e_5][0] + "<br><br>";
	ctx.innerHTML += "<center><div class='font-background'><font size='5'><strong>" + question_number_easy_five[ran_e_5][1] + "</strong></font></div></center><br>";
	ctx.innerHTML += "<center><input type='text' id='easy5' maxlength='3' onkeyup='toeasy5();'> <input onclick='easy5()' type='button' value='SUBMIT' class='button2'></center><br><br>";
	ctx.innerHTML += "<center><div id='result'></div></center>";
}

function easy5(){
	var answer_e_5 = document.getElementById('easy5').value;
	
	if(answer_e_5 == question_number_easy_five[ran_e_5][2])
	{
		ctx.innerHTML = "<div class='des'><h1 id='congrats'>Great you've completed the Level!</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/passed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/happy.png' height='300px' width='200px' id='happy' class='animated infinite bounce'></a></center></div>";
		ctx.innerHTML += "<div class='des'><a href='LVL3.html'><img src='../pic/proceed1.png' height='50px' width='150px' onclick='easy_f()' id='proceed'></a></div>";
	}
	else {
		
		ctx.innerHTML = "<div class='des'><h1 id='youfailed'>YOU FAILED</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/failed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/cry.png' height='300px' width='200px' id='cry'></a></center></div>";
		ctx.innerHTML += "<a href='../html/LVL2.html'><div class='des'><img src='../pic/tryagain.png' height='50px' width='150px' id='refresh'></a></center></div>";
	}
}

function toeasy5(){
	var a=document.getElementById('easy5').value;
	document.getElementById('easy5').value=a.toUpperCase();
}

function start(){
	document.getElementById('ctx').style.visibility = "visible";
	document.getElementById('notif').style.visibility = "hidden";
	document.getElementById('start').style.visibility = "hidden";

}

function toggleMenu(ref) {
  document.getElementById('sidebar').classList.toggle('active');
  ref.classList.toggle('active');
}





window.addEventListener("load", q_easy1, false) 