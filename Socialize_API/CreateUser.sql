CREATE TABLE [dbo].[Usuarios] (  
[id] INT IDENTITY (1, 1) NOT NULL,  
[nome] VARCHAR (60) NOT NULL,
[email] VARCHAR(100) NOT NULL,
[senha] VARCHAR(200) NOT NULL,
[celular] VARCHAR(15),
[sexo] CHAR(2),
[endereco] VARCHAR(150),
[numEndereco] VARCHAR(10),
[bairro] VARCHAR(50),
[cidade] VARCHAR(50),
[uf] CHAR(2),
[cep] VARCHAR(10),
[diaNasc] CHAR(2),
[mesNasc] CHAR(2),
[anoNasc] VARCHAR(4),
[ativo] CHAR(1),
PRIMARY KEY CLUSTERED ([id] ASC)  
);

INSERT INTO dbo.Usuarios (nome,email,senha,sexo,endereco,numEndereco,bairro,cidade,uf,cep,diaNasc,mesNasc,anoNasc,ativo)
VALUES ('Jonathan','jonathan.soares0912@gmail.com','1234','M','Av. Orosimbo Maia',2075,'Cambui','Campinas','SP','13024-035','09','12','1994','S')

SELECT * FROM Usuarios

CREATE TABLE [dbo].[Anunciantes] (  
[id] INT IDENTITY (1, 1) NOT NULL,  
[nomeTitular] VARCHAR (60) NOT NULL,
[email] VARCHAR(100) NOT NULL,
[senha] VARCHAR(200) NOT NULL,
[cpfTitular] varchar(14),
[razaoSocial] VARCHAR(255),
[cnpj] VARCHAR(18),
[nomeFantasia] VARCHAR(255),
[inscricaoEstadual] VARCHAR(14),
[telefone] VARCHAR(15),
[endereco] VARCHAR(150),
[numEndereco] VARCHAR(10),
[bairro] VARCHAR(50),
[cidade] VARCHAR(50),
[uf] CHAR(2),
[cep] VARCHAR(10),
[ativo] CHAR(1),
PRIMARY KEY CLUSTERED ([id] ASC)  
);