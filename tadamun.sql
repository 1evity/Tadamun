-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2024 at 06:31 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tadamun`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `FeedbackID` int(11) NOT NULL,
  `V_UserName` varchar(50) DEFAULT NULL,
  `Feedback` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`FeedbackID`, `V_UserName`, `Feedback`) VALUES
(1, 'charitySupporter1', 'I appreciate the work the charity is doing to help those in need.'),
(2, 'helpingHands22', 'The website is very informative and makes it easy to donate.'),
(3, 'kindHeartedDonor', 'Keep up the good work! Your efforts are making a difference in many lives.'),
(4, 'caringContributor', 'I have been following your charity for a while now, and I am impressed by the impact you have.'),
(5, 'givingBack123', 'The stories of the people you have helped are truly inspiring.'),
(6, 'compassionateSoul', 'The donation process was smooth, and Im glad to be able to contribute to such a worthy cause.'),
(7, 'supportiveCitizen', 'Im proud to support an organization that prioritizes transparency and accountability in their work.');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `userName` varchar(50) NOT NULL,
  `userPassword` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`userName`, `userPassword`, `email`) VALUES
('adventureseeker88', 'Adv3nture!', 'adventureseeker88@example.com'),
('bookworm221', 'B00kL0ver!', 'bookworm221@emailprovider.com'),
('cooluser123', 'Pa$$w0rd123', 'cooluser123@example.com'),
('fitnessjunkie77', 'Fitn3ssPass!', 'fitnessjunkie77@example.com'),
('gamingfanatic22', 'G@m3rP@ssw0rd!', 'gamingfanatic22@emailprovider.com'),
('musiclover456', 'MUsic4ever!', 'musiclover456@example.com'),
('techgeek789', 'T3chG33kP@ss', 'techgeek789@emailprovider.com');

-- --------------------------------------------------------

--
-- Table structure for table `questionnaire`
--

CREATE TABLE `questionnaire` (
  `questionID` int(11) NOT NULL,
  `questionText` varchar(250) DEFAULT NULL,
  `visitorUsername` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questionnaire`
--

INSERT INTO `questionnaire` (`questionID`, `questionText`, `visitorUsername`) VALUES
(1, 'How can I get involved in your charity projects?', 'interestedSupporter1'),
(2, 'What percentage of my donation goes directly to the cause?', 'curiousDonor22'),
(3, 'Do you provide opportunities for corporate partnerships?', 'businessOwner123'),
(4, 'Can I organize a fundraising event for your charity?', 'fundraisingEnthusiast'),
(5, 'How do you ensure transparency in your charity operations?', 'accountabilityAdvocate'),
(6, 'What are the current challenges your charity is facing?', 'concernedCitizen456'),
(7, 'How can I sponsor a specific project or initiative?', 'projectSupporter789');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`FeedbackID`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`userName`);

--
-- Indexes for table `questionnaire`
--
ALTER TABLE `questionnaire`
  ADD PRIMARY KEY (`questionID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
