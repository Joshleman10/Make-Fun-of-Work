DROP DATABASE IF EXISTS productivity;

CREATE DATABASE productivity;

DROP TABLE IF EXISTS moves;

CREATE TABLE moves(

ID INT NOT NULL AUTO_INCREMENT,
Warehouse INT NOT NULL,
Pallet_Tag_Number INT NOT NULL,
SKU_Number INT NOT NULL,
From_Zone VARCHAR (10),
From_Slot VARCHAR (20),
To_Zone VARCHAR (10),
To_Slot VARCHAR (20),
Move_Date DATE,
Move_Time TIME,
Moved_By VARCHAR (50),
PRIMARY KEY (ID)
);

INSERT INTO moves (Warehouse, Pallet_Tag_Number, SKU_Number,
 From_Zone, From_Slot, To_Zone, To_Slot, Move_Date, Move_Time, Moved_By)

 VALUES
 ("5100", "1234567", "123456", "RR", "44777C160","1A","M127A153","2019-08-16","00:02:12","ACRUZ"),
 ("5100", "1234568", "123456", "RR", "1362F129","1A","M128A156","2019-08-16","00:04:12","ACRUZ"),
 ("5100", "1234569", "123456", "RR", "2440B079","1A","M113A125","2019-08-16","00:06:12","ACRUZ"),
 ("5100", "1234570", "123456", "RR", "3967F138","1A","M102A103","2019-08-16","00:08:12","ACRUZ"),
 ("5100", "1234571", "123456", "RR", "3761B126","1A","M102A103","2019-08-16","00:10:12","ACRUZ"),
 ("5100", "1234572", "123456", "RR", "3672F149","1A","M102A103","2019-08-16","00:12:12","ACRUZ"),
 ("5100", "1234573", "123456", "RR", "1264D133","1A","M122A143","2019-08-16","00:14:12","ACRUZ"),
 ("5100", "1234574", "123456", "RR", "1322D046","1A","M122A143","2019-08-16","00:16:12","ACRUZ"),
 ("5100", "1234575", "123456", "RR", "1926A053","1A","M125A150","2019-08-16","00:18:12","ACRUZ"),
 ("5100", "1234576", "123456", "RR", "1152F107","1A","M125A150","2019-08-16","00:20:12","ACRUZ"),
 ("5100", "1234577", "123456", "RR", "1152F107","1A","M125A150","2019-08-16","00:22:12","ACRUZ");
 
 SELECT * FROM moves;