import Match from "./match";

export default class Scoreboard {
    constructor() {
        this.matches = [];
    }

    getMatch(homeTeam, awayTeam) {
        const result = this.matches.find((m) => { return m.homeTeam === homeTeam && m.awayTeam === awayTeam });
        if (result)
            return result;
        throw new Error("Match not found");
    }

    startMatch(homeTeam, awayTeam) {
        this.matches.push(new Match(homeTeam, awayTeam));
    }

    updateScore(homeTeam, awayTeam, homeScore, awayScore) {
        const match = this.getMatch(homeTeam, awayTeam);
        match.homeScore = homeScore;
        match.awayScore = awayScore;
    }

    finishMatch(homeTeam, awayTeam) {
        this.matches.splice( 
            this.matches.findIndex((m) => { return m.homeTeam === homeTeam && m.awayTeam === awayTeam }),
            1
        );
    }

    summary() {
        // sorting inplace since no cases to preserve the original order
        this.matches.sort(
            (a, b) => 
                b.totalScore() - a.totalScore() 
            || b.matchNumber - a.matchNumber
        );

        return this.matches;
    }
}