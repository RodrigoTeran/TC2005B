DELIMITER //
    CREATE PROCEDURE agregarWorkout(IN workoutId VARCHAR(96), IN workoutName VARCHAR(40), IN workoutDescription FLOAT)
    BEGIN
       	INSERT INTO workout(id, name, description) VALUES(workoutId, workoutName, workoutDescription);
	END;
//

DELIMITER //
	CREATE PROCEDURE eliminarWorkout(IN workoutId VARCHAR(96))
    BEGIN
    	DELETE FROM workout
        WHERE id = workoutId;
        
        DELETE FROM tag
        WHERE workoutId = workoutId;
    END;
//