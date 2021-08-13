-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Ago-2021 às 00:14
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `laboratorio`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cp_cdtb_unidade_unid`
--

CREATE TABLE `cp_cdtb_unidade_unid` (
  `ID_UNID_CD_UNIDADE` int(11) NOT NULL,
  `UNID_NO_UNIDADE` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cp_cdtb_unidade_unid`
--

INSERT INTO `cp_cdtb_unidade_unid` (`ID_UNID_CD_UNIDADE`, `UNID_NO_UNIDADE`) VALUES
(100, 'Alphaville'),
(284, 'Moinhos de Vento'),
(285, 'Nilo Peçanha'),
(500, 'Paraíso');

-- --------------------------------------------------------

--
-- Estrutura da tabela `fi_cdtb_ficha_fich`
--

CREATE TABLE `fi_cdtb_ficha_fich` (
  `ID_UNID_CD_UNIDADE_FICHA` int(11) NOT NULL,
  `ID_FICH_NR_FICHA` int(11) NOT NULL,
  `ID_CLIE_NR_CLIENTE` int(11) DEFAULT NULL,
  `FICH_DH_ABERTURA` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `fi_cdtb_ficha_fich`
--

INSERT INTO `fi_cdtb_ficha_fich` (`ID_UNID_CD_UNIDADE_FICHA`, `ID_FICH_NR_FICHA`, `ID_CLIE_NR_CLIENTE`, `FICH_DH_ABERTURA`) VALUES
(500, 1234562, 157, '2021-08-11 11:12:17'),
(100, 1547896, 232, '2021-08-11 11:12:17'),
(285, 2365874, 854, '2021-08-11 11:12:17'),
(100, 2547855, 171, '2021-08-11 11:12:17'),
(284, 5214578, 632, '2021-08-11 11:12:17');

-- --------------------------------------------------------

--
-- Estrutura da tabela `fi_cdtb_item_sub_item_ficha_item`
--

CREATE TABLE `fi_cdtb_item_sub_item_ficha_item` (
  `ID_UNID_CD_UNIDADE_FICHA` int(11) NOT NULL,
  `ID_FICH_NR_FICHA` int(11) NOT NULL,
  `ID_ITEM_NR_ITEM` int(11) NOT NULL,
  `ID_ITEM_NR_SUBITEM` int(11) NOT NULL,
  `PROD_SL_EXAME` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `fi_cdtb_item_sub_item_ficha_item`
--

INSERT INTO `fi_cdtb_item_sub_item_ficha_item` (`ID_UNID_CD_UNIDADE_FICHA`, `ID_FICH_NR_FICHA`, `ID_ITEM_NR_ITEM`, `ID_ITEM_NR_SUBITEM`, `PROD_SL_EXAME`) VALUES
(100, 1547896, 1, 0, 'CLAMDNA'),
(100, 1547896, 1, 0, 'GPT'),
(100, 1547896, 1, 0, 'K'),
(100, 2547855, 1, 0, 'AHAM'),
(100, 2547855, 2, 0, 'PROGEST'),
(100, 2547855, 3, 0, 'GOT'),
(284, 5214578, 1, 0, 'AHAM'),
(284, 5214578, 2, 0, 'GLIC'),
(284, 5214578, 3, 0, 'TOMO'),
(285, 2365874, 1, 0, 'CL'),
(285, 2365874, 2, 0, 'CLAMDNA'),
(285, 2365874, 3, 0, 'GLICPL'),
(500, 1234562, 1, 0, 'HT'),
(500, 1234562, 2, 0, 'K'),
(500, 1234562, 3, 0, 'P');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pe_cdtb_cliente_clie`
--

CREATE TABLE `pe_cdtb_cliente_clie` (
  `ID_CLIE_NR_CLIENTE` int(11) NOT NULL,
  `ID_PEFI_CD_PESSOA_FISICA` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pe_cdtb_cliente_clie`
--

INSERT INTO `pe_cdtb_cliente_clie` (`ID_CLIE_NR_CLIENTE`, `ID_PEFI_CD_PESSOA_FISICA`) VALUES
(171, 1),
(854, 2),
(632, 3),
(232, 4),
(157, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pe_cdtb_pessoa_fisica_pefi`
--

CREATE TABLE `pe_cdtb_pessoa_fisica_pefi` (
  `ID_PEFI_CD_PESSOA_FISICA` int(11) NOT NULL,
  `PEFI_NR_CPF` varchar(11) DEFAULT NULL,
  `PEFI_NR_RG` varchar(20) DEFAULT NULL,
  `PEFI_NO_NOME` varchar(50) DEFAULT NULL,
  `PEFI_NO_SOBRENOME` varchar(50) DEFAULT NULL,
  `PEFI_DH_NASCIMENTO` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pe_cdtb_pessoa_fisica_pefi`
--

INSERT INTO `pe_cdtb_pessoa_fisica_pefi` (`ID_PEFI_CD_PESSOA_FISICA`, `PEFI_NR_CPF`, `PEFI_NR_RG`, `PEFI_NO_NOME`, `PEFI_NO_SOBRENOME`, `PEFI_DH_NASCIMENTO`) VALUES
(1, '13213213250', '1245787478', 'CLIENTE', 'FLEURY 01', '1977-03-18 00:00:00'),
(2, '90225478525', '2547854787', 'CLIENTE', 'FLEURY 02', '1980-09-18 00:00:00'),
(3, '91247836214', '0120147805', 'CLIENTE', 'FLEURY 03', '1930-02-03 00:00:00'),
(4, '13201458741', '5214302510', 'CLIENTE', 'FLEURY 04', '1955-11-12 00:00:00'),
(5, '52365210214', '9512478541', 'CLIENTE', 'FLEURY 05', '2001-07-25 00:00:00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cp_cdtb_unidade_unid`
--
ALTER TABLE `cp_cdtb_unidade_unid`
  ADD PRIMARY KEY (`ID_UNID_CD_UNIDADE`);

--
-- Índices para tabela `fi_cdtb_ficha_fich`
--
ALTER TABLE `fi_cdtb_ficha_fich`
  ADD PRIMARY KEY (`ID_FICH_NR_FICHA`,`ID_UNID_CD_UNIDADE_FICHA`),
  ADD KEY `ID_CLIE_NR_CLIENTE` (`ID_CLIE_NR_CLIENTE`),
  ADD KEY `ID_UNID_CD_UNIDADE_FICHA` (`ID_UNID_CD_UNIDADE_FICHA`);

--
-- Índices para tabela `fi_cdtb_item_sub_item_ficha_item`
--
ALTER TABLE `fi_cdtb_item_sub_item_ficha_item`
  ADD PRIMARY KEY (`ID_UNID_CD_UNIDADE_FICHA`,`ID_FICH_NR_FICHA`,`ID_ITEM_NR_ITEM`,`ID_ITEM_NR_SUBITEM`,`PROD_SL_EXAME`),
  ADD KEY `fi_cdtb_item_sub_item_ficha_item_ibfk_1` (`ID_FICH_NR_FICHA`);

--
-- Índices para tabela `pe_cdtb_cliente_clie`
--
ALTER TABLE `pe_cdtb_cliente_clie`
  ADD PRIMARY KEY (`ID_CLIE_NR_CLIENTE`),
  ADD KEY `ID_PEFI_CD_PESSOA_FISICA` (`ID_PEFI_CD_PESSOA_FISICA`);

--
-- Índices para tabela `pe_cdtb_pessoa_fisica_pefi`
--
ALTER TABLE `pe_cdtb_pessoa_fisica_pefi`
  ADD PRIMARY KEY (`ID_PEFI_CD_PESSOA_FISICA`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `fi_cdtb_ficha_fich`
--
ALTER TABLE `fi_cdtb_ficha_fich`
  ADD CONSTRAINT `fi_cdtb_ficha_fich_ibfk_1` FOREIGN KEY (`ID_CLIE_NR_CLIENTE`) REFERENCES `pe_cdtb_cliente_clie` (`ID_CLIE_NR_CLIENTE`),
  ADD CONSTRAINT `fi_cdtb_ficha_fich_ibfk_2` FOREIGN KEY (`ID_UNID_CD_UNIDADE_FICHA`) REFERENCES `cp_cdtb_unidade_unid` (`ID_UNID_CD_UNIDADE`);

--
-- Limitadores para a tabela `fi_cdtb_item_sub_item_ficha_item`
--
ALTER TABLE `fi_cdtb_item_sub_item_ficha_item`
  ADD CONSTRAINT `fi_cdtb_item_sub_item_ficha_item_ibfk_1` FOREIGN KEY (`ID_FICH_NR_FICHA`) REFERENCES `fi_cdtb_ficha_fich` (`ID_FICH_NR_FICHA`);

--
-- Limitadores para a tabela `pe_cdtb_cliente_clie`
--
ALTER TABLE `pe_cdtb_cliente_clie`
  ADD CONSTRAINT `pe_cdtb_cliente_clie_ibfk_1` FOREIGN KEY (`ID_PEFI_CD_PESSOA_FISICA`) REFERENCES `pe_cdtb_pessoa_fisica_pefi` (`ID_PEFI_CD_PESSOA_FISICA`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
