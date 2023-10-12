export interface EsportsData {
  events: Event[];
}

export interface Event {
  awayScore: AwayScore;
  awayTeam: AwayTeam;
  bestOf?: number;
  changes: Changes;
  coverage: number;
  crowdsourcingDataDisplayEnabled: boolean;
  customId: string;
  eventType?: string;
  finalResultOnly: boolean;
  hasGlobalHighlights: boolean;
  homeScore: HomeScore;
  homeTeam: HomeTeam;
  id: number;
  slug: string;
  startTimestamp: number;
  status: Status;
  time: Time;
  tournament: Tournament;
  winnerCode?: number;
  aggregatedWinnerCode?: number;
  lastPeriod?: string;
  roundInfo?: RoundInfo;
}

export interface AwayScore {
  current: number;
  display: number;
  period1: number;
  period2?: number;
  normaltime?: number;
}

export interface AwayTeam {
  country: Country;
  id: number;
  name: string;
  nameCode: string;
  national: boolean;
  shortName: string;
  slug: string;
  sport: Sport;
  subTeams: any[];
  teamColors: TeamColors;
  type: number;
  userCount: number;
}

export interface Country {
  alpha2: string;
  name: string;
}

export interface Sport {
  id: number;
  name: string;
  slug: string;
}

export interface TeamColors {
  primary: string;
  secondary: string;
  text: string;
}

export interface Changes {
  changeTimestamp: number;
  changes?: string[];
}

export interface HomeScore {
  current: number;
  display: number;
  period1: number;
  period2?: number;
  normaltime?: number;
}

export interface HomeTeam {
  country: Country2;
  id: number;
  name: string;
  nameCode: string;
  national: boolean;
  shortName: string;
  slug: string;
  sport: Sport2;
  subTeams: any[];
  teamColors: TeamColors2;
  type: number;
  userCount: number;
}

export interface Country2 {
  alpha2?: string;
  name?: string;
}

export interface Sport2 {
  id: number;
  name: string;
  slug: string;
}

export interface TeamColors2 {
  primary: string;
  secondary: string;
  text: string;
}

export interface Status {
  code: number;
  description: string;
  type: string;
}

export interface Time {
  currentPeriodStartTimestamp: number;
}

export interface Tournament {
  category: Category;
  id: number;
  name: string;
  priority: number;
  slug: string;
  uniqueTournament: UniqueTournament;
}

export interface Category {
  flag: string;
  id: number;
  name: string;
  slug: string;
  sport: Sport3;
}

export interface Sport3 {
  id: number;
  name: string;
  slug: string;
}

export interface UniqueTournament {
  category: Category2;
  country: Country3;
  crowdsourcingEnabled: boolean;
  displayInverseHomeAwayTeams: boolean;
  hasEventPlayerStatistics: boolean;
  hasPerformanceGraphFeature: boolean;
  id: number;
  name: string;
  slug: string;
  userCount: number;
}

export interface Category2 {
  flag: string;
  id: number;
  name: string;
  slug: string;
  sport: Sport4;
}

export interface Sport4 {
  id: number;
  name: string;
  slug: string;
}

export interface Country3 {}

export interface RoundInfo {
  round: number;
}
