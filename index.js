module.exports = () => {
  const LoremIpsum = require("lorem-ipsum").LoremIpsum;

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  const offices = [
    "Dev. Jr",
    "Dev. Pl",
    "Dev. Sr",
    "RH",
    "Design",
    "Tech Lead",
    "QA",
    "Software Engineer",
    "infrastructure",
    "DevOps",
    "UI/UX",
    "Project Manager",
  ];

  const data = { users: [], comments: [], posts: [], likes: [] };

  const totalPosts = 2000;
  const totalComments = 3000;
  const totalLikes = 8000;
  const totalUsers = 1000;

  function generateRandomNumber(max = 100, min = 1) {
    const difference = max - min;

    const rand = Math.floor(Math.random() * difference);

    return rand + min;
  }

  const titleWords = 8;
  const bodyCommentsWords = 50;

  const generateRandomText = (totalWords) => {
    return lorem.generateWords(totalWords);
  };

  // Create 1000 users

  for (let i = 1; i <= totalUsers; i++) {
    const name = `user${i}`;

    const jobRole = offices[generateRandomNumber(offices.length, 0)];
    const phone = generateRandomNumber(999999999, 990000000);

    data.users.push({
      id: i,
      name: `${name} ${generateRandomText(2)}`,
      jobRole,
      phone: `17${phone}`,
      email: `${name}@email.com`,
    });
  }

  for (let i = 1; i <= totalPosts; i++) {
    data.posts.push({
      id: i,
      title: generateRandomText(titleWords),
      description: generateRandomText(bodyCommentsWords),
      userId: generateRandomNumber(totalUsers),
      image: "https://picsum.photos/400/600",
      totalLikes: 0,
    });
  }

  for (let i = 1; i <= totalComments; i++) {
    data.comments.push({
      id: i,
      body: generateRandomText(bodyCommentsWords),
      postId: generateRandomNumber(totalPosts),
      userId: generateRandomNumber(totalUsers),
    });
  }

  for (let i = 1; i <= totalLikes; i++) {
    const postId = generateRandomNumber(totalPosts);

    data.likes.push({
      id: i,
      postId: postId,
      userId: generateRandomNumber(totalUsers),
    });

    data.posts[postId - 1].totalLikes += 1;
  }

  return data;
};
