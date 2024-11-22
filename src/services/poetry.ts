

export const getPoems = async () => {
  const response = await fetch(`https://poetrydb.org/poemcount/20`);
  const data = await response.json();
  console.log(data);
};

