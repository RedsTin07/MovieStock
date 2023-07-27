const movies = [
  {
    adult: false,
    backdrop_path: "/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg",
    genre_ids: [28, 80, 53],
    id: 385687,
    original_language: "en",
    original_title: "Fast X",
    overview:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    popularity: 4052.245,
    poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    release_date: "2023-05-17",
    title: "Fast X",
    video: false,
    vote_average: 7.3,
    vote_count: 2141,
  },
  {
    adult: false,
    backdrop_path: "/fhquRW28vRZHr26orSaFFnhYIA0.jpg",
    genre_ids: [28, 53],
    id: 697843,
    original_language: "en",
    original_title: "Extraction 2",
    overview:
      "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
    popularity: 2167.075,
    poster_path: "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    release_date: "2023-06-09",
    title: "Extraction 2",
    video: false,
    vote_average: 7.6,
    vote_count: 948,
  },
  {
    adult: false,
    backdrop_path: "/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
    genre_ids: [28, 12, 16, 878],
    id: 569094,
    original_language: "en",
    original_title: "Spider-Man: Across the Spider-Verse",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    popularity: 1855.44,
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    release_date: "2023-05-31",
    title: "Spider-Man: Across the Spider-Verse",
    video: false,
    vote_average: 8.6,
    vote_count: 1823,
  },
  {
    adult: false,
    backdrop_path: "/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg",
    genre_ids: [28, 53, 80],
    id: 603692,
    original_language: "en",
    original_title: "John Wick: Chapter 4",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    popularity: 1760.415,
    poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    release_date: "2023-03-22",
    title: "John Wick: Chapter 4",
    video: false,
    vote_average: 7.9,
    vote_count: 3362,
  },
  {
    adult: false,
    backdrop_path: "/pNOccytgkGuyofTLmh1sqEfTJuE.jpg",
    genre_ids: [10749, 18],
    id: 1010581,
    original_language: "es",
    original_title: "Culpa mía",
    overview:
      "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
    popularity: 1507.198,
    poster_path: "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
    release_date: "2023-06-08",
    title: "My Fault",
    video: false,
    vote_average: 8.3,
    vote_count: 910,
  },
  {
    adult: false,
    backdrop_path: "/nniZPBIfrep9wbx0l1529RHXeD8.jpg",
    genre_ids: [16, 10751, 12, 14, 35],
    id: 502356,
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    popularity: 1444.934,
    poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    release_date: "2023-04-05",
    title: "The Super Mario Bros. Movie",
    video: false,
    vote_average: 7.8,
    vote_count: 5188,
  },
  {
    adult: false,
    backdrop_path: "/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
    genre_ids: [28, 12, 878],
    id: 667538,
    original_language: "en",
    original_title: "Transformers: Rise of the Beasts",
    overview:
      "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    popularity: 1342.807,
    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    release_date: "2023-06-06",
    title: "Transformers: Rise of the Beasts",
    video: false,
    vote_average: 7.1,
    vote_count: 485,
  },
  {
    adult: false,
    backdrop_path: "/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg",
    genre_ids: [16, 35, 10751, 14, 10749],
    id: 976573,
    original_language: "en",
    original_title: "Elemental",
    overview:
      "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    popularity: 1178.288,
    poster_path: "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
    release_date: "2023-06-14",
    title: "Elemental",
    video: false,
    vote_average: 7.4,
    vote_count: 223,
  },
  {
    adult: false,
    backdrop_path: "/osnvZffaZymubHiBkOsIFd8Y3Re.jpg",
    genre_ids: [28, 27, 53],
    id: 986070,
    original_language: "en",
    original_title: "The Wrath of Becky",
    overview:
      "Two years after she escaped a violent attack on her family, 16-year-old Becky attempts to rebuild her life in the care of an older woman -- a kindred spirit named Elena. However, when a violent group known as the Noble Men break into their home, attack them and take their beloved dog, Becky must return to her old ways to protect herself and her loved ones.",
    popularity: 1016.238,
    poster_path: "/3LShl6EwqptKIVq6NWOZ0FbZHEe.jpg",
    release_date: "2023-05-26",
    title: "The Wrath of Becky",
    video: false,
    vote_average: 6.5,
    vote_count: 45,
  },
  {
    adult: false,
    backdrop_path: "/xDEVdWduhRdNS4PzA6wif6FjUQb.jpg",
    genre_ids: [28, 14, 53],
    id: 1036561,
    original_language: "en",
    original_title: "Shadow Master",
    overview:
      "After being slain by a group of criminals, a man is reborn with animal-like superpowers and makes it his mission to right the wrongs of his city.",
    popularity: 978.975,
    poster_path: "/67ZsRKbItt6B1yHlsJKgfPWOyuJ.jpg",
    release_date: "2022-11-03",
    title: "Shadow Master",
    video: false,
    vote_average: 7,
    vote_count: 43,
  },
  {
    adult: false,
    backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    genre_ids: [28, 878, 12],
    id: 447365,
    original_language: "en",
    original_title: "Guardians of the Galaxy Vol. 3",
    overview:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    popularity: 934.598,
    poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    release_date: "2023-05-03",
    title: "Guardians of the Galaxy Vol. 3",
    video: false,
    vote_average: 8.1,
    vote_count: 2123,
  },
  {
    adult: false,
    backdrop_path: "/fEe2csLOUsTyaLdCccVJfFeJzhx.jpg",
    genre_ids: [878, 28, 12],
    id: 298618,
    original_language: "en",
    original_title: "The Flash",
    overview:
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    popularity: 891.684,
    poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    release_date: "2023-06-13",
    title: "The Flash",
    video: false,
    vote_average: 6.7,
    vote_count: 658,
  },
  {
    adult: false,
    backdrop_path: "/4pNlHx6ytdYBDs94PgcS0wQkbc4.jpg",
    genre_ids: [878, 12, 28],
    id: 76600,
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    popularity: 856.036,
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    release_date: "2022-12-14",
    title: "Avatar: The Way of Water",
    video: false,
    vote_average: 7.7,
    vote_count: 8877,
  },
  {
    adult: false,
    backdrop_path: "/ribiMu3iINPxDkofErPxe8jQ8L0.jpg",
    genre_ids: [12, 10751, 14, 10749],
    id: 447277,
    original_language: "en",
    original_title: "The Little Mermaid",
    overview:
      "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    popularity: 790.003,
    poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    release_date: "2023-05-18",
    title: "The Little Mermaid",
    video: false,
    vote_average: 6.2,
    vote_count: 784,
  },
  {
    adult: false,
    backdrop_path: "/vQ5T84t8h4N2xAswNFW9fkVIyZq.jpg",
    genre_ids: [9648, 53, 878],
    id: 536437,
    original_language: "en",
    original_title: "Hypnotic",
    overview:
      "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
    popularity: 781.968,
    poster_path: "/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
    release_date: "2023-05-11",
    title: "Hypnotic",
    video: false,
    vote_average: 6.4,
    vote_count: 253,
  },
  {
    adult: false,
    backdrop_path: "/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg",
    genre_ids: [27, 53],
    id: 890771,
    original_language: "en",
    original_title: "The Black Demon",
    overview:
      "Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
    popularity: 717.122,
    poster_path: "/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
    release_date: "2023-04-26",
    title: "The Black Demon",
    video: false,
    vote_average: 6.3,
    vote_count: 236,
  },
  {
    adult: false,
    backdrop_path: "/sFGENDTUNOuDbVufxksCkrDtuaT.jpg",
    genre_ids: [53, 27],
    id: 713704,
    original_language: "en",
    original_title: "Evil Dead Rise",
    overview:
      "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    popularity: 695.239,
    poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    release_date: "2023-04-12",
    title: "Evil Dead Rise",
    video: false,
    vote_average: 7,
    vote_count: 1773,
  },
  {
    adult: false,
    backdrop_path: "/mmSSn8Yn3GbJv9MsSnD4J1LnN9l.jpg",
    genre_ids: [10749, 18, 35],
    id: 988078,
    original_language: "es",
    original_title: "A través del mar",
    overview:
      "After a year of long-distance, Raquel and Ares reunite on a steamy beach trip. Faced with fresh flirtations and insecurities, will their love prevail?",
    popularity: 687.447,
    poster_path: "/dAyJqJ8KoglZysttC6BfVmDFQUt.jpg",
    release_date: "2023-06-23",
    title: "Through My Window: Across the Sea",
    video: false,
    vote_average: 6.6,
    vote_count: 227,
  },
  {
    adult: false,
    backdrop_path: "/rzdPqYx7Um4FUZeD8wpXqjAUcEm.jpg",
    genre_ids: [18, 10749],
    id: 597,
    original_language: "en",
    original_title: "Titanic",
    overview:
      "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
    popularity: 662.213,
    poster_path: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    release_date: "1997-11-18",
    title: "Titanic",
    video: false,
    vote_average: 7.9,
    vote_count: 23103,
  },
  {
    adult: false,
    backdrop_path: "/b8tX15xHPai3bYeKYgAZikANTGl.jpg",
    genre_ids: [10752, 28, 53],
    id: 882569,
    original_language: "en",
    original_title: "Guy Ritchie's The Covenant",
    overview:
      "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
    popularity: 650.163,
    poster_path: "/kVG8zFFYrpyYLoHChuEeOGAd6Ru.jpg",
    release_date: "2023-04-19",
    title: "Guy Ritchie's The Covenant",
    video: false,
    vote_average: 7.8,
    vote_count: 809,
  },
  {
    adult: false,
    backdrop_path: "/gMJngTNfaqCSCqGD4y8lVMZXKDn.jpg",
    genre_ids: [28, 12, 878],
    id: 640146,
    original_language: "en",
    original_title: "Ant-Man and the Wasp: Quantumania",
    overview:
      "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    popularity: 608.509,
    poster_path: "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
    release_date: "2023-02-15",
    title: "Ant-Man and the Wasp: Quantumania",
    video: false,
    vote_average: 6.5,
    vote_count: 3415,
  },
  {
    adult: false,
    backdrop_path: "/rogeBJK44LtWynOqzMFmEF30T80.jpg",
    genre_ids: [16, 14, 28, 12],
    id: 812225,
    original_language: "ja",
    original_title: "映画 ブラッククローバー 魔法帝の剣",
    overview:
      "As a lionhearted boy who can’t wield magic strives for the title of Wizard King, four banished Wizard Kings of yore return to crush the Clover Kingdom.",
    popularity: 558.549,
    poster_path: "/9YEGawvjaRgnyW6QVcUhFJPFDco.jpg",
    release_date: "2023-06-16",
    title: "Black Clover: Sword of the Wizard King",
    video: false,
    vote_average: 8.5,
    vote_count: 130,
  },
  {
    adult: false,
    backdrop_path: "/gno3ABJacqieb0GloIwNCihuwYO.jpg",
    genre_ids: [28, 53, 80, 18],
    id: 848730,
    original_language: "es",
    original_title: "Los bastardos",
    overview: "",
    popularity: 532.478,
    poster_path: "/ffDHUOjHNfqSizXFA7oymCCckE8.jpg",
    release_date: "2023-03-30",
    title: "Los bastardos",
    video: false,
    vote_average: 6.2,
    vote_count: 10,
  },
  {
    adult: false,
    backdrop_path: "/wXFxYH14m3JdsCpoWDyqgDF7vVw.jpg",
    genre_ids: [16, 35, 10751, 14],
    id: 568124,
    original_language: "en",
    original_title: "Encanto",
    overview:
      "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    popularity: 513.632,
    poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    release_date: "2021-10-13",
    title: "Encanto",
    video: false,
    vote_average: 7.6,
    vote_count: 8315,
  },
  {
    adult: false,
    backdrop_path: "/hUVJVsKP7Fu2kGdWXZKbEAXRMNM.jpg",
    genre_ids: [35, 28, 14],
    id: 594767,
    original_language: "en",
    original_title: "Shazam! Fury of the Gods",
    overview:
      'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
    popularity: 506.323,
    poster_path: "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
    release_date: "2023-03-15",
    title: "Shazam! Fury of the Gods",
    video: false,
    vote_average: 6.7,
    vote_count: 2054,
  },
  {
    adult: false,
    backdrop_path: "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
    genre_ids: [28, 10752],
    id: 840326,
    original_language: "fi",
    original_title: "Sisu",
    overview:
      "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
    popularity: 502.066,
    poster_path: "/ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
    release_date: "2023-01-27",
    title: "Sisu",
    video: false,
    vote_average: 7.4,
    vote_count: 794,
  },
  {
    adult: false,
    backdrop_path: "/bJFKGpUbSFSoXcIZcAgtAi3rtc7.jpg",
    genre_ids: [27, 53],
    id: 758323,
    original_language: "en",
    original_title: "The Pope's Exorcist",
    overview:
      "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    popularity: 494.502,
    poster_path: "/gNPqcv1tAifbN7PRNgqpzY8sEJZ.jpg",
    release_date: "2023-04-05",
    title: "The Pope's Exorcist",
    video: false,
    vote_average: 7.2,
    vote_count: 1487,
  },
  {
    adult: false,
    backdrop_path: "/thyP4ymuYo846DzMbghwja6lbY0.jpg",
    genre_ids: [35, 28, 80],
    id: 647250,
    original_language: "en",
    original_title: "The Machine",
    overview:
      "Bert Kreischer faces a familial crisis and the arrival of his estranged father when the ghost of his booze-soaked past arrives: a murderous mobster hellbent on kidnapping Bert back to the motherland to atone for his crimes. Together, he and his father must retrace the steps of his younger self in the midst of a war between a sociopathic crime family while they attempt to find common ground.",
    popularity: 491.483,
    poster_path: "/x9dGI7LIOMMlFzyIBUta1svft2Y.jpg",
    release_date: "2023-05-25",
    title: "The Machine",
    video: false,
    vote_average: 6.2,
    vote_count: 34,
  },
  {
    adult: false,
    backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
    genre_ids: [16, 10751, 14, 12, 35],
    id: 315162,
    original_language: "en",
    original_title: "Puss in Boots: The Last Wish",
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    popularity: 484.507,
    poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    release_date: "2022-12-07",
    title: "Puss in Boots: The Last Wish",
    video: false,
    vote_average: 8.3,
    vote_count: 5837,
  },
  {
    adult: false,
    backdrop_path: "/lIbSfonygV4nS09jy80QKGGcYva.jpg",
    genre_ids: [35, 18],
    id: 626332,
    original_language: "en",
    original_title: "Flamin' Hot",
    overview:
      "The inspiring true story of Richard Montañez, the Frito Lay janitor who channeled his Mexican American heritage and upbringing to turn the iconic Flamin’ Hot Cheetos into a snack that disrupted the food industry and became a global pop culture phenomenon.",
    popularity: 467.451,
    poster_path: "/a7KyFMPXj0iY4EoLq1PIGU1WJPw.jpg",
    release_date: "2023-03-11",
    title: "Flamin' Hot",
    video: false,
    vote_average: 8.2,
    vote_count: 263,
  },
  {
    adult: false,
    backdrop_path: "/1ntePsIqeklfmrQJqZPncCydsqY.jpg",
    genre_ids: [28, 12, 16, 878],
    id: 324857,
    original_language: "en",
    original_title: "Spider-Man: Into the Spider-Verse",
    overview:
      'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
    popularity: 461.232,
    poster_path: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    release_date: "2018-12-06",
    title: "Spider-Man: Into the Spider-Verse",
    video: false,
    vote_average: 8.4,
    vote_count: 13351,
  },
  {
    adult: false,
    backdrop_path: "/j0IobR8VH9x0Y5koAcnB7VkPW04.jpg",
    genre_ids: [12, 28],
    id: 335977,
    original_language: "en",
    original_title: "Indiana Jones and the Dial of Destiny",
    overview:
      "Finding himself in a new era, approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
    popularity: 450.885,
    poster_path: "/y4zAHCRmS1wof5bUmEM9CZOYQ04.jpg",
    release_date: "2023-06-28",
    title: "Indiana Jones and the Dial of Destiny",
    video: false,
    vote_average: 6,
    vote_count: 52,
  },
  {
    adult: false,
    backdrop_path: "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
    genre_ids: [18, 28],
    id: 677179,
    original_language: "en",
    original_title: "Creed III",
    overview:
      "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
    popularity: 445.262,
    poster_path: "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    release_date: "2023-03-01",
    title: "Creed III",
    video: false,
    vote_average: 7.2,
    vote_count: 1695,
  },
  {
    adult: false,
    backdrop_path: "/dTsOvK19Brm1u2p06K7qlTyKHIi.jpg",
    genre_ids: [28, 10752, 53],
    id: 1074034,
    original_language: "en",
    original_title: "Ambush",
    overview:
      "When a small outpost is ambushed, a US Army squad must take the battle below ground on a high-stakes mission in a new type of warfare the likes of which they have never seen.",
    popularity: 428.471,
    poster_path: "/3QjtDMS7PB4SMj0nAJQiE86Lo0w.jpg",
    release_date: "2023-02-24",
    title: "Ambush",
    video: false,
    vote_average: 5.7,
    vote_count: 19,
  },
  {
    adult: false,
    backdrop_path: "/cKE9qZqYtF4jimf0GFOqKfy7NEU.jpg",
    genre_ids: [35, 10749],
    id: 884605,
    original_language: "en",
    original_title: "No Hard Feelings",
    overview:
      "On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.",
    popularity: 425.113,
    poster_path: "/5xeNPGbM8ImVdJACUoGpXT8Pxx3.jpg",
    release_date: "2023-06-15",
    title: "No Hard Feelings",
    video: false,
    vote_average: 6.3,
    vote_count: 83,
  },
  {
    adult: false,
    backdrop_path: "/kdbLf3aTQsEXqYlH9vA4fzmnSFz.jpg",
    genre_ids: [10752, 18, 28],
    id: 228150,
    original_language: "en",
    original_title: "Fury",
    overview:
      "In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
    popularity: 390.638,
    poster_path: "/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
    release_date: "2014-10-15",
    title: "Fury",
    video: false,
    vote_average: 7.5,
    vote_count: 10818,
  },
  {
    adult: false,
    backdrop_path: "/fIlmxFWplRXTACPoGnOuwIwzBuF.jpg",
    genre_ids: [28, 35, 80],
    id: 879444,
    original_language: "en",
    original_title: "Accident Man: Hitman's Holiday",
    overview:
      "The Accident Man is back, and this time he must best the top assassins in the world to protect the ungrateful son of a mafia boss, save the life of his only friend and rekindle his relationship with his maniacal father figure.",
    popularity: 374.963,
    poster_path: "/npW9nfL7F3ZVpaCpabqo98KTLw6.jpg",
    release_date: "2022-10-14",
    title: "Accident Man: Hitman's Holiday",
    video: false,
    vote_average: 6.5,
    vote_count: 86,
  },
  {
    adult: false,
    backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    popularity: 366.742,
    poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    release_date: "2021-12-15",
    title: "Spider-Man: No Way Home",
    video: false,
    vote_average: 8,
    vote_count: 17695,
  },
  {
    adult: false,
    backdrop_path: "/sWulI556AJZ1DAQnxyAvnAAY6nd.jpg",
    genre_ids: [16, 10751],
    id: 73723,
    original_language: "en",
    original_title: "The Lorax",
    overview:
      "A 12-year-old boy searches for the one thing that will enable him to win the affection of the girl of his dreams. To find it he must discover the story of the Lorax, the grumpy yet charming creature who fights to protect his world.",
    popularity: 354.437,
    poster_path: "/tePFnZFw5JvjwjQjaKkqDPNMLPU.jpg",
    release_date: "2012-03-01",
    title: "The Lorax",
    video: false,
    vote_average: 6.5,
    vote_count: 3072,
  },
  {
    adult: false,
    backdrop_path: "/8NFDAkEFbKVQKYIh61JAxO78yFa.jpg",
    genre_ids: [28, 35, 10749],
    id: 868759,
    original_language: "en",
    original_title: "Ghosted",
    overview:
      "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
    popularity: 349.589,
    poster_path: "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
    release_date: "2023-04-18",
    title: "Ghosted",
    video: false,
    vote_average: 7.1,
    vote_count: 1039,
  },
  {
    adult: false,
    backdrop_path: "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
    genre_ids: [27, 14],
    id: 346364,
    original_language: "en",
    original_title: "It",
    overview:
      "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
    popularity: 347.596,
    poster_path: "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    release_date: "2017-09-06",
    title: "It",
    video: false,
    vote_average: 7.2,
    vote_count: 17710,
  },
  {
    adult: false,
    backdrop_path: "/xkXsV1WOiKfAJ6dzXiavdwsZ3E2.jpg",
    genre_ids: [28, 53, 27],
    id: 799379,
    original_language: "ko",
    original_title: "늑대사냥",
    overview:
      "While under heavily armed guard, the dangerous convicts aboard a cargo ship unite in a coordinated escape attempt that soon escalates into a bloody, all-out riot. But as the fugitives continue their brutal campaign of terror, they soon discover that not even the most vicious among them is safe from the horror they unknowingly unleashed from the darkness below deck.",
    popularity: 334.845,
    poster_path: "/dniWicB6fa7NvpGbguxWlNPMc5f.jpg",
    release_date: "2022-09-21",
    title: "Project Wolf Hunting",
    video: false,
    vote_average: 6.3,
    vote_count: 173,
  },
  {
    adult: false,
    backdrop_path: "/8mTX0AxwFmNHhMsSAZZAxt2OvEC.jpg",
    genre_ids: [18, 53, 35],
    id: 870518,
    original_language: "en",
    original_title: "Sanctuary",
    overview:
      "Confined to a claustrophobic hotel room, the heir to a hotel empire and the dominatrix who has primed him for success become locked in a battle of wits and wills as he tries to end his relationship with her.",
    popularity: 333.165,
    poster_path: "/mpVGR5tPhTmTiqSu8kvrSsNCQLl.jpg",
    release_date: "2023-04-06",
    title: "Sanctuary",
    video: false,
    vote_average: 7.1,
    vote_count: 22,
  },
  {
    adult: false,
    backdrop_path: "/6fYTLy4QE55BgMiHF3Co7bErjry.jpg",
    genre_ids: [10752, 53, 28, 12, 9648, 878, 18],
    id: 1018494,
    original_language: "en",
    original_title: "Operation Seawolf",
    overview:
      "During the last days of World War II, Germany, desperate for any last grasp to defeat the allied powers, looked to their last remaining weapons and soldiers. The German Navy and the last remaining U-Boats were formed together for one desperate last mission – a mission to attack the United States Homeland, known as Operation Seawolf. Captain Hans Kessler, a grizzled submarine commander from both World Wars, is called into service to make one mission a success and help turn the tide of the war.",
    popularity: 329.906,
    poster_path: "/eqm5EAyC9hJCN5qutuW4Ka1xYbU.jpg",
    release_date: "2022-10-07",
    title: "Operation Seawolf",
    video: false,
    vote_average: 6,
    vote_count: 61,
  },
  {
    adult: false,
    backdrop_path: "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
    genre_ids: [27, 9648, 53],
    id: 934433,
    original_language: "en",
    original_title: "Scream VI",
    overview:
      "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
    popularity: 324.997,
    poster_path: "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
    release_date: "2023-03-08",
    title: "Scream VI",
    video: false,
    vote_average: 7.2,
    vote_count: 1422,
  },
  {
    adult: false,
    backdrop_path: "/vW3bNeRwoCksOumNc87YlvLMcAr.jpg",
    genre_ids: [53, 27, 878],
    id: 1131438,
    original_language: "en",
    original_title: "Fear the Invisible Man",
    overview:
      "A young British widow shelters an old medical school colleague, a man who has somehow turned himself invisible. As his isolation grows and his sanity frays, he schemes to create a reign of wanton murder and terror across the city.",
    popularity: 318.828,
    poster_path: "/jobwUwGIKRS1NwdEjYGlk6Rao5H.jpg",
    release_date: "2023-06-13",
    title: "Fear the Invisible Man",
    video: false,
    vote_average: 7.1,
    vote_count: 14,
  },
  {
    adult: false,
    backdrop_path: "/u17VLZqWFbeJsj1HpvB6QOOHvlC.jpg",
    genre_ids: [14, 28, 12],
    id: 455476,
    original_language: "en",
    original_title: "Knights of the Zodiac",
    overview:
      "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
    popularity: 318.342,
    poster_path: "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
    release_date: "2023-04-27",
    title: "Knights of the Zodiac",
    video: false,
    vote_average: 6.4,
    vote_count: 147,
  },
  {
    adult: false,
    backdrop_path: "/zcySy6dnSmyqiichtDgO7AEeZoq.jpg",
    genre_ids: [28, 18, 53],
    id: 254128,
    original_language: "en",
    original_title: "San Andreas",
    overview:
      "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
    popularity: 316.309,
    poster_path: "/2Gfjn962aaFSD6eST6QU3oLDZTo.jpg",
    release_date: "2015-05-27",
    title: "San Andreas",
    video: false,
    vote_average: 6.2,
    vote_count: 7693,
  },
  {
    adult: false,
    backdrop_path: "/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    genre_ids: [28, 12, 878],
    id: 505642,
    original_language: "en",
    original_title: "Black Panther: Wakanda Forever",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    popularity: 312.306,
    poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    release_date: "2022-11-09",
    title: "Black Panther: Wakanda Forever",
    video: false,
    vote_average: 7.2,
    vote_count: 5067,
  },
  {
    adult: false,
    backdrop_path: "/a17F3zXnmuwqxfiDa46mtlosjrv.jpg",
    genre_ids: [16, 10751, 12, 35],
    id: 675445,
    original_language: "en",
    original_title: "PAW Patrol: The Movie",
    overview:
      "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.",
    popularity: 312.042,
    poster_path: "/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
    release_date: "2021-08-09",
    title: "PAW Patrol: The Movie",
    video: false,
    vote_average: 7.4,
    vote_count: 1121,
  },
  {
    adult: false,
    backdrop_path: "/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg",
    genre_ids: [27, 9648, 53],
    id: 423108,
    original_language: "en",
    original_title: "The Conjuring: The Devil Made Me Do It",
    overview:
      "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
    popularity: 305.886,
    poster_path: "/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
    release_date: "2021-05-25",
    title: "The Conjuring: The Devil Made Me Do It",
    video: false,
    vote_average: 7.5,
    vote_count: 5147,
  },
  {
    adult: false,
    backdrop_path: "/o5KcYYlE9v1dmwKvqAUdwerCqP2.jpg",
    genre_ids: [28, 18, 10752],
    id: 1098110,
    original_language: "de",
    original_title: "Blood & Gold",
    overview:
      "At the end of World War II, a German soldier is looking for his daughter while an SS troop is looking for a Jewish treasure.",
    popularity: 302.097,
    poster_path: "/oLRQP5cEjiT1DxeIHUYEV96Ijum.jpg",
    release_date: "2023-04-21",
    title: "Blood & Gold",
    video: false,
    vote_average: 6.6,
    vote_count: 209,
  },
  {
    adult: false,
    backdrop_path: "/qElNES0sHVQcbzvGrTx7ccpGzij.jpg",
    genre_ids: [878, 28, 18],
    id: 842675,
    original_language: "zh",
    original_title: "流浪地球2",
    overview:
      "Humans built huge engines on the surface of the earth to find a new home. But the road to the universe is perilous. In order to save earth, young people once again have to step forward to start a race against time for life and death.",
    popularity: 301.76,
    poster_path: "/pR858ihc6Ls9xohpdRJVjV787ml.jpg",
    release_date: "2023-01-22",
    title: "The Wandering Earth II",
    video: false,
    vote_average: 7.2,
    vote_count: 276,
  },
  {
    adult: false,
    backdrop_path: "/i1eghEBiC0gN4KnwuUGC2fNiX1f.jpg",
    genre_ids: [28, 53],
    id: 552688,
    original_language: "en",
    original_title: "The Mother",
    overview:
      "A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.",
    popularity: 299.449,
    poster_path: "/vnRthEZz16Q9VWcP5homkHxyHoy.jpg",
    release_date: "2023-05-04",
    title: "The Mother",
    video: false,
    vote_average: 6.8,
    vote_count: 841,
  },
  {
    adult: false,
    backdrop_path: "/jAmmb9RApuRckDJtYWeOgBUgQyG.jpg",
    genre_ids: [16, 28, 14, 878],
    id: 893712,
    original_language: "ja",
    original_title:
      "劇場版 ソードアート・オンライン -プログレッシブ- 冥き夕闇のスケルツォ",
    overview:
      'Over a month has passed since 10,000 users were trapped inside the "Sword Art Online" world. Asuna, who cleared the first floor of the floating iron castle of Aincrad, joined up with Kirito and continued her journey to reach the top floor. With the support of female Information Broker Argo, clearing the floors seemed to be progressing smoothly, but conflict erupts between two major guilds who should be working together – the top player groups ALS (the Aincrad Liberation Squad) and DKB (the Dragon Knights Brigade). And meanwhile, behind the scenes exists a mysterious figure pulling the strings…',
    popularity: 299.357,
    poster_path: "/2lEyzOq6ILNgBpLLpTRckQhbNNt.jpg",
    release_date: "2022-10-22",
    title: "Sword Art Online the Movie -Progressive- Scherzo of Deep Night",
    video: false,
    vote_average: 7.5,
    vote_count: 88,
  },
  {
    adult: false,
    backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    genre_ids: [28, 12, 878, 14],
    id: 436270,
    original_language: "en",
    original_title: "Black Adam",
    overview:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    popularity: 296.144,
    poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    release_date: "2022-10-19",
    title: "Black Adam",
    video: false,
    vote_average: 7.1,
    vote_count: 5117,
  },
  {
    adult: false,
    backdrop_path: "/4rsomWxlqnHt3muGYK06auhOib6.jpg",
    genre_ids: [18, 10749, 35],
    id: 818647,
    original_language: "es",
    original_title: "A través de mi ventana",
    overview:
      "Raquel's longtime crush on her next-door neighbor turns into something more when he starts developing feelings for her, despite his family's objections.",
    popularity: 294.251,
    poster_path: "/6gg7fvKc1ZxP9yCczweSxIGYp4S.jpg",
    release_date: "2022-02-04",
    title: "Through My Window",
    video: false,
    vote_average: 7.4,
    vote_count: 2674,
  },
  {
    adult: false,
    backdrop_path: "/PwI3EfasE9fVuXsmMu9ffJh0Re.jpg",
    genre_ids: [27, 9648, 53],
    id: 406563,
    original_language: "en",
    original_title: "Insidious: The Last Key",
    overview:
      "Parapsychologist Elise Rainier and her team travel to Five Keys, NM, to investigate a man’s claim of a haunting. Terror soon strikes when Rainier realizes that the house he lives in was her family’s old home.",
    popularity: 291.747,
    poster_path: "/nb9fc9INMg8kQ8L7sE7XTNsZnUX.jpg",
    release_date: "2018-01-03",
    title: "Insidious: The Last Key",
    video: false,
    vote_average: 6.2,
    vote_count: 2462,
  },
  {
    adult: false,
    backdrop_path: "/gFiPQZh6W2qEVKYnAQjtq66qJqI.jpg",
    genre_ids: [28, 53, 18],
    id: 1107872,
    original_language: "pl",
    original_title: "Dzień Matki",
    overview:
      "Nina, a former NATO special operations agent living in hiding, has to use all her deadly skills to rescue her son who has been kidnapped by ruthless gangsters. Finding Max is a double opportunity for her. A chance to feel the adrenaline rush again, and an opportunity to get back into the life of the son she had to abandon years ago.",
    popularity: 286.17,
    poster_path: "/wws9Z90DdZ7D0n3gdzFSZ6cntJi.jpg",
    release_date: "2023-05-24",
    title: "Mother's Day",
    video: false,
    vote_average: 5.8,
    vote_count: 135,
  },
  {
    adult: false,
    backdrop_path: "/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
    genre_ids: [28, 53],
    id: 545609,
    original_language: "en",
    original_title: "Extraction",
    overview:
      "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord.",
    popularity: 285.001,
    poster_path: "/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg",
    release_date: "2020-04-24",
    title: "Extraction",
    video: false,
    vote_average: 7.3,
    vote_count: 5225,
  },
  {
    adult: false,
    backdrop_path: "/ulaj7IhW72EK0cGSnMpP0UixTTC.jpg",
    genre_ids: [27, 53],
    id: 993867,
    original_language: "en",
    original_title: "Eradication",
    overview:
      "When an unknown disease wipes out most of the world’s population, a man with unique blood is isolated for study. Fearing for his wife’s safety, he breaks his quarantine – into a world overrun by monstrous Infected and a shadowy agency hunting them down.",
    popularity: 284.564,
    poster_path: "/6XZYA9VtCcidCU8Hus0J0V9wFhY.jpg",
    release_date: "2022-07-15",
    title: "Eradication",
    video: false,
    vote_average: 6.1,
    vote_count: 23,
  },
  {
    adult: false,
    backdrop_path: "/pDihgK7EGrSHZ4E5Wa8GkPaibXA.jpg",
    genre_ids: [28, 80, 53, 9648],
    id: 605886,
    original_language: "en",
    original_title: "Misanthrope",
    overview:
      "Baltimore. New Year's Eve. A talented but troubled police officer is recruited by the FBI's chief investigator to help profile and track down a mass murderer.",
    popularity: 283.655,
    poster_path: "/mFp3l4lZg1NSEsyxKrdi0rNK8r1.jpg",
    release_date: "2023-04-06",
    title: "To Catch a Killer",
    video: false,
    vote_average: 6.9,
    vote_count: 293,
  },
  {
    adult: false,
    backdrop_path: "/mfPfFVhpnGp8bG4IUoBJPUs2xKj.jpg",
    genre_ids: [878, 28, 12, 10751],
    id: 620705,
    original_language: "en",
    original_title: "Crater",
    overview:
      "After the death of his father, a boy growing up on a lunar mining colony takes a trip to explore a legendary crater, along with his four best friends, prior to being permanently relocated to another planet.",
    popularity: 280.57,
    poster_path: "/n8ZpMwYT02XjpQHpSxn1eJw5Zpz.jpg",
    release_date: "2023-05-12",
    title: "Crater",
    video: false,
    vote_average: 6.7,
    vote_count: 172,
  },
  {
    adult: false,
    backdrop_path: "/qbsSovCby02T5V97Hir5cgO8415.jpg",
    genre_ids: [10402, 10751, 35],
    id: 929569,
    original_language: "en",
    original_title: "World's Best",
    overview:
      "Twelve-year-old mathematics genius Prem discovers his recently deceased father was a famous rapper and immediately sets out to learn more about his father’s life and passions. Empowered by imaginative hip-hop music-fueled fantasies, Prem is determined to find out if hip-hop truly is in his DNA.",
    popularity: 280.445,
    poster_path: "/9xvEhZZMOmLIkqe4khrtF5TkOnO.jpg",
    release_date: "2023-06-23",
    title: "World's Best",
    video: false,
    vote_average: 7.5,
    vote_count: 6,
  },
  {
    adult: false,
    backdrop_path: "/5bJG7HaFogEqPEjRbOs8S0Szb4x.jpg",
    genre_ids: [16, 35, 10751],
    id: 8920,
    original_language: "en",
    original_title: "Garfield",
    overview:
      "Garfield, the fat, lazy, lasagna lover, has everything a cat could want. But when Jon, in an effort to impress the Liz - the vet and an old high-school crush - adopts a dog named Odie and brings him home, Garfield gets the one thing he doesn't want. Competition.",
    popularity: 273.755,
    poster_path: "/5hKlKh62yIR03XHZxwFs3EaIFfD.jpg",
    release_date: "2004-06-10",
    title: "Garfield",
    video: false,
    vote_average: 5.7,
    vote_count: 3494,
  },
  {
    adult: false,
    backdrop_path: "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    genre_ids: [12, 28, 878],
    id: 299536,
    original_language: "en",
    original_title: "Avengers: Infinity War",
    overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    popularity: 270.437,
    poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    release_date: "2018-04-25",
    title: "Avengers: Infinity War",
    video: false,
    vote_average: 8.3,
    vote_count: 27138,
  },
  {
    adult: false,
    backdrop_path: "/bqMWZ5hB7bcI1KK2TH29odwCgWX.jpg",
    genre_ids: [12, 14, 35],
    id: 493529,
    original_language: "en",
    original_title: "Dungeons & Dragons: Honor Among Thieves",
    overview:
      "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    popularity: 269.755,
    poster_path: "/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg",
    release_date: "2023-03-23",
    title: "Dungeons & Dragons: Honor Among Thieves",
    video: false,
    vote_average: 7.5,
    vote_count: 1805,
  },
  {
    adult: false,
    backdrop_path: "/aEdXevho4uBWoDQBIigIsKCFvCf.jpg",
    genre_ids: [18],
    id: 1127227,
    original_language: "tl",
    original_title: "Tayuan",
    overview:
      "Ella, an events project manager, usually takes a private transportation service. However, she is forced to take a bus, where bus conductor Rico becomes aroused when her body gets pressed into him due to the thick crowd. This encounter deeply affects Ella, and from that night on, she starts pursuing Rico. Even after discovering that Rico is already married with a daughter, Ella doesn’t care at all and she’ll do anything to make him want her just as much.",
    popularity: 266.736,
    poster_path: "/xoOgf4Grb5Kl2EeFacbuMUd5vJi.jpg",
    release_date: "2023-06-23",
    title: "Tayuan",
    video: false,
    vote_average: 10,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: "/ceYZCBfwbBwSpGJ6PapNVw5jqLG.jpg",
    genre_ids: [16, 18, 12, 14],
    id: 916224,
    original_language: "ja",
    original_title: "すずめの戸締まり",
    overview:
      "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.",
    popularity: 259.052,
    poster_path: "/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
    release_date: "2022-11-11",
    title: "Suzume",
    video: false,
    vote_average: 7.9,
    vote_count: 445,
  },
  {
    adult: false,
    backdrop_path: "/baE88dSR0byNAMDBk8HENkdDbt0.jpg",
    genre_ids: [27, 53],
    id: 1098160,
    original_language: "en",
    original_title: "The Tank",
    overview:
      "In 1978 Oregon, Ben and Jules inherit an abandoned coastal property from Ben's late mother, who's never mentioned it. The untouched house has been kept a secret for 40 years and comes with a beautiful private cove and beach. Jules searches for answers while Ben unwittingly awakens a fiercely protective creature.",
    popularity: 255.378,
    poster_path: "/2VxEtwgzOUukatl2IKGn4borpgE.jpg",
    release_date: "2023-04-21",
    title: "The Tank",
    video: false,
    vote_average: 5.1,
    vote_count: 37,
  },
  {
    adult: false,
    backdrop_path: "/ArKDl3GsFpSdDNFnXftNexuEVGF.jpg",
    genre_ids: [28, 12],
    id: 1073140,
    original_language: "en",
    original_title: "The Three Musketeers",
    overview:
      "France is in turmoil and a new, naive King finds himself manipulated by the evil Cardinal Richelieu. With a corrupt commander of the royal guard by his side the Cardinal employs the expertise of the devious and wicked Milady de Winter in a plot to bring down the monarchy and drag the country into war. As France burns the Cardinal will take control. All that stands between them and victory are the remnants of an elite group who wore loyalty to crown and country. Above all else The Musketeers will stand against the odds to foil this deadly plot.",
    popularity: 251.023,
    poster_path: "/l72yy6rPzsH8eHhEOknxlipkV95.jpg",
    release_date: "2023-03-23",
    title: "The Three Musketeers",
    video: false,
    vote_average: 5.6,
    vote_count: 42,
  },
  {
    adult: false,
    backdrop_path: "/jQbnhNvFQXO7jwLzdrceCTspEeI.jpg",
    genre_ids: [35],
    id: 346698,
    original_language: "en",
    original_title: "Barbie",
    overview:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    popularity: 247.262,
    poster_path: "/cgYg04miVQUAG2FKk3amSnnHzOp.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: "/tkwgbgEi6Cehqf4QhnwSXQfxTvY.jpg",
    genre_ids: [18, 10749],
    id: 419116,
    original_language: "ko",
    original_title: "러시아 엄마",
    overview:
      "Jang-ho who dreams of becoming a chef is pretty close to his dad Yeong-soo; enough to talk about his girlfriend and they live alone. One day, Yeong-soo tells Jang-ho that he's getting remarried to a Russian woman. Jang-ho accepts this and meets Olga. He is surprised to see a young and beautiful woman standing before him. A few days later, Yeong-soo goes to Russia on a business trip and Jang-ho and Olga get to know each other.",
    popularity: 246.254,
    poster_path: "/hktmN8qVDyzp3I9f7veWfF6l45c.jpg",
    release_date: "2016-07-28",
    title: "Russian Mom",
    video: false,
    vote_average: 5,
    vote_count: 15,
  },
  {
    adult: false,
    backdrop_path: "/8K9UjencUfDVS4nKFmSk4URSoeU.jpg",
    genre_ids: [53, 35, 80],
    id: 804150,
    original_language: "en",
    original_title: "Cocaine Bear",
    overview:
      "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
    popularity: 245.275,
    poster_path: "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
    release_date: "2023-02-22",
    title: "Cocaine Bear",
    video: false,
    vote_average: 6.3,
    vote_count: 1210,
  },
  {
    adult: false,
    backdrop_path: "/2lBOQK06tltt8SQaswgb8d657Mv.jpg",
    genre_ids: [10752, 18, 36],
    id: 530915,
    original_language: "en",
    original_title: "1917",
    overview:
      "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
    popularity: 242.703,
    poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    release_date: "2019-12-25",
    title: "1917",
    video: false,
    vote_average: 8,
    vote_count: 11138,
  },
  {
    adult: false,
    backdrop_path: "/bhUJAXZ5HVRfwwpeR7rPxEtmhqz.jpg",
    genre_ids: [28, 53],
    id: 1094319,
    original_language: "en",
    original_title: "The Best Man",
    overview:
      "Mercenaries seize control of a remote resort hotel during a wedding and it's up to the best man, the groom and their drunken best friend to stop the terrorists and save the hostages.",
    popularity: 235.553,
    poster_path: "/c9f6mFZqkyz4AD0sxGmynE1pe0v.jpg",
    release_date: "2023-04-21",
    title: "The Best Man",
    video: false,
    vote_average: 6,
    vote_count: 71,
  },
  {
    adult: false,
    backdrop_path: "/q0AQDPlUaE9OCr9JtuYk6trdwrr.jpg",
    genre_ids: [27, 53],
    id: 913673,
    original_language: "en",
    original_title: "Nefarious",
    overview:
      "On the day of his scheduled execution, a convicted serial killer gets a psychiatric evaluation during which he claims he is a demon, and further claims that before their time is over, the psychiatrist will commit three murders of his own.",
    popularity: 230.304,
    poster_path: "/xwjWUAajQJPj5aik1tounPguZbz.jpg",
    release_date: "2023-04-14",
    title: "Nefarious",
    video: false,
    vote_average: 6.6,
    vote_count: 43,
  },
  {
    adult: false,
    backdrop_path: "/u6bGwwMgQhcqQJKHASwN4PEcYyj.jpg",
    genre_ids: [80, 28, 53],
    id: 1129956,
    original_language: "en",
    original_title: "iNumber Number: Jozi Gold",
    overview:
      "When an undercover cop is tasked with investigating a historic gold heist in Johannesburg, he’s forced to choose between his conscience and the law.",
    popularity: 223.611,
    poster_path: "/8OkmwdxCZOVxvZq9OyDrIIKEoDK.jpg",
    release_date: "2023-06-23",
    title: "iNumber Number: Jozi Gold",
    video: false,
    vote_average: 6.3,
    vote_count: 8,
  },
  {
    adult: false,
    backdrop_path: "/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
    genre_ids: [28, 12, 53],
    id: 646389,
    original_language: "en",
    original_title: "Plane",
    overview:
      "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
    popularity: 222.088,
    poster_path: "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
    release_date: "2023-01-12",
    title: "Plane",
    video: false,
    vote_average: 6.9,
    vote_count: 1355,
  },
  {
    adult: false,
    backdrop_path: "/4soWZwLbJz1XDJ6Astk76uorvXA.jpg",
    genre_ids: [27],
    id: 1115710,
    original_language: "en",
    original_title: "The Mount 2",
    overview:
      "A year after the incident at the Mount, the police are still investigating the murders of Philomena and Caroline. The Mount has been cordoned off by the police. However, on Halloween night, a group of teenagers break in. They plan on holding a wedding between friends, conducted by a rather odd character, however, little did they know some unexpected guests would show up to crash the party.",
    popularity: 221.542,
    poster_path: "/cJpHTbHobMYzEyHTgSaCcjy4ELB.jpg",
    release_date: "2023-05-12",
    title: "The Mount 2",
    video: false,
    vote_average: 4.6,
    vote_count: 9,
  },
  {
    adult: false,
    backdrop_path: "/zPEDfWece7gg1I0904KFFVUq5mg.jpg",
    genre_ids: [53, 28, 80],
    id: 1102776,
    original_language: "fr",
    original_title: "AKA",
    overview:
      "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
    popularity: 218.572,
    poster_path: "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
    release_date: "2023-04-28",
    title: "AKA",
    video: false,
    vote_average: 7,
    vote_count: 385,
  },
  {
    adult: false,
    backdrop_path: "/jOkXeuLo4MBMpeoMa1ClAfTkxuI.jpg",
    genre_ids: [27, 9648, 53],
    id: 614479,
    original_language: "en",
    original_title: "Insidious: The Red Door",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    popularity: 218.333,
    poster_path: "/azTC5osYiqei1ofw6Z3GmUrxQbi.jpg",
    release_date: "2023-06-16",
    title: "Insidious: The Red Door",
    video: false,
    vote_average: 9.1,
    vote_count: 5,
  },
  {
    adult: false,
    backdrop_path: "/A077VsMIBBXNvlI5mohGnSiIrfI.jpg",
    genre_ids: [878, 27],
    id: 536554,
    original_language: "en",
    original_title: "M3GAN",
    overview:
      "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
    popularity: 216.703,
    poster_path: "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    release_date: "2022-12-28",
    title: "M3GAN",
    video: false,
    vote_average: 7.3,
    vote_count: 2818,
  },
  {
    adult: false,
    backdrop_path: "/aRVQ1EgTx3vbhK6qls2O834bPQc.jpg",
    genre_ids: [16, 10751],
    id: 11360,
    original_language: "en",
    original_title: "Dumbo",
    overview:
      "Dumbo is a baby elephant born with over-sized ears and a supreme lack of confidence. But thanks to his even more diminutive buddy Timothy the Mouse, the pint-sized pachyderm learns to surmount all obstacles.",
    popularity: 212.87,
    poster_path: "/4x9FmvdJ464Fg7A9XcbYSmxfVw3.jpg",
    release_date: "1941-10-31",
    title: "Dumbo",
    video: false,
    vote_average: 7,
    vote_count: 4485,
  },
  {
    adult: false,
    backdrop_path: "/3m3E7HU4l0y7iOCVSSly2UbCTuR.jpg",
    genre_ids: [18],
    id: 964819,
    original_language: "de",
    original_title: "99 Moons",
    overview:
      "Everything is under control, she thinks. Everything is lost, he thinks. And then they meet. And fall.",
    popularity: 211.171,
    poster_path: "/8hdVTMczTVcKEGgdL7ze5Xfor4n.jpg",
    release_date: "2023-04-27",
    title: "99 Moons",
    video: false,
    vote_average: 5.8,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: "/aonRCFac0K1HukgnzWE5N7DzpgR.jpg",
    genre_ids: [28, 12, 10752],
    id: 948713,
    original_language: "en",
    original_title: "The Last Kingdom: Seven Kings Must Die",
    overview:
      "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
    popularity: 210.735,
    poster_path: "/qcNDxDzd5OW9wE3c8nWxCBQoBrM.jpg",
    release_date: "2023-04-14",
    title: "The Last Kingdom: Seven Kings Must Die",
    video: false,
    vote_average: 7.3,
    vote_count: 448,
  },
  {
    adult: false,
    backdrop_path: "/wxr4Z6E83h14CogsZOzDm1vuDX3.jpg",
    genre_ids: [878, 28, 12],
    id: 91314,
    original_language: "en",
    original_title: "Transformers: Age of Extinction",
    overview:
      'As humanity picks up the pieces, following the conclusion of "Transformers: Dark of the Moon," Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.',
    popularity: 209.901,
    poster_path: "/jyzrfx2WaeY60kYZpPYepSjGz4S.jpg",
    release_date: "2014-06-25",
    title: "Transformers: Age of Extinction",
    video: false,
    vote_average: 5.9,
    vote_count: 7409,
  },
  {
    adult: false,
    backdrop_path: "/qAfGVKCOg1ueNFOA9KL85lo9zox.jpg",
    genre_ids: [10749, 18, 35],
    id: 1016121,
    original_language: "en",
    original_title: "Beautiful Disaster",
    overview:
      "Bad-boy Travis is exactly what college freshman Abby needs and wants to avoid. He spends his nights fighting in underground boxing matches, and his days as the ultimate college campus charmer. But Abby wants nothing to do with Travis. Intrigued by Abby’s resistance, Travis offers her a simple bet: if he loses his next fight, he must remain sex-free for a month. If he wins, Abby must live in his apartment for the same amount of time. Either way, Travis has no idea that Abby’s dark past is about to emerge, and he may have finally met his match.",
    popularity: 208.567,
    poster_path: "/bwdLflvCcOCRPqb1x13KPuYIzVx.jpg",
    release_date: "2023-04-04",
    title: "Beautiful Disaster",
    video: false,
    vote_average: 6.5,
    vote_count: 302,
  },
  {
    adult: false,
    backdrop_path: "/uH1cuq2hmZn5B4oiR9a1l4Wy91I.jpg",
    genre_ids: [35, 28, 18, 12],
    id: 931102,
    original_language: "zh",
    original_title: "龙马精神",
    overview:
      "A washed-up stuntman and his stunt horse become an overnight social media sensation when their real-life fight with debt collectors goes viral.",
    popularity: 208.156,
    poster_path: "/ukFo9pwVJ5mzTgmFCanYsYC4roF.jpg",
    release_date: "2023-04-07",
    title: "Ride On",
    video: false,
    vote_average: 7,
    vote_count: 68,
  },
  {
    adult: false,
    backdrop_path: "/ioCuhiUs0SW5UgembG0UiQZWPLY.jpg",
    genre_ids: [16, 10751, 14, 35],
    id: 1040148,
    original_language: "en",
    original_title: "Ruby Gillman, Teenage Kraken",
    overview:
      "A shy teenager discovers that she's part of a legendary royal lineage of mythical sea krakens and that her destiny, in the depths of the oceans, is bigger than she ever dreamed.",
    popularity: 205.595,
    poster_path: "/lotWiuWuTGlQ94rzBdy6ZmKZnTA.jpg",
    release_date: "2023-06-28",
    title: "Ruby Gillman, Teenage Kraken",
    video: false,
    vote_average: 7.4,
    vote_count: 4,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: 968580,
    original_language: "en",
    original_title: "Gabriel's Inferno: Part IV",
    overview: "",
    popularity: 204.612,
    poster_path: "/qRe0HIOrNCfCf0rM9qJneFEU0s8.jpg",
    release_date: "2022-03-30",
    title: "Gabriel's Inferno: Part IV",
    video: false,
    vote_average: 5,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: "/kOUZcN5qDPmDszKpNq4uxUeHA6v.jpg",
    genre_ids: [10749, 35],
    id: 561717,
    original_language: "en",
    original_title: "The Perfect Find",
    overview:
      "After a high-profile firing, Jenna’s fashion career comeback hits a snag when she falls for a charming, much younger coworker — who happens to be her boss’s son. As sparks fly, Jenna must decide if she’ll risk it all on a secret romance.",
    popularity: 202.448,
    poster_path: "/fZXturIugHYCl7T6oLeMj1AWm7p.jpg",
    release_date: "2023-06-23",
    title: "The Perfect Find",
    video: false,
    vote_average: 6.3,
    vote_count: 22,
  },
  {
    adult: false,
    backdrop_path: "/nCYzpKE283UHZKg7evcc4QO78js.jpg",
    genre_ids: [18],
    id: 764517,
    original_language: "es",
    original_title: "Trigal",
    overview:
      "During the summer, thirteen-year-old Sofia moves to the country house, where her cousin Cristina is waiting for her to spend the vacations. During these days of games and discoveries, the two will be immersed in a love triangle with a man almost twenty years older. Its outcome will mark the passage from puberty to adolescence for both of them.",
    popularity: 201.846,
    poster_path: "/s7hHt7uGV7U7P91C3e4exfWAPPr.jpg",
    release_date: "2022-10-25",
    title: "Wheatfield",
    video: false,
    vote_average: 7.3,
    vote_count: 22,
  },
  {
    adult: false,
    backdrop_path: "/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
    genre_ids: [10749, 18],
    id: 744276,
    original_language: "en",
    original_title: "After Ever Happy",
    overview:
      "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.",
    popularity: 197.074,
    poster_path: "/6b7swg6DLqXCO3XUsMnv6RwDMW2.jpg",
    release_date: "2022-08-24",
    title: "After Ever Happy",
    video: false,
    vote_average: 6.8,
    vote_count: 872,
  },
  {
    adult: false,
    backdrop_path: "/1xhcEecvRJXQ2OAVO7l9btlrN6D.jpg",
    genre_ids: [27, 878, 53],
    id: 667216,
    original_language: "en",
    original_title: "Infinity Pool",
    overview:
      "While staying at an isolated island resort, James and Em are enjoying a perfect vacation of pristine beaches, exceptional staff, and soaking up the sun. But guided by the seductive and mysterious Gabi, they venture outside the resort grounds and find themselves in a culture filled with violence, hedonism, and untold horror. A tragic accident leaves them facing a zero tolerance policy for crime: either you'll be executed, or, if you’re rich enough to afford it, you can watch yourself die instead.",
    popularity: 196.346,
    poster_path: "/5DNRr2juXdwtvktwXxwuk9Usk8O.jpg",
    release_date: "2023-01-27",
    title: "Infinity Pool",
    video: false,
    vote_average: 6.4,
    vote_count: 307,
  },
  {
    adult: false,
    backdrop_path: "/9pamTKugDIa1YQD8k280au3NVKd.jpg",
    genre_ids: [80, 35, 28],
    id: 38322,
    original_language: "en",
    original_title: "Big Mommas: Like Father, Like Son",
    overview:
      "FBI agent Malcolm Turner and his 17-year-old son, Trent, go undercover at an all-girls performing arts school after Trent witnesses a murder. Posing as Big Momma and Charmaine, they must find the murderer before he finds them.",
    popularity: 195.957,
    poster_path: "/n1GSxFcDaZ6lMVf21M0KloPfuhu.jpg",
    release_date: "2011-02-16",
    title: "Big Mommas: Like Father, Like Son",
    video: false,
    vote_average: 5.5,
    vote_count: 1102,
  },
  {
    adult: false,
    backdrop_path: "/hlxduUs8y9icWGMzYCDLcYHEQ2u.jpg",
    genre_ids: [53],
    id: 985939,
    original_language: "en",
    original_title: "Fall",
    overview:
      "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
    popularity: 194.835,
    poster_path: "/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
    release_date: "2022-08-11",
    title: "Fall",
    video: false,
    vote_average: 7.3,
    vote_count: 2984,
  },
  {
    adult: false,
    backdrop_path: "/pFqYDFHjbjF1suFF1fZv2ZbxahP.jpg",
    genre_ids: [35],
    id: 99361,
    original_language: "de",
    original_title: "Sechs Schwedinnen von der Tankstelle",
    overview:
      "A gas station becomes the center of social life in the village after six Swedish girls start working there.",
    popularity: 194.324,
    poster_path: "/hmlq4Zw1U4O7lCJZ6Fts18ZHlUR.jpg",
    release_date: "1980-09-19",
    title: "Six Swedish Girls at a Pump",
    video: false,
    vote_average: 6.7,
    vote_count: 18,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [28],
    id: 1077321,
    original_language: "zh",
    original_title: "苏乞儿之武功盖世",
    overview:
      "In the last years of the Qing Dynasty, Su Qier, the ten tigers of Guangdong, fought a decisive battle between the Ax Gang and the gangsters, and finally founded a school to spread martial arts.",
    popularity: 194.313,
    poster_path: "/pOHSYM8LUHc370q0QzR5tcfa0sR.jpg",
    release_date: "2023-01-01",
    title: "Drunken Fist",
    video: false,
    vote_average: 5.6,
    vote_count: 6,
  },
  {
    adult: false,
    backdrop_path: "/dssCw0mUmD4EriUmkwB3PnsGu4q.jpg",
    genre_ids: [16, 28, 14],
    id: 841755,
    original_language: "en",
    original_title: "Mortal Kombat Legends: Battle of the Realms",
    overview:
      "The Earthrealm heroes must journey to the Outworld and fight for the survival of their homeland, invaded by the forces of evil warlord Shao Kahn, in the tournament to end all tournaments: the final Mortal Kombat.",
    popularity: 192.8,
    poster_path: "/ablrE8IbWcIrAxMmm4gnPn75AMS.jpg",
    release_date: "2021-08-31",
    title: "Mortal Kombat Legends: Battle of the Realms",
    video: false,
    vote_average: 7.8,
    vote_count: 357,
  },
];

