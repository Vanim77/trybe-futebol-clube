interface ILeaderboard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number
}

const orderArray = (array: ILeaderboard[]) => {
  array.sort((a, b) => {
    // Métodos de desempate abaixo
    // 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols contra.

    let compare = b.totalPoints - a.totalPoints;

    if (compare === 0) {
      compare = b.goalsBalance - a.goalsBalance;
      if (compare === 0) {
        compare = b.goalsFavor - a.goalsFavor;
        if (compare === 0) {
          compare = b.goalsOwn - a.goalsOwn;
        }
      }
    }

    return compare;
  });
};

export default orderArray;
