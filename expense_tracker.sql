-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: [Insert Date]
-- Server version: [Your MySQL Server Version]
-- PHP Version: [Your PHP Version]

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `expense_tracker`
--

CREATE DATABASE IF NOT EXISTS expense_tracker;
USE expense_tracker;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `amount` decimal(10, 2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `title`, `amount`) VALUES
(1, 'Groceries', 50.00),
(2, 'Internet Subscription', 60.00),
(3, 'Dinner', 35.00),
(4, 'Movie Tickets', 25.00),
(5, 'Gasoline', 40.00),
(6, 'Check Up', 200.00);

-- --------------------------------------------------------

-- 
-- Indexes for table `transactions`
--

ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT for table `transactions`
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
