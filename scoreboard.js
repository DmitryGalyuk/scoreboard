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
        // make sure team is not in active match
        this.matches.forEach(match => {
            if (match.homeTeam === homeTeam || match.awayTeam === homeTeam
                || match.homeTeam === awayTeam || match.awayTeam === awayTeam) {
                    throw new Error("Team can not participate in two matches simultaneously")
                }
        });

        this.matches.push(new Match(homeTeam, awayTeam));
    }

    updateScore(homeTeam, awayTeam, homeScore, awayScore) {
        const match = this.getMatch(homeTeam, awayTeam);
        match.homeScore = homeScore;
        match.awayScore = awayScore;
    }

    finishMatch(homeTeam, awayTeam) {
        if (!this.getMatch(homeTeam, awayTeam)) {
            throw new Error("Can not finish match that is not in progress")
        }
        
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