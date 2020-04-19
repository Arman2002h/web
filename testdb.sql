-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Апр 19 2020 г., 11:03
-- Версия сервера: 5.7.24
-- Версия PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `testdb`
--
CREATE DATABASE IF NOT EXISTS `testdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `testdb`;

-- --------------------------------------------------------

--
-- Структура таблицы `brend`
--

CREATE TABLE `brend` (
  `id` int(11) NOT NULL,
  `name` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `brend`
--

INSERT INTO `brend` (`id`, `name`) VALUES
(1, 'brend1'),
(2, 'brend2');

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'catg1'),
(2, 'catg2');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `header` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `header_img` varchar(256) NOT NULL,
  `AdminInfo` text NOT NULL,
  `price` int(7) NOT NULL,
  `categorie` varchar(24) NOT NULL,
  `brend` varchar(24) NOT NULL,
  `excerpt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `header`, `content`, `header_img`, `AdminInfo`, `price`, `categorie`, `brend`, `excerpt`) VALUES
(1, 'header product 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2000, '1', '1', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(2, 'header product 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2500, '1', '2', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(3, 'header product 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2500, '2', '1', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(4, 'header product 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2000, '2', '2', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(5, 'header product 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2000, '1', '1', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(6, 'header product 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2500, '1', '2', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(7, 'header product 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2500, '2', '1', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(8, 'header product 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2000, '2', '2', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(9, 'header product 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2000, '1', '1', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(10, 'header product 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2000, '1', '2', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(11, 'header product 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2500, '2', '1', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(12, 'header product 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2500, '2', '2', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(13, 'header product 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2000, '1', '1', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'),
(14, 'header product 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos cumque? Odio dignissimos eveniet perferendis, aliquam error labore, est magni deserunt accusamus earum quam! Consequuntur delectus odit inventore quia quasi!', '', 'product is AVON COTOLOG', 2500, '1', '2', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `lname` varchar(24) NOT NULL,
  `fname` varchar(24) NOT NULL,
  `nickname` varchar(16) NOT NULL,
  `email` varchar(24) NOT NULL,
  `pass` varchar(32) NOT NULL,
  `status` varchar(12) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `lname`, `fname`, `nickname`, `email`, `pass`, `status`) VALUES
(10, 'Arman', 'Harutyunyan', 'lArmanl', 'Admin@mail.ru', 'a029d0df84eb5549c641e04a9ef389e5', 'admin');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `brend`
--
ALTER TABLE `brend`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `brend`
--
ALTER TABLE `brend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
