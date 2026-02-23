export interface Team {
  slug: string;
  drafter: string;
  playerIds: string[];
}

export const teams: Team[] = [
  {
    slug: "chris-s",
    drafter: "Chris S",
    playerIds: ["ozzy", "savannah", "aubry", "emily", "kyle", "stephenie"],
  },
  {
    slug: "chris-l",
    drafter: "Chris L",
    playerIds: ["jonathan", "colby", "rick", "chrissy", "charlie", "angelina"],
  },
  {
    slug: "makayla",
    drafter: "Makayla",
    playerIds: ["jenna", "joe", "rizo", "mike", "coach", "q"],
  },
  {
    slug: "sami",
    drafter: "Sami",
    playerIds: ["genevieve", "christian", "dee", "cirie", "kamilla", "tiffany"],
  },
];
