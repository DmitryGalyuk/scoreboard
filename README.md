# Scoreboard library
This is the library that displays the live results of the **Football matches**.

It stores the result of matches in progress right now, allows to register and complete the match, update the scores and display the summary of matches in progress.

# Assumptions
## Business
- **No Tournaments, Single Participation**: A team cannot participate in two matches at the same time.
- **Absolute Score Updates**: Score updates use absolute values; no incremental updates.
- **Immutable Past**: A finished match cannot be restarted or updated.
- **Start Time Uniqueness**: Matches with the same score are sorted by start time.
- **No Concurrent Match Starts**: Concurrent match starts at the same exact millisecond may have unpredictable ordering.

## Technical
- **Unique Team Names**: Team names are unique identifiers; no two teams share the same name.
- **Synchronous Operations**: All operations are synchronous due to in-memory storage.
- **In-Memory Storage**: All match data is stored in-memory.
- **Positive Integer Scores**: Scores are positive integers; no negative or fractional scores.
- **String Team Names**: Team names are strings and can't be empty, null, or undefined.