let container = document.getElementById("movies");

function show(array) {
  container.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const titulo = document.createElement("p");
    titulo.textContent = element.title;
    titulo.classList.add("title");
    overlay.appendChild(titulo);

    const poster = document.createElement("img");
    poster.src = `https:/image.tmdb.org/t/p/w185${element.poster_path}`;
    poster.setAttribute("alt", "Your text here");
    card.appendChild(poster);

    card.appendChild(overlay);
  }
}

/*BOTONES*/

/*español*/
console.log(onlyEspanol(movies));

function onlyEspanol(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.original_language == "es") {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_spa").onclick = function () {
  show(onlyEspanol(movies));
};

let allButtons = document.getElementsByClassName("btn");

for (let i = 0; i < allButtons.length; i++) {
  const element = allButtons[i];
  element.addEventListener("click", cambiarColor);
}

/*Ingles*/
console.log(onlyEnglish(movies));

function onlyEnglish(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.original_language == "en") {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_en").onclick = function () {
  show(onlyEnglish(movies));
};

/*Japones*/
console.log(onlyJapan(movies));

function onlyJapan(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.original_language == "ja") {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_jn").onclick = function () {
  show(onlyJapan(movies));
};

/*Mas votadas*/
console.log(onlyMvotes(movies));

function onlyMvotes(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.vote_count > 2141) {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_voted").onclick = function () {
  show(onlyMvotes(movies));
};

