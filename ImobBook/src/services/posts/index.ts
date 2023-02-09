const getAllPosts = async (): Promise<any> => {
  const result = await fetch("http://localhost:3000/posts", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err.message));

  return result;
};

export { getAllPosts };
