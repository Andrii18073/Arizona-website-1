<?php

if(!class_exists('Config')) {
		class Config {	
		const DB_HOST = 'localhost'; //host mysql
		const DB_USER = ''; //user mysql
		const DB_PASS = ''; //pass mysql
		const DB_NAME = ''; //dbname mysql
	}
}

$config = array(

	'nameproject' => 'Arizona', //название проекта
	'url_group_vk' => 'https://vk.com/hackchik', // ссылка на сообщество ВК
	'admin_name' => 'Jack_Sweech', //имя для доступа в панель управления ( /panel )
	
	'url_site' => 'https://', //ссылка на ваш домен - в письмах используется
	'email_name' => 'support@hackchik.ru', //название почты для отправки писем
	
	'donat_x' => '2', //множитель для доната
	'donat_specials' => '0', //показывать специальное предложение в донате ( 1-вкл | 0-выкл )
	'donat_sale' => '0', //скидка на товары, если 0 то скидки нет. ( от 1 до 100 ) процентов. пример: цена товара 100 руб (скидка 25) = итог цена 75руб

	'smtp_enable' => '0', //1 - вкл | 0 - выкл ( если выключен то будет работать функция mail() )
	'smtp' => 'smtp.gmail.com', //smtp сервер почты ( smtp.yandex.ru || smtp.mail.ru || smtp.gmail.com || smtp.rambler.ru || serverXXX.hosting.reg.ru || smtp.beget.com ) - больше тут: https://clck.ru/eSZt9
	'smtp_port' => '587', //порт smtp сервера ( 25 || 465 || 587 )
	'smtp_secure' => 'TLS', //SSL или TLS
	'smtp_debug' => '0', // debugging: 0 = dont error, 1 = errors and messages, 2 = messages only
	'smtp_username' => 'login', //логин почты, зачастую это почтовый адрес
	'smtp_password' => 'pass' //пароль. если yandex то нужен пароль приложения!

);

?>