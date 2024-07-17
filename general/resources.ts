import { CounterProps } from "@general/interfaces";
export const COUNTERS: CounterProps[] = [
    {
        initCount: 40,
        name: "Life",
    },
    {
        initCount: 0,
        name: "Aggro",
        isNegativeAllowed: true,
        color: "#ff6f00",
        isAggro: true,
    },
    {
        initCount: 0,
        name: "CT",
        color: "#00c853",
    },
    {
        initCount: 0,
        name: "CS",
        color: "#00b0ff",
    },
];

export const COLORS = ["black", "green", "blue", "red", "white"];

export const buttonSize = {
    sm: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    md: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    lg: {
        paddingVertical: 30,
        paddingHorizontal: 25,
    },
};

export const TABLES = {
    black: {
        0: {
            text: "All creatures get -N/-N until end of turn",
            ct: 0,
            cs: 0,
        },
        1: {
            text: "Creature (Deathtouch). Target opponent reveals their hand and discards N creature cards revealed this way",
            ct: 0,
            cs: 0,
        },
        2: {
            text: "Creature (+1/+1). Each player (including DIQ) discards N/4 cards.",
            ct: 0,
            cs: 0,
        },
        3: {
            text: "Destroy up to N/3 target creatures an opponent controls. Lose 1 life for each creature destroyed this way.",
            ct: 0,
            cs: 0,
        },
        4: {
            text: "Enchantment - 'Whenever you lose life, return a card at random from your graveyard to your hand.'",
            ct: 0,
            cs: 0,
        },
        5: {
            text: "Creature (Deathtouch, Flying). Target opponent loses N life.",
            ct: 0,
            cs: 0,
        },
        6: {
            text: "Sorcery - Each player sacrifices N creatures. D Creatures (Lifelink).",
            ct: 0,
            cs: 0,
        },
    },
    green: {
        0: {
            text: "2 Creatures (Reach, Can’t be blocked by creatures with flying).",
            ct: 0,
            cs: 0,
        },
        1: {
            text: "Creature (Hexproof). Put the top card of your library into play. Combat Trick.",
            ct: 1,
            cs: 0,
        },
        2: {
            text: "Destroy up to N/3 target artifacts, enchantments, or creatures with flying an opponent controls.",
            ct: 0,
            cs: 0,
        },
        3: {
            text: "Creature (+1/+1, Vigilance). Put N/2 cards from your graveyard into play.",
            ct: 0,
            cs: 0,
        },
        4: {
            text: "Creature (+N/2 / +N/2, Hexproof). Combat Trick. Combat Trick.",
            ct: 2,
            cs: 0,
        },
        5: {
            text: "N Creatures (+2/+2, Trample). Draw a card for each creature you control.",
            ct: 0,
            cs: 0,
        },
        6: {
            text: "D Creatures (+N/+N). Reveal the top card of your library and cast it as a spell of that color.",
            ct: 0,
            cs: 0,
        },
    },
    blue: {
        0: {
            text: "Creature (+0/+N, Flying). Counterspell.",
            ct: 0,
            cs: 1,
        },
        1: {
            text: "Creature (+1/+1). Draw 2 cards. N/3 Counterspells.",
            ct: 0,
            cs: "N/3",
        },
        2: {
            text: "Creature (Flying). Draw N/3 cards.",
            ct: 0,
            cs: 0,
        },
        3: {
            text: "At the beginning of target opponent's next upkeep, tap up N/2 target creatures they control. Counterspell.",
            ct: 0,
            cs: 1,
        },
        4: {
            text: "Artifact - `During each opponent's upkeep, they detain an undetained permanent they control.`",
            ct: 0,
            cs: 0,
        },
        5: {
            text: "Creature (+1/+1, Hexproof). Return up to N/2 target nonland permanents an opponent controls to their owners' hands.",
            ct: 0,
            cs: 0,
        },
        6: {
            text: "Creature (Unblockable). D Counterspells.",
            ct: 0,
            cs: "D",
        },
    },
    red: {
        0: {
            text: "3 Creatures (+2/+0). Combat Trick. Combat Trick.",
            ct: 2,
            cs: 0,
        },
        1: {
            text: "Deal 2*N damage to target creature with toughness less than or equal to 2*N an opponent controls.",
            ct: 0,
            cs: 0,
        },
        2: {
            text: "2 Creatures (Haste). Reveal the top N/2 cards of your library and put all non-mountains revealed this way into your graveyard.",
            ct: 0,
            cs: 0,
        },
        3: {
            text: "Enchantment - 'When a creature you control attacks, this permanent deals 1 damage to defending player.'",
            ct: 0,
            cs: 0,
        },
        4: {
            text: "Destroy target artifact an opponent controls. Then, destroy up to N/2 target artifacts an opponent controls.",
            ct: 0,
            cs: 0,
        },
        5: {
            text: "N/2 Creatures (+2/+0). Deal 1 damage to each player and each creature without flying. Creatures without flying can't block this turn.",
            ct: 0,
            cs: 0,
        },
        6: {
            text: "N Creatures (Menace). Deal D*2 damage to target opponent or planeswalker an opponent controls.",
            ct: 0,
            cs: 0,
        },
    },
    white: {
        0: {
            text: "Destroy all creatures. They can't be regenerated.",
            ct: 0,
            cs: 0,
        },
        1: {
            text: "Gain N + 4 life. Combat Trick.",
            ct: 1,
            cs: 0,
        },
        2: {
            text: "2 Creatures (+1/+1).",
            ct: 0,
            cs: 0,
        },
        3: {
            text: "N/2 Creatures (+0/+2). Prevent all damage that would be dealt to you until your next turn.",
            ct: 0,
            cs: 0,
        },
        4: {
            text: "Creature. Destroy up to N/3 target enchantments, artifacts, or tapped creatures an opponent controls. Combat Trick.",
            ct: 1,
            cs: 0,
        },
        5: {
            text: "N Creatures (Vigilance, Flying). Exile target nonland permanent an opponent controls until a creature DIQ controls leaves the battlefield.",
            ct: 0,
            cs: 0,
        },
        6: {
            text: "2*N Creatures (Indestructible). Choose D colors DIQ has not chosen before. DIQ's creatures gain protection from the chosen colors.",
            ct: 0,
            cs: 0,
        },
    },
};

export const otherTables = {
    cs: {
        0: {
            text: "No Effect",
        },
        1: {
            text: "Counter Target Spell or Ability",
        },
        2: {
            text: "Counter Target Spell. (Treat this as a 'No Effect' if this roll was triggered by an ability)",
        },
        3: {
            text: "Counter target spell or non-mana ability. If a spell is countered this way, exile it. If an ability is countered this way, return the source of that ability to its owner’s hand.",
        },
    },
    ct: {
        0: {
            text: "No effect.",
        },
        1: {
            text: "Untap target creature you control. It gains +2/+2, reach, and haste until end of turn. It must be blocked this turn if able.",
        },
        2: {
            text: "Creatures you control gain indestructible until end of turn. Until end of turn, whenever a creature you control blocks, target creature it blocks loses all abilities until end of turn.",
        },
        3: {
            text: "Creatures you control gain wither and reach until end of turn.",
        },
        4: {
            text: "Create X creatures, where X is the number of attacking creatures. They each enter the battlefield blocking a different creature attacking you. Sacrifice them at the beginning of your next upkeep.",
        },
    },
};
