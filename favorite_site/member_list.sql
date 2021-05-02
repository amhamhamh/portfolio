DROP TABLE IF EXISTS `member_list`;
CREATE TABLE `member_list`  (
    `id` tinyint(3) not null AUTO_INCREMENT,
    `user_id` char(10) not null,
    `user_pw` char(100) not null,
    PRIMARY KEY(`id`)
)AUTO_INCREMENT=4;

INSERT INTO `member_list` value (1, 'user1', PASSWORD('1234'));