show(movies);

/*Popular*/
console.log(onlyPopular(movies));

function onlyPopular(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.popularity > 856.036) {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_pop").onclick = function () {
  show(onlyPopular(movies));
};

show(movies);

/*Animation*/
console.log(onlyAnim(movies));

function onlyAnim(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.genre_ids.includes(16)) {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_anim").onclick = function () {
  show(onlyAnim(movies));
};

show(movies);

/*LiveAction*/
console.log(onlyLaction(movies));

function onlyLaction(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.genre_ids != 16) {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_action").onclick = function () {
  show(onlyLaction(movies));
};

show(movies);

/*Recent*/
console.log(onlyRecent(movies));

function onlyRecent(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.release_date > "2023-01-01") {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_re").onclick = function () {
  show(onlyRecent(movies));
};

show(movies);

/*Comedy*/
console.log(onlyComedy(movies));

function onlyComedy(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.genre_ids.includes(35)) {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_com").onclick = function () {
  show(onlyComedy(movies));
};

show(movies);

/*Drama*/
console.log(onlyDrama(movies));

function onlyDrama(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.genre_ids.includes(18)) {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_dra").onclick = function () {
  show(onlyDrama(movies));
};

show(movies);

/*Action*/
console.log(onlyAction(movies));

function onlyAction(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.genre_ids.includes(28)) {
      output.push(element);
    }
  }

  return output;
}

document.getElementById("btn_mys").onclick = function () {
  show(onlyAction(movies));
};

show(movies);

document.getElementById("btn_all").onclick = function () {
  show(movies);
  resetButtonColors();
};

/*No seleccion*/
function resetButtonColors() {
  const allButtons = document.getElementsByClassName("btn");
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.backgroundColor = "";
  }
}

/* Cambio color boton*/
function cambiarColor(event) {
  const boton = event.target;
  const allButtons = document.getElementsByClassName("btn");

  for (let i = 0; i < allButtons.length; i++) {
    const currentButton = allButtons[i];
    if (currentButton === boton) {
      if (boton.style.backgroundColor === "red") {
        boton.style.backgroundColor = "";
        boton.style.borderColor = "";
      } else {
        boton.style.backgroundColor = "red";
        boton.style.borderColor = "red";
      }
    } else {
      currentButton.style.backgroundColor = "";
      currentButton.style.borderColor = "";
    }
  }
}
