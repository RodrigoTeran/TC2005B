CREATE TRIGGER newLikeWorkout AFTER INSERT ON tag
 FOR EACH ROW INSERT INTO viewsWorkout (entryCount, userId, createdAt)
    VALUES (1, NEW.clientId, NOW())
    ON DUPLICATE KEY UPDATE entryCount = entryCount + 1;