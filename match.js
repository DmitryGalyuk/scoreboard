export default class Match {
    constructor(homeTeam, awayTeam) {
        if (
            typeof homeTeam !== "string" || typeof awayTeam !== "string"
            || homeTeam.length === 0 || awayTeam.length === 0
        ) {
            throw new Error("Team name is mandatory and should be string")
        }
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = 0;
        this.awayScore = 0;
    }

    updateScore(homeScore, awayScore) {
        if (typeof homeScore !== "number" || typeof awayScore !== "number"
            || !Number.isInteger(homeScore) || !Number.isInteger(awayScore)
            || homeScore < 0 || awayScore < 0
        ) {
            throw new Error("Scores must be non-negative integers, both values are mandatory mandatory");
        }
        this.homeScore = homeScore;
        this.awayScore = awayScore
    }
}