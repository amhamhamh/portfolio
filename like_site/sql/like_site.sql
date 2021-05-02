DROP TABLE IF EXISTS `favorite_site`;
CREATE TABLE `favorite_site`  (    
    `id` tinyint(4) not null AUTO_INCREMENT,
    `name` char(4) not null,    
    `introduction` varchar(50) not null,
    `date` date not null, 
    `address `  varchar(50) not null,
    `division` enum('미디어', 'IT', '금융', '검색','일자리', '쇼핑', 'FUN') not null,    
    PRIMARY KEY(`id`)
)AUTO_INCREMENT=6;

INSERT INTO `favorite_site` value (1, '네이버','네이버 검색사이트입니다','1999-05-01','https://www.naver.com','검색');
INSERT INTO `favorite_site` value (2, '멜론','멜론 음악사이트입니다', '1975-04-30','https://www.melon.com/','FUN');
INSERT INTO `favorite_site` value (3, '매일경제','매일경제 사이트입니다', '2000-11-20','https://www.mk.co.kr/','미디어');
INSERT INTO `favorite_site` value (4, '잡코리아','잡코리아 사이트입니다', '2015-10-20','https://www.incruit.com/','일자리');
INSERT INTO `favorite_site` value (5, '다음','다음 사이트입니다.', '2000-06-15','https://www.daum.net/','검색');
INSERT INTO `favorite_site` value (6, '쿠팡','쿠팡 사이트입니다.', '2010-08-10','https://www.coupang.com/','쇼핑');