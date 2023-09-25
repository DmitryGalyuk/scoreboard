# Scoreboard library
This is the library that displays the live results of the **Football matches**.

It stores the result of matches in progress right now, allows to register and complete the match, update the scores and display the summary of matches in progress.

# Assumptions
## Business
- **No Tournaments, Single Participation**: A team cannot participate in two matches at the same time.
- **Absolute Score Updates**: Score updates use absolute values; no incremental updates.
- **Immutable Past**: A finished match cannot be restarted or updated.
- **Summary is a list of Match objects**: Since we develop the library the result produced by *summary()* is the list of objects, not the formatted string.

## Technical
- **Unique Team Names**: Team names are unique identifiers; no two teams share the same name.
- **Synchronous Operations**: All operations are synchronous due to in-memory storage.
- **In-Memory Storage**: All match data is stored in-memory.
- **Positive Integer Scores**: Scores are positive integers; no negative or fractional scores.
- **String Team Names**: Team names are strings and can't be empty, null, or undefined.
- **Sorting the matches with the same score**: Since the library is supposed to be simple, not distributed and keeping the data in memory, we can expect that timestamp for two matches can be equal. That is why we will store the static counter of matches and use it to order matches.
