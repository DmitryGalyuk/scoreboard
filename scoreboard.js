import Match from "./match";

export default class Scoreboard {
    constructor() {
        this.matches = [];
    }

    getMatch(homeTeam, awayTeam) {
        const result = this.matches.find((m)=>{return m.homeTeam===homeTeam && m.awayTeam===awayTeam});
        if (result)
            return result;
        throw new Error("Match not found");
    }

    startMatch(homeTeam, awayTeam) {
        this.matches.push(new Match(homeTeam, awayTeam));
    }
}